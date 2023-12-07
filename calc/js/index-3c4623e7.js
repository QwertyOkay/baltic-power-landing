function Sp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: ()=>r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function dc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function xp(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var pc = {
    exports: {}
}
  , ro = {}
  , mc = {
    exports: {}
}
  , F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element")
  , Ep = Symbol.for("react.portal")
  , Tp = Symbol.for("react.fragment")
  , Cp = Symbol.for("react.strict_mode")
  , kp = Symbol.for("react.profiler")
  , Pp = Symbol.for("react.provider")
  , _p = Symbol.for("react.context")
  , Op = Symbol.for("react.forward_ref")
  , zp = Symbol.for("react.suspense")
  , Np = Symbol.for("react.memo")
  , Mp = Symbol.for("react.lazy")
  , Fa = Symbol.iterator;
function Ip(e) {
    return e === null || typeof e != "object" ? null : (e = Fa && e[Fa] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var hc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , vc = Object.assign
  , gc = {};
function Bn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = gc,
    this.updater = n || hc
}
Bn.prototype.isReactComponent = {};
Bn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Bn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function yc() {}
yc.prototype = Bn.prototype;
function Ol(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = gc,
    this.updater = n || hc
}
var zl = Ol.prototype = new yc;
zl.constructor = Ol;
vc(zl, Bn.prototype);
zl.isPureReactComponent = !0;
var Da = Array.isArray
  , wc = Object.prototype.hasOwnProperty
  , Nl = {
    current: null
}
  , Sc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function xc(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            wc.call(t, r) && !Sc.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Ar,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Nl.current
    }
}
function Lp(e, t) {
    return {
        $$typeof: Ar,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ml(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ar
}
function Rp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Va = /\/+/g;
function Ho(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Rp("" + e.key) : t.toString(36)
}
function di(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ar:
            case Ep:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + Ho(s, 0) : r,
        Da(i) ? (n = "",
        e != null && (n = e.replace(Va, "$&/") + "/"),
        di(i, t, n, "", function(u) {
            return u
        })) : i != null && (Ml(i) && (i = Lp(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Va, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Da(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + Ho(o, a);
            s += di(o, t, n, l, i)
        }
    else if (l = Ip(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + Ho(o, a++),
            s += di(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Wr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return di(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function $p(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ce = {
    current: null
}
  , pi = {
    transition: null
}
  , jp = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: pi,
    ReactCurrentOwner: Nl
};
F.Children = {
    map: Wr,
    forEach: function(e, t, n) {
        Wr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Wr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Wr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ml(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = Bn;
F.Fragment = Tp;
F.Profiler = kp;
F.PureComponent = Ol;
F.StrictMode = Cp;
F.Suspense = zp;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jp;
F.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = vc({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = Nl.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            wc.call(t, l) && !Sc.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Ar,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
F.createContext = function(e) {
    return e = {
        $$typeof: _p,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Pp,
        _context: e
    },
    e.Consumer = e
}
;
F.createElement = xc;
F.createFactory = function(e) {
    var t = xc.bind(null, e);
    return t.type = e,
    t
}
;
F.createRef = function() {
    return {
        current: null
    }
}
;
F.forwardRef = function(e) {
    return {
        $$typeof: Op,
        render: e
    }
}
;
F.isValidElement = Ml;
F.lazy = function(e) {
    return {
        $$typeof: Mp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: $p
    }
}
;
F.memo = function(e, t) {
    return {
        $$typeof: Np,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
F.startTransition = function(e) {
    var t = pi.transition;
    pi.transition = {};
    try {
        e()
    } finally {
        pi.transition = t
    }
}
;
F.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
F.useCallback = function(e, t) {
    return Ce.current.useCallback(e, t)
}
;
F.useContext = function(e) {
    return Ce.current.useContext(e)
}
;
F.useDebugValue = function() {}
;
F.useDeferredValue = function(e) {
    return Ce.current.useDeferredValue(e)
}
;
F.useEffect = function(e, t) {
    return Ce.current.useEffect(e, t)
}
;
F.useId = function() {
    return Ce.current.useId()
}
;
F.useImperativeHandle = function(e, t, n) {
    return Ce.current.useImperativeHandle(e, t, n)
}
;
F.useInsertionEffect = function(e, t) {
    return Ce.current.useInsertionEffect(e, t)
}
;
F.useLayoutEffect = function(e, t) {
    return Ce.current.useLayoutEffect(e, t)
}
;
F.useMemo = function(e, t) {
    return Ce.current.useMemo(e, t)
}
;
F.useReducer = function(e, t, n) {
    return Ce.current.useReducer(e, t, n)
}
;
F.useRef = function(e) {
    return Ce.current.useRef(e)
}
;
F.useState = function(e) {
    return Ce.current.useState(e)
}
;
F.useSyncExternalStore = function(e, t, n) {
    return Ce.current.useSyncExternalStore(e, t, n)
}
;
F.useTransition = function() {
    return Ce.current.useTransition()
}
;
F.version = "18.2.0";
mc.exports = F;
var N = mc.exports;
const D = dc(N)
  , ba = Sp({
    __proto__: null,
    default: D
}, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ap = N
  , Fp = Symbol.for("react.element")
  , Dp = Symbol.for("react.fragment")
  , Vp = Object.prototype.hasOwnProperty
  , bp = Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Bp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ec(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Vp.call(t, r) && !Bp.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Fp,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: bp.current
    }
}
ro.Fragment = Dp;
ro.jsx = Ec;
ro.jsxs = Ec;
pc.exports = ro;
var O = pc.exports
  , ks = {}
  , Tc = {
    exports: {}
}
  , Fe = {}
  , Cc = {
    exports: {}
}
  , kc = {};
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
    function t(M, L) {
        var $ = M.length;
        M.push(L);
        e: for (; 0 < $; ) {
            var Q = $ - 1 >>> 1
              , ne = M[Q];
            if (0 < i(ne, L))
                M[Q] = L,
                M[$] = ne,
                $ = Q;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function r(M) {
        if (M.length === 0)
            return null;
        var L = M[0]
          , $ = M.pop();
        if ($ !== L) {
            M[0] = $;
            e: for (var Q = 0, ne = M.length, pn = ne >>> 1; Q < pn; ) {
                var Yt = 2 * (Q + 1) - 1
                  , Wo = M[Yt]
                  , Xt = Yt + 1
                  , Ur = M[Xt];
                if (0 > i(Wo, $))
                    Xt < ne && 0 > i(Ur, Wo) ? (M[Q] = Ur,
                    M[Xt] = $,
                    Q = Xt) : (M[Q] = Wo,
                    M[Yt] = $,
                    Q = Yt);
                else if (Xt < ne && 0 > i(Ur, $))
                    M[Q] = Ur,
                    M[Xt] = $,
                    Q = Xt;
                else
                    break e
            }
        }
        return L
    }
    function i(M, L) {
        var $ = M.sortIndex - L.sortIndex;
        return $ !== 0 ? $ : M.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , f = 1
      , p = null
      , h = 3
      , v = !1
      , y = !1
      , g = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , c = typeof clearTimeout == "function" ? clearTimeout : null
      , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(M) {
        for (var L = n(u); L !== null; ) {
            if (L.callback === null)
                r(u);
            else if (L.startTime <= M)
                r(u),
                L.sortIndex = L.expirationTime,
                t(l, L);
            else
                break;
            L = n(u)
        }
    }
    function w(M) {
        if (g = !1,
        m(M),
        !y)
            if (n(l) !== null)
                y = !0,
                Ct(x);
            else {
                var L = n(u);
                L !== null && Gt(w, L.startTime - M)
            }
    }
    function x(M, L) {
        y = !1,
        g && (g = !1,
        c(P),
        P = -1),
        v = !0;
        var $ = h;
        try {
            for (m(L),
            p = n(l); p !== null && (!(p.expirationTime > L) || M && !z()); ) {
                var Q = p.callback;
                if (typeof Q == "function") {
                    p.callback = null,
                    h = p.priorityLevel;
                    var ne = Q(p.expirationTime <= L);
                    L = e.unstable_now(),
                    typeof ne == "function" ? p.callback = ne : p === n(l) && r(l),
                    m(L)
                } else
                    r(l);
                p = n(l)
            }
            if (p !== null)
                var pn = !0;
            else {
                var Yt = n(u);
                Yt !== null && Gt(w, Yt.startTime - L),
                pn = !1
            }
            return pn
        } finally {
            p = null,
            h = $,
            v = !1
        }
    }
    var T = !1
      , S = null
      , P = -1
      , C = 5
      , j = -1;
    function z() {
        return !(e.unstable_now() - j < C)
    }
    function R() {
        if (S !== null) {
            var M = e.unstable_now();
            j = M;
            var L = !0;
            try {
                L = S(!0, M)
            } finally {
                L ? A() : (T = !1,
                S = null)
            }
        } else
            T = !1
    }
    var A;
    if (typeof d == "function")
        A = function() {
            d(R)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ve = new MessageChannel
          , Tt = ve.port2;
        ve.port1.onmessage = R,
        A = function() {
            Tt.postMessage(null)
        }
    } else
        A = function() {
            E(R, 0)
        }
        ;
    function Ct(M) {
        S = M,
        T || (T = !0,
        A())
    }
    function Gt(M, L) {
        P = E(function() {
            M(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || v || (y = !0,
        Ct(x))
    }
    ,
    e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(M) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var L = 3;
            break;
        default:
            L = h
        }
        var $ = h;
        h = L;
        try {
            return M()
        } finally {
            h = $
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(M, L) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var $ = h;
        h = M;
        try {
            return L()
        } finally {
            h = $
        }
    }
    ,
    e.unstable_scheduleCallback = function(M, L, $) {
        var Q = e.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
        $ = typeof $ == "number" && 0 < $ ? Q + $ : Q) : $ = Q,
        M) {
        case 1:
            var ne = -1;
            break;
        case 2:
            ne = 250;
            break;
        case 5:
            ne = 1073741823;
            break;
        case 4:
            ne = 1e4;
            break;
        default:
            ne = 5e3
        }
        return ne = $ + ne,
        M = {
            id: f++,
            callback: L,
            priorityLevel: M,
            startTime: $,
            expirationTime: ne,
            sortIndex: -1
        },
        $ > Q ? (M.sortIndex = $,
        t(u, M),
        n(l) === null && M === n(u) && (g ? (c(P),
        P = -1) : g = !0,
        Gt(w, $ - Q))) : (M.sortIndex = ne,
        t(l, M),
        y || v || (y = !0,
        Ct(x))),
        M
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(M) {
        var L = h;
        return function() {
            var $ = h;
            h = L;
            try {
                return M.apply(this, arguments)
            } finally {
                h = $
            }
        }
    }
}
)(kc);
Cc.exports = kc;
var Up = Cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc = N
  , Ae = Up;
function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var _c = new Set
  , vr = {};
function cn(e, t) {
    Rn(e, t),
    Rn(e + "Capture", t)
}
function Rn(e, t) {
    for (vr[e] = t,
    e = 0; e < t.length; e++)
        _c.add(t[e])
}
var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ps = Object.prototype.hasOwnProperty
  , Wp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Ba = {}
  , Ua = {};
function Hp(e) {
    return Ps.call(Ua, e) ? !0 : Ps.call(Ba, e) ? !1 : Wp.test(e) ? Ua[e] = !0 : (Ba[e] = !0,
    !1)
}
function Gp(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Yp(e, t, n, r) {
    if (t === null || typeof t > "u" || Gp(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ke(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    he[e] = new ke(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    he[t] = new ke(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    he[e] = new ke(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    he[e] = new ke(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    he[e] = new ke(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    he[e] = new ke(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    he[e] = new ke(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    he[e] = new ke(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    he[e] = new ke(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Il = /[\-:]([a-z])/g;
function Ll(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Il, Ll);
    he[t] = new ke(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Il, Ll);
    he[t] = new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Il, Ll);
    he[t] = new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    he[e] = new ke(e,1,!1,e.toLowerCase(),null,!1,!1)
});
he.xlinkHref = new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    he[e] = new ke(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Rl(e, t, n, r) {
    var i = he.hasOwnProperty(t) ? he[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yp(t, n, i, r) && (n = null),
    r || i === null ? Hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Et = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Hr = Symbol.for("react.element")
  , hn = Symbol.for("react.portal")
  , vn = Symbol.for("react.fragment")
  , $l = Symbol.for("react.strict_mode")
  , _s = Symbol.for("react.profiler")
  , Oc = Symbol.for("react.provider")
  , zc = Symbol.for("react.context")
  , jl = Symbol.for("react.forward_ref")
  , Os = Symbol.for("react.suspense")
  , zs = Symbol.for("react.suspense_list")
  , Al = Symbol.for("react.memo")
  , Pt = Symbol.for("react.lazy")
  , Nc = Symbol.for("react.offscreen")
  , Wa = Symbol.iterator;
function Gn(e) {
    return e === null || typeof e != "object" ? null : (e = Wa && e[Wa] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var J = Object.assign, Go;
function nr(e) {
    if (Go === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Go = t && t[1] || ""
        }
    return `
` + Go + e
}
var Yo = !1;
function Xo(e, t) {
    if (!e || Yo)
        return "";
    Yo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Yo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? nr(e) : ""
}
function Xp(e) {
    switch (e.tag) {
    case 5:
        return nr(e.type);
    case 16:
        return nr("Lazy");
    case 13:
        return nr("Suspense");
    case 19:
        return nr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Xo(e.type, !1),
        e;
    case 11:
        return e = Xo(e.type.render, !1),
        e;
    case 1:
        return e = Xo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ns(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case vn:
        return "Fragment";
    case hn:
        return "Portal";
    case _s:
        return "Profiler";
    case $l:
        return "StrictMode";
    case Os:
        return "Suspense";
    case zs:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case zc:
            return (e.displayName || "Context") + ".Consumer";
        case Oc:
            return (e._context.displayName || "Context") + ".Provider";
        case jl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Al:
            return t = e.displayName || null,
            t !== null ? t : Ns(e.type) || "Memo";
        case Pt:
            t = e._payload,
            e = e._init;
            try {
                return Ns(e(t))
            } catch {}
        }
    return null
}
function Qp(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return Ns(t);
    case 8:
        return t === $l ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function bt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Mc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Kp(e) {
    var t = Mc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Gr(e) {
    e._valueTracker || (e._valueTracker = Kp(e))
}
function Ic(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Mc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Oi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ms(e, t) {
    var n = t.checked;
    return J({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ha(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = bt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Lc(e, t) {
    t = t.checked,
    t != null && Rl(e, "checked", t, !1)
}
function Is(e, t) {
    Lc(e, t);
    var n = bt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ls(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ls(e, t.type, bt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ga(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ls(e, t, n) {
    (t !== "number" || Oi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var rr = Array.isArray;
function _n(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + bt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Rs(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(k(91));
    return J({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ya(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(k(92));
            if (rr(n)) {
                if (1 < n.length)
                    throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: bt(n)
    }
}
function Rc(e, t) {
    var n = bt(t.value)
      , r = bt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Xa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function $c(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function $s(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? $c(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Yr, jc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Yr = Yr || document.createElement("div"),
        Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Yr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function gr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var sr = {
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
}
  , qp = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function(e) {
    qp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        sr[t] = sr[e]
    })
});
function Ac(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || sr.hasOwnProperty(e) && sr[e] ? ("" + t).trim() : t + "px"
}
function Fc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Ac(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Zp = J({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function js(e, t) {
    if (t) {
        if (Zp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(k(62))
    }
}
function As(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var Fs = null;
function Fl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ds = null
  , On = null
  , zn = null;
function Qa(e) {
    if (e = Vr(e)) {
        if (typeof Ds != "function")
            throw Error(k(280));
        var t = e.stateNode;
        t && (t = ao(t),
        Ds(e.stateNode, e.type, t))
    }
}
function Dc(e) {
    On ? zn ? zn.push(e) : zn = [e] : On = e
}
function Vc() {
    if (On) {
        var e = On
          , t = zn;
        if (zn = On = null,
        Qa(e),
        t)
            for (e = 0; e < t.length; e++)
                Qa(t[e])
    }
}
function bc(e, t) {
    return e(t)
}
function Bc() {}
var Qo = !1;
function Uc(e, t, n) {
    if (Qo)
        return e(t, n);
    Qo = !0;
    try {
        return bc(e, t, n)
    } finally {
        Qo = !1,
        (On !== null || zn !== null) && (Bc(),
        Vc())
    }
}
function yr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ao(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(k(231, t, typeof n));
    return n
}
var Vs = !1;
if (yt)
    try {
        var Yn = {};
        Object.defineProperty(Yn, "passive", {
            get: function() {
                Vs = !0
            }
        }),
        window.addEventListener("test", Yn, Yn),
        window.removeEventListener("test", Yn, Yn)
    } catch {
        Vs = !1
    }
function Jp(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var lr = !1
  , zi = null
  , Ni = !1
  , bs = null
  , em = {
    onError: function(e) {
        lr = !0,
        zi = e
    }
};
function tm(e, t, n, r, i, o, s, a, l) {
    lr = !1,
    zi = null,
    Jp.apply(em, arguments)
}
function nm(e, t, n, r, i, o, s, a, l) {
    if (tm.apply(this, arguments),
    lr) {
        if (lr) {
            var u = zi;
            lr = !1,
            zi = null
        } else
            throw Error(k(198));
        Ni || (Ni = !0,
        bs = u)
    }
}
function fn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Wc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ka(e) {
    if (fn(e) !== e)
        throw Error(k(188))
}
function rm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = fn(e),
        t === null)
            throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Ka(i),
                    e;
                if (o === r)
                    return Ka(i),
                    t;
                o = o.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(k(189))
            }
        }
        if (n.alternate !== r)
            throw Error(k(190))
    }
    if (n.tag !== 3)
        throw Error(k(188));
    return n.stateNode.current === n ? e : t
}
function Hc(e) {
    return e = rm(e),
    e !== null ? Gc(e) : null
}
function Gc(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Gc(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Yc = Ae.unstable_scheduleCallback
  , qa = Ae.unstable_cancelCallback
  , im = Ae.unstable_shouldYield
  , om = Ae.unstable_requestPaint
  , te = Ae.unstable_now
  , sm = Ae.unstable_getCurrentPriorityLevel
  , Dl = Ae.unstable_ImmediatePriority
  , Xc = Ae.unstable_UserBlockingPriority
  , Mi = Ae.unstable_NormalPriority
  , lm = Ae.unstable_LowPriority
  , Qc = Ae.unstable_IdlePriority
  , io = null
  , at = null;
function am(e) {
    if (at && typeof at.onCommitFiberRoot == "function")
        try {
            at.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var et = Math.clz32 ? Math.clz32 : fm
  , um = Math.log
  , cm = Math.LN2;
function fm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (um(e) / cm | 0) | 0
}
var Xr = 64
  , Qr = 4194304;
function ir(e) {
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
        return e
    }
}
function Ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = ir(a) : (o &= s,
        o !== 0 && (r = ir(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = ir(s) : o !== 0 && (r = ir(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - et(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function dm(e, t) {
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
        return -1
    }
}
function pm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - et(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = dm(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function Bs(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Kc() {
    var e = Xr;
    return Xr <<= 1,
    !(Xr & 4194240) && (Xr = 64),
    e
}
function Ko(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Fr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - et(t),
    e[t] = n
}
function mm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - et(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Vl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - et(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var U = 0;
function qc(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Zc, bl, Jc, ef, tf, Us = !1, Kr = [], Lt = null, Rt = null, $t = null, wr = new Map, Sr = new Map, Ot = [], hm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Za(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Lt = null;
        break;
    case "dragenter":
    case "dragleave":
        Rt = null;
        break;
    case "mouseover":
    case "mouseout":
        $t = null;
        break;
    case "pointerover":
    case "pointerout":
        wr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Sr.delete(t.pointerId)
    }
}
function Xn(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Vr(t),
    t !== null && bl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function vm(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Lt = Xn(Lt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Rt = Xn(Rt, e, t, n, r, i),
        !0;
    case "mouseover":
        return $t = Xn($t, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return wr.set(o, Xn(wr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Sr.set(o, Xn(Sr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function nf(e) {
    var t = qt(e.target);
    if (t !== null) {
        var n = fn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Wc(n),
                t !== null) {
                    e.blockedOn = t,
                    tf(e.priority, function() {
                        Jc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function mi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Fs = r,
            n.target.dispatchEvent(r),
            Fs = null
        } else
            return t = Vr(n),
            t !== null && bl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ja(e, t, n) {
    mi(e) && n.delete(t)
}
function gm() {
    Us = !1,
    Lt !== null && mi(Lt) && (Lt = null),
    Rt !== null && mi(Rt) && (Rt = null),
    $t !== null && mi($t) && ($t = null),
    wr.forEach(Ja),
    Sr.forEach(Ja)
}
function Qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Us || (Us = !0,
    Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, gm)))
}
function xr(e) {
    function t(i) {
        return Qn(i, e)
    }
    if (0 < Kr.length) {
        Qn(Kr[0], e);
        for (var n = 1; n < Kr.length; n++) {
            var r = Kr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Lt !== null && Qn(Lt, e),
    Rt !== null && Qn(Rt, e),
    $t !== null && Qn($t, e),
    wr.forEach(t),
    Sr.forEach(t),
    n = 0; n < Ot.length; n++)
        r = Ot[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ot.length && (n = Ot[0],
    n.blockedOn === null); )
        nf(n),
        n.blockedOn === null && Ot.shift()
}
var Nn = Et.ReactCurrentBatchConfig
  , Li = !0;
function ym(e, t, n, r) {
    var i = U
      , o = Nn.transition;
    Nn.transition = null;
    try {
        U = 1,
        Bl(e, t, n, r)
    } finally {
        U = i,
        Nn.transition = o
    }
}
function wm(e, t, n, r) {
    var i = U
      , o = Nn.transition;
    Nn.transition = null;
    try {
        U = 4,
        Bl(e, t, n, r)
    } finally {
        U = i,
        Nn.transition = o
    }
}
function Bl(e, t, n, r) {
    if (Li) {
        var i = Ws(e, t, n, r);
        if (i === null)
            ss(e, t, r, Ri, n),
            Za(e, r);
        else if (vm(i, e, t, n, r))
            r.stopPropagation();
        else if (Za(e, r),
        t & 4 && -1 < hm.indexOf(e)) {
            for (; i !== null; ) {
                var o = Vr(i);
                if (o !== null && Zc(o),
                o = Ws(e, t, n, r),
                o === null && ss(e, t, r, Ri, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            ss(e, t, r, null, n)
    }
}
var Ri = null;
function Ws(e, t, n, r) {
    if (Ri = null,
    e = Fl(r),
    e = qt(e),
    e !== null)
        if (t = fn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Wc(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ri = e,
    null
}
function rf(e) {
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
        switch (sm()) {
        case Dl:
            return 1;
        case Xc:
            return 4;
        case Mi:
        case lm:
            return 16;
        case Qc:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Nt = null
  , Ul = null
  , hi = null;
function of() {
    if (hi)
        return hi;
    var e, t = Ul, n = t.length, r, i = "value"in Nt ? Nt.value : Nt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return hi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function vi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function qr() {
    return !0
}
function eu() {
    return !1
}
function De(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? qr : eu,
        this.isPropagationStopped = eu,
        this
    }
    return J(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = qr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = qr)
        },
        persist: function() {},
        isPersistent: qr
    }),
    t
}
var Un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Wl = De(Un), Dr = J({}, Un, {
    view: 0,
    detail: 0
}), Sm = De(Dr), qo, Zo, Kn, oo = J({}, Dr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (qo = e.screenX - Kn.screenX,
        Zo = e.screenY - Kn.screenY) : Zo = qo = 0,
        Kn = e),
        qo)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Zo
    }
}), tu = De(oo), xm = J({}, oo, {
    dataTransfer: 0
}), Em = De(xm), Tm = J({}, Dr, {
    relatedTarget: 0
}), Jo = De(Tm), Cm = J({}, Un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), km = De(Cm), Pm = J({}, Un, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), _m = De(Pm), Om = J({}, Un, {
    data: 0
}), nu = De(Om), zm = {
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
}, Nm = {
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
}, Mm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Im(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mm[e]) ? !!t[e] : !1
}
function Hl() {
    return Im
}
var Lm = J({}, Dr, {
    key: function(e) {
        if (e.key) {
            var t = zm[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = vi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nm[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hl,
    charCode: function(e) {
        return e.type === "keypress" ? vi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Rm = De(Lm)
  , $m = J({}, oo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , ru = De($m)
  , jm = J({}, Dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hl
})
  , Am = De(jm)
  , Fm = J({}, Un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Dm = De(Fm)
  , Vm = J({}, oo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , bm = De(Vm)
  , Bm = [9, 13, 27, 32]
  , Gl = yt && "CompositionEvent"in window
  , ar = null;
yt && "documentMode"in document && (ar = document.documentMode);
var Um = yt && "TextEvent"in window && !ar
  , sf = yt && (!Gl || ar && 8 < ar && 11 >= ar)
  , iu = String.fromCharCode(32)
  , ou = !1;
function lf(e, t) {
    switch (e) {
    case "keyup":
        return Bm.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function af(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var gn = !1;
function Wm(e, t) {
    switch (e) {
    case "compositionend":
        return af(t);
    case "keypress":
        return t.which !== 32 ? null : (ou = !0,
        iu);
    case "textInput":
        return e = t.data,
        e === iu && ou ? null : e;
    default:
        return null
    }
}
function Hm(e, t) {
    if (gn)
        return e === "compositionend" || !Gl && lf(e, t) ? (e = of(),
        hi = Ul = Nt = null,
        gn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return sf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Gm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gm[e.type] : t === "textarea"
}
function uf(e, t, n, r) {
    Dc(r),
    t = $i(t, "onChange"),
    0 < t.length && (n = new Wl("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ur = null
  , Er = null;
function Ym(e) {
    Sf(e, 0)
}
function so(e) {
    var t = Sn(e);
    if (Ic(t))
        return e
}
function Xm(e, t) {
    if (e === "change")
        return t
}
var cf = !1;
if (yt) {
    var es;
    if (yt) {
        var ts = "oninput"in document;
        if (!ts) {
            var lu = document.createElement("div");
            lu.setAttribute("oninput", "return;"),
            ts = typeof lu.oninput == "function"
        }
        es = ts
    } else
        es = !1;
    cf = es && (!document.documentMode || 9 < document.documentMode)
}
function au() {
    ur && (ur.detachEvent("onpropertychange", ff),
    Er = ur = null)
}
function ff(e) {
    if (e.propertyName === "value" && so(Er)) {
        var t = [];
        uf(t, Er, e, Fl(e)),
        Uc(Ym, t)
    }
}
function Qm(e, t, n) {
    e === "focusin" ? (au(),
    ur = t,
    Er = n,
    ur.attachEvent("onpropertychange", ff)) : e === "focusout" && au()
}
function Km(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return so(Er)
}
function qm(e, t) {
    if (e === "click")
        return so(t)
}
function Zm(e, t) {
    if (e === "input" || e === "change")
        return so(t)
}
function Jm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var nt = typeof Object.is == "function" ? Object.is : Jm;
function Tr(e, t) {
    if (nt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ps.call(t, i) || !nt(e[i], t[i]))
            return !1
    }
    return !0
}
function uu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function cu(e, t) {
    var n = uu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = uu(n)
    }
}
function df(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? df(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function pf() {
    for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Oi(e.document)
    }
    return t
}
function Yl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function e0(e) {
    var t = pf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && df(n.ownerDocument.documentElement, n)) {
        if (r !== null && Yl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = cu(n, o);
                var s = cu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var t0 = yt && "documentMode"in document && 11 >= document.documentMode
  , yn = null
  , Hs = null
  , cr = null
  , Gs = !1;
function fu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gs || yn == null || yn !== Oi(r) || (r = yn,
    "selectionStart"in r && Yl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    cr && Tr(cr, r) || (cr = r,
    r = $i(Hs, "onSelect"),
    0 < r.length && (t = new Wl("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yn)))
}
function Zr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var wn = {
    animationend: Zr("Animation", "AnimationEnd"),
    animationiteration: Zr("Animation", "AnimationIteration"),
    animationstart: Zr("Animation", "AnimationStart"),
    transitionend: Zr("Transition", "TransitionEnd")
}
  , ns = {}
  , mf = {};
yt && (mf = document.createElement("div").style,
"AnimationEvent"in window || (delete wn.animationend.animation,
delete wn.animationiteration.animation,
delete wn.animationstart.animation),
"TransitionEvent"in window || delete wn.transitionend.transition);
function lo(e) {
    if (ns[e])
        return ns[e];
    if (!wn[e])
        return e;
    var t = wn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in mf)
            return ns[e] = t[n];
    return e
}
var hf = lo("animationend")
  , vf = lo("animationiteration")
  , gf = lo("animationstart")
  , yf = lo("transitionend")
  , wf = new Map
  , du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ut(e, t) {
    wf.set(e, t),
    cn(t, [e])
}
for (var rs = 0; rs < du.length; rs++) {
    var is = du[rs]
      , n0 = is.toLowerCase()
      , r0 = is[0].toUpperCase() + is.slice(1);
    Ut(n0, "on" + r0)
}
Ut(hf, "onAnimationEnd");
Ut(vf, "onAnimationIteration");
Ut(gf, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(yf, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , i0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function pu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    nm(r, t, void 0, e),
    e.currentTarget = null
}
function Sf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    pu(i, a, u),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    pu(i, a, u),
                    o = l
                }
        }
    }
    if (Ni)
        throw e = bs,
        Ni = !1,
        bs = null,
        e
}
function Y(e, t) {
    var n = t[qs];
    n === void 0 && (n = t[qs] = new Set);
    var r = e + "__bubble";
    n.has(r) || (xf(t, e, 2, !1),
    n.add(r))
}
function os(e, t, n) {
    var r = 0;
    t && (r |= 4),
    xf(n, e, r, t)
}
var Jr = "_reactListening" + Math.random().toString(36).slice(2);
function Cr(e) {
    if (!e[Jr]) {
        e[Jr] = !0,
        _c.forEach(function(n) {
            n !== "selectionchange" && (i0.has(n) || os(n, !1, e),
            os(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Jr] || (t[Jr] = !0,
        os("selectionchange", !1, t))
    }
}
function xf(e, t, n, r) {
    switch (rf(t)) {
    case 1:
        var i = ym;
        break;
    case 4:
        i = wm;
        break;
    default:
        i = Bl
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Vs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function ss(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = qt(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Uc(function() {
        var u = o
          , f = Fl(n)
          , p = [];
        e: {
            var h = wf.get(e);
            if (h !== void 0) {
                var v = Wl
                  , y = e;
                switch (e) {
                case "keypress":
                    if (vi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Rm;
                    break;
                case "focusin":
                    y = "focus",
                    v = Jo;
                    break;
                case "focusout":
                    y = "blur",
                    v = Jo;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Jo;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = tu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Em;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Am;
                    break;
                case hf:
                case vf:
                case gf:
                    v = km;
                    break;
                case yf:
                    v = Dm;
                    break;
                case "scroll":
                    v = Sm;
                    break;
                case "wheel":
                    v = bm;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = _m;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = ru
                }
                var g = (t & 4) !== 0
                  , E = !g && e === "scroll"
                  , c = g ? h !== null ? h + "Capture" : null : h;
                g = [];
                for (var d = u, m; d !== null; ) {
                    m = d;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w,
                    c !== null && (w = yr(d, c),
                    w != null && g.push(kr(d, w, m)))),
                    E)
                        break;
                    d = d.return
                }
                0 < g.length && (h = new v(h,y,null,n,f),
                p.push({
                    event: h,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                h && n !== Fs && (y = n.relatedTarget || n.fromElement) && (qt(y) || y[wt]))
                    break e;
                if ((v || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window,
                v ? (y = n.relatedTarget || n.toElement,
                v = u,
                y = y ? qt(y) : null,
                y !== null && (E = fn(y),
                y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                y = u),
                v !== y)) {
                    if (g = tu,
                    w = "onMouseLeave",
                    c = "onMouseEnter",
                    d = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = ru,
                    w = "onPointerLeave",
                    c = "onPointerEnter",
                    d = "pointer"),
                    E = v == null ? h : Sn(v),
                    m = y == null ? h : Sn(y),
                    h = new g(w,d + "leave",v,n,f),
                    h.target = E,
                    h.relatedTarget = m,
                    w = null,
                    qt(f) === u && (g = new g(c,d + "enter",y,n,f),
                    g.target = m,
                    g.relatedTarget = E,
                    w = g),
                    E = w,
                    v && y)
                        t: {
                            for (g = v,
                            c = y,
                            d = 0,
                            m = g; m; m = mn(m))
                                d++;
                            for (m = 0,
                            w = c; w; w = mn(w))
                                m++;
                            for (; 0 < d - m; )
                                g = mn(g),
                                d--;
                            for (; 0 < m - d; )
                                c = mn(c),
                                m--;
                            for (; d--; ) {
                                if (g === c || c !== null && g === c.alternate)
                                    break t;
                                g = mn(g),
                                c = mn(c)
                            }
                            g = null
                        }
                    else
                        g = null;
                    v !== null && mu(p, h, v, g, !1),
                    y !== null && E !== null && mu(p, E, y, g, !0)
                }
            }
            e: {
                if (h = u ? Sn(u) : window,
                v = h.nodeName && h.nodeName.toLowerCase(),
                v === "select" || v === "input" && h.type === "file")
                    var x = Xm;
                else if (su(h))
                    if (cf)
                        x = Zm;
                    else {
                        x = Km;
                        var T = Qm
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = qm);
                if (x && (x = x(e, u))) {
                    uf(p, x, n, f);
                    break e
                }
                T && T(e, h, u),
                e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && Ls(h, "number", h.value)
            }
            switch (T = u ? Sn(u) : window,
            e) {
            case "focusin":
                (su(T) || T.contentEditable === "true") && (yn = T,
                Hs = u,
                cr = null);
                break;
            case "focusout":
                cr = Hs = yn = null;
                break;
            case "mousedown":
                Gs = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Gs = !1,
                fu(p, n, f);
                break;
            case "selectionchange":
                if (t0)
                    break;
            case "keydown":
            case "keyup":
                fu(p, n, f)
            }
            var S;
            if (Gl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                gn ? lf(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (sf && n.locale !== "ko" && (gn || P !== "onCompositionStart" ? P === "onCompositionEnd" && gn && (S = of()) : (Nt = f,
            Ul = "value"in Nt ? Nt.value : Nt.textContent,
            gn = !0)),
            T = $i(u, P),
            0 < T.length && (P = new nu(P,e,null,n,f),
            p.push({
                event: P,
                listeners: T
            }),
            S ? P.data = S : (S = af(n),
            S !== null && (P.data = S)))),
            (S = Um ? Wm(e, n) : Hm(e, n)) && (u = $i(u, "onBeforeInput"),
            0 < u.length && (f = new nu("onBeforeInput","beforeinput",null,n,f),
            p.push({
                event: f,
                listeners: u
            }),
            f.data = S))
        }
        Sf(p, t)
    })
}
function kr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function $i(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = yr(e, n),
        o != null && r.unshift(kr(e, o, i)),
        o = yr(e, t),
        o != null && r.push(kr(e, o, i))),
        e = e.return
    }
    return r
}
function mn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function mu(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = yr(n, o),
        l != null && s.unshift(kr(n, l, a))) : i || (l = yr(n, o),
        l != null && s.push(kr(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var o0 = /\r\n?/g
  , s0 = /\u0000|\uFFFD/g;
function hu(e) {
    return (typeof e == "string" ? e : "" + e).replace(o0, `
`).replace(s0, "")
}
function ei(e, t, n) {
    if (t = hu(t),
    hu(e) !== t && n)
        throw Error(k(425))
}
function ji() {}
var Ys = null
  , Xs = null;
function Qs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ks = typeof setTimeout == "function" ? setTimeout : void 0
  , l0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , vu = typeof Promise == "function" ? Promise : void 0
  , a0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof vu < "u" ? function(e) {
    return vu.resolve(null).then(e).catch(u0)
}
: Ks;
function u0(e) {
    setTimeout(function() {
        throw e
    })
}
function ls(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    xr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    xr(t)
}
function jt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function gu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Wn = Math.random().toString(36).slice(2)
  , lt = "__reactFiber$" + Wn
  , Pr = "__reactProps$" + Wn
  , wt = "__reactContainer$" + Wn
  , qs = "__reactEvents$" + Wn
  , c0 = "__reactListeners$" + Wn
  , f0 = "__reactHandles$" + Wn;
function qt(e) {
    var t = e[lt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[wt] || n[lt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = gu(e); e !== null; ) {
                    if (n = e[lt])
                        return n;
                    e = gu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Vr(e) {
    return e = e[lt] || e[wt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Sn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(k(33))
}
function ao(e) {
    return e[Pr] || null
}
var Zs = []
  , xn = -1;
function Wt(e) {
    return {
        current: e
    }
}
function X(e) {
    0 > xn || (e.current = Zs[xn],
    Zs[xn] = null,
    xn--)
}
function G(e, t) {
    xn++,
    Zs[xn] = e.current,
    e.current = t
}
var Bt = {}
  , xe = Wt(Bt)
  , Oe = Wt(!1)
  , rn = Bt;
function $n(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function ze(e) {
    return e = e.childContextTypes,
    e != null
}
function Ai() {
    X(Oe),
    X(xe)
}
function yu(e, t, n) {
    if (xe.current !== Bt)
        throw Error(k(168));
    G(xe, t),
    G(Oe, n)
}
function Ef(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(k(108, Qp(e) || "Unknown", i));
    return J({}, n, r)
}
function Fi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt,
    rn = xe.current,
    G(xe, e),
    G(Oe, Oe.current),
    !0
}
function wu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(k(169));
    n ? (e = Ef(e, t, rn),
    r.__reactInternalMemoizedMergedChildContext = e,
    X(Oe),
    X(xe),
    G(xe, e)) : X(Oe),
    G(Oe, n)
}
var pt = null
  , uo = !1
  , as = !1;
function Tf(e) {
    pt === null ? pt = [e] : pt.push(e)
}
function d0(e) {
    uo = !0,
    Tf(e)
}
function Ht() {
    if (!as && pt !== null) {
        as = !0;
        var e = 0
          , t = U;
        try {
            var n = pt;
            for (U = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            pt = null,
            uo = !1
        } catch (i) {
            throw pt !== null && (pt = pt.slice(e + 1)),
            Yc(Dl, Ht),
            i
        } finally {
            U = t,
            as = !1
        }
    }
    return null
}
var En = []
  , Tn = 0
  , Di = null
  , Vi = 0
  , Be = []
  , Ue = 0
  , on = null
  , mt = 1
  , ht = "";
function Qt(e, t) {
    En[Tn++] = Vi,
    En[Tn++] = Di,
    Di = e,
    Vi = t
}
function Cf(e, t, n) {
    Be[Ue++] = mt,
    Be[Ue++] = ht,
    Be[Ue++] = on,
    on = e;
    var r = mt;
    e = ht;
    var i = 32 - et(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - et(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        mt = 1 << 32 - et(t) + i | n << i | r,
        ht = o + e
    } else
        mt = 1 << o | n << i | r,
        ht = e
}
function Xl(e) {
    e.return !== null && (Qt(e, 1),
    Cf(e, 1, 0))
}
function Ql(e) {
    for (; e === Di; )
        Di = En[--Tn],
        En[Tn] = null,
        Vi = En[--Tn],
        En[Tn] = null;
    for (; e === on; )
        on = Be[--Ue],
        Be[Ue] = null,
        ht = Be[--Ue],
        Be[Ue] = null,
        mt = Be[--Ue],
        Be[Ue] = null
}
var $e = null
  , Re = null
  , K = !1
  , Je = null;
function kf(e, t) {
    var n = We(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Su(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        $e = e,
        Re = jt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        $e = e,
        Re = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = on !== null ? {
            id: mt,
            overflow: ht
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = We(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        $e = e,
        Re = null,
        !0) : !1;
    default:
        return !1
    }
}
function Js(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function el(e) {
    if (K) {
        var t = Re;
        if (t) {
            var n = t;
            if (!Su(e, t)) {
                if (Js(e))
                    throw Error(k(418));
                t = jt(n.nextSibling);
                var r = $e;
                t && Su(e, t) ? kf(r, n) : (e.flags = e.flags & -4097 | 2,
                K = !1,
                $e = e)
            }
        } else {
            if (Js(e))
                throw Error(k(418));
            e.flags = e.flags & -4097 | 2,
            K = !1,
            $e = e
        }
    }
}
function xu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    $e = e
}
function ti(e) {
    if (e !== $e)
        return !1;
    if (!K)
        return xu(e),
        K = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Qs(e.type, e.memoizedProps)),
    t && (t = Re)) {
        if (Js(e))
            throw Pf(),
            Error(k(418));
        for (; t; )
            kf(e, t),
            t = jt(t.nextSibling)
    }
    if (xu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(k(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Re = jt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Re = null
        }
    } else
        Re = $e ? jt(e.stateNode.nextSibling) : null;
    return !0
}
function Pf() {
    for (var e = Re; e; )
        e = jt(e.nextSibling)
}
function jn() {
    Re = $e = null,
    K = !1
}
function Kl(e) {
    Je === null ? Je = [e] : Je.push(e)
}
var p0 = Et.ReactCurrentBatchConfig;
function Ke(e, t) {
    if (e && e.defaultProps) {
        t = J({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var bi = Wt(null)
  , Bi = null
  , Cn = null
  , ql = null;
function Zl() {
    ql = Cn = Bi = null
}
function Jl(e) {
    var t = bi.current;
    X(bi),
    e._currentValue = t
}
function tl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Mn(e, t) {
    Bi = e,
    ql = Cn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0),
    e.firstContext = null)
}
function Ge(e) {
    var t = e._currentValue;
    if (ql !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Cn === null) {
            if (Bi === null)
                throw Error(k(308));
            Cn = e,
            Bi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Cn = Cn.next = e;
    return t
}
var Zt = null;
function ea(e) {
    Zt === null ? Zt = [e] : Zt.push(e)
}
function _f(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ea(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    St(e, r)
}
function St(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var _t = !1;
function ta(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Of(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    V & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        St(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ea(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    St(e, n)
}
function gi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Vl(e, n)
    }
}
function Eu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ui(e, t, n, r) {
    var i = e.updateQueue;
    _t = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? o = u : s.next = u,
        s = l;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        a = f.lastBaseUpdate,
        a !== s && (a === null ? f.firstBaseUpdate = u : a.next = u,
        f.lastBaseUpdate = l))
    }
    if (o !== null) {
        var p = i.baseState;
        s = 0,
        f = u = l = null,
        a = o;
        do {
            var h = a.lane
              , v = a.eventTime;
            if ((r & h) === h) {
                f !== null && (f = f.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , g = a;
                    switch (h = t,
                    v = n,
                    g.tag) {
                    case 1:
                        if (y = g.payload,
                        typeof y == "function") {
                            p = y.call(v, p, h);
                            break e
                        }
                        p = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = g.payload,
                        h = typeof y == "function" ? y.call(v, p, h) : y,
                        h == null)
                            break e;
                        p = J({}, p, h);
                        break e;
                    case 2:
                        _t = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                h = i.effects,
                h === null ? i.effects = [a] : h.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                f === null ? (u = f = v,
                l = p) : f = f.next = v,
                s |= h;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                i.lastBaseUpdate = h,
                i.shared.pending = null
            }
        } while (1);
        if (f === null && (l = p),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = f,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        ln |= s,
        e.lanes = s,
        e.memoizedState = p
    }
}
function Tu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(k(191, i));
                i.call(r)
            }
        }
}
var zf = new Pc.Component().refs;
function nl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : J({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var co = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? fn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te()
          , i = Dt(e)
          , o = gt(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = At(e, o, i),
        t !== null && (tt(t, e, i, r),
        gi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te()
          , i = Dt(e)
          , o = gt(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = At(e, o, i),
        t !== null && (tt(t, e, i, r),
        gi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Te()
          , r = Dt(e)
          , i = gt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = At(e, i, r),
        t !== null && (tt(t, e, r, n),
        gi(t, e, r))
    }
};
function Cu(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, r) || !Tr(i, o) : !0
}
function Nf(e, t, n) {
    var r = !1
      , i = Bt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ge(o) : (i = ze(t) ? rn : xe.current,
    r = t.contextTypes,
    o = (r = r != null) ? $n(e, i) : Bt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = co,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function ku(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && co.enqueueReplaceState(t, t.state, null)
}
function rl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = zf,
    ta(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Ge(o) : (o = ze(t) ? rn : xe.current,
    i.context = $n(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (nl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && co.enqueueReplaceState(i, i.state, null),
    Ui(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function qn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(k(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(k(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                a === zf && (a = i.refs = {}),
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(k(284));
        if (!n._owner)
            throw Error(k(290, e))
    }
    return e
}
function ni(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Pu(e) {
    var t = e._init;
    return t(e._payload)
}
function Mf(e) {
    function t(c, d) {
        if (e) {
            var m = c.deletions;
            m === null ? (c.deletions = [d],
            c.flags |= 16) : m.push(d)
        }
    }
    function n(c, d) {
        if (!e)
            return null;
        for (; d !== null; )
            t(c, d),
            d = d.sibling;
        return null
    }
    function r(c, d) {
        for (c = new Map; d !== null; )
            d.key !== null ? c.set(d.key, d) : c.set(d.index, d),
            d = d.sibling;
        return c
    }
    function i(c, d) {
        return c = Vt(c, d),
        c.index = 0,
        c.sibling = null,
        c
    }
    function o(c, d, m) {
        return c.index = m,
        e ? (m = c.alternate,
        m !== null ? (m = m.index,
        m < d ? (c.flags |= 2,
        d) : m) : (c.flags |= 2,
        d)) : (c.flags |= 1048576,
        d)
    }
    function s(c) {
        return e && c.alternate === null && (c.flags |= 2),
        c
    }
    function a(c, d, m, w) {
        return d === null || d.tag !== 6 ? (d = hs(m, c.mode, w),
        d.return = c,
        d) : (d = i(d, m),
        d.return = c,
        d)
    }
    function l(c, d, m, w) {
        var x = m.type;
        return x === vn ? f(c, d, m.props.children, w, m.key) : d !== null && (d.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pt && Pu(x) === d.type) ? (w = i(d, m.props),
        w.ref = qn(c, d, m),
        w.return = c,
        w) : (w = Ti(m.type, m.key, m.props, null, c.mode, w),
        w.ref = qn(c, d, m),
        w.return = c,
        w)
    }
    function u(c, d, m, w) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = vs(m, c.mode, w),
        d.return = c,
        d) : (d = i(d, m.children || []),
        d.return = c,
        d)
    }
    function f(c, d, m, w, x) {
        return d === null || d.tag !== 7 ? (d = tn(m, c.mode, w, x),
        d.return = c,
        d) : (d = i(d, m),
        d.return = c,
        d)
    }
    function p(c, d, m) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = hs("" + d, c.mode, m),
            d.return = c,
            d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case Hr:
                return m = Ti(d.type, d.key, d.props, null, c.mode, m),
                m.ref = qn(c, null, d),
                m.return = c,
                m;
            case hn:
                return d = vs(d, c.mode, m),
                d.return = c,
                d;
            case Pt:
                var w = d._init;
                return p(c, w(d._payload), m)
            }
            if (rr(d) || Gn(d))
                return d = tn(d, c.mode, m, null),
                d.return = c,
                d;
            ni(c, d)
        }
        return null
    }
    function h(c, d, m, w) {
        var x = d !== null ? d.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return x !== null ? null : a(c, d, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Hr:
                return m.key === x ? l(c, d, m, w) : null;
            case hn:
                return m.key === x ? u(c, d, m, w) : null;
            case Pt:
                return x = m._init,
                h(c, d, x(m._payload), w)
            }
            if (rr(m) || Gn(m))
                return x !== null ? null : f(c, d, m, w, null);
            ni(c, m)
        }
        return null
    }
    function v(c, d, m, w, x) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return c = c.get(m) || null,
            a(d, c, "" + w, x);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Hr:
                return c = c.get(w.key === null ? m : w.key) || null,
                l(d, c, w, x);
            case hn:
                return c = c.get(w.key === null ? m : w.key) || null,
                u(d, c, w, x);
            case Pt:
                var T = w._init;
                return v(c, d, m, T(w._payload), x)
            }
            if (rr(w) || Gn(w))
                return c = c.get(m) || null,
                f(d, c, w, x, null);
            ni(d, w)
        }
        return null
    }
    function y(c, d, m, w) {
        for (var x = null, T = null, S = d, P = d = 0, C = null; S !== null && P < m.length; P++) {
            S.index > P ? (C = S,
            S = null) : C = S.sibling;
            var j = h(c, S, m[P], w);
            if (j === null) {
                S === null && (S = C);
                break
            }
            e && S && j.alternate === null && t(c, S),
            d = o(j, d, P),
            T === null ? x = j : T.sibling = j,
            T = j,
            S = C
        }
        if (P === m.length)
            return n(c, S),
            K && Qt(c, P),
            x;
        if (S === null) {
            for (; P < m.length; P++)
                S = p(c, m[P], w),
                S !== null && (d = o(S, d, P),
                T === null ? x = S : T.sibling = S,
                T = S);
            return K && Qt(c, P),
            x
        }
        for (S = r(c, S); P < m.length; P++)
            C = v(S, c, P, m[P], w),
            C !== null && (e && C.alternate !== null && S.delete(C.key === null ? P : C.key),
            d = o(C, d, P),
            T === null ? x = C : T.sibling = C,
            T = C);
        return e && S.forEach(function(z) {
            return t(c, z)
        }),
        K && Qt(c, P),
        x
    }
    function g(c, d, m, w) {
        var x = Gn(m);
        if (typeof x != "function")
            throw Error(k(150));
        if (m = x.call(m),
        m == null)
            throw Error(k(151));
        for (var T = x = null, S = d, P = d = 0, C = null, j = m.next(); S !== null && !j.done; P++,
        j = m.next()) {
            S.index > P ? (C = S,
            S = null) : C = S.sibling;
            var z = h(c, S, j.value, w);
            if (z === null) {
                S === null && (S = C);
                break
            }
            e && S && z.alternate === null && t(c, S),
            d = o(z, d, P),
            T === null ? x = z : T.sibling = z,
            T = z,
            S = C
        }
        if (j.done)
            return n(c, S),
            K && Qt(c, P),
            x;
        if (S === null) {
            for (; !j.done; P++,
            j = m.next())
                j = p(c, j.value, w),
                j !== null && (d = o(j, d, P),
                T === null ? x = j : T.sibling = j,
                T = j);
            return K && Qt(c, P),
            x
        }
        for (S = r(c, S); !j.done; P++,
        j = m.next())
            j = v(S, c, P, j.value, w),
            j !== null && (e && j.alternate !== null && S.delete(j.key === null ? P : j.key),
            d = o(j, d, P),
            T === null ? x = j : T.sibling = j,
            T = j);
        return e && S.forEach(function(R) {
            return t(c, R)
        }),
        K && Qt(c, P),
        x
    }
    function E(c, d, m, w) {
        if (typeof m == "object" && m !== null && m.type === vn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Hr:
                e: {
                    for (var x = m.key, T = d; T !== null; ) {
                        if (T.key === x) {
                            if (x = m.type,
                            x === vn) {
                                if (T.tag === 7) {
                                    n(c, T.sibling),
                                    d = i(T, m.props.children),
                                    d.return = c,
                                    c = d;
                                    break e
                                }
                            } else if (T.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Pt && Pu(x) === T.type) {
                                n(c, T.sibling),
                                d = i(T, m.props),
                                d.ref = qn(c, T, m),
                                d.return = c,
                                c = d;
                                break e
                            }
                            n(c, T);
                            break
                        } else
                            t(c, T);
                        T = T.sibling
                    }
                    m.type === vn ? (d = tn(m.props.children, c.mode, w, m.key),
                    d.return = c,
                    c = d) : (w = Ti(m.type, m.key, m.props, null, c.mode, w),
                    w.ref = qn(c, d, m),
                    w.return = c,
                    c = w)
                }
                return s(c);
            case hn:
                e: {
                    for (T = m.key; d !== null; ) {
                        if (d.key === T)
                            if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                                n(c, d.sibling),
                                d = i(d, m.children || []),
                                d.return = c,
                                c = d;
                                break e
                            } else {
                                n(c, d);
                                break
                            }
                        else
                            t(c, d);
                        d = d.sibling
                    }
                    d = vs(m, c.mode, w),
                    d.return = c,
                    c = d
                }
                return s(c);
            case Pt:
                return T = m._init,
                E(c, d, T(m._payload), w)
            }
            if (rr(m))
                return y(c, d, m, w);
            if (Gn(m))
                return g(c, d, m, w);
            ni(c, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        d !== null && d.tag === 6 ? (n(c, d.sibling),
        d = i(d, m),
        d.return = c,
        c = d) : (n(c, d),
        d = hs(m, c.mode, w),
        d.return = c,
        c = d),
        s(c)) : n(c, d)
    }
    return E
}
var An = Mf(!0)
  , If = Mf(!1)
  , br = {}
  , ut = Wt(br)
  , _r = Wt(br)
  , Or = Wt(br);
function Jt(e) {
    if (e === br)
        throw Error(k(174));
    return e
}
function na(e, t) {
    switch (G(Or, t),
    G(_r, e),
    G(ut, br),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $s(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = $s(t, e)
    }
    X(ut),
    G(ut, t)
}
function Fn() {
    X(ut),
    X(_r),
    X(Or)
}
function Lf(e) {
    Jt(Or.current);
    var t = Jt(ut.current)
      , n = $s(t, e.type);
    t !== n && (G(_r, e),
    G(ut, n))
}
function ra(e) {
    _r.current === e && (X(ut),
    X(_r))
}
var q = Wt(0);
function Wi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var us = [];
function ia() {
    for (var e = 0; e < us.length; e++)
        us[e]._workInProgressVersionPrimary = null;
    us.length = 0
}
var yi = Et.ReactCurrentDispatcher
  , cs = Et.ReactCurrentBatchConfig
  , sn = 0
  , Z = null
  , oe = null
  , ae = null
  , Hi = !1
  , fr = !1
  , zr = 0
  , m0 = 0;
function ge() {
    throw Error(k(321))
}
function oa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!nt(e[n], t[n]))
            return !1;
    return !0
}
function sa(e, t, n, r, i, o) {
    if (sn = o,
    Z = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    yi.current = e === null || e.memoizedState === null ? y0 : w0,
    e = n(r, i),
    fr) {
        o = 0;
        do {
            if (fr = !1,
            zr = 0,
            25 <= o)
                throw Error(k(301));
            o += 1,
            ae = oe = null,
            t.updateQueue = null,
            yi.current = S0,
            e = n(r, i)
        } while (fr)
    }
    if (yi.current = Gi,
    t = oe !== null && oe.next !== null,
    sn = 0,
    ae = oe = Z = null,
    Hi = !1,
    t)
        throw Error(k(300));
    return e
}
function la() {
    var e = zr !== 0;
    return zr = 0,
    e
}
function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ae === null ? Z.memoizedState = ae = e : ae = ae.next = e,
    ae
}
function Ye() {
    if (oe === null) {
        var e = Z.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = oe.next;
    var t = ae === null ? Z.memoizedState : ae.next;
    if (t !== null)
        ae = t,
        oe = e;
    else {
        if (e === null)
            throw Error(k(310));
        oe = e,
        e = {
            memoizedState: oe.memoizedState,
            baseState: oe.baseState,
            baseQueue: oe.baseQueue,
            queue: oe.queue,
            next: null
        },
        ae === null ? Z.memoizedState = ae = e : ae = ae.next = e
    }
    return ae
}
function Nr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function fs(e) {
    var t = Ye()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = oe
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = o;
        do {
            var f = u.lane;
            if ((sn & f) === f)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = p,
                s = r) : l = l.next = p,
                Z.lanes |= f,
                ln |= f
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
        nt(r, t.memoizedState) || (_e = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            Z.lanes |= o,
            ln |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ds(e) {
    var t = Ye()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        nt(o, t.memoizedState) || (_e = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Rf() {}
function $f(e, t) {
    var n = Z
      , r = Ye()
      , i = t()
      , o = !nt(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    _e = !0),
    r = r.queue,
    aa(Ff.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || ae !== null && ae.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Mr(9, Af.bind(null, n, r, i, t), void 0, null),
        ce === null)
            throw Error(k(349));
        sn & 30 || jf(n, t, i)
    }
    return i
}
function jf(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Af(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Df(t) && Vf(e)
}
function Ff(e, t, n) {
    return n(function() {
        Df(t) && Vf(e)
    })
}
function Df(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nt(e, n)
    } catch {
        return !0
    }
}
function Vf(e) {
    var t = St(e, 1);
    t !== null && tt(t, e, 1, -1)
}
function _u(e) {
    var t = it();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = g0.bind(null, Z, e),
    [t.memoizedState, e]
}
function Mr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function bf() {
    return Ye().memoizedState
}
function wi(e, t, n, r) {
    var i = it();
    Z.flags |= e,
    i.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r)
}
function fo(e, t, n, r) {
    var i = Ye();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (oe !== null) {
        var s = oe.memoizedState;
        if (o = s.destroy,
        r !== null && oa(r, s.deps)) {
            i.memoizedState = Mr(t, n, o, r);
            return
        }
    }
    Z.flags |= e,
    i.memoizedState = Mr(1 | t, n, o, r)
}
function Ou(e, t) {
    return wi(8390656, 8, e, t)
}
function aa(e, t) {
    return fo(2048, 8, e, t)
}
function Bf(e, t) {
    return fo(4, 2, e, t)
}
function Uf(e, t) {
    return fo(4, 4, e, t)
}
function Wf(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Hf(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    fo(4, 4, Wf.bind(null, t, e), n)
}
function ua() {}
function Gf(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && oa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Yf(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && oa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Xf(e, t, n) {
    return sn & 21 ? (nt(n, t) || (n = Kc(),
    Z.lanes |= n,
    ln |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    _e = !0),
    e.memoizedState = n)
}
function h0(e, t) {
    var n = U;
    U = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = cs.transition;
    cs.transition = {};
    try {
        e(!1),
        t()
    } finally {
        U = n,
        cs.transition = r
    }
}
function Qf() {
    return Ye().memoizedState
}
function v0(e, t, n) {
    var r = Dt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Kf(e))
        qf(t, n);
    else if (n = _f(e, t, n, r),
    n !== null) {
        var i = Te();
        tt(n, e, r, i),
        Zf(n, t, r)
    }
}
function g0(e, t, n) {
    var r = Dt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Kf(e))
        qf(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                nt(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    ea(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = _f(e, t, i, r),
        n !== null && (i = Te(),
        tt(n, e, r, i),
        Zf(n, t, r))
    }
}
function Kf(e) {
    var t = e.alternate;
    return e === Z || t !== null && t === Z
}
function qf(e, t) {
    fr = Hi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Zf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Vl(e, n)
    }
}
var Gi = {
    readContext: Ge,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1
}
  , y0 = {
    readContext: Ge,
    useCallback: function(e, t) {
        return it().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ge,
    useEffect: Ou,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        wi(4194308, 4, Wf.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return wi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return wi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = it();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = it();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = v0.bind(null, Z, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = it();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: _u,
    useDebugValue: ua,
    useDeferredValue: function(e) {
        return it().memoizedState = e
    },
    useTransition: function() {
        var e = _u(!1)
          , t = e[0];
        return e = h0.bind(null, e[1]),
        it().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Z
          , i = it();
        if (K) {
            if (n === void 0)
                throw Error(k(407));
            n = n()
        } else {
            if (n = t(),
            ce === null)
                throw Error(k(349));
            sn & 30 || jf(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Ou(Ff.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Mr(9, Af.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = it()
          , t = ce.identifierPrefix;
        if (K) {
            var n = ht
              , r = mt;
            n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = zr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = m0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , w0 = {
    readContext: Ge,
    useCallback: Gf,
    useContext: Ge,
    useEffect: aa,
    useImperativeHandle: Hf,
    useInsertionEffect: Bf,
    useLayoutEffect: Uf,
    useMemo: Yf,
    useReducer: fs,
    useRef: bf,
    useState: function() {
        return fs(Nr)
    },
    useDebugValue: ua,
    useDeferredValue: function(e) {
        var t = Ye();
        return Xf(t, oe.memoizedState, e)
    },
    useTransition: function() {
        var e = fs(Nr)[0]
          , t = Ye().memoizedState;
        return [e, t]
    },
    useMutableSource: Rf,
    useSyncExternalStore: $f,
    useId: Qf,
    unstable_isNewReconciler: !1
}
  , S0 = {
    readContext: Ge,
    useCallback: Gf,
    useContext: Ge,
    useEffect: aa,
    useImperativeHandle: Hf,
    useInsertionEffect: Bf,
    useLayoutEffect: Uf,
    useMemo: Yf,
    useReducer: ds,
    useRef: bf,
    useState: function() {
        return ds(Nr)
    },
    useDebugValue: ua,
    useDeferredValue: function(e) {
        var t = Ye();
        return oe === null ? t.memoizedState = e : Xf(t, oe.memoizedState, e)
    },
    useTransition: function() {
        var e = ds(Nr)[0]
          , t = Ye().memoizedState;
        return [e, t]
    },
    useMutableSource: Rf,
    useSyncExternalStore: $f,
    useId: Qf,
    unstable_isNewReconciler: !1
};
function Dn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Xp(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ps(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function il(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var x0 = typeof WeakMap == "function" ? WeakMap : Map;
function Jf(e, t, n) {
    n = gt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Xi || (Xi = !0,
        ml = r),
        il(e, t)
    }
    ,
    n
}
function ed(e, t, n) {
    n = gt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            il(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        il(e, t),
        typeof r != "function" && (Ft === null ? Ft = new Set([this]) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function zu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new x0;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = $0.bind(null, e, t, n),
    t.then(e, e))
}
function Nu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Mu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1),
    t.tag = 2,
    At(n, t, 1))),
    n.lanes |= 1),
    e)
}
var E0 = Et.ReactCurrentOwner
  , _e = !1;
function Ee(e, t, n, r) {
    t.child = e === null ? If(t, null, n, r) : An(t, e.child, n, r)
}
function Iu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Mn(t, i),
    r = sa(e, t, n, r, o, i),
    n = la(),
    e !== null && !_e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    xt(e, t, i)) : (K && n && Xl(t),
    t.flags |= 1,
    Ee(e, t, r, i),
    t.child)
}
function Lu(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ga(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        td(e, t, o, r, i)) : (e = Ti(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Tr,
        n(s, r) && e.ref === t.ref)
            return xt(e, t, i)
    }
    return t.flags |= 1,
    e = Vt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function td(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Tr(o, r) && e.ref === t.ref)
            if (_e = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (_e = !0);
            else
                return t.lanes = e.lanes,
                xt(e, t, i)
    }
    return ol(e, t, n, r, i)
}
function nd(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            G(Pn, Ie),
            Ie |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                G(Pn, Ie),
                Ie |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            G(Pn, Ie),
            Ie |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        G(Pn, Ie),
        Ie |= r;
    return Ee(e, t, i, n),
    t.child
}
function rd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ol(e, t, n, r, i) {
    var o = ze(n) ? rn : xe.current;
    return o = $n(t, o),
    Mn(t, i),
    n = sa(e, t, n, r, o, i),
    r = la(),
    e !== null && !_e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    xt(e, t, i)) : (K && r && Xl(t),
    t.flags |= 1,
    Ee(e, t, n, i),
    t.child)
}
function Ru(e, t, n, r, i) {
    if (ze(n)) {
        var o = !0;
        Fi(t)
    } else
        o = !1;
    if (Mn(t, i),
    t.stateNode === null)
        Si(e, t),
        Nf(t, n, r),
        rl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Ge(u) : (u = ze(n) ? rn : xe.current,
        u = $n(t, u));
        var f = n.getDerivedStateFromProps
          , p = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && ku(t, s, r, u),
        _t = !1;
        var h = t.memoizedState;
        s.state = h,
        Ui(t, r, s, i),
        l = t.memoizedState,
        a !== r || h !== l || Oe.current || _t ? (typeof f == "function" && (nl(t, n, f, r),
        l = t.memoizedState),
        (a = _t || Cu(t, n, a, r, h, l, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Of(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Ke(t.type, a),
        s.props = u,
        p = t.pendingProps,
        h = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Ge(l) : (l = ze(n) ? rn : xe.current,
        l = $n(t, l));
        var v = n.getDerivedStateFromProps;
        (f = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== p || h !== l) && ku(t, s, r, l),
        _t = !1,
        h = t.memoizedState,
        s.state = h,
        Ui(t, r, s, i);
        var y = t.memoizedState;
        a !== p || h !== y || Oe.current || _t ? (typeof v == "function" && (nl(t, n, v, r),
        y = t.memoizedState),
        (u = _t || Cu(t, n, u, r, h, y, l) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        s.props = r,
        s.state = y,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return sl(e, t, n, r, o, i)
}
function sl(e, t, n, r, i, o) {
    rd(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && wu(t, n, !1),
        xt(e, t, o);
    r = t.stateNode,
    E0.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = An(t, e.child, null, o),
    t.child = An(t, null, a, o)) : Ee(e, t, a, o),
    t.memoizedState = r.state,
    i && wu(t, n, !0),
    t.child
}
function id(e) {
    var t = e.stateNode;
    t.pendingContext ? yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yu(e, t.context, !1),
    na(e, t.containerInfo)
}
function $u(e, t, n, r, i) {
    return jn(),
    Kl(i),
    t.flags |= 256,
    Ee(e, t, n, r),
    t.child
}
var ll = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function al(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function od(e, t, n) {
    var r = t.pendingProps, i = q.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    G(q, i & 1),
    e === null)
        return el(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = ho(s, r, 0, null),
        e = tn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = al(n),
        t.memoizedState = ll,
        e) : ca(t, s));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return T0(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Vt(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = Vt(a, o) : (o = tn(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? al(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = ll,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Vt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ca(e, t) {
    return t = ho({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ri(e, t, n, r) {
    return r !== null && Kl(r),
    An(t, e.child, null, n),
    e = ca(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function T0(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ps(Error(k(422))),
        ri(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = ho({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = tn(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && An(t, e.child, null, s),
        t.child.memoizedState = al(s),
        t.memoizedState = ll,
        o);
    if (!(t.mode & 1))
        return ri(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(k(419)),
        r = ps(o, r, void 0),
        ri(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    _e || a) {
        if (r = ce,
        r !== null) {
            switch (s & -s) {
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
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            St(e, i),
            tt(r, e, i, -1))
        }
        return va(),
        r = ps(Error(k(421))),
        ri(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = j0.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Re = jt(i.nextSibling),
    $e = t,
    K = !0,
    Je = null,
    e !== null && (Be[Ue++] = mt,
    Be[Ue++] = ht,
    Be[Ue++] = on,
    mt = e.id,
    ht = e.overflow,
    on = t),
    t = ca(t, r.children),
    t.flags |= 4096,
    t)
}
function ju(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    tl(e.return, t, n)
}
function ms(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function sd(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Ee(e, t, r.children, n),
    r = q.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ju(e, n, t);
                else if (e.tag === 19)
                    ju(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (G(q, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Wi(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ms(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Wi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ms(t, !0, n, null, o);
            break;
        case "together":
            ms(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Si(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function xt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ln |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Vt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Vt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function C0(e, t, n) {
    switch (t.tag) {
    case 3:
        id(t),
        jn();
        break;
    case 5:
        Lf(t);
        break;
    case 1:
        ze(t.type) && Fi(t);
        break;
    case 4:
        na(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        G(bi, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (G(q, q.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? od(e, t, n) : (G(q, q.current & 1),
            e = xt(e, t, n),
            e !== null ? e.sibling : null);
        G(q, q.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return sd(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        G(q, q.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        nd(e, t, n)
    }
    return xt(e, t, n)
}
var ld, ul, ad, ud;
ld = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ul = function() {}
;
ad = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Jt(ut.current);
        var o = null;
        switch (n) {
        case "input":
            i = Ms(e, i),
            r = Ms(e, r),
            o = [];
            break;
        case "select":
            i = J({}, i, {
                value: void 0
            }),
            r = J({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Rs(e, i),
            r = Rs(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ji)
        }
        js(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (vr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (vr.hasOwnProperty(u) ? (l != null && u === "onScroll" && Y("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ud = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Zn(e, t) {
    if (!K)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function k0(e, t, n) {
    var r = t.pendingProps;
    switch (Ql(t),
    t.tag) {
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
        return ye(t),
        null;
    case 1:
        return ze(t.type) && Ai(),
        ye(t),
        null;
    case 3:
        return r = t.stateNode,
        Fn(),
        X(Oe),
        X(xe),
        ia(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Je !== null && (gl(Je),
        Je = null))),
        ul(e, t),
        ye(t),
        null;
    case 5:
        ra(t);
        var i = Jt(Or.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            ad(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(k(166));
                return ye(t),
                null
            }
            if (e = Jt(ut.current),
            ti(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[lt] = t,
                r[Pr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Y("cancel", r),
                    Y("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Y("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < or.length; i++)
                        Y(or[i], r);
                    break;
                case "source":
                    Y("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Y("error", r),
                    Y("load", r);
                    break;
                case "details":
                    Y("toggle", r);
                    break;
                case "input":
                    Ha(r, o),
                    Y("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    Y("invalid", r);
                    break;
                case "textarea":
                    Ya(r, o),
                    Y("invalid", r)
                }
                js(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ei(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ei(r.textContent, a, e),
                        i = ["children", "" + a]) : vr.hasOwnProperty(s) && a != null && s === "onScroll" && Y("scroll", r)
                    }
                switch (n) {
                case "input":
                    Gr(r),
                    Ga(r, o, !0);
                    break;
                case "textarea":
                    Gr(r),
                    Xa(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ji)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = $c(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[lt] = t,
                e[Pr] = r,
                ld(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = As(n, r),
                    n) {
                    case "dialog":
                        Y("cancel", e),
                        Y("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Y("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < or.length; i++)
                            Y(or[i], e);
                        i = r;
                        break;
                    case "source":
                        Y("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Y("error", e),
                        Y("load", e),
                        i = r;
                        break;
                    case "details":
                        Y("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Ha(e, r),
                        i = Ms(e, r),
                        Y("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = J({}, r, {
                            value: void 0
                        }),
                        Y("invalid", e);
                        break;
                    case "textarea":
                        Ya(e, r),
                        i = Rs(e, r),
                        Y("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    js(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Fc(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && jc(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && gr(e, l) : typeof l == "number" && gr(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (vr.hasOwnProperty(o) ? l != null && o === "onScroll" && Y("scroll", e) : l != null && Rl(e, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        Gr(e),
                        Ga(e, r, !1);
                        break;
                    case "textarea":
                        Gr(e),
                        Xa(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + bt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? _n(e, !!r.multiple, o, !1) : r.defaultValue != null && _n(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ji)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ye(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ud(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(k(166));
            if (n = Jt(Or.current),
            Jt(ut.current),
            ti(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[lt] = t,
                (o = r.nodeValue !== n) && (e = $e,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ei(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ei(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[lt] = t,
                t.stateNode = r
        }
        return ye(t),
        null;
    case 13:
        if (X(q),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (K && Re !== null && t.mode & 1 && !(t.flags & 128))
                Pf(),
                jn(),
                t.flags |= 98560,
                o = !1;
            else if (o = ti(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(k(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(k(317));
                    o[lt] = t
                } else
                    jn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ye(t),
                o = !1
            } else
                Je !== null && (gl(Je),
                Je = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || q.current & 1 ? se === 0 && (se = 3) : va())),
        t.updateQueue !== null && (t.flags |= 4),
        ye(t),
        null);
    case 4:
        return Fn(),
        ul(e, t),
        e === null && Cr(t.stateNode.containerInfo),
        ye(t),
        null;
    case 10:
        return Jl(t.type._context),
        ye(t),
        null;
    case 17:
        return ze(t.type) && Ai(),
        ye(t),
        null;
    case 19:
        if (X(q),
        o = t.memoizedState,
        o === null)
            return ye(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                Zn(o, !1);
            else {
                if (se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Wi(e),
                        s !== null) {
                            for (t.flags |= 128,
                            Zn(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return G(q, q.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && te() > Vn && (t.flags |= 128,
                r = !0,
                Zn(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Wi(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Zn(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !K)
                        return ye(t),
                        null
                } else
                    2 * te() - o.renderingStartTime > Vn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Zn(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = te(),
        t.sibling = null,
        n = q.current,
        G(q, r ? n & 1 | 2 : n & 1),
        t) : (ye(t),
        null);
    case 22:
    case 23:
        return ha(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ie & 1073741824 && (ye(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(k(156, t.tag))
}
function P0(e, t) {
    switch (Ql(t),
    t.tag) {
    case 1:
        return ze(t.type) && Ai(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Fn(),
        X(Oe),
        X(xe),
        ia(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ra(t),
        null;
    case 13:
        if (X(q),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(k(340));
            jn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return X(q),
        null;
    case 4:
        return Fn(),
        null;
    case 10:
        return Jl(t.type._context),
        null;
    case 22:
    case 23:
        return ha(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ii = !1
  , Se = !1
  , _0 = typeof WeakSet == "function" ? WeakSet : Set
  , I = null;
function kn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ee(e, t, r)
            }
        else
            n.current = null
}
function cl(e, t, n) {
    try {
        n()
    } catch (r) {
        ee(e, t, r)
    }
}
var Au = !1;
function O0(e, t) {
    if (Ys = Li,
    e = pf(),
    Yl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , f = 0
                      , p = e
                      , h = null;
                    t: for (; ; ) {
                        for (var v; p !== n || i !== 0 && p.nodeType !== 3 || (a = s + i),
                        p !== o || r !== 0 && p.nodeType !== 3 || (l = s + r),
                        p.nodeType === 3 && (s += p.nodeValue.length),
                        (v = p.firstChild) !== null; )
                            h = p,
                            p = v;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (h === n && ++u === i && (a = s),
                            h === o && ++f === r && (l = s),
                            (v = p.nextSibling) !== null)
                                break;
                            p = h,
                            h = p.parentNode
                        }
                        p = v
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Xs = {
        focusedElem: e,
        selectionRange: n
    },
    Li = !1,
    I = t; I !== null; )
        if (t = I,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            I = e;
        else
            for (; I !== null; ) {
                t = I;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var g = y.memoizedProps
                                  , E = y.memoizedState
                                  , c = t.stateNode
                                  , d = c.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ke(t.type, g), E);
                                c.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                        }
                } catch (w) {
                    ee(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    I = e;
                    break
                }
                I = t.return
            }
    return y = Au,
    Au = !1,
    y
}
function dr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && cl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function po(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function fl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function cd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    cd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[lt],
    delete t[Pr],
    delete t[qs],
    delete t[c0],
    delete t[f0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function fd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Fu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || fd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function dl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ji));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (dl(e, t, n),
        e = e.sibling; e !== null; )
            dl(e, t, n),
            e = e.sibling
}
function pl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (pl(e, t, n),
        e = e.sibling; e !== null; )
            pl(e, t, n),
            e = e.sibling
}
var de = null
  , Ze = !1;
function kt(e, t, n) {
    for (n = n.child; n !== null; )
        dd(e, t, n),
        n = n.sibling
}
function dd(e, t, n) {
    if (at && typeof at.onCommitFiberUnmount == "function")
        try {
            at.onCommitFiberUnmount(io, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Se || kn(n, t);
    case 6:
        var r = de
          , i = Ze;
        de = null,
        kt(e, t, n),
        de = r,
        Ze = i,
        de !== null && (Ze ? (e = de,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
        break;
    case 18:
        de !== null && (Ze ? (e = de,
        n = n.stateNode,
        e.nodeType === 8 ? ls(e.parentNode, n) : e.nodeType === 1 && ls(e, n),
        xr(e)) : ls(de, n.stateNode));
        break;
    case 4:
        r = de,
        i = Ze,
        de = n.stateNode.containerInfo,
        Ze = !0,
        kt(e, t, n),
        de = r,
        Ze = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Se && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && cl(n, t, s),
                i = i.next
            } while (i !== r)
        }
        kt(e, t, n);
        break;
    case 1:
        if (!Se && (kn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ee(n, t, a)
            }
        kt(e, t, n);
        break;
    case 21:
        kt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null,
        kt(e, t, n),
        Se = r) : kt(e, t, n);
        break;
    default:
        kt(e, t, n)
    }
}
function Du(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new _0),
        t.forEach(function(r) {
            var i = A0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        de = a.stateNode,
                        Ze = !1;
                        break e;
                    case 3:
                        de = a.stateNode.containerInfo,
                        Ze = !0;
                        break e;
                    case 4:
                        de = a.stateNode.containerInfo,
                        Ze = !0;
                        break e
                    }
                    a = a.return
                }
                if (de === null)
                    throw Error(k(160));
                dd(o, s, i),
                de = null,
                Ze = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                ee(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            pd(t, e),
            t = t.sibling
}
function pd(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Qe(t, e),
        rt(e),
        r & 4) {
            try {
                dr(3, e, e.return),
                po(3, e)
            } catch (g) {
                ee(e, e.return, g)
            }
            try {
                dr(5, e, e.return)
            } catch (g) {
                ee(e, e.return, g)
            }
        }
        break;
    case 1:
        Qe(t, e),
        rt(e),
        r & 512 && n !== null && kn(n, n.return);
        break;
    case 5:
        if (Qe(t, e),
        rt(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                gr(i, "")
            } catch (g) {
                ee(e, e.return, g)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && Lc(i, o),
                    As(a, s);
                    var u = As(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var f = l[s]
                          , p = l[s + 1];
                        f === "style" ? Fc(i, p) : f === "dangerouslySetInnerHTML" ? jc(i, p) : f === "children" ? gr(i, p) : Rl(i, f, p, u)
                    }
                    switch (a) {
                    case "input":
                        Is(i, o);
                        break;
                    case "textarea":
                        Rc(i, o);
                        break;
                    case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var v = o.value;
                        v != null ? _n(i, !!o.multiple, v, !1) : h !== !!o.multiple && (o.defaultValue != null ? _n(i, !!o.multiple, o.defaultValue, !0) : _n(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Pr] = o
                } catch (g) {
                    ee(e, e.return, g)
                }
        }
        break;
    case 6:
        if (Qe(t, e),
        rt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(k(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (g) {
                ee(e, e.return, g)
            }
        }
        break;
    case 3:
        if (Qe(t, e),
        rt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                xr(t.containerInfo)
            } catch (g) {
                ee(e, e.return, g)
            }
        break;
    case 4:
        Qe(t, e),
        rt(e);
        break;
    case 13:
        Qe(t, e),
        rt(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (pa = te())),
        r & 4 && Du(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Se = (u = Se) || f,
        Qe(t, e),
        Se = u) : Qe(t, e),
        rt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (I = e,
                f = e.child; f !== null; ) {
                    for (p = I = f; I !== null; ) {
                        switch (h = I,
                        v = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            dr(4, h, h.return);
                            break;
                        case 1:
                            kn(h, h.return);
                            var y = h.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (g) {
                                    ee(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            kn(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                bu(p);
                                continue
                            }
                        }
                        v !== null ? (v.return = h,
                        I = v) : bu(p)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (f === null) {
                        f = p;
                        try {
                            i = p.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = p.stateNode,
                            l = p.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Ac("display", s))
                        } catch (g) {
                            ee(e, e.return, g)
                        }
                    }
                } else if (p.tag === 6) {
                    if (f === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (g) {
                            ee(e, e.return, g)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    f === p && (f = null),
                    p = p.return
                }
                f === p && (f = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        Qe(t, e),
        rt(e),
        r & 4 && Du(e);
        break;
    case 21:
        break;
    default:
        Qe(t, e),
        rt(e)
    }
}
function rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (fd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (gr(i, ""),
                r.flags &= -33);
                var o = Fu(e);
                pl(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = Fu(e);
                dl(e, a, s);
                break;
            default:
                throw Error(k(161))
            }
        } catch (l) {
            ee(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function z0(e, t, n) {
    I = e,
    md(e)
}
function md(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
        var i = I
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ii;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Se;
                a = ii;
                var u = Se;
                if (ii = s,
                (Se = l) && !u)
                    for (I = i; I !== null; )
                        s = I,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Bu(i) : l !== null ? (l.return = s,
                        I = l) : Bu(i);
                for (; o !== null; )
                    I = o,
                    md(o),
                    o = o.sibling;
                I = i,
                ii = a,
                Se = u
            }
            Vu(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            I = o) : Vu(e)
    }
}
function Vu(e) {
    for (; I !== null; ) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Se || po(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Se)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Tu(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Tu(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var p = f.dehydrated;
                                    p !== null && xr(p)
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
                        throw Error(k(163))
                    }
                Se || t.flags & 512 && fl(t)
            } catch (h) {
                ee(t, t.return, h)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function bu(e) {
    for (; I !== null; ) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            I = n;
            break
        }
        I = t.return
    }
}
function Bu(e) {
    for (; I !== null; ) {
        var t = I;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    po(4, t)
                } catch (l) {
                    ee(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ee(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    fl(t)
                } catch (l) {
                    ee(t, o, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    fl(t)
                } catch (l) {
                    ee(t, s, l)
                }
            }
        } catch (l) {
            ee(t, t.return, l)
        }
        if (t === e) {
            I = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            I = a;
            break
        }
        I = t.return
    }
}
var N0 = Math.ceil
  , Yi = Et.ReactCurrentDispatcher
  , fa = Et.ReactCurrentOwner
  , He = Et.ReactCurrentBatchConfig
  , V = 0
  , ce = null
  , ie = null
  , me = 0
  , Ie = 0
  , Pn = Wt(0)
  , se = 0
  , Ir = null
  , ln = 0
  , mo = 0
  , da = 0
  , pr = null
  , Pe = null
  , pa = 0
  , Vn = 1 / 0
  , dt = null
  , Xi = !1
  , ml = null
  , Ft = null
  , oi = !1
  , Mt = null
  , Qi = 0
  , mr = 0
  , hl = null
  , xi = -1
  , Ei = 0;
function Te() {
    return V & 6 ? te() : xi !== -1 ? xi : xi = te()
}
function Dt(e) {
    return e.mode & 1 ? V & 2 && me !== 0 ? me & -me : p0.transition !== null ? (Ei === 0 && (Ei = Kc()),
    Ei) : (e = U,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : rf(e.type)),
    e) : 1
}
function tt(e, t, n, r) {
    if (50 < mr)
        throw mr = 0,
        hl = null,
        Error(k(185));
    Fr(e, n, r),
    (!(V & 2) || e !== ce) && (e === ce && (!(V & 2) && (mo |= n),
    se === 4 && zt(e, me)),
    Ne(e, r),
    n === 1 && V === 0 && !(t.mode & 1) && (Vn = te() + 500,
    uo && Ht()))
}
function Ne(e, t) {
    var n = e.callbackNode;
    pm(e, t);
    var r = Ii(e, e === ce ? me : 0);
    if (r === 0)
        n !== null && qa(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && qa(n),
        t === 1)
            e.tag === 0 ? d0(Uu.bind(null, e)) : Tf(Uu.bind(null, e)),
            a0(function() {
                !(V & 6) && Ht()
            }),
            n = null;
        else {
            switch (qc(r)) {
            case 1:
                n = Dl;
                break;
            case 4:
                n = Xc;
                break;
            case 16:
                n = Mi;
                break;
            case 536870912:
                n = Qc;
                break;
            default:
                n = Mi
            }
            n = Ed(n, hd.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function hd(e, t) {
    if (xi = -1,
    Ei = 0,
    V & 6)
        throw Error(k(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n)
        return null;
    var r = Ii(e, e === ce ? me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ki(e, r);
    else {
        t = r;
        var i = V;
        V |= 2;
        var o = gd();
        (ce !== e || me !== t) && (dt = null,
        Vn = te() + 500,
        en(e, t));
        do
            try {
                L0();
                break
            } catch (a) {
                vd(e, a)
            }
        while (1);
        Zl(),
        Yi.current = o,
        V = i,
        ie !== null ? t = 0 : (ce = null,
        me = 0,
        t = se)
    }
    if (t !== 0) {
        if (t === 2 && (i = Bs(e),
        i !== 0 && (r = i,
        t = vl(e, i))),
        t === 1)
            throw n = Ir,
            en(e, 0),
            zt(e, r),
            Ne(e, te()),
            n;
        if (t === 6)
            zt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !M0(i) && (t = Ki(e, r),
            t === 2 && (o = Bs(e),
            o !== 0 && (r = o,
            t = vl(e, o))),
            t === 1))
                throw n = Ir,
                en(e, 0),
                zt(e, r),
                Ne(e, te()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(k(345));
            case 2:
                Kt(e, Pe, dt);
                break;
            case 3:
                if (zt(e, r),
                (r & 130023424) === r && (t = pa + 500 - te(),
                10 < t)) {
                    if (Ii(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Te(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Ks(Kt.bind(null, e, Pe, dt), t);
                    break
                }
                Kt(e, Pe, dt);
                break;
            case 4:
                if (zt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - et(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = te() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * N0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ks(Kt.bind(null, e, Pe, dt), r);
                    break
                }
                Kt(e, Pe, dt);
                break;
            case 5:
                Kt(e, Pe, dt);
                break;
            default:
                throw Error(k(329))
            }
        }
    }
    return Ne(e, te()),
    e.callbackNode === n ? hd.bind(null, e) : null
}
function vl(e, t) {
    var n = pr;
    return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256),
    e = Ki(e, t),
    e !== 2 && (t = Pe,
    Pe = n,
    t !== null && gl(t)),
    e
}
function gl(e) {
    Pe === null ? Pe = e : Pe.push.apply(Pe, e)
}
function M0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!nt(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function zt(e, t) {
    for (t &= ~da,
    t &= ~mo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - et(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Uu(e) {
    if (V & 6)
        throw Error(k(327));
    In();
    var t = Ii(e, 0);
    if (!(t & 1))
        return Ne(e, te()),
        null;
    var n = Ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Bs(e);
        r !== 0 && (t = r,
        n = vl(e, r))
    }
    if (n === 1)
        throw n = Ir,
        en(e, 0),
        zt(e, t),
        Ne(e, te()),
        n;
    if (n === 6)
        throw Error(k(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Kt(e, Pe, dt),
    Ne(e, te()),
    null
}
function ma(e, t) {
    var n = V;
    V |= 1;
    try {
        return e(t)
    } finally {
        V = n,
        V === 0 && (Vn = te() + 500,
        uo && Ht())
    }
}
function an(e) {
    Mt !== null && Mt.tag === 0 && !(V & 6) && In();
    var t = V;
    V |= 1;
    var n = He.transition
      , r = U;
    try {
        if (He.transition = null,
        U = 1,
        e)
            return e()
    } finally {
        U = r,
        He.transition = n,
        V = t,
        !(V & 6) && Ht()
    }
}
function ha() {
    Ie = Pn.current,
    X(Pn)
}
function en(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    l0(n)),
    ie !== null)
        for (n = ie.return; n !== null; ) {
            var r = n;
            switch (Ql(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ai();
                break;
            case 3:
                Fn(),
                X(Oe),
                X(xe),
                ia();
                break;
            case 5:
                ra(r);
                break;
            case 4:
                Fn();
                break;
            case 13:
                X(q);
                break;
            case 19:
                X(q);
                break;
            case 10:
                Jl(r.type._context);
                break;
            case 22:
            case 23:
                ha()
            }
            n = n.return
        }
    if (ce = e,
    ie = e = Vt(e.current, null),
    me = Ie = t,
    se = 0,
    Ir = null,
    da = mo = ln = 0,
    Pe = pr = null,
    Zt !== null) {
        for (t = 0; t < Zt.length; t++)
            if (n = Zt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        Zt = null
    }
    return e
}
function vd(e, t) {
    do {
        var n = ie;
        try {
            if (Zl(),
            yi.current = Gi,
            Hi) {
                for (var r = Z.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Hi = !1
            }
            if (sn = 0,
            ae = oe = Z = null,
            fr = !1,
            zr = 0,
            fa.current = null,
            n === null || n.return === null) {
                se = 1,
                Ir = t,
                ie = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = me,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , f = a
                      , p = f.tag;
                    if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var h = f.alternate;
                        h ? (f.updateQueue = h.updateQueue,
                        f.memoizedState = h.memoizedState,
                        f.lanes = h.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var v = Nu(s);
                    if (v !== null) {
                        v.flags &= -257,
                        Mu(v, s, a, o, t),
                        v.mode & 1 && zu(o, u, t),
                        t = v,
                        l = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            zu(o, u, t),
                            va();
                            break e
                        }
                        l = Error(k(426))
                    }
                } else if (K && a.mode & 1) {
                    var E = Nu(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        Mu(E, s, a, o, t),
                        Kl(Dn(l, a));
                        break e
                    }
                }
                o = l = Dn(l, a),
                se !== 4 && (se = 2),
                pr === null ? pr = [o] : pr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var c = Jf(o, l, t);
                        Eu(o, c);
                        break e;
                    case 1:
                        a = l;
                        var d = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Ft === null || !Ft.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var w = ed(o, a, t);
                            Eu(o, w);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            wd(n)
        } catch (x) {
            t = x,
            ie === n && n !== null && (ie = n = n.return);
            continue
        }
        break
    } while (1)
}
function gd() {
    var e = Yi.current;
    return Yi.current = Gi,
    e === null ? Gi : e
}
function va() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
    ce === null || !(ln & 268435455) && !(mo & 268435455) || zt(ce, me)
}
function Ki(e, t) {
    var n = V;
    V |= 2;
    var r = gd();
    (ce !== e || me !== t) && (dt = null,
    en(e, t));
    do
        try {
            I0();
            break
        } catch (i) {
            vd(e, i)
        }
    while (1);
    if (Zl(),
    V = n,
    Yi.current = r,
    ie !== null)
        throw Error(k(261));
    return ce = null,
    me = 0,
    se
}
function I0() {
    for (; ie !== null; )
        yd(ie)
}
function L0() {
    for (; ie !== null && !im(); )
        yd(ie)
}
function yd(e) {
    var t = xd(e.alternate, e, Ie);
    e.memoizedProps = e.pendingProps,
    t === null ? wd(e) : ie = t,
    fa.current = null
}
function wd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = P0(n, t),
            n !== null) {
                n.flags &= 32767,
                ie = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                se = 6,
                ie = null;
                return
            }
        } else if (n = k0(n, t, Ie),
        n !== null) {
            ie = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ie = t;
            return
        }
        ie = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}
function Kt(e, t, n) {
    var r = U
      , i = He.transition;
    try {
        He.transition = null,
        U = 1,
        R0(e, t, n, r)
    } finally {
        He.transition = i,
        U = r
    }
    return null
}
function R0(e, t, n, r) {
    do
        In();
    while (Mt !== null);
    if (V & 6)
        throw Error(k(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(k(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (mm(e, o),
    e === ce && (ie = ce = null,
    me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0,
    Ed(Mi, function() {
        return In(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = He.transition,
        He.transition = null;
        var s = U;
        U = 1;
        var a = V;
        V |= 4,
        fa.current = null,
        O0(e, n),
        pd(n, e),
        e0(Xs),
        Li = !!Ys,
        Xs = Ys = null,
        e.current = n,
        z0(n),
        om(),
        V = a,
        U = s,
        He.transition = o
    } else
        e.current = n;
    if (oi && (oi = !1,
    Mt = e,
    Qi = i),
    o = e.pendingLanes,
    o === 0 && (Ft = null),
    am(n.stateNode),
    Ne(e, te()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Xi)
        throw Xi = !1,
        e = ml,
        ml = null,
        e;
    return Qi & 1 && e.tag !== 0 && In(),
    o = e.pendingLanes,
    o & 1 ? e === hl ? mr++ : (mr = 0,
    hl = e) : mr = 0,
    Ht(),
    null
}
function In() {
    if (Mt !== null) {
        var e = qc(Qi)
          , t = He.transition
          , n = U;
        try {
            if (He.transition = null,
            U = 16 > e ? 16 : e,
            Mt === null)
                var r = !1;
            else {
                if (e = Mt,
                Mt = null,
                Qi = 0,
                V & 6)
                    throw Error(k(331));
                var i = V;
                for (V |= 4,
                I = e.current; I !== null; ) {
                    var o = I
                      , s = o.child;
                    if (I.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (I = u; I !== null; ) {
                                    var f = I;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        dr(8, f, o)
                                    }
                                    var p = f.child;
                                    if (p !== null)
                                        p.return = f,
                                        I = p;
                                    else
                                        for (; I !== null; ) {
                                            f = I;
                                            var h = f.sibling
                                              , v = f.return;
                                            if (cd(f),
                                            f === u) {
                                                I = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                I = h;
                                                break
                                            }
                                            I = v
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var g = y.child;
                                if (g !== null) {
                                    y.child = null;
                                    do {
                                        var E = g.sibling;
                                        g.sibling = null,
                                        g = E
                                    } while (g !== null)
                                }
                            }
                            I = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        I = s;
                    else
                        e: for (; I !== null; ) {
                            if (o = I,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    dr(9, o, o.return)
                                }
                            var c = o.sibling;
                            if (c !== null) {
                                c.return = o.return,
                                I = c;
                                break e
                            }
                            I = o.return
                        }
                }
                var d = e.current;
                for (I = d; I !== null; ) {
                    s = I;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        I = m;
                    else
                        e: for (s = d; I !== null; ) {
                            if (a = I,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        po(9, a)
                                    }
                                } catch (x) {
                                    ee(a, a.return, x)
                                }
                            if (a === s) {
                                I = null;
                                break e
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                w.return = a.return,
                                I = w;
                                break e
                            }
                            I = a.return
                        }
                }
                if (V = i,
                Ht(),
                at && typeof at.onPostCommitFiberRoot == "function")
                    try {
                        at.onPostCommitFiberRoot(io, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            U = n,
            He.transition = t
        }
    }
    return !1
}
function Wu(e, t, n) {
    t = Dn(n, t),
    t = Jf(e, t, 1),
    e = At(e, t, 1),
    t = Te(),
    e !== null && (Fr(e, 1, t),
    Ne(e, t))
}
function ee(e, t, n) {
    if (e.tag === 3)
        Wu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Wu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
                    e = Dn(n, e),
                    e = ed(t, e, 1),
                    t = At(t, e, 1),
                    e = Te(),
                    t !== null && (Fr(t, 1, e),
                    Ne(t, e));
                    break
                }
            }
            t = t.return
        }
}
function $0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Te(),
    e.pingedLanes |= e.suspendedLanes & n,
    ce === e && (me & n) === n && (se === 4 || se === 3 && (me & 130023424) === me && 500 > te() - pa ? en(e, 0) : da |= n),
    Ne(e, t)
}
function Sd(e, t) {
    t === 0 && (e.mode & 1 ? (t = Qr,
    Qr <<= 1,
    !(Qr & 130023424) && (Qr = 4194304)) : t = 1);
    var n = Te();
    e = St(e, t),
    e !== null && (Fr(e, t, n),
    Ne(e, n))
}
function j0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Sd(e, n)
}
function A0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(k(314))
    }
    r !== null && r.delete(t),
    Sd(e, n)
}
var xd;
xd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Oe.current)
            _e = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return _e = !1,
                C0(e, t, n);
            _e = !!(e.flags & 131072)
        }
    else
        _e = !1,
        K && t.flags & 1048576 && Cf(t, Vi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Si(e, t),
        e = t.pendingProps;
        var i = $n(t, xe.current);
        Mn(t, n),
        i = sa(null, t, r, e, i, n);
        var o = la();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ze(r) ? (o = !0,
        Fi(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ta(t),
        i.updater = co,
        t.stateNode = i,
        i._reactInternals = t,
        rl(t, r, e, n),
        t = sl(null, t, r, !0, o, n)) : (t.tag = 0,
        K && o && Xl(t),
        Ee(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Si(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = D0(r),
            e = Ke(r, e),
            i) {
            case 0:
                t = ol(null, t, r, e, n);
                break e;
            case 1:
                t = Ru(null, t, r, e, n);
                break e;
            case 11:
                t = Iu(null, t, r, e, n);
                break e;
            case 14:
                t = Lu(null, t, r, Ke(r.type, e), n);
                break e
            }
            throw Error(k(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        ol(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Ru(e, t, r, i, n);
    case 3:
        e: {
            if (id(t),
            e === null)
                throw Error(k(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Of(e, t),
            Ui(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Dn(Error(k(423)), t),
                    t = $u(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Dn(Error(k(424)), t),
                    t = $u(e, t, r, n, i);
                    break e
                } else
                    for (Re = jt(t.stateNode.containerInfo.firstChild),
                    $e = t,
                    K = !0,
                    Je = null,
                    n = If(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (jn(),
                r === i) {
                    t = xt(e, t, n);
                    break e
                }
                Ee(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Lf(t),
        e === null && el(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        Qs(r, i) ? s = null : o !== null && Qs(r, o) && (t.flags |= 32),
        rd(e, t),
        Ee(e, t, s, n),
        t.child;
    case 6:
        return e === null && el(t),
        null;
    case 13:
        return od(e, t, n);
    case 4:
        return na(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = An(t, null, r, n) : Ee(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Iu(e, t, r, i, n);
    case 7:
        return Ee(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ee(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ee(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            G(bi, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (nt(o.value, s)) {
                    if (o.children === i.children && !Oe.current) {
                        t = xt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = gt(-1, n & -n),
                                        l.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? l.next = l : (l.next = f.next,
                                            f.next = l),
                                            u.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    tl(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(k(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            tl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            Ee(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Mn(t, n),
        i = Ge(i),
        r = r(i),
        t.flags |= 1,
        Ee(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ke(r, t.pendingProps),
        i = Ke(r.type, i),
        Lu(e, t, r, i, n);
    case 15:
        return td(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ke(r, i),
        Si(e, t),
        t.tag = 1,
        ze(r) ? (e = !0,
        Fi(t)) : e = !1,
        Mn(t, n),
        Nf(t, r, i),
        rl(t, r, i, n),
        sl(null, t, r, !0, e, n);
    case 19:
        return sd(e, t, n);
    case 22:
        return nd(e, t, n)
    }
    throw Error(k(156, t.tag))
}
;
function Ed(e, t) {
    return Yc(e, t)
}
function F0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function We(e, t, n, r) {
    return new F0(e,t,n,r)
}
function ga(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function D0(e) {
    if (typeof e == "function")
        return ga(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === jl)
            return 11;
        if (e === Al)
            return 14
    }
    return 2
}
function Vt(e, t) {
    var n = e.alternate;
    return n === null ? (n = We(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ti(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        ga(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case vn:
            return tn(n.children, i, o, t);
        case $l:
            s = 8,
            i |= 8;
            break;
        case _s:
            return e = We(12, n, t, i | 2),
            e.elementType = _s,
            e.lanes = o,
            e;
        case Os:
            return e = We(13, n, t, i),
            e.elementType = Os,
            e.lanes = o,
            e;
        case zs:
            return e = We(19, n, t, i),
            e.elementType = zs,
            e.lanes = o,
            e;
        case Nc:
            return ho(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Oc:
                    s = 10;
                    break e;
                case zc:
                    s = 9;
                    break e;
                case jl:
                    s = 11;
                    break e;
                case Al:
                    s = 14;
                    break e;
                case Pt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(k(130, e == null ? e : typeof e, ""))
        }
    return t = We(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function tn(e, t, n, r) {
    return e = We(7, e, r, t),
    e.lanes = n,
    e
}
function ho(e, t, n, r) {
    return e = We(22, e, r, t),
    e.elementType = Nc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function hs(e, t, n) {
    return e = We(6, e, null, t),
    e.lanes = n,
    e
}
function vs(e, t, n) {
    return t = We(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function V0(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ko(0),
    this.expirationTimes = Ko(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ko(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function ya(e, t, n, r, i, o, s, a, l) {
    return e = new V0(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = We(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ta(o),
    e
}
function b0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Td(e) {
    if (!e)
        return Bt;
    e = e._reactInternals;
    e: {
        if (fn(e) !== e || e.tag !== 1)
            throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ze(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ze(n))
            return Ef(e, n, t)
    }
    return t
}
function Cd(e, t, n, r, i, o, s, a, l) {
    return e = ya(n, r, !0, e, i, o, s, a, l),
    e.context = Td(null),
    n = e.current,
    r = Te(),
    i = Dt(n),
    o = gt(r, i),
    o.callback = t ?? null,
    At(n, o, i),
    e.current.lanes = i,
    Fr(e, i, r),
    Ne(e, r),
    e
}
function vo(e, t, n, r) {
    var i = t.current
      , o = Te()
      , s = Dt(i);
    return n = Td(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = gt(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = At(i, t, s),
    e !== null && (tt(e, i, s, o),
    gi(e, i, s)),
    s
}
function qi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Hu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function wa(e, t) {
    Hu(e, t),
    (e = e.alternate) && Hu(e, t)
}
function B0() {
    return null
}
var kd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Sa(e) {
    this._internalRoot = e
}
go.prototype.render = Sa.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(k(409));
    vo(e, t, null, null)
}
;
go.prototype.unmount = Sa.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        an(function() {
            vo(null, e, null, null)
        }),
        t[wt] = null
    }
}
;
function go(e) {
    this._internalRoot = e
}
go.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ef();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++)
            ;
        Ot.splice(n, 0, e),
        n === 0 && nf(e)
    }
}
;
function xa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function yo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Gu() {}
function U0(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = qi(s);
                o.call(u)
            }
        }
        var s = Cd(t, r, e, 0, null, !1, !1, "", Gu);
        return e._reactRootContainer = s,
        e[wt] = s.current,
        Cr(e.nodeType === 8 ? e.parentNode : e),
        an(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = qi(l);
            a.call(u)
        }
    }
    var l = ya(e, 0, !1, null, null, !1, !1, "", Gu);
    return e._reactRootContainer = l,
    e[wt] = l.current,
    Cr(e.nodeType === 8 ? e.parentNode : e),
    an(function() {
        vo(t, l, n, r)
    }),
    l
}
function wo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = qi(s);
                a.call(l)
            }
        }
        vo(t, s, e, i)
    } else
        s = U0(n, t, e, i, r);
    return qi(s)
}
Zc = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ir(t.pendingLanes);
            n !== 0 && (Vl(t, n | 1),
            Ne(t, te()),
            !(V & 6) && (Vn = te() + 500,
            Ht()))
        }
        break;
    case 13:
        an(function() {
            var r = St(e, 1);
            if (r !== null) {
                var i = Te();
                tt(r, e, 1, i)
            }
        }),
        wa(e, 1)
    }
}
;
bl = function(e) {
    if (e.tag === 13) {
        var t = St(e, 134217728);
        if (t !== null) {
            var n = Te();
            tt(t, e, 134217728, n)
        }
        wa(e, 134217728)
    }
}
;
Jc = function(e) {
    if (e.tag === 13) {
        var t = Dt(e)
          , n = St(e, t);
        if (n !== null) {
            var r = Te();
            tt(n, e, t, r)
        }
        wa(e, t)
    }
}
;
ef = function() {
    return U
}
;
tf = function(e, t) {
    var n = U;
    try {
        return U = e,
        t()
    } finally {
        U = n
    }
}
;
Ds = function(e, t, n) {
    switch (t) {
    case "input":
        if (Is(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = ao(r);
                    if (!i)
                        throw Error(k(90));
                    Ic(r),
                    Is(r, i)
                }
            }
        }
        break;
    case "textarea":
        Rc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && _n(e, !!n.multiple, t, !1)
    }
}
;
bc = ma;
Bc = an;
var W0 = {
    usingClientEntryPoint: !1,
    Events: [Vr, Sn, ao, Dc, Vc, ma]
}
  , Jn = {
    findFiberByHostInstance: qt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , H0 = {
    bundleType: Jn.bundleType,
    version: Jn.version,
    rendererPackageName: Jn.rendererPackageName,
    rendererConfig: Jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Hc(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Jn.findFiberByHostInstance || B0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!si.isDisabled && si.supportsFiber)
        try {
            io = si.inject(H0),
            at = si
        } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W0;
Fe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xa(t))
        throw Error(k(200));
    return b0(e, t, null, n)
}
;
Fe.createRoot = function(e, t) {
    if (!xa(e))
        throw Error(k(299));
    var n = !1
      , r = ""
      , i = kd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = ya(e, 1, !1, null, null, n, !1, r, i),
    e[wt] = t.current,
    Cr(e.nodeType === 8 ? e.parentNode : e),
    new Sa(t)
}
;
Fe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
        Error(k(268, e)));
    return e = Hc(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Fe.flushSync = function(e) {
    return an(e)
}
;
Fe.hydrate = function(e, t, n) {
    if (!yo(t))
        throw Error(k(200));
    return wo(null, e, t, !0, n)
}
;
Fe.hydrateRoot = function(e, t, n) {
    if (!xa(e))
        throw Error(k(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = kd;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Cd(t, null, e, 1, n ?? null, i, !1, o, s),
    e[wt] = t.current,
    Cr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new go(t)
}
;
Fe.render = function(e, t, n) {
    if (!yo(t))
        throw Error(k(200));
    return wo(null, e, t, !1, n)
}
;
Fe.unmountComponentAtNode = function(e) {
    if (!yo(e))
        throw Error(k(40));
    return e._reactRootContainer ? (an(function() {
        wo(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[wt] = null
        })
    }),
    !0) : !1
}
;
Fe.unstable_batchedUpdates = ma;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!yo(n))
        throw Error(k(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(k(38));
    return wo(e, t, n, !1, r)
}
;
Fe.version = "18.2.0-next-9e3b772b8-20220608";
function Pd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pd)
        } catch (e) {
            console.error(e)
        }
}
Pd(),
Tc.exports = Fe;
var G0 = Tc.exports
  , Yu = G0;
ks.createRoot = Yu.createRoot,
ks.hydrateRoot = Yu.hydrateRoot;
const So = ()=>({
    isEn: (window == null ? void 0 : window.appLanguage) === "en" || window.location.hash === "#en" || window.location.hash === "en"
});
function Y0(e) {
    const {data: t, onIconClick: n, isActive: r} = e
      , i = So();
    return O.jsx("div", {
        onClick: o=>{
            o.preventDefault(),
            n()
        }
        ,
        className: `col col-4 col-xxl-3 ${r ? "active" : ""}`,
        children: O.jsxs("a", {
            className: "txt-decoration-none",
            href: "#",
            children: [O.jsx("div", {
                className: "ratio ratio-1x1",
                children: O.jsx("div", {
                    className: "btn-item",
                    children: O.jsx("img", {
                        alt: t.label,
                        className: "icon-item",
                        src: `./assets/img/icons/${t.filename}`
                    })
                })
            }), O.jsx("p", {
                className: "fs-14 btn-txt fw-500 text-center",
                children: i.isEn ? t.labelEn : t.label
            })]
        })
    })
}
function X0(e) {
    const {data: t, selectedElementIndex: n, onIconClick: r} = e;
    return t.map((i,o)=>O.jsx(Y0, {
        onIconClick: ()=>r(o),
        data: i,
        isActive: o === n
    }, o))
}
var _d = {
    exports: {}
}
  , Q0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , K0 = Q0
  , q0 = K0;
function Od() {}
function zd() {}
zd.resetWarningCache = Od;
var Z0 = function() {
    function e(r, i, o, s, a, l) {
        if (l !== q0) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: zd,
        resetWarningCache: Od
    };
    return n.PropTypes = n,
    n
};
_d.exports = Z0();
var J0 = _d.exports;
const er = dc(J0);
var eh = ["color", "size", "title"];
function yl() {
    return yl = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    yl.apply(this, arguments)
}
function th(e, t) {
    if (e == null)
        return {};
    var n = nh(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function nh(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var Ea = N.forwardRef(function(e, t) {
    var n = e.color
      , r = e.size
      , i = e.title
      , o = th(e, eh);
    return D.createElement("svg", yl({
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n
    }, o), i ? D.createElement("title", null, i) : null, D.createElement("path", {
        d: "M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
    }), D.createElement("path", {
        d: "M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
    }))
});
Ea.propTypes = {
    color: er.string,
    size: er.oneOfType([er.string, er.number]),
    title: er.string
};
Ea.defaultProps = {
    color: "currentColor",
    size: "1em",
    title: null
};
const rh = Ea
  , ih = D.createContext({})
  , Nd = !0;
function oh({baseColor: e, highlightColor: t, width: n, height: r, borderRadius: i, circle: o, direction: s, duration: a, enableAnimation: l=Nd}) {
    const u = {};
    return s === "rtl" && (u["--animation-direction"] = "reverse"),
    typeof a == "number" && (u["--animation-duration"] = `${a}s`),
    l || (u["--pseudo-element-display"] = "none"),
    (typeof n == "string" || typeof n == "number") && (u.width = n),
    (typeof r == "string" || typeof r == "number") && (u.height = r),
    (typeof i == "string" || typeof i == "number") && (u.borderRadius = i),
    o && (u.borderRadius = "50%"),
    typeof e < "u" && (u["--base-color"] = e),
    typeof t < "u" && (u["--highlight-color"] = t),
    u
}
function Md({count: e=1, wrapper: t, className: n, containerClassName: r, containerTestId: i, circle: o=!1, style: s, ...a}) {
    var l, u, f;
    const p = D.useContext(ih)
      , h = {
        ...a
    };
    for (const [m,w] of Object.entries(a))
        typeof w > "u" && delete h[m];
    const v = {
        ...p,
        ...h,
        circle: o
    }
      , y = {
        ...s,
        ...oh(v)
    };
    let g = "react-loading-skeleton";
    n && (g += ` ${n}`);
    const E = (l = v.inline) !== null && l !== void 0 ? l : !1
      , c = []
      , d = Math.ceil(e);
    for (let m = 0; m < d; m++) {
        let w = y;
        if (d > e && m === d - 1) {
            const T = (u = w.width) !== null && u !== void 0 ? u : "100%"
              , S = e % 1
              , P = typeof T == "number" ? T * S : `calc(${T} * ${S})`;
            w = {
                ...w,
                width: P
            }
        }
        const x = D.createElement("span", {
            className: g,
            style: w,
            key: m
        }, "‌");
        E ? c.push(x) : c.push(D.createElement(D.Fragment, {
            key: m
        }, x, D.createElement("br", null)))
    }
    return D.createElement("span", {
        className: r,
        "data-testid": i,
        "aria-live": "polite",
        "aria-busy": (f = v.enableAnimation) !== null && f !== void 0 ? f : Nd
    }, t ? c.map((m,w)=>D.createElement(t, {
        key: w
    }, m)) : c)
}
const sh = ()=>O.jsx(O.Fragment, {
    children: [...Array(12).keys()].map(e=>O.jsx("div", {
        className: "col col-4 col-xxl-3 pb-4",
        children: O.jsx(Md, {
            height: 125
        })
    }, e))
})
  , lh = ()=>O.jsxs("div", {
    className: "big-box-white-2 d-flex flex-column",
    children: [O.jsx("div", {
        className: "d-flex justify-content-center",
        children: O.jsx(Md, {
            width: 280,
            height: 40
        })
    }), O.jsx("div", {
        className: "d-flex justify-content-center my-auto h-100 align-items-center"
    })]
});
function ah(e) {
    if (e.sheet)
        return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function uh(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
}
var ch = function() {
    function e(n) {
        var r = this;
        this._insertTag = function(i) {
            var o;
            r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling,
            r.container.insertBefore(i, o),
            r.tags.push(i)
        }
        ,
        this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = n.nonce,
        this.key = n.key,
        this.container = n.container,
        this.prepend = n.prepend,
        this.insertionPoint = n.insertionPoint,
        this.before = null
    }
    var t = e.prototype;
    return t.hydrate = function(r) {
        r.forEach(this._insertTag)
    }
    ,
    t.insert = function(r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uh(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var o = ah(i);
            try {
                o.insertRule(r, o.cssRules.length)
            } catch {}
        } else
            i.appendChild(document.createTextNode(r));
        this.ctr++
    }
    ,
    t.flush = function() {
        this.tags.forEach(function(r) {
            return r.parentNode && r.parentNode.removeChild(r)
        }),
        this.tags = [],
        this.ctr = 0
    }
    ,
    e
}()
  , we = "-ms-"
  , Zi = "-moz-"
  , b = "-webkit-"
  , Id = "comm"
  , Ta = "rule"
  , Ca = "decl"
  , fh = "@import"
  , Ld = "@keyframes"
  , dh = "@layer"
  , ph = Math.abs
  , xo = String.fromCharCode
  , mh = Object.assign;
function hh(e, t) {
    return pe(e, 0) ^ 45 ? (((t << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0
}
function Rd(e) {
    return e.trim()
}
function vh(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function B(e, t, n) {
    return e.replace(t, n)
}
function wl(e, t) {
    return e.indexOf(t)
}
function pe(e, t) {
    return e.charCodeAt(t) | 0
}
function Lr(e, t, n) {
    return e.slice(t, n)
}
function ot(e) {
    return e.length
}
function ka(e) {
    return e.length
}
function li(e, t) {
    return t.push(e),
    e
}
function gh(e, t) {
    return e.map(t).join("")
}
var Eo = 1
  , bn = 1
  , $d = 0
  , Me = 0
  , re = 0
  , Hn = "";
function To(e, t, n, r, i, o, s) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: i,
        children: o,
        line: Eo,
        column: bn,
        length: s,
        return: ""
    }
}
function tr(e, t) {
    return mh(To("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}
function yh() {
    return re
}
function wh() {
    return re = Me > 0 ? pe(Hn, --Me) : 0,
    bn--,
    re === 10 && (bn = 1,
    Eo--),
    re
}
function je() {
    return re = Me < $d ? pe(Hn, Me++) : 0,
    bn++,
    re === 10 && (bn = 1,
    Eo++),
    re
}
function ct() {
    return pe(Hn, Me)
}
function Ci() {
    return Me
}
function Br(e, t) {
    return Lr(Hn, e, t)
}
function Rr(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function jd(e) {
    return Eo = bn = 1,
    $d = ot(Hn = e),
    Me = 0,
    []
}
function Ad(e) {
    return Hn = "",
    e
}
function ki(e) {
    return Rd(Br(Me - 1, Sl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Sh(e) {
    for (; (re = ct()) && re < 33; )
        je();
    return Rr(e) > 2 || Rr(re) > 3 ? "" : " "
}
function xh(e, t) {
    for (; --t && je() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
        ;
    return Br(e, Ci() + (t < 6 && ct() == 32 && je() == 32))
}
function Sl(e) {
    for (; je(); )
        switch (re) {
        case e:
            return Me;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Sl(re);
            break;
        case 40:
            e === 41 && Sl(e);
            break;
        case 92:
            je();
            break
        }
    return Me
}
function Eh(e, t) {
    for (; je() && e + re !== 47 + 10; )
        if (e + re === 42 + 42 && ct() === 47)
            break;
    return "/*" + Br(t, Me - 1) + "*" + xo(e === 47 ? e : je())
}
function Th(e) {
    for (; !Rr(ct()); )
        je();
    return Br(e, Me)
}
function Ch(e) {
    return Ad(Pi("", null, null, null, [""], e = jd(e), 0, [0], e))
}
function Pi(e, t, n, r, i, o, s, a, l) {
    for (var u = 0, f = 0, p = s, h = 0, v = 0, y = 0, g = 1, E = 1, c = 1, d = 0, m = "", w = i, x = o, T = r, S = m; E; )
        switch (y = d,
        d = je()) {
        case 40:
            if (y != 108 && pe(S, p - 1) == 58) {
                wl(S += B(ki(d), "&", "&\f"), "&\f") != -1 && (c = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            S += ki(d);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            S += Sh(y);
            break;
        case 92:
            S += xh(Ci() - 1, 7);
            continue;
        case 47:
            switch (ct()) {
            case 42:
            case 47:
                li(kh(Eh(je(), Ci()), t, n), l);
                break;
            default:
                S += "/"
            }
            break;
        case 123 * g:
            a[u++] = ot(S) * c;
        case 125 * g:
        case 59:
        case 0:
            switch (d) {
            case 0:
            case 125:
                E = 0;
            case 59 + f:
                c == -1 && (S = B(S, /\f/g, "")),
                v > 0 && ot(S) - p && li(v > 32 ? Qu(S + ";", r, n, p - 1) : Qu(B(S, " ", "") + ";", r, n, p - 2), l);
                break;
            case 59:
                S += ";";
            default:
                if (li(T = Xu(S, t, n, u, f, i, a, m, w = [], x = [], p), o),
                d === 123)
                    if (f === 0)
                        Pi(S, t, T, T, w, o, p, a, x);
                    else
                        switch (h === 99 && pe(S, 3) === 110 ? 100 : h) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            Pi(e, T, T, r && li(Xu(e, T, T, 0, 0, i, a, m, i, w = [], p), x), i, x, p, a, r ? w : x);
                            break;
                        default:
                            Pi(S, T, T, T, [""], x, 0, a, x)
                        }
            }
            u = f = v = 0,
            g = c = 1,
            m = S = "",
            p = s;
            break;
        case 58:
            p = 1 + ot(S),
            v = y;
        default:
            if (g < 1) {
                if (d == 123)
                    --g;
                else if (d == 125 && g++ == 0 && wh() == 125)
                    continue
            }
            switch (S += xo(d),
            d * g) {
            case 38:
                c = f > 0 ? 1 : (S += "\f",
                -1);
                break;
            case 44:
                a[u++] = (ot(S) - 1) * c,
                c = 1;
                break;
            case 64:
                ct() === 45 && (S += ki(je())),
                h = ct(),
                f = p = ot(m = S += Th(Ci())),
                d++;
                break;
            case 45:
                y === 45 && ot(S) == 2 && (g = 0)
            }
        }
    return o
}
function Xu(e, t, n, r, i, o, s, a, l, u, f) {
    for (var p = i - 1, h = i === 0 ? o : [""], v = ka(h), y = 0, g = 0, E = 0; y < r; ++y)
        for (var c = 0, d = Lr(e, p + 1, p = ph(g = s[y])), m = e; c < v; ++c)
            (m = Rd(g > 0 ? h[c] + " " + d : B(d, /&\f/g, h[c]))) && (l[E++] = m);
    return To(e, t, n, i === 0 ? Ta : a, l, u, f)
}
function kh(e, t, n) {
    return To(e, t, n, Id, xo(yh()), Lr(e, 2, -2), 0)
}
function Qu(e, t, n, r) {
    return To(e, t, n, Ca, Lr(e, 0, r), Lr(e, r + 1, -1), r)
}
function Ln(e, t) {
    for (var n = "", r = ka(e), i = 0; i < r; i++)
        n += t(e[i], i, e, t) || "";
    return n
}
function Ph(e, t, n, r) {
    switch (e.type) {
    case dh:
        if (e.children.length)
            break;
    case fh:
    case Ca:
        return e.return = e.return || e.value;
    case Id:
        return "";
    case Ld:
        return e.return = e.value + "{" + Ln(e.children, r) + "}";
    case Ta:
        e.value = e.props.join(",")
    }
    return ot(n = Ln(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
function _h(e) {
    var t = ka(e);
    return function(n, r, i, o) {
        for (var s = "", a = 0; a < t; a++)
            s += e[a](n, r, i, o) || "";
        return s
    }
}
function Oh(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
function zh(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)),
        t[n]
    }
}
var Nh = function(t, n, r) {
    for (var i = 0, o = 0; i = o,
    o = ct(),
    i === 38 && o === 12 && (n[r] = 1),
    !Rr(o); )
        je();
    return Br(t, Me)
}
  , Mh = function(t, n) {
    var r = -1
      , i = 44;
    do
        switch (Rr(i)) {
        case 0:
            i === 38 && ct() === 12 && (n[r] = 1),
            t[r] += Nh(Me - 1, n, r);
            break;
        case 2:
            t[r] += ki(i);
            break;
        case 4:
            if (i === 44) {
                t[++r] = ct() === 58 ? "&\f" : "",
                n[r] = t[r].length;
                break
            }
        default:
            t[r] += xo(i)
        }
    while (i = je());
    return t
}
  , Ih = function(t, n) {
    return Ad(Mh(jd(t), n))
}
  , Ku = new WeakMap
  , Lh = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
            if (r = r.parent,
            !r)
                return;
        if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ku.get(r)) && !i) {
            Ku.set(t, !0);
            for (var o = [], s = Ih(n, o), a = r.props, l = 0, u = 0; l < s.length; l++)
                for (var f = 0; f < a.length; f++,
                u++)
                    t.props[u] = o[l] ? s[l].replace(/&\f/g, a[f]) : a[f] + " " + s[l]
        }
    }
}
  , Rh = function(t) {
    if (t.type === "decl") {
        var n = t.value;
        n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "",
        t.value = "")
    }
};
function Fd(e, t) {
    switch (hh(e, t)) {
    case 5103:
        return b + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return b + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return b + e + Zi + e + we + e + e;
    case 6828:
    case 4268:
        return b + e + we + e + e;
    case 6165:
        return b + e + we + "flex-" + e + e;
    case 5187:
        return b + e + B(e, /(\w+).+(:[^]+)/, b + "box-$1$2" + we + "flex-$1$2") + e;
    case 5443:
        return b + e + we + "flex-item-" + B(e, /flex-|-self/, "") + e;
    case 4675:
        return b + e + we + "flex-line-pack" + B(e, /align-content|flex-|-self/, "") + e;
    case 5548:
        return b + e + we + B(e, "shrink", "negative") + e;
    case 5292:
        return b + e + we + B(e, "basis", "preferred-size") + e;
    case 6060:
        return b + "box-" + B(e, "-grow", "") + b + e + we + B(e, "grow", "positive") + e;
    case 4554:
        return b + B(e, /([^-])(transform)/g, "$1" + b + "$2") + e;
    case 6187:
        return B(B(B(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return B(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
        return B(B(e, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + we + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + b + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return B(e, /(.+)-inline(.+)/, b + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (ot(e) - 1 - t > 6)
            switch (pe(e, t + 1)) {
            case 109:
                if (pe(e, t + 4) !== 45)
                    break;
            case 102:
                return B(e, /(.+:)(.+)-([^]+)/, "$1" + b + "$2-$3$1" + Zi + (pe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~wl(e, "stretch") ? Fd(B(e, "stretch", "fill-available"), t) + e : e
            }
        break;
    case 4949:
        if (pe(e, t + 1) !== 115)
            break;
    case 6444:
        switch (pe(e, ot(e) - 3 - (~wl(e, "!important") && 10))) {
        case 107:
            return B(e, ":", ":" + b) + e;
        case 101:
            return B(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + b + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + b + "$2$3$1" + we + "$2box$3") + e
        }
        break;
    case 5936:
        switch (pe(e, t + 11)) {
        case 114:
            return b + e + we + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return b + e + we + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return b + e + we + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return b + e + we + e + e
    }
    return e
}
var $h = function(t, n, r, i) {
    if (t.length > -1 && !t.return)
        switch (t.type) {
        case Ca:
            t.return = Fd(t.value, t.length);
            break;
        case Ld:
            return Ln([tr(t, {
                value: B(t.value, "@", "@" + b)
            })], i);
        case Ta:
            if (t.length)
                return gh(t.props, function(o) {
                    switch (vh(o, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return Ln([tr(t, {
                            props: [B(o, /:(read-\w+)/, ":" + Zi + "$1")]
                        })], i);
                    case "::placeholder":
                        return Ln([tr(t, {
                            props: [B(o, /:(plac\w+)/, ":" + b + "input-$1")]
                        }), tr(t, {
                            props: [B(o, /:(plac\w+)/, ":" + Zi + "$1")]
                        }), tr(t, {
                            props: [B(o, /:(plac\w+)/, we + "input-$1")]
                        })], i)
                    }
                    return ""
                })
        }
}
  , jh = [$h]
  , Ah = function(t) {
    var n = t.key;
    if (n === "css") {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function(g) {
            var E = g.getAttribute("data-emotion");
            E.indexOf(" ") !== -1 && (document.head.appendChild(g),
            g.setAttribute("data-s", ""))
        })
    }
    var i = t.stylisPlugins || jh, o = {}, s, a = [];
    s = t.container || document.head,
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(g) {
        for (var E = g.getAttribute("data-emotion").split(" "), c = 1; c < E.length; c++)
            o[E[c]] = !0;
        a.push(g)
    });
    var l, u = [Lh, Rh];
    {
        var f, p = [Ph, Oh(function(g) {
            f.insert(g)
        })], h = _h(u.concat(i, p)), v = function(E) {
            return Ln(Ch(E), h)
        };
        l = function(E, c, d, m) {
            f = d,
            v(E ? E + "{" + c.styles + "}" : c.styles),
            m && (y.inserted[c.name] = !0)
        }
    }
    var y = {
        key: n,
        sheet: new ch({
            key: n,
            container: s,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: o,
        registered: {},
        insert: l
    };
    return y.sheet.hydrate(a),
    y
}
  , Dd = {
    exports: {}
}
  , W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe = typeof Symbol == "function" && Symbol.for
  , Pa = fe ? Symbol.for("react.element") : 60103
  , _a = fe ? Symbol.for("react.portal") : 60106
  , Co = fe ? Symbol.for("react.fragment") : 60107
  , ko = fe ? Symbol.for("react.strict_mode") : 60108
  , Po = fe ? Symbol.for("react.profiler") : 60114
  , _o = fe ? Symbol.for("react.provider") : 60109
  , Oo = fe ? Symbol.for("react.context") : 60110
  , Oa = fe ? Symbol.for("react.async_mode") : 60111
  , zo = fe ? Symbol.for("react.concurrent_mode") : 60111
  , No = fe ? Symbol.for("react.forward_ref") : 60112
  , Mo = fe ? Symbol.for("react.suspense") : 60113
  , Fh = fe ? Symbol.for("react.suspense_list") : 60120
  , Io = fe ? Symbol.for("react.memo") : 60115
  , Lo = fe ? Symbol.for("react.lazy") : 60116
  , Dh = fe ? Symbol.for("react.block") : 60121
  , Vh = fe ? Symbol.for("react.fundamental") : 60117
  , bh = fe ? Symbol.for("react.responder") : 60118
  , Bh = fe ? Symbol.for("react.scope") : 60119;
function Ve(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Pa:
            switch (e = e.type,
            e) {
            case Oa:
            case zo:
            case Co:
            case Po:
            case ko:
            case Mo:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Oo:
                case No:
                case Lo:
                case Io:
                case _o:
                    return e;
                default:
                    return t
                }
            }
        case _a:
            return t
        }
    }
}
function Vd(e) {
    return Ve(e) === zo
}
W.AsyncMode = Oa;
W.ConcurrentMode = zo;
W.ContextConsumer = Oo;
W.ContextProvider = _o;
W.Element = Pa;
W.ForwardRef = No;
W.Fragment = Co;
W.Lazy = Lo;
W.Memo = Io;
W.Portal = _a;
W.Profiler = Po;
W.StrictMode = ko;
W.Suspense = Mo;
W.isAsyncMode = function(e) {
    return Vd(e) || Ve(e) === Oa
}
;
W.isConcurrentMode = Vd;
W.isContextConsumer = function(e) {
    return Ve(e) === Oo
}
;
W.isContextProvider = function(e) {
    return Ve(e) === _o
}
;
W.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Pa
}
;
W.isForwardRef = function(e) {
    return Ve(e) === No
}
;
W.isFragment = function(e) {
    return Ve(e) === Co
}
;
W.isLazy = function(e) {
    return Ve(e) === Lo
}
;
W.isMemo = function(e) {
    return Ve(e) === Io
}
;
W.isPortal = function(e) {
    return Ve(e) === _a
}
;
W.isProfiler = function(e) {
    return Ve(e) === Po
}
;
W.isStrictMode = function(e) {
    return Ve(e) === ko
}
;
W.isSuspense = function(e) {
    return Ve(e) === Mo
}
;
W.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Co || e === zo || e === Po || e === ko || e === Mo || e === Fh || typeof e == "object" && e !== null && (e.$$typeof === Lo || e.$$typeof === Io || e.$$typeof === _o || e.$$typeof === Oo || e.$$typeof === No || e.$$typeof === Vh || e.$$typeof === bh || e.$$typeof === Bh || e.$$typeof === Dh)
}
;
W.typeOf = Ve;
Dd.exports = W;
var Uh = Dd.exports
  , bd = Uh
  , Wh = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , Hh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , Bd = {};
Bd[bd.ForwardRef] = Wh;
Bd[bd.Memo] = Hh;
var Gh = !0;
function Ud(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(i) {
        e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " "
    }),
    r
}
var za = function(t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || Gh === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles)
}
  , Wd = function(t, n, r) {
    za(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
        var o = n;
        do
            t.insert(n === o ? "." + i : "", o, t.sheet, !0),
            o = o.next;
        while (o !== void 0)
    }
};
function Yh(e) {
    for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r,
    i -= 4)
        n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
        n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
        n ^= n >>> 24,
        t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (i) {
    case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(r) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
var Xh = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , Qh = /[A-Z]|^ms/g
  , Kh = /_EMO_([^_]+?)_([^]*?)_EMO_/g
  , Hd = function(t) {
    return t.charCodeAt(1) === 45
}
  , qu = function(t) {
    return t != null && typeof t != "boolean"
}
  , gs = zh(function(e) {
    return Hd(e) ? e : e.replace(Qh, "-$&").toLowerCase()
})
  , Zu = function(t, n) {
    switch (t) {
    case "animation":
    case "animationName":
        if (typeof n == "string")
            return n.replace(Kh, function(r, i, o) {
                return st = {
                    name: i,
                    styles: o,
                    next: st
                },
                i
            })
    }
    return Xh[t] !== 1 && !Hd(t) && typeof n == "number" && n !== 0 ? n + "px" : n
};
function $r(e, t, n) {
    if (n == null)
        return "";
    if (n.__emotion_styles !== void 0)
        return n;
    switch (typeof n) {
    case "boolean":
        return "";
    case "object":
        {
            if (n.anim === 1)
                return st = {
                    name: n.name,
                    styles: n.styles,
                    next: st
                },
                n.name;
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0; )
                        st = {
                            name: r.name,
                            styles: r.styles,
                            next: st
                        },
                        r = r.next;
                var i = n.styles + ";";
                return i
            }
            return qh(e, t, n)
        }
    case "function":
        {
            if (e !== void 0) {
                var o = st
                  , s = n(e);
                return st = o,
                $r(e, t, s)
            }
            break
        }
    }
    if (t == null)
        return n;
    var a = t[n];
    return a !== void 0 ? a : n
}
function qh(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var i = 0; i < n.length; i++)
            r += $r(e, t, n[i]) + ";";
    else
        for (var o in n) {
            var s = n[o];
            if (typeof s != "object")
                t != null && t[s] !== void 0 ? r += o + "{" + t[s] + "}" : qu(s) && (r += gs(o) + ":" + Zu(o, s) + ";");
            else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
                for (var a = 0; a < s.length; a++)
                    qu(s[a]) && (r += gs(o) + ":" + Zu(o, s[a]) + ";");
            else {
                var l = $r(e, t, s);
                switch (o) {
                case "animation":
                case "animationName":
                    {
                        r += gs(o) + ":" + l + ";";
                        break
                    }
                default:
                    r += o + "{" + l + "}"
                }
            }
        }
    return r
}
var Ju = /label:\s*([^\s;\n{]+)\s*(;|$)/g, st, Na = function(t, n, r) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
        return t[0];
    var i = !0
      , o = "";
    st = void 0;
    var s = t[0];
    s == null || s.raw === void 0 ? (i = !1,
    o += $r(r, n, s)) : o += s[0];
    for (var a = 1; a < t.length; a++)
        o += $r(r, n, t[a]),
        i && (o += s[a]);
    Ju.lastIndex = 0;
    for (var l = "", u; (u = Ju.exec(o)) !== null; )
        l += "-" + u[1];
    var f = Yh(o) + l;
    return {
        name: f,
        styles: o,
        next: st
    }
}, Zh = function(t) {
    return t()
}, Jh = ba["useInsertionEffect"] ? ba["useInsertionEffect"] : !1, Gd = Jh || Zh, Ma = {}.hasOwnProperty, Yd = N.createContext(typeof HTMLElement < "u" ? Ah({
    key: "css"
}) : null);
Yd.Provider;
var Xd = function(t) {
    return N.forwardRef(function(n, r) {
        var i = N.useContext(Yd);
        return t(n, i, r)
    })
}
  , Qd = N.createContext({})
  , xl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__"
  , ev = function(t, n) {
    var r = {};
    for (var i in n)
        Ma.call(n, i) && (r[i] = n[i]);
    return r[xl] = t,
    r
}
  , tv = function(t) {
    var n = t.cache
      , r = t.serialized
      , i = t.isStringTag;
    return za(n, r, i),
    Gd(function() {
        return Wd(n, r, i)
    }),
    null
}
  , nv = Xd(function(e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[xl]
      , o = [r]
      , s = "";
    typeof e.className == "string" ? s = Ud(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
    var a = Na(o, void 0, N.useContext(Qd));
    s += t.key + "-" + a.name;
    var l = {};
    for (var u in e)
        Ma.call(e, u) && u !== "css" && u !== xl && (l[u] = e[u]);
    return l.ref = n,
    l.className = s,
    N.createElement(N.Fragment, null, N.createElement(tv, {
        cache: t,
        serialized: a,
        isStringTag: typeof i == "string"
    }), N.createElement(i, l))
})
  , rv = nv
  , iv = O.Fragment;
function le(e, t, n) {
    return Ma.call(t, "css") ? O.jsx(rv, ev(e, t), n) : O.jsx(e, t, n)
}
function Kd() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return Na(t)
}
var _ = function() {
    var t = Kd.apply(void 0, arguments)
      , n = "animation-" + t.name;
    return {
        name: n,
        styles: "@keyframes " + n + "{" + t.styles + "}",
        anim: 1,
        toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
    }
}
  , ov = function e(t) {
    for (var n = t.length, r = 0, i = ""; r < n; r++) {
        var o = t[r];
        if (o != null) {
            var s = void 0;
            switch (typeof o) {
            case "boolean":
                break;
            case "object":
                {
                    if (Array.isArray(o))
                        s = e(o);
                    else {
                        s = "";
                        for (var a in o)
                            o[a] && a && (s && (s += " "),
                            s += a)
                    }
                    break
                }
            default:
                s = o
            }
            s && (i && (i += " "),
            i += s)
        }
    }
    return i
};
function sv(e, t, n) {
    var r = []
      , i = Ud(e, r, n);
    return r.length < 2 ? n : i + t(r)
}
var lv = function(t) {
    var n = t.cache
      , r = t.serializedArr;
    return Gd(function() {
        for (var i = 0; i < r.length; i++)
            Wd(n, r[i], !1)
    }),
    null
}
  , ys = Xd(function(e, t) {
    var n = !1
      , r = []
      , i = function() {
        for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
            f[p] = arguments[p];
        var h = Na(f, t.registered);
        return r.push(h),
        za(t, h, !1),
        t.key + "-" + h.name
    }
      , o = function() {
        for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
            f[p] = arguments[p];
        return sv(t.registered, i, ov(f))
    }
      , s = {
        css: i,
        cx: o,
        theme: N.useContext(Qd)
    }
      , a = e.children(s);
    return n = !0,
    N.createElement(N.Fragment, null, N.createElement(lv, {
        cache: t,
        serializedArr: r
    }), a)
})
  , av = Object.defineProperty
  , uv = (e,t,n)=>t in e ? av(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , ai = (e,t,n)=>(uv(e, typeof t != "symbol" ? t + "" : t, n),
n)
  , El = new Map
  , ui = new WeakMap
  , ec = 0
  , cv = void 0;
function fv(e) {
    return e ? (ui.has(e) || (ec += 1,
    ui.set(e, ec.toString())),
    ui.get(e)) : "0"
}
function dv(e) {
    return Object.keys(e).sort().filter(t=>e[t] !== void 0).map(t=>`${t}_ ${t === "root" ? fv(e.root) : e[t]}`).toString()
}
function pv(e) {
    let t = dv(e)
      , n = El.get(t);
    if (!n) {
        const r = new Map;
        let i;
        const o = new IntersectionObserver(s=>{
            s.forEach(a=>{
                var l;
                const u = a.isIntersecting && i.some(f=>a.intersectionRatio >= f);
                e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
                (l = r.get(a.target)) == null || l.forEach(f=>{
                    f(u, a)
                }
                )
            }
            )
        }
        ,e);
        i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
        n = {
            id: t,
            observer: o,
            elements: r
        },
        El.set(t, n)
    }
    return n
}
function qd(e, t, n={}, r=cv) {
    if (typeof window.IntersectionObserver > "u" && r !== void 0) {
        const l = e.getBoundingClientRect();
        return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
            time: 0,
            boundingClientRect: l,
            intersectionRect: l,
            rootBounds: l
        }),
        ()=>{}
    }
    const {id: i, observer: o, elements: s} = pv(n);
    let a = s.get(e) || [];
    return s.has(e) || s.set(e, a),
    a.push(t),
    o.observe(e),
    function() {
        a.splice(a.indexOf(t), 1),
        a.length === 0 && (s.delete(e),
        o.unobserve(e)),
        s.size === 0 && (o.disconnect(),
        El.delete(i))
    }
}
function mv(e) {
    return typeof e.children != "function"
}
var tc = class extends N.Component {
    constructor(e) {
        super(e),
        ai(this, "node", null),
        ai(this, "_unobserveCb", null),
        ai(this, "handleNode", t=>{
            this.node && (this.unobserve(),
            !t && !this.props.triggerOnce && !this.props.skip && this.setState({
                inView: !!this.props.initialInView,
                entry: void 0
            })),
            this.node = t || null,
            this.observeNode()
        }
        ),
        ai(this, "handleChange", (t,n)=>{
            t && this.props.triggerOnce && this.unobserve(),
            mv(this.props) || this.setState({
                inView: t,
                entry: n
            }),
            this.props.onChange && this.props.onChange(t, n)
        }
        ),
        this.state = {
            inView: !!e.initialInView,
            entry: void 0
        }
    }
    componentDidUpdate(e) {
        (e.rootMargin !== this.props.rootMargin || e.root !== this.props.root || e.threshold !== this.props.threshold || e.skip !== this.props.skip || e.trackVisibility !== this.props.trackVisibility || e.delay !== this.props.delay) && (this.unobserve(),
        this.observeNode())
    }
    componentWillUnmount() {
        this.unobserve(),
        this.node = null
    }
    observeNode() {
        if (!this.node || this.props.skip)
            return;
        const {threshold: e, root: t, rootMargin: n, trackVisibility: r, delay: i, fallbackInView: o} = this.props;
        this._unobserveCb = qd(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: r,
            delay: i
        }, o)
    }
    unobserve() {
        this._unobserveCb && (this._unobserveCb(),
        this._unobserveCb = null)
    }
    render() {
        const {children: e} = this.props;
        if (typeof e == "function") {
            const {inView: v, entry: y} = this.state;
            return e({
                inView: v,
                entry: y,
                ref: this.handleNode
            })
        }
        const {as: t, triggerOnce: n, threshold: r, root: i, rootMargin: o, onChange: s, skip: a, trackVisibility: l, delay: u, initialInView: f, fallbackInView: p, ...h} = this.props;
        return N.createElement(t || "div", {
            ref: this.handleNode,
            ...h
        }, e)
    }
}
;
function Zd({threshold: e, delay: t, trackVisibility: n, rootMargin: r, root: i, triggerOnce: o, skip: s, initialInView: a, fallbackInView: l, onChange: u}={}) {
    var f;
    const [p,h] = N.useState(null)
      , v = N.useRef()
      , [y,g] = N.useState({
        inView: !!a,
        entry: void 0
    });
    v.current = u,
    N.useEffect(()=>{
        if (s || !p)
            return;
        let m;
        return m = qd(p, (w,x)=>{
            g({
                inView: w,
                entry: x
            }),
            v.current && v.current(w, x),
            x.isIntersecting && o && m && (m(),
            m = void 0)
        }
        , {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t
        }, l),
        ()=>{
            m && m()
        }
    }
    , [Array.isArray(e) ? e.toString() : e, p, i, r, o, s, n, l, t]);
    const E = (f = y.entry) == null ? void 0 : f.target
      , c = N.useRef();
    !p && E && !o && !s && c.current !== E && (c.current = E,
    g({
        inView: !!a,
        entry: void 0
    }));
    const d = [h, y.inView, y.entry];
    return d.ref = d[0],
    d.inView = d[1],
    d.entry = d[2],
    d
}
var Jd = {
    exports: {}
}
  , H = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia = Symbol.for("react.element"), La = Symbol.for("react.portal"), Ro = Symbol.for("react.fragment"), $o = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), Ao = Symbol.for("react.provider"), Fo = Symbol.for("react.context"), hv = Symbol.for("react.server_context"), Do = Symbol.for("react.forward_ref"), Vo = Symbol.for("react.suspense"), bo = Symbol.for("react.suspense_list"), Bo = Symbol.for("react.memo"), Uo = Symbol.for("react.lazy"), vv = Symbol.for("react.offscreen"), ep;
ep = Symbol.for("react.module.reference");
function Xe(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Ia:
            switch (e = e.type,
            e) {
            case Ro:
            case jo:
            case $o:
            case Vo:
            case bo:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case hv:
                case Fo:
                case Do:
                case Uo:
                case Bo:
                case Ao:
                    return e;
                default:
                    return t
                }
            }
        case La:
            return t
        }
    }
}
H.ContextConsumer = Fo;
H.ContextProvider = Ao;
H.Element = Ia;
H.ForwardRef = Do;
H.Fragment = Ro;
H.Lazy = Uo;
H.Memo = Bo;
H.Portal = La;
H.Profiler = jo;
H.StrictMode = $o;
H.Suspense = Vo;
H.SuspenseList = bo;
H.isAsyncMode = function() {
    return !1
}
;
H.isConcurrentMode = function() {
    return !1
}
;
H.isContextConsumer = function(e) {
    return Xe(e) === Fo
}
;
H.isContextProvider = function(e) {
    return Xe(e) === Ao
}
;
H.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ia
}
;
H.isForwardRef = function(e) {
    return Xe(e) === Do
}
;
H.isFragment = function(e) {
    return Xe(e) === Ro
}
;
H.isLazy = function(e) {
    return Xe(e) === Uo
}
;
H.isMemo = function(e) {
    return Xe(e) === Bo
}
;
H.isPortal = function(e) {
    return Xe(e) === La
}
;
H.isProfiler = function(e) {
    return Xe(e) === jo
}
;
H.isStrictMode = function(e) {
    return Xe(e) === $o
}
;
H.isSuspense = function(e) {
    return Xe(e) === Vo
}
;
H.isSuspenseList = function(e) {
    return Xe(e) === bo
}
;
H.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ro || e === jo || e === $o || e === Vo || e === bo || e === vv || typeof e == "object" && e !== null && (e.$$typeof === Uo || e.$$typeof === Bo || e.$$typeof === Ao || e.$$typeof === Fo || e.$$typeof === Do || e.$$typeof === ep || e.getModuleId !== void 0)
}
;
H.typeOf = Xe;
Jd.exports = H;
var gv = Jd.exports;
_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;
_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;
_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;
_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;
_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;
_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;
_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;
_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;
_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;
_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const yv = _`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
  , wv = _`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , Sv = _`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , xv = _`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , Ev = _`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , Ra = _`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , Tv = _`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , Cv = _`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , kv = _`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , Pv = _`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , _v = _`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , Ov = _`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
  , zv = _`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
function Nv({duration: e=1e3, delay: t=0, timingFunction: n="ease", keyframes: r=Ra, iterationCount: i=1}) {
    return Kd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `
}
function Mv(e) {
    return e == null
}
function Iv(e) {
    return typeof e == "string" || typeof e == "number" || typeof e == "boolean"
}
function tp(e, t) {
    return n=>n ? e() : t()
}
function jr(e) {
    return tp(e, ()=>null)
}
function Tl(e) {
    return jr(()=>({
        opacity: 0
    }))(e)
}
const np = e=>{
    const {cascade: t=!1, damping: n=.5, delay: r=0, duration: i=1e3, fraction: o=0, keyframes: s=Ra, triggerOnce: a=!1, className: l, style: u, childClassName: f, childStyle: p, children: h, onVisibilityChange: v} = e
      , y = N.useMemo(()=>Nv({
        keyframes: s,
        duration: i
    }), [i, s]);
    return Mv(h) ? null : Iv(h) ? le(Rv, {
        ...e,
        animationStyles: y,
        children: String(h)
    }) : gv.isFragment(h) ? le(rp, {
        ...e,
        animationStyles: y
    }) : le(iv, {
        children: N.Children.map(h, (g,E)=>{
            if (!N.isValidElement(g))
                return null;
            const c = r + (t ? E * i * n : 0);
            switch (g.type) {
            case "ol":
            case "ul":
                return le(ys, {
                    children: ({cx: d})=>le(g.type, {
                        ...g.props,
                        className: d(l, g.props.className),
                        style: Object.assign({}, u, g.props.style),
                        children: le(np, {
                            ...e,
                            children: g.props.children
                        })
                    })
                });
            case "li":
                return le(tc, {
                    threshold: o,
                    triggerOnce: a,
                    onChange: v,
                    children: ({inView: d, ref: m})=>le(ys, {
                        children: ({cx: w})=>le(g.type, {
                            ...g.props,
                            ref: m,
                            className: w(f, g.props.className),
                            css: jr(()=>y)(d),
                            style: Object.assign({}, p, g.props.style, Tl(!d), {
                                animationDelay: c + "ms"
                            })
                        })
                    })
                });
            default:
                return le(tc, {
                    threshold: o,
                    triggerOnce: a,
                    onChange: v,
                    children: ({inView: d, ref: m})=>le("div", {
                        ref: m,
                        className: l,
                        css: jr(()=>y)(d),
                        style: Object.assign({}, u, Tl(!d), {
                            animationDelay: c + "ms"
                        }),
                        children: le(ys, {
                            children: ({cx: w})=>le(g.type, {
                                ...g.props,
                                className: w(f, g.props.className),
                                style: Object.assign({}, p, g.props.style)
                            })
                        })
                    })
                })
            }
        }
        )
    })
}
  , Lv = {
    display: "inline-block",
    whiteSpace: "pre"
}
  , Rv = e=>{
    const {animationStyles: t, cascade: n=!1, damping: r=.5, delay: i=0, duration: o=1e3, fraction: s=0, triggerOnce: a=!1, className: l, style: u, children: f, onVisibilityChange: p} = e
      , {ref: h, inView: v} = Zd({
        triggerOnce: a,
        threshold: s,
        onChange: p
    });
    return tp(()=>le("div", {
        ref: h,
        className: l,
        style: Object.assign({}, u, Lv),
        children: f.split("").map((y,g)=>le("span", {
            css: jr(()=>t)(v),
            style: {
                animationDelay: i + g * o * r + "ms"
            },
            children: y
        }, g))
    }), ()=>le(rp, {
        ...e,
        children: f
    }))(n)
}
  , rp = e=>{
    const {animationStyles: t, fraction: n=0, triggerOnce: r=!1, className: i, style: o, children: s, onVisibilityChange: a} = e
      , {ref: l, inView: u} = Zd({
        triggerOnce: r,
        threshold: n,
        onChange: a
    });
    return le("div", {
        ref: l,
        className: i,
        css: jr(()=>t)(u),
        style: Object.assign({}, o, Tl(!u)),
        children: s
    })
}
;
_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;
_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;
_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;
_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;
_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;
_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;
const $v = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
  , jv = _`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`
  , Av = _`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`
  , Fv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`
  , Dv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`
  , Vv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`
  , bv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`
  , Bv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`
  , Uv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`
  , Wv = _`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`
  , Hv = _`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`
  , Gv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`
  , Yv = _`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;
function Xv(e, t, n) {
    switch (n) {
    case "bottom-left":
        return t ? jv : wv;
    case "bottom-right":
        return t ? Av : Sv;
    case "down":
        return e ? t ? Dv : Ev : t ? Fv : xv;
    case "left":
        return e ? t ? bv : Tv : t ? Vv : Ra;
    case "right":
        return e ? t ? Uv : kv : t ? Bv : Cv;
    case "top-left":
        return t ? Wv : Pv;
    case "top-right":
        return t ? Hv : _v;
    case "up":
        return e ? t ? Yv : zv : t ? Gv : Ov;
    default:
        return t ? $v : yv
    }
}
const nc = e=>{
    const {big: t=!1, direction: n, reverse: r=!1, ...i} = e
      , o = N.useMemo(()=>Xv(t, r, n), [t, n, r]);
    return le(np, {
        keyframes: o,
        ...i
    })
}
;
_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;
_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;
_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;
_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;
_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;
_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;
_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;
_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;
_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;
_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;
_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;
_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;
_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;
_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;
_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;
_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;
_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;
_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;
_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;
_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
var $a = {}
  , Ji = function() {
    return Ji = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }
    ,
    Ji.apply(this, arguments)
}
  , Qv = function() {
    function e(t, n, r) {
        var i = this;
        this.endVal = n,
        this.options = r,
        this.version = "2.8.0",
        this.defaults = {
            startVal: 0,
            decimalPlaces: 0,
            duration: 2,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1,
            smartEasingThreshold: 999,
            smartEasingAmount: 333,
            separator: ",",
            decimal: ".",
            prefix: "",
            suffix: "",
            enableScrollSpy: !1,
            scrollSpyDelay: 200,
            scrollSpyOnce: !1
        },
        this.finalEndVal = null,
        this.useEasing = !0,
        this.countDown = !1,
        this.error = "",
        this.startVal = 0,
        this.paused = !0,
        this.once = !1,
        this.count = function(o) {
            i.startTime || (i.startTime = o);
            var s = o - i.startTime;
            i.remaining = i.duration - s,
            i.useEasing ? i.countDown ? i.frameVal = i.startVal - i.easingFn(s, 0, i.startVal - i.endVal, i.duration) : i.frameVal = i.easingFn(s, i.startVal, i.endVal - i.startVal, i.duration) : i.frameVal = i.startVal + (i.endVal - i.startVal) * (s / i.duration);
            var a = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
            i.frameVal = a ? i.endVal : i.frameVal,
            i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces)),
            i.printValue(i.frameVal),
            s < i.duration ? i.rAF = requestAnimationFrame(i.count) : i.finalEndVal !== null ? i.update(i.finalEndVal) : i.options.onCompleteCallback && i.options.onCompleteCallback()
        }
        ,
        this.formatNumber = function(o) {
            var s, a, l, u, f = o < 0 ? "-" : "";
            s = Math.abs(o).toFixed(i.options.decimalPlaces);
            var p = (s += "").split(".");
            if (a = p[0],
            l = p.length > 1 ? i.options.decimal + p[1] : "",
            i.options.useGrouping) {
                u = "";
                for (var h = 3, v = 0, y = 0, g = a.length; y < g; ++y)
                    i.options.useIndianSeparators && y === 4 && (h = 2,
                    v = 1),
                    y !== 0 && v % h == 0 && (u = i.options.separator + u),
                    v++,
                    u = a[g - y - 1] + u;
                a = u
            }
            return i.options.numerals && i.options.numerals.length && (a = a.replace(/[0-9]/g, function(E) {
                return i.options.numerals[+E]
            }),
            l = l.replace(/[0-9]/g, function(E) {
                return i.options.numerals[+E]
            })),
            f + i.options.prefix + a + l + i.options.suffix
        }
        ,
        this.easeOutExpo = function(o, s, a, l) {
            return a * (1 - Math.pow(2, -10 * o / l)) * 1024 / 1023 + s
        }
        ,
        this.options = Ji(Ji({}, this.defaults), r),
        this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber,
        this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo,
        this.startVal = this.validateValue(this.options.startVal),
        this.frameVal = this.startVal,
        this.endVal = this.validateValue(n),
        this.options.decimalPlaces = Math.max(this.options.decimalPlaces),
        this.resetDuration(),
        this.options.separator = String(this.options.separator),
        this.useEasing = this.options.useEasing,
        this.options.separator === "" && (this.options.useGrouping = !1),
        this.el = typeof t == "string" ? document.getElementById(t) : t,
        this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined",
        typeof window < "u" && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [],
        window.onScrollFns.push(function() {
            return i.handleScroll(i)
        }),
        window.onscroll = function() {
            window.onScrollFns.forEach(function(o) {
                return o()
            })
        }
        ,
        this.handleScroll(this)))
    }
    return e.prototype.handleScroll = function(t) {
        if (t && window && !t.once) {
            var n = window.innerHeight + window.scrollY
              , r = t.el.getBoundingClientRect()
              , i = r.top + window.pageYOffset
              , o = r.top + r.height + window.pageYOffset;
            o < n && o > window.scrollY && t.paused ? (t.paused = !1,
            setTimeout(function() {
                return t.start()
            }, t.options.scrollSpyDelay),
            t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > o || i > n) && !t.paused && t.reset()
        }
    }
    ,
    e.prototype.determineDirectionAndSmartEasing = function() {
        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t;
        var n = t - this.startVal;
        if (Math.abs(n) > this.options.smartEasingThreshold && this.options.useEasing) {
            this.finalEndVal = t;
            var r = this.countDown ? 1 : -1;
            this.endVal = t + r * this.options.smartEasingAmount,
            this.duration = this.duration / 2
        } else
            this.endVal = t,
            this.finalEndVal = null;
        this.finalEndVal !== null ? this.useEasing = !1 : this.useEasing = this.options.useEasing
    }
    ,
    e.prototype.start = function(t) {
        this.error || (this.options.onStartCallback && this.options.onStartCallback(),
        t && (this.options.onCompleteCallback = t),
        this.duration > 0 ? (this.determineDirectionAndSmartEasing(),
        this.paused = !1,
        this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
    }
    ,
    e.prototype.pauseResume = function() {
        this.paused ? (this.startTime = null,
        this.duration = this.remaining,
        this.startVal = this.frameVal,
        this.determineDirectionAndSmartEasing(),
        this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF),
        this.paused = !this.paused
    }
    ,
    e.prototype.reset = function() {
        cancelAnimationFrame(this.rAF),
        this.paused = !0,
        this.resetDuration(),
        this.startVal = this.validateValue(this.options.startVal),
        this.frameVal = this.startVal,
        this.printValue(this.startVal)
    }
    ,
    e.prototype.update = function(t) {
        cancelAnimationFrame(this.rAF),
        this.startTime = null,
        this.endVal = this.validateValue(t),
        this.endVal !== this.frameVal && (this.startVal = this.frameVal,
        this.finalEndVal == null && this.resetDuration(),
        this.finalEndVal = null,
        this.determineDirectionAndSmartEasing(),
        this.rAF = requestAnimationFrame(this.count))
    }
    ,
    e.prototype.printValue = function(t) {
        var n;
        if (this.el) {
            var r = this.formattingFn(t);
            !((n = this.options.plugin) === null || n === void 0) && n.render ? this.options.plugin.render(this.el, r) : this.el.tagName === "INPUT" ? this.el.value = r : this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = r : this.el.innerHTML = r
        }
    }
    ,
    e.prototype.ensureNumber = function(t) {
        return typeof t == "number" && !isNaN(t)
    }
    ,
    e.prototype.validateValue = function(t) {
        var n = Number(t);
        return this.ensureNumber(n) ? n : (this.error = "[CountUp] invalid start or end value: ".concat(t),
        null)
    }
    ,
    e.prototype.resetDuration = function() {
        this.startTime = null,
        this.duration = 1e3 * Number(this.options.duration),
        this.remaining = this.duration
    }
    ,
    e
}();
const Kv = Object.freeze(Object.defineProperty({
    __proto__: null,
    CountUp: Qv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , qv = xp(Kv);
Object.defineProperty($a, "__esModule", {
    value: !0
});
var ue = N
  , Zv = qv;
function Jv(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r, i, o, s, a = [], l = !0, u = !1;
        try {
            if (o = (n = n.call(e)).next,
            t === 0) {
                if (Object(n) !== n)
                    return;
                l = !1
            } else
                for (; !(l = (r = o.call(n)).done) && (a.push(r.value),
                a.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && n.return != null && (s = n.return(),
                Object(s) !== s))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return a
    }
}
function rc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? rc(Object(n), !0).forEach(function(r) {
            eg(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function eg(e, t, n) {
    return t = lg(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Cl() {
    return Cl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Cl.apply(this, arguments)
}
function tg(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function ip(e, t) {
    if (e == null)
        return {};
    var n = tg(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function ng(e, t) {
    return rg(e) || Jv(e, t) || ig(e, t) || og()
}
function rg(e) {
    if (Array.isArray(e))
        return e
}
function ig(e, t) {
    if (e) {
        if (typeof e == "string")
            return ic(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return ic(e, t)
    }
}
function ic(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function og() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function sg(e, t) {
    if (typeof e != "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function lg(e) {
    var t = sg(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
var ag = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ue.useLayoutEffect : ue.useEffect;
function qe(e) {
    var t = ue.useRef(e);
    return ag(function() {
        t.current = e
    }),
    ue.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
        return t.current.apply(void 0, r)
    }, [])
}
var ug = function(t, n) {
    var r = n.decimal
      , i = n.decimals
      , o = n.duration
      , s = n.easingFn
      , a = n.end
      , l = n.formattingFn
      , u = n.numerals
      , f = n.prefix
      , p = n.separator
      , h = n.start
      , v = n.suffix
      , y = n.useEasing
      , g = n.useGrouping
      , E = n.useIndianSeparators
      , c = n.enableScrollSpy
      , d = n.scrollSpyDelay
      , m = n.scrollSpyOnce;
    return new Zv.CountUp(t,a,{
        startVal: h,
        duration: o,
        decimal: r,
        decimalPlaces: i,
        easingFn: s,
        formattingFn: l,
        numerals: u,
        separator: p,
        prefix: f,
        suffix: v,
        useEasing: y,
        useIndianSeparators: E,
        useGrouping: g,
        enableScrollSpy: c,
        scrollSpyDelay: d,
        scrollSpyOnce: m
    })
}
  , cg = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"]
  , fg = {
    decimal: ".",
    separator: ",",
    delay: null,
    prefix: "",
    suffix: "",
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1
}
  , op = function(t) {
    var n = Object.fromEntries(Object.entries(t).filter(function(C) {
        var j = ng(C, 2)
          , z = j[1];
        return z !== void 0
    }))
      , r = ue.useMemo(function() {
        return eo(eo({}, fg), n)
    }, [t])
      , i = r.ref
      , o = r.startOnMount
      , s = r.enableReinitialize
      , a = r.delay
      , l = r.onEnd
      , u = r.onStart
      , f = r.onPauseResume
      , p = r.onReset
      , h = r.onUpdate
      , v = ip(r, cg)
      , y = ue.useRef()
      , g = ue.useRef()
      , E = ue.useRef(!1)
      , c = qe(function() {
        return ug(typeof i == "string" ? i : i.current, v)
    })
      , d = qe(function(C) {
        var j = y.current;
        if (j && !C)
            return j;
        var z = c();
        return y.current = z,
        z
    })
      , m = qe(function() {
        var C = function() {
            return d(!0).start(function() {
                l == null || l({
                    pauseResume: w,
                    reset: x,
                    start: S,
                    update: T
                })
            })
        };
        a && a > 0 ? g.current = setTimeout(C, a * 1e3) : C(),
        u == null || u({
            pauseResume: w,
            reset: x,
            update: T
        })
    })
      , w = qe(function() {
        d().pauseResume(),
        f == null || f({
            reset: x,
            start: S,
            update: T
        })
    })
      , x = qe(function() {
        d().el && (g.current && clearTimeout(g.current),
        d().reset(),
        p == null || p({
            pauseResume: w,
            start: S,
            update: T
        }))
    })
      , T = qe(function(C) {
        d().update(C),
        h == null || h({
            pauseResume: w,
            reset: x,
            start: S
        })
    })
      , S = qe(function() {
        x(),
        m()
    })
      , P = qe(function(C) {
        o && (C && x(),
        m())
    });
    return ue.useEffect(function() {
        E.current ? s && P(!0) : (E.current = !0,
        P())
    }, [s, E, P, a, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.formattingFn]),
    ue.useEffect(function() {
        return function() {
            x()
        }
    }, [x]),
    {
        start: S,
        pauseResume: w,
        reset: x,
        update: T,
        getCountUp: d
    }
}
  , dg = ["className", "redraw", "containerProps", "children", "style"]
  , pg = function(t) {
    var n = t.className
      , r = t.redraw
      , i = t.containerProps
      , o = t.children
      , s = t.style
      , a = ip(t, dg)
      , l = ue.useRef(null)
      , u = ue.useRef(!1)
      , f = op(eo(eo({}, a), {}, {
        ref: l,
        startOnMount: typeof o != "function" || t.delay === 0,
        enableReinitialize: !1
    }))
      , p = f.start
      , h = f.reset
      , v = f.update
      , y = f.pauseResume
      , g = f.getCountUp
      , E = qe(function() {
        p()
    })
      , c = qe(function(w) {
        t.preserveValue || h(),
        v(w)
    })
      , d = qe(function() {
        if (typeof t.children == "function" && !(l.current instanceof Element)) {
            console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);
            return
        }
        g()
    });
    ue.useEffect(function() {
        d()
    }, [d]),
    ue.useEffect(function() {
        u.current && c(t.end)
    }, [t.end, c]);
    var m = r && t;
    return ue.useEffect(function() {
        r && u.current && E()
    }, [E, r, m]),
    ue.useEffect(function() {
        !r && u.current && E()
    }, [E, r, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.className, t.formattingFn]),
    ue.useEffect(function() {
        u.current = !0
    }, []),
    typeof o == "function" ? o({
        countUpRef: l,
        start: p,
        reset: h,
        update: v,
        pauseResume: y,
        getCountUp: g
    }) : ue.createElement("span", Cl({
        className: n,
        ref: l,
        style: s
    }, i), typeof t.start < "u" ? g().formattingFn(t.start) : "")
}
  , mg = $a.default = pg;
$a.useCountUp = op;
const hg = e=>{
    const [t,n] = N.useState(0)
      , {data: r} = e
      , i = So()
      , o = t === 1;
    return N.useEffect(()=>{
        n(0)
    }
    , [JSON.stringify(r)]),
    r ? O.jsxs("div", {
        className: "big-box-white-2 d-flex flex-column",
        children: [O.jsxs("div", {
            className: "d-flex justify-content-center",
            children: [O.jsx("a", {
                className: `btn-tab ${t === 0 ? "active" : ""}`,
                href: "#",
                onClick: s=>{
                    s.preventDefault(),
                    n(0)
                }
                ,
                children: i.isEn ? "TURBINE" : "TURBINA"
            }), O.jsx("a", {
                className: `btn-tab ${t === 1 ? "active" : ""}`,
                href: "#",
                onClick: s=>{
                    s.preventDefault(),
                    n(1)
                }
                ,
                children: i.isEn ? "WIND FARM" : "FARMA"
            })]
        }), O.jsxs("div", {
            className: "d-flex justify-content-center my-auto h-100 align-items-center video-container",
            children: [!o && O.jsxs(nc, {
                triggerOnce: !0,
                children: [O.jsx("video", {
                    id: "video",
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    children: O.jsx("source", {
                        src: "../calc/media/Kafle-x1_05mbps.mp4",
                        type: "video/mp4"
                    })
                }), " "]
            }), o && O.jsxs(nc, {
                triggerOnce: !0,
                children: [O.jsx("video", {
                    id: "video",
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    children: O.jsx("source", {
                        src: "../calc/media/Kafle-x4_05mbps.mp4",
                        type: "video/mp4"
                    })
                }), " "]
            })]
        }), O.jsxs("div", {
            children: [O.jsx("div", {
                className: "box-time-1",
                children: O.jsxs("div", {
                    className: "d-flex",
                    children: [O.jsx("div", {
                        className: "d-flex align-items-center",
                        children: O.jsx("img", {
                            className: "ico-jednostka d-flex align-items-center",
                            src: `./assets/img/icons/${o ? r == null ? void 0 : r.countTypeFarma : r == null ? void 0 : r.countType}`,
                            alt: ""
                        })
                    }), O.jsx("div", {
                        className: "d-flex align-items-end",
                        children: O.jsxs("p", {
                            className: "fs-26-36 fw-700 mb-0 ps-2 text-nowrap",
                            children: [O.jsx("span", {
                                className: "fs-18-24 fw-500",
                                children: " "
                            }), O.jsx(mg, {
                                delay: .4,
                                decimalPlaces: 2,
                                separator: " ",
                                decimals: (o ? r.countValueFarma : r.countValue) < 1 ? 2 : 0,
                                end: o ? r.countValueFarma : r.countValue
                            }), O.jsxs("span", {
                                className: "mb-0 fs-24 fw-700",
                                children: [" ", o ? i.isEn ? r.countUnitEnFarma : r.countUnitFarma : i.isEn ? r.countUnitEn : r.countUnit]
                            })]
                        })
                    })]
                })
            }), O.jsx("div", {
                className: "box-time-2",
                children: O.jsxs("p", {
                    className: "mb-0 fs-16 w-100",
                    children: [!o && (i.isEn ? r.textEn : r.text), o && (i.isEn ? r.textFarmaEn : r.textFarma)]
                })
            })]
        })]
    }) : O.jsx(lh, {})
}
;
function vg(e) {
    const {data: t, selectedItemIndex: n} = e
      , [r,i] = N.useState(0)
      , [o,s] = N.useState(void 0)
      , [a,l] = N.useState(void 0)
      , [u,f] = N.useState(!1);
    return N.useEffect(()=>{
        i(r + 1),
        r % 2 ? l(t) : s(t)
    }
    , [n]),
    N.useEffect(()=>{
        setTimeout(()=>{
            f(!0)
        }
        , 1e3)
    }
    , []),
    O.jsx("div", {
        className: `box-container ${u ? "" : "skipAnimation"}`,
        children: O.jsx("div", {
            className: "box-item",
            children: O.jsxs("div", {
                className: "flip-box",
                children: [O.jsx("div", {
                    className: "flip-box-front text-center",
                    style: {
                        msTransform: `rotateY(-${r * 180}deg)`,
                        transform: `rotateY(-${r * 180}deg)`
                    },
                    children: O.jsx("div", {
                        className: "inner",
                        children: a
                    })
                }), O.jsx("div", {
                    className: "flip-box-back text-center",
                    style: {
                        msTransform: `rotateY(-${r * 180 + 180}deg)`,
                        transform: `rotateY(-${r * 180 + 180}deg)`
                    },
                    children: O.jsx("div", {
                        className: "inner",
                        children: o
                    })
                })]
            })
        })
    })
}
function oc(e) {
    return e !== null && typeof e == "object" && "constructor"in e && e.constructor === Object
}
function ja(e, t) {
    e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach(n=>{
        typeof e[n] > "u" ? e[n] = t[n] : oc(t[n]) && oc(e[n]) && Object.keys(t[n]).length > 0 && ja(e[n], t[n])
    }
    )
}
const sp = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function dn() {
    const e = typeof document < "u" ? document : {};
    return ja(e, sp),
    e
}
const gg = {
    document: sp,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
        null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function be() {
    const e = typeof window < "u" ? window : {};
    return ja(e, gg),
    e
}
function yg(e) {
    const t = e;
    Object.keys(t).forEach(n=>{
        try {
            t[n] = null
        } catch {}
        try {
            delete t[n]
        } catch {}
    }
    )
}
function kl(e, t) {
    return t === void 0 && (t = 0),
    setTimeout(e, t)
}
function to() {
    return Date.now()
}
function wg(e) {
    const t = be();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
}
function Sg(e, t) {
    t === void 0 && (t = "x");
    const n = be();
    let r, i, o;
    const s = wg(e);
    return n.WebKitCSSMatrix ? (i = s.transform || s.webkitTransform,
    i.split(",").length > 6 && (i = i.split(", ").map(a=>a.replace(",", ".")).join(", ")),
    o = new n.WebKitCSSMatrix(i === "none" ? "" : i)) : (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    r = o.toString().split(",")),
    t === "x" && (n.WebKitCSSMatrix ? i = o.m41 : r.length === 16 ? i = parseFloat(r[12]) : i = parseFloat(r[4])),
    t === "y" && (n.WebKitCSSMatrix ? i = o.m42 : r.length === 16 ? i = parseFloat(r[13]) : i = parseFloat(r[5])),
    i || 0
}
function ci(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function xg(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function Le() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (r != null && !xg(r)) {
            const i = Object.keys(Object(r)).filter(o=>t.indexOf(o) < 0);
            for (let o = 0, s = i.length; o < s; o += 1) {
                const a = i[o]
                  , l = Object.getOwnPropertyDescriptor(r, a);
                l !== void 0 && l.enumerable && (ci(e[a]) && ci(r[a]) ? r[a].__swiper__ ? e[a] = r[a] : Le(e[a], r[a]) : !ci(e[a]) && ci(r[a]) ? (e[a] = {},
                r[a].__swiper__ ? e[a] = r[a] : Le(e[a], r[a])) : e[a] = r[a])
            }
        }
    }
    return e
}
function fi(e, t, n) {
    e.style.setProperty(t, n)
}
function lp(e) {
    let {swiper: t, targetPosition: n, side: r} = e;
    const i = be()
      , o = -t.translate;
    let s = null, a;
    const l = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none",
    i.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > o ? "next" : "prev"
      , f = (h,v)=>u === "next" && h >= v || u === "prev" && h <= v
      , p = ()=>{
        a = new Date().getTime(),
        s === null && (s = a);
        const h = Math.max(Math.min((a - s) / l, 1), 0)
          , v = .5 - Math.cos(h * Math.PI) / 2;
        let y = o + v * (n - o);
        if (f(y, n) && (y = n),
        t.wrapperEl.scrollTo({
            [r]: y
        }),
        f(y, n)) {
            t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                t.wrapperEl.style.overflow = "",
                t.wrapperEl.scrollTo({
                    [r]: y
                })
            }
            ),
            i.cancelAnimationFrame(t.cssModeFrameID);
            return
        }
        t.cssModeFrameID = i.requestAnimationFrame(p)
    }
    ;
    p()
}
function vt(e, t) {
    return t === void 0 && (t = ""),
    [...e.children].filter(n=>n.matches(t))
}
function Eg(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : [t]),
    n
}
function Tg(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
        e = r
    }
    return n
}
function Cg(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r),
        e = r
    }
    return n
}
function It(e, t) {
    return be().getComputedStyle(e, null).getPropertyValue(t)
}
function sc(e) {
    let t = e, n;
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (n += 1);
        return n
    }
}
function kg(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; )
        t ? r.matches(t) && n.push(r) : n.push(r),
        r = r.parentElement;
    return n
}
function lc(e, t, n) {
    const r = be();
    return n ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let ws;
function Pg() {
    const e = be()
      , t = dn();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
        touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}
function ap() {
    return ws || (ws = Pg()),
    ws
}
let Ss;
function _g(e) {
    let {userAgent: t} = e === void 0 ? {} : e;
    const n = ap()
      , r = be()
      , i = r.navigator.platform
      , o = t || r.navigator.userAgent
      , s = {
        ios: !1,
        android: !1
    }
      , a = r.screen.width
      , l = r.screen.height
      , u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
    let f = o.match(/(iPad).*OS\s([\d_]+)/);
    const p = o.match(/(iPod)(.*OS\s([\d_]+))?/)
      , h = !f && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , v = i === "Win32";
    let y = i === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !f && y && n.touch && g.indexOf(`${a}x ${l}`) >= 0 && (f = o.match(/(Version)\/([\d.]+)/),
    f || (f = [0, 1, "13_0_0"]),
    y = !1),
    u && !v && (s.os = "android",
    s.android = !0),
    (f || h || p) && (s.os = "ios",
    s.ios = !0),
    s
}
function Og(e) {
    return e === void 0 && (e = {}),
    Ss || (Ss = _g(e)),
    Ss
}
let xs;
function zg() {
    const e = be();
    let t = !1;
    function n() {
        const r = e.navigator.userAgent.toLowerCase();
        return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0
    }
    if (n()) {
        const r = String(e.navigator.userAgent);
        if (r.includes("Version/")) {
            const [i,o] = r.split("Version/")[1].split(" ")[0].split(".").map(s=>Number(s));
            t = i < 16 || i === 16 && o < 2
        }
    }
    return {
        isSafari: t || n(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function Ng() {
    return xs || (xs = zg()),
    xs
}
function Mg(e) {
    let {swiper: t, on: n, emit: r} = e;
    const i = be();
    let o = null
      , s = null;
    const a = ()=>{
        !t || t.destroyed || !t.initialized || (r("beforeResize"),
        r("resize"))
    }
      , l = ()=>{
        !t || t.destroyed || !t.initialized || (o = new ResizeObserver(p=>{
            s = i.requestAnimationFrame(()=>{
                const {width: h, height: v} = t;
                let y = h
                  , g = v;
                p.forEach(E=>{
                    let {contentBoxSize: c, contentRect: d, target: m} = E;
                    m && m !== t.el || (y = d ? d.width : (c[0] || c).inlineSize,
                    g = d ? d.height : (c[0] || c).blockSize)
                }
                ),
                (y !== h || g !== v) && a()
            }
            )
        }
        ),
        o.observe(t.el))
    }
      , u = ()=>{
        s && i.cancelAnimationFrame(s),
        o && o.unobserve && t.el && (o.unobserve(t.el),
        o = null)
    }
      , f = ()=>{
        !t || t.destroyed || !t.initialized || r("orientationchange")
    }
    ;
    n("init", ()=>{
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            l();
            return
        }
        i.addEventListener("resize", a),
        i.addEventListener("orientationchange", f)
    }
    ),
    n("destroy", ()=>{
        u(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", f)
    }
    )
}
function Ig(e) {
    let {swiper: t, extendParams: n, on: r, emit: i} = e;
    const o = []
      , s = be()
      , a = function(f, p) {
        p === void 0 && (p = {});
        const h = s.MutationObserver || s.WebkitMutationObserver
          , v = new h(y=>{
            if (t.__preventObserver__)
                return;
            if (y.length === 1) {
                i("observerUpdate", y[0]);
                return
            }
            const g = function() {
                i("observerUpdate", y[0])
            };
            s.requestAnimationFrame ? s.requestAnimationFrame(g) : s.setTimeout(g, 0)
        }
        );
        v.observe(f, {
            attributes: typeof p.attributes > "u" ? !0 : p.attributes,
            childList: typeof p.childList > "u" ? !0 : p.childList,
            characterData: typeof p.characterData > "u" ? !0 : p.characterData
        }),
        o.push(v)
    }
      , l = ()=>{
        if (t.params.observer) {
            if (t.params.observeParents) {
                const f = kg(t.hostEl);
                for (let p = 0; p < f.length; p += 1)
                    a(f[p])
            }
            a(t.hostEl, {
                childList: t.params.observeSlideChildren
            }),
            a(t.wrapperEl, {
                attributes: !1
            })
        }
    }
      , u = ()=>{
        o.forEach(f=>{
            f.disconnect()
        }
        ),
        o.splice(0, o.length)
    }
    ;
    n({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    r("init", l),
    r("destroy", u)
}
var Lg = {
    on(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        const i = n ? "unshift" : "push";
        return e.split(" ").forEach(o=>{
            r.eventsListeners[o] || (r.eventsListeners[o] = []),
            r.eventsListeners[o][i](t)
        }
        ),
        r
    },
    once(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function")
            return r;
        function i() {
            r.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy;
            for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
                s[a] = arguments[a];
            t.apply(r, s)
        }
        return i.__emitterProxy = t,
        r.on(e, i, n)
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        const r = t ? "unshift" : "push";
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
        n
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1),
        t
    },
    off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(r=>{
            typeof t > "u" ? n.eventsListeners[r] = [] : n.eventsListeners[r] && n.eventsListeners[r].forEach((i,o)=>{
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[r].splice(o, 1)
            }
            )
        }
        ),
        n
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
            return e;
        let t, n, r;
        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
            o[s] = arguments[s];
        return typeof o[0] == "string" || Array.isArray(o[0]) ? (t = o[0],
        n = o.slice(1, o.length),
        r = e) : (t = o[0].events,
        n = o[0].data,
        r = o[0].context || e),
        n.unshift(r),
        (Array.isArray(t) ? t : t.split(" ")).forEach(l=>{
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(u=>{
                u.apply(r, [l, ...n])
            }
            ),
            e.eventsListeners && e.eventsListeners[l] && e.eventsListeners[l].forEach(u=>{
                u.apply(r, n)
            }
            )
        }
        ),
        e
    }
};
function Rg() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = r.clientWidth,
    typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = r.clientHeight,
    !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(It(r, "padding-left") || 0, 10) - parseInt(It(r, "padding-right") || 0, 10),
    n = n - parseInt(It(r, "padding-top") || 0, 10) - parseInt(It(r, "padding-bottom") || 0, 10),
    Number.isNaN(t) && (t = 0),
    Number.isNaN(n) && (n = 0),
    Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n
    }))
}
function $g() {
    const e = this;
    function t(z) {
        return e.isHorizontal() ? z : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[z]
    }
    function n(z, R) {
        return parseFloat(z.getPropertyValue(t(R)) || 0)
    }
    const r = e.params
      , {wrapperEl: i, slidesEl: o, size: s, rtlTranslate: a, wrongRTL: l} = e
      , u = e.virtual && r.virtual.enabled
      , f = u ? e.virtual.slides.length : e.slides.length
      , p = vt(o, `.${e.params.slideClass}, swiper-slide`)
      , h = u ? e.virtual.slides.length : p.length;
    let v = [];
    const y = []
      , g = [];
    let E = r.slidesOffsetBefore;
    typeof E == "function" && (E = r.slidesOffsetBefore.call(e));
    let c = r.slidesOffsetAfter;
    typeof c == "function" && (c = r.slidesOffsetAfter.call(e));
    const d = e.snapGrid.length
      , m = e.slidesGrid.length;
    let w = r.spaceBetween
      , x = -E
      , T = 0
      , S = 0;
    if (typeof s > "u")
        return;
    typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * s : typeof w == "string" && (w = parseFloat(w)),
    e.virtualSize = -w,
    p.forEach(z=>{
        a ? z.style.marginLeft = "" : z.style.marginRight = "",
        z.style.marginBottom = "",
        z.style.marginTop = ""
    }
    ),
    r.centeredSlides && r.cssMode && (fi(i, "--swiper-centered-offset-before", ""),
    fi(i, "--swiper-centered-offset-after", ""));
    const P = r.grid && r.grid.rows > 1 && e.grid;
    P && e.grid.initSlides(h);
    let C;
    const j = r.slidesPerView === "auto" && r.breakpoints && Object.keys(r.breakpoints).filter(z=>typeof r.breakpoints[z].slidesPerView < "u").length > 0;
    for (let z = 0; z < h; z += 1) {
        C = 0;
        let R;
        if (p[z] && (R = p[z]),
        P && e.grid.updateSlide(z, R, h, t),
        !(p[z] && It(R, "display") === "none")) {
            if (r.slidesPerView === "auto") {
                j && (p[z].style[t("width")] = "");
                const A = getComputedStyle(R)
                  , ve = R.style.transform
                  , Tt = R.style.webkitTransform;
                if (ve && (R.style.transform = "none"),
                Tt && (R.style.webkitTransform = "none"),
                r.roundLengths)
                    C = e.isHorizontal() ? lc(R, "width", !0) : lc(R, "height", !0);
                else {
                    const Ct = n(A, "width")
                      , Gt = n(A, "padding-left")
                      , M = n(A, "padding-right")
                      , L = n(A, "margin-left")
                      , $ = n(A, "margin-right")
                      , Q = A.getPropertyValue("box-sizing");
                    if (Q && Q === "border-box")
                        C = Ct + L + $;
                    else {
                        const {clientWidth: ne, offsetWidth: pn} = R;
                        C = Ct + Gt + M + L + $ + (pn - ne)
                    }
                }
                ve && (R.style.transform = ve),
                Tt && (R.style.webkitTransform = Tt),
                r.roundLengths && (C = Math.floor(C))
            } else
                C = (s - (r.slidesPerView - 1) * w) / r.slidesPerView,
                r.roundLengths && (C = Math.floor(C)),
                p[z] && (p[z].style[t("width")] = `${C}px`);
            p[z] && (p[z].swiperSlideSize = C),
            g.push(C),
            r.centeredSlides ? (x = x + C / 2 + T / 2 + w,
            T === 0 && z !== 0 && (x = x - s / 2 - w),
            z === 0 && (x = x - s / 2 - w),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            r.roundLengths && (x = Math.floor(x)),
            S % r.slidesPerGroup === 0 && v.push(x),
            y.push(x)) : (r.roundLengths && (x = Math.floor(x)),
            (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup === 0 && v.push(x),
            y.push(x),
            x = x + C + w),
            e.virtualSize += C + w,
            T = C,
            S += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, s) + c,
    a && l && (r.effect === "slide" || r.effect === "coverflow") && (i.style.width = `${e.virtualSize + w}px`),
    r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + w}px`),
    P && e.grid.updateWrapperSize(C, v, t),
    !r.centeredSlides) {
        const z = [];
        for (let R = 0; R < v.length; R += 1) {
            let A = v[R];
            r.roundLengths && (A = Math.floor(A)),
            v[R] <= e.virtualSize - s && z.push(A)
        }
        v = z,
        Math.floor(e.virtualSize - s) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - s)
    }
    if (u && r.loop) {
        const z = g[0] + w;
        if (r.slidesPerGroup > 1) {
            const R = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup)
              , A = z * r.slidesPerGroup;
            for (let ve = 0; ve < R; ve += 1)
                v.push(v[v.length - 1] + A)
        }
        for (let R = 0; R < e.virtual.slidesBefore + e.virtual.slidesAfter; R += 1)
            r.slidesPerGroup === 1 && v.push(v[v.length - 1] + z),
            y.push(y[y.length - 1] + z),
            e.virtualSize += z
    }
    if (v.length === 0 && (v = [0]),
    w !== 0) {
        const z = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        p.filter((R,A)=>!r.cssMode || r.loop ? !0 : A !== p.length - 1).forEach(R=>{
            R.style[z] = `${w}px`
        }
        )
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
        let z = 0;
        g.forEach(A=>{
            z += A + (w || 0)
        }
        ),
        z -= w;
        const R = z - s;
        v = v.map(A=>A <= 0 ? -E : A > R ? R + c : A)
    }
    if (r.centerInsufficientSlides) {
        let z = 0;
        if (g.forEach(R=>{
            z += R + (w || 0)
        }
        ),
        z -= w,
        z < s) {
            const R = (s - z) / 2;
            v.forEach((A,ve)=>{
                v[ve] = A - R
            }
            ),
            y.forEach((A,ve)=>{
                y[ve] = A + R
            }
            )
        }
    }
    if (Object.assign(e, {
        slides: p,
        snapGrid: v,
        slidesGrid: y,
        slidesSizesGrid: g
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
        fi(i, "--swiper-centered-offset-before", `${-v[0]}px`),
        fi(i, "--swiper-centered-offset-after", `${e.size / 2 - g[g.length - 1] / 2}px`);
        const z = -e.snapGrid[0]
          , R = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(A=>A + z),
        e.slidesGrid = e.slidesGrid.map(A=>A + R)
    }
    if (h !== f && e.emit("slidesLengthChange"),
    v.length !== d && (e.params.watchOverflow && e.checkOverflow(),
    e.emit("snapGridLengthChange")),
    y.length !== m && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade")) {
        const z = `${r.containerModifierClass}backface-hidden`
          , R = e.el.classList.contains(z);
        h <= r.maxBackfaceHiddenSlides ? R || e.el.classList.add(z) : R && e.el.classList.remove(z)
    }
}
function jg(e) {
    const t = this
      , n = []
      , r = t.virtual && t.params.virtual.enabled;
    let i = 0, o;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const s = a=>r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(a=>{
                n.push(a)
            }
            );
        else
            for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
                const a = t.activeIndex + o;
                if (a > t.slides.length && !r)
                    break;
                n.push(s(a))
            }
    else
        n.push(s(t.activeIndex));
    for (o = 0; o < n.length; o += 1)
        if (typeof n[o] < "u") {
            const a = n[o].offsetHeight;
            i = a > i ? a : i
        }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function Ag() {
    const e = this
      , t = e.slides
      , n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment()
}
function Fg(e) {
    e === void 0 && (e = this && this.translate || 0);
    const t = this
      , n = t.params
      , {slides: r, rtlTranslate: i, snapGrid: o} = t;
    if (r.length === 0)
        return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let s = -e;
    i && (s = e),
    r.forEach(l=>{
        l.classList.remove(n.slideVisibleClass)
    }
    ),
    t.visibleSlidesIndexes = [],
    t.visibleSlides = [];
    let a = n.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * t.size : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < r.length; l += 1) {
        const u = r[l];
        let f = u.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (f -= r[0].swiperSlideOffset);
        const p = (s + (n.centeredSlides ? t.minTranslate() : 0) - f) / (u.swiperSlideSize + a)
          , h = (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) / (u.swiperSlideSize + a)
          , v = -(s - f)
          , y = v + t.slidesSizesGrid[l];
        (v >= 0 && v < t.size - 1 || y > 1 && y <= t.size || v <= 0 && y >= t.size) && (t.visibleSlides.push(u),
        t.visibleSlidesIndexes.push(l),
        r[l].classList.add(n.slideVisibleClass)),
        u.progress = i ? -p : p,
        u.originalProgress = i ? -h : h
    }
}
function Dg(e) {
    const t = this;
    if (typeof e > "u") {
        const f = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * f || 0
    }
    const n = t.params
      , r = t.maxTranslate() - t.minTranslate();
    let {progress: i, isBeginning: o, isEnd: s, progressLoop: a} = t;
    const l = o
      , u = s;
    if (r === 0)
        i = 0,
        o = !0,
        s = !0;
    else {
        i = (e - t.minTranslate()) / r;
        const f = Math.abs(e - t.minTranslate()) < 1
          , p = Math.abs(e - t.maxTranslate()) < 1;
        o = f || i <= 0,
        s = p || i >= 1,
        f && (i = 0),
        p && (i = 1)
    }
    if (n.loop) {
        const f = t.getSlideIndexByData(0)
          , p = t.getSlideIndexByData(t.slides.length - 1)
          , h = t.slidesGrid[f]
          , v = t.slidesGrid[p]
          , y = t.slidesGrid[t.slidesGrid.length - 1]
          , g = Math.abs(e);
        g >= h ? a = (g - h) / y : a = (g + y - v) / y,
        a > 1 && (a -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: a,
        isBeginning: o,
        isEnd: s
    }),
    (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
    o && !l && t.emit("reachBeginning toEdge"),
    s && !u && t.emit("reachEnd toEdge"),
    (l && !o || u && !s) && t.emit("fromEdge"),
    t.emit("progress", i)
}
function Vg() {
    const e = this
      , {slides: t, params: n, slidesEl: r, activeIndex: i} = e
      , o = e.virtual && n.virtual.enabled
      , s = l=>vt(r, `.${n.slideClass}${l}, swiper-slide ${l}`)[0];
    t.forEach(l=>{
        l.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
    }
    );
    let a;
    if (o)
        if (n.loop) {
            let l = i - e.virtual.slidesBefore;
            l < 0 && (l = e.virtual.slides.length + l),
            l >= e.virtual.slides.length && (l -= e.virtual.slides.length),
            a = s(`[data-swiper-slide-index="${l}"]`)
        } else
            a = s(`[data-swiper-slide-index="${i}"]`);
    else
        a = t[i];
    if (a) {
        a.classList.add(n.slideActiveClass);
        let l = Cg(a, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && !l && (l = t[0]),
        l && l.classList.add(n.slideNextClass);
        let u = Tg(a, `.${n.slideClass}, swiper-slide`)[0];
        n.loop && !u === 0 && (u = t[t.length - 1]),
        u && u.classList.add(n.slidePrevClass)
    }
    e.emitSlidesClasses()
}
const _i = (e,t)=>{
    if (!e || e.destroyed || !e.params)
        return;
    const n = ()=>e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      , r = t.closest(n());
    if (r) {
        let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        !i && e.isElement && (r.shadowRoot ? i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            r.shadowRoot && (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
            i && i.remove())
        }
        )),
        i && i.remove()
    }
}
  , Es = (e,t)=>{
    if (!e.slides[t])
        return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading")
}
  , Pl = e=>{
    if (!e || e.destroyed || !e.params)
        return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0)
        return;
    t = Math.min(t, n);
    const r = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
      , i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const s = i
          , a = [s - t];
        a.push(...Array.from({
            length: t
        }).map((l,u)=>s + r + u)),
        e.slides.forEach((l,u)=>{
            a.includes(l.column) && Es(e, u)
        }
        );
        return
    }
    const o = i + r - 1;
    if (e.params.rewind || e.params.loop)
        for (let s = i - t; s <= o + t; s += 1) {
            const a = (s % n + n) % n;
            (a < i || a > o) && Es(e, a)
        }
    else
        for (let s = Math.max(i - t, 0); s <= Math.min(o + t, n - 1); s += 1)
            s !== i && (s > o || s < i) && Es(e, s)
}
;
function bg(e) {
    const {slidesGrid: t, params: n} = e
      , r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let o = 0; o < t.length; o += 1)
        typeof t[o + 1] < "u" ? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2 ? i = o : r >= t[o] && r < t[o + 1] && (i = o + 1) : r >= t[o] && (i = o);
    return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0),
    i
}
function Bg(e) {
    const t = this
      , n = t.rtlTranslate ? t.translate : -t.translate
      , {snapGrid: r, params: i, activeIndex: o, realIndex: s, snapIndex: a} = t;
    let l = e, u;
    const f = h=>{
        let v = h - t.virtual.slidesBefore;
        return v < 0 && (v = t.virtual.slides.length + v),
        v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
        v
    }
    ;
    if (typeof l > "u" && (l = bg(t)),
    r.indexOf(n) >= 0)
        u = r.indexOf(n);
    else {
        const h = Math.min(i.slidesPerGroupSkip, l);
        u = h + Math.floor((l - h) / i.slidesPerGroup)
    }
    if (u >= r.length && (u = r.length - 1),
    l === o) {
        u !== a && (t.snapIndex = u,
        t.emit("snapIndexChange")),
        t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = f(l));
        return
    }
    let p;
    t.virtual && i.virtual.enabled && i.loop ? p = f(l) : t.slides[l] ? p = parseInt(t.slides[l].getAttribute("data-swiper-slide-index") || l, 10) : p = l,
    Object.assign(t, {
        previousSnapIndex: a,
        snapIndex: u,
        previousRealIndex: s,
        realIndex: p,
        previousIndex: o,
        activeIndex: l
    }),
    t.initialized && Pl(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && (s !== p && t.emit("realIndexChange"),
    t.emit("slideChange"))
}
function Ug(e, t) {
    const n = this
      , r = n.params;
    let i = e.closest(`.${r.slideClass}, swiper-slide`);
    !i && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(a=>{
        !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a)
    }
    );
    let o = !1, s;
    if (i) {
        for (let a = 0; a < n.slides.length; a += 1)
            if (n.slides[a] === i) {
                o = !0,
                s = a;
                break
            }
    }
    if (i && o)
        n.clickedSlide = i,
        n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = s;
    else {
        n.clickedSlide = void 0,
        n.clickedIndex = void 0;
        return
    }
    r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
}
var Wg = {
    updateSize: Rg,
    updateSlides: $g,
    updateAutoHeight: jg,
    updateSlidesOffset: Ag,
    updateSlidesProgress: Fg,
    updateProgress: Dg,
    updateSlidesClasses: Vg,
    updateActiveIndex: Bg,
    updateClickedSlide: Ug
};
function Hg(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this
      , {params: n, rtlTranslate: r, translate: i, wrapperEl: o} = t;
    if (n.virtualTranslate)
        return r ? -i : i;
    if (n.cssMode)
        return i;
    let s = Sg(o, e);
    return s += t.cssOverflowAdjustment(),
    r && (s = -s),
    s || 0
}
function Gg(e, t) {
    const n = this
      , {rtlTranslate: r, params: i, wrapperEl: o, progress: s} = n;
    let a = 0
      , l = 0;
    const u = 0;
    n.isHorizontal() ? a = r ? -e : e : l = e,
    i.roundLengths && (a = Math.floor(a),
    l = Math.floor(l)),
    n.previousTranslate = n.translate,
    n.translate = n.isHorizontal() ? a : l,
    i.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -l : i.virtualTranslate || (n.isHorizontal() ? a -= n.cssOverflowAdjustment() : l -= n.cssOverflowAdjustment(),
    o.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`);
    let f;
    const p = n.maxTranslate() - n.minTranslate();
    p === 0 ? f = 0 : f = (e - n.minTranslate()) / p,
    f !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t)
}
function Yg() {
    return -this.snapGrid[0]
}
function Xg() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Qg(e, t, n, r, i) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
    const o = this
      , {params: s, wrapperEl: a} = o;
    if (o.animating && s.preventInteractionOnTransition)
        return !1;
    const l = o.minTranslate()
      , u = o.maxTranslate();
    let f;
    if (r && e > l ? f = l : r && e < u ? f = u : f = e,
    o.updateProgress(f),
    s.cssMode) {
        const p = o.isHorizontal();
        if (t === 0)
            a[p ? "scrollLeft" : "scrollTop"] = -f;
        else {
            if (!o.support.smoothScroll)
                return lp({
                    swiper: o,
                    targetPosition: -f,
                    side: p ? "left" : "top"
                }),
                !0;
            a.scrollTo({
                [p ? "left" : "top"]: -f,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (o.setTransition(0),
    o.setTranslate(f),
    n && (o.emit("beforeTransitionStart", t, i),
    o.emit("transitionEnd"))) : (o.setTransition(t),
    o.setTranslate(f),
    n && (o.emit("beforeTransitionStart", t, i),
    o.emit("transitionStart")),
    o.animating || (o.animating = !0,
    o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(h) {
        !o || o.destroyed || h.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd),
        o.onTranslateToWrapperTransitionEnd = null,
        delete o.onTranslateToWrapperTransitionEnd,
        n && o.emit("transitionEnd"))
    }
    ),
    o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))),
    !0
}
var Kg = {
    getTranslate: Hg,
    setTranslate: Gg,
    minTranslate: Yg,
    maxTranslate: Xg,
    translateTo: Qg
};
function qg(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`,
    n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""),
    n.emit("setTransition", e, t)
}
function up(e) {
    let {swiper: t, runCallbacks: n, direction: r, step: i} = e;
    const {activeIndex: o, previousIndex: s} = t;
    let a = r;
    if (a || (o > s ? a = "next" : o < s ? a = "prev" : a = "reset"),
    t.emit(`transition ${i}`),
    n && o !== s) {
        if (a === "reset") {
            t.emit(`slideResetTransition ${i}`);
            return
        }
        t.emit(`slideChangeTransition ${i}`),
        a === "next" ? t.emit(`slideNextTransition ${i}`) : t.emit(`slidePrevTransition ${i}`)
    }
}
function Zg(e, t) {
    e === void 0 && (e = !0);
    const n = this
      , {params: r} = n;
    r.cssMode || (r.autoHeight && n.updateAutoHeight(),
    up({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}
function Jg(e, t) {
    e === void 0 && (e = !0);
    const n = this
      , {params: r} = n;
    n.animating = !1,
    !r.cssMode && (n.setTransition(0),
    up({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
var e1 = {
    setTransition: qg,
    transitionStart: Zg,
    transitionEnd: Jg
};
function t1(e, t, n, r, i) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
    const o = this;
    let s = e;
    s < 0 && (s = 0);
    const {params: a, snapGrid: l, slidesGrid: u, previousIndex: f, activeIndex: p, rtlTranslate: h, wrapperEl: v, enabled: y} = o;
    if (o.animating && a.preventInteractionOnTransition || !y && !r && !i)
        return !1;
    const g = Math.min(o.params.slidesPerGroupSkip, s);
    let E = g + Math.floor((s - g) / o.params.slidesPerGroup);
    E >= l.length && (E = l.length - 1);
    const c = -l[E];
    if (a.normalizeSlideIndex)
        for (let m = 0; m < u.length; m += 1) {
            const w = -Math.floor(c * 100)
              , x = Math.floor(u[m] * 100)
              , T = Math.floor(u[m + 1] * 100);
            typeof u[m + 1] < "u" ? w >= x && w < T - (T - x) / 2 ? s = m : w >= x && w < T && (s = m + 1) : w >= x && (s = m)
        }
    if (o.initialized && s !== p && (!o.allowSlideNext && (h ? c > o.translate && c > o.minTranslate() : c < o.translate && c < o.minTranslate()) || !o.allowSlidePrev && c > o.translate && c > o.maxTranslate() && (p || 0) !== s))
        return !1;
    s !== (f || 0) && n && o.emit("beforeSlideChangeStart"),
    o.updateProgress(c);
    let d;
    if (s > p ? d = "next" : s < p ? d = "prev" : d = "reset",
    h && -c === o.translate || !h && c === o.translate)
        return o.updateActiveIndex(s),
        a.autoHeight && o.updateAutoHeight(),
        o.updateSlidesClasses(),
        a.effect !== "slide" && o.setTranslate(c),
        d !== "reset" && (o.transitionStart(n, d),
        o.transitionEnd(n, d)),
        !1;
    if (a.cssMode) {
        const m = o.isHorizontal()
          , w = h ? c : -c;
        if (t === 0) {
            const x = o.virtual && o.params.virtual.enabled;
            x && (o.wrapperEl.style.scrollSnapType = "none",
            o._immediateVirtual = !0),
            x && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                v[m ? "scrollLeft" : "scrollTop"] = w
            }
            )) : v[m ? "scrollLeft" : "scrollTop"] = w,
            x && requestAnimationFrame(()=>{
                o.wrapperEl.style.scrollSnapType = "",
                o._immediateVirtual = !1
            }
            )
        } else {
            if (!o.support.smoothScroll)
                return lp({
                    swiper: o,
                    targetPosition: w,
                    side: m ? "left" : "top"
                }),
                !0;
            v.scrollTo({
                [m ? "left" : "top"]: w,
                behavior: "smooth"
            })
        }
        return !0
    }
    return o.setTransition(t),
    o.setTranslate(c),
    o.updateActiveIndex(s),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", t, r),
    o.transitionStart(n, d),
    t === 0 ? o.transitionEnd(n, d) : o.animating || (o.animating = !0,
    o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(w) {
        !o || o.destroyed || w.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
        o.onSlideToWrapperTransitionEnd = null,
        delete o.onSlideToWrapperTransitionEnd,
        o.transitionEnd(n, d))
    }
    ),
    o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)),
    !0
}
function n1(e, t, n, r) {
    e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
    const i = this;
    let o = e;
    return i.params.loop && (i.virtual && i.params.virtual.enabled ? o = o + i.virtual.slidesBefore : o = i.getSlideIndexByData(o)),
    i.slideTo(o, t, n, r)
}
function r1(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const r = this
      , {enabled: i, params: o, animating: s} = r;
    if (!i)
        return r;
    let a = o.slidesPerGroup;
    o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a
      , u = r.virtual && o.virtual.enabled;
    if (o.loop) {
        if (s && !u && o.loopPreventsSliding)
            return !1;
        if (r.loopFix({
            direction: "next"
        }),
        r._clientLeft = r.wrapperEl.clientLeft,
        r.activeIndex === r.slides.length - 1 && o.cssMode)
            return requestAnimationFrame(()=>{
                r.slideTo(r.activeIndex + l, e, t, n)
            }
            ),
            !0
    }
    return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
}
function i1(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const r = this
      , {params: i, snapGrid: o, slidesGrid: s, rtlTranslate: a, enabled: l, animating: u} = r;
    if (!l)
        return r;
    const f = r.virtual && i.virtual.enabled;
    if (i.loop) {
        if (u && !f && i.loopPreventsSliding)
            return !1;
        r.loopFix({
            direction: "prev"
        }),
        r._clientLeft = r.wrapperEl.clientLeft
    }
    const p = a ? r.translate : -r.translate;
    function h(c) {
        return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c)
    }
    const v = h(p)
      , y = o.map(c=>h(c));
    let g = o[y.indexOf(v) - 1];
    if (typeof g > "u" && i.cssMode) {
        let c;
        o.forEach((d,m)=>{
            v >= d && (c = m)
        }
        ),
        typeof c < "u" && (g = o[c > 0 ? c - 1 : c])
    }
    let E = 0;
    if (typeof g < "u" && (E = s.indexOf(g),
    E < 0 && (E = r.activeIndex - 1),
    i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && (E = E - r.slidesPerViewDynamic("previous", !0) + 1,
    E = Math.max(E, 0))),
    i.rewind && r.isBeginning) {
        const c = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
        return r.slideTo(c, e, t, n)
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
        return requestAnimationFrame(()=>{
            r.slideTo(E, e, t, n)
        }
        ),
        !0;
    return r.slideTo(E, e, t, n)
}
function o1(e, t, n) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n)
}
function s1(e, t, n, r) {
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = .5);
    const i = this;
    let o = i.activeIndex;
    const s = Math.min(i.params.slidesPerGroupSkip, o)
      , a = s + Math.floor((o - s) / i.params.slidesPerGroup)
      , l = i.rtlTranslate ? i.translate : -i.translate;
    if (l >= i.snapGrid[a]) {
        const u = i.snapGrid[a]
          , f = i.snapGrid[a + 1];
        l - u > (f - u) * r && (o += i.params.slidesPerGroup)
    } else {
        const u = i.snapGrid[a - 1]
          , f = i.snapGrid[a];
        l - u <= (f - u) * r && (o -= i.params.slidesPerGroup)
    }
    return o = Math.max(o, 0),
    o = Math.min(o, i.slidesGrid.length - 1),
    i.slideTo(o, e, t, n)
}
function l1() {
    const e = this
      , {params: t, slidesEl: n} = e
      , r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex, o;
    const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating)
            return;
        o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        t.centeredSlides ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
        i = e.getSlideIndex(vt(n, `${s}[data-swiper-slide-index="${o}"]`)[0]),
        kl(()=>{
            e.slideTo(i)
        }
        )) : e.slideTo(i) : i > e.slides.length - r ? (e.loopFix(),
        i = e.getSlideIndex(vt(n, `${s}[data-swiper-slide-index="${o}"]`)[0]),
        kl(()=>{
            e.slideTo(i)
        }
        )) : e.slideTo(i)
    } else
        e.slideTo(i)
}
var a1 = {
    slideTo: t1,
    slideToLoop: n1,
    slideNext: r1,
    slidePrev: i1,
    slideReset: o1,
    slideToClosest: s1,
    slideToClickedSlide: l1
};
function u1(e) {
    const t = this
      , {params: n, slidesEl: r} = t;
    if (!n.loop || t.virtual && t.params.virtual.enabled)
        return;
    vt(r, `.${n.slideClass}, swiper-slide`).forEach((o,s)=>{
        o.setAttribute("data-swiper-slide-index", s)
    }
    ),
    t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : "next"
    })
}
function c1(e) {
    let {slideRealIndex: t, slideTo: n=!0, direction: r, setTranslate: i, activeSlideIndex: o, byController: s, byMousewheel: a} = e === void 0 ? {} : e;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: u, allowSlidePrev: f, allowSlideNext: p, slidesEl: h, params: v} = l;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && v.virtual.enabled) {
        n && (!v.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : v.centeredSlides && l.snapIndex < v.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = f,
        l.allowSlideNext = p,
        l.emit("loopFix");
        return
    }
    const y = v.slidesPerView === "auto" ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(v.slidesPerView, 10));
    let g = v.loopedSlides || y;
    g % v.slidesPerGroup !== 0 && (g += v.slidesPerGroup - g % v.slidesPerGroup),
    l.loopedSlides = g;
    const E = []
      , c = [];
    let d = l.activeIndex;
    typeof o > "u" ? o = l.getSlideIndex(l.slides.filter(S=>S.classList.contains(v.slideActiveClass))[0]) : d = o;
    const m = r === "next" || !r
      , w = r === "prev" || !r;
    let x = 0
      , T = 0;
    if (o < g) {
        x = Math.max(g - o, v.slidesPerGroup);
        for (let S = 0; S < g - o; S += 1) {
            const P = S - Math.floor(S / u.length) * u.length;
            E.push(u.length - P - 1)
        }
    } else if (o > l.slides.length - g * 2) {
        T = Math.max(o - (l.slides.length - g * 2), v.slidesPerGroup);
        for (let S = 0; S < T; S += 1) {
            const P = S - Math.floor(S / u.length) * u.length;
            c.push(P)
        }
    }
    if (w && E.forEach(S=>{
        l.slides[S].swiperLoopMoveDOM = !0,
        h.prepend(l.slides[S]),
        l.slides[S].swiperLoopMoveDOM = !1
    }
    ),
    m && c.forEach(S=>{
        l.slides[S].swiperLoopMoveDOM = !0,
        h.append(l.slides[S]),
        l.slides[S].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    v.slidesPerView === "auto" && l.updateSlides(),
    v.watchSlidesProgress && l.updateSlidesOffset(),
    n) {
        if (E.length > 0 && w)
            if (typeof t > "u") {
                const S = l.slidesGrid[d]
                  , C = l.slidesGrid[d + x] - S;
                a ? l.setTranslate(l.translate - C) : (l.slideTo(d + x, 0, !1, !0),
                i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += C,
                l.touchEventsData.currentTranslate = l.translate))
            } else
                i && (l.slideToLoop(t, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate);
        else if (c.length > 0 && m)
            if (typeof t > "u") {
                const S = l.slidesGrid[d]
                  , C = l.slidesGrid[d - T] - S;
                a ? l.setTranslate(l.translate - C) : (l.slideTo(d - T, 0, !1, !0),
                i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += C,
                l.touchEventsData.currentTranslate = l.translate))
            } else
                l.slideToLoop(t, 0, !1, !0)
    }
    if (l.allowSlidePrev = f,
    l.allowSlideNext = p,
    l.controller && l.controller.control && !s) {
        const S = {
            slideRealIndex: t,
            direction: r,
            setTranslate: i,
            activeSlideIndex: o,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(P=>{
            !P.destroyed && P.params.loop && P.loopFix({
                ...S,
                slideTo: P.params.slidesPerView === v.slidesPerView ? n : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...S,
            slideTo: l.controller.control.params.slidesPerView === v.slidesPerView ? n : !1
        })
    }
    l.emit("loopFix")
}
function f1() {
    const e = this
      , {params: t, slidesEl: n} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach(i=>{
        const o = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        r[o] = i
    }
    ),
    e.slides.forEach(i=>{
        i.removeAttribute("data-swiper-slide-index")
    }
    ),
    r.forEach(i=>{
        n.append(i)
    }
    ),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var d1 = {
    loopCreate: u1,
    loopFix: c1,
    loopDestroy: f1
};
function p1(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
    n.style.cursor = "move",
    n.style.cursor = e ? "grabbing" : "grab",
    t.isElement && requestAnimationFrame(()=>{
        t.__preventObserver__ = !1
    }
    )
}
function m1() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
    e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    ))
}
var h1 = {
    setGrabCursor: p1,
    unsetGrabCursor: m1
};
function v1(e, t) {
    t === void 0 && (t = this);
    function n(r) {
        if (!r || r === dn() || r === be())
            return null;
        r.assignedSlot && (r = r.assignedSlot);
        const i = r.closest(e);
        return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
    }
    return n(t)
}
function g1(e) {
    const t = this
      , n = dn()
      , r = be()
      , i = t.touchEventsData;
    i.evCache.push(e);
    const {params: o, touches: s, enabled: a} = t;
    if (!a || !o.simulateTouch && e.pointerType === "mouse" || t.animating && o.preventInteractionOnTransition)
        return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let u = l.target;
    if (o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u) || "which"in l && l.which === 3 || "button"in l && l.button > 0 || i.isTouched && i.isMoved)
        return;
    const f = !!o.noSwipingClass && o.noSwipingClass !== ""
      , p = e.composedPath ? e.composedPath() : e.path;
    f && l.target && l.target.shadowRoot && p && (u = p[0]);
    const h = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`
      , v = !!(l.target && l.target.shadowRoot);
    if (o.noSwiping && (v ? v1(h, u) : u.closest(h))) {
        t.allowClick = !0;
        return
    }
    if (o.swipeHandler && !u.closest(o.swipeHandler))
        return;
    s.currentX = l.pageX,
    s.currentY = l.pageY;
    const y = s.currentX
      , g = s.currentY
      , E = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection
      , c = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (E && (y <= c || y >= r.innerWidth - c))
        if (E === "prevent")
            e.preventDefault();
        else
            return;
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    s.startX = y,
    s.startY = g,
    i.touchStartTime = to(),
    t.allowClick = !0,
    t.updateSize(),
    t.swipeDirection = void 0,
    o.threshold > 0 && (i.allowThresholdMove = !1);
    let d = !0;
    u.matches(i.focusableElements) && (d = !1,
    u.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== u && n.activeElement.blur();
    const m = d && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || m) && !u.isContentEditable && l.preventDefault(),
    o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", l)
}
function y1(e) {
    const t = dn()
      , n = this
      , r = n.touchEventsData
      , {params: i, touches: o, rtlTranslate: s, enabled: a} = n;
    if (!a || !i.simulateTouch && e.pointerType === "mouse")
        return;
    let l = e;
    if (l.originalEvent && (l = l.originalEvent),
    !r.isTouched) {
        r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
        return
    }
    const u = r.evCache.findIndex(S=>S.pointerId === l.pointerId);
    u >= 0 && (r.evCache[u] = l);
    const f = r.evCache.length > 1 ? r.evCache[0] : l
      , p = f.pageX
      , h = f.pageY;
    if (l.preventedByNestedSwiper) {
        o.startX = p,
        o.startY = h;
        return
    }
    if (!n.allowTouchMove) {
        l.target.matches(r.focusableElements) || (n.allowClick = !1),
        r.isTouched && (Object.assign(o, {
            startX: p,
            startY: h,
            prevX: n.touches.currentX,
            prevY: n.touches.currentY,
            currentX: p,
            currentY: h
        }),
        r.touchStartTime = to());
        return
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (n.isVertical()) {
            if (h < o.startY && n.translate <= n.maxTranslate() || h > o.startY && n.translate >= n.minTranslate()) {
                r.isTouched = !1,
                r.isMoved = !1;
                return
            }
        } else if (p < o.startX && n.translate <= n.maxTranslate() || p > o.startX && n.translate >= n.minTranslate())
            return
    }
    if (t.activeElement && l.target === t.activeElement && l.target.matches(r.focusableElements)) {
        r.isMoved = !0,
        n.allowClick = !1;
        return
    }
    if (r.allowTouchCallbacks && n.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
        return;
    o.currentX = p,
    o.currentY = h;
    const v = o.currentX - o.startX
      , y = o.currentY - o.startY;
    if (n.params.threshold && Math.sqrt(v ** 2 + y ** 2) < n.params.threshold)
        return;
    if (typeof r.isScrolling > "u") {
        let S;
        n.isHorizontal() && o.currentY === o.startY || n.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : v * v + y * y >= 25 && (S = Math.atan2(Math.abs(y), Math.abs(v)) * 180 / Math.PI,
        r.isScrolling = n.isHorizontal() ? S > i.touchAngle : 90 - S > i.touchAngle)
    }
    if (r.isScrolling && n.emit("touchMoveOpposite", l),
    typeof r.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (r.startMoving = !0),
    r.isScrolling || n.zoom && n.params.zoom && n.params.zoom.enabled && r.evCache.length > 1) {
        r.isTouched = !1;
        return
    }
    if (!r.startMoving)
        return;
    n.allowClick = !1,
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
    let g = n.isHorizontal() ? v : y
      , E = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
    i.oneWayMovement && (g = Math.abs(g) * (s ? 1 : -1),
    E = Math.abs(E) * (s ? 1 : -1)),
    o.diff = g,
    g *= i.touchRatio,
    s && (g = -g,
    E = -E);
    const c = n.touchesDirection;
    n.swipeDirection = g > 0 ? "prev" : "next",
    n.touchesDirection = E > 0 ? "prev" : "next";
    const d = n.params.loop && !i.cssMode
      , m = n.swipeDirection === "next" && n.allowSlideNext || n.swipeDirection === "prev" && n.allowSlidePrev;
    if (!r.isMoved) {
        if (d && m && n.loopFix({
            direction: n.swipeDirection
        }),
        r.startTranslate = n.getTranslate(),
        n.setTransition(0),
        n.animating) {
            const S = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            n.wrapperEl.dispatchEvent(S)
        }
        r.allowMomentumBounce = !1,
        i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
        n.emit("sliderFirstMove", l)
    }
    let w;
    r.isMoved && c !== n.touchesDirection && d && m && Math.abs(g) >= 1 && (n.loopFix({
        direction: n.swipeDirection,
        setTranslate: !0
    }),
    w = !0),
    n.emit("sliderMove", l),
    r.isMoved = !0,
    r.currentTranslate = g + r.startTranslate;
    let x = !0
      , T = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (T = 0),
    g > 0 ? (d && m && !w && r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) && n.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    r.currentTranslate > n.minTranslate() && (x = !1,
    i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + g) ** T))) : g < 0 && (d && m && !w && r.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) && n.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: n.slides.length - (i.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
    }),
    r.currentTranslate < n.maxTranslate() && (x = !1,
    i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - g) ** T))),
    x && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
        if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
                r.allowThresholdMove = !0,
                o.startX = o.currentX,
                o.startY = o.currentY,
                r.currentTranslate = r.startTranslate,
                o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
                return
            }
        } else {
            r.currentTranslate = r.startTranslate;
            return
        }
    !i.followFinger || i.cssMode || ((i.freeMode && i.freeMode.enabled && n.freeMode || i.watchSlidesProgress) && (n.updateActiveIndex(),
    n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate))
}
function w1(e) {
    const t = this
      , n = t.touchEventsData
      , r = n.evCache.findIndex(m=>m.pointerId === e.pointerId);
    if (r >= 0 && n.evCache.splice(r, 1),
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type) && !(["pointercancel", "contextmenu"].includes(e.type) && (t.browser.isSafari || t.browser.isWebView)))
        return;
    const {params: i, touches: o, rtlTranslate: s, slidesGrid: a, enabled: l} = t;
    if (!l || !i.simulateTouch && e.pointerType === "mouse")
        return;
    let u = e;
    if (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", u),
    n.allowTouchCallbacks = !1,
    !n.isTouched) {
        n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        n.isMoved = !1,
        n.startMoving = !1;
        return
    }
    i.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const f = to()
      , p = f - n.touchStartTime;
    if (t.allowClick) {
        const m = u.path || u.composedPath && u.composedPath();
        t.updateClickedSlide(m && m[0] || u.target, m),
        t.emit("tap click", u),
        p < 300 && f - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)
    }
    if (n.lastClickTime = to(),
    kl(()=>{
        t.destroyed || (t.allowClick = !0)
    }
    ),
    !n.isTouched || !n.isMoved || !t.swipeDirection || o.diff === 0 || n.currentTranslate === n.startTranslate) {
        n.isTouched = !1,
        n.isMoved = !1,
        n.startMoving = !1;
        return
    }
    n.isTouched = !1,
    n.isMoved = !1,
    n.startMoving = !1;
    let h;
    if (i.followFinger ? h = s ? t.translate : -t.translate : h = -n.currentTranslate,
    i.cssMode)
        return;
    if (i.freeMode && i.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: h
        });
        return
    }
    let v = 0
      , y = t.slidesSizesGrid[0];
    for (let m = 0; m < a.length; m += m < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const w = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        typeof a[m + w] < "u" ? h >= a[m] && h < a[m + w] && (v = m,
        y = a[m + w] - a[m]) : h >= a[m] && (v = m,
        y = a[a.length - 1] - a[a.length - 2])
    }
    let g = null
      , E = null;
    i.rewind && (t.isBeginning ? E = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    const c = (h - a[v]) / y
      , d = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (p > i.longSwipesMs) {
        if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (c >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? g : v + d) : t.slideTo(v)),
        t.swipeDirection === "prev" && (c > 1 - i.longSwipesRatio ? t.slideTo(v + d) : E !== null && c < 0 && Math.abs(c) > i.longSwipesRatio ? t.slideTo(E) : t.slideTo(v))
    } else {
        if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl) ? u.target === t.navigation.nextEl ? t.slideTo(v + d) : t.slideTo(v) : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : v + d),
        t.swipeDirection === "prev" && t.slideTo(E !== null ? E : v))
    }
}
function ac() {
    const e = this
      , {params: t, el: n} = e;
    if (n && n.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: r, allowSlidePrev: i, snapGrid: o} = e
      , s = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
    e.allowSlidePrev = !0,
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
    const a = s && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !s ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
    e.autoplay.resizeTimeout = setTimeout(()=>{
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
    }
    , 500)),
    e.allowSlidePrev = i,
    e.allowSlideNext = r,
    e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
}
function S1(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
    e.stopImmediatePropagation())))
}
function x1() {
    const e = this
      , {wrapperEl: t, rtlTranslate: n, enabled: r} = e;
    if (!r)
        return;
    e.previousTranslate = e.translate,
    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
    let i;
    const o = e.maxTranslate() - e.minTranslate();
    o === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / o,
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function E1(e) {
    const t = this;
    _i(t, e.target),
    !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
let uc = !1;
function T1() {}
const cp = (e,t)=>{
    const n = dn()
      , {params: r, el: i, wrapperEl: o, device: s} = e
      , a = !!r.nested
      , l = t === "on" ? "addEventListener" : "removeEventListener"
      , u = t;
    i[l]("pointerdown", e.onTouchStart, {
        passive: !1
    }),
    n[l]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: a
    }),
    n[l]("pointerup", e.onTouchEnd, {
        passive: !0
    }),
    n[l]("pointercancel", e.onTouchEnd, {
        passive: !0
    }),
    n[l]("pointerout", e.onTouchEnd, {
        passive: !0
    }),
    n[l]("pointerleave", e.onTouchEnd, {
        passive: !0
    }),
    n[l]("contextmenu", e.onTouchEnd, {
        passive: !0
    }),
    (r.preventClicks || r.preventClicksPropagation) && i[l]("click", e.onClick, !0),
    r.cssMode && o[l]("scroll", e.onScroll),
    r.updateOnWindowResize ? e[u](s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ac, !0) : e[u]("observerUpdate", ac, !0),
    i[l]("load", e.onLoad, {
        capture: !0
    })
}
;
function C1() {
    const e = this
      , t = dn()
      , {params: n} = e;
    e.onTouchStart = g1.bind(e),
    e.onTouchMove = y1.bind(e),
    e.onTouchEnd = w1.bind(e),
    n.cssMode && (e.onScroll = x1.bind(e)),
    e.onClick = S1.bind(e),
    e.onLoad = E1.bind(e),
    uc || (t.addEventListener("touchstart", T1),
    uc = !0),
    cp(e, "on")
}
function k1() {
    cp(this, "off")
}
var P1 = {
    attachEvents: C1,
    detachEvents: k1
};
const cc = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
function _1() {
    const e = this
      , {realIndex: t, initialized: n, params: r, el: i} = e
      , o = r.breakpoints;
    if (!o || o && Object.keys(o).length === 0)
        return;
    const s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
    if (!s || e.currentBreakpoint === s)
        return;
    const l = (s in o ? o[s] : void 0) || e.originalParams
      , u = cc(e, r)
      , f = cc(e, l)
      , p = r.enabled;
    u && !f ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`),
    e.emitContainerClasses()) : !u && f && (i.classList.add(`${r.containerModifierClass}grid`),
    (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && r.grid.fill === "column") && i.classList.add(`${r.containerModifierClass}grid-column`),
    e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(c=>{
        if (typeof l[c] > "u")
            return;
        const d = r[c] && r[c].enabled
          , m = l[c] && l[c].enabled;
        d && !m && e[c].disable(),
        !d && m && e[c].enable()
    }
    );
    const h = l.direction && l.direction !== r.direction
      , v = r.loop && (l.slidesPerView !== r.slidesPerView || h)
      , y = r.loop;
    h && n && e.changeDirection(),
    Le(e.params, l);
    const g = e.params.enabled
      , E = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
    p && !g ? e.disable() : !p && g && e.enable(),
    e.currentBreakpoint = s,
    e.emit("_beforeBreakpoint", l),
    n && (v ? (e.loopDestroy(),
    e.loopCreate(t),
    e.updateSlides()) : !y && E ? (e.loopCreate(t),
    e.updateSlides()) : y && !E && e.loopDestroy()),
    e.emit("breakpoint", l)
}
function O1(e, t, n) {
    if (t === void 0 && (t = "window"),
    !e || t === "container" && !n)
        return;
    let r = !1;
    const i = be()
      , o = t === "window" ? i.innerHeight : n.clientHeight
      , s = Object.keys(e).map(a=>{
        if (typeof a == "string" && a.indexOf("@") === 0) {
            const l = parseFloat(a.substr(1));
            return {
                value: o * l,
                point: a
            }
        }
        return {
            value: a,
            point: a
        }
    }
    );
    s.sort((a,l)=>parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < s.length; a += 1) {
        const {point: l, value: u} = s[a];
        t === "window" ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = l) : u <= n.clientWidth && (r = l)
    }
    return r || "max"
}
var z1 = {
    setBreakpoint: _1,
    getBreakpoint: O1
};
function N1(e, t) {
    const n = [];
    return e.forEach(r=>{
        typeof r == "object" ? Object.keys(r).forEach(i=>{
            r[i] && n.push(t + i)
        }
        ) : typeof r == "string" && n.push(t + r)
    }
    ),
    n
}
function M1() {
    const e = this
      , {classNames: t, params: n, rtl: r, el: i, device: o} = e
      , s = N1(["initialized", n.direction, {
        "free-mode": e.params.freeMode && n.freeMode.enabled
    }, {
        autoheight: n.autoHeight
    }, {
        rtl: r
    }, {
        grid: n.grid && n.grid.rows > 1
    }, {
        "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
    }, {
        android: o.android
    }, {
        ios: o.ios
    }, {
        "css-mode": n.cssMode
    }, {
        centered: n.cssMode && n.centeredSlides
    }, {
        "watch-progress": n.watchSlidesProgress
    }], n.containerModifierClass);
    t.push(...s),
    i.classList.add(...t),
    e.emitContainerClasses()
}
function I1() {
    const e = this
      , {el: t, classNames: n} = e;
    t.classList.remove(...n),
    e.emitContainerClasses()
}
var L1 = {
    addClasses: M1,
    removeClasses: I1
};
function R1() {
    const e = this
      , {isLocked: t, params: n} = e
      , {slidesOffsetBefore: r} = n;
    if (r) {
        const i = e.slides.length - 1
          , o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
        e.isLocked = e.size > o
    } else
        e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
var $1 = {
    checkOverflow: R1
}
  , _l = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function j1(e, t) {
    return function(r) {
        r === void 0 && (r = {});
        const i = Object.keys(r)[0]
          , o = r[i];
        if (typeof o != "object" || o === null) {
            Le(t, r);
            return
        }
        if (e[i] === !0 && (e[i] = {
            enabled: !0
        }),
        i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
        ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
        !(i in e && "enabled"in o)) {
            Le(t, r);
            return
        }
        typeof e[i] == "object" && !("enabled"in e[i]) && (e[i].enabled = !0),
        e[i] || (e[i] = {
            enabled: !1
        }),
        Le(t, r)
    }
}
const Ts = {
    eventsEmitter: Lg,
    update: Wg,
    translate: Kg,
    transition: e1,
    slide: a1,
    loop: d1,
    grabCursor: h1,
    events: P1,
    breakpoints: z1,
    checkOverflow: $1,
    classes: L1
}
  , Cs = {};
let Aa = class ft {
    constructor() {
        let t, n;
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? n = i[0] : [t,n] = i,
        n || (n = {}),
        n = Le({}, n),
        t && !n.el && (n.el = t);
        const s = dn();
        if (n.el && typeof n.el == "string" && s.querySelectorAll(n.el).length > 1) {
            const f = [];
            return s.querySelectorAll(n.el).forEach(p=>{
                const h = Le({}, n, {
                    el: p
                });
                f.push(new ft(h))
            }
            ),
            f
        }
        const a = this;
        a.__swiper__ = !0,
        a.support = ap(),
        a.device = Og({
            userAgent: n.userAgent
        }),
        a.browser = Ng(),
        a.eventsListeners = {},
        a.eventsAnyListeners = [],
        a.modules = [...a.__modules__],
        n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
        const l = {};
        a.modules.forEach(f=>{
            f({
                params: n,
                swiper: a,
                extendParams: j1(n, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        }
        );
        const u = Le({}, _l, l);
        return a.params = Le({}, u, Cs, n),
        a.originalParams = Le({}, a.params),
        a.passedParams = Le({}, n),
        a.params && a.params.on && Object.keys(a.params.on).forEach(f=>{
            a.on(f, a.params.on[f])
        }
        ),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
            enabled: a.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: []
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
    }
    getSlideIndex(t) {
        const {slidesEl: n, params: r} = this
          , i = vt(n, `.${r.slideClass}, swiper-slide`)
          , o = sc(i[0]);
        return sc(t) - o
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this
          , {slidesEl: n, params: r} = t;
        t.slides = vt(n, `.${r.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"))
    }
    setProgress(t, n) {
        const r = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = r.minTranslate()
          , s = (r.maxTranslate() - i) * t + i;
        r.translateTo(s, typeof n > "u" ? 0 : n),
        r.updateActiveIndex(),
        r.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = t.el.className.split(" ").filter(r=>r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", n.join(" "))
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed ? "" : t.className.split(" ").filter(r=>r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = [];
        t.slides.forEach(r=>{
            const i = t.getSlideClasses(r);
            n.push({
                slideEl: r,
                classNames: i
            }),
            t.emit("_slideClass", r, i)
        }
        ),
        t.emit("_slideClasses", n)
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = "current"),
        n === void 0 && (n = !1);
        const r = this
          , {params: i, slides: o, slidesGrid: s, slidesSizesGrid: a, size: l, activeIndex: u} = r;
        let f = 1;
        if (typeof i.slidesPerView == "number")
            return i.slidesPerView;
        if (i.centeredSlides) {
            let p = o[u] ? o[u].swiperSlideSize : 0, h;
            for (let v = u + 1; v < o.length; v += 1)
                o[v] && !h && (p += o[v].swiperSlideSize,
                f += 1,
                p > l && (h = !0));
            for (let v = u - 1; v >= 0; v -= 1)
                o[v] && !h && (p += o[v].swiperSlideSize,
                f += 1,
                p > l && (h = !0))
        } else if (t === "current")
            for (let p = u + 1; p < o.length; p += 1)
                (n ? s[p] + a[p] - s[u] < l : s[p] - s[u] < l) && (f += 1);
        else
            for (let p = u - 1; p >= 0; p -= 1)
                s[u] - s[p] < l && (f += 1);
        return f
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const {snapGrid: n, params: r} = t;
        r.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{
            s.complete && _i(t, s)
        }
        ),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
        function i() {
            const s = t.rtlTranslate ? t.translate * -1 : t.translate
              , a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
            t.setTranslate(a),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        let o;
        if (r.freeMode && r.freeMode.enabled && !r.cssMode)
            i(),
            r.autoHeight && t.updateAutoHeight();
        else {
            if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                o = t.slideTo(s.length - 1, 0, !1, !0)
            } else
                o = t.slideTo(t.activeIndex, 0, !1, !0);
            o || i()
        }
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update")
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0);
        const r = this
          , i = r.params.direction;
        return t || (t = i === "horizontal" ? "vertical" : "horizontal"),
        t === i || t !== "horizontal" && t !== "vertical" || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        r.params.direction = t,
        r.slides.forEach(o=>{
            t === "vertical" ? o.style.width = "" : o.style.height = ""
        }
        ),
        r.emit("changeDirection"),
        n && r.update()),
        r
    }
    changeLanguageDirection(t) {
        const n = this;
        n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl",
        n.rtlTranslate = n.params.direction === "horizontal" && n.rtl,
        n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
        n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
        n.el.dir = "ltr"),
        n.update())
    }
    mount(t) {
        const n = this;
        if (n.mounted)
            return !0;
        let r = t || n.params.el;
        if (typeof r == "string" && (r = document.querySelector(r)),
        !r)
            return !1;
        r.swiper = n,
        r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
        const i = ()=>`.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (()=>r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : vt(r, i())[0])();
        return !s && n.params.createElements && (s = Eg("div", n.params.wrapperClass),
        r.append(s),
        vt(r, `.${n.params.slideClass}`).forEach(a=>{
            s.append(a)
        }
        )),
        Object.assign(n, {
            el: r,
            wrapperEl: s,
            slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
            hostEl: n.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: r.dir.toLowerCase() === "rtl" || It(r, "direction") === "rtl",
            rtlTranslate: n.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || It(r, "direction") === "rtl"),
            wrongRTL: It(s, "display") === "-webkit-box"
        }),
        !0
    }
    init(t) {
        const n = this;
        if (n.initialized || n.mount(t) === !1)
            return n;
        n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
        n.params.loop && n.loopCreate(),
        n.attachEvents();
        const i = [...n.el.querySelectorAll('[loading="lazy"]')];
        return n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
        i.forEach(o=>{
            o.complete ? _i(n, o) : o.addEventListener("load", s=>{
                _i(n, s.target)
            }
            )
        }
        ),
        Pl(n),
        n.initialized = !0,
        Pl(n),
        n.emit("init"),
        n.emit("afterInit"),
        n
    }
    destroy(t, n) {
        t === void 0 && (t = !0),
        n === void 0 && (n = !0);
        const r = this
          , {params: i, el: o, wrapperEl: s, slides: a} = r;
        return typeof r.params > "u" || r.destroyed || (r.emit("beforeDestroy"),
        r.initialized = !1,
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n && (r.removeClasses(),
        o.removeAttribute("style"),
        s.removeAttribute("style"),
        a && a.length && a.forEach(l=>{
            l.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach(l=>{
            r.off(l)
        }
        ),
        t !== !1 && (r.el.swiper = null,
        yg(r)),
        r.destroyed = !0),
        null
    }
    static extendDefaults(t) {
        Le(Cs, t)
    }
    static get extendedDefaults() {
        return Cs
    }
    static get defaults() {
        return _l
    }
    static installModule(t) {
        ft.prototype.__modules__ || (ft.prototype.__modules__ = []);
        const n = ft.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(n=>ft.installModule(n)),
        ft) : (ft.installModule(t),
        ft)
    }
}
;
Object.keys(Ts).forEach(e=>{
    Object.keys(Ts[e]).forEach(t=>{
        Aa.prototype[t] = Ts[e][t]
    }
    )
}
);
Aa.use([Mg, Ig]);
const fp = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function un(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
}
function nn(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(r=>n.indexOf(r) < 0).forEach(r=>{
        typeof e[r] > "u" ? e[r] = t[r] : un(t[r]) && un(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : nn(e[r], t[r]) : e[r] = t[r]
    }
    )
}
function dp(e) {
    return e === void 0 && (e = {}),
    e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function pp(e) {
    return e === void 0 && (e = {}),
    e.pagination && typeof e.pagination.el > "u"
}
function mp(e) {
    return e === void 0 && (e = {}),
    e.scrollbar && typeof e.scrollbar.el > "u"
}
function hp(e) {
    e === void 0 && (e = "");
    const t = e.split(" ").map(r=>r.trim()).filter(r=>!!r)
      , n = [];
    return t.forEach(r=>{
        n.indexOf(r) < 0 && n.push(r)
    }
    ),
    n.join(" ")
}
function A1(e) {
    return e === void 0 && (e = ""),
    e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
function F1(e) {
    let {swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: o, prevEl: s, scrollbarEl: a, paginationEl: l} = e;
    const u = i.filter(C=>C !== "children" && C !== "direction" && C !== "wrapperClass")
      , {params: f, pagination: p, navigation: h, scrollbar: v, virtual: y, thumbs: g} = t;
    let E, c, d, m, w, x, T, S;
    i.includes("thumbs") && r.thumbs && r.thumbs.swiper && f.thumbs && !f.thumbs.swiper && (E = !0),
    i.includes("controller") && r.controller && r.controller.control && f.controller && !f.controller.control && (c = !0),
    i.includes("pagination") && r.pagination && (r.pagination.el || l) && (f.pagination || f.pagination === !1) && p && !p.el && (d = !0),
    i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (f.scrollbar || f.scrollbar === !1) && v && !v.el && (m = !0),
    i.includes("navigation") && r.navigation && (r.navigation.prevEl || s) && (r.navigation.nextEl || o) && (f.navigation || f.navigation === !1) && h && !h.prevEl && !h.nextEl && (w = !0);
    const P = C=>{
        t[C] && (t[C].destroy(),
        C === "navigation" ? (t.isElement && (t[C].prevEl.remove(),
        t[C].nextEl.remove()),
        f[C].prevEl = void 0,
        f[C].nextEl = void 0,
        t[C].prevEl = void 0,
        t[C].nextEl = void 0) : (t.isElement && t[C].el.remove(),
        f[C].el = void 0,
        t[C].el = void 0))
    }
    ;
    i.includes("loop") && t.isElement && (f.loop && !r.loop ? x = !0 : !f.loop && r.loop ? T = !0 : S = !0),
    u.forEach(C=>{
        if (un(f[C]) && un(r[C]))
            nn(f[C], r[C]),
            (C === "navigation" || C === "pagination" || C === "scrollbar") && "enabled"in r[C] && !r[C].enabled && P(C);
        else {
            const j = r[C];
            (j === !0 || j === !1) && (C === "navigation" || C === "pagination" || C === "scrollbar") ? j === !1 && P(C) : f[C] = r[C]
        }
    }
    ),
    u.includes("controller") && !c && t.controller && t.controller.control && f.controller && f.controller.control && (t.controller.control = f.controller.control),
    i.includes("children") && n && y && f.virtual.enabled && (y.slides = n,
    y.update(!0)),
    i.includes("children") && n && f.loop && (S = !0),
    E && g.init() && g.update(!0),
    c && (t.controller.control = f.controller.control),
    d && (t.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
    l.classList.add("swiper-pagination"),
    l.part.add("pagination"),
    t.el.appendChild(l)),
    l && (f.pagination.el = l),
    p.init(),
    p.render(),
    p.update()),
    m && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"),
    a.classList.add("swiper-scrollbar"),
    a.part.add("scrollbar"),
    t.el.appendChild(a)),
    a && (f.scrollbar.el = a),
    v.init(),
    v.updateSize(),
    v.setTranslate()),
    w && (t.isElement && ((!o || typeof o == "string") && (o = document.createElement("div"),
    o.classList.add("swiper-button-next"),
    o.innerHTML = t.hostEl.constructor.nextButtonSvg,
    o.part.add("button-next"),
    t.el.appendChild(o)),
    (!s || typeof s == "string") && (s = document.createElement("div"),
    s.classList.add("swiper-button-prev"),
    s.innerHTML = t.hostEl.constructor.prevButtonSvg,
    s.part.add("button-prev"),
    t.el.appendChild(s))),
    o && (f.navigation.nextEl = o),
    s && (f.navigation.prevEl = s),
    h.init(),
    h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (x || S) && t.loopDestroy(),
    (T || S) && t.loopCreate(),
    t.update()
}
function D1(e, t) {
    e === void 0 && (e = {}),
    t === void 0 && (t = !0);
    const n = {
        on: {}
    }
      , r = {}
      , i = {};
    nn(n, _l),
    n._emitClasses = !0,
    n.init = !1;
    const o = {}
      , s = fp.map(l=>l.replace(/_/, ""))
      , a = Object.assign({}, e);
    return Object.keys(a).forEach(l=>{
        typeof e[l] > "u" || (s.indexOf(l) >= 0 ? un(e[l]) ? (n[l] = {},
        i[l] = {},
        nn(n[l], e[l]),
        nn(i[l], e[l])) : (n[l] = e[l],
        i[l] = e[l]) : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function" ? t ? r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l] : o[l] = e[l])
    }
    ),
    ["navigation", "pagination", "scrollbar"].forEach(l=>{
        n[l] === !0 && (n[l] = {}),
        n[l] === !1 && delete n[l]
    }
    ),
    {
        params: n,
        passedParams: i,
        rest: o,
        events: r
    }
}
function V1(e, t) {
    let {el: n, nextEl: r, prevEl: i, paginationEl: o, scrollbarEl: s, swiper: a} = e;
    dp(t) && r && i && (a.params.navigation.nextEl = r,
    a.originalParams.navigation.nextEl = r,
    a.params.navigation.prevEl = i,
    a.originalParams.navigation.prevEl = i),
    pp(t) && o && (a.params.pagination.el = o,
    a.originalParams.pagination.el = o),
    mp(t) && s && (a.params.scrollbar.el = s,
    a.originalParams.scrollbar.el = s),
    a.init(n)
}
function b1(e, t, n, r, i) {
    const o = [];
    if (!t)
        return o;
    const s = l=>{
        o.indexOf(l) < 0 && o.push(l)
    }
    ;
    if (n && r) {
        const l = r.map(i)
          , u = n.map(i);
        l.join("") !== u.join("") && s("children"),
        r.length !== n.length && s("children")
    }
    return fp.filter(l=>l[0] === "_").map(l=>l.replace(/_/, "")).forEach(l=>{
        if (l in e && l in t)
            if (un(e[l]) && un(t[l])) {
                const u = Object.keys(e[l])
                  , f = Object.keys(t[l]);
                u.length !== f.length ? s(l) : (u.forEach(p=>{
                    e[l][p] !== t[l][p] && s(l)
                }
                ),
                f.forEach(p=>{
                    e[l][p] !== t[l][p] && s(l)
                }
                ))
            } else
                e[l] !== t[l] && s(l)
    }
    ),
    o
}
const B1 = e=>{
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
;
function no() {
    return no = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    no.apply(this, arguments)
}
function vp(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function gp(e) {
    const t = [];
    return D.Children.toArray(e).forEach(n=>{
        vp(n) ? t.push(n) : n.props && n.props.children && gp(n.props.children).forEach(r=>t.push(r))
    }
    ),
    t
}
function U1(e) {
    const t = []
      , n = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    };
    return D.Children.toArray(e).forEach(r=>{
        if (vp(r))
            t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
            n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
            const i = gp(r.props.children);
            i.length > 0 ? i.forEach(o=>t.push(o)) : n["container-end"].push(r)
        } else
            n["container-end"].push(r)
    }
    ),
    {
        slides: t,
        slots: n
    }
}
function W1(e, t, n) {
    if (!n)
        return null;
    const r = f=>{
        let p = f;
        return f < 0 ? p = t.length + f : p >= t.length && (p = p - t.length),
        p
    }
      , i = e.isHorizontal() ? {
        [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
    } : {
        top: `${n.offset}px`
    }
      , {from: o, to: s} = n
      , a = e.params.loop ? -t.length : 0
      , l = e.params.loop ? t.length * 2 : t.length
      , u = [];
    for (let f = a; f < l; f += 1)
        f >= o && f <= s && u.push(t[r(f)]);
    return u.map((f,p)=>D.cloneElement(f, {
        swiper: e,
        style: i,
        key: `slide-${p}`
    }))
}
function hr(e, t) {
    return typeof window > "u" ? N.useEffect(e, t) : N.useLayoutEffect(e, t)
}
const fc = N.createContext(null)
  , H1 = N.createContext(null)
  , yp = N.forwardRef(function(e, t) {
    let {className: n, tag: r="div", wrapperTag: i="div", children: o, onSwiper: s, ...a} = e === void 0 ? {} : e
      , l = !1;
    const [u,f] = N.useState("swiper")
      , [p,h] = N.useState(null)
      , [v,y] = N.useState(!1)
      , g = N.useRef(!1)
      , E = N.useRef(null)
      , c = N.useRef(null)
      , d = N.useRef(null)
      , m = N.useRef(null)
      , w = N.useRef(null)
      , x = N.useRef(null)
      , T = N.useRef(null)
      , S = N.useRef(null)
      , {params: P, passedParams: C, rest: j, events: z} = D1(a)
      , {slides: R, slots: A} = U1(o)
      , ve = ()=>{
        y(!v)
    }
    ;
    Object.assign(P.on, {
        _containerClasses(L, $) {
            f($)
        }
    });
    const Tt = ()=>{
        Object.assign(P.on, z),
        l = !0;
        const L = {
            ...P
        };
        if (delete L.wrapperClass,
        c.current = new Aa(L),
        c.current.virtual && c.current.params.virtual.enabled) {
            c.current.virtual.slides = R;
            const $ = {
                cache: !1,
                slides: R,
                renderExternal: h,
                renderExternalUpdate: !1
            };
            nn(c.current.params.virtual, $),
            nn(c.current.originalParams.virtual, $)
        }
    }
    ;
    E.current || Tt(),
    c.current && c.current.on("_beforeBreakpoint", ve);
    const Ct = ()=>{
        l || !z || !c.current || Object.keys(z).forEach(L=>{
            c.current.on(L, z[L])
        }
        )
    }
      , Gt = ()=>{
        !z || !c.current || Object.keys(z).forEach(L=>{
            c.current.off(L, z[L])
        }
        )
    }
    ;
    N.useEffect(()=>()=>{
        c.current && c.current.off("_beforeBreakpoint", ve)
    }
    ),
    N.useEffect(()=>{
        !g.current && c.current && (c.current.emitSlidesClasses(),
        g.current = !0)
    }
    ),
    hr(()=>{
        if (t && (t.current = E.current),
        !!E.current)
            return c.current.destroyed && Tt(),
            V1({
                el: E.current,
                nextEl: w.current,
                prevEl: x.current,
                paginationEl: T.current,
                scrollbarEl: S.current,
                swiper: c.current
            }, P),
            s && s(c.current),
            ()=>{
                c.current && !c.current.destroyed && c.current.destroy(!0, !1)
            }
    }
    , []),
    hr(()=>{
        Ct();
        const L = b1(C, d.current, R, m.current, $=>$.key);
        return d.current = C,
        m.current = R,
        L.length && c.current && !c.current.destroyed && F1({
            swiper: c.current,
            slides: R,
            passedParams: C,
            changedParams: L,
            nextEl: w.current,
            prevEl: x.current,
            scrollbarEl: S.current,
            paginationEl: T.current
        }),
        ()=>{
            Gt()
        }
    }
    ),
    hr(()=>{
        B1(c.current)
    }
    , [p]);
    function M() {
        return P.virtual ? W1(c.current, R, p) : R.map((L,$)=>D.cloneElement(L, {
            swiper: c.current,
            swiperSlideIndex: $
        }))
    }
    return D.createElement(r, no({
        ref: E,
        className: hp(`${u}${n ? ` ${n}` : ""}`)
    }, j), D.createElement(H1.Provider, {
        value: c.current
    }, A["container-start"], D.createElement(i, {
        className: A1(P.wrapperClass)
    }, A["wrapper-start"], M(), A["wrapper-end"]), dp(P) && D.createElement(D.Fragment, null, D.createElement("div", {
        ref: x,
        className: "swiper-button-prev"
    }), D.createElement("div", {
        ref: w,
        className: "swiper-button-next"
    })), mp(P) && D.createElement("div", {
        ref: S,
        className: "swiper-scrollbar"
    }), pp(P) && D.createElement("div", {
        ref: T,
        className: "swiper-pagination"
    }), A["container-end"]))
});
yp.displayName = "Swiper";
const wp = N.forwardRef(function(e, t) {
    let {tag: n="div", children: r, className: i="", swiper: o, zoom: s, lazy: a, virtualIndex: l, swiperSlideIndex: u, ...f} = e === void 0 ? {} : e;
    const p = N.useRef(null)
      , [h,v] = N.useState("swiper-slide")
      , [y,g] = N.useState(!1);
    function E(w, x, T) {
        x === p.current && v(T)
    }
    hr(()=>{
        if (typeof u < "u" && (p.current.swiperSlideIndex = u),
        t && (t.current = p.current),
        !(!p.current || !o)) {
            if (o.destroyed) {
                h !== "swiper-slide" && v("swiper-slide");
                return
            }
            return o.on("_slideClass", E),
            ()=>{
                o && o.off("_slideClass", E)
            }
        }
    }
    ),
    hr(()=>{
        o && p.current && !o.destroyed && v(o.getSlideClasses(p.current))
    }
    , [o]);
    const c = {
        isActive: h.indexOf("swiper-slide-active") >= 0,
        isVisible: h.indexOf("swiper-slide-visible") >= 0,
        isPrev: h.indexOf("swiper-slide-prev") >= 0,
        isNext: h.indexOf("swiper-slide-next") >= 0
    }
      , d = ()=>typeof r == "function" ? r(c) : r
      , m = ()=>{
        g(!0)
    }
    ;
    return D.createElement(n, no({
        ref: p,
        className: hp(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: m
    }, f), s && D.createElement(fc.Provider, {
        value: c
    }, D.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof s == "number" ? s : void 0
    }, d(), a && !y && D.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !s && D.createElement(fc.Provider, {
        value: c
    }, d(), a && !y && D.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
wp.displayName = "SwiperSlide";
function G1(e) {
    const {data: t, onIconClick: n, isActive: r} = e
      , i = So();
    return O.jsxs("a", {
        className: `txt-decoration-none  ${r ? "active" : ""}`,
        href: "#",
        onClick: o=>{
            o.preventDefault(),
            n()
        }
        ,
        children: [O.jsx("div", {
            className: "ratio ratio-1x1",
            children: O.jsx("div", {
                className: "btn-item",
                children: O.jsx("img", {
                    alt: t.label,
                    className: "icon-item",
                    src: `./assets/img/icons/${t.filename}`
                })
            })
        }), O.jsx("p", {
            className: "fs-14 btn-txt fw-500 text-center color-white",
            children: i.isEn ? t.labelEn : t.label
        })]
    })
}
function Y1(e) {
    const {data: t, selectedElementIndex: n, onIconClick: r} = e
      , i = N.useRef(null)
      , [o,s] = N.useState(void 0);
    return N.useEffect(()=>{
        o && (o == null || o.slideTo(n))
    }
    , [n]),
    O.jsx(yp, {
        ref: i,
        spaceBetween: 0,
        loop: !1,
        centeredSlides: !0,
        freeMode: !0,
        centeredSlidesBounds: !0,
        centerInsufficientSlides: !0,
        normalizeSlideIndex: !0,
        slidesPerView: "auto",
        slideToClickedSlide: !1,
        onSlideChange: ()=>console.log("slide change"),
        onSwiper: a=>s(a),
        className: "swiper swiper2 mt-4",
        children: t.map((a,l)=>O.jsx(wp, {
            children: O.jsx(G1, {
                onIconClick: ()=>r(l),
                data: a,
                isActive: l === n
            }, l)
        }, l))
    })
}
const X1 = (e,t)=>{
    let n;
    return (...r)=>{
        clearTimeout(n),
        n = setTimeout(e, t, [...r])
    }
}
  , Q1 = ()=>{
    const [e,t] = N.useState([0, 0]);
    return N.useLayoutEffect(()=>{
        function n() {
            t([window.innerWidth, window.innerHeight])
        }
        const r = X1(n, 200);
        return window.addEventListener("resize", r),
        n(),
        ()=>window.removeEventListener("resize", r)
    }
    , []),
    e
}
  , K1 = e=>{
    const {data: t, isLoading: n, error: r} = e
      , [i,o] = N.useState(void 0)
      , s = So()
      , l = Q1()[0] < 992;
    return N.useEffect(()=>{
        !n && t.length && o(0)
    }
    , [n]),
    O.jsxs("div", {
        className: "row",
        children: [O.jsx("div", {
            className: "col col-12 col-lg-6 px-0 ps-lg-4 pe-lg-2 d-lg-none",
            children: !r && t.length && l && O.jsx(Y1, {
                data: t,
                selectedElementIndex: i,
                onIconClick: o
            })
        }), O.jsx("div", {
            className: "col col-12 col-lg-6 px-0 ps-lg-4 pe-lg-2 d-none d-lg-block",
            children: O.jsxs("div", {
                className: "bg-white big-box-white",
                children: [O.jsxs("p", {
                    className: "fs-24 fw-700 color-black mb-4",
                    children: [s.isEn ? "Select the item you wish to power" : "Wybierz przedmiot, który chcesz zasilić", ":"]
                }), O.jsxs("div", {
                    className: "row",
                    children: [n && O.jsx(sh, {}), r && O.jsxs("div", {
                        children: [O.jsx(rh, {
                            style: {
                                color: "red",
                                fontSize: 30
                            }
                        }), " ", r]
                    }), !r && t.length && !l && O.jsx(X0, {
                        data: t,
                        selectedElementIndex: i,
                        onIconClick: o
                    })]
                })]
            })
        }), O.jsx("div", {
            className: "col col-12 col-lg-6 px-0 pe-lg-4 ps-lg-2",
            children: O.jsx(vg, {
                selectedItemIndex: i,
                data: O.jsx(hg, {
                    data: i !== void 0 ? t[i] : void 0
                })
            })
        })]
    })
}
;
function q1() {
    const [e,t] = N.useState([])
      , [n,r] = N.useState(!0)
      , [i,o] = N.useState(void 0);
    return N.useEffect(()=>{
        fetch("./data.json").then(async s=>{
            s.ok ? t(await s.json()) : o("Wystąpił problem podczas wczytywania danych.")
        }
        ).catch(s=>{
            console.log(s),
            o(s)
        }
        ).finally(()=>{
            r(!1)
        }
        )
    }
    , []),
    O.jsx(O.Fragment, {
        children: O.jsx(K1, {
            data: e,
            error: i,
            isLoading: n
        })
    })
}
ks.createRoot(document.getElementById("root")).render(O.jsx(D.StrictMode, {
    children: O.jsx(q1, {})
}));
