// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ky4B6":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a054e08de150b6a4";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"40r8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _shared = require("@kimchinese/shared");
var _sharedDefault = parcelHelpers.interopDefault(_shared);
// import { DateTime } from "https://cdn.skypack.dev/luxon"
// import * as Sentry from "https://esm.run/@sentry/browser"
// import { BrowserTracing } from "https://esm.run/@sentry/tracing"
var _luxon = require("luxon");
var _browser = require("@sentry/browser");
var _tracing = require("@sentry/tracing");
_browser.init({
    dsn: "https://4f41364704974e929ca693d023130c27@o1042358.ingest.sentry.io/6405535",
    integrations: [
        new (0, _tracing.BrowserTracing)()
    ],
    tracesSampleRate: 1.0
});
const validationStrings = (0, _sharedDefault.default).validationStrings;
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const excelOption = document.getElementById("excel-option");
const excelFileInput = document.getElementById("excel-file");
const excelFileError = document.getElementById("excel-file-error");
const starterOption = document.getElementById("starter-option");
const starterPacks = document.querySelectorAll("input[name='starter-pack']");
const starterErrorTrigger = document.getElementById("starter-error-trigger");
const starterError = document.getElementById("starter-error");
const emailOption = document.getElementById("email-option");
const smsOption = document.getElementById("sms-option");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");
const smsInput = document.getElementById("sms-input");
const smsError = document.getElementById("sms-error");
const form = document.getElementsByTagName("form")[0];
usernameInput.addEventListener("input", (e)=>{
    checkUsernameAsync(e);
});
usernameInput.addEventListener("blur", (e)=>{
    checkUsernameAsync(e);
});
excelFileInput.addEventListener("input", (e)=>{
    checkVocabSource();
});
Array.from(starterPacks).forEach((pack)=>{
    pack.addEventListener("input", (e)=>{
        checkVocabSource();
    });
});
emailInput.addEventListener("input", (e)=>{
    checkNotificationMethod();
});
emailInput.addEventListener("blur", (e)=>{
    checkNotificationMethod();
});
smsInput.addEventListener("input", (e)=>{
    checkNotificationMethod();
});
smsInput.addEventListener("blur", (e)=>{
    checkNotificationMethod();
});
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkVocabSource();
    checkNotificationMethod();
    checkUsernameAsync(e).then(()=>{
        console.log("Form validity:", form.checkValidity());
        if (form.checkValidity()) sendData();
        else window.dispatchEvent(new CustomEvent("error", {
            detail: {
                message: "Please check your form and try again!"
            }
        }));
    });
});
function sendData() {
    const formData = new FormData(form);
    const vocabSource = formData.get("vocab-source");
    const notifMethod = formData.get("contactType");
    if (vocabSource === "excel") formData.has("starter-pack") && formData.delete("starter-pack");
    if (vocabSource === "starter") formData.has("excel-file") && formData.delete("excel-file");
    if (notifMethod === "EMAIL") formData.has("sms") && formData.delete("sms");
    if (notifMethod === "SMS") formData.has("email") && formData.delete("email");
    formData.append("isoTime", (0, _luxon.DateTime).utc().toISO());
    formData.append("IANA", (0, _luxon.DateTime).local().zoneName);
    fetch(formSubmitUrl + "/api/user", {
        method: "POST",
        body: formData
    }).then((res)=>{
        if (!res.ok) return res.json().then((jsonRes)=>{
            throw new Error(jsonRes);
        });
        return res;
    }).then((res)=>res.json()).then(({ incompleteWords , createdUser  })=>{
        console.log("INCOMPLETE WORDS!", incompleteWords);
        console.log("Created user", createdUser);
        window.dispatchEvent(new CustomEvent("submit-success", {
            detail: {
                incompleteWords,
                username: createdUser.username
            }
        }));
    }).catch((e)=>{
        _browser.captureException(e);
        window.dispatchEvent(new CustomEvent("error", {
            detail: {
                message: `Oops! Looks like there was an error. Try refreshing the page or contacting help@kimchinese.com! 
            \nError details: ${JSON.stringify(e.message)}`
            }
        }));
    });
}
function checkVocabSource() {
    if (excelOption.checked && excelFileInput.files.length === 0) {
        excelFileInput.setCustomValidity(validationStrings.missingFile);
        excelFileError.textContent = validationStrings.missingFile;
    } else if (starterOption.checked && Array.from(starterPacks).filter((x)=>x.checked).length === 0) {
        starterErrorTrigger.setCustomValidity(validationStrings.missingStarter);
        starterError.textContent = validationStrings.missingStarter;
    } else {
        excelFileInput.setCustomValidity("");
        starterErrorTrigger.setCustomValidity("");
    }
}
function checkNotificationMethod() {
    if (emailOption.checked) {
        if (emailInput.validity.typeMismatch) emailError.textContent = validationStrings.invalidEmail;
        else if (emailInput.value.length === 0) {
            // Not using the "required" HTML attribute because I don't want to show validation errors before the user has had a chance
            // to type anything.
            emailInput.setCustomValidity(validationStrings.missingEmail);
            emailError.textContent = validationStrings.missingEmail;
        } else {
            emailInput.setCustomValidity("");
            smsInput.value = "";
            smsInput.setCustomValidity("");
        }
    } else if (smsOption.checked) {
        if (smsInput.validity.patternMismatch) smsError.textContent = validationStrings.invalidPhone;
        else if (smsInput.value.length === 0) {
            smsInput.setCustomValidity(validationStrings.missingPhone);
            smsError.textContent = validationStrings.missingPhone;
        } else {
            smsInput.setCustomValidity("");
            emailInput.value = "";
            emailInput.setCustomValidity("");
        }
    }
}
function checkUsernameAsync(e) {
    if (usernameInput.validity.patternMismatch) // I don't need to set custom validity because HTML uses the pattern attribute to automatically validate the input.
    usernameError.textContent = validationStrings.invalidUsername;
    else if (usernameInput.value.length === 0) {
        usernameInput.setCustomValidity(validationStrings.missingUsername);
        usernameError.textContent = validationStrings.missingUsername;
    } else // Without the blur clause below, blurring the input when there's a "username exists" error will cause the error to disappear
    // and reappear after a moment because of the fetch request.
    // The blur clause is safe because a blur event does not cause any change in the content of the input. Since there is no
    // chance for the content to "correct" itself, there is no need to make the input valid with setCustomValidity.
    e.type !== "blur" && usernameInput.setCustomValidity("");
    return fetch(formSubmitUrl + "/api/user/" + usernameInput.value).then((res)=>res.json()).then((res)=>{
        console.log("RESPONSE", res);
        if (res) {
            usernameInput.setCustomValidity(validationStrings.duplicateUsername);
            usernameError.textContent = validationStrings.duplicateUsername;
        }
    });
}

},{"@kimchinese/shared":"kIzYW","luxon":"jSnhU","@sentry/browser":"kRkbf","@sentry/tracing":"fk4Ca","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIzYW":[function(require,module,exports) {
exports.hey = function hey() {
    console.log("G");
    var hey = "FFFF";
};
exports.validationStrings = {
    missingFile: "You need to upload a file",
    invalidFileType: "File type needs to be csv, xls, or xlsx",
    invalidFileInputName: "File input name needs to be excel-file",
    emptyFile: "Your file is empty",
    missingStarter: "You need to select at least one starter pack",
    invalidEmail: "Please input a valid email",
    missingEmail: "You need to enter your email",
    invalidPhone: "Please enter a correctly formatted telephone number",
    missingPhone: "You need to enter your telephone number",
    invalidUsername: "Username should only contain letters and numbers",
    missingUsername: "You need to enter a username",
    duplicateUsername: "Username exists. Please choose another username",
    invalidVocabSource: "Vocabulary source can only be one of 'excel' and 'starter'",
    missingVocabSource: "You need to specify a vocabulary source",
    invalidStarterPackFormat: "Starter pack needs to be an array",
    invalidStarterPackValues: "Starter packs can only be chosen from the following values: hsk1, hsk2, hsk3, hsk4, hsk5, hsk6",
    missingNotif: "You need to specify a notification method",
    invalidNotifValue: "Notification method can only be one of email and sms",
    invalidIsoDate: "Date needs to be in proper ISO date format",
    missingIsoDate: "You need to submit an ISO date indicating your time of form submission",
    missingIANA: "You need to submit the IANA string indicating your time zone"
};

},{}],"jSnhU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// these aren't really private, but nor are they really useful to document
/**
 * @private
 */ var LuxonError = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(LuxonError, _Error);
    function LuxonError() {
        return _Error.apply(this, arguments) || this;
    }
    return LuxonError;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
/**
 * @private
 */ var InvalidDateTimeError = /*#__PURE__*/ function(_LuxonError) {
    _inheritsLoose(InvalidDateTimeError, _LuxonError);
    function InvalidDateTimeError(reason) {
        return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
    }
    return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */ var InvalidIntervalError = /*#__PURE__*/ function(_LuxonError2) {
    _inheritsLoose(InvalidIntervalError, _LuxonError2);
    function InvalidIntervalError(reason) {
        return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
    }
    return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */ var InvalidDurationError = /*#__PURE__*/ function(_LuxonError3) {
    _inheritsLoose(InvalidDurationError, _LuxonError3);
    function InvalidDurationError(reason) {
        return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
    }
    return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */ var ConflictingSpecificationError = /*#__PURE__*/ function(_LuxonError4) {
    _inheritsLoose(ConflictingSpecificationError, _LuxonError4);
    function ConflictingSpecificationError() {
        return _LuxonError4.apply(this, arguments) || this;
    }
    return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */ var InvalidUnitError = /*#__PURE__*/ function(_LuxonError5) {
    _inheritsLoose(InvalidUnitError, _LuxonError5);
    function InvalidUnitError(unit) {
        return _LuxonError5.call(this, "Invalid unit " + unit) || this;
    }
    return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */ var InvalidArgumentError = /*#__PURE__*/ function(_LuxonError6) {
    _inheritsLoose(InvalidArgumentError, _LuxonError6);
    function InvalidArgumentError() {
        return _LuxonError6.apply(this, arguments) || this;
    }
    return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */ var ZoneIsAbstractError = /*#__PURE__*/ function(_LuxonError7) {
    _inheritsLoose(ZoneIsAbstractError, _LuxonError7);
    function ZoneIsAbstractError() {
        return _LuxonError7.call(this, "Zone is an abstract class") || this;
    }
    return ZoneIsAbstractError;
}(LuxonError);
/**
 * @private
 */ var n = "numeric", s = "short", l = "long";
var DATE_SHORT = {
    year: n,
    month: n,
    day: n
};
var DATE_MED = {
    year: n,
    month: s,
    day: n
};
var DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
};
var DATE_FULL = {
    year: n,
    month: l,
    day: n
};
var DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
};
var TIME_SIMPLE = {
    hour: n,
    minute: n
};
var TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
};
var TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
var TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: l
};
var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
};
var DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
};
var DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
};
var DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
var DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
/**
 * @private
 */ // TYPES
function isUndefined(o) {
    return typeof o === "undefined";
}
function isNumber(o) {
    return typeof o === "number";
}
function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
    return typeof o === "string";
}
function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES
function hasRelative() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
} // OBJECTS AND ARRAYS
function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [
        thing
    ];
}
function bestBy(arr, by, compare) {
    if (arr.length === 0) return undefined;
    return arr.reduce(function(best, next) {
        var pair = [
            by(next),
            next
        ];
        if (!best) return pair;
        else if (compare(best[0], pair[0]) === best[0]) return best;
        else return pair;
    }, null)[1];
}
function pick(obj, keys) {
    return keys.reduce(function(a, k) {
        a[k] = obj[k];
        return a;
    }, {});
}
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS
function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x
function floorMod(x, n) {
    return x - n * Math.floor(x / n);
}
function padStart(input, n) {
    if (n === void 0) n = 2;
    var isNeg = input < 0;
    var padded;
    if (isNeg) padded = "-" + ("" + -input).padStart(n, "0");
    else padded = ("" + input).padStart(n, "0");
    return padded;
}
function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseInt(string, 10);
}
function parseFloating(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseFloat(string);
}
function parseMillis(fraction) {
    // Return undefined (instead of 0) in these cases, where fraction is not set
    if (isUndefined(fraction) || fraction === null || fraction === "") return undefined;
    else {
        var f = parseFloat("0." + fraction) * 1000;
        return Math.floor(f);
    }
}
function roundTo(number, digits, towardZero) {
    if (towardZero === void 0) towardZero = false;
    var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
} // DATE BASICS
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
    var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) return isLeapYear(modYear) ? 29 : 28;
    else return [
        31,
        null,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][modMonth - 1];
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
    var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
    if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    return +d;
}
function weeksInWeekYear(weekYear) {
    var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
    return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
    if (year > 99) return year;
    else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING
function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
    if (timeZone === void 0) timeZone = null;
    var date = new Date(ts), intlOpts = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (timeZone) intlOpts.timeZone = timeZone;
    var modified = _extends({
        timeZoneName: offsetFormat
    }, intlOpts);
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
        return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
} // signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
    var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0
    if (Number.isNaN(offHour)) offHour = 0;
    var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
} // COERCION
function asNumber(value) {
    var numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
    return numericValue;
}
function normalizeObject(obj, normalizer) {
    var normalized = {};
    for(var u in obj)if (hasOwnProperty(obj, u)) {
        var v = obj[u];
        if (v === undefined || v === null) continue;
        normalized[normalizer(u)] = asNumber(v);
    }
    return normalized;
}
function formatOffset(offset, format) {
    var hours = Math.trunc(Math.abs(offset / 60)), minutes = Math.trunc(Math.abs(offset % 60)), sign = offset >= 0 ? "+" : "-";
    switch(format){
        case "short":
            return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);
        case "narrow":
            return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
        case "techie":
            return "" + sign + padStart(hours, 2) + padStart(minutes, 2);
        default:
            throw new RangeError("Value format " + format + " is out of range for property format");
    }
}
function timeObject(obj) {
    return pick(obj, [
        "hour",
        "minute",
        "second",
        "millisecond"
    ]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
/**
 * @private
 */ var monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
var monthsNarrow = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D"
];
function months(length) {
    switch(length){
        case "narrow":
            return [].concat(monthsNarrow);
        case "short":
            return [].concat(monthsShort);
        case "long":
            return [].concat(monthsLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ];
        default:
            return null;
    }
}
var weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
var weekdaysShort = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];
var weekdaysNarrow = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
];
function weekdays(length) {
    switch(length){
        case "narrow":
            return [].concat(weekdaysNarrow);
        case "short":
            return [].concat(weekdaysShort);
        case "long":
            return [].concat(weekdaysLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
        default:
            return null;
    }
}
var meridiems = [
    "AM",
    "PM"
];
var erasLong = [
    "Before Christ",
    "Anno Domini"
];
var erasShort = [
    "BC",
    "AD"
];
var erasNarrow = [
    "B",
    "A"
];
function eras(length) {
    switch(length){
        case "narrow":
            return [].concat(erasNarrow);
        case "short":
            return [].concat(erasShort);
        case "long":
            return [].concat(erasLong);
        default:
            return null;
    }
}
function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
    if (numeric === void 0) numeric = "always";
    if (narrow === void 0) narrow = false;
    var units = {
        years: [
            "year",
            "yr."
        ],
        quarters: [
            "quarter",
            "qtr."
        ],
        months: [
            "month",
            "mo."
        ],
        weeks: [
            "week",
            "wk."
        ],
        days: [
            "day",
            "day",
            "days"
        ],
        hours: [
            "hour",
            "hr."
        ],
        minutes: [
            "minute",
            "min."
        ],
        seconds: [
            "second",
            "sec."
        ]
    };
    var lastable = [
        "hours",
        "minutes",
        "seconds"
    ].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
        var isDay = unit === "days";
        switch(count){
            case 1:
                return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
                return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
                return isDay ? "today" : "this " + units[unit][0];
        }
    }
    var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function stringifyTokens(splits, tokenToString) {
    var s = "";
    for(var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;){
        var token = _step.value;
        if (token.literal) s += token.val;
        else s += tokenToString(token.val);
    }
    return s;
}
var _macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */ var Formatter = /*#__PURE__*/ function() {
    Formatter.create = function create(locale, opts) {
        if (opts === void 0) opts = {};
        return new Formatter(locale, opts);
    };
    Formatter.parseFormat = function parseFormat(fmt) {
        var current = null, currentFull = "", bracketed = false;
        var splits = [];
        for(var i = 0; i < fmt.length; i++){
            var c = fmt.charAt(i);
            if (c === "'") {
                if (currentFull.length > 0) splits.push({
                    literal: bracketed,
                    val: currentFull
                });
                current = null;
                currentFull = "";
                bracketed = !bracketed;
            } else if (bracketed) currentFull += c;
            else if (c === current) currentFull += c;
            else {
                if (currentFull.length > 0) splits.push({
                    literal: false,
                    val: currentFull
                });
                currentFull = c;
                current = c;
            }
        }
        if (currentFull.length > 0) splits.push({
            literal: bracketed,
            val: currentFull
        });
        return splits;
    };
    Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
        return _macroTokenToFormatOpts[token];
    };
    function Formatter(locale, formatOpts) {
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
    }
    var _proto = Formatter.prototype;
    _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) this.systemLoc = this.loc.redefaultToSystem();
        var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
        return df.format();
    };
    _proto.formatDateTime = function formatDateTime(dt, opts) {
        if (opts === void 0) opts = {};
        var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
        return df.format();
    };
    _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
        if (opts === void 0) opts = {};
        var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
        return df.formatToParts();
    };
    _proto.resolvedOptions = function resolvedOptions(dt, opts) {
        if (opts === void 0) opts = {};
        var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
        return df.resolvedOptions();
    };
    _proto.num = function num(n, p) {
        if (p === void 0) p = 0;
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) return padStart(n, p);
        var opts = _extends({}, this.opts);
        if (p > 0) opts.padTo = p;
        return this.loc.numberFormatter(opts).format(n);
    };
    _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
        var _this = this;
        var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = function string(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
        }, formatOffset = function formatOffset(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) return "Z";
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = function meridiem() {
            return knownEnglish ? meridiemForDateTime(dt) : string({
                hour: "numeric",
                hourCycle: "h12"
            }, "dayperiod");
        }, month = function month(length, standalone) {
            return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
                month: length
            } : {
                month: length,
                day: "numeric"
            }, "month");
        }, weekday = function weekday(length, standalone) {
            return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
                weekday: length
            } : {
                weekday: length,
                month: "long",
                day: "numeric"
            }, "weekday");
        }, maybeMacro = function maybeMacro(token) {
            var formatOpts = Formatter.macroTokenToFormatOpts(token);
            if (formatOpts) return _this.formatWithSystemDefault(dt, formatOpts);
            else return token;
        }, era = function era(length) {
            return knownEnglish ? eraForDateTime(dt, length) : string({
                era: length
            }, "era");
        }, tokenToString = function tokenToString(token) {
            // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
            switch(token){
                // ms
                case "S":
                    return _this.num(dt.millisecond);
                case "u":
                case "SSS":
                    return _this.num(dt.millisecond, 3);
                // seconds
                case "s":
                    return _this.num(dt.second);
                case "ss":
                    return _this.num(dt.second, 2);
                // fractional seconds
                case "uu":
                    return _this.num(Math.floor(dt.millisecond / 10), 2);
                case "uuu":
                    return _this.num(Math.floor(dt.millisecond / 100));
                // minutes
                case "m":
                    return _this.num(dt.minute);
                case "mm":
                    return _this.num(dt.minute, 2);
                // hours
                case "h":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
                case "hh":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
                case "H":
                    return _this.num(dt.hour);
                case "HH":
                    return _this.num(dt.hour, 2);
                // offset
                case "Z":
                    // like +6
                    return formatOffset({
                        format: "narrow",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZ":
                    // like +06:00
                    return formatOffset({
                        format: "short",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZ":
                    // like +0600
                    return formatOffset({
                        format: "techie",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZZ":
                    // like EST
                    return dt.zone.offsetName(dt.ts, {
                        format: "short",
                        locale: _this.loc.locale
                    });
                case "ZZZZZ":
                    // like Eastern Standard Time
                    return dt.zone.offsetName(dt.ts, {
                        format: "long",
                        locale: _this.loc.locale
                    });
                // zone
                case "z":
                    // like America/New_York
                    return dt.zoneName;
                // meridiems
                case "a":
                    return meridiem();
                // dates
                case "d":
                    return useDateTimeFormatter ? string({
                        day: "numeric"
                    }, "day") : _this.num(dt.day);
                case "dd":
                    return useDateTimeFormatter ? string({
                        day: "2-digit"
                    }, "day") : _this.num(dt.day, 2);
                // weekdays - standalone
                case "c":
                    // like 1
                    return _this.num(dt.weekday);
                case "ccc":
                    // like 'Tues'
                    return weekday("short", true);
                case "cccc":
                    // like 'Tuesday'
                    return weekday("long", true);
                case "ccccc":
                    // like 'T'
                    return weekday("narrow", true);
                // weekdays - format
                case "E":
                    // like 1
                    return _this.num(dt.weekday);
                case "EEE":
                    // like 'Tues'
                    return weekday("short", false);
                case "EEEE":
                    // like 'Tuesday'
                    return weekday("long", false);
                case "EEEEE":
                    // like 'T'
                    return weekday("narrow", false);
                // months - standalone
                case "L":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric",
                        day: "numeric"
                    }, "month") : _this.num(dt.month);
                case "LL":
                    // like 01, doesn't seem to work
                    return useDateTimeFormatter ? string({
                        month: "2-digit",
                        day: "numeric"
                    }, "month") : _this.num(dt.month, 2);
                case "LLL":
                    // like Jan
                    return month("short", true);
                case "LLLL":
                    // like January
                    return month("long", true);
                case "LLLLL":
                    // like J
                    return month("narrow", true);
                // months - format
                case "M":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric"
                    }, "month") : _this.num(dt.month);
                case "MM":
                    // like 01
                    return useDateTimeFormatter ? string({
                        month: "2-digit"
                    }, "month") : _this.num(dt.month, 2);
                case "MMM":
                    // like Jan
                    return month("short", false);
                case "MMMM":
                    // like January
                    return month("long", false);
                case "MMMMM":
                    // like J
                    return month("narrow", false);
                // years
                case "y":
                    // like 2014
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year);
                case "yy":
                    // like 14
                    return useDateTimeFormatter ? string({
                        year: "2-digit"
                    }, "year") : _this.num(dt.year.toString().slice(-2), 2);
                case "yyyy":
                    // like 0012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 4);
                case "yyyyyy":
                    // like 000012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 6);
                // eras
                case "G":
                    // like AD
                    return era("short");
                case "GG":
                    // like Anno Domini
                    return era("long");
                case "GGGGG":
                    return era("narrow");
                case "kk":
                    return _this.num(dt.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return _this.num(dt.weekYear, 4);
                case "W":
                    return _this.num(dt.weekNumber);
                case "WW":
                    return _this.num(dt.weekNumber, 2);
                case "o":
                    return _this.num(dt.ordinal);
                case "ooo":
                    return _this.num(dt.ordinal, 3);
                case "q":
                    // like 1
                    return _this.num(dt.quarter);
                case "qq":
                    // like 01
                    return _this.num(dt.quarter, 2);
                case "X":
                    return _this.num(Math.floor(dt.ts / 1000));
                case "x":
                    return _this.num(dt.ts);
                default:
                    return maybeMacro(token);
            }
        };
        return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    };
    _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
        var _this2 = this;
        var tokenToField = function tokenToField(token) {
            switch(token[0]){
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                    return "hour";
                case "d":
                    return "day";
                case "w":
                    return "week";
                case "M":
                    return "month";
                case "y":
                    return "year";
                default:
                    return null;
            }
        }, tokenToString = function tokenToString(lildur) {
            return function(token) {
                var mapped = tokenToField(token);
                if (mapped) return _this2.num(lildur.get(mapped), token.length);
                else return token;
            };
        }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal = _ref.literal, val = _ref.val;
            return literal ? found : found.concat(val);
        }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t) {
            return t;
        }));
        return stringifyTokens(tokens, tokenToString(collapsed));
    };
    return Formatter;
}();
var Invalid = /*#__PURE__*/ function() {
    function Invalid(reason, explanation) {
        this.reason = reason;
        this.explanation = explanation;
    }
    var _proto = Invalid.prototype;
    _proto.toMessage = function toMessage() {
        if (this.explanation) return this.reason + ": " + this.explanation;
        else return this.reason;
    };
    return Invalid;
}();
/**
 * @interface
 */ var Zone = /*#__PURE__*/ function() {
    function Zone() {}
    var _proto = Zone.prototype;
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ _proto.offsetName = function offsetName(ts, opts) {
        throw new ZoneIsAbstractError();
    } /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */ ;
    _proto.formatOffset = function formatOffset(ts, format) {
        throw new ZoneIsAbstractError();
    } /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */ ;
    _proto.offset = function offset(ts) {
        throw new ZoneIsAbstractError();
    } /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */ ;
    _proto.equals = function equals(otherZone) {
        throw new ZoneIsAbstractError();
    } /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */ ;
    _createClass(Zone, [
        {
            key: "type",
            get: /**
     * The type of zone
     * @abstract
     * @type {string}
     */ function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "name",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "ianaName",
            get: function get() {
                return this.name;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "isValid",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        }
    ]);
    return Zone;
}();
var singleton$1 = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */ var SystemZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(SystemZone, _Zone);
    function SystemZone() {
        return _Zone.apply(this, arguments) || this;
    }
    var _proto = SystemZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return parseZoneInfo(ts, format, locale);
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.offset(ts), format);
    } /** @override **/ ;
    _proto.offset = function offset(ts) {
        return -new Date(ts).getTimezoneOffset();
    } /** @override **/ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "system";
    } /** @override **/ ;
    _createClass(SystemZone, [
        {
            key: "type",
            get: /** @override **/ function get() {
                return "system";
            }
        },
        {
            key: "name",
            get: function get() {
                return new Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ], [
        {
            key: "instance",
            get: /**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */ function get() {
                if (singleton$1 === null) singleton$1 = new SystemZone();
                return singleton$1;
            }
        }
    ]);
    return SystemZone;
}(Zone);
var dtfCache = {};
function makeDTF(zone) {
    if (!dtfCache[zone]) dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
    });
    return dtfCache[zone];
}
var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
};
function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fadOrBc = parsed[4], fHour = parsed[5], fMinute = parsed[6], fSecond = parsed[7];
    return [
        fYear,
        fMonth,
        fDay,
        fadOrBc,
        fHour,
        fMinute,
        fSecond
    ];
}
function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for(var i = 0; i < formatted.length; i++){
        var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value;
        var pos = typeToPos[type];
        if (type === "era") filled[pos] = value;
        else if (!isUndefined(pos)) filled[pos] = parseInt(value, 10);
    }
    return filled;
}
var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */ var IANAZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(IANAZone, _Zone);
    /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */ IANAZone.create = function create(name) {
        if (!ianaZoneCache[name]) ianaZoneCache[name] = new IANAZone(name);
        return ianaZoneCache[name];
    } /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ ;
    IANAZone.resetCache = function resetCache() {
        ianaZoneCache = {};
        dtfCache = {};
    } /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */ ;
    IANAZone.isValidSpecifier = function isValidSpecifier(s) {
        return this.isValidZone(s);
    } /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */ ;
    IANAZone.isValidZone = function isValidZone(zone) {
        if (!zone) return false;
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: zone
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    };
    function IANAZone(name) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.zoneName = name;
        /** @private **/ _this.valid = IANAZone.isValidZone(name);
        return _this;
    }
    /** @override **/ var _proto = IANAZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return parseZoneInfo(ts, format, locale, this.name);
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.offset(ts), format);
    } /** @override **/ ;
    _proto.offset = function offset(ts) {
        var date = new Date(ts);
        if (isNaN(date)) return NaN;
        var dtf = makeDTF(this.name);
        var _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], adOrBc = _ref2[3], hour = _ref2[4], minute = _ref2[5], second = _ref2[6];
        if (adOrBc === "BC") year = -Math.abs(year) + 1;
         // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
        var adjustedHour = hour === 24 ? 0 : hour;
        var asUTC = objToLocalTS({
            year: year,
            month: month,
            day: day,
            hour: adjustedHour,
            minute: minute,
            second: second,
            millisecond: 0
        });
        var asTS = +date;
        var over = asTS % 1000;
        asTS -= over >= 0 ? over : 1000 + over;
        return (asUTC - asTS) / 60000;
    } /** @override **/ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
    } /** @override **/ ;
    _createClass(IANAZone, [
        {
            key: "type",
            get: function get() {
                return "iana";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.valid;
            }
        }
    ]);
    return IANAZone;
}(Zone);
var singleton = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */ var FixedOffsetZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(FixedOffsetZone, _Zone);
    /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */ FixedOffsetZone.instance = function instance(offset) {
        return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    } /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */ ;
    FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
        if (s) {
            var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) return new FixedOffsetZone(signedOffset(r[1], r[2]));
        }
        return null;
    };
    function FixedOffsetZone(offset) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.fixed = offset;
        return _this;
    }
    /** @override **/ var _proto = FixedOffsetZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName() {
        return this.name;
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.fixed, format);
    } /** @override **/ ;
    /** @override **/ _proto.offset = function offset() {
        return this.fixed;
    } /** @override **/ ;
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    } /** @override **/ ;
    _createClass(FixedOffsetZone, [
        {
            key: "type",
            get: function get() {
                return "fixed";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
            }
        },
        {
            key: "ianaName",
            get: function get() {
                if (this.fixed === 0) return "Etc/UTC";
                else return "Etc/GMT" + formatOffset(-this.fixed, "narrow");
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return true;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ], [
        {
            key: "utcInstance",
            get: /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */ function get() {
                if (singleton === null) singleton = new FixedOffsetZone(0);
                return singleton;
            }
        }
    ]);
    return FixedOffsetZone;
}(Zone);
/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */ var InvalidZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(InvalidZone, _Zone);
    function InvalidZone(zoneName) {
        var _this;
        _this = _Zone.call(this) || this;
        /**  @private */ _this.zoneName = zoneName;
        return _this;
    }
    /** @override **/ var _proto = InvalidZone.prototype;
    /** @override **/ _proto.offsetName = function offsetName() {
        return null;
    } /** @override **/ ;
    _proto.formatOffset = function formatOffset() {
        return "";
    } /** @override **/ ;
    _proto.offset = function offset() {
        return NaN;
    } /** @override **/ ;
    _proto.equals = function equals() {
        return false;
    } /** @override **/ ;
    _createClass(InvalidZone, [
        {
            key: "type",
            get: function get() {
                return "invalid";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "isUniversal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return false;
            }
        }
    ]);
    return InvalidZone;
}(Zone);
/**
 * @private
 */ function normalizeZone(input, defaultZone) {
    if (isUndefined(input) || input === null) return defaultZone;
    else if (input instanceof Zone) return input;
    else if (isString(input)) {
        var lowered = input.toLowerCase();
        if (lowered === "default") return defaultZone;
        else if (lowered === "local" || lowered === "system") return SystemZone.instance;
        else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
        else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
    } else if (isNumber(input)) return FixedOffsetZone.instance(input);
    else if (typeof input === "object" && input.offset && typeof input.offset === "number") // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
    else return new InvalidZone(input);
}
var now = function now() {
    return Date.now();
}, defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */ var Settings = /*#__PURE__*/ function() {
    function Settings() {}
    /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ Settings.resetCaches = function resetCaches() {
        Locale.resetCache();
        IANAZone.resetCache();
    };
    _createClass(Settings, null, [
        {
            key: "now",
            get: /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */ function get() {
                return now;
            },
            set: function set(n) {
                now = n;
            }
        },
        {
            key: "defaultZone",
            get: /**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */ function get() {
                return normalizeZone(defaultZone, SystemZone.instance);
            },
            set: function set(zone) {
                defaultZone = zone;
            }
        },
        {
            key: "defaultLocale",
            get: function get() {
                return defaultLocale;
            },
            set: function set(locale) {
                defaultLocale = locale;
            }
        },
        {
            key: "defaultNumberingSystem",
            get: function get() {
                return defaultNumberingSystem;
            },
            set: function set(numberingSystem) {
                defaultNumberingSystem = numberingSystem;
            }
        },
        {
            key: "defaultOutputCalendar",
            get: function get() {
                return defaultOutputCalendar;
            },
            set: function set(outputCalendar) {
                defaultOutputCalendar = outputCalendar;
            }
        },
        {
            key: "throwOnInvalid",
            get: function get() {
                return throwOnInvalid;
            },
            set: function set(t) {
                throwOnInvalid = t;
            }
        }
    ]);
    return Settings;
}();
var _excluded = [
    "base"
], _excluded2 = [
    "padTo",
    "floor"
];
var intlLFCache = {};
function getCachedLF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var dtf = intlLFCache[key];
    if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        intlLFCache[key] = dtf;
    }
    return dtf;
}
var intlDTCache = {};
function getCachedDTF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var dtf = intlDTCache[key];
    if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache[key] = dtf;
    }
    return dtf;
}
var intlNumCache = {};
function getCachedINF(locString, opts) {
    if (opts === void 0) opts = {};
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var inf = intlNumCache[key];
    if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache[key] = inf;
    }
    return inf;
}
var intlRelCache = {};
function getCachedRTF(locString, opts) {
    if (opts === void 0) opts = {};
    var _opts = opts;
    _opts.base;
    var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded); // exclude `base` from the options
    var key = JSON.stringify([
        locString,
        cacheKeyOpts
    ]);
    var inf = intlRelCache[key];
    if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache[key] = inf;
    }
    return inf;
}
var sysLocaleCache = null;
function systemLocale() {
    if (sysLocaleCache) return sysLocaleCache;
    else {
        sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
        return sysLocaleCache;
    }
}
function parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    var uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) return [
        localeStr
    ];
    else {
        var options;
        var smaller = localeStr.substring(0, uIndex);
        try {
            options = getCachedDTF(localeStr).resolvedOptions();
        } catch (e) {
            options = getCachedDTF(smaller).resolvedOptions();
        }
        var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it
        return [
            smaller,
            numberingSystem,
            calendar
        ];
    }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
        localeStr += "-u";
        if (outputCalendar) localeStr += "-ca-" + outputCalendar;
        if (numberingSystem) localeStr += "-nu-" + numberingSystem;
        return localeStr;
    } else return localeStr;
}
function mapMonths(f) {
    var ms = [];
    for(var i = 1; i <= 12; i++){
        var dt = DateTime.utc(2016, i, 1);
        ms.push(f(dt));
    }
    return ms;
}
function mapWeekdays(f) {
    var ms = [];
    for(var i = 1; i <= 7; i++){
        var dt = DateTime.utc(2016, 11, 13 + i);
        ms.push(f(dt));
    }
    return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
    var mode = loc.listingMode(defaultOK);
    if (mode === "error") return null;
    else if (mode === "en") return englishFn(length);
    else return intlFn(length);
}
function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") return false;
    else return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
}
/**
 * @private
 */ var PolyNumberFormatter = /*#__PURE__*/ function() {
    function PolyNumberFormatter(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        opts.padTo;
        opts.floor;
        var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2);
        if (!forceSimple || Object.keys(otherOpts).length > 0) {
            var intlOpts = _extends({
                useGrouping: false
            }, opts);
            if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
        }
    }
    var _proto = PolyNumberFormatter.prototype;
    _proto.format = function format(i) {
        if (this.inf) {
            var fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
        } else {
            // to match the browser's numberformatter defaults
            var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(_fixed, this.padTo);
        }
    };
    return PolyNumberFormatter;
}();
/**
 * @private
 */ var PolyDateFormatter = /*#__PURE__*/ function() {
    function PolyDateFormatter(dt, intl, opts) {
        this.opts = opts;
        var z;
        if (dt.zone.isUniversal) {
            // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
            // That is why fixed-offset TZ is set to that unless it is:
            // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
            // 2. Unsupported by the browser:
            //    - some do not support Etc/
            //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
                z = offsetZ;
                this.dt = dt;
            } else {
                // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
                // So we have to make do. Two cases:
                // 1. The format options tell us to show the zone. We can't do that, so the best
                // we can do is format the date in UTC.
                // 2. The format options don't tell us to show the zone. Then we can adjust them
                // the time and tell the formatter to show it to us in UTC, so that the time is right
                // and the bad zone doesn't show up.
                z = "UTC";
                if (opts.timeZoneName) this.dt = dt;
                else this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60000);
            }
        } else if (dt.zone.type === "system") this.dt = dt;
        else {
            this.dt = dt;
            z = dt.zone.name;
        }
        var intlOpts = _extends({}, this.opts);
        if (z) intlOpts.timeZone = z;
        this.dtf = getCachedDTF(intl, intlOpts);
    }
    var _proto2 = PolyDateFormatter.prototype;
    _proto2.format = function format() {
        return this.dtf.format(this.dt.toJSDate());
    };
    _proto2.formatToParts = function formatToParts() {
        return this.dtf.formatToParts(this.dt.toJSDate());
    };
    _proto2.resolvedOptions = function resolvedOptions() {
        return this.dtf.resolvedOptions();
    };
    return PolyDateFormatter;
}();
/**
 * @private
 */ var PolyRelFormatter = /*#__PURE__*/ function() {
    function PolyRelFormatter(intl, isEnglish, opts) {
        this.opts = _extends({
            style: "long"
        }, opts);
        if (!isEnglish && hasRelative()) this.rtf = getCachedRTF(intl, opts);
    }
    var _proto3 = PolyRelFormatter.prototype;
    _proto3.format = function format(count, unit) {
        if (this.rtf) return this.rtf.format(count, unit);
        else return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    };
    _proto3.formatToParts = function formatToParts(count, unit) {
        if (this.rtf) return this.rtf.formatToParts(count, unit);
        else return [];
    };
    return PolyRelFormatter;
}();
/**
 * @private
 */ var Locale = /*#__PURE__*/ function() {
    Locale.fromOpts = function fromOpts(opts) {
        return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    };
    Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
        if (defaultToEN === void 0) defaultToEN = false;
        var specifiedLocale = locale || Settings.defaultLocale; // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
        var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
        var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
        var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
        return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    };
    Locale.resetCache = function resetCache() {
        sysLocaleCache = null;
        intlDTCache = {};
        intlNumCache = {};
        intlRelCache = {};
    };
    Locale.fromObject = function fromObject(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
        return Locale.create(locale, numberingSystem, outputCalendar);
    };
    function Locale(locale, numbering, outputCalendar, specifiedLocale) {
        var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = {
            format: {},
            standalone: {}
        };
        this.monthsCache = {
            format: {},
            standalone: {}
        };
        this.meridiemCache = null;
        this.eraCache = {};
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
    }
    var _proto4 = Locale.prototype;
    _proto4.listingMode = function listingMode() {
        var isActuallyEn = this.isEnglish();
        var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    };
    _proto4.clone = function clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) return this;
        else return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    };
    _proto4.redefaultToEN = function redefaultToEN(alts) {
        if (alts === void 0) alts = {};
        return this.clone(_extends({}, alts, {
            defaultToEN: true
        }));
    };
    _proto4.redefaultToSystem = function redefaultToSystem(alts) {
        if (alts === void 0) alts = {};
        return this.clone(_extends({}, alts, {
            defaultToEN: false
        }));
    };
    _proto4.months = function months$1(length, format, defaultOK) {
        var _this = this;
        if (format === void 0) format = false;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, months, function() {
            var intl = format ? {
                month: length,
                day: "numeric"
            } : {
                month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this.monthsCache[formatStr][length]) _this.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this.extract(dt, intl, "month");
            });
            return _this.monthsCache[formatStr][length];
        });
    };
    _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
        var _this2 = this;
        if (format === void 0) format = false;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, weekdays, function() {
            var intl = format ? {
                weekday: length,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.weekdaysCache[formatStr][length]) _this2.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this2.extract(dt, intl, "weekday");
            });
            return _this2.weekdaysCache[formatStr][length];
        });
    };
    _proto4.meridiems = function meridiems$1(defaultOK) {
        var _this3 = this;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, undefined, defaultOK, function() {
            return meridiems;
        }, function() {
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!_this3.meridiemCache) {
                var intl = {
                    hour: "numeric",
                    hourCycle: "h12"
                };
                _this3.meridiemCache = [
                    DateTime.utc(2016, 11, 13, 9),
                    DateTime.utc(2016, 11, 13, 19)
                ].map(function(dt) {
                    return _this3.extract(dt, intl, "dayperiod");
                });
            }
            return _this3.meridiemCache;
        });
    };
    _proto4.eras = function eras$1(length, defaultOK) {
        var _this4 = this;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, eras, function() {
            var intl = {
                era: length
            }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
            // to definitely enumerate them.
            if (!_this4.eraCache[length]) _this4.eraCache[length] = [
                DateTime.utc(-40, 1, 1),
                DateTime.utc(2017, 1, 1)
            ].map(function(dt) {
                return _this4.extract(dt, intl, "era");
            });
            return _this4.eraCache[length];
        });
    };
    _proto4.extract = function extract(dt, intlOpts, field) {
        var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m) {
            return m.type.toLowerCase() === field;
        });
        return matching ? matching.value : null;
    };
    _proto4.numberFormatter = function numberFormatter(opts) {
        if (opts === void 0) opts = {};
        // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
        // (in contrast, the rest of the condition is used heavily)
        return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    };
    _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
        if (intlOpts === void 0) intlOpts = {};
        return new PolyDateFormatter(dt, this.intl, intlOpts);
    };
    _proto4.relFormatter = function relFormatter(opts) {
        if (opts === void 0) opts = {};
        return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    };
    _proto4.listFormatter = function listFormatter(opts) {
        if (opts === void 0) opts = {};
        return getCachedLF(this.intl, opts);
    };
    _proto4.isEnglish = function isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    };
    _proto4.equals = function equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    };
    _createClass(Locale, [
        {
            key: "fastNumbers",
            get: function get() {
                if (this.fastNumbersCached == null) this.fastNumbersCached = supportsFastNumbers(this);
                return this.fastNumbersCached;
            }
        }
    ]);
    return Locale;
}();
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */ function combineRegexes() {
    for(var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++)regexes[_key] = arguments[_key];
    var full = regexes.reduce(function(f, r) {
        return f + r.source;
    }, "");
    return RegExp("^" + full + "$");
}
function combineExtractors() {
    for(var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)extractors[_key2] = arguments[_key2];
    return function(m) {
        return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [
                _extends({}, mergedVals, val),
                zone || mergedZone,
                next
            ];
        }, [
            {},
            null,
            1
        ]).slice(0, 2);
    };
}
function parse(s) {
    if (s == null) return [
        null,
        null
    ];
    for(var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)patterns[_key3 - 1] = arguments[_key3];
    for(var _i = 0, _patterns = patterns; _i < _patterns.length; _i++){
        var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
        var m = regex.exec(s);
        if (m) return extractor(m);
    }
    return [
        null,
        null
    ];
}
function simpleParse() {
    for(var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)keys[_key4] = arguments[_key4];
    return function(match, cursor) {
        var ret = {};
        var i;
        for(i = 0; i < keys.length; i++)ret[keys[i]] = parseInteger(match[cursor + i]);
        return [
            ret,
            null,
            cursor + i
        ];
    };
} // ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var isoExtendedZone = "(?:" + offsetRegex.source + "?(?:\\[(" + ianaRegex.source + ")\\])?)?";
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + isoExtendedZone);
var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
function int(match, pos, fallback) {
    var m = match[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match, cursor) {
    var item = {
        year: int(match, cursor),
        month: int(match, cursor + 1, 1),
        day: int(match, cursor + 2, 1)
    };
    return [
        item,
        null,
        cursor + 3
    ];
}
function extractISOTime(match, cursor) {
    var item = {
        hours: int(match, cursor, 0),
        minutes: int(match, cursor + 1, 0),
        seconds: int(match, cursor + 2, 0),
        milliseconds: parseMillis(match[cursor + 3])
    };
    return [
        item,
        null,
        cursor + 4
    ];
}
function extractISOOffset(match, cursor) {
    var local = !match[cursor] && !match[cursor + 1], fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [
        {},
        zone,
        cursor + 3
    ];
}
function extractIANAZone(match, cursor) {
    var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
    return [
        {},
        zone,
        cursor + 1
    ];
} // ISO time parsing
var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing
var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match) {
    var s = match[0], yearStr = match[1], monthStr = match[2], weekStr = match[3], dayStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], millisecondsStr = match[8];
    var hasNegativePrefix = s[0] === "-";
    var negativeSeconds = secondStr && secondStr[0] === "-";
    var maybeNegate = function maybeNegate(num, force) {
        if (force === void 0) force = false;
        return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
    };
    return [
        {
            years: maybeNegate(parseFloating(yearStr)),
            months: maybeNegate(parseFloating(monthStr)),
            weeks: maybeNegate(parseFloating(weekStr)),
            days: maybeNegate(parseFloating(dayStr)),
            hours: maybeNegate(parseFloating(hourStr)),
            minutes: maybeNegate(parseFloating(minuteStr)),
            seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
            milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }
    ];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = {
        year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
        month: monthsShort.indexOf(monthStr) + 1,
        day: parseInteger(dayStr),
        hour: parseInteger(hourStr),
        minute: parseInteger(minuteStr)
    };
    if (secondStr) result.second = parseInteger(secondStr);
    if (weekdayStr) result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    return result;
} // RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], obsOffset = match[8], milOffset = match[9], offHourStr = match[10], offMinuteStr = match[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    var offset;
    if (obsOffset) offset = obsOffsets[obsOffset];
    else if (milOffset) offset = 0;
    else offset = signedOffset(offHourStr, offMinuteStr);
    return [
        result,
        new FixedOffsetZone(offset)
    ];
}
function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date
var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
function extractASCII(match) {
    var weekdayStr = match[1], monthStr = match[2], dayStr = match[3], hourStr = match[4], minuteStr = match[5], secondStr = match[6], yearStr = match[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
/*
 * @private
 */ function parseISODate(s) {
    return parse(s, [
        isoYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        isoWeekWithTimeExtensionRegex,
        extractISOWeekTimeAndOffset
    ], [
        isoOrdinalWithTimeExtensionRegex,
        extractISOOrdinalDateAndTime
    ], [
        isoTimeCombinedRegex,
        extractISOTimeAndOffset
    ]);
}
function parseRFC2822Date(s) {
    return parse(preprocessRFC2822(s), [
        rfc2822,
        extractRFC2822
    ]);
}
function parseHTTPDate(s) {
    return parse(s, [
        rfc1123,
        extractRFC1123Or850
    ], [
        rfc850,
        extractRFC1123Or850
    ], [
        ascii,
        extractASCII
    ]);
}
function parseISODuration(s) {
    return parse(s, [
        isoDuration,
        extractISODuration
    ]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
    return parse(s, [
        isoTimeOnly,
        extractISOTimeOnly
    ]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
    return parse(s, [
        sqlYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        sqlTimeCombinedRegex,
        extractISOTimeOffsetAndIANAZone
    ]);
}
var INVALID$2 = "Invalid Duration"; // unit conversion constants
var lowOrderMatrix = {
    weeks: {
        days: 7,
        hours: 168,
        minutes: 10080,
        seconds: 604800,
        milliseconds: 604800000
    },
    days: {
        hours: 24,
        minutes: 1440,
        seconds: 86400,
        milliseconds: 86400000
    },
    hours: {
        minutes: 60,
        seconds: 3600,
        milliseconds: 3600000
    },
    minutes: {
        seconds: 60,
        milliseconds: 60000
    },
    seconds: {
        milliseconds: 1000
    }
}, casualMatrix = _extends({
    years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536000,
        milliseconds: 31536000000
    },
    quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 7862400000
    },
    months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592000,
        milliseconds: 2592000000
    }
}, lowOrderMatrix), daysInYearAccurate = 365.2425, daysInMonthAccurate = 30.436875, accurateMatrix = _extends({
    years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate / 7,
        days: daysInYearAccurate,
        hours: daysInYearAccurate * 24,
        minutes: daysInYearAccurate * 1440,
        seconds: daysInYearAccurate * 86400,
        milliseconds: daysInYearAccurate * 86400000
    },
    quarters: {
        months: 3,
        weeks: daysInYearAccurate / 28,
        days: daysInYearAccurate / 4,
        hours: daysInYearAccurate * 24 / 4,
        minutes: daysInYearAccurate * 1440 / 4,
        seconds: daysInYearAccurate * 86400 / 4,
        milliseconds: daysInYearAccurate * 86400000 / 4
    },
    months: {
        weeks: daysInMonthAccurate / 7,
        days: daysInMonthAccurate,
        hours: daysInMonthAccurate * 24,
        minutes: daysInMonthAccurate * 1440,
        seconds: daysInMonthAccurate * 86400,
        milliseconds: daysInMonthAccurate * 86400000
    }
}, lowOrderMatrix); // units ordered by size
var orderedUnits$1 = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
];
var reverseUnits = orderedUnits$1.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"
function clone$1(dur, alts, clear) {
    if (clear === void 0) clear = false;
    // deep merge for vals
    var conf = {
        values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
        matrix: alts.matrix || dur.matrix
    };
    return new Duration(conf);
}
function antiTrunc(n) {
    return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
    var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), // ok, so this is wild, but see the matrix in the tests
    added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
    toMap[toUnit] += added;
    fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters
function normalizeValues(matrix, vals) {
    reverseUnits.reduce(function(previous, current) {
        if (!isUndefined(vals[current])) {
            if (previous) convert(matrix, vals, previous, vals, current);
            return current;
        } else return previous;
    }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */ var Duration = /*#__PURE__*/ function() {
    /**
   * @private
   */ function Duration(config) {
        var accurate = config.conversionAccuracy === "longterm" || false;
        var matrix = accurate ? accurateMatrix : casualMatrix;
        if (config.matrix) matrix = config.matrix;
        /**
     * @access private
     */ this.values = config.values;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.conversionAccuracy = accurate ? "longterm" : "casual";
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.matrix = matrix;
        /**
     * @access private
     */ this.isLuxonDuration = true;
    }
    /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ Duration.fromMillis = function fromMillis(count, opts) {
        return Duration.fromObject({
            milliseconds: count
        }, opts);
    } /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */ ;
    Duration.fromObject = function fromObject(obj, opts) {
        if (opts === void 0) opts = {};
        if (obj == null || typeof obj !== "object") throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
        return new Duration({
            values: normalizeObject(obj, Duration.normalizeUnit),
            loc: Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy,
            matrix: opts.matrix
        });
    } /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */ ;
    Duration.fromDurationLike = function fromDurationLike(durationLike) {
        if (isNumber(durationLike)) return Duration.fromMillis(durationLike);
        else if (Duration.isDuration(durationLike)) return durationLike;
        else if (typeof durationLike === "object") return Duration.fromObject(durationLike);
        else throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
    } /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */ ;
    Duration.fromISO = function fromISO(text, opts) {
        var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    } /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */ ;
    Duration.fromISOTime = function fromISOTime(text, opts) {
        var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
        if (parsed) return Duration.fromObject(parsed, opts);
        else return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    } /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */ ;
    Duration.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidDurationError(invalid);
        else return new Duration({
            invalid: invalid
        });
    } /**
   * @private
   */ ;
    Duration.normalizeUnit = function normalizeUnit(unit) {
        var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized) throw new InvalidUnitError(unit);
        return normalized;
    } /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    Duration.isDuration = function isDuration(o) {
        return o && o.isLuxonDuration || false;
    } /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */ ;
    var _proto = Duration.prototype;
    /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */ _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {};
        // reverse-compat since 1.2; we always round down now, never up, and we do it by default
        var fmtOpts = _extends({}, opts, {
            floor: opts.round !== false && opts.floor !== false
        });
        return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
    } /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */ ;
    _proto.toHuman = function toHuman(opts) {
        var _this = this;
        if (opts === void 0) opts = {};
        var l = orderedUnits$1.map(function(unit) {
            var val = _this.values[unit];
            if (isUndefined(val)) return null;
            return _this.loc.numberFormatter(_extends({
                style: "unit",
                unitDisplay: "long"
            }, opts, {
                unit: unit.slice(0, -1)
            })).format(val);
        }).filter(function(n) {
            return n;
        });
        return this.loc.listFormatter(_extends({
            type: "conjunction",
            style: opts.listStyle || "narrow"
        }, opts)).format(l);
    } /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */ ;
    _proto.toObject = function toObject() {
        if (!this.isValid) return {};
        return _extends({}, this.values);
    } /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */ ;
    _proto.toISO = function toISO() {
        // we could use the formatter, but this is an easier way to get the minimum string
        if (!this.isValid) return null;
        var s = "P";
        if (this.years !== 0) s += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0) s += this.weeks + "W";
        if (this.days !== 0) s += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
        if (this.hours !== 0) s += this.hours + "H";
        if (this.minutes !== 0) s += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0) // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
        if (s === "P") s += "T0S";
        return s;
    } /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return null;
        var millis = this.toMillis();
        if (millis < 0 || millis >= 86400000) return null;
        opts = _extends({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
        }, opts);
        var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
        var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
        if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) fmt += ".SSS";
        }
        var str = value.toFormat(fmt);
        if (opts.includePrefix) str = "T" + str;
        return str;
    } /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */ ;
    _proto.toJSON = function toJSON() {
        return this.toISO();
    } /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        return this.toISO();
    } /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */ ;
    _proto.toMillis = function toMillis() {
        return this.as("milliseconds");
    } /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */ ;
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    } /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ ;
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration), result = {};
        for(var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;){
            var k = _step.value;
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) result[k] = dur.get(k) + this.get(k);
        }
        return clone$1(this, {
            values: result
        }, true);
    } /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration);
        return this.plus(dur.negate());
    } /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */ ;
    _proto.mapUnits = function mapUnits(fn) {
        if (!this.isValid) return this;
        var result = {};
        for(var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++){
            var k = _Object$keys[_i];
            result[k] = asNumber(fn(this.values[k], k));
        }
        return clone$1(this, {
            values: result
        }, true);
    } /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */ ;
    _proto.get = function get(unit) {
        return this[Duration.normalizeUnit(unit)];
    } /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */ ;
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var mixed = _extends({}, this.values, normalizeObject(values, Duration.normalizeUnit));
        return clone$1(this, {
            values: mixed
        });
    } /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */ ;
    _proto.reconfigure = function reconfigure(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy, matrix = _ref.matrix;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem
        });
        var opts = {
            loc: loc,
            matrix: matrix,
            conversionAccuracy: conversionAccuracy
        };
        return clone$1(this, opts);
    } /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */ ;
    _proto.as = function as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    } /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */ ;
    _proto.normalize = function normalize() {
        if (!this.isValid) return this;
        var vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone$1(this, {
            values: vals
        }, true);
    } /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */ ;
    _proto.shiftTo = function shiftTo() {
        for(var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++)units[_key] = arguments[_key];
        if (!this.isValid) return this;
        if (units.length === 0) return this;
        units = units.map(function(u) {
            return Duration.normalizeUnit(u);
        });
        var built = {}, accumulated = {}, vals = this.toObject();
        var lastUnit;
        for(var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits$1), _step2; !(_step2 = _iterator2()).done;){
            var k = _step2.value;
            if (units.indexOf(k) >= 0) {
                lastUnit = k;
                var own = 0; // anything we haven't boiled down yet should get boiled to this unit
                for(var ak in accumulated){
                    own += this.matrix[ak][k] * accumulated[ak];
                    accumulated[ak] = 0;
                } // plus anything that's already in this unit
                if (isNumber(vals[k])) own += vals[k];
                var i = Math.trunc(own);
                built[k] = i;
                accumulated[k] = (own * 1000 - i * 1000) / 1000; // plus anything further down the chain that should be rolled up in to this
                for(var down in vals)if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) convert(this.matrix, vals, down, built, k);
                 // otherwise, keep it in the wings to boil it later
            } else if (isNumber(vals[k])) accumulated[k] = vals[k];
        } // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for(var key in accumulated)if (accumulated[key] !== 0) built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        return clone$1(this, {
            values: built
        }, true).normalize();
    } /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */ ;
    _proto.negate = function negate() {
        if (!this.isValid) return this;
        var negated = {};
        for(var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++){
            var k = _Object$keys2[_i2];
            negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
        }
        return clone$1(this, {
            values: negated
        }, true);
    } /**
   * Get the years.
   * @type {number}
   */ ;
    /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */ _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        if (!this.loc.equals(other.loc)) return false;
        function eq(v1, v2) {
            // Consider 0 and undefined as equal
            if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
            return v1 === v2;
        }
        for(var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits$1), _step3; !(_step3 = _iterator3()).done;){
            var u = _step3.value;
            if (!eq(this.values[u], other.values[u])) return false;
        }
        return true;
    };
    _createClass(Duration, [
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "years",
            get: function get() {
                return this.isValid ? this.values.years || 0 : NaN;
            }
        },
        {
            key: "quarters",
            get: function get() {
                return this.isValid ? this.values.quarters || 0 : NaN;
            }
        },
        {
            key: "months",
            get: function get() {
                return this.isValid ? this.values.months || 0 : NaN;
            }
        },
        {
            key: "weeks",
            get: function get() {
                return this.isValid ? this.values.weeks || 0 : NaN;
            }
        },
        {
            key: "days",
            get: function get() {
                return this.isValid ? this.values.days || 0 : NaN;
            }
        },
        {
            key: "hours",
            get: function get() {
                return this.isValid ? this.values.hours || 0 : NaN;
            }
        },
        {
            key: "minutes",
            get: function get() {
                return this.isValid ? this.values.minutes || 0 : NaN;
            }
        },
        {
            key: "seconds",
            get: function get() {
                return this.isValid ? this.values.seconds || 0 : NaN;
            }
        },
        {
            key: "milliseconds",
            get: function get() {
                return this.isValid ? this.values.milliseconds || 0 : NaN;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Duration;
}();
var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end
function validateStartEnd(start, end) {
    if (!start || !start.isValid) return Interval.invalid("missing or invalid start");
    else if (!end || !end.isValid) return Interval.invalid("missing or invalid end");
    else if (end < start) return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
    else return null;
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
 * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
 * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
 * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
 */ var Interval = /*#__PURE__*/ function() {
    /**
   * @private
   */ function Interval(config) {
        /**
     * @access private
     */ this.s = config.start;
        /**
     * @access private
     */ this.e = config.end;
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.isLuxonInterval = true;
    }
    /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */ Interval.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidIntervalError(invalid);
        else return new Interval({
            invalid: invalid
        });
    } /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */ ;
    Interval.fromDateTimes = function fromDateTimes(start, end) {
        var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
        var validateError = validateStartEnd(builtStart, builtEnd);
        if (validateError == null) return new Interval({
            start: builtStart,
            end: builtEnd
        });
        else return validateError;
    } /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ ;
    Interval.after = function after(start, duration) {
        var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
    } /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */ ;
    Interval.before = function before(end, duration) {
        var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
    } /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */ ;
    Interval.fromISO = function fromISO(text, opts) {
        var _split = (text || "").split("/", 2), s = _split[0], e = _split[1];
        if (s && e) {
            var start, startIsValid;
            try {
                start = DateTime.fromISO(s, opts);
                startIsValid = start.isValid;
            } catch (e1) {
                startIsValid = false;
            }
            var end, endIsValid;
            try {
                end = DateTime.fromISO(e, opts);
                endIsValid = end.isValid;
            } catch (e2) {
                endIsValid = false;
            }
            if (startIsValid && endIsValid) return Interval.fromDateTimes(start, end);
            if (startIsValid) {
                var dur = Duration.fromISO(e, opts);
                if (dur.isValid) return Interval.after(start, dur);
            } else if (endIsValid) {
                var _dur = Duration.fromISO(s, opts);
                if (_dur.isValid) return Interval.before(end, _dur);
            }
        }
        return Interval.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    } /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    Interval.isInterval = function isInterval(o) {
        return o && o.isLuxonInterval || false;
    } /**
   * Returns the start of the Interval
   * @type {DateTime}
   */ ;
    var _proto = Interval.prototype;
    /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */ _proto.length = function length(unit) {
        if (unit === void 0) unit = "milliseconds";
        return this.isValid ? this.toDuration.apply(this, [
            unit
        ]).get(unit) : NaN;
    } /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */ ;
    _proto.count = function count(unit) {
        if (unit === void 0) unit = "milliseconds";
        if (!this.isValid) return NaN;
        var start = this.start.startOf(unit), end = this.end.startOf(unit);
        return Math.floor(end.diff(start, unit).get(unit)) + 1;
    } /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */ ;
    _proto.hasSame = function hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    } /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */ ;
    _proto.isEmpty = function isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    } /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.isAfter = function isAfter(dateTime) {
        if (!this.isValid) return false;
        return this.s > dateTime;
    } /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.isBefore = function isBefore(dateTime) {
        if (!this.isValid) return false;
        return this.e <= dateTime;
    } /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */ ;
    _proto.contains = function contains(dateTime) {
        if (!this.isValid) return false;
        return this.s <= dateTime && this.e > dateTime;
    } /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */ ;
    _proto.set = function set(_temp) {
        var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
        if (!this.isValid) return this;
        return Interval.fromDateTimes(start || this.s, end || this.e);
    } /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */ ;
    _proto.splitAt = function splitAt() {
        var _this = this;
        if (!this.isValid) return [];
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        var sorted = dateTimes.map(friendlyDateTime).filter(function(d) {
            return _this.contains(d);
        }).sort(), results = [];
        var s = this.s, i = 0;
        while(s < this.e){
            var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            i += 1;
        }
        return results;
    } /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */ ;
    _proto.splitBy = function splitBy(duration) {
        var dur = Duration.fromDurationLike(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) return [];
        var s = this.s, idx = 1, next;
        var results = [];
        while(s < this.e){
            var added = this.start.plus(dur.mapUnits(function(x) {
                return x * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s, next));
            s = next;
            idx += 1;
        }
        return results;
    } /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */ ;
    _proto.divideEqually = function divideEqually(numberOfParts) {
        if (!this.isValid) return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    } /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.overlaps = function overlaps(other) {
        return this.e > other.s && this.s < other.e;
    } /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.abutsStart = function abutsStart(other) {
        if (!this.isValid) return false;
        return +this.e === +other.s;
    } /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.abutsEnd = function abutsEnd(other) {
        if (!this.isValid) return false;
        return +other.e === +this.s;
    } /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.engulfs = function engulfs(other) {
        if (!this.isValid) return false;
        return this.s <= other.s && this.e >= other.e;
    } /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */ ;
    _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        return this.s.equals(other.s) && this.e.equals(other.e);
    } /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */ ;
    _proto.intersection = function intersection(other) {
        if (!this.isValid) return this;
        var s = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s >= e) return null;
        else return Interval.fromDateTimes(s, e);
    } /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */ ;
    _proto.union = function union(other) {
        if (!this.isValid) return this;
        var s = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval.fromDateTimes(s, e);
    } /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ ;
    Interval.merge = function merge(intervals) {
        var _intervals$sort$reduc = intervals.sort(function(a, b) {
            return a.s - b.s;
        }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) return [
                sofar,
                item
            ];
            else if (current.overlaps(item) || current.abutsStart(item)) return [
                sofar,
                current.union(item)
            ];
            else return [
                sofar.concat([
                    current
                ]),
                item
            ];
        }, [
            [],
            null
        ]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
        if (final) found.push(final);
        return found;
    } /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */ ;
    Interval.xor = function xor(intervals) {
        var _Array$prototype;
        var start = null, currentCount = 0;
        var results = [], ends = intervals.map(function(i) {
            return [
                {
                    time: i.s,
                    type: "s"
                },
                {
                    time: i.e,
                    type: "e"
                }
            ];
        }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a, b) {
            return a.time - b.time;
        });
        for(var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;){
            var i = _step.value;
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) start = i.time;
            else {
                if (start && +start !== +i.time) results.push(Interval.fromDateTimes(start, i.time));
                start = null;
            }
        }
        return Interval.merge(results);
    } /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */ ;
    _proto.difference = function difference() {
        var _this2 = this;
        for(var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)intervals[_key2] = arguments[_key2];
        return Interval.xor([
            this
        ].concat(intervals)).map(function(i) {
            return _this2.intersection(i);
        }).filter(function(i) {
            return i && !i.isEmpty();
        });
    } /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        if (!this.isValid) return INVALID$1;
        return "[" + this.s.toISO() + " – " + this.e.toISO() + ")";
    } /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ ;
    _proto.toISO = function toISO(opts) {
        if (!this.isValid) return INVALID$1;
        return this.s.toISO(opts) + "/" + this.e.toISO(opts);
    } /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */ ;
    _proto.toISODate = function toISODate() {
        if (!this.isValid) return INVALID$1;
        return this.s.toISODate() + "/" + this.e.toISODate();
    } /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(opts) {
        if (!this.isValid) return INVALID$1;
        return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
    } /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(dateFormat, _temp2) {
        var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " – " : _ref3$separator;
        if (!this.isValid) return INVALID$1;
        return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    } /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */ ;
    _proto.toDuration = function toDuration(unit, opts) {
        if (!this.isValid) return Duration.invalid(this.invalidReason);
        return this.e.diff(this.s, unit, opts);
    } /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */ ;
    _proto.mapEndpoints = function mapEndpoints(mapFn) {
        return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    };
    _createClass(Interval, [
        {
            key: "start",
            get: function get() {
                return this.isValid ? this.s : null;
            }
        },
        {
            key: "end",
            get: function get() {
                return this.isValid ? this.e : null;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalidReason === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Interval;
}();
/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */ var Info = /*#__PURE__*/ function() {
    function Info() {}
    /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */ Info.hasDST = function hasDST(zone) {
        if (zone === void 0) zone = Settings.defaultZone;
        var proto = DateTime.now().setZone(zone).set({
            month: 12
        });
        return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
        }).offset;
    } /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */ ;
    Info.isValidIANAZone = function isValidIANAZone(zone) {
        return IANAZone.isValidZone(zone);
    } /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */ ;
    Info.normalizeZone = function normalizeZone$1(input) {
        return normalizeZone(input, Settings.defaultZone);
    } /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */ ;
    Info.months = function months(length, _temp) {
        if (length === void 0) length = "long";
        var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    } /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */ ;
    Info.monthsFormat = function monthsFormat(length, _temp2) {
        if (length === void 0) length = "long";
        var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    } /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */ ;
    Info.weekdays = function weekdays(length, _temp3) {
        if (length === void 0) length = "long";
        var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    } /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */ ;
    Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
        if (length === void 0) length = "long";
        var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    } /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */ ;
    Info.meridiems = function meridiems(_temp5) {
        var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
        return Locale.create(locale).meridiems();
    } /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */ ;
    Info.eras = function eras(length, _temp6) {
        if (length === void 0) length = "short";
        var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
        return Locale.create(locale, null, "gregory").eras(length);
    } /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */ ;
    Info.features = function features() {
        return {
            relative: hasRelative()
        };
    };
    return Info;
}();
function dayDiff(earlier, later) {
    var utcDayStart = function utcDayStart(dt) {
        return dt.toUTC(0, {
            keepLocalTime: true
        }).startOf("day").valueOf();
    }, ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
    var differs = [
        [
            "years",
            function(a, b) {
                return b.year - a.year;
            }
        ],
        [
            "quarters",
            function(a, b) {
                return b.quarter - a.quarter;
            }
        ],
        [
            "months",
            function(a, b) {
                return b.month - a.month + (b.year - a.year) * 12;
            }
        ],
        [
            "weeks",
            function(a, b) {
                var days = dayDiff(a, b);
                return (days - days % 7) / 7;
            }
        ],
        [
            "days",
            dayDiff
        ]
    ];
    var results = {};
    var lowestOrder, highWater;
    for(var _i = 0, _differs = differs; _i < _differs.length; _i++){
        var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
        if (units.indexOf(unit) >= 0) {
            var _cursor$plus;
            lowestOrder = unit;
            var delta = differ(cursor, later);
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));
            if (highWater > later) {
                var _cursor$plus2;
                cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
                delta -= 1;
            } else cursor = highWater;
            results[unit] = delta;
        }
    }
    return [
        cursor,
        results,
        highWater,
        lowestOrder
    ];
}
function _diff(earlier, later, units, opts) {
    var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
    var remainingMillis = later - cursor;
    var lowerOrderUnits = units.filter(function(u) {
        return [
            "hours",
            "minutes",
            "seconds",
            "milliseconds"
        ].indexOf(u) >= 0;
    });
    if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
            var _cursor$plus3;
            highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
        }
        if (highWater !== cursor) results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
    var duration = Duration.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) {
        var _Duration$fromMillis;
        return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
    } else return duration;
}
var numberingSystems = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d"
};
var numberingSystemsUTF16 = {
    arab: [
        1632,
        1641
    ],
    arabext: [
        1776,
        1785
    ],
    bali: [
        6992,
        7001
    ],
    beng: [
        2534,
        2543
    ],
    deva: [
        2406,
        2415
    ],
    fullwide: [
        65296,
        65303
    ],
    gujr: [
        2790,
        2799
    ],
    khmr: [
        6112,
        6121
    ],
    knda: [
        3302,
        3311
    ],
    laoo: [
        3792,
        3801
    ],
    limb: [
        6470,
        6479
    ],
    mlym: [
        3430,
        3439
    ],
    mong: [
        6160,
        6169
    ],
    mymr: [
        4160,
        4169
    ],
    orya: [
        2918,
        2927
    ],
    tamldec: [
        3046,
        3055
    ],
    telu: [
        3174,
        3183
    ],
    thai: [
        3664,
        3673
    ],
    tibt: [
        3872,
        3881
    ]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
    var value = parseInt(str, 10);
    if (isNaN(value)) {
        value = "";
        for(var i = 0; i < str.length; i++){
            var code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) value += hanidecChars.indexOf(str[i]);
            else for(var key in numberingSystemsUTF16){
                var _numberingSystemsUTF = numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) value += code - min;
            }
        }
        return parseInt(value, 10);
    } else return value;
}
function digitRegex(_ref, append) {
    var numberingSystem = _ref.numberingSystem;
    if (append === void 0) append = "";
    return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}
var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post) {
    if (post === void 0) post = function post(i) {
        return i;
    };
    return {
        regex: regex,
        deser: function deser(_ref) {
            var s = _ref[0];
            return post(parseDigits(s));
        }
    };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "[ " + NBSP + "]";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s) {
    // make dots optional and also make them literal
    // make space and non breakable space characters interchangeable
    return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s) {
    return s.replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}
function oneOf(strings, startIndex) {
    if (strings === null) return null;
    else return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: function deser(_ref2) {
            var s = _ref2[0];
            return strings.findIndex(function(i) {
                return stripInsensitivities(s) === stripInsensitivities(i);
            }) + startIndex;
        }
    };
}
function offset(regex, groups) {
    return {
        regex: regex,
        deser: function deser(_ref3) {
            var h = _ref3[1], m = _ref3[2];
            return signedOffset(h, m);
        },
        groups: groups
    };
}
function simple(regex) {
    return {
        regex: regex,
        deser: function deser(_ref4) {
            var s = _ref4[0];
            return s;
        }
    };
}
function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
    var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = function literal(t) {
        return {
            regex: RegExp(escapeToken(t.val)),
            deser: function deser(_ref5) {
                var s = _ref5[0];
                return s;
            },
            literal: true
        };
    }, unitate = function unitate(t) {
        if (token.literal) return literal(t);
        switch(t.val){
            // era
            case "G":
                return oneOf(loc.eras("short", false), 0);
            case "GG":
                return oneOf(loc.eras("long", false), 0);
            // years
            case "y":
                return intUnit(oneToSix);
            case "yy":
                return intUnit(twoToFour, untruncateYear);
            case "yyyy":
                return intUnit(four);
            case "yyyyy":
                return intUnit(fourToSix);
            case "yyyyyy":
                return intUnit(six);
            // months
            case "M":
                return intUnit(oneOrTwo);
            case "MM":
                return intUnit(two);
            case "MMM":
                return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
                return oneOf(loc.months("long", true, false), 1);
            case "L":
                return intUnit(oneOrTwo);
            case "LL":
                return intUnit(two);
            case "LLL":
                return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
                return oneOf(loc.months("long", false, false), 1);
            // dates
            case "d":
                return intUnit(oneOrTwo);
            case "dd":
                return intUnit(two);
            // ordinals
            case "o":
                return intUnit(oneToThree);
            case "ooo":
                return intUnit(three);
            // time
            case "HH":
                return intUnit(two);
            case "H":
                return intUnit(oneOrTwo);
            case "hh":
                return intUnit(two);
            case "h":
                return intUnit(oneOrTwo);
            case "mm":
                return intUnit(two);
            case "m":
                return intUnit(oneOrTwo);
            case "q":
                return intUnit(oneOrTwo);
            case "qq":
                return intUnit(two);
            case "s":
                return intUnit(oneOrTwo);
            case "ss":
                return intUnit(two);
            case "S":
                return intUnit(oneToThree);
            case "SSS":
                return intUnit(three);
            case "u":
                return simple(oneToNine);
            case "uu":
                return simple(oneOrTwo);
            case "uuu":
                return intUnit(one);
            // meridiem
            case "a":
                return oneOf(loc.meridiems(), 0);
            // weekYear (k)
            case "kkkk":
                return intUnit(four);
            case "kk":
                return intUnit(twoToFour, untruncateYear);
            // weekNumber (W)
            case "W":
                return intUnit(oneOrTwo);
            case "WW":
                return intUnit(two);
            // weekdays
            case "E":
            case "c":
                return intUnit(one);
            case "EEE":
                return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
                return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
                return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
                return oneOf(loc.weekdays("long", true, false), 1);
            // offset/zone
            case "Z":
            case "ZZ":
                return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
                return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
            // because we don't have any way to figure out what they are
            case "z":
                return simple(/[a-z_+-/]{1,256}?/i);
            default:
                return literal(t);
        }
    };
    var unit = unitate(token) || {
        invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
}
var partTypeStyleToTokenVal = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour: {
        numeric: "h",
        "2-digit": "hh"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    },
    timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
    }
};
function tokenForPart(part, locale, formatOpts) {
    var type = part.type, value = part.value;
    if (type === "literal") return {
        literal: true,
        val: value
    };
    var style = formatOpts[type];
    var val = partTypeStyleToTokenVal[type];
    if (typeof val === "object") val = val[style];
    if (val) return {
        literal: false,
        val: val
    };
    return undefined;
}
function buildRegex(units) {
    var re = units.map(function(u) {
        return u.regex;
    }).reduce(function(f, r) {
        return f + "(" + r.source + ")";
    }, "");
    return [
        "^" + re + "$",
        units
    ];
}
function match(input, regex, handlers) {
    var matches = input.match(regex);
    if (matches) {
        var all = {};
        var matchIndex = 1;
        for(var i in handlers)if (hasOwnProperty(handlers, i)) {
            var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            matchIndex += groups;
        }
        return [
            matches,
            all
        ];
    } else return [
        matches,
        {}
    ];
}
function dateTimeFromMatches(matches) {
    var toField = function toField(token) {
        switch(token){
            case "S":
                return "millisecond";
            case "s":
                return "second";
            case "m":
                return "minute";
            case "h":
            case "H":
                return "hour";
            case "d":
                return "day";
            case "o":
                return "ordinal";
            case "L":
            case "M":
                return "month";
            case "y":
                return "year";
            case "E":
            case "c":
                return "weekday";
            case "W":
                return "weekNumber";
            case "k":
                return "weekYear";
            case "q":
                return "quarter";
            default:
                return null;
        }
    };
    var zone = null;
    var specificOffset;
    if (!isUndefined(matches.z)) zone = IANAZone.create(matches.z);
    if (!isUndefined(matches.Z)) {
        if (!zone) zone = new FixedOffsetZone(matches.Z);
        specificOffset = matches.Z;
    }
    if (!isUndefined(matches.q)) matches.M = (matches.q - 1) * 3 + 1;
    if (!isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) matches.h += 12;
        else if (matches.h === 12 && matches.a === 0) matches.h = 0;
    }
    if (matches.G === 0 && matches.y) matches.y = -matches.y;
    if (!isUndefined(matches.u)) matches.S = parseMillis(matches.u);
    var vals = Object.keys(matches).reduce(function(r, k) {
        var f = toField(k);
        if (f) r[f] = matches[k];
        return r;
    }, {});
    return [
        vals,
        zone,
        specificOffset
    ];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
    if (!dummyDateTimeCache) dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
    if (token.literal) return token;
    var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
    var tokens = formatOptsToTokens(formatOpts, locale);
    if (tokens == null || tokens.includes(undefined)) return token;
    return tokens;
}
function expandMacroTokens(tokens, locale) {
    var _Array$prototype;
    return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t) {
        return maybeExpandMacroToken(t, locale);
    }));
}
/**
 * @private
 */ function explainFromTokens(locale, input, format) {
    var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map(function(t) {
        return unitForToken(t, locale);
    }), disqualifyingUnit = units.find(function(t) {
        return t.invalidReason;
    });
    if (disqualifyingUnit) return {
        input: input,
        tokens: tokens,
        invalidReason: disqualifyingUnit.invalidReason
    };
    else {
        var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [
            null,
            null,
            undefined
        ], result = _ref6[0], zone = _ref6[1], specificOffset = _ref6[2];
        if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
        return {
            input: input,
            tokens: tokens,
            regex: regex,
            rawMatches: rawMatches,
            matches: matches,
            result: result,
            zone: zone,
            specificOffset: specificOffset
        };
    }
}
function parseFromTokens(locale, input, format) {
    var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, specificOffset = _explainFromTokens.specificOffset, invalidReason = _explainFromTokens.invalidReason;
    return [
        result,
        zone,
        specificOffset,
        invalidReason
    ];
}
function formatOptsToTokens(formatOpts, locale) {
    if (!formatOpts) return null;
    var formatter = Formatter.create(locale, formatOpts);
    var parts = formatter.formatDateTimeParts(getDummyDateTime());
    return parts.map(function(p) {
        return tokenForPart(p, locale, formatOpts);
    });
}
var nonLeapLadder = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
], leapLadder = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
function unitOutOfRange(unit, value) {
    return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}
function dayOfWeek(year, month, day) {
    var d = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) d.setUTCFullYear(d.getUTCFullYear() - 1900);
    var js = d.getUTCDay();
    return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
    var table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex(function(i) {
        return i < ordinal;
    }), day = ordinal - table[month0];
    return {
        month: month0 + 1,
        day: day
    };
}
/**
 * @private
 */ function gregorianToWeek(gregObj) {
    var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
    var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
    if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear(weekYear);
    } else if (weekNumber > weeksInWeekYear(year)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else weekYear = year;
    return _extends({
        weekYear: weekYear,
        weekNumber: weekNumber,
        weekday: weekday
    }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
    var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
    var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
    if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear(weekYear);
    } else year = weekYear;
    var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
    return _extends({
        year: year,
        month: month,
        day: day
    }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
    var year = gregData.year, month = gregData.month, day = gregData.day;
    var ordinal = computeOrdinal(year, month, day);
    return _extends({
        year: year,
        ordinal: ordinal
    }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
    var year = ordinalData.year, ordinal = ordinalData.ordinal;
    var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
    return _extends({
        year: year,
        month: month,
        day: day
    }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
    var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) return unitOutOfRange("weekYear", obj.weekYear);
    else if (!validWeek) return unitOutOfRange("week", obj.week);
    else if (!validWeekday) return unitOutOfRange("weekday", obj.weekday);
    else return false;
}
function hasInvalidOrdinalData(obj) {
    var validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validOrdinal) return unitOutOfRange("ordinal", obj.ordinal);
    else return false;
}
function hasInvalidGregorianData(obj) {
    var validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validMonth) return unitOutOfRange("month", obj.month);
    else if (!validDay) return unitOutOfRange("day", obj.day);
    else return false;
}
function hasInvalidTimeData(obj) {
    var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
    var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
    if (!validHour) return unitOutOfRange("hour", hour);
    else if (!validMinute) return unitOutOfRange("minute", minute);
    else if (!validSecond) return unitOutOfRange("second", second);
    else if (!validMillisecond) return unitOutOfRange("millisecond", millisecond);
    else return false;
}
var INVALID = "Invalid DateTime";
var MAX_DATE = 8.64e15;
function unsupportedZone(zone) {
    return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
} // we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) dt.weekData = gregorianToWeek(dt.c);
    return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone(inst, alts) {
    var current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
    };
    return new DateTime(_extends({}, current, alts, {
        old: current
    }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - o * 60000; // Test whether the zone matches the offset for this ts
    var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done
    if (o === o2) return [
        utcGuess,
        o
    ];
     // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o) * 60000; // If that gives us the local time we want, we're done
    var o3 = tz.offset(utcGuess);
    if (o2 === o3) return [
        utcGuess,
        o2
    ];
     // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
    return [
        localTS - Math.min(o2, o3) * 60000,
        Math.max(o2, o3)
    ];
} // convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
    ts += offset * 60000;
    var d = new Date(ts);
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
    };
} // convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
    return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
    var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = _extends({}, inst.c, {
        year: year,
        month: month,
        day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }), millisToAdd = Duration.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = objToLocalTS(c);
    var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
    if (millisToAdd !== 0) {
        ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
    }
    return {
        ts: ts,
        o: o
    };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    var setZone = opts.setZone, zone = opts.zone;
    if (parsed && Object.keys(parsed).length !== 0) {
        var interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, _extends({}, opts, {
            zone: interpretationZone,
            specificOffset: specificOffset
        }));
        return setZone ? inst : inst.setZone(zone);
    } else return DateTime.invalid(new Invalid("unparsable", 'the input "' + text + "\" can't be parsed as " + format));
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ) {
    if (allowZ === void 0) allowZ = true;
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
        allowZ: allowZ,
        forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
}
function _toISODate(o, extended) {
    var longFormat = o.c.year > 9999 || o.c.year < 0;
    var c = "";
    if (longFormat && o.c.year >= 0) c += "+";
    c += padStart(o.c.year, longFormat ? 6 : 4);
    if (extended) {
        c += "-";
        c += padStart(o.c.month);
        c += "-";
        c += padStart(o.c.day);
    } else {
        c += padStart(o.c.month);
        c += padStart(o.c.day);
    }
    return c;
}
function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
    var c = padStart(o.c.hour);
    if (extended) {
        c += ":";
        c += padStart(o.c.minute);
        if (o.c.second !== 0 || !suppressSeconds) c += ":";
    } else c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
        c += padStart(o.c.second);
        if (o.c.millisecond !== 0 || !suppressMilliseconds) {
            c += ".";
            c += padStart(o.c.millisecond, 3);
        }
    }
    if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0 && !extendedZone) c += "Z";
        else if (o.o < 0) {
            c += "-";
            c += padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += padStart(Math.trunc(-o.o % 60));
        } else {
            c += "+";
            c += padStart(Math.trunc(o.o / 60));
            c += ":";
            c += padStart(Math.trunc(o.o % 60));
        }
    }
    if (extendedZone) c += "[" + o.zone.ianaName + "]";
    return c;
} // defaults for unspecified units in the supported calendars
var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}; // Units in the supported calendars, sorted by bigness
var orderedUnits = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedOrdinalUnits = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond"
]; // standardize case and plurality in units
function normalizeUnit(unit) {
    var normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, opts) {
    var zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
    var ts, o; // assume we have the higher-order units
    if (!isUndefined(obj.year)) {
        for(var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;){
            var u = _step.value;
            if (isUndefined(obj[u])) obj[u] = defaultUnitValues[u];
        }
        var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
        if (invalid) return DateTime.invalid(invalid);
        var offsetProvis = zone.offset(tsNow);
        var _objToTS = objToTS(obj, offsetProvis, zone);
        ts = _objToTS[0];
        o = _objToTS[1];
    } else ts = tsNow;
    return new DateTime({
        ts: ts,
        zone: zone,
        loc: loc,
        o: o
    });
}
function diffRelative(start, end, opts) {
    var round = isUndefined(opts.round) ? true : opts.round, format = function format(c, unit) {
        c = roundTo(c, round || opts.calendary ? 0 : 2, true);
        var formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
    }, differ = function differ(unit) {
        if (opts.calendary) {
            if (!end.hasSame(start, unit)) return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            else return 0;
        } else return end.diff(start, unit).get(unit);
    };
    if (opts.unit) return format(differ(opts.unit), opts.unit);
    for(var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;){
        var unit = _step2.value;
        var count = differ(unit);
        if (Math.abs(count) >= 1) return format(count, unit);
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
    var opts = {}, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
    } else args = Array.from(argList);
    return [
        opts,
        args
    ];
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */ var DateTime = /*#__PURE__*/ function() {
    /**
   * @access private
   */ function DateTime(config) {
        var zone = config.zone || Settings.defaultZone;
        var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
        /**
     * @access private
     */ this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
        var c = null, o = null;
        if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
                var _ref = [
                    config.old.c,
                    config.old.o
                ];
                c = _ref[0];
                o = _ref[1];
            } else {
                var ot = zone.offset(this.ts);
                c = tsToObj(this.ts, ot);
                invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
                c = invalid ? null : c;
                o = invalid ? null : ot;
            }
        }
        /**
     * @access private
     */ this._zone = zone;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.invalid = invalid;
        /**
     * @access private
     */ this.weekData = null;
        /**
     * @access private
     */ this.c = c;
        /**
     * @access private
     */ this.o = o;
        /**
     * @access private
     */ this.isLuxonDateTime = true;
    } // CONSTRUCT
    /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */ DateTime.now = function now() {
        return new DateTime({});
    } /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */ ;
    DateTime.local = function local() {
        var _lastOpts = lastOpts(arguments), opts = _lastOpts[0], args = _lastOpts[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
        return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, opts);
    } /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */ ;
    DateTime.utc = function utc() {
        var _lastOpts2 = lastOpts(arguments), opts = _lastOpts2[0], args = _lastOpts2[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
        opts.zone = FixedOffsetZone.utcInstance;
        return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, opts);
    } /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */ ;
    DateTime.fromJSDate = function fromJSDate(date, options) {
        if (options === void 0) options = {};
        var ts = isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) return DateTime.invalid("invalid input");
        var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid(unsupportedZone(zoneToUse));
        return new DateTime({
            ts: ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromMillis = function fromMillis(milliseconds, options) {
        if (options === void 0) options = {};
        if (!isNumber(milliseconds)) throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
        else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
        return DateTime.invalid("Timestamp out of range");
        else return new DateTime({
            ts: milliseconds,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromSeconds = function fromSeconds(seconds, options) {
        if (options === void 0) options = {};
        if (!isNumber(seconds)) throw new InvalidArgumentError("fromSeconds requires a numerical input");
        else return new DateTime({
            ts: seconds * 1000,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
        });
    } /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */ ;
    DateTime.fromObject = function fromObject(obj, opts) {
        if (opts === void 0) opts = {};
        obj = obj || {};
        var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime.invalid(unsupportedZone(zoneToUse));
        var tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts); // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff
        var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
        } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
        } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
        } // set default values for missing stuff
        var foundFirst = false;
        for(var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;){
            var u = _step3.value;
            var v = normalized[u];
            if (!isUndefined(v)) foundFirst = true;
            else if (foundFirst) normalized[u] = defaultValues[u];
            else normalized[u] = objNow[u];
        } // make sure the values we have are in range
        var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
        if (invalid) return DateTime.invalid(invalid);
         // compute the actual time
        var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc: loc
        }); // gregorian data + weekday serves only to validate
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
        return inst;
    } /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */ ;
    DateTime.fromISO = function fromISO(text, opts) {
        if (opts === void 0) opts = {};
        var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
        return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    } /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */ ;
    DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
        if (opts === void 0) opts = {};
        var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
        return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    } /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */ ;
    DateTime.fromHTTP = function fromHTTP(text, opts) {
        if (opts === void 0) opts = {};
        var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
        return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    } /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */ ;
    DateTime.fromFormat = function fromFormat(text, fmt, opts) {
        if (opts === void 0) opts = {};
        if (isUndefined(text) || isUndefined(fmt)) throw new InvalidArgumentError("fromFormat requires an input string and a format");
        var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], specificOffset = _parseFromTokens[2], invalid = _parseFromTokens[3];
        if (invalid) return DateTime.invalid(invalid);
        else return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
    } /**
   * @deprecated use fromFormat instead
   */ ;
    DateTime.fromString = function fromString(text, fmt, opts) {
        if (opts === void 0) opts = {};
        return DateTime.fromFormat(text, fmt, opts);
    } /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */ ;
    DateTime.fromSQL = function fromSQL(text, opts) {
        if (opts === void 0) opts = {};
        var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
        return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    } /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */ ;
    DateTime.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidDateTimeError(invalid);
        else return new DateTime({
            invalid: invalid
        });
    } /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */ ;
    DateTime.isDateTime = function isDateTime(o) {
        return o && o.isLuxonDateTime || false;
    } /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */ ;
    DateTime.parseFormatForOpts = function parseFormatForOpts(formatOpts, localeOpts) {
        if (localeOpts === void 0) localeOpts = {};
        var tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
        return !tokenList ? null : tokenList.map(function(t) {
            return t ? t.val : null;
        }).join("");
    } /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */ ;
    DateTime.expandFormat = function expandFormat(fmt, localeOpts) {
        if (localeOpts === void 0) localeOpts = {};
        var expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
        return expanded.map(function(t) {
            return t.val;
        }).join("");
    } // INFO
     /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */ ;
    var _proto = DateTime.prototype;
    _proto.get = function get(unit) {
        return this[unit];
    } /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */ ;
    /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */ _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
        if (opts === void 0) opts = {};
        var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
        return {
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: calendar
        };
    } // TRANSFORM
     /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */ ;
    _proto.toUTC = function toUTC(offset, opts) {
        if (offset === void 0) offset = 0;
        if (opts === void 0) opts = {};
        return this.setZone(FixedOffsetZone.instance(offset), opts);
    } /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */ ;
    _proto.toLocal = function toLocal() {
        return this.setZone(Settings.defaultZone);
    } /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */ ;
    _proto.setZone = function setZone(zone, _temp) {
        var _ref2 = _temp === void 0 ? {} : _temp, _ref2$keepLocalTime = _ref2.keepLocalTime, keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime, _ref2$keepCalendarTim = _ref2.keepCalendarTime, keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
        zone = normalizeZone(zone, Settings.defaultZone);
        if (zone.equals(this.zone)) return this;
        else if (!zone.isValid) return DateTime.invalid(unsupportedZone(zone));
        else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
                var offsetGuess = zone.offset(this.ts);
                var asObj = this.toObject();
                var _objToTS3 = objToTS(asObj, offsetGuess, zone);
                newTS = _objToTS3[0];
            }
            return clone(this, {
                ts: newTS,
                zone: zone
            });
        }
    } /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */ ;
    _proto.reconfigure = function reconfigure(_temp2) {
        var _ref3 = _temp2 === void 0 ? {} : _temp2, locale = _ref3.locale, numberingSystem = _ref3.numberingSystem, outputCalendar = _ref3.outputCalendar;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: outputCalendar
        });
        return clone(this, {
            loc: loc
        });
    } /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */ ;
    _proto.setLocale = function setLocale(locale) {
        return this.reconfigure({
            locale: locale
        });
    } /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */ ;
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var mixed;
        if (settingWeekStuff) mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c), normalized));
        else if (!isUndefined(normalized.ordinal)) mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
        else {
            mixed = _extends({}, this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
            // use the last day of the right month
            if (isUndefined(normalized.day)) mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
        var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
        return clone(this, {
            ts: ts,
            o: o
        });
    } /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */ ;
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration);
        return clone(this, adjustTime(this, dur));
    } /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */ ;
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = Duration.fromDurationLike(duration).negate();
        return clone(this, adjustTime(this, dur));
    } /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */ ;
    _proto.startOf = function startOf(unit) {
        if (!this.isValid) return this;
        var o = {}, normalizedUnit = Duration.normalizeUnit(unit);
        switch(normalizedUnit){
            case "years":
                o.month = 1;
            // falls through
            case "quarters":
            case "months":
                o.day = 1;
            // falls through
            case "weeks":
            case "days":
                o.hour = 0;
            // falls through
            case "hours":
                o.minute = 0;
            // falls through
            case "minutes":
                o.second = 0;
            // falls through
            case "seconds":
                o.millisecond = 0;
                break;
        }
        if (normalizedUnit === "weeks") o.weekday = 1;
        if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
    } /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */ ;
    _proto.endOf = function endOf(unit) {
        var _this$plus;
        return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
    } // OUTPUT
     /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */ ;
    _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
    } /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */ ;
    _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
        if (formatOpts === void 0) formatOpts = DATE_SHORT;
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
    } /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */ ;
    _proto.toLocaleParts = function toLocaleParts(opts) {
        if (opts === void 0) opts = {};
        return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */ ;
    _proto.toISO = function toISO(_temp3) {
        var _ref4 = _temp3 === void 0 ? {} : _temp3, _ref4$format = _ref4.format, format = _ref4$format === void 0 ? "extended" : _ref4$format, _ref4$suppressSeconds = _ref4.suppressSeconds, suppressSeconds = _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds, _ref4$suppressMillise = _ref4.suppressMilliseconds, suppressMilliseconds = _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise, _ref4$includeOffset = _ref4.includeOffset, includeOffset = _ref4$includeOffset === void 0 ? true : _ref4$includeOffset, _ref4$extendedZone = _ref4.extendedZone, extendedZone = _ref4$extendedZone === void 0 ? false : _ref4$extendedZone;
        if (!this.isValid) return null;
        var ext = format === "extended";
        var c = _toISODate(this, ext);
        c += "T";
        c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        return c;
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */ ;
    _proto.toISODate = function toISODate(_temp4) {
        var _ref5 = _temp4 === void 0 ? {} : _temp4, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
        if (!this.isValid) return null;
        return _toISODate(this, format === "extended");
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */ ;
    _proto.toISOWeekDate = function toISOWeekDate() {
        return toTechFormat(this, "kkkk-'W'WW-c");
    } /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */ ;
    _proto.toISOTime = function toISOTime(_temp5) {
        var _ref6 = _temp5 === void 0 ? {} : _temp5, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$extendedZone = _ref6.extendedZone, extendedZone = _ref6$extendedZone === void 0 ? false : _ref6$extendedZone, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
        if (!this.isValid) return null;
        var c = includePrefix ? "T" : "";
        return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    } /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */ ;
    _proto.toRFC2822 = function toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    } /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */ ;
    _proto.toHTTP = function toHTTP() {
        return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */ ;
    _proto.toSQLDate = function toSQLDate() {
        if (!this.isValid) return null;
        return _toISODate(this, true);
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */ ;
    _proto.toSQLTime = function toSQLTime(_temp6) {
        var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone, _ref7$includeOffsetSp = _ref7.includeOffsetSpace, includeOffsetSpace = _ref7$includeOffsetSp === void 0 ? true : _ref7$includeOffsetSp;
        var fmt = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
            if (includeOffsetSpace) fmt += " ";
            if (includeZone) fmt += "z";
            else if (includeOffset) fmt += "ZZ";
        }
        return toTechFormat(this, fmt, true);
    } /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */ ;
    _proto.toSQL = function toSQL(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return null;
        return this.toSQLDate() + " " + this.toSQLTime(opts);
    } /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */ ;
    _proto.toString = function toString() {
        return this.isValid ? this.toISO() : INVALID;
    } /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */ ;
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    } /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */ ;
    _proto.toMillis = function toMillis() {
        return this.isValid ? this.ts : NaN;
    } /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */ ;
    _proto.toSeconds = function toSeconds() {
        return this.isValid ? this.ts / 1000 : NaN;
    } /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */ ;
    _proto.toUnixInteger = function toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1000) : NaN;
    } /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */ ;
    _proto.toJSON = function toJSON() {
        return this.toISO();
    } /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */ ;
    _proto.toBSON = function toBSON() {
        return this.toJSDate();
    } /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */ ;
    _proto.toObject = function toObject(opts) {
        if (opts === void 0) opts = {};
        if (!this.isValid) return {};
        var base = _extends({}, this.c);
        if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
    } /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */ ;
    _proto.toJSDate = function toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
    } // COMPARE
     /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */ ;
    _proto.diff = function diff(otherDateTime, unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {};
        if (!this.isValid || !otherDateTime.isValid) return Duration.invalid("created by diffing an invalid DateTime");
        var durOpts = _extends({
            locale: this.locale,
            numberingSystem: this.numberingSystem
        }, opts);
        var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
    } /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ ;
    _proto.diffNow = function diffNow(unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {};
        return this.diff(DateTime.now(), unit, opts);
    } /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */ ;
    _proto.until = function until(otherDateTime) {
        return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    } /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */ ;
    _proto.hasSame = function hasSame(otherDateTime, unit) {
        if (!this.isValid) return false;
        var inputMs = otherDateTime.valueOf();
        var adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
        });
        return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
    } /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */ ;
    _proto.equals = function equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    } /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */ ;
    _proto.toRelative = function toRelative(options) {
        if (options === void 0) options = {};
        if (!this.isValid) return null;
        var base = options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        var units = [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds"
        ];
        var unit = options.unit;
        if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = undefined;
        }
        return diffRelative(base, this.plus(padding), _extends({}, options, {
            numeric: "always",
            units: units,
            unit: unit
        }));
    } /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */ ;
    _proto.toRelativeCalendar = function toRelativeCalendar(options) {
        if (options === void 0) options = {};
        if (!this.isValid) return null;
        return diffRelative(options.base || DateTime.fromObject({}, {
            zone: this.zone
        }), this, _extends({}, options, {
            numeric: "auto",
            units: [
                "years",
                "months",
                "days"
            ],
            calendary: true
        }));
    } /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */ ;
    DateTime.min = function min() {
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        if (!dateTimes.every(DateTime.isDateTime)) throw new InvalidArgumentError("min requires all arguments be DateTimes");
        return bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.min);
    } /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */ ;
    DateTime.max = function max() {
        for(var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)dateTimes[_key2] = arguments[_key2];
        if (!dateTimes.every(DateTime.isDateTime)) throw new InvalidArgumentError("max requires all arguments be DateTimes");
        return bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.max);
    } // MISC
     /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */ ;
    DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
        if (options === void 0) options = {};
        var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        });
        return explainFromTokens(localeToUse, text, fmt);
    } /**
   * @deprecated use fromFormatExplain instead
   */ ;
    DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
        if (options === void 0) options = {};
        return DateTime.fromFormatExplain(text, fmt, options);
    } // FORMAT PRESETS
     /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */ ;
    _createClass(DateTime, [
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        },
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "outputCalendar",
            get: function get() {
                return this.isValid ? this.loc.outputCalendar : null;
            }
        },
        {
            key: "zone",
            get: function get() {
                return this._zone;
            }
        },
        {
            key: "zoneName",
            get: function get() {
                return this.isValid ? this.zone.name : null;
            }
        },
        {
            key: "year",
            get: function get() {
                return this.isValid ? this.c.year : NaN;
            }
        },
        {
            key: "quarter",
            get: function get() {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
            }
        },
        {
            key: "month",
            get: function get() {
                return this.isValid ? this.c.month : NaN;
            }
        },
        {
            key: "day",
            get: function get() {
                return this.isValid ? this.c.day : NaN;
            }
        },
        {
            key: "hour",
            get: function get() {
                return this.isValid ? this.c.hour : NaN;
            }
        },
        {
            key: "minute",
            get: function get() {
                return this.isValid ? this.c.minute : NaN;
            }
        },
        {
            key: "second",
            get: function get() {
                return this.isValid ? this.c.second : NaN;
            }
        },
        {
            key: "millisecond",
            get: function get() {
                return this.isValid ? this.c.millisecond : NaN;
            }
        },
        {
            key: "weekYear",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
            }
        },
        {
            key: "weekNumber",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
            }
        },
        {
            key: "weekday",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
            }
        },
        {
            key: "ordinal",
            get: function get() {
                return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
            }
        },
        {
            key: "monthShort",
            get: function get() {
                return this.isValid ? Info.months("short", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "monthLong",
            get: function get() {
                return this.isValid ? Info.months("long", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "weekdayShort",
            get: function get() {
                return this.isValid ? Info.weekdays("short", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "weekdayLong",
            get: function get() {
                return this.isValid ? Info.weekdays("long", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "offset",
            get: function get() {
                return this.isValid ? +this.o : NaN;
            }
        },
        {
            key: "offsetNameShort",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "short",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "offsetNameLong",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "long",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "isOffsetFixed",
            get: function get() {
                return this.isValid ? this.zone.isUniversal : null;
            }
        },
        {
            key: "isInDST",
            get: function get() {
                if (this.isOffsetFixed) return false;
                else return this.offset > this.set({
                    month: 1,
                    day: 1
                }).offset || this.offset > this.set({
                    month: 5
                }).offset;
            }
        },
        {
            key: "isInLeapYear",
            get: function get() {
                return isLeapYear(this.year);
            }
        },
        {
            key: "daysInMonth",
            get: function get() {
                return daysInMonth(this.year, this.month);
            }
        },
        {
            key: "daysInYear",
            get: function get() {
                return this.isValid ? daysInYear(this.year) : NaN;
            }
        },
        {
            key: "weeksInWeekYear",
            get: function get() {
                return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
            }
        }
    ], [
        {
            key: "DATE_SHORT",
            get: function get() {
                return DATE_SHORT;
            }
        },
        {
            key: "DATE_MED",
            get: function get() {
                return DATE_MED;
            }
        },
        {
            key: "DATE_MED_WITH_WEEKDAY",
            get: function get() {
                return DATE_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATE_FULL",
            get: function get() {
                return DATE_FULL;
            }
        },
        {
            key: "DATE_HUGE",
            get: function get() {
                return DATE_HUGE;
            }
        },
        {
            key: "TIME_SIMPLE",
            get: function get() {
                return TIME_SIMPLE;
            }
        },
        {
            key: "TIME_WITH_SECONDS",
            get: function get() {
                return TIME_WITH_SECONDS;
            }
        },
        {
            key: "TIME_WITH_SHORT_OFFSET",
            get: function get() {
                return TIME_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_WITH_LONG_OFFSET",
            get: function get() {
                return TIME_WITH_LONG_OFFSET;
            }
        },
        {
            key: "TIME_24_SIMPLE",
            get: function get() {
                return TIME_24_SIMPLE;
            }
        },
        {
            key: "TIME_24_WITH_SECONDS",
            get: function get() {
                return TIME_24_WITH_SECONDS;
            }
        },
        {
            key: "TIME_24_WITH_SHORT_OFFSET",
            get: function get() {
                return TIME_24_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_24_WITH_LONG_OFFSET",
            get: function get() {
                return TIME_24_WITH_LONG_OFFSET;
            }
        },
        {
            key: "DATETIME_SHORT",
            get: function get() {
                return DATETIME_SHORT;
            }
        },
        {
            key: "DATETIME_SHORT_WITH_SECONDS",
            get: function get() {
                return DATETIME_SHORT_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED",
            get: function get() {
                return DATETIME_MED;
            }
        },
        {
            key: "DATETIME_MED_WITH_SECONDS",
            get: function get() {
                return DATETIME_MED_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED_WITH_WEEKDAY",
            get: function get() {
                return DATETIME_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATETIME_FULL",
            get: function get() {
                return DATETIME_FULL;
            }
        },
        {
            key: "DATETIME_FULL_WITH_SECONDS",
            get: function get() {
                return DATETIME_FULL_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_HUGE",
            get: function get() {
                return DATETIME_HUGE;
            }
        },
        {
            key: "DATETIME_HUGE_WITH_SECONDS",
            get: function get() {
                return DATETIME_HUGE_WITH_SECONDS;
            }
        }
    ]);
    return DateTime;
}();
function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) return dateTimeish;
    else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) return DateTime.fromJSDate(dateTimeish);
    else if (dateTimeish && typeof dateTimeish === "object") return DateTime.fromObject(dateTimeish);
    else throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
}
var VERSION = "3.0.3";
exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.Settings = Settings;
exports.SystemZone = SystemZone;
exports.VERSION = VERSION;
exports.Zone = Zone;

},{}],"kRkbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _core.FunctionToString));
parcelHelpers.export(exports, "Hub", ()=>(0, _core.Hub));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _core.InboundFilters));
parcelHelpers.export(exports, "SDK_VERSION", ()=>(0, _core.SDK_VERSION));
parcelHelpers.export(exports, "Scope", ()=>(0, _core.Scope));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _core.addBreadcrumb));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _core.addGlobalEventProcessor));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _core.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _core.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _core.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _core.configureScope));
parcelHelpers.export(exports, "createTransport", ()=>(0, _core.createTransport));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _core.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _core.getHubFromCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _core.makeMain));
parcelHelpers.export(exports, "setContext", ()=>(0, _core.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _core.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _core.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _core.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _core.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _core.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _core.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _core.withScope));
parcelHelpers.export(exports, "BrowserClient", ()=>(0, _clientJs.BrowserClient));
parcelHelpers.export(exports, "makeFetchTransport", ()=>(0, _fetchJs.makeFetchTransport));
parcelHelpers.export(exports, "makeXHRTransport", ()=>(0, _xhrJs.makeXHRTransport));
parcelHelpers.export(exports, "chromeStackLineParser", ()=>(0, _stackParsersJs.chromeStackLineParser));
parcelHelpers.export(exports, "defaultStackLineParsers", ()=>(0, _stackParsersJs.defaultStackLineParsers));
parcelHelpers.export(exports, "defaultStackParser", ()=>(0, _stackParsersJs.defaultStackParser));
parcelHelpers.export(exports, "geckoStackLineParser", ()=>(0, _stackParsersJs.geckoStackLineParser));
parcelHelpers.export(exports, "opera10StackLineParser", ()=>(0, _stackParsersJs.opera10StackLineParser));
parcelHelpers.export(exports, "opera11StackLineParser", ()=>(0, _stackParsersJs.opera11StackLineParser));
parcelHelpers.export(exports, "winjsStackLineParser", ()=>(0, _stackParsersJs.winjsStackLineParser));
parcelHelpers.export(exports, "close", ()=>(0, _sdkJs.close));
parcelHelpers.export(exports, "defaultIntegrations", ()=>(0, _sdkJs.defaultIntegrations));
parcelHelpers.export(exports, "flush", ()=>(0, _sdkJs.flush));
parcelHelpers.export(exports, "forceLoad", ()=>(0, _sdkJs.forceLoad));
parcelHelpers.export(exports, "init", ()=>(0, _sdkJs.init));
parcelHelpers.export(exports, "lastEventId", ()=>(0, _sdkJs.lastEventId));
parcelHelpers.export(exports, "onLoad", ()=>(0, _sdkJs.onLoad));
parcelHelpers.export(exports, "showReportDialog", ()=>(0, _sdkJs.showReportDialog));
parcelHelpers.export(exports, "wrap", ()=>(0, _sdkJs.wrap));
parcelHelpers.export(exports, "GlobalHandlers", ()=>(0, _globalhandlersJs.GlobalHandlers));
parcelHelpers.export(exports, "TryCatch", ()=>(0, _trycatchJs.TryCatch));
parcelHelpers.export(exports, "Breadcrumbs", ()=>(0, _breadcrumbsJs.Breadcrumbs));
parcelHelpers.export(exports, "LinkedErrors", ()=>(0, _linkederrorsJs.LinkedErrors));
parcelHelpers.export(exports, "HttpContext", ()=>(0, _httpcontextJs.HttpContext));
parcelHelpers.export(exports, "Dedupe", ()=>(0, _dedupeJs.Dedupe));
parcelHelpers.export(exports, "Integrations", ()=>INTEGRATIONS);
var _exportsJs = require("./exports.js");
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _indexJs = require("./integrations/index.js");
var _clientJs = require("./client.js");
var _fetchJs = require("./transports/fetch.js");
var _xhrJs = require("./transports/xhr.js");
var _stackParsersJs = require("./stack-parsers.js");
var _sdkJs = require("./sdk.js");
var _globalhandlersJs = require("./integrations/globalhandlers.js");
var _trycatchJs = require("./integrations/trycatch.js");
var _breadcrumbsJs = require("./integrations/breadcrumbs.js");
var _linkederrorsJs = require("./integrations/linkederrors.js");
var _httpcontextJs = require("./integrations/httpcontext.js");
var _dedupeJs = require("./integrations/dedupe.js");
let windowIntegrations = {};
// This block is needed to add compatibility with the integrations packages when used with a CDN
var _window = (0, _utils.getGlobalObject)();
if (_window.Sentry && _window.Sentry.Integrations) windowIntegrations = _window.Sentry.Integrations;
var INTEGRATIONS = {
    ...windowIntegrations,
    ...(0, _core.Integrations),
    ..._indexJs
};

},{"./exports.js":"c3jZY","@sentry/core":"czIi1","@sentry/utils":"axZXA","./integrations/index.js":"dN4ch","./client.js":"cPCsw","./transports/fetch.js":"9L9JJ","./transports/xhr.js":"aupud","./stack-parsers.js":"c4WO4","./sdk.js":"hV4lt","./integrations/globalhandlers.js":"bgvEJ","./integrations/trycatch.js":"9zNxD","./integrations/breadcrumbs.js":"doykJ","./integrations/linkederrors.js":"4IhVU","./integrations/httpcontext.js":"7HLvh","./integrations/dedupe.js":"6K3pq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3jZY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _core.FunctionToString));
parcelHelpers.export(exports, "Hub", ()=>(0, _core.Hub));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _core.InboundFilters));
parcelHelpers.export(exports, "SDK_VERSION", ()=>(0, _core.SDK_VERSION));
parcelHelpers.export(exports, "Scope", ()=>(0, _core.Scope));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _core.addBreadcrumb));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _core.addGlobalEventProcessor));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _core.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _core.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _core.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _core.configureScope));
parcelHelpers.export(exports, "createTransport", ()=>(0, _core.createTransport));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _core.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _core.getHubFromCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _core.makeMain));
parcelHelpers.export(exports, "setContext", ()=>(0, _core.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _core.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _core.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _core.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _core.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _core.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _core.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _core.withScope));
parcelHelpers.export(exports, "BrowserClient", ()=>(0, _clientJs.BrowserClient));
parcelHelpers.export(exports, "chromeStackLineParser", ()=>(0, _stackParsersJs.chromeStackLineParser));
parcelHelpers.export(exports, "defaultStackLineParsers", ()=>(0, _stackParsersJs.defaultStackLineParsers));
parcelHelpers.export(exports, "defaultStackParser", ()=>(0, _stackParsersJs.defaultStackParser));
parcelHelpers.export(exports, "geckoStackLineParser", ()=>(0, _stackParsersJs.geckoStackLineParser));
parcelHelpers.export(exports, "opera10StackLineParser", ()=>(0, _stackParsersJs.opera10StackLineParser));
parcelHelpers.export(exports, "opera11StackLineParser", ()=>(0, _stackParsersJs.opera11StackLineParser));
parcelHelpers.export(exports, "winjsStackLineParser", ()=>(0, _stackParsersJs.winjsStackLineParser));
parcelHelpers.export(exports, "close", ()=>(0, _sdkJs.close));
parcelHelpers.export(exports, "defaultIntegrations", ()=>(0, _sdkJs.defaultIntegrations));
parcelHelpers.export(exports, "flush", ()=>(0, _sdkJs.flush));
parcelHelpers.export(exports, "forceLoad", ()=>(0, _sdkJs.forceLoad));
parcelHelpers.export(exports, "init", ()=>(0, _sdkJs.init));
parcelHelpers.export(exports, "lastEventId", ()=>(0, _sdkJs.lastEventId));
parcelHelpers.export(exports, "onLoad", ()=>(0, _sdkJs.onLoad));
parcelHelpers.export(exports, "showReportDialog", ()=>(0, _sdkJs.showReportDialog));
parcelHelpers.export(exports, "wrap", ()=>(0, _sdkJs.wrap));
var _indexJs = require("./transports/index.js");
var _indexJs1 = require("./integrations/index.js");
var _core = require("@sentry/core");
var _clientJs = require("./client.js");
var _stackParsersJs = require("./stack-parsers.js");
var _sdkJs = require("./sdk.js");

},{"./transports/index.js":"h066g","./integrations/index.js":"dN4ch","@sentry/core":"czIi1","./client.js":"cPCsw","./stack-parsers.js":"c4WO4","./sdk.js":"hV4lt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h066g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeFetchTransport", ()=>(0, _fetchJs.makeFetchTransport));
parcelHelpers.export(exports, "makeXHRTransport", ()=>(0, _xhrJs.makeXHRTransport));
var _fetchJs = require("./fetch.js");
var _xhrJs = require("./xhr.js");

},{"./fetch.js":"9L9JJ","./xhr.js":"aupud","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9L9JJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeFetchTransport", ()=>makeFetchTransport);
var _core = require("@sentry/core");
var _utilsJs = require("./utils.js");
/**
 * Creates a Transport that uses the Fetch API to send events to Sentry.
 */ function makeFetchTransport(options, nativeFetch = (0, _utilsJs.getNativeFetchImplementation)()) {
    function makeRequest(request) {
        var requestOptions = {
            body: request.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: options.headers,
            ...options.fetchOptions
        };
        return nativeFetch(options.url, requestOptions).then((response)=>({
                statusCode: response.status,
                headers: {
                    "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": response.headers.get("Retry-After")
                }
            }));
    }
    return (0, _core.createTransport)(options, makeRequest);
}

},{"@sentry/core":"czIi1","./utils.js":"bid82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"czIi1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hub", ()=>(0, _hub.Hub));
parcelHelpers.export(exports, "Scope", ()=>(0, _hub.Scope));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _hub.addBreadcrumb));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _hub.addGlobalEventProcessor));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _hub.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _hub.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _hub.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _hub.configureScope));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _hub.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _hub.getHubFromCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _hub.makeMain));
parcelHelpers.export(exports, "setContext", ()=>(0, _hub.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _hub.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _hub.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _hub.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _hub.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _hub.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _hub.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _hub.withScope));
parcelHelpers.export(exports, "getEnvelopeEndpointWithUrlEncodedAuth", ()=>(0, _apiJs.getEnvelopeEndpointWithUrlEncodedAuth));
parcelHelpers.export(exports, "getReportDialogEndpoint", ()=>(0, _apiJs.getReportDialogEndpoint));
parcelHelpers.export(exports, "BaseClient", ()=>(0, _baseclientJs.BaseClient));
parcelHelpers.export(exports, "initAndBind", ()=>(0, _sdkJs.initAndBind));
parcelHelpers.export(exports, "createTransport", ()=>(0, _baseJs.createTransport));
parcelHelpers.export(exports, "SDK_VERSION", ()=>(0, _versionJs.SDK_VERSION));
parcelHelpers.export(exports, "getIntegrationsToSetup", ()=>(0, _integrationJs.getIntegrationsToSetup));
parcelHelpers.export(exports, "Integrations", ()=>_indexJs);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _functiontostringJs.FunctionToString));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _inboundfiltersJs.InboundFilters));
var _indexJs = require("./integrations/index.js");
var _hub = require("@sentry/hub");
var _apiJs = require("./api.js");
var _baseclientJs = require("./baseclient.js");
var _sdkJs = require("./sdk.js");
var _baseJs = require("./transports/base.js");
var _versionJs = require("./version.js");
var _integrationJs = require("./integration.js");
var _functiontostringJs = require("./integrations/functiontostring.js");
var _inboundfiltersJs = require("./integrations/inboundfilters.js");

},{"./integrations/index.js":"84U4E","@sentry/hub":"4kBQk","./api.js":"9y7Xs","./baseclient.js":"hnkV7","./sdk.js":"1CYXK","./transports/base.js":"6uL6y","./version.js":"hZ610","./integration.js":"4p6JO","./integrations/functiontostring.js":"iZ1Aj","./integrations/inboundfilters.js":"8kejO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84U4E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>(0, _functiontostringJs.FunctionToString));
parcelHelpers.export(exports, "InboundFilters", ()=>(0, _inboundfiltersJs.InboundFilters));
var _functiontostringJs = require("./functiontostring.js");
var _inboundfiltersJs = require("./inboundfilters.js");

},{"./functiontostring.js":"iZ1Aj","./inboundfilters.js":"8kejO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZ1Aj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionToString", ()=>FunctionToString);
var _utils = require("@sentry/utils");
let originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */ class FunctionToString {
    constructor(){
        FunctionToString.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "FunctionToString";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = FunctionToString.id;
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        originalFunctionToString = Function.prototype.toString;
        Function.prototype.toString = function(...args) {
            var context = (0, _utils.getOriginalFunction)(this) || this;
            return originalFunctionToString.apply(context, args);
        };
    }
}
FunctionToString.__initStatic();

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"axZXA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDomElement", ()=>(0, _browserJs.getDomElement));
parcelHelpers.export(exports, "getLocationHref", ()=>(0, _browserJs.getLocationHref));
parcelHelpers.export(exports, "htmlTreeAsString", ()=>(0, _browserJs.htmlTreeAsString));
parcelHelpers.export(exports, "dsnFromString", ()=>(0, _dsnJs.dsnFromString));
parcelHelpers.export(exports, "dsnToString", ()=>(0, _dsnJs.dsnToString));
parcelHelpers.export(exports, "makeDsn", ()=>(0, _dsnJs.makeDsn));
parcelHelpers.export(exports, "SentryError", ()=>(0, _errorJs.SentryError));
parcelHelpers.export(exports, "getGlobalObject", ()=>(0, _globalJs.getGlobalObject));
parcelHelpers.export(exports, "getGlobalSingleton", ()=>(0, _globalJs.getGlobalSingleton));
parcelHelpers.export(exports, "addInstrumentationHandler", ()=>(0, _instrumentJs.addInstrumentationHandler));
parcelHelpers.export(exports, "isDOMError", ()=>(0, _isJs.isDOMError));
parcelHelpers.export(exports, "isDOMException", ()=>(0, _isJs.isDOMException));
parcelHelpers.export(exports, "isElement", ()=>(0, _isJs.isElement));
parcelHelpers.export(exports, "isError", ()=>(0, _isJs.isError));
parcelHelpers.export(exports, "isErrorEvent", ()=>(0, _isJs.isErrorEvent));
parcelHelpers.export(exports, "isEvent", ()=>(0, _isJs.isEvent));
parcelHelpers.export(exports, "isInstanceOf", ()=>(0, _isJs.isInstanceOf));
parcelHelpers.export(exports, "isNaN", ()=>(0, _isJs.isNaN));
parcelHelpers.export(exports, "isPlainObject", ()=>(0, _isJs.isPlainObject));
parcelHelpers.export(exports, "isPrimitive", ()=>(0, _isJs.isPrimitive));
parcelHelpers.export(exports, "isRegExp", ()=>(0, _isJs.isRegExp));
parcelHelpers.export(exports, "isString", ()=>(0, _isJs.isString));
parcelHelpers.export(exports, "isSyntheticEvent", ()=>(0, _isJs.isSyntheticEvent));
parcelHelpers.export(exports, "isThenable", ()=>(0, _isJs.isThenable));
parcelHelpers.export(exports, "CONSOLE_LEVELS", ()=>(0, _loggerJs.CONSOLE_LEVELS));
parcelHelpers.export(exports, "consoleSandbox", ()=>(0, _loggerJs.consoleSandbox));
parcelHelpers.export(exports, "logger", ()=>(0, _loggerJs.logger));
parcelHelpers.export(exports, "memoBuilder", ()=>(0, _memoJs.memoBuilder));
parcelHelpers.export(exports, "addContextToFrame", ()=>(0, _miscJs.addContextToFrame));
parcelHelpers.export(exports, "addExceptionMechanism", ()=>(0, _miscJs.addExceptionMechanism));
parcelHelpers.export(exports, "addExceptionTypeValue", ()=>(0, _miscJs.addExceptionTypeValue));
parcelHelpers.export(exports, "arrayify", ()=>(0, _miscJs.arrayify));
parcelHelpers.export(exports, "checkOrSetAlreadyCaught", ()=>(0, _miscJs.checkOrSetAlreadyCaught));
parcelHelpers.export(exports, "getEventDescription", ()=>(0, _miscJs.getEventDescription));
parcelHelpers.export(exports, "parseSemver", ()=>(0, _miscJs.parseSemver));
parcelHelpers.export(exports, "uuid4", ()=>(0, _miscJs.uuid4));
parcelHelpers.export(exports, "dynamicRequire", ()=>(0, _nodeJs.dynamicRequire));
parcelHelpers.export(exports, "isNodeEnv", ()=>(0, _nodeJs.isNodeEnv));
parcelHelpers.export(exports, "loadModule", ()=>(0, _nodeJs.loadModule));
parcelHelpers.export(exports, "normalize", ()=>(0, _normalizeJs.normalize));
parcelHelpers.export(exports, "normalizeToSize", ()=>(0, _normalizeJs.normalizeToSize));
parcelHelpers.export(exports, "walk", ()=>(0, _normalizeJs.walk));
parcelHelpers.export(exports, "addNonEnumerableProperty", ()=>(0, _objectJs.addNonEnumerableProperty));
parcelHelpers.export(exports, "convertToPlainObject", ()=>(0, _objectJs.convertToPlainObject));
parcelHelpers.export(exports, "dropUndefinedKeys", ()=>(0, _objectJs.dropUndefinedKeys));
parcelHelpers.export(exports, "extractExceptionKeysForMessage", ()=>(0, _objectJs.extractExceptionKeysForMessage));
parcelHelpers.export(exports, "fill", ()=>(0, _objectJs.fill));
parcelHelpers.export(exports, "getOriginalFunction", ()=>(0, _objectJs.getOriginalFunction));
parcelHelpers.export(exports, "markFunctionWrapped", ()=>(0, _objectJs.markFunctionWrapped));
parcelHelpers.export(exports, "objectify", ()=>(0, _objectJs.objectify));
parcelHelpers.export(exports, "urlEncode", ()=>(0, _objectJs.urlEncode));
parcelHelpers.export(exports, "basename", ()=>(0, _pathJs.basename));
parcelHelpers.export(exports, "dirname", ()=>(0, _pathJs.dirname));
parcelHelpers.export(exports, "isAbsolute", ()=>(0, _pathJs.isAbsolute));
parcelHelpers.export(exports, "join", ()=>(0, _pathJs.join));
parcelHelpers.export(exports, "normalizePath", ()=>(0, _pathJs.normalizePath));
parcelHelpers.export(exports, "relative", ()=>(0, _pathJs.relative));
parcelHelpers.export(exports, "resolve", ()=>(0, _pathJs.resolve));
parcelHelpers.export(exports, "makePromiseBuffer", ()=>(0, _promisebufferJs.makePromiseBuffer));
parcelHelpers.export(exports, "addRequestDataToEvent", ()=>(0, _requestdataJs.addRequestDataToEvent));
parcelHelpers.export(exports, "addRequestDataToTransaction", ()=>(0, _requestdataJs.addRequestDataToTransaction));
parcelHelpers.export(exports, "extractPathForTransaction", ()=>(0, _requestdataJs.extractPathForTransaction));
parcelHelpers.export(exports, "extractRequestData", ()=>(0, _requestdataJs.extractRequestData));
parcelHelpers.export(exports, "severityFromString", ()=>(0, _severityJs.severityFromString));
parcelHelpers.export(exports, "severityLevelFromString", ()=>(0, _severityJs.severityLevelFromString));
parcelHelpers.export(exports, "validSeverityLevels", ()=>(0, _severityJs.validSeverityLevels));
parcelHelpers.export(exports, "createStackParser", ()=>(0, _stacktraceJs.createStackParser));
parcelHelpers.export(exports, "getFunctionName", ()=>(0, _stacktraceJs.getFunctionName));
parcelHelpers.export(exports, "nodeStackLineParser", ()=>(0, _stacktraceJs.nodeStackLineParser));
parcelHelpers.export(exports, "stackParserFromStackParserOptions", ()=>(0, _stacktraceJs.stackParserFromStackParserOptions));
parcelHelpers.export(exports, "stripSentryFramesAndReverse", ()=>(0, _stacktraceJs.stripSentryFramesAndReverse));
parcelHelpers.export(exports, "escapeStringForRegex", ()=>(0, _stringJs.escapeStringForRegex));
parcelHelpers.export(exports, "isMatchingPattern", ()=>(0, _stringJs.isMatchingPattern));
parcelHelpers.export(exports, "safeJoin", ()=>(0, _stringJs.safeJoin));
parcelHelpers.export(exports, "snipLine", ()=>(0, _stringJs.snipLine));
parcelHelpers.export(exports, "truncate", ()=>(0, _stringJs.truncate));
parcelHelpers.export(exports, "isNativeFetch", ()=>(0, _supportsJs.isNativeFetch));
parcelHelpers.export(exports, "supportsDOMError", ()=>(0, _supportsJs.supportsDOMError));
parcelHelpers.export(exports, "supportsDOMException", ()=>(0, _supportsJs.supportsDOMException));
parcelHelpers.export(exports, "supportsErrorEvent", ()=>(0, _supportsJs.supportsErrorEvent));
parcelHelpers.export(exports, "supportsFetch", ()=>(0, _supportsJs.supportsFetch));
parcelHelpers.export(exports, "supportsHistory", ()=>(0, _supportsJs.supportsHistory));
parcelHelpers.export(exports, "supportsNativeFetch", ()=>(0, _supportsJs.supportsNativeFetch));
parcelHelpers.export(exports, "supportsReferrerPolicy", ()=>(0, _supportsJs.supportsReferrerPolicy));
parcelHelpers.export(exports, "supportsReportingObserver", ()=>(0, _supportsJs.supportsReportingObserver));
parcelHelpers.export(exports, "SyncPromise", ()=>(0, _syncpromiseJs.SyncPromise));
parcelHelpers.export(exports, "rejectedSyncPromise", ()=>(0, _syncpromiseJs.rejectedSyncPromise));
parcelHelpers.export(exports, "resolvedSyncPromise", ()=>(0, _syncpromiseJs.resolvedSyncPromise));
parcelHelpers.export(exports, "_browserPerformanceTimeOriginMode", ()=>(0, _timeJs._browserPerformanceTimeOriginMode));
parcelHelpers.export(exports, "browserPerformanceTimeOrigin", ()=>(0, _timeJs.browserPerformanceTimeOrigin));
parcelHelpers.export(exports, "dateTimestampInSeconds", ()=>(0, _timeJs.dateTimestampInSeconds));
parcelHelpers.export(exports, "timestampInSeconds", ()=>(0, _timeJs.timestampInSeconds));
parcelHelpers.export(exports, "timestampWithMs", ()=>(0, _timeJs.timestampWithMs));
parcelHelpers.export(exports, "usingPerformanceAPI", ()=>(0, _timeJs.usingPerformanceAPI));
parcelHelpers.export(exports, "TRACEPARENT_REGEXP", ()=>(0, _tracingJs.TRACEPARENT_REGEXP));
parcelHelpers.export(exports, "extractTraceparentData", ()=>(0, _tracingJs.extractTraceparentData));
parcelHelpers.export(exports, "isBrowserBundle", ()=>(0, _envJs.isBrowserBundle));
parcelHelpers.export(exports, "addItemToEnvelope", ()=>(0, _envelopeJs.addItemToEnvelope));
parcelHelpers.export(exports, "createAttachmentEnvelopeItem", ()=>(0, _envelopeJs.createAttachmentEnvelopeItem));
parcelHelpers.export(exports, "createEnvelope", ()=>(0, _envelopeJs.createEnvelope));
parcelHelpers.export(exports, "envelopeItemTypeToDataCategory", ()=>(0, _envelopeJs.envelopeItemTypeToDataCategory));
parcelHelpers.export(exports, "forEachEnvelopeItem", ()=>(0, _envelopeJs.forEachEnvelopeItem));
parcelHelpers.export(exports, "serializeEnvelope", ()=>(0, _envelopeJs.serializeEnvelope));
parcelHelpers.export(exports, "createClientReportEnvelope", ()=>(0, _clientreportJs.createClientReportEnvelope));
parcelHelpers.export(exports, "DEFAULT_RETRY_AFTER", ()=>(0, _ratelimitJs.DEFAULT_RETRY_AFTER));
parcelHelpers.export(exports, "disabledUntil", ()=>(0, _ratelimitJs.disabledUntil));
parcelHelpers.export(exports, "isRateLimited", ()=>(0, _ratelimitJs.isRateLimited));
parcelHelpers.export(exports, "parseRetryAfterHeader", ()=>(0, _ratelimitJs.parseRetryAfterHeader));
parcelHelpers.export(exports, "updateRateLimits", ()=>(0, _ratelimitJs.updateRateLimits));
parcelHelpers.export(exports, "BAGGAGE_HEADER_NAME", ()=>(0, _baggageJs.BAGGAGE_HEADER_NAME));
parcelHelpers.export(exports, "MAX_BAGGAGE_STRING_LENGTH", ()=>(0, _baggageJs.MAX_BAGGAGE_STRING_LENGTH));
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX", ()=>(0, _baggageJs.SENTRY_BAGGAGE_KEY_PREFIX));
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", ()=>(0, _baggageJs.SENTRY_BAGGAGE_KEY_PREFIX_REGEX));
parcelHelpers.export(exports, "createBaggage", ()=>(0, _baggageJs.createBaggage));
parcelHelpers.export(exports, "getBaggageValue", ()=>(0, _baggageJs.getBaggageValue));
parcelHelpers.export(exports, "getSentryBaggageItems", ()=>(0, _baggageJs.getSentryBaggageItems));
parcelHelpers.export(exports, "getThirdPartyBaggage", ()=>(0, _baggageJs.getThirdPartyBaggage));
parcelHelpers.export(exports, "isBaggageMutable", ()=>(0, _baggageJs.isBaggageMutable));
parcelHelpers.export(exports, "isSentryBaggageEmpty", ()=>(0, _baggageJs.isSentryBaggageEmpty));
parcelHelpers.export(exports, "mergeAndSerializeBaggage", ()=>(0, _baggageJs.mergeAndSerializeBaggage));
parcelHelpers.export(exports, "parseBaggageHeader", ()=>(0, _baggageJs.parseBaggageHeader));
parcelHelpers.export(exports, "parseBaggageSetMutability", ()=>(0, _baggageJs.parseBaggageSetMutability));
parcelHelpers.export(exports, "serializeBaggage", ()=>(0, _baggageJs.serializeBaggage));
parcelHelpers.export(exports, "setBaggageImmutable", ()=>(0, _baggageJs.setBaggageImmutable));
parcelHelpers.export(exports, "setBaggageValue", ()=>(0, _baggageJs.setBaggageValue));
parcelHelpers.export(exports, "getNumberOfUrlSegments", ()=>(0, _urlJs.getNumberOfUrlSegments));
parcelHelpers.export(exports, "parseUrl", ()=>(0, _urlJs.parseUrl));
parcelHelpers.export(exports, "stripUrlQueryAndFragment", ()=>(0, _urlJs.stripUrlQueryAndFragment));
var _browserJs = require("./browser.js");
var _dsnJs = require("./dsn.js");
var _errorJs = require("./error.js");
var _globalJs = require("./global.js");
var _instrumentJs = require("./instrument.js");
var _isJs = require("./is.js");
var _loggerJs = require("./logger.js");
var _memoJs = require("./memo.js");
var _miscJs = require("./misc.js");
var _nodeJs = require("./node.js");
var _normalizeJs = require("./normalize.js");
var _objectJs = require("./object.js");
var _pathJs = require("./path.js");
var _promisebufferJs = require("./promisebuffer.js");
var _requestdataJs = require("./requestdata.js");
var _severityJs = require("./severity.js");
var _stacktraceJs = require("./stacktrace.js");
var _stringJs = require("./string.js");
var _supportsJs = require("./supports.js");
var _syncpromiseJs = require("./syncpromise.js");
var _timeJs = require("./time.js");
var _tracingJs = require("./tracing.js");
var _envJs = require("./env.js");
var _envelopeJs = require("./envelope.js");
var _clientreportJs = require("./clientreport.js");
var _ratelimitJs = require("./ratelimit.js");
var _baggageJs = require("./baggage.js");
var _urlJs = require("./url.js");

},{"./browser.js":"gFaJt","./dsn.js":"aEtqV","./error.js":"Cller","./global.js":"sU9xO","./instrument.js":"1x9a6","./is.js":"eYtRK","./logger.js":"8APzS","./memo.js":"7C6YP","./misc.js":"jSujy","./node.js":"jK4mb","./normalize.js":"4iHNw","./object.js":"gf9ji","./path.js":"DAFsy","./promisebuffer.js":"gKs4H","./requestdata.js":"QNghU","./severity.js":"3lT2u","./stacktrace.js":"cCTfh","./string.js":"l4oPu","./supports.js":"kvPB6","./syncpromise.js":"71YtY","./time.js":"1YO2R","./tracing.js":"7amt2","./env.js":"27cVT","./envelope.js":"hfY4L","./clientreport.js":"85TP7","./ratelimit.js":"iVIkA","./baggage.js":"2Y12e","./url.js":"98LcB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gFaJt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDomElement", ()=>getDomElement);
parcelHelpers.export(exports, "getLocationHref", ()=>getLocationHref);
parcelHelpers.export(exports, "htmlTreeAsString", ()=>htmlTreeAsString);
var _globalJs = require("./global.js");
var _isJs = require("./is.js");
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */ function htmlTreeAsString(elem, keyAttrs) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        let currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        let height = 0;
        let len = 0;
        var separator = " > ";
        var sepLength = separator.length;
        let nextStr;
        while(currentElem && (height++) < MAX_TRAVERSE_HEIGHT){
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN) break;
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    } catch (_oO) {
        return "<unknown>";
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */ function _htmlElementAsString(el, keyAttrs) {
    var elem = el;
    var out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i;
    if (!elem || !elem.tagName) return "";
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr)=>elem.getAttribute(keyAttr)).map((keyAttr)=>[
            keyAttr,
            elem.getAttribute(keyAttr)
        ]) : null;
    if (keyAttrPairs && keyAttrPairs.length) keyAttrPairs.forEach((keyAttrPair)=>{
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
    else {
        if (elem.id) out.push(`#${elem.id}`);
        className = elem.className;
        if (className && (0, _isJs.isString)(className)) {
            classes = className.split(/\s+/);
            for(i = 0; i < classes.length; i++)out.push(`.${classes[i]}`);
        }
    }
    var allowedAttrs = [
        "type",
        "name",
        "title",
        "alt"
    ];
    for(i = 0; i < allowedAttrs.length; i++){
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) out.push(`[${key}="${attr}"]`);
    }
    return out.join("");
}
/**
 * A safe form of location.href
 */ function getLocationHref() {
    var global = (0, _globalJs.getGlobalObject)();
    try {
        return global.document.location.href;
    } catch (oO) {
        return "";
    }
}
/**
 * Gets a DOM element by using document.querySelector.
 *
 * This wrapper will first check for the existance of the function before
 * actually calling it so that we don't have to take care of this check,
 * every time we want to access the DOM.
 *
 * Reason: DOM/querySelector is not available in all environments.
 *
 * We have to cast to any because utils can be consumed by a variety of environments,
 * and we don't want to break TS users. If you know what element will be selected by
 * `document.querySelector`, specify it as part of the generic call. For example,
 * `var element = getDomElement<Element>('selector');`
 *
 * @param selector the selector string passed on to document.querySelector
 */ function getDomElement(selector) {
    var global = (0, _globalJs.getGlobalObject)();
    if (global.document && global.document.querySelector) return global.document.querySelector(selector);
    return null;
}

},{"./global.js":"sU9xO","./is.js":"eYtRK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sU9xO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGlobalObject", ()=>getGlobalObject);
parcelHelpers.export(exports, "getGlobalSingleton", ()=>getGlobalSingleton);
var _nodeJs = require("./node.js");
var global = arguments[3];
/** Internal */ var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */ function getGlobalObject() {
    return (0, _nodeJs.isNodeEnv)() ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : fallbackGlobalObject;
}
/**
 * Returns a global singleton contained in the global `__SENTRY__` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `getGlobalObject`'s return value
 * @returns the singleton
 */ function getGlobalSingleton(name, creator, obj) {
    var global = obj || getGlobalObject();
    var __SENTRY__ = global.__SENTRY__ = global.__SENTRY__ || {};
    var singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
}

},{"./node.js":"jK4mb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jK4mb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dynamicRequire", ()=>dynamicRequire);
parcelHelpers.export(exports, "isNodeEnv", ()=>isNodeEnv);
parcelHelpers.export(exports, "loadModule", ()=>loadModule);
var _envJs = require("./env.js");
var process = require("process");
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */ /**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */ function isNodeEnv() {
    // explicitly check for browser bundles as those can be optimized statically
    // by terser/rollup.
    return !(0, _envJs.isBrowserBundle)() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */ function dynamicRequire(mod, request) {
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */ function loadModule(moduleName) {
    let mod;
    try {
        mod = dynamicRequire(module, moduleName);
    } catch (e) {
    // no-empty
    }
    try {
        const { cwd  } = dynamicRequire(module, "process");
        mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`);
    } catch (e1) {
    // no-empty
    }
    return mod;
}

},{"./env.js":"27cVT","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27cVT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBrowserBundle", ()=>isBrowserBundle);
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These fags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */ /**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */ function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"eYtRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDOMError", ()=>isDOMError);
parcelHelpers.export(exports, "isDOMException", ()=>isDOMException);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isError", ()=>isError);
parcelHelpers.export(exports, "isErrorEvent", ()=>isErrorEvent);
parcelHelpers.export(exports, "isEvent", ()=>isEvent);
parcelHelpers.export(exports, "isInstanceOf", ()=>isInstanceOf);
parcelHelpers.export(exports, "isNaN", ()=>isNaN);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPrimitive", ()=>isPrimitive);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSyntheticEvent", ()=>isSyntheticEvent);
parcelHelpers.export(exports, "isThenable", ()=>isThenable);
var objectToString = Object.prototype.toString;
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isError(wat) {
    switch(objectToString.call(wat)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value is an instance of the given built-in class.
 *
 * @param wat The value to be checked
 * @param className
 * @returns A boolean representing the result.
 */ function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isErrorEvent(wat) {
    return isBuiltin(wat, "ErrorEvent");
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isDOMError(wat) {
    return isBuiltin(wat, "DOMError");
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isDOMException(wat) {
    return isBuiltin(wat, "DOMException");
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isString(wat) {
    return isBuiltin(wat, "String");
}
/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isPrimitive(wat) {
    return wat === null || typeof wat !== "object" && typeof wat !== "function";
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isPlainObject(wat) {
    return isBuiltin(wat, "Object");
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isEvent(wat) {
    return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isElement(wat) {
    return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isRegExp(wat) {
    return isBuiltin(wat, "RegExp");
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */ function isThenable(wat) {
    return Boolean(wat && wat.then && typeof wat.then === "function");
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isSyntheticEvent(wat) {
    return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
/**
 * Checks whether given value is NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */ function isNaN(wat) {
    return typeof wat === "number" && wat !== wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */ function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    } catch (_e) {
        return false;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEtqV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dsnFromString", ()=>dsnFromString);
parcelHelpers.export(exports, "dsnToString", ()=>dsnToString);
parcelHelpers.export(exports, "makeDsn", ()=>makeDsn);
var _errorJs = require("./error.js");
/** Regular expression used to parse a Dsn. */ var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
    return protocol === "http" || protocol === "https";
}
/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */ function dsnToString(dsn, withPassword = false) {
    const { host , path , pass , port , projectId , protocol , publicKey  } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}` + `@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents
 */ function dsnFromString(str) {
    var match = DSN_REGEX.exec(str);
    if (!match) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: ${str}`);
    const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
    let path = "";
    let projectId = lastPath;
    var split = projectId.split("/");
    if (split.length > 1) {
        path = split.slice(0, -1).join("/");
        projectId = split.pop();
    }
    if (projectId) {
        var projectMatch = projectId.match(/^\d+/);
        if (projectMatch) projectId = projectMatch[0];
    }
    return dsnFromComponents({
        host,
        pass,
        path,
        projectId,
        port,
        protocol: protocol,
        publicKey
    });
}
function dsnFromComponents(components) {
    return {
        protocol: components.protocol,
        publicKey: components.publicKey || "",
        pass: components.pass || "",
        host: components.host,
        port: components.port || "",
        path: components.path || "",
        projectId: components.projectId
    };
}
function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) return;
    const { port , projectId , protocol  } = dsn;
    var requiredComponents = [
        "protocol",
        "publicKey",
        "host",
        "projectId"
    ];
    requiredComponents.forEach((component)=>{
        if (!dsn[component]) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: ${component} missing`);
    });
    if (!projectId.match(/^\d+$/)) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    if (!isValidProtocol(protocol)) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    if (port && isNaN(parseInt(port, 10))) throw new (0, _errorJs.SentryError)(`Invalid Sentry Dsn: Invalid port ${port}`);
    return true;
}
/** The Sentry Dsn, identifying a Sentry instance and project. */ function makeDsn(from) {
    var components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
}

},{"./error.js":"Cller","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Cller":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SentryError", ()=>SentryError);
/** An error emitted by Sentry SDKs and related utilities. */ class SentryError extends Error {
    /** Display name of this error instance. */ constructor(message, logLevel = "warn"){
        super(message);
        this.message = message;
        this.name = new.target.prototype.constructor.name;
        // This sets the prototype to be `Error`, not `SentryError`. It's unclear why we do this, but commenting this line
        // out causes various (seemingly totally unrelated) playwright tests consistently time out. FYI, this makes
        // instances of `SentryError` fail `obj instanceof SentryError` checks.
        Object.setPrototypeOf(this, new.target.prototype);
        this.logLevel = logLevel;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1x9a6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addInstrumentationHandler", ()=>addInstrumentationHandler);
var _globalJs = require("./global.js");
var _isJs = require("./is.js");
var _loggerJs = require("./logger.js");
var _objectJs = require("./object.js");
var _stacktraceJs = require("./stacktrace.js");
var _supportsJs = require("./supports.js");
var global = (0, _globalJs.getGlobalObject)();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */ var handlers = {};
var instrumented = {};
/** Instruments given API */ function instrument(type) {
    if (instrumented[type]) return;
    instrumented[type] = true;
    switch(type){
        case "console":
            instrumentConsole();
            break;
        case "dom":
            instrumentDOM();
            break;
        case "xhr":
            instrumentXHR();
            break;
        case "fetch":
            instrumentFetch();
            break;
        case "history":
            instrumentHistory();
            break;
        case "error":
            instrumentError();
            break;
        case "unhandledrejection":
            instrumentUnhandledRejection();
            break;
        default:
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn("unknown instrumentation type:", type);
            return;
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */ function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
}
/** JSDoc */ function triggerHandlers(type, data) {
    if (!type || !handlers[type]) return;
    for (var handler of handlers[type] || [])try {
        handler(data);
    } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${(0, _stacktraceJs.getFunctionName)(handler)}\nError:`, e);
    }
}
/** JSDoc */ function instrumentConsole() {
    if (!("console" in global)) return;
    (0, _loggerJs.CONSOLE_LEVELS).forEach(function(level) {
        if (!(level in global.console)) return;
        (0, _objectJs.fill)(global.console, level, function(originalConsoleMethod) {
            return function(...args) {
                triggerHandlers("console", {
                    args,
                    level
                });
                // this fails for some browsers. :(
                if (originalConsoleMethod) originalConsoleMethod.apply(global.console, args);
            };
        });
    });
}
/** JSDoc */ function instrumentFetch() {
    if (!(0, _supportsJs.supportsNativeFetch)()) return;
    (0, _objectJs.fill)(global, "fetch", function(originalFetch) {
        return function(...args) {
            var handlerData = {
                args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args)
                },
                startTimestamp: Date.now()
            };
            triggerHandlers("fetch", {
                ...handlerData
            });
            return originalFetch.apply(global, args).then((response)=>{
                triggerHandlers("fetch", {
                    ...handlerData,
                    endTimestamp: Date.now(),
                    response
                });
                return response;
            }, (error)=>{
                triggerHandlers("fetch", {
                    ...handlerData,
                    endTimestamp: Date.now(),
                    error
                });
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/** Extract `method` from fetch call arguments */ function getFetchMethod(fetchArgs = []) {
    if ("Request" in global && (0, _isJs.isInstanceOf)(fetchArgs[0], Request) && fetchArgs[0].method) return String(fetchArgs[0].method).toUpperCase();
    if (fetchArgs[1] && fetchArgs[1].method) return String(fetchArgs[1].method).toUpperCase();
    return "GET";
}
/** Extract `url` from fetch call arguments */ function getFetchUrl(fetchArgs = []) {
    if (typeof fetchArgs[0] === "string") return fetchArgs[0];
    if ("Request" in global && (0, _isJs.isInstanceOf)(fetchArgs[0], Request)) return fetchArgs[0].url;
    return String(fetchArgs[0]);
}
/** JSDoc */ function instrumentXHR() {
    if (!("XMLHttpRequest" in global)) return;
    var xhrproto = XMLHttpRequest.prototype;
    (0, _objectJs.fill)(xhrproto, "open", function(originalOpen) {
        return function(...args) {
            var xhr = this;
            var url = args[1];
            var xhrInfo = xhr.__sentry_xhr__ = {
                method: (0, _isJs.isString)(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1]
            };
            // if Sentry key appears in URL, don't capture it as a request
            if ((0, _isJs.isString)(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) xhr.__sentry_own_request__ = true;
            var onreadystatechangeHandler = function() {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        xhrInfo.status_code = xhr.status;
                    } catch (e) {
                    /* do nothing */ }
                    triggerHandlers("xhr", {
                        args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr
                    });
                }
            };
            if ("onreadystatechange" in xhr && typeof xhr.onreadystatechange === "function") (0, _objectJs.fill)(xhr, "onreadystatechange", function(original) {
                return function(...readyStateArgs) {
                    onreadystatechangeHandler();
                    return original.apply(xhr, readyStateArgs);
                };
            });
            else xhr.addEventListener("readystatechange", onreadystatechangeHandler);
            return originalOpen.apply(xhr, args);
        };
    });
    (0, _objectJs.fill)(xhrproto, "send", function(originalSend) {
        return function(...args) {
            if (this.__sentry_xhr__ && args[0] !== undefined) this.__sentry_xhr__.body = args[0];
            triggerHandlers("xhr", {
                args,
                startTimestamp: Date.now(),
                xhr: this
            });
            return originalSend.apply(this, args);
        };
    });
}
let lastHref;
/** JSDoc */ function instrumentHistory() {
    if (!(0, _supportsJs.supportsHistory)()) return;
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function(...args) {
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers("history", {
            from,
            to
        });
        if (oldOnPopState) // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
        // https://github.com/getsentry/sentry-javascript/issues/3344
        // https://github.com/bugsnag/bugsnag-js/issues/469
        try {
            return oldOnPopState.apply(this, args);
        } catch (_oO) {
        // no-empty
        }
    };
    /** @hidden */ function historyReplacementFunction(originalHistoryFunction) {
        return function(...args) {
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers("history", {
                    from,
                    to
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    (0, _objectJs.fill)(global.history, "pushState", historyReplacementFunction);
    (0, _objectJs.fill)(global.history, "replaceState", historyReplacementFunction);
}
var debounceDuration = 1000;
let debounceTimerID;
let lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */ function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) return true;
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) return true;
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) return true;
    } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */ function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== "keypress") return false;
    try {
        var target = event.target;
        if (!target || !target.tagName) return true;
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return false;
    } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */ function makeDOMEventHandler(handler, globalListener = false) {
    return (event)=>{
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) return;
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) return;
        var name = event.type === "keypress" ? "input" : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name,
                global: globalListener
            });
            lastCapturedEvent = event;
        } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name,
                global: globalListener
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global.setTimeout(()=>{
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */ function instrumentDOM() {
    if (!("document" in global)) return;
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, "dom");
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global.document.addEventListener("click", globalDOMEventHandler, false);
    global.document.addEventListener("keypress", globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    [
        "EventTarget",
        "Node"
    ].forEach((target)=>{
        var proto = global[target] && global[target].prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
        (0, _objectJs.fill)(proto, "addEventListener", function(originalAddEventListener) {
            return function(type, listener, options) {
                if (type === "click" || type == "keypress") try {
                    var el = this;
                    var handlers = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
                    var handlerForType = handlers[type] = handlers[type] || {
                        refCount: 0
                    };
                    if (!handlerForType.handler) {
                        var handler = makeDOMEventHandler(triggerDOMHandler);
                        handlerForType.handler = handler;
                        originalAddEventListener.call(this, type, handler, options);
                    }
                    handlerForType.refCount += 1;
                } catch (e) {
                // Accessing dom properties is always fragile.
                // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        (0, _objectJs.fill)(proto, "removeEventListener", function(originalRemoveEventListener) {
            return function(type, listener, options) {
                if (type === "click" || type == "keypress") try {
                    var el = this;
                    var handlers = el.__sentry_instrumentation_handlers__ || {};
                    var handlerForType = handlers[type];
                    if (handlerForType) {
                        handlerForType.refCount -= 1;
                        // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                        if (handlerForType.refCount <= 0) {
                            originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                            handlerForType.handler = undefined;
                            delete handlers[type];
                        }
                        // If there are no longer any custom handlers of any type on this element, cleanup everything.
                        if (Object.keys(handlers).length === 0) delete el.__sentry_instrumentation_handlers__;
                    }
                } catch (e) {
                // Accessing dom properties is always fragile.
                // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
let _oldOnErrorHandler = null;
/** JSDoc */ function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function(msg, url, line, column, error) {
        triggerHandlers("error", {
            column,
            error,
            line,
            msg,
            url
        });
        if (_oldOnErrorHandler) return _oldOnErrorHandler.apply(this, arguments);
        return false;
    };
}
let _oldOnUnhandledRejectionHandler = null;
/** JSDoc */ function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function(e) {
        triggerHandlers("unhandledrejection", e);
        if (_oldOnUnhandledRejectionHandler) return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        return true;
    };
}

},{"./global.js":"sU9xO","./is.js":"eYtRK","./logger.js":"8APzS","./object.js":"gf9ji","./stacktrace.js":"cCTfh","./supports.js":"kvPB6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8APzS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONSOLE_LEVELS", ()=>CONSOLE_LEVELS);
parcelHelpers.export(exports, "consoleSandbox", ()=>consoleSandbox);
parcelHelpers.export(exports, "logger", ()=>logger);
var _globalJs = require("./global.js");
// TODO: Implement different loggers for different environments
var global = (0, _globalJs.getGlobalObject)();
/** Prefix for logging strings */ var PREFIX = "Sentry Logger ";
var CONSOLE_LEVELS = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
];
/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */ function consoleSandbox(callback) {
    var global = (0, _globalJs.getGlobalObject)();
    if (!("console" in global)) return callback();
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    CONSOLE_LEVELS.forEach((level)=>{
        // TODO(v7): Remove this check as it's only needed for Node 6
        var originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
        if (level in global.console && originalWrappedFunc) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalWrappedFunc;
        }
    });
    try {
        return callback();
    } finally{
        // Revert restoration to wrapped state
        Object.keys(wrappedLevels).forEach((level)=>{
            originalConsole[level] = wrappedLevels[level];
        });
    }
}
function makeLogger() {
    let enabled = false;
    var logger = {
        enable: ()=>{
            enabled = true;
        },
        disable: ()=>{
            enabled = false;
        }
    };
    if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) CONSOLE_LEVELS.forEach((name)=>{
        logger[name] = (...args)=>{
            if (enabled) consoleSandbox(()=>{
                global.console[name](`${PREFIX}[${name}]:`, ...args);
            });
        };
    });
    else CONSOLE_LEVELS.forEach((name)=>{
        logger[name] = ()=>undefined;
    });
    return logger;
}
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
let logger;
if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) logger = (0, _globalJs.getGlobalSingleton)("logger", makeLogger);
else logger = makeLogger();

},{"./global.js":"sU9xO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gf9ji":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addNonEnumerableProperty", ()=>addNonEnumerableProperty);
parcelHelpers.export(exports, "convertToPlainObject", ()=>convertToPlainObject);
parcelHelpers.export(exports, "dropUndefinedKeys", ()=>dropUndefinedKeys);
parcelHelpers.export(exports, "extractExceptionKeysForMessage", ()=>extractExceptionKeysForMessage);
parcelHelpers.export(exports, "fill", ()=>fill);
parcelHelpers.export(exports, "getOriginalFunction", ()=>getOriginalFunction);
parcelHelpers.export(exports, "markFunctionWrapped", ()=>markFunctionWrapped);
parcelHelpers.export(exports, "objectify", ()=>objectify);
parcelHelpers.export(exports, "urlEncode", ()=>urlEncode);
var _browserJs = require("./browser.js");
var _isJs = require("./is.js");
var _stringJs = require("./string.js");
/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */ function fill(source, name, replacementFactory) {
    if (!(name in source)) return;
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === "function") try {
        markFunctionWrapped(wrapped, original);
    } catch (_Oo) {
    // This can throw if multiple fill happens on a global object like XMLHttpRequest
    // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
    source[name] = wrapped;
}
/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */ function addNonEnumerableProperty(obj, name, value) {
    Object.defineProperty(obj, name, {
        // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
        value: value,
        writable: true,
        configurable: true
    });
}
/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */ function markFunctionWrapped(wrapped, original) {
    var proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
}
/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */ function getOriginalFunction(func) {
    return func.__sentry_original__;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */ function urlEncode(object) {
    return Object.keys(object).map((key)=>`${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
}
/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argurment itself, when value is neither an Event nor
 *  an Error.
 */ function convertToPlainObject(value) {
    if ((0, _isJs.isError)(value)) return {
        message: value.message,
        name: value.name,
        stack: value.stack,
        ...getOwnProperties(value)
    };
    else if ((0, _isJs.isEvent)(value)) {
        var newObj = {
            type: value.type,
            target: serializeEventTarget(value.target),
            currentTarget: serializeEventTarget(value.currentTarget),
            ...getOwnProperties(value)
        };
        if (typeof CustomEvent !== "undefined" && (0, _isJs.isInstanceOf)(value, CustomEvent)) newObj.detail = value.detail;
        return newObj;
    } else return value;
}
/** Creates a string representation of the target of an `Event` object */ function serializeEventTarget(target) {
    try {
        return (0, _isJs.isElement)(target) ? (0, _browserJs.htmlTreeAsString)(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
        return "<unknown>";
    }
}
/** Filters out all but an object's own properties */ function getOwnProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
        var extractedProps = {};
        for(var property in obj)if (Object.prototype.hasOwnProperty.call(obj, property)) extractedProps[property] = obj[property];
        return extractedProps;
    } else return {};
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */ function extractExceptionKeysForMessage(exception, maxLength = 40) {
    var keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    if (!keys.length) return "[object has no keys]";
    if (keys[0].length >= maxLength) return (0, _stringJs.truncate)(keys[0], maxLength);
    for(let includedKeys = keys.length; includedKeys > 0; includedKeys--){
        var serialized = keys.slice(0, includedKeys).join(", ");
        if (serialized.length > maxLength) continue;
        if (includedKeys === keys.length) return serialized;
        return (0, _stringJs.truncate)(serialized, maxLength);
    }
    return "";
}
/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 */ function dropUndefinedKeys(inputValue) {
    // This map keeps track of what already visited nodes map to.
    // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
    // references as the input object.
    var memoizationMap = new Map();
    // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
    return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
    if ((0, _isJs.isPlainObject)(inputValue)) {
        // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
        var memoVal = memoizationMap.get(inputValue);
        if (memoVal !== undefined) return memoVal;
        var returnValue = {};
        // Store the mapping of this value in case we visit it again, in case of circular data
        memoizationMap.set(inputValue, returnValue);
        for (var key of Object.keys(inputValue))if (typeof inputValue[key] !== "undefined") returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
        return returnValue;
    }
    if (Array.isArray(inputValue)) {
        // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
        var memoVal = memoizationMap.get(inputValue);
        if (memoVal !== undefined) return memoVal;
        var returnValue = [];
        // Store the mapping of this value in case we visit it again, in case of circular data
        memoizationMap.set(inputValue, returnValue);
        inputValue.forEach((item)=>{
            returnValue.push(_dropUndefinedKeys(item, memoizationMap));
        });
        return returnValue;
    }
    return inputValue;
}
/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */ function objectify(wat) {
    let objectified;
    switch(true){
        case wat === undefined || wat === null:
            objectified = new String(wat);
            break;
        // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
        // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
        // an object in order to wrap it.
        case typeof wat === "symbol" || typeof wat === "bigint":
            objectified = Object(wat);
            break;
        // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
        case (0, _isJs.isPrimitive)(wat):
            objectified = new wat.constructor(wat);
            break;
        // by process of elimination, at this point we know that `wat` must already be an object
        default:
            objectified = wat;
            break;
    }
    return objectified;
}

},{"./browser.js":"gFaJt","./is.js":"eYtRK","./string.js":"l4oPu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4oPu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "escapeStringForRegex", ()=>escapeStringForRegex);
parcelHelpers.export(exports, "isMatchingPattern", ()=>isMatchingPattern);
parcelHelpers.export(exports, "safeJoin", ()=>safeJoin);
parcelHelpers.export(exports, "snipLine", ()=>snipLine);
parcelHelpers.export(exports, "truncate", ()=>truncate);
var _isJs = require("./is.js");
/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */ function truncate(str, max = 0) {
    if (typeof str !== "string" || max === 0) return str;
    return str.length <= max ? str : `${str.substr(0, max)}...`;
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */ function snipLine(line, colno) {
    let newLine = line;
    var lineLength = newLine.length;
    if (lineLength <= 150) return newLine;
    if (colno > lineLength) colno = lineLength;
    let start = Math.max(colno - 60, 0);
    if (start < 5) start = 0;
    let end = Math.min(start + 140, lineLength);
    if (end > lineLength - 5) end = lineLength;
    if (end === lineLength) start = Math.max(end - 140, 0);
    newLine = newLine.slice(start, end);
    if (start > 0) newLine = `'{snip} ${newLine}`;
    if (end < lineLength) newLine += " {snip}";
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */ function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) return "";
    var output = [];
    for(let i = 0; i < input.length; i++){
        var value = input[i];
        try {
            output.push(String(value));
        } catch (e) {
            output.push("[value cannot be serialized]");
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */ function isMatchingPattern(value, pattern) {
    if (!(0, _isJs.isString)(value)) return false;
    if ((0, _isJs.isRegExp)(pattern)) return pattern.test(value);
    if (typeof pattern === "string") return value.indexOf(pattern) !== -1;
    return false;
}
/**
 * Given a string, escape characters which have meaning in the regex grammar, such that the result is safe to feed to
 * `new RegExp()`.
 *
 * Based on https://github.com/sindresorhus/escape-string-regexp. Vendored to a) reduce the size by skipping the runtime
 * type-checking, and b) ensure it gets down-compiled for old versions of Node (the published package only supports Node
 * 12+).
 *
 * @param regexString The string to escape
 * @returns An version of the string with all special regex characters escaped
 */ function escapeStringForRegex(regexString) {
    // escape the hyphen separately so we can also replace it with a unicode literal hyphen, to avoid the problems
    // discussed in https://github.com/sindresorhus/escape-string-regexp/issues/20.
    return regexString.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

},{"./is.js":"eYtRK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCTfh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStackParser", ()=>createStackParser);
parcelHelpers.export(exports, "getFunctionName", ()=>getFunctionName);
parcelHelpers.export(exports, "nodeStackLineParser", ()=>nodeStackLineParser);
parcelHelpers.export(exports, "stackParserFromStackParserOptions", ()=>stackParserFromStackParserOptions);
parcelHelpers.export(exports, "stripSentryFramesAndReverse", ()=>stripSentryFramesAndReverse);
var _buildPolyfills = require("./buildPolyfills");
var STACKTRACE_LIMIT = 50;
/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */ function createStackParser(...parsers) {
    var sortedParsers = parsers.sort((a, b)=>a[0] - b[0]).map((p)=>p[1]);
    return (stack, skipFirst = 0)=>{
        var frames = [];
        for (var line of stack.split("\n").slice(skipFirst)){
            // https://github.com/getsentry/sentry-javascript/issues/5459
            // Remove webpack (error: *) wrappers
            var cleanedLine = line.replace(/\(error: (.*)\)/, "$1");
            for (var parser of sortedParsers){
                var frame = parser(cleanedLine);
                if (frame) {
                    frames.push(frame);
                    break;
                }
            }
        }
        return stripSentryFramesAndReverse(frames);
    };
}
/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */ function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) return createStackParser(...stackParser);
    return stackParser;
}
/**
 * @hidden
 */ function stripSentryFramesAndReverse(stack) {
    if (!stack.length) return [];
    let localStack = stack;
    var firstFrameFunction = localStack[0].function || "";
    var lastFrameFunction = localStack[localStack.length - 1].function || "";
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf("captureMessage") !== -1 || firstFrameFunction.indexOf("captureException") !== -1) localStack = localStack.slice(1);
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf("sentryWrapped") !== -1) localStack = localStack.slice(0, -1);
    // The frame where the crash happened, should be the last entry in the array
    return localStack.slice(0, STACKTRACE_LIMIT).map((frame)=>({
            ...frame,
            filename: frame.filename || localStack[0].filename,
            function: frame.function || "?"
        })).reverse();
}
var defaultFunctionName = "<anonymous>";
/**
 * Safely extract function name from itself
 */ function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== "function") return defaultFunctionName;
        return fn.name || defaultFunctionName;
    } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
function node(getModule) {
    var FILENAME_MATCH = /^\s*[-]{4,}$/;
    var FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
    return (line)=>{
        if (line.match(FILENAME_MATCH)) return {
            filename: line
        };
        var lineMatch = line.match(FULL_MATCH);
        if (!lineMatch) return undefined;
        let object;
        let method;
        let functionName;
        let typeName;
        let methodName;
        if (lineMatch[1]) {
            functionName = lineMatch[1];
            let methodStart = functionName.lastIndexOf(".");
            if (functionName[methodStart - 1] === ".") methodStart--;
            if (methodStart > 0) {
                object = functionName.substr(0, methodStart);
                method = functionName.substr(methodStart + 1);
                var objectEnd = object.indexOf(".Module");
                if (objectEnd > 0) {
                    functionName = functionName.substr(objectEnd + 1);
                    object = object.substr(0, objectEnd);
                }
            }
            typeName = undefined;
        }
        if (method) {
            typeName = object;
            methodName = method;
        }
        if (method === "<anonymous>") {
            methodName = undefined;
            functionName = undefined;
        }
        if (functionName === undefined) {
            methodName = methodName || "<anonymous>";
            functionName = typeName ? `${typeName}.${methodName}` : methodName;
        }
        var filename = (0, _buildPolyfills._optionalChain)([
            lineMatch,
            "access",
            (_)=>_[2],
            "optionalAccess",
            (_2)=>_2.startsWith,
            "call",
            (_3)=>_3("file://")
        ]) ? lineMatch[2].substr(7) : lineMatch[2];
        var isNative = lineMatch[5] === "native";
        var isInternal = isNative || filename && !filename.startsWith("/") && !filename.startsWith(".") && filename.indexOf(":\\") !== 1;
        // in_app is all that's not an internal Node function or a module within node_modules
        // note that isNative appears to return true even for node core libraries
        // see https://github.com/getsentry/raven-node/issues/176
        var in_app = !isInternal && filename !== undefined && !filename.includes("node_modules/");
        return {
            filename,
            module: (0, _buildPolyfills._optionalChain)([
                getModule,
                "optionalCall",
                (_4)=>_4(filename)
            ]),
            function: functionName,
            lineno: parseInt(lineMatch[3], 10) || undefined,
            colno: parseInt(lineMatch[4], 10) || undefined,
            in_app
        };
    };
}
/**
 * Node.js stack line parser
 *
 * This is in @sentry/utils so it can be used from the Electron SDK in the browser for when `nodeIntegration == true`.
 * This allows it to be used without referencing or importing any node specific code which causes bundlers to complain
 */ function nodeStackLineParser(getModule) {
    return [
        90,
        node(getModule)
    ];
}

},{"./buildPolyfills":"5m0KU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5m0KU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_asyncNullishCoalesce", ()=>(0, _asyncNullishCoalesceJs._asyncNullishCoalesce));
parcelHelpers.export(exports, "_asyncOptionalChain", ()=>(0, _asyncOptionalChainJs._asyncOptionalChain));
parcelHelpers.export(exports, "_asyncOptionalChainDelete", ()=>(0, _asyncOptionalChainDeleteJs._asyncOptionalChainDelete));
parcelHelpers.export(exports, "_createNamedExportFrom", ()=>(0, _createNamedExportFromJs._createNamedExportFrom));
parcelHelpers.export(exports, "_createStarExport", ()=>(0, _createStarExportJs._createStarExport));
parcelHelpers.export(exports, "_interopDefault", ()=>(0, _interopDefaultJs._interopDefault));
parcelHelpers.export(exports, "_interopNamespace", ()=>(0, _interopNamespaceJs._interopNamespace));
parcelHelpers.export(exports, "_interopNamespaceDefaultOnly", ()=>(0, _interopNamespaceDefaultOnlyJs._interopNamespaceDefaultOnly));
parcelHelpers.export(exports, "_interopRequireDefault", ()=>(0, _interopRequireDefaultJs._interopRequireDefault));
parcelHelpers.export(exports, "_interopRequireWildcard", ()=>(0, _interopRequireWildcardJs._interopRequireWildcard));
parcelHelpers.export(exports, "_nullishCoalesce", ()=>(0, _nullishCoalesceJs._nullishCoalesce));
parcelHelpers.export(exports, "_optionalChain", ()=>(0, _optionalChainJs._optionalChain));
parcelHelpers.export(exports, "_optionalChainDelete", ()=>(0, _optionalChainDeleteJs._optionalChainDelete));
var _asyncNullishCoalesceJs = require("./_asyncNullishCoalesce.js");
var _asyncOptionalChainJs = require("./_asyncOptionalChain.js");
var _asyncOptionalChainDeleteJs = require("./_asyncOptionalChainDelete.js");
var _createNamedExportFromJs = require("./_createNamedExportFrom.js");
var _createStarExportJs = require("./_createStarExport.js");
var _interopDefaultJs = require("./_interopDefault.js");
var _interopNamespaceJs = require("./_interopNamespace.js");
var _interopNamespaceDefaultOnlyJs = require("./_interopNamespaceDefaultOnly.js");
var _interopRequireDefaultJs = require("./_interopRequireDefault.js");
var _interopRequireWildcardJs = require("./_interopRequireWildcard.js");
var _nullishCoalesceJs = require("./_nullishCoalesce.js");
var _optionalChainJs = require("./_optionalChain.js");
var _optionalChainDeleteJs = require("./_optionalChainDelete.js");

},{"./_asyncNullishCoalesce.js":false,"./_asyncOptionalChain.js":false,"./_asyncOptionalChainDelete.js":false,"./_createNamedExportFrom.js":false,"./_createStarExport.js":false,"./_interopDefault.js":false,"./_interopNamespace.js":false,"./_interopNamespaceDefaultOnly.js":false,"./_interopRequireDefault.js":false,"./_interopRequireWildcard.js":false,"./_nullishCoalesce.js":"hi8q8","./_optionalChain.js":"2Ahf1","./_optionalChainDelete.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hi8q8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Sucrase version:
// function _nullishCoalesce(lhs, rhsFn) {
//   if (lhs != null) {
//     return lhs;
//   } else {
//     return rhsFn();
//   }
// }
parcelHelpers.export(exports, "_nullishCoalesce", ()=>_nullishCoalesce);
/**
 * Polyfill for the nullish coalescing operator (`??`).
 *
 * Note that the RHS is wrapped in a function so that if it's a computed value, that evaluation won't happen unless the
 * LHS evaluates to a nullish value, to mimic the operator's short-circuiting behavior.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param lhs The value of the expression to the left of the `??`
 * @param rhsFn A function returning the value of the expression to the right of the `??`
 * @returns The LHS value, unless it's `null` or `undefined`, in which case, the RHS value
 */ function _nullishCoalesce(lhs, rhsFn) {
    // by checking for loose equality to `null`, we catch both `null` and `undefined`
    return lhs != null ? lhs : rhsFn();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Ahf1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Sucrase version
// function _optionalChain(ops) {
//   let lastAccessLHS = undefined;
//   let value = ops[0];
//   let i = 1;
//   while (i < ops.length) {
//     var op = ops[i];
//     var fn = ops[i + 1];
//     i += 2;
//     if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
//       return undefined;
//     }
//     if (op === 'access' || op === 'optionalAccess') {
//       lastAccessLHS = value;
//       value = fn(value);
//     } else if (op === 'call' || op === 'optionalCall') {
//       value = fn((...args) => value.call(lastAccessLHS, ...args));
//       lastAccessLHS = undefined;
//     }
//   }
//   return value;
// }
parcelHelpers.export(exports, "_optionalChain", ()=>_optionalChain);
/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 * See https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The value of the expression
 */ function _optionalChain(ops) {
    let lastAccessLHS = undefined;
    let value = ops[0];
    let i = 1;
    while(i < ops.length){
        var op = ops[i];
        var fn = ops[i + 1];
        i += 2;
        // by checking for loose equality to `null`, we catch both `null` and `undefined`
        if ((op === "optionalAccess" || op === "optionalCall") && value == null) // really we're meaning to return `undefined` as an actual value here, but it saves bytes not to write it
        return;
        if (op === "access" || op === "optionalAccess") {
            lastAccessLHS = value;
            value = fn(value);
        } else if (op === "call" || op === "optionalCall") {
            value = fn((...args)=>value.call(lastAccessLHS, ...args));
            lastAccessLHS = undefined;
        }
    }
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvPB6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNativeFetch", ()=>isNativeFetch);
parcelHelpers.export(exports, "supportsDOMError", ()=>supportsDOMError);
parcelHelpers.export(exports, "supportsDOMException", ()=>supportsDOMException);
parcelHelpers.export(exports, "supportsErrorEvent", ()=>supportsErrorEvent);
parcelHelpers.export(exports, "supportsFetch", ()=>supportsFetch);
parcelHelpers.export(exports, "supportsHistory", ()=>supportsHistory);
parcelHelpers.export(exports, "supportsNativeFetch", ()=>supportsNativeFetch);
parcelHelpers.export(exports, "supportsReferrerPolicy", ()=>supportsReferrerPolicy);
parcelHelpers.export(exports, "supportsReportingObserver", ()=>supportsReportingObserver);
var _globalJs = require("./global.js");
var _loggerJs = require("./logger.js");
/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */ function supportsErrorEvent() {
    try {
        new ErrorEvent("");
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */ function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError("");
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */ function supportsDOMException() {
    try {
        new DOMException("");
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */ function supportsFetch() {
    if (!("fetch" in (0, _globalJs.getGlobalObject)())) return false;
    try {
        new Headers();
        new Request("http://www.example.com");
        new Response();
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */ function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */ function supportsNativeFetch() {
    if (!supportsFetch()) return false;
    var global = (0, _globalJs.getGlobalObject)();
    // Fast path to avoid DOM I/O
    if (isNativeFetch(global.fetch)) return true;
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    let result = false;
    var doc = global.document;
    if (doc && typeof doc.createElement === "function") try {
        var sandbox = doc.createElement("iframe");
        sandbox.hidden = true;
        doc.head.appendChild(sandbox);
        if (sandbox.contentWindow && sandbox.contentWindow.fetch) result = isNativeFetch(sandbox.contentWindow.fetch);
        doc.head.removeChild(sandbox);
    } catch (err) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */ function supportsReportingObserver() {
    return "ReportingObserver" in (0, _globalJs.getGlobalObject)();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */ function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
    // (see https://caniuse.com/#feat=referrer-policy),
    // it doesn't. And it throws an exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) return false;
    try {
        new Request("_", {
            referrerPolicy: "origin"
        });
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */ function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = (0, _globalJs.getGlobalObject)();
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasHistoryApi = "history" in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}

},{"./global.js":"sU9xO","./logger.js":"8APzS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7C6YP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memoBuilder", ()=>memoBuilder);
/**
 * Helper to decycle json objects
 */ function memoBuilder() {
    var hasWeakSet = typeof WeakSet === "function";
    var inner = hasWeakSet ? new WeakSet() : [];
    function memoize(obj) {
        if (hasWeakSet) {
            if (inner.has(obj)) return true;
            inner.add(obj);
            return false;
        }
        for(let i = 0; i < inner.length; i++){
            var value = inner[i];
            if (value === obj) return true;
        }
        inner.push(obj);
        return false;
    }
    function unmemoize(obj) {
        if (hasWeakSet) inner.delete(obj);
        else {
            for(let i = 0; i < inner.length; i++)if (inner[i] === obj) {
                inner.splice(i, 1);
                break;
            }
        }
    }
    return [
        memoize,
        unmemoize
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSujy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addContextToFrame", ()=>addContextToFrame);
parcelHelpers.export(exports, "addExceptionMechanism", ()=>addExceptionMechanism);
parcelHelpers.export(exports, "addExceptionTypeValue", ()=>addExceptionTypeValue);
parcelHelpers.export(exports, "arrayify", ()=>arrayify);
parcelHelpers.export(exports, "checkOrSetAlreadyCaught", ()=>checkOrSetAlreadyCaught);
parcelHelpers.export(exports, "getEventDescription", ()=>getEventDescription);
parcelHelpers.export(exports, "parseSemver", ()=>parseSemver);
parcelHelpers.export(exports, "uuid4", ()=>uuid4);
var _globalJs = require("./global.js");
var _objectJs = require("./object.js");
var _stringJs = require("./string.js");
/**
 * Extended Window interface that allows for Crypto API usage in IE browsers
 */ /**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */ function uuid4() {
    var global = (0, _globalJs.getGlobalObject)();
    var crypto = global.crypto || global.msCrypto;
    if (crypto && crypto.randomUUID) return crypto.randomUUID().replace(/-/g, "");
    var getRandomByte = crypto && crypto.getRandomValues ? ()=>crypto.getRandomValues(new Uint8Array(1))[0] : ()=>Math.random() * 16;
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
    return "10000000100040008000100000000000".replace(/[018]/g, (c)=>(c ^ (getRandomByte() & 15) >> c / 4).toString(16));
}
function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */ function getEventDescription(event) {
    const { message , event_id: eventId  } = event;
    if (message) return message;
    var firstException = getFirstException(event);
    if (firstException) {
        if (firstException.type && firstException.value) return `${firstException.type}: ${firstException.value}`;
        return firstException.type || firstException.value || eventId || "<unknown>";
    }
    return eventId || "<unknown>";
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */ function addExceptionTypeValue(event, value, type) {
    var exception = event.exception = event.exception || {};
    var values = exception.values = exception.values || [];
    var firstException = values[0] = values[0] || {};
    if (!firstException.value) firstException.value = value || "";
    if (!firstException.type) firstException.type = type || "Error";
}
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */ function addExceptionMechanism(event, newMechanism) {
    var firstException = getFirstException(event);
    if (!firstException) return;
    var defaultMechanism = {
        type: "generic",
        handled: true
    };
    var currentMechanism = firstException.mechanism;
    firstException.mechanism = {
        ...defaultMechanism,
        ...currentMechanism,
        ...newMechanism
    };
    if (newMechanism && "data" in newMechanism) {
        var mergedData = {
            ...currentMechanism && currentMechanism.data,
            ...newMechanism.data
        };
        firstException.mechanism.data = mergedData;
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Represents Semantic Versioning object
 */ /**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */ function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4]
    };
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */ function addContextToFrame(lines, frame, linesOfContext = 5) {
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines.slice(Math.max(0, sourceLine - linesOfContext), sourceLine).map((line)=>(0, _stringJs.snipLine)(line, 0));
    frame.context_line = (0, _stringJs.snipLine)(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines.slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext).map((line)=>(0, _stringJs.snipLine)(line, 0));
}
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */ function checkOrSetAlreadyCaught(exception) {
    if (exception && exception.__sentry_captured__) return true;
    try {
        // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
        // `ExtraErrorData` integration
        (0, _objectJs.addNonEnumerableProperty)(exception, "__sentry_captured__", true);
    } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
    }
    return false;
}
/**
 * Checks whether the given input is already an array, and if it isn't, wraps it in one.
 *
 * @param maybeArray Input to turn into an array, if necessary
 * @returns The input, if already an array, or an array with the input as the only element, if not
 */ function arrayify(maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [
        maybeArray
    ];
}

},{"./global.js":"sU9xO","./object.js":"gf9ji","./string.js":"l4oPu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4iHNw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "normalizeToSize", ()=>normalizeToSize);
parcelHelpers.export(exports, "walk", ()=>visit);
var _isJs = require("./is.js");
var _memoJs = require("./memo.js");
var _objectJs = require("./object.js");
var _stacktraceJs = require("./stacktrace.js");
var global = arguments[3];
/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normallized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */ function normalize(input, depth = Infinity, maxProperties = Infinity) {
    try {
        // since we're at the outermost level, we don't provide a key
        return visit("", input, depth, maxProperties);
    } catch (err) {
        return {
            ERROR: `**non-serializable** (${err})`
        };
    }
}
/** JSDoc */ function normalizeToSize(object, // Default Node.js REPL depth
depth = 3, // 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize = 102400) {
    var normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) return normalizeToSize(object, depth - 1, maxSize);
    return normalized;
}
/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */ function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = (0, _memoJs.memoBuilder)()) {
    const [memoize, unmemoize] = memo;
    // Get the simple cases out of the way first
    if (value === null || [
        "number",
        "boolean",
        "string"
    ].includes(typeof value) && !(0, _isJs.isNaN)(value)) return value;
    var stringified = stringifyValue(key, value);
    // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
    // Everything else will have already been serialized, so if we don't see that pattern, we're done.
    if (!stringified.startsWith("[object ")) return stringified;
    // From here on, we can assert that `value` is either an object or an array.
    // Do not normalize objects that we know have already been normalized. As a general rule, the
    // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
    // have already been normalized.
    if (value["__sentry_skip_normalization__"]) return value;
    // We're also done if we've reached the max depth
    if (depth === 0) // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
    return stringified.replace("object ", "");
    // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
    if (memoize(value)) return "[Circular ~]";
    // If the value has a `toJSON` method, we call it to extract more information
    var valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") try {
        var jsonValue = valueWithToJSON.toJSON();
        // We need to normalize the return value of `.toJSON()` in case it has circular references
        return visit("", jsonValue, depth - 1, maxProperties, memo);
    } catch (err) {
    // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
    }
    // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
    // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
    // property/entry, and keep track of the number of items we add to it.
    var normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
    // properties are non-enumerable and otherwise would get missed.
    var visitable = (0, _objectJs.convertToPlainObject)(value);
    for(var visitKey in visitable){
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) continue;
        if (numAdded >= maxProperties) {
            normalized[visitKey] = "[MaxProperties ~]";
            break;
        }
        // Recursively visit all the child nodes
        var visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);
        numAdded += 1;
    }
    // Once we've visited all the branches, remove the parent from memo storage
    unmemoize(value);
    // Return accumulated values
    return normalized;
}
/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */ function stringifyValue(key, // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
// our internal use, it'll do
value) {
    try {
        if (key === "domain" && value && typeof value === "object" && value._events) return "[Domain]";
        if (key === "domainEmitter") return "[DomainEmitter]";
        // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
        // which won't throw if they are not present.
        if (typeof global !== "undefined" && value === global) return "[Global]";
        if (typeof window !== "undefined" && value === window) return "[Window]";
        if (typeof document !== "undefined" && value === document) return "[Document]";
        // React's SyntheticEvent thingy
        if ((0, _isJs.isSyntheticEvent)(value)) return "[SyntheticEvent]";
        if (typeof value === "number" && value !== value) return "[NaN]";
        // this catches `undefined` (but not `null`, which is a primitive and can be serialized on its own)
        if (value === void 0) return "[undefined]";
        if (typeof value === "function") return `[Function: ${(0, _stacktraceJs.getFunctionName)(value)}]`;
        if (typeof value === "symbol") return `[${String(value)}]`;
        // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
        if (typeof value === "bigint") return `[BigInt: ${String(value)}]`;
        // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
        // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
        // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
        // we can make sure that only plain objects come out that way.
        return `[object ${Object.getPrototypeOf(value).constructor.name}]`;
    } catch (err) {
        return `**non-serializable** (${err})`;
    }
}
/** Calculates bytes size of input string */ function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */ function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}

},{"./is.js":"eYtRK","./memo.js":"7C6YP","./object.js":"gf9ji","./stacktrace.js":"cCTfh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"DAFsy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basename", ()=>basename);
parcelHelpers.export(exports, "dirname", ()=>dirname);
parcelHelpers.export(exports, "isAbsolute", ()=>isAbsolute);
parcelHelpers.export(exports, "join", ()=>join);
parcelHelpers.export(exports, "normalizePath", ()=>normalizePath);
parcelHelpers.export(exports, "relative", ()=>relative);
parcelHelpers.export(exports, "resolve", ()=>resolve);
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
/** JSDoc */ function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    let up = 0;
    for(let i = parts.length - 1; i >= 0; i--){
        var last = parts[i];
        if (last === ".") parts.splice(i, 1);
        else if (last === "..") {
            parts.splice(i, 1);
            up++;
        } else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) for(; up--; up)parts.unshift("..");
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
/** JSDoc */ function splitPath(filename) {
    var parts = splitPathRe.exec(filename);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */ function resolve(...args) {
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for(let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--){
        var path = i >= 0 ? args[i] : "/";
        // Skip empty entries
        if (!path) continue;
        resolvedPath = `${path}/${resolvedPath}`;
        resolvedAbsolute = path.charAt(0) === "/";
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split("/").filter((p)=>!!p), !resolvedAbsolute).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
}
/** JSDoc */ function trim(arr) {
    let start = 0;
    for(; start < arr.length; start++){
        if (arr[start] !== "") break;
    }
    let end = arr.length - 1;
    for(; end >= 0; end--){
        if (arr[end] !== "") break;
    }
    if (start > end) return [];
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */ function relative(from, to) {
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    var fromParts = trim(from.split("/"));
    var toParts = trim(to.split("/"));
    var length = Math.min(fromParts.length, toParts.length);
    let samePartsLength = length;
    for(let i = 0; i < length; i++)if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
    }
    let outputParts = [];
    for(let i1 = samePartsLength; i1 < fromParts.length; i1++)outputParts.push("..");
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
}
// path.normalize(path)
// posix version
/** JSDoc */ function normalizePath(path) {
    var isPathAbsolute = isAbsolute(path);
    var trailingSlash = path.substr(-1) === "/";
    // Normalize the path
    let normalizedPath = normalizeArray(path.split("/").filter((p)=>!!p), !isPathAbsolute).join("/");
    if (!normalizedPath && !isPathAbsolute) normalizedPath = ".";
    if (normalizedPath && trailingSlash) normalizedPath += "/";
    return (isPathAbsolute ? "/" : "") + normalizedPath;
}
// posix version
/** JSDoc */ function isAbsolute(path) {
    return path.charAt(0) === "/";
}
// posix version
/** JSDoc */ function join(...args) {
    return normalizePath(args.join("/"));
}
/** JSDoc */ function dirname(path) {
    var result = splitPath(path);
    var root = result[0];
    let dir = result[1];
    if (!root && !dir) // No dirname whatsoever
    return ".";
    if (dir) // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
    return root + dir;
}
/** JSDoc */ function basename(path, ext) {
    let f = splitPath(path)[2];
    if (ext && f.substr(ext.length * -1) === ext) f = f.substr(0, f.length - ext.length);
    return f;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKs4H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makePromiseBuffer", ()=>makePromiseBuffer);
var _errorJs = require("./error.js");
var _syncpromiseJs = require("./syncpromise.js");
/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */ function makePromiseBuffer(limit) {
    var buffer = [];
    function isReady() {
        return limit === undefined || buffer.length < limit;
    }
    /**
   * Remove a promise from the queue.
   *
   * @param task Can be any PromiseLike<T>
   * @returns Removed promise.
   */ function remove(task) {
        return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    /**
   * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
   *
   * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
   *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
   *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
   *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
   *        limit check.
   * @returns The original promise.
   */ function add(taskProducer) {
        if (!isReady()) return (0, _syncpromiseJs.rejectedSyncPromise)(new (0, _errorJs.SentryError)("Not adding Promise because buffer limit was reached."));
        // start the task and add its promise to the queue
        var task = taskProducer();
        if (buffer.indexOf(task) === -1) buffer.push(task);
        task.then(()=>remove(task))// Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
        // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
        // have promises, so TS has to polyfill when down-compiling.)
        .then(null, ()=>remove(task).then(null, ()=>{
            // We have to add another catch here because `remove()` starts a new promise chain.
            }));
        return task;
    }
    /**
   * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
   * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
   * `false` otherwise
   */ function drain(timeout) {
        return new (0, _syncpromiseJs.SyncPromise)((resolve, reject)=>{
            let counter = buffer.length;
            if (!counter) return resolve(true);
            // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
            var capturedSetTimeout = setTimeout(()=>{
                if (timeout && timeout > 0) resolve(false);
            }, timeout);
            // if all promises resolve in time, cancel the timer and resolve to `true`
            buffer.forEach((item)=>{
                (0, _syncpromiseJs.resolvedSyncPromise)(item).then(()=>{
                    if (!--counter) {
                        clearTimeout(capturedSetTimeout);
                        resolve(true);
                    }
                }, reject);
            });
        });
    }
    return {
        $: buffer,
        add,
        drain
    };
}

},{"./error.js":"Cller","./syncpromise.js":"71YtY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71YtY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SyncPromise", ()=>SyncPromise);
parcelHelpers.export(exports, "rejectedSyncPromise", ()=>rejectedSyncPromise);
parcelHelpers.export(exports, "resolvedSyncPromise", ()=>resolvedSyncPromise);
var _isJs = require("./is.js");
/** SyncPromise internal states */ var States;
(function(States) {
    /** Pending */ var PENDING = 0;
    States[States["PENDING"] = PENDING] = "PENDING";
    /** Resolved / OK */ var RESOLVED = 1;
    States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
    /** Rejected / Error */ var REJECTED = 2;
    States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
// Overloads so we can call resolvedSyncPromise without arguments and generic argument
/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */ function resolvedSyncPromise(value) {
    return new SyncPromise((resolve)=>{
        resolve(value);
    });
}
/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */ function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject)=>{
        reject(reason);
    });
}
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */ class SyncPromise {
    __init() {
        this._state = States.PENDING;
    }
    __init2() {
        this._handlers = [];
    }
    constructor(executor){
        SyncPromise.prototype.__init.call(this);
        SyncPromise.prototype.__init2.call(this);
        SyncPromise.prototype.__init3.call(this);
        SyncPromise.prototype.__init4.call(this);
        SyncPromise.prototype.__init5.call(this);
        SyncPromise.prototype.__init6.call(this);
        try {
            executor(this._resolve, this._reject);
        } catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */ then(onfulfilled, onrejected) {
        return new SyncPromise((resolve, reject)=>{
            this._handlers.push([
                false,
                (result)=>{
                    if (!onfulfilled) // TODO: ¯\_(ツ)_/¯
                    // TODO: FIXME
                    resolve(result);
                    else try {
                        resolve(onfulfilled(result));
                    } catch (e) {
                        reject(e);
                    }
                },
                (reason)=>{
                    if (!onrejected) reject(reason);
                    else try {
                        resolve(onrejected(reason));
                    } catch (e) {
                        reject(e);
                    }
                }, 
            ]);
            this._executeHandlers();
        });
    }
    /** JSDoc */ catch(onrejected) {
        return this.then((val)=>val, onrejected);
    }
    /** JSDoc */ finally(onfinally) {
        return new SyncPromise((resolve, reject)=>{
            let val;
            let isRejected;
            return this.then((value)=>{
                isRejected = false;
                val = value;
                if (onfinally) onfinally();
            }, (reason)=>{
                isRejected = true;
                val = reason;
                if (onfinally) onfinally();
            }).then(()=>{
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    }
    /** JSDoc */ __init3() {
        this._resolve = (value)=>{
            this._setResult(States.RESOLVED, value);
        };
    }
    /** JSDoc */ __init4() {
        this._reject = (reason)=>{
            this._setResult(States.REJECTED, reason);
        };
    }
    /** JSDoc */ __init5() {
        this._setResult = (state, value)=>{
            if (this._state !== States.PENDING) return;
            if ((0, _isJs.isThenable)(value)) {
                value.then(this._resolve, this._reject);
                return;
            }
            this._state = state;
            this._value = value;
            this._executeHandlers();
        };
    }
    /** JSDoc */ __init6() {
        this._executeHandlers = ()=>{
            if (this._state === States.PENDING) return;
            var cachedHandlers = this._handlers.slice();
            this._handlers = [];
            cachedHandlers.forEach((handler)=>{
                if (handler[0]) return;
                if (this._state === States.RESOLVED) handler[1](this._value);
                if (this._state === States.REJECTED) handler[2](this._value);
                handler[0] = true;
            });
        };
    }
}

},{"./is.js":"eYtRK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"QNghU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addRequestDataToEvent", ()=>addRequestDataToEvent);
parcelHelpers.export(exports, "addRequestDataToTransaction", ()=>addRequestDataToTransaction);
parcelHelpers.export(exports, "extractPathForTransaction", ()=>extractPathForTransaction);
parcelHelpers.export(exports, "extractRequestData", ()=>extractRequestData);
var _buildPolyfills = require("./buildPolyfills");
var _isJs = require("./is.js");
var _normalizeJs = require("./normalize.js");
var _urlJs = require("./url.js");
var DEFAULT_INCLUDES = {
    ip: false,
    request: true,
    transaction: true,
    user: true
};
var DEFAULT_REQUEST_INCLUDES = [
    "cookies",
    "data",
    "headers",
    "method",
    "query_string",
    "url"
];
var DEFAULT_USER_INCLUDES = [
    "id",
    "username",
    "email"
];
/**
 * Sets parameterized route as transaction name e.g.: `GET /users/:id`
 * Also adds more context data on the transaction from the request
 */ function addRequestDataToTransaction(transaction, req, deps) {
    if (!transaction) return;
    if (!transaction.metadata.source || transaction.metadata.source === "url") // Attempt to grab a parameterized route off of the request
    transaction.setName(...extractPathForTransaction(req, {
        path: true,
        method: true
    }));
    transaction.setData("url", req.originalUrl || req.url);
    if (req.baseUrl) transaction.setData("baseUrl", req.baseUrl);
    transaction.setData("query", extractQueryParams(req, deps));
}
/**
 * Extracts a complete and parameterized path from the request object and uses it to construct transaction name.
 * If the parameterized transaction name cannot be extracted, we fall back to the raw URL.
 *
 * Additionally, this function determines and returns the transaction name source
 *
 * eg. GET /mountpoint/user/:id
 *
 * @param req A request object
 * @param options What to include in the transaction name (method, path, or a custom route name to be
 *                used instead of the request's route)
 *
 * @returns A tuple of the fully constructed transaction name [0] and its source [1] (can be either 'route' or 'url')
 */ function extractPathForTransaction(req, options = {}) {
    var method = req.method && req.method.toUpperCase();
    let path = "";
    let source = "url";
    // Check to see if there's a parameterized route we can use (as there is in Express)
    if (options.customRoute || req.route) {
        path = options.customRoute || `${req.baseUrl || ""}${req.route && req.route.path}`;
        source = "route";
    } else if (req.originalUrl || req.url) path = (0, _urlJs.stripUrlQueryAndFragment)(req.originalUrl || req.url || "");
    let name = "";
    if (options.method && method) name += method;
    if (options.method && options.path) name += " ";
    if (options.path && path) name += path;
    return [
        name,
        source
    ];
}
/** JSDoc */ function extractTransaction(req, type) {
    switch(type){
        case "path":
            return extractPathForTransaction(req, {
                path: true
            })[0];
        case "handler":
            return req.route && req.route.stack && req.route.stack[0] && req.route.stack[0].name || "<anonymous>";
        case "methodPath":
        default:
            return extractPathForTransaction(req, {
                path: true,
                method: true
            })[0];
    }
}
/** JSDoc */ function extractUserData(user, keys) {
    var extractedUser = {};
    var attributes = Array.isArray(keys) ? keys : DEFAULT_USER_INCLUDES;
    attributes.forEach((key)=>{
        if (user && key in user) extractedUser[key] = user[key];
    });
    return extractedUser;
}
/**
 * Normalize data from the request object, accounting for framework differences.
 *
 * @param req The request object from which to extract data
 * @param options.include An optional array of keys to include in the normalized data. Defaults to
 * DEFAULT_REQUEST_INCLUDES if not provided.
 * @param options.deps Injected, platform-specific dependencies
 * @returns An object containing normalized request data
 */ function extractRequestData(req, options) {
    const { include =DEFAULT_REQUEST_INCLUDES , deps  } = options || {};
    var requestData = {};
    // headers:
    //   node, express, koa, nextjs: req.headers
    var headers = req.headers || {};
    // method:
    //   node, express, koa, nextjs: req.method
    var method = req.method;
    // host:
    //   express: req.hostname in > 4 and req.host in < 4
    //   koa: req.host
    //   node, nextjs: req.headers.host
    var host = req.hostname || req.host || headers.host || "<no host>";
    // protocol:
    //   node, nextjs: <n/a>
    //   express, koa: req.protocol
    var protocol = req.protocol === "https" || req.socket && req.socket.encrypted ? "https" : "http";
    // url (including path and query string):
    //   node, express: req.originalUrl
    //   koa, nextjs: req.url
    var originalUrl = req.originalUrl || req.url || "";
    // absolute url
    var absoluteUrl = `${protocol}://${host}${originalUrl}`;
    include.forEach((key)=>{
        switch(key){
            case "headers":
                requestData.headers = headers;
                break;
            case "method":
                requestData.method = method;
                break;
            case "url":
                requestData.url = absoluteUrl;
                break;
            case "cookies":
                // cookies:
                //   node, express, koa: req.headers.cookie
                //   vercel, sails.js, express (w/ cookie middleware), nextjs: req.cookies
                requestData.cookies = // TODO (v8 / #5257): We're only sending the empty object for backwards compatibility, so the last bit can
                // come off in v8
                req.cookies || headers.cookie && deps && deps.cookie && deps.cookie.parse(headers.cookie) || {};
                break;
            case "query_string":
                // query string:
                //   node: req.url (raw)
                //   express, koa, nextjs: req.query
                requestData.query_string = extractQueryParams(req, deps);
                break;
            case "data":
                if (method === "GET" || method === "HEAD") break;
                // body data:
                //   express, koa, nextjs: req.body
                //
                //   when using node by itself, you have to read the incoming stream(see
                //   https://nodejs.dev/learn/get-http-request-body-data-using-nodejs); if a user is doing that, we can't know
                //   where they're going to store the final result, so they'll have to capture this data themselves
                if (req.body !== undefined) requestData.data = (0, _isJs.isString)(req.body) ? req.body : JSON.stringify((0, _normalizeJs.normalize)(req.body));
                break;
            default:
                if (({}).hasOwnProperty.call(req, key)) requestData[key] = req[key];
        }
    });
    return requestData;
}
/**
 * Options deciding what parts of the request to use when enhancing an event
 */ /**
 * Add data from the given request to the given event
 *
 * @param event The event to which the request data will be added
 * @param req Request object
 * @param options.include Flags to control what data is included
 * @param options.deps Injected platform-specific dependencies
 * @hidden
 */ function addRequestDataToEvent(event, req, options) {
    var include = {
        ...DEFAULT_INCLUDES,
        ...(0, _buildPolyfills._optionalChain)([
            options,
            "optionalAccess",
            (_)=>_.include
        ])
    };
    if (include.request) {
        var extractedRequestData = Array.isArray(include.request) ? extractRequestData(req, {
            include: include.request,
            deps: (0, _buildPolyfills._optionalChain)([
                options,
                "optionalAccess",
                (_2)=>_2.deps
            ])
        }) : extractRequestData(req, {
            deps: (0, _buildPolyfills._optionalChain)([
                options,
                "optionalAccess",
                (_3)=>_3.deps
            ])
        });
        event.request = {
            ...event.request,
            ...extractedRequestData
        };
    }
    if (include.user) {
        var extractedUser = req.user && (0, _isJs.isPlainObject)(req.user) ? extractUserData(req.user, include.user) : {};
        if (Object.keys(extractedUser).length) event.user = {
            ...event.user,
            ...extractedUser
        };
    }
    // client ip:
    //   node, nextjs: req.socket.remoteAddress
    //   express, koa: req.ip
    if (include.ip) {
        var ip = req.ip || req.socket && req.socket.remoteAddress;
        if (ip) event.user = {
            ...event.user,
            ip_address: ip
        };
    }
    if (include.transaction && !event.transaction) // TODO do we even need this anymore?
    // TODO make this work for nextjs
    event.transaction = extractTransaction(req, include.transaction);
    return event;
}
function extractQueryParams(req, deps) {
    // url (including path and query string):
    //   node, express: req.originalUrl
    //   koa, nextjs: req.url
    let originalUrl = req.originalUrl || req.url || "";
    if (!originalUrl) return;
    // The `URL` constructor can't handle internal URLs of the form `/some/path/here`, so stick a dummy protocol and
    // hostname on the beginning. Since the point here is just to grab the query string, it doesn't matter what we use.
    if (originalUrl.startsWith("/")) originalUrl = `http://dogs.are.great${originalUrl}`;
    return req.query || new URL(originalUrl).search.replace("?", "") || deps && deps.url && deps.url.parse(originalUrl).query || undefined;
}

},{"./buildPolyfills":"5m0KU","./is.js":"eYtRK","./normalize.js":"4iHNw","./url.js":"98LcB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98LcB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNumberOfUrlSegments", ()=>getNumberOfUrlSegments);
parcelHelpers.export(exports, "parseUrl", ()=>parseUrl);
parcelHelpers.export(exports, "stripUrlQueryAndFragment", ()=>stripUrlQueryAndFragment);
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */ function parseUrl(url) {
    if (!url) return {};
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) return {};
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || "";
    var fragment = match[8] || "";
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment
    };
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */ function stripUrlQueryAndFragment(urlPath) {
    return urlPath.split(/[\?#]/, 1)[0];
}
/**
 * Returns number of URL segments of a passed string URL.
 */ function getNumberOfUrlSegments(url) {
    // split at '/' or at '\/' to split regex urls correctly
    return url.split(/\\?\//).filter((s)=>s.length > 0 && s !== ",").length;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lT2u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "severityFromString", ()=>severityFromString);
parcelHelpers.export(exports, "severityLevelFromString", ()=>severityLevelFromString);
parcelHelpers.export(exports, "validSeverityLevels", ()=>validSeverityLevels);
// Note: Ideally the `SeverityLevel` type would be derived from `validSeverityLevels`, but that would mean either
//
// a) moving `validSeverityLevels` to `@sentry/types`,
// b) moving the`SeverityLevel` type here, or
// c) importing `validSeverityLevels` from here into `@sentry/types`.
//
// Option A would make `@sentry/types` a runtime dependency of `@sentry/utils` (not good), and options B and C would
// create a circular dependency between `@sentry/types` and `@sentry/utils` (also not good). So a TODO accompanying the
// type, reminding anyone who changes it to change this list also, will have to do.
var validSeverityLevels = [
    "fatal",
    "error",
    "warning",
    "log",
    "info",
    "debug"
];
/**
 * Converts a string-based level into a member of the deprecated {@link Severity} enum.
 *
 * @deprecated `severityFromString` is deprecated. Please use `severityLevelFromString` instead.
 *
 * @param level String representation of Severity
 * @returns Severity
 */ function severityFromString(level) {
    return severityLevelFromString(level);
}
/**
 * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
 *
 * @param level String representation of desired `SeverityLevel`.
 * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
 */ function severityLevelFromString(level) {
    return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YO2R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_browserPerformanceTimeOriginMode", ()=>_browserPerformanceTimeOriginMode);
parcelHelpers.export(exports, "browserPerformanceTimeOrigin", ()=>browserPerformanceTimeOrigin);
parcelHelpers.export(exports, "dateTimestampInSeconds", ()=>dateTimestampInSeconds);
parcelHelpers.export(exports, "timestampInSeconds", ()=>timestampInSeconds);
parcelHelpers.export(exports, "timestampWithMs", ()=>timestampWithMs);
parcelHelpers.export(exports, "usingPerformanceAPI", ()=>usingPerformanceAPI);
var _globalJs = require("./global.js");
var _nodeJs = require("./node.js");
/**
 * An object that can return the current timestamp in seconds since the UNIX epoch.
 */ /**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */ var dateTimestampSource = {
    nowSeconds: ()=>Date.now() / 1000
};
/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */ /**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */ function getBrowserPerformance() {
    const { performance  } = (0, _globalJs.getGlobalObject)();
    if (!performance || !performance.now) return undefined;
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: ()=>performance.now(),
        timeOrigin
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */ function getNodePerformance() {
    try {
        var perfHooks = (0, _nodeJs.dynamicRequire)(module, "perf_hooks");
        return perfHooks.performance;
    } catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */ var platformPerformance = (0, _nodeJs.isNodeEnv)() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined ? dateTimestampSource : {
    nowSeconds: ()=>(platformPerformance.timeOrigin + platformPerformance.now()) / 1000
};
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */ var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */ var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = timestampInSeconds;
/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */ var usingPerformanceAPI = platformPerformance !== undefined;
/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */ let _browserPerformanceTimeOriginMode;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */ var browserPerformanceTimeOrigin = (()=>{
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    const { performance  } = (0, _globalJs.getGlobalObject)();
    if (!performance || !performance.now) {
        _browserPerformanceTimeOriginMode = "none";
        return undefined;
    }
    var threshold = 3600000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === "number";
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            _browserPerformanceTimeOriginMode = "timeOrigin";
            return performance.timeOrigin;
        } else {
            _browserPerformanceTimeOriginMode = "navigationStart";
            return navigationStart;
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    _browserPerformanceTimeOriginMode = "dateNow";
    return dateNow;
})();

},{"./global.js":"sU9xO","./node.js":"jK4mb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7amt2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TRACEPARENT_REGEXP", ()=>TRACEPARENT_REGEXP);
parcelHelpers.export(exports, "extractTraceparentData", ()=>extractTraceparentData);
var TRACEPARENT_REGEXP = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */ function extractTraceparentData(traceparent) {
    var matches = traceparent.match(TRACEPARENT_REGEXP);
    if (matches) {
        let parentSampled;
        if (matches[3] === "1") parentSampled = true;
        else if (matches[3] === "0") parentSampled = false;
        return {
            traceId: matches[1],
            parentSampled,
            parentSpanId: matches[2]
        };
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfY4L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addItemToEnvelope", ()=>addItemToEnvelope);
parcelHelpers.export(exports, "createAttachmentEnvelopeItem", ()=>createAttachmentEnvelopeItem);
parcelHelpers.export(exports, "createEnvelope", ()=>createEnvelope);
parcelHelpers.export(exports, "envelopeItemTypeToDataCategory", ()=>envelopeItemTypeToDataCategory);
parcelHelpers.export(exports, "forEachEnvelopeItem", ()=>forEachEnvelopeItem);
parcelHelpers.export(exports, "serializeEnvelope", ()=>serializeEnvelope);
var _objectJs = require("./object.js");
/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */ function createEnvelope(headers, items = []) {
    return [
        headers,
        items
    ];
}
/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */ function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [
        headers,
        [
            ...items,
            newItem
        ]
    ];
}
/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 */ function forEachEnvelopeItem(envelope, callback) {
    var envelopeItems = envelope[1];
    envelopeItems.forEach((envelopeItem)=>{
        var envelopeItemType = envelopeItem[0].type;
        callback(envelopeItem, envelopeItemType);
    });
}
function encodeUTF8(input, textEncoder) {
    var utf8 = textEncoder || new TextEncoder();
    return utf8.encode(input);
}
/**
 * Serializes an envelope.
 */ function serializeEnvelope(envelope, textEncoder) {
    const [envHeaders, items] = envelope;
    // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
    let parts = JSON.stringify(envHeaders);
    function append(next) {
        if (typeof parts === "string") parts = typeof next === "string" ? parts + next : [
            encodeUTF8(parts, textEncoder),
            next
        ];
        else parts.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
    }
    for (var item of items){
        const [itemHeaders, payload] = item;
        append(`\n${JSON.stringify(itemHeaders)}\n`);
        append(typeof payload === "string" || payload instanceof Uint8Array ? payload : JSON.stringify(payload));
    }
    return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
    var totalLength = buffers.reduce((acc, buf)=>acc + buf.length, 0);
    var merged = new Uint8Array(totalLength);
    let offset = 0;
    for (var buffer of buffers){
        merged.set(buffer, offset);
        offset += buffer.length;
    }
    return merged;
}
/**
 * Creates attachment envelope items
 */ function createAttachmentEnvelopeItem(attachment, textEncoder) {
    var buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
    return [
        (0, _objectJs.dropUndefinedKeys)({
            type: "attachment",
            length: buffer.length,
            filename: attachment.filename,
            content_type: attachment.contentType,
            attachment_type: attachment.attachmentType
        }),
        buffer, 
    ];
}
var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default"
};
/**
 * Maps the type of an envelope item to a data category.
 */ function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}

},{"./object.js":"gf9ji","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85TP7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createClientReportEnvelope", ()=>createClientReportEnvelope);
var _envelopeJs = require("./envelope.js");
var _timeJs = require("./time.js");
/**
 * Creates client report envelope
 * @param discarded_events An array of discard events
 * @param dsn A DSN that can be set on the header. Optional.
 */ function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    var clientReportItem = [
        {
            type: "client_report"
        },
        {
            timestamp: timestamp || (0, _timeJs.dateTimestampInSeconds)(),
            discarded_events
        }, 
    ];
    return (0, _envelopeJs.createEnvelope)(dsn ? {
        dsn
    } : {}, [
        clientReportItem
    ]);
}

},{"./envelope.js":"hfY4L","./time.js":"1YO2R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVIkA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_RETRY_AFTER", ()=>DEFAULT_RETRY_AFTER);
parcelHelpers.export(exports, "disabledUntil", ()=>disabledUntil);
parcelHelpers.export(exports, "isRateLimited", ()=>isRateLimited);
parcelHelpers.export(exports, "parseRetryAfterHeader", ()=>parseRetryAfterHeader);
parcelHelpers.export(exports, "updateRateLimits", ()=>updateRateLimits);
// Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend
var DEFAULT_RETRY_AFTER = 60000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */ function parseRetryAfterHeader(header, now = Date.now()) {
    var headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) return headerDelay * 1000;
    var headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) return headerDate - now;
    return DEFAULT_RETRY_AFTER;
}
/**
 * Gets the time that given category is disabled until for rate limiting
 */ function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
}
/**
 * Checks if a category is rate limited
 */ function isRateLimited(limits, category, now = Date.now()) {
    return disabledUntil(limits, category) > now;
}
/**
 * Update ratelimits from incoming headers.
 * Returns true if headers contains a non-empty rate limiting header.
 */ function updateRateLimits(limits, { statusCode , headers  }, now = Date.now()) {
    var updatedRateLimits = {
        ...limits
    };
    // "The name is case-insensitive."
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
    var rateLimitHeader = headers && headers["x-sentry-rate-limits"];
    var retryAfterHeader = headers && headers["retry-after"];
    if (rateLimitHeader) /**
     * rate limit headers are of the form
     *     <header>,<header>,..
     * where each <header> is of the form
     *     <retry_after>: <categories>: <scope>: <reason_code>
     * where
     *     <retry_after> is a delay in seconds
     *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
     *         <category>;<category>;...
     *     <scope> is what's being limited (org, project, or key) - ignored by SDK
     *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
     */ for (var limit of rateLimitHeader.trim().split(",")){
        const [retryAfter, categories] = limit.split(":", 2);
        var headerDelay = parseInt(retryAfter, 10);
        var delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
        if (!categories) updatedRateLimits.all = now + delay;
        else for (var category of categories.split(";"))updatedRateLimits[category] = now + delay;
    }
    else if (retryAfterHeader) updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    else if (statusCode === 429) updatedRateLimits.all = now + 60000;
    return updatedRateLimits;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Y12e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BAGGAGE_HEADER_NAME", ()=>BAGGAGE_HEADER_NAME);
parcelHelpers.export(exports, "MAX_BAGGAGE_STRING_LENGTH", ()=>MAX_BAGGAGE_STRING_LENGTH);
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX", ()=>SENTRY_BAGGAGE_KEY_PREFIX);
parcelHelpers.export(exports, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", ()=>SENTRY_BAGGAGE_KEY_PREFIX_REGEX);
parcelHelpers.export(exports, "createBaggage", ()=>createBaggage);
parcelHelpers.export(exports, "getBaggageValue", ()=>getBaggageValue);
parcelHelpers.export(exports, "getSentryBaggageItems", ()=>getSentryBaggageItems);
parcelHelpers.export(exports, "getThirdPartyBaggage", ()=>getThirdPartyBaggage);
parcelHelpers.export(exports, "isBaggageMutable", ()=>isBaggageMutable);
parcelHelpers.export(exports, "isSentryBaggageEmpty", ()=>isSentryBaggageEmpty);
parcelHelpers.export(exports, "mergeAndSerializeBaggage", ()=>mergeAndSerializeBaggage);
parcelHelpers.export(exports, "parseBaggageHeader", ()=>parseBaggageHeader);
parcelHelpers.export(exports, "parseBaggageSetMutability", ()=>parseBaggageSetMutability);
parcelHelpers.export(exports, "serializeBaggage", ()=>serializeBaggage);
parcelHelpers.export(exports, "setBaggageImmutable", ()=>setBaggageImmutable);
parcelHelpers.export(exports, "setBaggageValue", ()=>setBaggageValue);
var _isJs = require("./is.js");
var _loggerJs = require("./logger.js");
var BAGGAGE_HEADER_NAME = "baggage";
var SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
var SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */ var MAX_BAGGAGE_STRING_LENGTH = 8192;
/** Create an instance of Baggage */ function createBaggage(initItems, baggageString = "", mutable = true) {
    return [
        {
            ...initItems
        },
        baggageString,
        mutable
    ];
}
/** Get a value from baggage */ function getBaggageValue(baggage, key) {
    return baggage[0][key];
}
/** Add a value to baggage */ function setBaggageValue(baggage, key, value) {
    if (isBaggageMutable(baggage)) baggage[0][key] = value;
}
/** Check if the Sentry part of the passed baggage (i.e. the first element in the tuple) is empty */ function isSentryBaggageEmpty(baggage) {
    return Object.keys(baggage[0]).length === 0;
}
/** Returns Sentry specific baggage values */ function getSentryBaggageItems(baggage) {
    return baggage[0];
}
/**
 * Returns 3rd party baggage string of @param baggage
 * @param baggage
 */ function getThirdPartyBaggage(baggage) {
    return baggage[1];
}
/**
 * Checks if baggage is mutable
 * @param baggage
 * @returns true if baggage is mutable, else false
 */ function isBaggageMutable(baggage) {
    return baggage[2];
}
/**
 * Sets the passed baggage immutable
 * @param baggage
 */ function setBaggageImmutable(baggage) {
    baggage[2] = false;
}
/** Serialize a baggage object */ function serializeBaggage(baggage) {
    return Object.keys(baggage[0]).reduce((prev, key)=>{
        var val = baggage[0][key];
        var baggageEntry = `${SENTRY_BAGGAGE_KEY_PREFIX}${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
        var newVal = prev === "" ? baggageEntry : `${prev},${baggageEntry}`;
        if (newVal.length > MAX_BAGGAGE_STRING_LENGTH) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn(`Not adding key: ${key} with val: ${val} to baggage due to exceeding baggage size limits.`);
            return prev;
        } else return newVal;
    }, baggage[1]);
}
/**
 * Parse a baggage header from a string or a string array and return a Baggage object
 *
 * If @param includeThirdPartyEntries is set to true, third party baggage entries are added to the Baggage object
 * (This is necessary for merging potentially pre-existing baggage headers in outgoing requests with
 * our `sentry-` values)
 */ function parseBaggageHeader(inputBaggageValue, includeThirdPartyEntries = false) {
    // Adding this check here because we got reports of this function failing due to the input value
    // not being a string. This debug log might help us determine what's going on here.
    if (!Array.isArray(inputBaggageValue) && !(0, _isJs.isString)(inputBaggageValue) || typeof inputBaggageValue === "number") {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _loggerJs.logger).warn("[parseBaggageHeader] Received input value of incompatible type: ", typeof inputBaggageValue, inputBaggageValue);
        // Gonna early-return an empty baggage object so that we don't fail later on
        return createBaggage({}, "");
    }
    var baggageEntries = ((0, _isJs.isString)(inputBaggageValue) ? inputBaggageValue : inputBaggageValue.join(",")).split(",").map((entry)=>entry.trim()).filter((entry)=>entry !== "" && (includeThirdPartyEntries || SENTRY_BAGGAGE_KEY_PREFIX_REGEX.test(entry)));
    return baggageEntries.reduce(([baggageObj, baggageString], curr)=>{
        const [key, val] = curr.split("=");
        if (SENTRY_BAGGAGE_KEY_PREFIX_REGEX.test(key)) {
            var baggageKey = decodeURIComponent(key.split("-")[1]);
            return [
                {
                    ...baggageObj,
                    [baggageKey]: decodeURIComponent(val)
                },
                baggageString,
                true, 
            ];
        } else return [
            baggageObj,
            baggageString === "" ? curr : `${baggageString},${curr}`,
            true
        ];
    }, [
        {},
        "",
        true
    ]);
}
/**
 * Merges the baggage header we saved from the incoming request (or meta tag) with
 * a possibly created or modified baggage header by a third party that's been added
 * to the outgoing request header.
 *
 * In case @param headerBaggageString exists, we can safely add the the 3rd party part of @param headerBaggage
 * with our @param incomingBaggage. This is possible because if we modified anything beforehand,
 * it would only affect parts of the sentry baggage (@see Baggage interface).
 *
 * @param incomingBaggage the baggage header of the incoming request that might contain sentry entries
 * @param thirdPartyBaggageHeader possibly existing baggage header string or string[] added from a third
 *        party to the request headers
 *
 * @return a merged and serialized baggage string to be propagated with the outgoing request
 */ function mergeAndSerializeBaggage(incomingBaggage, thirdPartyBaggageHeader) {
    if (!incomingBaggage && !thirdPartyBaggageHeader) return "";
    var headerBaggage = thirdPartyBaggageHeader && parseBaggageHeader(thirdPartyBaggageHeader, true) || undefined;
    var thirdPartyHeaderBaggage = headerBaggage && getThirdPartyBaggage(headerBaggage);
    var finalBaggage = createBaggage(incomingBaggage && incomingBaggage[0] || {}, thirdPartyHeaderBaggage || "");
    return serializeBaggage(finalBaggage);
}
/**
 * Helper function that takes a raw baggage value (if available) and the processed sentry-trace header
 * data (if available), parses the baggage value and creates a Baggage object. If there is no baggage
 * value, it will create an empty Baggage object.
 *
 * In a second step, this functions determines if the created Baggage object should be set immutable
 * to prevent mutation of the Sentry data. It does this by looking at the processed sentry-trace header.
 *
 * @param rawBaggageValue baggage value from header
 * @param sentryTraceHeader processed Sentry trace header returned from `extractTraceparentData`
 */ function parseBaggageSetMutability(rawBaggageValue, sentryTraceHeader) {
    var baggage = parseBaggageHeader(rawBaggageValue || "");
    // Because we are always creating a Baggage object by calling `parseBaggageHeader` above
    // (either a filled one or an empty one, even if we didn't get a `baggage` header),
    // we only need to check if we have a sentry-trace header or not. As soon as we have it,
    // we set baggage immutable. In case we don't get a sentry-trace header, we can assume that
    // this SDK is the head of the trace and thus we still permit mutation at this time.
    // There is one exception though, which is that we get a baggage-header with `sentry-`
    // items but NO sentry-trace header. In this case we also set the baggage immutable for now
    // but if something like this would ever happen, we should revisit this and determine
    // what this would actually mean for the trace (i.e. is this SDK the head?, what happened
    // before that we don't have a sentry-trace header?, etc)
    (sentryTraceHeader || !isSentryBaggageEmpty(baggage)) && setBaggageImmutable(baggage);
    return baggage;
}

},{"./is.js":"eYtRK","./logger.js":"8APzS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kejO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InboundFilters", ()=>InboundFilters);
parcelHelpers.export(exports, "_mergeOptions", ()=>_mergeOptions);
parcelHelpers.export(exports, "_shouldDropEvent", ()=>_shouldDropEvent);
var _utils = require("@sentry/utils");
// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/
];
/** Options for the InboundFilters integration */ /** Inbound filters configurable by the user */ class InboundFilters {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "InboundFilters";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = InboundFilters.id;
    }
    constructor(_options = {}){
        this._options = _options;
        InboundFilters.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ setupOnce(addGlobalEventProcessor, getCurrentHub) {
        var eventProcess = (event)=>{
            var hub = getCurrentHub();
            if (hub) {
                var self = hub.getIntegration(InboundFilters);
                if (self) {
                    var client = hub.getClient();
                    var clientOptions = client ? client.getOptions() : {};
                    var options = _mergeOptions(self._options, clientOptions);
                    return _shouldDropEvent(event, options) ? null : event;
                }
            }
            return event;
        };
        eventProcess.id = this.name;
        addGlobalEventProcessor(eventProcess);
    }
}
InboundFilters.__initStatic();
/** JSDoc */ function _mergeOptions(internalOptions = {}, clientOptions = {}) {
    return {
        allowUrls: [
            ...internalOptions.allowUrls || [],
            ...clientOptions.allowUrls || []
        ],
        denyUrls: [
            ...internalOptions.denyUrls || [],
            ...clientOptions.denyUrls || []
        ],
        ignoreErrors: [
            ...internalOptions.ignoreErrors || [],
            ...clientOptions.ignoreErrors || [],
            ...DEFAULT_IGNORE_ERRORS, 
        ],
        ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true
    };
}
/** JSDoc */ function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0, _utils.getEventDescription)(event)}`);
        return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0, _utils.getEventDescription)(event)}`);
        return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0, _utils.getEventDescription)(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
        return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0, _utils.getEventDescription)(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
        return true;
    }
    return false;
}
function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors || !ignoreErrors.length) return false;
    return _getPossibleEventMessages(event).some((message)=>ignoreErrors.some((pattern)=>(0, _utils.isMatchingPattern)(message, pattern)));
}
function _isDeniedUrl(event, denyUrls) {
    // TODO: Use Glob instead?
    if (!denyUrls || !denyUrls.length) return false;
    var url = _getEventFilterUrl(event);
    return !url ? false : denyUrls.some((pattern)=>(0, _utils.isMatchingPattern)(url, pattern));
}
function _isAllowedUrl(event, allowUrls) {
    // TODO: Use Glob instead?
    if (!allowUrls || !allowUrls.length) return true;
    var url = _getEventFilterUrl(event);
    return !url ? true : allowUrls.some((pattern)=>(0, _utils.isMatchingPattern)(url, pattern));
}
function _getPossibleEventMessages(event) {
    if (event.message) return [
        event.message
    ];
    if (event.exception) try {
        const { type ="" , value =""  } = event.exception.values && event.exception.values[0] || {};
        return [
            `${value}`,
            `${type}: ${value}`
        ];
    } catch (oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(`Cannot extract message for event ${(0, _utils.getEventDescription)(event)}`);
        return [];
    }
    return [];
}
function _isSentryError(event) {
    try {
        // @ts-ignore can't be a sentry error if undefined
        return event.exception.values[0].type === "SentryError";
    } catch (e) {
    // ignore
    }
    return false;
}
function _getLastValidUrl(frames = []) {
    for(let i = frames.length - 1; i >= 0; i--){
        var frame = frames[i];
        if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") return frame.filename || null;
    }
    return null;
}
function _getEventFilterUrl(event) {
    try {
        let frames;
        try {
            // @ts-ignore we only care about frames if the whole thing here is defined
            frames = event.exception.values[0].stacktrace.frames;
        } catch (e) {
        // ignore
        }
        return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(`Cannot extract url for event ${(0, _utils.getEventDescription)(event)}`);
        return null;
    }
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kBQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scope", ()=>(0, _scopeJs.Scope));
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>(0, _scopeJs.addGlobalEventProcessor));
parcelHelpers.export(exports, "closeSession", ()=>(0, _sessionJs.closeSession));
parcelHelpers.export(exports, "makeSession", ()=>(0, _sessionJs.makeSession));
parcelHelpers.export(exports, "updateSession", ()=>(0, _sessionJs.updateSession));
parcelHelpers.export(exports, "SessionFlusher", ()=>(0, _sessionflusherJs.SessionFlusher));
parcelHelpers.export(exports, "Hub", ()=>(0, _hubJs.Hub));
parcelHelpers.export(exports, "getCurrentHub", ()=>(0, _hubJs.getCurrentHub));
parcelHelpers.export(exports, "getHubFromCarrier", ()=>(0, _hubJs.getHubFromCarrier));
parcelHelpers.export(exports, "getMainCarrier", ()=>(0, _hubJs.getMainCarrier));
parcelHelpers.export(exports, "makeMain", ()=>(0, _hubJs.makeMain));
parcelHelpers.export(exports, "setHubOnCarrier", ()=>(0, _hubJs.setHubOnCarrier));
parcelHelpers.export(exports, "addBreadcrumb", ()=>(0, _exportsJs.addBreadcrumb));
parcelHelpers.export(exports, "captureEvent", ()=>(0, _exportsJs.captureEvent));
parcelHelpers.export(exports, "captureException", ()=>(0, _exportsJs.captureException));
parcelHelpers.export(exports, "captureMessage", ()=>(0, _exportsJs.captureMessage));
parcelHelpers.export(exports, "configureScope", ()=>(0, _exportsJs.configureScope));
parcelHelpers.export(exports, "setContext", ()=>(0, _exportsJs.setContext));
parcelHelpers.export(exports, "setExtra", ()=>(0, _exportsJs.setExtra));
parcelHelpers.export(exports, "setExtras", ()=>(0, _exportsJs.setExtras));
parcelHelpers.export(exports, "setTag", ()=>(0, _exportsJs.setTag));
parcelHelpers.export(exports, "setTags", ()=>(0, _exportsJs.setTags));
parcelHelpers.export(exports, "setUser", ()=>(0, _exportsJs.setUser));
parcelHelpers.export(exports, "startTransaction", ()=>(0, _exportsJs.startTransaction));
parcelHelpers.export(exports, "withScope", ()=>(0, _exportsJs.withScope));
var _scopeJs = require("./scope.js");
var _sessionJs = require("./session.js");
var _sessionflusherJs = require("./sessionflusher.js");
var _hubJs = require("./hub.js");
var _exportsJs = require("./exports.js");

},{"./scope.js":"jHqED","./session.js":"29a6K","./sessionflusher.js":"4COFh","./hub.js":"25z6f","./exports.js":"734yX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHqED":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scope", ()=>Scope);
parcelHelpers.export(exports, "addGlobalEventProcessor", ()=>addGlobalEventProcessor);
var _utils = require("@sentry/utils");
var _sessionJs = require("./session.js");
/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */ var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */ class Scope {
    /** Flag if notifying is happening. */ /** Callback for client to receive scope changes. */ /** Callback list that will be called after {@link applyToEvent}. */ /** Array of breadcrumbs. */ /** User */ /** Tags */ /** Extra */ /** Contexts */ /** Attachments */ /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */ /** Fingerprint */ /** Severity */ /** Transaction Name */ /** Span */ /** Session */ /** Request Mode Session Status */ constructor(){
        this._notifyingListeners = false;
        this._scopeListeners = [];
        this._eventProcessors = [];
        this._breadcrumbs = [];
        this._attachments = [];
        this._user = {};
        this._tags = {};
        this._extra = {};
        this._contexts = {};
        this._sdkProcessingMetadata = {};
    }
    /**
   * Inherit values from the parent scope.
   * @param scope to clone.
   */ static clone(scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = [
                ...scope._breadcrumbs
            ];
            newScope._tags = {
                ...scope._tags
            };
            newScope._extra = {
                ...scope._extra
            };
            newScope._contexts = {
                ...scope._contexts
            };
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = [
                ...scope._eventProcessors
            ];
            newScope._requestSession = scope._requestSession;
            newScope._attachments = [
                ...scope._attachments
            ];
        }
        return newScope;
    }
    /**
   * Add internal on change listener. Used for sub SDKs that need to store the scope.
   * @hidden
   */ addScopeListener(callback) {
        this._scopeListeners.push(callback);
    }
    /**
   * @inheritDoc
   */ addEventProcessor(callback) {
        this._eventProcessors.push(callback);
        return this;
    }
    /**
   * @inheritDoc
   */ setUser(user) {
        this._user = user || {};
        if (this._session) (0, _sessionJs.updateSession)(this._session, {
            user
        });
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ getUser() {
        return this._user;
    }
    /**
   * @inheritDoc
   */ getRequestSession() {
        return this._requestSession;
    }
    /**
   * @inheritDoc
   */ setRequestSession(requestSession) {
        this._requestSession = requestSession;
        return this;
    }
    /**
   * @inheritDoc
   */ setTags(tags) {
        this._tags = {
            ...this._tags,
            ...tags
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setTag(key, value) {
        this._tags = {
            ...this._tags,
            [key]: value
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setExtras(extras) {
        this._extra = {
            ...this._extra,
            ...extras
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setExtra(key, extra) {
        this._extra = {
            ...this._extra,
            [key]: extra
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setFingerprint(fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setLevel(level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setTransactionName(name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setContext(key, context) {
        if (context === null) delete this._contexts[key];
        else this._contexts = {
            ...this._contexts,
            [key]: context
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ setSpan(span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ getSpan() {
        return this._span;
    }
    /**
   * @inheritDoc
   */ getTransaction() {
        // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
        // have a pointer to the currently-active transaction.
        var span = this.getSpan();
        return span && span.transaction;
    }
    /**
   * @inheritDoc
   */ setSession(session) {
        if (!session) delete this._session;
        else this._session = session;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ getSession() {
        return this._session;
    }
    /**
   * @inheritDoc
   */ update(captureContext) {
        if (!captureContext) return this;
        if (typeof captureContext === "function") {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = {
                ...this._tags,
                ...captureContext._tags
            };
            this._extra = {
                ...this._extra,
                ...captureContext._extra
            };
            this._contexts = {
                ...this._contexts,
                ...captureContext._contexts
            };
            if (captureContext._user && Object.keys(captureContext._user).length) this._user = captureContext._user;
            if (captureContext._level) this._level = captureContext._level;
            if (captureContext._fingerprint) this._fingerprint = captureContext._fingerprint;
            if (captureContext._requestSession) this._requestSession = captureContext._requestSession;
        } else if ((0, _utils.isPlainObject)(captureContext)) {
            captureContext;
            this._tags = {
                ...this._tags,
                ...captureContext.tags
            };
            this._extra = {
                ...this._extra,
                ...captureContext.extra
            };
            this._contexts = {
                ...this._contexts,
                ...captureContext.contexts
            };
            if (captureContext.user) this._user = captureContext.user;
            if (captureContext.level) this._level = captureContext.level;
            if (captureContext.fingerprint) this._fingerprint = captureContext.fingerprint;
            if (captureContext.requestSession) this._requestSession = captureContext.requestSession;
        }
        return this;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        this._attachments = [];
        return this;
    }
    /**
   * @inheritDoc
   */ addBreadcrumb(breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === "number" ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) return this;
        var mergedBreadcrumb = {
            timestamp: (0, _utils.dateTimestampInSeconds)(),
            ...breadcrumb
        };
        this._breadcrumbs = [
            ...this._breadcrumbs,
            mergedBreadcrumb
        ].slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ clearBreadcrumbs() {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    }
    /**
   * @inheritDoc
   */ addAttachment(attachment) {
        this._attachments.push(attachment);
        return this;
    }
    /**
   * @inheritDoc
   */ getAttachments() {
        return this._attachments;
    }
    /**
   * @inheritDoc
   */ clearAttachments() {
        this._attachments = [];
        return this;
    }
    /**
   * Applies data from the scope to the event and runs all event processors on it.
   *
   * @param event Event
   * @param hint Object containing additional information about the original exception, for use by the event processors.
   * @hidden
   */ applyToEvent(event, hint = {}) {
        if (this._extra && Object.keys(this._extra).length) event.extra = {
            ...this._extra,
            ...event.extra
        };
        if (this._tags && Object.keys(this._tags).length) event.tags = {
            ...this._tags,
            ...event.tags
        };
        if (this._user && Object.keys(this._user).length) event.user = {
            ...this._user,
            ...event.user
        };
        if (this._contexts && Object.keys(this._contexts).length) event.contexts = {
            ...this._contexts,
            ...event.contexts
        };
        if (this._level) event.level = this._level;
        if (this._transactionName) event.transaction = this._transactionName;
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relies on that.
        if (this._span) {
            event.contexts = {
                trace: this._span.getTraceContext(),
                ...event.contexts
            };
            var transactionName = this._span.transaction && this._span.transaction.name;
            if (transactionName) event.tags = {
                transaction: transactionName,
                ...event.tags
            };
        }
        this._applyFingerprint(event);
        event.breadcrumbs = [
            ...event.breadcrumbs || [],
            ...this._breadcrumbs
        ];
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        event.sdkProcessingMetadata = {
            ...event.sdkProcessingMetadata,
            ...this._sdkProcessingMetadata
        };
        return this._notifyEventProcessors([
            ...getGlobalEventProcessors(),
            ...this._eventProcessors
        ], event, hint);
    }
    /**
   * Add data which will be accessible during event processing but won't get sent to Sentry
   */ setSDKProcessingMetadata(newData) {
        this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...newData
        };
        return this;
    }
    /**
   * This will be called after {@link applyToEvent} is finished.
   */ _notifyEventProcessors(processors, event, hint, index = 0) {
        return new (0, _utils.SyncPromise)((resolve, reject)=>{
            var processor = processors[index];
            if (event === null || typeof processor !== "function") resolve(event);
            else {
                var result = processor({
                    ...event
                }, hint);
                (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && (0, _utils.logger).log(`Event processor "${processor.id}" dropped event`);
                if ((0, _utils.isThenable)(result)) result.then((final)=>this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
                else this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
            }
        });
    }
    /**
   * This will be called on every set call.
   */ _notifyScopeListeners() {
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach((callback)=>{
                callback(this);
            });
            this._notifyingListeners = false;
        }
    }
    /**
   * Applies fingerprint from the scope to the event if there's one,
   * uses message if there's one instead or get rid of empty fingerprint
   */ _applyFingerprint(event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint ? (0, _utils.arrayify)(event.fingerprint) : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) event.fingerprint = event.fingerprint.concat(this._fingerprint);
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) delete event.fingerprint;
    }
}
/**
 * Returns the global event processors.
 */ function getGlobalEventProcessors() {
    return (0, _utils.getGlobalSingleton)("globalEventProcessors", ()=>[]);
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */ function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}

},{"@sentry/utils":"axZXA","./session.js":"29a6K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29a6K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closeSession", ()=>closeSession);
parcelHelpers.export(exports, "makeSession", ()=>makeSession);
parcelHelpers.export(exports, "updateSession", ()=>updateSession);
var _utils = require("@sentry/utils");
/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */ function makeSession(context) {
    // Both timestamp and started are in seconds since the UNIX epoch.
    var startingTime = (0, _utils.timestampInSeconds)();
    var session = {
        sid: (0, _utils.uuid4)(),
        init: true,
        timestamp: startingTime,
        started: startingTime,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: false,
        toJSON: ()=>sessionToJSON(session)
    };
    if (context) updateSession(session, context);
    return session;
}
/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see BaseClient.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */ function updateSession(session, context = {}) {
    if (context.user) {
        if (!session.ipAddress && context.user.ip_address) session.ipAddress = context.user.ip_address;
        if (!session.did && !context.did) session.did = context.user.id || context.user.email || context.user.username;
    }
    session.timestamp = context.timestamp || (0, _utils.timestampInSeconds)();
    if (context.ignoreDuration) session.ignoreDuration = context.ignoreDuration;
    if (context.sid) // Good enough uuid validation. — Kamil
    session.sid = context.sid.length === 32 ? context.sid : (0, _utils.uuid4)();
    if (context.init !== undefined) session.init = context.init;
    if (!session.did && context.did) session.did = `${context.did}`;
    if (typeof context.started === "number") session.started = context.started;
    if (session.ignoreDuration) session.duration = undefined;
    else if (typeof context.duration === "number") session.duration = context.duration;
    else {
        var duration = session.timestamp - session.started;
        session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) session.release = context.release;
    if (context.environment) session.environment = context.environment;
    if (!session.ipAddress && context.ipAddress) session.ipAddress = context.ipAddress;
    if (!session.userAgent && context.userAgent) session.userAgent = context.userAgent;
    if (typeof context.errors === "number") session.errors = context.errors;
    if (context.status) session.status = context.status;
}
/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */ function closeSession(session, status) {
    let context = {};
    if (status) context = {
        status
    };
    else if (session.status === "ok") context = {
        status: "exited"
    };
    updateSession(session, context);
}
/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */ function sessionToJSON(session) {
    return (0, _utils.dropUndefinedKeys)({
        sid: `${session.sid}`,
        init: session.init,
        // Make sure that sec is converted to ms for date constructor
        started: new Date(session.started * 1000).toISOString(),
        timestamp: new Date(session.timestamp * 1000).toISOString(),
        status: session.status,
        errors: session.errors,
        did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : undefined,
        duration: session.duration,
        attrs: {
            release: session.release,
            environment: session.environment,
            ip_address: session.ipAddress,
            user_agent: session.userAgent
        }
    });
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4COFh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SessionFlusher", ()=>SessionFlusher);
var _utils = require("@sentry/utils");
var _hubJs = require("./hub.js");
/**
 * @inheritdoc
 */ class SessionFlusher {
    __init() {
        this.flushTimeout = 60;
    }
    __init2() {
        this._pendingAggregates = {};
    }
    __init3() {
        this._isEnabled = true;
    }
    constructor(client, attrs){
        SessionFlusher.prototype.__init.call(this);
        SessionFlusher.prototype.__init2.call(this);
        SessionFlusher.prototype.__init3.call(this);
        this._client = client;
        // Call to setInterval, so that flush is called every 60 seconds
        this._intervalId = setInterval(()=>this.flush(), this.flushTimeout * 1000);
        this._sessionAttrs = attrs;
    }
    /** Checks if `pendingAggregates` has entries, and if it does flushes them by calling `sendSession` */ flush() {
        var sessionAggregates = this.getSessionAggregates();
        if (sessionAggregates.aggregates.length === 0) return;
        this._pendingAggregates = {};
        this._client.sendSession(sessionAggregates);
    }
    /** Massages the entries in `pendingAggregates` and returns aggregated sessions */ getSessionAggregates() {
        var aggregates = Object.keys(this._pendingAggregates).map((key)=>{
            return this._pendingAggregates[parseInt(key)];
        });
        var sessionAggregates = {
            attrs: this._sessionAttrs,
            aggregates
        };
        return (0, _utils.dropUndefinedKeys)(sessionAggregates);
    }
    /** JSDoc */ close() {
        clearInterval(this._intervalId);
        this._isEnabled = false;
        this.flush();
    }
    /**
   * Wrapper function for _incrementSessionStatusCount that checks if the instance of SessionFlusher is enabled then
   * fetches the session status of the request from `Scope.getRequestSession().status` on the scope and passes them to
   * `_incrementSessionStatusCount` along with the start date
   */ incrementSessionStatusCount() {
        if (!this._isEnabled) return;
        var scope = (0, _hubJs.getCurrentHub)().getScope();
        var requestSession = scope && scope.getRequestSession();
        if (requestSession && requestSession.status) {
            this._incrementSessionStatusCount(requestSession.status, new Date());
            // This is not entirely necessarily but is added as a safe guard to indicate the bounds of a request and so in
            // case captureRequestSession is called more than once to prevent double count
            if (scope) scope.setRequestSession(undefined);
        }
    }
    /**
   * Increments status bucket in pendingAggregates buffer (internal state) corresponding to status of
   * the session received
   */ _incrementSessionStatusCount(status, date) {
        // Truncate minutes and seconds on Session Started attribute to have one minute bucket keys
        var sessionStartedTrunc = new Date(date).setSeconds(0, 0);
        this._pendingAggregates[sessionStartedTrunc] = this._pendingAggregates[sessionStartedTrunc] || {};
        // corresponds to aggregated sessions in one specific minute bucket
        // for example, {"started":"2021-03-16T08:00:00.000Z","exited":4, "errored": 1}
        var aggregationCounts = this._pendingAggregates[sessionStartedTrunc];
        if (!aggregationCounts.started) aggregationCounts.started = new Date(sessionStartedTrunc).toISOString();
        switch(status){
            case "errored":
                aggregationCounts.errored = (aggregationCounts.errored || 0) + 1;
                return aggregationCounts.errored;
            case "ok":
                aggregationCounts.exited = (aggregationCounts.exited || 0) + 1;
                return aggregationCounts.exited;
            default:
                aggregationCounts.crashed = (aggregationCounts.crashed || 0) + 1;
                return aggregationCounts.crashed;
        }
    }
}

},{"@sentry/utils":"axZXA","./hub.js":"25z6f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25z6f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_VERSION", ()=>API_VERSION);
parcelHelpers.export(exports, "Hub", ()=>Hub);
parcelHelpers.export(exports, "getCurrentHub", ()=>getCurrentHub);
parcelHelpers.export(exports, "getHubFromCarrier", ()=>getHubFromCarrier);
parcelHelpers.export(exports, "getMainCarrier", ()=>getMainCarrier);
parcelHelpers.export(exports, "makeMain", ()=>makeMain);
parcelHelpers.export(exports, "setHubOnCarrier", ()=>setHubOnCarrier);
var _utils = require("@sentry/utils");
var _scopeJs = require("./scope.js");
var _sessionJs = require("./session.js");
/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */ var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */ var DEFAULT_BREADCRUMBS = 100;
/**
 * A layer in the process stack.
 * @hidden
 */ /**
 * @inheritDoc
 */ class Hub {
    /** Is a {@link Layer}[] containing the client and scope */ __init() {
        this._stack = [
            {}
        ];
    }
    /** Contains the last event id of a captured event.  */ /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   */ constructor(client, scope = new (0, _scopeJs.Scope)(), _version = API_VERSION){
        this._version = _version;
        Hub.prototype.__init.call(this);
        this.getStackTop().scope = scope;
        if (client) this.bindClient(client);
    }
    /**
   * @inheritDoc
   */ isOlderThan(version) {
        return this._version < version;
    }
    /**
   * @inheritDoc
   */ bindClient(client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) client.setupIntegrations();
    }
    /**
   * @inheritDoc
   */ pushScope() {
        // We want to clone the content of prev scope
        var scope = (0, _scopeJs.Scope).clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope
        });
        return scope;
    }
    /**
   * @inheritDoc
   */ popScope() {
        if (this.getStack().length <= 1) return false;
        return !!this.getStack().pop();
    }
    /**
   * @inheritDoc
   */ withScope(callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        } finally{
            this.popScope();
        }
    }
    /**
   * @inheritDoc
   */ getClient() {
        return this.getStackTop().client;
    }
    /** Returns the scope of the top stack. */ getScope() {
        return this.getStackTop().scope;
    }
    /** Returns the scope stack for domains or the process. */ getStack() {
        return this._stack;
    }
    /** Returns the topmost scope layer in the order domain > local > process. */ getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    /**
   * @inheritDoc
   */ captureException(exception, hint) {
        var eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : (0, _utils.uuid4)();
        var syntheticException = new Error("Sentry syntheticException");
        this._withClient((client, scope)=>{
            client.captureException(exception, {
                originalException: exception,
                syntheticException,
                ...hint,
                event_id: eventId
            }, scope);
        });
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureMessage(message, level, hint) {
        var eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : (0, _utils.uuid4)();
        var syntheticException = new Error(message);
        this._withClient((client, scope)=>{
            client.captureMessage(message, level, {
                originalException: message,
                syntheticException,
                ...hint,
                event_id: eventId
            }, scope);
        });
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureEvent(event, hint) {
        var eventId = hint && hint.event_id ? hint.event_id : (0, _utils.uuid4)();
        if (event.type !== "transaction") this._lastEventId = eventId;
        this._withClient((client, scope)=>{
            client.captureEvent(event, {
                ...hint,
                event_id: eventId
            }, scope);
        });
        return eventId;
    }
    /**
   * @inheritDoc
   */ lastEventId() {
        return this._lastEventId;
    }
    /**
   * @inheritDoc
   */ addBreadcrumb(breadcrumb, hint) {
        const { scope , client  } = this.getStackTop();
        if (!scope || !client) return;
        const { beforeBreadcrumb =null , maxBreadcrumbs =DEFAULT_BREADCRUMBS  } = client.getOptions && client.getOptions() || {};
        if (maxBreadcrumbs <= 0) return;
        var timestamp = (0, _utils.dateTimestampInSeconds)();
        var mergedBreadcrumb = {
            timestamp,
            ...breadcrumb
        };
        var finalBreadcrumb = beforeBreadcrumb ? (0, _utils.consoleSandbox)(()=>beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
        if (finalBreadcrumb === null) return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }
    /**
   * @inheritDoc
   */ setUser(user) {
        var scope = this.getScope();
        if (scope) scope.setUser(user);
    }
    /**
   * @inheritDoc
   */ setTags(tags) {
        var scope = this.getScope();
        if (scope) scope.setTags(tags);
    }
    /**
   * @inheritDoc
   */ setExtras(extras) {
        var scope = this.getScope();
        if (scope) scope.setExtras(extras);
    }
    /**
   * @inheritDoc
   */ setTag(key, value) {
        var scope = this.getScope();
        if (scope) scope.setTag(key, value);
    }
    /**
   * @inheritDoc
   */ setExtra(key, extra) {
        var scope = this.getScope();
        if (scope) scope.setExtra(key, extra);
    }
    /**
   * @inheritDoc
   */ setContext(name, context) {
        var scope = this.getScope();
        if (scope) scope.setContext(name, context);
    }
    /**
   * @inheritDoc
   */ configureScope(callback) {
        const { scope , client  } = this.getStackTop();
        if (scope && client) callback(scope);
    }
    /**
   * @inheritDoc
   */ run(callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        } finally{
            makeMain(oldHub);
        }
    }
    /**
   * @inheritDoc
   */ getIntegration(integration) {
        var client = this.getClient();
        if (!client) return null;
        try {
            return client.getIntegration(integration);
        } catch (_oO) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
            return null;
        }
    }
    /**
   * @inheritDoc
   */ startTransaction(context, customSamplingContext) {
        return this._callExtensionMethod("startTransaction", context, customSamplingContext);
    }
    /**
   * @inheritDoc
   */ traceHeaders() {
        return this._callExtensionMethod("traceHeaders");
    }
    /**
   * @inheritDoc
   */ captureSession(endSession = false) {
        // both send the update and pull the session from the scope
        if (endSession) return this.endSession();
        // only send the update
        this._sendSessionUpdate();
    }
    /**
   * @inheritDoc
   */ endSession() {
        var layer = this.getStackTop();
        var scope = layer && layer.scope;
        var session = scope && scope.getSession();
        if (session) (0, _sessionJs.closeSession)(session);
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        if (scope) scope.setSession();
    }
    /**
   * @inheritDoc
   */ startSession(context) {
        const { scope , client  } = this.getStackTop();
        const { release , environment  } = client && client.getOptions() || {};
        // Will fetch userAgent if called from browser sdk
        var global = (0, _utils.getGlobalObject)();
        const { userAgent  } = global.navigator || {};
        var session = (0, _sessionJs.makeSession)({
            release,
            environment,
            ...scope && {
                user: scope.getUser()
            },
            ...userAgent && {
                userAgent
            },
            ...context
        });
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === "ok") (0, _sessionJs.updateSession)(currentSession, {
                status: "exited"
            });
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    }
    /**
   * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
   * when Tracing is used.
   */ shouldSendDefaultPii() {
        var client = this.getClient();
        var options = client && client.getOptions();
        return Boolean(options && options.sendDefaultPii);
    }
    /**
   * Sends the current Session on the scope
   */ _sendSessionUpdate() {
        const { scope , client  } = this.getStackTop();
        if (!scope) return;
        var session = scope.getSession();
        if (session) {
            if (client && client.captureSession) client.captureSession(session);
        }
    }
    /**
   * Internal helper function to call a method on the top client if it exists.
   *
   * @param method The method to call on the client.
   * @param args Arguments to pass to the client function.
   */ _withClient(callback) {
        const { scope , client  } = this.getStackTop();
        if (client) callback(client, scope);
    }
    /**
   * Calls global extension method and binding current instance to the function call
   */ // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    _callExtensionMethod(method, ...args) {
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") return sentry.extensions[method].apply(this, args);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
}
/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/ function getMainCarrier() {
    var carrier = (0, _utils.getGlobalObject)();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */ function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */ function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) setHubOnCarrier(registry, new Hub());
    // Prefer domains over global if they are there (applicable only to Node environment)
    if ((0, _utils.isNodeEnv)()) return getHubFromActiveDomain(registry);
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */ function getHubFromActiveDomain(registry) {
    try {
        var sentry = getMainCarrier().__SENTRY__;
        var activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) return getHubFromCarrier(registry);
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, (0, _scopeJs.Scope).clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    } catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */ function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */ function getHubFromCarrier(carrier) {
    return (0, _utils.getGlobalSingleton)("hub", ()=>new Hub(), carrier);
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */ function setHubOnCarrier(carrier, hub) {
    if (!carrier) return false;
    var __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    __SENTRY__.hub = hub;
    return true;
}

},{"@sentry/utils":"axZXA","./scope.js":"jHqED","./session.js":"29a6K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"734yX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBreadcrumb", ()=>addBreadcrumb);
parcelHelpers.export(exports, "captureEvent", ()=>captureEvent);
parcelHelpers.export(exports, "captureException", ()=>captureException);
parcelHelpers.export(exports, "captureMessage", ()=>captureMessage);
parcelHelpers.export(exports, "configureScope", ()=>configureScope);
parcelHelpers.export(exports, "setContext", ()=>setContext);
parcelHelpers.export(exports, "setExtra", ()=>setExtra);
parcelHelpers.export(exports, "setExtras", ()=>setExtras);
parcelHelpers.export(exports, "setTag", ()=>setTag);
parcelHelpers.export(exports, "setTags", ()=>setTags);
parcelHelpers.export(exports, "setUser", ()=>setUser);
parcelHelpers.export(exports, "startTransaction", ()=>startTransaction);
parcelHelpers.export(exports, "withScope", ()=>withScope);
var _hubJs = require("./hub.js");
// Note: All functions in this file are typed with a return value of `ReturnType<Hub[HUB_FUNCTION]>`,
// where HUB_FUNCTION is some method on the Hub class.
//
// This is done to make sure the top level SDK methods stay in sync with the hub methods.
// Although every method here has an explicit return type, some of them (that map to void returns) do not
// contain `return` keywords. This is done to save on bundle size, as `return` is not minifiable.
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @param captureContext Additional scope data to apply to exception event.
 * @returns The generated eventId.
 */ function captureException(exception, captureContext) {
    return (0, _hubJs.getCurrentHub)().captureException(exception, {
        captureContext
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param Severity Define the level of the message.
 * @returns The generated eventId.
 */ function captureMessage(message, captureContext) {
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === "string" ? captureContext : undefined;
    var context = typeof captureContext !== "string" ? {
        captureContext
    } : undefined;
    return (0, _hubJs.getCurrentHub)().captureMessage(message, level, context);
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */ function captureEvent(event, hint) {
    return (0, _hubJs.getCurrentHub)().captureEvent(event, hint);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */ function configureScope(callback) {
    (0, _hubJs.getCurrentHub)().configureScope(callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */ function addBreadcrumb(breadcrumb) {
    (0, _hubJs.getCurrentHub)().addBreadcrumb(breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */ function setContext(name, context) {
    (0, _hubJs.getCurrentHub)().setContext(name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */ function setExtras(extras) {
    (0, _hubJs.getCurrentHub)().setExtras(extras);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */ function setExtra(key, extra) {
    (0, _hubJs.getCurrentHub)().setExtra(key, extra);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */ function setTags(tags) {
    (0, _hubJs.getCurrentHub)().setTags(tags);
}
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */ function setTag(key, value) {
    (0, _hubJs.getCurrentHub)().setTag(key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */ function setUser(user) {
    (0, _hubJs.getCurrentHub)().setUser(user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */ function withScope(callback) {
    (0, _hubJs.getCurrentHub)().withScope(callback);
}
/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * NOTE: This function should only be used for *manual* instrumentation. Auto-instrumentation should call
 * `startTransaction` directly on the hub.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */ function startTransaction(context, customSamplingContext) {
    return (0, _hubJs.getCurrentHub)().startTransaction({
        metadata: {
            source: "custom"
        },
        ...context
    }, customSamplingContext);
}

},{"./hub.js":"25z6f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9y7Xs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEnvelopeEndpointWithUrlEncodedAuth", ()=>getEnvelopeEndpointWithUrlEncodedAuth);
parcelHelpers.export(exports, "getReportDialogEndpoint", ()=>getReportDialogEndpoint);
var _utils = require("@sentry/utils");
var SENTRY_API_VERSION = "7";
/** Returns the prefix to construct Sentry ingestion API endpoints. */ function getBaseApiEndpoint(dsn) {
    var protocol = dsn.protocol ? `${dsn.protocol}:` : "";
    var port = dsn.port ? `:${dsn.port}` : "";
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
/** Returns the ingest API endpoint for target. */ function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
/** Returns a URL-encoded string with auth config suitable for a query string. */ function _encodedAuth(dsn, sdkInfo) {
    return (0, _utils.urlEncode)({
        // We send only the minimum set of required information. See
        // https://github.com/getsentry/sentry-javascript/issues/2572.
        sentry_key: dsn.publicKey,
        sentry_version: SENTRY_API_VERSION,
        ...sdkInfo && {
            sentry_client: `${sdkInfo.name}/${sdkInfo.version}`
        }
    });
}
/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */ function getEnvelopeEndpointWithUrlEncodedAuth(dsn, // TODO (v8): Remove `tunnelOrOptions` in favor of `options`, and use the substitute code below
// options: ClientOptions = {} as ClientOptions,
tunnelOrOptions = {}) {
    // TODO (v8): Use this code instead
    // const { tunnel, _metadata = {} } = options;
    // return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, _metadata.sdk)}`;
    var tunnel = typeof tunnelOrOptions === "string" ? tunnelOrOptions : tunnelOrOptions.tunnel;
    var sdkInfo = typeof tunnelOrOptions === "string" || !tunnelOrOptions._metadata ? undefined : tunnelOrOptions._metadata.sdk;
    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
/** Returns the url to the report dialog endpoint. */ function getReportDialogEndpoint(dsnLike, dialogOptions) {
    var dsn = (0, _utils.makeDsn)(dsnLike);
    var endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
    let encodedOptions = `dsn=${(0, _utils.dsnToString)(dsn)}`;
    for(var key in dialogOptions){
        if (key === "dsn") continue;
        if (key === "user") {
            var user = dialogOptions.user;
            if (!user) continue;
            if (user.name) encodedOptions += `&name=${encodeURIComponent(user.name)}`;
            if (user.email) encodedOptions += `&email=${encodeURIComponent(user.email)}`;
        } else encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
    }
    return `${endpoint}?${encodedOptions}`;
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnkV7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseClient", ()=>BaseClient);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
var _apiJs = require("./api.js");
var _envelopeJs = require("./envelope.js");
var _integrationJs = require("./integration.js");
var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */ class BaseClient {
    /** Options passed to the SDK. */ /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */ /** Array of set up integrations. */ __init() {
        this._integrations = {};
    }
    /** Indicates whether this client's integrations have been set up. */ __init2() {
        this._integrationsInitialized = false;
    }
    /** Number of calls being processed */ __init3() {
        this._numProcessing = 0;
    }
    /** Holds flushable  */ __init4() {
        this._outcomes = {};
    }
    /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */ constructor(options){
        BaseClient.prototype.__init.call(this);
        BaseClient.prototype.__init2.call(this);
        BaseClient.prototype.__init3.call(this);
        BaseClient.prototype.__init4.call(this);
        this._options = options;
        if (options.dsn) {
            this._dsn = (0, _utils.makeDsn)(options.dsn);
            var url = (0, _apiJs.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, options);
            this._transport = options.transport({
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...options.transportOptions,
                url
            });
        } else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("No DSN provided, client will not do anything.");
    }
    /**
   * @inheritDoc
   */ captureException(exception, hint, scope) {
        // ensure we haven't captured this very object before
        if ((0, _utils.checkOrSetAlreadyCaught)(exception)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(ALREADY_SEEN_ERROR);
            return;
        }
        let eventId = hint && hint.event_id;
        this._process(this.eventFromException(exception, hint).then((event)=>this._captureEvent(event, hint, scope)).then((result)=>{
            eventId = result;
        }));
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureMessage(message, level, hint, scope) {
        let eventId = hint && hint.event_id;
        var promisedEvent = (0, _utils.isPrimitive)(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
        this._process(promisedEvent.then((event)=>this._captureEvent(event, hint, scope)).then((result)=>{
            eventId = result;
        }));
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureEvent(event, hint, scope) {
        // ensure we haven't captured this very object before
        if (hint && hint.originalException && (0, _utils.checkOrSetAlreadyCaught)(hint.originalException)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(ALREADY_SEEN_ERROR);
            return;
        }
        let eventId = hint && hint.event_id;
        this._process(this._captureEvent(event, hint, scope).then((result)=>{
            eventId = result;
        }));
        return eventId;
    }
    /**
   * @inheritDoc
   */ captureSession(session) {
        if (!this._isEnabled()) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("SDK not enabled, will not capture session.");
            return;
        }
        if (!(typeof session.release === "string")) (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Discarded session because of missing or non-string release");
        else {
            this.sendSession(session);
            // After sending, we set init false to indicate it's not the first occurrence
            (0, _hub.updateSession)(session, {
                init: false
            });
        }
    }
    /**
   * @inheritDoc
   */ getDsn() {
        return this._dsn;
    }
    /**
   * @inheritDoc
   */ getOptions() {
        return this._options;
    }
    /**
   * @inheritDoc
   */ getTransport() {
        return this._transport;
    }
    /**
   * @inheritDoc
   */ flush(timeout) {
        var transport = this._transport;
        if (transport) return this._isClientDoneProcessing(timeout).then((clientFinished)=>{
            return transport.flush(timeout).then((transportFlushed)=>clientFinished && transportFlushed);
        });
        else return (0, _utils.resolvedSyncPromise)(true);
    }
    /**
   * @inheritDoc
   */ close(timeout) {
        return this.flush(timeout).then((result)=>{
            this.getOptions().enabled = false;
            return result;
        });
    }
    /**
   * Sets up the integrations
   */ setupIntegrations() {
        if (this._isEnabled() && !this._integrationsInitialized) {
            this._integrations = (0, _integrationJs.setupIntegrations)(this._options.integrations);
            this._integrationsInitialized = true;
        }
    }
    /**
   * Gets an installed integration by its `id`.
   *
   * @returns The installed integration or `undefined` if no integration with that `id` was installed.
   */ getIntegrationById(integrationId) {
        return this._integrations[integrationId];
    }
    /**
   * @inheritDoc
   */ getIntegration(integration) {
        try {
            return this._integrations[integration.id] || null;
        } catch (_oO) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Cannot retrieve integration ${integration.id} from the current Client`);
            return null;
        }
    }
    /**
   * @inheritDoc
   */ sendEvent(event, hint = {}) {
        if (this._dsn) {
            let env = (0, _envelopeJs.createEventEnvelope)(event, this._dsn, this._options._metadata, this._options.tunnel);
            for (var attachment of hint.attachments || [])env = (0, _utils.addItemToEnvelope)(env, (0, _utils.createAttachmentEnvelopeItem)(attachment, this._options.transportOptions && this._options.transportOptions.textEncoder));
            this._sendEnvelope(env);
        }
    }
    /**
   * @inheritDoc
   */ sendSession(session) {
        if (this._dsn) {
            var env = (0, _envelopeJs.createSessionEnvelope)(session, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(env);
        }
    }
    /**
   * @inheritDoc
   */ recordDroppedEvent(reason, category) {
        if (this._options.sendClientReports) {
            // We want to track each category (error, transaction, session) separately
            // but still keep the distinction between different type of outcomes.
            // We could use nested maps, but it's much easier to read and type this way.
            // A correct type for map-based implementation if we want to go that route
            // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
            // With typescript 4.1 we could even use template literal types
            var key = `${reason}:${category}`;
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`Adding outcome: "${key}"`);
            // The following works because undefined + 1 === NaN and NaN is falsy
            this._outcomes[key] = this._outcomes[key] + 1 || 1;
        }
    }
    /** Updates existing session based on the provided event */ _updateSessionFromEvent(session, event) {
        let crashed = false;
        let errored = false;
        var exceptions = event.exception && event.exception.values;
        if (exceptions) {
            errored = true;
            for (var ex of exceptions){
                var mechanism = ex.mechanism;
                if (mechanism && mechanism.handled === false) {
                    crashed = true;
                    break;
                }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        var sessionNonTerminal = session.status === "ok";
        var shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
        if (shouldUpdateAndSend) {
            (0, _hub.updateSession)(session, {
                ...crashed && {
                    status: "crashed"
                },
                errors: session.errors || Number(errored || crashed)
            });
            this.captureSession(session);
        }
    }
    /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */ _isClientDoneProcessing(timeout) {
        return new (0, _utils.SyncPromise)((resolve)=>{
            let ticked = 0;
            var tick = 1;
            var interval = setInterval(()=>{
                if (this._numProcessing == 0) {
                    clearInterval(interval);
                    resolve(true);
                } else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    }
    /** Determines whether this SDK is enabled and a valid Dsn is present. */ _isEnabled() {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    }
    /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A new event with more information.
   */ _prepareEvent(event, hint, scope) {
        const { normalizeDepth =3 , normalizeMaxBreadth =1000  } = this.getOptions();
        var prepared = {
            ...event,
            event_id: event.event_id || hint.event_id || (0, _utils.uuid4)(),
            timestamp: event.timestamp || (0, _utils.dateTimestampInSeconds)()
        };
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        let finalScope = scope;
        if (hint.captureContext) finalScope = (0, _hub.Scope).clone(finalScope).update(hint.captureContext);
        // We prepare the result here with a resolved Event.
        let result = (0, _utils.resolvedSyncPromise)(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // Collect attachments from the hint and scope
            var attachments = [
                ...hint.attachments || [],
                ...finalScope.getAttachments()
            ];
            if (attachments.length) hint.attachments = attachments;
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then((evt)=>{
            if (typeof normalizeDepth === "number" && normalizeDepth > 0) return this._normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
            return evt;
        });
    }
    /**
   * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
   * Normalized keys:
   * - `breadcrumbs.data`
   * - `user`
   * - `contexts`
   * - `extra`
   * @param event Event
   * @returns Normalized event
   */ _normalizeEvent(event, depth, maxBreadth) {
        if (!event) return null;
        var normalized = {
            ...event,
            ...event.breadcrumbs && {
                breadcrumbs: event.breadcrumbs.map((b)=>({
                        ...b,
                        ...b.data && {
                            data: (0, _utils.normalize)(b.data, depth, maxBreadth)
                        }
                    }))
            },
            ...event.user && {
                user: (0, _utils.normalize)(event.user, depth, maxBreadth)
            },
            ...event.contexts && {
                contexts: (0, _utils.normalize)(event.contexts, depth, maxBreadth)
            },
            ...event.extra && {
                extra: (0, _utils.normalize)(event.extra, depth, maxBreadth)
            }
        };
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace && normalized.contexts) {
            normalized.contexts.trace = event.contexts.trace;
            // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
            if (event.contexts.trace.data) normalized.contexts.trace.data = (0, _utils.normalize)(event.contexts.trace.data, depth, maxBreadth);
        }
        // event.spans[].data may contain circular/dangerous data so we need to normalize it
        if (event.spans) normalized.spans = event.spans.map((span)=>{
            // We cannot use the spread operator here because `toJSON` on `span` is non-enumerable
            if (span.data) span.data = (0, _utils.normalize)(span.data, depth, maxBreadth);
            return span;
        });
        return normalized;
    }
    /**
   *  Enhances event using the client configuration.
   *  It takes care of all "static" values like environment, release and `dist`,
   *  as well as truncating overly long values.
   * @param event event instance to be enhanced
   */ _applyClientOptions(event) {
        var options = this.getOptions();
        const { environment , release , dist , maxValueLength =250  } = options;
        if (!("environment" in event)) event.environment = "environment" in options ? environment : "production";
        if (event.release === undefined && release !== undefined) event.release = release;
        if (event.dist === undefined && dist !== undefined) event.dist = dist;
        if (event.message) event.message = (0, _utils.truncate)(event.message, maxValueLength);
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) exception.value = (0, _utils.truncate)(exception.value, maxValueLength);
        var request = event.request;
        if (request && request.url) request.url = (0, _utils.truncate)(request.url, maxValueLength);
    }
    /**
   * This function adds all used integrations to the SDK info in the event.
   * @param event The event that will be filled with all integrations.
   */ _applyIntegrationsMetadata(event) {
        var integrationsArray = Object.keys(this._integrations);
        if (integrationsArray.length > 0) {
            event.sdk = event.sdk || {};
            event.sdk.integrations = [
                ...event.sdk.integrations || [],
                ...integrationsArray
            ];
        }
    }
    /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */ _captureEvent(event, hint = {}, scope) {
        return this._processEvent(event, hint, scope).then((finalEvent)=>{
            return finalEvent.event_id;
        }, (reason)=>{
            if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
                // If something's gone wrong, log the error as a warning. If it's just us having used a `SentryError` for
                // control flow, log just the message (no stack) as a log-level log.
                var sentryError = reason;
                if (sentryError.logLevel === "log") (0, _utils.logger).log(sentryError.message);
                else (0, _utils.logger).warn(sentryError);
            }
            return undefined;
        });
    }
    /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param scope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */ _processEvent(event, hint, scope) {
        const { beforeSend , sampleRate  } = this.getOptions();
        if (!this._isEnabled()) return (0, _utils.rejectedSyncPromise)(new (0, _utils.SentryError)("SDK not enabled, will not capture event.", "log"));
        var isTransaction = event.type === "transaction";
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === "number" && Math.random() > sampleRate) {
            this.recordDroppedEvent("sample_rate", "error");
            return (0, _utils.rejectedSyncPromise)(new (0, _utils.SentryError)(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`, "log"));
        }
        return this._prepareEvent(event, hint, scope).then((prepared)=>{
            if (prepared === null) {
                this.recordDroppedEvent("event_processor", event.type || "error");
                throw new (0, _utils.SentryError)("An event processor returned null, will not send event.", "log");
            }
            var isInternalException = hint.data && hint.data.__sentry__ === true;
            if (isInternalException || isTransaction || !beforeSend) return prepared;
            var beforeSendResult = beforeSend(prepared, hint);
            return _ensureBeforeSendRv(beforeSendResult);
        }).then((processedEvent)=>{
            if (processedEvent === null) {
                this.recordDroppedEvent("before_send", event.type || "error");
                throw new (0, _utils.SentryError)("`beforeSend` returned `null`, will not send event.", "log");
            }
            var session = scope && scope.getSession();
            if (!isTransaction && session) this._updateSessionFromEvent(session, processedEvent);
            this.sendEvent(processedEvent, hint);
            return processedEvent;
        }).then(null, (reason)=>{
            if (reason instanceof (0, _utils.SentryError)) throw reason;
            this.captureException(reason, {
                data: {
                    __sentry__: true
                },
                originalException: reason
            });
            throw new (0, _utils.SentryError)(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`);
        });
    }
    /**
   * Occupies the client with processing and event
   */ _process(promise) {
        this._numProcessing += 1;
        promise.then((value)=>{
            this._numProcessing -= 1;
            return value;
        }, (reason)=>{
            this._numProcessing -= 1;
            return reason;
        });
    }
    /**
   * @inheritdoc
   */ _sendEnvelope(envelope) {
        if (this._transport && this._dsn) this._transport.send(envelope).then(null, (reason)=>{
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Error while sending event:", reason);
        });
        else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Transport disabled");
    }
    /**
   * Clears outcomes on this client and returns them.
   */ _clearOutcomes() {
        var outcomes = this._outcomes;
        this._outcomes = {};
        return Object.keys(outcomes).map((key)=>{
            const [reason, category] = key.split(":");
            return {
                reason,
                category,
                quantity: outcomes[key]
            };
        });
    }
}
/**
 * Verifies that return value of configured `beforeSend` is of expected type.
 */ function _ensureBeforeSendRv(rv) {
    var nullErr = "`beforeSend` method has to return `null` or a valid event.";
    if ((0, _utils.isThenable)(rv)) return rv.then((event)=>{
        if (!((0, _utils.isPlainObject)(event) || event === null)) throw new (0, _utils.SentryError)(nullErr);
        return event;
    }, (e)=>{
        throw new (0, _utils.SentryError)(`beforeSend rejected with ${e}`);
    });
    else if (!((0, _utils.isPlainObject)(rv) || rv === null)) throw new (0, _utils.SentryError)(nullErr);
    return rv;
}

},{"@sentry/hub":"4kBQk","@sentry/utils":"axZXA","./api.js":"9y7Xs","./envelope.js":"ggmaz","./integration.js":"4p6JO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggmaz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEventEnvelope", ()=>createEventEnvelope);
parcelHelpers.export(exports, "createSessionEnvelope", ()=>createSessionEnvelope);
var _utils = require("@sentry/utils");
/** Extract sdk info from from the API metadata */ function getSdkMetadataForEnvelopeHeader(metadata) {
    if (!metadata || !metadata.sdk) return;
    const { name , version  } = metadata.sdk;
    return {
        name,
        version
    };
}
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/ function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) return event;
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [
        ...event.sdk.integrations || [],
        ...sdkInfo.integrations || []
    ];
    event.sdk.packages = [
        ...event.sdk.packages || [],
        ...sdkInfo.packages || []
    ];
    return event;
}
/** Creates an envelope from a Session */ function createSessionEnvelope(session, dsn, metadata, tunnel) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    var envelopeHeaders = {
        sent_at: new Date().toISOString(),
        ...sdkInfo && {
            sdk: sdkInfo
        },
        ...!!tunnel && {
            dsn: (0, _utils.dsnToString)(dsn)
        }
    };
    var envelopeItem = "aggregates" in session ? [
        {
            type: "sessions"
        },
        session
    ] : [
        {
            type: "session"
        },
        session
    ];
    return (0, _utils.createEnvelope)(envelopeHeaders, [
        envelopeItem
    ]);
}
/**
 * Create an Envelope from an event.
 */ function createEventEnvelope(event, dsn, metadata, tunnel) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    var eventType = event.type || "event";
    const { transactionSampling  } = event.sdkProcessingMetadata || {};
    const { method: samplingMethod , rate: sampleRate  } = transactionSampling || {};
    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
    var envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
    // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
    // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
    // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
    // of this `delete`, lest we miss putting it back in the next time the property is in use.)
    delete event.sdkProcessingMetadata;
    var eventItem = [
        {
            type: eventType,
            sample_rates: [
                {
                    id: samplingMethod,
                    rate: sampleRate
                }
            ]
        },
        event, 
    ];
    return (0, _utils.createEnvelope)(envelopeHeaders, [
        eventItem
    ]);
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    var baggage = event.sdkProcessingMetadata && event.sdkProcessingMetadata.baggage;
    var dynamicSamplingContext = baggage && (0, _utils.getSentryBaggageItems)(baggage);
    return {
        event_id: event.event_id,
        sent_at: new Date().toISOString(),
        ...sdkInfo && {
            sdk: sdkInfo
        },
        ...!!tunnel && {
            dsn: (0, _utils.dsnToString)(dsn)
        },
        ...event.type === "transaction" && dynamicSamplingContext && {
            trace: (0, _utils.dropUndefinedKeys)({
                ...dynamicSamplingContext
            })
        }
    };
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4p6JO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getIntegrationsToSetup", ()=>getIntegrationsToSetup);
parcelHelpers.export(exports, "installedIntegrations", ()=>installedIntegrations);
parcelHelpers.export(exports, "setupIntegrations", ()=>setupIntegrations);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
var installedIntegrations = [];
/** Map of integrations assigned to a client */ /**
 * @private
 */ function filterDuplicates(integrations) {
    return integrations.reduce((acc, integrations)=>{
        if (acc.every((accIntegration)=>integrations.name !== accIntegration.name)) acc.push(integrations);
        return acc;
    }, []);
}
/** Gets integration to install */ function getIntegrationsToSetup(options) {
    var defaultIntegrations = options.defaultIntegrations && [
        ...options.defaultIntegrations
    ] || [];
    var userIntegrations = options.integrations;
    let integrations = [
        ...filterDuplicates(defaultIntegrations)
    ];
    if (Array.isArray(userIntegrations)) // Filter out integrations that are also included in user options
    integrations = [
        ...integrations.filter((integrations)=>userIntegrations.every((userIntegration)=>userIntegration.name !== integrations.name)),
        // And filter out duplicated user options integrations
        ...filterDuplicates(userIntegrations), 
    ];
    else if (typeof userIntegrations === "function") {
        integrations = userIntegrations(integrations);
        integrations = Array.isArray(integrations) ? integrations : [
            integrations
        ];
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map((i)=>i.name);
    var alwaysLastToRun = "Debug";
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) integrations.push(...integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1));
    return integrations;
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */ function setupIntegrations(integrations) {
    var integrationIndex = {};
    integrations.forEach((integration)=>{
        integrationIndex[integration.name] = integration;
        if (installedIntegrations.indexOf(integration.name) === -1) {
            integration.setupOnce((0, _hub.addGlobalEventProcessor), (0, _hub.getCurrentHub));
            installedIntegrations.push(integration.name);
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`Integration installed: ${integration.name}`);
        }
    });
    return integrationIndex;
}

},{"@sentry/hub":"4kBQk","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CYXK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAndBind", ()=>initAndBind);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
/** A class object that can instantiate Client objects. */ /**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */ function initAndBind(clientClass, options) {
    if (options.debug === true) {
        if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) (0, _utils.logger).enable();
        else // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
    }
    var hub = (0, _hub.getCurrentHub)();
    var scope = hub.getScope();
    if (scope) scope.update(options.initialScope);
    var client = new clientClass(options);
    hub.bindClient(client);
}

},{"@sentry/hub":"4kBQk","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uL6y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_TRANSPORT_BUFFER_SIZE", ()=>DEFAULT_TRANSPORT_BUFFER_SIZE);
parcelHelpers.export(exports, "createTransport", ()=>createTransport);
var _utils = require("@sentry/utils");
var DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
/**
 * Creates an instance of a Sentry `Transport`
 *
 * @param options
 * @param makeRequest
 */ function createTransport(options, makeRequest, buffer = (0, _utils.makePromiseBuffer)(options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE)) {
    let rateLimits = {};
    var flush = (timeout)=>buffer.drain(timeout);
    function send(envelope) {
        var filteredEnvelopeItems = [];
        // Drop rate limited items from envelope
        (0, _utils.forEachEnvelopeItem)(envelope, (item, type)=>{
            var envelopeItemDataCategory = (0, _utils.envelopeItemTypeToDataCategory)(type);
            if ((0, _utils.isRateLimited)(rateLimits, envelopeItemDataCategory)) options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory);
            else filteredEnvelopeItems.push(item);
        });
        // Skip sending if envelope is empty after filtering out rate limited events
        if (filteredEnvelopeItems.length === 0) return (0, _utils.resolvedSyncPromise)();
        var filteredEnvelope = (0, _utils.createEnvelope)(envelope[0], filteredEnvelopeItems);
        // Creates client report for each item in an envelope
        var recordEnvelopeLoss = (reason)=>{
            (0, _utils.forEachEnvelopeItem)(filteredEnvelope, (_, type)=>{
                options.recordDroppedEvent(reason, (0, _utils.envelopeItemTypeToDataCategory)(type));
            });
        };
        var requestTask = ()=>makeRequest({
                body: (0, _utils.serializeEnvelope)(filteredEnvelope, options.textEncoder)
            }).then((response)=>{
                // We don't want to throw on NOK responses, but we want to at least log them
                if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
                rateLimits = (0, _utils.updateRateLimits)(rateLimits, response);
            }, (error)=>{
                (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Failed while sending event:", error);
                recordEnvelopeLoss("network_error");
            });
        return buffer.add(requestTask).then((result)=>result, (error)=>{
            if (error instanceof (0, _utils.SentryError)) {
                (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Skipped sending event because buffer is full.");
                recordEnvelopeLoss("queue_overflow");
                return (0, _utils.resolvedSyncPromise)();
            } else throw error;
        });
    }
    return {
        send,
        flush
    };
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZ610":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SDK_VERSION", ()=>SDK_VERSION);
var SDK_VERSION = "7.12.1";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bid82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNativeFetchImplementation", ()=>getNativeFetchImplementation);
parcelHelpers.export(exports, "sendReport", ()=>sendReport);
var _utils = require("@sentry/utils");
var global = (0, _utils.getGlobalObject)();
let cachedFetchImpl;
/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * var f = window.fetch;
 * window.fetch = function () {
 *   var p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */ function getNativeFetchImplementation() {
    if (cachedFetchImpl) return cachedFetchImpl;
    // Fast path to avoid DOM I/O
    if ((0, _utils.isNativeFetch)(global.fetch)) return cachedFetchImpl = global.fetch.bind(global);
    var document = global.document;
    let fetchImpl = global.fetch;
    if (document && typeof document.createElement === "function") try {
        var sandbox = document.createElement("iframe");
        sandbox.hidden = true;
        document.head.appendChild(sandbox);
        var contentWindow = sandbox.contentWindow;
        if (contentWindow && contentWindow.fetch) fetchImpl = contentWindow.fetch;
        document.head.removeChild(sandbox);
    } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
    }
    return cachedFetchImpl = fetchImpl.bind(global);
}
/**
 * Sends sdk client report using sendBeacon or fetch as a fallback if available
 *
 * @param url report endpoint
 * @param body report payload
 */ function sendReport(url, body) {
    var isRealNavigator = Object.prototype.toString.call(global && global.navigator) === "[object Navigator]";
    var hasSendBeacon = isRealNavigator && typeof global.navigator.sendBeacon === "function";
    if (hasSendBeacon) {
        // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
        var sendBeacon = global.navigator.sendBeacon.bind(global.navigator);
        sendBeacon(url, body);
    } else if ((0, _utils.supportsFetch)()) {
        var fetch = getNativeFetchImplementation();
        fetch(url, {
            body,
            method: "POST",
            credentials: "omit",
            keepalive: true
        }).then(null, (error)=>{
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(error);
        });
    }
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aupud":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeXHRTransport", ()=>makeXHRTransport);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
/**
 * The DONE ready state for XmlHttpRequest
 *
 * Defining it here as a constant b/c XMLHttpRequest.DONE is not always defined
 * (e.g. during testing, it is `undefined`)
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState}
 */ var XHR_READYSTATE_DONE = 4;
/**
 * Creates a Transport that uses the XMLHttpRequest API to send events to Sentry.
 */ function makeXHRTransport(options) {
    function makeRequest(request) {
        return new (0, _utils.SyncPromise)((resolve, reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.onerror = reject;
            xhr.onreadystatechange = ()=>{
                if (xhr.readyState === XHR_READYSTATE_DONE) resolve({
                    statusCode: xhr.status,
                    headers: {
                        "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
                        "retry-after": xhr.getResponseHeader("Retry-After")
                    }
                });
            };
            xhr.open("POST", options.url);
            for(var header in options.headers)if (Object.prototype.hasOwnProperty.call(options.headers, header)) xhr.setRequestHeader(header, options.headers[header]);
            xhr.send(request.body);
        });
    }
    return (0, _core.createTransport)(options, makeRequest);
}

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dN4ch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GlobalHandlers", ()=>(0, _globalhandlersJs.GlobalHandlers));
parcelHelpers.export(exports, "TryCatch", ()=>(0, _trycatchJs.TryCatch));
parcelHelpers.export(exports, "Breadcrumbs", ()=>(0, _breadcrumbsJs.Breadcrumbs));
parcelHelpers.export(exports, "LinkedErrors", ()=>(0, _linkederrorsJs.LinkedErrors));
parcelHelpers.export(exports, "HttpContext", ()=>(0, _httpcontextJs.HttpContext));
parcelHelpers.export(exports, "Dedupe", ()=>(0, _dedupeJs.Dedupe));
var _globalhandlersJs = require("./globalhandlers.js");
var _trycatchJs = require("./trycatch.js");
var _breadcrumbsJs = require("./breadcrumbs.js");
var _linkederrorsJs = require("./linkederrors.js");
var _httpcontextJs = require("./httpcontext.js");
var _dedupeJs = require("./dedupe.js");

},{"./globalhandlers.js":"bgvEJ","./trycatch.js":"9zNxD","./breadcrumbs.js":"doykJ","./linkederrors.js":"4IhVU","./httpcontext.js":"7HLvh","./dedupe.js":"6K3pq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgvEJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GlobalHandlers", ()=>GlobalHandlers);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _eventbuilderJs = require("../eventbuilder.js");
var _helpersJs = require("../helpers.js");
/** Global handlers */ class GlobalHandlers {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "GlobalHandlers";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = GlobalHandlers.id;
    }
    /** JSDoc */ /**
   * Stores references functions to installing handlers. Will set to undefined
   * after they have been run so that they are not used twice.
   */ __init2() {
        this._installFunc = {
            onerror: _installGlobalOnErrorHandler,
            onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
        };
    }
    /** JSDoc */ constructor(options){
        GlobalHandlers.prototype.__init.call(this);
        GlobalHandlers.prototype.__init2.call(this);
        this._options = {
            onerror: true,
            onunhandledrejection: true,
            ...options
        };
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        Error.stackTraceLimit = 50;
        var options = this._options;
        // We can disable guard-for-in as we construct the options object above + do checks against
        // `this._installFunc` for the property.
        for(var key in options){
            var installFunc = this._installFunc[key];
            if (installFunc && options[key]) {
                globalHandlerLog(key);
                installFunc();
                this._installFunc[key] = undefined;
            }
        }
    }
}
GlobalHandlers.__initStatic();
/** JSDoc */ function _installGlobalOnErrorHandler() {
    (0, _utils.addInstrumentationHandler)("error", (data)=>{
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) return;
        const { msg , url , line , column , error  } = data;
        if ((0, _helpersJs.shouldIgnoreOnError)() || error && error.__sentry_own_request__) return;
        var event = error === undefined && (0, _utils.isString)(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame((0, _eventbuilderJs.eventFromUnknownInput)(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onerror");
    });
}
/** JSDoc */ function _installGlobalOnUnhandledRejectionHandler() {
    (0, _utils.addInstrumentationHandler)("unhandledrejection", (e)=>{
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) return;
        let error = e;
        // dig the object of the rejection out of known event types
        try {
            // PromiseRejectionEvents store the object of the rejection under 'reason'
            // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
            if ("reason" in e) error = e.reason;
            else if ("detail" in e && "reason" in e.detail) error = e.detail.reason;
        } catch (_oO) {
        // no-empty
        }
        if ((0, _helpersJs.shouldIgnoreOnError)() || error && error.__sentry_own_request__) return true;
        var event = (0, _utils.isPrimitive)(error) ? _eventFromRejectionWithPrimitive(error) : (0, _eventbuilderJs.eventFromUnknownInput)(stackParser, error, undefined, attachStacktrace, true);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onunhandledrejection");
        return;
    });
}
/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */ function _eventFromRejectionWithPrimitive(reason) {
    return {
        exception: {
            values: [
                {
                    type: "UnhandledRejection",
                    // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                    value: `Non-Error promise rejection captured with value: ${String(reason)}`
                }, 
            ]
        }
    };
}
/**
 * This function creates a stack from an old, error-less onerror handler.
 */ function _eventFromIncompleteOnError(msg, url, line, column) {
    var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    // If 'message' is ErrorEvent, get real message from inside
    let message = (0, _utils.isErrorEvent)(msg) ? msg.message : msg;
    let name = "Error";
    var groups = message.match(ERROR_TYPES_RE);
    if (groups) {
        name = groups[1];
        message = groups[2];
    }
    var event = {
        exception: {
            values: [
                {
                    type: name,
                    value: message
                }, 
            ]
        }
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
}
/** JSDoc */ function _enhanceEventWithInitialFrame(event, url, line, column) {
    // event.exception
    var e = event.exception = event.exception || {};
    // event.exception.values
    var ev = e.values = e.values || [];
    // event.exception.values[0]
    var ev0 = ev[0] = ev[0] || {};
    // event.exception.values[0].stacktrace
    var ev0s = ev0.stacktrace = ev0.stacktrace || {};
    // event.exception.values[0].stacktrace.frames
    var ev0sf = ev0s.frames = ev0s.frames || [];
    var colno = isNaN(parseInt(column, 10)) ? undefined : column;
    var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
    var filename = (0, _utils.isString)(url) && url.length > 0 ? url : (0, _utils.getLocationHref)();
    // event.exception.values[0].stacktrace.frames
    if (ev0sf.length === 0) ev0sf.push({
        colno,
        filename,
        function: "?",
        in_app: true,
        lineno
    });
    return event;
}
function globalHandlerLog(type) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`Global Handler attached: ${type}`);
}
function addMechanismAndCapture(hub, error, event, type) {
    (0, _utils.addExceptionMechanism)(event, {
        handled: false,
        type
    });
    hub.captureEvent(event, {
        originalException: error
    });
}
function getHubAndOptions() {
    var hub = (0, _core.getCurrentHub)();
    var client = hub.getClient();
    var options = client && client.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: false
    };
    return [
        hub,
        options.stackParser,
        options.attachStacktrace
    ];
}

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","../eventbuilder.js":"gOHm6","../helpers.js":"130Sv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOHm6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventFromError", ()=>eventFromError);
parcelHelpers.export(exports, "eventFromException", ()=>eventFromException);
parcelHelpers.export(exports, "eventFromMessage", ()=>eventFromMessage);
parcelHelpers.export(exports, "eventFromPlainObject", ()=>eventFromPlainObject);
parcelHelpers.export(exports, "eventFromString", ()=>eventFromString);
parcelHelpers.export(exports, "eventFromUnknownInput", ()=>eventFromUnknownInput);
parcelHelpers.export(exports, "exceptionFromError", ()=>exceptionFromError);
parcelHelpers.export(exports, "parseStackFrames", ()=>parseStackFrames);
var _utils = require("@sentry/utils");
/**
 * This function creates an exception from a JavaScript Error
 */ function exceptionFromError(stackParser, ex) {
    // Get the frames first since Opera can lose the stack if we touch anything else first
    var frames = parseStackFrames(stackParser, ex);
    var exception = {
        type: ex && ex.name,
        value: extractMessage(ex)
    };
    if (frames.length) exception.stacktrace = {
        frames
    };
    if (exception.type === undefined && exception.value === "") exception.value = "Unrecoverable error caught";
    return exception;
}
/**
 * @hidden
 */ function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    var event = {
        exception: {
            values: [
                {
                    type: (0, _utils.isEvent)(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${isUnhandledRejection ? "promise rejection" : "exception"} captured with keys: ${(0, _utils.extractExceptionKeysForMessage)(exception)}`
                }, 
            ]
        },
        extra: {
            __serialized__: (0, _utils.normalizeToSize)(exception)
        }
    };
    if (syntheticException) {
        var frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) // event.exception.values[0] has been set above
        event.exception.values[0].stacktrace = {
            frames
        };
    }
    return event;
}
/**
 * @hidden
 */ function eventFromError(stackParser, ex) {
    return {
        exception: {
            values: [
                exceptionFromError(stackParser, ex)
            ]
        }
    };
}
/** Parses stack frames from an error */ function parseStackFrames(stackParser, ex) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace || ex.stack || "";
    var popSize = getPopSize(ex);
    try {
        return stackParser(stacktrace, popSize);
    } catch (e) {
    // no-empty
    }
    return [];
}
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
function getPopSize(ex) {
    if (ex) {
        if (typeof ex.framesToPop === "number") return ex.framesToPop;
        if (reactMinifiedRegexp.test(ex.message)) return 1;
    }
    return 0;
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */ function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) return "No error message";
    if (message.error && typeof message.error.message === "string") return message.error.message;
    return message;
}
/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */ function eventFromException(stackParser, exception, hint, attachStacktrace) {
    var syntheticException = hint && hint.syntheticException || undefined;
    var event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
    (0, _utils.addExceptionMechanism)(event); // defaults to { type: 'generic', handled: true }
    event.level = "error";
    if (hint && hint.event_id) event.event_id = hint.event_id;
    return (0, _utils.resolvedSyncPromise)(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */ function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
    var syntheticException = hint && hint.syntheticException || undefined;
    var event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) event.event_id = hint.event_id;
    return (0, _utils.resolvedSyncPromise)(event);
}
/**
 * @hidden
 */ function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if ((0, _utils.isErrorEvent)(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        return eventFromError(stackParser, errorEvent.error);
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if ((0, _utils.isDOMError)(exception) || (0, _utils.isDOMException)(exception)) {
        var domException = exception;
        if ("stack" in exception) event = eventFromError(stackParser, exception);
        else {
            var name = domException.name || ((0, _utils.isDOMError)(domException) ? "DOMError" : "DOMException");
            var message = domException.message ? `${name}: ${domException.message}` : name;
            event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
            (0, _utils.addExceptionTypeValue)(event, message);
        }
        if ("code" in domException) event.tags = {
            ...event.tags,
            "DOMException.code": `${domException.code}`
        };
        return event;
    }
    if ((0, _utils.isError)(exception)) // we have a real Error object, do nothing
    return eventFromError(stackParser, exception);
    if ((0, _utils.isPlainObject)(exception) || (0, _utils.isEvent)(exception)) {
        // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
        // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
        // group on any key/value change.
        var objectException = exception;
        event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
        (0, _utils.addExceptionMechanism)(event, {
            synthetic: true
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    (0, _utils.addExceptionTypeValue)(event, `${exception}`, undefined);
    (0, _utils.addExceptionMechanism)(event, {
        synthetic: true
    });
    return event;
}
/**
 * @hidden
 */ function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
    var event = {
        message: input
    };
    if (attachStacktrace && syntheticException) {
        var frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) event.exception = {
            values: [
                {
                    value: input,
                    stacktrace: {
                        frames
                    }
                }
            ]
        };
    }
    return event;
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"130Sv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * All properties the report dialog supports
 */ parcelHelpers.export(exports, "ignoreNextOnError", ()=>ignoreNextOnError);
parcelHelpers.export(exports, "shouldIgnoreOnError", ()=>shouldIgnoreOnError);
parcelHelpers.export(exports, "wrap", ()=>wrap);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
let ignoreOnError = 0;
/**
 * @hidden
 */ function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */ function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(()=>{
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
 * has a correct `this` context.
 * @returns The wrapped function.
 * @hidden
 */ function wrap(fn, options = {}, before) {
    // for future readers what this does is wrap a function and then create
    // a bi-directional wrapping between them.
    //
    // example: wrapped = wrap(original);
    //  original.__sentry_wrapped__ -> wrapped
    //  wrapped.__sentry_original__ -> original
    if (typeof fn !== "function") return fn;
    try {
        // if we're dealing with a function that was previously wrapped, return
        // the original wrapper.
        var wrapper = fn.__sentry_wrapped__;
        if (wrapper) return wrapper;
        // We don't wanna wrap it twice
        if ((0, _utils.getOriginalFunction)(fn)) return fn;
    } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
    var sentryWrapped = function() {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === "function") before.apply(this, arguments);
            var wrappedArguments = args.map((arg)=>wrap(arg, options));
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        } catch (ex) {
            ignoreNextOnError();
            (0, _core.withScope)((scope)=>{
                scope.addEventProcessor((event)=>{
                    if (options.mechanism) {
                        (0, _utils.addExceptionTypeValue)(event, undefined, undefined);
                        (0, _utils.addExceptionMechanism)(event, options.mechanism);
                    }
                    event.extra = {
                        ...event.extra,
                        arguments: args
                    };
                    return event;
                });
                (0, _core.captureException)(ex);
            });
            throw ex;
        }
    };
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for(var property in fn)if (Object.prototype.hasOwnProperty.call(fn, property)) sentryWrapped[property] = fn[property];
    } catch (_oO) {}
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    (0, _utils.markFunctionWrapped)(sentryWrapped, fn);
    (0, _utils.addNonEnumerableProperty)(fn, "__sentry_wrapped__", sentryWrapped);
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
        if (descriptor.configurable) Object.defineProperty(sentryWrapped, "name", {
            get () {
                return fn.name;
            }
        });
    } catch (_oO1) {}
    return sentryWrapped;
}

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zNxD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TryCatch", ()=>TryCatch);
var _utils = require("@sentry/utils");
var _helpersJs = require("../helpers.js");
var DEFAULT_EVENT_TARGET = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload", 
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */ class TryCatch {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "TryCatch";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = TryCatch.id;
    }
    /** JSDoc */ /**
   * @inheritDoc
   */ constructor(options){
        TryCatch.prototype.__init.call(this);
        this._options = {
            XMLHttpRequest: true,
            eventTarget: true,
            requestAnimationFrame: true,
            setInterval: true,
            setTimeout: true,
            ...options
        };
    }
    /**
   * Wrap timer functions and event targets to catch errors
   * and provide better metadata.
   */ setupOnce() {
        var global = (0, _utils.getGlobalObject)();
        if (this._options.setTimeout) (0, _utils.fill)(global, "setTimeout", _wrapTimeFunction);
        if (this._options.setInterval) (0, _utils.fill)(global, "setInterval", _wrapTimeFunction);
        if (this._options.requestAnimationFrame) (0, _utils.fill)(global, "requestAnimationFrame", _wrapRAF);
        if (this._options.XMLHttpRequest && "XMLHttpRequest" in global) (0, _utils.fill)(XMLHttpRequest.prototype, "send", _wrapXHR);
        var eventTargetOption = this._options.eventTarget;
        if (eventTargetOption) {
            var eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(_wrapEventTarget);
        }
    }
}
TryCatch.__initStatic();
/** JSDoc */ function _wrapTimeFunction(original) {
    return function(...args) {
        var originalCallback = args[0];
        args[0] = (0, _helpersJs.wrap)(originalCallback, {
            mechanism: {
                data: {
                    function: (0, _utils.getFunctionName)(original)
                },
                handled: true,
                type: "instrument"
            }
        });
        return original.apply(this, args);
    };
}
/** JSDoc */ function _wrapRAF(original) {
    return function(callback) {
        return original.apply(this, [
            (0, _helpersJs.wrap)(callback, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: (0, _utils.getFunctionName)(original)
                    },
                    handled: true,
                    type: "instrument"
                }
            }), 
        ]);
    };
}
/** JSDoc */ function _wrapXHR(originalSend) {
    return function(...args) {
        var xhr = this;
        var xmlHttpRequestProps = [
            "onload",
            "onerror",
            "onprogress",
            "onreadystatechange"
        ];
        xmlHttpRequestProps.forEach((prop)=>{
            if (prop in xhr && typeof xhr[prop] === "function") (0, _utils.fill)(xhr, prop, function(original) {
                var wrapOptions = {
                    mechanism: {
                        data: {
                            function: prop,
                            handler: (0, _utils.getFunctionName)(original)
                        },
                        handled: true,
                        type: "instrument"
                    }
                };
                // If Instrument integration has been called before TryCatch, get the name of original function
                var originalFunction = (0, _utils.getOriginalFunction)(original);
                if (originalFunction) wrapOptions.mechanism.data.handler = (0, _utils.getFunctionName)(originalFunction);
                // Otherwise wrap directly
                return (0, _helpersJs.wrap)(original, wrapOptions);
            });
        });
        return originalSend.apply(this, args);
    };
}
/** JSDoc */ function _wrapEventTarget(target) {
    var global = (0, _utils.getGlobalObject)();
    var proto = global[target] && global[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
    (0, _utils.fill)(proto, "addEventListener", function(original) {
        return function(eventName, fn, options) {
            try {
                if (typeof fn.handleEvent === "function") // ESlint disable explanation:
                //  First, it is generally safe to call `wrap` with an unbound function. Furthermore, using `.bind()` would
                //  introduce a bug here, because bind returns a new function that doesn't have our
                //  flags(like __sentry_original__) attached. `wrap` checks for those flags to avoid unnecessary wrapping.
                //  Without those flags, every call to addEventListener wraps the function again, causing a memory leak.
                fn.handleEvent = (0, _helpersJs.wrap)(fn.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: (0, _utils.getFunctionName)(fn),
                            target
                        },
                        handled: true,
                        type: "instrument"
                    }
                });
            } catch (err) {
            // can sometimes get 'Permission denied to access property "handle Event'
            }
            return original.apply(this, [
                eventName,
                (0, _helpersJs.wrap)(fn, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: (0, _utils.getFunctionName)(fn),
                            target
                        },
                        handled: true,
                        type: "instrument"
                    }
                }),
                options, 
            ]);
        };
    });
    (0, _utils.fill)(proto, "removeEventListener", function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
            /**
         * There are 2 possible scenarios here:
         *
         * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
         * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
         * as a pass-through, and call original `removeEventListener` with it.
         *
         * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
         * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
         * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
         * in order for us to make a distinction between wrapped/non-wrapped functions possible.
         * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
         *
         * When someone adds a handler prior to initialization, and then do it again, but after,
         * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
         * to get rid of the initial handler and it'd stick there forever.
         */ var wrappedEventHandler = fn;
            try {
                var originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
                if (originalEventHandler) originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
            } catch (e) {
            // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
            }
            return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
    });
}

},{"@sentry/utils":"axZXA","../helpers.js":"130Sv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"doykJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BREADCRUMB_INTEGRATION_ID", ()=>BREADCRUMB_INTEGRATION_ID);
parcelHelpers.export(exports, "Breadcrumbs", ()=>Breadcrumbs);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
/** JSDoc */ var BREADCRUMB_INTEGRATION_ID = "Breadcrumbs";
/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */ class Breadcrumbs {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = BREADCRUMB_INTEGRATION_ID;
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Breadcrumbs.id;
    }
    /**
   * Options of the breadcrumbs integration.
   */ // This field is public, because we use it in the browser client to check if the `sentry` option is enabled.
    /**
   * @inheritDoc
   */ constructor(options){
        Breadcrumbs.prototype.__init.call(this);
        this.options = {
            console: true,
            dom: true,
            fetch: true,
            history: true,
            sentry: true,
            xhr: true,
            ...options
        };
    }
    /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - Console API
   *  - DOM API (click/typing)
   *  - XMLHttpRequest API
   *  - Fetch API
   *  - History API
   */ setupOnce() {
        if (this.options.console) (0, _utils.addInstrumentationHandler)("console", _consoleBreadcrumb);
        if (this.options.dom) (0, _utils.addInstrumentationHandler)("dom", _domBreadcrumb(this.options.dom));
        if (this.options.xhr) (0, _utils.addInstrumentationHandler)("xhr", _xhrBreadcrumb);
        if (this.options.fetch) (0, _utils.addInstrumentationHandler)("fetch", _fetchBreadcrumb);
        if (this.options.history) (0, _utils.addInstrumentationHandler)("history", _historyBreadcrumb);
    }
}
Breadcrumbs.__initStatic();
/**
 * A HOC that creaes a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */ function _domBreadcrumb(dom) {
    function _innerDomBreadcrumb(handlerData) {
        let target;
        let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : undefined;
        if (typeof keyAttrs === "string") keyAttrs = [
            keyAttrs
        ];
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target ? (0, _utils.htmlTreeAsString)(handlerData.event.target, keyAttrs) : (0, _utils.htmlTreeAsString)(handlerData.event, keyAttrs);
        } catch (e) {
            target = "<unknown>";
        }
        if (target.length === 0) return;
        (0, _core.getCurrentHub)().addBreadcrumb({
            category: `ui.${handlerData.name}`,
            message: target
        }, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global
        });
    }
    return _innerDomBreadcrumb;
}
/**
 * Creates breadcrumbs from console API calls
 */ function _consoleBreadcrumb(handlerData) {
    var breadcrumb = {
        category: "console",
        data: {
            arguments: handlerData.args,
            logger: "console"
        },
        level: (0, _utils.severityLevelFromString)(handlerData.level),
        message: (0, _utils.safeJoin)(handlerData.args, " ")
    };
    if (handlerData.level === "assert") {
        if (handlerData.args[0] === false) {
            breadcrumb.message = `Assertion failed: ${(0, _utils.safeJoin)(handlerData.args.slice(1), " ") || "console.assert"}`;
            breadcrumb.data.arguments = handlerData.args.slice(1);
        } else // Don't capture a breadcrumb for passed assertions
        return;
    }
    (0, _core.getCurrentHub)().addBreadcrumb(breadcrumb, {
        input: handlerData.args,
        level: handlerData.level
    });
}
/**
 * Creates breadcrumbs from XHR API calls
 */ function _xhrBreadcrumb(handlerData) {
    if (handlerData.endTimestamp) {
        // We only capture complete, non-sentry requests
        if (handlerData.xhr.__sentry_own_request__) return;
        const { method , url , status_code , body  } = handlerData.xhr.__sentry_xhr__ || {};
        (0, _core.getCurrentHub)().addBreadcrumb({
            category: "xhr",
            data: {
                method,
                url,
                status_code
            },
            type: "http"
        }, {
            xhr: handlerData.xhr,
            input: body
        });
        return;
    }
}
/**
 * Creates breadcrumbs from fetch API calls
 */ function _fetchBreadcrumb(handlerData) {
    // We only capture complete fetch requests
    if (!handlerData.endTimestamp) return;
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
    return;
    if (handlerData.error) (0, _core.getCurrentHub)().addBreadcrumb({
        category: "fetch",
        data: handlerData.fetchData,
        level: "error",
        type: "http"
    }, {
        data: handlerData.error,
        input: handlerData.args
    });
    else (0, _core.getCurrentHub)().addBreadcrumb({
        category: "fetch",
        data: {
            ...handlerData.fetchData,
            status_code: handlerData.response.status
        },
        type: "http"
    }, {
        input: handlerData.args,
        response: handlerData.response
    });
}
/**
 * Creates breadcrumbs from history API calls
 */ function _historyBreadcrumb(handlerData) {
    var global = (0, _utils.getGlobalObject)();
    let from = handlerData.from;
    let to = handlerData.to;
    var parsedLoc = (0, _utils.parseUrl)(global.location.href);
    let parsedFrom = (0, _utils.parseUrl)(from);
    var parsedTo = (0, _utils.parseUrl)(to);
    // Initial pushState doesn't provide `from` information
    if (!parsedFrom.path) parsedFrom = parsedLoc;
    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) to = parsedTo.relative;
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) from = parsedFrom.relative;
    (0, _core.getCurrentHub)().addBreadcrumb({
        category: "navigation",
        data: {
            from,
            to
        }
    });
}

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4IhVU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinkedErrors", ()=>LinkedErrors);
parcelHelpers.export(exports, "_handler", ()=>_handler);
parcelHelpers.export(exports, "_walkErrorTree", ()=>_walkErrorTree);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _eventbuilderJs = require("../eventbuilder.js");
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */ class LinkedErrors {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "LinkedErrors";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = LinkedErrors.id;
    }
    /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ constructor(options = {}){
        LinkedErrors.prototype.__init.call(this);
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        var client = (0, _core.getCurrentHub)().getClient();
        if (!client) return;
        (0, _core.addGlobalEventProcessor)((event, hint)=>{
            var self = (0, _core.getCurrentHub)().getIntegration(LinkedErrors);
            return self ? _handler(client.getOptions().stackParser, self._key, self._limit, event, hint) : event;
        });
    }
}
LinkedErrors.__initStatic();
/**
 * @inheritDoc
 */ function _handler(parser, key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !(0, _utils.isInstanceOf)(hint.originalException, Error)) return event;
    var linkedErrors = _walkErrorTree(parser, limit, hint.originalException, key);
    event.exception.values = [
        ...linkedErrors,
        ...event.exception.values
    ];
    return event;
}
/**
 * JSDOC
 */ function _walkErrorTree(parser, limit, error, key, stack = []) {
    if (!(0, _utils.isInstanceOf)(error[key], Error) || stack.length + 1 >= limit) return stack;
    var exception = (0, _eventbuilderJs.exceptionFromError)(parser, error[key]);
    return _walkErrorTree(parser, limit, error[key], key, [
        exception,
        ...stack
    ]);
}

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","../eventbuilder.js":"gOHm6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7HLvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HttpContext", ()=>HttpContext);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var global = (0, _utils.getGlobalObject)();
/** HttpContext integration collects information about HTTP request headers */ class HttpContext {
    constructor(){
        HttpContext.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "HttpContext";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = HttpContext.id;
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        (0, _core.addGlobalEventProcessor)((event)=>{
            if ((0, _core.getCurrentHub)().getIntegration(HttpContext)) {
                // if none of the information we want exists, don't bother
                if (!global.navigator && !global.location && !global.document) return event;
                // grab as much info as exists and add it to the event
                var url = event.request && event.request.url || global.location && global.location.href;
                const { referrer  } = global.document || {};
                const { userAgent  } = global.navigator || {};
                var headers = {
                    ...event.request && event.request.headers,
                    ...referrer && {
                        Referer: referrer
                    },
                    ...userAgent && {
                        "User-Agent": userAgent
                    }
                };
                var request = {
                    ...url && {
                        url
                    },
                    headers
                };
                return {
                    ...event,
                    request
                };
            }
            return event;
        });
    }
}
HttpContext.__initStatic();

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6K3pq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dedupe", ()=>Dedupe);
var _utils = require("@sentry/utils");
/** Deduplication filter */ class Dedupe {
    constructor(){
        Dedupe.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Dedupe";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Dedupe.id;
    }
    /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ setupOnce(addGlobalEventProcessor, getCurrentHub) {
        var eventProcessor = (currentEvent)=>{
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (_shouldDropEvent(currentEvent, self._previousEvent)) {
                        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Event dropped due to being a duplicate of previously captured event.");
                        return null;
                    }
                } catch (_oO) {
                    return self._previousEvent = currentEvent;
                }
                return self._previousEvent = currentEvent;
            }
            return currentEvent;
        };
        eventProcessor.id = this.name;
        addGlobalEventProcessor(eventProcessor);
    }
}
Dedupe.__initStatic();
/** JSDoc */ function _shouldDropEvent(currentEvent, previousEvent) {
    if (!previousEvent) return false;
    if (_isSameMessageEvent(currentEvent, previousEvent)) return true;
    if (_isSameExceptionEvent(currentEvent, previousEvent)) return true;
    return false;
}
/** JSDoc */ function _isSameMessageEvent(currentEvent, previousEvent) {
    var currentMessage = currentEvent.message;
    var previousMessage = previousEvent.message;
    // If neither event has a message property, they were both exceptions, so bail out
    if (!currentMessage && !previousMessage) return false;
    // If only one event has a stacktrace, but not the other one, they are not the same
    if (currentMessage && !previousMessage || !currentMessage && previousMessage) return false;
    if (currentMessage !== previousMessage) return false;
    if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
    if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
    return true;
}
/** JSDoc */ function _isSameExceptionEvent(currentEvent, previousEvent) {
    var previousException = _getExceptionFromEvent(previousEvent);
    var currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) return false;
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) return false;
    if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
    if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
    return true;
}
/** JSDoc */ function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = _getFramesFromEvent(currentEvent);
    let previousFrames = _getFramesFromEvent(previousEvent);
    // If neither event has a stacktrace, they are assumed to be the same
    if (!currentFrames && !previousFrames) return true;
    // If only one event has a stacktrace, but not the other one, they are not the same
    if (currentFrames && !previousFrames || !currentFrames && previousFrames) return false;
    currentFrames;
    previousFrames;
    // If number of frames differ, they are not the same
    if (previousFrames.length !== currentFrames.length) return false;
    // Otherwise, compare the two
    for(let i = 0; i < previousFrames.length; i++){
        var frameA = previousFrames[i];
        var frameB = currentFrames[i];
        if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) return false;
    }
    return true;
}
/** JSDoc */ function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;
    // If neither event has a fingerprint, they are assumed to be the same
    if (!currentFingerprint && !previousFingerprint) return true;
    // If only one event has a fingerprint, but not the other one, they are not the same
    if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) return false;
    currentFingerprint;
    previousFingerprint;
    // Otherwise, compare the two
    try {
        return !!(currentFingerprint.join("") === previousFingerprint.join(""));
    } catch (_oO) {
        return false;
    }
}
/** JSDoc */ function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
}
/** JSDoc */ function _getFramesFromEvent(event) {
    var exception = event.exception;
    if (exception) try {
        // @ts-ignore Object could be undefined
        return exception.values[0].stacktrace.frames;
    } catch (_oO) {
        return undefined;
    }
    return undefined;
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPCsw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BrowserClient", ()=>BrowserClient);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _eventbuilderJs = require("./eventbuilder.js");
var _breadcrumbsJs = require("./integrations/breadcrumbs.js");
var _utilsJs = require("./transports/utils.js");
var globalObject = (0, _utils.getGlobalObject)();
/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */ class BrowserClient extends (0, _core.BaseClient) {
    /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */ constructor(options){
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
            name: "sentry.javascript.browser",
            packages: [
                {
                    name: "npm:@sentry/browser",
                    version: (0, _core.SDK_VERSION)
                }, 
            ],
            version: (0, _core.SDK_VERSION)
        };
        super(options);
        if (options.sendClientReports && globalObject.document) globalObject.document.addEventListener("visibilitychange", ()=>{
            if (globalObject.document.visibilityState === "hidden") this._flushOutcomes();
        });
    }
    /**
   * @inheritDoc
   */ eventFromException(exception, hint) {
        return (0, _eventbuilderJs.eventFromException)(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    /**
   * @inheritDoc
   */ eventFromMessage(message, level = "info", hint) {
        return (0, _eventbuilderJs.eventFromMessage)(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    /**
   * @inheritDoc
   */ sendEvent(event, hint) {
        // We only want to add the sentry event breadcrumb when the user has the breadcrumb integration installed and
        // activated its `sentry` option.
        // We also do not want to use the `Breadcrumbs` class here directly, because we do not want it to be included in
        // bundles, if it is not used by the SDK.
        // This all sadly is a bit ugly, but we currently don't have a "pre-send" hook on the integrations so we do it this
        // way for now.
        var breadcrumbIntegration = this.getIntegrationById((0, _breadcrumbsJs.BREADCRUMB_INTEGRATION_ID));
        if (breadcrumbIntegration && // We check for definedness of `options`, even though it is not strictly necessary, because that access to
        // `.sentry` below does not throw, in case users provided their own integration with id "Breadcrumbs" that does
        // not have an`options` field
        breadcrumbIntegration.options && breadcrumbIntegration.options.sentry) (0, _core.getCurrentHub)().addBreadcrumb({
            category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
            event_id: event.event_id,
            level: event.level,
            message: (0, _utils.getEventDescription)(event)
        }, {
            event
        });
        super.sendEvent(event, hint);
    }
    /**
   * @inheritDoc
   */ _prepareEvent(event, hint, scope) {
        event.platform = event.platform || "javascript";
        return super._prepareEvent(event, hint, scope);
    }
    /**
   * Sends client reports as an envelope.
   */ _flushOutcomes() {
        var outcomes = this._clearOutcomes();
        if (outcomes.length === 0) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("No outcomes to send");
            return;
        }
        if (!this._dsn) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("No dsn provided, will not send outcomes");
            return;
        }
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("Sending outcomes:", outcomes);
        var url = (0, _core.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, this._options);
        var envelope = (0, _utils.createClientReportEnvelope)(outcomes, this._options.tunnel && (0, _utils.dsnToString)(this._dsn));
        try {
            (0, _utilsJs.sendReport)(url, (0, _utils.serializeEnvelope)(envelope));
        } catch (e) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(e);
        }
    }
}

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","./eventbuilder.js":"gOHm6","./integrations/breadcrumbs.js":"doykJ","./transports/utils.js":"bid82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4WO4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chromeStackLineParser", ()=>chromeStackLineParser);
parcelHelpers.export(exports, "defaultStackLineParsers", ()=>defaultStackLineParsers);
parcelHelpers.export(exports, "defaultStackParser", ()=>defaultStackParser);
parcelHelpers.export(exports, "geckoStackLineParser", ()=>geckoStackLineParser);
parcelHelpers.export(exports, "opera10StackLineParser", ()=>opera10StackLineParser);
parcelHelpers.export(exports, "opera11StackLineParser", ()=>opera11StackLineParser);
parcelHelpers.export(exports, "winjsStackLineParser", ()=>winjsStackLineParser);
var _utils = require("@sentry/utils");
// global reference to slice
var UNKNOWN_FUNCTION = "?";
var OPERA10_PRIORITY = 10;
var OPERA11_PRIORITY = 20;
var CHROME_PRIORITY = 30;
var WINJS_PRIORITY = 40;
var GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
    var frame = {
        filename,
        function: func,
        // All browser frames are considered in_app
        in_app: true
    };
    if (lineno !== undefined) frame.lineno = lineno;
    if (colno !== undefined) frame.colno = colno;
    return frame;
}
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chromeRegex = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chrome = (line)=>{
    var parts = chromeRegex.exec(line);
    if (parts) {
        var isEval = parts[2] && parts[2].indexOf("eval") === 0; // start of line
        if (isEval) {
            var subMatch = chromeEvalRegex.exec(parts[2]);
            if (subMatch) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = subMatch[1]; // url
                parts[3] = subMatch[2]; // line
                parts[4] = subMatch[3]; // column
            }
        }
        // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
        // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
        const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
        return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
    }
    return;
};
var chromeStackLineParser = [
    CHROME_PRIORITY,
    chrome
];
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var gecko = (line)=>{
    var parts = geckoREgex.exec(line);
    if (parts) {
        var isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
        if (isEval) {
            var subMatch = geckoEvalRegex.exec(parts[3]);
            if (subMatch) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || "eval";
                parts[3] = subMatch[1];
                parts[4] = subMatch[2];
                parts[5] = ""; // no column when eval
            }
        }
        let filename = parts[3];
        let func = parts[1] || UNKNOWN_FUNCTION;
        [func, filename] = extractSafariExtensionDetails(func, filename);
        return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
    }
    return;
};
var geckoStackLineParser = [
    GECKO_PRIORITY,
    gecko
];
var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var winjs = (line)=>{
    var parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : undefined) : undefined;
};
var winjsStackLineParser = [
    WINJS_PRIORITY,
    winjs
];
var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
var opera10 = (line)=>{
    var parts = opera10Regex.exec(line);
    return parts ? createFrame(parts[2], parts[3] || UNKNOWN_FUNCTION, +parts[1]) : undefined;
};
var opera10StackLineParser = [
    OPERA10_PRIORITY,
    opera10
];
var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
var opera11 = (line)=>{
    var parts = opera11Regex.exec(line);
    return parts ? createFrame(parts[5], parts[3] || parts[4] || UNKNOWN_FUNCTION, +parts[1], +parts[2]) : undefined;
};
var opera11StackLineParser = [
    OPERA11_PRIORITY,
    opera11
];
var defaultStackLineParsers = [
    chromeStackLineParser,
    geckoStackLineParser,
    winjsStackLineParser
];
var defaultStackParser = (0, _utils.createStackParser)(...defaultStackLineParsers);
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */ var extractSafariExtensionDetails = (func, filename)=>{
    var isSafariExtension = func.indexOf("safari-extension") !== -1;
    var isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
    return isSafariExtension || isSafariWebExtension ? [
        func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
        isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`, 
    ] : [
        func,
        filename
    ];
};

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hV4lt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "close", ()=>close);
parcelHelpers.export(exports, "defaultIntegrations", ()=>defaultIntegrations);
parcelHelpers.export(exports, "flush", ()=>flush);
parcelHelpers.export(exports, "forceLoad", ()=>forceLoad);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "lastEventId", ()=>lastEventId);
parcelHelpers.export(exports, "onLoad", ()=>onLoad);
parcelHelpers.export(exports, "showReportDialog", ()=>showReportDialog);
parcelHelpers.export(exports, "wrap", ()=>wrap);
var _core = require("@sentry/core");
var _utils = require("@sentry/utils");
var _clientJs = require("./client.js");
var _helpersJs = require("./helpers.js");
var _indexJs = require("./integrations/index.js");
var _stackParsersJs = require("./stack-parsers.js");
var _indexJs1 = require("./transports/index.js");
var _trycatchJs = require("./integrations/trycatch.js");
var _breadcrumbsJs = require("./integrations/breadcrumbs.js");
var _globalhandlersJs = require("./integrations/globalhandlers.js");
var _linkederrorsJs = require("./integrations/linkederrors.js");
var _dedupeJs = require("./integrations/dedupe.js");
var _httpcontextJs = require("./integrations/httpcontext.js");
var _fetchJs = require("./transports/fetch.js");
var _xhrJs = require("./transports/xhr.js");
var defaultIntegrations = [
    new (0, _core.Integrations).InboundFilters(),
    new (0, _core.Integrations).FunctionToString(),
    new (0, _trycatchJs.TryCatch)(),
    new (0, _breadcrumbsJs.Breadcrumbs)(),
    new (0, _globalhandlersJs.GlobalHandlers)(),
    new (0, _linkederrorsJs.LinkedErrors)(),
    new (0, _dedupeJs.Dedupe)(),
    new (0, _httpcontextJs.HttpContext)(), 
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */ function init(options = {}) {
    if (options.defaultIntegrations === undefined) options.defaultIntegrations = defaultIntegrations;
    if (options.release === undefined) {
        var window = (0, _utils.getGlobalObject)();
        // This supports the variable that sentry-webpack-plugin injects
        if (window.SENTRY_RELEASE && window.SENTRY_RELEASE.id) options.release = window.SENTRY_RELEASE.id;
    }
    if (options.autoSessionTracking === undefined) options.autoSessionTracking = true;
    if (options.sendClientReports === undefined) options.sendClientReports = true;
    var clientOptions = {
        ...options,
        stackParser: (0, _utils.stackParserFromStackParserOptions)(options.stackParser || (0, _stackParsersJs.defaultStackParser)),
        integrations: (0, _core.getIntegrationsToSetup)(options),
        transport: options.transport || ((0, _utils.supportsFetch)() ? (0, _fetchJs.makeFetchTransport) : (0, _xhrJs.makeXHRTransport))
    };
    (0, _core.initAndBind)((0, _clientJs.BrowserClient), clientOptions);
    if (options.autoSessionTracking) startSessionTracking();
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */ function showReportDialog(options = {}, hub = (0, _core.getCurrentHub)()) {
    // doesn't work without a document (React Native)
    var global = (0, _utils.getGlobalObject)();
    if (!global.document) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Global document not defined in showReportDialog call");
        return;
    }
    const { client , scope  } = hub.getStackTop();
    var dsn = options.dsn || client && client.getDsn();
    if (!dsn) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("DSN not configured for showReportDialog call");
        return;
    }
    if (scope) options.user = {
        ...scope.getUser(),
        ...options.user
    };
    if (!options.eventId) options.eventId = hub.lastEventId();
    var script = global.document.createElement("script");
    script.async = true;
    script.src = (0, _core.getReportDialogEndpoint)(dsn, options);
    if (options.onLoad) script.onload = options.onLoad;
    var injectionPoint = global.document.head || global.document.body;
    if (injectionPoint) injectionPoint.appendChild(script);
    else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Not injecting report dialog. No injection point found in HTML");
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */ function lastEventId() {
    return (0, _core.getCurrentHub)().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function forceLoad() {
// Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */ function onLoad(callback) {
    callback();
}
/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */ function flush(timeout) {
    var client = (0, _core.getCurrentHub)().getClient();
    if (client) return client.flush(timeout);
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Cannot flush events. No client defined.");
    return (0, _utils.resolvedSyncPromise)(false);
}
/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */ function close(timeout) {
    var client = (0, _core.getCurrentHub)().getClient();
    if (client) return client.close(timeout);
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Cannot flush events and disable SDK. No client defined.");
    return (0, _utils.resolvedSyncPromise)(false);
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */ function wrap(fn) {
    return (0, _helpersJs.wrap)(fn)();
}
function startSessionOnHub(hub) {
    hub.startSession({
        ignoreDuration: true
    });
    hub.captureSession();
}
/**
 * Enable automatic Session Tracking for the initial page load.
 */ function startSessionTracking() {
    var window = (0, _utils.getGlobalObject)();
    var document = window.document;
    if (typeof document === "undefined") {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return;
    }
    var hub = (0, _core.getCurrentHub)();
    // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
    // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
    // pinned at the same version in package.json, but there are edge cases where it's possible. See
    // https://github.com/getsentry/sentry-javascript/issues/3207 and
    // https://github.com/getsentry/sentry-javascript/issues/3234 and
    // https://github.com/getsentry/sentry-javascript/issues/3278.
    if (!hub.captureSession) return;
    // The session duration for browser sessions does not track a meaningful
    // concept that can be used as a metric.
    // Automatically captured sessions are akin to page views, and thus we
    // discard their duration.
    startSessionOnHub(hub);
    // We want to create a session for every navigation as well
    (0, _utils.addInstrumentationHandler)("history", ({ from , to  })=>{
        // Don't create an additional session for the initial route or if the location did not change
        if (!(from === undefined || from === to)) startSessionOnHub((0, _core.getCurrentHub)());
    });
}

},{"@sentry/core":"czIi1","@sentry/utils":"axZXA","./client.js":"cPCsw","./helpers.js":"130Sv","./integrations/index.js":"dN4ch","./stack-parsers.js":"c4WO4","./transports/index.js":"h066g","./integrations/trycatch.js":"9zNxD","./integrations/breadcrumbs.js":"doykJ","./integrations/globalhandlers.js":"bgvEJ","./integrations/linkederrors.js":"4IhVU","./integrations/dedupe.js":"6K3pq","./integrations/httpcontext.js":"7HLvh","./transports/fetch.js":"9L9JJ","./transports/xhr.js":"aupud","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fk4Ca":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addExtensionMethods", ()=>(0, _hubextensionsJs.addExtensionMethods));
parcelHelpers.export(exports, "startIdleTransaction", ()=>(0, _hubextensionsJs.startIdleTransaction));
parcelHelpers.export(exports, "Integrations", ()=>_indexJs);
parcelHelpers.export(exports, "Span", ()=>(0, _spanJs.Span));
parcelHelpers.export(exports, "spanStatusfromHttpCode", ()=>(0, _spanJs.spanStatusfromHttpCode));
parcelHelpers.export(exports, "SpanStatus", ()=>(0, _spanstatusJs.SpanStatus));
parcelHelpers.export(exports, "Transaction", ()=>(0, _transactionJs.Transaction));
parcelHelpers.export(exports, "IdleTransaction", ()=>(0, _idletransactionJs.IdleTransaction));
parcelHelpers.export(exports, "getActiveTransaction", ()=>(0, _utilsJs.getActiveTransaction));
parcelHelpers.export(exports, "hasTracingEnabled", ()=>(0, _utilsJs.hasTracingEnabled));
parcelHelpers.export(exports, "BROWSER_TRACING_INTEGRATION_ID", ()=>(0, _browsertracingJs.BROWSER_TRACING_INTEGRATION_ID));
parcelHelpers.export(exports, "BrowserTracing", ()=>(0, _browsertracingJs.BrowserTracing));
parcelHelpers.export(exports, "defaultRequestInstrumentationOptions", ()=>(0, _requestJs.defaultRequestInstrumentationOptions));
parcelHelpers.export(exports, "instrumentOutgoingRequests", ()=>(0, _requestJs.instrumentOutgoingRequests));
parcelHelpers.export(exports, "TRACEPARENT_REGEXP", ()=>(0, _utils.TRACEPARENT_REGEXP));
parcelHelpers.export(exports, "extractTraceparentData", ()=>(0, _utils.extractTraceparentData));
parcelHelpers.export(exports, "stripUrlQueryAndFragment", ()=>(0, _utils.stripUrlQueryAndFragment));
var _hubextensionsJs = require("./hubextensions.js");
var _indexJs = require("./integrations/index.js");
var _indexJs1 = require("./browser/index.js");
var _spanJs = require("./span.js");
var _spanstatusJs = require("./spanstatus.js");
var _transactionJs = require("./transaction.js");
var _idletransactionJs = require("./idletransaction.js");
var _utilsJs = require("./utils.js");
var _browsertracingJs = require("./browser/browsertracing.js");
var _requestJs = require("./browser/request.js");
var _utils = require("@sentry/utils");
// Treeshakable guard to remove all code related to tracing
// Guard for tree
if (typeof __SENTRY_TRACING__ === "undefined" || __SENTRY_TRACING__) // We are patching the global object with our hub extension methods
(0, _hubextensionsJs.addExtensionMethods)();

},{"./hubextensions.js":"ffTQT","./integrations/index.js":"1Th7M","./browser/index.js":"59Fko","./span.js":"5Gqld","./spanstatus.js":false,"./transaction.js":"1Z5TL","./idletransaction.js":"iqvay","./utils.js":"20rHd","./browser/browsertracing.js":"lSiYz","./browser/request.js":"5rxGr","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffTQT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_addTracingExtensions", ()=>_addTracingExtensions);
parcelHelpers.export(exports, "addExtensionMethods", ()=>addExtensionMethods);
parcelHelpers.export(exports, "startIdleTransaction", ()=>startIdleTransaction);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
var _errorsJs = require("./errors.js");
var _idletransactionJs = require("./idletransaction.js");
var _transactionJs = require("./transaction.js");
var _utilsJs = require("./utils.js");
/** Returns all trace headers that are currently on the top scope. */ function traceHeaders() {
    var scope = this.getScope();
    if (scope) {
        var span = scope.getSpan();
        if (span) return {
            "sentry-trace": span.toTraceparent()
        };
    }
    return {};
}
/**
 * Makes a sampling decision for the given transaction and stores it on the transaction.
 *
 * Called every time a transaction is created. Only transactions which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 *
 * @param transaction: The transaction needing a sampling decision
 * @param options: The current client's options, so we can access `tracesSampleRate` and/or `tracesSampler`
 * @param samplingContext: Default and user-provided data which may be used to help make the decision
 *
 * @returns The given transaction with its `sampled` value set
 */ function sample(transaction, options, samplingContext) {
    // nothing to do if tracing is not enabled
    if (!(0, _utilsJs.hasTracingEnabled)(options)) {
        transaction.sampled = false;
        return transaction;
    }
    // if the user has forced a sampling decision by passing a `sampled` value in their transaction context, go with that
    if (transaction.sampled !== undefined) {
        transaction.setMetadata({
            transactionSampling: {
                method: "explicitly_set"
            }
        });
        return transaction;
    }
    // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` were defined, so one of these should
    // work; prefer the hook if so
    let sampleRate;
    if (typeof options.tracesSampler === "function") {
        sampleRate = options.tracesSampler(samplingContext);
        transaction.setMetadata({
            transactionSampling: {
                method: "client_sampler",
                // cast to number in case it's a boolean
                rate: Number(sampleRate)
            }
        });
    } else if (samplingContext.parentSampled !== undefined) {
        sampleRate = samplingContext.parentSampled;
        transaction.setMetadata({
            transactionSampling: {
                method: "inheritance"
            }
        });
    } else {
        sampleRate = options.tracesSampleRate;
        transaction.setMetadata({
            transactionSampling: {
                method: "client_rate",
                // cast to number in case it's a boolean
                rate: Number(sampleRate)
            }
        });
    }
    // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
    // only valid values are booleans or numbers between 0 and 1.)
    if (!isValidSampleRate(sampleRate)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("[Tracing] Discarding transaction because of invalid sample rate.");
        transaction.sampled = false;
        return transaction;
    }
    // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
    if (!sampleRate) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`);
        transaction.sampled = false;
        return transaction;
    }
    // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
    // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
    transaction.sampled = Math.random() < sampleRate;
    // if we're not going to keep it, we're done
    if (!transaction.sampled) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(sampleRate)})`);
        return transaction;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
    return transaction;
}
/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 */ function isValidSampleRate(rate) {
    // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
    if ((0, _utils.isNaN)(rate) || !(typeof rate === "number" || typeof rate === "boolean")) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(rate)} of type ${JSON.stringify(typeof rate)}.`);
        return false;
    }
    // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
    if (rate < 0 || rate > 1) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
        return false;
    }
    return true;
}
/**
 * Creates a new transaction and adds a sampling decision if it doesn't yet have one.
 *
 * The Hub.startTransaction method delegates to this method to do its work, passing the Hub instance in as `this`, as if
 * it had been called on the hub directly. Exists as a separate function so that it can be injected into the class as an
 * "extension method."
 *
 * @param this: The Hub starting the transaction
 * @param transactionContext: Data used to configure the transaction
 * @param CustomSamplingContext: Optional data to be provided to the `tracesSampler` function (if any)
 *
 * @returns The new transaction
 *
 * @see {@link Hub.startTransaction}
 */ function _startTransaction(transactionContext, customSamplingContext) {
    var client = this.getClient();
    var options = client && client.getOptions() || {};
    let transaction = new (0, _transactionJs.Transaction)(transactionContext, this);
    transaction = sample(transaction, options, {
        parentSampled: transactionContext.parentSampled,
        transactionContext,
        ...customSamplingContext
    });
    if (transaction.sampled) transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
    return transaction;
}
/**
 * Create new idle transaction.
 */ function startIdleTransaction(hub, transactionContext, idleTimeout, finalTimeout, onScope, customSamplingContext) {
    var client = hub.getClient();
    var options = client && client.getOptions() || {};
    let transaction = new (0, _idletransactionJs.IdleTransaction)(transactionContext, hub, idleTimeout, finalTimeout, onScope);
    transaction = sample(transaction, options, {
        parentSampled: transactionContext.parentSampled,
        transactionContext,
        ...customSamplingContext
    });
    if (transaction.sampled) transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
    return transaction;
}
/**
 * @private
 */ function _addTracingExtensions() {
    var carrier = (0, _hub.getMainCarrier)();
    if (!carrier.__SENTRY__) return;
    carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
    if (!carrier.__SENTRY__.extensions.startTransaction) carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
    if (!carrier.__SENTRY__.extensions.traceHeaders) carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
}
/**
 * @private
 */ function _autoloadDatabaseIntegrations() {
    var carrier = (0, _hub.getMainCarrier)();
    if (!carrier.__SENTRY__) return;
    var packageToIntegrationMapping = {
        mongodb () {
            var integration = (0, _utils.dynamicRequire)(module, "./integrations/node/mongo");
            return new integration.Mongo();
        },
        mongoose () {
            var integration = (0, _utils.dynamicRequire)(module, "./integrations/node/mongo");
            return new integration.Mongo({
                mongoose: true
            });
        },
        mysql () {
            var integration = (0, _utils.dynamicRequire)(module, "./integrations/node/mysql");
            return new integration.Mysql();
        },
        pg () {
            var integration = (0, _utils.dynamicRequire)(module, "./integrations/node/postgres");
            return new integration.Postgres();
        }
    };
    var mappedPackages = Object.keys(packageToIntegrationMapping).filter((moduleName)=>!!(0, _utils.loadModule)(moduleName)).map((pkg)=>{
        try {
            return packageToIntegrationMapping[pkg]();
        } catch (e) {
            return undefined;
        }
    }).filter((p)=>p);
    if (mappedPackages.length > 0) carrier.__SENTRY__.integrations = [
        ...carrier.__SENTRY__.integrations || [],
        ...mappedPackages
    ];
}
/**
 * This patches the global object and injects the Tracing extensions methods
 */ function addExtensionMethods() {
    _addTracingExtensions();
    // Detect and automatically load specified integrations.
    if ((0, _utils.isNodeEnv)()) _autoloadDatabaseIntegrations();
    // If an error happens globally, we should make sure transaction status is set to error.
    (0, _errorsJs.registerErrorInstrumentation)();
}

},{"@sentry/hub":"4kBQk","@sentry/utils":"axZXA","./errors.js":"gt1wb","./idletransaction.js":"iqvay","./transaction.js":"1Z5TL","./utils.js":"20rHd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gt1wb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerErrorInstrumentation", ()=>registerErrorInstrumentation);
var _utils = require("@sentry/utils");
var _utilsJs = require("./utils.js");
/**
 * Configures global error listeners
 */ function registerErrorInstrumentation() {
    (0, _utils.addInstrumentationHandler)("error", errorCallback);
    (0, _utils.addInstrumentationHandler)("unhandledrejection", errorCallback);
}
/**
 * If an error or unhandled promise occurs, we mark the active transaction as failed
 */ function errorCallback() {
    var activeTransaction = (0, _utilsJs.getActiveTransaction)();
    if (activeTransaction) {
        var status = "internal_error";
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Transaction: ${status} -> Global error occured`);
        activeTransaction.setStatus(status);
    }
}

},{"@sentry/utils":"axZXA","./utils.js":"20rHd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20rHd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TRACEPARENT_REGEXP", ()=>(0, _utils.TRACEPARENT_REGEXP));
parcelHelpers.export(exports, "extractTraceparentData", ()=>(0, _utils.extractTraceparentData));
parcelHelpers.export(exports, "stripUrlQueryAndFragment", ()=>(0, _utils.stripUrlQueryAndFragment));
parcelHelpers.export(exports, "getActiveTransaction", ()=>getActiveTransaction);
parcelHelpers.export(exports, "hasTracingEnabled", ()=>hasTracingEnabled);
parcelHelpers.export(exports, "msToSec", ()=>msToSec);
parcelHelpers.export(exports, "secToMs", ()=>secToMs);
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */ function hasTracingEnabled(maybeOptions) {
    var client = (0, _hub.getCurrentHub)().getClient();
    var options = maybeOptions || client && client.getOptions();
    return !!options && ("tracesSampleRate" in options || "tracesSampler" in options);
}
/** Grabs active transaction off scope, if any */ function getActiveTransaction(maybeHub) {
    var hub = maybeHub || (0, _hub.getCurrentHub)();
    var scope = hub.getScope();
    return scope && scope.getTransaction();
}
/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */ function msToSec(time) {
    return time / 1000;
}
/**
 * Converts from seconds to milliseconds
 * @param time time in seconds
 */ function secToMs(time) {
    return time * 1000;
}

},{"@sentry/hub":"4kBQk","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iqvay":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_FINAL_TIMEOUT", ()=>DEFAULT_FINAL_TIMEOUT);
parcelHelpers.export(exports, "DEFAULT_IDLE_TIMEOUT", ()=>DEFAULT_IDLE_TIMEOUT);
parcelHelpers.export(exports, "HEARTBEAT_INTERVAL", ()=>HEARTBEAT_INTERVAL);
parcelHelpers.export(exports, "IdleTransaction", ()=>IdleTransaction);
parcelHelpers.export(exports, "IdleTransactionSpanRecorder", ()=>IdleTransactionSpanRecorder);
var _utils = require("@sentry/utils");
var _spanJs = require("./span.js");
var _transactionJs = require("./transaction.js");
var DEFAULT_IDLE_TIMEOUT = 1000;
var DEFAULT_FINAL_TIMEOUT = 30000;
var HEARTBEAT_INTERVAL = 5000;
/**
 * @inheritDoc
 */ class IdleTransactionSpanRecorder extends (0, _spanJs.SpanRecorder) {
    constructor(_pushActivity, _popActivity, transactionSpanId, maxlen){
        super(maxlen);
        this._pushActivity = _pushActivity;
        this._popActivity = _popActivity;
        this.transactionSpanId = transactionSpanId;
    }
    /**
   * @inheritDoc
   */ add(span) {
        // We should make sure we do not push and pop activities for
        // the transaction that this span recorder belongs to.
        if (span.spanId !== this.transactionSpanId) {
            // We patch span.finish() to pop an activity after setting an endTimestamp.
            span.finish = (endTimestamp)=>{
                span.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : (0, _utils.timestampWithMs)();
                this._popActivity(span.spanId);
            };
            // We should only push new activities if the span does not have an end timestamp.
            if (span.endTimestamp === undefined) this._pushActivity(span.spanId);
        }
        super.add(span);
    }
}
/**
 * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
 * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
 * put itself on the scope on creation.
 */ class IdleTransaction extends (0, _transactionJs.Transaction) {
    // Activities store a list of active spans
    __init() {
        this.activities = {};
    }
    // Track state of activities in previous heartbeat
    // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.
    __init2() {
        this._heartbeatCounter = 0;
    }
    // We should not use heartbeat if we finished a transaction
    __init3() {
        this._finished = false;
    }
    __init4() {
        this._beforeFinishCallbacks = [];
    }
    /**
   * Timer that tracks Transaction idleTimeout
   */ constructor(transactionContext, _idleHub, /**
     * The time to wait in ms until the idle transaction will be finished. This timer is started each time
     * there are no active spans on this transaction.
     */ _idleTimeout = DEFAULT_IDLE_TIMEOUT, /**
     * The final value in ms that a transaction cannot exceed
     */ _finalTimeout = DEFAULT_FINAL_TIMEOUT, // Whether or not the transaction should put itself on the scope when it starts and pop itself off when it ends
    _onScope = false){
        super(transactionContext, _idleHub);
        this._idleHub = _idleHub;
        this._idleTimeout = _idleTimeout;
        this._finalTimeout = _finalTimeout;
        this._onScope = _onScope;
        IdleTransaction.prototype.__init.call(this);
        IdleTransaction.prototype.__init2.call(this);
        IdleTransaction.prototype.__init3.call(this);
        IdleTransaction.prototype.__init4.call(this);
        if (_onScope) {
            // There should only be one active transaction on the scope
            clearActiveTransaction(_idleHub);
            // We set the transaction here on the scope so error events pick up the trace
            // context and attach it to the error.
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`Setting idle transaction on scope. Span ID: ${this.spanId}`);
            _idleHub.configureScope((scope)=>scope.setSpan(this));
        }
        this._startIdleTimeout();
        setTimeout(()=>{
            if (!this._finished) {
                this.setStatus("deadline_exceeded");
                this.finish();
            }
        }, this._finalTimeout);
    }
    /** {@inheritDoc} */ finish(endTimestamp = (0, _utils.timestampWithMs)()) {
        this._finished = true;
        this.activities = {};
        if (this.spanRecorder) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] finishing IdleTransaction", new Date(endTimestamp * 1000).toISOString(), this.op);
            for (var callback of this._beforeFinishCallbacks)callback(this, endTimestamp);
            this.spanRecorder.spans = this.spanRecorder.spans.filter((span)=>{
                // If we are dealing with the transaction itself, we just return it
                if (span.spanId === this.spanId) return true;
                // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
                if (!span.endTimestamp) {
                    span.endTimestamp = endTimestamp;
                    span.setStatus("cancelled");
                    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] cancelling span since transaction ended early", JSON.stringify(span, undefined, 2));
                }
                var keepSpan = span.startTimestamp < endTimestamp;
                if (!keepSpan) (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(span, undefined, 2));
                return keepSpan;
            });
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] flushing IdleTransaction");
        } else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] No active IdleTransaction");
        // if `this._onScope` is `true`, the transaction put itself on the scope when it started
        if (this._onScope) clearActiveTransaction(this._idleHub);
        return super.finish(endTimestamp);
    }
    /**
   * Register a callback function that gets excecuted before the transaction finishes.
   * Useful for cleanup or if you want to add any additional spans based on current context.
   *
   * This is exposed because users have no other way of running something before an idle transaction
   * finishes.
   */ registerBeforeFinishCallback(callback) {
        this._beforeFinishCallbacks.push(callback);
    }
    /**
   * @inheritDoc
   */ initSpanRecorder(maxlen) {
        if (!this.spanRecorder) {
            var pushActivity = (id)=>{
                if (this._finished) return;
                this._pushActivity(id);
            };
            var popActivity = (id)=>{
                if (this._finished) return;
                this._popActivity(id);
            };
            this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
            // Start heartbeat so that transactions do not run forever.
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("Starting heartbeat");
            this._pingHeartbeat();
        }
        this.spanRecorder.add(this);
    }
    /**
   * Cancels the existing idletimeout, if there is one
   */ _cancelIdleTimeout() {
        if (this._idleTimeoutID) {
            clearTimeout(this._idleTimeoutID);
            this._idleTimeoutID = undefined;
        }
    }
    /**
   * Creates an idletimeout
   */ _startIdleTimeout(endTimestamp) {
        this._cancelIdleTimeout();
        this._idleTimeoutID = setTimeout(()=>{
            if (!this._finished && Object.keys(this.activities).length === 0) this.finish(endTimestamp);
        }, this._idleTimeout);
    }
    /**
   * Start tracking a specific activity.
   * @param spanId The span id that represents the activity
   */ _pushActivity(spanId) {
        this._cancelIdleTimeout();
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] pushActivity: ${spanId}`);
        this.activities[spanId] = true;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] new activities count", Object.keys(this.activities).length);
    }
    /**
   * Remove an activity from usage
   * @param spanId The span id that represents the activity
   */ _popActivity(spanId) {
        if (this.activities[spanId]) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] popActivity ${spanId}`);
            delete this.activities[spanId];
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] new activities count", Object.keys(this.activities).length);
        }
        if (Object.keys(this.activities).length === 0) {
            // We need to add the timeout here to have the real endtimestamp of the transaction
            // Remember timestampWithMs is in seconds, timeout is in ms
            var endTimestamp = (0, _utils.timestampWithMs)() + this._idleTimeout / 1000;
            this._startIdleTimeout(endTimestamp);
        }
    }
    /**
   * Checks when entries of this.activities are not changing for 3 beats.
   * If this occurs we finish the transaction.
   */ _beat() {
        // We should not be running heartbeat if the idle transaction is finished.
        if (this._finished) return;
        var heartbeatString = Object.keys(this.activities).join("");
        if (heartbeatString === this._prevHeartbeatString) this._heartbeatCounter += 1;
        else this._heartbeatCounter = 1;
        this._prevHeartbeatString = heartbeatString;
        if (this._heartbeatCounter >= 3) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] Transaction finished because of no change for 3 heart beats");
            this.setStatus("deadline_exceeded");
            this.finish();
        } else this._pingHeartbeat();
    }
    /**
   * Pings the heartbeat
   */ _pingHeartbeat() {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
        setTimeout(()=>{
            this._beat();
        }, HEARTBEAT_INTERVAL);
    }
}
/**
 * Reset transaction on scope to `undefined`
 */ function clearActiveTransaction(hub) {
    var scope = hub.getScope();
    if (scope) {
        var transaction = scope.getTransaction();
        if (transaction) scope.setSpan(undefined);
    }
}

},{"@sentry/utils":"axZXA","./span.js":"5Gqld","./transaction.js":"1Z5TL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Gqld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Span", ()=>Span);
parcelHelpers.export(exports, "SpanRecorder", ()=>SpanRecorder);
parcelHelpers.export(exports, "spanStatusfromHttpCode", ()=>spanStatusfromHttpCode);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
/**
 * Keeps track of finished spans for a given transaction
 * @internal
 * @hideconstructor
 * @hidden
 */ class SpanRecorder {
    __init() {
        this.spans = [];
    }
    constructor(maxlen = 1000){
        SpanRecorder.prototype.__init.call(this);
        this._maxlen = maxlen;
    }
    /**
   * This is just so that we don't run out of memory while recording a lot
   * of spans. At some point we just stop and flush out the start of the
   * trace tree (i.e.the first n spans with the smallest
   * start_timestamp).
   */ add(span) {
        if (this.spans.length > this._maxlen) span.spanRecorder = undefined;
        else this.spans.push(span);
    }
}
/**
 * Span contains all data about a span
 */ class Span {
    /**
   * @inheritDoc
   */ __init2() {
        this.traceId = (0, _utils.uuid4)();
    }
    /**
   * @inheritDoc
   */ __init3() {
        this.spanId = (0, _utils.uuid4)().substring(16);
    }
    /**
   * @inheritDoc
   */ /**
   * Internal keeper of the status
   */ /**
   * @inheritDoc
   */ /**
   * Timestamp in seconds when the span was created.
   */ __init4() {
        this.startTimestamp = (0, _utils.timestampWithMs)();
    }
    /**
   * Timestamp in seconds when the span ended.
   */ /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ /**
   * @inheritDoc
   */ __init5() {
        this.tags = {};
    }
    /**
   * @inheritDoc
   */ __init6() {
        this.data = {};
    }
    /**
   * List of spans that were finalized
   */ /**
   * @inheritDoc
   */ /**
   * You should never call the constructor manually, always use `Sentry.startTransaction()`
   * or call `startChild()` on an existing span.
   * @internal
   * @hideconstructor
   * @hidden
   */ constructor(spanContext){
        Span.prototype.__init2.call(this);
        Span.prototype.__init3.call(this);
        Span.prototype.__init4.call(this);
        Span.prototype.__init5.call(this);
        Span.prototype.__init6.call(this);
        if (!spanContext) return this;
        if (spanContext.traceId) this.traceId = spanContext.traceId;
        if (spanContext.spanId) this.spanId = spanContext.spanId;
        if (spanContext.parentSpanId) this.parentSpanId = spanContext.parentSpanId;
        // We want to include booleans as well here
        if ("sampled" in spanContext) this.sampled = spanContext.sampled;
        if (spanContext.op) this.op = spanContext.op;
        if (spanContext.description) this.description = spanContext.description;
        if (spanContext.data) this.data = spanContext.data;
        if (spanContext.tags) this.tags = spanContext.tags;
        if (spanContext.status) this.status = spanContext.status;
        if (spanContext.startTimestamp) this.startTimestamp = spanContext.startTimestamp;
        if (spanContext.endTimestamp) this.endTimestamp = spanContext.endTimestamp;
    }
    /**
   * @inheritDoc
   */ startChild(spanContext) {
        var childSpan = new Span({
            ...spanContext,
            parentSpanId: this.spanId,
            sampled: this.sampled,
            traceId: this.traceId
        });
        childSpan.spanRecorder = this.spanRecorder;
        if (childSpan.spanRecorder) childSpan.spanRecorder.add(childSpan);
        childSpan.transaction = this.transaction;
        if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && childSpan.transaction) {
            var opStr = spanContext && spanContext.op || "< unknown op >";
            var nameStr = childSpan.transaction.name || "< unknown name >";
            var idStr = childSpan.transaction.spanId;
            var logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
            childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = {
                logMessage
            };
            (0, _utils.logger).log(logMessage);
        }
        return childSpan;
    }
    /**
   * @inheritDoc
   */ setTag(key, value) {
        this.tags = {
            ...this.tags,
            [key]: value
        };
        return this;
    }
    /**
   * @inheritDoc
   */ setData(key, value) {
        this.data = {
            ...this.data,
            [key]: value
        };
        return this;
    }
    /**
   * @inheritDoc
   */ setStatus(value) {
        this.status = value;
        return this;
    }
    /**
   * @inheritDoc
   */ setHttpStatus(httpStatus) {
        this.setTag("http.status_code", String(httpStatus));
        var spanStatus = spanStatusfromHttpCode(httpStatus);
        if (spanStatus !== "unknown_error") this.setStatus(spanStatus);
        return this;
    }
    /**
   * @inheritDoc
   */ isSuccess() {
        return this.status === "ok";
    }
    /**
   * @inheritDoc
   */ finish(endTimestamp) {
        if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && // Don't call this for transactions
        this.transaction && this.transaction.spanId !== this.spanId) {
            const { logMessage  } = this.transaction.metadata.spanMetadata[this.spanId];
            if (logMessage) (0, _utils.logger).log(logMessage.replace("Starting", "Finishing"));
        }
        this.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : (0, _utils.timestampWithMs)();
    }
    /**
   * @inheritDoc
   */ toTraceparent() {
        let sampledString = "";
        if (this.sampled !== undefined) sampledString = this.sampled ? "-1" : "-0";
        return `${this.traceId}-${this.spanId}${sampledString}`;
    }
    /**
   * @inheritDoc
   */ toContext() {
        return (0, _utils.dropUndefinedKeys)({
            data: this.data,
            description: this.description,
            endTimestamp: this.endTimestamp,
            op: this.op,
            parentSpanId: this.parentSpanId,
            sampled: this.sampled,
            spanId: this.spanId,
            startTimestamp: this.startTimestamp,
            status: this.status,
            tags: this.tags,
            traceId: this.traceId
        });
    }
    /**
   * @inheritDoc
   */ updateWithContext(spanContext) {
        this.data = (0, _buildPolyfills._nullishCoalesce)(spanContext.data, ()=>({}));
        this.description = spanContext.description;
        this.endTimestamp = spanContext.endTimestamp;
        this.op = spanContext.op;
        this.parentSpanId = spanContext.parentSpanId;
        this.sampled = spanContext.sampled;
        this.spanId = (0, _buildPolyfills._nullishCoalesce)(spanContext.spanId, ()=>this.spanId);
        this.startTimestamp = (0, _buildPolyfills._nullishCoalesce)(spanContext.startTimestamp, ()=>this.startTimestamp);
        this.status = spanContext.status;
        this.tags = (0, _buildPolyfills._nullishCoalesce)(spanContext.tags, ()=>({}));
        this.traceId = (0, _buildPolyfills._nullishCoalesce)(spanContext.traceId, ()=>this.traceId);
        return this;
    }
    /**
   * @inheritDoc
   */ getTraceContext() {
        return (0, _utils.dropUndefinedKeys)({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            trace_id: this.traceId
        });
    }
    /**
   * @inheritDoc
   */ toJSON() {
        return (0, _utils.dropUndefinedKeys)({
            data: Object.keys(this.data).length > 0 ? this.data : undefined,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            start_timestamp: this.startTimestamp,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
            timestamp: this.endTimestamp,
            trace_id: this.traceId
        });
    }
}
/**
 * Converts a HTTP status code into a {@link SpanStatusType}.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or unknown_error.
 */ function spanStatusfromHttpCode(httpStatus) {
    if (httpStatus < 400 && httpStatus >= 100) return "ok";
    if (httpStatus >= 400 && httpStatus < 500) switch(httpStatus){
        case 401:
            return "unauthenticated";
        case 403:
            return "permission_denied";
        case 404:
            return "not_found";
        case 409:
            return "already_exists";
        case 413:
            return "failed_precondition";
        case 429:
            return "resource_exhausted";
        default:
            return "invalid_argument";
    }
    if (httpStatus >= 500 && httpStatus < 600) switch(httpStatus){
        case 501:
            return "unimplemented";
        case 503:
            return "unavailable";
        case 504:
            return "deadline_exceeded";
        default:
            return "internal_error";
    }
    return "unknown_error";
}

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Z5TL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transaction", ()=>Transaction);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _hub = require("@sentry/hub");
var _utils = require("@sentry/utils");
var _spanJs = require("./span.js");
/** JSDoc */ class Transaction extends (0, _spanJs.Span) {
    /**
   * The reference to the current hub.
   */ __init() {
        this._measurements = {};
    }
    /**
   * This constructor should never be called manually. Those instrumenting tracing should use
   * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
   * @internal
   * @hideconstructor
   * @hidden
   */ constructor(transactionContext, hub){
        super(transactionContext);
        Transaction.prototype.__init.call(this);
        this._hub = hub || (0, _hub.getCurrentHub)();
        this._name = transactionContext.name || "";
        this.metadata = {
            ...transactionContext.metadata,
            spanMetadata: {}
        };
        this._trimEnd = transactionContext.trimEnd;
        // this is because transactions are also spans, and spans have a transaction pointer
        this.transaction = this;
    }
    /** Getter for `name` property */ get name() {
        return this._name;
    }
    /** Setter for `name` property, which also sets `source` */ set name(newName) {
        this._name = newName;
        this.metadata.source = "custom";
    }
    /**
   * JSDoc
   */ setName(name, source = "custom") {
        this.name = name;
        this.metadata.source = source;
    }
    /**
   * Attaches SpanRecorder to the span itself
   * @param maxlen maximum number of spans that can be recorded
   */ initSpanRecorder(maxlen = 1000) {
        if (!this.spanRecorder) this.spanRecorder = new (0, _spanJs.SpanRecorder)(maxlen);
        this.spanRecorder.add(this);
    }
    /**
   * @inheritDoc
   */ setMeasurement(name, value, unit = "") {
        this._measurements[name] = {
            value,
            unit
        };
    }
    /**
   * @inheritDoc
   */ setMetadata(newMetadata) {
        this.metadata = {
            ...this.metadata,
            ...newMetadata
        };
    }
    /**
   * @inheritDoc
   */ finish(endTimestamp) {
        // This transaction is already finished, so we should not flush it again.
        if (this.endTimestamp !== undefined) return undefined;
        if (!this.name) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
            this.name = "<unlabeled transaction>";
        }
        // just sets the end timestamp
        super.finish(endTimestamp);
        if (this.sampled !== true) {
            // At this point if `sampled !== true` we want to discard the transaction.
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
            var client = this._hub.getClient();
            if (client) client.recordDroppedEvent("sample_rate", "transaction");
            return undefined;
        }
        var finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter((s)=>s !== this && s.endTimestamp) : [];
        if (this._trimEnd && finishedSpans.length > 0) this.endTimestamp = finishedSpans.reduce((prev, current)=>{
            if (prev.endTimestamp && current.endTimestamp) return prev.endTimestamp > current.endTimestamp ? prev : current;
            return prev;
        }).endTimestamp;
        var metadata = this.metadata;
        var transaction = {
            contexts: {
                trace: this.getTraceContext()
            },
            spans: finishedSpans,
            start_timestamp: this.startTimestamp,
            tags: this.tags,
            timestamp: this.endTimestamp,
            transaction: this.name,
            type: "transaction",
            sdkProcessingMetadata: {
                ...metadata,
                baggage: this.getBaggage()
            },
            ...metadata.source && {
                transaction_info: {
                    source: metadata.source
                }
            }
        };
        var hasMeasurements = Object.keys(this._measurements).length > 0;
        if (hasMeasurements) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, undefined, 2));
            transaction.measurements = this._measurements;
        }
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);
        return this._hub.captureEvent(transaction);
    }
    /**
   * @inheritDoc
   */ toContext() {
        var spanContext = super.toContext();
        return (0, _utils.dropUndefinedKeys)({
            ...spanContext,
            name: this.name,
            trimEnd: this._trimEnd
        });
    }
    /**
   * @inheritDoc
   */ updateWithContext(transactionContext) {
        super.updateWithContext(transactionContext);
        this.name = (0, _buildPolyfills._nullishCoalesce)(transactionContext.name, ()=>"");
        this._trimEnd = transactionContext.trimEnd;
        return this;
    }
    /**
   * @inheritdoc
   *
   * @experimental
   */ getBaggage() {
        var existingBaggage = this.metadata.baggage;
        // Only add Sentry baggage items to baggage, if baggage does not exist yet or it is still
        // empty and mutable
        var finalBaggage = !existingBaggage || (0, _utils.isBaggageMutable)(existingBaggage) ? this._populateBaggageWithSentryValues(existingBaggage) : existingBaggage;
        // Update the baggage stored on the transaction.
        this.metadata.baggage = finalBaggage;
        return finalBaggage;
    }
    /**
   * Collects and adds data to the passed baggage object.
   *
   * Note: This function does not explicitly check if the passed baggage object is allowed
   * to be modified. Implicitly, `setBaggageValue` will not make modification to the object
   * if it was already set immutable.
   *
   * After adding the data, the baggage object is set immutable to prevent further modifications.
   *
   * @param baggage
   *
   * @returns modified and immutable baggage object
   */ _populateBaggageWithSentryValues(baggage = (0, _utils.createBaggage)({})) {
        var hub = this._hub || (0, _hub.getCurrentHub)();
        var client = hub && hub.getClient();
        if (!client) return baggage;
        const { environment , release  } = client.getOptions() || {};
        const { publicKey: public_key  } = client.getDsn() || {};
        var sample_rate = this.metadata && this.metadata.transactionSampling && this.metadata.transactionSampling.rate && this.metadata.transactionSampling.rate.toString();
        var scope = hub.getScope();
        const { segment: user_segment  } = scope && scope.getUser() || {};
        var source = this.metadata.source;
        var transaction = source && source !== "url" ? this.name : undefined;
        return (0, _utils.createBaggage)((0, _utils.dropUndefinedKeys)({
            environment,
            release,
            transaction,
            user_segment,
            public_key,
            trace_id: this.traceId,
            sample_rate,
            ...(0, _utils.getSentryBaggageItems)(baggage)
        }), "", false);
    }
}

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/hub":"4kBQk","@sentry/utils":"axZXA","./span.js":"5Gqld","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Th7M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Express", ()=>(0, _expressJs.Express));
parcelHelpers.export(exports, "Postgres", ()=>(0, _postgresJs.Postgres));
parcelHelpers.export(exports, "Mysql", ()=>(0, _mysqlJs.Mysql));
parcelHelpers.export(exports, "Mongo", ()=>(0, _mongoJs.Mongo));
parcelHelpers.export(exports, "Prisma", ()=>(0, _prismaJs.Prisma));
parcelHelpers.export(exports, "GraphQL", ()=>(0, _graphqlJs.GraphQL));
parcelHelpers.export(exports, "Apollo", ()=>(0, _apolloJs.Apollo));
parcelHelpers.export(exports, "BrowserTracing", ()=>(0, _browsertracingJs.BrowserTracing));
var _indexJs = require("../browser/index.js");
var _expressJs = require("./node/express.js");
var _postgresJs = require("./node/postgres.js");
var _mysqlJs = require("./node/mysql.js");
var _mongoJs = require("./node/mongo.js");
var _prismaJs = require("./node/prisma.js");
var _graphqlJs = require("./node/graphql.js");
var _apolloJs = require("./node/apollo.js");
var _browsertracingJs = require("../browser/browsertracing.js");

},{"../browser/index.js":"59Fko","./node/express.js":"lMKrS","./node/postgres.js":"787tL","./node/mysql.js":"22jie","./node/mongo.js":"6swyr","./node/prisma.js":"pNpJV","./node/graphql.js":"jCmVu","./node/apollo.js":"1cJ3u","../browser/browsertracing.js":"lSiYz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Fko":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BROWSER_TRACING_INTEGRATION_ID", ()=>(0, _browsertracingJs.BROWSER_TRACING_INTEGRATION_ID));
parcelHelpers.export(exports, "BrowserTracing", ()=>(0, _browsertracingJs.BrowserTracing));
parcelHelpers.export(exports, "defaultRequestInstrumentationOptions", ()=>(0, _requestJs.defaultRequestInstrumentationOptions));
parcelHelpers.export(exports, "instrumentOutgoingRequests", ()=>(0, _requestJs.instrumentOutgoingRequests));
var _browsertracingJs = require("./browsertracing.js");
var _requestJs = require("./request.js");

},{"./browsertracing.js":"lSiYz","./request.js":"5rxGr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSiYz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BROWSER_TRACING_INTEGRATION_ID", ()=>BROWSER_TRACING_INTEGRATION_ID);
parcelHelpers.export(exports, "BrowserTracing", ()=>BrowserTracing);
parcelHelpers.export(exports, "extractTraceDataFromMetaTags", ()=>extractTraceDataFromMetaTags);
parcelHelpers.export(exports, "getMetaContent", ()=>getMetaContent);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
var _hubextensionsJs = require("../hubextensions.js");
var _idletransactionJs = require("../idletransaction.js");
var _utilsJs = require("../utils.js");
var _backgroundtabJs = require("./backgroundtab.js");
var _indexJs = require("./metrics/index.js");
var _requestJs = require("./request.js");
var _routerJs = require("./router.js");
var BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
/** Options for Browser Tracing integration */ var DEFAULT_BROWSER_TRACING_OPTIONS = {
    idleTimeout: (0, _idletransactionJs.DEFAULT_IDLE_TIMEOUT),
    finalTimeout: (0, _idletransactionJs.DEFAULT_FINAL_TIMEOUT),
    markBackgroundTransactions: true,
    routingInstrumentation: (0, _routerJs.instrumentRoutingWithDefaults),
    startTransactionOnLocationChange: true,
    startTransactionOnPageLoad: true,
    _experiments: {
        enableLongTask: true
    },
    ...(0, _requestJs.defaultRequestInstrumentationOptions)
};
/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library. This integration uses {@see IdleTransaction} to create transactions.
 */ class BrowserTracing {
    // This class currently doesn't have a static `id` field like the other integration classes, because it prevented
    // @sentry/tracing from being treeshaken. Tree shakers do not like static fields, because they behave like side effects.
    // TODO: Come up with a better plan, than using static fields on integration classes, and use that plan on all
    // integrations.
    /** Browser Tracing integration options */ /**
   * @inheritDoc
   */ __init() {
        this.name = BROWSER_TRACING_INTEGRATION_ID;
    }
    constructor(_options){
        BrowserTracing.prototype.__init.call(this);
        let tracingOrigins = (0, _requestJs.defaultRequestInstrumentationOptions).tracingOrigins;
        // NOTE: Logger doesn't work in constructors, as it's initialized after integrations instances
        if (_options) {
            if (_options.tracingOrigins && Array.isArray(_options.tracingOrigins)) tracingOrigins = _options.tracingOrigins;
            else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (this._emitOptionsWarning = true);
        }
        this.options = {
            ...DEFAULT_BROWSER_TRACING_OPTIONS,
            ..._options,
            tracingOrigins
        };
        const { _metricOptions  } = this.options;
        (0, _indexJs.startTrackingWebVitals)(_metricOptions && _metricOptions._reportAllChanges);
        if ((0, _buildPolyfills._optionalChain)([
            this,
            "access",
            (_2)=>_2.options,
            "access",
            (_3)=>_3._experiments,
            "optionalAccess",
            (_4)=>_4.enableLongTask
        ])) (0, _indexJs.startTrackingLongTasks)();
    }
    /**
   * @inheritDoc
   */ setupOnce(_, getCurrentHub) {
        this._getCurrentHub = getCurrentHub;
        if (this._emitOptionsWarning) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.");
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`[Tracing] We added a reasonable default for you: ${(0, _requestJs.defaultRequestInstrumentationOptions).tracingOrigins}`);
        }
        const { routingInstrumentation: instrumentRouting , startTransactionOnLocationChange , startTransactionOnPageLoad , markBackgroundTransactions , traceFetch , traceXHR , tracingOrigins , shouldCreateSpanForRequest ,  } = this.options;
        instrumentRouting((context)=>this._createRouteTransaction(context), startTransactionOnPageLoad, startTransactionOnLocationChange);
        if (markBackgroundTransactions) (0, _backgroundtabJs.registerBackgroundTabDetection)();
        (0, _requestJs.instrumentOutgoingRequests)({
            traceFetch,
            traceXHR,
            tracingOrigins,
            shouldCreateSpanForRequest
        });
    }
    /** Create routing idle transaction. */ _createRouteTransaction(context) {
        if (!this._getCurrentHub) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
            return undefined;
        }
        const { beforeNavigate , idleTimeout , finalTimeout  } = this.options;
        var parentContextFromHeader = context.op === "pageload" ? extractTraceDataFromMetaTags() : undefined;
        var expandedContext = {
            ...context,
            ...parentContextFromHeader,
            ...parentContextFromHeader && {
                metadata: {
                    ...context.metadata,
                    ...parentContextFromHeader.metadata
                }
            },
            trimEnd: true
        };
        var modifiedContext = typeof beforeNavigate === "function" ? beforeNavigate(expandedContext) : expandedContext;
        // For backwards compatibility reasons, beforeNavigate can return undefined to "drop" the transaction (prevent it
        // from being sent to Sentry).
        var finalContext = modifiedContext === undefined ? {
            ...expandedContext,
            sampled: false
        } : modifiedContext;
        // If `beforeNavigate` set a custom name, record that fact
        finalContext.metadata = finalContext.name !== expandedContext.name ? {
            ...finalContext.metadata,
            source: "custom"
        } : finalContext.metadata;
        if (finalContext.sampled === false) (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Starting ${finalContext.op} transaction on scope`);
        var hub = this._getCurrentHub();
        const { location  } = (0, _utils.getGlobalObject)();
        var idleTransaction = (0, _hubextensionsJs.startIdleTransaction)(hub, finalContext, idleTimeout, finalTimeout, true, {
            location
        });
        idleTransaction.registerBeforeFinishCallback((transaction)=>{
            (0, _indexJs.addPerformanceEntries)(transaction);
            transaction.setTag("sentry_reportAllChanges", Boolean(this.options._metricOptions && this.options._metricOptions._reportAllChanges));
        });
        return idleTransaction;
    }
}
/**
 * Gets transaction context data from `sentry-trace` and `baggage` <meta> tags.
 * @returns Transaction context data or undefined neither tag exists or has valid data
 */ function extractTraceDataFromMetaTags() {
    var sentrytraceValue = getMetaContent("sentry-trace");
    var baggageValue = getMetaContent("baggage");
    var sentrytraceData = sentrytraceValue ? (0, _utils.extractTraceparentData)(sentrytraceValue) : undefined;
    var baggage = (0, _utils.parseBaggageSetMutability)(baggageValue, sentrytraceValue);
    // TODO more extensive checks for baggage validity/emptyness?
    if (sentrytraceData || baggage) return {
        ...sentrytraceData && sentrytraceData,
        ...baggage && {
            metadata: {
                baggage
            }
        }
    };
    return undefined;
}
/** Returns the value of a meta tag */ function getMetaContent(metaName) {
    // Can't specify generic to `getDomElement` because tracing can be used
    // in a variety of environments, have to disable `no-unsafe-member-access`
    // as a result.
    var metaTag = (0, _utils.getDomElement)(`meta[name=${metaName}]`);
    return metaTag ? metaTag.getAttribute("content") : null;
}

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","../hubextensions.js":"ffTQT","../idletransaction.js":"iqvay","../utils.js":"20rHd","./backgroundtab.js":"hBP9i","./metrics/index.js":"d2s5t","./request.js":"5rxGr","./router.js":"gtSF9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBP9i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerBackgroundTabDetection", ()=>registerBackgroundTabDetection);
var _utils = require("@sentry/utils");
var _utilsJs = require("../utils.js");
var global = (0, _utils.getGlobalObject)();
/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */ function registerBackgroundTabDetection() {
    if (global && global.document) global.document.addEventListener("visibilitychange", ()=>{
        var activeTransaction = (0, _utilsJs.getActiveTransaction)();
        if (global.document.hidden && activeTransaction) {
            var statusType = "cancelled";
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`);
            // We should not set status if it is already set, this prevent important statuses like
            // error or data loss from being overwritten on transaction.
            if (!activeTransaction.status) activeTransaction.setStatus(statusType);
            activeTransaction.setTag("visibilitychange", "document.hidden");
            activeTransaction.finish();
        }
    });
    else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("[Tracing] Could not set up background tab detection due to lack of global document");
}

},{"@sentry/utils":"axZXA","../utils.js":"20rHd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2s5t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_addMeasureSpans", ()=>_addMeasureSpans);
parcelHelpers.export(exports, "_addResourceSpans", ()=>_addResourceSpans);
parcelHelpers.export(exports, "addPerformanceEntries", ()=>addPerformanceEntries);
parcelHelpers.export(exports, "startTrackingLongTasks", ()=>startTrackingLongTasks);
parcelHelpers.export(exports, "startTrackingWebVitals", ()=>startTrackingWebVitals);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
var _utilsJs = require("../../utils.js");
var _getCLSJs = require("../web-vitals/getCLS.js");
var _getFIDJs = require("../web-vitals/getFID.js");
var _getLCPJs = require("../web-vitals/getLCP.js");
var _getVisibilityWatcherJs = require("../web-vitals/lib/getVisibilityWatcher.js");
var _observeJs = require("../web-vitals/lib/observe.js");
var _utilsJs1 = require("./utils.js");
var global = (0, _utils.getGlobalObject)();
function getBrowserPerformanceAPI() {
    return global && global.addEventListener && global.performance;
}
let _performanceCursor = 0;
let _measurements = {};
let _lcpEntry;
let _clsEntry;
/**
 * Start tracking web vitals
 */ function startTrackingWebVitals(reportAllChanges = false) {
    var performance = getBrowserPerformanceAPI();
    if (performance && (0, _utils.browserPerformanceTimeOrigin)) {
        if (performance.mark) global.performance.mark("sentry-tracing-init");
        _trackCLS();
        _trackLCP(reportAllChanges);
        _trackFID();
    }
}
/**
 * Start tracking long tasks.
 */ function startTrackingLongTasks() {
    var entryHandler = (entry)=>{
        var transaction = (0, _utilsJs.getActiveTransaction)();
        if (!transaction) return;
        var startTime = (0, _utilsJs.msToSec)((0, _utils.browserPerformanceTimeOrigin) + entry.startTime);
        var duration = (0, _utilsJs.msToSec)(entry.duration);
        transaction.startChild({
            description: "Main UI thread blocked",
            op: "ui.long-task",
            startTimestamp: startTime,
            endTimestamp: startTime + duration
        });
    };
    (0, _observeJs.observe)("longtask", entryHandler);
}
/** Starts tracking the Cumulative Layout Shift on the current page. */ function _trackCLS() {
    // See:
    // https://web.dev/evolving-cls/
    // https://web.dev/cls-web-tooling/
    (0, _getCLSJs.getCLS)((metric)=>{
        var entry = metric.entries.pop();
        if (!entry) return;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding CLS");
        _measurements["cls"] = {
            value: metric.value,
            unit: ""
        };
        _clsEntry = entry;
    });
}
/** Starts tracking the Largest Contentful Paint on the current page. */ function _trackLCP(reportAllChanges) {
    (0, _getLCPJs.getLCP)((metric)=>{
        var entry = metric.entries.pop();
        if (!entry) return;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding LCP");
        _measurements["lcp"] = {
            value: metric.value,
            unit: "millisecond"
        };
        _lcpEntry = entry;
    }, reportAllChanges);
}
/** Starts tracking the First Input Delay on the current page. */ function _trackFID() {
    (0, _getFIDJs.getFID)((metric)=>{
        var entry = metric.entries.pop();
        if (!entry) return;
        var timeOrigin = (0, _utilsJs.msToSec)((0, _utils.browserPerformanceTimeOrigin));
        var startTime = (0, _utilsJs.msToSec)(entry.startTime);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding FID");
        _measurements["fid"] = {
            value: metric.value,
            unit: "millisecond"
        };
        _measurements["mark.fid"] = {
            value: timeOrigin + startTime,
            unit: "second"
        };
    });
}
/** Add performance related spans to a transaction */ function addPerformanceEntries(transaction) {
    var performance = getBrowserPerformanceAPI();
    if (!performance || !global.performance.getEntries || !(0, _utils.browserPerformanceTimeOrigin)) // Gatekeeper if performance API not available
    return;
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Tracing] Adding & adjusting spans using Performance API");
    var timeOrigin = (0, _utilsJs.msToSec)((0, _utils.browserPerformanceTimeOrigin));
    var performanceEntries = performance.getEntries();
    let responseStartTimestamp;
    let requestStartTimestamp;
    performanceEntries.slice(_performanceCursor).forEach((entry)=>{
        var startTime = (0, _utilsJs.msToSec)(entry.startTime);
        var duration = (0, _utilsJs.msToSec)(entry.duration);
        if (transaction.op === "navigation" && timeOrigin + startTime < transaction.startTimestamp) return;
        switch(entry.entryType){
            case "navigation":
                _addNavigationSpans(transaction, entry, timeOrigin);
                responseStartTimestamp = timeOrigin + (0, _utilsJs.msToSec)(entry.responseStart);
                requestStartTimestamp = timeOrigin + (0, _utilsJs.msToSec)(entry.requestStart);
                break;
            case "mark":
            case "paint":
            case "measure":
                _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
                // capture web vitals
                var firstHidden = (0, _getVisibilityWatcherJs.getVisibilityWatcher)();
                // Only report if the page wasn't hidden prior to the web vital.
                var shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
                if (entry.name === "first-paint" && shouldRecord) {
                    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding FP");
                    _measurements["fp"] = {
                        value: entry.startTime,
                        unit: "millisecond"
                    };
                }
                if (entry.name === "first-contentful-paint" && shouldRecord) {
                    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding FCP");
                    _measurements["fcp"] = {
                        value: entry.startTime,
                        unit: "millisecond"
                    };
                }
                break;
            case "resource":
                var resourceName = entry.name.replace(global.location.origin, "");
                _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
                break;
            default:
        }
    });
    _performanceCursor = Math.max(performanceEntries.length - 1, 0);
    _trackNavigator(transaction);
    // Measurements are only available for pageload transactions
    if (transaction.op === "pageload") {
        // Generate TTFB (Time to First Byte), which measured as the time between the beginning of the transaction and the
        // start of the response in milliseconds
        if (typeof responseStartTimestamp === "number") {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding TTFB");
            _measurements["ttfb"] = {
                value: (responseStartTimestamp - transaction.startTimestamp) * 1000,
                unit: "millisecond"
            };
            if (typeof requestStartTimestamp === "number" && requestStartTimestamp <= responseStartTimestamp) // Capture the time spent making the request and receiving the first byte of the response.
            // This is the time between the start of the request and the start of the response in milliseconds.
            _measurements["ttfb.requestTime"] = {
                value: (responseStartTimestamp - requestStartTimestamp) * 1000,
                unit: "millisecond"
            };
        }
        [
            "fcp",
            "fp",
            "lcp"
        ].forEach((name)=>{
            if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) return;
            // The web vitals, fcp, fp, lcp, and ttfb, all measure relative to timeOrigin.
            // Unfortunately, timeOrigin is not captured within the transaction span data, so these web vitals will need
            // to be adjusted to be relative to transaction.startTimestamp.
            var oldValue = _measurements[name].value;
            var measurementTimestamp = timeOrigin + (0, _utilsJs.msToSec)(oldValue);
            // normalizedValue should be in milliseconds
            var normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1000);
            var delta = normalizedValue - oldValue;
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
            _measurements[name].value = normalizedValue;
        });
        var fidMark = _measurements["mark.fid"];
        if (fidMark && _measurements["fid"]) {
            // create span for FID
            (0, _utilsJs1._startChild)(transaction, {
                description: "first input delay",
                endTimestamp: fidMark.value + (0, _utilsJs.msToSec)(_measurements["fid"].value),
                op: "web.vitals",
                startTimestamp: fidMark.value
            });
            // Delete mark.fid as we don't want it to be part of final payload
            delete _measurements["mark.fid"];
        }
        // If FCP is not recorded we should not record the cls value
        // according to the new definition of CLS.
        if (!("fcp" in _measurements)) delete _measurements.cls;
        Object.keys(_measurements).forEach((measurementName)=>{
            transaction.setMeasurement(measurementName, _measurements[measurementName].value, _measurements[measurementName].unit);
        });
        _tagMetricInfo(transaction);
    }
    _lcpEntry = undefined;
    _clsEntry = undefined;
    _measurements = {};
}
/** Create measure related spans */ function _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
    var measureStartTimestamp = timeOrigin + startTime;
    var measureEndTimestamp = measureStartTimestamp + duration;
    (0, _utilsJs1._startChild)(transaction, {
        description: entry.name,
        endTimestamp: measureEndTimestamp,
        op: entry.entryType,
        startTimestamp: measureStartTimestamp
    });
    return measureStartTimestamp;
}
/** Instrument navigation entries */ function _addNavigationSpans(transaction, entry, timeOrigin) {
    [
        "unloadEvent",
        "redirect",
        "domContentLoadedEvent",
        "loadEvent",
        "connect"
    ].forEach((event)=>{
        _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
    });
    _addPerformanceNavigationTiming(transaction, entry, "secureConnection", timeOrigin, "TLS/SSL", "connectEnd");
    _addPerformanceNavigationTiming(transaction, entry, "fetch", timeOrigin, "cache", "domainLookupStart");
    _addPerformanceNavigationTiming(transaction, entry, "domainLookup", timeOrigin, "DNS");
    _addRequest(transaction, entry, timeOrigin);
}
/** Create performance navigation related spans */ function _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin, description, eventEnd) {
    var end = eventEnd ? entry[eventEnd] : entry[`${event}End`];
    var start = entry[`${event}Start`];
    if (!start || !end) return;
    (0, _utilsJs1._startChild)(transaction, {
        op: "browser",
        description: (0, _buildPolyfills._nullishCoalesce)(description, ()=>event),
        startTimestamp: timeOrigin + (0, _utilsJs.msToSec)(start),
        endTimestamp: timeOrigin + (0, _utilsJs.msToSec)(end)
    });
}
/** Create request and response related spans */ function _addRequest(transaction, entry, timeOrigin) {
    (0, _utilsJs1._startChild)(transaction, {
        op: "browser",
        description: "request",
        startTimestamp: timeOrigin + (0, _utilsJs.msToSec)(entry.requestStart),
        endTimestamp: timeOrigin + (0, _utilsJs.msToSec)(entry.responseEnd)
    });
    (0, _utilsJs1._startChild)(transaction, {
        op: "browser",
        description: "response",
        startTimestamp: timeOrigin + (0, _utilsJs.msToSec)(entry.responseStart),
        endTimestamp: timeOrigin + (0, _utilsJs.msToSec)(entry.responseEnd)
    });
}
/** Create resource-related spans */ function _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
    // we already instrument based on fetch and xhr, so we don't need to
    // duplicate spans here.
    if (entry.initiatorType === "xmlhttprequest" || entry.initiatorType === "fetch") return;
    var data = {};
    if ("transferSize" in entry) data["Transfer Size"] = entry.transferSize;
    if ("encodedBodySize" in entry) data["Encoded Body Size"] = entry.encodedBodySize;
    if ("decodedBodySize" in entry) data["Decoded Body Size"] = entry.decodedBodySize;
    var startTimestamp = timeOrigin + startTime;
    var endTimestamp = startTimestamp + duration;
    (0, _utilsJs1._startChild)(transaction, {
        description: resourceName,
        endTimestamp,
        op: entry.initiatorType ? `resource.${entry.initiatorType}` : "resource",
        startTimestamp,
        data
    });
}
/**
 * Capture the information of the user agent.
 */ function _trackNavigator(transaction) {
    var navigator = global.navigator;
    if (!navigator) return;
    // track network connectivity
    var connection = navigator.connection;
    if (connection) {
        if (connection.effectiveType) transaction.setTag("effectiveConnectionType", connection.effectiveType);
        if (connection.type) transaction.setTag("connectionType", connection.type);
        if ((0, _utilsJs1.isMeasurementValue)(connection.rtt)) _measurements["connection.rtt"] = {
            value: connection.rtt,
            unit: "millisecond"
        };
        if ((0, _utilsJs1.isMeasurementValue)(connection.downlink)) _measurements["connection.downlink"] = {
            value: connection.downlink,
            unit: ""
        }; // unit is empty string for now, while relay doesn't support download speed units
    }
    if ((0, _utilsJs1.isMeasurementValue)(navigator.deviceMemory)) transaction.setTag("deviceMemory", `${navigator.deviceMemory} GB`);
    if ((0, _utilsJs1.isMeasurementValue)(navigator.hardwareConcurrency)) transaction.setTag("hardwareConcurrency", String(navigator.hardwareConcurrency));
}
/** Add LCP / CLS data to transaction to allow debugging */ function _tagMetricInfo(transaction) {
    if (_lcpEntry) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding LCP Data");
        // Capture Properties of the LCP element that contributes to the LCP.
        if (_lcpEntry.element) transaction.setTag("lcp.element", (0, _utils.htmlTreeAsString)(_lcpEntry.element));
        if (_lcpEntry.id) transaction.setTag("lcp.id", _lcpEntry.id);
        if (_lcpEntry.url) // Trim URL to the first 200 characters.
        transaction.setTag("lcp.url", _lcpEntry.url.trim().slice(0, 200));
        transaction.setTag("lcp.size", _lcpEntry.size);
    }
    // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
    if (_clsEntry && _clsEntry.sources) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log("[Measurements] Adding CLS Data");
        _clsEntry.sources.forEach((source, index)=>transaction.setTag(`cls.source.${index + 1}`, (0, _utils.htmlTreeAsString)(source.node)));
    }
}

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","../../utils.js":"20rHd","../web-vitals/getCLS.js":"19MAB","../web-vitals/getFID.js":"hTOea","../web-vitals/getLCP.js":"5nhL5","../web-vitals/lib/getVisibilityWatcher.js":"f7Wd6","../web-vitals/lib/observe.js":"6rWki","./utils.js":"eidGT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19MAB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCLS", ()=>getCLS);
var _bindReporterJs = require("./lib/bindReporter.js");
var _initMetricJs = require("./lib/initMetric.js");
var _observeJs = require("./lib/observe.js");
var _onHiddenJs = require("./lib/onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://wicg.github.io/layout-instability/#sec-layout-shift
var getCLS = (onReport, reportAllChanges)=>{
    var metric = (0, _initMetricJs.initMetric)("CLS", 0);
    let report;
    let sessionValue = 0;
    let sessionEntries = [];
    var entryHandler = (entry)=>{
        // Only count layout shifts without recent user input.
        // TODO: Figure out why entry can be undefined
        if (entry && !entry.hadRecentInput) {
            var firstSessionEntry = sessionEntries[0];
            var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
            // If the entry occurred less than 1 second after the previous entry and
            // less than 5 seconds after the first entry in the session, include the
            // entry in the current session. Otherwise, start a new session.
            if (sessionValue && sessionEntries.length !== 0 && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
            } else {
                sessionValue = entry.value;
                sessionEntries = [
                    entry
                ];
            }
            // If the current session value is larger than the current CLS value,
            // update CLS and the entries contributing to it.
            if (sessionValue > metric.value) {
                metric.value = sessionValue;
                metric.entries = sessionEntries;
                if (report) report();
            }
        }
    };
    var po = (0, _observeJs.observe)("layout-shift", entryHandler);
    if (po) {
        report = (0, _bindReporterJs.bindReporter)(onReport, metric, reportAllChanges);
        (0, _onHiddenJs.onHidden)(()=>{
            po.takeRecords().map(entryHandler);
            report(true);
        });
    }
};

},{"./lib/bindReporter.js":"3cPNI","./lib/initMetric.js":"hit8h","./lib/observe.js":"6rWki","./lib/onHidden.js":"1FzG6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cPNI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindReporter", ()=>bindReporter);
var bindReporter = (callback, metric, reportAllChanges)=>{
    let prevValue;
    return (forceReport)=>{
        if (metric.value >= 0) {
            if (forceReport || reportAllChanges) {
                metric.delta = metric.value - (prevValue || 0);
                // Report the metric if there's a non-zero delta or if no previous
                // value exists (which can happen in the case of the document becoming
                // hidden when the metric value is 0).
                // See: https://github.com/GoogleChrome/web-vitals/issues/14
                if (metric.delta || prevValue === undefined) {
                    prevValue = metric.value;
                    callback(metric);
                }
            }
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hit8h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMetric", ()=>initMetric);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _generateUniqueIDJs = require("./generateUniqueID.js");
var initMetric = (name, value)=>{
    return {
        name,
        value: (0, _buildPolyfills._nullishCoalesce)(value, ()=>-1),
        delta: 0,
        entries: [],
        id: (0, _generateUniqueIDJs.generateUniqueID)()
    };
};

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","./generateUniqueID.js":"3XXSu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XXSu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateUniqueID", ()=>generateUniqueID);
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */ var generateUniqueID = ()=>{
    return `v2-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6rWki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observe", ()=>observe);
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */ var observe = (type, callback)=>{
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            // More extensive feature detect needed for Firefox due to:
            // https://github.com/GoogleChrome/web-vitals/issues/142
            if (type === "first-input" && !("PerformanceEventTiming" in self)) return;
            var po = new PerformanceObserver((l)=>l.getEntries().map(callback));
            po.observe({
                type,
                buffered: true
            });
            return po;
        }
    } catch (e) {
    // Do nothing.
    }
    return;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FzG6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onHidden", ()=>onHidden);
var _utils = require("@sentry/utils");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var onHidden = (cb, once)=>{
    var onHiddenOrPageHide = (event)=>{
        if (event.type === "pagehide" || (0, _utils.getGlobalObject)().document.visibilityState === "hidden") {
            cb(event);
            if (once) {
                removeEventListener("visibilitychange", onHiddenOrPageHide, true);
                removeEventListener("pagehide", onHiddenOrPageHide, true);
            }
        }
    };
    addEventListener("visibilitychange", onHiddenOrPageHide, true);
    // Some browsers have buggy implementations of visibilitychange,
    // so we use pagehide in addition, just to be safe.
    addEventListener("pagehide", onHiddenOrPageHide, true);
};

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTOea":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFID", ()=>getFID);
var _bindReporterJs = require("./lib/bindReporter.js");
var _getVisibilityWatcherJs = require("./lib/getVisibilityWatcher.js");
var _initMetricJs = require("./lib/initMetric.js");
var _observeJs = require("./lib/observe.js");
var _onHiddenJs = require("./lib/onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var getFID = (onReport, reportAllChanges)=>{
    var visibilityWatcher = (0, _getVisibilityWatcherJs.getVisibilityWatcher)();
    var metric = (0, _initMetricJs.initMetric)("FID");
    let report;
    var entryHandler = (entry)=>{
        // Only report if the page wasn't hidden prior to the first input.
        if (report && entry.startTime < visibilityWatcher.firstHiddenTime) {
            metric.value = entry.processingStart - entry.startTime;
            metric.entries.push(entry);
            report(true);
        }
    };
    var po = (0, _observeJs.observe)("first-input", entryHandler);
    if (po) {
        report = (0, _bindReporterJs.bindReporter)(onReport, metric, reportAllChanges);
        (0, _onHiddenJs.onHidden)(()=>{
            po.takeRecords().map(entryHandler);
            po.disconnect();
        }, true);
    }
};

},{"./lib/bindReporter.js":"3cPNI","./lib/getVisibilityWatcher.js":"f7Wd6","./lib/initMetric.js":"hit8h","./lib/observe.js":"6rWki","./lib/onHidden.js":"1FzG6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7Wd6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVisibilityWatcher", ()=>getVisibilityWatcher);
var _utils = require("@sentry/utils");
var _onHiddenJs = require("./onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let firstHiddenTime = -1;
var initHiddenTime = ()=>{
    return (0, _utils.getGlobalObject)().document.visibilityState === "hidden" ? 0 : Infinity;
};
var trackChanges = ()=>{
    // Update the time if/when the document becomes hidden.
    (0, _onHiddenJs.onHidden)(({ timeStamp  })=>{
        firstHiddenTime = timeStamp;
    }, true);
};
var getVisibilityWatcher = ()=>{
    if (firstHiddenTime < 0) {
        // If the document is hidden when this code runs, assume it was hidden
        // since navigation start. This isn't a perfect heuristic, but it's the
        // best we can do until an API is available to support querying past
        // visibilityState.
        firstHiddenTime = initHiddenTime();
        trackChanges();
    }
    return {
        get firstHiddenTime () {
            return firstHiddenTime;
        }
    };
};

},{"@sentry/utils":"axZXA","./onHidden.js":"1FzG6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5nhL5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLCP", ()=>getLCP);
var _bindReporterJs = require("./lib/bindReporter.js");
var _getVisibilityWatcherJs = require("./lib/getVisibilityWatcher.js");
var _initMetricJs = require("./lib/initMetric.js");
var _observeJs = require("./lib/observe.js");
var _onHiddenJs = require("./lib/onHidden.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://wicg.github.io/largest-contentful-paint/#sec-largest-contentful-paint-interface
var reportedMetricIDs = {};
var getLCP = (onReport, reportAllChanges)=>{
    var visibilityWatcher = (0, _getVisibilityWatcherJs.getVisibilityWatcher)();
    var metric = (0, _initMetricJs.initMetric)("LCP");
    let report;
    var entryHandler = (entry)=>{
        // The startTime attribute returns the value of the renderTime if it is not 0,
        // and the value of the loadTime otherwise.
        var value = entry.startTime;
        // If the page was hidden prior to paint time of the entry,
        // ignore it and mark the metric as final, otherwise add the entry.
        if (value < visibilityWatcher.firstHiddenTime) {
            metric.value = value;
            metric.entries.push(entry);
        }
        if (report) report();
    };
    var po = (0, _observeJs.observe)("largest-contentful-paint", entryHandler);
    if (po) {
        report = (0, _bindReporterJs.bindReporter)(onReport, metric, reportAllChanges);
        var stopListening = ()=>{
            if (!reportedMetricIDs[metric.id]) {
                po.takeRecords().map(entryHandler);
                po.disconnect();
                reportedMetricIDs[metric.id] = true;
                report(true);
            }
        };
        // Stop listening after input. Note: while scrolling is an input that
        // stop LCP observation, it's unreliable since it can be programmatically
        // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
        [
            "keydown",
            "click"
        ].forEach((type)=>{
            addEventListener(type, stopListening, {
                once: true,
                capture: true
            });
        });
        (0, _onHiddenJs.onHidden)(stopListening, true);
    }
};

},{"./lib/bindReporter.js":"3cPNI","./lib/getVisibilityWatcher.js":"f7Wd6","./lib/initMetric.js":"hit8h","./lib/observe.js":"6rWki","./lib/onHidden.js":"1FzG6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eidGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_startChild", ()=>_startChild);
parcelHelpers.export(exports, "isMeasurementValue", ()=>isMeasurementValue);
/**
 * Checks if a given value is a valid measurement value.
 */ function isMeasurementValue(value) {
    return typeof value === "number" && isFinite(value);
}
/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */ function _startChild(transaction, { startTimestamp , ...ctx }) {
    if (startTimestamp && transaction.startTimestamp > startTimestamp) transaction.startTimestamp = startTimestamp;
    return transaction.startChild({
        startTimestamp,
        ...ctx
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rxGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_TRACING_ORIGINS", ()=>DEFAULT_TRACING_ORIGINS);
parcelHelpers.export(exports, "defaultRequestInstrumentationOptions", ()=>defaultRequestInstrumentationOptions);
parcelHelpers.export(exports, "fetchCallback", ()=>fetchCallback);
parcelHelpers.export(exports, "instrumentOutgoingRequests", ()=>instrumentOutgoingRequests);
parcelHelpers.export(exports, "xhrCallback", ()=>xhrCallback);
var _utils = require("@sentry/utils");
var _utilsJs = require("../utils.js");
var DEFAULT_TRACING_ORIGINS = [
    "localhost",
    /^\//
];
/** Options for Request Instrumentation */ var defaultRequestInstrumentationOptions = {
    traceFetch: true,
    traceXHR: true,
    tracingOrigins: DEFAULT_TRACING_ORIGINS
};
/** Registers span creators for xhr and fetch requests  */ function instrumentOutgoingRequests(_options) {
    const { traceFetch , traceXHR , tracingOrigins , shouldCreateSpanForRequest  } = {
        ...defaultRequestInstrumentationOptions,
        ..._options
    };
    // We should cache url -> decision so that we don't have to compute
    // regexp everytime we create a request.
    var urlMap = {};
    var defaultShouldCreateSpan = (url)=>{
        if (urlMap[url]) return urlMap[url];
        var origins = tracingOrigins;
        urlMap[url] = origins.some((origin)=>(0, _utils.isMatchingPattern)(url, origin)) && !(0, _utils.isMatchingPattern)(url, "sentry_key");
        return urlMap[url];
    };
    // We want that our users don't have to re-implement shouldCreateSpanForRequest themselves
    // That's why we filter out already unwanted Spans from tracingOrigins
    let shouldCreateSpan = defaultShouldCreateSpan;
    if (typeof shouldCreateSpanForRequest === "function") shouldCreateSpan = (url)=>{
        return defaultShouldCreateSpan(url) && shouldCreateSpanForRequest(url);
    };
    var spans = {};
    if (traceFetch) (0, _utils.addInstrumentationHandler)("fetch", (handlerData)=>{
        fetchCallback(handlerData, shouldCreateSpan, spans);
    });
    if (traceXHR) (0, _utils.addInstrumentationHandler)("xhr", (handlerData)=>{
        xhrCallback(handlerData, shouldCreateSpan, spans);
    });
}
/**
 * Create and track fetch request spans
 */ function fetchCallback(handlerData, shouldCreateSpan, spans) {
    if (!(0, _utilsJs.hasTracingEnabled)() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) return;
    if (handlerData.endTimestamp) {
        var spanId = handlerData.fetchData.__span;
        if (!spanId) return;
        var span = spans[spanId];
        if (span) {
            if (handlerData.response) // TODO (kmclb) remove this once types PR goes through
            span.setHttpStatus(handlerData.response.status);
            else if (handlerData.error) span.setStatus("internal_error");
            span.finish();
            delete spans[spanId];
        }
        return;
    }
    var activeTransaction = (0, _utilsJs.getActiveTransaction)();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: {
                ...handlerData.fetchData,
                type: "fetch"
            },
            description: `${handlerData.fetchData.method} ${handlerData.fetchData.url}`,
            op: "http.client"
        });
        handlerData.fetchData.__span = span.spanId;
        spans[span.spanId] = span;
        var request = handlerData.args[0] = handlerData.args[0];
        var options = handlerData.args[1] = handlerData.args[1] || {};
        options.headers = addTracingHeaders(request, activeTransaction.getBaggage(), span, options);
    }
}
function addTracingHeaders(request, incomingBaggage, span, options) {
    let headers = options.headers;
    if ((0, _utils.isInstanceOf)(request, Request)) headers = request.headers;
    if (headers) {
        if (typeof headers.append === "function") {
            headers.append("sentry-trace", span.toTraceparent());
            headers.append((0, _utils.BAGGAGE_HEADER_NAME), (0, _utils.mergeAndSerializeBaggage)(incomingBaggage, headers.get((0, _utils.BAGGAGE_HEADER_NAME))));
        } else if (Array.isArray(headers)) {
            const [, headerBaggageString] = headers.find(([key, _])=>key === (0, _utils.BAGGAGE_HEADER_NAME));
            headers = [
                ...headers,
                [
                    "sentry-trace",
                    span.toTraceparent()
                ],
                [
                    (0, _utils.BAGGAGE_HEADER_NAME),
                    (0, _utils.mergeAndSerializeBaggage)(incomingBaggage, headerBaggageString)
                ], 
            ];
        } else headers = {
            ...headers,
            "sentry-trace": span.toTraceparent(),
            baggage: (0, _utils.mergeAndSerializeBaggage)(incomingBaggage, headers.baggage)
        };
    } else headers = {
        "sentry-trace": span.toTraceparent(),
        baggage: (0, _utils.mergeAndSerializeBaggage)(incomingBaggage)
    };
    return headers;
}
/**
 * Create and track xhr request spans
 */ function xhrCallback(handlerData, shouldCreateSpan, spans) {
    if (!(0, _utilsJs.hasTracingEnabled)() || handlerData.xhr && handlerData.xhr.__sentry_own_request__ || !(handlerData.xhr && handlerData.xhr.__sentry_xhr__ && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) return;
    var xhr = handlerData.xhr.__sentry_xhr__;
    // check first if the request has finished and is tracked by an existing span which should now end
    if (handlerData.endTimestamp) {
        var spanId = handlerData.xhr.__sentry_xhr_span_id__;
        if (!spanId) return;
        var span = spans[spanId];
        if (span) {
            span.setHttpStatus(xhr.status_code);
            span.finish();
            delete spans[spanId];
        }
        return;
    }
    // if not, create a new span to track it
    var activeTransaction = (0, _utilsJs.getActiveTransaction)();
    if (activeTransaction) {
        var span = activeTransaction.startChild({
            data: {
                ...xhr.data,
                type: "xhr",
                method: xhr.method,
                url: xhr.url
            },
            description: `${xhr.method} ${xhr.url}`,
            op: "http.client"
        });
        handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
        spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
        if (handlerData.xhr.setRequestHeader) try {
            handlerData.xhr.setRequestHeader("sentry-trace", span.toTraceparent());
            var headerBaggageString = handlerData.xhr.getRequestHeader && handlerData.xhr.getRequestHeader((0, _utils.BAGGAGE_HEADER_NAME));
            handlerData.xhr.setRequestHeader((0, _utils.BAGGAGE_HEADER_NAME), (0, _utils.mergeAndSerializeBaggage)(activeTransaction.getBaggage(), headerBaggageString));
        } catch (_) {
        // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
        }
    }
}

},{"@sentry/utils":"axZXA","../utils.js":"20rHd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtSF9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instrumentRoutingWithDefaults", ()=>instrumentRoutingWithDefaults);
var _utils = require("@sentry/utils");
var global = (0, _utils.getGlobalObject)();
/**
 * Default function implementing pageload and navigation transactions
 */ function instrumentRoutingWithDefaults(customStartTransaction, startTransactionOnPageLoad = true, startTransactionOnLocationChange = true) {
    if (!global || !global.location) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn("Could not initialize routing instrumentation due to invalid location");
        return;
    }
    let startingUrl = global.location.href;
    let activeTransaction;
    if (startTransactionOnPageLoad) activeTransaction = customStartTransaction({
        name: global.location.pathname,
        op: "pageload",
        metadata: {
            source: "url"
        }
    });
    if (startTransactionOnLocationChange) (0, _utils.addInstrumentationHandler)("history", ({ to , from  })=>{
        /**
       * This early return is there to account for some cases where a navigation transaction starts right after
       * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
       * create an uneccessary navigation transaction.
       *
       * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
       * only be caused in certain development environments where the usage of a hot module reloader is causing
       * errors.
       */ if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
            startingUrl = undefined;
            return;
        }
        if (from !== to) {
            startingUrl = undefined;
            if (activeTransaction) {
                (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
                // If there's an open transaction on the scope, we need to finish it before creating an new one.
                activeTransaction.finish();
            }
            activeTransaction = customStartTransaction({
                name: global.location.pathname,
                op: "navigation",
                metadata: {
                    source: "url"
                }
            });
        }
    });
}

},{"@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMKrS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Express", ()=>Express);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
/**
 * Express integration
 *
 * Provides an request and error handler for Express framework as well as tracing capabilities
 */ class Express {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Express";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Express.id;
    }
    /**
   * Express App instance
   */ /**
   * @inheritDoc
   */ constructor(options = {}){
        Express.prototype.__init.call(this);
        this._router = options.router || options.app;
        this._methods = (Array.isArray(options.methods) ? options.methods : []).concat("use");
    }
    /**
   * @inheritDoc
   */ setupOnce() {
        if (!this._router) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("ExpressIntegration is missing an Express instance");
            return;
        }
        instrumentMiddlewares(this._router, this._methods);
        instrumentRouter(this._router);
    }
}
Express.__initStatic();
/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 *
 * They all internally delegate to the `router[method]` of the given application instance.
 */ function wrap(fn, method) {
    var arity = fn.length;
    switch(arity){
        case 2:
            return function(req, res) {
                var transaction = res.__sentry_transaction;
                if (transaction) {
                    var span = transaction.startChild({
                        description: fn.name,
                        op: `express.middleware.${method}`
                    });
                    res.once("finish", ()=>{
                        span.finish();
                    });
                }
                return fn.call(this, req, res);
            };
        case 3:
            return function(req, res, next) {
                var transaction = res.__sentry_transaction;
                var span = (0, _buildPolyfills._optionalChain)([
                    transaction,
                    "optionalAccess",
                    (_)=>_.startChild,
                    "call",
                    (_2)=>_2({
                            description: fn.name,
                            op: `express.middleware.${method}`
                        })
                ]);
                fn.call(this, req, res, function(...args) {
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_3)=>_3.finish,
                        "call",
                        (_4)=>_4()
                    ]);
                    next.call(this, ...args);
                });
            };
        case 4:
            return function(err, req, res, next) {
                var transaction = res.__sentry_transaction;
                var span = (0, _buildPolyfills._optionalChain)([
                    transaction,
                    "optionalAccess",
                    (_5)=>_5.startChild,
                    "call",
                    (_6)=>_6({
                            description: fn.name,
                            op: `express.middleware.${method}`
                        })
                ]);
                fn.call(this, err, req, res, function(...args) {
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_7)=>_7.finish,
                        "call",
                        (_8)=>_8()
                    ]);
                    next.call(this, ...args);
                });
            };
        default:
            throw new Error(`Express middleware takes 2-4 arguments. Got: ${arity}`);
    }
}
/**
 * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */ function wrapMiddlewareArgs(args, method) {
    return args.map((arg)=>{
        if (typeof arg === "function") return wrap(arg, method);
        if (Array.isArray(arg)) return arg.map((a)=>{
            if (typeof a === "function") return wrap(a, method);
            return a;
        });
        return arg;
    });
}
/**
 * Patches original router to utilize our tracing functionality
 */ function patchMiddleware(router, method) {
    var originalCallback = router[method];
    router[method] = function(...args) {
        return originalCallback.call(this, ...wrapMiddlewareArgs(args, method));
    };
    return router;
}
/**
 * Patches original router methods
 */ function instrumentMiddlewares(router, methods = []) {
    methods.forEach((method)=>patchMiddleware(router, method));
}
/**
 * Patches the prototype of Express.Router to accumulate the resolved route
 * if a layer instance's `match` function was called and it returned a successful match.
 *
 * @see https://github.com/expressjs/express/blob/master/lib/router/index.js
 *
 * @param appOrRouter the router instance which can either be an app (i.e. top-level) or a (nested) router.
 */ function instrumentRouter(appOrRouter) {
    // This is how we can distinguish between app and routers
    var isApp = "settings" in appOrRouter;
    // In case the app's top-level router hasn't been initialized yet, we have to do it now
    if (isApp && appOrRouter._router === undefined && appOrRouter.lazyrouter) appOrRouter.lazyrouter();
    var router = isApp ? appOrRouter._router : appOrRouter;
    if (!router) {
        /*
    If we end up here, this means likely that this integration is used with Express 3 or Express 5.
    For now, we don't support these versions (3 is very old and 5 is still in beta). To support Express 5,
    we'd need to make more changes to the routing instrumentation because the router is no longer part of
    the Express core package but maintained in its own package. The new router has different function
    signatures and works slightly differently, demanding more changes than just taking the router from
    `app.router` instead of `app._router`.
    @see https://github.com/pillarjs/router

    TODO: Proper Express 5 support
    */ (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).debug("Cannot instrument router for URL Parameterization (did not find a valid router).");
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).debug("Routing instrumentation is currently only supported in Express 4.");
        return;
    }
    var routerProto = Object.getPrototypeOf(router);
    var originalProcessParams = routerProto.process_params;
    routerProto.process_params = function process_params(layer, called, req, res, done) {
        // Base case: We're in the first part of the URL (thus we start with the root '/')
        if (!req._reconstructedRoute) req._reconstructedRoute = "";
        // If the layer's partial route has params, is a regex or an array, the route is stored in layer.route.
        const { layerRoutePath , isRegex , isArray , numExtraSegments  } = getLayerRoutePathInfo(layer);
        // Otherwise, the hardcoded path (i.e. a partial route without params) is stored in layer.path
        var partialRoute = layerRoutePath || layer.path || "";
        // Normalize the partial route so that it doesn't contain leading or trailing slashes
        // and exclude empty or '*' wildcard routes.
        // The exclusion of '*' routes is our best effort to not "pollute" the transaction name
        // with interim handlers (e.g. ones that check authentication or do other middleware stuff).
        // We want to end up with the parameterized URL of the incoming request without any extraneous path segments.
        var finalPartialRoute = partialRoute.split("/").filter((segment)=>segment.length > 0 && (isRegex || isArray || !segment.includes("*"))).join("/");
        // If we found a valid partial URL, we append it to the reconstructed route
        if (finalPartialRoute && finalPartialRoute.length > 0) // If the partial route is from a regex route, we append a '/' to close the regex
        req._reconstructedRoute += `/${finalPartialRoute}${isRegex ? "/" : ""}`;
        // Now we check if we are in the "last" part of the route. We determine this by comparing the
        // number of URL segments from the original URL to that of our reconstructed parameterized URL.
        // If we've reached our final destination, we update the transaction name.
        var urlLength = (0, _utils.getNumberOfUrlSegments)(req.originalUrl || "") + numExtraSegments;
        var routeLength = (0, _utils.getNumberOfUrlSegments)(req._reconstructedRoute);
        if (urlLength === routeLength) {
            var transaction = res.__sentry_transaction;
            if (transaction && transaction.metadata.source !== "custom") {
                // If the request URL is '/' or empty, the reconstructed route will be empty.
                // Therefore, we fall back to setting the final route to '/' in this case.
                var finalRoute = req._reconstructedRoute || "/";
                transaction.setName(...(0, _utils.extractPathForTransaction)(req, {
                    path: true,
                    method: true,
                    customRoute: finalRoute
                }));
            }
        }
        return originalProcessParams.call(this, layer, called, req, res, done);
    };
}
/**
 * Extracts and stringifies the layer's route which can either be a string with parameters (`users/:id`),
 * a RegEx (`/test/`) or an array of strings and regexes (`['/path1', /\/path[2-5]/, /path/:id]`). Additionally
 * returns extra information about the route, such as if the route is defined as regex or as an array.
 *
 * @param layer the layer to extract the stringified route from
 *
 * @returns an object containing the stringified route, a flag determining if the route was a regex
 *          and the number of extra segments to the matched path that are additionally in the route,
 *          if the route was an array (defaults to 0).
 */ function getLayerRoutePathInfo(layer) {
    var lrp = (0, _buildPolyfills._optionalChain)([
        layer,
        "access",
        (_9)=>_9.route,
        "optionalAccess",
        (_10)=>_10.path
    ]);
    var isRegex = (0, _utils.isRegExp)(lrp);
    var isArray = Array.isArray(lrp);
    if (!lrp) return {
        isRegex,
        isArray,
        numExtraSegments: 0
    };
    var numExtraSegments = isArray ? Math.max(getNumberOfArrayUrlSegments(lrp) - (0, _utils.getNumberOfUrlSegments)(layer.path || ""), 0) : 0;
    var layerRoutePath = getLayerRoutePathString(isArray, lrp);
    return {
        layerRoutePath,
        isRegex,
        isArray,
        numExtraSegments
    };
}
/**
 * Returns the number of URL segments in an array of routes
 *
 * Example: ['/api/test', /\/api\/post[0-9]/, '/users/:id/details`] -> 7
 */ function getNumberOfArrayUrlSegments(routesArray) {
    return routesArray.reduce((accNumSegments, currentRoute)=>{
        // array members can be a RegEx -> convert them toString
        return accNumSegments + (0, _utils.getNumberOfUrlSegments)(currentRoute.toString());
    }, 0);
}
/**
 * Extracts and returns the stringified version of the layers route path
 * Handles route arrays (by joining the paths together) as well as RegExp and normal
 * string values (in the latter case the toString conversion is technically unnecessary but
 * it doesn't hurt us either).
 */ function getLayerRoutePathString(isArray, lrp) {
    if (isArray) return lrp.map((r)=>r.toString()).join(",");
    return lrp && lrp.toString();
}

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"787tL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Postgres", ()=>Postgres);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
/** Tracing integration for node-postgres package */ class Postgres {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Postgres";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Postgres.id;
    }
    constructor(options = {}){
        Postgres.prototype.__init.call(this);
        this._usePgNative = !!options.usePgNative;
    }
    /**
   * @inheritDoc
   */ setupOnce(_, getCurrentHub) {
        var pkg = (0, _utils.loadModule)("pg");
        if (!pkg) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Postgres Integration was unable to require `pg` package.");
            return;
        }
        if (this._usePgNative && !(0, _buildPolyfills._optionalChain)([
            pkg,
            "access",
            (_2)=>_2.native,
            "optionalAccess",
            (_3)=>_3.Client
        ])) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Postgres Integration was unable to access 'pg-native' bindings.");
            return;
        }
        const { Client  } = this._usePgNative ? pkg.native : pkg;
        /**
     * function (query, callback) => void
     * function (query, params, callback) => void
     * function (query) => Promise
     * function (query, params) => Promise
     * function (pg.Cursor) => pg.Cursor
     */ (0, _utils.fill)(Client.prototype, "query", function(orig) {
            return function(config, values, callback) {
                var scope = getCurrentHub().getScope();
                var parentSpan = (0, _buildPolyfills._optionalChain)([
                    scope,
                    "optionalAccess",
                    (_4)=>_4.getSpan,
                    "call",
                    (_5)=>_5()
                ]);
                var span = (0, _buildPolyfills._optionalChain)([
                    parentSpan,
                    "optionalAccess",
                    (_6)=>_6.startChild,
                    "call",
                    (_7)=>_7({
                            description: typeof config === "string" ? config : config.text,
                            op: "db"
                        })
                ]);
                if (typeof callback === "function") return orig.call(this, config, values, function(err, result) {
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_8)=>_8.finish,
                        "call",
                        (_9)=>_9()
                    ]);
                    callback(err, result);
                });
                if (typeof values === "function") return orig.call(this, config, function(err, result) {
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_10)=>_10.finish,
                        "call",
                        (_11)=>_11()
                    ]);
                    values(err, result);
                });
                var rv = typeof values !== "undefined" ? orig.call(this, config, values) : orig.call(this, config);
                if ((0, _utils.isThenable)(rv)) return rv.then((res)=>{
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_12)=>_12.finish,
                        "call",
                        (_13)=>_13()
                    ]);
                    return res;
                });
                (0, _buildPolyfills._optionalChain)([
                    span,
                    "optionalAccess",
                    (_14)=>_14.finish,
                    "call",
                    (_15)=>_15()
                ]);
                return rv;
            };
        });
    }
}
Postgres.__initStatic();

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22jie":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mysql", ()=>Mysql);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
/** Tracing integration for node-mysql package */ class Mysql {
    constructor(){
        Mysql.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Mysql";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Mysql.id;
    }
    /**
   * @inheritDoc
   */ setupOnce(_, getCurrentHub) {
        var pkg = (0, _utils.loadModule)("mysql/lib/Connection.js");
        if (!pkg) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("Mysql Integration was unable to require `mysql` package.");
            return;
        }
        // The original function will have one of these signatures:
        //    function (callback) => void
        //    function (options, callback) => void
        //    function (options, values, callback) => void
        (0, _utils.fill)(pkg, "createQuery", function(orig) {
            return function(options, values, callback) {
                var scope = getCurrentHub().getScope();
                var parentSpan = (0, _buildPolyfills._optionalChain)([
                    scope,
                    "optionalAccess",
                    (_2)=>_2.getSpan,
                    "call",
                    (_3)=>_3()
                ]);
                var span = (0, _buildPolyfills._optionalChain)([
                    parentSpan,
                    "optionalAccess",
                    (_4)=>_4.startChild,
                    "call",
                    (_5)=>_5({
                            description: typeof options === "string" ? options : options.sql,
                            op: "db"
                        })
                ]);
                if (typeof callback === "function") return orig.call(this, options, values, function(err, result, fields) {
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_6)=>_6.finish,
                        "call",
                        (_7)=>_7()
                    ]);
                    callback(err, result, fields);
                });
                if (typeof values === "function") return orig.call(this, options, function(err, result, fields) {
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_8)=>_8.finish,
                        "call",
                        (_9)=>_9()
                    ]);
                    values(err, result, fields);
                });
                return orig.call(this, options, values, callback);
            };
        });
    }
}
Mysql.__initStatic();

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6swyr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mongo", ()=>Mongo);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
// This allows us to use the same array for both defaults options and the type itself.
// (note `as const` at the end to make it a union of string literal types (i.e. "a" | "b" | ... )
// and not just a string[])
var OPERATIONS = [
    "aggregate",
    "bulkWrite",
    "countDocuments",
    "createIndex",
    "createIndexes",
    "deleteMany",
    "deleteOne",
    "distinct",
    "drop",
    "dropIndex",
    "dropIndexes",
    "estimatedDocumentCount",
    "find",
    "findOne",
    "findOneAndDelete",
    "findOneAndReplace",
    "findOneAndUpdate",
    "indexes",
    "indexExists",
    "indexInformation",
    "initializeOrderedBulkOp",
    "insertMany",
    "insertOne",
    "isCapped",
    "mapReduce",
    "options",
    "parallelCollectionScan",
    "rename",
    "replaceOne",
    "stats",
    "updateMany",
    "updateOne"
];
// All of the operations above take `options` and `callback` as their final parameters, but some of them
// take additional parameters as well. For those operations, this is a map of
// { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
// positional arguments when we add them to the span's `data` object later
var OPERATION_SIGNATURES = {
    // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
    // see https://github.com/getsentry/sentry-javascript/pull/3102
    bulkWrite: [
        "operations"
    ],
    countDocuments: [
        "query"
    ],
    createIndex: [
        "fieldOrSpec"
    ],
    createIndexes: [
        "indexSpecs"
    ],
    deleteMany: [
        "filter"
    ],
    deleteOne: [
        "filter"
    ],
    distinct: [
        "key",
        "query"
    ],
    dropIndex: [
        "indexName"
    ],
    find: [
        "query"
    ],
    findOne: [
        "query"
    ],
    findOneAndDelete: [
        "filter"
    ],
    findOneAndReplace: [
        "filter",
        "replacement"
    ],
    findOneAndUpdate: [
        "filter",
        "update"
    ],
    indexExists: [
        "indexes"
    ],
    insertMany: [
        "docs"
    ],
    insertOne: [
        "doc"
    ],
    mapReduce: [
        "map",
        "reduce"
    ],
    rename: [
        "newName"
    ],
    replaceOne: [
        "filter",
        "doc"
    ],
    updateMany: [
        "filter",
        "update"
    ],
    updateOne: [
        "filter",
        "update"
    ]
};
/** Tracing integration for mongo package */ class Mongo {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Mongo";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Mongo.id;
    }
    /**
   * @inheritDoc
   */ constructor(options = {}){
        Mongo.prototype.__init.call(this);
        this._operations = Array.isArray(options.operations) ? options.operations : OPERATIONS;
        this._describeOperations = "describeOperations" in options ? options.describeOperations : true;
        this._useMongoose = !!options.useMongoose;
    }
    /**
   * @inheritDoc
   */ setupOnce(_, getCurrentHub) {
        var moduleName = this._useMongoose ? "mongoose" : "mongodb";
        var pkg = (0, _utils.loadModule)(moduleName);
        if (!pkg) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error(`Mongo Integration was unable to require \`${moduleName}\` package.`);
            return;
        }
        this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
    }
    /**
   * Patches original collection methods
   */ _instrumentOperations(collection, operations, getCurrentHub) {
        operations.forEach((operation)=>this._patchOperation(collection, operation, getCurrentHub));
    }
    /**
   * Patches original collection to utilize our tracing functionality
   */ _patchOperation(collection, operation, getCurrentHub) {
        if (!(operation in collection.prototype)) return;
        var getSpanContext = this._getSpanContextFromOperationArguments.bind(this);
        (0, _utils.fill)(collection.prototype, operation, function(orig) {
            return function(...args) {
                var lastArg = args[args.length - 1];
                var scope = getCurrentHub().getScope();
                var parentSpan = (0, _buildPolyfills._optionalChain)([
                    scope,
                    "optionalAccess",
                    (_2)=>_2.getSpan,
                    "call",
                    (_3)=>_3()
                ]);
                // Check if the operation was passed a callback. (mapReduce requires a different check, as
                // its (non-callback) arguments can also be functions.)
                if (typeof lastArg !== "function" || operation === "mapReduce" && args.length === 2) {
                    var span = (0, _buildPolyfills._optionalChain)([
                        parentSpan,
                        "optionalAccess",
                        (_4)=>_4.startChild,
                        "call",
                        (_5)=>_5(getSpanContext(this, operation, args))
                    ]);
                    var maybePromise = orig.call(this, ...args);
                    if ((0, _utils.isThenable)(maybePromise)) return maybePromise.then((res)=>{
                        (0, _buildPolyfills._optionalChain)([
                            span,
                            "optionalAccess",
                            (_6)=>_6.finish,
                            "call",
                            (_7)=>_7()
                        ]);
                        return res;
                    });
                    else {
                        (0, _buildPolyfills._optionalChain)([
                            span,
                            "optionalAccess",
                            (_8)=>_8.finish,
                            "call",
                            (_9)=>_9()
                        ]);
                        return maybePromise;
                    }
                }
                var span = (0, _buildPolyfills._optionalChain)([
                    parentSpan,
                    "optionalAccess",
                    (_10)=>_10.startChild,
                    "call",
                    (_11)=>_11(getSpanContext(this, operation, args.slice(0, -1)))
                ]);
                return orig.call(this, ...args.slice(0, -1), function(err, result) {
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_12)=>_12.finish,
                        "call",
                        (_13)=>_13()
                    ]);
                    lastArg(err, result);
                });
            };
        });
    }
    /**
   * Form a SpanContext based on the user input to a given operation.
   */ _getSpanContextFromOperationArguments(collection, operation, args) {
        var data = {
            collectionName: collection.collectionName,
            dbName: collection.dbName,
            namespace: collection.namespace
        };
        var spanContext = {
            op: "db",
            description: operation,
            data
        };
        // If the operation takes no arguments besides `options` and `callback`, or if argument
        // collection is disabled for this operation, just return early.
        var signature = OPERATION_SIGNATURES[operation];
        var shouldDescribe = Array.isArray(this._describeOperations) ? this._describeOperations.includes(operation) : this._describeOperations;
        if (!signature || !shouldDescribe) return spanContext;
        try {
            // Special case for `mapReduce`, as the only one accepting functions as arguments.
            if (operation === "mapReduce") {
                const [map, reduce] = args;
                data[signature[0]] = typeof map === "string" ? map : map.name || "<anonymous>";
                data[signature[1]] = typeof reduce === "string" ? reduce : reduce.name || "<anonymous>";
            } else for(let i = 0; i < signature.length; i++)data[signature[i]] = JSON.stringify(args[i]);
        } catch (_oO) {
        // no-empty
        }
        return spanContext;
    }
}
Mongo.__initStatic();

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pNpJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Prisma", ()=>Prisma);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
function isValidPrismaClient(possibleClient) {
    return possibleClient && !!possibleClient["$use"];
}
/** Tracing integration for @prisma/client package */ class Prisma {
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Prisma";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Prisma.id;
    }
    /**
   * Prisma ORM Client Instance
   */ /**
   * @inheritDoc
   */ constructor(options = {}){
        Prisma.prototype.__init.call(this);
        if (isValidPrismaClient(options.client)) this._client = options.client;
        else (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(options.client)}`);
    }
    /**
   * @inheritDoc
   */ setupOnce(_, getCurrentHub) {
        if (!this._client) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && (0, _utils.logger).error("PrismaIntegration is missing a Prisma Client Instance");
            return;
        }
        this._client.$use((params, next)=>{
            var scope = getCurrentHub().getScope();
            var parentSpan = (0, _buildPolyfills._optionalChain)([
                scope,
                "optionalAccess",
                (_2)=>_2.getSpan,
                "call",
                (_3)=>_3()
            ]);
            var action = params.action;
            var model = params.model;
            var span = (0, _buildPolyfills._optionalChain)([
                parentSpan,
                "optionalAccess",
                (_4)=>_4.startChild,
                "call",
                (_5)=>_5({
                        description: model ? `${model} ${action}` : action,
                        op: "db.prisma"
                    })
            ]);
            var rv = next(params);
            if ((0, _utils.isThenable)(rv)) return rv.then((res)=>{
                (0, _buildPolyfills._optionalChain)([
                    span,
                    "optionalAccess",
                    (_6)=>_6.finish,
                    "call",
                    (_7)=>_7()
                ]);
                return res;
            });
            (0, _buildPolyfills._optionalChain)([
                span,
                "optionalAccess",
                (_8)=>_8.finish,
                "call",
                (_9)=>_9()
            ]);
            return rv;
        });
    }
}
Prisma.__initStatic();

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCmVu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphQL", ()=>GraphQL);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
/** Tracing integration for graphql package */ class GraphQL {
    constructor(){
        GraphQL.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "GraphQL";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = GraphQL.id;
    }
    /**
   * @inheritDoc
   */ setupOnce(_, getCurrentHub) {
        var pkg = (0, _utils.loadModule)("graphql/execution/execute.js");
        if (!pkg) {
            (0, _utils.logger).error("GraphQL Integration was unable to require graphql/execution package.");
            return;
        }
        (0, _utils.fill)(pkg, "execute", function(orig) {
            return function(...args) {
                var scope = getCurrentHub().getScope();
                var parentSpan = (0, _buildPolyfills._optionalChain)([
                    scope,
                    "optionalAccess",
                    (_2)=>_2.getSpan,
                    "call",
                    (_3)=>_3()
                ]);
                var span = (0, _buildPolyfills._optionalChain)([
                    parentSpan,
                    "optionalAccess",
                    (_4)=>_4.startChild,
                    "call",
                    (_5)=>_5({
                            description: "execute",
                            op: "db.graphql"
                        })
                ]);
                (0, _buildPolyfills._optionalChain)([
                    scope,
                    "optionalAccess",
                    (_6)=>_6.setSpan,
                    "call",
                    (_7)=>_7(span)
                ]);
                var rv = orig.call(this, ...args);
                if ((0, _utils.isThenable)(rv)) return rv.then((res)=>{
                    (0, _buildPolyfills._optionalChain)([
                        span,
                        "optionalAccess",
                        (_8)=>_8.finish,
                        "call",
                        (_9)=>_9()
                    ]);
                    (0, _buildPolyfills._optionalChain)([
                        scope,
                        "optionalAccess",
                        (_10)=>_10.setSpan,
                        "call",
                        (_11)=>_11(parentSpan)
                    ]);
                    return res;
                });
                (0, _buildPolyfills._optionalChain)([
                    span,
                    "optionalAccess",
                    (_12)=>_12.finish,
                    "call",
                    (_13)=>_13()
                ]);
                (0, _buildPolyfills._optionalChain)([
                    scope,
                    "optionalAccess",
                    (_14)=>_14.setSpan,
                    "call",
                    (_15)=>_15(parentSpan)
                ]);
                return rv;
            };
        });
    }
}
GraphQL.__initStatic();

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cJ3u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Apollo", ()=>Apollo);
var _buildPolyfills = require("@sentry/utils/esm/buildPolyfills");
var _utils = require("@sentry/utils");
/** Tracing integration for Apollo */ class Apollo {
    constructor(){
        Apollo.prototype.__init.call(this);
    }
    /**
   * @inheritDoc
   */ static __initStatic() {
        this.id = "Apollo";
    }
    /**
   * @inheritDoc
   */ __init() {
        this.name = Apollo.id;
    }
    /**
   * @inheritDoc
   */ setupOnce(_, getCurrentHub) {
        var pkg = (0, _utils.loadModule)("apollo-server-core");
        if (!pkg) {
            (0, _utils.logger).error("Apollo Integration was unable to require apollo-server-core package.");
            return;
        }
        /**
     * Iterate over resolvers of the ApolloServer instance before schemas are constructed.
     */ (0, _utils.fill)(pkg.ApolloServerBase.prototype, "constructSchema", function(orig) {
            return function() {
                var resolvers = (0, _utils.arrayify)(this.config.resolvers);
                this.config.resolvers = resolvers.map((model)=>{
                    Object.keys(model).forEach((resolverGroupName)=>{
                        Object.keys(model[resolverGroupName]).forEach((resolverName)=>{
                            if (typeof model[resolverGroupName][resolverName] !== "function") return;
                            wrapResolver(model, resolverGroupName, resolverName, getCurrentHub);
                        });
                    });
                    return model;
                });
                return orig.call(this);
            };
        });
    }
}
Apollo.__initStatic();
/**
 * Wrap a single resolver which can be a parent of other resolvers and/or db operations.
 */ function wrapResolver(model, resolverGroupName, resolverName, getCurrentHub) {
    (0, _utils.fill)(model[resolverGroupName], resolverName, function(orig) {
        return function(...args) {
            var scope = getCurrentHub().getScope();
            var parentSpan = (0, _buildPolyfills._optionalChain)([
                scope,
                "optionalAccess",
                (_2)=>_2.getSpan,
                "call",
                (_3)=>_3()
            ]);
            var span = (0, _buildPolyfills._optionalChain)([
                parentSpan,
                "optionalAccess",
                (_4)=>_4.startChild,
                "call",
                (_5)=>_5({
                        description: `${resolverGroupName}.${resolverName}`,
                        op: "db.graphql.apollo"
                    })
            ]);
            var rv = orig.call(this, ...args);
            if ((0, _utils.isThenable)(rv)) return rv.then((res)=>{
                (0, _buildPolyfills._optionalChain)([
                    span,
                    "optionalAccess",
                    (_6)=>_6.finish,
                    "call",
                    (_7)=>_7()
                ]);
                return res;
            });
            (0, _buildPolyfills._optionalChain)([
                span,
                "optionalAccess",
                (_8)=>_8.finish,
                "call",
                (_9)=>_9()
            ]);
            return rv;
        };
    });
}

},{"@sentry/utils/esm/buildPolyfills":"5m0KU","@sentry/utils":"axZXA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ky4B6","40r8e"], "40r8e", "parcelRequire4685")

//# sourceMappingURL=index.js.map
