(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./stepper/stepper.module": [
		"./src/app/stepper/stepper.module.ts",
		"stepper-stepper-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/core-components/list/list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/core-components/list/list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/core-components/table/table.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/core-components/table/table.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>table works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-writble-form/list-writble-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-writble-form/list-writble-form.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" id=\"main-row\">\n    <div class=\"row form1\">\n        <div class=\"col-lg-12\">\n            <div [formGroup]=\"dynamicGroup\">\n                <ng-container>\n                    <ng-container formArrayName='dynamicFormArray'>\n                        <ng-container\n                            *ngFor=\"let details of dynamicGroup.controls.dynamicFormArray?.controls; let i=index;\">\n                            <div formGroupName=\"{{i}}\">\n                                <div class=\"row\">\n                                    <p>{{i + 1}}. {{ data[i].text }}</p>\n                                </div>\n                                <div >\n                                    <label *ngFor=\"let order of data[i].options; let j=index\">\n                                        <input type=\"radio\" formControlName=\"value\" [value]=\"order\" />\n                                        {{order}}\n                                    </label>\n                                </div>\n                                <!-- <div>\n                                    <label *ngFor=\"let order of data[i].options; let j=index\">\n                                        <input [appCustomeType]=\"data[i].select\" formControlName=\"value\" [value]=\"order\" />\n                                        {{order}}\n                                    </label>\n                                </div> -->\n                                <!-- <div *ngIf=\"data[i].select === 'checkbox'\">\n                                    <label *ngFor=\"let order of data[i].options; let j=index\">\n                                    <input type=\"checkbox\" formControlName=\"value\" />\n                                    {{order}}\n                                  </label>\n                                </div> -->\n                                <div class=\"row\">\n                                    <input type=\"text\" rows=\"2\" formControlName=\"remarks\" class=\"form-control\"\n                                        placeholder=\"Remarks\" style=\"display: inline-flex;\">\n                                </div>\n\n                            </div>\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </div>\n            <div>\n                <button (click)=\"save()\" ></button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/merge-rows-design/merge-rows-design.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merge-rows-design/merge-rows-design.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n\n<div class=\"container-fluid\">\n    <div id=\"divComments\" class=\"col-12 table-responsive\"\n        style=\"padding: inherit;min-height: 200px;max-height: 500px;overflow: auto;\">\n        <table class=\"table\">\n            <thead class=\"tableHeader tableHeaderText\">\n                <td style=\"text-align: left;width:30%\">\n                    Organization\n                </td>\n                <td style=\"text-align: left;width:30%\">\n                    Resource\n                </td>\n                <td style=\"text-align: left;width:30%\">\n                    Project\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Type\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week1\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week2\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week3\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week4\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week5\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week6\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week7\n                </td>\n                <td style=\"text-align: left;width:40%\">\n                    Week8\n                </td>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of dataExt\">\n                    <td [attr.rowspan]=\"item.stateSpan\" *ngIf=\"item.stateSpan\">{{ item.org }}</td>\n                     <td [attr.rowspan]=\"item.countySpan\" *ngIf=\"item.countySpan\">{{ item.resource }}</td>\n                     <td>{{ item.project }}</td>\n                    <td>{{ item.type }}</td>\n                    <td>{{ item.Week1 }}</td>\n                    <td>{{ item.Week2 }}</td>\n                    <td>{{ item.Week3 }}</td>\n                    <td>{{ item.Week4 }}</td>\n                    <td>{{ item.Week5 }}</td>\n                    <td>{{ item.Week6 }}</td>\n                    <td>{{ item.Week7 }}</td>\n                    <td>{{ item.Week7 }}</td>\n                </tr>\n                <tr *ngIf=\"dataExt && dataExt.length==0\">\n                    <td align=\"center\" colspan=\"3\">No Records Found</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div> -->\n\n\n\n\n\n\n\n\n\n<div class=\"container-fluid\">\n    <div id=\"divComments\" class=\"col-12 table-responsive\"\n        style=\"padding: inherit;min-height: 200px;max-height: 500px;overflow: auto;\">\n        <table class=\"table\">\n            <thead class=\"tableHeader tableHeaderText\">\n                <td style=\"text-align: left;width:20%\">\n                    Resource Name\n                </td>\n                <td style=\"text-align: left;width:20%\">\n                    Department\n                </td>\n                <td style=\"text-align: left;width:10%\">\n                    Billable\n                </td>\n                <td style=\"text-align: left;width:10%\">\n                    Non-Billable\n                </td>\n                <td style=\"text-align: left;width:10%\">\n                    Internal\n                </td>\n                <td style=\"text-align: left;width:10%\">\n                    PTO\n                </td>\n                <td style=\"text-align: left;width:10%\">\n                    Holiday\n                </td>\n                <td style=\"text-align: left;width:10%\">\n                    Special Leaves\n                </td>\n            </thead>\n            <tbody>\n                <ng-container *ngFor=\"let item of dataExt; let idx=index\">\n                    <tr>\n                        <td style=\"text-align: left\">\n                            <span\n                                                                class=\"collapsed link\" data-toggle=\"collapse\"\n                                                                attr.data-target=\"#outstandingLoansTab1{{idx}}\"\n                                                                aria-expanded=\"true\"></span>\n                                                                {{ item.resource }}\n                        </td>\n                         <td style=\"text-align: left\">{{ item.org }}</td>\n                         <td style=\"text-align: left\">{{ item.billableTypeValue }}</td>\n                        <td style=\"text-align: left\">{{ item.nonbillableTypeValue }}</td>\n                        <td style=\"text-align: left\">{{ item.internalvalue }}</td>\n                        <td style=\"text-align: left\">{{ item.ptoValue }}</td>\n                        <td style=\"text-align: left\">{{ item.holidayValue }}</td>\n                        <td style=\"text-align: left\">{{ item.specialValue }}</td>\n                    </tr>\n    \n                    <tr  class=\"collapse \"\n                    id=\"outstandingLoansTab1{{idx}}\" colspan=\"10\">\n                    <td colspan=\"10\">\n                        <div class=\"table-responsive rounded mb-0\">\n                            <table class=\"table table-hover\">\n                                <thead class=\"tableHeader tableHeaderText\">\n                                    <tr>\n                                        <!-- <th width=\"13%\" scope=\"col\">Loan Number </th> -->\n                                        <th width=\"15%\" style=\"text-align: left\" scope=\"col\">Project</th>\n                                        <th width=\"15%\" style=\"text-align: left\" scope=\"col\">\n                                            Type\n                                        </th>\n                                        <th scope=\"col\" style=\"text-align: left\">\n                                            Week1\n                                        </th>\n                                        <th scope=\"col\" style=\"text-align: left\">\n                                            Week2\n                                        </th>\n                                        <th scope=\"col\" style=\"text-align: left\">\n                                            Week3\n                                        </th>\n                                        <th scope=\"col\" style=\"text-align: left\">Week4</th>\n                                        <th scope=\"col\" style=\"text-align: left\">Week5</th>\n                                        <th scope=\"col\" style=\"text-align: left\">Week6</th>\n                                        <th scope=\"col\" style=\"text-align: left\">Week7</th>\n                                        <th scope=\"col\" style=\"text-align: left\">Week8</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container \n                                    *ngFor=\"let projectInfo of item.project; let idy=index\">\n                                        <tr *ngIf=\"projectInfo.type === 'Billable' || projectInfo.type === 'Internal'  || projectInfo.type === 'Non-Billable'\">\n                                      <td style=\"text-align: left\">\n                                          {{ projectInfo.name }}\n                                      </td>\n                                      <td style=\"text-align: left\">\n                                        {{ projectInfo.type }}\n                                    </td>\n\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week1 }}\n                                    </td>\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week2 }}\n                                    </td>\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week3 }}\n                                    </td>\n\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week4}}\n                                    </td>\n\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week5 }}\n                                    </td>\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week6 }}\n                                    </td>\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week7 }}\n                                    </td>\n                                    <td style=\"text-align: left\">\n                                        {{ projectInfo.Week8 }}\n                                    </td>\n                                    </tr>\n                                    </ng-container>\n                                </tbody>\n                            </table>\n                        </div>\n                    </td>\n                </tr>\n                </ng-container>\n                \n                <tr *ngIf=\"dataExt && dataExt.length==0\">\n                    <td align=\"center\" colspan=\"3\">No Records Found</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _merge_rows_design_merge_rows_design_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merge-rows-design/merge-rows-design.component */ "./src/app/merge-rows-design/merge-rows-design.component.ts");
/* harmony import */ var _list_writble_form_list_writble_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-writble-form/list-writble-form.component */ "./src/app/list-writble-form/list-writble-form.component.ts");





