(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about-us works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _hanoit_tower_hanoit_tower_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hanoit-tower/hanoit-tower.component */ "./src/app/hanoit-tower/hanoit-tower.component.ts");
/* harmony import */ var _senku_senku_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./senku/senku.component */ "./src/app/senku/senku.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    },
    {
        path: 'hanoit-tower',
        component: _hanoit_tower_hanoit_tower_component__WEBPACK_IMPORTED_MODULE_4__["HanoitTowerComponent"]
    },
    {
        path: 'senku',
        component: _senku_senku_component__WEBPACK_IMPORTED_MODULE_5__["SenkuComponent"]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'matlab-juegos';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _hanoit_tower_hanoit_tower_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hanoit-tower/hanoit-tower.component */ "./src/app/hanoit-tower/hanoit-tower.component.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _senku_senku_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./senku/senku.component */ "./src/app/senku/senku.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                _hanoit_tower_hanoit_tower_component__WEBPACK_IMPORTED_MODULE_9__["HanoitTowerComponent"],
                _senku_senku_component__WEBPACK_IMPORTED_MODULE_11__["SenkuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_10__["SweetAlert2Module"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"footer-grids\">\r\n      <div class=\"col-md-6 footer-text\">\r\n        <h3>Sobre Nosotros</h3>\r\n        <p>Como parte del proyecto Laboratorio de Matemática se toma la iniciativa de \r\n          ofrecer esta plataforma de juegos matemáticos con el fin de brindar un acceso\r\n          moderno y fácil al aprendizaje de una manera divertida, donde educadores y \r\n          estudiantes puedan jugar cuando lo deseen.\r\n         </p>\r\n        <a href=\"\" class=\"read\" routerLink=\"/about-us\">Leer Más</a>\r\n      </div>\r\n      <div class=\"col-md-6 footer-info\">\r\n        <h3>Contacto</h3>\r\n        <p>Puede contactar a los encargados de este sitio en los siguientes correos:</p>\r\n        <ul>\r\n          <li>josue.villagra@ucrso.info</li>\r\n          <li>kevin.rodriguez@ucrso.info</li>\r\n        </ul>\r\n        <div class=\"contact-links\">\r\n          <a href=\"https://www.facebook.com/TCU.LABMATE/\">\r\n            <fa name=\"facebook-square\" class=\"icon\"></fa>\r\n          </a>\r\n          <fa name=\"envelope\" class=\"icon\"></fa>\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n    <div class=\"copy\">\r\n      <p> © 2019. Propiedad del <a href=\"https://www.facebook.com/TCU.LABMATE/\"> Laboratorio de Matemática, UCRSO </a></p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #29292A;\n  padding: 2em 0 1em;\n  text-align: left; }\n  .footer .footer-grids .footer-text {\n    float: left; }\n  .footer .footer-grids .footer-text h3 {\n      color: #fec63f;\n      font-size: 1.4em;\n      font-weight: 400;\n      text-decoration: none;\n      line-height: 1.4em;\n      font-family: 'Fugaz One', cursive;\n      margin: 0.6em 0; }\n  .footer .footer-grids .footer-text p {\n      font-size: 0.9em;\n      color: #fff;\n      line-height: 1.8em; }\n  .footer .footer-grids .footer-text a.read {\n      color: #fff;\n      font-size: 1em;\n      padding: 0.8em 2em;\n      background: #5bb2fc;\n      margin: 1em 0;\n      display: inline-block;\n      -webkit-appearance: none; }\n  .footer .footer-grids .footer-info {\n    float: right; }\n  .footer .footer-grids .footer-info h3 {\n      color: #fec63f;\n      font-size: 1.4em;\n      font-weight: 400;\n      text-decoration: none;\n      line-height: 1.4em;\n      font-family: 'Fugaz One', cursive;\n      margin: 0.6em 0; }\n  .footer .footer-grids .footer-info p {\n      font-size: 0.9em;\n      color: #fff;\n      line-height: 1.8em; }\n  .footer .footer-grids .footer-info li {\n      font-size: 0.9em;\n      color: #fff;\n      line-height: 1.8em; }\n  .footer .footer-grids .footer-info .contact-links {\n      border-top: 1px ridge rgba(50, 50, 50, 0.92);\n      color: #fff;\n      font-size: 2em; }\n  .footer .footer-grids .footer-info .contact-links a {\n        color: #fff; }\n  .footer .footer-grids .footer-info .contact-links .icon {\n        padding: 0px 10px 0px 10px; }\n  .footer .copy {\n    text-align: center;\n    border-top: 1px ridge rgba(50, 50, 50, 0.92);\n    padding-top: 1em; }\n  .footer .copy p {\n      color: #fff;\n      font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcQW5ndWxhclxcVENVXFxtYXRsYWItanVlZ29zL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBNEVuQjtFQS9FRDtJQVFZLFlBQVcsRUF3QmQ7RUFoQ1Q7TUFVZ0IsZUFBYztNQUNkLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIsc0JBQXFCO01BQ3JCLG1CQUFrQjtNQUNsQixrQ0FBaUM7TUFDakMsZ0JBQWUsRUFDbEI7RUFqQmI7TUFtQmdCLGlCQUFnQjtNQUNoQixZQUFXO01BQ1gsbUJBQWtCLEVBQ3JCO0VBdEJiO01Bd0JnQixZQUFXO01BQ1gsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixvQkFBbUI7TUFDbkIsY0FBYTtNQUNiLHNCQUFxQjtNQUNyQix5QkFBd0IsRUFDM0I7RUEvQmI7SUFtQ1ksYUFBWSxFQWdDZjtFQW5FVDtNQXFDZ0IsZUFBYztNQUNkLGlCQUFnQjtNQUNoQixpQkFBZ0I7TUFDaEIsc0JBQXFCO01BQ3JCLG1CQUFrQjtNQUNsQixrQ0FBaUM7TUFDakMsZ0JBQWUsRUFDbEI7RUE1Q2I7TUE4Q2dCLGlCQUFnQjtNQUNoQixZQUFXO01BQ1gsbUJBQWtCLEVBRXJCO0VBbERiO01Bb0RnQixpQkFBZ0I7TUFDaEIsWUFBVztNQUNYLG1CQUFrQixFQUNyQjtFQXZEYjtNQXlEZ0IsNkNBQTRDO01BQzVDLFlBQVc7TUFDWCxlQUFjLEVBT2pCO0VBbEViO1FBNkRvQixZQUFXLEVBQ2Q7RUE5RGpCO1FBZ0VvQiwyQkFBMEIsRUFDN0I7RUFqRWpCO0lBdUVRLG1CQUFrQjtJQUNsQiw2Q0FBNEM7SUFDNUMsaUJBQWdCLEVBS25CO0VBOUVMO01BMkVZLFlBQVc7TUFDWCxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjkyOTJBO1xyXG4gICAgcGFkZGluZzogMmVtIDAgMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAuZm9vdGVyLWdyaWRze1xyXG5cclxuICAgICAgICAuZm9vdGVyLXRleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZWM2M2Y7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnVnYXogT25lJywgY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC42ZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhLnJlYWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtIDJlbTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1YmIyZmM7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyLWluZm8ge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmVjNjNmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Z1Z2F6IE9uZScsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFjdC1saW5rcyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggcmlkZ2UgcmdiYSg1MCwgNTAsIDUwLCAwLjkyKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb3B5IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJpZGdlIHJnYmEoNTAsIDUwLCA1MCwgMC45Mik7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/hanoit-tower/hanoit-tower.component.html":
/*!**********************************************************!*\
  !*** ./src/app/hanoit-tower/hanoit-tower.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hanoi\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 counter\">\r\n        <h3> {{moves}} movimientos</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 tower1\">\r\n        <div class=\"tower\" (click)=\"move(tower1)\">\r\n          <div *ngFor=\"let field of tower1\" [class]=\"field.name\">\r\n            <div class=\"field\">\r\n              {{ field.value }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 tower2\">\r\n        <div class=\"tower\" (click)=\"move(tower2)\">\r\n          <div *ngFor=\"let field of tower2\" [class]=\"field.name\">\r\n            <div class=\"field\">\r\n              {{ field.value }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 tower3\">\r\n        <div class=\"tower\" (click)=\"move(tower3)\">\r\n          <div *ngFor=\"let field of tower3\" [class]=\"field.name\">\r\n            <div class=\"field\">\r\n              {{ field.value }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row restart\">\r\n      <button type=\"button\" class=\"btn btn-dark\" (click)=\"initGame()\">\r\n        <fa name=\"repeat\" class=\"icon\"></fa> Reiniciar\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-dark\" (click)=\"instructions()\">\r\n        <fa name=\"list\" class=\"icon\"></fa> Instrucciones\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<button hidden id=\"alertBtn\" [swal]=\"finishSwal\">\r\n</button>\r\n<swal #finishSwal title=\"Felicidades!\" text=\"Terminaste el juego en {{ moves }} movimientos\" type=\"info\" (confirm)=\"initGame()\">\r\n</swal>\r\n\r\n<button hidden id=\"instBtn\" [swal]=\"instSwal\">\r\n</button>\r\n<swal #instSwal title=\"Instrucciones del juego\" type=\"info\" html=\"\"\r\n  html=\" <br/> El juego comienza con todos los discos insertados en una de las barras,\r\nordenados de mayor a menor situando el disco menor sobre todos los demás. <br/> <br/>\r\nEl objetivo del juego consiste en lograr crear la misma torre en una barra distinta siguiendo las siguientes reglas: <br/>  <br/>\r\n<ul> \r\n  <li>En cada movimiento solo se puede mover un disco.</li>\r\n  <li>No se puede poner un disco mayor sobre un disco de menor diámetro.</li>\r\n  <li>Para mover un disco se debe hacer click en la torre, y se seleccionará el que esté arriba</li>\r\n  <li>Para dejar caer el disco se vuelve a hacer click en otra torre</li>\r\n</ul>\">\r\n</swal>"

/***/ }),

