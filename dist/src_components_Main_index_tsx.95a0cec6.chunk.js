/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkboiler_plate_frontend"] = self["webpackChunkboiler_plate_frontend"] || []).push([["src_components_Main_index_tsx"],{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROUTES_IDS\": function() { return /* binding */ ROUTES_IDS; }\n/* harmony export */ });\nconst ROUTES_IDS = {\n    HOME: 'home',\n    TAB: 'tableau',\n    ADD_CREDIT_CONSENT: 'addCreditConsent',\n  };\n  \n  const config = {\n    apidaeVersion: 'v0',\n    // assetsBaseUrl: ASSETS_BASE_URL,\n    routes: {\n      [ROUTES_IDS.HOME]: {\n        path: '/',\n        title: 'Accueil',\n      },\n      [ROUTES_IDS.TAB]: {\n        path: '/tableau',\n        title: 'Tableau',\n        parent: ROUTES_IDS.HOME,\n      },\n    },\n  };\n  \n  /* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack://boiler-plate-frontend/./config.js?");

/***/ }),

/***/ "./src/components/Layout/Footer/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Layout/Footer/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/react/lib/components/Stack/Stack.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/react/lib/components/Icon/FontIcon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ \"./config.js\");\n\n\n\n\n\nconst Footer = () => {\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"pa-footer\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"inner-footer\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"wrapper-inner\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, { horizontal: true, horizontalAlign: \"space-between\", children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.Stack.Item, { className: \"footer-items\", align: \"center\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", { className: \"footer-items-list\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", { className: \"footer-item\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\n      \"a\",\n      {\n        href: \"https://www.apidae-tourisme.com/\",\n        target: \"_blank\",\n        rel: \"noreferrer\",\n        children: [\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.FontIcon, { iconName: \"Home\", className: \"footer-icon\" }),\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { children: \"Apidae Tourisme\" })\n        ]\n      }\n    ) }) }) }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.Stack.Item, { className: \"footer-legal\", align: \"center\", children: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apidaeVersion && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", { children: `Apidae ${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apidaeVersion}` }) })\n  ] }) }) }) });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Footer));\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/Layout/Footer/index.tsx?");

/***/ }),

/***/ "./src/components/Layout/Header/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Layout/Header/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/react/lib/components/Stack/Stack.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ \"./config.js\");\n/* harmony import */ var _assets_img_logo_apidae_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/logo-apidae.svg */ \"./src/assets/img/logo-apidae.svg\");\n/* harmony import */ var _assets_img_logo_apidae_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_apidae_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks/useUserInfo */ \"./src/components/utils/hooks/useUserInfo.tsx\");\n\n\n\n\n\n\n\n\nconst Header = () => {\n  const { user } = (0,_utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_4__.useUserInfo)();\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"pa-header\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"wrapper-inner\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack.Item, { className: \"col logo-col\", align: \"center\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,\n      {\n        to: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].routes[_config__WEBPACK_IMPORTED_MODULE_2__.ROUTES_IDS.HOME].path,\n        title: \"Afficher la page d'accueil\",\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", { src: (_assets_img_logo_apidae_svg__WEBPACK_IMPORTED_MODULE_3___default()), alt: \"Apidae\", width: 130, className: \"img-logo\" })\n      }\n    ) }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack.Item, { className: \"col menu-asides-col\", align: \"center\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, { horizontal: true, horizontalAlign: \"space-between\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.Stack.Item, { className: \"col menu-col\", align: \"center\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", { children: \" Menu 1 \" }) }) }) })\n  ] }) }) });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Header));\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/Layout/Header/index.tsx?");

/***/ }),

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/font-icons-mdl2/lib/index.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/theme/lib/createTheme.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/style-utilities/lib/index.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/react/lib/components/Fabric/Fabric.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_hooks_useRouteParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks/useRouteParams */ \"./src/components/utils/hooks/useRouteParams.ts\");\n/* harmony import */ var _utils_hooks_useRouteParams__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_hooks_useRouteParams__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./src/components/Layout/Footer/index.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./src/components/Layout/Header/index.tsx\");\n\n\n\n\n\n\n\n(0,_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.initializeIcons)();\nconst globalThemeProps = {\n  defaultFontStyle: {\n    fontFamily: \"poppins, Arial, sans-serif\",\n    fontWeight: \"400\"\n  }\n};\nconst globalTheme = (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.createTheme)(globalThemeProps);\nconst Layout = ({ children }) => {\n  const { parentsIds } = _utils_hooks_useRouteParams__WEBPACK_IMPORTED_MODULE_2___default()();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_7__.loadTheme)(globalTheme);\n  }, [parentsIds]);\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.Fabric, { applyThemeToBody: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"wrapper\", children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"pa-main\", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: \"wrapper-inner\", children }) }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {})\n  ] }) });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/Layout/index.tsx?");

