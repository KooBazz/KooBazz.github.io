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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container fullscreen>\n  <mat-drawer mode=\"over\" [opened]=\"opened\">\n    <mat-nav-list>\n      <mat-list-item>\n        <a (click)=\"newGame()\">New game</a>\n      </mat-list-item>\n      <mat-list-item *ngFor=\"let hra of seznam\">\n        <a (click)=\"replayGame(hra)\">{{hra.getDate()}}. {{hra.getMonth()}}. {{hra.getFullYear()}} {{hra.getHours()}}:{{hra.getMinutes()}}</a>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <mat-toolbar style=\"background-color: rgb(122, 113, 102);\">\n      <button mat-icon-button (click)=\"openMenu()\">\n        <mat-icon svgIcon=\"menu\"></mat-icon>\n      </button>\n    </mat-toolbar>\n    <div *ngIf=\"!replay\">\n      <div *ngIf=\"!barva\">\n        <button mat-button (click)=\"color('SRDCE')\" style=\"width: 100%; font-size: 6em; color: red; padding: 40px;\">\n          ♥\n        </button>\n        <button mat-button (click)=\"color('KÁRA')\" style=\"width: 100%; font-size: 6em; color: red; padding: 40px;\">\n          ♦\n        </button>\n        <button mat-button (click)=\"color('KŘÍŽE')\" style=\"width: 100%; font-size: 6em; color: black; padding: 40px;\">\n          ♣\n        </button>\n        <button mat-button (click)=\"color('PIKY')\" style=\"width: 100%; font-size: 6em; color: black; padding: 40px;\">\n          ♠\n        </button>\n        <button mat-button (click)=\"color('TAROKY')\" style=\"width: 100%; font-size: 4em; color: black; padding: 40px;\">\n          XIX\n        </button>\n      </div>\n      <div *ngIf=\"barva=='SRDCE'\" style=\"display: grid; grid-template-columns: auto auto;\">\n        <button mat-button (click)=\"value('🂴')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂴\n        </button>\n        <button mat-button (click)=\"value('🂻')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂻\n        </button>\n        <button mat-button (click)=\"value('🂳')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂳\n        </button>\n        <button mat-button (click)=\"value('🂼')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂼\n        </button>\n        <button mat-button (click)=\"value('🂲')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂲\n        </button>\n        <button mat-button (click)=\"value('🂽')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂽\n        </button>\n        <button mat-button (click)=\"value('🂱')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂱\n        </button>\n        <button mat-button (click)=\"value('🂾')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🂾\n        </button>\n      </div>\n      <div *ngIf=\"barva=='KÁRA'\" style=\"display: grid; grid-template-columns: auto auto;\">\n        <button mat-button (click)=\"value('🃄')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃄\n        </button>\n        <button mat-button (click)=\"value('🃋')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃋\n        </button>\n        <button mat-button (click)=\"value('🃃')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃃\n        </button>\n        <button mat-button (click)=\"value('🃌')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃌\n        </button>\n        <button mat-button (click)=\"value('🃂')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃂\n        </button>\n        <button mat-button (click)=\"value('🃍')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃍\n        </button>\n        <button mat-button (click)=\"value('🃁')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃁\n        </button>\n        <button mat-button (click)=\"value('🃎')\" style=\"font-size: 6em; color: red; margin: 20px; padding: 40px;\">\n          🃎\n        </button>\n      </div>\n      <div *ngIf=\"barva=='KŘÍŽE'\" style=\"display: grid; grid-template-columns: auto auto;\">\n        <button mat-button (click)=\"value('🃗')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🃗\n        </button>\n        <button mat-button (click)=\"value('🃛')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🃛\n        </button>\n        <button mat-button (click)=\"value('🃘')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🃘\n        </button>\n        <button mat-button (click)=\"value('🃜')\" style=\"font-size: 6em; color: black;margin: 20px; padding: 40px;\">\n          🃜\n        </button>\n        <button mat-button (click)=\"value('🃙')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🃙\n        </button>\n        <button mat-button (click)=\"value('🃝')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🃝\n        </button>\n        <button mat-button (click)=\"value('🃚')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🃚\n        </button>\n        <button mat-button (click)=\"value('🃞')\" style=\"font-size: 6em; color: black;margin: 20px; padding: 40px;\">\n          🃞\n        </button>\n      </div>\n      <div *ngIf=\"barva=='PIKY'\" style=\"display: grid; grid-template-columns: auto auto;\">\n        <button mat-button (click)=\"value('🂧')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🂧\n        </button>\n        <button mat-button (click)=\"value('🂫')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🂫\n        </button>\n        <button mat-button (click)=\"value('🂨')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🂨\n        </button>\n        <button mat-button (click)=\"value('🂬')\" style=\"font-size: 6em; color: black;margin: 20px; padding: 40px;\">\n          🂬\n        </button>\n        <button mat-button (click)=\"value('🂩')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🂩\n        </button>\n        <button mat-button (click)=\"value('🂭')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🂭\n        </button>\n        <button mat-button (click)=\"value('🂪')\" style=\"font-size: 6em; color: black; margin: 20px; padding: 40px;\">\n          🂪\n        </button>\n        <button mat-button (click)=\"value('🂮')\" style=\"font-size: 6em; color: black;margin: 20px; padding: 40px;\">\n          🂮\n        </button>\n      </div>\n      <div *ngIf=\"barva=='TAROKY'\" style=\"display: grid; grid-template-columns: auto auto auto auto;\">\n        <button mat-button (click)=\"value('I')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          I\n        </button>\n        <button mat-button (click)=\"value('II')\" style=\"font-size: 3em;color: black; padding-top: 25px; padding-bottom: 25px;\">\n          II\n        </button>\n        <button mat-button (click)=\"value('III')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          III\n        </button>\n        <button mat-button (click)=\"value('IV')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          IV\n        </button>\n        <button mat-button (click)=\"value('V')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          V\n        </button>\n        <button mat-button (click)=\"value('VI')\" style=\"font-size: 3em;color: black; padding-top: 25px; padding-bottom: 25px;\">\n          VI\n        </button>\n        <button mat-button (click)=\"value('VII')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          VII\n        </button>\n        <button mat-button (click)=\"value('VIII')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          VIII\n        </button>\n        <button mat-button (click)=\"value('IX')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          IX\n        </button>\n        <button mat-button (click)=\"value('X')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          X\n        </button>\n        <button mat-button (click)=\"value('XI')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XI\n        </button>\n        <button mat-button (click)=\"value('XII')\" style=\"font-size: 3em;color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XII\n        </button>\n      </div>\n      <div *ngIf=\"barva=='TAROKY'\" style=\"display: grid; grid-template-columns: auto auto auto;\">\n        <button mat-button (click)=\"value('XIII')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XIII\n        </button>\n        <button mat-button (click)=\"value('XIV')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XIV\n        </button>\n        <button mat-button (click)=\"value('XV')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XV\n        </button>\n        <button mat-button (click)=\"value('XVI')\" style=\"font-size: 3em;color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XVI\n        </button>\n        <button mat-button (click)=\"value('XVII')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XVII\n        </button>\n        <button mat-button (click)=\"value('XVIII')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XVIII\n        </button>\n        <button mat-button (click)=\"value('XIX')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XIX\n        </button>\n        <button mat-button (click)=\"value('XX')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XX\n        </button>\n        <button mat-button (click)=\"value('XXI')\" style=\"font-size: 3em; color: black; padding-top: 25px; padding-bottom: 25px;\">\n          XXI\n        </button>\n      </div>\n      <div *ngIf=\"barva=='TAROKY'\">\n        <button mat-button (click)=\"value('🂿')\" style=\"width: 100%; font-size: 6em; color: black;padding: 40px;\">\n          🂿\n        </button>\n      </div>\n    </div>\n    <div *ngIf=\"replay\">\n      <mat-toolbar>{{date.getDate()}}. {{date.getMonth()}}. {{date.getFullYear()}} {{date.getHours()}}:{{date.getMinutes()}}</mat-toolbar>\n      <mat-list>\n        <mat-list-item *ngFor=\"let stych of game\">\n          {{stych[0]}} {{stych[1]}} {{stych[2]}} {{stych[3]}}\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </mat-drawer-content>\n</mat-drawer-container>"

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
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.title = 'app';
        this.GAME_LENGTH = 2;
        this.barva = '';
        this.hodnota = '';
        this.karty = [];
        this.stychy = [];
        this.seznam = [];
        this.opened = false;
        this.replay = false;
        this.matIconRegistry.addSvgIcon("menu", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/baseline-menu-24px.svg"));
    }
    AppComponent.prototype.color = function (color) {
        this.barva = color;
    };
    AppComponent.prototype.value = function (hodnota) {
        this.karty.push(hodnota);
        if (this.karty.length % 4 === 0) {
            this.stychy.push(this.karty);
            if (this.stychy.length % this.GAME_LENGTH === 0) {
                var now = new Date().getTime();
                localStorage.setItem('' + now, JSON.stringify(this.stychy));
                var index = localStorage.getItem('taroky');
                if (index) {
                    var indices = JSON.parse(index);
                    indices.push(now);
                    localStorage.setItem('taroky', JSON.stringify(indices));
                }
                else {
                    var indices = [];
                    indices.push(now);
                    localStorage.setItem('taroky', JSON.stringify(indices));
                }
                this.stychy.push(this.karty);
                this.stychy = [];
            }
            this.karty = [];
        }
        this.barva = '';
    };
    AppComponent.prototype.newGame = function () {
        this.opened = false;
        this.stychy = [];
        this.karty = [];
        this.replay = false;
    };
    AppComponent.prototype.replayGame = function (date) {
        this.opened = false;
        this.replay = true;
        this.date = date;
        var data = localStorage.getItem('' + date.getTime());
        if (data) {
            this.game = JSON.parse(data);
        }
    };
    AppComponent.prototype.openMenu = function () {
        this.opened = !this.opened;
        var data = localStorage.getItem('taroky');
        if (data) {
            this.seznam = [];
            var hry = JSON.parse(data);
            for (var _i = 0, hry_1 = hry; _i < hry_1.length; _i++) {
                var hra = hry_1[_i];
                this.seznam.push(new Date(hra));
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jakub/Dokumenty/Personal/Handy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map