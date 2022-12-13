webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Alexandre_Florindo_Desktop_React_13_NextJS_More_Features_13_NextJS_More_Features_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Alexandre_Florindo_Desktop_React_13_NextJS_More_Features_13_NextJS_More_Features_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Alexandre_Florindo_Desktop_React_13_NextJS_More_Features_13_NextJS_More_Features_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Alexandre_Florindo_Desktop_React_13_NextJS_More_Features_13_NextJS_More_Features_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");




var _jsxFileName = "C:\\Users\\Alexandre Florindo\\Desktop\\React\\13-NextJS-More Features\\13-NextJS-More Features\\pages\\new-meetup\\index.js",
    _this = undefined;




var NewMeetUp = function NewMeetUp() {
  var addMeetupHandler = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Alexandre_Florindo_Desktop_React_13_NextJS_More_Features_13_NextJS_More_Features_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Alexandre_Florindo_Desktop_React_13_NextJS_More_Features_13_NextJS_More_Features_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(newMeetUpData) {
      var response, data;
      return C_Users_Alexandre_Florindo_Desktop_React_13_NextJS_More_Features_13_NextJS_More_Features_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("/api/new-meetup", {
                //api ---Nome da folder---new-meetup---nome do ficheiro
                //Ao chamar este path, o NEXTJS faz trigger da função de post no MongDB
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(newMeetUpData)
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              console.log(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addMeetupHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, _this);
};

_c = NewMeetUp;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetUp);

var _c;

$RefreshReg$(_c, "NewMeetUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0VXAiLCJhZGRNZWV0dXBIYW5kbGVyIiwibmV3TWVldFVwRGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLE1BQU1DLGdCQUFnQjtBQUFBLDBZQUFHLGlCQUFPQyxhQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0FDLEtBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUM5QztBQUNBO0FBQ0FDLHNCQUFNLEVBQUUsTUFIc0M7QUFJOUNDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFKcUM7QUFPOUNDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixhQUFmO0FBUHdDLGVBQXBCLENBREw7O0FBQUE7QUFDakJPLHNCQURpQjtBQUFBO0FBQUEscUJBV0pBLFFBQVEsQ0FBQ0MsSUFBVCxFQVhJOztBQUFBO0FBV2pCQyxrQkFYaUI7QUFhdkJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFidUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJWLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFnQkEsc0JBQU8scUVBQUMseUVBQUQ7QUFBZSxlQUFXLEVBQUVBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBbEJEOztLQUFNRCxTO0FBb0JTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjRmOGY2NjBiYzczMzRkNjkxYTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIjtcclxuXHJcbmNvbnN0IE5ld01lZXRVcCA9ICgpID0+IHtcclxuICBjb25zdCBhZGRNZWV0dXBIYW5kbGVyID0gYXN5bmMgKG5ld01lZXRVcERhdGEpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL25ldy1tZWV0dXBcIiwge1xyXG4gICAgICAvL2FwaSAtLS1Ob21lIGRhIGZvbGRlci0tLW5ldy1tZWV0dXAtLS1ub21lIGRvIGZpY2hlaXJvXHJcbiAgICAgIC8vQW8gY2hhbWFyIGVzdGUgcGF0aCwgbyBORVhUSlMgZmF6IHRyaWdnZXIgZGEgZnVuw6fDo28gZGUgcG9zdCBubyBNb25nREJcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdNZWV0VXBEYXRhKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxOZXdNZWV0dXBGb3JtIG9uQWRkTWVldHVwPXthZGRNZWV0dXBIYW5kbGVyfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXRVcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==