/***/ }),

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Router */ \"./src/components/Router/index.tsx\");\n\n\n\nconst Main = () => {\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Router__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {});\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/Main/index.tsx?");

/***/ }),

/***/ "./src/components/Router/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Router/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ \"./config.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout */ \"./src/components/Layout/index.tsx\");\n/* harmony import */ var _utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks/useUserInfo */ \"./src/components/utils/hooks/useUserInfo.tsx\");\n\n\n\n\n\n\n\nconst Homepage = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ \"src_components_Homepage_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../Homepage */ \"./src/components/Homepage/index.tsx\")));\nconst NotFound = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ \"src_components_NotFound_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../NotFound */ \"./src/components/NotFound/index.tsx\")));\nconst ProtectedRoute = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ \"src_components_Router_ProtectedRoute_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./ProtectedRoute */ \"./src/components/Router/ProtectedRoute/index.tsx\")));\nconst MyRouter = () => {\n  const { token } = (0,_utils_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_4__.useUserInfo)();\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, { children: [\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].routes.home.path, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Homepage, {}) }),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: \"*\", element: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NotFound, {}) })\n  ] }) }) });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyRouter);\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/Router/index.tsx?");

/***/ }),

/***/ "./src/components/utils/hooks/useUserInfo.tsx":
/*!****************************************************!*\
  !*** ./src/components/utils/hooks/useUserInfo.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUserInfo\": function() { return /* binding */ useUserInfo; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet token = \"\";\nlet user;\nlet loading = false;\nfunction useUserInfo() {\n  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    token,\n    user,\n    loading\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    user = {\n      defaultRole: \"ORG_ADMIN\",\n      allowedRoles: [\"ORG_ADMIN\", \"ROLE1\", \"ROLE2\"],\n      email: \"toto@example.com\",\n      name: \"Toto\"\n    };\n    setState({\n      loading,\n      token,\n      user\n    });\n  });\n  return state;\n}\n\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/utils/hooks/useUserInfo.tsx?");

/***/ }),

/***/ "./src/assets/img/logo-apidae.svg":
/*!****************************************!*\
  !*** ./src/assets/img/logo-apidae.svg ***!
  \****************************************/
/***/ (function() {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\" standalone=\\\"no\\\"?>\\n| <!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 1.1//EN\\\" \\\"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\\\">\\n| <svg width=\\\"100%\\\" height=\\\"100%\\\" viewBox=\\\"0 0 756 263\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xml:space=\\\"preserve\\\" xmlnsSerif=\\\"http://www.serif.com/\\\" style=\\\"fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;\\\">\");\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/assets/img/logo-apidae.svg?");

/***/ }),

/***/ "./src/components/utils/hooks/useRouteParams.ts":
/*!******************************************************!*\
  !*** ./src/components/utils/hooks/useRouteParams.ts ***!
  \******************************************************/
/***/ (function() {

eval("throw new Error(\"Module parse failed: Unexpected token (8:25)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| import { IRouterParams } from './useRouteParams.d';\\n| \\n> const getParentsIds = (id: string): string[] => {\\n|   return id\\n|     ? [...getParentsIds(get(config.routes, `${id}.parent`, '') as string), id]\");\n\n//# sourceURL=webpack://boiler-plate-frontend/./src/components/utils/hooks/useRouteParams.ts?");

/***/ })

}]);