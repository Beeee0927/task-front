"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout/task/page",{

/***/ "(app-pages-browser)/./app/layout/task/page.tsx":
/*!**********************************!*\
  !*** ./app/layout/task/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/store */ \"(app-pages-browser)/./app/store/index.ts\");\n/* harmony import */ var _app_utils_tolls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/tolls */ \"(app-pages-browser)/./app/utils/tolls.ts\");\n/* harmony import */ var _barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,List,Tabs!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,List,Tabs!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,List,Tabs!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Task() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(\"task\");\n    const role = (0,_app_utils_tolls__WEBPACK_IMPORTED_MODULE_2__.useEffectProp)(_app_store__WEBPACK_IMPORTED_MODULE_1__.useLocalStore, \"role\");\n    const data = [\n        {\n            title: \"【李佳乐】 Ant Design Title 1\",\n            description: \"Ant Design, a design language\",\n            id: 1,\n            releaseTime: \"2024-01-01 12:00:00\",\n            deadline: \"2024-01-02 23:59\"\n        },\n        {\n            title: \"【李佳乐】Ant Design Title 2\",\n            description: \"Ant Design, a design language\",\n            id: 2,\n            releaseTime: \"2024-01-01 12:00:00\",\n            deadline: \"2024-01-02 23:59\"\n        },\n        {\n            title: \"【李佳乐】Ant Design Title 3\",\n            description: \"Ant Design, a design language\",\n            id: 3,\n            releaseTime: \"2024-01-01 12:00:00\",\n            deadline: \"2024-01-02 23:59\"\n        },\n        {\n            title: \"【李佳乐】Ant Design Title 4\",\n            description: \"Ant Design, a design language\",\n            id: 4,\n            releaseTime: \"2024-01-01 12:00:00\",\n            deadline: \"2024-01-02 23:59\"\n        }\n    ];\n    const userItems = [\n        {\n            key: \"1\",\n            label: \"待提交任务\"\n        },\n        {\n            key: \"2\",\n            label: \"待批阅任务\"\n        },\n        {\n            key: \"3\",\n            label: \"已完成任务\"\n        }\n    ];\n    const adminItems = [\n        {\n            key: \"1\",\n            label: \"待批阅任务\"\n        },\n        {\n            key: \"2\",\n            label: \"已发布任务\"\n        },\n        {\n            key: \"3\",\n            label: \"已完成任务\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        defaultActiveKey: \"1\",\n                        items: role === \"admin\" ? adminItems : userItems\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        type: \"primary\",\n                        className: \"mt-4\",\n                        onClick: ()=>{\n                            router.push(\"/layout/edit/-1\");\n                        },\n                        children: \"发布任务\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                itemLayout: \"horizontal\",\n                dataSource: data,\n                renderItem: (param)=>{\n                    let { id, title, description, releaseTime, deadline } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                        actions: [\n                            role === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/layout/edit/\".concat(id),\n                                children: \"编辑\"\n                            }, \"list-loadmore-more\", false, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/layout/detail/\".concat(id),\n                                children: \"详情\"\n                            }, \"list-loadmore-more\", false, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, void 0)\n                        ],\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item.Meta, {\n                                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: \"/layout/edit/\".concat(id),\n                                    children: title\n                                }, \"list-loadmore-more\", false, {\n                                    fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 17\n                                }, void 0),\n                                description: description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"截止时间：\",\n                                    deadline\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, void 0)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Task, \"V2PbE7Z1ZnZcowRDNVBEt/A1FGY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _app_utils_tolls__WEBPACK_IMPORTED_MODULE_2__.useEffectProp\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQvdGFzay9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNNO0FBQ0c7QUFDeEI7QUFDZTtBQUU1QixTQUFTTzs7SUFDdEIsTUFBTUMsU0FBU0YsMERBQVNBO0lBQ3hCRyxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNQyxPQUFPViwrREFBYUEsQ0FBQ0QscURBQWFBLEVBQUU7SUFFMUMsTUFBTVksT0FBTztRQUNYO1lBQ0VDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxJQUFJO1lBQ0pDLGFBQWE7WUFDYkMsVUFBVTtRQUNaO1FBQ0E7WUFDRUosT0FBTztZQUNQQyxhQUFhO1lBQ2JDLElBQUk7WUFDSkMsYUFBYTtZQUNiQyxVQUFVO1FBQ1o7UUFDQTtZQUNFSixPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsSUFBSTtZQUNKQyxhQUFhO1lBQ2JDLFVBQVU7UUFDWjtRQUNBO1lBQ0VKLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxJQUFJO1lBQ0pDLGFBQWE7WUFDYkMsVUFBVTtRQUNaO0tBQ0Q7SUFDRCxNQUFNQyxZQUFnQztRQUNwQztZQUNFQyxLQUFLO1lBQ0xDLE9BQU87UUFDVDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxPQUFPO1FBQ1Q7S0FDRDtJQUNELE1BQU1DLGFBQWlDO1FBQ3JDO1lBQ0VGLEtBQUs7WUFDTEMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLE9BQU87UUFDVDtLQUNEO0lBRUQscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQixvRkFBSUE7d0JBQ0hvQixrQkFBaUI7d0JBQ2pCQyxPQUFPZCxTQUFTLFVBQVVVLGFBQWFIOzs7Ozs7a0NBRXpDLDhEQUFDaEIsb0ZBQU1BO3dCQUNMd0IsTUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksU0FBUzs0QkFDUG5CLE9BQU9vQixJQUFJLENBQUM7d0JBQ2Q7a0NBQ0Q7Ozs7Ozs7Ozs7OzswQkFLSCw4REFBQ3pCLG9GQUFJQTtnQkFDSDBCLFlBQVc7Z0JBQ1hDLFlBQVlsQjtnQkFDWm1CLFlBQVk7d0JBQUMsRUFBRWhCLEVBQUUsRUFBRUYsS0FBSyxFQUFFQyxXQUFXLEVBQUVFLFdBQVcsRUFBRUMsUUFBUSxFQUFFO3lDQUM1RCw4REFBQ2Qsb0ZBQUlBLENBQUM2QixJQUFJO3dCQUNSQyxTQUFTOzRCQUNQdEIsU0FBUyx5QkFDUCw4REFBQ04saURBQUlBO2dDQUEwQjZCLE1BQU0sZ0JBQW1CLE9BQUhuQjswQ0FBTTsrQkFBakQ7Ozs7OzBDQUlaLDhEQUFDVixpREFBSUE7Z0NBQTBCNkIsTUFBTSxrQkFBcUIsT0FBSG5COzBDQUFNOytCQUFuRDs7Ozs7eUJBR1g7OzBDQUVELDhEQUFDWixvRkFBSUEsQ0FBQzZCLElBQUksQ0FBQ0csSUFBSTtnQ0FDYnRCLHFCQUNFLDhEQUFDUixpREFBSUE7b0NBQTBCNkIsTUFBTSxnQkFBbUIsT0FBSG5COzhDQUNsREY7bUNBRE87Ozs7O2dDQUlaQyxhQUFhQTs7Ozs7OzBDQUVmLDhEQUFDUTs7b0NBQUk7b0NBQU1MOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBaEh3QlY7O1FBQ1BELHNEQUFTQTtRQUVYTCwyREFBYUE7OztLQUhKTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0L3Rhc2svcGFnZS50c3g/ZDA0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmUgfSBmcm9tICdAL2FwcC9zdG9yZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0UHJvcCB9IGZyb20gJ0AvYXBwL3V0aWxzL3RvbGxzJ1xyXG5pbXBvcnQgeyBCdXR0b24sIExpc3QsIFRhYnMsIFRhYnNQcm9wcyB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzaygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnNvbGUubG9nKCd0YXNrJylcclxuICBjb25zdCByb2xlID0gdXNlRWZmZWN0UHJvcCh1c2VMb2NhbFN0b3JlLCAncm9sZScpXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn44CQ5p2O5L2z5LmQ44CRIEFudCBEZXNpZ24gVGl0bGUgMScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UnLFxyXG4gICAgICBpZDogMSxcclxuICAgICAgcmVsZWFzZVRpbWU6ICcyMDI0LTAxLTAxIDEyOjAwOjAwJyxcclxuICAgICAgZGVhZGxpbmU6ICcyMDI0LTAxLTAyIDIzOjU5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfjgJDmnY7kvbPkuZDjgJFBbnQgRGVzaWduIFRpdGxlIDInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlJyxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHJlbGVhc2VUaW1lOiAnMjAyNC0wMS0wMSAxMjowMDowMCcsXHJcbiAgICAgIGRlYWRsaW5lOiAnMjAyNC0wMS0wMiAyMzo1OSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn44CQ5p2O5L2z5LmQ44CRQW50IERlc2lnbiBUaXRsZSAzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZScsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICByZWxlYXNlVGltZTogJzIwMjQtMDEtMDEgMTI6MDA6MDAnLFxyXG4gICAgICBkZWFkbGluZTogJzIwMjQtMDEtMDIgMjM6NTknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+OAkOadjuS9s+S5kOOAkUFudCBEZXNpZ24gVGl0bGUgNCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UnLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgcmVsZWFzZVRpbWU6ICcyMDI0LTAxLTAxIDEyOjAwOjAwJyxcclxuICAgICAgZGVhZGxpbmU6ICcyMDI0LTAxLTAyIDIzOjU5J1xyXG4gICAgfVxyXG4gIF1cclxuICBjb25zdCB1c2VySXRlbXM6IFRhYnNQcm9wc1snaXRlbXMnXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnMScsXHJcbiAgICAgIGxhYmVsOiAn5b6F5o+Q5Lqk5Lu75YqhJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnMicsXHJcbiAgICAgIGxhYmVsOiAn5b6F5om56ZiF5Lu75YqhJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnMycsXHJcbiAgICAgIGxhYmVsOiAn5bey5a6M5oiQ5Lu75YqhJ1xyXG4gICAgfVxyXG4gIF1cclxuICBjb25zdCBhZG1pbkl0ZW1zOiBUYWJzUHJvcHNbJ2l0ZW1zJ10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogJzEnLFxyXG4gICAgICBsYWJlbDogJ+W+heaJuemYheS7u+WKoSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJzInLFxyXG4gICAgICBsYWJlbDogJ+W3suWPkeW4g+S7u+WKoSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJzMnLFxyXG4gICAgICBsYWJlbDogJ+W3suWujOaIkOS7u+WKoSdcclxuICAgIH1cclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCJcclxuICAgICAgICAgIGl0ZW1zPXtyb2xlID09PSAnYWRtaW4nID8gYWRtaW5JdGVtcyA6IHVzZXJJdGVtc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xheW91dC9lZGl0Ly0xJylcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg5Y+R5biD5Lu75YqhXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICByZW5kZXJJdGVtPXsoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCByZWxlYXNlVGltZSwgZGVhZGxpbmUgfSkgPT4gKFxyXG4gICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgcm9sZSA9PT0gJ2FkbWluJyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9XCJsaXN0LWxvYWRtb3JlLW1vcmVcIiBocmVmPXtgL2xheW91dC9lZGl0LyR7aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIOe8lui+kVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgPExpbmsga2V5PVwibGlzdC1sb2FkbW9yZS1tb3JlXCIgaHJlZj17YC9sYXlvdXQvZGV0YWlsLyR7aWR9YH0+XHJcbiAgICAgICAgICAgICAgICDor6bmg4VcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT1cImxpc3QtbG9hZG1vcmUtbW9yZVwiIGhyZWY9e2AvbGF5b3V0L2VkaXQvJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+5oiq5q2i5pe26Ze077yae2RlYWRsaW5lfTwvZGl2PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlTG9jYWxTdG9yZSIsInVzZUVmZmVjdFByb3AiLCJCdXR0b24iLCJMaXN0IiwiVGFicyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJUYXNrIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInJvbGUiLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIiwicmVsZWFzZVRpbWUiLCJkZWFkbGluZSIsInVzZXJJdGVtcyIsImtleSIsImxhYmVsIiwiYWRtaW5JdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsImRlZmF1bHRBY3RpdmVLZXkiLCJpdGVtcyIsInR5cGUiLCJvbkNsaWNrIiwicHVzaCIsIml0ZW1MYXlvdXQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIkl0ZW0iLCJhY3Rpb25zIiwiaHJlZiIsIk1ldGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout/task/page.tsx\n"));

/***/ })

});