const routes = [
    {
        path: '',
        component: _list_writble_form_list_writble_form_component__WEBPACK_IMPORTED_MODULE_4__["ListWritbleFormComponent"]
    },
    {
        path: 'list',
        component: _merge_rows_design_merge_rows_design_component__WEBPACK_IMPORTED_MODULE_3__["MergeRowsDesignComponent"]
    },
    {
        path: 'listWritable',
        component: _list_writble_form_list_writble_form_component__WEBPACK_IMPORTED_MODULE_4__["ListWritbleFormComponent"]
    },
    {
        path: 'stepper',
        loadChildren: './stepper/stepper.module#StepperModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'list-frameworks';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _merge_rows_design_merge_rows_design_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge-rows-design/merge-rows-design.component */ "./src/app/merge-rows-design/merge-rows-design.component.ts");
/* harmony import */ var _list_writble_form_list_writble_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-writble-form/list-writble-form.component */ "./src/app/list-writble-form/list-writble-form.component.ts");
/* harmony import */ var _directives_custome_type_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/custome-type.directive */ "./src/app/directives/custome-type.directive.ts");
/* harmony import */ var _core_core_components_core_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core-components/core-components.module */ "./src/app/core/core-components/core-components.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _merge_rows_design_merge_rows_design_component__WEBPACK_IMPORTED_MODULE_7__["MergeRowsDesignComponent"],
            _list_writble_form_list_writble_form_component__WEBPACK_IMPORTED_MODULE_8__["ListWritbleFormComponent"],
            _directives_custome_type_directive__WEBPACK_IMPORTED_MODULE_9__["CustomeTypeDirective"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _core_core_components_core_components_module__WEBPACK_IMPORTED_MODULE_10__["CoreComponentsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core-components/core-components.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/core-components/core-components.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponentsModule", function() { return CoreComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "./src/app/core/core-components/table/table.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/core/core-components/list/list.component.ts");





let CoreComponentsModule = class CoreComponentsModule {
};
CoreComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        entryComponents: [
            _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
        ]
    })
], CoreComponentsModule);



