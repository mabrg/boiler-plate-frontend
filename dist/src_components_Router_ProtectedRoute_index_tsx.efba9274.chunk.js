"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkboiler_plate_frontend"] = self["webpackChunkboiler_plate_frontend"] || []).push([["src_components_Router_ProtectedRoute_index_tsx"],{

/***/ "./src/components/Router/ProtectedRoute/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/Router/ProtectedRoute/index.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _utils_hooks_useUserAllowedRoles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/hooks/useUserAllowedRoles */ \"./src/components/utils/hooks/useUserAllowedRoles.tsx\");\n/* harmony import */ var _utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/hooks/useUserInfo */ \"./src/components/utils/hooks/useUserInfo.tsx\");\n\nvar __defProp = Object.defineProperty;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __objRest = (source, exclude) => {\n  var target = {};\n  for (var prop in source)\n    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)\n      target[prop] = source[prop];\n  if (source != null && __getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(source)) {\n      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))\n        target[prop] = source[prop];\n    }\n  return target;\n};\n\n\n\n\nconst ProtectedRoute = (_a) => {\n  var _b = _a, {\n    allowedRoles = []\n  } = _b, props = __objRest(_b, [\n    \"allowedRoles\"\n  ]);\n  const { token, user } = (0,_utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_2__.useUserInfo)();\n  const isAuthorized = (0,_utils_hooks_useUserAllowedRoles__WEBPACK_IMPORTED_MODULE_1__.useUserAllowedRoles)(...allowedRoles);\n  if (!token || !user || !(allowedRoles.length === 0 || isAuthorized)) {\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect,\n      {\n        to: {\n          pathname: \"/\"\n        }\n      }\n    );\n  }\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, __spreadValues({}, props));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedRoute);\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/Router/ProtectedRoute/index.tsx?");

/***/ }),

/***/ "./src/components/utils/hooks/useUserAllowedRoles.tsx":
/*!************************************************************!*\
  !*** ./src/components/utils/hooks/useUserAllowedRoles.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUserAllowedRoles\": function() { return /* binding */ useUserAllowedRoles; }\n/* harmony export */ });\n/* harmony import */ var _useUserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUserInfo */ \"./src/components/utils/hooks/useUserInfo.tsx\");\n\n\nfunction useUserAllowedRoles(...roles) {\n  var _a, _b;\n  const userInfo = (0,_useUserInfo__WEBPACK_IMPORTED_MODULE_0__.useUserInfo)();\n  const allowedRoles = (_b = (_a = userInfo.user) == null ? void 0 : _a.allowedRoles) != null ? _b : [];\n  return roles.some((role) => allowedRoles.includes(role));\n}\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/utils/hooks/useUserAllowedRoles.tsx?");

/***/ })

}]);