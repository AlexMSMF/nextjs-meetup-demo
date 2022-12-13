webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\Alexandre Florindo\\Desktop\\React\\13-NextJS-More Features\\13-NextJS-More Features\\pages\\index.js",
    _this = undefined;

 //MEET UP PAGE

var DUMMY_MEETUPS = [{
  id: "m1",
  title: "Lisboa Meetup",
  address: "Cais do Sodré",
  description: "Meetup in the city of Lisboa",
  image: "https://viagemeturismo.abril.com.br/wp-content/uploads/2017/01/belem-tower-2809818_1920.jpg"
}, {
  id: "m2",
  title: "London Meetup",
  address: "Trafalgar Square",
  description: "Meetup in the city of London",
  image: "https://www.kaplaninternational.com/files/styles/hero_banner_md/public/school/gallery/kaplan-english-school-in-London-4.jpg?itok=RhkxxF50"
}, {
  id: "m3",
  title: "Paris Meetup",
  address: "Montmartre",
  description: "Meetup in the city of Paris",
  image: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"
}];

var HomePage = function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 10
  }, _this);
}; // O NEXT JS UTILIZA ISTO PARA ESPERAR PELA DATA OU POR QUALQUER FUNÇÃO QUE PRECISE
// ANTES DE FAZER LOAD DA PAGINA
// PRE-RENDERING!!!!!!!!!


_c = HomePage;
//UTILIZAR getServerSideProps ---caso necessitemos de DATA e do Request object
//e caso haja data que muda multiple times a cada segundo
//DATA CHANGING E REQUEST
// export const getServerSideProps = async (context) => {
//   //fetch data from API
//   const req = context.req;
//   const response = context.res;
//   console.log(context);
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUdBOztBQUNBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZUFGVDtBQUdFQyxTQUFPLEVBQUUsZUFIWDtBQUlFQyxhQUFXLEVBQUUsOEJBSmY7QUFLRUMsT0FBSyxFQUNIO0FBTkosQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGVBRlQ7QUFHRUMsU0FBTyxFQUFFLGtCQUhYO0FBSUVDLGFBQVcsRUFBRSw4QkFKZjtBQUtFQyxPQUFLLEVBQ0g7QUFOSixDQVRvQixFQWlCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGNBRlQ7QUFHRUMsU0FBTyxFQUFFLFlBSFg7QUFJRUMsYUFBVyxFQUFFLDZCQUpmO0FBS0VDLE9BQUssRUFDSDtBQU5KLENBakJvQixDQUF0Qjs7QUEwQkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQsQyxDQUlBO0FBQ0E7QUFDQTs7O0tBTk1GLFE7QUE0Qk47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzgxNzFkMTJjZTc5OGRmYzYwMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG4vL01FRVQgVVAgUEFHRVxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJMaXNib2EgTWVldHVwXCIsXHJcbiAgICBhZGRyZXNzOiBcIkNhaXMgZG8gU29kcsOpXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNZWV0dXAgaW4gdGhlIGNpdHkgb2YgTGlzYm9hXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3ZpYWdlbWV0dXJpc21vLmFicmlsLmNvbS5ici93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMS9iZWxlbS10b3dlci0yODA5ODE4XzE5MjAuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiTG9uZG9uIE1lZXR1cFwiLFxyXG4gICAgYWRkcmVzczogXCJUcmFmYWxnYXIgU3F1YXJlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNZWV0dXAgaW4gdGhlIGNpdHkgb2YgTG9uZG9uXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5rYXBsYW5pbnRlcm5hdGlvbmFsLmNvbS9maWxlcy9zdHlsZXMvaGVyb19iYW5uZXJfbWQvcHVibGljL3NjaG9vbC9nYWxsZXJ5L2thcGxhbi1lbmdsaXNoLXNjaG9vbC1pbi1Mb25kb24tNC5qcGc/aXRvaz1SaGt4eEY1MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTNcIixcclxuICAgIHRpdGxlOiBcIlBhcmlzIE1lZXR1cFwiLFxyXG4gICAgYWRkcmVzczogXCJNb250bWFydHJlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNZWV0dXAgaW4gdGhlIGNpdHkgb2YgUGFyaXNcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LnRyYXZlbGFuZGxlaXN1cmUuY29tL3RobWIvU1BVUHpPODhaWHE2UDRTbTRtQzVYdWlub2lrPS8xNTAweDAvZmlsdGVyczpub191cHNjYWxlKCk6bWF4X2J5dGVzKDE1MDAwMCk6c3RyaXBfaWNjKCkvZWlmZmVsLXRvd2VyLXBhcmlzLWZyYW5jZS1FSUZGRUwwMjE3LTZjY2MzNTUzZTk4OTQ2ZjE4Yzg5MzAxOGQ1YjQyYmRlLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG59O1xyXG5cclxuLy8gTyBORVhUIEpTIFVUSUxJWkEgSVNUTyBQQVJBIEVTUEVSQVIgUEVMQSBEQVRBIE9VIFBPUiBRVUFMUVVFUiBGVU7Dh8ODTyBRVUUgUFJFQ0lTRVxyXG4vLyBBTlRFUyBERSBGQVpFUiBMT0FEIERBIFBBR0lOQVxyXG4vLyBQUkUtUkVOREVSSU5HISEhISEhISEhXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL21lZXR1cGd1eTozeW9xbDJ1dlNwWWJsazFNQGNsdXN0ZXIwLjZxYmNhLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsIC8vUmVnZW5lcmFyIG8gcmVxdWVzdCwgcGFyYSByZW5vdmFyIGEgZGF0YSBubyBzZXJ2ZXIgZSByZW5vdmFyIGFzIHBhZ2VzIC0gMTAgc8OjbyBvcyBzZWd1bmRvcyEhIVxyXG4gIH07XHJcbn07XHJcblxyXG4vL1VUSUxJWkFSIGdldFNlcnZlclNpZGVQcm9wcyAtLS1jYXNvIG5lY2Vzc2l0ZW1vcyBkZSBEQVRBIGUgZG8gUmVxdWVzdCBvYmplY3RcclxuLy9lIGNhc28gaGFqYSBkYXRhIHF1ZSBtdWRhIG11bHRpcGxlIHRpbWVzIGEgY2FkYSBzZWd1bmRvXHJcbi8vREFUQSBDSEFOR0lORyBFIFJFUVVFU1RcclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgLy9mZXRjaCBkYXRhIGZyb20gQVBJXHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBjb250ZXh0LnJlcztcclxuLy8gICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==