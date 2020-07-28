function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/add-product/add-product.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/add-product/add-product.component.ts ***!
    \******************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/farmer.service */
    "./src/app/services/farmer.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent(appStore, formBuilder, farmerService, router) {
        _classCallCheck(this, AddProductComponent);

        this.appStore = appStore;
        this.formBuilder = formBuilder;
        this.farmerService = farmerService;
        this.router = router;
        this.addProductForm = formBuilder.group({
          "productName": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "price": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "qty": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var productBody = this.addProductForm.value;
          console.log("productFormInfo: ", productBody);
          this.farmerService.addProduct(productBody).subscribe(function (response) {
            console.log('addProduct response: ', response);

            _this.router.navigate(["products"]);
          }); // this.farmerService.editProduct(productBody)
          //   .subscribe((response) => {
          //     console.log('editProduct Response: ', response)
          //     this.router.navigate(["products"])
          //   })
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ɵfac = function AddProductComponent_Factory(t) {
      return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddProductComponent,
      selectors: [["app-add-product"]],
      decls: 20,
      vars: 2,
      consts: [[3, "navToken", "logoutEvent"], [3, "formGroup", "ngSubmit"], ["for", "productName"], ["type", "text", "id", "productName", "formControlName", "productName", 1, "form-control"], ["for", "price"], ["type", "number", "id", "price", "formControlName", "price", 1, "form-control"], ["for", "qty"], ["type", "number", "id", "qty", "formControlName", "qty", 1, "form-control"], ["type", "submit"]],
      template: function AddProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function AddProductComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantity: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Product!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductForm);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  input[type=number][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n\r\n  input[type=number][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%]{\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 18px;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 5px;\r\n  }\r\n\r\n  body[_ngcontent-%COMP%]{\r\n      background-color: rgb(231, 224, 214);\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      color:#39793b;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 100px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n\r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n  }\r\n\r\n  .signinbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color:#274e27 ;\r\n  }\r\n\r\n  .signinbutton[_ngcontent-%COMP%]{\r\n      margin-top: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUV6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNFQUFzRTtJQUN0RSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7TUFDSSxzRUFBc0U7TUFDdEUsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLHNFQUFzRTtNQUN0RSxhQUFhO0VBQ2pCOztFQUVBO0lBQ0Usc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI0ZTQyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQyNGU0MjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk3OTNiO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOTc5M2I7XHJcbiAgfVxyXG5cclxuICBsYWJlbHtcclxuICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGJvZHl7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIyNCwgMjE0KTtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICAgIGNvbG9yOiMzOTc5M2I7XHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM5NzkzYiA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cclxuICAgIGJvcmRlcjogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg4MywgODUsIDkyLCAwLjk3Myk7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluYnV0dG9uIDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI3NGUyNyA7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-product',
          template: "\n   \n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n    <div>\n      <form [formGroup]=\"addProductForm\" (ngSubmit)=\"onSubmit()\" >\n\n        <div>\n          <label for=\"productName\">Product Name: </label>  <br>\n          <input type=\"text\" class=\"form-control\" id=\"productName\" formControlName=\"productName\">\n        </div>\n        <div>\n          <label for=\"price\">Price: </label> <br>\n          <input type=\"number\" class=\"form-control\" id=\"price\" formControlName=\"price\">\n        </div>\n        <div>\n          <label for=\"qty\">Quantity: </label> <br>\n          <input type=\"number\" class=\"form-control\" id=\"qty\" formControlName=\"qty\">\n        </div>\n\n        <button type=\"submit\">Add Product!</button>\n\n      </form>\n    </div>\n\n  \n  ",
          styleUrls: ['./add-product.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/adminlogin/adminlogin.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/adminlogin/adminlogin.component.ts ***!
    \****************************************************/

  /*! exports provided: AdminloginComponent */

  /***/
  function srcAppAdminloginAdminloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function () {
      return AdminloginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AdminloginComponent = /*#__PURE__*/function () {
      function AdminloginComponent(router, formBuilder, authService, appStore) {
        _classCallCheck(this, AdminloginComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.appStore = appStore;
        this.signInForm = formBuilder.group({
          "email": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(AdminloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {}
      }]);

      return AdminloginComponent;
    }();

    AdminloginComponent.ɵfac = function AdminloginComponent_Factory(t) {
      return new (t || AdminloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'));
    };

    AdminloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminloginComponent,
      selectors: [["app-adminlogin"]],
      decls: 20,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "text", "id", "password", "formControlName", "password", 1, "form-control"], [1, "signinbutton"], ["type", "submit"]],
      template: function AdminloginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Administrator Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminloginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign in!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n    background-color: rgb(145, 178, 206);\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 18px;\r\n      color: rgb(186, 226, 222);\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 5px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%]{\r\n      background-color: rgb(25, 9, 61);\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      color:#39793b;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 400px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n\r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n  }\r\n  \r\n  .admin[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 50px;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color:#274e27 ;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]{\r\n      margin-top: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sb2dpbi9hZG1pbmxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFFekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7TUFDSSxzRUFBc0U7TUFDdEUsZUFBZTtNQUNmLHlCQUF5QjtFQUM3Qjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksZ0NBQWdDO0VBQ3BDOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLHNFQUFzRTtNQUN0RSxhQUFhO0VBQ2pCOztFQUVBO0lBQ0Usc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubG9naW4vYWRtaW5sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MjRlNDI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNzgsIDIwNik7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM5NzkzYjtcclxuICB9XHJcblxyXG4gIGxhYmVse1xyXG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTg2LCAyMjYsIDIyMik7XHJcbiAgfVxyXG5cclxuICBkaXZ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgYm9keXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCA5LCA2MSk7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICBjb2xvcjojMzk3OTNiO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzOTc5M2IgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgICBib3JkZXI6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoODMsIDg1LCA5MiwgMC45NzMpO1xyXG4gIH1cclxuXHJcbiAgLmFkbWlue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbmJ1dHRvbiA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNzRlMjcgO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbmJ1dHRvbntcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adminlogin',
          template: "<body>\n\n  <div>\n    <h1>Administrator Sign In</h1>\n  </div>\n\n  <div>\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\">\n  \n    <div>\n        <label for=\"email\">Email </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n    </div>\n    <br>\n    <div>\n        <label for=\"password\">Password </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"password\" formControlName=\"password\">\n    </div>\n    <div class=\"signinbutton\">\n      <button type=\"submit\">Sign in!</button>\n    </div>\n\n   \n    </form>\n\n   \n  </div>\n\n\n</body>\n",
          styleUrls: ['./adminlogin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/allaccounts/allaccounts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/allaccounts/allaccounts.component.ts ***!
    \******************************************************/

  /*! exports provided: AllaccountsComponent */

  /***/
  function srcAppAllaccountsAllaccountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllaccountsComponent", function () {
      return AllaccountsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/superuser.service */
    "./src/app/services/superuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AllaccountsComponent_div_5_tr_21_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllaccountsComponent_div_5_tr_21_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.onFarmerActivationToggle(item_r4._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Activated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllaccountsComponent_div_5_tr_21_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllaccountsComponent_div_5_tr_21_ng_template_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.onFarmerActivationToggle(item_r4._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deactivated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["", "resetpassword"];
    };

    var _c1 = function _c1(a0) {
      return {
        id: a0
      };
    };

    function AllaccountsComponent_div_5_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllaccountsComponent_div_5_tr_21_button_12_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AllaccountsComponent_div_5_tr_21_ng_template_13_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Reset User Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.firstName + " " + item_r4.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.activated)("ngIfElse", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, item_r4._id));
      }
    }

    function AllaccountsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rating");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Activation Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AllaccountsComponent_div_5_tr_21_Template, 18, 12, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
      }
    }

    function AllaccountsComponent_ng_template_6_tr_16_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllaccountsComponent_ng_template_6_tr_16_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.onCustomerActivationToggle(item_r15._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Activated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AllaccountsComponent_ng_template_6_tr_16_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllaccountsComponent_ng_template_6_tr_16_ng_template_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.onCustomerActivationToggle(item_r15._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deactivated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["", "resetcustomerpassword"];
    };

    function AllaccountsComponent_ng_template_6_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AllaccountsComponent_ng_template_6_tr_16_button_8_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllaccountsComponent_ng_template_6_tr_16_ng_template_9_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Reset User Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.firstName + " " + item_r15.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r15.activated)("ngIfElse", _r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, item_r15._id));
      }
    }

    function AllaccountsComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Activation Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllaccountsComponent_ng_template_6_tr_16_Template, 14, 10, "tr", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.users);
      }
    }

    var AllaccountsComponent = /*#__PURE__*/function () {
      function AllaccountsComponent(appStore, superuserservice, router) {
        _classCallCheck(this, AllaccountsComponent);

        this.appStore = appStore;
        this.superuserservice = superuserservice;
        this.router = router;
      }

      _createClass(AllaccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.onGetFarmers();
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }, {
        key: "onGetFarmers",
        value: function onGetFarmers() {
          var _this2 = this;

          this.superuserservice.getFarmers().subscribe(function (response) {
            console.log('onGetFarmers response: ', response);
            _this2.userCategory = 'farmers';
            _this2.users = response;
          });
        }
      }, {
        key: "onGetCustomers",
        value: function onGetCustomers() {
          var _this3 = this;

          this.superuserservice.getCustomers().subscribe(function (response) {
            console.log('onGetCustomers response: ', response);
            _this3.userCategory = 'customers';
            _this3.users = response;
          });
        }
      }, {
        key: "onFarmerActivationToggle",
        value: function onFarmerActivationToggle(id) {
          var _this4 = this;

          this.superuserservice.farmerActivationToggle(id).subscribe(function (response) {
            console.log('onFarmerActivationToggle response: ', response);

            _this4.onGetFarmers();
          });
        }
      }, {
        key: "onCustomerActivationToggle",
        value: function onCustomerActivationToggle(id) {
          var _this5 = this;

          this.superuserservice.customerActivationToggle(id).subscribe(function (response) {
            console.log('onCustomerActivationToggle response: ', response);

            _this5.onGetCustomers();
          });
        }
      }, {
        key: "navToResetPass",
        value: function navToResetPass(id) {}
      }]);

      return AllaccountsComponent;
    }();

    AllaccountsComponent.ɵfac = function AllaccountsComponent_Factory(t) {
      return new (t || AllaccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AllaccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllaccountsComponent,
      selectors: [["app-allaccounts"]],
      decls: 8,
      vars: 3,
      consts: [[3, "navToken", "logoutEvent"], ["type", "button", 1, "user", 3, "click"], [4, "ngIf", "ngIfElse"], ["customers", ""], [1, "producttablediv"], [1, "producttable"], [4, "ngFor", "ngForOf"], ["class", "activated", 3, "click", 4, "ngIf", "ngIfElse"], ["deactivated", ""], [1, "activated", 3, "routerLink", "state"], [1, "activated", 3, "click"], [1, "deactivated", 3, "click"]],
      template: function AllaccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function AllaccountsComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllaccountsComponent_Template_button_click_1_listener() {
            return ctx.onGetFarmers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Farmers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllaccountsComponent_Template_button_click_3_listener() {
            return ctx.onGetCustomers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Show Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllaccountsComponent_div_5_Template, 22, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllaccountsComponent_ng_template_6_Template, 17, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userCategory == "farmers")("ngIfElse", _r1);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["div.producttablediv[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n\r\n  div.producttable[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n\r\n  div.addaproduct[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  div.addaproduct2[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(247, 227, 165);\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color: #39793b;\r\n    color: white;\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    \r\n  }\r\n\r\n  button.user[_ngcontent-%COMP%]{\r\n    background-color: rgb(158, 65, 3);\r\n    float: left;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n    \r\n  }\r\n\r\n  button.activated[_ngcontent-%COMP%]{\r\n    background-color: rgb(11, 90, 47);\r\n    float: center;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n  }\r\n\r\n  button.deactivated[_ngcontent-%COMP%]{\r\n    background-color: rgb(131, 106, 89);\r\n    float: center;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n    \r\n  }\r\n\r\n  a.edit[_ngcontent-%COMP%]{\r\n    background-color: steelblue;\r\n    float: left;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    border-radius: 1px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]{\r\n      border-spacing: 0px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  a.addproduct[_ngcontent-%COMP%]{\r\n    background-color: rgb(188, 154, 243);\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    text-decoration: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsYWNjb3VudHMvYWxsYWNjb3VudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztFQUVGO0lBQ0Usc0VBQXNFO0lBQ3RFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixhQUFhOztFQUVmOztFQUVFO0lBQ0EsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsY0FBYztJQUNkLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsY0FBYztJQUNkLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7RUFFcEI7O0VBR0U7SUFDQSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGNBQWM7SUFDZCxzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxtQkFBbUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0VBQXNFO0lBQ3RFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Qsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FsbGFjY291bnRzL2FsbGFjY291bnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgICBkaXYucHJvZHVjdHRhYmxlZGl2e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgZGl2LnByb2R1Y3R0YWJsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGRpdi5hZGRhcHJvZHVjdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZGl2LmFkZGFwcm9kdWN0MntcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3R0YWJsZSB0cjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIyNywgMTY1KTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0dGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTc5M2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdHRhYmxlIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgICBidXR0b24udXNlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDY1LCAzKTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNlNWVlZTc7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmFjdGl2YXRlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgOTAsIDQ3KTtcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2U1ZWVlNztcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmRlYWN0aXZhdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTA2LCA4OSk7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNlNWVlZTc7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgICBhLmVkaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGV7XHJcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgYS5hZGRwcm9kdWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OCwgMTU0LCAyNDMpO1xyXG4gICAgY29sb3I6ICNlNWVlZTc7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllaccountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-allaccounts',
          template: "\n  \n  <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n  <button type=\"button\" class=\"user\" (click)=\"onGetFarmers()\" >Show Farmers</button>\n  <button type=\"button\" class=\"user\" (click)=\"onGetCustomers()\" >Show Customers</button>\n\n\n  <div *ngIf=\"userCategory == 'farmers' ; else customers \"> \n\n  <div class=\"producttablediv\">\n    <div class=\"producttable\">\n      <table>\n      <thead>\n          <tr>\n              <th>ID#</th>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Rating</th>\n              <th>Role</th>\n              <th>Activation Status</th>\n           \n              \n              <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of users\">\n              <td>{{ item._id}}</td>\n              <td>{{ item.firstName + ' ' + item.lastName}}</td>\n              <td>{{ item.email}}</td>\n              <td>{{ item.rating }}</td>\n              <td>{{ item.role }}</td>\n\n              <td> \n                <button *ngIf=\"item.activated ; else deactivated\" class=\"activated\" (click)=\"onFarmerActivationToggle(item._id)\"> Activated </button>\n              </td>\n                    <ng-template #deactivated><button class=\"deactivated\" (click)=\"onFarmerActivationToggle(item._id)\"> Deactivated </button></ng-template>\n              <td>\n              <button class=\"activated\" [routerLink]=\"['', 'resetpassword']\" [state]=\"{id: item._id}\"> Reset User Password </button>\n              </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  </div>\n\n\n\n  <ng-template #customers>\n\n <div class=\"producttablediv\">\n    <div class=\"producttable\">\n      <table>\n      <thead>\n          <tr>\n              <th>ID#</th>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Activation Status</th>\n              <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of users\">\n              <td>{{ item._id}}</td>\n              <td>{{ item.firstName + ' ' + item.lastName}}</td>\n              <td>{{ item.email}}</td>\n\n              <td> \n                <button *ngIf=\"item.activated ; else deactivated\" class=\"activated\" (click)=\"onCustomerActivationToggle(item._id)\"> Activated </button>\n              </td>\n                    <ng-template #deactivated><button class=\"deactivated\" (click)=\"onCustomerActivationToggle(item._id)\"> Deactivated </button></ng-template>\n\n              <td>\n                <!-- <button class=\"activated\" (click)=\"navToResetPass(item._id)\"> Reset User Password </button> -->\n                <button class=\"activated\" [routerLink]=\"['', 'resetcustomerpassword']\" [state]=\"{id: item._id}\"> Reset User Password </button>\n          \n              </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n  </ng-template>\n\n\n\n  ",
          styleUrls: ['./allaccounts.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/allrequests/allrequests.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/allrequests/allrequests.component.ts ***!
    \******************************************************/

  /*! exports provided: AllrequestsComponent */

  /***/
  function srcAppAllrequestsAllrequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllrequestsComponent", function () {
      return AllrequestsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/superuser.service */
    "./src/app/services/superuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AllrequestsComponent_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
      }
    }

    var AllrequestsComponent = /*#__PURE__*/function () {
      function AllrequestsComponent(appStore, superuserservice, router) {
        _classCallCheck(this, AllrequestsComponent);

        this.appStore = appStore;
        this.superuserservice = superuserservice;
        this.router = router;
      }

      _createClass(AllrequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.onGetRequests();
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }, {
        key: "onGetRequests",
        value: function onGetRequests() {
          var _this6 = this;

          this.superuserservice.getRequestsLog().subscribe(function (response) {
            console.log('from onGetRequest response: ', response);
            _this6.requestsLog = response;
          });
        }
      }]);

      return AllrequestsComponent;
    }();

    AllrequestsComponent.ɵfac = function AllrequestsComponent_Factory(t) {
      return new (t || AllrequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AllrequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllrequestsComponent,
      selectors: [["app-allrequests"]],
      decls: 10,
      vars: 2,
      consts: [[3, "navToken", "logoutEvent"], [1, "producttablediv"], [1, "producttable"], [4, "ngFor", "ngForOf"]],
      template: function AllrequestsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function AllrequestsComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Request ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllrequestsComponent_tr_9_Template, 3, 1, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestsLog);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbHJlcXVlc3RzL2FsbHJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllrequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-allrequests',
          template: "\n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n  \n    <div class=\"producttablediv\">\n    <div class=\"producttable\">\n      <table>\n      <thead>\n          <tr>\n              <th>Request </th>\n              \n           \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of requestsLog\">\n              <td>{{ item }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n  \n  ",
          styleUrls: ['./allrequests.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alltransactions/alltransactions.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/alltransactions/alltransactions.component.ts ***!
    \**************************************************************/

  /*! exports provided: AlltransactionsComponent */

  /***/
  function srcAppAlltransactionsAlltransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlltransactionsComponent", function () {
      return AlltransactionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/superuser.service */
    "./src/app/services/superuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["", "transactiondetails"];
    };

    var _c1 = function _c1(a0) {
      return {
        id: a0
      };
    };

    function AlltransactionsComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View Items");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.farmer.firstName + " " + item_r1.farmer.lastName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.farmer.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rating: ", item_r1.farmer.rating, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.customer.firstName + " " + item_r1.customer.lastName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.customer.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.status, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, item_r1._id));
      }
    }

    var AlltransactionsComponent = /*#__PURE__*/function () {
      function AlltransactionsComponent(appStore, superuserservice, router) {
        _classCallCheck(this, AlltransactionsComponent);

        this.appStore = appStore;
        this.superuserservice = superuserservice;
        this.router = router;
      }

      _createClass(AlltransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.onGetTransactions();
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }, {
        key: "onGetTransactions",
        value: function onGetTransactions() {
          var _this7 = this;

          this.superuserservice.getTransactions().subscribe(function (response) {
            console.log('from Transactions response: ', response);
            _this7.orders = response;
          });
        }
      }]);

      return AlltransactionsComponent;
    }();

    AlltransactionsComponent.ɵfac = function AlltransactionsComponent_Factory(t) {
      return new (t || AlltransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AlltransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlltransactionsComponent,
      selectors: [["app-alltransactions"]],
      decls: 18,
      vars: 2,
      consts: [[3, "navToken", "logoutEvent"], [1, "producttablediv"], [1, "producttable"], [4, "ngFor", "ngForOf"], [3, "routerLink", "state"]],
      template: function AlltransactionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function AlltransactionsComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order ID#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Merchant Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AlltransactionsComponent_tr_17_Template, 19, 12, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["div.producttablediv[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n\r\n  div.producttable[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n\r\n  div.addaproduct[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  div.addaproduct2[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(247, 227, 165);\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color: #39793b;\r\n    color: white;\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    \r\n  }\r\n\r\n  button.user[_ngcontent-%COMP%]{\r\n    background-color: rgb(158, 65, 3);\r\n    float: left;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n    \r\n  }\r\n\r\n  button.activated[_ngcontent-%COMP%]{\r\n    background-color: rgb(11, 90, 47);\r\n    float: center;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n  }\r\n\r\n  button.deactivated[_ngcontent-%COMP%]{\r\n    background-color: rgb(131, 106, 89);\r\n    float: center;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n    \r\n  }\r\n\r\n  a.edit[_ngcontent-%COMP%]{\r\n    background-color: steelblue;\r\n    float: left;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    border-radius: 1px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]{\r\n      border-spacing: 0px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  a.addproduct[_ngcontent-%COMP%]{\r\n    background-color: rgb(188, 154, 243);\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    text-decoration: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsdHJhbnNhY3Rpb25zL2FsbHRyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUk7UUFDSSxrQkFBa0I7SUFDdEI7O0VBRUY7SUFDRSxzRUFBc0U7SUFDdEUseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7O0VBRUE7TUFDSSxvQ0FBb0M7RUFDeEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7O0VBRWY7O0VBRUU7SUFDQSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGNBQWM7SUFDZCxzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCOztFQUVwQjs7RUFHRTtJQUNBLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsY0FBYztJQUNkLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLG1CQUFtQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzRUFBc0U7SUFDdEUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWxsdHJhbnNhY3Rpb25zL2FsbHRyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4gICAgZGl2LnByb2R1Y3R0YWJsZWRpdntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gIGRpdi5wcm9kdWN0dGFibGV7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBkaXYuYWRkYXByb2R1Y3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGRpdi5hZGRhcHJvZHVjdDJ7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0dGFibGUgdHI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMjcsIDE2NSk7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdHRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3OTNiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3R0YWJsZSB0ZCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICAgYnV0dG9uLnVzZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCA2NSwgMyk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5hY3RpdmF0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDkwLCA0Nyk7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNlNWVlZTc7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5kZWFjdGl2YXRlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDEwNiwgODkpO1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG4gICAgYS5lZGl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2U1ZWVlNztcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxle1xyXG4gICAgICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgaDF7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIGEuYWRkcHJvZHVjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDE1NCwgMjQzKTtcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlltransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alltransactions',
          template: "\n  <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n\n  <div class=\"producttablediv\">\n    <div class=\"producttable\">\n      <table>\n      <thead>\n          <tr>\n              <th>Order ID#</th>\n              <th>Merchant Information</th>\n              <th>Customer Information</th>\n              <th>Status</th>\n              <th>Action</th>\n           \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of orders\">\n              <td>{{ item._id}}</td>\n              <td>\n                  {{ item.farmer.firstName + ' ' + item.farmer.lastName}} <br>\n                  {{item.farmer.email}} <br>\n                  Rating: {{item.farmer.rating}}\n              </td>\n              <td>\n                  {{ item.customer.firstName + ' ' + item.customer.lastName}} <br>\n                  {{item.customer.email}}\n              </td>\n              <td>\n                  {{ item.status}} <br>\n              </td>\n              <td>\n                  <button [routerLink]=\"['', 'transactiondetails']\" [state]= \"{id: item._id}\" >View Items</button>\n              </td>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n\n  \n  ",
          styleUrls: ['./alltransactions.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'FarmerFrontEnd';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <router-outlet></router-outlet>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! redux */
    "./node_modules/redux/es/redux.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _testcomponent_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./testcomponent/test.component */
    "./src/app/testcomponent/test.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/add-product/add-product.component.ts");
    /* harmony import */


    var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./edit-product/edit-product.component */
    "./src/app/edit-product/edit-product.component.ts");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./edit-order/edit-order.component */
    "./src/app/edit-order/edit-order.component.ts");
    /* harmony import */


    var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./adminlogin/adminlogin.component */
    "./src/app/adminlogin/adminlogin.component.ts");
    /* harmony import */


    var _allaccounts_allaccounts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./allaccounts/allaccounts.component */
    "./src/app/allaccounts/allaccounts.component.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _rootReducer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./rootReducer */
    "./src/app/rootReducer.ts");
    /* harmony import */


    var _alltransactions_alltransactions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./alltransactions/alltransactions.component */
    "./src/app/alltransactions/alltransactions.component.ts");
    /* harmony import */


    var _allrequests_allrequests_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./allrequests/allrequests.component */
    "./src/app/allrequests/allrequests.component.ts");
    /* harmony import */


    var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./resetpassword/resetpassword.component */
    "./src/app/resetpassword/resetpassword.component.ts");
    /* harmony import */


    var _resetcustomerpassword_resetcustomerpassword_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./resetcustomerpassword/resetcustomerpassword.component */
    "./src/app/resetcustomerpassword/resetcustomerpassword.component.ts");
    /* harmony import */


    var _transactiondetails_transactiondetails_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./transactiondetails/transactiondetails.component */
    "./src/app/transactiondetails/transactiondetails.component.ts");

    var appStore = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_31__["default"]);
    var MY_ROUTES = [{
      path: 'farmer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | farmer-farmer-module */
        "farmer-farmer-module").then(__webpack_require__.bind(null,
        /*! ./farmer/farmer.module */
        "./src/app/farmer/farmer.module.ts")).then(function (m) {
          return m.FarmerModule;
        });
      }
    }, {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
    }, {
      path: 'signin',
      component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
    }, {
      path: 'products',
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'addproduct',
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__["AddProductComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'editproduct',
      component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["EditProductComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'orders',
      component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__["OrdersComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'editorder',
      component: _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_19__["EditOrderComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]]
    }, {
      path: 'adminlogin',
      component: _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_20__["AdminloginComponent"]
    }, {
      path: 'allaccounts',
      component: _allaccounts_allaccounts_component__WEBPACK_IMPORTED_MODULE_21__["AllaccountsComponent"]
    }, {
      path: 'alltransactions',
      component: _alltransactions_alltransactions_component__WEBPACK_IMPORTED_MODULE_32__["AlltransactionsComponent"]
    }, {
      path: 'allrequests',
      component: _allrequests_allrequests_component__WEBPACK_IMPORTED_MODULE_33__["AllrequestsComponent"]
    }, {
      path: 'resetpassword',
      component: _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_34__["ResetpasswordComponent"]
    }, {
      path: 'resetcustomerpassword',
      component: _resetcustomerpassword_resetcustomerpassword_component__WEBPACK_IMPORTED_MODULE_35__["ResetcustomerpasswordComponent"]
    }, {
      path: 'transactiondetails',
      component: _transactiondetails_transactiondetails_component__WEBPACK_IMPORTED_MODULE_36__["TransactiondetailsComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: 'AppStore',
        useValue: appStore
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(MY_ROUTES, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"]
      }), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}, {}), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _testcomponent_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__["OrdersComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["EditProductComponent"], _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_19__["EditOrderComponent"], _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_20__["AdminloginComponent"], _allaccounts_allaccounts_component__WEBPACK_IMPORTED_MODULE_21__["AllaccountsComponent"], _alltransactions_alltransactions_component__WEBPACK_IMPORTED_MODULE_32__["AlltransactionsComponent"], _allrequests_allrequests_component__WEBPACK_IMPORTED_MODULE_33__["AllrequestsComponent"], _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_34__["ResetpasswordComponent"], _resetcustomerpassword_resetcustomerpassword_component__WEBPACK_IMPORTED_MODULE_35__["ResetcustomerpasswordComponent"], _transactiondetails_transactiondetails_component__WEBPACK_IMPORTED_MODULE_36__["TransactiondetailsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _testcomponent_test_component__WEBPACK_IMPORTED_MODULE_14__["TestComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__["OrdersComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__["AddProductComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["EditProductComponent"], _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_19__["EditOrderComponent"], _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_20__["AdminloginComponent"], _allaccounts_allaccounts_component__WEBPACK_IMPORTED_MODULE_21__["AllaccountsComponent"], _alltransactions_alltransactions_component__WEBPACK_IMPORTED_MODULE_32__["AlltransactionsComponent"], _allrequests_allrequests_component__WEBPACK_IMPORTED_MODULE_33__["AllrequestsComponent"], _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_34__["ResetpasswordComponent"], _resetcustomerpassword_resetcustomerpassword_component__WEBPACK_IMPORTED_MODULE_35__["ResetcustomerpasswordComponent"], _transactiondetails_transactiondetails_component__WEBPACK_IMPORTED_MODULE_36__["TransactiondetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(MY_ROUTES, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"]
          }), _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}, {}), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_22__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [{
            provide: 'AppStore',
            useValue: appStore
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-order/edit-order.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/edit-order/edit-order.component.ts ***!
    \****************************************************/

  /*! exports provided: EditOrderComponent */

  /***/
  function srcAppEditOrderEditOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOrderComponent", function () {
      return EditOrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/farmer.service */
    "./src/app/services/farmer.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditOrderComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.qty);
      }
    }

    function EditOrderComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "When will this order be ready? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditOrderComponent_div_29_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onReady();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ready ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.dateForm);
      }
    }

    function EditOrderComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditOrderComponent_ng_template_30_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onComplete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Complete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EditOrderComponent = /*#__PURE__*/function () {
      function EditOrderComponent(appStore, formBuilder, farmerService, router) {
        _classCallCheck(this, EditOrderComponent);

        this.appStore = appStore;
        this.formBuilder = formBuilder;
        this.farmerService = farmerService;
        this.router = router;
        console.log("this.router.getCurrentNavigation().extras.state: ", this.router.getCurrentNavigation().extras.state);
        console.log('hello1');

        if (this.router.getCurrentNavigation().extras.state) {
          this.orderId = this.router.getCurrentNavigation().extras.state.id;
          localStorage.setItem('orderId', this.orderId);
        } else {
          this.orderId = localStorage.getItem('orderId');
        }

        this.dateForm = formBuilder.group({
          "readydate": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(EditOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.farmerService.getOrder(this.orderId).subscribe(function (response) {
            console.log("getOrder Response: ", response);
            _this8.order = response;
            console.log("this.order.products: ", _this8.order.products);
            _this8.priceTotal = _this8.calcTotal();
            console.log("this.priceTotal: ", _this8.priceTotal);
          });
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          localStorage.removeItem('orderId');
          this.router.navigate([""]);
        }
      }, {
        key: "calcTotal",
        value: function calcTotal() {
          var total = 0;

          var _iterator = _createForOfIteratorHelper(this.order.products),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              total = total + item.price * item.qty;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return total;
        }
      }, {
        key: "onReady",
        value: function onReady() {
          var _this9 = this;

          console.log('onReady()');
          console.log("this.dateForm.value: ", this.dateForm.value);
          var readydate = this.dateForm.value.readydate;
          var body = {
            status: 'ready',
            readydate: readydate
          };
          console.log('body: ', body);
          this.farmerService.updateOrderStatus(this.orderId, body).subscribe(function (response) {
            console.log('onReady response: ', response);
            localStorage.removeItem('orderId');

            _this9.router.navigate(['orders']);
          });
        }
      }, {
        key: "onComplete",
        value: function onComplete() {
          var _this10 = this;

          console.log('onComplete()');
          var body = {
            status: 'complete'
          };
          this.farmerService.updateOrderStatus(this.orderId, body).subscribe(function (response) {
            console.log('onReady response, should be "complete": ', response);
            localStorage.removeItem('orderId');

            _this10.router.navigate(['orders']);
          });
        }
      }]);

      return EditOrderComponent;
    }();

    EditOrderComponent.ɵfac = function EditOrderComponent_Factory(t) {
      return new (t || EditOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditOrderComponent,
      selectors: [["app-edit-order"]],
      decls: 32,
      vars: 10,
      consts: [[3, "navToken", "logoutEvent"], [1, "ordertablediv"], [1, "ordertable"], [4, "ngFor", "ngForOf"], [1, "ordertotal"], [4, "ngIf", "ngIfElse"], ["complete", ""], [3, "formGroup"], ["for", "readydate"], ["type", "date", "id", "readydate", "name", "readydate", "formControlName", "readydate"], [1, "ready"], [1, "readybutton"], [1, "ready", 3, "click"], [1, "complete", 3, "click"]],
      template: function EditOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this is edit order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function EditOrderComponent_Template_app_nav_bar_logoutEvent_2_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditOrderComponent_tr_26_Template, 7, 3, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EditOrderComponent_div_29_Template, 9, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EditOrderComponent_ng_template_30_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order ID: ", ctx.order._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status: ", ctx.order.status, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Customer Name: ", ctx.order.customer.firstName, " ", ctx.order.customer.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Customer E-mail: ", ctx.order.customer.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Order total: $ ", ctx.priceTotal, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.order.status == "pending")("ngIfElse", _r2);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["p[_ngcontent-%COMP%]{\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 15px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.ordertotal[_ngcontent-%COMP%]{\r\n  margin-top:  25px;\r\n  font-size: 25px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 15px;\r\n  margin-left: 10px;\r\n}\r\n\r\ndiv.ready[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  box-sizing: content-box;\r\n}\r\n\r\ndiv.readybutton[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin: 20px\r\n}\r\n\r\ndiv.ordertable[_ngcontent-%COMP%]{\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  border-collapse: collapse;\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n  margin-right: auto;\r\n  \r\n}\r\n\r\n.ordertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(247, 227, 165);\r\n}\r\n\r\n.ordertable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  \r\n  text-align: center;\r\n  background-color: #39793b;\r\n  color: white;\r\n}\r\n\r\n.ordertable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 10px;\r\n}\r\n\r\nbutton.delete[_ngcontent-%COMP%]{\r\n  background-color: rgb(158, 65, 3);\r\n  float: right;\r\n  color: #e5eee7;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  margin: 5px;\r\n  border: 5px;\r\n  padding: 5px;\r\n  padding-left: 7px;\r\n  padding-right: 7px;\r\n  padding-bottom: 8px;\r\n  border-radius: 1px;\r\n  \r\n}\r\n\r\na.edit[_ngcontent-%COMP%]{\r\n  background-color: steelblue;\r\n  float: left;\r\n  color: #e5eee7;\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  font-size: 15px;\r\n  margin: 5px;\r\n  border: 5px;\r\n  padding: 5px;\r\n  padding-left: 7px;\r\n  padding-right: 7px;\r\n  border-radius: 1px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n    border-spacing: 0px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    margin-left: 10px;\r\n  }\r\n\r\nbutton.ready[_ngcontent-%COMP%]{\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 15px;\r\n  width: 100px;\r\n  height: 50px;\r\n  padding-bottom: 3px;\r\n  color: white;\r\n  background-color:#39793b ;\r\n  border-radius: 5px;\r\n  transition-duration: 0.4s;\r\n\r\n  border: 2px;\r\n  border-style: solid;\r\n  border-color: rgba(83, 85, 92, 0.973);\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1vcmRlci9lZGl0LW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0VBQXNFO0VBQ3RFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNFQUFzRTtFQUN0RSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usc0VBQXNFO0VBQ3RFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBR0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9COztFQUVwQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUU7RUFDQSxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGNBQWM7RUFDZCxzRUFBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOztBQUVFO0VBQ0EsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsc0VBQXNFO0VBQ3RFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksV0FBVztJQUNYLHNFQUFzRTtJQUN0RSxpQkFBaUI7RUFDbkI7O0FBRUY7RUFDRSxzRUFBc0U7RUFDdEUsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7RUFFekIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixxQ0FBcUM7O0FBRXZDIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1vcmRlci9lZGl0LW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxucHtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm9yZGVydG90YWx7XHJcbiAgbWFyZ2luLXRvcDogIDI1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuZGl2LnJlYWR5e1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuZGl2LnJlYWR5YnV0dG9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHhcclxufVxyXG5cclxuZGl2Lm9yZGVydGFibGV7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgXHJcbn1cclxuXHJcblxyXG4ub3JkZXJ0YWJsZSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMjcsIDE2NSk7XHJcbn1cclxuXHJcbi5vcmRlcnRhYmxlIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NzkzYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vcmRlcnRhYmxlIHRkLCB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4gIGJ1dHRvbi5kZWxldGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgNjUsIDMpO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI2U1ZWVlNztcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBcclxufVxyXG5cclxuICBhLmVkaXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjZTVlZWU3O1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxufVxyXG5cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuYnV0dG9uLnJlYWR5e1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMzk3OTNiIDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgYm9yZGVyOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoODMsIDg1LCA5MiwgMC45NzMpO1xyXG4gIFxyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-order',
          template: "\n    <p>this is edit order</p>\n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n    <h1>Order Details </h1>\n    <p>\n    Order ID: {{this.order._id}}<br>\n    Status: {{this.order.status}}<br><br>\n    Customer Name: {{this.order.customer.firstName}} {{this.order.customer.lastName}} <br>\n    Customer E-mail: {{this.order.customer.email}}\n    </p>\n\n    <div class=\"ordertablediv\">\n  <div class=\"ordertable\">\n    <table>\n    <thead>\n         <tr>\n            <th>Product</th>\n            <th>Price</th>\n            <th>Quantity</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let item of this.order.products\">\n            <td>{{ item.productName }}</td>\n            <td>{{ item.price }}</td>\n            <td>{{ item.qty }}</td>\n         </tr>\n      </tbody>\n    </table>\n  </div>\n  </div>\n\n  <p class=\"ordertotal\">Order total: $ {{priceTotal}}</p>\n\n  <div *ngIf=\"order.status == 'pending'; else complete\">\n\n  \n    <form [formGroup]=\"dateForm\">\n      <label for=\"readydate\">When will this order be ready? </label>\n      <input type=\"date\" id=\"readydate\" name=\"readydate\" formControlName=\"readydate\">\n    </form>\n\n    <div class=\"ready\">\n      <div class=\"readybutton\">\n        <button class=\"ready\" (click)=\"onReady()\"> Ready </button>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #complete>\n    <div class=\"ready\">\n      <button class=\"complete\" (click)=\"onComplete()\"> Complete </button>\n    </div>\n  </ng-template>\n\n  ",
          styleUrls: ['./edit-order.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-product/edit-product.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-product/edit-product.component.ts ***!
    \********************************************************/

  /*! exports provided: EditProductComponent */

  /***/
  function srcAppEditProductEditProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductComponent", function () {
      return EditProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/farmer.service */
    "./src/app/services/farmer.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var EditProductComponent = /*#__PURE__*/function () {
      function EditProductComponent(appStore, formBuilder, farmerService, router) {
        _classCallCheck(this, EditProductComponent);

        this.appStore = appStore;
        this.formBuilder = formBuilder;
        this.farmerService = farmerService;
        this.router = router;

        if (this.router.getCurrentNavigation().extras.state) {
          this.productId = this.router.getCurrentNavigation().extras.state.id;
          localStorage.setItem('productId', this.productId);
        } else {
          this.productId = localStorage.getItem('productId');
        }

        this.editProductForm = formBuilder.group({
          "productName": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "price": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "qty": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(EditProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.farmerService.getProduct(this.productId).subscribe(function (response) {
            console.log("Response: ", response);
            var product = response.product;

            _this11.editProductForm.get("productName").setValue(product.productName);

            _this11.editProductForm.get("price").setValue(product.price);

            _this11.editProductForm.get("qty").setValue(product.qty);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          var productFormInfo = this.editProductForm.value;
          console.log("productFormInfo: ", productFormInfo);
          var productBody = Object.assign(Object.assign({}, productFormInfo), {
            _id: this.productId
          });
          this.farmerService.editProduct(productBody).subscribe(function (response) {
            console.log('editProduct Response: ', response);
            localStorage.removeItem('productId');

            _this12.router.navigate(["products"]);
          });
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          localStorage.removeItem('productId');
          this.token = '';
          this.router.navigate([""]);
        }
      }]);

      return EditProductComponent;
    }();

    EditProductComponent.ɵfac = function EditProductComponent_Factory(t) {
      return new (t || EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditProductComponent,
      selectors: [["app-edit-product"]],
      decls: 22,
      vars: 2,
      consts: [[3, "navToken", "logoutEvent"], [3, "formGroup", "ngSubmit"], ["for", "productName"], ["type", "text", "id", "productName", "formControlName", "productName", 1, "form-control"], ["for", "price"], ["type", "number", "id", "price", "formControlName", "price", "step", "any", "min", "1", 1, "form-control"], ["for", "qty"], ["type", "number", "id", "qty", "formControlName", "qty", 1, "form-control"], ["type", "submit"]],
      template: function EditProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "this is edit product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function EditProductComponent_Template_app_nav_bar_logoutEvent_2_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditProductComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Price: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quantity: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Update!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editProductForm);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  input[type=number][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n  \r\n  input[type=number][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 18px;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 5px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%]{\r\n      background-color: rgb(231, 224, 214);\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      color:#39793b;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 100px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n\r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color:#274e27 ;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]{\r\n      margin-top: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFFekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtNQUNJLHNFQUFzRTtNQUN0RSxlQUFlO0VBQ25COztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLFlBQVk7RUFDaEI7O0VBRUE7TUFDSSxvQ0FBb0M7RUFDeEM7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsc0VBQXNFO01BQ3RFLGFBQWE7RUFDakI7O0VBRUE7SUFDRSxzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5Qjs7SUFFekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQyNGU0MjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQyNGU0MjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM5NzkzYjtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk3OTNiO1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIGRpdntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICBib2R5e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMjQsIDIxNCk7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICBjb2xvcjojMzk3OTNiO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzOTc5M2IgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgICBib3JkZXI6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoODMsIDg1LCA5MiwgMC45NzMpO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbmJ1dHRvbiA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNzRlMjcgO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbmJ1dHRvbntcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-product',
          template: "\n    <p>this is edit product</p>\n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n    <div>\n      <form [formGroup]=\"editProductForm\" (ngSubmit)=\"onSubmit()\" >\n\n        <div>\n          <label for=\"productName\">Product Name: </label> <br>\n          <input type=\"text\" class=\"form-control\" id=\"productName\" formControlName=\"productName\">\n        </div>\n        <div>\n          <label for=\"price\">Price: </label> <br>\n          <input type=\"number\" class=\"form-control\" id=\"price\" formControlName=\"price\" step=\"any\" min=\"1\">\n        </div>\n        <div>\n          <label for=\"qty\">Quantity: </label> <br>\n          <input type=\"number\" class=\"form-control\" id=\"qty\" formControlName=\"qty\">\n        </div>\n\n        <button type=\"submit\">Update!</button>\n\n      </form>\n    </div>\n\n\n\n\n  \n  ",
          styleUrls: ['./edit-product.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(appStore, router) {
        _classCallCheck(this, AuthGuard);

        this.appStore = appStore;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.appStore.getState().token) {
            return true;
          } else if (localStorage.getItem('token')) {
            return true;
          } else {
            this.router.navigate(['signin']);
          }
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate(component, currentRoute, currentState, nextState) {
          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    function HomeComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome! You're logged in. Feel free to view your orders or product inventory.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_0_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to the Administrator Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-nav-bar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function HomeComponent_div_0_Template_app_nav_bar_logoutEvent_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.parentLogOut($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_0_div_2_Template, 3, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_0_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx_r0.token);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.role == "farmer")("ngIfElse", _r4);
      }
    }

    var _c0 = function _c0() {
      return ["signup"];
    };

    var _c1 = function _c1() {
      return ["signin"];
    };

    function HomeComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Simply Fresh");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi there, Farmer. Selling your goods just got easier. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sign Up!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sign In!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    } // interface ITokenObject {
    //   token: string,
    //   userInfo: IUser
    // }
    // SHAWN READ THIS WHEN YOU WAKE UP. You start with the first bullet point for Super user requirement. You have to change what the links do in the NavBar. Use NgIf. 


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(appStore, router) {
        _classCallCheck(this, HomeComponent);

        this.appStore = appStore;
        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
            console.log('this.appStore.getState().token: ', this.appStore.getState().token);
            this.roleAssign();
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
            this.roleAssign();
          } // this might be your logout issue here. Fix it.
          // const user: IUser = jwt_decode(this.token)
          // console.log('user: ', user.farmer)
          // this.role = user.farmer.role
          // console.log('this.role: ', this.role)

        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate(['']);
        }
      }, {
        key: "roleAssign",
        value: function roleAssign() {
          var user = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(this.token);
          console.log('user: ', user.farmer);
          this.role = user.farmer.role;
          console.log('this.role: ', this.role);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["signin", ""], [3, "navToken", "logoutEvent"], ["administrator", ""], [1, "welcome"], [1, "center"], [1, "title"], [1, "caption"], [1, "buttoncenter"], [1, "sign-up", 3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 5, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_1_Template, 13, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.token)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["p.title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    \r\n    color: green;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 80px;\r\n    padding: 20px;\r\n}\r\n\r\np.welcome[_ngcontent-%COMP%]{\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 24px;\r\n    padding: 20px;\r\n    color: #39793b;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    line-height: 200px;\r\n    margin: auto;\r\n    height: 200px;\r\n    width: 50%;\r\n    padding: 10px;\r\n  }\r\n\r\n.buttoncenter[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n\r\n.caption[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: green;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; \r\n    font-size: 20px;\r\n    padding: 0px;\r\n \r\n}\r\n\r\nbutton.sign-up[_ngcontent-%COMP%] {\r\n    background-color: #39793b; \r\n    border: none;\r\n    border-radius: 5px;\r\n    margin: 5px;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  background-color: rgb(231, 224, 214)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxzRUFBc0U7SUFDcEUsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7RUFDZjs7QUFFRjtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0hBQXNIO0lBQ3RILGVBQWU7SUFDZixZQUFZOztBQUVoQjs7QUFHQTtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTs7QUFFbkI7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnAud2VsY29tZXtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiAjMzk3OTNiO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4uYnV0dG9uY2VudGVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmNhcHRpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmOyBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuIFxyXG59XHJcblxyXG5cclxuYnV0dG9uLnNpZ24tdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5NzkzYjsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjI0LCAyMTQpXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          template: "\n\n    <div *ngIf=\"token; else signin\">\n\n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n          <div *ngIf=\"role == 'farmer'; else administrator\" >\n            <p class=\"welcome\">Welcome! You're logged in. Feel free to view your orders or product inventory.</p>\n          </div>\n\n          <ng-template #administrator>\n          <p class=\"welcome\">Welcome to the Administrator Dashboard</p>\n          </ng-template>\n\n    </div>\n    <ng-template #signin>\n      <body>\n    <div class=\"center\">\n        <p class=\"title\">Simply Fresh<p>\n        <p class=\"caption\">Hi there, Farmer. Selling your goods just got easier. <p>\n    </div>\n    <div class=\"buttoncenter\">\n        <button class=\"sign-up\" [routerLink]=\"['signup']\"> Sign Up!</button>\n        <button class=\"sign-up\" [routerLink]=\"['signin']\"> Sign In!</button>\n    </div>\n</body>\n    </ng-template>\n\n  ",
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var _c1 = function _c1() {
      return ["", "orders"];
    };

    var _c2 = function _c2() {
      return ["", "products"];
    };

    function NavBarComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Simply Fresh.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_0_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx_r0.farmerInfo.farmer.firstName, "!");
      }
    }

    var _c3 = function _c3() {
      return ["", "allaccounts"];
    };

    var _c4 = function _c4() {
      return ["", "alltransactions"];
    };

    var _c5 = function _c5() {
      return ["", "allrequests"];
    };

    function NavBarComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Simply Fresh.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View All Accounts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View All Transactions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View All Requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_template_1_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx_r2.farmerInfo.farmer.firstName, "!");
      }
    }

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent(appStore) {
        _classCallCheck(this, NavBarComponent);

        this.appStore = appStore;
        this.logoutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.farmerInfo = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(this.navToken);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.logoutEvent.emit();
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'));
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      inputs: {
        navToken: "navToken"
      },
      outputs: {
        logoutEvent: "logoutEvent"
      },
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["administrator", ""], [1, "topnav"], [1, "active", 3, "routerLink"], [3, "routerLink"], [1, "container"], [1, "user"], [1, "logout", 3, "click"], [1, "admintopnav"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavBarComponent_div_0_Template, 13, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_ng_template_1_Template, 14, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.farmerInfo.farmer.role == "farmer")("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #39793b;\r\n    color: white;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]{\r\n      float: right;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: #e5eee7;\r\n    background-color: rgb(110, 9, 9) ;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 0px;\r\n    border: 5px;\r\n    margin-right: 3px;\r\n    margin-top: 1px;\r\n    border-radius: 6px;\r\n  }\r\n  \r\n  .topnav[_ngcontent-%COMP%]   p.user[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    margin-bottom: 0px;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color:  #333;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: #2f0f4d;\r\n    color: white;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%]   div.container[_ngcontent-%COMP%]{\r\n      float: right;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%]   button.logout[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: #e5eee7;\r\n    background-color: rgb(110, 9, 9) ;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 0px;\r\n    border: 5px;\r\n    margin-right: 3px;\r\n    margin-top: 1px;\r\n    border-radius: 6px;\r\n  }\r\n  \r\n  .admintopnav[_ngcontent-%COMP%]   p.user[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    margin-bottom: 0px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1Qsc0VBQXNFO0VBQ3hFOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzRUFBc0U7RUFDeEU7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFHQTtNQUNJLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGlDQUFpQztJQUNqQyxzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQVlBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzRUFBc0U7RUFDeEU7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFHQTtNQUNJLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGlDQUFpQztJQUNqQyxzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTc5M2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRvcG5hdiBkaXYuY29udGFpbmVye1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAudG9wbmF2IGJ1dHRvbi5sb2dvdXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2U1ZWVlNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDksIDkpIDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlcjogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICAudG9wbmF2IHAudXNlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLmFkbWludG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzMzMztcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZG1pbnRvcG5hdiBidXR0b24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5hZG1pbnRvcG5hdiBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZG1pbnRvcG5hdiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZG1pbnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYwZjRkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5hZG1pbnRvcG5hdiBkaXYuY29udGFpbmVye1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuYWRtaW50b3BuYXYgYnV0dG9uLmxvZ291dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgOSwgOSkgO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG4gIC5hZG1pbnRvcG5hdiBwLnVzZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          template: "\n  \n<div *ngIf=\"farmerInfo.farmer.role == 'farmer'; else administrator\">\n\n  <div class=\"topnav\">\n    <a class=\"active\" [routerLink]=\"['']\">Simply Fresh.</a>\n\n    <a [routerLink]=\"['','orders']\">My Orders</a>\n    <a [routerLink]=\"['','products']\">My Products</a>\n  \n\n    <div class=\"container\">\n      <p class=\"user\">Hi {{farmerInfo.farmer.firstName}}!</p>\n      <button class=\"logout\" (click)=onLogout()>Logout</button>\n    </div>\n\n  </div>\n\n</div>\n\n<ng-template #administrator>\n\n<div class=\"admintopnav\">\n    <a class=\"active\" [routerLink]=\"['']\">Simply Fresh.</a>\n\n\n\n    <a [routerLink]=\"['','allaccounts']\">View All Accounts</a>\n    <a [routerLink]=\"['','alltransactions']\">View All Transactions</a>\n    <a [routerLink]=\"['','allrequests']\">View All Requests</a>\n  \n\n    <div class=\"container\">\n      <p class=\"user\">Hi {{farmerInfo.farmer.firstName}}!</p>\n      <button class=\"logout\" (click)=onLogout()>Logout</button>\n    </div>\n\n  </div>\n\n</ng-template>\n\n\n\n\n  ",
          styleUrls: ['./nav-bar.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }];
      }, {
        navToken: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        logoutEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/farmer.service */
    "./src/app/services/farmer.service.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["", "editorder"];
    };

    var _c1 = function _c1(a0) {
      return {
        id: a0
      };
    };

    function OrdersComponent_tr_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.customer.firstName + " " + item_r1.customer.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, item_r1._id));
      }
    }

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(appStore, router, farmerService) {
        _classCallCheck(this, OrdersComponent);

        this.appStore = appStore;
        this.router = router;
        this.farmerService = farmerService;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          console.log('orders ');
          this.farmerService.getOrders().subscribe(function (response) {
            _this13.orders = response; // console.log('RESPONSE: ', response)
            // console.log("this.orders[0]._id: ", this.orders[0]._id)
          });
        }
      }, {
        key: "onViewByStatus",
        value: function onViewByStatus(status) {
          var _this14 = this;

          this.farmerService.viewOrderByStatus(status).subscribe(function (response) {
            console.log(response);
            _this14.orders = response;
          });
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["app-orders"]],
      decls: 25,
      vars: 2,
      consts: [[3, "navToken", "logoutEvent"], [1, "statusbuttons"], [1, "statusbutton", 3, "click"], [1, "producttablediv"], [1, "producttable"], [4, "ngFor", "ngForOf"], [1, "edit", 3, "routerLink", "state"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function OrdersComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View Orders by Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_3_listener() {
            return ctx.onViewByStatus("pending");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_5_listener() {
            return ctx.onViewByStatus("ready");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ready");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_button_click_7_listener() {
            return ctx.onViewByStatus("complete");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Order Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrdersComponent_tr_24_Template, 10, 8, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["div.producttablediv[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  div.producttable[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n\r\n  div.statusbuttons[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    text-align: center;\r\n    margin: 10px;\r\n   \r\n  }\r\n\r\n  button.statusbutton[_ngcontent-%COMP%]{\r\n    background-color: rgb(80, 78, 179);\r\n  \r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    margin-bottom: 13px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n\r\n    border-radius: 1px;\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(247, 227, 165);\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color: #39793b;\r\n    color: white;\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n  }\r\n\r\n  button.delete[_ngcontent-%COMP%]{\r\n    background-color: rgb(158, 65, 3);\r\n    float: right;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n    \r\n  }\r\n\r\n  a.edit[_ngcontent-%COMP%]{\r\n      background-color: steelblue;\r\n      float: left;\r\n      color: #e5eee7;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      text-align: center;\r\n      text-decoration: none;\r\n      font-size: 15px;\r\n      margin: 5px;\r\n      border: 5px;\r\n      padding: 5px;\r\n      padding-left: 7px;\r\n      padding-right: 7px;\r\n      border-radius: 1px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]{\r\n    border-spacing: 0px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    margin-left: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNFQUFzRTtJQUN0RSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0Usc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTs7RUFFZDs7RUFFQTtJQUNFLGtDQUFrQzs7SUFFbEMsY0FBYztJQUNkLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0VBQ3BCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7O0VBRUU7SUFDQSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGNBQWM7SUFDZCxzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0VBRXBCOztFQUVFO01BQ0UsMkJBQTJCO01BQzNCLFdBQVc7TUFDWCxjQUFjO01BQ2Qsc0VBQXNFO01BQ3RFLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO0VBQ3RCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNFQUFzRTtJQUN0RSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBkaXYucHJvZHVjdHRhYmxlZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgZGl2LnByb2R1Y3R0YWJsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGRpdi5zdGF0dXNidXR0b25ze1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgXHJcbiAgfVxyXG5cclxuICBidXR0b24uc3RhdHVzYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA3OCwgMTc5KTtcclxuICBcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgIGJvcmRlcjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3R0YWJsZSB0cjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIyNywgMTY1KTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0dGFibGUgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTc5M2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdHRhYmxlIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gICAgYnV0dG9uLmRlbGV0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTgsIDY1LCAzKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgICBhLmVkaXR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgYm9yZGVyOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIH1cclxuICBcclxuICB0YWJsZXtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orders',
          template: "\n    \n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n\n  <div class=\"statusbuttons\">\n      \n        View Orders by Status: \n        <button class=\"statusbutton\" (click)=\"onViewByStatus('pending')\" >Pending</button>\n        <button class=\"statusbutton\"  (click)=\"onViewByStatus('ready')\">Ready</button>\n        <button class=\"statusbutton\" (click)=\"onViewByStatus('complete')\">Complete</button>\n      \n  <div>\n\n\n    <div class=\"producttablediv\">\n  <div class=\"producttable\">\n    <table>\n    <thead>\n         <tr>\n            <th>Order Id</th>\n            <th>Order Status</th>\n            <th>Customer Name</th>\n            \n            \n            <th>Action</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let item of orders\">\n            <td>{{ item._id}}</td>\n            <td>{{ item.status }}</td>\n            <td>{{ item.customer.firstName + ' ' + item.customer.lastName}}</td>\n\n            <td>\n              <a class=\"edit\" [routerLink]=\"['','editorder']\" [state]=\"{id: item._id}\"> Edit </a>\n            </td>\n\n         </tr>\n      </tbody>\n    </table>\n  </div>\n  </div>\n\n\n  ",
          styleUrls: ['./orders.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_farmer_service__WEBPACK_IMPORTED_MODULE_2__["FarmerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_farmer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/farmer.service */
    "./src/app/services/farmer.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["", "editproduct"];
    };

    var _c1 = function _c1(a0) {
      return {
        id: a0
      };
    };

    function ProductsComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_tr_25_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onDelete(item_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.product.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.product.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.product.qty);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.farmer.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.farmer.rating);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, item_r1._id));
      }
    }

    var _c2 = function _c2() {
      return ["", "addproduct"];
    };

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(appStore, farmerService, router) {
        _classCallCheck(this, ProductsComponent);

        this.appStore = appStore;
        this.farmerService = farmerService;
        this.router = router;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.farmerService.getProducts().subscribe(function (response) {
            _this15.products = response; // console.log("this.products[0]._id: ", this.products[0]._id)
          });
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }, {
        key: "onDelete",
        value: function onDelete(productId) {
          var _this16 = this;

          console.log("onDelete productId: ", productId);
          this.farmerService.deleteProduct(productId).subscribe(function (response) {
            console.log('onDelete response: ', response);

            _this16.farmerService.getProducts().subscribe(function (response) {
              _this16.products = response;
            });
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_farmer_service__WEBPACK_IMPORTED_MODULE_1__["FarmerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 26,
      vars: 4,
      consts: [[3, "navToken", "logoutEvent"], [1, "addaproduct"], [1, "addproduct", 3, "routerLink"], [1, "producttablediv"], [1, "producttable"], [4, "ngFor", "ngForOf"], [1, "edit", 3, "routerLink", "state"], ["type", "button", 1, "delete", 3, "click"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function ProductsComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your product inventory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add a product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Merchant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Merchant Rating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductsComponent_tr_25_Template, 16, 10, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["div.producttablediv[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n\r\n  div.producttable[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n\r\n  div.addaproduct[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n  }\r\n\r\n  div.addaproduct2[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(247, 227, 165);\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color: #39793b;\r\n    color: white;\r\n  }\r\n\r\n  .producttable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    \r\n  }\r\n\r\n  button.delete[_ngcontent-%COMP%]{\r\n    background-color: rgb(158, 65, 3);\r\n    float: right;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n    \r\n  }\r\n\r\n  a.edit[_ngcontent-%COMP%]{\r\n    background-color: steelblue;\r\n    float: left;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    border-radius: 1px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]{\r\n      border-spacing: 0px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  a.addproduct[_ngcontent-%COMP%]{\r\n    background-color: rgb(188, 154, 243);\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    text-decoration: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztFQUVGO0lBQ0Usc0VBQXNFO0lBQ3RFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixhQUFhOztFQUVmOztFQUVFO0lBQ0EsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCOztFQUVwQjs7RUFFRTtJQUNBLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsY0FBYztJQUNkLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLG1CQUFtQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzRUFBc0U7SUFDdEUsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAgIGRpdi5wcm9kdWN0dGFibGVkaXZ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICBkaXYucHJvZHVjdHRhYmxle1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZGl2LmFkZGFwcm9kdWN0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBkaXYuYWRkYXByb2R1Y3Qye1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAucHJvZHVjdHRhYmxlIHRyOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjI3LCAxNjUpO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3R0YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5NzkzYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0dGFibGUgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAgIGJ1dHRvbi5kZWxldGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCA2NSwgMyk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2U1ZWVlNztcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gICAgYS5lZGl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2U1ZWVlNztcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxle1xyXG4gICAgICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgaDF7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIGEuYWRkcHJvZHVjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODgsIDE1NCwgMjQzKTtcclxuICAgIGNvbG9yOiAjZTVlZWU3O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          template: "\n \n  <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n  <h1>Your product inventory</h1>\n  <div class=\"addaproduct\">\n      <a class=\"addproduct\" [routerLink]=\"['', 'addproduct']\">Add a product</a>\n  </div>\n\n  <br>\n\n  <div class=\"producttablediv\">\n    <div class=\"producttable\">\n      <table>\n      <thead>\n          <tr>\n              <th>Product</th>\n              <th>Price</th>\n              <th>Quantity</th>\n              <th>Merchant</th>\n              <th>Merchant Rating</th>\n              \n              <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of products\">\n              <td>{{ item.product.productName }}</td>\n              <td>{{ item.product.price }}</td>\n              <td>{{ item.product.qty }}</td>\n              <td>{{ item.farmer.firstName }}</td>\n              <td>{{ item.farmer.rating}}</td>\n              <td>\n                <a [routerLink]=\"['', 'editproduct']\" class=\"edit\" [state]=\"{id: item._id}\">Edit</a>\n                <button type=\"button\" class=\"delete\" (click)=\"onDelete(item._id)\" >Delete</button>\n              </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n",
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _services_farmer_service__WEBPACK_IMPORTED_MODULE_1__["FarmerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resetcustomerpassword/resetcustomerpassword.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/resetcustomerpassword/resetcustomerpassword.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ResetcustomerpasswordComponent */

  /***/
  function srcAppResetcustomerpasswordResetcustomerpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetcustomerpasswordComponent", function () {
      return ResetcustomerpasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_superuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/superuser.service */
    "./src/app/services/superuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var ResetcustomerpasswordComponent = /*#__PURE__*/function () {
      function ResetcustomerpasswordComponent(appStore, superuserservice, formBuilder, router) {
        _classCallCheck(this, ResetcustomerpasswordComponent);

        this.appStore = appStore;
        this.superuserservice = superuserservice;
        this.formBuilder = formBuilder;
        this.router = router;

        if (this.router.getCurrentNavigation().extras.state) {
          this.customerId = this.router.getCurrentNavigation().extras.state.id;
          localStorage.setItem('customerId', this.customerId);
        } else {
          this.customerId = localStorage.getItem('customerId');
        }

        this.resetForm = formBuilder.group({
          "newPassword": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(ResetcustomerpasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.onGetCustomer(this.customerId);
        }
      }, {
        key: "onGetCustomer",
        value: function onGetCustomer(id) {
          var _this17 = this;

          this.superuserservice.getCustomer(id).subscribe(function (response) {
            console.log('onGetcustomer response: ', response);
            _this17.customer = response;
          });
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this18 = this;

          var resetFormVal = this.resetForm.value;
          console.log('resetFormVal: ', resetFormVal);
          this.superuserservice.changeCustPass(this.customerId, resetFormVal).subscribe(function (response) {
            console.log(response);

            _this18.router.navigate(['allaccounts']);
          });
        }
      }]);

      return ResetcustomerpasswordComponent;
    }();

    ResetcustomerpasswordComponent.ɵfac = function ResetcustomerpasswordComponent_Factory(t) {
      return new (t || ResetcustomerpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_superuser_service__WEBPACK_IMPORTED_MODULE_2__["SuperuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ResetcustomerpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetcustomerpasswordComponent,
      selectors: [["app-resetcustomerpassword"]],
      decls: 13,
      vars: 3,
      consts: [[3, "navToken", "logoutEvent"], [3, "formGroup", "ngSubmit"], ["for", "newPassword"], ["type", "text", "id", "newPassword", "formControlName", "newPassword", 1, "form-control"], [1, "signinbutton"], ["type", "submit"]],
      template: function ResetcustomerpasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function ResetcustomerpasswordComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetcustomerpasswordComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Change Password!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Change Password for ", ctx.customer.firstName + " " + ctx.customer.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetForm);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 18px;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 5px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%]{\r\n      background-color: rgb(231, 224, 214);\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      color:#39793b;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 400px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n\r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n  }\r\n  \r\n  .admin[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 50px;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color:#274e27 ;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]{\r\n      margin-top: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRjdXN0b21lcnBhc3N3b3JkL3Jlc2V0Y3VzdG9tZXJwYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7TUFDSSxzRUFBc0U7TUFDdEUsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLHNFQUFzRTtNQUN0RSxhQUFhO0VBQ2pCOztFQUVBO0lBQ0Usc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0Y3VzdG9tZXJwYXNzd29yZC9yZXNldGN1c3RvbWVycGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI0ZTQyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOTc5M2I7XHJcbiAgfVxyXG5cclxuICBsYWJlbHtcclxuICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGJvZHl7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIyNCwgMjE0KTtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICAgIGNvbG9yOiMzOTc5M2I7XHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM5NzkzYiA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cclxuICAgIGJvcmRlcjogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg4MywgODUsIDkyLCAwLjk3Myk7XHJcbiAgfVxyXG5cclxuICAuYWRtaW57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluYnV0dG9uIDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI3NGUyNyA7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetcustomerpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resetcustomerpassword',
          template: "\n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n    <h1>Change Password for {{customer.firstName + ' ' + customer.lastName}}</h1>\n\n    <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\n      <div>\n          <label for=\"newPassword\">New Password: </label> <br>\n          <input type=\"text\" class=\"form-control\" id=\"newPassword\" formControlName=\"newPassword\">\n      </div>\n      <br>\n      \n      <div class=\"signinbutton\">\n        <button type=\"submit\">Change Password!</button>\n      </div>\n    </form>\n\n  ",
          styleUrls: ['./resetcustomerpassword.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _services_superuser_service__WEBPACK_IMPORTED_MODULE_2__["SuperuserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resetpassword/resetpassword.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.component.ts ***!
    \**********************************************************/

  /*! exports provided: ResetpasswordComponent */

  /***/
  function srcAppResetpasswordResetpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function () {
      return ResetpasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_superuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/superuser.service */
    "./src/app/services/superuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var ResetpasswordComponent = /*#__PURE__*/function () {
      function ResetpasswordComponent(appStore, superuserservice, formBuilder, router) {
        _classCallCheck(this, ResetpasswordComponent);

        this.appStore = appStore;
        this.superuserservice = superuserservice;
        this.formBuilder = formBuilder;
        this.router = router;

        if (this.router.getCurrentNavigation().extras.state) {
          this.farmerId = this.router.getCurrentNavigation().extras.state.id;
          localStorage.setItem('farmerId', this.farmerId);
        } else {
          this.farmerId = localStorage.getItem('farmerId');
        }

        this.resetForm = formBuilder.group({
          "newPassword": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(ResetpasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.onGetFarmer(this.farmerId);
        }
      }, {
        key: "onGetFarmer",
        value: function onGetFarmer(id) {
          var _this19 = this;

          this.superuserservice.getFarmer(id).subscribe(function (response) {
            console.log('onGetFarmeR response: ', response);
            _this19.farmer = response;
          });
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          this.router.navigate([""]);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this20 = this;

          var resetFormVal = this.resetForm.value;
          console.log('resetFormVal: ', resetFormVal);
          this.superuserservice.changePass(this.farmerId, resetFormVal).subscribe(function (response) {
            console.log(response);

            _this20.router.navigate(['allaccounts']);
          });
        }
      }]);

      return ResetpasswordComponent;
    }();

    ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) {
      return new (t || ResetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_superuser_service__WEBPACK_IMPORTED_MODULE_2__["SuperuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetpasswordComponent,
      selectors: [["app-resetpassword"]],
      decls: 13,
      vars: 3,
      consts: [[3, "navToken", "logoutEvent"], [3, "formGroup", "ngSubmit"], ["for", "newPassword"], ["type", "text", "id", "newPassword", "formControlName", "newPassword", 1, "form-control"], [1, "signinbutton"], ["type", "submit"]],
      template: function ResetpasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function ResetpasswordComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetpasswordComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Change Password!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Change Password for ", ctx.farmer.firstName + " " + ctx.farmer.lastName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetForm);
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 18px;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 5px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%]{\r\n      background-color: rgb(231, 224, 214);\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      color:#39793b;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 400px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n\r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n  }\r\n  \r\n  .admin[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 50px;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color:#274e27 ;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]{\r\n      margin-top: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFFekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtNQUNJLHNFQUFzRTtNQUN0RSxlQUFlO0VBQ25COztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLFlBQVk7RUFDaEI7O0VBRUE7TUFDSSxvQ0FBb0M7RUFDeEM7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsc0VBQXNFO01BQ3RFLGFBQWE7RUFDakI7O0VBRUE7SUFDRSxzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5Qjs7SUFFekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQyNGU0MjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzk3OTNiO1xyXG4gIH1cclxuXHJcbiAgbGFiZWx7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIGRpdntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICBib2R5e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMjQsIDIxNCk7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICBjb2xvcjojMzk3OTNiO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzOTc5M2IgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgICBib3JkZXI6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoODMsIDg1LCA5MiwgMC45NzMpO1xyXG4gIH1cclxuXHJcbiAgLmFkbWlue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbmJ1dHRvbiA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNzRlMjcgO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbmJ1dHRvbntcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resetpassword',
          template: "\n    <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n    <h1>Change Password for {{farmer.firstName + ' ' + farmer.lastName}}</h1>\n\n    <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\n      <div>\n          <label for=\"newPassword\">New Password: </label> <br>\n          <input type=\"text\" class=\"form-control\" id=\"newPassword\" formControlName=\"newPassword\">\n      </div>\n      <br>\n      \n      <div class=\"signinbutton\">\n        <button type=\"submit\">Change Password!</button>\n      </div>\n    </form>\n\n  ",
          styleUrls: ['./resetpassword.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _services_superuser_service__WEBPACK_IMPORTED_MODULE_2__["SuperuserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rootReducer.ts":
  /*!********************************!*\
    !*** ./src/app/rootReducer.ts ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function srcAppRootReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return rootReducer;
    });

    var initialState = {
      token: ''
    };

    function rootReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'SETTOKEN':
          localStorage.setItem('token', JSON.stringify(action.payload));
          return Object.assign(Object.assign({}, state), {
            token: action.payload
          });

        case 'LOGOUT':
          localStorage.removeItem('token');
          return Object.assign(Object.assign({}, state), {
            token: ''
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      } // signUp(userInfo) {
      //   console.log("AuthService SignUp UserInfo: ", userInfo)
      //   return this.http.post('http://localhost:3000/farmersignup', userInfo)
      // }
      // signIn(creds) {
      //   console.log("AuthService SignIn creds: ", creds)
      //   return this.http.post('http://localhost:3000/farmersignin', creds)
      // }


      _createClass(AuthService, [{
        key: "signUp",
        value: function signUp(userInfo) {
          console.log("AuthService SignUp UserInfo: ", userInfo);
          return this.http.post('https://cs583finalapi.herokuapp.com/farmersignup', userInfo);
        }
      }, {
        key: "signIn",
        value: function signIn(creds) {
          console.log("AuthService SignIn creds: ", creds);
          return this.http.post('https://cs583finalapi.herokuapp.com/farmersignin', creds);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/farmer.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/farmer.service.ts ***!
    \********************************************/

  /*! exports provided: FarmerService */

  /***/
  function srcAppServicesFarmerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarmerService", function () {
      return FarmerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FarmerService = /*#__PURE__*/function () {
      function FarmerService(http, appStore) {
        _classCallCheck(this, FarmerService);

        this.http = http;
        this.appStore = appStore;
        this.token = '';
      }

      _createClass(FarmerService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.http.get("http://localhost:3000/farmer");
        }
      }, {
        key: "getProduct",
        value: function getProduct(productId) {
          console.log('from farmerservice productId: ', productId);
          return this.http.get("http://localhost:3000/farmer/".concat(productId));
        }
      }, {
        key: "editProduct",
        value: function editProduct(productBody) {
          console.log('from farmerservice: ', productBody);
          return this.http.patch("http://localhost:3000/farmer/".concat(productBody._id), productBody);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(productId) {
          console.log("from farmerservice productId: ", productId);
          return this.http["delete"]("http://localhost:3000/farmer/".concat(productId));
        }
      }, {
        key: "addProduct",
        value: function addProduct(productBody) {
          console.log("from farmservice addproduct: ", productBody);
          return this.http.post("http://localhost:3000/farmer/", productBody);
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          return this.http.get("http://localhost:3000/farmer/orders");
        }
      }, {
        key: "getOrder",
        value: function getOrder(orderId) {
          return this.http.get("http://localhost:3000/farmer/order/".concat(orderId));
        }
      }, {
        key: "updateOrderStatus",
        value: function updateOrderStatus(orderId, body) {
          console.log('body: ', body);
          return this.http.patch("http://localhost:3000/farmer/orderstatus/".concat(orderId), body);
        }
      }, {
        key: "viewOrderByStatus",
        value: function viewOrderByStatus(status) {
          console.log('viewOrderByStatus: ', status);
          return this.http.get("http://localhost:3000/farmer/orders/bystatus/".concat(status));
        }
      }]);

      return FarmerService;
    }();

    FarmerService.ɵfac = function FarmerService_Factory(t) {
      return new (t || FarmerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('AppStore'));
    };

    FarmerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FarmerService,
      factory: FarmerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/superuser.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/superuser.service.ts ***!
    \***********************************************/

  /*! exports provided: SuperuserService */

  /***/
  function srcAppServicesSuperuserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperuserService", function () {
      return SuperuserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SuperuserService = /*#__PURE__*/function () {
      function SuperuserService(http, appStore) {
        _classCallCheck(this, SuperuserService);

        this.http = http;
        this.appStore = appStore;
        this.token = '';
      }

      _createClass(SuperuserService, [{
        key: "getFarmer",
        value: function getFarmer(id) {
          return this.http.get("http://localhost:3000/superuser/getfarmer/".concat(id));
        }
      }, {
        key: "getFarmers",
        value: function getFarmers() {
          return this.http.get("http://localhost:3000/superuser/getfarmers");
        }
      }, {
        key: "getCustomer",
        value: function getCustomer(id) {
          return this.http.get("http://localhost:3000/superuser/getcustomer/".concat(id));
        }
      }, {
        key: "getCustomers",
        value: function getCustomers() {
          return this.http.get("http://localhost:3000/superuser/getcustomers");
        }
      }, {
        key: "farmerActivationToggle",
        value: function farmerActivationToggle(id) {
          console.log('farmerActivationToggle id: ', id);
          return this.http.patch("http://localhost:3000/superuser/farmeractivationtoggle", {
            id: id
          });
        }
      }, {
        key: "customerActivationToggle",
        value: function customerActivationToggle(id) {
          console.log('customerActivationToggle id: ', id);
          return this.http.patch("http://localhost:3000/superuser/customeractivationtoggle", {
            id: id
          });
        }
      }, {
        key: "changePass",
        value: function changePass(id, newPass) {
          console.log('changePass from service newPass: ', newPass);
          return this.http.patch("http://localhost:3000/superuser/farmer/".concat(id), newPass);
        }
      }, {
        key: "changeCustPass",
        value: function changeCustPass(id, newPass) {
          console.log('changeCustPass from service newPass: ', newPass);
          return this.http.patch("http://localhost:3000/superuser/customer/".concat(id), newPass);
        }
      }, {
        key: "getTransactions",
        value: function getTransactions() {
          return this.http.get("http://localhost:3000/superuser/transactions");
        }
      }, {
        key: "getOrder",
        value: function getOrder(orderId) {
          return this.http.get("http://localhost:3000/superuser/order/".concat(orderId));
        }
      }, {
        key: "getRequestsLog",
        value: function getRequestsLog() {
          return this.http.get("http://localhost:3000/superuser/requestlog");
        }
      }]);

      return SuperuserService;
    }();

    SuperuserService.ɵfac = function SuperuserService_Factory(t) {
      return new (t || SuperuserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('AppStore'));
    };

    SuperuserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SuperuserService,
      factory: SuperuserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperuserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(appStore) {
        _classCallCheck(this, TokenInterceptorService);

        this.appStore = appStore;
        this.token = '';
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          var tokenizedRequest = req.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(this.token)
            }
          });
          return next.handle(tokenizedRequest);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('AppStore'));
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin/signin.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signin/signin.component.ts ***!
    \********************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(router, formBuilder, authService, appStore) {
        _classCallCheck(this, SigninComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.appStore = appStore;
        this.signInForm = formBuilder.group({
          "email": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this21 = this;

          var userFormInfo = this.signInForm.value;
          console.log("userFormInfo: ", userFormInfo);
          this.authService.signIn(userFormInfo).subscribe(function (response) {
            console.log('RESPONSE: ', response);

            _this21.appStore.dispatch({
              type: 'SETTOKEN',
              payload: response.accessToken
            });

            _this21.router.navigate([""]);
          }); //this.formInvalid = true do this later. 
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 20,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "text", "id", "password", "formControlName", "password", 1, "form-control"], [1, "signinbutton"], ["type", "submit"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign in!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 18px;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 5px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%]{\r\n      background-color: rgb(231, 224, 214);\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      color:#39793b;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 400px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n\r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n  }\r\n  \r\n  .admin[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 50px;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color:#274e27 ;\r\n  }\r\n  \r\n  .signinbutton[_ngcontent-%COMP%]{\r\n      margin-top: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7TUFDSSxzRUFBc0U7TUFDdEUsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLHNFQUFzRTtNQUN0RSxhQUFhO0VBQ2pCOztFQUVBO0lBQ0Usc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI0ZTQyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOTc5M2I7XHJcbiAgfVxyXG5cclxuICBsYWJlbHtcclxuICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGJvZHl7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIyNCwgMjE0KTtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICAgIGNvbG9yOiMzOTc5M2I7XHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM5NzkzYiA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cclxuICAgIGJvcmRlcjogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg4MywgODUsIDkyLCAwLjk3Myk7XHJcbiAgfVxyXG5cclxuICAuYWRtaW57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluYnV0dG9uIDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI3NGUyNyA7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          template: "\n  \n  <body>\n\n  <div>\n    <h1>Please Sign In</h1>\n  </div>\n\n  <div>\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\">\n  \n    <div>\n        <label for=\"email\">Email </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n    </div>\n    <br>\n    <div>\n        <label for=\"password\">Password </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"password\" formControlName=\"password\">\n    </div>\n    <div class=\"signinbutton\">\n      <button type=\"submit\">Sign in!</button>\n    </div>\n\n   \n    </form>\n\n   \n  </div>\n\n\n</body>\n  ",
          styleUrls: ['./signin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(router, formBuilder, authService, appStore) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.appStore = appStore;
        this.signUpForm = formBuilder.group({
          "firstName": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "lastName": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "email": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          "password": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this22 = this;

          var userFormInfo = this.signUpForm.value;
          console.log("userFormInfo: ", userFormInfo);
          this.authService.signUp(userFormInfo).subscribe(function (response) {
            console.log(response);

            _this22.router.navigate(["signin"]);
          }); //this.formInvalid = true do this later. 
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 30,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-control"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-control"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "text", "id", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "createaccountbutton"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create an account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Create Account!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["input[type=text][_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    border: 2px solid #424e42;\r\n    transition: 0.5s;\r\n    outline: none;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  input[type=text][_ngcontent-%COMP%]:focus {\r\n    border: 2px solid #39793b;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      font-size: 18px;\r\n  }\r\n  \r\n  div[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      padding: 5px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%]{\r\n      background-color: rgb(231, 224, 214);\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      color:#39793b;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 100px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n\r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n  }\r\n  \r\n  .createaccountbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color:#274e27 ;\r\n  }\r\n  \r\n  .createaccountbutton[_ngcontent-%COMP%]{\r\n      margin-top: 30px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBRXpCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7TUFDSSxzRUFBc0U7TUFDdEUsZUFBZTtFQUNuQjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLHNFQUFzRTtNQUN0RSxhQUFhO0VBQ2pCOztFQUVBO0lBQ0Usc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MjRlNDI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM5NzkzYjtcclxuICB9XHJcblxyXG4gIGxhYmVse1xyXG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBkaXZ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgYm9keXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjI0LCAyMTQpO1xyXG4gIH1cclxuXHJcbiAgaDF7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgICAgY29sb3I6IzM5NzkzYjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzk3OTNiIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcblxyXG4gICAgYm9yZGVyOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDgzLCA4NSwgOTIsIDAuOTczKTtcclxuICB9XHJcblxyXG4gIC5jcmVhdGVhY2NvdW50YnV0dG9uIDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI3NGUyNyA7XHJcbiAgfVxyXG5cclxuICAuY3JlYXRlYWNjb3VudGJ1dHRvbntcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          template: "\n\n<body>\n\n  <h1>Create an account</h1>\n  \n  <div>\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\">  \n      </div>\n    <br>\n    <div>\n        <label for=\"lastName\">Last Name </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\">\n    </div>\n    <br>\n    <div>\n        <label for=\"email\">Email </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n    </div>\n    <br>\n    <div>\n        <label for=\"password\">Password </label> <br>\n        <input type=\"text\" class=\"form-control\" id=\"password\" formControlName=\"password\">\n    </div>\n\n  <button class=\"createaccountbutton\" type=\"submit\">Create Account!</button>\n\n    </form>\n  </div>\n</body>\n  \n  ",
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/testcomponent/test.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/testcomponent/test.component.ts ***!
    \*************************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestcomponentTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent() {
        _classCallCheck(this, TestComponent);
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestComponent;
    }();

    TestComponent.ɵfac = function TestComponent_Factory(t) {
      return new (t || TestComponent)();
    };

    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestComponent,
      selectors: [["app-test"]],
      decls: 2,
      vars: 0,
      template: function TestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rjb21wb25lbnQvdGVzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test',
          template: "\n    <p>This is test</p>\n  ",
          styleUrls: ['./test.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/transactiondetails/transactiondetails.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/transactiondetails/transactiondetails.component.ts ***!
    \********************************************************************/

  /*! exports provided: TransactiondetailsComponent */

  /***/
  function srcAppTransactiondetailsTransactiondetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactiondetailsComponent", function () {
      return TransactiondetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/superuser.service */
    "./src/app/services/superuser.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TransactiondetailsComponent_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.price);
      }
    }

    var TransactiondetailsComponent = /*#__PURE__*/function () {
      function TransactiondetailsComponent(appStore, superuserservice, router) {
        _classCallCheck(this, TransactiondetailsComponent);

        this.appStore = appStore;
        this.superuserservice = superuserservice;
        this.router = router;

        if (this.router.getCurrentNavigation().extras.state) {
          this.orderId = this.router.getCurrentNavigation().extras.state.id;
          localStorage.setItem('orderId', this.orderId);
        } else {
          this.orderId = localStorage.getItem('orderId');
        }
      }

      _createClass(TransactiondetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          if (this.appStore.getState().token) {
            this.token = this.appStore.getState().token;
          } else if (localStorage.getItem('token')) {
            this.token = JSON.parse(localStorage.getItem('token'));
          }

          this.superuserservice.getOrder(this.orderId).subscribe(function (response) {
            console.log("getOrder Response: ", response);
            _this23.order = response;
            console.log("this.order.products: ", _this23.order.products);
            _this23.priceTotal = _this23.calcTotal();
            console.log("this.priceTotal: ", _this23.priceTotal);
          });
        }
      }, {
        key: "calcTotal",
        value: function calcTotal() {
          var total = 0;

          var _iterator2 = _createForOfIteratorHelper(this.order.products),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              total = total + item.price;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return total;
        }
      }, {
        key: "parentLogOut",
        value: function parentLogOut($event) {
          this.appStore.dispatch({
            type: 'LOGOUT'
          });
          this.token = '';
          localStorage.removeItem('orderId');
          this.router.navigate([""]);
        }
      }]);

      return TransactiondetailsComponent;
    }();

    TransactiondetailsComponent.ɵfac = function TransactiondetailsComponent_Factory(t) {
      return new (t || TransactiondetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('AppStore'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TransactiondetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransactiondetailsComponent,
      selectors: [["app-transactiondetails"]],
      decls: 23,
      vars: 8,
      consts: [[3, "navToken", "logoutEvent"], [1, "ordertablediv"], [1, "ordertable"], [4, "ngFor", "ngForOf"], [1, "ordertotal"]],
      template: function TransactiondetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-nav-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logoutEvent", function TransactiondetailsComponent_Template_app_nav_bar_logoutEvent_0_listener($event) {
            return ctx.parentLogOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product Purchased");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TransactiondetailsComponent_tr_20_Template, 5, 2, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navToken", ctx.token);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Order ID: ", ctx.order._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Status: ", ctx.order.status, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Customer Name: ", ctx.order.customer.firstName, " ", ctx.order.customer.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Customer E-mail: ", ctx.order.customer.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Order total: $ ", ctx.priceTotal, "");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["p[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .ordertotal[_ngcontent-%COMP%]{\r\n    margin-top:  25px;\r\n    font-size: 25px;\r\n  }\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  div.ready[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    box-sizing: content-box;\r\n  }\r\n  \r\n  div.readybutton[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 20px\r\n  }\r\n  \r\n  div.ordertable[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    border-collapse: collapse;\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    margin-right: auto;\r\n    \r\n  }\r\n  \r\n  .ordertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(247, 227, 165);\r\n  }\r\n  \r\n  .ordertable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    \r\n    text-align: center;\r\n    background-color: #39793b;\r\n    color: white;\r\n  }\r\n  \r\n  .ordertable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n  }\r\n  \r\n  button.delete[_ngcontent-%COMP%]{\r\n    background-color: rgb(158, 65, 3);\r\n    float: right;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    padding-bottom: 8px;\r\n    border-radius: 1px;\r\n    \r\n  }\r\n  \r\n  a.edit[_ngcontent-%COMP%]{\r\n    background-color: steelblue;\r\n    float: left;\r\n    color: #e5eee7;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n    margin: 5px;\r\n    border: 5px;\r\n    padding: 5px;\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n    border-radius: 1px;\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%]{\r\n      border-spacing: 0px;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      margin: 0px;\r\n      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n      margin-left: 10px;\r\n    }\r\n  \r\n  button.ready[_ngcontent-%COMP%]{\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 15px;\r\n    width: 100px;\r\n    height: 50px;\r\n    padding-bottom: 3px;\r\n    color: white;\r\n    background-color:#39793b ;\r\n    border-radius: 5px;\r\n    transition-duration: 0.4s;\r\n  \r\n    border: 2px;\r\n    border-style: solid;\r\n    border-color: rgba(83, 85, 92, 0.973);\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb25kZXRhaWxzL3RyYW5zYWN0aW9uZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHNFQUFzRTtJQUN0RSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzRUFBc0U7SUFDdEUsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEI7RUFDRjs7RUFFQTtJQUNFLHNFQUFzRTtJQUN0RSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0VBRXBCOztFQUdBO01BQ0ksb0NBQW9DO0VBQ3hDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjs7SUFFcEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVFO0lBQ0EsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCOztFQUVwQjs7RUFFRTtJQUNBLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsY0FBYztJQUNkLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLG1CQUFtQjtFQUN2Qjs7RUFHQTtNQUNJLFdBQVc7TUFDWCxzRUFBc0U7TUFDdEUsaUJBQWlCO0lBQ25COztFQUVGO0lBQ0Usc0VBQXNFO0lBQ3RFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUNBQXFDOztFQUV2QyIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uZGV0YWlscy90cmFuc2FjdGlvbmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXJ0b3RhbHtcclxuICAgIG1hcmdpbi10b3A6ICAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgZGl2LnJlYWR5e1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5yZWFkeWJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweFxyXG4gIH1cclxuICBcclxuICBkaXYub3JkZXJ0YWJsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm9yZGVydGFibGUgdHI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMjcsIDE2NSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlcnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTc5M2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcmRlcnRhYmxlIHRkLCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgICBidXR0b24uZGVsZXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgNjUsIDMpO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNlNWVlZTc7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAgIGEuZWRpdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNlNWVlZTc7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIH1cclxuICBcclxuICB0YWJsZXtcclxuICAgICAgYm9yZGVyLXNwYWNpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgaDF7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICBcclxuICBidXR0b24ucmVhZHl7XHJcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzM5NzkzYiA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIFxyXG4gICAgYm9yZGVyOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDgzLCA4NSwgOTIsIDAuOTczKTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactiondetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-transactiondetails',
          template: "\n        <app-nav-bar [navToken]=\"token\" (logoutEvent)=\"parentLogOut($event)\"></app-nav-bar>\n\n        <p>\n    Order ID: {{this.order._id}}<br>\n    Status: {{this.order.status}}<br><br>\n    Customer Name: {{this.order.customer.firstName}} {{this.order.customer.lastName}} <br>\n    Customer E-mail: {{this.order.customer.email}}\n    </p>\n\n    \n    <div class=\"ordertablediv\">\n  <div class=\"ordertable\">\n    <table>\n    <thead>\n         <tr>\n            <th>Product Purchased</th>\n            <th>Price</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let item of this.order.products\">\n            <td>{{ item.productName }}</td>\n            <td>{{ item.price }}</td>\n         \n         </tr>\n      </tbody>\n    </table>\n  </div>\n  </div>\n\n  <p class=\"ordertotal\">Order total: $ {{priceTotal}}</p>\n  \n  ",
          styleUrls: ['./transactiondetails.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: ['AppStore']
          }]
        }, {
          type: _services_superuser_service__WEBPACK_IMPORTED_MODULE_1__["SuperuserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\shawn\Desktop\New Project 583\final-porject-sd1333\FarmerFrontEnd\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map