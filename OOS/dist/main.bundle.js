webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-page/admin-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-page/admin-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\r\n<header>\r\n  <!-- top Header -->\r\n  <div id=\"top-header\">\r\n    <div class=\"container\">\r\n      <div class=\"pull-left\">\r\n        <span>Welcome to E-shop!</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /top Header -->\r\n\r\n  <!-- header -->\r\n  <div id=\"header\">\r\n    <div class=\"container\">\r\n      <div class=\"pull-left\">\r\n        <!-- Logo -->\r\n        <div class=\"header-logo\">\r\n          <a class=\"logo\" href=\"#\">\r\n            <img src=\"assets/img/logo.png\" alt=\"\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n        <!-- /Logo -->\r\n</header>\r\n<!-- /HEADER -->\r\n<hr>\r\n    <!-- NAVIGATION -->\r\n<div id=\"home\">\r\n      <!-- container -->\r\n      <div class=\"container\">\r\n        <div id=\"responsive-nav\">\r\n          <!-- category nav -->\r\n          <div class=\"category-nav\">\r\n            <span class=\"category-header\">Modules</span>\r\n            <ul class=\"category-list\" style=\"position:relative\">\r\n              <li><a [routerLink]=\"['./categories']\">Categories</a></li>\r\n              <li><a [routerLink]=\"['./products']\">Products</a></li>\r\n              <li><a [routerLink]=\"['./users']\">Users</a></li>\r\n              <li><a [routerLink]=\"['./orders']\">Orders</a></li>\r\n              \r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- router -->\r\n        <div class=\"home-wrap\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n<!-- FOOTER -->\r\n<footer id=\"footer\" class=\"section section-grey\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- footer widget -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t<!-- footer logo -->\r\n\t\t\t\t\t\t<div class=\"footer-logo\">\r\n\t\t\t\t\t\t\t<a class=\"logo\" href=\"#\">\r\n\t\t            <img src=\"assets/img/logo.png\" alt=\"\">\r\n\t\t          </a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- /footer logo -->\r\n            <p>This is E-shop from OrientInternship.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\r\n            <!-- footer copyright -->\r\n            <div class=\"footer-copyright\">\r\n              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n              Copyright &copy; All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by Orient Intern Team.\r\n              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n            </div>\r\n            <!-- /footer copyright -->\r\n          </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-page/admin-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent() {
    }
    AdminPageComponent.prototype.ngOnInit = function () {
    };
    AdminPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__("./src/app/admin/admin-page/admin-page.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin-page/admin-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__ = __webpack_require__("./src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_page_admin_page_component__ = __webpack_require__("./src/app/admin/admin-page/admin-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories_component__ = __webpack_require__("./src/app/admin/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products_component__ = __webpack_require__("./src/app/admin/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_orders_component__ = __webpack_require__("./src/app/admin/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_component__ = __webpack_require__("./src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_overview_categories_overview_categories_component__ = __webpack_require__("./src/app/admin/categories/overview-categories/overview-categories.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var adminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_page_admin_page_component__["a" /* AdminPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuardService */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_5__products_products_component__["a" /* ProductsComponent */] },
            {
                path: 'categories',
                component: __WEBPACK_IMPORTED_MODULE_4__categories_categories_component__["a" /* CategoriesComponent */],
                children: [
                    { path: 'overview-categories', component: __WEBPACK_IMPORTED_MODULE_8__categories_overview_categories_overview_categories_component__["a" /* OverviewCategoriesComponent */] }
                ]
            },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_6__orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__users_users_component__["a" /* UsersComponent */] }
        ]
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(adminRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("./src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_page_admin_page_component__ = __webpack_require__("./src/app/admin/admin-page/admin-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_categories_component__ = __webpack_require__("./src/app/admin/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_products_component__ = __webpack_require__("./src/app/admin/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__orders_orders_component__ = __webpack_require__("./src/app/admin/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_users_component__ = __webpack_require__("./src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orders_order_detail_order_detail_component__ = __webpack_require__("./src/app/admin/orders/order-detail/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_product_detail_product_detail_component__ = __webpack_require__("./src/app/admin/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_category_service__ = __webpack_require__("./src/app/admin/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__categories_overview_categories_overview_categories_component__ = __webpack_require__("./src/app/admin/categories/overview-categories/overview-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_orders_service__ = __webpack_require__("./src/app/admin/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__admin_page_admin_page_component__["a" /* AdminPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__orders_order_detail_order_detail_component__["a" /* OrderDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__products_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__categories_overview_categories_overview_categories_component__["a" /* OverviewCategoriesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_13__services_orders_service__["a" /* OrdersService */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  categories works!\r\n</p>\r\n<a [routerLink]=\"['./overview-categories']\">Overview Categories</a> |\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("./src/app/admin/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_category__ = __webpack_require__("./src/app/admin/models/category.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getListCategory();
    };
    CategoriesComponent.prototype.getListCategory = function () {
        var _this = this;
        this.categoryService.get().subscribe(function (result) {
            _this.listCategory = result;
        });
    };
    CategoriesComponent.prototype.addCategory = function (categoryName) {
        var _this = this;
        var newCategory = new __WEBPACK_IMPORTED_MODULE_2__models_category__["a" /* CategoryModel */]();
        newCategory.name = categoryName;
        this.categoryService.add(newCategory).subscribe(function () {
            _this.getListCategory();
        });
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("./src/app/admin/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/admin/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/admin/categories/overview-categories/overview-categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/categories/overview-categories/overview-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <thead class=\"thead-dark\">\r\n    <tr>\r\n      <th scope=\"col\">ID</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Description</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let category of listCategories; let i = index\">\r\n\r\n    <tr>\r\n      <td>{{category.id}}</td>\r\n      <a href=\"#\">\r\n        <td>{{category.name}}</td>\r\n      </a>\r\n      <td>{{category.description}}</td>\r\n      <td>\r\n        <button class=\"btn btn-outline-primary \" (click)=\"edit()\">Edit</button>\r\n        <button class=\"btn btn-outline-primary \" (click)=\"delete(category)\">Delete</button>\r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"btn-group\">\r\n  <a class=\"btn btn-outline-primary \" routerLink=\"/CreateStudent\" routerLinkActive=\"active\">Create</a>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/categories/overview-categories/overview-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("./src/app/admin/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewCategoriesComponent = /** @class */ (function () {
    function OverviewCategoriesComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
    }
    OverviewCategoriesComponent.prototype.ngOnInit = function () {
        this.getListCategories();
    };
    OverviewCategoriesComponent.prototype.getListCategories = function () {
        var _this = this;
        this.categoryService.get().subscribe(function (data) {
            _this.listCategories = data;
        });
    };
    OverviewCategoriesComponent.prototype.delete = function (category) {
        var _this = this;
        this.categoryService.delete(category).subscribe(function (data) {
            _this.getListCategories();
        });
    };
    OverviewCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview-categories',
            template: __webpack_require__("./src/app/admin/categories/overview-categories/overview-categories.component.html"),
            styles: [__webpack_require__("./src/app/admin/categories/overview-categories/overview-categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], OverviewCategoriesComponent);
    return OverviewCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/admin/models/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModel; });
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
    }
    return CategoryModel;
}());



/***/ }),

/***/ "./src/app/admin/orders/order-detail/order-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/orders/order-detail/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  order-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/orders/order-detail/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent() {
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__("./src/app/admin/orders/order-detail/order-detail.component.html"),
            styles: [__webpack_require__("./src/app/admin/orders/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/orders/orders.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  orders works!\r\n</p>"

/***/ }),

/***/ "./src/app/admin/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("./src/app/admin/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ordersService) {
        this.ordersService = ordersService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__("./src/app/admin/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/admin/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/products/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/products/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/admin/products/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/admin/products/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  products works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/admin/products/products.component.html"),
            styles: [__webpack_require__("./src/app/admin/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_http_service__ = __webpack_require__("./src/app/auth/auth-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(authHttpService) {
        this.authHttpService = authHttpService;
        this.API_PATH = 'http://fbinterns.azurewebsites.net/api/Category';
    }
    CategoryService.prototype.get = function () {
        return this.authHttpService.get(this.API_PATH)
            .map(function (res) { return res.json() || []; });
    };
    CategoryService.prototype.add = function (task) {
        return this.authHttpService.post(this.API_PATH, task)
            .map(function (res) { return res.json(); });
    };
    CategoryService.prototype.delete = function (category) {
        var url = this.API_PATH + "/" + category.id;
        return this.authHttpService.delete(url);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_http_service__["a" /* AuthHttpService */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/admin/services/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_http_service__ = __webpack_require__("./src/app/auth/auth-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersService = /** @class */ (function () {
    function OrdersService(authHttpService) {
        this.authHttpService = authHttpService;
        this.API_PATH = '/api/order';
    }
    OrdersService.prototype.getList = function () {
        return this.authHttpService.get(this.API_PATH)
            .map(function (res) { return res.json() || []; });
    };
    OrdersService.prototype.getById = function (id) {
        return this.authHttpService.get(this.API_PATH + id)
            .map(function (res) { return res.json() || []; });
    };
    OrdersService.prototype.add = function (order) {
        return this.authHttpService.post(this.API_PATH, order)
            .map(function (res) { return res.json(); });
    };
    OrdersService.prototype.put = function (order) {
        return this.authHttpService.put(this.API_PATH, order)
            .map(function (res) { return res.json() || []; });
    };
    OrdersService.prototype.delete = function (id) {
        return this.authHttpService.delete(this.API_PATH + id)
            .map(function (res) { return res.json() || []; });
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_http_service__["a" /* AuthHttpService */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  users works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__("./src/app/admin/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__("./src/app/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', redirectTo: '/shopping', pathMatch: 'full' },
    { path: 'admin', redirectTo: '/admin' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundPageComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_module__ = __webpack_require__("./src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_shopping_module__ = __webpack_require__("./src/app/shopping/shopping.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard_service__ = __webpack_require__("./src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_http_service__ = __webpack_require__("./src/app/auth/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__not_found_component__ = __webpack_require__("./src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_nouislider__ = __webpack_require__("./node_modules/ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_nouislider__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__not_found_component__["a" /* NotFoundPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_5__shopping_shopping_module__["a" /* ShoppingModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_nouislider__["NouisliderModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_9__auth_auth_http_service__["a" /* AuthHttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        return true;
    };
    AuthGuardService.prototype.canActivateChild = function () {
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/auth-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthHttpService = /** @class */ (function () {
    function AuthHttpService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    AuthHttpService.prototype.get = function (url, options) {
        if (options) {
            options = this.authService.setRequestOptions(options);
        }
        else {
            options = this.authService.setRequestOptions();
        }
        return this.http.get(url, options);
    };
    AuthHttpService.prototype.put = function (url, data, options) {
        var body = JSON.stringify(data);
        if (options) {
            options = this.authService.setRequestOptions(options);
        }
        else {
            options = this.authService.setRequestOptions();
        }
        return this.http.put(url, body, options);
    };
    AuthHttpService.prototype.delete = function (url, options) {
        if (options) {
            options = this.authService.setRequestOptions(options);
        }
        else {
            options = this.authService.setRequestOptions();
        }
        return this.http.delete(url, options);
    };
    AuthHttpService.prototype.post = function (url, data, options) {
        var body = JSON.stringify(data);
        if (options) {
            options = this.authService.setRequestOptions(options);
        }
        else {
            options = this.authService.setRequestOptions();
        }
        return this.http.post(url, body, options);
    };
    AuthHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], AuthHttpService);
    return AuthHttpService;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.setRequestOptions = function (options) {
        var authHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        authHeaders.append('Content-Type', 'application/json');
        if (options) {
            if (options.headers) {
                options.headers.append(authHeaders.keys[0], authHeaders.values[0]);
            }
            else {
                options.headers = authHeaders;
            }
        }
        else {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: authHeaders });
        }
        return options;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<h2>Page note found.</h2>"
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/shopping/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- HEADER -->\r\n\t<header>\r\n\t\t<!-- top Header -->\r\n\t\t<div id=\"top-header\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t<span>Welcome to E-shop!</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t<ul class=\"header-top-links\">\r\n\t\t\t\t\t\t<li><a href=\"#\">Store</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Newsletter</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">FAQ</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown default-dropdown\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">ENG <i class=\"fa fa-caret-down\"></i></a>\r\n\t\t\t\t\t\t\t<ul class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">English (ENG)</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Russian (Ru)</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">French (FR)</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Spanish (Es)</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"dropdown default-dropdown\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">USD <i class=\"fa fa-caret-down\"></i></a>\r\n\t\t\t\t\t\t\t<ul class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">USD ($)</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\">EUR (€)</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /top Header -->\r\n\r\n\t\t<!-- header -->\r\n\t\t<div id=\"header\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t<!-- Logo -->\r\n\t\t\t\t\t<div class=\"header-logo\">\r\n\t\t\t\t\t\t<a class=\"logo\" href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/logo.png\" alt=\"\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Logo -->\r\n\r\n\t\t\t\t\t<!-- Search -->\r\n\t\t\t\t\t<div class=\"header-search\">\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<input class=\"input search-input\" type=\"text\" placeholder=\"Enter your keyword\">\r\n\t\t\t\t\t\t\t<select class=\"input search-categories\">\r\n\t\t\t\t\t\t\t\t<option value=\"0\">All Categories</option>\r\n\t\t\t\t\t\t\t\t<option value=\"1\">Category 01</option>\r\n\t\t\t\t\t\t\t\t<option value=\"1\">Category 02</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<button class=\"search-btn\"><i class=\"fa fa-search\"></i></button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /Search -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t<ul class=\"header-btns\">\r\n\t\t\t\t\t\t<!-- Account -->\r\n\t\t\t\t\t\t<li class=\"header-account dropdown default-dropdown\">\r\n\t\t\t\t\t\t\t<div class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\t\t<div class=\"header-btns-icon\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user-o\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<strong class=\"text-uppercase\">My Account <i class=\"fa fa-caret-down\"></i></strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"text-uppercase\">Login</a> / <a href=\"#\" class=\"text-uppercase\">Join</a>\r\n\t\t\t\t\t\t\t<ul class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user-o\"></i> My Account</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-heart-o\"></i> My Wishlist</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-exchange\"></i> Compare</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-check\"></i> Checkout</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-unlock-alt\"></i> Login</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-user-plus\"></i> Create An Account</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<!-- /Account -->\r\n\r\n\t\t\t\t\t\t<!-- Cart -->\r\n\t\t\t\t\t\t<li class=\"header-cart dropdown default-dropdown\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\t\t<div class=\"header-btns-icon\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\"></i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"qty\">3</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<strong class=\"text-uppercase\">My Cart:</strong>\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t<span>35.20$</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<div id=\"shopping-cart\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart-list\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"product product-widget\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/thumb-product01.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <span class=\"qty\">x3</span></h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"cancel-btn\"><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"product product-widget\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/thumb-product01.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <span class=\"qty\">x3</span></h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"cancel-btn\"><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn\">View Cart</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn\">Checkout <i class=\"fa fa-arrow-circle-right\"></i></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<!-- /Cart -->\r\n\r\n\t\t\t\t\t\t<!-- Mobile nav toggle-->\r\n\t\t\t\t\t\t<li class=\"nav-toggle\">\r\n\t\t\t\t\t\t\t<button class=\"nav-toggle-btn main-btn icon-btn\"><i class=\"fa fa-bars\"></i></button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<!-- / Mobile nav toggle -->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- header -->\r\n\t\t</div>\r\n\t\t<!-- container -->\r\n\t</header>\r\n\t<!-- /HEADER -->\r\n\r\n\t<!-- NAVIGATION -->\r\n\t<div id=\"navigation\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<div id=\"responsive-nav\">\r\n\t\t\t\t<!-- category nav -->\r\n\t\t\t\t<div class=\"category-nav\">\r\n\t\t\t\t\t<span class=\"category-header\">Categories <i class=\"fa fa-list\"></i></span>\r\n\t\t\t\t\t<ul class=\"category-list\">\r\n\t\t\t\t\t\t<li class=\"dropdown side-dropdown\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">Women’s Clothing <i class=\"fa fa-angle-right\"></i></a>\r\n\t\t\t\t\t\t\t<div class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hidden-md hidden-lg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hidden-md hidden-lg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/banner05.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW COLLECTION</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"white-color font-weak\">HOT DEAL</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown side-dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">Phones & Accessories <i class=\"fa fa-angle-right\"></i></a>\r\n\t\t\t\t\t\t\t<div class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hidden-md hidden-lg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"banner banner-2\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/banner04.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-caption\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"white-color\">NEW<br>COLLECTION</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Computer & Office</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Consumer Electronics</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown side-dropdown\">\r\n\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">Jewelry & Watches <i class=\"fa fa-angle-right\"></i></a>\r\n\t\t\t\t\t\t\t<div class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hidden-md hidden-lg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hidden-md hidden-lg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">View All</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /category nav -->\r\n\r\n\t\t\t\t<!-- menu nav -->\r\n\t\t\t\t<div class=\"menu-nav\">\r\n\t\t\t\t\t<span class=\"menu-header\">Menu <i class=\"fa fa-bars\"></i></span>\r\n\t\t\t\t\t<ul class=\"menu-list\">\r\n\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Shop</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown mega-dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">Women <i class=\"fa fa-caret-down\"></i></a>\r\n\t\t\t\t\t\t\t<div class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hidden-md hidden-lg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hidden-md hidden-lg\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/banner05.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW COLLECTION</h2>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"white-color font-weak\">HOT DEAL</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"dropdown mega-dropdown full-width\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">Men <i class=\"fa fa-caret-down\"></i></a>\r\n\t\t\t\t\t\t\t<div class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/banner06.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"white-color text-uppercase\">Women’s</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/banner07.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"white-color text-uppercase\">Men’s</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/banner08.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"white-color text-uppercase\">Accessories</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"hidden-sm hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/banner09.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"white-color text-uppercase\">Bags</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"list-links-title\">Categories</h3></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Women’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Men’s Clothing</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Phones & Accessories</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Jewelry & Watches</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Bags & Shoes</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Sales</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown default-dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"true\">Pages <i class=\"fa fa-caret-down\"></i></a>\r\n\t\t\t\t\t\t\t<ul class=\"custom-menu\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"index.html\">Home</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"products.html\">Products</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"product-page.html\">Product Details</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"checkout.html\">Checkout</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- menu nav -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /container -->\r\n\t</div>\r\n\t<!-- /NAVIGATION -->\r\n\r\n\t<!-- HOME -->\r\n\t<div id=\"home\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- home wrap -->\r\n\t\t\t<div class=\"home-wrap\">\r\n\t\t\t\t<!-- home slick -->\r\n\t\t\t\t<div id=\"home-slick\">\r\n\t\t\t\t\t<!-- banner -->\r\n\t\t\t\t\t<div class=\"banner banner-1\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner01.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t<h1>Bags sale</h1>\r\n\t\t\t\t\t\t\t<h3 class=\"white-color font-weak\">Up to 50% Discount</h3>\r\n\t\t\t\t\t\t\t<button class=\"primary-btn\">Shop Now</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t\t<!-- banner -->\r\n\t\t\t\t\t<div class=\"banner banner-1\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner02.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption\">\r\n\t\t\t\t\t\t\t<h1 class=\"primary-color\">HOT DEAL<br><span class=\"white-color font-weak\">Up to 50% OFF</span></h1>\r\n\t\t\t\t\t\t\t<button class=\"primary-btn\">Shop Now</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t\t<!-- banner -->\r\n\t\t\t\t\t<div class=\"banner banner-1\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner03.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption\">\r\n\t\t\t\t\t\t\t<h1 class=\"white-color\">New Product <span>Collection</span></h1>\r\n\t\t\t\t\t\t\t<button class=\"primary-btn\">Shop Now</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /banner -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /home slick -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /home wrap -->\r\n\t\t</div>\r\n\t\t<!-- /container -->\r\n\t</div>\r\n\t<!-- /HOME -->\r\n\r\n\t<!-- section -->\r\n\t<div class=\"section\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-4 col-sm-6\">\r\n\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner10.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW COLLECTION</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-4 col-sm-6\">\r\n\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner11.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW COLLECTION</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3\">\r\n\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner12.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW COLLECTION</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\t\t</div>\r\n\t\t<!-- /container -->\r\n\t</div>\r\n\t<!-- /section -->\r\n\r\n\t<!-- section -->\r\n\t<div class=\"section\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- section-title -->\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"section-title\">\r\n\t\t\t\t\t\t<h2 class=\"title\">Deals Of The Day</h2>\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<div class=\"product-slick-dots-1 custom-dots\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /section-title -->\r\n\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"banner banner-2\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner14.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption\">\r\n\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW<br>COLLECTION</h2>\r\n\t\t\t\t\t\t\t<button class=\"primary-btn\">Shop Now</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t<!-- Product Slick -->\r\n\t\t\t\t<div class=\"col-md-9 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div id=\"product-slick-1\" class=\"product-slick\">\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"product-countdown\">\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 H</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 M</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 S</span></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product01.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"product-countdown\">\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 H</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 M</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 S</span></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product07.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"product-countdown\">\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 H</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 M</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 S</span></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product06.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"product-countdown\">\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 H</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 M</span></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><span>00 S</span></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product08.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Slick -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- section title -->\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"section-title\">\r\n\t\t\t\t\t\t<h2 class=\"title\">Deals Of The Day</h2>\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<div class=\"product-slick-dots-2 custom-dots\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- section title -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single product-hot\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<ul class=\"product-countdown\">\r\n\t\t\t\t\t\t\t\t<li><span>00 H</span></li>\r\n\t\t\t\t\t\t\t\t<li><span>00 M</span></li>\r\n\t\t\t\t\t\t\t\t<li><span>00 S</span></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product01.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Slick -->\r\n\t\t\t\t<div class=\"col-md-9 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div id=\"product-slick-2\" class=\"product-slick\">\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product06.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50</h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product05.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product04.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50</h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t\t\t<img src=\"/assets/img/product03.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Slick -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\t\t</div>\r\n\t\t<!-- /container -->\r\n\t</div>\r\n\t<!-- /section -->\r\n\r\n\t<!-- section -->\r\n\t<div class=\"section section-grey\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t<div class=\"banner banner-1\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner13.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t<h1 class=\"primary-color\">HOT DEAL<br><span class=\"white-color font-weak\">Up to 50% OFF</span></h1>\r\n\t\t\t\t\t\t\t<button class=\"primary-btn\">Shop Now</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-4 col-sm-6\">\r\n\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner11.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW COLLECTION</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-4 col-sm-6\">\r\n\t\t\t\t\t<a class=\"banner banner-1\" href=\"#\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner12.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption text-center\">\r\n\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW COLLECTION</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\t\t</div>\r\n\t\t<!-- /container -->\r\n\t</div>\r\n\t<!-- /section -->\r\n\r\n\t<!-- section -->\r\n\t<div class=\"section\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- section title -->\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"section-title\">\r\n\t\t\t\t\t\t<h2 class=\"title\">Latest Products</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- section title -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product01.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50</h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product02.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product03.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product04.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50</h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- banner -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"banner banner-2\">\r\n\t\t\t\t\t\t<img src=\"/assets/img/banner15.jpg\" alt=\"\">\r\n\t\t\t\t\t\t<div class=\"banner-caption\">\r\n\t\t\t\t\t\t\t<h2 class=\"white-color\">NEW<br>COLLECTION</h2>\r\n\t\t\t\t\t\t\t<button class=\"primary-btn\">Shop Now</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /banner -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product07.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product06.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product05.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- section title -->\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"section-title\">\r\n\t\t\t\t\t\t<h2 class=\"title\">Picked For You</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- section title -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product04.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50</h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product03.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50</h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product02.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\r\n\t\t\t\t<!-- Product Single -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"product product-single\">\r\n\t\t\t\t\t\t<div class=\"product-thumb\">\r\n\t\t\t\t\t\t\t<div class=\"product-label\">\r\n\t\t\t\t\t\t\t\t<span>New</span>\r\n\t\t\t\t\t\t\t\t<span class=\"sale\">-20%</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"main-btn quick-view\"><i class=\"fa fa-search-plus\"></i> Quick view</button>\r\n\t\t\t\t\t\t\t<img src=\"/assets/img/product01.jpg\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"product-body\">\r\n\t\t\t\t\t\t\t<h3 class=\"product-price\">$32.50 <del class=\"product-old-price\">$45.00</del></h3>\r\n\t\t\t\t\t\t\t<div class=\"product-rating\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o empty\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2 class=\"product-name\"><a href=\"#\">Product Name Goes Here</a></h2>\r\n\t\t\t\t\t\t\t<div class=\"product-btns\">\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-heart\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"main-btn icon-btn\"><i class=\"fa fa-exchange\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"primary-btn add-to-cart\"><i class=\"fa fa-shopping-cart\"></i> Add to Cart</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /Product Single -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\t\t</div>\r\n\t\t<!-- /container -->\r\n\t</div>\r\n\t<!-- /section -->\r\n\r\n\t<!-- FOOTER -->\r\n\t<footer id=\"footer\" class=\"section section-grey\">\r\n\t\t<!-- container -->\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- footer widget -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t<!-- footer logo -->\r\n\t\t\t\t\t\t<div class=\"footer-logo\">\r\n\t\t\t\t\t\t\t<a class=\"logo\" href=\"#\">\r\n\t\t            <img src=\"/assets/img/logo.png\" alt=\"\">\r\n\t\t          </a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- /footer logo -->\r\n\r\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>\r\n\r\n\t\t\t\t\t\t<!-- footer social -->\r\n\t\t\t\t\t\t<ul class=\"footer-social\">\r\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-instagram\"></i></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<!-- /footer social -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /footer widget -->\r\n\r\n\t\t\t\t<!-- footer widget -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t<h3 class=\"footer-header\">My Account</h3>\r\n\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t<li><a href=\"#\">My Account</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">My Wishlist</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Compare</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Checkout</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Login</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /footer widget -->\r\n\r\n\t\t\t\t<div class=\"clearfix visible-sm visible-xs\"></div>\r\n\r\n\t\t\t\t<!-- footer widget -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t<h3 class=\"footer-header\">Customer Service</h3>\r\n\t\t\t\t\t\t<ul class=\"list-links\">\r\n\t\t\t\t\t\t\t<li><a href=\"#\">About Us</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Shiping & Return</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">Shiping Guide</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"#\">FAQ</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /footer widget -->\r\n\r\n\t\t\t\t<!-- footer subscribe -->\r\n\t\t\t\t<div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t<h3 class=\"footer-header\">Stay Connected</h3>\r\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<input class=\"input\" placeholder=\"Enter Email Address\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button class=\"primary-btn\">Join Newslatter</button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /footer subscribe -->\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\t\t\t<hr>\r\n\t\t\t<!-- row -->\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t<!-- footer copyright -->\r\n\t\t\t\t\t<div class=\"footer-copyright\">\r\n\t\t\t\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n\t\t\t\t\t\tCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\r\n\t\t\t\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /footer copyright -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- /row -->\r\n\t\t</div>\r\n\t\t<!-- /container -->\r\n\t</footer>\r\n\t<!-- /FOOTER -->\r\n\r\n\t<!-- jQuery Plugins -->\r\n\r\n"

/***/ }),

/***/ "./src/app/shopping/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/shopping/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/shopping/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/shopping/order-confirm/order-confirm.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/order-confirm/order-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  order-confirm works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shopping/order-confirm/order-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderConfirmComponent = /** @class */ (function () {
    function OrderConfirmComponent() {
    }
    OrderConfirmComponent.prototype.ngOnInit = function () {
    };
    OrderConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-confirm',
            template: __webpack_require__("./src/app/shopping/order-confirm/order-confirm.component.html"),
            styles: [__webpack_require__("./src/app/shopping/order-confirm/order-confirm.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderConfirmComponent);
    return OrderConfirmComponent;
}());



/***/ }),

/***/ "./src/app/shopping/order/order.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  order works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shopping/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__("./src/app/shopping/order/order.component.html"),
            styles: [__webpack_require__("./src/app/shopping/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/shopping/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shopping/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/shopping/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/shopping/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/shopping/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shopping/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/shopping/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/shopping/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/shopping/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryService = /** @class */ (function () {
    function CategoryService() {
    }
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  shopping-cart works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("./src/app/shopping/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/app/shopping/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__("./src/app/shopping/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__ = __webpack_require__("./src/app/shopping/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail_component__ = __webpack_require__("./src/app/shopping/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_order_component__ = __webpack_require__("./src/app/shopping/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_confirm_order_confirm_component__ = __webpack_require__("./src/app/shopping/order-confirm/order-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_shopping_component__ = __webpack_require__("./src/app/shopping/shopping/shopping.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var shoppingRoutes = [
    {
        path: 'shopping', component: __WEBPACK_IMPORTED_MODULE_8__shopping_shopping_component__["a" /* ShoppingComponent */], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */] },
            { path: 'products/?categoryId', component: __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_3__product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_5__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
            { path: 'order', component: __WEBPACK_IMPORTED_MODULE_6__order_order_component__["a" /* OrderComponent */] },
            { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_7__order_confirm_order_confirm_component__["a" /* OrderConfirmComponent */] },
        ]
    },
];
var ShoppingRoutingModule = /** @class */ (function () {
    function ShoppingRoutingModule() {
    }
    ShoppingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(shoppingRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ShoppingRoutingModule);
    return ShoppingRoutingModule;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__("./src/app/shopping/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_routing_module__ = __webpack_require__("./src/app/shopping/shopping-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail_component__ = __webpack_require__("./src/app/shopping/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_order_component__ = __webpack_require__("./src/app/shopping/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_confirm_order_confirm_component__ = __webpack_require__("./src/app/shopping/order-confirm/order-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_list_product_list_component__ = __webpack_require__("./src/app/shopping/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shopping_shopping_component__ = __webpack_require__("./src/app/shopping/shopping/shopping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_category_service__ = __webpack_require__("./src/app/shopping/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shopping_routing_module__["a" /* ShoppingRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */], __WEBPACK_IMPORTED_MODULE_4__product_detail_product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_5__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */], __WEBPACK_IMPORTED_MODULE_6__order_order_component__["a" /* OrderComponent */], __WEBPACK_IMPORTED_MODULE_7__order_confirm_order_confirm_component__["a" /* OrderConfirmComponent */], __WEBPACK_IMPORTED_MODULE_8__product_list_product_list_component__["a" /* ProductListComponent */], __WEBPACK_IMPORTED_MODULE_9__shopping_shopping_component__["a" /* ShoppingComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_category_service__["a" /* CategoryService */]]
        })
    ], ShoppingModule);
    return ShoppingModule;
}());



/***/ }),

/***/ "./src/app/shopping/shopping/shopping.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/shopping/shopping.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  shopping works\r\n</p>\r\n<p>\r\n  <a [routerLink]=\"['./home']\">home</a> |\r\n  <a [routerLink]=\"['./products']\">products</a>\r\n</p>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/shopping/shopping/shopping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent() {
    }
    ShoppingComponent.prototype.ngOnInit = function () {
    };
    ShoppingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping',
            template: __webpack_require__("./src/app/shopping/shopping/shopping.component.html"),
            styles: [__webpack_require__("./src/app/shopping/shopping/shopping.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map