/***/ }),

/***/ "./src/app/core/core-components/list/list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/core/core-components/list/list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29yZS1jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/core-components/list/list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/core-components/list/list.component.ts ***!
  \*************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/core-components/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/core/core-components/list/list.component.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/core/core-components/table/table.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/core-components/table/table.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29yZS1jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/core-components/table/table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/core-components/table/table.component.ts ***!
  \***************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableComponent = class TableComponent {
    constructor() { }
    ngOnInit() {
    }
};
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/core-components/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/core/core-components/table/table.component.css")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/directives/custome-type.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/custome-type.directive.ts ***!
  \******************************************************/
/*! exports provided: CustomeTypeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeTypeDirective", function() { return CustomeTypeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomeTypeDirective = class CustomeTypeDirective {
    constructor(el) {
        this.el = el;
    }
    set setInputData(value) {
        this.typeInput = value;
        this.addTypeParameter();
    }
    addTypeParameter() {
        if (this.typeInput === 'checkbox') {
            this.el.nativeElement.setAttribute('type', 'checkbox');
        }
        else if (this.typeInput === 'radio') {
            this.el.nativeElement.setAttribute('type', 'radio');
        }
    }
};
CustomeTypeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appCustomeType')
], CustomeTypeDirective.prototype, "setInputData", null);
CustomeTypeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCustomeType]'
    })
], CustomeTypeDirective);



/***/ }),

/***/ "./src/app/list-writble-form/list-writble-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/list-writble-form/list-writble-form.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtd3JpdGJsZS1mb3JtL2xpc3Qtd3JpdGJsZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/list-writble-form/list-writble-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/list-writble-form/list-writble-form.component.ts ***!
  \******************************************************************/
