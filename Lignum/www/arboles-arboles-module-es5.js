(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arboles-arboles-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/arboles/arboles.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arboles/arboles.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Árboles</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div align=\"center\"> <img src=\"./assets/paginac.jpg\"> </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/arboles/arboles-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/arboles/arboles-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ArbolesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbolesPageRoutingModule", function() { return ArbolesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _arboles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arboles.page */ "./src/app/arboles/arboles.page.ts");




var routes = [
    {
        path: '',
        component: _arboles_page__WEBPACK_IMPORTED_MODULE_3__["ArbolesPage"]
    }
];
var ArbolesPageRoutingModule = /** @class */ (function () {
    function ArbolesPageRoutingModule() {
    }
    ArbolesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ArbolesPageRoutingModule);
    return ArbolesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/arboles/arboles.module.ts":
/*!*******************************************!*\
  !*** ./src/app/arboles/arboles.module.ts ***!
  \*******************************************/
/*! exports provided: ArbolesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbolesPageModule", function() { return ArbolesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _arboles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arboles-routing.module */ "./src/app/arboles/arboles-routing.module.ts");
/* harmony import */ var _arboles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arboles.page */ "./src/app/arboles/arboles.page.ts");







var ArbolesPageModule = /** @class */ (function () {
    function ArbolesPageModule() {
    }
    ArbolesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _arboles_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArbolesPageRoutingModule"]
            ],
            declarations: [_arboles_page__WEBPACK_IMPORTED_MODULE_6__["ArbolesPage"]]
        })
    ], ArbolesPageModule);
    return ArbolesPageModule;
}());



/***/ }),

/***/ "./src/app/arboles/arboles.page.scss":
/*!*******************************************!*\
  !*** ./src/app/arboles/arboles.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyYm9sZXMvYXJib2xlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/arboles/arboles.page.ts":
/*!*****************************************!*\
  !*** ./src/app/arboles/arboles.page.ts ***!
  \*****************************************/
/*! exports provided: ArbolesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbolesPage", function() { return ArbolesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArbolesPage = /** @class */ (function () {
    function ArbolesPage() {
    }
    ArbolesPage.prototype.ngOnInit = function () {
    };
    ArbolesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arboles',
            template: __webpack_require__(/*! raw-loader!./arboles.page.html */ "./node_modules/raw-loader/index.js!./src/app/arboles/arboles.page.html"),
            styles: [__webpack_require__(/*! ./arboles.page.scss */ "./src/app/arboles/arboles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArbolesPage);
    return ArbolesPage;
}());



/***/ })

}]);
//# sourceMappingURL=arboles-arboles-module-es5.js.map