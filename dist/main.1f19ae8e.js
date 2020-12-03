// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var html = "\n*{padding: 0;margin: 0;box-sizing: border-box;}\nbody{\n    background-color: #fee433;\n}\n.skin{\n    position: relative;\n    height: 50vh;\n    background-color: #fee433;\n}\n\n.triangle{\n    position: relative;\n    width: 15px;\n    height: 15px;\n    border: 15px solid #000;\n    border-color: #000 transparent yellow transparent;\n    border-bottom: none;\n    top: 100px;\n    left: 50%;\n    margin-left: -12px;\n}\n.round{\n    position: absolute;\n    width: 28px;\n    height: 10px;\n    background-color: #000;\n    \n    left: -14px;\n    top: -24px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    \n}\n@keyframes ware {\n    0%{transform: rotate(0deg)}\n    33%{transform: rotate(10deg)}\n    66%{transform: rotate(-10deg)}\n    100%{transform: rotate(0deg)}\n}\n.triangle:hover{\n    transform-origin: bottom center;\n    animation: ware 300ms infinite linear;\n}\n.eyes .left,.eyes .right{\n    position: relative;\n   background-color: #2e2e2e;\n    width: 80px;\n    height: 80px;\n    border: 5px solid #000;\n    left: 50%;\n    margin-left: -25px;\n    border-radius: 40px;\n    top: 40px;\n}\n.eyes .left{\n    \n    \n   transform: translateX(-180px);\n}\n.eyes .right{\n    \n   \n   transform: translateX(160px) translateY(-80px);\n   \n}\n.eyes .left::before,.eyes .right::before{\n    top: 1px;\n    left: 4px;\n    position: absolute;\n    content: '';\n    display: block;\n    width: 40px;\n    height: 40px;\n    background-color: #fff;\n    border: 1px solid #2e2e2e;\n    border-radius: 20px;\n}\n.mouth{\n    position: relative;\n    top:-40px;\n    width:200px;\n    height: 200px;\n    left: 50%;\n    margin-left: -98px;\n\n}\n.mouth .upperlip{\n    position: relative;\n    top: 8px;\n    z-index: 1;\n}\n.mouth .upperlip .left,.mouth .upperlip .right{\n    position: absolute;\n    top:0px;\n    width: 100px;\n    height: 30px;\n    border: 5px solid black;\n    border-top-color: transparent;\n    background-color: #fee433;\n    border-top: none;\n}\n.mouth .upperlip .left{\n    left: 5px;\n    border-radius: 0 0 0 30px;\n    transform: rotateZ(-25deg);\n}\n\n.mouth .upperlip .right{\n    z-index: 2;\n    right: 1px;\n    border-radius: 0 0 30px 0;\n    transform: rotateZ(25deg);\n}\n.mouth .upperlip .left::before,.mouth .upperlip .right::before{\n    content: '';\n    position: absolute;\n    width: 9px;\n    height: 32px;\n    background-color: #fee433;\n}\n.mouth .upperlip .left::before{\n    right: -7px;\n    bottom: -5px;\n}\n\n.mouth .upperlip .right::before{\n    left: -7px;\n    bottom: -1px;\n\n}\n.mouth .downlip {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    top: 9px;\n    overflow: hidden;\n}\n.mouth .downlip .round1 {\n\n    position: absolute;\n    width: 100px;\n    height: 400px;\n    border: 3px solid black;\n    bottom: 50px;\n    border-radius: 100px/300px;\n    left: 50%;\n    /*background-color: #990513;*/\n    margin-left: -50px;\n    z-index: 0;\n    overflow: hidden;\n    background-color: #990513;\n}\n.mouth .downlip .round1 .round2{\n    z-index: 3;\n    position: absolute;\n    bottom:-40px;\n    width: 100px;\n    height: 150px;\n    left: -3px;\n    border-radius: 140px/200px;\n    background-color: #fc4a62;\n}\n.face .left,.face .right{\n    top:180px;\n    position: absolute;\n    border: 3px solid #000;\n    width: 88px;\n    height: 88px;\n    left: 50%;\n    margin-left: -44px;\n    border-radius: 50%;\n    background-color: #fc0d1c;\n}\n.face .right{\n    transform: translateX(200px);\n}\n.face .left{\n    transform: translateX(-200px);\n}\n";
var _default = html;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector('#demo');
var demo1 = document.querySelector('#demo1');
var player = {
  id: undefined,
  n: 1,
  time: 50,
  string: "",
  map: {
    pause: '.btn_pause',
    play: '.btn_play',
    slow: '.btn_slow',
    normal: '.btn_normal',
    fast: '.btn_fast'
  },
  init: function init() {
    player.id = setInterval(player.run, player.time);
    player.bindEvent();
  },
  bindEvent: function bindEvent() {
    for (var key in player.map) {
      if (player.map.hasOwnProperty(key)) {
        console.log('hi');
        console.log(key);
        document.querySelector(player.map[key]).onclick = player[key];
      }
    }
  },
  run: function run() {
    if (player.n >= _css.default.length) {
      player.clear();
      return;
    }

    player.string = _css.default.substring(0, player.n);
    demo.innerText = player.string;

    if (document.getElementById('demo1')) {
      demo1.innerHTML = player.string;
    }

    demo.scrollTop = demo.scrollHeight;
    player.n += 1;
  },
  clear: function clear() {
    window.clearInterval(player.id);
  },
  reset: function reset() {
    player.id = setInterval(player.run, player.time);
  },
  play: function play() {
    player.reset();
  },
  slow: function slow() {
    player.clear();
    player.time = 100;
    player.reset();
  },
  normal: function normal() {
    player.clear();
    player.time = 50;
    player.reset();
  },
  fast: function fast() {
    player.clear();
    player.time = 0;
    player.reset();
  },
  pause: function pause() {
    player.clear();
    console.log(player.id);
  }
};
player.init();
},{"./css":"css.js"}],"C:/Users/xsn/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53905" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/xsn/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map