"use strict";
self["webpackHotUpdateihm_wedding_front"]("app",{

/***/ "./src/index.js":
/*!***********************************!*\
  !*** ./src/index.js + 18 modules ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/stable/index.js
var stable = __webpack_require__("./node_modules/core-js/stable/index.js");
// EXTERNAL MODULE: ./node_modules/react-app-polyfill/ie11.js
var ie11 = __webpack_require__("./node_modules/react-app-polyfill/ie11.js");
// EXTERNAL MODULE: ./node_modules/react-app-polyfill/stable.js
var react_app_polyfill_stable = __webpack_require__("./node_modules/react-app-polyfill/stable.js");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

;// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

;// CONCATENATED MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ var tiny_warning_esm = (warning);

;// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm_isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (tiny_invariant_esm_isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

;// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? tiny_warning_esm(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? tiny_warning_esm(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? tiny_invariant_esm(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? tiny_warning_esm(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? tiny_warning_esm(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? tiny_warning_esm(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? tiny_warning_esm(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? tiny_warning_esm(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? tiny_invariant_esm(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? tiny_warning_esm(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? tiny_warning_esm(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? tiny_warning_esm(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? tiny_warning_esm(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? tiny_warning_esm(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? tiny_warning_esm(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? tiny_warning_esm(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



;// CONCATENATED MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            tiny_warning_esm((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types_default()).object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    _inheritsLoose(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types_default()).object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react.createContext || createReactContext;

/* harmony default export */ var esm = (index);

// EXTERNAL MODULE: ./node_modules/react-router/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__("./node_modules/react-router/node_modules/path-to-regexp/index.js");
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);
// EXTERNAL MODULE: ./node_modules/react-router/node_modules/react-is/index.js
var react_is = __webpack_require__("./node_modules/react-router/node_modules/react-is/index.js");
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
;// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = esm();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react.Component);

if (true) {
  Router.propTypes = {
    children: (prop_types_default()).node,
    history: (prop_types_default()).object.isRequired,
    staticContext: (prop_types_default()).object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? tiny_warning_esm(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types_default()).array,
    initialIndex: (prop_types_default()).number,
    getUserConfirmation: (prop_types_default()).func,
    keyLength: (prop_types_default()).number,
    children: (prop_types_default()).node
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? tiny_warning_esm(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
    !context ?  true ? tiny_invariant_esm(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/react.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]);
  Prompt.propTypes = {
    when: (prop_types_default()).bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
    !context ?  true ? tiny_invariant_esm(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/react.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types_default()).bool,
    from: (prop_types_default()).string,
    to: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? tiny_warning_esm(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? tiny_invariant_esm(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? /*#__PURE__*/react.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}(react.Component);

if (true) {
  Route.propTypes = {
    children: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).node]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types_default()).bool,
    location: (prop_types_default()).object,
    path: prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().arrayOf((prop_types_default()).string)]),
    render: (prop_types_default()).func,
    sensitive: (prop_types_default()).bool,
    strict: (prop_types_default()).bool
  };

  Route.prototype.componentDidMount = function () {
     true ? tiny_warning_esm(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? tiny_warning_esm(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? tiny_warning_esm(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? tiny_warning_esm(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? tiny_warning_esm(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return _extends({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      true ? tiny_invariant_esm(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react.createElement(Router, _extends({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types_default()).string,
    context: (prop_types_default()).object,
    location: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? tiny_warning_esm(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
      !context ?  true ? tiny_invariant_esm(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react.Component);

if (true) {
  Switch.propTypes = {
    children: (prop_types_default()).node,
    location: (prop_types_default()).object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? tiny_warning_esm(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? tiny_warning_esm(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
      !context ?  true ? tiny_invariant_esm(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return /*#__PURE__*/react.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func, (prop_types_default()).object])
    };
  }

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = react.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? tiny_invariant_esm(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? tiny_invariant_esm(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? tiny_invariant_esm(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? tiny_invariant_esm(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map

;// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types_default()).string,
    children: (prop_types_default()).node,
    forceRefresh: (prop_types_default()).bool,
    getUserConfirmation: (prop_types_default()).func,
    keyLength: (prop_types_default()).number
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? tiny_warning_esm(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react.Component);

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types_default()).string,
    children: (prop_types_default()).node,
    getUserConfirmation: (prop_types_default()).func,
    hashType: prop_types_default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? tiny_warning_esm(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
    !context ?  true ? tiny_invariant_esm(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = createPath(context.location) === createPath(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).object, (prop_types_default()).func]);
  var refType = prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func, prop_types_default().shape({
    current: (prop_types_default()).any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: (prop_types_default()).func,
    replace: (prop_types_default()).bool,
    target: (prop_types_default()).string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react.createElement(context.Consumer, null, function (context) {
    !context ?  true ? tiny_invariant_esm(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = _extends({}, style, activeStyle);
    }

    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types_default().oneOf(["page", "step", "location", "date", "time", "true", "false"]);
  NavLink.propTypes = _extends({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types_default()).string,
    activeStyle: (prop_types_default()).object,
    className: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]),
    exact: (prop_types_default()).bool,
    isActive: (prop_types_default()).func,
    location: (prop_types_default()).object,
    sensitive: (prop_types_default()).bool,
    strict: (prop_types_default()).bool,
    style: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).func])
  });
}


//# sourceMappingURL=react-router-dom.js.map

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("./node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/components/templates/Welcome/index.jsx


var Welcome = function Welcome() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", null, /*#__PURE__*/react.createElement("div", {
    className: "testfuck"
  }), /*#__PURE__*/react.createElement("p", null, "fff"), /*#__PURE__*/react.createElement("img", {
    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@images/112_main.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
  }), /*#__PURE__*/react.createElement("p", null, " 2222 ")));
};
;// CONCATENATED MODULE: ./src/pages/Welcome/index.jsx



var WelcomePage = function WelcomePage() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Welcome, null));
};
;// CONCATENATED MODULE: ./src/components/templates/Main/index.jsx



var Main = function Main() {
  var sceneSpec = [{
    type: "sticky",
    heightX: 3,
    scrollHeight: 0
  }, {
    type: "normal",
    heightX: 1,
    scrollHeight: 0
  }, {
    type: "sticky",
    heightX: 4,
    scrollHeight: 0
  }, {
    type: "sticky",
    heightX: 7,
    scrollHeight: 0
  }];
  var yOffset = 0;
  var totalYOffset = 0; // ????????? ?????? ????????? ??????

  var prevScrollHeight = 0; // ?????? ????????? ?????? ???????????? ????????? ????????? ????????? ??? ???

  var currentScene = 0; // ?????? ??????????????? ???
  // ????????? ????????? ???????????? ??????

  var setLayout = function setLayout() {
    var total = 0;
    var mArr = [];
    sceneSpec.map(function (i, idx) {
      var cp = _.cloneDeep(i);

      cp.obj = {
        container: document.querySelector("#scroll-section-".concat(idx))
      };
      cp.scrollHeight = cp.heightX * window.innerHeight;
      cp.obj.container.style.height = "".concat(cp.scrollHeight, "px");
      total += cp.scrollHeight;
      mArr.push(cp);
    });
    sceneSpec = mArr;
    totalYOffset = total;
  }; // ?????? ????????? ?????? ??????


  var currentScroll = function currentScroll() {
    yOffset = window.pageYOffset;
  };

  var curScene = function curScene() {
    var prevHeight = 0;
    var cNum = currentScene;

    for (var i = 0; i < currentScene; i++) {
      console.log("here1");
      prevHeight += sceneSpec[i].scrollHeight;
    }

    console.log(yOffset, prevHeight + sceneSpec[cNum].scrollHeight, currentScene);

    if (yOffset > prevHeight + sceneSpec[cNum].scrollHeight) {
      currentScene = cNum++;
      console.log("aaa", cNum, currentScene);
    }

    if (yOffset < prevHeight) {
      currentScene = cNum--;
      console.log("bbb", cNum, currentScene);
    }
  };

  (0,react.useEffect)(function () {
    setLayout();
    window.addEventListener('resize', setLayout);
    return function () {
      return window.removeEventListener('resize', setLayout);
    };
  }, []);
  (0,react.useEffect)(function () {
    window.addEventListener('scroll', function () {
      currentScroll();
      curScene();
    });
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    className: "scroll-section",
    id: "scroll-section-0"
  }, /*#__PURE__*/react.createElement("h1", null, " Welcome Wedding1111111"), /*#__PURE__*/react.createElement("div", {
    className: "sticky-element main-message"
  }, /*#__PURE__*/react.createElement("p", null, " \uB3D9\uD574\uBB3C\uACFC \uBC31\uB450\uC0B0\uC774 ", /*#__PURE__*/react.createElement("br", null), " \uB9C8\uB974\uACE0 \uB2F3\uB3C4\uB85D ")), /*#__PURE__*/react.createElement("div", {
    className: "sticky-element main-message"
  }, /*#__PURE__*/react.createElement("p", null, " \uD558\uB290\uB2D8\uC774 \uBCF4\uC6B0\uD558\uC0AC \uC6B0\uB9AC\uB098\uB77C \uB9CC\uC138 ")), /*#__PURE__*/react.createElement("div", {
    className: "sticky-element main-message"
  }, /*#__PURE__*/react.createElement("p", null, " \uBB34\uAD81\uD654 \uC0BC\uCC9C\uB9AC \uD654\uB824\uAC15\uC0B0 ")), /*#__PURE__*/react.createElement("div", {
    className: "sticky-element main-message"
  }, /*#__PURE__*/react.createElement("p", null, " \uB300\uD55C\uC0AC\uB78C \uB300\uD55C\uC73C\uB85C \uAE38\uC774 \uBCF4\uC804\uD558\uC138 "))), /*#__PURE__*/react.createElement("section", {
    className: "scroll-section",
    id: "scroll-section-1"
  }, /*#__PURE__*/react.createElement("p", {
    className: "description"
  }, /*#__PURE__*/react.createElement("strong", null, " \uAC15\uC870 \uC601\uC5ED 123123 "), "Lorem ipsum dolor sit amet, consecture, test everythigs, in the miracle oh nol ra woe ra")), /*#__PURE__*/react.createElement("section", {
    className: "scroll-section",
    id: "scroll-section-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sticky-element main-message"
  }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("small", null, "\uD3B8\uC548\uD55C \uCD09\uAC10"), "\uC785\uACFC \uD558\uB098\uAC00 \uB418\uB2E4")), /*#__PURE__*/react.createElement("div", {
    className: "sticky-element desc-message"
  }, /*#__PURE__*/react.createElement("p", null, "\uD30C\uB780\uD558\uB298 \uD558\uB298\uC0C9 \uD48D\uC120\uC740 \uC6B0\uB9AC \uB9D8\uC18D\uC5D0 \uC601\uC6D0\uD560\uAEBC\uC57C \uB108\uD76C\uB4E4\uC758 \uADF8 \uC608\uC05C\uB9C8\uC74C\uC740 \uC6B0\uB9AC\uAC00 \uD56D\uC0C1 \uC9C0\uCF1C\uC904\uAEBC\uC57C"), /*#__PURE__*/react.createElement("p", {
    className: "pin"
  })), /*#__PURE__*/react.createElement("div", {
    className: "sticky-element desc-message"
  }, /*#__PURE__*/react.createElement("p", null, "\uB098 \uC5B4\uCA4C\uBA74 \uB108\uC5D0\uAC8C \uD558\uACE0\uC2F6\uC740 \uB9D0\uC740 \uAE34\uAE34\uBC24\uC744 \uC9C0\uC0C8\uB3C4 \uC544\uC9C1 \uB108\uB97C \uB108\uBB34 \uC0AC\uB791\uD55C\uB2E4\uACE0 \uC774\uC544\uD508 \uC2DC\uAC04\uC774 \uC5B4\uC11C \uC9C0\uB098\uAC00\uAE30\uB97C \uC870\uAE08\uB9CC \uB354 \uBC84\uD168\uBCFC\uAED8"), /*#__PURE__*/react.createElement("p", {
    className: "pin"
  }))), /*#__PURE__*/react.createElement("section", {
    className: "scroll-section",
    id: "scroll-section-3"
  }, /*#__PURE__*/react.createElement("p", {
    className: "mid-message"
  }, /*#__PURE__*/react.createElement("strong", null, "\uB2E4\uBE44\uCE58 \uC5B4\uCA4C\uBA74 \uB108\uC5D0\uAC8C"), "SBS, KBS 3\uC8FC\uC5F0\uC18D 1\uC704 \uAC10\uC0AC\uD569\uB2C8\uB2E4."), /*#__PURE__*/react.createElement("p", {
    className: "canvas-caption"
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at fuga quae perspiciatis veniam impedit et, ratione est optio porro. Incidunt aperiam nemo voluptas odit quisquam harum in mollitia. Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum inventore a rerum distinctio vero illo magni possimus temporibus dolores neque adipisci, repudiandae repellat. Ducimus accusamus similique quas earum laborum. Autem tempora repellendus asperiores illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente rerum neque error deleniti quis, et, quibusdam, est autem voluptate rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore perferendis iusto explicabo animi eos ratione obcaecati.")));
};
;// CONCATENATED MODULE: ./src/pages/Main/index.jsx



var MainPage = function MainPage() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Main, null));
};
;// CONCATENATED MODULE: ./src/App.js






var App = function App() {
  window._ = (lodash_default());
  /**
   * ????????? ?????? ????????? ??????
   */

  function pageNotFound() {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, " 404 Page Not Found"));
  }
  /**
   * ?????? ????????? ????????????
   */


  var getMobileOs = (0,react.useCallback)(function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "IOS";
    }

    return "WEB";
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement(BrowserRouter, null, /*#__PURE__*/react.createElement(Switch, null, /*#__PURE__*/react.createElement(Route, {
    path: "/",
    component: WelcomePage
  }), /*#__PURE__*/react.createElement(Route, {
    path: "/main",
    component: MainPage
  }), /*#__PURE__*/react.createElement(Route, {
    path: "*",
    component: pageNotFound
  })))));
};

/* harmony default export */ var src_App = (App);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "node_modules_web-vitals_dist_web-vitals_es5_min_js").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// EXTERNAL MODULE: ./src/assets/css/main.css
var main = __webpack_require__("./src/assets/css/main.css");
// EXTERNAL MODULE: ./src/assets/css/index.css
var css = __webpack_require__("./src/assets/css/index.css");
;// CONCATENATED MODULE: ./src/index.js

 // For IE 11 support

 // For IE 11 support







