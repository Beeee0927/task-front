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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/store */ \"(app-pages-browser)/./app/store/index.ts\");\n/* harmony import */ var _app_utils_tolls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/tolls */ \"(app-pages-browser)/./app/utils/tolls.ts\");\n/* harmony import */ var _barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,List,Tabs!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,List,Tabs!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,List,Tabs!=!antd */ \"(app-pages-browser)/./node_modules/.pnpm/antd@5.22.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./app/layout/task/api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.21_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Task() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const role = (0,_app_utils_tolls__WEBPACK_IMPORTED_MODULE_2__.useEffectProp)(_app_store__WEBPACK_IMPORTED_MODULE_1__.useLocalStore, \"role\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.api_getTaskList)({}).then((res)=>{\n            setData(res.data);\n        });\n    }, []);\n    // const data = [\n    //   {\n    //     title: '【李佳乐】 Ant Design Title 1',\n    //     description: 'Ant Design, a design language',\n    //     id: 1,\n    //     releaseTime: '2024-01-01 12:00:00',\n    //     deadline: '2024-01-02 23:59'\n    //   },\n    //   {\n    //     title: '【李佳乐】Ant Design Title 2',\n    //     description: 'Ant Design, a design language',\n    //     id: 2,\n    //     releaseTime: '2024-01-01 12:00:00',\n    //     deadline: '2024-01-02 23:59'\n    //   },\n    //   {\n    //     title: '【李佳乐】Ant Design Title 3',\n    //     description: 'Ant Design, a design language',\n    //     id: 3,\n    //     releaseTime: '2024-01-01 12:00:00',\n    //     deadline: '2024-01-02 23:59'\n    //   },\n    //   {\n    //     title: '【李佳乐】Ant Design Title 4',\n    //     description: 'Ant Design, a design language',\n    //     id: 4,\n    //     releaseTime: '2024-01-01 12:00:00',\n    //     deadline: '2024-01-02 23:59'\n    //   }\n    // ]\n    const userItems = [\n        {\n            key: \"1\",\n            label: \"待提交任务\"\n        },\n        {\n            key: \"2\",\n            label: \"待批阅任务\"\n        },\n        {\n            key: \"3\",\n            label: \"已完成任务\"\n        }\n    ];\n    const adminItems = [\n        {\n            key: \"1\",\n            label: \"待批阅任务\"\n        },\n        {\n            key: \"2\",\n            label: \"已发布任务\"\n        },\n        {\n            key: \"3\",\n            label: \"已完成任务\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        defaultActiveKey: \"1\",\n                        items: role === \"admin\" ? adminItems : userItems\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        type: \"primary\",\n                        className: \"mt-4\",\n                        onClick: ()=>{\n                            router.push(\"/layout/edit/-1\");\n                        },\n                        children: \"发布任务\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                itemLayout: \"horizontal\",\n                dataSource: data,\n                renderItem: (param)=>{\n                    let { id, title, content, releaseTime, deadline } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Item, {\n                        actions: [\n                            role === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/layout/edit/\".concat(id),\n                                children: \"编辑\"\n                            }, \"list-loadmore-more\", false, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/layout/detail/\".concat(id),\n                                children: \"详情\"\n                            }, \"list-loadmore-more\", false, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, void 0)\n                        ],\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_List_Tabs_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Item.Meta, {\n                                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: \"/layout/edit/\".concat(id),\n                                    children: title\n                                }, \"list-loadmore-more\", false, {\n                                    fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, void 0),\n                                description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-ellipsis overflow-hidden text-nowrap mr-[50%]\",\n                                    children: content.replace(/<[^>]*>/g, \" \")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"截止时间：\",\n                                    deadline.replace(\"T\", \" \").slice(0, -8)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, void 0)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Beeee\\\\Desktop\\\\task_front\\\\app\\\\layout\\\\task\\\\page.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(Task, \"izRTw2FUmeQoRTwvnrG2pP+XFS8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _app_utils_tolls__WEBPACK_IMPORTED_MODULE_2__.useEffectProp\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQvdGFzay9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNNO0FBQ0c7QUFDeEI7QUFDZTtBQUNKO0FBQ0k7QUFFNUIsU0FBU1U7O0lBQ3RCLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNTSxPQUFPWCwrREFBYUEsQ0FBQ0QscURBQWFBLEVBQUU7SUFFMUMsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkNELGdEQUFTQSxDQUFDO1FBQ1JELHFEQUFlQSxDQUFDLENBQUMsR0FBR1EsSUFBSSxDQUFDLENBQUNDO1lBQ3hCRixRQUFRRSxJQUFJSCxJQUFJO1FBQ2xCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTix5Q0FBeUM7SUFDekMsb0RBQW9EO0lBQ3BELGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUNBQW1DO0lBQ25DLE9BQU87SUFDUCxNQUFNO0lBQ04sd0NBQXdDO0lBQ3hDLG9EQUFvRDtJQUNwRCxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1DQUFtQztJQUNuQyxPQUFPO0lBQ1AsTUFBTTtJQUNOLHdDQUF3QztJQUN4QyxvREFBb0Q7SUFDcEQsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxtQ0FBbUM7SUFDbkMsT0FBTztJQUNQLE1BQU07SUFDTix3Q0FBd0M7SUFDeEMsb0RBQW9EO0lBQ3BELGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsbUNBQW1DO0lBQ25DLE1BQU07SUFDTixJQUFJO0lBRUosTUFBTUksWUFBZ0M7UUFDcEM7WUFDRUMsS0FBSztZQUNMQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLE9BQU87UUFDVDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsT0FBTztRQUNUO0tBQ0Q7SUFDRCxNQUFNQyxhQUFpQztRQUNyQztZQUNFRixLQUFLO1lBQ0xDLE9BQU87UUFDVDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxPQUFPO1FBQ1Q7S0FDRDtJQUVELHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEIsb0ZBQUlBO3dCQUNIbUIsa0JBQWlCO3dCQUNqQkMsT0FBT1osU0FBUyxVQUFVUSxhQUFhSDs7Ozs7O2tDQUV6Qyw4REFBQ2Ysb0ZBQU1BO3dCQUNMdUIsTUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksU0FBUzs0QkFDUGYsT0FBT2dCLElBQUksQ0FBQzt3QkFDZDtrQ0FDRDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDeEIsb0ZBQUlBO2dCQUNIeUIsWUFBVztnQkFDWEMsWUFBWWhCO2dCQUNaaUIsWUFBWTt3QkFBQyxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBTzt5Q0FDN0QsOERBQUNoQyxvRkFBSUEsQ0FBQ2lDLElBQUk7d0JBQ1JDLFNBQVM7NEJBQ1B6QixTQUFTLHlCQUNQLDhEQUFDUCxpREFBSUE7Z0NBQTBCaUMsTUFBTSxnQkFBbUIsT0FBSFA7MENBQU07K0JBQWpEOzs7OzswQ0FJWiw4REFBQzFCLGlEQUFJQTtnQ0FBMEJpQyxNQUFNLGtCQUFxQixPQUFIUDswQ0FBTTsrQkFBbkQ7Ozs7O3lCQUdYOzswQ0FFRCw4REFBQzVCLG9GQUFJQSxDQUFDaUMsSUFBSSxDQUFDRyxJQUFJO2dDQUNiUCxxQkFDRSw4REFBQzNCLGlEQUFJQTtvQ0FBMEJpQyxNQUFNLGdCQUFtQixPQUFIUDs4Q0FDbERDO21DQURPOzs7OztnQ0FJWlEsMkJBQ0UsOERBQUNuQjtvQ0FBSUMsV0FBVTs4Q0FDWlcsUUFBUVEsT0FBTyxDQUFDLFlBQVk7Ozs7Ozs7Ozs7OzBDQUluQyw4REFBQ3BCOztvQ0FBSTtvQ0FBTWMsU0FBU00sT0FBTyxDQUFDLEtBQUssS0FBS0MsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RDtHQTFId0JoQzs7UUFDUEosc0RBQVNBO1FBQ1hMLDJEQUFhQTs7O0tBRkpTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sYXlvdXQvdGFzay9wYWdlLnRzeD9kMDQ1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdXNlTG9jYWxTdG9yZSB9IGZyb20gJ0AvYXBwL3N0b3JlJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3RQcm9wIH0gZnJvbSAnQC9hcHAvdXRpbHMvdG9sbHMnXHJcbmltcG9ydCB7IEJ1dHRvbiwgTGlzdCwgVGFicywgVGFic1Byb3BzIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IGFwaV9nZXRUYXNrTGlzdCB9IGZyb20gJy4vYXBpJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qgcm9sZSA9IHVzZUVmZmVjdFByb3AodXNlTG9jYWxTdG9yZSwgJ3JvbGUnKVxyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBpX2dldFRhc2tMaXN0KHt9KS50aGVuKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBzZXREYXRhKHJlcy5kYXRhKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuICAvLyBjb25zdCBkYXRhID0gW1xyXG4gIC8vICAge1xyXG4gIC8vICAgICB0aXRsZTogJ+OAkOadjuS9s+S5kOOAkSBBbnQgRGVzaWduIFRpdGxlIDEnLFxyXG4gIC8vICAgICBkZXNjcmlwdGlvbjogJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlJyxcclxuICAvLyAgICAgaWQ6IDEsXHJcbiAgLy8gICAgIHJlbGVhc2VUaW1lOiAnMjAyNC0wMS0wMSAxMjowMDowMCcsXHJcbiAgLy8gICAgIGRlYWRsaW5lOiAnMjAyNC0wMS0wMiAyMzo1OSdcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHRpdGxlOiAn44CQ5p2O5L2z5LmQ44CRQW50IERlc2lnbiBUaXRsZSAyJyxcclxuICAvLyAgICAgZGVzY3JpcHRpb246ICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZScsXHJcbiAgLy8gICAgIGlkOiAyLFxyXG4gIC8vICAgICByZWxlYXNlVGltZTogJzIwMjQtMDEtMDEgMTI6MDA6MDAnLFxyXG4gIC8vICAgICBkZWFkbGluZTogJzIwMjQtMDEtMDIgMjM6NTknXHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICB0aXRsZTogJ+OAkOadjuS9s+S5kOOAkUFudCBEZXNpZ24gVGl0bGUgMycsXHJcbiAgLy8gICAgIGRlc2NyaXB0aW9uOiAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UnLFxyXG4gIC8vICAgICBpZDogMyxcclxuICAvLyAgICAgcmVsZWFzZVRpbWU6ICcyMDI0LTAxLTAxIDEyOjAwOjAwJyxcclxuICAvLyAgICAgZGVhZGxpbmU6ICcyMDI0LTAxLTAyIDIzOjU5J1xyXG4gIC8vICAgfSxcclxuICAvLyAgIHtcclxuICAvLyAgICAgdGl0bGU6ICfjgJDmnY7kvbPkuZDjgJFBbnQgRGVzaWduIFRpdGxlIDQnLFxyXG4gIC8vICAgICBkZXNjcmlwdGlvbjogJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlJyxcclxuICAvLyAgICAgaWQ6IDQsXHJcbiAgLy8gICAgIHJlbGVhc2VUaW1lOiAnMjAyNC0wMS0wMSAxMjowMDowMCcsXHJcbiAgLy8gICAgIGRlYWRsaW5lOiAnMjAyNC0wMS0wMiAyMzo1OSdcclxuICAvLyAgIH1cclxuICAvLyBdXHJcblxyXG4gIGNvbnN0IHVzZXJJdGVtczogVGFic1Byb3BzWydpdGVtcyddID0gW1xyXG4gICAge1xyXG4gICAgICBrZXk6ICcxJyxcclxuICAgICAgbGFiZWw6ICflvoXmj5DkuqTku7vliqEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICcyJyxcclxuICAgICAgbGFiZWw6ICflvoXmibnpmIXku7vliqEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICczJyxcclxuICAgICAgbGFiZWw6ICflt7LlrozmiJDku7vliqEnXHJcbiAgICB9XHJcbiAgXVxyXG4gIGNvbnN0IGFkbWluSXRlbXM6IFRhYnNQcm9wc1snaXRlbXMnXSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnMScsXHJcbiAgICAgIGxhYmVsOiAn5b6F5om56ZiF5Lu75YqhJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnMicsXHJcbiAgICAgIGxhYmVsOiAn5bey5Y+R5biD5Lu75YqhJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnMycsXHJcbiAgICAgIGxhYmVsOiAn5bey5a6M5oiQ5Lu75YqhJ1xyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIlxyXG4gICAgICAgICAgaXRlbXM9e3JvbGUgPT09ICdhZG1pbicgPyBhZG1pbkl0ZW1zIDogdXNlckl0ZW1zfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbGF5b3V0L2VkaXQvLTEnKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDlj5HluIPku7vliqFcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgIHJlbmRlckl0ZW09eyh7IGlkLCB0aXRsZSwgY29udGVudCwgcmVsZWFzZVRpbWUsIGRlYWRsaW5lIH06IGFueSkgPT4gKFxyXG4gICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgcm9sZSA9PT0gJ2FkbWluJyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9XCJsaXN0LWxvYWRtb3JlLW1vcmVcIiBocmVmPXtgL2xheW91dC9lZGl0LyR7aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIOe8lui+kVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgPExpbmsga2V5PVwibGlzdC1sb2FkbW9yZS1tb3JlXCIgaHJlZj17YC9sYXlvdXQvZGV0YWlsLyR7aWR9YH0+XHJcbiAgICAgICAgICAgICAgICDor6bmg4VcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT1cImxpc3QtbG9hZG1vcmUtbW9yZVwiIGhyZWY9e2AvbGF5b3V0L2VkaXQvJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZWxsaXBzaXMgb3ZlcmZsb3ctaGlkZGVuIHRleHQtbm93cmFwIG1yLVs1MCVdXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjb250ZW50LnJlcGxhY2UoLzxbXj5dKj4vZywgJyAnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj7miKrmraLml7bpl7TvvJp7ZGVhZGxpbmUucmVwbGFjZSgnVCcsICcgJykuc2xpY2UoMCwgLTgpfTwvZGl2PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlTG9jYWxTdG9yZSIsInVzZUVmZmVjdFByb3AiLCJCdXR0b24iLCJMaXN0IiwiVGFicyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJhcGlfZ2V0VGFza0xpc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhc2siLCJyb3V0ZXIiLCJyb2xlIiwiZGF0YSIsInNldERhdGEiLCJ0aGVuIiwicmVzIiwidXNlckl0ZW1zIiwia2V5IiwibGFiZWwiLCJhZG1pbkl0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGVmYXVsdEFjdGl2ZUtleSIsIml0ZW1zIiwidHlwZSIsIm9uQ2xpY2siLCJwdXNoIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJyZWxlYXNlVGltZSIsImRlYWRsaW5lIiwiSXRlbSIsImFjdGlvbnMiLCJocmVmIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwicmVwbGFjZSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout/task/page.tsx\n"));

/***/ })

});