(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/H/M":
/*!*************************************************!*\
  !*** ./src/@core/ngrx/reducers/gkhn.reducer.ts ***!
  \*************************************************/
/*! exports provided: gkhnReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gkhnReducer", function() { return gkhnReducer; });
/* harmony import */ var _actions_gkhn_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/gkhn.actions */ "RXCa");

const initialState = [
    {
        name: 'Gökhan',
        surname: 'Öztürk',
        gender: 'Male'
    },
    {
        name: 'gunes',
        surname: 'Öztürk',
        gender: 'Male'
    }
];
function gkhnReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_gkhn_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_GKHN"]:
            return [...state, action.payload];
        case _actions_gkhn_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LIST_GKHN"]:
            return [...state, ...action.payload];
        case _actions_gkhn_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_GKHN"]:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cesur\Desktop\altyapiuser\src\main.ts */"zUnb");


/***/ }),

/***/ "2oeM":
/*!*********************************************************!*\
  !*** ./src/app/services/_base_services/main.service.ts ***!
  \*********************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "S7rW");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/throw */ "Drjo");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _error_Handle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-Handle.service */ "QkuW");






class MainService {
    constructor(http, errorHandleService) {
        this.http = http;
        this.errorHandleService = errorHandleService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
        this.authToken = sessionStorage.getItem('digiUserAuth');
    }
    Get(url) {
        return this.http.get(this.baseUrl + url, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    GetFREE(url) {
        return this.http.get(url, { headers: { 'Access-Control-Allow-Origin': `*` } })
            .catch(this.errorHandleService.HandleError);
    }
    GetID(url, id) {
        return this.http.get(this.baseUrl + url + '/' + id, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    Create(url, obj, res) {
        return this.http.post(this.baseUrl + url, obj, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    CreateUser(url, obj, res) {
        return this.http.post(this.baseUrl + url, obj, { headers: { 'Control': `UserRegister` } })
            .catch(this.errorHandleService.HandleError);
    }
    CreateFree(url, obj, res) {
        return this.http.post(url, obj, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    Post(url, obj) {
        return this.http.post(this.baseUrl + url, obj, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    Update(url, obj) {
        return this.http.put(this.baseUrl + url, obj, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    Patch(url, id, obj) {
        return this.http.patch(this.baseUrl + url + '/' + id, obj, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    PatchStr(url, id, str) {
        return this.http.patch(this.baseUrl + url + '/' + id + '/' + str, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    PatchFotoLink(url, id, obj) {
        return this.http.patch(this.baseUrl + url + '/' + id, obj, { headers: { 'Authorization': `Bearer ${this.authToken}` } })
            .catch(this.errorHandleService.HandleError);
    }
    Remove(url, id) {
        return this.http.delete(this.baseUrl + url + '/' + id, { headers: { 'Authorization': `Bearer ${this.authToken}` } });
    }
    RemoveObj(url, obj) {
        return this.http.request('delete', this.baseUrl + url, {
            body: obj,
            headers: { 'Authorization': `Bearer ${this.authToken}`,
            }
        });
    }
    RemoveUrl(url) {
        return this.http.delete(this.baseUrl + url, { headers: { 'Authorization': `Bearer ${this.authToken}` } });
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_error_Handle_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandleService"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac });


/***/ }),

/***/ "3ih5":
/*!*******************************************************!*\
  !*** ./src/app/services/_base_services/auth.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-roles.service */ "oT5U");






class AuthGuard {
    constructor(user, router, userRolesService) {
        this.user = user;
        this.router = router;
        this.userRolesService = userRolesService;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // 1 token varmı kontrol et
            if (!this.user.isLoggedIn()) {
                this.router.navigate(['/giris']);
                return false;
            }
            // token doğrula 
            const checkToken = yield this.verifyToken();
            if (checkToken) {
                return true;
            }
            return true;
        });
    }
    verifyToken() {
        return new Promise((resolve) => {
            const myRawToken = localStorage.getItem('token');
            const jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
            const decodedToken = jwtHelper.decodeToken(myRawToken);
            const isRolesArray = Array.isArray(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
            //   console.log('isRoleArray ÖNEMLİ', isRolesArray)
            let roles = []; // role guard servis rolleri dizi istiyor
            if (!isRolesArray) {
                roles.push(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
            }
            if (isRolesArray) {
                roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            }
            const isExpired = jwtHelper.isTokenExpired(myRawToken);
            const verify = roles.some(x => x == 'personel');
            if (!verify) {
                //  alert(roles)
            }
            if (!verify || isExpired) {
                this.clearStorage();
                resolve(false);
            }
            this.userRolesService.setRoles(roles); // user servise rolleri yukle
            resolve(verify);
        });
    }
    clearStorage() {
        localStorage.clear();
        this.router.navigate(['/giris']);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_roles_service__WEBPACK_IMPORTED_MODULE_5__["UserRolesService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "4WDQ":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _base_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_base_services/main.service */ "2oeM");
/* harmony import */ var _core_ngrx_actions_country_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../@core/ngrx/actions/country.actions */ "UKB+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_services_error_Handle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_base_services/error-Handle.service */ "QkuW");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");








class GlobalService extends _base_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] {
    constructor(http, errorHandleService, notification, store) {
        super(http, errorHandleService);
        this.notification = notification;
        this.store = store;
    }
    // state management 
    clearStorage() {
        localStorage.removeItem('auth');
    }
    formValidationMessage(invalidItems) {
        let fControls = invalidItems;
        for (const key in fControls) {
            if (Object.prototype.hasOwnProperty.call(fControls, key)) {
                const element = fControls[key];
                if (element.status == 'INVALID') {
                    this.notification.create('error', `${key} boş bırakılamaz`, null, { nzKey: `${key}` });
                }
            }
        }
    }
    createNotification(type, title, content) {
        this.notification.create(type, title, content);
    }
    // todo Countries
    getCountries() {
        return new Promise((resolve) => {
            this.Get('/countries').subscribe((resp) => {
                //   console.log('resp' , resp)
                resolve(resp.data);
            });
        });
    }
    getCountriesState() {
        // state kontrol et => dizi boşsa get at listeyi doldur
        // todo store kontrol
        this.store.select('country').subscribe((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (resp.length == 0) {
                const countriesList = yield this.getCountries();
                this.store.dispatch(new _core_ngrx_actions_country_actions__WEBPACK_IMPORTED_MODULE_2__["AddListCountry"](countriesList));
                //   console.log('resp???' , resp)
            }
        }));
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_base_services_error_Handle_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac });


/***/ }),

/***/ "6nT+":
/*!*****************************************************!*\
  !*** ./src/@core/ngrx/actions/workorder.actions.ts ***!
  \*****************************************************/
/*! exports provided: ADD_WORKORDER, CLEAR_WORKORDER, AddWorkOrder, ClearWorkOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_WORKORDER", function() { return ADD_WORKORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_WORKORDER", function() { return CLEAR_WORKORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkOrder", function() { return AddWorkOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearWorkOrder", function() { return ClearWorkOrder; });
const ADD_WORKORDER = '[WORKORDER] Ekle';
const CLEAR_WORKORDER = '[WORKORDER] Store Temizle';
class AddWorkOrder {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_WORKORDER;
    }
}
class ClearWorkOrder {
    constructor() {
        this.type = CLEAR_WORKORDER;
    }
}


/***/ }),

/***/ "7PhR":
/*!******************************************************!*\
  !*** ./src/@core/ngrx/reducers/workorder.reducer.ts ***!
  \******************************************************/
/*! exports provided: workOrderReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workOrderReducer", function() { return workOrderReducer; });
/* harmony import */ var _actions_workorder_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/workorder.actions */ "6nT+");

function workOrderReducer(state = [], action) {
    switch (action.type) {
        case _actions_workorder_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_WORKORDER"]:
            state = [];
            return [...state, action.payload];
        case _actions_workorder_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_WORKORDER"]:
            /*       state = [];
                  return [...state, action.payload]; */
            // state = [];
            return [state = []];
        default:
            return state;
    }
}


/***/ }),

/***/ "8M/T":
/*!******************************************!*\
  !*** ./src/app/_default_layout/index.ts ***!
  \******************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "kJp2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    //  apiURL: 'https://api.projeadi.com/api',
    //apiURL: 'https://localhost:5001/api',
    apiURL: 'https://api.aydemir.ndepo.com/api',
    firebase: {
        apiKey: "AIzaSyBGvWkkhckdjuStYljtM6UeyKe_TPoi7Vw",
        authDomain: "aydemir-altyapi.firebaseapp.com",
        projectId: "aydemir-altyapi",
        storageBucket: "aydemir-altyapi.appspot.com",
        messagingSenderId: "1024051983668",
        appId: "1:1024051983668:web:035e7be5b548d28de8e161",
        measurementId: "G-YTV9JDXJM1"
    }
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

/***/ "E3bR":
/*!********************************************************************!*\
  !*** ./src/app/services/_base_services/app-global-errorHandler.ts ***!
  \********************************************************************/
/*! exports provided: AppGlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGlobalErrorHandler", function() { return AppGlobalErrorHandler; });
class AppGlobalErrorHandler {
    handleError(error) {
        console.log(error);
    }
}


/***/ }),

/***/ "EMnJ":
/*!****************************************************!*\
  !*** ./src/@core/ngrx/reducers/country.reducer.ts ***!
  \****************************************************/
/*! exports provided: countryReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countryReducer", function() { return countryReducer; });
/* harmony import */ var _actions_country_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/country.actions */ "UKB+");

const initialState = {
    id: 54,
    name: 'Sakarya'
};
function countryReducer(state = [], action) {
    switch (action.type) {
        case _actions_country_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LIST_COUNTRY"]:
            return [...state, ...action.payload];
        default:
            return state;
    }
}


/***/ }),

/***/ "P9zi":
/*!****************************************************************************!*\
  !*** ./src/app/_default_layout/default-layout/default-layout.component.ts ***!
  \****************************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");








function DefaultLayoutComponent_nz_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DefaultLayoutComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r2);
} }
class DefaultLayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    signOut() {
        localStorage.removeItem("token");
        this.router.navigate(['/giris']);
    }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DefaultLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["app-layout"]], decls: 20, vars: 1, consts: [["id", "top"], [1, "logo"], ["routerLink", "/"], ["width", "125px", "src", "https://www.enago.com.tr/academy/wp-content/uploads/sites/18/2016/04/post-11-750x285.jpg", "alt", ""], [1, "actionBar"], [3, "nzSize"], ["nzDot", "", 4, "nzSpaceItem"], ["class", "topMenuDrop", "nz-dropdown", "", 3, "nzDropdownMenu", 4, "nzSpaceItem"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", ""], ["routerLink", "/ayarlar/profil"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], [3, "click"], ["nz-icon", "", "nzType", "export", "nzTheme", "outline"], ["nzDot", ""], ["nz-icon", "", "nzType", "notification"], ["nz-dropdown", "", 1, "topMenuDrop", 3, "nzDropdownMenu"], ["nzIcon", "user", "nzSrc", "//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"], ["nz-icon", "", "nzType", "down"]], template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-space", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DefaultLayoutComponent_nz_badge_6_Template, 2, 0, "nz-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DefaultLayoutComponent_a_7_Template, 3, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-dropdown-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultLayoutComponent_Template_a_click_16_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00C7\u0131k\u0131\u015F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 16);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_2__["NzSpaceItemDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuItemDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeComponent"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__["NzDropDownDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__["NzAvatarComponent"]], styles: ["nav#top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  background: #ececec;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\nnav#top[_ngcontent-%COMP%]   .topMenuDrop[_ngcontent-%COMP%] {\n  height: 50px;\n  display: block;\n  line-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZWZhdWx0LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVSIiwiZmlsZSI6ImRlZmF1bHQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2I3RvcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIC50b3BNZW51RHJvcHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "QkuW":
/*!*****************************************************************!*\
  !*** ./src/app/services/_base_services/error-Handle.service.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorHandleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandleService", function() { return ErrorHandleService; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "4c1C");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorHandleService {
    constructor() { }
    HandleError(error) {
        if (error.status === 400) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw({ message: 'Hatalı İstek - CODE 400', error });
        }
        if (error.status === 401) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw({ message: 'Yetkiniz Yok - CODE 401', error });
        }
        if (error.status === 404) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw({ message: 'Veri Bulunamadı - CODE 404', error });
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw('Beklenmeyen Bir Hata Oluştu');
    }
}
ErrorHandleService.ɵfac = function ErrorHandleService_Factory(t) { return new (t || ErrorHandleService)(); };
ErrorHandleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ErrorHandleService, factory: ErrorHandleService.ɵfac });


/***/ }),

/***/ "RXCa":
/*!************************************************!*\
  !*** ./src/@core/ngrx/actions/gkhn.actions.ts ***!
  \************************************************/
/*! exports provided: ADD_GKHN, ADD_LIST_GKHN, REMOVE_GKHN, AddGkhn, AddListGkhn, RemoveGkhn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_GKHN", function() { return ADD_GKHN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIST_GKHN", function() { return ADD_LIST_GKHN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_GKHN", function() { return REMOVE_GKHN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGkhn", function() { return AddGkhn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListGkhn", function() { return AddListGkhn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveGkhn", function() { return RemoveGkhn; });
const ADD_GKHN = '[GKHN] Ekle';
const ADD_LIST_GKHN = '[GKHN] Liste Ekle';
const REMOVE_GKHN = '[GKHN] Sil';
class AddGkhn {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_GKHN;
    }
}
class AddListGkhn {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_LIST_GKHN;
    }
}
class RemoveGkhn {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_GKHN;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'altyapiuser';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Tvhx":
/*!***************************************************************!*\
  !*** ./src/app/services/_base_services/role-guard.service.ts ***!
  \***************************************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-roles.service */ "oT5U");


