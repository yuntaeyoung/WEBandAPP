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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div>\n  <ng-flash-message></ng-flash-message>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.title = 'angular-src in MEANAuthApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_locations_locations_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/locations/locations.component */ "./src/app/components/locations/locations.component.ts");
/* harmony import */ var _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/programs/programs.component */ "./src/app/components/programs/programs.component.ts");
/* harmony import */ var _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/safety/safety.component */ "./src/app/components/safety/safety.component.ts");
/* harmony import */ var _components_kiwiaccess_kiwiaccess_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/kiwiaccess/kiwiaccess.component */ "./src/app/components/kiwiaccess/kiwiaccess.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");
/* harmony import */ var _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/adminlogin/adminlogin.component */ "./src/app/components/adminlogin/adminlogin.component.ts");
/* harmony import */ var _components_adminlocations_adminlocations_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/adminlocations/adminlocations.component */ "./src/app/components/adminlocations/adminlocations.component.ts");
/* harmony import */ var _components_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/adminuserlist/adminuserlist.component */ "./src/app/components/adminuserlist/adminuserlist.component.ts");
/* harmony import */ var _components_qna_qna_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/qna/qna.component */ "./src/app/components/qna/qna.component.ts");
/* harmony import */ var _components_qnawrite_qnawrite_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/qnawrite/qnawrite.component */ "./src/app/components/qnawrite/qnawrite.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_adminvar_adminvar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/adminvar/adminvar.component */ "./src/app/components/adminvar/adminvar.component.ts");
/* harmony import */ var _components_adminprofile_adminprofile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/adminprofile/adminprofile.component */ "./src/app/components/adminprofile/adminprofile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'aboutus', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"] },
    { path: 'locations', component: _components_locations_locations_component__WEBPACK_IMPORTED_MODULE_20__["LocationsComponent"] },
    { path: 'programs', component: _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_21__["ProgramsComponent"] },
    { path: 'safety', component: _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_22__["SafetyComponent"] },
    { path: 'kiwiaccess', component: _components_kiwiaccess_kiwiaccess_component__WEBPACK_IMPORTED_MODULE_23__["KiwiaccessComponent"] },
    { path: 'help', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_24__["HelpComponent"] },
    { path: 'adminlogin', component: _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_25__["AdminloginComponent"] },
    { path: 'adminlocations', component: _components_adminlocations_adminlocations_component__WEBPACK_IMPORTED_MODULE_26__["AdminlocationsComponent"] },
    { path: 'adminuserlist', component: _components_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_27__["AdminuserlistComponent"] },
    { path: 'qna', component: _components_qna_qna_component__WEBPACK_IMPORTED_MODULE_28__["QnaComponent"] },
    { path: 'qnawrite', component: _components_qnawrite_qnawrite_component__WEBPACK_IMPORTED_MODULE_29__["QnawriteComponent"] },
    { path: 'adminprofile', component: _components_adminprofile_adminprofile_component__WEBPACK_IMPORTED_MODULE_32__["AdminprofileComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"],
                _components_locations_locations_component__WEBPACK_IMPORTED_MODULE_20__["LocationsComponent"],
                _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_21__["ProgramsComponent"],
                _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_22__["SafetyComponent"],
                _components_kiwiaccess_kiwiaccess_component__WEBPACK_IMPORTED_MODULE_23__["KiwiaccessComponent"],
                _components_help_help_component__WEBPACK_IMPORTED_MODULE_24__["HelpComponent"],
                _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_25__["AdminloginComponent"],
                _components_adminlocations_adminlocations_component__WEBPACK_IMPORTED_MODULE_26__["AdminlocationsComponent"],
                _components_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_27__["AdminuserlistComponent"],
                _components_qna_qna_component__WEBPACK_IMPORTED_MODULE_28__["QnaComponent"],
                _components_qnawrite_qnawrite_component__WEBPACK_IMPORTED_MODULE_29__["QnawriteComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
                _components_adminvar_adminvar_component__WEBPACK_IMPORTED_MODULE_31__["AdminvarComponent"],
                _components_adminprofile_adminprofile_component__WEBPACK_IMPORTED_MODULE_32__["AdminprofileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__["NgFlashMessagesModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBZ0KLKBKLSJ2MMVcWIIZ2dTiYRBWarFcE' })
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 531px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n}\r\n\r\n#content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n        <div class=\"navbar-nav navbar-left\" id=\"bimage\">\n               <div id=\"content\">\n                    <h2>키위 바이크 소개</h2>\n               </div> \n        </div>\n<div>\n        <div  class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 0; padding-bottom: 0; display: table\">\n            <div style=\"display:table-cell; vertical-align: middle; width: 10000px\"><h3>   </h3>\n            <h6 style=\"text-align:center; color:#60da0f;\">SMART MOBILITY</h6>\n            <h2>현대 사회를 위한 스마트 모빌리티</h2>\n            <p class=\"maxwidth700\" style=\"margin:2px;\">키위는 \"모든 사람들이 각 지역에서 <b>스마트하고 효율적인 모빌리티</b>에 접근할 수 있는 가치가 있지 않을까?\" 라는</p>\n            <p class=\"maxwidth700\" style=\"margin:2px;\">심플한 생각에서 시작되었습니다. 모두에게 <b>공평한 서비스 공유</b>를 통해 우리는 짧은 거리를 대중교통에 의존하지</p>\n            <p class=\"maxwidth700\" style=\"margin:2px;\">않으며 미래의 세대를 위한 <b>더 깨끗하고 건강한 지구를 물려주는 것</b>을 목표로 하였습니다.</p>\n        </div>\n        </div>\n            <div class=\"bgpad\" class=\"text-center\" style=\"margin-top:0; padding-top:0\">\n                <div style=\"margin-bottom: 50px\">\n                <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_201812099_192851506.png\" class=\"rounded mx-auto\">\n                <h2>개발자 소개</h2>\n                </div>\n                <div class=\"row justify-content-center\">\n                    <div class=\"col col-lg-2\">\n                        <img width=\"220\" height=\"220\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_192847769.png\">\n                        <h4>윤태영</h4>\n                        <p>Server</p>\n                        \n                    </div>\n                    <div class=\"col col-lg-2\" style=\"margin-left:50px; margin-right:50px\">\n                        <img width=\"220\" height=\"220\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_192839806.png\">\n                        <h4>장형필</h4>\n                        <p>App</p>\n                      \n                    </div>\n                    <div class=\"col col-lg-2\">\n                        <img width=\"220\" height=\"220\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_192843170.png\">\n                        <h4>김종호</h4>\n                        <p>Web</p>\n                      \n                    </div>\n                </div>\n                </div>\n        </div>\n        \n    </body>"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
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

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/adminlocations/adminlocations.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/adminlocations/adminlocations.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n agm-map {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n#bimage {\r\n display: table;\r\n width: 100%;\r\n height: 531px;\r\n background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n}\r\n\r\n#content {\r\n display: table-cell;\r\n top:50%;\r\n left:50%;  \r\n text-align: center; \r\n vertical-align: middle;                                                           \r\n font-size:5rem;\r\n color: white;\r\n z-index: 2;\r\n \r\n}\r\n\r\n#d_right{\r\n  background-color: ghostwhite;\r\n  text-align: center; \r\n  height:100%;\r\n}\r\n\r\n#title {\r\n margin: 0;\r\n padding: 0;\r\n background-color: #60da0f;\r\n color: white;\r\n text-align: center;\r\n height: 8%;\r\n width: 100%;\r\n display: table;\r\n}"

/***/ }),

/***/ "./src/app/components/adminlocations/adminlocations.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/adminlocations/adminlocations.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n          <agm-marker \n            iconUrl=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181129_172618464.png\"\n            *ngFor=\"let m of bikestorage\"\n            [latitude]=\"m.latitude\"\n            [longitude]=\"m.longitude\"\n            [markerDraggable]=\"false\">\n    \n            <agm-info-window>   \n            <p>{{m.Storage_name}}</p>\n            <input type=\"button\" value=\"대여소 자세히 보기\" (click)=\"n = m\">\n            </agm-info-window>\n          </agm-marker>\n        </agm-map>\n      </div>\n        <div class=\"col-4\" >\n          <div id=\"title\">\n              <h5 style=\"display:table-cell; vertical-align: middle;\"> {{n.Storage_name}} </h5>\n          </div>\n            \n          <div id=\"d_right\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Battery</th>\n                      </tr>        \n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let list of bike\" >\n                        <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.name}}</th>\n                        <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.battery}}%</th>\n                    </tr>\n                </tbody>\n            </table>\n          </div>\n        </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/adminlocations/adminlocations.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/adminlocations/adminlocations.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminlocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminlocationsComponent", function() { return AdminlocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminlocationsComponent = /** @class */ (function () {
    function AdminlocationsComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.n = {
            _id: String,
            uid: String,
            latitude: String,
            longitude: String,
            Storage_name: "보관소 위치"
        };
        // google maps zoom level
        this.zoom = 14;
        // initial center position for the map
        this.lat = 37.582142;
        this.lng = 127.010369;
    }
    AdminlocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getBikeStorage().subscribe(function (storageList) {
            _this.bikestorage = storageList;
            console.log(_this.bikestorage);
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getBike().subscribe(function (bikeList) {
            _this.bike = bikeList;
            console.log(_this.bike);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AdminlocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminlocations',
            template: __webpack_require__(/*! ./adminlocations.component.html */ "./src/app/components/adminlocations/adminlocations.component.html"),
            styles: [__webpack_require__(/*! ./adminlocations.component.css */ "./src/app/components/adminlocations/adminlocations.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminlocationsComponent);
    return AdminlocationsComponent;
}());



/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/adminlogin/adminlogin.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 940px;\r\n    margin-bottom: 2%;\r\n    background-image: url(\"https://www.li.me/hubfs/lime-one-year-report-bike-scooter-sharing-2.jpg\");\r\n    background-size: contain;\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }"

/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/adminlogin/adminlogin.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\" id=\"bimage\">\n              <div id=\"content\">\n                   <h2></h2>\n              </div> \n      </div>\n      <div class=\"col-sm-4\">\n    <h2 class=\"page-header\">관리자 로그인</h2>\n    <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Admin ID</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='email' name=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label>password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\">\n      </div>\n      <div style=\"text-align:center\">\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n      <a type=\"submit\" class=\"btn btn-secondary\" [routerLink]=\"['/login']\">User Login</a>\n      </div>\n    </form>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/adminlogin/adminlogin.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminloginComponent = /** @class */ (function () {
    function AdminloginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    AdminloginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var admin = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateAdmin(admin).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.authService.storeAdminData(data.token, data.admin);
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'success',
                    timeout: 3000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['adminlogin']);
            }
        });
    };
    AdminloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminlogin',
            template: __webpack_require__(/*! ./adminlogin.component.html */ "./src/app/components/adminlogin/adminlogin.component.html"),
            styles: [__webpack_require__(/*! ./adminlogin.component.css */ "./src/app/components/adminlogin/adminlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], AdminloginComponent);
    return AdminloginComponent;
}());



/***/ }),

/***/ "./src/app/components/adminprofile/adminprofile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/adminprofile/adminprofile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 531px;\r\n    margin-bottom: 2%;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }\r\n  \r\n  #title {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #60da0f;\r\n  color: white;\r\n  text-align: center;\r\n  height: 50px;\r\n  width: 100%;\r\n  display: table;\r\n }"

/***/ }),

