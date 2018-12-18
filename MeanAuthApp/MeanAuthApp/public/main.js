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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div>\n  <ng-flash-message></ng-flash-message>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n<app-footerbar></app-footerbar>"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
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
/* harmony import */ var _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/adminlogin/adminlogin.component */ "./src/app/components/adminlogin/adminlogin.component.ts");
/* harmony import */ var _components_adminlocations_adminlocations_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/adminlocations/adminlocations.component */ "./src/app/components/adminlocations/adminlocations.component.ts");
/* harmony import */ var _components_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/adminuserlist/adminuserlist.component */ "./src/app/components/adminuserlist/adminuserlist.component.ts");
/* harmony import */ var _components_qna_qna_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/qna/qna.component */ "./src/app/components/qna/qna.component.ts");
/* harmony import */ var _components_qnawrite_qnawrite_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/qnawrite/qnawrite.component */ "./src/app/components/qnawrite/qnawrite.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_adminprofile_adminprofile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/adminprofile/adminprofile.component */ "./src/app/components/adminprofile/adminprofile.component.ts");
/* harmony import */ var _components_provacypolicy_provacypolicy_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/provacypolicy/provacypolicy.component */ "./src/app/components/provacypolicy/provacypolicy.component.ts");
/* harmony import */ var _components_footerbar_footerbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/footerbar/footerbar.component */ "./src/app/components/footerbar/footerbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'aboutus', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"] },
    { path: 'locations', component: _components_locations_locations_component__WEBPACK_IMPORTED_MODULE_20__["LocationsComponent"] },
    { path: 'programs', component: _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_21__["ProgramsComponent"] },
    { path: 'safety', component: _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_22__["SafetyComponent"] },
    { path: 'kiwiaccess', component: _components_kiwiaccess_kiwiaccess_component__WEBPACK_IMPORTED_MODULE_23__["KiwiaccessComponent"] },
    { path: 'adminlogin', component: _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_24__["AdminloginComponent"] },
    { path: 'adminlocations', component: _components_adminlocations_adminlocations_component__WEBPACK_IMPORTED_MODULE_25__["AdminlocationsComponent"] },
    { path: 'adminuserlist', component: _components_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_26__["AdminuserlistComponent"] },
    { path: 'qna', component: _components_qna_qna_component__WEBPACK_IMPORTED_MODULE_27__["QnaComponent"] },
    { path: 'qnawrite', component: _components_qnawrite_qnawrite_component__WEBPACK_IMPORTED_MODULE_28__["QnawriteComponent"] },
    { path: 'adminprofile', component: _components_adminprofile_adminprofile_component__WEBPACK_IMPORTED_MODULE_30__["AdminprofileComponent"] },
    { path: 'privacypolicy', component: _components_provacypolicy_provacypolicy_component__WEBPACK_IMPORTED_MODULE_31__["ProvacypolicyComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"],
                _components_locations_locations_component__WEBPACK_IMPORTED_MODULE_20__["LocationsComponent"],
                _components_programs_programs_component__WEBPACK_IMPORTED_MODULE_21__["ProgramsComponent"],
                _components_safety_safety_component__WEBPACK_IMPORTED_MODULE_22__["SafetyComponent"],
                _components_kiwiaccess_kiwiaccess_component__WEBPACK_IMPORTED_MODULE_23__["KiwiaccessComponent"],
                _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_24__["AdminloginComponent"],
                _components_adminlocations_adminlocations_component__WEBPACK_IMPORTED_MODULE_25__["AdminlocationsComponent"],
                _components_adminuserlist_adminuserlist_component__WEBPACK_IMPORTED_MODULE_26__["AdminuserlistComponent"],
                _components_qna_qna_component__WEBPACK_IMPORTED_MODULE_27__["QnaComponent"],
                _components_qnawrite_qnawrite_component__WEBPACK_IMPORTED_MODULE_28__["QnawriteComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                _components_adminprofile_adminprofile_component__WEBPACK_IMPORTED_MODULE_30__["AdminprofileComponent"],
                _components_provacypolicy_provacypolicy_component__WEBPACK_IMPORTED_MODULE_31__["ProvacypolicyComponent"],
                _components_footerbar_footerbar_component__WEBPACK_IMPORTED_MODULE_32__["FooterbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__["NgFlashMessagesModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBZ0KLKBKLSJ2MMVcWIIZ2dTiYRBWarFcE' })
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 390px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutus/aboutus.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"navbar-nav\" id=\"bimage\">\n        <div id=\"content\">\n            <h2>키위 바이크 소개</h2>\n        </div>\n    </div>\n    <div>\n        <div class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 0; padding-bottom: 0; display: table; letter-spacing: -1.5px;\">\n            <div style=\"display:table-cell; vertical-align: middle; width: 10000px\">\n                <h3> </h3>\n                <h6 style=\"text-align:center; color:#60da0f; \">SMART MOBILITY</h6>\n                <h4 style=\"margin-bottom: 20px; margin-top: 0; padding-top: 0\">현대 사회를 위한 스마트 모빌리티</h4>\n                <p class=\"maxwidth700\" style=\"margin:2px;\">키위는 \"모든 사람들이 각 지역에서 <b>스마트하고 효율적인 모빌리티</b>에 접근할 수 있는 가치가 있지\n                    않을까?\" 라는</p>\n                <p class=\"maxwidth700\" style=\"margin:2px;\">심플한 생각에서 시작되었습니다. 모두에게 <b>공평한 서비스 공유</b>를 통해 우리는 짧은 거리를\n                    대중교통에 의존하지</p>\n                <p class=\"maxwidth700\" style=\"margin:2px;\">않으며 미래의 세대를 위한 <b>더 깨끗하고 건강한 지구를 물려주는 것</b>을 목표로 하였습니다.</p>\n            </div>\n        </div>\n        <div class=\"bgpad\" class=\"text-center\" style=\"margin-top:0; padding-top:0\">\n            <div style=\"margin-bottom: 50px\">\n                <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_201812099_192851506.png\"\n                    class=\"rounded mx-auto\">\n                <h2>개발자 소개</h2>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col col-lg-2\">\n                    <img width=\"220\" height=\"220\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_192847769.png\">\n                    <h4>윤태영</h4>\n                    <p>Server</p>\n\n                </div>\n                <div class=\"col col-lg-2\" style=\"margin-left:50px; margin-right:50px\">\n                    <img width=\"220\" height=\"220\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_192839806.png\">\n                    <h4>장형필</h4>\n                    <p>App</p>\n\n                </div>\n                <div class=\"col col-lg-2\">\n                    <img width=\"220\" height=\"220\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_192843170.png\">\n                    <h4>김종호</h4>\n                    <p>Web</p>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</body>"

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

module.exports = "\r\n agm-map {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n#bimage {\r\n display: table;\r\n width: 100%;\r\n height: 531px;\r\n background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n}\r\n\r\n#content {\r\n display: table-cell;\r\n top:50%;\r\n left:50%;  \r\n text-align: center; \r\n vertical-align: middle;                                                           \r\n font-size:5rem;\r\n color: white;\r\n z-index: 2;\r\n \r\n}\r\n\r\n#d_right{\r\n  background-color: ghostwhite;\r\n  text-align: center; \r\n  height:100%;\r\n}\r\n\r\n#title {\r\n margin: 0;\r\n padding: 0;\r\n background-color: #60da0f;\r\n color: white;\r\n text-align: center;\r\n height: 8%;\r\n width: 100%;\r\n display: table;\r\n}\r\n\r\n#w_button {\r\n  background-color: #60da0f;\r\n  width: 150px;\r\n  color: #FFFFFF;\r\n  padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/adminlocations/adminlocations.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/adminlocations/adminlocations.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n        <agm-marker iconUrl=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181129_172618464.png\"\n          *ngFor=\"let m of bikestorage\" [latitude]=\"m.latitude\" [longitude]=\"m.longitude\" [markerDraggable]=\"false\">\n\n          <agm-info-window>\n            <p>{{m.Storage_name}}</p>\n            <input type=\"button\" class=\"btn btn-success\" value=\"대여소 자세히 보기\" (click)=\"n = m\" id=\"w_button\">\n          </agm-info-window>\n        </agm-marker>\n\n        <agm-marker iconUrl=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181214_002929152.png\"\n          *ngFor=\"let g of gps\" [latitude]=\"g.latitude\" [longitude]=\"g.longitude\" [markerDraggable]=\"false\">\n\n          <agm-info-window>\n            <p>{{g.name}}</p>\n          </agm-info-window>\n        </agm-marker>\n      </agm-map>\n      <div style=\"text-align:center; margin-top: 20px\">\n        <input type=\"button\" class=\"btn btn-success\" value=\"바이크 모니터링\" (click)=\"refrash()\">\n      </div>\n     \n    </div>\n\n\n\n    <div class=\"col-4\">\n      <div id=\"title\">\n        <h5 style=\"display:table-cell; vertical-align: middle;\"> {{n.Storage_name}} </h5>\n      </div>\n\n      <div id=\"d_right\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Battery</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let list of bike\">\n              <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.name}}</th>\n              <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.battery}}%</th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

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
        if (!this.authService.adminloggedIn())
            this.router.navigate(['/']);
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
        this.authService.getGPS().subscribe(function (gpslist) {
            _this.gps = gpslist;
            console.log(_this.gps);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AdminlocationsComponent.prototype.refrash = function () {
        var _this = this;
        this.authService.getGPS().subscribe(function (gpslist) {
            _this.gps = gpslist;
            console.log(_this.gps);
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

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 940px;\r\n    margin-bottom: 2%;\r\n    background-image: url(\"https://www.li.me/hubfs/lime-one-year-report-bike-scooter-sharing-2.jpg\");\r\n    background-size: contain;\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }\r\n  \r\n  #email {\r\n    width: 100%;\r\n    height: 60px;\r\n    color: black;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  #login {\r\n    background-color: #60da0f;\r\n    width: 45.5%;\r\n    height: 60px;\r\n    margin: 11.5px;\r\n    color: #FFFFFF;\r\n    padding: 0;\r\n  }\r\n  \r\n  #alogin {\r\n    background-color: #e1e1e1;\r\n    width: 45.5%;\r\n    height: 60px;\r\n    margin: 11.5px;\r\n    color: #888787;\r\n  }\r\n  \r\n  #home {\r\n    font-size: 42px;\r\n    line-height: 101px;\r\n    color: #60da0f;\r\n    font-family: \"Helvetica Neue\";\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-decoration: none;\r\n     }"

/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/adminlogin/adminlogin.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex justify-content-center\" style=\"text-align: center; align-content: center\">\n    <div class=\"col-lg-6\">\n        <a class=\"nav-link\" class=\"align-middle\" id=\"home\">관리자 로그인</a>\n      <form (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]='email' name=\"email\" placeholder=\" 관리자 ID\" id=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\" placeholder=\" 비밀번호\" id=\"email\">\n        </div>\n        <div style=\"text-align:center; width: 100%\">\n          <input type=\"submit\" value=\"로그인\" id=\"login\">\n          <input type=\"button\" value=\"유저 로그인\" id=\"alogin\" [routerLink]='[\"/login\"]'>\n        </div>\n      </form>\n    </div>\n  </div>"

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
        this.authService.show();
        this.authService.doSomethingElseUseful();
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

module.exports = "<div id=\"bimage\">\n    <div id=\"content\">\n        <h2>관리자 정보</h2>\n    </div>\n</div>\n<div class=\"container\">\n    <div *ngIf=\"user\">\n        <div id=\"title\">\n            <h3 style=\"display:table-cell; vertical-align: middle;\"> 관리자님의 정보 </h3>\n        </div>\n        <table class=\"table\">\n            <tbody>\n                <tr>\n                    <th class=\"tr-group\">E - mail</th>\n                    <th class=\"tr-group\">{{user.email}}</th>\n                </tr>\n                <tr>\n                    <th class=\"tr-group\">License Number</th>\n                    <th class=\"tr-group\">{{user.license_num}}</th>\n                </tr>\n                <tr>\n                    <th class=\"tr-group\">License Issued</th>\n                    <th class=\"tr-group\">{{user.license_issued}}</th>\n                </tr>\n                <tr>\n                    <th class=\"tr-group\">License expiration</th>\n                    <th class=\"tr-group\">{{user.license_expiration}}</th>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

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

module.exports = "<div class=\"container\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>E-mail</th>\n                <th>운전면허 번호</th>\n                <th>운전면허 발행일</th>\n                <th>운전면허 만료일</th>\n                <th>삭제</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let list of userlist\">\n                <th class=\"tr-group\">{{list.email}}</th>\n                <th class=\"tr-group\">{{list.license_num}}</th>\n                <th class=\"tr-group\">{{list.license_issued}}</th>\n                <th class=\"tr-group\">{{list.license_expiration}}</th>\n                <th class=\"tr-group\"><input type=\"button\" value=\"삭제\" (click)=\"deleteUser(list)\"></th>\n            </tr>\n        </tbody>\n    </table>\n</div>"

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
        if (!this.authService.adminloggedIn())
            this.router.navigate(['/']);
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
            _this.authService.getUserlist().subscribe(function (userlist) {
                _this.userlist = userlist;
                console.log(_this.userlist);
            }, function (err) {
                console.log(err);
                return false;
            });
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

module.exports = "#bimage {\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    height: 320px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222405184.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n</div>"

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

/***/ "./src/app/components/footerbar/footerbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/footerbar/footerbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\r\n    font-size: 42px;\r\n    line-height: 101px;\r\n    color: #60da0f;\r\n    font-family: \"Helvetica Neue\";\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-decoration: none;\r\n     }\r\n    \r\n    #category {\r\n    font-size: 18px;\r\n    letter-spacing: -1.5px;\r\n    color: #151515;\r\n    font-family: \"Yoon Gothic770\";\r\n    }\r\n    \r\n    #mini {\r\n    font-size: 14px;\r\n    letter-spacing: 0px;\r\n    color: #151515;\r\n    font-family: \"Yoon Gothic760\";\r\n    text-align: center;\r\n    }\r\n    \r\n    #lang {\r\n        font-size: 18px;\r\n    letter-spacing: 0px;\r\n    line-height: 74px;\r\n    color: #60da0f;\r\n    font-family: \"Helvetica\";\r\n    font-weight: bold;\r\n    text-align: center;\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/components/footerbar/footerbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/footerbar/footerbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background-color: #c7f4bc\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"col-md-6\" style=\"height: 100%\">\n    <div class=\"row\" style=\"width:400px\">\n      <div>\n          <ul class=\"navbar-nav\">\n            <li><h5>관련 페이지</h5></li>\n              <li><img src=\"https://www.li.me/hubfs/Assets/footer-facebook.svg\" alt=\"\" style=\"margin-right: 10px\">\n              <img src=\"https://www.li.me/hubfs/Assets/footer-twitter.svg\" alt=\"\" style=\"margin-right: 10px\">\n              <img src=\"https://www.li.me/hubfs/Assets/footer-instagram.svg\" alt=\"\" style=\"margin-right: 10px\">\n              <img src=\"https://www.li.me/hubfs/Assets/footer-angel.svg\" alt=\"\" style=\"margin-right: 10px\"></li>\n          </ul>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col\">\n    <ul class=\"navbar-nav justify-content-around\">\n      <li *ngIf=\"!authService.adminloggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/aboutus']\">키위소개</a>\n      </li>\n      <li *ngIf=\"!authService.adminloggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/locations']\">대여소위치</a>\n      </li>\n      <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminuserlist']\">유저리스트</a>\n      </li>\n      <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item active\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminlocations']\">대여소관리</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/safety']\">사용방법</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/kiwiaccess']\">등록방법</a>\n      </li>\n      <!-- <li class=\"nav-item active\">\n          <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/qna']\" >Help</a>\n      </li> -->\n    </ul>\n  </div>\n  <div class=\"col\">\n    <ul class=\"navbar-nav\">\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/profile']\">사용자정보</a>\n      </li>\n      <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminprofile']\">관리자정보</a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn() && !authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/privacypolicy']\">회원가입</a>\n      </li>\n\n      <li *ngIf=\"!authService.loggedIn() && !authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/login']\">로그인</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn() || authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" id=\"category\" (click)=\"onLogoutClick()\" href=\"#\">로그아웃</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"category\"> </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/qna']\">고객센터</a>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footerbar/footerbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/footerbar/footerbar.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterbarComponent", function() { return FooterbarComponent; });
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




var FooterbarComponent = /** @class */ (function () {
    function FooterbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    FooterbarComponent.prototype.ngOnInit = function () {
    };
    FooterbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['You are logged out'],
            type: 'success',
            timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
    };
    FooterbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footerbar',
            template: __webpack_require__(/*! ./footerbar.component.html */ "./src/app/components/footerbar/footerbar.component.html"),
            styles: [__webpack_require__(/*! ./footerbar.component.css */ "./src/app/components/footerbar/footerbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], FooterbarComponent);
    return FooterbarComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\r\nfont-size: 70px;\r\nletter-spacing: -3px;\r\nline-height: 82px;\r\ncolor: #ffffff;\r\nfont-family: \"Yoon Gothic710\";\r\ntext-align: center;\r\nbox-shadow: 0px 3px 0px rgba(0,0,0,0.38);\r\n}\r\n\r\n#sub {\r\n    font-size: 18px;\r\nletter-spacing: 0px;\r\nline-height: 84px;\r\ncolor: #d4d4d4;\r\nfont-family: \"Yoon Gothic720\";\r\ntext-align: center;\r\n}\r\n\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n}\r\n\r\n#bimage {\r\n    text-align: center;\r\n    display: table;\r\n    width: 100%;\r\n    height: 700px;;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181211_142404829.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#sbimage {\r\n    text-align: center;\r\n    display: table;\r\n    width: 100%;\r\n    height: 750px;;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181217_190818681.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center;\r\n}\r\n\r\n#d_sub{\r\n    display: table-cell;\r\n    text-align: center; \r\n}\r\n\r\n#content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n  <div id=\"d_sub\">\n    <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181210_203421632.png\" style=\"margin-top:100px\">\n    <h1 id=\"title\">언제 어디서나 즐기는</h1>\n    <h1 id=\"title\">스마트 모빌리티 <span style=\"color: #60da0f;\">키위</span></h1>\n\n    <h6 id=\"sub\">내 위치 주변에 있는 스마트 킥보드 \"<span style=\"color: #60da0f;\">키위</span>\"를 찾아 언제 어디서나 쉽게 즐기세요</h6>\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"row\" style=\"height:107px; width:800px;\">\n    <a href=\"https://play.google.com/store/apps/details?id=com.hansung.android.kiwi\" style=\"margin-right:80px\"><img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181215_231535392.png\" width=\"70%\" height=\"70%\"></a>\n    <a ><img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181215_231841284.png\" width=\"70%\" height=\"70%\" (click)=\"alram()\"></a>\n    </div></div>\n  </div>\n</div>\n<div class=\"container\">\n<div class=\"d-flex justify-content-center\" style=\"margin-top: 30px\">\n<div class=\"col\">\n  <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181217_202927479.jpg\" width=\"220px\" height=\"auto\" style=\"margin-left:200px\">\n</div>\n<div class=\"col\" style=\"text-align:center; height: 100%; display: table; margin-right: 200px\">\n  <div style=\"display: table-cell; vertical-align: middle\">\n    <h2 style=\"margin-top:70px; margin-bottom:100px; letter-spacing:6px\"><b>서비스소개</b></h2>\n\n    <h5 style=\"margin-bottom:30px\">내 주변의 킥고잉을 찾아보세요.<br />\n                빠르고 편한 이동을 경험하실 수 있습니다.</h5>\n            \n                <h4><b>지금 1,000원으로 출발하세요!</b></h4>\n\n  </div>\n</div>\n</div>\n</div>\n<div >\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col\">\n  <iframe width=\"1024\" height=\"576\" src=\"https://www.youtube.com/embed/StWjnN6Ozb0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"margin-top: 30px\"></iframe>\n    </div>\n</div>\n</div>\n"

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




var HomeComponent = /** @class */ (function () {
    function HomeComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.alram = function () {
        this.flashMessage.showFlashMessage({
            messages: ['Iphone App Coming Soon!!'],
            type: 'info',
            timeout: 2000
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 390px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/components/kiwiaccess/kiwiaccess.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/kiwiaccess/kiwiaccess.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n    <div id=\"content\">\n        <h2>등록 방법</h2>\n    </div>\n</div>\n<div>\n    <div class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 2%; padding-bottom: 0; display: table\">\n        <div style=\"display:table-cell; vertical-align: middle; width: 1920px\">\n            <h3> </h3>\n            <h6 style=\"text-align:center; color:#60da0f;\">Locations</h6>\n            <h2><span style=\"color:#60da0f\">키위</span> 등록 방법</h2>\n            <p class=\"maxwidth700\" style=\"margin-bottom: 0\">간단한 방법으로 <span style=\"color:#60da0f\">키위</span>에 등록하세요</p>\n            <p class=\"maxwidth700\"><b>간편한 이동수단</b>을 사용하실 수 있습니다!</p>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"bgpad text-center\">\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <img width=\"100%\" height=\"80%\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/Lime_Access_Illustrations_1.png\"\n                        alt=\"\">\n                    <h5 style=\"margin:20px\">회원가입을 해주세요</h5>\n                </div>\n                <div class=\"col-6\">\n                    <img width=\"100%\" height=\"80%\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/Lime_Access_Illustrations_3.png\"\n                        alt=\"\">\n                    <h5 style=\"margin:20px\">주변 보관소로 이동하세요</h5>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <img width=\"100%\" height=\"80%\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/Lime_Access_Illustrations_4.png\"\n                        alt=\"\">\n                    <h5 style=\"margin:20px\">카드를 준비해주세요</h5>\n                </div>\n                <div class=\"col-6\">\n                    <img width=\"100%\" height=\"80%\" src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/Lime_Access_Illustrations_5.png\"\n                        alt=\"\">\n                    <h5 style=\"margin:20px\">앱을 이용하여 잠금을 해제 후 이용해주세요</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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

module.exports = "\r\n agm-map {\r\n   width: 100%;\r\n   height: 600px;\r\n }\r\n\r\n #bimage {\r\n  display: table;\r\n  width: 100%;\r\n  height: 390px;\r\n  background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181211_142358168.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n #content {\r\n  display: table-cell;\r\n  top:50%;\r\n  left:50%;  \r\n  text-align: center; \r\n  vertical-align: middle;                                                           \r\n  font-size:5rem;\r\n  color: white;\r\n  z-index: 2;\r\n  \r\n}\r\n\r\n #d_right{\r\n   background-color: ghostwhite;\r\n   text-align: center; \r\n   height:100%;\r\n }\r\n\r\n #title {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #60da0f;\r\n  color: white;\r\n  text-align: center;\r\n  height: 8%;\r\n  width: 100%;\r\n  display: table;\r\n }\r\n\r\n #res {\r\n  background-color: #60da0f;\r\n  width: 50px;\r\n  color: #FFFFFF;\r\n  padding: 0;\r\n}\r\n\r\n #w_button {\r\n  background-color: #60da0f;\r\n  width: 150px;\r\n  color: #FFFFFF;\r\n  padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/locations/locations.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/locations/locations.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"navbar-nav navbar-left\" id=\"bimage\">\n    <div id=\"content\">\n      <h2>대여소 위치</h2>\n    </div>\n  </div>\n  <div>\n    <div class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 2%; padding-bottom: 0; display: table\">\n      <div style=\"display:table-cell; vertical-align: middle; width: 1920px\">\n        <h3> </h3>\n        <h6 style=\"text-align:center; color:#60da0f;\">Locations</h6>\n        <h2>전동 킥보드 대여소 위치</h2>\n        <p class=\"maxwidth700\" style=\"margin-bottom: 0\">현재 내 주변에 있는 전동 킥보드 대여소 위치를 찾아보세요!</p>\n        <p class=\"maxwidth700\">도착 전 미리 <b>예약</b>할 수 있습니다.</p>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n            <agm-marker iconUrl=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181129_172618464.png\"\n              *ngFor=\"let m of bikestorage\" [latitude]=\"m.latitude\" [longitude]=\"m.longitude\" [markerDraggable]=\"false\">\n\n              <agm-info-window style=\"text-align: center\">\n                <h6>{{m.Storage_name}}</h6>\n                <input type=\"button\" class=\"btn btn-success\" value=\"대여소 자세히 보기\" (click)=\"n = m\" id=\"w_button\">\n              </agm-info-window>\n            </agm-marker>\n          </agm-map>\n        </div>\n        <div class=\"col-4\">\n          <div id=\"title\">\n            <h5 style=\"display:table-cell; vertical-align: middle;\"> {{n.Storage_name}} </h5>\n          </div>\n\n          <div id=\"d_right\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Battery</th>\n                  <th>예약</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let list of bike\">\n                  <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.name}}</th>\n                  <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">{{list.battery}}%</th>\n                  <th class=\"tr-group\" *ngIf=\"n.uid == list.uid\">\n                    <span *ngIf=\"user\">\n                        <input *ngIf=\"list.reserve=='true' && user.email\" type=\"button\" class=\"btn btn-success\" value=\"예약\" (click)=\"error()\" id=\"res\">\n                      <input *ngIf=\"list.reserve=='true' && !user.email\" type=\"button\" class=\"btn btn-success\" value=\"예약\" (click)=\"reservation(list,user.email)\" id=\"res\">\n                      <span *ngIf=\"list.reserve=='false'\" style=\"color:red\">불가</span></span></th>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

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
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    LocationsComponent.prototype.reservation = function (list, email) {
        var _this = this;
        var sBike = {
            name: list.name,
            battery: list.battery,
            email: email
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

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 940px;\r\n    margin-bottom: 2%;\r\n    background-image: url(\"https://www.li.me/hubfs/lime-one-year-report-bike-scooter-sharing-2.jpg\");\r\n    background-size: contain;\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }\r\n  \r\n  #email {\r\n    width: 100%;\r\n    height: 60px;\r\n    color: #c0bebe;\r\n    font-size: 14pt;\r\n  }\r\n  \r\n  #login {\r\n    background-color: #60da0f;\r\n    width: 45.5%;\r\n    height: 60px;\r\n    margin: 11.5px;\r\n    color: #FFFFFF;\r\n    padding: 0;\r\n  }\r\n  \r\n  #alogin {\r\n    background-color: #e1e1e1;\r\n    width: 45.5%;\r\n    height: 60px;\r\n    margin: 11.5px;\r\n    color: #888787;\r\n  }\r\n  \r\n  #home {\r\n    font-size: 42px;\r\n    line-height: 101px;\r\n    color: #60da0f;\r\n    font-family: \"Helvetica Neue\";\r\n    font-weight: bold;\r\n    text-align: center;\r\n    text-decoration: none;\r\n     }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex justify-content-center\" style=\"text-align: center; align-content: center\">\n  <div class=\"col-lg-6\">\n      <a class=\"nav-link\" class=\"align-middle\" id=\"home\">\n        로그인\n      </a>\n    <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='email' name=\"email\" placeholder=\" 이메일\" id=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\" placeholder=\" 비밀번호\" id=\"email\">\n      </div>\n      <div style=\"text-align:center; width: 100%\">\n        <input type=\"submit\" value=\"로그인\" id=\"login\">\n        <input type=\"button\" value=\"관리자 로그인\" id=\"alogin\" [routerLink]='[\"/adminlogin\"]'>\n      </div>\n    </form>\n  </div>\n</div>"

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
        this.authService.show();
        this.authService.doSomethingElseUseful();
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

module.exports = "#home {\r\nfont-size: 42px;\r\nline-height: 101px;\r\ncolor: #60da0f;\r\nfont-family: \"Helvetica Neue\";\r\nfont-weight: bold;\r\ntext-align: center;\r\ntext-decoration: none;\r\n }\r\n\r\n#category {\r\nfont-size: 18px;\r\nletter-spacing: -1.5px;\r\nline-height: 74px;\r\ncolor: #151515;\r\nfont-family: \"Yoon Gothic770\";\r\ntext-align: center;\r\nmargin-left: 56px;\r\nmargin-right: 56px;\r\n}\r\n\r\n#mini {\r\nfont-size: 14px;\r\nletter-spacing: 0px;\r\nline-height: 74px;\r\ncolor: #151515;\r\nfont-family: \"Yoon Gothic760\";\r\ntext-align: center;\r\n}\r\n\r\n#lang {\r\n    font-size: 18px;\r\nletter-spacing: 0px;\r\nline-height: 74px;\r\ncolor: #60da0f;\r\nfont-family: \"Helvetica\";\r\nfont-weight: bold;\r\ntext-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-white bg-white justify-content-around\" style=\"display:flex\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample04\" aria-controls=\"navbarsExample04\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  \n  <ul class=\"navbar-nav navbar-left\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"lang\">Korean</a>\n    </li>\n  </ul>\n\n  <ul class=\"navbar-nav justify-content-around\">\n    <li *ngIf=\"!authService.adminloggedIn()\" class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/aboutus']\">키위소개</a>\n    </li>\n    <li *ngIf=\"!authService.adminloggedIn()\" class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/locations']\">대여소위치</a>\n    </li>\n    <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminuserlist']\">유저리스트</a>\n    </li>\n    <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/adminlocations']\">대여소관리</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" class=\"align-middle\" id=\"home\" [routerLink]=\"['/']\">\n        <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181211_164539081.png\"\n          width=\"71\" height=\"71\">\n        Kiwi\n      </a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/safety']\">사용방법</a>\n    </li>\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/kiwiaccess']\">등록방법</a>\n    </li>\n    <!-- <li class=\"nav-item active\">\n            <a class=\"nav-link\" id=\"category\" [routerLink]=\"['/qna']\" >Help</a>\n        </li> -->\n  </ul>\n\n  <ul class=\"navbar-nav navbar-right\">\n    <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" id=\"mini\" [routerLink]=\"['/profile']\">사용자정보</a>\n    </li>\n    <li *ngIf=\"authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" id=\"mini\">관리자</a>\n    </li>\n    <li *ngIf=\"!authService.loggedIn() && !authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" id=\"mini\" [routerLink]=\"['/privacypolicy']\">회원가입</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"mini\">|</a>\n    </li>\n    <li *ngIf=\"!authService.loggedIn() && !authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" id=\"mini\" [routerLink]=\"['/login']\">로그인</a>\n    </li>\n    <li *ngIf=\"authService.loggedIn() || authService.adminloggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\" id=\"mini\" (click)=\"onLogoutClick()\" href=\"#\">로그아웃</a>\n    </li>\n  </ul>\n</nav>"

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

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 531px;\r\n    margin-bottom: 2%;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }\r\n  \r\n  #title {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #60da0f;\r\n  color: white;\r\n  text-align: center;\r\n  height: 50px;\r\n  width: 100%;\r\n  display: table;\r\n }\r\n  \r\n  #res {\r\n  background-color: #60da0f;\r\n  width: 100px;\r\n  color: #FFFFFF;\r\n  padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bimage\">\n    <div id=\"content\">\n        <h2>사용자 정보</h2>\n    </div>\n</div>\n<div class=\"container\">\n    <div *ngIf=\"user\">\n        <div id=\"title\">\n            <h3 style=\"display:table-cell; vertical-align: middle;\"> {{user.name}}님의 회원정보 </h3>\n        </div>\n        <table class=\"table\">\n            <tbody>\n                <tr>\n                    <th class=\"tr-group\">E - mail</th>\n                    <th class=\"tr-group\">{{user.email}}</th>\n                </tr>\n                <tr>\n                    <th class=\"tr-group\">운전면허 번호</th>\n                    <th class=\"tr-group\">{{user.license_num}}</th>\n                </tr>\n                <tr>\n                    <th class=\"tr-group\">운전면허 발행일</th>\n                    <th class=\"tr-group\">{{user.license_issued}}</th>\n                </tr>\n                <tr>\n                    <th class=\"tr-group\">운전면허 만료일</th>\n                    <th class=\"tr-group\">{{user.license_expiration}}</th>\n                </tr>\n                <tr>\n                    <th class=\"tr-group\">예약 내용</th>\n                    <span *ngFor=\"let B of bike\">\n                        <th class=\"tr-group\" *ngIf=\"user.email == B.email\">{{B.name}}</th>\n                        <th *ngIf=\"user.email == B.email\"><input type=\"button\" class=\"btn btn-success\" id=\"res\" value=\"예약 취소\" (click)=\"cancel(B.name)\"></th>\n                    </span>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

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




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
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
        this.authService.getBike().subscribe(function (bikeList) {
            _this.bike = bikeList;
            console.log(_this.bike);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.cancel = function (Bname) {
        var _this = this;
        var sBike = {
            name: Bname,
            email: " ",
            reserve: "true"
        };
        console.log(sBike.name);
        console.log(sBike.email);
        this.authService.cancelBike(sBike).subscribe(function (data) {
            _this.flashMessage.showFlashMessage({
                messages: ['Reservation Cancel Success'],
                type: 'success',
                timeout: 2000
            });
        });
        window.location.reload();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
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

module.exports = "<div class=\"body-container-wrapper\">\r\n    <div class=\"body-container container-fluid\">\r\n\r\n        <div class=\"row-fluid-wrapper row-depth-1 row-number-1 \">\r\n            <div class=\"row-fluid \">\r\n                <div class=\"span12 widget-span widget-type-widget_container about-us-wrap\" data-widget-type=\"widget_container\"\r\n                    data-x=\"0\" data-w=\"12\">\r\n                    <span id=\"hs_cos_wrapper_module_150757646670892\" class=\"hs_cos_wrapper hs_cos_wrapper_widget_container hs_cos_wrapper_type_widget_container\"\r\n                        data-hs-cos-general-type=\"widget_container\" data-hs-cos-type=\"widget_container\">\r\n                        <div id=\"hs_cos_wrapper_widget_5477809815\" class=\"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html\"\r\n                            data-hs-cos-general-type=\"widget\" data-hs-cos-type=\"raw_html\">\r\n                            <div class=\"headerimage\" id=\"programs-image-2018\" style=\"display: block;\">\r\n                                <h1><span>Programs</span></h1>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"hs_cos_wrapper_widget_1513236243238\" class=\"hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html\"\r\n                            data-hs-cos-general-type=\"widget\" data-hs-cos-type=\"raw_html\">\r\n                            <div class=\"container programs\">\r\n                                <div class=\"bgpad\">\r\n                                    <div class=\"row programsrow\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <h3>Lime for Cities</h3>\r\n                                            <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/PngKnBdsFPA?controls=0&amp;rel=0\"\r\n                                                frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                                            <p>Serving cities is at the core of Lime's mission. From electric scooters\r\n                                                to smart bikes, our dock-free smart mobility solutions reduce traffic\r\n                                                congestion, promote healthy living and solve the all-important\r\n                                                challenge of the first and last mile -- all without subsidies or public\r\n                                                funding. </p>\r\n                                            <p>Contact: <a href=\"mailto:city@li.me\"><strong>city@li.me</strong></a></p>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <h3>Lime Campus Network</h3>\r\n                                            <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/7NFv3ltI7lM?controls=0&amp;rel=0\"\r\n                                                frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                                            <p>Lime Campus Network aims to increase university bikeshare use, decrease\r\n                                                campus traffic and make sure riding Lime is affordable for students. We\r\n                                                work closely with campus transportation authorities to design a\r\n                                                tailored smart mobility service, offering flat rate pricing to empower\r\n                                                students to use Lime everyday. </p>\r\n                                            <p>Contact: <a href=\"mailto:college@li.me\"><strong>college@li.me</strong></a></p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row programsrow\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <h3>LimeHub Network</h3>\r\n                                            <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/Zgar5V3HL74?controls=0&amp;rel=0\"\r\n                                                frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                                            <p>Lime's fleet of electric scooters and bikes can have a positive impact\r\n                                                on your small business’ bottom line while offering a new and exciting\r\n                                                amenity to your customers. Learn about the benefits of our LimeHub\r\n                                                program here.</p>\r\n                                            <p><a href=\"https://www.li.me/limehub-network?hsLang=en-us\"><strong>FIND\r\n                                                        OUT MORE</strong> <img src=\"https://www.li.me/hubfs/Assets/home-icon-arrow.jpg?t=1532298418651\"\r\n                                                        class=\"arrowshape\"></a></p>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <h3>Lime Access</h3>\r\n                                            <iframe width=\"100%\" height=\"350\" src=\"https://www.youtube-nocookie.com/embed/iWZISyjrbTQ?controls=0&amp;rel=0\"\r\n                                                frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n                                            <p>Lime works hard to ensure that smart mobility works for everyone. By\r\n                                                collaborating closely with key stakeholders and community\r\n                                                organizations, we've designed a Lime Access equity program providing\r\n                                                low-income individuals with heavily subsidized rides. </p>\r\n                                            <p><a href=\"https://www.li.me/community-impact/?hsLang=en-us\"><strong>FIND\r\n                                                        OUT MORE</strong> <img src=\"https://www.li.me/hubfs/Assets/home-icon-arrow.jpg?t=1532298418651\"\r\n                                                        class=\"arrowshape\"></a></p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <h3>Lime Business Network</h3>\r\n                                            <img src=\"https://www.li.me/hubfs/Assets/LimeBusinessNetwork.jpg\">\r\n                                            <p>Lime Business Network provides companies and their staff with Lime's\r\n                                                GPS-enabled smart mobility vehicles as an employment perk. Our partners\r\n                                                work closely with us to design an affordable plan that empowers\r\n                                                employees to use Lime for their daily commute and more. </p>\r\n                                            <p>Contact: <a href=\"mailto:business@li.me\"><strong>business@li.me</strong></a></p>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <h3>Lime Travel Network</h3>\r\n                                            <img src=\"https://www.li.me/hubfs/Assets/LimeTravelNetwork.jpg\">\r\n                                            <p>Lime electric scooters and bikes offer a fun, healthy and affordable way\r\n                                                for your hotel guests to get around town. Check out the benefits of our\r\n                                                Lime Travel Network here.</p>\r\n                                            <p><a href=\"https://www.li.me/lime-travel-network?hsLang=en-us\"><strong>FIND\r\n                                                        OUT MORE</strong> <img src=\"https://www.li.me/hubfs/Assets/home-icon-arrow.jpg?t=1532298418651\"\r\n                                                        class=\"arrowshape\"></a></p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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

/***/ "./src/app/components/provacypolicy/provacypolicy.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/provacypolicy/provacypolicy.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/provacypolicy/provacypolicy.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/provacypolicy/provacypolicy.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>개인정보 취급 정책</h2>\n  <div style=\"width:100%; height:600px; overflow-y:scroll; margin-bottom: 20px\">\n    <i>('http://13.125.80.236:3000'이하 'KiwiBike')</i>은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게\n    처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.\n    <br><br>\n    <i>('KiwiBike')</i>은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.\n    <br><br>\n    ○ 본 방침은부터 2018년 1월 1일부터 시행됩니다.\n    <br><br><br>\n\n    <b>1. 개인정보의 처리 목적 <i>('http://13.125.80.236:3000'이하 'KiwiBike')</i>은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의\n      목적이외의\n      용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.</b>\n    <br><br>\n    가. 홈페이지 회원가입 및 관리\n    <br><br>\n    회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인\n    동의\n    여부 확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    나. 민원사무 처리\n    <br><br>\n    민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    다. 재화 또는 서비스 제공\n    <br><br>\n    물품배송, 서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증, 요금결제·정산, 채권추심 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    라. 마케팅 및 광고에의 활용\n    <br><br>\n    신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 서비스의 유효성 확인, 접속빈도 파악 또는 회원의\n    서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br>\n\n    마. 개인영상정보\n    <br><br>\n    범죄의 예방 및 수사, 시설안전 및 화재예방, 교통단속, 교통정보의 수집·분석 및 제공 등을 목적으로 개인정보를 처리합니다.\n    <br><br><br><br><br>\n\n\n\n    <b>2. 개인정보 파일 현황<br>\n      <i>('http://13.125.80.236:3000'이하 'KiwiBike')</i>가 개인정보 보호법 제32조에 따라 등록․공개하는 개인정보파일의 처리목적은 다음과 같습니다.</b>\n    <br><br>\n    1. 개인정보 파일명 : KiwiBikePrivacy<br>\n    - 개인정보 항목 : 이메일, 휴대전화번호, 비밀번호, 로그인ID, 성별, 생년월일, 이름, 주민등록번호, 신용카드정보, 은행계좌정보, 서비스 이용 기록, 결제기록<br>\n    - 수집방법 : 홈페이지<br>\n    - 보유근거 : 'KiwiBike'서비스운영<br>\n    - 보유기간 : 3년<br>\n    - 관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년, 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년, 대금결제 및 재화 등의 공급에 관한 기록 : 5년, 계약 또는 청약철회 등에\n    관한\n    기록 : 5년, 표시/광고에 관한 기록 : 6개월\n    <br><br><br><br>\n\n\n    ※ 기타('http://13.125.80.236:3000'이하 'KiwiBike')의 개인정보파일 등록사항 공개는 행정안전부 개인정보보호 종합지원 포털(www.privacy.go.kr) → 개인정보민원\n    →\n    개인정보열람등 요구 → 개인정보파일 목록검색 메뉴를 활용해주시기 바랍니다.\n    <br><br>\n    <b>3. 개인정보의 처리 및 보유 기간</b>\n    <br><br>\n    ① <i>('KiwiBike')</i>은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.\n    <br><br>\n    ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.\n    <br><br>\n    1.&#60;홈페이지 회원가입 및 관리&#62;<br>\n    &#60;홈페이지 회원가입 및 관리&#62;와 관련한 개인정보는 수집.이용에 관한 동의일로부터&#60;1년&#62;까지 위 이용목적을 위하여 보유.이용됩니다.<br>\n    -보유근거 : \"kiwiBike\"서비스운영<br>\n    -관련법령 : 1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년<br>\n    2) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br>\n    3) 대금결제 및 재화 등의 공급에 관한 기록 : 5년<br>\n    4) 계약 또는 청약철회 등에 관한 기록 : 5년<br>\n    5) 표시/광고에 관한 기록 : 6개월<br>\n    <br><br>\n    -예외사유 :\n    <br><br><br><br>\n\n\n    <b>4. 개인정보의 제3자 제공에 관한 사항</b>\n    <br><br>\n    ① <i>('http://13.125.80.236:3000'이하 'KiwiBike')</i>은(는) 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만\n    개인정보를 제3자에게 제공합니다.\n    <br><br>\n    ② <i>('http://13.125.80.236:3000')</i>은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.\n    <br><br><br>\n\n    1. &#60;'KiwiBike'&#62;<br>\n    - 개인정보를 제공받는 자 : 'KiwiBike'<br>\n    - 제공받는 자의 개인정보 이용목적 : 이메일, 휴대전화번호, 비밀번호, 로그인ID, 주민등록번호, 신용카드정보, 은행계좌정보, 서비스 이용 기록, 결제기록<br>\n    - 제공받는 자의 보유.이용기간: 1년<br>\n    <br><br><br>\n\n\n    <b>5. 개인정보처리 위탁</b>\n    <br><br>\n    ① ('KiwiBike')은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.\n    <br><br>\n    1. &#60;&#62;<br>\n    - 위탁받는 자 (수탁자) : <br>\n    - 위탁하는 업무의 내용 : <br>\n    - 위탁기간 :<br>\n    <br>\n    <br>\n    <br>\n    ② <i>('http://13.125.80.236:3000'이하 'KiwiBike')</i>은(는) 위탁계약 체결시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적\n    보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.\n    <br><br>\n    ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.<br>\n    <b>6. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.</b><br>\n    <br>\n    ① 정보주체는 KiwiBike에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.<br>\n    ② 제1항에 따른 권리 행사는KiwiBike에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 KiwiBike은(는) 이에 대해 지체\n    없이\n    조치하겠습니다.<br>\n    ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br>\n    ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.<br>\n    ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.<br>\n    ⑥ KiwiBike은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.<br>\n    <br>\n    <br>\n    <br>\n    <b>7. 처리하는 개인정보의 항목 작성</b> <br>\n    <br>\n    ① <i>('http://13.125.80.236:3000'이하 'KiwiBike')</i>은(는) 다음의 개인정보 항목을 처리하고 있습니다.<br>\n    <br>\n    1&#60;홈페이지 회원가입 및 관리&#62;<br>\n    - 필수항목 : 이메일, 비밀번호, 로그인ID, 이름, 주민등록번호, 신용카드정보, 은행계좌정보<br>\n    - 선택항목 :<br>\n\n    <br><br>\n    <br>\n    <br>\n    <b>8. 개인정보의 파기<i>('KiwiBike')</i>은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.</b>\n    <br><br>\n    -파기절차<br>\n    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는\n    법률에\n    의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.<br>\n    <br>\n    -파기기한<br>\n    이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는\n    개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.<br>\n    <br>\n    -파기방법<br>\n    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.<br>\n    종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br>\n    <br>\n    <br>\n    <br>\n    <b>9. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항</b><br>\n    <br>\n    KiwiBike 은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키’를 사용하지 않습니다.<br>\n    <br>\n    <br>\n    <b>10. 개인정보 보호책임자 작성</b><br>\n    <br>\n    <br>\n    ① KiwiBike(‘http://13.125.80.236:3000’이하 ‘KiwiBike) 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및\n    피해구제\n    등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n    <br><br>\n    ▶ 개인정보 보호책임자 <br>\n    성명 :장형필<br>\n    직책 :대표이사<br>\n    직급 :대표이사<br>\n    연락처 :01038070607, arc9367@gmail.com, <br>\n    ※ 개인정보 보호 담당부서로 연결됩니다.<br>\n    <br>\n    ▶ 개인정보 보호 담당부서<br>\n    부서명 :KiwiWeb<br>\n    담당자 :김종호<br>\n    연락처 :01047393618, jjong2788@naver.com, <br>\n    ② 정보주체께서는 KiwiBike(‘http://13.125.80.236:3000’이하 ‘KiwiBike) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제\n    등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. KiwiBike(‘http://13.125.80.236:3000’이하 ‘KiwiBike) 은(는) 정보주체의 문의에 대해 지체\n    없이\n    답변 및 처리해드릴 것입니다.\n    <br><br><br><br>\n\n\n    <b>11. 개인정보 처리방침 변경</b><br>\n    <br>\n    ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.<br>\n    <br>\n    <br>\n    <br>\n    <b>12. 개인정보의 안전성 확보 조치 <i>('KiwiBike')</i>은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</b><br>\n    <br>\n    1. 정기적인 자체 감사 실시<br>\n    개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.<br>\n    <br>\n    2. 개인정보 취급 직원의 최소화 및 교육<br>\n    개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.<br>\n    <br>\n    3. 내부관리계획의 수립 및 시행<br>\n    개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.<br>\n    <br>\n    4. 해킹 등에 대비한 기술적 대책<br>\n    <i>&#60;KiwiBike&#62;('KiwiBike')</i>은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터\n    접근이\n    통제된\n    구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.\n    <br><br>\n    5. 개인정보의 암호화<br>\n    이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고\n    있습니다.\n    <br><br>\n    6. 접속기록의 보관 및 위변조 방지<br>\n    개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.\n    <br><br>\n    7. 개인정보에 대한 접근 제한<br>\n    개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고\n    있습니다.\n    <br><br>\n    8. 문서보안을 위한 잠금장치 사용<br>\n    개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.\n    <br><br>\n    9. 비인가자에 대한 출입 통제<br>\n    개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.\n    <br><br>\n  </div>\n\n  <div style=\"text-align: center\">\n    <input type=\"button\" class=\"btn btn-primary\" value=\"동의합니다.\" [routerLink]=\"['/register']\" style=\"margin-right: 30px\">\n    <input type=\"button\" class=\"btn btn-secondary\" value=\"동의하지 않습니다.\" (click)=\"error()\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/provacypolicy/provacypolicy.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/provacypolicy/provacypolicy.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProvacypolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvacypolicyComponent", function() { return ProvacypolicyComponent; });
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




var ProvacypolicyComponent = /** @class */ (function () {
    function ProvacypolicyComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProvacypolicyComponent.prototype.ngOnInit = function () {
    };
    ProvacypolicyComponent.prototype.error = function () {
        this.flashMessage.showFlashMessage({
            messages: ['정책에 동의하셔야 회원가입이 진행됩니다.'],
            type: 'danger',
            timeout: 5000
        });
    };
    ProvacypolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provacypolicy',
            template: __webpack_require__(/*! ./provacypolicy.component.html */ "./src/app/components/provacypolicy/provacypolicy.component.html"),
            styles: [__webpack_require__(/*! ./provacypolicy.component.css */ "./src/app/components/provacypolicy/provacypolicy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], ProvacypolicyComponent);
    return ProvacypolicyComponent;
}());



/***/ }),

/***/ "./src/app/components/qna/qna.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/qna/qna.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: #4f963d;\r\n    color: white;\r\n    text-align: center;\r\n    height: 8%;\r\n    width: 100%;\r\n    display: table;\r\n   }\r\n\r\n   #res {\r\n    width: 50px;\r\n    color: #FFFFFF;\r\n    padding: 0;\r\n  }\r\n\r\n   #bimage {\r\n    display: table;\r\n    width:100%;\r\n    height: 390px;\r\n    background-position: center;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181217_170311281.jpg\");\r\n    background-size: cover;\r\n}\r\n\r\n   #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/components/qna/qna.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/qna/qna.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center ; margin: 0; padding:0;\">\n<div class=\"navbar-nav\" id=\"bimage\">\n    <div id=\"content\">\n    </div>\n</div>\n</div>\n\n<div class=\"container d-flex justify-content-center\" style=\"height:600px; margin-top: 40px\">\n\n    <div class=\"container\">\n        <div id=\"title\">\n                <h5 style=\"display:table-cell; vertical-align: middle;\"> 목록 </h5>\n              </div>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>제목</th>\n                <th>이름</th>\n                <th>#</th>\n            </tr>\n        </thead>\n        <tr *ngFor=\"let list of QnAlist\">\n            <th class=\"tr-group\">\n                <div (click)=\"QnA = list\">{{list.title}}</div>\n            </th>\n            <th class=\"tr-group\">{{list.username}}</th>\n            <th class=\"tr-group\"><input type=\"button\" class=\"btn btn-dark\" value=\"삭제\" (click)=\"deleteQnA(list)\" id=\"res\" *ngIf=\"authService.adminloggedIn() || list.username == user.name\"></th>\n        </tr>\n    </table>\n    <div style=\"text-align: center\">\n    <input type=\"button\" value=\"질문하기\" class=\"btn btn-info\" [routerLink]=\"['/qnawrite']\" style=\"background-color: #4f963d\">\n</div>\n</div>\n\n    <div class=\"col-lg-6\">\n        <div *ngIf=\"QnA\">\n            <h3 style=\"text-align:center\"> {{QnA.title}} </h3>\n            <div class=\"alert alert-success\">\n            <h6><b>질문 내용</b></h6>\n            <p> {{QnA.content}} </p>\n            </div>\n            <div *ngFor=\"let r of reply\">\n                        <div *ngIf=\"QnA.title == r.title\" class=\"alert alert-info\">\n                            <h6><b>답변</b></h6>\n                            <p><span *ngIf=\"r.reply !=' '\"> {{r.reply}} </span></p>\n                        </div>\n            </div>\n            <div *ngIf=\"authService.adminloggedIn()\">\n                <div class=\"form-group\">\n                    <label>답변</label>\n                    <input type=\"textarea\" class=\"form-control\" [(ngModel)]='reply1' name=\"reply1\">\n                </div>\n                <div>\n                    <input type=\"button\" class=\"btn btn-primary\" value=\"답변 쓰기\" (click)=\"onReplySubmit(QnA.title,reply1)\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n</div>"

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
        this.authService.getQnAreply().subscribe(function (QnAreply) {
            _this.reply = QnAreply;
            console.log(_this.reply);
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QnaComponent.prototype.onReplySubmit = function (title, reply) {
        var _this = this;
        var re = {
            title: title,
            reply: reply
        };
        console.log(title);
        console.log(reply);
        this.authService.replyQnA(re).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['Write Success'],
                    type: 'success',
                    timeout: 2000
                });
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['Something went wrong'],
                    type: 'danger',
                    timeout: 3000
                });
            }
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

module.exports = "<div class=\"container d-flex justify-content-center\">\n    <div class=\"col-lg-6\">\n  <h2 class=\"page-header\">QnA</h2>\n  <div *ngIf=\"user || authService.adminloggedIn()\">\n    <form>\n      <div class=\"form-group\">\n        <label>제목</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='title' name=\"title\" placeholder=\" 제목을 입력해주세요\">\n      </div>\n      <div class=\"form-group\">\n        <label>내용</label>\n        <input type=\"textarea\" class=\"form-control\" [(ngModel)]='content' name=\"content\" placeholder=\" 질문 내용을 입력해주세요\" style=\"height: 300px\">\n      </div>\n      <div style=\"text-align: center\">\n        <input type=\"button\" class=\"btn btn-success\" value=\"글 쓰기\" (click)=\"onQnASubmit(user,content,title)\" style=\"margin-right: 40px\">\n        <input type=\"button\" class=\"btn btn-secondary\" value=\"돌아가기\"  [routerLink]='[\"/qna\"]'>\n      </div>\n    </form>\n  </div>\n  </div>\n</div>"

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
            username: user.name
        };
        console.log(user.name);
        console.log(content);
        console.log(title);
        console.log(qna);
        this.authService.writeQnA(qna).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['Write Success'],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/qna']);
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

module.exports = "<div class=\"container d-flex justify-content-center\">\n  <div class=\"col-lg-8\">\n    <h2 class=\"page-header\">회원가입</h2>\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"form-group\">\n        <label>이름</label>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\" Enter Name\">\n      </div>\n      <div class=\"form-group\">\n        <label>이메일</label>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\" Enter E-mail\">\n      </div>\n      <div class=\"form-group\">\n        <label>비밀번호</label>\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\" Enter Password\">\n      </div>\n      <div class=\"form-group\">\n        <label>비밀번호 확인</label>\n        <input type=\"password\" [(ngModel)]=\"pass\" name=\"pass\" class=\"form-control\" placeholder=\" Password Confirm\">\n      </div>\n      <div class=\"form-group\">\n        <label>운전면허 번호</label>\n        <input type=\"text\" [(ngModel)]=\"license_num\" name=\"license_num\" class=\"form-control\" placeholder=\" Enter License Number\">\n      </div>\n      <div class=\"form-group\">\n        <label>운전면허 발급일</label>\n        <input type=\"text\" [(ngModel)]=\"license_issued\" name=\"license_issued\" class=\"form-control\" placeholder=\" YYYYMMDD\">\n      </div>\n      <div class=\"form-group\">\n        <label>운전면허 만료일</label>\n        <input type=\"text\" [(ngModel)]=\"license_expiration\" name=\"license_expiration\" class=\"form-control\" placeholder=\" YYYYMMDD\">\n      </div>\n      <div style=\"text-align:center\">\n        <input type=\"submit\" class=\"btn btn-success\" value=\"작성 완료\">\n      </div>\n    </form>\n  </div>\n</div>"

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
            this.flashMessage.showFlashMessage({ messages: ['모든 사항을 작성해주세요.'], type: 'danger', timeout: 2000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.showFlashMessage({ messages: ['이메일 형식이 아닙니다.'], type: 'danger', timeout: 2000 });
            return false;
        }
        if (!this.validateService.validatepassword(user.password, user.pass)) {
            this.flashMessage.showFlashMessage({ messages: ['비밀번호를 확인해주세요.'], type: 'danger', timeout: 2000 });
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['회원가입이 완료 되었습니다.'],
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

module.exports = "#bimage {\r\n    display: table;\r\n    width: 100%;\r\n    height: 390px;\r\n    background-image: url(\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/KakaoTalk_20181209_222018403.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  \r\n  #content {\r\n    display: table-cell;\r\n    top:50%;\r\n    left:50%;  \r\n    text-align: center; \r\n    vertical-align: middle;                                                           \r\n    font-size:5rem;\r\n    color: white;\r\n    z-index: 2;\r\n  }\r\n  \r\n  #ctitle {\r\n      text-align: center;\r\n      color: green;\r\n  }"

/***/ }),

/***/ "./src/app/components/safety/safety.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/safety/safety.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"navbar-nav\" id=\"bimage\">\n        <div id=\"content\">\n            <h2>사용 방법</h2>\n        </div>\n    </div>\n    <div>\n        <div class=\"text-center\" style=\"background-color:ghostwhite; height: 300px; margin-bottom: 2%; padding-bottom: 0; display: table\">\n            <div style=\"display:table-cell; vertical-align: middle; width: 1920px\">\n                <h3> </h3>\n                <h6 style=\"text-align:center; color:#60da0f;\">Safety</h6>\n                <h2>안전한  <span style=\"color:#60da0f\">키위</span>를 위한 사용 방법</h2>\n                <p class=\"maxwidth700\" style=\"margin-bottom: 0\">보호 장비와 안전한 사용 방법을 익혀 <span style=\"color:#60da0f\">키위</span>를 이용하세요!</p>\n                <p class=\"maxwidth700\"><b>사고를 예방</b>할 수 있습니다.</p>\n            </div>\n        </div>\n\n        <div class=\"container\">\n            <div>\n                <h2 id=\"ctitle\">바이크 사용 방법</h2>\n                <div class=\"row\">\n                    <div class=\"col-md-6\" style=\"text-align: center\">\n                        <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/how-to-2018-1.jpg\" width=\"100%\" alt=\"\">\n                        <h5 style=\"margin:20px\">핼멧을 꼭 착용해주세요</h5>\n                    </div>\n                    <div class=\"col-md-6\" style=\"text-align: center\">\n                        <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/how-to-2018-2.jpg\" width=\"100%\" alt=\"\">\n                        <h5 style=\"margin:20px\"> 지정된 장소에 보관해주세요</h5>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\" style=\"text-align: center\">\n                        <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/how-to-2018-3.jpg\" width=\"100%\" alt=\"\">\n                        <h5 style=\"margin:20px\">주행 전 킥보드 상태를 확인해주세요</h5>\n                    </div>\n                    <div class=\"col-md-6\" style=\"text-align: center\">\n                        <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/how-to-2018-4.jpg\" width=\"100%\" alt=\"\">\n                        <h5 style=\"margin:20px\">양쪽 손잡이를 당기면 제동입니다</h5>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\" style=\"text-align: center\">\n                        <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/how-to-2018-5.jpg\" width=\"100%\" alt=\"\">\n                        <h5 style=\"margin:20px\">도로에 장애물을 주의하세요</h5>\n                    </div>\n                    <div class=\"col-md-6\" style=\"text-align: center\">\n                        <img src=\"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/how-to-2018-6.jpg\" width=\"100%\" alt=\"\">\n                        <h5 style=\"margin:20px\">교통 법규를 준수하세요</h5>\n                    </div>\n                </div>\n\n            </div>\n            <div style=\"margin-top:40px\">\n                <div>\n                    <div>\n                        <h2 id=\"ctitle\">손을 이용한 신호</h2>\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <img src=\"https://www.li.me/hubfs/Assets/hand-signals-2018-1.jpg?t=1542902725056\" width=\"100%\"\n                                    alt=\"\">\n                            </div>\n                            <div class=\"col-md-4\">\n                                <img src=\"https://www.li.me/hubfs/Assets/hand-signals-2018-2.jpg?t=1542902725056\" width=\"100%\"\n                                    alt=\"\">\n                            </div>\n                            <div class=\"col-md-4\">\n                                <img src=\"https://www.li.me/hubfs/Assets/hand-signals-2018-3.jpg?t=1542902725056\" width=\"100%\"\n                                    alt=\"\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>"

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
        this.visible = false;
    }
    AuthService.prototype.hide = function () { this.visible = false; };
    AuthService.prototype.show = function () { this.visible = true; };
    AuthService.prototype.toggle = function () { this.visible = !this.visible; };
    AuthService.prototype.doSomethingElseUseful = function () { };
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
    AuthService.prototype.getGPS = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/users/gpsinfor', { headers: headers })
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
    AuthService.prototype.getQnAreply = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://13.125.80.236:3000/users/reply', { headers: headers })
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
    AuthService.prototype.cancelBike = function (bike) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(bike);
        return this.http.post('http://13.125.80.236:3000/users/cancel', bike, { headers: headers })
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
    AuthService.prototype.replyQnA = function (reply) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log(reply);
        return this.http.post('http://13.125.80.236:3000/users/addreply', reply, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
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