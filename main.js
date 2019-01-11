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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: 'Ropa Sans', sans-serif;\r\n  color: #333;\r\n  max-width: 640px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n\r\nh1 {\r\n  margin: 10px 0;\r\n  font-size: 40px;\r\n}\r\n\r\n#canvas {\r\n  width: 100%;\r\n}\r\n\r\n#output {\r\n  margin-top: 20px;\r\n  background: #eee;\r\n  padding: 10px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n#output div {\r\n  padding-bottom: 10px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n#noQRFound {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9wYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuI2NhbnZhcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNvdXRwdXQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4jb3V0cHV0IGRpdiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4jbm9RUkZvdW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>{{ title }}</h1>\n</div>\n\n<canvas id=\"canvas\" height=\"480\" width=\"640\"></canvas>\n\n<div id=\"output\">\n  <div id=\"outputMessage\">No QR code detected.</div>\n  <div hidden=\"\">\n    <b>Data:</b>\n    <span id=\"outputData\">{{ qrcodeDetected }}</span>\n  </div>\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jsQR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsQR */ "./node_modules/jsQR/dist/jsQR.js");
/* harmony import */ var jsQR__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsQR__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ios-install/ios-install.component */ "./src/app/ios-install/ios-install.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media, toast) {
        this.toast = toast;
        this.title = 'PWA jsQR Demo';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkIos();
        this.canvasElement = document.getElementById('canvas');
        this.canvasContext = this.canvasElement.getContext('2d');
        this.outputContainer = document.getElementById('output');
        this.outputMessage = document.getElementById('outputMessage');
        this.outputData = document.getElementById('outputData');
        this.video = document.createElement('video');
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(function (stream) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.video.srcObject = stream;
                        this.video.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
                        return [4 /*yield*/, this.video.play()];
                    case 1:
                        _a.sent();
                        requestAnimationFrame(this.tick.bind(this));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppComponent.prototype.checkIos = function () {
        // Detects if device is on iOS
        var isIos = function () {
            var userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        };
        // Detects if device is in standalone mode
        var isInStandaloneMode = function () { return ('standalone' in window.navigator) && (window.navigator.standalone); };
        // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
            this.toast.openFromComponent(_ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_3__["IosInstallComponent"], {
                duration: 8000,
                horizontalPosition: 'start',
                panelClass: ['mat-elevation-z3']
            });
        }
    };
    AppComponent.prototype.drawLine = function (begin, end, color) {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(begin.x, begin.y);
        this.canvasContext.lineTo(end.x, end.y);
        this.canvasContext.lineWidth = 4;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.stroke();
    };
    AppComponent.prototype.tick = function () {
        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
            this.canvasElement.hidden = false;
            this.outputContainer.hidden = false;
            this.canvasElement.height = this.video.videoHeight;
            this.canvasElement.width = this.video.videoWidth;
            this.canvasContext.drawImage(this.video, 0, 0, this.canvasElement.width, this.canvasElement.height);
            var imageData = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
            var code = jsQR__WEBPACK_IMPORTED_MODULE_2___default()(imageData.data, imageData.width, imageData.height);
            if (code) {
                this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
                this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
                this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
                this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');
                this.outputMessage.hidden = true;
                this.outputData.parentElement.hidden = false;
                this.qrcodeDetected = code.data;
            }
            else {
                this.outputMessage.hidden = false;
                this.outputData.parentElement.hidden = true;
            }
        }
        requestAnimationFrame(this.tick.bind(this));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ios-install/ios-install.component */ "./src/app/ios-install/ios-install.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_7__["IosInstallComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
            ],
            entryComponents: [_ios_install_ios_install_component__WEBPACK_IMPORTED_MODULE_7__["IosInstallComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ios-install/ios-install.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ios-install/ios-install.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  opacity: 0.8;\r\n}\r\n.content {\r\n  margin: 0.5em;\r\n  text-align: center;\r\n}\r\n.full-width {\r\n  margin-top: 1em;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.link-close {\r\n  color: red;\r\n  font-variant-caps: all-petite-caps;\r\n  font-weight: bold;\r\n}\r\n.btn-close {\r\n  position: absolute;\r\n  top: 1em;\r\n  right: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW9zLWluc3RhbGwvaW9zLWluc3RhbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2lvcy1pbnN0YWxsL2lvcy1pbnN0YWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5jb250ZW50IHtcclxuICBtYXJnaW46IDAuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZnVsbC13aWR0aCB7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGluay1jbG9zZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idG4tY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFlbTtcclxuICByaWdodDogMWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ios-install/ios-install.component.html":
/*!********************************************************!*\
  !*** ./src/app/ios-install/ios-install.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  Install this app on your device.\n  <br/>Tap the share icon and then <br/>\n  <strong>Add to homescreen</strong>.\n  <div class=\"full-width\"><mat-icon>arrow_downward</mat-icon></div>\n</div>\n<button class=\"btn-close\"  (click)=\"close()\" aria-label=\"Close\">\n   <mat-icon>close</mat-icon>\n</button>\n"

/***/ }),

/***/ "./src/app/ios-install/ios-install.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ios-install/ios-install.component.ts ***!
  \******************************************************/
/*! exports provided: IosInstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosInstallComponent", function() { return IosInstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var IosInstallComponent = /** @class */ (function () {
    function IosInstallComponent(snackBarRef) {
        this.snackBarRef = snackBarRef;
    }
    IosInstallComponent.prototype.ngOnInit = function () {
    };
    IosInstallComponent.prototype.close = function () {
        this.snackBarRef.dismiss();
    };
    IosInstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ios-install',
            template: __webpack_require__(/*! ./ios-install.component.html */ "./src/app/ios-install/ios-install.component.html"),
            styles: [__webpack_require__(/*! ./ios-install.component.css */ "./src/app/ios-install/ios-install.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"]])
    ], IosInstallComponent);
    return IosInstallComponent;
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

module.exports = __webpack_require__(/*! C:\dev\projects\mbi\mia\client\pwa-qr-reader\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map