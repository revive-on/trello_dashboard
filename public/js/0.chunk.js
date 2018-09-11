webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(631)
/* template */
var __vue_template__ = __webpack_require__(632)
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
Component.options.__file = "resources/assets/vendor/admin/components/views/error.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5771ac81", Component.options)
  } else {
    hotAPI.reload("data-v-5771ac81", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 631:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            titles: {
                'admin.403': 'Access Denied',
                'admin.404': 'Page not found',
                'admin.500': 'Something went wrong'
            },
            messages: {
                'admin.403': 'You don\'t have permission to access on this page.',
                'admin.404': 'We could not find the page you were looking for.',
                'admin.500': 'We will work on fixing that right away. '
            }
        };
    },

    computed: {
        msg: function msg() {
            return this.$store.state.errorMsg ? this.$store.state.errorMsg.message : this.messages[this.$route.name];
        }
    }
});

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "error-page" }, [
    _vm.$route.name == "admin.403"
      ? _c("h2", { staticClass: "headline text-orange" }, [_vm._v(" 403")])
      : _vm.$route.name == "admin.404"
        ? _c("h2", { staticClass: "headline text-yellow" }, [_vm._v(" 404")])
        : _vm.$route.name == "admin.500"
          ? _c("h2", { staticClass: "headline text-red" }, [_vm._v(" 500")])
          : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "error-content" }, [
      _c("h3", [
        _vm.$route.name == "admin.403"
          ? _c("i", { staticClass: "fa fa-warning text-orange" })
          : _vm.$route.name == "admin.404"
            ? _c("i", { staticClass: "fa fa-warning text-yellow" })
            : _vm.$route.name == "admin.500"
              ? _c("i", { staticClass: "fa fa-warning text-red" })
              : _vm._e(),
        _vm._v(
          "\n            Oops! " + _vm._s(_vm.titles[_vm.$route.name]) + "."
        )
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("\n            " + _vm._s(_vm.msg) + "\n        ")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5771ac81", module.exports)
  }
}

/***/ })

});