/***/ "./src/app/components/adminprofile/adminprofile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/adminprofile/adminprofile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n    <div id=\"content\">\n         <h2>관리자 정보</h2>\n    </div> \n</div>\n<div class=\"container\">\n  <div *ngIf=\"user\">\n  <div id=\"title\"><h3 style=\"display:table-cell; vertical-align: middle;\"> 관리자님의 정보 </h3></div>\n  <table class=\"table\">\n      <tbody>\n          <tr>\n              <th class=\"tr-group\">E - mail</th>\n              <th class=\"tr-group\">{{user.email}}</th>\n          </tr>\n          <tr>\n              <th class=\"tr-group\">License Number</th>\n              <th class=\"tr-group\">{{user.license_num}}</th>\n          </tr>\n          <tr>\n              <th class=\"tr-group\">License Issued</th>\n              <th class=\"tr-group\">{{user.license_issued}}</th>\n          </tr>\n          <tr>\n              <th class=\"tr-group\">License expiration</th>\n              <th class=\"tr-group\">{{user.license_expiration}}</th>\n          </tr>\n      </tbody>\n  </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/adminprofile/adminprofile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/adminprofile/adminprofile.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminprofileComponent", function() { return AdminprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminprofileComponent = /** @class */ (function () {
    function AdminprofileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAdminProfile().subscribe(function (profile) {
            console.log(profile);
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AdminprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminprofile',
            template: __webpack_require__(/*! ./adminprofile.component.html */ "./src/app/components/adminprofile/adminprofile.component.html"),
            styles: [__webpack_require__(/*! ./adminprofile.component.css */ "./src/app/components/adminprofile/adminprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminprofileComponent);
    return AdminprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/adminuserlist/adminuserlist.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/adminuserlist/adminuserlist.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminuserlist/adminuserlist.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/adminuserlist/adminuserlist.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th>E-mail</th>\n            <th>운전면허 번호</th>\n            <th>운전면허 발행일</th>\n            <th>운전면허 만료일</th>\n            <th>삭제</th>\n          </tr>        \n    </thead>\n    <tbody>\n        <tr *ngFor=\"let list of userlist\" >\n            <th class=\"tr-group\">{{list.email}}</th>\n            <th class=\"tr-group\">{{list.license_num}}</th>\n            <th class=\"tr-group\">{{list.license_issued}}</th>\n            <th class=\"tr-group\">{{list.license_expiration}}</th>\n            <th class=\"tr-group\"><input type=\"button\" value=\"X\" (click)=\"deleteUser(list)\"></th>\n          </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/adminuserlist/adminuserlist.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/adminuserlist/adminuserlist.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminuserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminuserlistComponent", function() { return AdminuserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminuserlistComponent = /** @class */ (function () {
    function AdminuserlistComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    AdminuserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserlist().subscribe(function (userlist) {
            _this.userlist = userlist;
            console.log(_this.userlist);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AdminuserlistComponent.prototype.deleteUser = function (list) {
        var _this = this;
        var user = {
            email: list.email,
            license_num: list.license_num
        };
        console.log("delete User");
        console.log(user.email);
        console.log(user.license_num);
        this.authService.deleteUser(user).subscribe(function (data) {
            _this.flashMessage.showFlashMessage({
                messages: ['Delete Success '],
                type: 'success',
                timeout: 2000
            });
            window.location.reload();
        });
    };
    AdminuserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminuserlist',
            template: __webpack_require__(/*! ./adminuserlist.component.html */ "./src/app/components/adminuserlist/adminuserlist.component.html"),
            styles: [__webpack_require__(/*! ./adminuserlist.component.css */ "./src/app/components/adminuserlist/adminuserlist.component.css")]
        }),
        __metadata("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminuserlistComponent);
    return AdminuserlistComponent;
}());



/***/ }),

/***/ "./src/app/components/adminvar/adminvar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/adminvar/adminvar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\r\n    font-size: 42px;\r\n    line-height: 101px;\r\n    color: #60da0f;\r\n    font-family: \"Helvetica Neue\";\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-decoration: none;\r\n     }\r\n    \r\n    #category {\r\n    font-size: 18px;\r\n    letter-spacing: 0px;\r\n    line-height: 74px;\r\n    color: #151515;\r\n    font-family: \"Yoon Gothic770\";\r\n    text-align: center;\r\n    margin-left: 56px;\r\n    margin-right: 56px;\r\n    }\r\n    \r\n    #mini {\r\n    font-size: 14px;\r\n    letter-spacing: 0px;\r\n    line-height: 74px;\r\n    color: #151515;\r\n    font-family: \"Yoon Gothic760\";\r\n    text-align: center;\r\n    }\r\n    \r\n    #lang {\r\n        font-size: 18px;\r\n    letter-spacing: 0px;\r\n    line-height: 74px;\r\n    color: #60da0f;\r\n    font-family: \"Helvetica\";\r\n    font-weight: bold;\r\n    text-align: center;\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/components/adminvar/adminvar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/adminvar/adminvar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-white bg-white justify-content-around\" >\n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n      <ul class=\"navbar-nav navbar-center justify-content-around\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminuserlist']\" >유저리스트</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminlocations']\">바이크관리</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/safety']\" >사용방법</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/kiwiaccess']\" >등록방법</a>\n        </li>\n      </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/adminvar/adminvar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/adminvar/adminvar.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminvarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminvarComponent", function() { return AdminvarComponent; });
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

var AdminvarComponent = /** @class */ (function () {
    function AdminvarComponent() {
    }
    AdminvarComponent.prototype.ngOnInit = function () {
    };
    AdminvarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminvar',
            template: __webpack_require__(/*! ./adminvar.component.html */ "./src/app/components/adminvar/adminvar.component.html"),
            styles: [__webpack_require__(/*! ./adminvar.component.css */ "./src/app/components/adminvar/adminvar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminvarComponent);
    return AdminvarComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\"> Dashboard </h2>\n<p> Welcome to Your dashboard</p>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-nav navbar-left\">\n    <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222405184.png\">\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/help/help.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/help/help.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/help/help.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
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

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/components/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\r\nfont-size: 70px;\r\nletter-spacing: -3px;\r\nline-height: 82px;\r\ncolor: #ffffff;\r\nfont-family: \"Yoon Gothic710\";\r\ntext-align: center;\r\nbox-shadow: 0px 3px 0px rgba(0,0,0,0.38);\r\n}\r\n\r\n#sub {\r\n    font-size: 18px;\r\nletter-spacing: 0px;\r\nline-height: 84px;\r\ncolor: #d4d4d4;\r\nfont-family: \"Yoon Gothic720\";\r\ntext-align: center;\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n#bimage {\r\n    text-align: center;\r\n    display: table;\r\n    width: 100%;\r\n    height: 531px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n}\r\n\r\n#d_sub{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n#content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n    <div id=\"d_sub\">\n      <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181210_203421632.png\">\n      <h1 id=\"title\">언제 어디서나 즐기는</h1>\n      <h1 id=\"title\">스마트 모빌리티 <span style=\"color: #60da0f;\">키위</span></h1>\n    \n      <h6 id=\"sub\">내 위치 주변에 있는 스마트 킥보드 \"<span style=\"color: #60da0f;\">키위</span>\"를 찾아 언제 어디서나 쉽게 즐기세요</h6>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/kiwiaccess/kiwiaccess.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/kiwiaccess/kiwiaccess.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 531px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/components/kiwiaccess/kiwiaccess.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/kiwiaccess/kiwiaccess.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-nav navbar-left\" id=\"bimage\">\n        <div id=\"content\">\n             <h2>등록 방법</h2>\n        </div> \n    </div>\n    <div>\n    <div  class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 2%; padding-bottom: 0; display: table\">\n     <div style=\"display:table-cell; vertical-align: middle; width: 1920px\"><h3>   </h3>\n     <h6 style=\"text-align:center; color:#60da0f;\">Locations</h6>\n     <h2>키위 등록 방법</h2>\n     <p class=\"maxwidth700\">간단한 방법으로 키위에 등록하세요</p>\n     <p class=\"maxwidth700\">간편한 이동수단을 사용하실 수 있습니다!</p>\n</div>\n</div>\n\n<div class=\"container\">\n    <div class=\"bgpad text-center\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <img width=\"100%\" height=\"100%\" src=\"https://www.li.me/hubfs/Assets/Lime_Access_Illustrations_1.png\" alt=\"\">\n            </div>\n            <div class=\"col-6\">\n                <img width=\"100%\" height=\"93.9%\" src=\"https://www.li.me/hubfs/Assets/Lime_Access_Illustrations_2.png\" alt=\"\">\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-6\">\n                <img width=\"100%\" height=\"100%\" src=\"https://www.li.me/hubfs/Assets/Lime_Access_Illustrations_3.png\" alt=\"\">\n            </div>\n            <div class=\"col-6\">\n                <img width=\"100%\" height=\"93.8%\" src=\"https://www.li.me/hubfs/Assets/Lime_Access_Illustrations_4.png\" alt=\"\">\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-6\">\n                <img width=\"100%\" height=\"100%\" src=\"https://www.li.me/hubfs/Assets/Lime_Access_Illustrations_5.png\" alt=\"\">\n            </div>\n            <div class=\"col-6\">\n            </div>\n        </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/kiwiaccess/kiwiaccess.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/kiwiaccess/kiwiaccess.component.ts ***!
  \***************************************************************/
/*! exports provided: KiwiaccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiwiaccessComponent", function() { return KiwiaccessComponent; });
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

var KiwiaccessComponent = /** @class */ (function () {
    function KiwiaccessComponent() {
    }
    KiwiaccessComponent.prototype.ngOnInit = function () {
    };
    KiwiaccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kiwiaccess',
            template: __webpack_require__(/*! ./kiwiaccess.component.html */ "./src/app/components/kiwiaccess/kiwiaccess.component.html"),
            styles: [__webpack_require__(/*! ./kiwiaccess.component.css */ "./src/app/components/kiwiaccess/kiwiaccess.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KiwiaccessComponent);
    return KiwiaccessComponent;
}());



/***/ }),

/***/ "./src/app/components/locations/locations.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/locations/locations.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n agm-map {\r\n   width: 100%;\r\n   height: 600px;\r\n }\r\n\r\n #bimage {\r\n  display: table;\r\n  width: 100%;\r\n  height: 531px;\r\n  background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n}\r\n\r\n #content {\r\n  display: table-cell;\r\n  top:50%;\r\n  left:50%;  \r\n  text-align: center; \r\n  vertical-align: middle;                                                           \r\n  font-size:5rem;\r\n  color: white;\r\n  z-index: 2;\r\n  \r\n}\r\n\r\n #d_right{\r\n   background-color: ghostwhite;\r\n   text-align: center; \r\n   height:100%;\r\n }\r\n\r\n #title {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #60da0f;\r\n  color: white;\r\n  text-align: center;\r\n  height: 8%;\r\n  width: 100%;\r\n  display: table;\r\n }"

/***/ }),

/***/ "./src/app/components/locations/locations.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/locations/locations.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-nav navbar-left\" id=\"bimage\">\n    <div id=\"content\">\n         <h2>대여소 위치</h2>\n    </div> \n</div>\n<div>\n<div  class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 2%; padding-bottom: 0; display: table\">\n <div style=\"display:table-cell; vertical-align: middle; width: 1920px\"><h3>   </h3>\n <h6 style=\"text-align:center; color:#60da0f;\">Locations</h6>\n <h2>전동 킥보드 대여소 위치</h2>\n <p class=\"maxwidth700\">현재 내 주변에 있는 전동 킥보드 대여소 위치를 찾아보세요!</p>\n <p class=\"maxwidth700\">도착 전 미리 예약할 수 있습니다.</p>\n</div>\n</div>\n\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-8\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n      <agm-marker \n        iconUrl=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181129_172618464.png\"\n        *ngFor=\"let m of bikestorage\"\n        [latitude]=\"m.latitude\"\n        [longitude]=\"m.longitude\"\n        [markerDraggable]=\"false\">\n\n        <agm-info-window>   \n        <p>{{m.Storage_name}}</p>\n        <input type=\"button\" value=\"대여소 자세히 보기\" (click)=\"n = m\">\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n  </div>\n    <div class=\"col-4\" >\n      <div id=\"title\">\n          <h5 style=\"display:table-cell; vertical-align: middle;\"> {{n.Storage_name}} </h5>\n      </div>\n        \n      <div id=\"d_right\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Battery</th>\n                    <th>예약</th>\n                  </tr>        \n            </thead>\n            <tbody>\n                <tr *ngFor=\"let list of bike\" >\n                    <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.name}}</th>\n                    <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.battery}}%</th>\n                    <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\"><input *ngIf=\"list.reserve=='true'\" type=\"button\" value=\"예약\" (click)=\"reservation(list)\"></th>\n                </tr>\n            </tbody>\n        </table>\n      </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/locations/locations.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/locations/locations.component.ts ***!
  \*************************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.n = {
            _id: String,
            uid: String,
            latitude: String,
            longitude: String,
            Storage_name: "보관소 위치"
        };
        // google maps zoom level
        this.zoom = 14;
        // initial center position for the map
        this.lat = 37.582142;
        this.lng = 127.010369;
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getBikeStorage().subscribe(function (storageList) {
            _this.bikestorage = storageList;
            console.log(_this.bikestorage);
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getBike().subscribe(function (bikeList) {
            _this.bike = bikeList;
            console.log(_this.bike);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    LocationsComponent.prototype.reservation = function (list) {
        var _this = this;
        var sBike = {
            name: list.name,
            battery: list.battery
        };
        console.log(sBike.name);
        console.log(sBike.battery);
        this.authService.reserveBike(sBike).subscribe(function (data) {
            _this.flashMessage.showFlashMessage({
                messages: ['Reservation Success '],
                type: 'success',
                timeout: 2000
            });
        });
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/components/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.css */ "./src/app/components/locations/locations.component.css")]
        }),
        __metadata("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LocationsComponent);
    return LocationsComponent;
}());

// just an interface for type safety.


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 940px;\r\n    margin-bottom: 2%;\r\n    background-image: url(\"https://www.li.me/hubfs/lime-one-year-report-bike-scooter-sharing-2.jpg\");\r\n    background-size: contain;\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-sm-8\" id=\"bimage\">\n          <div id=\"content\">\n               <h2></h2>\n          </div> \n  </div>\n  <div class=\"col-sm-4\">\n<h2 class=\"page-header\">로그인</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>E-mail</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='email' name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label>password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\">\n  </div>\n  <div style=\"text-align:center\">\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n  <a type=\"submit\" class=\"btn btn-secondary\" [routerLink]=\"['/adminlogin']\">Admin</a>\n  </div>\n</form>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log(this.email);
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'success',
                    timeout: 3000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\r\nfont-size: 42px;\r\nline-height: 101px;\r\ncolor: #60da0f;\r\nfont-family: \"Helvetica Neue\";\r\nfont-weight: bold;\r\ntext-align: center;\r\ntext-decoration: none;\r\n }\r\n\r\n#category {\r\nfont-size: 18px;\r\nletter-spacing: 0px;\r\nline-height: 74px;\r\ncolor: #151515;\r\nfont-family: \"Yoon Gothic770\";\r\ntext-align: center;\r\nmargin-left: 56px;\r\nmargin-right: 56px;\r\n}\r\n\r\n#mini {\r\nfont-size: 14px;\r\nletter-spacing: 0px;\r\nline-height: 74px;\r\ncolor: #151515;\r\nfont-family: \"Yoon Gothic760\";\r\ntext-align: center;\r\n}\r\n\r\n#lang {\r\n    font-size: 18px;\r\nletter-spacing: 0px;\r\nline-height: 74px;\r\ncolor: #60da0f;\r\nfont-family: \"Helvetica\";\r\nfont-weight: bold;\r\ntext-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-white bg-white justify-content-around\" >\n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <ul class=\"navbar-nav navbar-left\">\n        <li class=\"nav-item\" >\n            <a class=\"nav-link\" id=\"lang\">Korean</a>\n        </li>\n    </ul>\n\n      <ul class=\"navbar-nav navbar-center justify-content-around\">\n        <li *ngIf=\"!authService.adminloggedIn()\" class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/aboutus']\" >키위소개</a>\n        </li>\n        <li *ngIf=\"!authService.adminloggedIn()\" class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/locations']\">대여소위치</a>\n        </li>\n        <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminuserlist']\">유저리스트</a>\n        </li>\n        <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminlocations']\">대여소관리</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" class=\"align-middle\" id=\"home\" [routerLink]=\"['/']\">\n          <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_174954077.png\" width=\"71\" height=\"71\">\n            Kiwi\n          </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/safety']\" >사용방법</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/kiwiaccess']\" >등록방법</a>\n        </li>\n        <!-- <li class=\"nav-item active\">\n            <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/qna']\" >Help</a>\n        </li> -->\n      </ul>\n      <ul class=\"navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n                <a class=\"nav-link\" id=\"mini\" [routerLink]=\"['/profile']\">사용자정보</a>\n            </li>\n            <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n                <a class=\"nav-link\" id=\"mini\" [routerLink]=\"['/adminprofile']\">관리자정보</a>\n            </li>\n            <li *ngIf=\"!authService.loggedIn() && !authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link\" id=\"mini\" [routerLink]=\"['/register']\">회원가입</a>\n            </li>\n            <li class=\"nav-item\">\n             <a class=\"nav-link\" id=\"mini\">|</a> \n            </li>\n            <li *ngIf=\"!authService.loggedIn() && !authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n              <a class=\"nav-link\" id=\"mini\" [routerLink]=\"['/login']\">로그인</a>\n            </li>\n            <li *ngIf=\"authService.loggedIn() || authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n              <a class=\"nav-link\" id=\"mini\" (click)=\"onLogoutClick()\" href=\"#\">로그아웃</a>\n            </li>\n      </ul>\n    \n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['You are logged out'],
            type: 'success',
            timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 531px;\r\n    margin-bottom: 2%;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }\r\n  \r\n  #title {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #60da0f;\r\n  color: white;\r\n  text-align: center;\r\n  height: 50px;\r\n  width: 100%;\r\n  display: table;\r\n }"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n    <div id=\"content\">\n         <h2>사용자 정보</h2>\n    </div> \n</div>\n<div class=\"container\">\n  <div *ngIf=\"user\">\n  <div id=\"title\"><h3 style=\"display:table-cell; vertical-align: middle;\"> {{user.name}}님의 회원정보 </h3></div>\n  <table class=\"table\">\n      <tbody>\n          <tr>\n              <th class=\"tr-group\">E - mail</th>\n              <th class=\"tr-group\">{{user.email}}</th>\n          </tr>\n          <tr>\n              <th class=\"tr-group\">License Number</th>\n              <th class=\"tr-group\">{{user.license_num}}</th>\n          </tr>\n          <tr>\n              <th class=\"tr-group\">License Issued</th>\n              <th class=\"tr-group\">{{user.license_issued}}</th>\n          </tr>\n          <tr>\n              <th class=\"tr-group\">License expiration</th>\n              <th class=\"tr-group\">{{user.license_expiration}}</th>\n          </tr>\n      </tbody>\n  </table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/programs/programs.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/programs/programs.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/programs/programs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/programs/programs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-container-wrapper\">\r\n        <div class=\"body-container container-fluid\">\r\n    \r\n    <div class=\"row-fluid-wrapper row-depth-1 row-number-1 \">\r\n    <div class=\"row-fluid \">\r\n    <div class=\"span12 widget-span widget-type-widget_container about-us-wrap\" data-widget-type=\"widget_container\" data-x=\"0\" data-w=\"12\">\r\n    <span id=\"hs_cos_wrapper_module_150757646670892\" class=\"hs_cos_wrapper hs_cos_wrapper_widget_container hs_cos_wrapper_type_widget_container\"  data-hs-cos-general-type=\"widget_container\" data-hs-cos-type=\"widget_container\"><div id=\"hs_cos_wrapper_widget_5477809815\" class=\"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html\" data-hs-cos-general-type=\"widget\" data-hs-cos-type=\"raw_html\"><div class=\"headerimage\" id=\"programs-image-2018\" style=\"display: block;\">\r\n    <h1><span>Programs</span></h1>\r\n    </div></div>\r\n    <div id=\"hs_cos_wrapper_widget_1513236243238\" class=\"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html\" data-hs-cos-general-type=\"widget\" data-hs-cos-type=\"raw_html\"><div class=\"container programs\">\r\n        <div class=\"bgpad\">\r\n            <div class=\"row programsrow\">\r\n                <div class=\"col-md-6\">\r\n                    <h3>Lime for Cities</h3>\r\n                    <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/PngKnBdsFPA?controls=0&amp;rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                    <p>Serving cities is at the core of Lime's mission. From electric scooters to smart bikes, our dock-free smart mobility solutions reduce traffic congestion, promote healthy living and solve the all-important challenge of the first and last mile -- all without subsidies or public funding. </p>\r\n                    <p>Contact: <a href=\"mailto:city@li.me\"><strong>city@li.me</strong></a></p>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <h3>Lime Campus Network</h3>\r\n                    <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/7NFv3ltI7lM?controls=0&amp;rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                    <p>Lime Campus Network aims to increase university bikeshare use, decrease campus traffic and make sure riding Lime is affordable for students. We work closely with campus transportation authorities to design a tailored smart mobility service, offering flat rate pricing to empower students to use Lime everyday. </p>\r\n                    <p>Contact: <a href=\"mailto:college@li.me\"><strong>college@li.me</strong></a></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row programsrow\">\r\n                <div class=\"col-md-6\">\r\n                    <h3>LimeHub Network</h3>\r\n                    <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/Zgar5V3HL74?controls=0&amp;rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                    <p>Lime's fleet of electric scooters and bikes can have a positive impact on your small business’ bottom line while offering a new and exciting amenity to your customers. Learn about the benefits of our LimeHub program here.</p>\r\n                    <p><a href=\"https://www.li.me/limehub-network?hsLang=en-us\"><strong>FIND OUT MORE</strong> <img src=\"https://www.li.me/hubfs/Assets/home-icon-arrow.jpg?t=1532298418651\" class=\"arrowshape\"></a></p>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <h3>Lime Access</h3>\r\n                    <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/iWZISyjrbTQ?controls=0&amp;rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                    <p>Lime works hard to ensure that smart mobility works for everyone. By collaborating closely with key stakeholders and community organizations, we've designed a Lime Access equity program providing low-income individuals with heavily subsidized rides. </p>\r\n                    <p><a href=\"https://www.li.me/community-impact/?hsLang=en-us\"><strong>FIND OUT MORE</strong> <img src=\"https://www.li.me/hubfs/Assets/home-icon-arrow.jpg?t=1532298418651\" class=\"arrowshape\"></a></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <h3>Lime Business Network</h3>\r\n                    <img src=\"https://www.li.me/hubfs/Assets/LimeBusinessNetwork.jpg\">\r\n                    <p>Lime Business Network provides companies and their staff with Lime's GPS-enabled smart mobility vehicles as an employment perk. Our partners work closely with us to design an affordable plan that empowers employees to use Lime for their daily commute and more. </p>\r\n                    <p>Contact: <a href=\"mailto:business@li.me\"><strong>business@li.me</strong></a></p>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <h3>Lime Travel Network</h3>\r\n                    <img src=\"https://www.li.me/hubfs/Assets/LimeTravelNetwork.jpg\">\r\n                    <p>Lime electric scooters and bikes offer a fun, healthy and affordable way for your hotel guests to get around town. Check out the benefits of our Lime Travel Network here.</p>\r\n                    <p><a href=\"https://www.li.me/lime-travel-network?hsLang=en-us\"><strong>FIND OUT MORE</strong> <img src=\"https://www.li.me/hubfs/Assets/home-icon-arrow.jpg?t=1532298418651\" class=\"arrowshape\"></a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>    </div></span>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/programs/programs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/programs/programs.component.ts ***!
  \***********************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
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

var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent() {
    }
    ProgramsComponent.prototype.ngOnInit = function () {
    };
    ProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programs',
            template: __webpack_require__(/*! ./programs.component.html */ "./src/app/components/programs/programs.component.html"),
            styles: [__webpack_require__(/*! ./programs.component.css */ "./src/app/components/programs/programs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ }),

/***/ "./src/app/components/qna/qna.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/qna/qna.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/qna/qna.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/qna/qna.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"QnA\">\n    <h2 class=\"page-header\"> 제목 : {{QnA.title}} </h2>\n    <h6>내용</h6>\n    <p> {{QnA.content}} </p>\n    <p> {{QnA.reply}} </p>\n    <!-- <ul *ngFor=\"rep of QnA.reply\">\n      <li class=\"list-group-item\">{{rep}}</li>\n    </ul> -->\n</div>\n\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Title</th>\n    <th>Username</th>\n    <th></th>\n  </tr>\n  </thead>\n  <tr *ngFor=\"let list of QnAlist\">\n    <th class=\"tr-group\"><div (click)=\"QnA = list\">{{list.title}}</div></th>\n    <th class=\"tr-group\">{{list.username}}</th>\n    <th class=\"tr-group\"><input type=\"button\" value=\"X\" (click)=\"deleteQnA(list)\"></th>\n  </tr>\n</table>\n\n<a [routerLink]=\"['/qnawrite']\" >Write</a>"

/***/ }),

/***/ "./src/app/components/qna/qna.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/qna/qna.component.ts ***!
  \*************************************************/
/*! exports provided: QnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnaComponent", function() { return QnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QnaComponent = /** @class */ (function () {
    function QnaComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    QnaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getQnAlist().subscribe(function (QnAlist) {
            _this.QnAlist = QnAlist;
            console.log(_this.QnAlist);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QnaComponent.prototype.deleteQnA = function (list) {
        var _this = this;
        var QnA = {
            title: list.title,
            username: list.username
        };
        console.log("delete QnA");
        console.log(QnA.title);
        console.log(QnA.username);
        this.authService.deleteQnA(QnA).subscribe(function (data) {
            _this.flashMessage.showFlashMessage({
                messages: ['Delete Success '],
                type: 'success',
                timeout: 2000
            });
            window.location.reload();
        });
    };
    QnaComponent.prototype.selectQnA = function (list) {
        var QnA = {
            title: list.title,
            username: list.username
        };
        console.log("select QnA");
        console.log(QnA.title);
        console.log(QnA.username);
        this.router.navigate(['/viewqna', list]);
    };
    QnaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qna',
            template: __webpack_require__(/*! ./qna.component.html */ "./src/app/components/qna/qna.component.html"),
            styles: [__webpack_require__(/*! ./qna.component.css */ "./src/app/components/qna/qna.component.css")]
        }),
        __metadata("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QnaComponent);
    return QnaComponent;
}());



/***/ }),

/***/ "./src/app/components/qnawrite/qnawrite.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/qnawrite/qnawrite.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/qnawrite/qnawrite.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/qnawrite/qnawrite.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">QnA</h2>\n<div *ngIf=\"user\">\n<form >\n  <div class=\"form-group\">\n    <label>제목</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='title' name=\"title\">\n  </div>\n  <div class=\"form-group\">\n    <label>내용</label>\n    <input type=\"textarea\" class=\"form-control\" [(ngModel)]='content' name=\"content\">\n  </div>\n  <div>\n  <input type=\"button\" class=\"btn btn-primary\" value=\"Write\" (click)=\"onQnASubmit(user,content,title)\">\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/components/qnawrite/qnawrite.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/qnawrite/qnawrite.component.ts ***!
  \***********************************************************/
/*! exports provided: QnawriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QnawriteComponent", function() { return QnawriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QnawriteComponent = /** @class */ (function () {
    function QnawriteComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    QnawriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QnawriteComponent.prototype.onQnASubmit = function (user, title, content) {
        var _this = this;
        var qna = {
            title: title,
            content: content,
            username: user.name,
        };
        console.log(user.name);
        console.log(content);
        console.log(title);
        console.log(qna);
        this.authService.writeQnA(qna).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['You are now registered and can login '],
                    type: 'success',
                    timeout: 2000
                });
            }
            else {
                _this.flashMessage.showFlashMessage({ messages: ['Something went wrong'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
        // this.authService.authenticateUser(qna).subscribe(data => {
        //   if(data.success) {
        //     this.authService.storeUserData(data.token, data.user);
        //     this.flashMessage.showFlashMessage({
        //       messages: [data.msg], 
        //       type: 'success', 
        //       timeout:3000
        //     });
        //     this.router.navigate(['dashboard']);
        //   } else {
        //     this.flashMessage.showFlashMessage({
        //         messages: [data.msg], 
        //         type: 'danger', 
        //         timeout:3000
        //       });
        //       this.router.navigate(['login']);
        //   }
        // });
    };
    QnawriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qnawrite',
            template: __webpack_require__(/*! ./qnawrite.component.html */ "./src/app/components/qnawrite/qnawrite.component.html"),
            styles: [__webpack_require__(/*! ./qnawrite.component.css */ "./src/app/components/qnawrite/qnawrite.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], QnawriteComponent);
    return QnawriteComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2 class=\"page-header\"> Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>E-mail</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\"  class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password confirm</label>\n    <input type=\"password\" [(ngModel)]=\"pass\" name=\"pass\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>License Number</label>\n    <input type=\"text\" [(ngModel)]=\"license_num\" name=\"license_num\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>License Issued</label>\n    <input type=\"text\" [(ngModel)]=\"license_issued\" name=\"license_issued\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>License Expiration</label>\n    <input type=\"text\" [(ngModel)]=\"license_expiration\" name=\"license_expiration\" class=\"form-control\">\n  </div>\n  <div style=\"text-align:end\">\n      <input type=\"submit\" class=\"btn btn=primary\" value=\"Submit\">\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            password: this.password,
            pass: this.pass,
            license_num: this.license_num,
            license_issued: this.license_issued,
            license_expiration: this.license_expiration
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.showFlashMessage({ messages: ['Please fill in all fields'], type: 'danger', timeout: 2000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.showFlashMessage({ messages: ['Please use a valid E-mail'], type: 'danger', timeout: 2000 });
            return false;
        }
        if (!this.validateService.validatepassword(user.password, user.pass)) {
            this.flashMessage.showFlashMessage({ messages: ['Confirm Password!'], type: 'danger', timeout: 2000 });
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['You are now registered and can login '],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.showFlashMessage({ messages: ['Something went wrong'],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/safety/safety.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/safety/safety.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 531px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }\r\n  \r\n  #ctitle {\r\n      text-align: center;\r\n      color: green;\r\n  }"

/***/ }),

/***/ "./src/app/components/safety/safety.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/safety/safety.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-nav navbar-left\" id=\"bimage\">\n        <div id=\"content\">\n             <h2>사용 방법</h2>\n        </div> \n    </div>\n    <div>\n    <div  class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 2%; padding-bottom: 0; display: table\">\n     <div style=\"display:table-cell; vertical-align: middle; width: 1920px\"><h3>   </h3>\n     <h6 style=\"text-align:center; color:#60da0f;\">Safety</h6>\n     <h2>안전한 키위를 위한 사용 방법</h2>\n     <p class=\"maxwidth700\">보호 장비와 안전한 사용 방법을 익혀 키위를 이용하세요!</p>\n     <p class=\"maxwidth700\">사고를 예방할 수 있습니다.</p>\n    </div>\n    </div>\n\n<div class=\"container\">\n  <div>\n      <h2 id=\"ctitle\">안전한 키위 바이크 사용 방법</h2>\n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <img src=\"https://www.li.me/hubfs/Assets/how-to-2018-1.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n          <div class=\"col-md-6\">\n              <img src=\"https://www.li.me/hubfs/Assets/how-to-2018-2.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n      </div>\n      \n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <img src=\"https://www.li.me/hubfs/Assets/how-to-2018-3.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n          <div class=\"col-md-6\">\n              <img src=\"https://www.li.me/hubfs/Assets/how-to-2018-4.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n      </div>\n      \n      <div class=\"row\">\n          <div class=\"col-md-6\">\n              <img src=\"https://www.li.me/hubfs/Assets/how-to-2018-5.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n          <div class=\"col-md-6\">\n              <img src=\"https://www.li.me/hubfs/Assets/how-to-2018-6.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n      </div>\n      \n  </div>\n<div id=\"hs_cos_wrapper_widget_1513336126627\" data-hs-cos-general-type=\"widget\" data-hs-cos-type=\"raw_html\"><div >\n  <div >\n      <h2 id=\"ctitle\">손을 이용한 신호</h2>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <img src=\"https://www.li.me/hubfs/Assets/hand-signals-2018-1.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n          <div class=\"col-md-4\">\n              <img src=\"https://www.li.me/hubfs/Assets/hand-signals-2018-2.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n          <div class=\"col-md-4\">\n              <img src=\"https://www.li.me/hubfs/Assets/hand-signals-2018-3.jpg?t=1542902725056\" width=\"100%\" alt=\"\">\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/safety/safety.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/safety/safety.component.ts ***!
  \*******************************************************/
/*! exports provided: SafetyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafetyComponent", function() { return SafetyComponent; });
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

var SafetyComponent = /** @class */ (function () {
    function SafetyComponent() {
    }
    SafetyComponent.prototype.ngOnInit = function () {
    };
    SafetyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-safety',
            template: __webpack_require__(/*! ./safety.component.html */ "./src/app/components/safety/safety.component.html"),
            styles: [__webpack_require__(/*! ./safety.component.css */ "./src/app/components/safety/safety.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SafetyComponent);
    return SafetyComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getBikeStorage = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/bikestorages/locations', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getBike = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/Bikes/infor', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getUserlist = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/users/userinfor', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getQnAlist = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/users/board', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://13.125.80.236:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.reserveBike = function (bike) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(bike);
        return this.http.post('http://13.125.80.236:3000/users/reserve', bike, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(user);
        return this.http.post('http://13.125.80.236:3000/users/removeuser', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.writeQnA = function (QnA) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(QnA);
        return this.http.post('http://13.125.80.236:3000/users/addBoard', QnA, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteQnA = function (QnA) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(QnA);
        return this.http.post('http://13.125.80.236:3000/users/removeboard', QnA, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getQnAdetail = function () {
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://13.125.80.236:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateAdmin = function (admin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://13.125.80.236:3000/users/adminlogin', admin, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAdminProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadAdminToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/users/adminprofile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.storeAdminData = function (token, admin) {
        localStorage.setItem('admin_token', token);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loadAdminToken = function () {
        var token = localStorage.getItem('admin_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.adminloggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('admin_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined || user.pass == undefined || user.license_num == undefined || user.license_issued == undefined || user.license_expiration == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatepassword = function (password, pass) {
        if (password == pass)
            return true;
        else
            return false;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/MeanAuthApp/MeanAuthApp/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map