/*! exports provided: ListWritbleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWritbleFormComponent", function() { return ListWritbleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ListWritbleFormComponent = class ListWritbleFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.selectedData = [];
    }
    ngOnInit() {
        this.dynamicGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dynamicFormArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.data = [
            {
                seq: 1,
                id: 1,
                text: 'what ur ??',
                options: [
                    'yes', 'no', 'n/a'
                ],
                select: 'radio',
                selectedValues: {
                    value: 'yes',
                    remarks: 'asdfasfd'
                }
            },
            {
                seq: 2,
                id: 2,
                required: true,
                text: 'what am i ??',
                options: [
                    'yes', 'no', 'n/a'
                ],
                select: 'checkbox',
                selectedValues: {
                    value: 'yes',
                    remarks: 'asdfasfd'
                }
            },
            {
                seq: 3,
                id: 3,
                text: 'who r u ??',
                options: [
                    'yes', 'no', 'n/a'
                ],
                select: 'radio',
                selectedValues: {
                    value: 'n/a',
                    remarks: 'checkasfd'
                }
            },
            {
                seq: 4,
                id: 4,
                text: 'who r u ??',
                options: [
                    'yes', 'no', 'n/a'
                ],
                select: 'radio',
            }
        ];
        this.createDynamicFormGroup();
        this.setValues();
    }
    getFormArray() {
        return (this.dynamicGroup.get('dynamicFormArray'));
    }
    createDynamicFormGroup() {
        const list = (this.dynamicGroup.get('dynamicFormArray'));
        this.data.forEach(element => {
            const group = this.getFormGroup(element.id);
            list.controls.push(group);
        });
    }
    setValues() {
        const control = this.dynamicGroup.get('dynamicFormArray');
        control.controls = [];
        this.data.forEach(details => control.controls.push(this.mapFormArray(details)));
    }
    mapFormArray(data) {
        if (data.selectedValues) {
            return this.getFormGroup(data.id, data.selectedValues.value, data.selectedValues.remarks);
        }
        else {
            return this.getFormGroup(data.id);
        }
    }
    getFormGroup(id, value = '', remark = '') {
        const group = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](remark)
        });
        return group;
    }
    save() {
        console.log(this.dynamicGroup);
        console.log(this.dynamicGroup.value);
        console.log(this.getFormArray().getRawValue());
    }
};
ListWritbleFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ListWritbleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-writble-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-writble-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-writble-form/list-writble-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-writble-form.component.css */ "./src/app/list-writble-form/list-writble-form.component.css")).default]
    })
], ListWritbleFormComponent);



/***/ }),

/***/ "./src/app/merge-rows-design/merge-rows-design.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/merge-rows-design/merge-rows-design.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table tbody tr .link {\n    padding-left: 24px;\n    background: url(/assets/images/icon-down-arrow.png) no-repeat 10px center\n}\n\n.table tbody tr .link.collapsed {\n    background: url(/assets/images/icon-right-arrow.png) no-repeat 10px center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyZ2Utcm93cy1kZXNpZ24vbWVyZ2Utcm93cy1kZXNpZ24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lcmdlLXJvd3MtZGVzaWduL21lcmdlLXJvd3MtZGVzaWduLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGJvZHkgdHIgLmxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbi1kb3duLWFycm93LnBuZykgbm8tcmVwZWF0IDEwcHggY2VudGVyXG59XG5cbi50YWJsZSB0Ym9keSB0ciAubGluay5jb2xsYXBzZWQge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29uLXJpZ2h0LWFycm93LnBuZykgbm8tcmVwZWF0IDEwcHggY2VudGVyXG59Il19 */");

/***/ }),

/***/ "./src/app/merge-rows-design/merge-rows-design.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/merge-rows-design/merge-rows-design.component.ts ***!
  \******************************************************************/
