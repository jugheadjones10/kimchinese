var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../shared/index.js
var require_shared = __commonJS({
  "../shared/index.js"(exports, module) {
    module.exports = function hey() {
      console.log("G");
    };
  }
});

// shared.js
var require_shared2 = __commonJS({
  "shared.js"(exports) {
    var shared = require_shared();
    exports.shared = shared;
  }
});
export default require_shared2();
