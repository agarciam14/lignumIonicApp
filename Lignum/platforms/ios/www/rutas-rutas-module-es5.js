(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rutas-rutas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rutas/rutas.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rutas/rutas.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Rutas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <div align=\"center\"> <img src=\"./assets/paginac.jpg\"> </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rutas/rutas-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/rutas/rutas-routing.module.ts ***!
  \***********************************************/
/*! exports provided: RutasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasPageRoutingModule", function() { return RutasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rutas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rutas.page */ "./src/app/rutas/rutas.page.ts");




var routes = [
    {
        path: '',
        component: _rutas_page__WEBPACK_IMPORTED_MODULE_3__["RutasPage"]
    }
];
var RutasPageRoutingModule = /** @class */ (function () {
    function RutasPageRoutingModule() {
    }
    RutasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RutasPageRoutingModule);
    return RutasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/rutas/rutas.module.ts":
/*!***************************************!*\
  !*** ./src/app/rutas/rutas.module.ts ***!
  \***************************************/
/*! exports provided: RutasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasPageModule", function() { return RutasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rutas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rutas-routing.module */ "./src/app/rutas/rutas-routing.module.ts");
/* harmony import */ var _rutas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rutas.page */ "./src/app/rutas/rutas.page.ts");







var RutasPageModule = /** @class */ (function () {
    function RutasPageModule() {
    }
    RutasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _rutas_routing_module__WEBPACK_IMPORTED_MODULE_5__["RutasPageRoutingModule"]
            ],
            declarations: [_rutas_page__WEBPACK_IMPORTED_MODULE_6__["RutasPage"]]
        })
    ], RutasPageModule);
    return RutasPageModule;
}());



/***/ }),

/***/ "./src/app/rutas/rutas.page.scss":
/*!***************************************!*\
  !*** ./src/app/rutas/rutas.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1dGFzL3J1dGFzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/rutas/rutas.page.ts":
/*!*************************************!*\
  !*** ./src/app/rutas/rutas.page.ts ***!
  \*************************************/
/*! exports provided: RutasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutasPage", function() { return RutasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RutasPage = /** @class */ (function () {
    function RutasPage() {
    }
    RutasPage.prototype.ngOnInit = function () {
    };
    RutasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rutas',
            template: __webpack_require__(/*! raw-loader!./rutas.page.html */ "./node_modules/raw-loader/index.js!./src/app/rutas/rutas.page.html"),
            styles: [__webpack_require__(/*! ./rutas.page.scss */ "./src/app/rutas/rutas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RutasPage);
    return RutasPage;
}());



/***/ })

}]);
//# sourceMappingURL=rutas-rutas-module-es5.js.map