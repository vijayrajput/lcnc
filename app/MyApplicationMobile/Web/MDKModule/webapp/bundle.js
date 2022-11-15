(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/MyApplicationMobile/i18n/i18n.properties":
/*!********************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/i18n/i18n.properties ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "Draft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\n"

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Styles/Styles.css":
/*!*****************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Styles/Styles.css ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n", "",{"version":3,"sources":["webpack://./build.definitions/MyApplicationMobile/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Styles/Styles.less":
/*!******************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Styles/Styles.less ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/", "",{"version":3,"sources":["webpack://./build.definitions/MyApplicationMobile/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Styles/Styles.nss":
/*!*****************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Styles/Styles.nss ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/AppUpdateFailure.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/AppUpdateFailure.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/MyApplicationMobile/Actions/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/AppUpdateSuccess.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/AppUpdateSuccess.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MyApplicationMobile/Actions/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MyApplicationMobile/Actions/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/Books/Books_Cancel.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/Books/Books_Cancel.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplicationMobile/Services/service1.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/MyApplicationMobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/MyApplicationMobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplicationMobile/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/Books/Books_CreateEntity.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/Books/Books_CreateEntity.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplicationMobile/Services/service1.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/MyApplicationMobile/Actions/Books/Books_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MyApplicationMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Books',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplicationMobile/Actions/Books/Books_CreateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/Books/Books_DeleteConfirmation.js":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/Books/Books_DeleteConfirmation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/MyApplicationMobile/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MyApplicationMobile/Actions/Books/Books_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/Books/Books_UpdateEntity.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/Books/Books_UpdateEntity.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplicationMobile/Services/service1.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/MyApplicationMobile/Actions/Books/Books_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplicationMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Books'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplicationMobile/Actions/Books/Books_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/Books/NavToBooks_Edit.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/Books/NavToBooks_Edit.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplicationMobile/Services/service1.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/MyApplicationMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/MyApplicationMobile/Actions/Books/NavToBooks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplicationMobile/Actions/Books/NavToBooks_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Rules/OnWillUpdate.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Rules/OnWillUpdate.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/MyApplicationMobile/Actions/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Styles/Styles.json":
/*!******************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Styles/Styles.json ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/jsconfig.json":
/*!*************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/jsconfig.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let myapplicationmobile_actions_appupdate_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/AppUpdate.action */ "./build.definitions/MyApplicationMobile/Actions/AppUpdate.action")
let myapplicationmobile_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/AppUpdateFailureMessage.action */ "./build.definitions/MyApplicationMobile/Actions/AppUpdateFailureMessage.action")
let myapplicationmobile_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/AppUpdateProgressBanner.action */ "./build.definitions/MyApplicationMobile/Actions/AppUpdateProgressBanner.action")
let myapplicationmobile_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/MyApplicationMobile/Actions/AppUpdateSuccessMessage.action")
let myapplicationmobile_actions_books_books_createentity_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Books/Books_CreateEntity.action */ "./build.definitions/MyApplicationMobile/Actions/Books/Books_CreateEntity.action")
let myapplicationmobile_actions_books_books_deleteentity_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Books/Books_DeleteEntity.action */ "./build.definitions/MyApplicationMobile/Actions/Books/Books_DeleteEntity.action")
let myapplicationmobile_actions_books_books_updateentity_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Books/Books_UpdateEntity.action */ "./build.definitions/MyApplicationMobile/Actions/Books/Books_UpdateEntity.action")
let myapplicationmobile_actions_books_navtobooks_create_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Books/NavToBooks_Create.action */ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Create.action")
let myapplicationmobile_actions_books_navtobooks_detail_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Books/NavToBooks_Detail.action */ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Detail.action")
let myapplicationmobile_actions_books_navtobooks_edit_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Books/NavToBooks_Edit.action */ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Edit.action")
let myapplicationmobile_actions_books_navtobooks_list_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Books/NavToBooks_List.action */ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_List.action")
let myapplicationmobile_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/CloseModalPage_Cancel.action */ "./build.definitions/MyApplicationMobile/Actions/CloseModalPage_Cancel.action")
let myapplicationmobile_actions_closemodalpage_complete_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/CloseModalPage_Complete.action */ "./build.definitions/MyApplicationMobile/Actions/CloseModalPage_Complete.action")
let myapplicationmobile_actions_closepage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/ClosePage.action */ "./build.definitions/MyApplicationMobile/Actions/ClosePage.action")
let myapplicationmobile_actions_createentityfailuremessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/CreateEntityFailureMessage.action */ "./build.definitions/MyApplicationMobile/Actions/CreateEntityFailureMessage.action")
let myapplicationmobile_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/MyApplicationMobile/Actions/CreateEntitySuccessMessage.action")
let myapplicationmobile_actions_deleteconfirmation_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/DeleteConfirmation.action */ "./build.definitions/MyApplicationMobile/Actions/DeleteConfirmation.action")
let myapplicationmobile_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/MyApplicationMobile/Actions/DeleteEntityFailureMessage.action")
let myapplicationmobile_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/MyApplicationMobile/Actions/DeleteEntitySuccessMessage.action")
let myapplicationmobile_actions_draftdiscardentity_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/DraftDiscardEntity.action */ "./build.definitions/MyApplicationMobile/Actions/DraftDiscardEntity.action")
let myapplicationmobile_actions_drafteditentity_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/DraftEditEntity.action */ "./build.definitions/MyApplicationMobile/Actions/DraftEditEntity.action")
let myapplicationmobile_actions_draftsaveentity_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/DraftSaveEntity.action */ "./build.definitions/MyApplicationMobile/Actions/DraftSaveEntity.action")
let myapplicationmobile_actions_logout_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Logout.action */ "./build.definitions/MyApplicationMobile/Actions/Logout.action")
let myapplicationmobile_actions_onwillupdate_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/OnWillUpdate.action */ "./build.definitions/MyApplicationMobile/Actions/OnWillUpdate.action")
let myapplicationmobile_actions_service_initializeonline_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Service/InitializeOnline.action */ "./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnline.action")
let myapplicationmobile_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnlineFailureMessage.action")
let myapplicationmobile_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnlineSuccessMessage.action")
let myapplicationmobile_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/MyApplicationMobile/Actions/UpdateEntityFailureMessage.action")
let myapplicationmobile_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action")
let myapplicationmobile_globals_appdefinition_version_global = __webpack_require__(/*! ./MyApplicationMobile/Globals/AppDefinition_Version.global */ "./build.definitions/MyApplicationMobile/Globals/AppDefinition_Version.global")
let myapplicationmobile_i18n_i18n_properties = __webpack_require__(/*! ./MyApplicationMobile/i18n/i18n.properties */ "./build.definitions/MyApplicationMobile/i18n/i18n.properties")
let myapplicationmobile_jsconfig_json = __webpack_require__(/*! ./MyApplicationMobile/jsconfig.json */ "./build.definitions/MyApplicationMobile/jsconfig.json")
let myapplicationmobile_pages_books_books_create_page = __webpack_require__(/*! ./MyApplicationMobile/Pages/Books/Books_Create.page */ "./build.definitions/MyApplicationMobile/Pages/Books/Books_Create.page")
let myapplicationmobile_pages_books_books_detail_page = __webpack_require__(/*! ./MyApplicationMobile/Pages/Books/Books_Detail.page */ "./build.definitions/MyApplicationMobile/Pages/Books/Books_Detail.page")
let myapplicationmobile_pages_books_books_edit_page = __webpack_require__(/*! ./MyApplicationMobile/Pages/Books/Books_Edit.page */ "./build.definitions/MyApplicationMobile/Pages/Books/Books_Edit.page")
let myapplicationmobile_pages_books_books_list_page = __webpack_require__(/*! ./MyApplicationMobile/Pages/Books/Books_List.page */ "./build.definitions/MyApplicationMobile/Pages/Books/Books_List.page")
let myapplicationmobile_rules_appupdatefailure_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/AppUpdateFailure.js */ "./build.definitions/MyApplicationMobile/Rules/AppUpdateFailure.js")
let myapplicationmobile_rules_appupdatesuccess_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/AppUpdateSuccess.js */ "./build.definitions/MyApplicationMobile/Rules/AppUpdateSuccess.js")
let myapplicationmobile_rules_books_books_cancel_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/Books/Books_Cancel.js */ "./build.definitions/MyApplicationMobile/Rules/Books/Books_Cancel.js")
let myapplicationmobile_rules_books_books_createentity_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/Books/Books_CreateEntity.js */ "./build.definitions/MyApplicationMobile/Rules/Books/Books_CreateEntity.js")
let myapplicationmobile_rules_books_books_deleteconfirmation_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/Books/Books_DeleteConfirmation.js */ "./build.definitions/MyApplicationMobile/Rules/Books/Books_DeleteConfirmation.js")
let myapplicationmobile_rules_books_books_updateentity_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/Books/Books_UpdateEntity.js */ "./build.definitions/MyApplicationMobile/Rules/Books/Books_UpdateEntity.js")
let myapplicationmobile_rules_books_navtobooks_edit_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/Books/NavToBooks_Edit.js */ "./build.definitions/MyApplicationMobile/Rules/Books/NavToBooks_Edit.js")
let myapplicationmobile_rules_onwillupdate_js = __webpack_require__(/*! ./MyApplicationMobile/Rules/OnWillUpdate.js */ "./build.definitions/MyApplicationMobile/Rules/OnWillUpdate.js")
let myapplicationmobile_services_service1_service = __webpack_require__(/*! ./MyApplicationMobile/Services/service1.service */ "./build.definitions/MyApplicationMobile/Services/service1.service")
let myapplicationmobile_styles_styles_css = __webpack_require__(/*! ./MyApplicationMobile/Styles/Styles.css */ "./build.definitions/MyApplicationMobile/Styles/Styles.css")
let myapplicationmobile_styles_styles_json = __webpack_require__(/*! ./MyApplicationMobile/Styles/Styles.json */ "./build.definitions/MyApplicationMobile/Styles/Styles.json")
let myapplicationmobile_styles_styles_less = __webpack_require__(/*! ./MyApplicationMobile/Styles/Styles.less */ "./build.definitions/MyApplicationMobile/Styles/Styles.less")
let myapplicationmobile_styles_styles_nss = __webpack_require__(/*! ./MyApplicationMobile/Styles/Styles.nss */ "./build.definitions/MyApplicationMobile/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	myapplicationmobile_actions_appupdate_action : myapplicationmobile_actions_appupdate_action,
	myapplicationmobile_actions_appupdatefailuremessage_action : myapplicationmobile_actions_appupdatefailuremessage_action,
	myapplicationmobile_actions_appupdateprogressbanner_action : myapplicationmobile_actions_appupdateprogressbanner_action,
	myapplicationmobile_actions_appupdatesuccessmessage_action : myapplicationmobile_actions_appupdatesuccessmessage_action,
	myapplicationmobile_actions_books_books_createentity_action : myapplicationmobile_actions_books_books_createentity_action,
	myapplicationmobile_actions_books_books_deleteentity_action : myapplicationmobile_actions_books_books_deleteentity_action,
	myapplicationmobile_actions_books_books_updateentity_action : myapplicationmobile_actions_books_books_updateentity_action,
	myapplicationmobile_actions_books_navtobooks_create_action : myapplicationmobile_actions_books_navtobooks_create_action,
	myapplicationmobile_actions_books_navtobooks_detail_action : myapplicationmobile_actions_books_navtobooks_detail_action,
	myapplicationmobile_actions_books_navtobooks_edit_action : myapplicationmobile_actions_books_navtobooks_edit_action,
	myapplicationmobile_actions_books_navtobooks_list_action : myapplicationmobile_actions_books_navtobooks_list_action,
	myapplicationmobile_actions_closemodalpage_cancel_action : myapplicationmobile_actions_closemodalpage_cancel_action,
	myapplicationmobile_actions_closemodalpage_complete_action : myapplicationmobile_actions_closemodalpage_complete_action,
	myapplicationmobile_actions_closepage_action : myapplicationmobile_actions_closepage_action,
	myapplicationmobile_actions_createentityfailuremessage_action : myapplicationmobile_actions_createentityfailuremessage_action,
	myapplicationmobile_actions_createentitysuccessmessage_action : myapplicationmobile_actions_createentitysuccessmessage_action,
	myapplicationmobile_actions_deleteconfirmation_action : myapplicationmobile_actions_deleteconfirmation_action,
	myapplicationmobile_actions_deleteentityfailuremessage_action : myapplicationmobile_actions_deleteentityfailuremessage_action,
	myapplicationmobile_actions_deleteentitysuccessmessage_action : myapplicationmobile_actions_deleteentitysuccessmessage_action,
	myapplicationmobile_actions_draftdiscardentity_action : myapplicationmobile_actions_draftdiscardentity_action,
	myapplicationmobile_actions_drafteditentity_action : myapplicationmobile_actions_drafteditentity_action,
	myapplicationmobile_actions_draftsaveentity_action : myapplicationmobile_actions_draftsaveentity_action,
	myapplicationmobile_actions_logout_action : myapplicationmobile_actions_logout_action,
	myapplicationmobile_actions_onwillupdate_action : myapplicationmobile_actions_onwillupdate_action,
	myapplicationmobile_actions_service_initializeonline_action : myapplicationmobile_actions_service_initializeonline_action,
	myapplicationmobile_actions_service_initializeonlinefailuremessage_action : myapplicationmobile_actions_service_initializeonlinefailuremessage_action,
	myapplicationmobile_actions_service_initializeonlinesuccessmessage_action : myapplicationmobile_actions_service_initializeonlinesuccessmessage_action,
	myapplicationmobile_actions_updateentityfailuremessage_action : myapplicationmobile_actions_updateentityfailuremessage_action,
	myapplicationmobile_actions_updateentitysuccessmessage_action : myapplicationmobile_actions_updateentitysuccessmessage_action,
	myapplicationmobile_globals_appdefinition_version_global : myapplicationmobile_globals_appdefinition_version_global,
	myapplicationmobile_i18n_i18n_properties : myapplicationmobile_i18n_i18n_properties,
	myapplicationmobile_jsconfig_json : myapplicationmobile_jsconfig_json,
	myapplicationmobile_pages_books_books_create_page : myapplicationmobile_pages_books_books_create_page,
	myapplicationmobile_pages_books_books_detail_page : myapplicationmobile_pages_books_books_detail_page,
	myapplicationmobile_pages_books_books_edit_page : myapplicationmobile_pages_books_books_edit_page,
	myapplicationmobile_pages_books_books_list_page : myapplicationmobile_pages_books_books_list_page,
	myapplicationmobile_rules_appupdatefailure_js : myapplicationmobile_rules_appupdatefailure_js,
	myapplicationmobile_rules_appupdatesuccess_js : myapplicationmobile_rules_appupdatesuccess_js,
	myapplicationmobile_rules_books_books_cancel_js : myapplicationmobile_rules_books_books_cancel_js,
	myapplicationmobile_rules_books_books_createentity_js : myapplicationmobile_rules_books_books_createentity_js,
	myapplicationmobile_rules_books_books_deleteconfirmation_js : myapplicationmobile_rules_books_books_deleteconfirmation_js,
	myapplicationmobile_rules_books_books_updateentity_js : myapplicationmobile_rules_books_books_updateentity_js,
	myapplicationmobile_rules_books_navtobooks_edit_js : myapplicationmobile_rules_books_navtobooks_edit_js,
	myapplicationmobile_rules_onwillupdate_js : myapplicationmobile_rules_onwillupdate_js,
	myapplicationmobile_services_service1_service : myapplicationmobile_services_service1_service,
	myapplicationmobile_styles_styles_css : myapplicationmobile_styles_styles_css,
	myapplicationmobile_styles_styles_json : myapplicationmobile_styles_styles_json,
	myapplicationmobile_styles_styles_less : myapplicationmobile_styles_styles_less,
	myapplicationmobile_styles_styles_nss : myapplicationmobile_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Pages/Books/Books_Create.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Pages/Books/Books_Create.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MyApplicationMobile/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/MyApplicationMobile/Rules/Books/Books_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Books Detail","Controls":[{"Sections":[{"Controls":[{"Caption":"name","_Name":"name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","KeyboardType":"Number","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"FormCellContainer","_Type":"Control.Type.FormCellContainer"}],"_Type":"Page","_Name":"Books_Create"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Pages/Books/Books_Detail.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Pages/Books/Books_Detail.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Books Detail","DesignTimeTarget":{"Service":"/MyApplicationMobile/Services/service1.service","EntitySet":"Books","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MyApplicationMobile/Rules/Books/NavToBooks_Edit.js","Position":"Right","SystemItem":"Edit"},{"OnPress":"/MyApplicationMobile/Rules/Books/Books_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{name}","Subhead":"{price}","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"name","Value":"{name}"},{"KeyName":"price","Value":"{price}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Books_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Pages/Books/Books_Edit.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Pages/Books/Books_Edit.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Books Detail","DesignTimeTarget":{"Service":"/MyApplicationMobile/Services/service1.service","EntitySet":"Books","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MyApplicationMobile/Rules/Books/Books_Cancel.js"},{"Position":"Right","SystemItem":"Save","OnPress":"/MyApplicationMobile/Rules/Books/Books_UpdateEntity.js"}]},"Controls":[{"Sections":[{"Caption":"","Controls":[{"Caption":"name","_Name":"name","Value":"{name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"PageOneFormCell","_Type":"Control.Type.FormCellContainer"}],"_Type":"Page","_Name":"Books_Edit"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Pages/Books/Books_List.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Pages/Books/Books_List.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Books","ActionBar":{"Items":[{"OnPress":"/MyApplicationMobile/Actions/Books/NavToBooks_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/MyApplicationMobile/Actions/Books/NavToBooks_Detail.action","StatusImage":"","Title":"{name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{price}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Books","Service":"/MyApplicationMobile/Services/service1.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","ToolBar":{"Items":[{"_Name":"LogoutToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Logout","OnPress":"/MyApplicationMobile/Actions/Logout.action"}]},"_Name":"Books_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"MyApplicationMobile","Version":"/MyApplicationMobile/Globals/AppDefinition_Version.global","MainPage":"/MyApplicationMobile/Pages/Books/Books_List.page","OnLaunch":["/MyApplicationMobile/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/MyApplicationMobile/Rules/OnWillUpdate.js","OnDidUpdate":"/MyApplicationMobile/Actions/Service/InitializeOnline.action","Styles":"/MyApplicationMobile/Styles/Styles.less","Localization":"/MyApplicationMobile/i18n/i18n.properties","_SchemaVersion":"6.3","StyleSheets":{"Styles":{"css":"/MyApplicationMobile/Styles/Styles.css","ios":"/MyApplicationMobile/Styles/Styles.nss","android":"/MyApplicationMobile/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/AppUpdate.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/AppUpdate.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/MyApplicationMobile/Rules/AppUpdateFailure.js","OnSuccess":"/MyApplicationMobile/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/AppUpdateFailureMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/AppUpdateFailureMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/AppUpdateProgressBanner.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/AppUpdateProgressBanner.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/MyApplicationMobile/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/AppUpdateSuccessMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/AppUpdateSuccessMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Books/Books_CreateEntity.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Books/Books_CreateEntity.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/MyApplicationMobile/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MyApplicationMobile/Actions/CreateEntitySuccessMessage.action","Properties":{"name":"#Control:name/#Value","price":"#Control:price/#Value"},"Target":{"EntitySet":"Books","Service":"/MyApplicationMobile/Services/service1.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Books/Books_DeleteEntity.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Books/Books_DeleteEntity.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Books","Service":"/MyApplicationMobile/Services/service1.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MyApplicationMobile/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MyApplicationMobile/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Books/Books_UpdateEntity.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Books/Books_UpdateEntity.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Books","Service":"/MyApplicationMobile/Services/service1.service","ReadLink":"{@odata.readLink}"},"Properties":{"name":"#Control:name/#Value","price":"#Control:price/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MyApplicationMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Create.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Create.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplicationMobile/Pages/Books/Books_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Detail.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Detail.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplicationMobile/Pages/Books/Books_Detail.page"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Edit.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_Edit.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MyApplicationMobile/Pages/Books/Books_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_List.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Books/NavToBooks_List.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MyApplicationMobile/Pages/Books/Books_List.page"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/CloseModalPage_Cancel.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/CloseModalPage_Cancel.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/CloseModalPage_Complete.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/CloseModalPage_Complete.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/ClosePage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/ClosePage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/CreateEntityFailureMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/CreateEntityFailureMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/CreateEntitySuccessMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/CreateEntitySuccessMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/MyApplicationMobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/DeleteConfirmation.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/DeleteConfirmation.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/DeleteEntityFailureMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/DeleteEntityFailureMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/DeleteEntitySuccessMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/DeleteEntitySuccessMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MyApplicationMobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/DraftDiscardEntity.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/DraftDiscardEntity.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Discard","Target":{"Service":"/MyApplicationMobile/Services/service1.service","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Discarded"}},"OnFailure":"/MyApplicationMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/DraftEditEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/DraftEditEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Edit","Target":{"Service":"/MyApplicationMobile/Services/service1.service","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Edit"}},"OnFailure":"/MyApplicationMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/DraftSaveEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/DraftSaveEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Save","Target":{"Service":"/MyApplicationMobile/Services/service1.service","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Saved"}},"OnFailure":"/MyApplicationMobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Logout.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Logout.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/OnWillUpdate.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/OnWillUpdate.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnline.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnline.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/MyApplicationMobile/Services/service1.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/MyApplicationMobile/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/MyApplicationMobile/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnlineFailureMessage.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/UpdateEntityFailureMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/UpdateEntityFailureMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Actions/UpdateEntitySuccessMessage.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MyApplicationMobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Globals/AppDefinition_Version.global":
/*!************************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Globals/AppDefinition_Version.global ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MyApplicationMobile/Services/service1.service":
/*!*************************************************************************!*\
  !*** ./build.definitions/MyApplicationMobile/Services/service1.service ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../service/BASApp/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "1.1\n"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map