/***/ "./src/app/hanoit-tower/hanoit-tower.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/hanoit-tower/hanoit-tower.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hanoi {\n  padding-bottom: 50px; }\n  .hanoi .counter {\n    text-align: center;\n    padding-bottom: 40px; }\n  .hanoi .tower {\n    border-bottom: 3px ridge rgba(0, 0, 0, 0.92);\n    margin-bottom: 5px;\n    text-align: center;\n    cursor: pointer; }\n  .hanoi .tower .field {\n      color: white;\n      padding: 1.2em 4.38em 1em 4.3em; }\n  .hanoi .tower .first {\n      width: 50%;\n      background: #ff7a85;\n      border-radius: 25px;\n      display: inline-block; }\n  .hanoi .tower .second {\n      width: 60%;\n      background: #5bb2fc;\n      border-radius: 25px;\n      display: inline-block; }\n  .hanoi .tower .third {\n      width: 80%;\n      background: #B881CF;\n      border-radius: 25px;\n      display: inline-block; }\n  .hanoi .tower .fourth {\n      width: 100%;\n      background: #ffa659;\n      border-radius: 25px;\n      display: inline-block; }\n  .hanoi .restart {\n    padding-top: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .hanoi .restart button {\n      height: 50px;\n      width: 300px;\n      color: #fff;\n      font-size: 20px;\n      margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFub2l0LXRvd2VyL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcQW5ndWxhclxcVENVXFxtYXRsYWItanVlZ29zL3NyY1xcYXBwXFxoYW5vaXQtdG93ZXJcXGhhbm9pdC10b3dlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQixFQXNEdkI7RUF2REQ7SUFHUSxtQkFBa0I7SUFDbEIscUJBQW9CLEVBQ3ZCO0VBTEw7SUFRUSw2Q0FBNEM7SUFDNUMsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixnQkFBZSxFQTZCbEI7RUF4Q0w7TUFhWSxhQUFZO01BQ1osZ0NBQStCLEVBQ2xDO0VBZlQ7TUFpQlksV0FBVTtNQUNWLG9CQUFtQjtNQUNuQixvQkFBbUI7TUFDbkIsc0JBQXFCLEVBQ3hCO0VBckJUO01BdUJZLFdBQVU7TUFDVixvQkFBbUI7TUFDbkIsb0JBQW1CO01BQ25CLHNCQUFxQixFQUN4QjtFQTNCVDtNQTZCWSxXQUFVO01BQ1Ysb0JBQW1CO01BQ25CLG9CQUFtQjtNQUNuQixzQkFBcUIsRUFDeEI7RUFqQ1Q7TUFtQ1ksWUFBVztNQUNYLG9CQUFtQjtNQUNuQixvQkFBbUI7TUFDbkIsc0JBQXFCLEVBQ3hCO0VBdkNUO0lBMENRLGtCQUFpQjtJQUNqQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QixFQVExQjtFQXJETDtNQStDWSxhQUFZO01BQ1osYUFBWTtNQUNaLFlBQVc7TUFDWCxnQkFBZTtNQUNmLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hhbm9pdC10b3dlci9oYW5vaXQtdG93ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFub2l7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIC5jb3VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvd2VyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggcmlkZ2UgcmdiYSgwLCAwLCAwLCAwLjkyKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMmVtIDQuMzhlbSAxZW0gNC4zZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maXJzdHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmN2E4NTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Vjb25ke1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWJiMmZjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aGlyZHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0I4ODFDRjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm91cnRoe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYTY1OTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXN0YXJ0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/hanoit-tower/hanoit-tower.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hanoit-tower/hanoit-tower.component.ts ***!
  \********************************************************/