/*! exports provided: MergeRowsDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeRowsDesignComponent", function() { return MergeRowsDesignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MergeRowsDesignComponent = class MergeRowsDesignComponent {
    constructor() {
        this.data = [];
        this.dataExt = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        // this.service.getMock().subscribe(res => {
        const res = [
            {
                "org": "OSIIND.DLY.SE.ARCH.HYD",
                "resource": "Mohana",
                "project": [
                    {
                        "name": "IFS",
                        "type": "Billable",
                        "Week1": 24,
                        "Week2": 8,
                        "Week3": 16,
                        "Week4": 40,
                        "Week5": 16,
                        "Week6": 0,
                        "Week7": 0,
                        "Week8": 16
                    },
                    {
                        "name": "BBSI",
                        "type": "Non-Billable",
                        "Week1": 8,
                        "Week2": 24,
                        "Week3": 16,
                        "Week4": 0,
                        "Week5": 8,
                        "Week6": 32,
                        "Week7": 8,
                        "Week8": 8
                    },
                    {
                        "name": "OsiOne",
                        "type": "Internal",
                        "Week1": 8,
                        "Week2": 8,
                        "Week3": 8,
                        "Week4": 0,
                        "Week5": 16,
                        "Week6": 8,
                        "Week7": 0,
                        "Week8": 0
                    },
                    {
                        "name": "",
                        "type": "PTO",
                        "Week1": 0,
                        "Week2": 0,
                        "Week3": 0,
                        "Week4": 0,
                        "Week5": 0,
                        "Week6": 0,
                        "Week7": 32,
                        "Week8": 0
                    },
                    {
                        "name": "",
                        "type": "Holiday",
                        "Week1": 0,
                        "Week2": 0,
                        "Week3": 0,
                        "Week4": 0,
                        "Week5": 0,
                        "Week6": 0,
                        "Week7": 0,
                        "Week8": 16
                    },
                    {
                        "name": "",
                        "type": "Special",
                        "Week1": 0,
                        "Week2": 0,
                        "Week3": 0,
                        "Week4": 0,
                        "Week5": 0,
                        "Week6": 0,
                        "Week7": 0,
                        "Week8": 0
                    }
                ]
            },
            {
                "org": "OSIIND.DLY.SE.ARCH.HYD",
                "resource": "Aravind",
                "project": [
                    {
                        "name": "IFS",
                        "type": "Billable",
                        "Week1": 24,
                        "Week2": 8,
                        "Week3": 16,
                        "Week4": 40,
                        "Week5": 16,
                        "Week6": 0,
                        "Week7": 0,
                        "Week8": 16
                    },
                    {
                        "name": "OsiOne",
                        "type": "Internal",
                        "Week1": 16,
                        "Week2": 32,
                        "Week3": 32,
                        "Week4": 0,
                        "Week5": 32,
                        "Week6": 40,
                        "Week7": 8,
                        "Week8": 8
                    },
                    {
                        "name": "",
                        "type": "PTO",
                        "Week1": 0,
                        "Week2": 0,
                        "Week3": 0,
                        "Week4": 0,
                        "Week5": 0,
                        "Week6": 0,
                        "Week7": 32,
                        "Week8": 0
                    },
                    {
                        "name": "",
                        "type": "Holiday",
                        "Week1": 0,
                        "Week2": 0,
                        "Week3": 0,
                        "Week4": 0,
                        "Week5": 0,
                        "Week6": 0,
                        "Week7": 0,
                        "Week8": 16
                    },
                    {
                        "name": "",
                        "type": "Special",
                        "Week1": 0,
                        "Week2": 0,
                        "Week3": 0,
                        "Week4": 0,
                        "Week5": 0,
                        "Week6": 0,
                        "Week7": 0,
                        "Week8": 0
                    }
                ]
            }
        ];
        this.data = res;
        this.dataExt = res;
        this.dataExt.forEach(emp => {
            emp.project.forEach(pro => {
                // const numberedObj = _.pickBy(pro, _.isNumber);
                // const list: any[] = _.values(numberedObj);
                // pro.value = list.reduce((acc, cur) => acc + cur, 0);
            });
            emp.billableTypeValue = emp.project.filter(item => item.type === 'Billable').length ?
                emp.project.filter(item => item.type === 'Billable')[0]['value'] : 0;
            emp.nonbillableTypeValue = emp.project.filter(item => item.type === 'Non-Billable').length ?
                emp.project.filter(item => item.type === 'Non-Billable')[0]['value'] : 0;
            emp.internalvalue = emp.project.filter(item => item.type === 'Internal').length ?
                emp.project.filter(item => item.type === 'Internal')[0]['value'] : 0;
            emp.ptoValue = emp.project.filter(item => item.type === 'PTO').length ?
                emp.project.filter(item => item.type === 'PTO')[0]['value'] : 0;
            emp.holidayValue = emp.project.filter(item => item.type === 'Holiday').length ?
                emp.project.filter(item => item.type === 'Holiday')[0]['value'] : 0;
            emp.specialValue = emp.project.filter(item => item.type === 'Special').length ?
                emp.project.filter(item => item.type === 'Special')[0]['value'] : 0;
        });
        // this.processData();
        // });
    }
    processData() {
        const statesSeen = {};
        const countiesSeen = {};
        this.dataExt = this.data.sort((a, b) => {
            const stateComp = a.org.localeCompare(b.org);
            return stateComp ? stateComp : a.resource.localeCompare(b.resource);
        }).map(x => {
            const stateSpan = statesSeen[x.org] ? 0 :
                this.data.filter(y => y.org === x.org).length;
            statesSeen[x.org] = true;
            const countySpan = countiesSeen[x.org] && countiesSeen[x.org][x.resource] ? 0 :
                this.data.filter(y => y.org === x.org && y.resource === x.resource).length;
            countiesSeen[x.org] = countiesSeen[x.org] || {};
            countiesSeen[x.org][x.resource] = true;
            return Object.assign({}, x, { stateSpan, countySpan });
        });
    }
};
MergeRowsDesignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-merge-rows-design',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./merge-rows-design.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/merge-rows-design/merge-rows-design.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./merge-rows-design.component.css */ "./src/app/merge-rows-design/merge-rows-design.component.css")).default]
    })
], MergeRowsDesignComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mdevarasetty/Documents/Angular Frameworks/list-frameworks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map