class RoleGuardService {
    constructor(getUserRoles) {
        this.getUserRoles = getUserRoles;
    }
    canActivate(route) {
        return route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai));
    }
}
RoleGuardService.ɵfac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_roles_service__WEBPACK_IMPORTED_MODULE_1__["UserRolesService"])); };
RoleGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleGuardService, factory: RoleGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UKB+":
/*!***************************************************!*\
  !*** ./src/@core/ngrx/actions/country.actions.ts ***!
  \***************************************************/
/*! exports provided: ADD_LIST_COUNTRY, AddListCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIST_COUNTRY", function() { return ADD_LIST_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListCountry", function() { return AddListCountry; });
const ADD_LIST_COUNTRY = '[COUNTRY] Liste Ekle';
class AddListCountry {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_LIST_COUNTRY;
    }
}


/***/ }),

/***/ "Y14S":
/*!************************************************************!*\
  !*** ./src/app/services/_base_services/AuthInterceptor.ts ***!
  \************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/do */ "92bn");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_0__);

// import Swal from 'sweetalert2';
class AuthInterceptor {
    intercept(request, next) {
        let authToken = localStorage.getItem('token');
        let newRequest;
        newRequest = request.clone({
            headers: request.headers.set("Authorization", `Bearer ${authToken}`),
        });
        return next.handle(newRequest)
            .do(success => {
            if (success.type !== 0) {
            }
        }, error => {
            console.error('interceptordan gelen hata', error);
            if (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE') { }
        });
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/global.service */ "4WDQ");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_base_services_app_global_errorHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/_base_services/app-global-errorHandler */ "E3bR");
/* harmony import */ var _services_base_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/_base_services/auth.guard */ "3ih5");
/* harmony import */ var _services_base_services_AuthInterceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/_base_services/AuthInterceptor */ "Y14S");
/* harmony import */ var _services_base_services_error_Handle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/_base_services/error-Handle.service */ "QkuW");
/* harmony import */ var _services_base_services_main_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/_base_services/main.service */ "2oeM");
/* harmony import */ var _services_base_services_role_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/_base_services/role-guard.service */ "Tvhx");
/* harmony import */ var _services_base_services_user_roles_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/_base_services/user-roles.service */ "oT5U");
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_default_layout */ "8M/T");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/locales/tr */ "6/97");
/* harmony import */ var _angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/notification */ "bNXi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_core_ngrx_reducers_gkhn_reducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/@core/ngrx/reducers/gkhn.reducer */ "/H/M");
/* harmony import */ var src_core_ngrx_reducers_workorder_reducer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/@core/ngrx/reducers/workorder.reducer */ "7PhR");
/* harmony import */ var src_core_ngrx_reducers_country_reducer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/@core/ngrx/reducers/country.reducer */ "EMnJ");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/messaging */ "XoYk");









































Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_18___default.a);
const _default_layout = [
    _default_layout__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutComponent"]
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _services_base_services_main_service__WEBPACK_IMPORTED_MODULE_12__["MainService"],
        _services_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _services_base_services_error_Handle_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandleService"],
        _services_base_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
        _services_base_services_user_roles_service__WEBPACK_IMPORTED_MODULE_14__["UserRolesService"],
        _services_base_services_role_guard_service__WEBPACK_IMPORTED_MODULE_13__["RoleGuardService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _services_base_services_AuthInterceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _services_base_services_app_global_errorHandler__WEBPACK_IMPORTED_MODULE_8__["AppGlobalErrorHandler"] },
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__["tr_TR"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__["NzNotificationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_22__["NzAvatarModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__["NzIconModule"],
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_25__["NzBadgeModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].firebase),
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_35__["AngularFireMessagingModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_26__["NzSpaceModule"],
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_33__["SignaturePadModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreModule"].forRoot({
                gkhn: src_core_ngrx_reducers_gkhn_reducer__WEBPACK_IMPORTED_MODULE_28__["gkhnReducer"],
                workOrders: src_core_ngrx_reducers_workorder_reducer__WEBPACK_IMPORTED_MODULE_29__["workOrderReducer"],
                country: src_core_ngrx_reducers_country_reducer__WEBPACK_IMPORTED_MODULE_30__["countryReducer"],
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _default_layout__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_20__["NzNotificationModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_22__["NzAvatarModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__["NzIconModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_25__["NzBadgeModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_35__["AngularFireMessagingModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_26__["NzSpaceModule"],
        angular2_signaturepad__WEBPACK_IMPORTED_MODULE_33__["SignaturePadModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreRootModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "gf0u":
/*!******************************************************!*\
  !*** ./src/app/pages/error404/error404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class Error404Component {
    constructor(http) {
        this.http = http;
        http.get('https://jsonplaceholder.typicode.com/photos').subscribe((resp) => {
            console.log('photos', resp);
        });
    }
    ngOnInit() {
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 2, vars: 0, template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error404 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvcjQwNC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "kJp2":
/*!*********************************************************!*\
  !*** ./src/app/_default_layout/default-layout/index.ts ***!
  \*********************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "P9zi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "oT5U":
/*!***************************************************************!*\
  !*** ./src/app/services/_base_services/user-roles.service.ts ***!
  \***************************************************************/
/*! exports provided: UserRolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRolesService", function() { return UserRolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserRolesService {
    constructor() {
        this.userRoles = [];
    }
    setRoles(Roles) {
        this.userRoles = Roles.slice(0);
    }
    getRoles() {
        return this.userRoles;
    }
}
UserRolesService.ɵfac = function UserRolesService_Factory(t) { return new (t || UserRolesService)(); };
UserRolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRolesService, factory: UserRolesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _base_services_main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base_services/main.service */ "2oeM");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_services_error_Handle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_base_services/error-Handle.service */ "QkuW");





class UserService extends _base_services_main_service__WEBPACK_IMPORTED_MODULE_0__["MainService"] {
    constructor(httpx, errorHandleService) {
        super(httpx, errorHandleService);
        this.httpx = httpx;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('token');
        this.user = this.getUserDetails();
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    getUser() {
        return this.user;
    }
    getUserId() {
        let id = this.user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        return parseInt(id);
    }
    getUserDetails() {
        if (this.isLoggedIn()) {
            const myRawToken = localStorage.getItem('token');
            const jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
            const decodedToken = jwtHelper.decodeToken(myRawToken);
            const isRolesArray = Array.isArray(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
            console.log('- decoded token -', decodedToken);
            return decodedToken;
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_base_services_error_Handle_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandleService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/error404/error404.component */ "gf0u");
/* harmony import */ var _services_base_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/_base_services/auth.guard */ "3ih5");
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_default_layout */ "8M/T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/is-emirleri/liste' },
    { path: '', component: _default_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"], canActivate: [_services_base_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'is-emirleri', loadChildren: () => __webpack_require__.e(/*! import() | pages-work-orders-work-orders-module */ "pages-work-orders-work-orders-module").then(__webpack_require__.bind(null, /*! ./pages/work-orders/work-orders.module */ "Ciwj")).then(m => m.WorkOrdersModule) },
            { path: 'ayarlar', loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "yPrK")).then(m => m.SettingsModule) },
        ],
    },
    { path: 'giris', loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-auth-module */ "pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ./pages/auth/auth.module */ "lBUW")).then(m => m.AuthModule) },
    { path: '**', component: _pages_error404_error404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map