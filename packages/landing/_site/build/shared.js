var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../shared/index.js
var require_shared = __commonJS({
  "../shared/index.js"(exports) {
    exports.hey = function hey() {
      console.log("G");
      var hey2 = "FFFF";
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
  }
});

// shared.js
var require_shared2 = __commonJS({
  "shared.js"(exports, module) {
    var shared = require_shared();
    module.exports = shared;
  }
});
export default require_shared2();