react_dom.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(src_App, null)), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

src_reportWebVitals();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "62ca0f2b5ddb4ab5e21d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNkMjA3NmJmMmMyZWE0MDIzMGY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FDUGlEO0FBQ2xDO0FBQ2Y7QUFDQTtBQUNBLEVBQUUsZUFBYztBQUNoQjs7Ozs7QUNMZTtBQUNmO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLE1BQU07O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHFEQUFlLGVBQWUsRUFBQzs7O0FDMUUvQixTQUFTLG1CQUFPO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsbUJBQU87QUFDeEIsaUJBQWlCLG1CQUFPOztBQUV4Qjs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxnREFBZSxVQUFVLEVBQUM7OztBQ25DMUIsbUJBQW1CLGFB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Q0YsQ0FWRDs7QUFZQSx3REFBZUQsZUFBZjs7Ozs7O0FDWkE7Q0FDa0M7O0NBQ0U7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBUyxnQkFBQSxlQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLE9BQUQsT0FERixDQURGLEVBSUUzQyxRQUFRLENBQUM2QyxjQUFULENBQXdCLE1BQXhCLENBSkYsR0FPQTtBQUNBO0FBQ0E7O0FBQ0FYLG1CQUFlOzs7Ozs7OztVQ3RCZixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL2lobS13ZWRkaW5nLWZyb250Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vaWhtLXdlZGRpbmctZnJvbnQvLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9lc20vcmVzb2x2ZS1wYXRobmFtZS5qcyIsIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9lc20vdmFsdWUtZXF1YWwuanMiLCJ3ZWJwYWNrOi8vaWhtLXdlZGRpbmctZnJvbnQvLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL25vZGVfbW9kdWxlcy90aW55LWludmFyaWFudC9kaXN0L3RpbnktaW52YXJpYW50LmVzbS5qcyIsIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2VzbS9oaXN0b3J5LmpzIiwid2VicGFjazovL2lobS13ZWRkaW5nLWZyb250Ly4vbm9kZV9tb2R1bGVzL21pbmktY3JlYXRlLXJlYWN0LWNvbnRleHQvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaWhtLXdlZGRpbmctZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXNtL3JlYWN0LXJvdXRlci5qcyIsIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzIiwid2VicGFjazovL2lobS13ZWRkaW5nLWZyb250Ly4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL1dlbGNvbWUvaW5kZXguanN4Iiwid2VicGFjazovL2lobS13ZWRkaW5nLWZyb250Ly4vc3JjL3BhZ2VzL1dlbGNvbWUvaW5kZXguanN4Iiwid2VicGFjazovL2lobS13ZWRkaW5nLWZyb250Ly4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGVzL01haW4vaW5kZXguanN4Iiwid2VicGFjazovL2lobS13ZWRkaW5nLWZyb250Ly4vc3JjL3BhZ2VzL01haW4vaW5kZXguanN4Iiwid2VicGFjazovL2lobS13ZWRkaW5nLWZyb250Ly4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9paG0td2VkZGluZy1mcm9udC8uL3NyYy9yZXBvcnRXZWJWaXRhbHMuanMiLCJ3ZWJwYWNrOi8vaWhtLXdlZGRpbmctZnJvbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaWhtLXdlZGRpbmctZnJvbnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvLCBmcm9tKSB7XG4gIGlmIChmcm9tID09PSB1bmRlZmluZWQpIGZyb20gPSAnJztcblxuICB2YXIgdG9QYXJ0cyA9ICh0byAmJiB0by5zcGxpdCgnLycpKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IChmcm9tICYmIGZyb20uc3BsaXQoJy8nKSkgfHwgW107XG5cbiAgdmFyIGlzVG9BYnMgPSB0byAmJiBpc0Fic29sdXRlKHRvKTtcbiAgdmFyIGlzRnJvbUFicyA9IGZyb20gJiYgaXNBYnNvbHV0ZShmcm9tKTtcbiAgdmFyIG11c3RFbmRBYnMgPSBpc1RvQWJzIHx8IGlzRnJvbUFicztcblxuICBpZiAodG8gJiYgaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAvLyB0byBpcyBhYnNvbHV0ZVxuICAgIGZyb21QYXJ0cyA9IHRvUGFydHM7XG4gIH0gZWxzZSBpZiAodG9QYXJ0cy5sZW5ndGgpIHtcbiAgICAvLyB0byBpcyByZWxhdGl2ZSwgZHJvcCB0aGUgZmlsZW5hbWVcbiAgICBmcm9tUGFydHMucG9wKCk7XG4gICAgZnJvbVBhcnRzID0gZnJvbVBhcnRzLmNvbmNhdCh0b1BhcnRzKTtcbiAgfVxuXG4gIGlmICghZnJvbVBhcnRzLmxlbmd0aCkgcmV0dXJuICcvJztcblxuICB2YXIgaGFzVHJhaWxpbmdTbGFzaDtcbiAgaWYgKGZyb21QYXJ0cy5sZW5ndGgpIHtcbiAgICB2YXIgbGFzdCA9IGZyb21QYXJ0c1tmcm9tUGFydHMubGVuZ3RoIC0gMV07XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nIHx8IGxhc3QgPT09ICcnO1xuICB9IGVsc2Uge1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBmcm9tUGFydHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBwYXJ0ID0gZnJvbVBhcnRzW2ldO1xuXG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbXVzdEVuZEFicykgZm9yICg7IHVwLS07IHVwKSBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcblxuICBpZiAoXG4gICAgbXVzdEVuZEFicyAmJlxuICAgIGZyb21QYXJ0c1swXSAhPT0gJycgJiZcbiAgICAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKVxuICApXG4gICAgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVBhdGhuYW1lO1xuIiwiZnVuY3Rpb24gdmFsdWVPZihvYmopIHtcbiAgcmV0dXJuIG9iai52YWx1ZU9mID8gb2JqLnZhbHVlT2YoKSA6IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZi5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWwoYSwgYikge1xuICAvLyBUZXN0IGZvciBzdHJpY3QgZXF1YWxpdHkgZmlyc3QuXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICAvLyBPdGhlcndpc2UsIGlmIGVpdGhlciBvZiB0aGVtID09IG51bGwgdGhleSBhcmUgbm90IGVxdWFsLlxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJlxuICAgICAgYS5ldmVyeShmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gdmFsdWVFcXVhbChpdGVtLCBiW2luZGV4XSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBiID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBhVmFsdWUgPSB2YWx1ZU9mKGEpO1xuICAgIHZhciBiVmFsdWUgPSB2YWx1ZU9mKGIpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCBhLCBiKSkuZXZlcnkoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdmFsdWVFcXVhbChhW2tleV0sIGJba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbHVlRXF1YWw7XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcbiIsInZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xudmFyIHByZWZpeCA9ICdJbnZhcmlhbnQgZmFpbGVkJztcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIFwiOiBcIiArIChtZXNzYWdlIHx8ICcnKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludmFyaWFudDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCByZXNvbHZlUGF0aG5hbWUgZnJvbSAncmVzb2x2ZS1wYXRobmFtZSc7XG5pbXBvcnQgdmFsdWVFcXVhbCBmcm9tICd2YWx1ZS1lcXVhbCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbmZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59XG5mdW5jdGlvbiBzdHJpcExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBwYXRoLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcmVmaXgudG9Mb3dlckNhc2UoKSkgPT09IDAgJiYgJy8/IycuaW5kZXhPZihwYXRoLmNoYXJBdChwcmVmaXgubGVuZ3RoKSkgIT09IC0xO1xufVxuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkgPyBwYXRoLnN1YnN0cihwcmVmaXgubGVuZ3RoKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gcGF0aCB8fCAnLyc7XG4gIHZhciBzZWFyY2ggPSAnJztcbiAgdmFyIGhhc2ggPSAnJztcbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcblxuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuXG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSAnPycpIHBhdGggKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gJz8nID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4gIGlmIChoYXNoICYmIGhhc2ggIT09ICcjJykgcGF0aCArPSBoYXNoLmNoYXJBdCgwKSA9PT0gJyMnID8gaGFzaCA6IFwiI1wiICsgaGFzaDtcbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXksIGN1cnJlbnRMb2NhdGlvbikge1xuICB2YXIgbG9jYXRpb247XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgIC8vIFR3by1hcmcgZm9ybTogcHVzaChwYXRoLCBzdGF0ZSlcbiAgICBsb2NhdGlvbiA9IHBhcnNlUGF0aChwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24ucGF0aG5hbWUgPSAnJztcblxuICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2guY2hhckF0KDApICE9PSAnPycpIGxvY2F0aW9uLnNlYXJjaCA9ICc/JyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uc2VhcmNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBsb2NhdGlvbi5oYXNoID0gJyMnICsgbG9jYXRpb24uaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICB0cnkge1xuICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gZGVjb2RlVVJJKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVUklFcnJvcignUGF0aG5hbWUgXCInICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnXCIgY291bGQgbm90IGJlIGRlY29kZWQuICcgKyAnVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGFuIGludmFsaWQgcGVyY2VudC1lbmNvZGluZy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5KSBsb2NhdGlvbi5rZXkgPSBrZXk7XG5cbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xuICAgIC8vIFJlc29sdmUgaW5jb21wbGV0ZS9yZWxhdGl2ZSBwYXRobmFtZSByZWxhdGl2ZSB0byBjdXJyZW50IGxvY2F0aW9uLlxuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gY3VycmVudExvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gcmVzb2x2ZVBhdGhuYW1lKGxvY2F0aW9uLnBhdGhuYW1lLCBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHByaW9yIGxvY2F0aW9uIGFuZCBwYXRobmFtZSBpcyBlbXB0eSwgc2V0IGl0IHRvIC9cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICcvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb247XG59XG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgdmFsdWVFcXVhbChhLnN0YXRlLCBiLnN0YXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKSB7XG4gIHZhciBwcm9tcHQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJykgOiB2b2lkIDA7XG4gICAgcHJvbXB0ID0gbmV4dFByb21wdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb21wdCA9PT0gbmV4dFByb21wdCkgcHJvbXB0ID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE86IElmIGFub3RoZXIgdHJhbnNpdGlvbiBzdGFydHMgd2hpbGUgd2UncmUgc3RpbGwgY29uZmlybWluZ1xuICAgIC8vIHRoZSBwcmV2aW91cyBvbmUsIHdlIG1heSBlbmQgdXAgaW4gYSB3ZWlyZCBzdGF0ZS4gRmlndXJlIG91dCB0aGVcbiAgICAvLyBiZXN0IHdheSB0byBoYW5kbGUgdGhpcy5cbiAgICBpZiAocHJvbXB0ICE9IG51bGwpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0eXBlb2YgcHJvbXB0ID09PSAnZnVuY3Rpb24nID8gcHJvbXB0KGxvY2F0aW9uLCBhY3Rpb24pIDogcHJvbXB0O1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVc2VyQ29uZmlybWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihyZXN1bHQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnQSBoaXN0b3J5IG5lZWRzIGEgZ2V0VXNlckNvbmZpcm1hdGlvbiBmdW5jdGlvbiBpbiBvcmRlciB0byB1c2UgYSBwcm9tcHQgbWVzc2FnZScpIDogdm9pZCAwO1xuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gYXBwZW5kTGlzdGVuZXIoZm4pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICBpZiAoaXNBY3RpdmUpIGZuLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hbGVydFxufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufVxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBnaXZlbiBwb3BzdGF0ZSBldmVudCBpcyBhbiBleHRyYW5lb3VzIFdlYktpdCBldmVudC5cbiAqIEFjY291bnRzIGZvciB0aGUgZmFjdCB0aGF0IENocm9tZSBvbiBpT1MgZmlyZXMgcmVhbCBwb3BzdGF0ZSBldmVudHNcbiAqIGNvbnRhaW5pbmcgdW5kZWZpbmVkIHN0YXRlIHdoZW4gcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uLlxuICovXG5cbmZ1bmN0aW9uIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDcmlPUycpID09PSAtMTtcbn1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxuZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElFIDExIHNvbWV0aW1lcyB0aHJvd3Mgd2hlbiBhY2Nlc3Npbmcgd2luZG93Lmhpc3Rvcnkuc3RhdGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvaGlzdG9yeS9wdWxsLzI4OVxuICAgIHJldHVybiB7fTtcbiAgfVxufVxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpbmNsdWRpbmdcbiAqIHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50LlxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgIWNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhblVzZUhpc3RvcnkgPSBzdXBwb3J0c0hpc3RvcnkoKTtcbiAgdmFyIG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyID0gIXN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKTtcbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgX3Byb3BzJGZvcmNlUmVmcmVzaCA9IF9wcm9wcy5mb3JjZVJlZnJlc2gsXG4gICAgICBmb3JjZVJlZnJlc2ggPSBfcHJvcHMkZm9yY2VSZWZyZXNoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmb3JjZVJlZnJlc2gsXG4gICAgICBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBfcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHZvaWQgMCA/IGdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBfcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdm9pZCAwID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG5cbiAgZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgdmFyIF9yZWYgPSBoaXN0b3J5U3RhdGUgfHwge30sXG4gICAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgICB2YXIgX3dpbmRvdyRsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbixcbiAgICAgICAgcGF0aG5hbWUgPSBfd2luZG93JGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2ggPSBfd2luZG93JGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaCA9IF93aW5kb3ckbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGF0aCA9IHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFiYXNlbmFtZSB8fCBoYXNCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSksICdZb3UgYXJlIGF0dGVtcHRpbmcgdG8gdXNlIGEgYmFzZW5hbWUgb24gYSBwYWdlIHdob3NlIFVSTCBwYXRoIGRvZXMgbm90IGJlZ2luICcgKyAnd2l0aCB0aGUgYmFzZW5hbWUuIEV4cGVjdGVkIHBhdGggXCInICsgcGF0aCArICdcIiB0byBiZWdpbiB3aXRoIFwiJyArIGJhc2VuYW1lICsgJ1wiLicpIDogdm9pZCAwO1xuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9IHN0cmlwQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQoZXZlbnQpKSByZXR1cm47XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSkpO1xuICB9XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uOyAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIGtleXMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3Iga2V5cyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxLZXlzLmluZGV4T2YodG9Mb2NhdGlvbi5rZXkpO1xuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSk7XG4gIHZhciBhbGxLZXlzID0gW2luaXRpYWxMb2NhdGlvbi5rZXldOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcbiAgICAgICAgICB2YXIgbmV4dEtleXMgPSBhbGxLZXlzLnNsaWNlKDAsIHByZXZJbmRleCArIDEpO1xuICAgICAgICAgIG5leHRLZXlzLnB1c2gobG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBhbGxLZXlzID0gbmV4dEtleXM7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpIDogdm9pZCAwO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbEtleXNbcHJldkluZGV4XSA9IGxvY2F0aW9uLmtleTtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5JykgOiB2b2lkIDA7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxICYmIGRlbHRhID09PSAxKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGJsb2NrKHByb21wdCkge1xuICAgIGlmIChwcm9tcHQgPT09IHZvaWQgMCkge1xuICAgICAgcHJvbXB0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG52YXIgSGFzaENoYW5nZUV2ZW50JDEgPSAnaGFzaGNoYW5nZSc7XG52YXIgSGFzaFBhdGhDb2RlcnMgPSB7XG4gIGhhc2hiYW5nOiB7XG4gICAgZW5jb2RlUGF0aDogZnVuY3Rpb24gZW5jb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGggOiAnIS8nICsgc3RyaXBMZWFkaW5nU2xhc2gocGF0aCk7XG4gICAgfSxcbiAgICBkZWNvZGVQYXRoOiBmdW5jdGlvbiBkZWNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xuICAgIH1cbiAgfSxcbiAgbm9zbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IHN0cmlwTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaFxuICB9LFxuICBzbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2hcbiAgfVxufTtcblxuZnVuY3Rpb24gc3RyaXBIYXNoKHVybCkge1xuICB2YXIgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGhhc2hJbmRleCA9PT0gLTEgPyB1cmwgOiB1cmwuc2xpY2UoMCwgaGFzaEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIGhhc2hJbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xuICByZXR1cm4gaGFzaEluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zdWJzdHJpbmcoaGFzaEluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc3RyaXBIYXNoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeShwcm9wcykge1xuICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHByb3BzID0ge307XG4gIH1cblxuICAhY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnSGFzaCBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuR29XaXRob3V0UmVsb2FkID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKTtcbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB2b2lkIDAgPyBnZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMkaGFzaFR5cGUgPSBfcHJvcHMuaGFzaFR5cGUsXG4gICAgICBoYXNoVHlwZSA9IF9wcm9wcyRoYXNoVHlwZSA9PT0gdm9pZCAwID8gJ3NsYXNoJyA6IF9wcm9wcyRoYXNoVHlwZTtcbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyBzdHJpcFRyYWlsaW5nU2xhc2goYWRkTGVhZGluZ1NsYXNoKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcbiAgdmFyIF9IYXNoUGF0aENvZGVycyRoYXNoVCA9IEhhc2hQYXRoQ29kZXJzW2hhc2hUeXBlXSxcbiAgICAgIGVuY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZW5jb2RlUGF0aCxcbiAgICAgIGRlY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZGVjb2RlUGF0aDtcblxuICBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IGRlY29kZVBhdGgoZ2V0SGFzaFBhdGgoKSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghYmFzZW5hbWUgfHwgaGFzQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKSA6IHZvaWQgMDtcbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSBzdHJpcEJhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24ocGF0aCk7XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH1cblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gIHZhciBpZ25vcmVQYXRoID0gbnVsbDtcblxuICBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbCQkMShhLCBiKSB7XG4gICAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChwYXRoKTtcblxuICAgIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkge1xuICAgICAgLy8gRW5zdXJlIHdlIGFsd2F5cyBoYXZlIGEgcHJvcGVybHktZW5jb2RlZCBoYXNoLlxuICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oKTtcbiAgICAgIHZhciBwcmV2TG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgaWYgKCFmb3JjZU5leHRQb3AgJiYgbG9jYXRpb25zQXJlRXF1YWwkJDEocHJldkxvY2F0aW9uLCBsb2NhdGlvbikpIHJldHVybjsgLy8gQSBoYXNoY2hhbmdlIGRvZXNuJ3QgYWx3YXlzID09IGxvY2F0aW9uIGNoYW5nZS5cblxuICAgICAgaWYgKGlnbm9yZVBhdGggPT09IGNyZWF0ZVBhdGgobG9jYXRpb24pKSByZXR1cm47IC8vIElnbm9yZSB0aGlzIGNoYW5nZTsgd2UgYWxyZWFkeSBzZXRTdGF0ZSBpbiBwdXNoL3JlcGxhY2UuXG5cbiAgICAgIGlnbm9yZVBhdGggPSBudWxsO1xuICAgICAgaGFuZGxlUG9wKGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjsgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBwYXRocyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBwYXRocyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKHRvTG9jYXRpb24pKTtcbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuICAgIHZhciBmcm9tSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKGZyb21Mb2NhdGlvbikpO1xuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9IC8vIEVuc3VyZSB0aGUgaGFzaCBpcyBlbmNvZGVkIHByb3Blcmx5IGJlZm9yZSBkb2luZyBhbnl0aGluZyBlbHNlLlxuXG5cbiAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuICBpZiAocGF0aCAhPT0gZW5jb2RlZFBhdGgpIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICB2YXIgYWxsUGF0aHMgPSBbY3JlYXRlUGF0aChpbml0aWFsTG9jYXRpb24pXTsgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICB2YXIgYmFzZVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKTtcbiAgICB2YXIgaHJlZiA9ICcnO1xuXG4gICAgaWYgKGJhc2VUYWcgJiYgYmFzZVRhZy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgaHJlZiA9IHN0cmlwSGFzaCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhyZWYgKyAnIycgKyBlbmNvZGVQYXRoKGJhc2VuYW1lICsgY3JlYXRlUGF0aChsb2NhdGlvbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChiYXNlbmFtZSArIHBhdGgpO1xuICAgICAgdmFyIGhhc2hDaGFuZ2VkID0gZ2V0SGFzaFBhdGgoKSAhPT0gZW5jb2RlZFBhdGg7XG5cbiAgICAgIGlmIChoYXNoQ2hhbmdlZCkge1xuICAgICAgICAvLyBXZSBjYW5ub3QgdGVsbCBpZiBhIGhhc2hjaGFuZ2Ugd2FzIGNhdXNlZCBieSBhIFBVU0gsIHNvIHdlJ2RcbiAgICAgICAgLy8gcmF0aGVyIHNldFN0YXRlIGhlcmUgYW5kIGlnbm9yZSB0aGUgaGFzaGNoYW5nZS4gVGhlIGNhdmVhdCBoZXJlXG4gICAgICAgIC8vIGlzIHRoYXQgb3RoZXIgaGFzaCBoaXN0b3JpZXMgaW4gdGhlIHBhZ2Ugd2lsbCBjb25zaWRlciBpdCBhIFBPUC5cbiAgICAgICAgaWdub3JlUGF0aCA9IHBhdGg7XG4gICAgICAgIHB1c2hIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgICAgdmFyIG5leHRQYXRocyA9IGFsbFBhdGhzLnNsaWNlKDAsIHByZXZJbmRleCArIDEpO1xuICAgICAgICBuZXh0UGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgYWxsUGF0aHMgPSBuZXh0UGF0aHM7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBQVVNIIHRoZSBzYW1lIHBhdGg7IGEgbmV3IGVudHJ5IHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrJykgOiB2b2lkIDA7XG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwYXRoID0gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUkVQTEFDRSwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZJbmRleCA9IGFsbFBhdGhzLmluZGV4T2YoY3JlYXRlUGF0aChoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsUGF0aHNbcHJldkluZGV4XSA9IHBhdGg7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoY2FuR29XaXRob3V0UmVsb2FkLCAnSGFzaCBoaXN0b3J5IGdvKG4pIGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQgaW4gdGhpcyBicm93c2VyJykgOiB2b2lkIDA7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEgJiYgZGVsdGEgPT09IDEpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCQxLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCQxLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG4sIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIGxvd2VyQm91bmQpLCB1cHBlckJvdW5kKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgc3RvcmVzIGxvY2F0aW9ucyBpbiBtZW1vcnkuXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIF9wcm9wcyRpbml0aWFsRW50cmllcyA9IF9wcm9wcy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxFbnRyaWVzID0gX3Byb3BzJGluaXRpYWxFbnRyaWVzID09PSB2b2lkIDAgPyBbJy8nXSA6IF9wcm9wcyRpbml0aWFsRW50cmllcyxcbiAgICAgIF9wcm9wcyRpbml0aWFsSW5kZXggPSBfcHJvcHMuaW5pdGlhbEluZGV4LFxuICAgICAgaW5pdGlhbEluZGV4ID0gX3Byb3BzJGluaXRpYWxJbmRleCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRpbml0aWFsSW5kZXgsXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gX3Byb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHZvaWQgMCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH1cblxuICB2YXIgaW5kZXggPSBjbGFtcChpbml0aWFsSW5kZXgsIDAsIGluaXRpYWxFbnRyaWVzLmxlbmd0aCAtIDEpO1xuICB2YXIgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJyA/IGNyZWF0ZUxvY2F0aW9uKGVudHJ5LCB1bmRlZmluZWQsIGNyZWF0ZUtleSgpKSA6IGNyZWF0ZUxvY2F0aW9uKGVudHJ5LCB1bmRlZmluZWQsIGVudHJ5LmtleSB8fCBjcmVhdGVLZXkoKSk7XG4gIH0pOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBjcmVhdGVQYXRoO1xuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcHJldkluZGV4ID0gaGlzdG9yeS5pbmRleDtcbiAgICAgIHZhciBuZXh0SW5kZXggPSBwcmV2SW5kZXggKyAxO1xuICAgICAgdmFyIG5leHRFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLnNsaWNlKDApO1xuXG4gICAgICBpZiAobmV4dEVudHJpZXMubGVuZ3RoID4gbmV4dEluZGV4KSB7XG4gICAgICAgIG5leHRFbnRyaWVzLnNwbGljZShuZXh0SW5kZXgsIG5leHRFbnRyaWVzLmxlbmd0aCAtIG5leHRJbmRleCwgbG9jYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEVudHJpZXMucHVzaChsb2NhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgICAgZW50cmllczogbmV4dEVudHJpZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIGhpc3RvcnkuZW50cmllc1toaXN0b3J5LmluZGV4XSA9IGxvY2F0aW9uO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gY2xhbXAoaGlzdG9yeS5pbmRleCArIG4sIDAsIGhpc3RvcnkuZW50cmllcy5sZW5ndGggLSAxKTtcbiAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgdmFyIGxvY2F0aW9uID0gaGlzdG9yeS5lbnRyaWVzW25leHRJbmRleF07XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChvaykge1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgIGluZGV4OiBuZXh0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNaW1pYyB0aGUgYmVoYXZpb3Igb2YgRE9NIGhpc3RvcmllcyBieVxuICAgICAgICAvLyBjYXVzaW5nIGEgcmVuZGVyIGFmdGVyIGEgY2FuY2VsbGVkIFBPUC5cbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5HbyhuKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IGhpc3RvcnkuaW5kZXggKyBuO1xuICAgIHJldHVybiBuZXh0SW5kZXggPj0gMCAmJiBuZXh0SW5kZXggPCBoaXN0b3J5LmVudHJpZXMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBlbnRyaWVzLmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBlbnRyaWVzW2luZGV4XSxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgZW50cmllczogZW50cmllcyxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgY2FuR286IGNhbkdvLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiwgbG9jYXRpb25zQXJlRXF1YWwsIHBhcnNlUGF0aCwgY3JlYXRlUGF0aCB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuXG52YXIgTUFYX1NJR05FRF8zMV9CSVRfSU5UID0gMTA3Mzc0MTgyMztcbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbmZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge1xuICB2YXIga2V5ID0gJ19fZ2xvYmFsX3VuaXF1ZV9pZF9fJztcbiAgcmV0dXJuIGNvbW1vbmpzR2xvYmFsW2tleV0gPSAoY29tbW9uanNHbG9iYWxba2V5XSB8fCAwKSArIDE7XG59XG5cbmZ1bmN0aW9uIG9iamVjdElzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudEVtaXR0ZXIodmFsdWUpIHtcbiAgdmFyIGhhbmRsZXJzID0gW107XG4gIHJldHVybiB7XG4gICAgb246IGZ1bmN0aW9uIG9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycyA9IGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaCAhPT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSwgY2hhbmdlZEJpdHMpIHtcbiAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdENvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICB2YXIgX1Byb3ZpZGVyJGNoaWxkQ29udGV4LCBfQ29uc3VtZXIkY29udGV4dFR5cGU7XG5cbiAgdmFyIGNvbnRleHRQcm9wID0gJ19fY3JlYXRlLXJlYWN0LWNvbnRleHQtJyArIGdldFVuaXF1ZUlkKCkgKyAnX18nO1xuXG4gIHZhciBQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfdGhpcyA9IF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgX3RoaXMuZW1pdHRlciA9IGNyZWF0ZUV2ZW50RW1pdHRlcihfdGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IFByb3ZpZGVyLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltjb250ZXh0UHJvcF0gPSB0aGlzLmVtaXR0ZXIsIF9yZWY7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgY2hhbmdlZEJpdHM7XG5cbiAgICAgICAgaWYgKG9iamVjdElzKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGFuZ2VkQml0cyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicgPyBjYWxjdWxhdGVDaGFuZ2VkQml0cyhvbGRWYWx1ZSwgbmV3VmFsdWUpIDogTUFYX1NJR05FRF8zMV9CSVRfSU5UO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoKGNoYW5nZWRCaXRzICYgTUFYX1NJR05FRF8zMV9CSVRfSU5UKSA9PT0gY2hhbmdlZEJpdHMsICdjYWxjdWxhdGVDaGFuZ2VkQml0czogRXhwZWN0ZWQgdGhlIHJldHVybiB2YWx1ZSB0byBiZSBhICcgKyAnMzEtYml0IGludGVnZXIuIEluc3RlYWQgcmVjZWl2ZWQ6ICcgKyBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlZEJpdHMgfD0gMDtcblxuICAgICAgICAgIGlmIChjaGFuZ2VkQml0cyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnNldChuZXh0UHJvcHMudmFsdWUsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvdmlkZXI7XG4gIH0oQ29tcG9uZW50KTtcblxuICBQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfUHJvdmlkZXIkY2hpbGRDb250ZXggPSB7fSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W2NvbnRleHRQcm9wXSA9IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4KTtcblxuICB2YXIgQ29uc3VtZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzTG9vc2UoQ29uc3VtZXIsIF9Db21wb25lbnQyKTtcblxuICAgIGZ1bmN0aW9uIENvbnN1bWVyKCkge1xuICAgICAgdmFyIF90aGlzMjtcblxuICAgICAgX3RoaXMyID0gX0NvbXBvbmVudDIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgX3RoaXMyLnN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKClcbiAgICAgIH07XG5cbiAgICAgIF90aGlzMi5vblVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgY2hhbmdlZEJpdHMpIHtcbiAgICAgICAgdmFyIG9ic2VydmVkQml0cyA9IF90aGlzMi5vYnNlcnZlZEJpdHMgfCAwO1xuXG4gICAgICAgIGlmICgob2JzZXJ2ZWRCaXRzICYgY2hhbmdlZEJpdHMpICE9PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0VmFsdWUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXMyO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8yID0gQ29uc3VtZXIucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvMi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBuZXh0UHJvcHMub2JzZXJ2ZWRCaXRzO1xuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgOiBvYnNlcnZlZEJpdHM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub24odGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSB0aGlzLnByb3BzLm9ic2VydmVkQml0cztcbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9mZih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvMi5nZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0uZ2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBvbmx5Q2hpbGQodGhpcy5wcm9wcy5jaGlsZHJlbikodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb25zdW1lcjtcbiAgfShDb21wb25lbnQpO1xuXG4gIENvbnN1bWVyLmNvbnRleHRUeXBlcyA9IChfQ29uc3VtZXIkY29udGV4dFR5cGUgPSB7fSwgX0NvbnN1bWVyJGNvbnRleHRUeXBlW2NvbnRleHRQcm9wXSA9IFByb3BUeXBlcy5vYmplY3QsIF9Db25zdW1lciRjb250ZXh0VHlwZSk7XG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBDb25zdW1lclxuICB9O1xufVxuXG52YXIgaW5kZXggPSBSZWFjdC5jcmVhdGVDb250ZXh0IHx8IGNyZWF0ZVJlYWN0Q29udGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uLCBsb2NhdGlvbnNBcmVFcXVhbCwgY3JlYXRlUGF0aCB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBjcmVhdGVDb250ZXh0IGZyb20gJ21pbmktY3JlYXRlLXJlYWN0LWNvbnRleHQnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgcGF0aFRvUmVnZXhwIGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHdpdGggUmVhY3QuY3JlYXRlQ29udGV4dCBvbmNlIHdlIGNhbiBhc3N1bWUgUmVhY3QgMTYrXG5cbnZhciBjcmVhdGVOYW1lZENvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVOYW1lZENvbnRleHQobmFtZSkge1xuICB2YXIgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbiAgY29udGV4dC5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxudmFyIGhpc3RvcnlDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZU5hbWVkQ29udGV4dChcIlJvdXRlci1IaXN0b3J5XCIpO1xuXG52YXIgY29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVOYW1lZENvbnRleHQoXCJSb3V0ZXJcIik7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHB1dHRpbmcgaGlzdG9yeSBvbiBjb250ZXh0LlxuICovXG5cbnZhciBSb3V0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBSb3V0ZXIuY29tcHV0ZVJvb3RNYXRjaCA9IGZ1bmN0aW9uIGNvbXB1dGVSb290TWF0Y2gocGF0aG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICB1cmw6IFwiL1wiLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIGlzRXhhY3Q6IHBhdGhuYW1lID09PSBcIi9cIlxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gUm91dGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBsb2NhdGlvbjogcHJvcHMuaGlzdG9yeS5sb2NhdGlvblxuICAgIH07IC8vIFRoaXMgaXMgYSBiaXQgb2YgYSBoYWNrLiBXZSBoYXZlIHRvIHN0YXJ0IGxpc3RlbmluZyBmb3IgbG9jYXRpb25cbiAgICAvLyBjaGFuZ2VzIGhlcmUgaW4gdGhlIGNvbnN0cnVjdG9yIGluIGNhc2UgdGhlcmUgYXJlIGFueSA8UmVkaXJlY3Q+c1xuICAgIC8vIG9uIHRoZSBpbml0aWFsIHJlbmRlci4gSWYgdGhlcmUgYXJlLCB0aGV5IHdpbGwgcmVwbGFjZS9wdXNoIHdoZW5cbiAgICAvLyB0aGV5IG1vdW50IGFuZCBzaW5jZSBjRE0gZmlyZXMgaW4gY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMsIHdlIG1heVxuICAgIC8vIGdldCBhIG5ldyBsb2NhdGlvbiBiZWZvcmUgdGhlIDxSb3V0ZXI+IGlzIG1vdW50ZWQuXG5cbiAgICBfdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgX3RoaXMuX3BlbmRpbmdMb2NhdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoIXByb3BzLnN0YXRpY0NvbnRleHQpIHtcbiAgICAgIF90aGlzLnVubGlzdGVuID0gcHJvcHMuaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICAgIGlmIChfdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuX3BlbmRpbmdMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX3BlbmRpbmdMb2NhdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLl9wZW5kaW5nTG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy51bmxpc3Rlbikge1xuICAgICAgdGhpcy51bmxpc3RlbigpO1xuICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9wZW5kaW5nTG9jYXRpb24gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLnN0YXRlLmxvY2F0aW9uLFxuICAgICAgICBtYXRjaDogUm91dGVyLmNvbXB1dGVSb290TWF0Y2godGhpcy5zdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSksXG4gICAgICAgIHN0YXRpY0NvbnRleHQ6IHRoaXMucHJvcHMuc3RhdGljQ29udGV4dFxuICAgICAgfVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGhpc3RvcnlDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCBudWxsLFxuICAgICAgdmFsdWU6IHRoaXMucHJvcHMuaGlzdG9yeVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzdGF0aWNDb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwcmV2UHJvcHMuaGlzdG9yeSA9PT0gdGhpcy5wcm9wcy5oaXN0b3J5LCBcIllvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgaGlzdG9yeT5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgbG9jYXRpb24gaW4gbWVtb3J5LlxuICovXG5cbnZhciBNZW1vcnlSb3V0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWVtb3J5Um91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW1vcnlSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNZW1vcnlSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTWVtb3J5Um91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE1lbW9yeVJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgaW5pdGlhbEVudHJpZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBpbml0aWFsSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9O1xuXG4gIE1lbW9yeVJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxNZW1vcnlSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBNZW1vcnlSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxudmFyIExpZmVjeWNsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShMaWZlY3ljbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGlmZWN5Y2xlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk1vdW50KSB0aGlzLnByb3BzLm9uTW91bnQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVXBkYXRlKSB0aGlzLnByb3BzLm9uVXBkYXRlLmNhbGwodGhpcywgdGhpcywgcHJldlByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblVubW91bnQpIHRoaXMucHJvcHMub25Vbm1vdW50LmNhbGwodGhpcywgdGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gTGlmZWN5Y2xlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBwcm9tcHRpbmcgdGhlIHVzZXIgYmVmb3JlIG5hdmlnYXRpbmcgYXdheSBmcm9tIGEgc2NyZWVuLlxuICovXG5cbmZ1bmN0aW9uIFByb21wdChfcmVmKSB7XG4gIHZhciBtZXNzYWdlID0gX3JlZi5tZXNzYWdlLFxuICAgICAgX3JlZiR3aGVuID0gX3JlZi53aGVuLFxuICAgICAgd2hlbiA9IF9yZWYkd2hlbiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkd2hlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxQcm9tcHQ+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgaWYgKCF3aGVuIHx8IGNvbnRleHQuc3RhdGljQ29udGV4dCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1ldGhvZCA9IGNvbnRleHQuaGlzdG9yeS5ibG9jaztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlmZWN5Y2xlLCB7XG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KHNlbGYpIHtcbiAgICAgICAgc2VsZi5yZWxlYXNlID0gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShzZWxmLCBwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5tZXNzYWdlICE9PSBtZXNzYWdlKSB7XG4gICAgICAgICAgc2VsZi5yZWxlYXNlKCk7XG4gICAgICAgICAgc2VsZi5yZWxlYXNlID0gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Vbm1vdW50OiBmdW5jdGlvbiBvblVubW91bnQoc2VsZikge1xuICAgICAgICBzZWxmLnJlbGVhc2UoKTtcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciBtZXNzYWdlVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSk7XG4gIFByb21wdC5wcm9wVHlwZXMgPSB7XG4gICAgd2hlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWVzc2FnZTogbWVzc2FnZVR5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG52YXIgY2FjaGUgPSB7fTtcbnZhciBjYWNoZUxpbWl0ID0gMTAwMDA7XG52YXIgY2FjaGVDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgpIHtcbiAgaWYgKGNhY2hlW3BhdGhdKSByZXR1cm4gY2FjaGVbcGF0aF07XG4gIHZhciBnZW5lcmF0b3IgPSBwYXRoVG9SZWdleHAuY29tcGlsZShwYXRoKTtcblxuICBpZiAoY2FjaGVDb3VudCA8IGNhY2hlTGltaXQpIHtcbiAgICBjYWNoZVtwYXRoXSA9IGdlbmVyYXRvcjtcbiAgICBjYWNoZUNvdW50Kys7XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdG9yO1xufVxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBnZW5lcmF0aW5nIGEgVVJMIHBhdGhuYW1lIGZyb20gYSBwYXRoIGFuZCBwYXJhbWV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKHBhdGgsIHBhcmFtcykge1xuICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0aCA9IFwiL1wiO1xuICB9XG5cbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gcGF0aCA9PT0gXCIvXCIgPyBwYXRoIDogY29tcGlsZVBhdGgocGF0aCkocGFyYW1zLCB7XG4gICAgcHJldHR5OiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBuYXZpZ2F0aW5nIHByb2dyYW1tYXRpY2FsbHkgd2l0aCBhIGNvbXBvbmVudC5cbiAqL1xuXG5mdW5jdGlvbiBSZWRpcmVjdChfcmVmKSB7XG4gIHZhciBjb21wdXRlZE1hdGNoID0gX3JlZi5jb21wdXRlZE1hdGNoLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgX3JlZiRwdXNoID0gX3JlZi5wdXNoLFxuICAgICAgcHVzaCA9IF9yZWYkcHVzaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHB1c2g7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8UmVkaXJlY3Q+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgdmFyIGhpc3RvcnkgPSBjb250ZXh0Lmhpc3RvcnksXG4gICAgICAgIHN0YXRpY0NvbnRleHQgPSBjb250ZXh0LnN0YXRpY0NvbnRleHQ7XG4gICAgdmFyIG1ldGhvZCA9IHB1c2ggPyBoaXN0b3J5LnB1c2ggOiBoaXN0b3J5LnJlcGxhY2U7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oY29tcHV0ZWRNYXRjaCA/IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGdlbmVyYXRlUGF0aCh0bywgY29tcHV0ZWRNYXRjaC5wYXJhbXMpIDogX2V4dGVuZHMoe30sIHRvLCB7XG4gICAgICBwYXRobmFtZTogZ2VuZXJhdGVQYXRoKHRvLnBhdGhuYW1lLCBjb21wdXRlZE1hdGNoLnBhcmFtcylcbiAgICB9KSA6IHRvKTsgLy8gV2hlbiByZW5kZXJpbmcgaW4gYSBzdGF0aWMgY29udGV4dCxcbiAgICAvLyBzZXQgdGhlIG5ldyBsb2NhdGlvbiBpbW1lZGlhdGVseS5cblxuICAgIGlmIChzdGF0aWNDb250ZXh0KSB7XG4gICAgICBtZXRob2QobG9jYXRpb24pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpZmVjeWNsZSwge1xuICAgICAgb25Nb3VudDogZnVuY3Rpb24gb25Nb3VudCgpIHtcbiAgICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoc2VsZiwgcHJldlByb3BzKSB7XG4gICAgICAgIHZhciBwcmV2TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwcmV2UHJvcHMudG8pO1xuXG4gICAgICAgIGlmICghbG9jYXRpb25zQXJlRXF1YWwocHJldkxvY2F0aW9uLCBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICAgICAgICBrZXk6IHByZXZMb2NhdGlvbi5rZXlcbiAgICAgICAgfSkpKSB7XG4gICAgICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvOiB0b1xuICAgIH0pO1xuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gICAgcHVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxudmFyIGNhY2hlJDEgPSB7fTtcbnZhciBjYWNoZUxpbWl0JDEgPSAxMDAwMDtcbnZhciBjYWNoZUNvdW50JDEgPSAwO1xuXG5mdW5jdGlvbiBjb21waWxlUGF0aCQxKHBhdGgsIG9wdGlvbnMpIHtcbiAgdmFyIGNhY2hlS2V5ID0gXCJcIiArIG9wdGlvbnMuZW5kICsgb3B0aW9ucy5zdHJpY3QgKyBvcHRpb25zLnNlbnNpdGl2ZTtcbiAgdmFyIHBhdGhDYWNoZSA9IGNhY2hlJDFbY2FjaGVLZXldIHx8IChjYWNoZSQxW2NhY2hlS2V5XSA9IHt9KTtcbiAgaWYgKHBhdGhDYWNoZVtwYXRoXSkgcmV0dXJuIHBhdGhDYWNoZVtwYXRoXTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIHJlZ2V4cCA9IHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICByZWdleHA6IHJlZ2V4cCxcbiAgICBrZXlzOiBrZXlzXG4gIH07XG5cbiAgaWYgKGNhY2hlQ291bnQkMSA8IGNhY2hlTGltaXQkMSkge1xuICAgIHBhdGhDYWNoZVtwYXRoXSA9IHJlc3VsdDtcbiAgICBjYWNoZUNvdW50JDErKztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFB1YmxpYyBBUEkgZm9yIG1hdGNoaW5nIGEgVVJMIHBhdGhuYW1lIHRvIGEgcGF0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hdGNoUGF0aChwYXRobmFtZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgcGF0aDogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGF0aCA9IF9vcHRpb25zLnBhdGgsXG4gICAgICBfb3B0aW9ucyRleGFjdCA9IF9vcHRpb25zLmV4YWN0LFxuICAgICAgZXhhY3QgPSBfb3B0aW9ucyRleGFjdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRleGFjdCxcbiAgICAgIF9vcHRpb25zJHN0cmljdCA9IF9vcHRpb25zLnN0cmljdCxcbiAgICAgIHN0cmljdCA9IF9vcHRpb25zJHN0cmljdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRzdHJpY3QsXG4gICAgICBfb3B0aW9ucyRzZW5zaXRpdmUgPSBfb3B0aW9ucy5zZW5zaXRpdmUsXG4gICAgICBzZW5zaXRpdmUgPSBfb3B0aW9ucyRzZW5zaXRpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkc2Vuc2l0aXZlO1xuICB2YXIgcGF0aHMgPSBbXS5jb25jYXQocGF0aCk7XG4gIHJldHVybiBwYXRocy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZWQsIHBhdGgpIHtcbiAgICBpZiAoIXBhdGggJiYgcGF0aCAhPT0gXCJcIikgcmV0dXJuIG51bGw7XG4gICAgaWYgKG1hdGNoZWQpIHJldHVybiBtYXRjaGVkO1xuXG4gICAgdmFyIF9jb21waWxlUGF0aCA9IGNvbXBpbGVQYXRoJDEocGF0aCwge1xuICAgICAgZW5kOiBleGFjdCxcbiAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgc2Vuc2l0aXZlOiBzZW5zaXRpdmVcbiAgICB9KSxcbiAgICAgICAgcmVnZXhwID0gX2NvbXBpbGVQYXRoLnJlZ2V4cCxcbiAgICAgICAga2V5cyA9IF9jb21waWxlUGF0aC5rZXlzO1xuXG4gICAgdmFyIG1hdGNoID0gcmVnZXhwLmV4ZWMocGF0aG5hbWUpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICAgIHZhciB1cmwgPSBtYXRjaFswXSxcbiAgICAgICAgdmFsdWVzID0gbWF0Y2guc2xpY2UoMSk7XG4gICAgdmFyIGlzRXhhY3QgPSBwYXRobmFtZSA9PT0gdXJsO1xuICAgIGlmIChleGFjdCAmJiAhaXNFeGFjdCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAvLyB0aGUgcGF0aCB1c2VkIHRvIG1hdGNoXG4gICAgICB1cmw6IHBhdGggPT09IFwiL1wiICYmIHVybCA9PT0gXCJcIiA/IFwiL1wiIDogdXJsLFxuICAgICAgLy8gdGhlIG1hdGNoZWQgcG9ydGlvbiBvZiB0aGUgVVJMXG4gICAgICBpc0V4YWN0OiBpc0V4YWN0LFxuICAgICAgLy8gd2hldGhlciBvciBub3Qgd2UgbWF0Y2hlZCBleGFjdGx5XG4gICAgICBwYXJhbXM6IGtleXMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBrZXksIGluZGV4KSB7XG4gICAgICAgIG1lbW9ba2V5Lm5hbWVdID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCB7fSlcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGV2YWxDaGlsZHJlbkRldihjaGlsZHJlbiwgcHJvcHMsIHBhdGgpIHtcbiAgdmFyIHZhbHVlID0gY2hpbGRyZW4ocHJvcHMpO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHZhbHVlICE9PSB1bmRlZmluZWQsIFwiWW91IHJldHVybmVkIGB1bmRlZmluZWRgIGZyb20gdGhlIGBjaGlsZHJlbmAgZnVuY3Rpb24gb2YgXCIgKyAoXCI8Um91dGVcIiArIChwYXRoID8gXCIgcGF0aD1cXFwiXCIgKyBwYXRoICsgXCJcXFwiXCIgOiBcIlwiKSArIFwiPiwgYnV0IHlvdSBcIikgKyBcInNob3VsZCBoYXZlIHJldHVybmVkIGEgUmVhY3QgZWxlbWVudCBvciBgbnVsbGBcIikgOiB2b2lkIDA7XG4gIHJldHVybiB2YWx1ZSB8fCBudWxsO1xufVxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgbWF0Y2hpbmcgYSBzaW5nbGUgcGF0aCBhbmQgcmVuZGVyaW5nLlxuICovXG5cblxudmFyIFJvdXRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJvdXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSb3V0ZSgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUm91dGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCQxKSB7XG4gICAgICAhY29udGV4dCQxID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGU+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCBjb250ZXh0JDEubG9jYXRpb247XG4gICAgICB2YXIgbWF0Y2ggPSBfdGhpcy5wcm9wcy5jb21wdXRlZE1hdGNoID8gX3RoaXMucHJvcHMuY29tcHV0ZWRNYXRjaCAvLyA8U3dpdGNoPiBhbHJlYWR5IGNvbXB1dGVkIHRoZSBtYXRjaCBmb3IgdXNcbiAgICAgIDogX3RoaXMucHJvcHMucGF0aCA/IG1hdGNoUGF0aChsb2NhdGlvbi5wYXRobmFtZSwgX3RoaXMucHJvcHMpIDogY29udGV4dCQxLm1hdGNoO1xuXG4gICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgY29udGV4dCQxLCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2g6IG1hdGNoXG4gICAgICB9KTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMucmVuZGVyOyAvLyBQcmVhY3QgdXNlcyBhbiBlbXB0eSBhcnJheSBhcyBjaGlsZHJlbiBieVxuICAgICAgLy8gZGVmYXVsdCwgc28gdXNlIG51bGwgaWYgdGhhdCdzIHRoZSBjYXNlLlxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSkge1xuICAgICAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBwcm9wc1xuICAgICAgfSwgcHJvcHMubWF0Y2ggPyBjaGlsZHJlbiA/IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gZXZhbENoaWxkcmVuRGV2KGNoaWxkcmVuLCBwcm9wcywgX3RoaXMucHJvcHMucGF0aCkgOiBjaGlsZHJlbihwcm9wcykgOiBjaGlsZHJlbiA6IGNvbXBvbmVudCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogcmVuZGVyID8gcmVuZGVyKHByb3BzKSA6IG51bGwgOiB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGV2YWxDaGlsZHJlbkRldihjaGlsZHJlbiwgcHJvcHMsIF90aGlzLnByb3BzLnBhdGgpIDogY2hpbGRyZW4ocHJvcHMpIDogbnVsbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gICAgY29tcG9uZW50OiBmdW5jdGlvbiBjb21wb25lbnQocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdICYmICFpc1ZhbGlkRWxlbWVudFR5cGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wICdjb21wb25lbnQnIHN1cHBsaWVkIHRvICdSb3V0ZSc6IHRoZSBwcm9wIGlzIG5vdCBhIHZhbGlkIFJlYWN0IGNvbXBvbmVudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4YWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYXRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKV0pLFxuICAgIHJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2Vuc2l0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHJpY3Q6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikgJiYgdGhpcy5wcm9wcy5jb21wb25lbnQpLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgY29tcG9uZW50PiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikgJiYgdGhpcy5wcm9wcy5yZW5kZXIpLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgcmVuZGVyPiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNvbXBvbmVudCAmJiB0aGlzLnByb3BzLnJlbmRlciksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgcmVuZGVyPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHRoaXMucHJvcHMubG9jYXRpb24gJiYgIXByZXZQcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgaW5pdGlhbGx5IHVzZWQgbm8gXCJsb2NhdGlvblwiIHByb3AgYW5kIHRoZW4gcHJvdmlkZWQgb25lIG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJykgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKCF0aGlzLnByb3BzLmxvY2F0aW9uICYmIHByZXZQcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgcHJvdmlkZWQgYSBcImxvY2F0aW9uXCIgcHJvcCBpbml0aWFsbHkgYnV0IG9taXR0ZWQgaXQgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSBcIi9cIiA/IHBhdGggOiBcIi9cIiArIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICBwYXRobmFtZTogYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKSArIGxvY2F0aW9uLnBhdGhuYW1lXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG4gIHZhciBiYXNlID0gYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKTtcbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoYmFzZSkgIT09IDApIHJldHVybiBsb2NhdGlvbjtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoYmFzZS5sZW5ndGgpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVUkwobG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IGxvY2F0aW9uIDogY3JlYXRlUGF0aChsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHN0YXRpY0hhbmRsZXIobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCAlcyB3aXRoIDxTdGF0aWNSb3V0ZXI+XCIsIG1ldGhvZE5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBUaGUgcHVibGljIHRvcC1sZXZlbCBBUEkgZm9yIGEgXCJzdGF0aWNcIiA8Um91dGVyPiwgc28tY2FsbGVkIGJlY2F1c2UgaXRcbiAqIGNhbid0IGFjdHVhbGx5IGNoYW5nZSB0aGUgY3VycmVudCBsb2NhdGlvbi4gSW5zdGVhZCwgaXQganVzdCByZWNvcmRzXG4gKiBsb2NhdGlvbiBjaGFuZ2VzIGluIGEgY29udGV4dCBvYmplY3QuIFVzZWZ1bCBtYWlubHkgaW4gdGVzdGluZyBhbmRcbiAqIHNlcnZlci1yZW5kZXJpbmcgc2NlbmFyaW9zLlxuICovXG5cblxudmFyIFN0YXRpY1JvdXRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTdGF0aWNSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0YXRpY1JvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZVB1c2ggPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBfdGhpcy5uYXZpZ2F0ZVRvKGxvY2F0aW9uLCBcIlBVU0hcIik7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVJlcGxhY2UgPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBfdGhpcy5uYXZpZ2F0ZVRvKGxvY2F0aW9uLCBcIlJFUExBQ0VcIik7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVCbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3RhdGljUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubmF2aWdhdGVUbyA9IGZ1bmN0aW9uIG5hdmlnYXRlVG8obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIF90aGlzJHByb3BzJGJhc2VuYW1lID0gX3RoaXMkcHJvcHMuYmFzZW5hbWUsXG4gICAgICAgIGJhc2VuYW1lID0gX3RoaXMkcHJvcHMkYmFzZW5hbWUgPT09IHZvaWQgMCA/IFwiXCIgOiBfdGhpcyRwcm9wcyRiYXNlbmFtZSxcbiAgICAgICAgX3RoaXMkcHJvcHMkY29udGV4dCA9IF90aGlzJHByb3BzLmNvbnRleHQsXG4gICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wcyRjb250ZXh0ID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJGNvbnRleHQ7XG4gICAgY29udGV4dC5hY3Rpb24gPSBhY3Rpb247XG4gICAgY29udGV4dC5sb2NhdGlvbiA9IGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpO1xuICAgIGNvbnRleHQudXJsID0gY3JlYXRlVVJMKGNvbnRleHQubG9jYXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIF90aGlzJHByb3BzMiRiYXNlbmFtZSA9IF90aGlzJHByb3BzMi5iYXNlbmFtZSxcbiAgICAgICAgYmFzZW5hbWUgPSBfdGhpcyRwcm9wczIkYmFzZW5hbWUgPT09IHZvaWQgMCA/IFwiXCIgOiBfdGhpcyRwcm9wczIkYmFzZW5hbWUsXG4gICAgICAgIF90aGlzJHByb3BzMiRjb250ZXh0ID0gX3RoaXMkcHJvcHMyLmNvbnRleHQsXG4gICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wczIkY29udGV4dCA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wczIkY29udGV4dCxcbiAgICAgICAgX3RoaXMkcHJvcHMyJGxvY2F0aW9uID0gX3RoaXMkcHJvcHMyLmxvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvbiA9IF90aGlzJHByb3BzMiRsb2NhdGlvbiA9PT0gdm9pZCAwID8gXCIvXCIgOiBfdGhpcyRwcm9wczIkbG9jYXRpb24sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImJhc2VuYW1lXCIsIFwiY29udGV4dFwiLCBcImxvY2F0aW9uXCJdKTtcblxuICAgIHZhciBoaXN0b3J5ID0ge1xuICAgICAgY3JlYXRlSHJlZjogZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRoKSB7XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUgKyBjcmVhdGVVUkwocGF0aCkpO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbjogXCJQT1BcIixcbiAgICAgIGxvY2F0aW9uOiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpLFxuICAgICAgcHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgcmVwbGFjZTogdGhpcy5oYW5kbGVSZXBsYWNlLFxuICAgICAgZ286IHN0YXRpY0hhbmRsZXIoXCJnb1wiKSxcbiAgICAgIGdvQmFjazogc3RhdGljSGFuZGxlcihcImdvQmFja1wiKSxcbiAgICAgIGdvRm9yd2FyZDogc3RhdGljSGFuZGxlcihcImdvRm9yd2FyZFwiKSxcbiAgICAgIGxpc3RlbjogdGhpcy5oYW5kbGVMaXN0ZW4sXG4gICAgICBibG9jazogdGhpcy5oYW5kbGVCbG9ja1xuICAgIH07XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgICBzdGF0aWNDb250ZXh0OiBjb250ZXh0XG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBTdGF0aWNSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU3RhdGljUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSlcbiAgfTtcblxuICBTdGF0aWNSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8U3RhdGljUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgU3RhdGljUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyB0aGUgZmlyc3QgPFJvdXRlPiB0aGF0IG1hdGNoZXMuXG4gKi9cblxudmFyIFN3aXRjaCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTd2l0Y2gsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN3aXRjaCgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3dpdGNoLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8U3dpdGNoPiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3RoaXMucHJvcHMubG9jYXRpb24gfHwgY29udGV4dC5sb2NhdGlvbjtcbiAgICAgIHZhciBlbGVtZW50LCBtYXRjaDsgLy8gV2UgdXNlIFJlYWN0LkNoaWxkcmVuLmZvckVhY2ggaW5zdGVhZCBvZiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KCkuZmluZCgpXG4gICAgICAvLyBoZXJlIGJlY2F1c2UgdG9BcnJheSBhZGRzIGtleXMgdG8gYWxsIGNoaWxkIGVsZW1lbnRzIGFuZCB3ZSBkbyBub3Qgd2FudFxuICAgICAgLy8gdG8gdHJpZ2dlciBhbiB1bm1vdW50L3JlbW91bnQgZm9yIHR3byA8Um91dGU+cyB0aGF0IHJlbmRlciB0aGUgc2FtZVxuICAgICAgLy8gY29tcG9uZW50IGF0IGRpZmZlcmVudCBVUkxzLlxuXG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKF90aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKG1hdGNoID09IG51bGwgJiYgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIGVsZW1lbnQgPSBjaGlsZDtcbiAgICAgICAgICB2YXIgcGF0aCA9IGNoaWxkLnByb3BzLnBhdGggfHwgY2hpbGQucHJvcHMuZnJvbTtcbiAgICAgICAgICBtYXRjaCA9IHBhdGggPyBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIF9leHRlbmRzKHt9LCBjaGlsZC5wcm9wcywge1xuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pKSA6IGNvbnRleHQubWF0Y2g7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgY29tcHV0ZWRNYXRjaDogbWF0Y2hcbiAgICAgIH0pIDogbnVsbDtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU3dpdGNoO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgU3dpdGNoLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHRoaXMucHJvcHMubG9jYXRpb24gJiYgIXByZXZQcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IGluaXRpYWxseSB1c2VkIG5vIFwibG9jYXRpb25cIiBwcm9wIGFuZCB0aGVuIHByb3ZpZGVkIG9uZSBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISghdGhpcy5wcm9wcy5sb2NhdGlvbiAmJiBwcmV2UHJvcHMubG9jYXRpb24pLCAnPFN3aXRjaD4gZWxlbWVudHMgc2hvdWxkIG5vdCBjaGFuZ2UgZnJvbSBjb250cm9sbGVkIHRvIHVuY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIFlvdSBwcm92aWRlZCBhIFwibG9jYXRpb25cIiBwcm9wIGluaXRpYWxseSBidXQgb21pdHRlZCBpdCBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIEEgcHVibGljIGhpZ2hlci1vcmRlciBjb21wb25lbnQgdG8gYWNjZXNzIHRoZSBpbXBlcmF0aXZlIEFQSVxuICovXG5cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9uZW50KSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IFwid2l0aFJvdXRlcihcIiArIChDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG5cbiAgdmFyIEMgPSBmdW5jdGlvbiBDKHByb3BzKSB7XG4gICAgdmFyIHdyYXBwZWRDb21wb25lbnRSZWYgPSBwcm9wcy53cmFwcGVkQ29tcG9uZW50UmVmLFxuICAgICAgICByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJ3cmFwcGVkQ29tcG9uZW50UmVmXCJdKTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxcIiArIGRpc3BsYXlOYW1lICsgXCIgLz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCByZW1haW5pbmdQcm9wcywgY29udGV4dCwge1xuICAgICAgICByZWY6IHdyYXBwZWRDb21wb25lbnRSZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBDLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIEMuV3JhcHBlZENvbXBvbmVudCA9IENvbXBvbmVudDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgQy5wcm9wVHlwZXMgPSB7XG4gICAgICB3cmFwcGVkQ29tcG9uZW50UmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2lzdFN0YXRpY3MoQywgQ29tcG9uZW50KTtcbn1cblxudmFyIHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0O1xuZnVuY3Rpb24gdXNlSGlzdG9yeSgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICEodHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZUhpc3RvcnkoKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gdXNlQ29udGV4dChoaXN0b3J5Q29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICEodHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZUxvY2F0aW9uKClcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB9XG5cbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCkubG9jYXRpb247XG59XG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAhKHR5cGVvZiB1c2VDb250ZXh0ID09PSBcImZ1bmN0aW9uXCIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBtdXN0IHVzZSBSZWFjdCA+PSAxNi44IGluIG9yZGVyIHRvIHVzZSB1c2VQYXJhbXMoKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICB2YXIgbWF0Y2ggPSB1c2VDb250ZXh0KGNvbnRleHQpLm1hdGNoO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaC5wYXJhbXMgOiB7fTtcbn1cbmZ1bmN0aW9uIHVzZVJvdXRlTWF0Y2gocGF0aCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgISh0eXBlb2YgdXNlQ29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgbXVzdCB1c2UgUmVhY3QgPj0gMTYuOCBpbiBvcmRlciB0byB1c2UgdXNlUm91dGVNYXRjaCgpXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHZhciBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIHZhciBtYXRjaCA9IHVzZUNvbnRleHQoY29udGV4dCkubWF0Y2g7XG4gIHJldHVybiBwYXRoID8gbWF0Y2hQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLCBwYXRoKSA6IG1hdGNoO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIGdsb2JhbCA9IHdpbmRvdztcbiAgICB2YXIga2V5ID0gXCJfX3JlYWN0X3JvdXRlcl9idWlsZF9fXCI7XG4gICAgdmFyIGJ1aWxkTmFtZXMgPSB7XG4gICAgICBjanM6IFwiQ29tbW9uSlNcIixcbiAgICAgIGVzbTogXCJFUyBtb2R1bGVzXCIsXG4gICAgICB1bWQ6IFwiVU1EXCJcbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbFtrZXldICYmIGdsb2JhbFtrZXldICE9PSBcImVzbVwiKSB7XG4gICAgICB2YXIgaW5pdGlhbEJ1aWxkTmFtZSA9IGJ1aWxkTmFtZXNbZ2xvYmFsW2tleV1dO1xuICAgICAgdmFyIHNlY29uZGFyeUJ1aWxkTmFtZSA9IGJ1aWxkTmFtZXNbXCJlc21cIl07IC8vIFRPRE86IEFkZCBsaW5rIHRvIGFydGljbGUgdGhhdCBleHBsYWlucyBpbiBkZXRhaWwgaG93IHRvIGF2b2lkXG4gICAgICAvLyBsb2FkaW5nIDIgZGlmZmVyZW50IGJ1aWxkcy5cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBsb2FkaW5nIHRoZSBcIiArIHNlY29uZGFyeUJ1aWxkTmFtZSArIFwiIGJ1aWxkIG9mIFJlYWN0IFJvdXRlciBcIiArIChcIm9uIGEgcGFnZSB0aGF0IGlzIGFscmVhZHkgcnVubmluZyB0aGUgXCIgKyBpbml0aWFsQnVpbGROYW1lICsgXCIgXCIpICsgXCJidWlsZCwgc28gdGhpbmdzIHdvbid0IHdvcmsgcmlnaHQuXCIpO1xuICAgIH1cblxuICAgIGdsb2JhbFtrZXldID0gXCJlc21cIjtcbiAgfVxufVxuXG5leHBvcnQgeyBNZW1vcnlSb3V0ZXIsIFByb21wdCwgUmVkaXJlY3QsIFJvdXRlLCBSb3V0ZXIsIFN0YXRpY1JvdXRlciwgU3dpdGNoLCBoaXN0b3J5Q29udGV4dCBhcyBfX0hpc3RvcnlDb250ZXh0LCBjb250ZXh0IGFzIF9fUm91dGVyQ29udGV4dCwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uLCB1c2VQYXJhbXMsIHVzZVJvdXRlTWF0Y2gsIHdpdGhSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJvdXRlci5qcy5tYXBcbiIsImltcG9ydCB7IFJvdXRlciwgX19Sb3V0ZXJDb250ZXh0LCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0IHsgTWVtb3J5Um91dGVyLCBQcm9tcHQsIFJlZGlyZWN0LCBSb3V0ZSwgUm91dGVyLCBTdGF0aWNSb3V0ZXIsIFN3aXRjaCwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uLCB1c2VQYXJhbXMsIHVzZVJvdXRlTWF0Y2gsIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlTG9jYXRpb24sIGNyZWF0ZVBhdGggfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cblxudmFyIEJyb3dzZXJSb3V0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQnJvd3NlclJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnJvd3NlclJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCcm93c2VyUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBIYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFzaFR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJoYXNoYmFuZ1wiLCBcIm5vc2xhc2hcIiwgXCJzbGFzaFwiXSlcbiAgfTtcblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbnZhciByZXNvbHZlVG9Mb2NhdGlvbiA9IGZ1bmN0aW9uIHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjdXJyZW50TG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJmdW5jdGlvblwiID8gdG8oY3VycmVudExvY2F0aW9uKSA6IHRvO1xufTtcbnZhciBub3JtYWxpemVUb0xvY2F0aW9uID0gZnVuY3Rpb24gbm9ybWFsaXplVG9Mb2NhdGlvbih0bywgY3VycmVudExvY2F0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBjcmVhdGVMb2NhdGlvbih0bywgbnVsbCwgbnVsbCwgY3VycmVudExvY2F0aW9uKSA6IHRvO1xufTtcblxudmFyIGZvcndhcmRSZWZTaGltID0gZnVuY3Rpb24gZm9yd2FyZFJlZlNoaW0oQykge1xuICByZXR1cm4gQztcbn07XG5cbnZhciBmb3J3YXJkUmVmID0gUmVhY3QuZm9yd2FyZFJlZjtcblxuaWYgKHR5cGVvZiBmb3J3YXJkUmVmID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIGZvcndhcmRSZWYgPSBmb3J3YXJkUmVmU2hpbTtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxudmFyIExpbmtBbmNob3IgPSBmb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZixcbiAgICAgIG5hdmlnYXRlID0gX3JlZi5uYXZpZ2F0ZSxcbiAgICAgIF9vbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImlubmVyUmVmXCIsIFwibmF2aWdhdGVcIiwgXCJvbkNsaWNrXCJdKTtcblxuICB2YXIgdGFyZ2V0ID0gcmVzdC50YXJnZXQ7XG5cbiAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX29uQ2xpY2spIF9vbkNsaWNrKGV2ZW50KTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRocm93IGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgICAgZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBsZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAgICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICAgICkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbmF2aWdhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIFJlYWN0IDE1IGNvbXBhdFxuXG5cbiAgaWYgKGZvcndhcmRSZWZTaGltICE9PSBmb3J3YXJkUmVmKSB7XG4gICAgcHJvcHMucmVmID0gZm9yd2FyZGVkUmVmIHx8IGlubmVyUmVmO1xuICB9IGVsc2Uge1xuICAgIHByb3BzLnJlZiA9IGlubmVyUmVmO1xuICB9XG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnQgKi9cblxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgcHJvcHMpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGlua0FuY2hvci5kaXNwbGF5TmFtZSA9IFwiTGlua0FuY2hvclwiO1xufVxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cblxuXG52YXIgTGluayA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYyLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIF9yZWYyJGNvbXBvbmVudCA9IF9yZWYyLmNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudCA9IF9yZWYyJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gTGlua0FuY2hvciA6IF9yZWYyJGNvbXBvbmVudCxcbiAgICAgIHJlcGxhY2UgPSBfcmVmMi5yZXBsYWNlLFxuICAgICAgdG8gPSBfcmVmMi50byxcbiAgICAgIGlubmVyUmVmID0gX3JlZjIuaW5uZXJSZWYsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImNvbXBvbmVudFwiLCBcInJlcGxhY2VcIiwgXCJ0b1wiLCBcImlubmVyUmVmXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX19Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgaGlzdG9yeSA9IGNvbnRleHQuaGlzdG9yeTtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVUb0xvY2F0aW9uKHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjb250ZXh0LmxvY2F0aW9uKSwgY29udGV4dC5sb2NhdGlvbik7XG4gICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICBuYXZpZ2F0ZTogZnVuY3Rpb24gbmF2aWdhdGUoKSB7XG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHJlc29sdmVUb0xvY2F0aW9uKHRvLCBjb250ZXh0LmxvY2F0aW9uKTtcbiAgICAgICAgdmFyIGlzRHVwbGljYXRlTmF2aWdhdGlvbiA9IGNyZWF0ZVBhdGgoY29udGV4dC5sb2NhdGlvbikgPT09IGNyZWF0ZVBhdGgobm9ybWFsaXplVG9Mb2NhdGlvbihsb2NhdGlvbikpO1xuICAgICAgICB2YXIgbWV0aG9kID0gcmVwbGFjZSB8fCBpc0R1cGxpY2F0ZU5hdmlnYXRpb24gPyBoaXN0b3J5LnJlcGxhY2UgOiBoaXN0b3J5LnB1c2g7XG4gICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICB9XG4gICAgfSk7IC8vIFJlYWN0IDE1IGNvbXBhdFxuXG5cbiAgICBpZiAoZm9yd2FyZFJlZlNoaW0gIT09IGZvcndhcmRSZWYpIHtcbiAgICAgIHByb3BzLnJlZiA9IGZvcndhcmRlZFJlZiB8fCBpbm5lclJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuaW5uZXJSZWYgPSBpbm5lclJlZjtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG4gIH0pO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIHRvVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSk7XG4gIHZhciByZWZUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLmFueVxuICB9KV0pO1xuICBMaW5rLmRpc3BsYXlOYW1lID0gXCJMaW5rXCI7XG4gIExpbmsucHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiByZWZUeXBlLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0bzogdG9UeXBlLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxudmFyIGZvcndhcmRSZWZTaGltJDEgPSBmdW5jdGlvbiBmb3J3YXJkUmVmU2hpbShDKSB7XG4gIHJldHVybiBDO1xufTtcblxudmFyIGZvcndhcmRSZWYkMSA9IFJlYWN0LmZvcndhcmRSZWY7XG5cbmlmICh0eXBlb2YgZm9yd2FyZFJlZiQxID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIGZvcndhcmRSZWYkMSA9IGZvcndhcmRSZWZTaGltJDE7XG59XG5cbmZ1bmN0aW9uIGpvaW5DbGFzc25hbWVzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NuYW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjbGFzc25hbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzbmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGk7XG4gIH0pLmpvaW4oXCIgXCIpO1xufVxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuXG5cbnZhciBOYXZMaW5rID0gZm9yd2FyZFJlZiQxKGZ1bmN0aW9uIChfcmVmLCBmb3J3YXJkZWRSZWYpIHtcbiAgdmFyIF9yZWYkYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmJGFyaWFDdXJyZW50ID09PSB2b2lkIDAgPyBcInBhZ2VcIiA6IF9yZWYkYXJpYUN1cnJlbnQsXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHZvaWQgMCA/IFwiYWN0aXZlXCIgOiBfcmVmJGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIGlzQWN0aXZlUHJvcCA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBsb2NhdGlvblByb3AgPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgc2Vuc2l0aXZlID0gX3JlZi5zZW5zaXRpdmUsXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIHN0eWxlUHJvcCA9IF9yZWYuc3R5bGUsXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXJpYS1jdXJyZW50XCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJleGFjdFwiLCBcImlzQWN0aXZlXCIsIFwibG9jYXRpb25cIiwgXCJzZW5zaXRpdmVcIiwgXCJzdHJpY3RcIiwgXCJzdHlsZVwiLCBcInRvXCIsIFwiaW5uZXJSZWZcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfX1JvdXRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxOYXZMaW5rPiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvblByb3AgfHwgY29udGV4dC5sb2NhdGlvbjtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IG5vcm1hbGl6ZVRvTG9jYXRpb24ocmVzb2x2ZVRvTG9jYXRpb24odG8sIGN1cnJlbnRMb2NhdGlvbiksIGN1cnJlbnRMb2NhdGlvbik7XG4gICAgdmFyIHBhdGggPSB0b0xvY2F0aW9uLnBhdGhuYW1lOyAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuXG4gICAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgICB2YXIgbWF0Y2ggPSBlc2NhcGVkUGF0aCA/IG1hdGNoUGF0aChjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUsIHtcbiAgICAgIHBhdGg6IGVzY2FwZWRQYXRoLFxuICAgICAgZXhhY3Q6IGV4YWN0LFxuICAgICAgc2Vuc2l0aXZlOiBzZW5zaXRpdmUsXG4gICAgICBzdHJpY3Q6IHN0cmljdFxuICAgIH0pIDogbnVsbDtcbiAgICB2YXIgaXNBY3RpdmUgPSAhIShpc0FjdGl2ZVByb3AgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGN1cnJlbnRMb2NhdGlvbikgOiBtYXRjaCk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVQcm9wID09PSBcImZ1bmN0aW9uXCIgPyBjbGFzc05hbWVQcm9wKGlzQWN0aXZlKSA6IGNsYXNzTmFtZVByb3A7XG4gICAgdmFyIHN0eWxlID0gdHlwZW9mIHN0eWxlUHJvcCA9PT0gXCJmdW5jdGlvblwiID8gc3R5bGVQcm9wKGlzQWN0aXZlKSA6IHN0eWxlUHJvcDtcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgY2xhc3NOYW1lID0gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgICAgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIGFjdGl2ZVN0eWxlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICBcImFyaWEtY3VycmVudFwiOiBpc0FjdGl2ZSAmJiBhcmlhQ3VycmVudCB8fCBudWxsLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICB0bzogdG9Mb2NhdGlvblxuICAgIH0sIHJlc3QpOyAvLyBSZWFjdCAxNSBjb21wYXRcblxuXG4gICAgaWYgKGZvcndhcmRSZWZTaGltJDEgIT09IGZvcndhcmRSZWYkMSkge1xuICAgICAgcHJvcHMucmVmID0gZm9yd2FyZGVkUmVmIHx8IGlubmVyUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5pbm5lclJlZiA9IGlubmVyUmVmO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBwcm9wcyk7XG4gIH0pO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xuICB2YXIgYXJpYUN1cnJlbnRUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIiwgXCJmYWxzZVwiXSk7XG4gIE5hdkxpbmsucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIExpbmsucHJvcFR5cGVzLCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRUeXBlLFxuICAgIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZXhhY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzZW5zaXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0cmljdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSlcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJvdXRlci1kb20uanMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBXZWxjb21lID0gKCkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0ZnVja1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5mZmY8L3A+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKGBAaW1hZ2VzLzExMl9tYWluLmpwZ2ApfS8+XHJcbiAgICAgICAgICAgIDxwPiAyMjIyIDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgV2VsY29tZSB9IGZyb20gXCJAdGVtcGxhdGVzL1dlbGNvbWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBXZWxjb21lUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFdlbGNvbWUgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHJcbiAgIGxldCBzY2VuZVNwZWMgPSBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic3RpY2t5XCIsXHJcbiAgICAgICAgICAgIGhlaWdodFg6IDMsXHJcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodDogMCxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgaGVpZ2h0WDogMSxcclxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJzdGlja3lcIixcclxuICAgICAgICAgICAgaGVpZ2h0WDogNCxcclxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJzdGlja3lcIixcclxuICAgICAgICAgICAgaGVpZ2h0WDogNyxcclxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgfSxcclxuICAgXTtcclxuXHJcbiAgIGxldCB5T2Zmc2V0ID0gMDtcclxuICAgbGV0IHRvdGFsWU9mZnNldCA9IDA7IC8vIO2OmOydtOyngCDthqDtg4gg7Iqk7YGs66GkIOq4uOydtFxyXG4gICBsZXQgcHJldlNjcm9sbEhlaWdodCA9IDA7IC8vIO2YhOyerCDsiqTtgazroaQg7JyE7LmYIOydtOygleuztOuLpCDsnITsuZjtlZwg7Iqk7YGs66GkIOyEueyFmOydmCDstJ0g7ZWpXHJcbiAgIGxldCBjdXJyZW50U2NlbmUgPSAwOyAvLyDtmITsnqwg7JWh7Yuw67iM7KSR7J24IOyUrFxyXG5cclxuICAgLy8g7ZmU66m067OEIOy7qO2FkOy4oCDroIjsnbTslYTsm4Mg7IS47YyFXHJcbiAgIGNvbnN0IHNldExheW91dCA9ICgpID0+IHtcclxuICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICBsZXQgbUFyciA9IFtdO1xyXG4gICAgICAgc2NlbmVTcGVjLm1hcCgoaSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBsZXQgY3AgPSBfLmNsb25lRGVlcChpKTtcclxuICAgICAgICAgIGNwLm9iaiA9IHtcclxuICAgICAgICAgICAgICBjb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzY3JvbGwtc2VjdGlvbi0ke2lkeH1gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY3Auc2Nyb2xsSGVpZ2h0ID0gY3AuaGVpZ2h0WCAqIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgICAgY3Aub2JqLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtjcC5zY3JvbGxIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgdG90YWwgKz0gY3Auc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgbUFyci5wdXNoKGNwKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgc2NlbmVTcGVjID0gbUFycjtcclxuICAgICAgIHRvdGFsWU9mZnNldCA9IHRvdGFsO1xyXG4gICB9O1xyXG5cclxuICAgLy8g7ZiE7J6sIOyKpO2BrOuhpCDsnITsuZgg7ZmV7J24XHJcbiAgIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICB5T2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICB9XHJcblxyXG4gICBjb25zdCBjdXJTY2VuZSA9ICgpID0+IHtcclxuICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gMDtcclxuICAgICAgIGxldCBjTnVtID0gY3VycmVudFNjZW5lO1xyXG4gICAgICAgZm9yIChsZXQgaSA9MDsgaSA8IGN1cnJlbnRTY2VuZTsgaSsrKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICAgICBwcmV2SGVpZ2h0ICs9IHNjZW5lU3BlY1tpXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgY29uc29sZS5sb2coeU9mZnNldCwgcHJldkhlaWdodCArIHNjZW5lU3BlY1tjTnVtXS5zY3JvbGxIZWlnaHQsIGN1cnJlbnRTY2VuZSk7XHJcbiAgICAgICBpZiAoeU9mZnNldCA+IHByZXZIZWlnaHQgKyBzY2VuZVNwZWNbY051bV0uc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgY3VycmVudFNjZW5lID0gY051bSsrO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWFhXCIsIGNOdW0sIGN1cnJlbnRTY2VuZSk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgaWYgKHlPZmZzZXQgPCBwcmV2SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgY3VycmVudFNjZW5lID0gY051bS0tO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmJiXCIsIGNOdW0sIGN1cnJlbnRTY2VuZSk7XHJcbiAgICAgICB9XHJcblxyXG4gICB9XHJcblxyXG4gIFxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIHNldExheW91dCgpO1xyXG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRMYXlvdXQpO1xyXG4gICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0TGF5b3V0KTtcclxuICAgfSwgW10pO1xyXG5cclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRTY3JvbGwoKTtcclxuICAgICAgICBjdXJTY2VuZSgpO1xyXG4gICAgIH0pO1xyXG4gICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0wXCI+XHJcbiAgICAgICAgPGgxPiBXZWxjb21lIFdlZGRpbmcxMTExMTExPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtZW50IG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgPHA+IOuPme2VtOusvOqzvCDrsLHrkZDsgrDsnbQgPGJyPjwvYnI+IOuniOultOqzoCDri7Prj4TroZ0gPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5LWVsZW1lbnQgbWFpbi1tZXNzYWdlXCI+XHJcbiAgICAgICAgICA8cD4g7ZWY64qQ64uY7J20IOuztOyasO2VmOyCrCDsmrDrpqzrgpjrnbwg66eM7IS4IDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtZW50IG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgPHA+IOustOq2ge2ZlCDsgrzsspzrpqwg7ZmU66Ck6rCV7IKwIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtZW50IG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgPHA+IOuMgO2VnOyCrOuejCDrjIDtlZzsnLzroZwg6ri47J20IOuztOyghO2VmOyEuCA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0xXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIDxzdHJvbmc+IOqwleyhsCDsmIHsl60gMTIzMTIzIDwvc3Ryb25nPlxyXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3R1cmUsIHRlc3QgZXZlcnl0aGlncywgaW4gdGhlXHJcbiAgICAgICAgICBtaXJhY2xlIG9oIG5vbCByYSB3b2UgcmFcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Nyb2xsLXNlY3Rpb25cIiBpZD1cInNjcm9sbC1zZWN0aW9uLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtZW50IG1haW4tbWVzc2FnZVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzbWFsbD7tjrjslYjtlZwg7LSJ6rCQPC9zbWFsbD5cclxuICAgICAgICAgICAg7J6F6rO8IO2VmOuCmOqwgCDrkJjri6RcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1lbGVtZW50IGRlc2MtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIO2MjOuegO2VmOuKmCDtlZjripjsg4kg7ZKN7ISg7J2AIOyasOumrCDrp5jsho3sl5Ag7JiB7JuQ7ZWg6rq87JW8IOuEiO2drOuTpOydmCDqt7gg7JiI7IGc66eI7J2M7J2AXHJcbiAgICAgICAgICAgIOyasOumrOqwgCDtla3sg4Eg7KeA7Lyc7KSE6rq87JW8XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwaW5cIj48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3ktZWxlbWVudCBkZXNjLW1lc3NhZ2VcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICDrgpgg7Ja07KmM66m0IOuEiOyXkOqyjCDtlZjqs6Dsi7bsnYAg66eQ7J2AIOq4tOq4tOuwpOydhCDsp4Dsg4jrj4Qg7JWE7KeBIOuEiOulvCDrhIjrrLRcclxuICAgICAgICAgICAg7IKs656R7ZWc64uk6rOgIOydtOyVhO2UiCDsi5zqsITsnbQg7Ja07IScIOyngOuCmOqwgOq4sOulvCDsobDquIjrp4wg642UIOuyhO2FqOuzvOq7mFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGluXCI+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNjcm9sbC1zZWN0aW9uXCIgaWQ9XCJzY3JvbGwtc2VjdGlvbi0zXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWlkLW1lc3NhZ2VcIj5cclxuICAgICAgICAgIDxzdHJvbmc+64uk67mE7LmYIOyWtOypjOuptCDrhIjsl5Dqsow8L3N0cm9uZz5cclxuICAgICAgICAgIFNCUywgS0JTIDPso7zsl7Dsho0gMeychCDqsJDsgqztlanri4jri6QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhbnZhcy1jYXB0aW9uXCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXZlbmlldCBhdFxyXG4gICAgICAgICAgZnVnYSBxdWFlIHBlcnNwaWNpYXRpcyB2ZW5pYW0gaW1wZWRpdCBldCwgcmF0aW9uZSBlc3Qgb3B0aW8gcG9ycm8uXHJcbiAgICAgICAgICBJbmNpZHVudCBhcGVyaWFtIG5lbW8gdm9sdXB0YXMgb2RpdCBxdWlzcXVhbSBoYXJ1bSBpbiBtb2xsaXRpYS5cclxuICAgICAgICAgIEluY2lkdW50IG1pbmltYSBpdXN0byBpbiBjb3Jwb3JpcywgZG9sb3JlcyB2ZWxpdC4gQXV0ZW0sIHNpdCBkb2xvcnVtXHJcbiAgICAgICAgICBpbnZlbnRvcmUgYSByZXJ1bSBkaXN0aW5jdGlvIHZlcm8gaWxsbyBtYWduaSBwb3NzaW11cyB0ZW1wb3JpYnVzXHJcbiAgICAgICAgICBkb2xvcmVzIG5lcXVlIGFkaXBpc2NpLCByZXB1ZGlhbmRhZSByZXBlbGxhdC4gRHVjaW11cyBhY2N1c2FtdXNcclxuICAgICAgICAgIHNpbWlsaXF1ZSBxdWFzIGVhcnVtIGxhYm9ydW0uIEF1dGVtIHRlbXBvcmEgcmVwZWxsZW5kdXMgYXNwZXJpb3Jlc1xyXG4gICAgICAgICAgaWxsdW0gZXghIFZlbGl0IGVhIGNvcnBvcmlzIG9kaXQ/IEVhLCBpbmNpZHVudCBkZWxlY3R1cy4gU2FwaWVudGVcclxuICAgICAgICAgIHJlcnVtIG5lcXVlIGVycm9yIGRlbGVuaXRpIHF1aXMsIGV0LCBxdWlidXNkYW0sIGVzdCBhdXRlbSB2b2x1cHRhdGVcclxuICAgICAgICAgIHJlbSB2b2x1cHRhcy4gUmF0aW9uZSBzb2x1dGEgc2ltaWxpcXVlIGhhcnVtIG5paGlsIHZlbC4gUXVhcyBpbnZlbnRvcmVcclxuICAgICAgICAgIHBlcmZlcmVuZGlzIGl1c3RvIGV4cGxpY2FibyBhbmltaSBlb3MgcmF0aW9uZSBvYmNhZWNhdGkuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCJAdGVtcGxhdGVzL01haW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW4gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlRWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgbG9kYXNoIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IHsgV2VsY29tZVBhZ2UgfSBmcm9tIFwiQHBhZ2VzL1dlbGNvbWVcIjtcbmltcG9ydCB7IE1haW5QYWdlIH0gZnJvbSBcIkBwYWdlcy9NYWluXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgd2luZG93Ll8gPSBsb2Rhc2g7XG5cbiAgLyoqXG4gICAqIOyDge2ZqeyXkCDrlLDrpbgg7Y6Y7J207KeAIOu2hOumrFxuICAgKi9cblxuICBmdW5jdGlvbiBwYWdlTm90Rm91bmQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT4gNDA0IFBhZ2UgTm90IEZvdW5kPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIOygkeyGjSDtlbjrk5ztj7Ag6rCA7KC47Jik6riwXG4gICAqL1xuICBjb25zdCBnZXRNb2JpbGVPcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuXG4gICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICByZXR1cm4gXCJBbmRyb2lkXCI7XG4gICAgfVxuXG4gICAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xuICAgICAgcmV0dXJuIFwiSU9TXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiV0VCXCI7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtXZWxjb21lUGFnZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21haW5cIiBjb21wb25lbnQ9e01haW5QYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtwYWdlTm90Rm91bmR9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY29uc3QgcmVwb3J0V2ViVml0YWxzID0gb25QZXJmRW50cnkgPT4ge1xuICBpZiAob25QZXJmRW50cnkgJiYgb25QZXJmRW50cnkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGltcG9ydCgnd2ViLXZpdGFscycpLnRoZW4oKHsgZ2V0Q0xTLCBnZXRGSUQsIGdldEZDUCwgZ2V0TENQLCBnZXRUVEZCIH0pID0+IHtcbiAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGSUQob25QZXJmRW50cnkpO1xuICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldExDUChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRUVEZCKG9uUGVyZkVudHJ5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwb3J0V2ViVml0YWxzO1xuIiwiaW1wb3J0IFwiY29yZS1qcy9zdGFibGVcIjtcbmltcG9ydCBcInJlYWN0LWFwcC1wb2x5ZmlsbC9pZTExXCI7IC8vIEZvciBJRSAxMSBzdXBwb3J0XG5pbXBvcnQgXCJyZWFjdC1hcHAtcG9seWZpbGwvc3RhYmxlXCI7IC8vIEZvciBJRSAxMSBzdXBwb3J0XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuaW1wb3J0IHJlcG9ydFdlYlZpdGFscyBmcm9tIFwiLi9yZXBvcnRXZWJWaXRhbHNcIjtcblxuaW1wb3J0IFwiQGNzcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiQGNzcy9pbmRleC5jc3NcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8QXBwIC8+XG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcblxuLy8gSWYgeW91IHdhbnQgdG8gc3RhcnQgbWVhc3VyaW5nIHBlcmZvcm1hbmNlIGluIHlvdXIgYXBwLCBwYXNzIGEgZnVuY3Rpb25cbi8vIHRvIGxvZyByZXN1bHRzIChmb3IgZXhhbXBsZTogcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKSlcbi8vIG9yIHNlbmQgdG8gYW4gYW5hbHl0aWNzIGVuZHBvaW50LiBMZWFybiBtb3JlOiBodHRwczovL2JpdC5seS9DUkEtdml0YWxzXG5yZXBvcnRXZWJWaXRhbHMoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI2MmNhMGYyYjVkZGI0YWI1ZTIxZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiV2VsY29tZSIsInJlcXVpcmUiLCJXZWxjb21lUGFnZSIsInVzZUVmZmVjdCIsImNzcyIsIk1haW4iLCJzY2VuZVNwZWMiLCJ0eXBlIiwiaGVpZ2h0WCIsInNjcm9sbEhlaWdodCIsInlPZmZzZXQiLCJ0b3RhbFlPZmZzZXQiLCJwcmV2U2Nyb2xsSGVpZ2h0IiwiY3VycmVudFNjZW5lIiwic2V0TGF5b3V0IiwidG90YWwiLCJtQXJyIiwibWFwIiwiaSIsImlkeCIsImNwIiwiXyIsImNsb25lRGVlcCIsIm9iaiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJwdXNoIiwiY3VycmVudFNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwiY3VyU2NlbmUiLCJwcmV2SGVpZ2h0IiwiY051bSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1haW5QYWdlIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJTd2l0Y2giLCJsb2Rhc2giLCJBcHAiLCJwYWdlTm90Rm91bmQiLCJnZXRNb2JpbGVPcyIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInZlbmRvciIsIm9wZXJhIiwidGVzdCIsIk1TU3RyZWFtIiwicmVwb3J0V2ViVml0YWxzIiwib25QZXJmRW50cnkiLCJGdW5jdGlvbiIsInRoZW4iLCJnZXRDTFMiLCJnZXRGSUQiLCJnZXRGQ1AiLCJnZXRMQ1AiLCJnZXRUVEZCIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=