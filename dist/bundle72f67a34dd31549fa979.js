/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/chicken-nuggets.jpg */ "./src/assets/chicken-nuggets.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mitr&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 170px 6fr 150px;\n  font-family: \"Mitr\", sans-serif;\n  background-color: #EEF327;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n}\n\nul {\n  list-style: none;\n  align-self: end;\n  padding-bottom: 15px;\n}\n\nli {\n  margin-left: 50px;\n  font: 1.563rem bolder;\n  font-family: \"Mitr\", sans-serif;\n  color: inherit;\n  text-decoration: underline 3px rgba(109, 178, 63, 0);\n  transition: text-decoration-color 300ms;\n}\n\nli:hover {\n  color: #6DB23F;\n  text-decoration-color: rgb(109, 178, 63);\n  cursor: pointer;\n}\n\n.home {\n  display: flex;\n  align-items: center;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  background-size: cover;\n  height: 90vh;\n}\n\n.info-box {\n  margin-left: 300px;\n  background-color: #000000;\n  color: #ffffff;\n  opacity: 0.85;\n  padding: 30px 40px;\n  max-width: 700px;\n}\n\n.info-box > p {\n  font-size: 1.25rem;\n}\n\n.menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.menu-box {\n  max-width: 1500px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  grid-gap: 35px;\n  padding: 50px 0 100px;\n}\n\n.menu-tiles {\n  /*display: flex;*/\n  /*flex-direction: column;*/\n}\n\n.menu-img {\n  border: solid 1px #cecece;\n  border-bottom: none;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n}\n\n.menu-text {\n  border: solid 1px #cecece;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border-top: none;\n  padding: 15px;\n}\n\nimg {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius: 25px;\n}\n\n.menu > h2, .menu > p {\n  /*align-self: baseline;*/\n}\n\nh1 {\n  color: #6DB23F;\n  font-size: 3.052rem;\n}\n\nh2 {\n  font-size: 3.815rem;\n}\n\nmain {\n  background-color: #ffffff;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: #000000;\n}\n\n.contact > h2 {\n  color: #ffffff;\n  padding: 40px;\n}\n\n.contact-info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ffffff;\n  height: 890px;\n  width: 70%;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #EEF327;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  position: relative;\n  bottom: 40px;\n}\n\n.tab-list {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AACA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AACJ;;AAEA;EACI,aAAA;EACA,mCAAA;EACA,+BAAA;EACA,yBAAA;AACJ;;AAGA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,8BAAA;EACA,UAAA;AAAJ;;AAIA;EACI,gBAAA;EACA,eAAA;EACA,oBAAA;AADJ;;AAIA;EACI,iBAAA;EACA,qBAAA;EACA,+BAAA;EACA,cAAA;EACA,oDAAA;EACA,uCAAA;AADJ;;AAIA;EACI,cAAA;EACA,wCAAA;EACA,eAAA;AADJ;;AAIA;EACI,aAAA;EACA,mBAAA;EACA,iFAAA;EACA,sBAAA;EACA,YAAA;AADJ;;AAIA;EACI,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;AADJ;;AAIA;EACI,kBAAA;AADJ;;AAIA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AADJ;;AAIA;EACI,iBAAA;EACA,aAAA;EACA,4DAAA;EACA,cAAA;EACA,qBAAA;AADJ;;AAIA;EACI,iBAAA;EACA,0BAAA;AADJ;;AAIA;EACI,yBAAA;EACA,mBAAA;EACA,6BAAA;EACA,4BAAA;AADJ;;AAIA;EACI,yBAAA;EACA,+BAAA;EACA,gCAAA;EACA,gBAAA;EACA,aAAA;AADJ;;AAIA;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,wBAAA;AADJ;;AAKA;EACI,cAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,mBAAA;AAFJ;;AAKA;EACI,yBAAA;AAFJ;;AAKA;EACI,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;AAFJ;;AAKA;EACI,cAAA;EACA,aAAA;AAFJ;;AAKA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,aAAA;EACA,UAAA;AAFJ;;AAKA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,4BAAA;EACA,6BAAA;EACA,kBAAA;EACA,YAAA;AAFJ;;AAKA;EACI,aAAA;AAFJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 170px 6fr 150px;\n    font-family: 'Mitr', sans-serif;\n    background-color: #EEF327;\n\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #ffffff;\n}\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    width: 80%;\n\n}\n\nul {\n    list-style: none;\n    align-self: end;\n    padding-bottom: 15px;\n}\n\nli {\n    margin-left: 50px;\n    font: 1.563rem bolder;\n    font-family: 'Mitr', sans-serif;\n    color: inherit;\n    text-decoration: underline 3px rgba(109, 178, 63, 0);\n    transition: text-decoration-color 300ms;\n}\n\nli:hover {\n    color: #6DB23F;\n    text-decoration-color: rgba(109, 178, 63, 1);\n    cursor: pointer;\n}\n\n.home {\n    display: flex;\n    align-items: center;\n    background: url(\"../assets/chicken-nuggets.jpg\") no-repeat center center fixed;\n    background-size: cover;\n    height: 90vh;\n}\n\n.info-box {\n    margin-left: 300px;\n    background-color: #000000;\n    color: #ffffff;\n    opacity: .85;\n    padding: 30px 40px;\n    max-width: 700px;\n}\n\n.info-box > p {\n    font-size: 1.25rem;\n}\n\n.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.menu-box {\n    max-width: 1500px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n    grid-gap: 35px;\n    padding: 50px 0 100px ;\n}\n\n.menu-tiles {\n    /*display: flex;*/\n    /*flex-direction: column;*/\n}\n\n.menu-img {\n    border: solid 1px #cecece;\n    border-bottom: none;\n    border-top-right-radius: 25px;\n    border-top-left-radius: 25px;\n}\n\n.menu-text {\n    border: solid 1px #cecece;\n    border-bottom-left-radius: 25px;\n    border-bottom-right-radius: 25px;\n    border-top: none;\n    padding: 15px;\n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n    border-radius: 25px;\n}\n\n.menu > h2, .menu > p {\n    /*align-self: baseline;*/\n\n}\n\nh1 {\n    color: #6DB23F;\n    font-size: 3.052rem\n}\n\nh2 {\n    font-size: 3.815rem;\n}\n\nmain {\n    background-color: #ffffff\n}\n\n.contact {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    background-color: #000000;\n}\n\n.contact > h2 {\n    color: #ffffff;\n    padding: 40px;\n}\n\n.contact-info {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #ffffff;\n    height: 890px;\n    width: 70%\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #EEF327;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 50px;\n    position: relative;\n    bottom: 40px;\n}\n\n.tab-list {\n    display: flex\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleContact": () => (/* binding */ toggleContact)
/* harmony export */ });
function toggleContact() {
    const myContent = document.querySelector('#content');
    const myContact = document.querySelector('.contact');
    myContent.removeChild(myContent.firstElementChild);
    const article = document.createElement('article');
    article.className = 'contact';
    const headerOne = document.createElement('h2');
    headerOne.textContent = 'GET IN TOUCH';
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    const headerTwo = document.createElement('h2');
    headerTwo.textContent = 'Have a question?';
    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'CONTACT DETAILS GO HERE';
    const contentDiv = document.getElementById('content');
    contactInfo.appendChild(headerTwo);
    contactInfo.appendChild(paragraphOne);
    article.appendChild(headerOne);
    article.appendChild(contactInfo);
    contentDiv.appendChild(article);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleHome": () => (/* binding */ toggleHome)
/* harmony export */ });
function toggleHome() {
    const myContent = document.querySelector('#content');
    const myContact = document.querySelector('.contact');
    myContent.removeChild(myContent.firstElementChild);
    const article = document.createElement('article');
    article.className = 'home';
    const infoBox = document.createElement('info-box');
    infoBox.className = 'info-box';
    const headerTwo = document.createElement('h2');
    headerTwo.textContent = 'BEST NUGGETS EVER';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
    const contentDiv = document.getElementById('content');
    contentDiv.append(article);
    article.append(infoBox);
    infoBox.append(headerTwo);
    infoBox.append(paragraph);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleMenu": () => (/* binding */ toggleMenu)
/* harmony export */ });
function toggleMenu() {
    const article = document.createElement('article');
    const menuBox = document.createElement('div');
    const myContent = document.querySelector('#content');
    const headerTwo = document.createElement('h2');
    const paragraph = document.createElement('p');
    menuBox.className = 'menu-box';
    article.className = 'menu';
    headerTwo.textContent = 'Nuggets';
    paragraph.textContent = 'Our custom 100% blend, never frozen, no hormones or antibiotics ever, humanely raised and grazed in the USA';
    article.appendChild(headerTwo);
    article.appendChild(paragraph);
    article.appendChild(menuBox);
    myContent.removeChild(myContent.firstElementChild);
    myContent.appendChild(article);

    let subHeader1 = document.createElement('h4')
    subHeader1.textContent = 'Small Chicken Nuggets'
    let paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price1 = document.createElement('p');
    price1.textContent = '$3.39 · 230 cals';


    let subHeader2 = document.createElement('h4')
    subHeader2.textContent = 'Medium Chicken Nuggets'
    let paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price2 = document.createElement('p');
    price2.textContent = '$4.39 · 300 cals';

    let subHeader3 = document.createElement('h4')
    subHeader3.textContent = 'Large Chicken Nuggets'
    let paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price3 = document.createElement('p');
    price3.textContent = '$6.39 · 600 cals';

    let subHeader4 = document.createElement('h4')
    subHeader4.textContent = 'Extra-Large Chicken Nuggets'
    let paragraph4 = document.createElement('p');
    paragraph4.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price4 = document.createElement('p');
    price4.textContent = '$8.39 · 900 cals';

    let subHeader5 = document.createElement('h4')
    subHeader5.textContent = 'Kids Chicken Nuggets'
    let paragraph5 = document.createElement('p');
    paragraph5.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price5 = document.createElement('p');
    price5.textContent = '$2.39 · 170 cals';

    let subHeader6 = document.createElement('h4')
    subHeader6.textContent = 'Extra Chicken Nuggets'
    let paragraph6 = document.createElement('p');
    paragraph6.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price6 = document.createElement('p');
    price6.textContent = '$1.39 · 120 cals';

    let subHeader7 = document.createElement('h4')
    subHeader7.textContent = 'Side of Chicken Nuggets'
    let paragraph7 = document.createElement('p');
    paragraph7.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price7 = document.createElement('p');
    price7.textContent = '$3.39 · 240 cals';

    let subHeader9 = document.createElement('h4')
    subHeader9.textContent = 'Chicken Nuggets w/side of Chicken Nuggets'
    let paragraph9 = document.createElement('p');
    paragraph9.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price9 = document.createElement('p');
    price9.textContent = '$12.39 · 840 cals';

    let subHeader8 = document.createElement('h4')
    subHeader8.textContent = 'Party-Platter Chicken Nuggets'
    let paragraph8 = document.createElement('p');
    paragraph8.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price8 = document.createElement('p');
    price8.textContent = '$40.39 · 300 cals';

    const menuList = [
        [subHeader1, paragraph1, price1],
        [subHeader2, paragraph2, price2],
        [subHeader3, paragraph3, price3],
        [subHeader4, paragraph4, price4],
        [subHeader5, paragraph5, price5],
        [subHeader6, paragraph6, price6],
        [subHeader7, paragraph7, price7],
        [subHeader8, paragraph8, price8],
        [subHeader9, paragraph9, price9]
    ];



    for (let x = 0; x < 9; x++) {
        let menuTile = document.createElement('div');
        menuTile.className = 'menu-tiles';

        menuBox.appendChild(menuTile);

        let menuImg = document.createElement('div');
        menuImg.className = 'menu-img';
        let image = document.createElement('img');
        image.src = '../src/assets/menu-nuggets1.jpg';
        image.alt = 'Delicious looking nuggets';
        menuImg.appendChild(image);

        let menuText = document.createElement('div');
        menuText.className = 'menu-text';


        menuTile.appendChild(menuImg);
        menuTile.appendChild(menuText);

        for (let y = 0; y < 3; y++)
            menuText.appendChild(menuList[x][y])
    }
}

/***/ }),

/***/ "./src/assets/chicken-nuggets.jpg":
/*!****************************************!*\
  !*** ./src/assets/chicken-nuggets.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chicken-nuggets.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.toggleHome)();
const tabList = document.querySelector('.tab-list');
tabList.addEventListener('click', (e) => {
    if (e.target.id === 'home') {
        (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.toggleHome)();
    } else if (e.target.id === 'contact') {
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.toggleContact)();
    } else if (e.target.id === 'menu') {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.toggleMenu)();
    }
});




})();

/******/ })()
;
//# sourceMappingURL=bundle72f67a34dd31549fa979.js.map