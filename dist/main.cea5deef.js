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
})({"assets/js/gsapAnim.js":[function(require,module,exports) {
// ======= GSAP ANIMATION CODE ============ //
gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll('section');

// ======= STICKY NAV ANIMATION CODE  ============ //
// ScrollTrigger.create({
//     trigger: '.section',
//     start: "top top",
//     toggleClass: {targets: ".header", className:"show-nav"}
// })

// ======= HERO SECTION TEXT ANIMATION CODE  ============ //

gsap.set('.tagLine__text', {
  yPercent: 100,
  opacity: 0
});
gsap.to('.tagLine__text', {
  duration: 1,
  yPercent: 0,
  opacity: 1,
  stagger: .5
});

// ======= ANIMATION CODE FOR INTRO SECTION PINNING THE HERO SECTION ============ //
gsap.to('.intro', {
  scrollTrigger: {
    trigger: '.intro',
    start: "top bottom",
    end: "top 75%",
    pin: '.hero',
    pinSpacing: false,
    scrub: false,
    toggleActions: 'restart reset reset reverse'
  }
});

// ======= SLIDING UP/IN ANIMATION CODE FOR ABOUT SECTION ============ //

gsap.from('#sub-title-1, .bio', {
  duration: 1,
  y: 70,
  opacity: 0,
  stagger: .5,
  scrollTrigger: {
    trigger: '.container__left',
    start: "top 97%",
    end: "top 12%",
    scrub: true
  }
});
gsap.from('.profile-img', {
  duration: 2,
  x: 140,
  opacity: 0,
  scrollTrigger: {
    trigger: '.profile-img',
    start: "top 85%",
    end: "top 8%",
    scrub: true
  }
});
gsap.to('.line', {
  width: '0%',
  scrollTrigger: {
    trigger: '.line',
    start: "top 80%",
    scrub: 0.5
  }
});

// ======= ANIMATION CODE FOR SCROLL TO HIDE & REAPPEAR WITH THE SCROLL ANIMATION OF THE INTRO SECTION ============ //
gsap.to('.scroll', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.intro',
    start: "top 90%",
    end: "bottom top",
    toggleActions: 'play none none reset'
  }
});

// ======= ANIMATION CODE FOR INTRO TEXT TO SLIDE IN AND SLIDE OUT ============ //

gsap.from('.intro__main-text', {
  y: 100,
  opacity: 0,
  duration: .75,
  ease: 'ease',
  scrollTrigger: {
    trigger: '.intro',
    start: "top 80%",
    end: "55% top",
    scrub: false,
    toggleActions: 'restart reverse restart reset' // onEnter onLeave onEnterBack onLeaveBack
    //values=play pause resume reverse restart reset complete none
    // toggleClass:'black',
  }
});
gsap.from('.intro__sub-text', {
  // x: 400,
  y: -100,
  opacity: 0,
  // duration: .5,
  // ease: 'ease',
  scrollTrigger: {
    trigger: '.intro__sub-text',
    start: "top 97%",
    end: "top 40%",
    scrub: 1,
    toggleActions: 'restart reverse restart reset'
  }
});

// ======= ToggleClass ANIMATION CODE FOR SERVICE SECTION ============ //

gsap.to('.portfolio', {
  scrollTrigger: {
    trigger: '.portfolio',
    start: "top 80%",
    end: "bottom 15%",
    toggleClass: 'green'
  }
});

// ======= SLIDING UP/IN ANIMATION CODE FOR CONTACT SECTION ============ //

gsap.from('#sub-title-2, .section-left__text, .section-left__bottom-content', {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: .5,
  scrollTrigger: {
    trigger: '.contact-container',
    start: "top 90%",
    end: "top 10%",
    scrub: true
  }
});
gsap.from('.form__field', {
  duration: 1,
  opacity: 0,
  stagger: .75,
  scrollTrigger: {
    trigger: '.form',
    start: "top 90%",
    end: "top 10%",
    scrub: true
  }
});

//=========== For Navbar Animation ============//

const header = document.querySelector(".header");
gsap.to(header, {
  //   y: -header.offsetHeight, // Move the navbar above the viewport
  scrollTrigger: {
    trigger: "section",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play none none reverse"
  }
});

// MY WORK SECTION TEXT ANIMATION

gsap.from("#title-design, #title-dev", {
  y: "100%",
  opacity: 0,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#title-design, #title-dev",
    scrub: 1,
    start: "top bottom",
    end: "bottom top"
  }
});
gsap.from(".box__left-description", {
  y: "8%",
  opacity: 0,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: ".box__left-description",
    scrub: 1,
    start: "top bottom",
    end: "bottom top"
  }
});
gsap.to("#design", {
  backgroundPositionX: "0%",
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#design",
    scrub: 1,
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.to("#dev", {
  backgroundPositionX: "0%",
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#dev",
    scrub: 1,
    start: "top 70%",
    end: "bottom top"
  }
});
},{}],"assets/js/main.js":[function(require,module,exports) {
"use strict";

require("./gsapAnim");
/* Implementation of Accordion Button My Work Section */
let tableData = document.querySelector('.portfolioTable');
tableData.addEventListener('click', e => {
  const target = e.target;
  const parentElm = target.closest(".portfolioTable__data");
  const sibling = parentElm.nextElementSibling;
  console.log(sibling);
  sibling.classList.toggle("hide");
});

/* Implementation fo Navbar Showing up as we scroll up */
let header = document.querySelector(".header");
let prevScrollpos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("show-nav");
  } else {
    header.classList.remove("show-nav");
  }
  prevScrollpos = currentScrollPos;
};
const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(".nav__link");
function scrollToSection(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  console.log(this);
  console.log('TargetID:', targetId);
  console.log('TargetSection:', targetSection);
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}
navLi.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

// Logo button and scroll button implementation
let logoBtn = document.querySelector('.logo');
let scrollBtn = document.querySelector('.scroll');
let home = document.querySelector("#home");
let intro = document.querySelector('.intro');
logoBtn.addEventListener('click', () => {
  window.scrollTo({
    top: home.offsetTop,
    behavior: 'smooth'
  });
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: intro.offsetTop,
    behavior: 'smooth'
  });
});

// The code to remove the hash sign from the url which gets stated when we click the anchor tag having the scroll class - (the scroll button)
scrollBtn.addEventListener('click', function (e) {
  e.preventDefault();
  history.pushState('', document.title, window.location.pathname);
});
},{"./gsapAnim":"assets/js/gsapAnim.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65351" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/main.js"], null)
//# sourceMappingURL=/main.cea5deef.js.map