/*! exports provided: HanoitTowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HanoitTowerComponent", function() { return HanoitTowerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HanoitTowerComponent = /** @class */ (function () {
    function HanoitTowerComponent() {
        this.moves = 0;
        this.tower1 = [];
        this.tower2 = [];
        this.tower3 = [];
        this.initGame();
    }
    HanoitTowerComponent.prototype.ngOnInit = function () {
    };
    HanoitTowerComponent.prototype.initGame = function () {
        this.tower1 = [
            { name: 'first', value: 1 },
            { name: 'second', value: 2 },
            { name: 'third', value: 3 },
            { name: 'fourth', value: 4 }
        ];
        this.tower2 = [
            { name: 'zero', value: 0 },
            { name: 'zero', value: 0 },
            { name: 'zero', value: 0 },
            { name: 'zero', value: 0 }
        ];
        this.tower3 = [
            { name: 'zero', value: 0 },
            { name: 'zero', value: 0 },
            { name: 'zero', value: 0 },
            { name: 'zero', value: 0 }
        ];
        this.moves = 0;
        this.toBeMoved = null;
    };
    HanoitTowerComponent.prototype.moveToAnotherTower = function (tower) {
        for (var index = tower.length - 1; index >= 0; index--) {
            if (tower[index].value == 0) {
                if (!tower[index + 1]) {
                    tower[index] = this.toBeMoved;
                    this.toBeMoved = null;
                    this.moves++;
                    this.gameFinished();
                    break;
                }
                else {
                    if ((tower[index + 1].value != 0)
                        && (tower[index + 1].value >
                            this.toBeMoved.value)) {
                        tower[index] = this.toBeMoved;
                        this.toBeMoved = null;
                        this.moves++;
                        this.gameFinished();
                        break;
                    }
                }
            }
        }
    };
    HanoitTowerComponent.prototype.selectToBeMoved = function (tower) {
        for (var index = 0; index < tower.length; index++) {
            if (tower[index].value != 0) {
                this.toBeMoved = tower[index];
                tower[index] = { name: 'zero', value: 0 };
                break;
            }
        }
    };
    HanoitTowerComponent.prototype.move = function (tower) {
        if (this.toBeMoved) {
            this.moveToAnotherTower(tower);
        }
        else {
            this.selectToBeMoved(tower);
        }
    };
    HanoitTowerComponent.prototype.gameFinished = function () {
        if (this.tower2[0].value != 0 || this.tower3[0].value != 0) {
            console.log("Juego terminado");
            document.getElementById('alertBtn').click();
        }
    };
    HanoitTowerComponent.prototype.instructions = function () {
        document.getElementById('instBtn').click();
    };
    HanoitTowerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hanoit-tower',
            template: __webpack_require__(/*! ./hanoit-tower.component.html */ "./src/app/hanoit-tower/hanoit-tower.component.html"),
            styles: [__webpack_require__(/*! ./hanoit-tower.component.scss */ "./src/app/hanoit-tower/hanoit-tower.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HanoitTowerComponent);
    return HanoitTowerComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-top\">\r\n  <div class=\"container\">\r\n    <div class=\"head-nav\">\r\n      <div class=\"logo\">\r\n        <h1 class=\"title\" routerLink=\"/home\">LabMat <span>Juegos</span></h1>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"top-menu\">\r\n        <ul>\r\n          <li class=\"li-header color1\" routerLink=\"/home\" >Inicio</li>\r\n          <li class=\"li-header color2\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n             Juegos\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n              <li routerLink=\"/hanoit-tower\"><p>Torres de Hanói</p> </li>\r\n              <li routerLink=\"/senku\"><p>Senku</p></li>\r\n              <li><p>Juego 3</p></li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li class=\"li-header color3\" routerLink=\"/about-us\">Información</li>\r\n          <div class=\"clearfix\"></div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-top {\n  background: #fff; }\n  .header-top .head-nav {\n    padding: 2em 0;\n    position: relative; }\n  .header-top .head-nav .logo {\n      text-align: center;\n      padding-bottom: 1em; }\n  .header-top .head-nav .logo .title {\n        color: #5bb2fc;\n        font-size: 3em;\n        font-weight: 400;\n        font-family: 'Fugaz One', cursive;\n        cursor: pointer; }\n  .header-top .head-nav .logo .title span {\n          color: #fec63f; }\n  .header-top .head-nav .top-menu {\n      display: flex;\n      justify-content: center; }\n  .header-top .head-nav .top-menu ul {\n        margin: 0;\n        padding: 0; }\n  .header-top .head-nav .top-menu ul .li-header {\n          display: inline-block;\n          margin: 0;\n          color: #fff;\n          float: left;\n          vertical-align: top;\n          display: inline-block;\n          color: #fff;\n          text-decoration: none;\n          font-size: 1em;\n          padding: 1.2em 4.38em 1em 4.3em;\n          font-weight: 400;\n          cursor: pointer; }\n  .header-top .head-nav .top-menu ul .color1 {\n          background: #5bb2fc; }\n  .header-top .head-nav .top-menu ul .color2 {\n          background: #ffa659; }\n  .header-top .head-nav .top-menu ul .color2 ul {\n            background: #ffa659; }\n  .header-top .head-nav .top-menu ul .color2 ul li {\n              color: #fff;\n              padding: 2px; }\n  .header-top .head-nav .top-menu ul .color2 ul li :hover {\n                color: black; }\n  .header-top .head-nav .top-menu ul .color3 {\n          background: #B881CF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcQW5ndWxhclxcVENVXFxtYXRsYWItanVlZ29zL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQixFQTZEbkI7RUE5REQ7SUFHUSxlQUFjO0lBQ2QsbUJBQWtCLEVBeURyQjtFQTdETDtNQU1ZLG1CQUFrQjtNQUNsQixvQkFBbUIsRUFXdEI7RUFsQlQ7UUFTZ0IsZUFBYztRQUNkLGVBQWM7UUFDZCxpQkFBZ0I7UUFDaEIsa0NBQWlDO1FBQ2pDLGdCQUFlLEVBSWxCO0VBakJiO1VBZW9CLGVBQWMsRUFDakI7RUFoQmpCO01BcUJZLGNBQWE7TUFDYix3QkFBdUIsRUFzQzFCO0VBNURUO1FBd0JnQixVQUFTO1FBQ1QsV0FBVSxFQWtDYjtFQTNEYjtVQTJCb0Isc0JBQXFCO1VBQ3JCLFVBQVM7VUFDVCxZQUFXO1VBQ1gsWUFBVztVQUNYLG9CQUFtQjtVQUNuQixzQkFBcUI7VUFDckIsWUFBVztVQUNYLHNCQUFxQjtVQUNyQixlQUFjO1VBQ2QsZ0NBQStCO1VBQy9CLGlCQUFnQjtVQUNoQixnQkFBZSxFQUNsQjtFQXZDakI7VUF5Q29CLG9CQUFtQixFQUN0QjtFQTFDakI7VUE0Q29CLG9CQUFtQixFQVd0QjtFQXZEakI7WUE4Q3dCLG9CQUFtQixFQVF0QjtFQXREckI7Y0FnRDRCLFlBQVc7Y0FDWCxhQUFZLEVBSWY7RUFyRHpCO2dCQW1EZ0MsYUFBWSxFQUNmO0VBcEQ3QjtVQXlEb0Isb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdG9wIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAuaGVhZC1uYXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDJlbSAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTsgICAgIFxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1YmIyZmM7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Z1Z2F6IE9uZScsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZlYzYzZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcC1tZW51e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIC5saS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuMmVtIDQuMzhlbSAxZW0gNC4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29sb3IxIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWJiMmZjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbG9yMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYTY1OTtcclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmE2NTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29sb3IzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQjg4MUNGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-games-section\">\r\n  <div class=\"container\">\r\n    <!--sreen-gallery-cursual-->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 top-games game-1\" routerLink=\"/hanoit-tower\">\r\n        <h3>Torres de Hanoi</h3>\r\n        <p> Juego matemático inventado en 1883 por el matemático francés Édouard Lucas.\r\n          . El juego consiste en pasar todos los discos desde el poste ocupado\r\n          (es decir, el que posee la torre) a uno de los otros postes vacíos. </p>\r\n\r\n      </div>\r\n      <div class=\"col-md-3 top-games game-2\"  routerLink=\"/senku\">\r\n        <h3>Senku</h3>\r\n        <p>Conocido también como Uno Solo, es un juego de tablero creado en 1687 en Francia.\r\n          El juego consiste en ir moviendo una pueza por vez, las piezas slo pueden moverse capturando\r\n          mediante un salto sobre otra. El objetivo es eliminar todas las piezas, dejando una sola en el tablero.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-3 top-games game-3\">\r\n        <h3>Otro Juego</h3>\r\n        <p>Descripción de próximo juego</p>\r\n      </div>\r\n      <div class=\"col-md-3 top-games game-4\">\r\n        <h3>Otro Juego</h3>\r\n        <p>Descripción de próximo juego</p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-games-section {\n  padding: 3em 0; }\n\n.top-games {\n  margin: 0;\n  min-height: 420px;\n  padding: 2em 2em;\n  text-align: left;\n  cursor: pointer; }\n\n.top-games h3 {\n  font-size: 2.5em;\n  color: #fff;\n  line-height: 1.4em;\n  text-align: left;\n  font-family: 'Fugaz One', cursive; }\n\n.top-games p {\n  line-height: 1.7em;\n  font-size: 0.9em;\n  color: #fff;\n  margin: 1em 0; }\n\n.game-1 {\n  background-color: #FEC63F; }\n\n.game-2 {\n  background-color: #58ebd3; }\n\n.game-3 {\n  background-color: #ff7a85; }\n\n.game-4 {\n  background-color: #B881CF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEFuZ3VsYXJcXFRDVVxcbWF0bGFiLWp1ZWdvcy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWMsRUFDZjs7QUFDRDtFQUNHLFVBQVM7RUFDVixrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNsQixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNkLGtDQUFpQyxFQUNwQzs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGNBQWEsRUFDZDs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtZ2FtZXMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzZW0gMDtcclxuICB9XHJcbiAgLnRvcC1nYW1lcyB7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogNDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyZW0gMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRvcC1nYW1lcyAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LWZhbWlseTogJ0Z1Z2F6IE9uZScsIGN1cnNpdmU7XHJcbiAgfVxyXG4gIC50b3AtZ2FtZXMgIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICB9XHJcblxyXG4gIC5nYW1lLTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVDNjNGO1xyXG4gIH1cclxuICAuZ2FtZS0ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4ZWJkMztcclxuICB9XHJcbiAgLmdhbWUtM3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhODU7XHJcbiAgfVxyXG4gIC5nYW1lLTR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjg4MUNGO1xyXG4gIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/senku/senku.component.html":
/*!********************************************!*\
  !*** ./src/app/senku/senku.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"UTF-8\">\n\t<title>Senku</title>\n\t\n</head>\n<body>\n\t\t<div class=\"row restart\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-dark\" (click)=\"instructions()\">\n\t\t\t\t  <fa name=\"list\" class=\"icon\"></fa> Instrucciones\n\t\t\t\t</button>\n\t\t\t  </div>\n\t<svg height=\"100%\" width=\"100%\" viewBox=\"0 0 200 200\">\n\t\t<!--Horizontal lines-->\n\t\t<line id=\"hor1\" class=\"tablero\" x1=\"75\" y1=\"25\" x2=\"125\" y2=\"25\"/>\n\t\t<line id=\"hor2\" class=\"tablero\" x1=\"75\" y1=\"50\" x2=\"125\" y2=\"50\"/>\n\t\t<line id=\"hor3\" class=\"tablero\" x1=\"25\" y1=\"75\" x2=\"175\" y2=\"75\"/>\n\t\t<line id=\"hor4\" class=\"tablero\" x1=\"25\" y1=\"100\" x2=\"175\" y2=\"100\"/>\n\t\t<line id=\"hor5\" class=\"tablero\" x1=\"25\" y1=\"125\" x2=\"175\" y2=\"125\"/>\n\t\t<line id=\"hor6\" class=\"tablero\" x1=\"75\" y1=\"150\" x2=\"125\" y2=\"150\"/>\n\t\t<line id=\"hor7\" class=\"tablero\" x1=\"75\" y1=\"175\" x2=\"125\" y2=\"175\"/>\n\n\t\t<!--Vertical lines-->\n\t\t<line id=\"ver1\" class=\"tablero\" x1=\"25\" y1=\"75\" x2=\"25\" y2=\"125\"/>\n\t\t<line id=\"ver2\" class=\"tablero\" x1=\"50\" y1=\"75\" x2=\"50\" y2=\"125\"/>\n\t\t<line id=\"ver3\" class=\"tablero\" x1=\"75\" y1=\"25\" x2=\"75\" y2=\"175\"/>\n\t\t<line id=\"ver4\" class=\"tablero\" x1=\"100\" y1=\"25\" x2=\"100\" y2=\"175\"/>\n\t\t<line id=\"ver5\" class=\"tablero\" x1=\"125\" y1=\"25\" x2=\"125\" y2=\"175\"/>\n\t\t<line id=\"ver6\" class=\"tablero\" x1=\"150\" y1=\"75\" x2=\"150\" y2=\"125\"/>\n\t\t<line id=\"ver7\" class=\"tablero\" x1=\"175\" y1=\"75\" x2=\"175\" y2=\"125\"/>\n\n\t\t<!--Casillas-->\n\t\t<circle id=\"f1\" class=\"ficha\" cx=\"75\" cy=\"25\" r=\"10\"/>\n\t\t<circle id=\"f2\" class=\"ficha\" cx=\"100\" cy=\"25\" r=\"10\"/>\n\t\t<circle id=\"f3\" class=\"ficha\" cx=\"125\" cy=\"25\" r=\"10\"/>\n\n\t\t<circle id=\"f4\" class=\"ficha\" cx=\"75\" cy=\"50\" r=\"10\"/>\n\t\t<circle id=\"f5\" class=\"ficha\" cx=\"100\" cy=\"50\" r=\"10\"/>\n\t\t<circle id=\"f6\" class=\"ficha\" cx=\"125\" cy=\"50\" r=\"10\"/>\n\n\t\t<circle id=\"f7\" class=\"ficha\" cx=\"25\" cy=\"75\" r=\"10\"/>\n\t\t<circle id=\"f8\" class=\"ficha\" cx=\"50\" cy=\"75\" r=\"10\"/>\n\t\t<circle id=\"f9\" class=\"ficha\" cx=\"75\" cy=\"75\" r=\"10\"/>\n\t\t<circle id=\"f10\" class=\"ficha\" cx=\"100\" cy=\"75\" r=\"10\"/>\n\t\t<circle id=\"f11\" class=\"ficha\" cx=\"125\" cy=\"75\" r=\"10\"/>\n\t\t<circle id=\"f12\" class=\"ficha\" cx=\"150\" cy=\"75\" r=\"10\"/>\n\t\t<circle id=\"f13\" class=\"ficha\" cx=\"175\" cy=\"75\" r=\"10\"/>\n\n\t\t<circle id=\"f14\" class=\"ficha\" cx=\"25\" cy=\"100\" r=\"10\"/>\n\t\t<circle id=\"f15\" class=\"ficha\" cx=\"50\" cy=\"100\" r=\"10\"/>\n\t\t<circle id=\"f16\" class=\"ficha\" cx=\"75\" cy=\"100\" r=\"10\"/>\n\t\t<circle id=\"f17\" class=\"casilla\" cx=\"100\" cy=\"100\" r=\"10\"/>\n\t\t<circle id=\"f18\" class=\"ficha\" cx=\"125\" cy=\"100\" r=\"10\"/>\n\t\t<circle id=\"f19\" class=\"ficha\" cx=\"150\" cy=\"100\" r=\"10\"/>\n\t\t<circle id=\"f20\" class=\"ficha\" cx=\"175\" cy=\"100\" r=\"10\"/>\n\n\t\t<circle id=\"f21\" class=\"ficha\" cx=\"25\" cy=\"125\" r=\"10\"/>\n\t\t<circle id=\"f22\" class=\"ficha\" cx=\"50\" cy=\"125\" r=\"10\"/>\n\t\t<circle id=\"f23\" class=\"ficha\" cx=\"75\" cy=\"125\" r=\"10\"/>\n\t\t<circle id=\"f24\" class=\"ficha\" cx=\"100\" cy=\"125\" r=\"10\"/>\n\t\t<circle id=\"f25\" class=\"ficha\" cx=\"125\" cy=\"125\" r=\"10\"/>\n\t\t<circle id=\"f26\" class=\"ficha\" cx=\"150\" cy=\"125\" r=\"10\"/>\n\t\t<circle id=\"f27\" class=\"ficha\" cx=\"175\" cy=\"125\" r=\"10\"/>\n\n\t\t<circle id=\"f28\" class=\"ficha\" cx=\"75\" cy=\"150\" r=\"10\"/>\n\t\t<circle id=\"f29\" class=\"ficha\" cx=\"100\" cy=\"150\" r=\"10\"/>\n\t\t<circle id=\"f30\" class=\"ficha\" cx=\"125\" cy=\"150\" r=\"10\"/>\n\n\t\t<circle id=\"f31\" class=\"ficha\" cx=\"75\" cy=\"175\" r=\"10\"/>\n\t\t<circle id=\"f32\" class=\"ficha\" cx=\"100\" cy=\"175\" r=\"10\"/>\n\t\t<circle id=\"f33\" class=\"ficha\" cx=\"125\" cy=\"175\" r=\"10\"/>\n\n\t\t<!--Menu-->\n\t\t<rect id=\"cajaBoton\" class=\"botonM\" x=\"170\" y=\"170\" rx=\"4\" ry=\"4\" width=\"20\" height=\"20\"/>\n\t\t<circle id=\"engranajeBoton\" class=\"botonM\" cx=\"180\" cy=\"180\" r=\"5\" fill=\"black\" stroke=\"black\" stroke-dasharray=\"2\" stroke-width=\"2\"/>\n\t\t<circle id=\"engranajeVacioBoton\" class=\"botonM\" cx=\"180\" cy=\"180\" r=\"3\" fill=\"green\"/>\n\t\t<rect id=\"menu\" class=\"menuClass\" x=\"0\" y=\"0\" width=\"0\" height=\"0\" fill=\"rgb(50,50,50)\" style=\"fill-opacity:0;stroke-opacity:0\"/>\n\t\t<text id=\"reiniciar\" class=\"menuClass\" x=\"35\" y=\"50\" style=\"fill-opacity:0;stroke-opacity:0\"></text>\n\t\t<text id=\"volverJuego\" class=\"menuClass\" x=\"40\" y=\"150\" style=\"fill-opacity:0;stroke-opacity:0\"></text>\n\t\t\n\t\t\n\n\t\t<!--Chivatos-->\n\t\t<!--<text id=\"chivato0\" x=\"10\" y=\"5\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato1\" x=\"10\" y=\"10\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato2\" x=\"10\" y=\"15\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato3\" x=\"10\" y=\"20\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato4\" x=\"10\" y=\"25\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato5\" x=\"10\" y=\"30\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato6\" x=\"10\" y=\"35\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato7\" x=\"10\" y=\"40\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato8\" x=\"10\" y=\"45\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato9\" x=\"10\" y=\"50\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato10\" x=\"10\" y=\"55\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato11\" x=\"10\" y=\"60\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato12\" x=\"10\" y=\"65\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato13\" x=\"10\" y=\"70\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato14\" x=\"10\" y=\"75\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato15\" x=\"10\" y=\"80\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato16\" x=\"10\" y=\"85\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato17\" x=\"10\" y=\"90\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato18\" x=\"10\" y=\"95\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato19\" x=\"10\" y=\"100\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato20\" x=\"10\" y=\"105\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato21\" x=\"10\" y=\"110\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato22\" x=\"10\" y=\"115\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato23\" x=\"10\" y=\"120\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato24\" x=\"10\" y=\"125\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato25\" x=\"10\" y=\"130\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato26\" x=\"10\" y=\"135\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato27\" x=\"10\" y=\"140\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato28\" x=\"10\" y=\"145\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato29\" x=\"10\" y=\"150\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato30\" x=\"10\" y=\"155\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato31\" x=\"10\" y=\"160\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato32\" x=\"10\" y=\"165\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato33\" x=\"10\" y=\"170\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato34\" x=\"10\" y=\"175\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato35\" x=\"10\" y=\"180\" font-size=\"0.3em\" style=\"fill:black;\"></text>\n\t\t<text id=\"chivato36\" x=\"10\" y=\"185\" font-size=\"0.3em\" style=\"fill:black;\"></text>-->\n\t</svg>\n\n\t<div class=\"row restart\">\n\t\t\t<button type=\"button\" class=\"btn btn-dark\" (click)=\"instructions()\">\n\t\t\t  <fa name=\"list\" class=\"icon\"></fa> Instrucciones\n\t\t\t</button>\n\t\t  </div>\n\n\t\n<button hidden id=\"instBtn\" [swal]=\"instSwal\">\n\t</button>\n\t<swal #instSwal title=\"Instrucciones del juego\" type=\"info\" html=\"\"\n\t  html=\" <br/> Jugadores: 1 <br/> <br/>\n\t  <br/> Objetivo: dejar una ficha en el tablero<br/> <br/>\n\t  Jugando:<br/>  <br/>\n\t<ul> \n\t  <li>Se disponen las 32 fichas en los vértices del tablero.</li>\n\t  <li> Al inicio el jugador mueve una ficha a un espacio vacío, obligadamente comiendo a otra ficha.</li>\n\t  <li> Para comer una ficha se debe saltar sobre ella. La ficha comida se retira del tablero.</li>\n\t  <li>Las fichas se mueven en forma horizontal y vertical y sólo salta sobre una ficha. No pueden moverse en diagonal.</li>\n\t  <li>Gana si logra dejar sólo una ficha en el tablero. Pierde si no tiene más movimientos posibles.</li>\n\t</ul>\">\n\t</swal>\n\n\n</body>\n<script>\nconsole.log(\"working fine\");\n$(function()\n{\n\tvar fichaSeleccionada; //La ficha que esté seleccionada\n\tvar menuVisible = false;\n\tvar contFichas = 32;\n\tvar tablero = [\n\t\t{id: \"#f1\", ficha: true, x: 3, y: 1},//Primera fila\n\t\t{id: \"#f2\", ficha: true, x: 4, y: 1},\n\t\t{id: \"#f3\", ficha: true, x: 5, y: 1},\n\t\t{id: \"#f4\", ficha: true, x: 3, y: 2},//Segunda fila\n\t\t{id: \"#f5\", ficha: true, x: 4, y: 2},\n\t\t{id: \"#f6\", ficha: true, x: 5, y: 2},\n\t\t{id: \"#f7\", ficha: true, x: 1, y: 3},//Tercera fila\n\t\t{id: \"#f8\", ficha: true, x: 2, y: 3},\n\t\t{id: \"#f9\", ficha: true, x: 3, y: 3},\n\t\t{id: \"#f10\", ficha: true, x: 4, y: 3},\n\t\t{id: \"#f11\", ficha: true, x: 5, y: 3},\n\t\t{id: \"#f12\", ficha: true, x: 6, y: 3},\n\t\t{id: \"#f13\", ficha: true, x: 7, y: 3},\n\t\t{id: \"#f14\", ficha: true, x: 1, y: 4},//Cuarta fila\n\t\t{id: \"#f15\", ficha: true, x: 2, y: 4},\n\t\t{id: \"#f16\", ficha: true, x: 3, y: 4},\n\t\t{id: \"#f17\", ficha: false, x: 4, y: 4},\n\t\t{id: \"#f18\", ficha: true, x: 5, y: 4},\n\t\t{id: \"#f19\", ficha: true, x: 6, y: 4},\n\t\t{id: \"#f20\", ficha: true, x: 7, y: 4},\n\t\t{id: \"#f21\", ficha: true, x: 1, y: 5},//Quinta fila\n\t\t{id: \"#f22\", ficha: true, x: 2, y: 5},\n\t\t{id: \"#f23\", ficha: true, x: 3, y: 5},\n\t\t{id: \"#f24\", ficha: true, x: 4, y: 5},\n\t\t{id: \"#f25\", ficha: true, x: 5, y: 5},\n\t\t{id: \"#f26\", ficha: true, x: 6, y: 5},\n\t\t{id: \"#f27\", ficha: true, x: 7, y: 5},\n\t\t{id: \"#f28\", ficha: true, x: 3, y: 6},//Sexta fila\n\t\t{id: \"#f29\", ficha: true, x: 4, y: 6},\n\t\t{id: \"#f30\", ficha: true, x: 5, y: 6},\n\t\t{id: \"#f31\", ficha: true, x: 3, y: 7},//Septima fila\n\t\t{id: \"#f32\", ficha: true, x: 4, y: 7},\n\t\t{id: \"#f33\", ficha: true, x: 5, y: 7},\n\t];\n\n\n\t/***********************************************\n\t** Elimina una ficha en una casilla dado el id\n\t***********************************************/\n\tfunction ocultaFicha( idCasilla )\n\t{\n\t\t//Oculta ficha en interfaz\n\t\t$(idCasilla).attr('class', 'casilla');\n\n\t\t//Oculta ficha en diccionario de casillas (tablero)\n\t\tfor(var i=0; i<tablero.length; i++)\n\t\t{\n\t\t\tif(tablero[i].id === idCasilla)\n\t\t\t{\n\t\t\t\ttablero[i].ficha = false;\n\t\t\t}\n\t\t}\n\t}\n\n\t/***********************************************\n\t** Muestra una ficha en una casilla dado el id\n\t***********************************************/\n\tfunction muestraFicha( idCasilla )\n\t{\n\t\t//Muestra ficha en interfaz\n\t\t$(idCasilla).attr('class', 'ficha');\n\n\t\t//Muestra ficha en diccionario de casillas (tablero)\n\t\tfor(var i=0; i<tablero.length; i++)\n\t\t{\n\t\t\tif(tablero[i].id === idCasilla)\n\t\t\t{\n\t\t\t\ttablero[i].ficha = true;\n\t\t\t}\n\t\t}\n\t}\n\n\t/***********************************************\n\t** Selecciona una ficha dado el id de la casilla\n\t***********************************************/\n\tfunction seleccionaFicha( idCasilla )\n\t{\n\t\t//Si ya hay una ficha seleccionada\n\t\tif(fichaSeleccionada != undefined)\n\t\t{\n\t\t\tdeseleccionaFicha(fichaSeleccionada);\n\t\t}\n\n\t\t$(idCasilla).attr('class', 'fichaSeleccionada');\n\t\tfichaSeleccionada = idCasilla;\n\t}\n\n\t/***********************************************\n\t** Deselecciona una ficha dado el id de la casilla\n\t***********************************************/\n\tfunction deseleccionaFicha( idCasilla )\n\t{\n\t\t//Si la ficha existe todavia\n\t\tif( $(fichaSeleccionada).attr('class') === 'fichaSeleccionada' )\n\t\t\t$(idCasilla).attr('class', 'ficha');\n\t}\n\n\t/***********************************************\n\t** Recibe el id de una casilla vacía en la que se ha hecho click, estando la ficha seleccionada en fichaSeleccionada\n\t***********************************************/\n\tfunction logicaFichas ( idCasilla )\n\t{\n\t\tvar clavija = {}; //Almacena coordenadas de la casilla vacía\n\t\tvar miFicha = {}; //Almacena coordenadas de la casilla con la ficha seleccionada\n\t\tvar fichaComida = {}; //Almacena coordenadas de la casilla con la posible ficha a comer\n\n\t\tclavija.x = tablero[ idCasilla.substring( 2,idCasilla.length ) - 1 ].x;\n\t\tclavija.y = tablero[ idCasilla.substring( 2,idCasilla.length ) - 1 ].y;\n\t\tmiFicha.x = tablero[ fichaSeleccionada.substring( 2,fichaSeleccionada.length ) - 1 ].x;\n\t\tmiFicha.y = tablero[ fichaSeleccionada.substring( 2,fichaSeleccionada.length ) - 1 ].y;\n\n\t\t//Se juega en el eje x\n\t\tif( miFicha.y === clavija.y )\n\t\t{\n\t\t\t//Ficha seleccionada y espacio vacío a una distacia de 2\n\t\t\tif( Math.abs( miFicha.x - clavija.x ) === 2 )\n\t\t\t{\n\t\t\t\t//Hallo coordenadas de la probable ficha a comer\n\t\t\t\tfichaComida.x = Math.max(miFicha.x, clavija.x) - 1;\n\t\t\t\tfichaComida.y = miFicha.y;\n\t\t\t\t//alert(fichaComida.x + \":\" + fichaComida.y);\n\n\t\t\t\tfor(var i = 0; i<tablero.length; i++)\n\t\t\t\t{\n\t\t\t\t\tif(tablero[i].x === fichaComida.x && tablero[i].y === fichaComida.y)\n\t\t\t\t\t{\n\t\t\t\t\t\t//Si hay para comer\n\t\t\t\t\t\tif( tablero[i].ficha === true )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tocultaFicha(tablero[i].id); //Ocultar ficha comida\n\t\t\t\t\t\t\tocultaFicha(fichaSeleccionada); //Ocultar ficha seleccionada\n\t\t\t\t\t\t\tmuestraFicha(idCasilla); //Mostrar ficha en casilla vacía\n\t\t\t\t\t\t\tcontFichas --;//Decrementar contador fichas\n\t\t\t\t\t\t\testadoPartida(); //Comprobamos estado partida\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\t\n\t\t\t}\n\t\t}\n\n\t\t//Se juega en el eje y\n\t\tif( miFicha.x === clavija.x )\n\t\t{\n\t\t\t//Ficha seleccionada y espacio vacío a una distacia de 2\n\t\t\tif( Math.abs( miFicha.y - clavija.y ) === 2 )\n\t\t\t{\n\t\t\t\t//Hallo coordenadas de la probable ficha a comer\n\t\t\t\tfichaComida.y = Math.max(miFicha.y, clavija.y) - 1;\n\t\t\t\tfichaComida.x = miFicha.x;\n\n\t\t\t\tfor(var i = 0; i<tablero.length; i++)\n\t\t\t\t{\n\t\t\t\t\tif(tablero[i].x === fichaComida.x && tablero[i].y === fichaComida.y)\n\t\t\t\t\t{\n\t\t\t\t\t\t//Si hay para comer\n\t\t\t\t\t\tif( tablero[i].ficha === true )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tocultaFicha(tablero[i].id); //Ocultar ficha comida\n\t\t\t\t\t\t\tocultaFicha(fichaSeleccionada); //Ocultar ficha seleccionada\n\t\t\t\t\t\t\tmuestraFicha(idCasilla); //Mostrar ficha en casilla vacía\n\t\t\t\t\t\t\tcontFichas --; //Decrementar contador fichas\n\t\t\t\t\t\t\testadoPartida(); //Comprobamos estado partida\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t/*********************************************************\n\t** Maneja lo que ocurre al hacer click sobre una casilla\n\t*********************************************************/\n\tfunction clickCasilla( idCasilla )\n\t{\n\t\t//Click en un espacio vacío\n\t\tif( $(idCasilla).attr('class') === 'casilla' )\n\t\t{\n\t\t\t//Si hay una ficha seleccionada\n\t\t\tif(fichaSeleccionada != undefined)\n\t\t\t{\n\t\t\t\tlogicaFichas(idCasilla);\n\t\t\t}\n\t\t}\n\t\t//Click en una ficha\n\t\telse\n\t\t{\n\t\t\tseleccionaFicha( idCasilla );\n\t\t}\n\t}\n\n\t/***********************************************************\n\t** Calcula el estado de la partida (ganada/sin movimientos)\n\t***********************************************************/\n\tfunction estadoPartida()\n\t{\n\t\tvar movimientosPosibles = false;\n\t\tvar tempMovs;\n\t\tvar iter = 0;\n\n\t\t//Si el juego está ganado\n\t\tif(contFichas == 1)\n\t\t{\n\t\t\talert('¡Ha ganado el juego! ¿Desea reiniciar la partida?');\n\t\t\tchangeMenu();\n\t\t}\n\t\t//Si el juego no está ganado\n\t\telse\n\t\t{\n\t\t\twhile( (iter < tablero.length) && (!movimientosPosibles) )\n\t\t\t{\n\t\t\t\t//Si hay una ficha en esa casilla del tablero\n\t\t\t\tif(tablero[iter].ficha)\n\t\t\t\t{\n\t\t\t\t\t//Comprobar si puede haber movimiento hacia la izquierda\n\t\t\t\t\tif(iter+1==3 || iter+1==6 || iter+1==9 || iter+1==10 || iter+1==11 || iter+1==12 || iter+1==13 || iter+1==16 || iter+1==17 || iter+1==18 || iter+1==19 || iter+1==20 || iter+1==23 || iter+1==24 || iter+1==25 || iter+1==26 || iter+1==27 || iter+1==30 || iter+1==33)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter-1].ficha && !tablero[iter-2].ficha)\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t//Comprobar si puede haber movimiento hacia la derecha\n\t\t\t\t\tif(iter+1==1 || iter+1==4 || iter+1==7 || iter+1==8 || iter+1==9 || iter+1==10 || iter+1==11 || iter+1==14 || iter+1==15 || iter+1==16 || iter+1==17 || iter+1==18 || iter+1==21 || iter+1==22 || iter+1==23 || iter+1==24 || iter+1==25 || iter+1==28 || iter+1==31)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter+1].ficha && !tablero[iter+2].ficha)\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t//Comprobar si puede haber movimiento hacia abajo\n\t\t\t\t\t//Caso 1 (fila 3)\n\t\t\t\t\tif(iter+1==7 || iter+1==8 || iter+1==9 || iter+1==10 || iter+1==11 || iter+1==12 || iter+1==13)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter+7].ficha && !tablero[iter+14].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 2 (fila 1)\n\t\t\t\t\tif(iter+1==1 || iter+1==2 || iter+1==3)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter+3].ficha && !tablero[iter+8].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 3 (fila 2)\n\t\t\t\t\tif(iter+1==4 || iter+1==5 || iter+1==6)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter+5].ficha && !tablero[iter+12].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 4 (fila 4)\n\t\t\t\t\tif(iter+1==16 || iter+1==17 || iter+1==18)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter+7].ficha && !tablero[iter+12].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 5 (fila 5)\n\t\t\t\t\tif(iter+1==23 || iter+1==24 || iter+1==25)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter+5].ficha && !tablero[iter+8].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t//Comprobar si puede haber movimiento hacia arriba\n\t\t\t\t\t//Caso 1 (fila 5)\n\t\t\t\t\tif(iter+1==21 || iter+1==22 || iter+1==23 || iter+1==24 || iter+1==25 || iter+1==26 || iter+1==27)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter-7].ficha && !tablero[iter-14].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 2 (fila 3)\n\t\t\t\t\tif(iter+1==9 || iter+1==10 || iter+1==11)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter-5].ficha && !tablero[iter-8].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 3 (fila 4)\n\t\t\t\t\tif(iter+1==16 || iter+1==17 || iter+1==18)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter-7].ficha && !tablero[iter-12].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 4 (fila 6)\n\t\t\t\t\tif(iter+1==28 || iter+1==29 || iter+1==30)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter-5].ficha && !tablero[iter-12].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t\t//Caso 5 (fila 7)\n\t\t\t\t\tif(iter+1==31 || iter+1==32 || iter+1==33)\n\t\t\t\t\t{\n\t\t\t\t\t\tif( tablero[iter-3].ficha && !tablero[iter-8].ficha )\n\t\t\t\t\t\t\tmovimientosPosibles = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\titer++;\n\t\t\t}\n\n\n\t\t\tif(!movimientosPosibles)\n\t\t\t{\n\t\t\t\talert(\"Sin movimientos posibles.\");\n\t\t\t\tchangeMenu();\n\t\t\t}\n\t\t}\n\t}\n\n\t//CHIVATO\n\t/*function chivato()\n\t{\n\t\tvar nombreID = \"#chivato\";\n\n\t\tfor(var i=0; i<tablero.length; i++)\n\t\t{\n\t\t\tnombreID = \"\" + nombreID + i;\n\t\t\t$(nombreID).html(tablero[i].id + ': ' + tablero[i].visible);\n\t\t\tnombreID = \"#chivato\";\n\t\t}\n\t}\n\n\tsetInterval(function(){chivato();}, 1000);\n\tchivato();*/\n\n\t/***************************\n\t** Muestra/oculta el menu\n\t***************************/\n\tfunction changeMenu()\n\t{\n\t\t//Si el menu esta visible se oculta\n\t\tif(menuVisible)\n\t\t{\n\t\t\t$(\".menuClass\").attr(\"style\", \"fill-opacity:0;stroke-opacity:0\");\n\t\t\t$(\"#menu\").attr(\"width\", \"0\");\n\t\t\t$(\"#menu\").attr(\"height\", \"0\");\n\t\t\t$(\"#reiniciar\").html(\"\");\n\t\t\t$(\"#volverJuego\").html(\"\");\n\t\t\tmenuVisible = false;\n\t\t}\n\t\t//Si el menu esta oculto se muestra\n\t\telse\n\t\t{\n\t\t\t$(\".menuClass\").attr(\"style\", \"\");\n\t\t\t$(\"#menu\").attr(\"width\", \"100%\");\n\t\t\t$(\"#menu\").attr(\"height\", \"100%\");\n\t\t\t$(\"#reiniciar\").html(\"Reiniciar partida\");\n\t\t\t$(\"#volverJuego\").html(\"Volver al juego\");\n\t\t\tmenuVisible = true;\n\t\t}\n\t}\n\n\t/***********************\n\t** Reinicia la partida\n\t***********************/\n\tfunction reiniciaPartida()\n\t{\n\t\ttablero = [\n\t\t\t{id: \"#f1\", ficha: true, x: 3, y: 1},//Primera fila\n\t\t\t{id: \"#f2\", ficha: true, x: 4, y: 1},\n\t\t\t{id: \"#f3\", ficha: true, x: 5, y: 1},\n\t\t\t{id: \"#f4\", ficha: true, x: 3, y: 2},//Segunda fila\n\t\t\t{id: \"#f5\", ficha: true, x: 4, y: 2},\n\t\t\t{id: \"#f6\", ficha: true, x: 5, y: 2},\n\t\t\t{id: \"#f7\", ficha: true, x: 1, y: 3},//Tercera fila\n\t\t\t{id: \"#f8\", ficha: true, x: 2, y: 3},\n\t\t\t{id: \"#f9\", ficha: true, x: 3, y: 3},\n\t\t\t{id: \"#f10\", ficha: true, x: 4, y: 3},\n\t\t\t{id: \"#f11\", ficha: true, x: 5, y: 3},\n\t\t\t{id: \"#f12\", ficha: true, x: 6, y: 3},\n\t\t\t{id: \"#f13\", ficha: true, x: 7, y: 3},\n\t\t\t{id: \"#f14\", ficha: true, x: 1, y: 4},//Cuarta fila\n\t\t\t{id: \"#f15\", ficha: true, x: 2, y: 4},\n\t\t\t{id: \"#f16\", ficha: true, x: 3, y: 4},\n\t\t\t{id: \"#f17\", ficha: false, x: 4, y: 4},\n\t\t\t{id: \"#f18\", ficha: true, x: 5, y: 4},\n\t\t\t{id: \"#f19\", ficha: true, x: 6, y: 4},\n\t\t\t{id: \"#f20\", ficha: true, x: 7, y: 4},\n\t\t\t{id: \"#f21\", ficha: true, x: 1, y: 5},//Quinta fila\n\t\t\t{id: \"#f22\", ficha: true, x: 2, y: 5},\n\t\t\t{id: \"#f23\", ficha: true, x: 3, y: 5},\n\t\t\t{id: \"#f24\", ficha: true, x: 4, y: 5},\n\t\t\t{id: \"#f25\", ficha: true, x: 5, y: 5},\n\t\t\t{id: \"#f26\", ficha: true, x: 6, y: 5},\n\t\t\t{id: \"#f27\", ficha: true, x: 7, y: 5},\n\t\t\t{id: \"#f28\", ficha: true, x: 3, y: 6},//Sexta fila\n\t\t\t{id: \"#f29\", ficha: true, x: 4, y: 6},\n\t\t\t{id: \"#f30\", ficha: true, x: 5, y: 6},\n\t\t\t{id: \"#f31\", ficha: true, x: 3, y: 7},//Septima fila\n\t\t\t{id: \"#f32\", ficha: true, x: 4, y: 7},\n\t\t\t{id: \"#f33\", ficha: true, x: 5, y: 7},\n\t\t];\n\n\t\tdeseleccionaFicha(fichaSeleccionada);\n\n\t\tfor(var i=0; i<tablero.length; i++)\n\t\t{\n\t\t\t//$(tablero[i].id).attr('class', 'ficha');\n\t\t\tif(i == 16)\n\t\t\t\tocultaFicha( tablero[i].id );\n\t\t\telse\n\t\t\t\tmuestraFicha( tablero[i].id );\n\t\t}\n\n\t\tcontFichas = 32;\n\t\tfichaSeleccionada = undefined;\n\n\t\tchangeMenu();\n\t}\n\n\t/**********************\n\t** Manejo de eventos\n\t**********************/\n\t$(\".botonM\").on('click', changeMenu);\n\t$(\"#reiniciar\").on('click', reiniciaPartida);\n\t$(\"#volverJuego\").on('click', changeMenu);\n\n\n\t$(\"#f1\").on('click', function(){clickCasilla(\"#f1\");});\n\t$(\"#f2\").on('click', function(){clickCasilla(\"#f2\");});\n\t$(\"#f3\").on('click', function(){clickCasilla(\"#f3\");});\n\t$(\"#f4\").on('click', function(){clickCasilla(\"#f4\");});\n\t$(\"#f5\").on('click', function(){clickCasilla(\"#f5\");});\n\t$(\"#f6\").on('click', function(){clickCasilla(\"#f6\");});\n\t$(\"#f7\").on('click', function(){clickCasilla(\"#f7\");});\n\t$(\"#f8\").on('click', function(){clickCasilla(\"#f8\");});\n\t$(\"#f9\").on('click', function(){clickCasilla(\"#f9\");});\n\t$(\"#f10\").on('click', function(){clickCasilla(\"#f10\");});\n\t$(\"#f11\").on('click', function(){clickCasilla(\"#f11\");});\n\t$(\"#f12\").on('click', function(){clickCasilla(\"#f12\");});\n\t$(\"#f13\").on('click', function(){clickCasilla(\"#f13\");});\n\t$(\"#f14\").on('click', function(){clickCasilla(\"#f14\");});\n\t$(\"#f15\").on('click', function(){clickCasilla(\"#f15\");});\n\t$(\"#f16\").on('click', function(){clickCasilla(\"#f16\");});\n\t$(\"#f17\").on('click', function(){clickCasilla(\"#f17\");});\n\t$(\"#f18\").on('click', function(){clickCasilla(\"#f18\");});\n\t$(\"#f19\").on('click', function(){clickCasilla(\"#f19\");});\n\t$(\"#f20\").on('click', function(){clickCasilla(\"#f20\");});\n\t$(\"#f21\").on('click', function(){clickCasilla(\"#f21\");});\n\t$(\"#f22\").on('click', function(){clickCasilla(\"#f22\");});\n\t$(\"#f23\").on('click', function(){clickCasilla(\"#f23\");});\n\t$(\"#f24\").on('click', function(){clickCasilla(\"#f24\");});\n\t$(\"#f25\").on('click', function(){clickCasilla(\"#f25\");});\n\t$(\"#f26\").on('click', function(){clickCasilla(\"#f26\");});\n\t$(\"#f27\").on('click', function(){clickCasilla(\"#f27\");});\n\t$(\"#f28\").on('click', function(){clickCasilla(\"#f28\");});\n\t$(\"#f29\").on('click', function(){clickCasilla(\"#f29\");});\n\t$(\"#f30\").on('click', function(){clickCasilla(\"#f30\");});\n\t$(\"#f31\").on('click', function(){clickCasilla(\"#f31\");});\n\t$(\"#f32\").on('click', function(){clickCasilla(\"#f32\");});\n\t$(\"#f33\").on('click', function(){clickCasilla(\"#f33\");});\n})\n</script>\n\n<script>\n\t/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */\nvar Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||\"object\"}function Z(t){return\"function\"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return\"object\"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return\"number\"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,\"/\").replace(/([A-Z]+)([A-Z][a-z])/g,\"$1_$2\").replace(/([a-z\\d])([A-Z])/g,\"$1_$2\").replace(/_/g,\"-\").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp(\"(^|\\\\s)\"+t+\"(\\\\s|$)\")}function H(t,e){return\"number\"!=typeof e||c[F(t)]?e:e+\"px\"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,\"\").getPropertyValue(\"display\"),e.parentNode.removeChild(e),\"none\"==n&&(n=\"block\"),u[t]=n),u[t]}function V(t){return\"children\"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?\"true\"==t||(\"false\"==t?!1:\"null\"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\\[\\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={\"column-count\":1,columns:1,\"font-weight\":1,\"line-height\":1,opacity:1,\"z-index\":1,zoom:1},l=/^\\s*<(\\w+|!)[^>]*>/,h=/^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=[\"val\",\"css\",\"html\",\"text\",\"data\",\"width\",\"height\",\"offset\"],v=[\"after\",\"prepend\",\"before\",\"append\"],y=a.createElement(\"table\"),x=a.createElement(\"tr\"),b={tr:a.createElement(\"tbody\"),tbody:y,thead:y,tfoot:y,td:x,th:x,\"*\":a.createElement(\"div\")},w=/complete|loaded|interactive/,E=/^[\\w-]*$/,j={},S=j.toString,T={},O=a.createElement(\"div\"),P={tabindex:\"tabIndex\",readonly:\"readOnly\",\"for\":\"htmlFor\",\"class\":\"className\",maxlength:\"maxLength\",cellspacing:\"cellSpacing\",cellpadding:\"cellPadding\",rowspan:\"rowSpan\",colspan:\"colSpan\",usemap:\"useMap\",frameborder:\"frameBorder\",contenteditable:\"contentEditable\"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():\"\"})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,\"<$1></$2>\")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i=\"*\"),f=b[i],f.innerHTML=\"\"+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||\"\",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if(\"string\"==typeof e)if(e=e.trim(),\"<\"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return\"boolean\"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i=\"#\"==e[0],r=!i&&\".\"==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?\"\":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"),function(t,e){j[\"[object \"+e+\"]\"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener(\"DOMContentLoaded\",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r=\"string\"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?\"object\"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for(\"object\"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck(\"parentNode\")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=\"\"})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){\"none\"==this.style.display&&(this.style.display=\"\"),\"none\"==getComputedStyle(this,\"\").getPropertyValue(\"display\")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},\n\thide:function(){return this.css(\"display\",\"none\")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?\"none\"==i.css(\"display\"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck(\"previousElementSibling\")).filter(t||\"*\")},next:function(t){return n(this.pluck(\"nextElementSibling\")).filter(t||\"*\")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?\"\":\"\"+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return\"string\"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i=\"data-\"+e.replace(m,\"-$1\").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find(\"option\").filter(function(){return this.selected}).pluck(\"value\"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};\"static\"==i.css(\"position\")&&(s.position=\"relative\"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,\"\");if(!r)return;if(\"string\"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a=\"\";if(\"string\"==L(t))i||0===i?a=F(t)+\":\"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+\":\"+H(e,t[e])+\";\":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=\";\"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?\" \":\"\")+i.join(\" \"))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,\"\"):(i=W(this),J(this,e,n,i).split(/\\s+/g).forEach(function(t){i=i.replace(q(t),\" \")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n=\"scrollTop\"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n=\"scrollLeft\"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css(\"margin-top\"))||0,i.left-=parseFloat(n(t).css(\"margin-left\"))||0,r.top+=parseFloat(n(e[0]).css(\"border-top-width\"))||0,r.left+=parseFloat(n(e[0]).css(\"border-left-width\"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&\"static\"==n(t).css(\"position\");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,[\"width\",\"height\"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s[\"inner\"+i]:_(s)?s.documentElement[\"scroll\"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),\"object\"==t||\"array\"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||\"SCRIPT\"!==t.nodeName.toUpperCase()||t.type&&\"text/javascript\"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+\"To\":\"insert\"+(e?\"Before\":\"After\")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(\"\"+t).split(\".\");return{e:e[0],ns:e.slice(1).sort().join(\" \")}}function d(t){return new RegExp(\"(?:^| )\"+t.replace(\" \",\" .* ?\")+\"(?: |$)\")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\\s/).forEach(function(i){if(\"ready\"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),\"addEventListener\"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||\"\").split(/\\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],\"removeEventListener\"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:\"returnValue\"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return\"string\"==typeof t},s={},a={},u=\"onfocusin\"in window,f={focus:\"focusin\",blur:\"focusout\"},c={mouseenter:\"mouseover\",mouseleave:\"mouseout\"};a.click=a.mousedown=a.mouseup=a.mousemove=\"MouseEvents\",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError(\"expected function\")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:\"isDefaultPrevented\",stopImmediatePropagation:\"isImmediatePropagationStopped\",stopPropagation:\"isPropagationStopped\"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){\"dispatchEvent\"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},\"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error\".split(\" \").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),[\"focus\",\"blur\"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);\n\tvar n=document.createEvent(a[t]||\"Events\"),i=!0;if(e)for(var r in e)\"bubbles\"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,\"ajaxStart\")}function d(e){e.global&&!--t.active&&h(e,null,\"ajaxStop\")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,\"ajaxBeforeSend\",[t,e])===!1?!1:void h(e,n,\"ajaxSend\",[t,e])}function g(t,e,n,i){var r=n.context,o=\"success\";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,\"ajaxSuccess\",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,\"ajaxError\",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,\"ajaxComplete\",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(\";\",2)[0]),t&&(t==f?\"html\":t==u?\"json\":s.test(t)?\"script\":a.test(t)&&\"xml\")||\"text\"}function w(t,e){return\"\"==e?t:(t+\"&\"+e).replace(/[&?]{1,2}/,\"?\")}function E(e){e.processData&&e.data&&\"string\"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&\"GET\"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function T(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+\"[\"+(a||\"object\"==o||\"array\"==o?n:\"\")+\"]\"),!r&&s?e.add(u.name,u.value):\"array\"==o||!i&&\"object\"==o?T(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,s=/^(?:text|application)\\/javascript/i,a=/^(?:text|application)\\/xml/i,u=\"application/json\",f=\"text/html\",c=/^\\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!(\"type\"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||\"jsonp\"+ ++e,a=n.createElement(\"script\"),u=window[s],c=function(e){t(a).triggerHandler(\"error\",e||\"abort\")},l={abort:c};return r&&r.promise(l),t(a).on(\"load error\",function(e,n){clearTimeout(h),t(a).off().remove(),\"error\"!=e.type&&f?g(f[0],l,i,r):v(null,n||\"error\",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c(\"abort\"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\\?(.+)=\\?/,\"?$1=\"+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c(\"timeout\")},i.timeout)),l)},t.ajaxSettings={type:\"GET\",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:\"text/javascript, application/javascript, application/x-javascript\",json:u,xml:\"application/xml, text/xml\",html:f,text:\"text/plain\"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\\w-]+:)?\\/\\/([^\\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n);var s=n.dataType,a=/\\?.+=\\?/.test(n.url);if(a&&(s=\"jsonp\"),n.cache!==!1&&(e&&e.cache===!0||\"script\"!=s&&\"jsonp\"!=s)||(n.url=w(n.url,\"_=\"+Date.now())),\"jsonp\"==s)return a||(n.url=w(n.url,n.jsonp?n.jsonp+\"=?\":n.jsonp===!1?\"\":\"callback=?\")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\\w-]+:)\\/\\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l(\"X-Requested-With\",\"XMLHttpRequest\"),l(\"Accept\",u||\"*/*\"),(u=n.mimeType||u)&&(u.indexOf(\",\")>-1&&(u=u.split(\",\",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&\"GET\"!=n.type.toUpperCase())&&l(\"Content-Type\",n.contentType||\"application/x-www-form-urlencoded\"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&\"file:\"==h){s=s||b(n.mimeType||d.getResponseHeader(\"content-type\")),e=d.responseText;try{\"script\"==s?(1,eval)(e):\"xml\"==s?e=d.responseXML:\"json\"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,\"parsererror\",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?\"error\":\"abort\",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,\"abort\",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S=\"async\"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,\"timeout\",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type=\"POST\",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType=\"json\",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t(\"<div>\").html(e.replace(o,\"\")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+\"=\"+S(e))},T(n,t,e),n.join(\"&\").replace(/%20/g,\"+\")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr(\"type\");\"fieldset\"!=this.nodeName.toLowerCase()&&!this.disabled&&\"submit\"!=i&&\"reset\"!=i&&\"button\"!=i&&(\"radio\"!=i&&\"checkbox\"!=i||this.checked)&&e.push({name:n.attr(\"name\"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+\"=\"+encodeURIComponent(e.value))}),t.join(\"&\")},t.fn.submit=function(e){if(e)this.bind(\"submit\",e);else if(this.length){var n=t.Event(\"submit\");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){\"__proto__\"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||\"\",e.__Z=!0,e},isZ:function(e){return\"array\"===t.type(e)&&\"__Z\"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);\n</script>\n\n<script type=\"text/javascript\" src=\"../../assets/zepto.min.js\"></script>\n<script type=\"text/javascript\" src=\"../../assets/senku.js\"></script>\n</html>\n"

/***/ }),

/***/ "./src/app/senku/senku.component.scss":
/*!********************************************!*\
  !*** ./src/app/senku/senku.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  align-content: center; }\n\nbody {\n  overflow: hidden;\n  /*esconde el scroll*/\n  background: #86aecc;\n  background: linear-gradient(to bottom, #86aecc 0%, #d4e4ef 100%); }\n\n.ficha {\n  fill: Crimson;\n  stroke: Crimson;\n  stroke-width: 2; }\n\n/*.ficha:hover\r\n{\r\n\tfill: #D65D75;\r\n}*/\n\n.fichaSeleccionada {\n  fill: Crimson;\n  stroke: black;\n  stroke-width: 2; }\n\n.casilla {\n  fill-opacity: 0;\n  stroke-opacity: 0; }\n\n.tablero {\n  stroke: green;\n  stroke-width: 3; }\n\n#cajaBoton {\n  fill: green;\n  stroke: black;\n  stroke-width: 1; }\n\n#reiniciar, #volverJuego {\n  fill: white; }\n\n#reiniciar:hover, #volverJuego:hover {\n  fill: yellow; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vua3UvQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxBbmd1bGFyXFxUQ1VcXG1hdGxhYi1qdWVnb3Mvc3JjXFxhcHBcXHNlbmt1XFxzZW5rdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLGFBQVk7RUFDWixZQUFXO0VBQ1gsYUFBWTtFQUNaLHNCQUFxQixFQUNyQjs7QUFFRDtFQUVDLGlCQUFnQjtFQUFFLHFCQUFxQjtFQUN2QyxvQkFBK0I7RUFDL0IsaUVBQXdGLEVBQ3hGOztBQUVEO0VBRUMsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDZjs7QUFFRDs7O0dBR0c7O0FBRUg7RUFFQyxjQUFhO0VBQ2IsY0FBYTtFQUNiLGdCQUFlLEVBQ2Y7O0FBRUQ7RUFFQyxnQkFBZTtFQUNmLGtCQUFpQixFQUNqQjs7QUFFRDtFQUVDLGNBQWE7RUFDYixnQkFBZSxFQUNmOztBQUVEO0VBRUUsWUFBVztFQUNYLGNBQWtCO0VBQ2xCLGdCQUFlLEVBQ2hCOztBQUVEO0VBRUMsWUFBVyxFQUNYOztBQUVEO0VBRUMsYUFBWSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvc2Vua3Uvc2Vua3UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5XHJcbntcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYm9keVxyXG57XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjsgLyplc2NvbmRlIGVsIHNjcm9sbCovXHJcblx0YmFja2dyb3VuZDogcmdiYSgxMzQsMTc0LDIwNCwxKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDEzNCwxNzQsMjA0LDEpIDAlLCByZ2JhKDIxMiwyMjgsMjM5LDEpIDEwMCUpO1xyXG59XHJcblxyXG4uZmljaGFcclxue1xyXG5cdGZpbGw6IENyaW1zb247XHJcblx0c3Ryb2tlOiBDcmltc29uO1xyXG5cdHN0cm9rZS13aWR0aDogMjtcclxufVxyXG5cclxuLyouZmljaGE6aG92ZXJcclxue1xyXG5cdGZpbGw6ICNENjVENzU7XHJcbn0qL1xyXG5cclxuLmZpY2hhU2VsZWNjaW9uYWRhXHJcbntcclxuXHRmaWxsOiBDcmltc29uO1xyXG5cdHN0cm9rZTogYmxhY2s7XHJcblx0c3Ryb2tlLXdpZHRoOiAyO1xyXG59XHJcblxyXG4uY2FzaWxsYVxyXG57XHJcblx0ZmlsbC1vcGFjaXR5OiAwO1xyXG5cdHN0cm9rZS1vcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udGFibGVyb1xyXG57XHJcblx0c3Ryb2tlOiBncmVlbjtcclxuXHRzdHJva2Utd2lkdGg6IDM7XHJcbn1cclxuXHJcbiNjYWphQm90b25cclxue1xyXG5cdCBmaWxsOiBncmVlbjtcclxuXHQgc3Ryb2tlOiByZ2IoMCwwLDApO1xyXG5cdCBzdHJva2Utd2lkdGg6IDE7XHJcbn1cclxuXHJcbiNyZWluaWNpYXIsICN2b2x2ZXJKdWVnb1xyXG57XHJcblx0ZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbiNyZWluaWNpYXI6aG92ZXIsICN2b2x2ZXJKdWVnbzpob3ZlclxyXG57XHJcblx0ZmlsbDogeWVsbG93O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/senku/senku.component.ts":
/*!******************************************!*\
  !*** ./src/app/senku/senku.component.ts ***!
  \******************************************/
/*! exports provided: SenkuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenkuComponent", function() { return SenkuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SenkuComponent = /** @class */ (function () {
    function SenkuComponent() {
    }
    SenkuComponent.prototype.ngOnInit = function () {
    };
    SenkuComponent.prototype.instructions = function () {
        document.getElementById('instBtn').click();
    };
    SenkuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-senku',
            template: __webpack_require__(/*! ./senku.component.html */ "./src/app/senku/senku.component.html"),
            styles: [__webpack_require__(/*! ./senku.component.scss */ "./src/app/senku/senku.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SenkuComponent);
    return SenkuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\Angular\TCU\matlab-juegos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map