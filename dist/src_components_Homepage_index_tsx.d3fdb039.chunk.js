"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkboiler_plate_frontend"] = self["webpackChunkboiler_plate_frontend"] || []).push([["src_components_Homepage_index_tsx"],{

/***/ "./src/components/Homepage/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Homepage/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks/useUserInfo */ \"./src/components/utils/hooks/useUserInfo.tsx\");\n\n\n\nconst Homepage = () => {\n  const { user } = (0,_utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_1__.useUserInfo)();\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", { children: \"Hello World Boys !\" }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", { children: \"Homepage\" }) }),\n    user && user.name\n  ] });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/Homepage/index.tsx?");

/***/ })

}]);