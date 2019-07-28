(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/app/app-component/app.component.ts":
/*!***************************************************!*\
  !*** ./client/app/app-component/app.component.ts ***!
  \***************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"]);
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'Fake Umbrella System';
        this.APIkey = 'd81abeaa7e0d02c1404ce1f3171ef58c';
        this.chartList = [];
    }
    addEvt(info) {
        this.http.post('http://localhost:3000/add', info).subscribe((result) => {
            this.dataList.push(result);
        });
    }
    deleteEvt(item) {
        let id = item["_id"];
        this.http.delete('http://localhost:3000/delete/' + id).subscribe((result) => {
            this.dataList = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["remove"])(this.dataList, function (n) {
                return n["_id"] != result;
            });
        });
    }
    updateEvt(item) {
        this.http.put('http://localhost:3000/update', item).subscribe((result) => {
        });
    }
    displayRain() {
        this.dataList = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["remove"])(this.dataList, function (n) {
            return n["remove"] != true;
        });
    }
    testRain(id) {
        this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&APPID=' + this.APIkey).subscribe(data => {
            let index = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"])(this.dataList, { "cityId": id });
            let item;
            for (item = 0; item < data["list"].length; item++) {
                if (data["list"][item]["weather"][0]["main"] == "Rain") {
                    this.dataList[index]["remove"] = false;
                    this.dataList[index]["rainyTime"] = data["list"][item]["dt_txt"];
                    break;
                }
            }
        });
    }
    ngOnInit() {
        this.http.get('../assets/city.list.json').subscribe(data => {
            this.cityList = data;
            this.http.get('http://localhost:3000/data').subscribe(data => {
                this.dataList = data.map((item) => {
                    item["remove"] = true;
                    let index = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["findIndex"])(this.cityList, { "name": item["location"] });
                    if (index == -1) {
                        item.cityId = null;
                    }
                    else {
                        item.cityId = this.cityList[index]["id"];
                        this.testRain(item["cityId"]);
                    }
                    return item;
                });
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./client/app/app-component/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-component/app.component */ "./client/app/app-component/app.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add/add.component */ "./client/app/components/add/add.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/list/list.component */ "./client/app/components/list/list.component.ts");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chart/chart.component */ "./client/app/components/chart/chart.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
            _components_list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"],
            _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]
        ],
        providers: [],
        bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./client/app/components/add/add.component.ts":
/*!****************************************************!*\
  !*** ./client/app/components/add/add.component.ts ***!
  \****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddComponent = class AddComponent {
    constructor() {
        this.addEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showForm = true;
    }
    toggleAptDisplay() {
        this.showForm = !this.showForm;
    }
    handleAdd(formInfo) {
        const tempItem = {
            name: formInfo.name,
            contact: formInfo.contact,
            location: formInfo.location,
            num: formInfo.num,
            tel: formInfo.tel
        };
        this.addEvt.emit(tempItem);
        this.showForm = !this.showForm;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddComponent.prototype, "addEvt", void 0);
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./client/app/components/add/add.component.html")
    })
], AddComponent);



/***/ }),

/***/ "./client/app/components/chart/chart.component.ts":
/*!********************************************************!*\
  !*** ./client/app/components/chart/chart.component.ts ***!
  \********************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartComponent = class ChartComponent {
    constructor() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.chartColors = [
            {
                backgroundColor: []
            }
        ];
    }
    ngOnInit() {
        this.barChartLabels = [];
        this.barChartData = [
            { data: [], label: 'Number of Employees' }
        ];
        this.chartList.sort((a, b) => {
            if (Number(a["number"]) < Number(b["number"])) {
                return 1;
            }
            if (Number(a["number"]) > Number(b["number"])) {
                return -1;
            }
        });
        // console.log(this.chartList[0]);
        // console.log(this.chartList[0]["remove"]);
        let key;
        for (key in this.chartList[0]) {
            if (this.chartList.hasOwnProperty(key)) {
                console.log(this.chartList[key]);
            }
        }
        for (let i = 0; i < 4 && i < this.chartList.length; i++) {
            this.barChartLabels.push(this.chartList[i]["name"]);
            this.barChartData[0]["data"].push(this.chartList[i]["number"]);
            if (this.chartList[i]["remove"] == true) {
                this.chartColors[0]["backgroundColor"].push("#FF0000");
            }
            else {
                this.chartColors[0]["backgroundColor"].push("#008000");
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartComponent.prototype, "chartList", void 0);
ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chart[]',
        template: __webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/index.js!./client/app/components/chart/chart.component.html")
    })
], ChartComponent);



/***/ }),

