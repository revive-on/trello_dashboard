webpackJsonp([5],{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(629)
/* template */
var __vue_template__ = __webpack_require__(630)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/vendor/admin/components/views/dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-295472e6", Component.options)
  } else {
    hotAPI.reload("data-v-295472e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },

    /*        beforeRouteEnter (to, from, next) {
                next();
            },*/
    created: function created() {
        this.fetchData();
    },

    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function fetchData() {
            //                this.$Message.info('这是一个消息', 200);
        }
    }
});

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
        _c("div", { staticClass: "small-box bg-aqua" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v("150")]),
            _vm._v(" "),
            _c("p", [_vm._v("New Orders")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "fa fa-shopping-bag" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("More info "),
            _c("i", { staticClass: "fa fa-arrow-circle-right" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
        _c("div", { staticClass: "small-box bg-green" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [
              _vm._v("53"),
              _c("sup", { staticStyle: { "font-size": "20px" } }, [_vm._v("%")])
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Bounce Rate")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "fa fa-bar-chart" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("More info "),
            _c("i", { staticClass: "fa fa-arrow-circle-right" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
        _c("div", { staticClass: "small-box bg-yellow" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v("44")]),
            _vm._v(" "),
            _c("p", [_vm._v("User Registrations")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "fa fa-users" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("More info "),
            _c("i", { staticClass: "fa fa-arrow-circle-right" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-xs-6" }, [
        _c("div", { staticClass: "small-box bg-red" }, [
          _c("div", { staticClass: "inner" }, [
            _c("h3", [_vm._v("65")]),
            _vm._v(" "),
            _c("p", [_vm._v("Unique Visitors")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "icon" }, [
            _c("i", { staticClass: "fa fa-pie-chart" })
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "small-box-footer", attrs: { href: "#" } }, [
            _vm._v("More info "),
            _c("i", { staticClass: "fa fa-arrow-circle-right" })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-295472e6", module.exports)
  }
}

/***/ })

});