"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout/edit/[id]/page",{

/***/ "(app-pages-browser)/./app/layout/edit/[id]/page.tsx":
/*!***************************************!*\
  !*** ./app/layout/edit/[id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.snow.css */ \"(app-pages-browser)/./node_modules/.pnpm/quill@2.0.3/node_modules/quill/dist/quill.snow.css\");\n/* harmony import */ var _page_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.scss */ \"(app-pages-browser)/./app/layout/edit/[id]/page.scss\");\n/* harmony import */ var _barrel_optimize_names_Button_DatePicker_Input_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,DatePicker,Input!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_DatePicker_Input_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,DatePicker,Input!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/date-picker/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_DatePicker_Input_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,DatePicker,Input!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Edit() {\n    _s();\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const Quill = (__webpack_require__(/*! quill */ \"(app-pages-browser)/./node_modules/.pnpm/quill@2.0.3/node_modules/quill/quill.js\")[\"default\"]);\n        const quill = new Quill(\"#editor\", {\n            theme: \"snow\"\n        });\n    }, []);\n    function handleSubmit() {\n        console.log(title);\n        console.log(deadline);\n        console.log(\"submit\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-between mb-4 flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_DatePicker_Input_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        placeholder: \"请输入任务标题\",\n                        size: \"large\",\n                        className: \"flex-grow\",\n                        style: {\n                            marginRight: \"16px\"\n                        },\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\edit\\\\[id]\\\\page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_DatePicker_Input_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        size: \"large\",\n                        className: \"w-72\",\n                        placeholder: \"请选择截止日期\",\n                        style: {\n                            marginRight: \"16px\"\n                        },\n                        onChange: setDeadline\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\edit\\\\[id]\\\\page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_DatePicker_Input_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        type: \"primary\",\n                        size: \"large\",\n                        className: \"w-40\",\n                        onClick: (v)=>handleSubmit(v.$d),\n                        children: \"提交\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\edit\\\\[id]\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\edit\\\\[id]\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"editor\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\edit\\\\[id]\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\edit\\\\[id]\\\\page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Edit, \"/tQXEvyS0Ze9USMAKM2+AWeFVoI=\");\n_c = Edit;\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQvZWRpdC9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTJDO0FBQ1Q7QUFDZDtBQUM0QjtBQUVqQyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxRQUFRQyxpSUFBd0I7UUFDdEMsTUFBTUUsUUFBUSxJQUFJSCxNQUFNLFdBQVc7WUFDakNJLE9BQU87UUFDVDtJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNDO1FBQ1BDLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDWlEsUUFBUUMsR0FBRyxDQUFDWDtRQUNaVSxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDaEIsMkZBQUtBO3dCQUNKaUIsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTEYsV0FBVTt3QkFDVkcsT0FBTzs0QkFBRUMsYUFBYTt3QkFBTzt3QkFDN0JDLFVBQVUsQ0FBQ0MsSUFBTWhCLFNBQVNnQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFMUMsOERBQUN2QiwyRkFBVUE7d0JBQ1RpQixNQUFLO3dCQUNMRixXQUFVO3dCQUNWQyxhQUFZO3dCQUNaRSxPQUFPOzRCQUFFQyxhQUFhO3dCQUFPO3dCQUM3QkMsVUFBVWpCOzs7Ozs7a0NBRVosOERBQUNMLDJGQUFNQTt3QkFDTDBCLE1BQUs7d0JBQ0xQLE1BQUs7d0JBQ0xGLFdBQVU7d0JBQ1ZVLFNBQVMsQ0FBQ0MsSUFBTWYsYUFBYWUsRUFBRUMsRUFBRTtrQ0FDbEM7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ2I7Z0JBQUljLElBQUc7Ozs7Ozs7Ozs7OztBQUdkO0dBOUN3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sYXlvdXQvZWRpdC9baWRdL3BhZ2UudHN4PzhjMTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAncXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcydcclxuaW1wb3J0ICcuL3BhZ2Uuc2NzcydcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgRGF0ZVBpY2tlciB9IGZyb20gJ2FudGQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCkge1xyXG4gIGNvbnN0IFtkZWFkbGluZSwgc2V0RGVhZGxpbmVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgUXVpbGwgPSByZXF1aXJlKCdxdWlsbCcpLmRlZmF1bHRcclxuICAgIGNvbnN0IHF1aWxsID0gbmV3IFF1aWxsKCcjZWRpdG9yJywge1xyXG4gICAgICB0aGVtZTogJ3Nub3cnXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICAgIGNvbnNvbGUubG9nKGRlYWRsaW5lKVxyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktYmV0d2VlbiBtYi00IGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeS7u+WKoeagh+mimFwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36YCJ5oup5oiq5q2i5pel5pyfXCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTZweCcgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXREZWFkbGluZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyh2KSA9PiBoYW5kbGVTdWJtaXQodi4kZCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg5o+Q5LqkXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiZWRpdG9yXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiSW5wdXQiLCJEYXRlUGlja2VyIiwiRWRpdCIsImRlYWRsaW5lIiwic2V0RGVhZGxpbmUiLCJ0aXRsZSIsInNldFRpdGxlIiwiUXVpbGwiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInF1aWxsIiwidGhlbWUiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJzaXplIiwic3R5bGUiLCJtYXJnaW5SaWdodCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsIm9uQ2xpY2siLCJ2IiwiJGQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout/edit/[id]/page.tsx\n"));

/***/ })

});