/***/ "./client/app/components/list/list.component.ts":
/*!******************************************************!*\
  !*** ./client/app/components/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() {
        this.deleteEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rainEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    deleteItem(theApt) {
        this.deleteEvt.emit(theApt);
    }
    handleUpdate(item, labelName, newValue) {
        item[labelName] = newValue;
        console.log(item);
        this.updateEvt.emit(item);
    }
    displayRainy() {
        this.rainEvt.emit();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListComponent.prototype, "dataList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListComponent.prototype, "deleteEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListComponent.prototype, "updateEvt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListComponent.prototype, "rainEvt", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./client/app/components/list/list.component.html")
    })
], ListComponent);



/***/ }),

/***/ "./client/environments/environment.ts":
/*!********************************************!*\
  !*** ./client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./client/app/app-component/app.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./client/app/app-component/app.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"bg-white\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 bg-white\">\n  \n          <div class=\"container\">\n            <h2 class=\"py-5 text-primary ml-5\">{{title}}</h2>\n            <app-add\n            (addEvt)=\"addEvt($event)\"></app-add>\n            <app-list\n            [dataList]=\"dataList\"\n            (deleteEvt)=\"deleteEvt($event)\"\n            (updateEvt)=\"updateEvt($event)\"\n            (rainEvt)=\"displayRain()\"></app-list>\n            <div *ngIf=\"dataList\">\n              <app-chart\n              [chartList]=\"dataList\"></app-chart>\n            </div>\n          </div>\n        </div><!-- col-md-12 -->\n      </div><!-- row -->\n    </div><!-- container -->\n  </main><!-- main -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./client/app/components/add/add.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./client/app/components/add/add.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card textcenter mt-3\" [ngClass]=\"{'add-appointment': showForm}\">\n\n    <div class=\"apt-addheading card-header bg-primary text-white\"\n    (click)=\"toggleAptDisplay()\">\n       <fa-icon icon=\"plus\"></fa-icon> Add Customer\n    </div><!-- card-header -->\n    <div class=\"card-body\">\n      <form id=\"aptForm\" novalidate (ngSubmit)=\"handleAdd(aptForm.value);aptForm.reset()\"\n        #aptForm=\"ngForm\">\n        <div class=\"form-group form-row\">\n          <label class=\"col-md-2 col-form-label text-md-right\" for=\"Name\">Name</label>\n          <div class=\"col-md-10\">\n            <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\" ngModel>\n          </div><!-- col-md-10 --> \n        </div><!-- form-group --> \n        <div class=\"form-group form-row\">\n          <label class=\"col-md-2 col-form-label text-md-right\"\n            for=\"contact\">Contact</label>\n          <div class=\"col-md-10\">\n            <input type=\"text\" class=\"form-control\" name=\"contact\" id=\"contact\"\n              placeholder=\"Contact\" ngModel>\n          </div><!-- col-md-10 -->\n        </div><!-- form-group --> \n\n        <div class=\"form-group form-row\">\n            <label class=\"col-md-2 col-form-label text-md-right\"\n              for=\"tel\">Telephone</label>\n            <div class=\"col-md-10\">\n              <input type=\"text\" class=\"form-control\" name=\"tel\" id=\"tel\"\n                placeholder=\"Telephone\" ngModel>\n            </div><!-- col-md-10 -->\n          </div><!-- form-group -->\n\n  \n          <div class=\"form-group form-row\">\n            <label class=\"col-md-2 col-form-label text-md-right\"\n              for=\"num\">Number</label>\n            <div class=\"col-md-10\">\n              <input type=\"text\" class=\"form-control\" name=\"num\" id=\"num\"\n                placeholder=\"Number of Employees\" ngModel>\n            </div><!-- col-md-10 -->\n          </div><!-- form-group -->\n\n          <div class=\"form-group form-row\">\n            <label class=\"col-md-2 col-form-label text-md-right\"\n              for=\"location\">Location</label>\n            <div class=\"col-md-10\">\n              <input type=\"text\" class=\"form-control\" name=\"location\" id=\"location\"\n                placeholder=\"Location\" ngModel>\n            </div><!-- col-md-10 -->\n          </div><!-- form-group -->\n  \n        <div class=\"form-group form-row mb-0\">\n          <div class=\"offset-md-2 col-md-10\">\n            <button type=\"submit\" class=\"btn btn-primary d-block ml-auto\"\n            >Add Appointment</button>\n          </div><!-- col-md-offset-2 --> \n        </div><!-- form-group -->\n  \n      </form>\n    </div><!-- card-body -->\n  </div><!-- card-primary -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./client/app/components/chart/chart.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./client/app/components/chart/chart.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n        <div style=\"display: block\">\n          <canvas baseChart\n                  [datasets]=\"barChartData\"\n                  [labels]=\"barChartLabels\"\n                  [options]=\"barChartOptions\"\n                  [legend]=\"barChartLegend\"\n                  [chartType]=\"barChartType\"\n                  [colors]=\"chartColors\">\n          </canvas>\n        </div>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./client/app/components/list/list.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./client/app/components/list/list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appointment-list item-list mb-3\">\n  <button class=\"btn btn-danger\" (click)=\"displayRainy()\">Display Rainy City</button>\n    <div class=\"pet-item col media py-3 border\"\n      *ngFor=\"let item of dataList\">\n      <div class=\"mr-3\" (click)=\"deleteItem(item)\">\n        <button class=\"pet-delete btn btn-sm btn-danger\">\n            <fa-icon icon=\"times\"></fa-icon>\n        </button>\n      </div><!-- media-left -->\n  \n      <div class=\"pet-info media-body\">\n        <div class=\"pet-head d-flex\">\n          <span class=\"label-item\">Name: </span>\n          <span class=\"pet-name\" contenteditable=\"true\" \n          #name (blur)=\"handleUpdate(item, 'name', name.innerText)\">{{item.name}}</span>\n        </div><!-- pet-head -->\n        <div class=\"owner-name\">\n          <span class=\"label-item\">Contact: </span>\n          <span contenteditable=\"true\"\n          #contact (blur)=\"handleUpdate(item, 'contact', contact.innerText)\">{{item.contact}}</span>\n        </div>\n        <div class=\"owner-name\">\n            <span class=\"label-item\">Location: </span>\n            <span contenteditable=\"true\"\n            #location (blur)=\"handleUpdate(item, 'location', location.innerText)\">{{item.location}}</span>\n        </div>\n        <div class=\"owner-name\">\n            <span class=\"label-item\">Tel: </span>\n            <span contenteditable=\"true\"\n            #telephone (blur)=\"handleUpdate(item, 'telephone', telephone.innerText)\">{{item.telephone}}</span>\n        </div>\n\n        <div class=\"owner-name\">\n            <span class=\"label-item\">Num: </span>\n            <span contenteditable=\"true\"\n            #number (blur)=\"handleUpdate(item, 'number', number.innerText)\">{{item.number}}</span>\n        </div>\n\n        <div class=\"owner-name\">\n            <span class=\"label-item\">Rain Time: </span>\n            <span contenteditable=\"true\"\n            #number (blur)=\"handleUpdate(item, 'number', number.innerText)\">{{item.rainyTime}}</span>\n        </div>\n\n        \n      </div><!-- pet-info -->\n    </div><!-- pet-item -->\n  </div><!-- appointment-list -->"

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/victor/Documents/Learning/FakeU/client/main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map