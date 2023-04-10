/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(() => {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = () => ([]);\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./node_modules/@stencil/core/internal/client lazy recursive ^\\\\.\\\\/.*\\\\.entry\\\\.js.*$ include: \\\\.entry\\\\.js$ exclude: \\\\.system\\\\.entry\\\\.js$\";\nmodule.exports = webpackEmptyAsyncContext;\n\n//# sourceURL=webpack://vue-hf4/./node_modules/@stencil/core/internal/client/_lazy_^\\.\\/.*\\.entry\\.js.*$_include:_\\.entry\\.js$_exclude:_\\.system\\.entry\\.js$_namespace_object?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/vue */ \"./node_modules/@ionic/vue/dist/index.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _data_cards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/cards.js */ \"./src/data/cards.js\");\n/* harmony import */ var _data_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/constants.js */ \"./src/data/constants.js\");\n\n\n\n\n// import { cards } from \"@/data/cards.json\";\n\n\nconst alasql = __webpack_require__(/*! alasql */ \"./node_modules/alasql/dist/alasql.min.js\");\n// console.debug(\"App!\", alasql);\n// const cards = require(\"@/data/cards.js\");\n// const location = ref('North Pole');\n// function updateLocation(value) {\n//   location.value = value == 'North Pole' ? 'South Pole':'North Pole';\n// }\n// provide('location', {\n//   location,\n//   updateLocation\n// })\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    IonApp: _ionic_vue__WEBPACK_IMPORTED_MODULE_5__.IonApp,\n    IonRouterOutlet: _ionic_vue__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet\n  },\n  setup() {\n    const filters = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(_data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase);\n    const currentCard = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);\n    console.debug(\"App!\", filters);\n    const filtersReset = () => {\n      // console.debug(\"filtersReset!\");\n      filters.value = _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase;\n    };\n    const setCurrentCard = card => {\n      currentCard.value = card;\n      console.info(\"setCurrentCard\", card);\n    };\n    const setFilters = flt => {\n      // console.debug(\"setFilters!\", filters..deck, flt, {\n      //   ...filters.,\n      //   ...flt,\n      // });\n      filters.value = {\n        ...filters.value,\n        ...flt\n      };\n      console.debug(\"setFilters!\", filters.value);\n    };\n    const setFiltersDeck = deckValue => {\n      // filters. = { ...toRefs(filters), obj };\n      // console.debug(\"setFiltersDeck\", obj, filters.);\n      // filters. = { ...filters., ...{ obj } };\n      filters.value.deck = deckValue;\n      // console.debug(\"setFiltersDeck\", obj, filters.);\n    };\n\n    // const filtersSetDeck = (deck) => {\n    //   console.debug(\"filtersSetDeck\", filters., deck);\n    //   filters..deck = deck;\n    // };\n\n    const filtersGetParams = () => {\n      console.debug(\"filtersGetParams!\", filters.value);\n      let params = [];\n      if (filters.value.deck !== undefined && filters.value.deck !== \"any\") {\n        params.push(`deck='${filters.value.deck}'`);\n      }\n      if (filters.value.name) {\n        params.push(`name LIKE '%${filters.value.name}%'`);\n      }\n      if (filters.value.type !== undefined && filters.value.type !== \"all\") {\n        params.push(`type LIKE '%${filters.value.type}%'`);\n      }\n      if (filters.value.side !== \"any\") {\n        params.push(`side=${filters.value.side}`);\n      }\n      if (filters.value.spectral !== \"all\") {\n        if (filters.value.spectral === \"none\") {\n          params.push(\"NOT spectral_type\");\n        } else if (filters.value.spectral !== undefined) {\n          params.push(`spectral_type='${filters.value.spectral}'`);\n        }\n      }\n      if (filters.value.mass.op !== \"any\") {\n        // params.push(\n        //   `mass ${filters.value.mass.op} ${filters.value.mass.value}`\n        // );\n        params.push(`(mass->(0) ${filters.value.mass.op} ${filters.value.mass.value} OR mass->(1) ${filters.value.mass.op} ${filters.value.mass.value})`);\n      }\n      if (filters.value.radhard.op !== \"any\") {\n        // params.push(\n        //   `radhard ${filters.value.radhard.op} ${filters.value.radhard.value}`\n        // );\n        params.push(`(radhard->(0) ${filters.value.radhard.op} ${filters.value.radhard.value} OR radhard->(1) ${filters.value.radhard.op} ${filters.value.radhard.value})`);\n      }\n      if (filters.value.deck === \"radiator\" && filters.value.therms.op !== \"any\") {\n        // params.push(`therms = ${parseInt(filters.value.therms)}`);\n        // params.push(`therms_h = 3`);\n        // therms.indexOf(2) >= 0\n        params.push(`(therms->(0) ${filters.value.therms.op} ${filters.value.therms.value} OR therms->(1) ${filters.value.therms.op} ${filters.value.therms.value})`);\n      }\n      if (filters.value.thrust.op !== \"any\") {\n        params.push(`(thrust ${filters.value.thrust.op} ${filters.value.thrust.value})`);\n      }\n      if (filters.value.fuel.type !== \"any\") {\n        params.push(`(fuel_type = '${filters.value.fuel.type}')`);\n      }\n      if (filters.value.robonaut.type !== \"any\") {\n        params.push(`(robo_type->(0) = '${filters.value.robonaut.type}' OR robo_type->(1) = '${filters.value.robonaut.type}')`);\n      }\n      if (filters.value.robonaut.op !== \"any\") {\n        params.push(`(isru ${filters.value.robonaut.op} ${filters.value.robonaut.value})`);\n      }\n      if (filters.value.consumption.op !== \"any\") {\n        params.push(`(fuel_consumption ${filters.value.consumption.op} ${filters.value.consumption.value})`);\n      }\n      switch (filters.value.required.op) {\n        case \"none\":\n          params.push(\"NOT required_reactor AND NOT required_generator AND NOT required_therms\");\n          break;\n        case \"generator\":\n          if (filters.value.required.value != \"all\") {\n            params.push(`required_generator = '${filters.value.required.value}'`);\n          } else params.push(`required_generator`);\n          break;\n        case \"reactor\":\n          if (filters.value.required.value != \"all\") {\n            params.push(`required_reactor = '${filters.value.required.value}'`);\n          } else params.push(`required_reactor`);\n          break;\n        case \"therms\":\n          if (filters.value.required.value) {\n            params.push(`required_therms = ${filters.value.required.value}`);\n          } else params.push(`required_therms`);\n          break;\n      }\n      if (filters.value.modifiers.values.length > 0) {\n        filters.value.modifiers.values.forEach(value => {\n          switch (value) {\n            case \"afterburn\":\n            case \"ballerina\":\n            case \"pacman\":\n            case \"powersat\":\n            case \"push\":\n            case \"solar\":\n              params.push(`${value}`);\n              break;\n            case \"+thrust\":\n              params.push(`thrust_modifier > 0`);\n              break;\n            case \"-consumption\":\n              params.push(`fuel_consumption_modifier`);\n              break;\n          }\n        });\n      }\n      console.debug(\"filtersGetParams!\", params);\n      return params;\n    };\n    const getCard = id => {\n      // console.debug(\"getCard!\", id);\n      // return cards[0];\n      // console.debug(\"getCard!\", id);\n      let sql = `SELECT * FROM ? WHERE id = '${id}'`;\n      // console.debug(\"getCard!\", sql);\n      const res = alasql(sql, [_data_cards_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]);\n      // console.log('getPatents: ', res);\n      return res ? res[0] : null;\n    };\n    const getCardBack = card => {\n      // console.debug(\"getCardBack!\", card);\n      const idCardBack = card.id.slice(-1) === \"F\" ? card.id.slice(0, -1) + \"R\" : card.id.slice(0, -1) + \"F\";\n      let sql = `SELECT * FROM ? WHERE id = '${idCardBack}'`;\n      // console.debug(\"getCardBack!\", sql);\n      const res = alasql(sql, [_data_cards_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]);\n      // console.log('getPatents: ', res);\n      return res ? res[0] : null;\n    };\n    (0,vue__WEBPACK_IMPORTED_MODULE_2__.provide)(\"filters\", {\n      filters,\n      currentCard,\n      setCurrentCard,\n      getCard,\n      getCardBack,\n      setFilters,\n      setFiltersDeck,\n      filtersReset,\n      filtersGetParams\n    });\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FilterDecks.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FilterDecks.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n// import { IonContent, IonPage } from \"@ionic/vue\";\n\n\n// import {cards} from '../data/cards.json';\n// import alasql from 'alasql';\n// import {cards as Images} from '../../public/assets/images/index.js';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"FilterDecks\",\n  components: {},\n  emits: [\"activeFilters\"],\n  setup() {\n    const {\n      filters,\n      setFilters,\n      filtersReset\n    } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(\"filters\");\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n      deck: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(filters.value.deck)\n      // deck: computed(() => {\n      //   return filters.value.deck;\n      // }),\n    });\n\n    /**\n     * Resetta lo stato al valore iniziale quando vengono resettati tutti i filtri\n     */\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(filters, newFilters => {\n      state.deck = newFilters.deck;\n    });\n    const sound = new Audio(__webpack_require__(/*! @/assets/sounds/paper-away.mp3 */ \"./src/assets/sounds/paper-away.mp3\"));\n    function applyFilterDecks() {\n      sound.play();\n      console.debug(\"applyFilterDecks!\", state.deck);\n      // filtersSetDeck(state.deck);\n      // setFiltersDeck(state.deck);\n      setFilters({\n        deck: state.deck\n      });\n      // ctx.emit(\"filtersApplied\");\n    }\n\n    function reset() {\n      filtersReset();\n    }\n    return {\n      state,\n      router,\n      applyFilterDecks,\n      reset\n      // filters,\n      // filtersReset,\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/components/FilterDecks.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect */ \"./node_modules/@vueform/multiselect/dist/multiselect.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _data_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/constants.js */ \"./src/data/constants.js\");\n\n\n// import { IonContent, IonPage } from \"@ionic/vue\";\n\n\n// import vSelect from 'vue-select';\n\n\n// import {cards} from '../data/cards.json';\n// import alasql from 'alasql';\n// import {cards as Images} from '../../public/assets/images/index.js';\n// import 'vue-select/dist/vue-select.css';\n\n// const controlsAll = [\"spectral\", \"mass\", \"radhard\"];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"Filters\",\n  // components: {vSelect},\n  components: {\n    Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  emits: [\"activeSlider\"],\n  classesSelect: \"block appearance-none w-full bg-white border border-blue-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\",\n  setup(props, ctx) {\n    const {\n      filters,\n      setFilters,\n      filtersReset\n    } = (0,vue__WEBPACK_IMPORTED_MODULE_2__.inject)(\"filters\");\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const sides = [{\n      value: \"any\",\n      label: \"Any\"\n    }, {\n      value: 0,\n      label: \"Front\"\n    }, {\n      value: 1,\n      label: \"Back\"\n    }];\n    const reactorTypes = [{\n      value: \"all\",\n      label: \"All\"\n    }, {\n      value: \"B\",\n      label: \"Burst plasma\"\n    }, {\n      value: \"O\",\n      label: \"Stationary\"\n    }, {\n      value: \"X\",\n      label: \"eXotic\"\n    }];\n    const generatorTypes = [{\n      value: \"all\",\n      label: \"All\"\n    }, {\n      value: \"E\",\n      label: \"Electric\"\n    }, {\n      value: \"P\",\n      label: \"Pulsed\"\n    }];\n\n    // const robonautTypes = [\n    //   { value: \"all\", label: \"All\" },\n    //   { value: \"missile\", label: \"Missile\" },\n    //   { value: \"buggy\", label: \"Buggy\" },\n    //   { value: \"raygun\", label: \"Raygun\" },\n    // ];\n\n    // const types = computed(() => {\n    //   const deck = ref(filters.value.deck);\n    //   if (deck == \"reactor\") return reactorTypes;\n    //   else if (deck == \"generator\") return generatorTypes;\n    //   else return [];\n    // });\n    const types = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {\n      if (filters.value.deck === \"reactor\") {\n        return reactorTypes;\n      } else if (filters.value.deck === \"generator\") {\n        return generatorTypes;\n        // } else if (filters.value.deck === \"robonaut\") {\n        //   return robonautTypes;\n      }\n\n      return [];\n    });\n    const requiredTypes = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {\n      switch (filters.value.required.op) {\n        case \"generator\":\n          return generatorTypes;\n        case \"reactor\":\n          return reactorTypes;\n        case \"therms\":\n          return [{\n            value: 1,\n            label: 1\n          }, {\n            value: 2,\n            label: 2\n          }, {\n            value: 3,\n            label: 3\n          }, {\n            value: 4,\n            label: 4\n          }, {\n            value: 5,\n            label: 5\n          }];\n        default:\n          return [];\n      }\n    });\n\n    // const filtersLocale = ref(filters.value);\n    const state = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({\n      // deck: { param: filters.value.deck },\n      name: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.name,\n        enabled: true\n      },\n      side: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.side,\n        enabled: true\n      },\n      type: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.type,\n        enabled: true\n      },\n      spectral: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.spectral,\n        enabled: true\n      },\n      mass: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.mass,\n        enabled: true\n      },\n      radhard: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.radhard,\n        enabled: true\n      },\n      therms: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.therms,\n        enabled: true\n      },\n      thrust: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.thrust,\n        enabled: true\n      },\n      fuel: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.fuel,\n        enabled: true\n      },\n      // consumption: { param: filters.value.consumption, enabled: true },\n      // consumption: { param: { op: \"any\", value: 0 }, enabled: true },\n      consumption: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.consumption,\n        enabled: true\n      },\n      modifiers: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.modifiers,\n        enabled: true\n      },\n      robonaut: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.robonaut,\n        enabled: true\n      },\n      required: {\n        param: _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase.required,\n        enabled: true\n      }\n    });\n    function resetName(enable) {\n      state.name.param = \"\";\n      if (enable != undefined) state.name.enabled = enable;\n    }\n    function resetSide(enable) {\n      state.side.param = 0;\n      if (enable != undefined) state.side.enabled = enable;\n    }\n    function resetType(enable) {\n      state.type.param = \"all\";\n      if (enable != undefined) state.type.enabled = enable;\n    }\n    function resetTherms(enable) {\n      // state.therms.param.op = constants.filtersBase.therms.op;\n      // state.therms.param.value = constants.filtersBase.therms.value;\n      state.therms.param.op = \"any\";\n      state.therms.param.value = 0;\n      if (enable != undefined) state.therms.enabled = enable;\n    }\n    function resetSpectral(enable) {\n      state.spectral.param = \"all\";\n      if (enable != undefined) state.spectral.enabled = enable;\n    }\n    function resetMass(enable) {\n      // state.mass.param.op = constants.filtersBase.mass.op;\n      // state.mass.param.value = constants.filtersBase.mass.value;\n      state.mass.param.op = \"any\";\n      state.mass.param.value = 0;\n      if (enable != undefined) state.mass.enabled = enable;\n    }\n    function resetRadhard(enable) {\n      // state.radhard.param.op = constants.filtersBase.radhard.op;\n      // state.radhard.param.value = constants.filtersBase.radhard.value;\n      state.radhard.param.op = \"any\"; // funziona\n      state.radhard.param.value = 0; // funziona\n      if (enable != undefined) state.radhard.enabled = enable;\n    }\n    function resetRequired(enable) {\n      // state.required.param.op = constants.filtersBase.required.op;\n      // state.required.param.value = constants.filtersBase.required.value;\n      state.required.param.op = \"any\";\n      state.required.param.value = 0;\n      if (enable != undefined) state.required.enabled = enable;\n    }\n    function resetThrust(enable) {\n      // state.thrust.param.op = constants.filtersBase.thrust.op;\n      // state.thrust.param.value = constants.filtersBase.thrust.value;\n      state.thrust.param.op = \"any\";\n      state.thrust.param.value = 0;\n      if (enable != undefined) state.thrust.enabled = enable;\n    }\n    function resetFuel(enable) {\n      // state.fuel.param.type = constants.filtersBase.fuel.type;\n      state.fuel.param.type = \"any\";\n      if (enable != undefined) state.thrust.enabled = enable;\n    }\n    function resetConsumption(enable) {\n      // state.consumption.param.op = constants.filtersBase.consumption.op;\n      // state.consumption.param.value = constants.filtersBase.consumption.value;\n      state.consumption.param.op = \"any\";\n      state.consumption.param.value = 0;\n      if (enable != undefined) state.consumption.enabled = enable;\n    }\n    function resetModifiers(enable) {\n      // state.modifiers.param.values = constants.filtersBase.modifiers.values;\n      state.modifiers.param.values = [];\n      if (enable != undefined) state.modifiers.enabled = enable;\n    }\n    function resetRobonaut(enable) {\n      // state.robonaut.param.type = constants.filtersBase.robonaut.type;\n      // state.robonaut.param.op = constants.filtersBase.robonaut.op;\n      // state.robonaut.param.value = constants.filtersBase.robonaut.value;\n      state.robonaut.param.type = \"any\";\n      state.robonaut.param.op = \"any\";\n      state.robonaut.param.value = 0;\n      if (enable != undefined) state.robonaut.enabled = enable;\n    }\n    function reset() {\n      // console.debug(\"filtersBase!\", constants.filtersBase);\n      console.debug(\"reset!\", state);\n      resetName();\n      resetSide();\n      resetType();\n      resetTherms();\n      resetSpectral();\n      resetMass();\n      resetRadhard();\n      resetRequired();\n      resetThrust();\n      resetFuel();\n      resetConsumption();\n      resetModifiers();\n      resetRobonaut();\n      console.debug(\"reset filters!\", state);\n      filtersReset();\n      // ctx.emit(\"activeSlider\");\n    }\n\n    function changeName(event) {\n      state.name.param = event.target.value;\n      // console.debug(\"changeType!\", state);\n    }\n\n    function changeSide(event) {\n      state.side.param = event.target.value;\n      // console.debug(\"changeType!\", state);\n    }\n\n    function changeType(event) {\n      state.type.param = event.target.value;\n      // console.debug(\"changeType!\", state);\n    }\n\n    function changeSpectral(event) {\n      state.spectral.param = event.target.value;\n      console.debug(\"changeSpectral!\", state);\n    }\n    function changeMassOp(event) {\n      state.mass.param.op = event.target.value;\n      // console.debug(\"changeSpectral!\", state);\n    }\n\n    function changeMassValue(event) {\n      state.mass.param.value = event.target.value;\n    }\n    function changeRadhardOp(event) {\n      state.radhard.param.op = event.target.value;\n      // console.debug(\"changeSpectral!\", state);\n    }\n\n    function changeRadhardValue(event) {\n      state.radhard.param.value = event.target.value;\n    }\n    function changeThermsOp(event) {\n      state.therms.param.op = event.target.value;\n      // console.debug(\"changeType!\", state);\n    }\n\n    function changeThermsValue(event) {\n      state.therms.param.value = event.target.value;\n      // console.debug(\"changeType!\", state);\n    }\n\n    function changeRequiredOp(event) {\n      state.required.param.op = event.target.value;\n      // console.debug(\"changeType!\", state);\n    }\n\n    function changeRequiredValue(event) {\n      state.required.param.value = event.target.value;\n      // console.debug(\"changeType!\", state);\n    }\n\n    function changeThrustOp(event) {\n      state.thrust.param.op = event.target.value;\n    }\n    function changeThrustValue(event) {\n      state.thrust.param.value = event.target.value;\n    }\n    function changeFuelType(event) {\n      state.fuel.param.type = event.target.value;\n    }\n    function changeConsumptionOp(event) {\n      state.consumption.param.op = event.target.value;\n    }\n    function changeConsumptionValue(event) {\n      state.consumption.param.value = event.target.value;\n    }\n    function changeRobonautType(event) {\n      state.robonaut.param.type = event.target.value;\n    }\n    function changeRobonautOp(event) {\n      state.robonaut.param.op = event.target.value;\n    }\n    function changeRobonautValue(event) {\n      state.robonaut.param.value = event.target.value;\n    }\n    function changeModifiersValues(values) {\n      state.modifiers.param.value = values;\n      console.debug(\"changeModifiersValues!\", values, state.modifiers.param.value);\n    }\n    (0,vue__WEBPACK_IMPORTED_MODULE_2__.watch)(() => filters.value.deck, deck => {\n      // Imposta i controlli da abilitare/disabilitare\n      console.debug(\"watch!\", deck, _data_constants_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].filtersBase);\n      // Prima disattiva tutti i controlli\n      for (let key in state) {\n        // if ([\"name\", \"side\", \"type\", \"spectral\"].includes(key)) continue;\n        // state[key].enabled = true;\n        let command = `reset${key.charAt(0).toUpperCase() + key.slice(1)}(false)`;\n        console.debug(\"disattiva \", key, command);\n        eval(command);\n      }\n      // Poi riattiva i filtri compatibili con il deck selezionato\n      resetName(true);\n      resetSide(true);\n      if ([\"any\"].includes(deck)) {\n        resetMass(true);\n        resetRadhard(true);\n        resetRequired(true);\n      }\n      if ([\"generator\", \"reactor\"].includes(deck)) {\n        resetType(true);\n      }\n      if ([\"radiator\"].includes(deck)) {\n        resetTherms(true);\n      }\n      if ([\"freighter\", \"generator\", \"radiator\", \"reactor\", \"refinery\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetSpectral(true);\n      }\n      if ([\"bernal\", \"crew\", \"freighter\", \"generator\", \"radiator\", \"reactor\", \"refinery\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetMass(true);\n      }\n      if ([\"bernal\", \"crew\", \"freighter\", \"generator\", \"radiator\", \"reactor\", \"refinery\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetRadhard(true);\n      }\n      if ([\"bernal\", \"freighter\", \"generator\", \"radiator\", \"reactor\", \"refinery\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetRequired(true);\n      }\n      if ([\"bernal\", \"crew\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetThrust(true);\n      }\n      if ([\"bernal\", \"crew\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetFuel(true);\n      }\n      if ([\"bernal\", \"crew\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetConsumption(true);\n      }\n      if ([\"bernal\", \"crew\", \"freighter\", \"generator\", \"reactor\", \"robonaut\", \"thruster\", \"gwthruster\"].includes(deck)) {\n        resetModifiers(true);\n      }\n      if ([\"crew\", \"robonaut\"].includes(deck)) {\n        resetRobonaut(true);\n      }\n      /*\n      // Prima riattiva tutti i controlli\n      for (let key in state) {\n        // console.debug(\"for!\", state);\n        state[key].enabled = true;\n      }\n      // Poi resetta e disattiva quelli non compatibili con il deck selezionato\n      switch (deck) {\n        case \"bernal\":\n          // state.therms = {\n          //   param: constants.filtersBase.therms,\n          //   enabled: false,\n          // };\n          resetTherms(false);\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          state.spectral = {\n            param: constants.filtersBase.spectral,\n            enabled: false,\n          };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        case \"crew\":\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          state.spectral = {\n            param: constants.filtersBase.spectral,\n            enabled: false,\n          };\n          state.required = {\n            param: constants.filtersBase.required,\n            enabled: false,\n          };\n          break;\n        case \"freighter\":\n          state.thrust = {\n            param: constants.filtersBase.thrust,\n            enabled: false,\n          };\n          state.fuel = { param: constants.filtersBase.fuel, enabled: false };\n          state.consumption = {\n            param: constants.filtersBase.consumption,\n            enabled: false,\n          };\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          state.required = {\n            param: constants.filtersBase.required,\n            enabled: false,\n          };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        case \"generator\":\n          state.thrust = {\n            param: constants.filtersBase.thrust,\n            enabled: false,\n          };\n          state.fuel = { param: constants.filtersBase.fuel, enabled: false };\n          state.consumption = {\n            param: constants.filtersBase.consumption,\n            enabled: false,\n          };\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        case \"radiator\":\n          state.thrust = {\n            param: constants.filtersBase.thrust,\n            enabled: false,\n          };\n          state.fuel = { param: constants.filtersBase.fuel, enabled: false };\n          state.consumption = {\n            param: constants.filtersBase.consumption,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        case \"reactor\":\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        case \"refinery\":\n          state.thrust = {\n            param: constants.filtersBase.thrust,\n            enabled: false,\n          };\n          state.fuel = { param: constants.filtersBase.fuel, enabled: false };\n          state.consumption = {\n            param: constants.filtersBase.consumption,\n            enabled: false,\n          };\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        case \"robonaut\":\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          break;\n        case \"thruster\":\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        case \"gwthruster\":\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          state.robonaut = {\n            param: constants.filtersBase.robonaut,\n            enabled: false,\n          };\n          break;\n        default:\n          state.therms = {\n            param: constants.filtersBase.therms,\n            enabled: false,\n          };\n          state.type = { param: constants.filtersBase.type, enabled: false };\n          break;\n      }\n      // console.debug(\"watch 2!\", state);\n      */\n    });\n\n    const sound = new Audio(__webpack_require__(/*! @/assets/sounds/paper-away.mp3 */ \"./src/assets/sounds/paper-away.mp3\"));\n    function apply() {\n      sound.play();\n      let filtersValues = {};\n      for (let key of Object.keys(state)) {\n        filtersValues[key] = state[key].param;\n      }\n      console.debug(\"apply!\", filtersValues);\n      setFilters(filtersValues);\n      ctx.emit(\"activeSlider\");\n      // ctx.emit(\"filtersApplied\");\n    }\n\n    return {\n      state,\n      router,\n      apply,\n      reset,\n      resetTherms,\n      resetMass,\n      resetRadhard,\n      reactorTypes,\n      generatorTypes,\n      types,\n      requiredTypes,\n      sides,\n      changeName,\n      changeSide,\n      changeType,\n      changeThermsOp,\n      changeThermsValue,\n      changeSpectral,\n      changeMassOp,\n      changeMassValue,\n      changeRadhardOp,\n      changeRadhardValue,\n      changeRequiredOp,\n      changeRequiredValue,\n      changeThrustOp,\n      changeThrustValue,\n      changeFuelType,\n      changeConsumptionOp,\n      changeConsumptionValue,\n      changeModifiersValues,\n      changeRobonautType,\n      changeRobonautOp,\n      changeRobonautValue\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _utility_event_bus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/event-bus.js */ \"./src/utility/event-bus.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"Card\",\n  components: {},\n  props: {\n    cardFront: null,\n    cardBack: null\n  },\n  setup(props) {\n    // console.log(props);\n    // const { getCard } = inject(\"filters\");\n    const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const {\n      bus\n    } = (0,_utility_event_bus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const {\n      filters,\n      currentCard,\n      setCurrentCard\n    } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(\"filters\");\n    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n      cardVertical: \"dritto\",\n      cardOne: \"fronte\",\n      cardFront: props.cardFront,\n      cardBack: props.cardBack,\n      cardId: null\n      // cardId: props.cardFront.id,\n      // cardId: filters.value.side == 1 ? props.cardBack.id : props.cardFront.id,\n    });\n    // const state.cardId = computed(() => {\n    //   if (!state.cardFront) return \"\";\n    //   return state.cardOne == \"fronte\" ? state.cardFront.id : state.cardBack.id;\n    // });\n\n    const sound = new Audio(__webpack_require__(/*! @/assets/sounds/carddrop.mp3 */ \"./src/assets/sounds/carddrop.mp3\"));\n    const rotateHorizontal = () => {\n      // console.debug(\n      //   \"rotateHorizontal!\",\n      //   filters.value.side,\n      //   state.cardId,\n      //   currentCard.value,\n      //   state.cardFront.id,\n      //   state.cardBack.id\n      // );\n      if (state.cardFront.id.slice(0, -1) !== currentCard.value.slice(0, -1)) {\n        return;\n      }\n      state.cardOne == \"fronte\" ? state.cardOne = \"retro\" : state.cardOne = \"fronte\";\n      state.cardId = state.cardOne == \"fronte\" ? state.cardFront.id : state.cardBack.id;\n      console.debug(\"rotateHorizontal!\", state.cardId, currentCard.value, state.cardFront.id, state.cardBack.id, state.cardOne, state.cardVertical);\n      setCurrentCard(state.cardId);\n      // console.debug(\"rotateHorizontal\", sound);\n      sound.play();\n      // console.debug(\"rotateHorizontal\", sound);\n    };\n\n    const rotateRadiator = () => {\n      if (state.cardFront.id.slice(0, -1) !== currentCard.value.slice(0, -1)) {\n        return;\n      }\n      state.cardVertical == \"dritto\" ? state.cardVertical = \"rovescio\" : state.cardVertical = \"dritto\";\n      sound.play();\n      console.debug(\"rotateRadiator!\", filters.value.side, state.cardId, currentCard.value, state.cardOne, state.cardVertical);\n    };\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => bus.value.get(\"rotateRadiator\"), () => {\n      rotateRadiator();\n      // console.debug(\"rotateRadiator\", currentCard.value, props.cardFront.id);\n      // if (currentCard.value == props.cardFront.id) {\n      //   state.cardVertical == \"dritto\"\n      //     ? (state.cardVertical = \"rovescio\")\n      //     : (state.cardVertical = \"dritto\");\n      //   sound.play();\n      // }\n    });\n\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => bus.value.get(\"rotateHorizontal\"), () => {\n      rotateHorizontal();\n    });\n    return {\n      state,\n      router,\n      // cardId,\n      rotateHorizontal,\n      rotateRadiator\n      // rotateCard,\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import { reactive } from \"vue\";\n// import fs from \"fs\";\n// let version;\n// let author;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"MyFooter\",\n  components: {},\n  setup() {\n    const version = \"0.0.3beta\";\n    const author = \"Maurizio Amizzoni\";\n    // const state = reactive({\n    //   title: \"High Frontier 4 All - Decks Assistant\",\n    // });\n\n    return {\n      author,\n      version\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyHeader.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyHeader.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"MyHeader\",\n  components: {},\n  setup() {\n    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n      title: \"High Frontier 4 All - Decks Assistant\"\n    });\n    return {\n      state\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyHeader.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _utility_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/event-bus */ \"./src/utility/event-bus.js\");\n\n// import { useRouter } from \"vue-router\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"Sidebar\",\n  components: {},\n  props: {\n    // goToNextSlide: {\n    //   type: Function,\n    //   required: true,\n    // },\n  },\n  setup(props) {\n    console.debug(\"Sidebar setup\", props.goToNextSlide);\n    const {\n      emit\n    } = (0,_utility_event_bus__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const {\n      currentCard\n    } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(\"filters\");\n    const rotateRadiatorEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      if (!currentCard.value) return false;\n      return currentCard.value.substring(0, 2) == \"CD\";\n    });\n    function goToSlide(dir) {\n      console.debug(\"nextSlide!\", dir);\n      // if (props.goToNextSlide) {\n      // props.goToNextSlide();\n      // }\n      emit(\"goToSlide\", dir);\n    }\n    function rotateRadiator() {\n      console.debug(\"rotateRadiator\");\n      if (rotateRadiatorEnabled.value) {\n        emit(\"rotateRadiator\");\n      }\n    }\n    function rotateHorizontal() {\n      console.debug(\"rotateHorizontal\");\n      emit(\"rotateHorizontal\");\n    }\n\n    // const { goToPrevSlide, goToNextSlide } = inject(\n    //   \"goToPrevSlide\",\n    //   \"goToNextSlide\"\n    // );\n    // function goToNextSlide() {\n    //   this.$emit(\"goToNextSlide\");\n    // }\n    // const swiper = refs.swiper;\n\n    // const prevSlide = () => {\n    //   swiper.value.slidePrev();\n    // };\n\n    // const nextSlide = () => {\n    //   swiper.value.slideNext();\n    // };\n\n    // watchEffect(() => {\n    //   if (swiper.value) {\n    //     swiper.value.update();\n    //   }\n    // });\n    return {\n      rotateRadiator,\n      rotateRadiatorEnabled,\n      rotateHorizontal,\n      // goToPrevSlide,\n      goToSlide\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _utility_event_bus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utility/event-bus.js */ \"./src/utility/event-bus.js\");\n/* harmony import */ var _components_FlipCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FlipCard.vue */ \"./src/components/FlipCard.vue\");\n/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Sidebar.vue */ \"./src/components/Sidebar.vue\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/vue */ \"./node_modules/swiper/vue/swiper-vue.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ionic_vue_css_ionic_swiper_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/vue/css/ionic-swiper.css */ \"./node_modules/@ionic/vue/css/ionic-swiper.css\");\n/* harmony import */ var _ionic_vue_css_ionic_swiper_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_ionic_swiper_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/cards */ \"./src/data/cards.js\");\n// import { IonContent, IonPage } from \"@ionic/vue\";\n\n\n\n\n\n\n// Import per lo swiper\n\n\n\n\n\n\n\n\nconst alasql = __webpack_require__(/*! alasql */ \"./node_modules/alasql/dist/alasql.min.js\");\n// import alasql from \"alasql\";\n// import {cards as Images} from '../../public/assets/images/index.js';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"Cards\",\n  components: {\n    Swiper: swiper_vue__WEBPACK_IMPORTED_MODULE_5__.Swiper,\n    SwiperSlide: swiper_vue__WEBPACK_IMPORTED_MODULE_5__.SwiperSlide,\n    FlipCard: _components_FlipCard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  setup() {\n    const {\n      filters,\n      filtersReset,\n      filtersSetDeck,\n      filtersGetParams,\n      getCardBack,\n      setCurrentCard\n    } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(\"filters\");\n    const {\n      bus\n    } = (0,_utility_event_bus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const swiperInstance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();\n    function onSwiper(swiper) {\n      swiperInstance.value = swiper;\n    }\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => bus.value.get(\"goToSlide\"), dir => {\n      // console.debug(\"SliderCards->goToSlide!\", swiperInstance, dir[0]);\n      if (dir[0] == \"next\") {\n        swiperInstance.value.slideNext();\n      } else {\n        swiperInstance.value.slidePrev();\n      }\n    });\n\n    // const listCards = ref([]);\n    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n      // filters: ref(filters.value),\n      listCards: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => updateListCards())\n      // currentCard: 0,\n    });\n\n    const sound = new Audio(__webpack_require__(/*! @/assets/sounds/flipcard.mp3 */ \"./src/assets/sounds/flipcard.mp3\"));\n    const slideStartChange = () => {\n      sound.play();\n    };\n    const slideChanged = swiper => {\n      // state.currentCard.value = swiper.activeIndex;\n      const ix = swiper.activeIndex;\n      const slide = swiper.slides[ix];\n      if (!slide) return;\n      // const img = slide.querySelector(\"img\");\n      const img = slide.querySelector(\"div.card-inner\").classList.contains(\"flipme\") ? slide.querySelector(\"img:nth-of-type(2)\") : slide.querySelector(\"img:nth-of-type(1)\");\n      if (!img) return;\n      // console.debug(\n      //   \"slideChanged!\",\n      //   slide.querySelector(\"div.card-inner\").classList\n      // );\n      // debugger;\n      const cardId = slide.querySelector(\"div.card cardId\");\n      console.debug(\"slideChanged! cardId\", cardId);\n      const src = img.getAttribute(\"src\");\n      const idcard = src.split(\"/\").pop().split(\".\")[0];\n      setCurrentCard(idcard);\n      console.debug(\"slideChanged!\", swiper.activeIndex, img, idcard, swiper\n      // state.currentCard.value\n      );\n    };\n    // watchEffect(() => {\n    //   if (swiper.value) {\n    //     swiper.value.on(\"slideChange\", () => {\n    //       state.currentCard.value = swiper.value.activeIndex;\n    //       console.debug(\"slideChange!\", state.currentCard.value);\n    //     });\n    //   } else {\n    //     // not mounted yet, or the element was unmounted (e.g. by v-if)\n    //   }\n    // });\n\n    const updateListCards = () => {\n      let wh = \"\";\n      // let params = [\"deck='bernal'\"];\n      // let params = [];\n      let params = filtersGetParams();\n      console.debug(\"listCards\", filters.value, params);\n      if (params.length > 0) {\n        wh = \"WHERE (\" + params.join(\") AND (\") + \")\";\n      }\n      // console.debug(\"listCards!\", wh);\n      // return cards;\n      // wh = \"WHERE (mass = 10)\";\n      let sql = `SELECT * FROM ? ${wh}`;\n      // let sql = 'SELECT * FROM ? WHERE NOT spectral_type';\n      // console.debug(\"getCards!\", sql);\n      const res = alasql(sql, [_data_cards__WEBPACK_IMPORTED_MODULE_11__[\"default\"]]);\n      // console.log('getCards: ', res);\n      return res;\n    };\n    return {\n      router: (0,vue_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)(),\n      modules: [swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.Scrollbar],\n      state,\n      cards: _data_cards__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n      onSwiper,\n      slideChanged,\n      slideStartChange,\n      updateListCards,\n      filters,\n      filtersReset,\n      filtersSetDeck,\n      getCardBack\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _components_MyHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MyHeader.vue */ \"./src/components/MyHeader.vue\");\n/* harmony import */ var _components_MyFooter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/MyFooter.vue */ \"./src/components/MyFooter.vue\");\n/* harmony import */ var _components_FilterDecks_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterDecks.vue */ \"./src/components/FilterDecks.vue\");\n/* harmony import */ var _components_SliderCards_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SliderCards.vue */ \"./src/components/SliderCards.vue\");\n/* harmony import */ var _components_Filters_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Filters.vue */ \"./src/components/Filters.vue\");\n// import {\n//   IonContent,\n//   // IonHeader,\n//   IonPage,\n//   // IonTitle,\n//   // IonToolbar,\n// } from \"@ionic/vue\";\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"Cards\",\n  components: {\n    MyHeader: _components_MyHeader_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MyFooter: _components_MyFooter_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    // IonContent,\n    // IonHeader,\n    // IonPage,\n    // IonTitle,\n    // IonToolbar,\n    // SliderCards,\n    FilterDecks: _components_FilterDecks_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Filters: _components_Filters_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    SliderCards: _components_SliderCards_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    Transition: vue__WEBPACK_IMPORTED_MODULE_0__.Transition\n  },\n  setup() {\n    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n      activeComponent: \"SliderCards\"\n      // activeComponent: computed((componentName) => {\n      //   console.debug(\"load!\", state.activeComponent, componentName);\n      //   if (componentName == undefined) return \"SliderCards\";\n      //   else return componentName;\n      // }),\n    });\n\n    const showComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\n      return state.activeComponent;\n    });\n    function setActiveComponent(componentName) {\n      state.activeComponent = componentName;\n    }\n    function load(componentName) {\n      console.debug(\"load!\", state.activeComponent, componentName);\n      state.activeComponent = componentName;\n    }\n    return {\n      router: (0,vue_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),\n      state,\n      showComponent,\n      setActiveComponent,\n      load\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/vue */ \"./node_modules/@ionic/vue/dist/index.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  // eslint-disable-next-line vue/multi-word-component-names\n  name: \"Home\",\n  components: {\n    IonContent: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonContent,\n    IonHeader: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonHeader,\n    IonPage: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonPage,\n    IonTitle: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonTitle,\n    IonToolbar: _ionic_vue__WEBPACK_IMPORTED_MODULE_1__.IonToolbar\n  },\n  setup() {\n    return {\n      router: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)()\n    };\n  }\n}));\n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect */ \"./node_modules/@vueform/multiselect/dist/multiselect.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  setup() {\n    return {\n      value: null,\n      options: [\"Batman\", \"Robin\", \"Joker\"]\n    };\n  }\n});\n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ion_router_outlet = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ion-router-outlet\");\n  const _component_ion_app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ion-app\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_app, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_router_outlet)]),\n    _: 1 /* STABLE */\n  });\n}\n\n//# sourceURL=webpack://vue-hf4/./src/App.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FilterDecks.vue?vue&type=template&id=d30fe55c":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FilterDecks.vue?vue&type=template&id=d30fe55c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = {\n  class: \"flex flex-row w-full mt-10 p-3 border-b border-gray-300\",\n  style: {\n    \"box-shadow\": \"0px 6px 2px rgb(0 0 0 / 25%)\"\n  }\n};\nconst _hoisted_2 = {\n  class: \"inline-block relative\"\n};\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"All\", -1 /* HOISTED */);\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"option\", {\n  value: \"bernal\"\n}, \"Bernal\", -1 /* HOISTED */);\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"option\", {\n  value: \"crew\"\n}, \"Crew\", -1 /* HOISTED */);\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createStaticVNode)(\"<option value=\\\"freighter\\\">Freighter</option><option value=\\\"generator\\\">Generator</option><option value=\\\"radiator\\\">Radiator</option><option value=\\\"reactor\\\">Reactor</option><option value=\\\"refinery\\\">Refinery</option><option value=\\\"robonaut\\\">Robonaut</option><option value=\\\"thruster\\\">Thruster</option><option value=\\\"gwthruster\\\">GW/TW Thruster</option>\", 8);\nconst _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */);\nconst _hoisted_15 = {\n  class: \"flex flex-1 justify-end\"\n};\nconst _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fill: \"none\",\n  viewBox: \"0 0 24 24\",\n  \"stroke-width\": \"1.5\",\n  stroke: \"currentColor\",\n  class: \"w-6 h-6 text-blue-700 fill-current\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\",\n  d: \"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\"\n})], -1 /* HOISTED */);\nconst _hoisted_17 = [_hoisted_16];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(\" Decks: \"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.state.deck = $event),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\",\n    onChange: _cache[1] || (_cache[1] = (...args) => $setup.applyFilterDecks && $setup.applyFilterDecks(...args))\n  }, [_hoisted_3, _hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" <option value=\\\"colonist\\\">Colonist</option> \"), _hoisted_6], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_1__.vModelSelect, $setup.state.deck]]), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" <div class=\\\"cursor-pointer\\\" @click=\\\"reset\\\">\\n        <svg\\n          xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n          fill=\\\"none\\\"\\n          viewBox=\\\"0 0 24 24\\\"\\n          stroke-width=\\\"1.5\\\"\\n          stroke=\\\"currentColor\\\"\\n          class=\\\"w-6 h-6 text-red-700\\\"\\n        >\\n          <path\\n            stroke-linecap=\\\"round\\\"\\n            stroke-linejoin=\\\"round\\\"\\n            d=\\\"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\\\"\\n          />\\n        </svg>\\n      </div> \"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n    class: \"cursor-pointer\",\n    onClick: _cache[2] || (_cache[2] = $event => _ctx.$emit('activeFilters'))\n  }, _hoisted_17)])]);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/components/FilterDecks.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=template&id=61dd607b&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=template&id=61dd607b&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_2__.pushScopeId)(\"data-v-61dd607b\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"p-3 pt-2\"\n};\nconst _hoisted_2 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_3 = {\n  key: 0\n};\nconst _hoisted_4 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_5 = [\"value\"];\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_7 = {\n  key: 1\n};\nconst _hoisted_8 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_9 = [\"value\"];\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_11 = {\n  key: 2\n};\nconst _hoisted_12 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createStaticVNode)(\"<option value=\\\"none\\\" data-v-61dd607b>None</option><option value=\\\"all\\\" data-v-61dd607b>All</option><option value=\\\"any\\\" data-v-61dd607b>Any</option><option value=\\\"C\\\" data-v-61dd607b>C</option><option value=\\\"D\\\" data-v-61dd607b>D</option><option value=\\\"H\\\" data-v-61dd607b>H</option><option value=\\\"M\\\" data-v-61dd607b>M</option><option value=\\\"S\\\" data-v-61dd607b>S</option><option value=\\\"V\\\" data-v-61dd607b>V</option>\", 9);\nconst _hoisted_22 = [_hoisted_13];\nconst _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_24 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_25 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_26 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \">\"\n}, \"greater than\", -1 /* HOISTED */));\nconst _hoisted_27 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"=\"\n}, \"equal to\", -1 /* HOISTED */));\nconst _hoisted_28 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"<\"\n}, \"lesser than\", -1 /* HOISTED */));\nconst _hoisted_29 = [_hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28];\nconst _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_31 = [\"value\"];\nconst _hoisted_32 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_33 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_34 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \">\"\n}, \"greater than\", -1 /* HOISTED */));\nconst _hoisted_35 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"=\"\n}, \"equal to\", -1 /* HOISTED */));\nconst _hoisted_36 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"<\"\n}, \"lesser than\", -1 /* HOISTED */));\nconst _hoisted_37 = [_hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36];\nconst _hoisted_38 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_39 = [\"value\"];\nconst _hoisted_40 = {\n  class: \"border-t border-b border-gray-500\"\n};\nconst _hoisted_41 = {\n  key: 0\n};\nconst _hoisted_42 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_43 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_44 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \">\"\n}, \"greater than\", -1 /* HOISTED */));\nconst _hoisted_45 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"=\"\n}, \"equal to\", -1 /* HOISTED */));\nconst _hoisted_46 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"<\"\n}, \"lesser than\", -1 /* HOISTED */));\nconst _hoisted_47 = [_hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46];\nconst _hoisted_48 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_49 = [\"value\"];\nconst _hoisted_50 = {\n  key: 1\n};\nconst _hoisted_51 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_52 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_53 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"water\"\n}, \"Water\", -1 /* HOISTED */));\nconst _hoisted_54 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"dirt\"\n}, \"Dirt\", -1 /* HOISTED */));\nconst _hoisted_55 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"isotope\"\n}, \"Isotope\", -1 /* HOISTED */));\nconst _hoisted_56 = [_hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55];\nconst _hoisted_57 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_58 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \">\"\n}, \"greater than\", -1 /* HOISTED */));\nconst _hoisted_59 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"=\"\n}, \"equal to\", -1 /* HOISTED */));\nconst _hoisted_60 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"<\"\n}, \"lesser than\", -1 /* HOISTED */));\nconst _hoisted_61 = [_hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60];\nconst _hoisted_62 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_63 = [\"value\"];\nconst _hoisted_64 = {\n  key: 2\n};\nconst _hoisted_65 = {\n  class: \"relative mb-2 flex\"\n};\nconst _hoisted_66 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"label\", {\n  class: \"mr-1\"\n}, \"Modifiers:\", -1 /* HOISTED */));\nconst _hoisted_67 = {\n  key: 3\n};\nconst _hoisted_68 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_69 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_70 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"missile\"\n}, \"Missile\", -1 /* HOISTED */));\nconst _hoisted_71 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"buggy\"\n}, \"Buggy\", -1 /* HOISTED */));\nconst _hoisted_72 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"raygun\"\n}, \"Raygun\", -1 /* HOISTED */));\nconst _hoisted_73 = [_hoisted_69, _hoisted_70, _hoisted_71, _hoisted_72];\nconst _hoisted_74 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_75 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \">\"\n}, \"greater than\", -1 /* HOISTED */));\nconst _hoisted_76 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"=\"\n}, \"equal to\", -1 /* HOISTED */));\nconst _hoisted_77 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"<\"\n}, \"lesser than\", -1 /* HOISTED */));\nconst _hoisted_78 = [_hoisted_74, _hoisted_75, _hoisted_76, _hoisted_77];\nconst _hoisted_79 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_80 = [\"value\"];\nconst _hoisted_81 = {\n  key: 4\n};\nconst _hoisted_82 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_83 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"any\"\n}, \"any\", -1 /* HOISTED */));\nconst _hoisted_84 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \">\"\n}, \"greater than\", -1 /* HOISTED */));\nconst _hoisted_85 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"=\"\n}, \"equal to\", -1 /* HOISTED */));\nconst _hoisted_86 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n  value: \"<\"\n}, \"lesser than\", -1 /* HOISTED */));\nconst _hoisted_87 = [_hoisted_83, _hoisted_84, _hoisted_85, _hoisted_86];\nconst _hoisted_88 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_89 = [\"value\"];\nconst _hoisted_90 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_91 = {\n  class: \"inline-block relative mb-2\"\n};\nconst _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createStaticVNode)(\"<option value=\\\"any\\\" data-v-61dd607b>any</option><option value=\\\"none\\\" data-v-61dd607b>none</option><option value=\\\"generator\\\" data-v-61dd607b>generator</option><option value=\\\"therms\\\" data-v-61dd607b>radiator</option><option value=\\\"reactor\\\" data-v-61dd607b>reactor</option>\", 5);\nconst _hoisted_97 = [_hoisted_92];\nconst _hoisted_98 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", {\n  class: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"svg\", {\n  class: \"fill-current h-4 w-4\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 20 20\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"path\", {\n  d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"\n})])], -1 /* HOISTED */));\nconst _hoisted_99 = [\"value\"];\nconst _hoisted_100 = {\n  class: \"flex w-full items-center mt-10 border-t border-gray-400 pt-4\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_2__.resolveComponent)(\"Multiselect\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" NAME \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Name: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"input\", {\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.state.name.param = $event),\n    onChange: _cache[1] || (_cache[1] = (...args) => $setup.changeName && $setup.changeName(...args)),\n    type: \"text\",\n    class: \"border border-gray-500 hover:border-blue-500 rounded shadow w-48 text-md px-1\"\n  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelText, $setup.state.name.param]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" SIDE \"), $setup.state.side.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Side: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $setup.state.side.param = $event),\n    onChange: _cache[3] || (_cache[3] = (...args) => $setup.changeSide && $setup.changeSide(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)($setup.sides, item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"option\", {\n      key: item.value,\n      value: item.value\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item.label), 9 /* TEXT, PROPS */, _hoisted_5);\n  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.side.param]]), _hoisted_6])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" REACTOR/GENERATOR TYPE \"), $setup.state.type.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Type: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => $setup.state.type.param = $event),\n    onChange: _cache[5] || (_cache[5] = (...args) => $setup.changeType && $setup.changeType(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)($setup.types, item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"option\", {\n      key: item.value,\n      value: item.value\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item.label), 9 /* TEXT, PROPS */, _hoisted_9);\n  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.type.param]]), _hoisted_10])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" SPECTRAL TYPE \"), $setup.state.spectral.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Spectral type: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[6] || (_cache[6] = $event => $setup.state.spectral.param = $event),\n    onChange: _cache[7] || (_cache[7] = (...args) => $setup.changeSpectral && $setup.changeSpectral(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_22, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.spectral.param]]), _hoisted_23])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" MASS \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Mass: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[8] || (_cache[8] = $event => $setup.state.mass.param.op = $event),\n    onChange: _cache[9] || (_cache[9] = (...args) => $setup.changeMassOp && $setup.changeMassOp(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_29, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.mass.param.op]]), _hoisted_30]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[10] || (_cache[10] = $event => $setup.state.mass.param.value = $event),\n    onChange: _cache[11] || (_cache[11] = (...args) => $setup.changeMassValue && $setup.changeMassValue(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n      key: item,\n      value: item\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item), 9 /* TEXT, PROPS */, _hoisted_31);\n  }), 64 /* STABLE_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.mass.param.value], [vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $setup.state.mass.param.op != 'any']])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" RADHARD \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Rad-Hard: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[12] || (_cache[12] = $event => $setup.state.radhard.param.op = $event),\n    onChange: _cache[13] || (_cache[13] = (...args) => $setup.changeRadhardOp && $setup.changeRadhardOp(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_37, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.radhard.param.op]]), _hoisted_38]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[14] || (_cache[14] = $event => $setup.state.radhard.param.value = $event),\n    onChange: _cache[15] || (_cache[15] = (...args) => $setup.changeRadhardValue && $setup.changeRadhardValue(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n      key: item,\n      value: item\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item), 9 /* TEXT, PROPS */, _hoisted_39);\n  }), 64 /* STABLE_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.radhard.param.value], [vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $setup.state.radhard.param.op != 'any']])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" THRUST \"), $setup.state.thrust.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Thrust: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[16] || (_cache[16] = $event => $setup.state.thrust.param.op = $event),\n    onChange: _cache[17] || (_cache[17] = (...args) => $setup.changeThrustOp && $setup.changeThrustOp(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_47, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.thrust.param.op]]), _hoisted_48]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[18] || (_cache[18] = $event => $setup.state.thrust.param.value = $event),\n    onChange: _cache[19] || (_cache[19] = (...args) => $setup.changeThrustValue && $setup.changeThrustValue(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n      key: item,\n      value: item\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item), 9 /* TEXT, PROPS */, _hoisted_49);\n  }), 64 /* STABLE_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.thrust.param.value], [vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $setup.state.thrust.param.op != 'any']])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" CONSUMPTION \"), $setup.state.consumption.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Consumption: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[20] || (_cache[20] = $event => $setup.state.fuel.param.type = $event),\n    onChange: _cache[21] || (_cache[21] = (...args) => $setup.changeFuelType && $setup.changeFuelType(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_56, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.fuel.param.type]]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[22] || (_cache[22] = $event => $setup.state.consumption.param.op = $event),\n    onChange: _cache[23] || (_cache[23] = (...args) => $setup.changeConsumptionOp && $setup.changeConsumptionOp(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_61, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.consumption.param.op]]), _hoisted_62]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[24] || (_cache[24] = $event => $setup.state.consumption.param.value = $event),\n    onChange: _cache[25] || (_cache[25] = (...args) => $setup.changeConsumptionValue && $setup.changeConsumptionValue(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n      key: item,\n      value: item\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item), 9 /* TEXT, PROPS */, _hoisted_63);\n  }), 64 /* STABLE_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.consumption.param.value], [vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $setup.state.consumption.param.op != 'any']])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" MODIFIERS \"), $setup.state.modifiers.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)(_component_Multiselect, {\n    modelValue: $setup.state.modifiers.param.values,\n    \"onUpdate:modelValue\": _cache[26] || (_cache[26] = $event => $setup.state.modifiers.param.values = $event),\n    mode: \"tags\",\n    \"close-on-select\": false,\n    searchable: true,\n    \"create-option\": true,\n    options: [{\n      value: 'afterburn',\n      label: 'afterburn'\n    }, {\n      value: 'ballerina',\n      label: 'ballerina'\n    }, {\n      value: 'pacman',\n      label: 'pacman'\n    }, {\n      value: 'powersat',\n      label: 'powersat'\n    }, {\n      value: 'push',\n      label: 'push'\n    }, {\n      value: 'solar',\n      label: 'solar'\n    }, {\n      value: '+thrust',\n      label: '+thrust'\n    }, {\n      value: '-consumption',\n      label: '-consumption'\n    }],\n    onChange: $setup.changeModifiersValues\n  }, null, 8 /* PROPS */, [\"modelValue\", \"onChange\"])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" ROBONAUT \"), $setup.state.robonaut.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Robonaut: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[27] || (_cache[27] = $event => $setup.state.robonaut.param.type = $event),\n    onChange: _cache[28] || (_cache[28] = (...args) => $setup.changeRobonautType && $setup.changeRobonautType(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_73, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.robonaut.param.type]]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[29] || (_cache[29] = $event => $setup.state.robonaut.param.op = $event),\n    onChange: _cache[30] || (_cache[30] = (...args) => $setup.changeRobonautOp && $setup.changeRobonautOp(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_78, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.robonaut.param.op]]), _hoisted_79]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[31] || (_cache[31] = $event => $setup.state.robonaut.param.value = $event),\n    onChange: _cache[32] || (_cache[32] = (...args) => $setup.changeRobonautValue && $setup.changeRobonautValue(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)([0, 1, 2, 3, 4], item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n      key: item,\n      value: item\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item), 9 /* TEXT, PROPS */, _hoisted_80);\n  }), 64 /* STABLE_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.robonaut.param.value], [vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $setup.state.robonaut.param.op != 'any']])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" RADIATOR THERMS \"), $setup.state.therms.enabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"div\", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Therms: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[33] || (_cache[33] = $event => $setup.state.therms.param.op = $event),\n    onChange: _cache[34] || (_cache[34] = (...args) => $setup.changeThermsOp && $setup.changeThermsOp(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_87, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.therms.param.op]]), _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[35] || (_cache[35] = $event => $setup.state.therms.param.value = $event),\n    onChange: _cache[36] || (_cache[36] = (...args) => $setup.changeThermsValue && $setup.changeThermsValue(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)([1, 2, 3, 4, 5, 6], item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"option\", {\n      key: item,\n      value: item\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item), 9 /* TEXT, PROPS */, _hoisted_89);\n  }), 64 /* STABLE_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.therms.param.value], [vue__WEBPACK_IMPORTED_MODULE_2__.vShow, $setup.state.therms.param.op != 'any']]), _hoisted_90])])) : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" SUPPORT REQUIRED \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)(\" Support Required: \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[37] || (_cache[37] = $event => $setup.state.required.param.op = $event),\n    onChange: _cache[38] || (_cache[38] = (...args) => $setup.changeRequiredOp && $setup.changeRequiredOp(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, _hoisted_97, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.required.param.op]]), _hoisted_98]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"select\", {\n    \"onUpdate:modelValue\": _cache[39] || (_cache[39] = $event => $setup.state.required.param.value = $event),\n    onChange: _cache[40] || (_cache[40] = (...args) => $setup.changeRequiredValue && $setup.changeRequiredValue(...args)),\n    class: \"appearance-none bg-white border border-gray-500 hover:border-blue-500 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline\"\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)($setup.requiredTypes, item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(\"option\", {\n      key: item.value,\n      value: item.value\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(item.label), 9 /* TEXT, PROPS */, _hoisted_99);\n  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_2__.vModelSelect, $setup.state.required.param.value], [vue__WEBPACK_IMPORTED_MODULE_2__.vShow, !['any', 'none'].includes($setup.state.required.param.op)]])]), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)(\" BUTTONS \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"div\", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"button\", {\n    class: \"flex-1 bg-slate-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-900 rounded shadow mr-2\",\n    onClick: _cache[41] || (_cache[41] = $event => _ctx.$emit('activeSlider'))\n  }, \" Cancel \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"button\", {\n    class: \"flex-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded shadow mr-2\",\n    onClick: _cache[42] || (_cache[42] = $event => $setup.reset())\n  }, \" Reset filters \"), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)(\"button\", {\n    class: \"flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded shadow\",\n    onClick: _cache[43] || (_cache[43] = $event => $setup.apply())\n  }, \" Apply filters \")])]);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=template&id=1c803acd&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=template&id=1c803acd&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_1__.pushScopeId)(\"data-v-1c803acd\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"h-screen flex\"\n};\nconst _hoisted_2 = {\n  class: \"card-container flex\"\n};\nconst _hoisted_3 = [\"cardId\"];\nconst _hoisted_4 = {\n  class: \"card-face card-front\"\n};\nconst _hoisted_5 = [\"src\"];\nconst _hoisted_6 = {\n  key: 0,\n  class: \"card-face card-back\"\n};\nconst _hoisted_7 = [\"src\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_2, [$props.cardFront != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"div\", {\n    key: 0,\n    class: \"card\",\n    cardId: $setup.state.cardId\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([\"card-inner flex items-center w-full\", {\n      fronte: $setup.state.cardOne == 'fronte',\n      flipme: $setup.state.cardOne == 'retro',\n      dritto: $setup.state.cardOne == 'dritto',\n      rovescia: $setup.state.cardVertical == 'rovescio'\n    }]),\n    onClick: _cache[0] || (_cache[0] = (...args) => $setup.rotateHorizontal && $setup.rotateHorizontal(...args))\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"img\", {\n    src: __webpack_require__(\"./src/assets/images/cards sync recursive ^\\\\.\\\\/.*\\\\.jpg$\")(`./${$props.cardFront.id}.jpg`)\n  }, null, 8 /* PROPS */, _hoisted_5)]), $props.cardBack != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"img\", {\n    src: __webpack_require__(\"./src/assets/images/cards sync recursive ^\\\\.\\\\/.*\\\\.jpg$\")(`./${$props.cardBack.id}.jpg`)\n  }, null, 8 /* PROPS */, _hoisted_7)])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true)], 2 /* CLASS */)], 8 /* PROPS */, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true)])]);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-cbeb59d2\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"fixed bottom-0 left-0 right-0 bg-blue-500 w-full p-1 text-white h-6 z-50\"\n};\nconst _hoisted_2 = {\n  class: \"version text-right\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, \"v.\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.version) + \" by \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.author), 1 /* TEXT */)]);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyHeader.vue?vue&type=template&id=898691ee":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyHeader.vue?vue&type=template&id=898691ee ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"fixed top-0 left-0 right-0 z-50 bg-blue-500 w-full p-2 text-white\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <div class=\\\"relative\\\">\\n        <div class=\\\"m-0 bg-blue-500 w-full fixed top-0 left-0 right-0 z-50\\\">\\n          <div class=\\\"p-3 flex flex-row items-center text-white w-full\\\">\\n            <div class=\\\"flex flex-1 font-bold self-center\\\">Cards</div>\\n            <div\\n              class=\\\"flex flex-1 justify-end\\\"\\n              @click=\\\"() => router.push('/filters')\\\"\\n            >\\n              <svg\\n                xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n                fill=\\\"none\\\"\\n                viewBox=\\\"0 0 24 24\\\"\\n                stroke-width=\\\"1.5\\\"\\n                stroke=\\\"currentColor\\\"\\n                class=\\\"w-6 h-6\\\"\\n              >\\n                <path\\n                  stroke-linecap=\\\"round\\\"\\n                  stroke-linejoin=\\\"round\\\"\\n                  d=\\\"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\\\"\\n                />\\n              </svg>\\n            </div>\\n          </div>\\n        </div>\\n      </div> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.state.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <div\\n    class=\\\"flex flex-1 justify-end cursor-pointer\\\"\\n    @click=\\\"() => router.push('/filters')\\\"\\n  >\\n    <svg\\n      xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n      fill=\\\"none\\\"\\n      viewBox=\\\"0 0 24 24\\\"\\n      stroke-width=\\\"1.5\\\"\\n      stroke=\\\"currentColor\\\"\\n      class=\\\"w-6 h-6 text-blue-700 fill-current\\\"\\n    >\\n      <path\\n        stroke-linecap=\\\"round\\\"\\n        stroke-linejoin=\\\"round\\\"\\n        d=\\\"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\\\"\\n      />\\n    </svg>\\n  </div> \")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyHeader.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_1__.pushScopeId)(\"data-v-7d622f5c\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"toolbar flex flex-col h-48 bg-blue-500 text-white rounded-bl-xl items-center\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n  class: \"p-1 text-center\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n  class: \"text-xs\"\n}, \"Cards\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n  class: \"my-swiper-pagination\"\n})], -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"flex flex-row bg-green-600 items-center\",\n  style: {\n    \"background-color\": \"#2b8a3e\"\n  }\n};\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fill: \"none\",\n  viewBox: \"0 0 24 24\",\n  \"stroke-width\": \"2\",\n  stroke: \"currentColor\",\n  class: \"w-6 h-6 rotate-180\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\",\n  d: \"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9\"\n})], -1 /* HOISTED */));\nconst _hoisted_5 = [_hoisted_4];\nconst _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"svg\", {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fill: \"none\",\n  viewBox: \"0 0 24 24\",\n  \"stroke-width\": \"2\",\n  stroke: \"currentColor\",\n  class: \"w-6 h-6\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\",\n  d: \"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9\"\n})], -1 /* HOISTED */));\nconst _hoisted_7 = [_hoisted_6];\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"svg\", {\n  height: \"24\",\n  viewBox: \"0 0 24 24\",\n  width: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  class: \"w-6 h-6 rotate-90\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  d: \"m15.6893661 13.7425356.5-2c.1339487-.5357949-.191812-1.0787294-.7276069-1.2126781-.0793206-.0198302-.1607738-.0298575-.2425356-.0298575h-13.43844719c-.55228475 0-1 .4477153-1 1 0 .0817618.01002735.163215.0298575.2425356l.5 2c.11129175.445167.51127485.7574644.9701425.7574644h12.43844719c.4588676 0 .8588507-.3122974.9701425-.7574644zm-.1893661-5.2425356.5606576-1.68197288c.1746478-.52394332-.1085122-1.09026329-.6324555-1.26491107-.1023789-.03412629-.2096068-.05145569-.3175235-.0513167l-13.22209729.01713315c-.55228428.00071562-.99941904.44901061-.99870428 1.0012949 0 .10774719.01769263.21476369.05197848.31691043l.55814449 1.66286217m14-5 .3059335-1.83560101c.0907951-.54477032-.2772246-1.05999786-.8219949-1.15079291-.0543315-.00905524-.1093182-.01360608-.164399-.01360608h-12.63907918c-.55228475 0-1 .44771525-1 1 0 .05508086.00455084.11006756.01360608.16439899l.3059335 1.83560101\",\n  fill: \"none\",\n  stroke: \"currentColor\",\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\",\n  \"stroke-width\": \"1.5\",\n  transform: \"translate(2 3)\"\n})], -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"svg\", {\n  viewBox: \"0 0 24 24\",\n  width: \"24\",\n  height: \"24\",\n  fill: \"none\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  d: \"M2 12C2 17.5249 6.47508 22 12 22L9.5 19\",\n  stroke: \"#fff\",\n  \"stroke-width\": \"1.5\",\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  d: \"M22 12C22 6.47508 17.5249 2 12 2L14.5 5\",\n  stroke: \"#fff\",\n  \"stroke-width\": \"1.5\",\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"path\", {\n  d: \"M15 20.5L4 9.5L9.5 4L20.5 15L15 20.5Z\",\n  fill: \"none\",\n  stroke: \"#fff\",\n  \"stroke-width\": \"1.5\",\n  \"stroke-linecap\": \"round\",\n  \"stroke-linejoin\": \"round\"\n})], -1 /* HOISTED */));\nconst _hoisted_10 = [_hoisted_9];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n    class: \"m-0 p-1 border-r border-green-900 cursor-pointer\",\n    style: {\n      \"border-color\": \"#37b24d\"\n    },\n    onClick: _cache[0] || (_cache[0] = $event => $setup.goToSlide('prev'))\n  }, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n    class: \"m-0 p-1 cursor-pointer\",\n    onClick: _cache[1] || (_cache[1] = $event => $setup.goToSlide('next'))\n  }, _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n    class: \"m-0 p-2 cursor-pointer shadow-md w-full flex bg-orange-600 justify-center\",\n    style: {\n      \"background-color\": \"#37b24d\"\n    },\n    onClick: _cache[2] || (_cache[2] = (...args) => $setup.rotateHorizontal && $setup.rotateHorizontal(...args))\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" <svg\\n        fill=\\\"none\\\"\\n        viewBox=\\\"0 0 24 24\\\"\\n        stroke-width=\\\"0.7\\\"\\n        stroke=\\\"currentColor\\\"\\n        class=\\\"w-6 h-6\\\"\\n      >\\n        <path\\n          d=\\\"M18 7C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H15V19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H15V7H18Z\\\"\\n          fill=\\\"currentColor\\\"\\n          fill-opacity=\\\"0.5\\\"\\n        />\\n        <path d=\\\"M13 3H11V21H13V3Z\\\" fill=\\\"currentColor\\\" />\\n        <path\\n          d=\\\"M5 8C5 7.44772 5.44772 7 6 7H9V5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H9V17H6C5.44772 17 5 16.5523 5 16V8Z\\\"\\n          fill=\\\"currentColor\\\"\\n        />\\n      </svg> \"), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([\"m-0 p-2 shadow-md w-full flex text-center justify-center\", {\n      'radiator-rotate-active': $setup.rotateRadiatorEnabled,\n      'bg-gray-300': !$setup.rotateRadiatorEnabled\n    }]),\n    onClick: _cache[3] || (_cache[3] = (...args) => $setup.rotateRadiator && $setup.rotateRadiator(...args))\n  }, _hoisted_10, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" <div class=\\\"bg-gray-300 p-1\\\"></div>\\n    <div class=\\\"bg-gray-300 p-1\\\"></div> \"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" <div class=\\\"grow\\\"></div> \")]);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=template&id=5f54d002&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=template&id=5f54d002&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5f54d002\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"flex\"\n};\nconst _hoisted_2 = {\n  class: \"flex flex-col\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_FlipCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"FlipCard\");\n  const _component_swiper_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"swiper-slide\");\n  const _component_swiper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"swiper\");\n  const _component_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Sidebar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"\\n      :slidesPerView=\\\"1\\\"\\n      :spaceBetween=\\\"30\\\"\\n      :loop=\\\"true\\\"\\n      :effect=\\\"'fade'\\\"\\n    \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"\\n      Effetto Carte, molto bello\\n      :effect=\\\"'cards'\\\"\\n      :grabCursor=\\\"true\\\"\\n    \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_swiper, {\n    ref: \"swiper\",\n    slidesPerView: 1,\n    spaceBetween: 30,\n    nextButton: _ctx.swiper_btn_next,\n    prevButton: _ctx.swiper_btn_prev,\n    loop: true,\n    pagination: {\n      type: 'fraction',\n      el: '.my-swiper-pagination'\n    },\n    modules: $setup.modules,\n    class: \"swiper\",\n    onSlideChangeTransitionEnd: $setup.slideChanged,\n    onSlideChangeTransitionStart: $setup.slideStartChange,\n    onSwiper: $setup.onSwiper\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.state.listCards, card => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_swiper_slide, {\n        class: \"swiper-slide\",\n        key: card.id\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FlipCard, {\n          cardFront: card,\n          cardBack: $setup.getCardBack(card)\n        }, null, 8 /* PROPS */, [\"cardFront\", \"cardBack\"])])]),\n        _: 2 /* DYNAMIC */\n      }, 1024 /* DYNAMIC_SLOTS */);\n    }), 128 /* KEYED_FRAGMENT */))]),\n\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"nextButton\", \"prevButton\", \"pagination\", \"modules\", \"onSlideChangeTransitionEnd\", \"onSlideChangeTransitionStart\", \"onSwiper\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar)]);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_MyHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"MyHeader\");\n  const _component_FilterDecks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"FilterDecks\");\n  const _component_Filters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Filters\");\n  const _component_SliderCards = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"SliderCards\");\n  const _component_MyFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"MyFooter\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <ion-page>\\n    <ion-content> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MyHeader), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <div class=\\\"fixed top-0 left-0 right-0 z-50 bg-blue-500 p-2 text-white flex\\\">\\n    <div class=\\\"flex\\\">High Frontier 4 All - Decks Assistant</div>\\n    <div\\n      class=\\\"flex flex-1 justify-end cursor-pointer\\\"\\n      @click=\\\"setActiveComponent('Filters')\\\"\\n    >\\n      <svg\\n        xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n        fill=\\\"none\\\"\\n        viewBox=\\\"0 0 24 24\\\"\\n        stroke-width=\\\"1.5\\\"\\n        stroke=\\\"currentColor\\\"\\n        class=\\\"w-6 h-6 text-red-700 fill-current\\\"\\n      >\\n        <path\\n          stroke-linecap=\\\"round\\\"\\n          stroke-linejoin=\\\"round\\\"\\n          d=\\\"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\\\"\\n        />\\n      </svg>\\n    </div>\\n  </div> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FilterDecks, {\n    onActiveFilters: _cache[0] || (_cache[0] = $event => $setup.setActiveComponent('Filters'))\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <transition name=\\\"translate\\\" mode=\\\"out-in\\\">\\n    <component\\n      :is=\\\"state.activeComponent\\\"\\n      @hide=\\\"state.activeComponent('SliderCards')\\\"\\n    />\\n  </transition> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" <Transition name=\\\"slide-fade\\\">\\n    <component\\n      :is=\\\"showComponent\\\"\\n      @activeSlider=\\\"setActiveComponent('SliderCards')\\\"\\n    />\\n  </Transition> \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {\n    name: \"move\",\n    class: \"\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [$setup.showComponent == 'Filters' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Filters, {\n      key: 0,\n      onActiveSlider: _cache[1] || (_cache[1] = $event => $setup.setActiveComponent('SliderCards'))\n    })) : $setup.showComponent == 'SliderCards' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SliderCards, {\n      key: 1\n    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MyFooter), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" </ion-content>\\n  </ion-page> \")], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=template&id=c6bdc170&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=template&id=c6bdc170&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-c6bdc170\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"container\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"strong\", {\n  class: \"bg-blue-500\"\n}, \"Ready to create an app?\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Start with Ionic \"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  target: \"_blank\",\n  rel: \"noopener noreferrer\",\n  href: \"https://ionicframework.com/docs/components\"\n}, \"UI Components\")])], -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ion_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ion-title\");\n  const _component_ion_toolbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ion-toolbar\");\n  const _component_ion_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ion-header\");\n  const _component_ion_content = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ion-content\");\n  const _component_ion_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ion-page\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ion_page, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_header, {\n      translucent: true\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_toolbar, null, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_title, null, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Blank\")]),\n          _: 1 /* STABLE */\n        })]),\n\n        _: 1 /* STABLE */\n      })]),\n\n      _: 1 /* STABLE */\n    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_content, {\n      fullscreen: true\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_header, {\n        collapse: \"condense\"\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_toolbar, null, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ion_title, {\n            size: \"large\"\n          }, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Blank\")]),\n            _: 1 /* STABLE */\n          })]),\n\n          _: 1 /* STABLE */\n        })]),\n\n        _: 1 /* STABLE */\n      }), _hoisted_1]),\n      _: 1 /* STABLE */\n    })]),\n\n    _: 1 /* STABLE */\n  });\n}\n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=template&id=86c7dbaa":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=template&id=86c7dbaa ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"flex\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"\"\n}, \"Label:\", -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Multiselect\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {\n    modelValue: $setup.value,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $setup.value = $event),\n    mode: \"tags\",\n    \"close-on-select\": false,\n    searchable: true,\n    \"create-option\": true,\n    options: [{\n      value: 'batman',\n      label: 'Batman'\n    }, {\n      value: 'robin',\n      label: 'Robin'\n    }, {\n      value: 'joker',\n      label: 'Joker'\n    }]\n  }, null, 8 /* PROPS */, [\"modelValue\"])]);\n}\n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/data/cards.js":
/*!***************************!*\
  !*** ./src/data/cards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  \"id\": \"CQ038F\",\n  \"name\": \"ESA Space Unionist\",\n  \"side\": 0,\n  \"order\": \"F\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"missile\"],\n  \"isru\": 4,\n  \"thrust\": 12,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 8,\n  \"push\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ038R\",\n  \"name\": \"Anonymous P2P\",\n  \"side\": 1,\n  \"order\": \"E\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"buggy\", \"missile\"],\n  \"isru\": 4,\n  \"thrust\": 14,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 8,\n  \"push\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ039F\",\n  \"name\": \"Shimizu Corp Entrepreneurs\",\n  \"side\": 0,\n  \"order\": \"M\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"raygun\", \"buggy\"],\n  \"isru\": 4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ039R\",\n  \"name\": \"Nasrda Astronauts\",\n  \"side\": 1,\n  \"order\": \"L\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"missile\"],\n  \"isru\": 4,\n  \"thrust\": 7,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 11,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ040F\",\n  \"name\": \"United Nations Cosmonauts\",\n  \"side\": 0,\n  \"order\": \"A\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"buggy\", \"missile\"],\n  \"isru\": 4,\n  \"thrust\": 12,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 9,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ040R\",\n  \"name\": \"B612 Foundation\",\n  \"side\": 1,\n  \"order\": \"H\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"raygun\", \"missile\"],\n  \"isru\": 4,\n  \"thrust\": 15,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 10,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ041F\",\n  \"name\": \"Taikonauts\",\n  \"side\": 0,\n  \"order\": \"C\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"missile\"],\n  \"isru\": 4,\n  \"thrust\": 14,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 9,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ041R\",\n  \"name\": \"ROSCOSMOS\",\n  \"side\": 1,\n  \"order\": \"B\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"raygun\", \"missile\"],\n  \"isru\": 4,\n  \"thrust\": 15,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 10,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ042F\",\n  \"name\": \"NASA Astronauts\",\n  \"side\": 0,\n  \"order\": \"D\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"missile\"],\n  \"isru\": 4,\n  \"thrust\": 14,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 8,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ042R\",\n  \"name\": \"ISRO Glavcosmonauts\",\n  \"side\": 1,\n  \"order\": \"G\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"raygun\", \"missile\"],\n  \"isru\": 4,\n  \"thrust\": 11,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 14,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ043F\",\n  \"name\": \"SpaceX\",\n  \"side\": 0,\n  \"order\": \"J\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"missile\"],\n  \"isru\": 4,\n  \"thrust\": 15,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 10,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CQ043R\",\n  \"name\": \"Norse Astronauts\",\n  \"side\": 1,\n  \"order\": \"K\",\n  \"deck\": \"crew\",\n  \"robo_type\": [\"buggy\", \"missile\"],\n  \"isru\": 4,\n  \"thrust\": 15,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 14,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M2B178F\",\n  \"name\": \"GEO Elevator Bernal\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [6],\n  \"thrust\": 3,\n  \"ability\": \"HOME: Boost direct to Home Bernal without doubling boost costs.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Atmospheric\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B178R\",\n  \"name\": \"Space Elevator Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [7],\n  \"thrust\": 3,\n  \"ability\": \"Your factory-assisted landings/liftoffs anywhere treat lander burns as normal Burn Spaces.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B172F\",\n  \"name\": \"L1 Climate Control Bernal\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [8],\n  \"thrust\": 3,\n  \"ability\": \"HOME: You are always the 1st player, superseding all other claimants.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Atmospheric\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B172R\",\n  \"name\": \"Climate Control Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [12],\n  \"radhard\": [8],\n  \"thrust\": 3,\n  \"ability\": \"+2 VP per Dirtside for this Bernal.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B173F\",\n  \"name\": \"L2 Collimator Bernal\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [8],\n  \"thrust\": 3,\n  \"ability\": \"HOME: Gain the Powersat faction privilege.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Push\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B173R\",\n  \"name\": \"Collimator Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [9],\n  \"thrust\": 3,\n  \"ability\": \"Gain the Powersat faction privilege. Powersat push includes a Bonus Pivot.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B175F\",\n  \"name\": \"L3 Lofstrom Loop Microgravity\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [8],\n  \"thrust\": 3,\n  \"ability\": \"HOME: Boost direct to Home Bernal without doubling boost costs.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Submarine\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B175R\",\n  \"name\": \"Lofstrom Loop Microgravity Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [9],\n  \"thrust\": 3,\n  \"ability\": \"Your factory-assisted landings/liftoffs anywhere treat lander burns as normal Burn Spaces.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B170F\",\n  \"name\": \"L4 Antimatter Factory\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [9],\n  \"thrust\": 3,\n  \"ability\": \"HOME: Your Crew has an On-Board Nuclear X reactor.\",\n  \"powersat\": 1,\n  \"required_therms\": 2,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"M\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B170R\",\n  \"name\": \"Antimatter Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [10],\n  \"thrust\": 3,\n  \"ability\": \"Your Crew has an On-Board Nuclear ANY reactor.\",\n  \"powersat\": 1,\n  \"required_therms\": 2,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B176F\",\n  \"name\": \"L4s Pharmaceutics Bernal\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [6],\n  \"thrust\": 3,\n  \"ability\": \"HOME: Gain the Skunkworks faction privilege.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Astrobiology\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B176R\",\n  \"name\": \"Pharmaceutics Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [7],\n  \"thrust\": 3,\n  \"ability\": \"Gain the Skunkworks faction privilege & impose academia hand limit on all opponents.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B177F\",\n  \"name\": \"L5 Solar Cell Factory\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [6],\n  \"thrust\": 3,\n  \"ability\": \"HOME: +1 to the Net Thrust of your Spacecraft that use Solar-Power.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Push\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B177R\",\n  \"name\": \"Solar Cell Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [8],\n  \"thrust\": 3,\n  \"ability\": \"+2 to the Net Thrust of your Spacecraft that use Solar-Power.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B171F\",\n  \"name\": \"L5s Cancer Hospital\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [6],\n  \"thrust\": 3,\n  \"ability\": \"HOME: You are immune to budget cuts.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Submarine\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B171R\",\n  \"name\": \"Cancer Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [12],\n  \"radhard\": [7],\n  \"thrust\": 3,\n  \"ability\": \"Gain +1 Token VP for each Colony Dome. Your Crew and Human Colonists have a rad-hard of at least 7.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B174F\",\n  \"name\": \"SSO Diplomatic\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [6],\n  \"thrust\": 3,\n  \"ability\": \"HOME: (Module 0) Your delegates in the Ideology of your Faction color are +1 VP each.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Astrobiology\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B174R\",\n  \"name\": \"Diplomatic Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [7],\n  \"thrust\": 3,\n  \"ability\": \"(Module 0) Your delegates in the assembly are +1 VP each.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B179F\",\n  \"name\": \"Tourism Cycler\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [7],\n  \"thrust\": 3,\n  \"ability\": \"HOME: Can designate any Spacecraft to forgo Belt Rolls in the Radiation Belts near Earth.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"Atmospheric\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M2B179R\",\n  \"name\": \"Tourism Hotel\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [7],\n  \"thrust\": 3,\n  \"ability\": \"+2 VP per Dirtside for this Bernal.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"PHFB198F\",\n  \"name\": \"L2 Force Field Bernal\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [10],\n  \"thrust\": 3,\n  \"ability\": \"All your other cards have +1 rad-hardness.\",\n  \"powersat\": 1,\n  \"required_therms\": 2,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"H\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"PHFB198R\",\n  \"name\": \"Force Field Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [10],\n  \"thrust\": 3,\n  \"ability\": \"All your other cards have +3 rad-hardness.\",\n  \"powersat\": 1,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"PHFB199F\",\n  \"name\": \"Catcher’s Mitt Bernal\",\n  \"side\": 0,\n  \"deck\": \"bernal\",\n  \"type\": \"base\",\n  \"mass\": [10],\n  \"radhard\": [6],\n  \"thrust\": 3,\n  \"ability\": \"HOME: Gain the Powersat faction privilege.\",\n  \"powersat\": 1,\n  \"required_therms\": 2,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"promotion_colony\": \"H\",\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"PHFB199R\",\n  \"name\": \"Catcher’s Mitt Lab\",\n  \"side\": 1,\n  \"deck\": \"bernal\",\n  \"type\": \"promoted\",\n  \"mass\": [10],\n  \"radhard\": [10],\n  \"thrust\": 3,\n  \"ability\": \"Gain the Powersat faction privilege. Powersat push includes a Bonus Pivot.\",\n  \"powersat\": 1,\n  \"required_therms\": 2,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"2\"\n}, {\n  \"id\": \"M1W157F\",\n  \"name\": \"Amat-Catalyzed Fission-Fusion\",\n  \"side\": 0,\n  \"deck\": \"gwthruster\",\n  \"type\": \"GW Thruster\",\n  \"spectral_type\": \"S\",\n  \"mass\": [3],\n  \"radhard\": [9],\n  \"future\": null,\n  \"thrust\": 10,\n  \"afterburn\": 2,\n  \"required_therms\": 2,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0.33,\n  \"promotion_colony\": \"D\",\n  \"required_reactor\": \"X\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W157R\",\n  \"name\": \"Amat-Initiated H-B Magnetic-Inertial\",\n  \"side\": 1,\n  \"deck\": \"gwthruster\",\n  \"type\": \"TW Thruster\",\n  \"spectral_type\": \"S\",\n  \"mass\": [1],\n  \"radhard\": [10],\n  \"future\": \"MINI-BLACK HOLE FUTURE: Req = Industrialized centaur with 10 isotope FTs. Effects = double all isotope refuel, 10 VP.\",\n  \"thrust\": 8,\n  \"afterburn\": 5,\n  \"required_therms\": 1,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W160F\",\n  \"name\": \"Dense Plasma H-B Focus Fusion\",\n  \"side\": 0,\n  \"deck\": \"gwthruster\",\n  \"type\": \"GW Thruster\",\n  \"spectral_type\": \"D\",\n  \"mass\": [1],\n  \"radhard\": [8],\n  \"future\": null,\n  \"thrust\": 2,\n  \"afterburn\": 5,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0.1,\n  \"promotion_colony\": \"D\",\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W160R\",\n  \"name\": \"Crossfire H-B Focus Fusion\",\n  \"side\": 1,\n  \"deck\": \"gwthruster\",\n  \"type\": \"TW Thruster\",\n  \"spectral_type\": \"D\",\n  \"mass\": [1],\n  \"radhard\": [9],\n  \"future\": \"PROTIUM FUSION FUTURE: Req = Promoted Bernal with H Dirtside. Effects = double all isotope refuel, 10 VP.\",\n  \"thrust\": 3,\n  \"afterburn\": 9,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W158F\",\n  \"name\": \"Levitated Dipole 6Li-H Fusion\",\n  \"side\": 0,\n  \"deck\": \"gwthruster\",\n  \"type\": \"GW Thruster\",\n  \"spectral_type\": \"V\",\n  \"mass\": [4],\n  \"radhard\": [5],\n  \"future\": null,\n  \"thrust\": 2,\n  \"afterburn\": 4,\n  \"required_therms\": 1,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"promotion_colony\": \"S\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W158R\",\n  \"name\": \"Dusty Plasma\",\n  \"side\": 1,\n  \"deck\": \"gwthruster\",\n  \"type\": \"TW Thruster\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [8],\n  \"future\": \"MASS BEAM FUTURE: Req = Promoted Bernal with Io or Triton Dirtside. Effects = your Powersat adds +2 thrust, 7 VP.\",\n  \"thrust\": 2,\n  \"afterburn\": 9,\n  \"required_therms\": 3,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W162F\",\n  \"name\": \"Mini-Mag Orion Z-Pinch Fission\",\n  \"side\": 0,\n  \"deck\": \"gwthruster\",\n  \"type\": \"GW Thruster\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1],\n  \"radhard\": [9],\n  \"future\": null,\n  \"thrust\": 12,\n  \"required_therms\": 2,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0.33,\n  \"promotion_colony\": \"D\",\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W162R\",\n  \"name\": \"Solem Medusa Tugged Orion\",\n  \"side\": 1,\n  \"deck\": \"gwthruster\",\n  \"type\": \"TW Thruster\",\n  \"spectral_type\": \"M\",\n  \"mass\": [6],\n  \"radhard\": [9],\n  \"future\": \"LITHIATED AMMONIA ICE STARSHIP FUTURE: Req = Ad astra exit with 10 isotope fuel. Effect = 14 VP.\",\n  \"thrust\": 9,\n  \"afterburn\": 3,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W156F\",\n  \"name\": \"Salt-Water Zubrin\",\n  \"side\": 0,\n  \"deck\": \"gwthruster\",\n  \"type\": \"GW Thruster\",\n  \"spectral_type\": \"S\",\n  \"mass\": [1],\n  \"radhard\": [6],\n  \"future\": null,\n  \"thrust\": 14,\n  \"afterburn\": 1,\n  \"required_therms\": 5,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0.5,\n  \"promotion_colony\": \"M\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W156R\",\n  \"name\": \"Zubrin-GDM\",\n  \"side\": 1,\n  \"deck\": \"gwthruster\",\n  \"type\": \"TW Thruster\",\n  \"spectral_type\": \"S\",\n  \"mass\": [3],\n  \"radhard\": [8],\n  \"future\": \"SPACEFARING FUTURE: Req = Bernal with 8+ dirtside hydration. Effects = Allowed 1 extra Colonist, 7 VP.\",\n  \"thrust\": 6,\n  \"afterburn\": 8,\n  \"required_therms\": 4,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W161F\",\n  \"name\": \"Spheromak 3He-D Magnetic Fusion\",\n  \"side\": 0,\n  \"deck\": \"gwthruster\",\n  \"type\": \"GW Thruster\",\n  \"spectral_type\": \"H\",\n  \"mass\": [4],\n  \"radhard\": [8],\n  \"future\": null,\n  \"thrust\": 6,\n  \"afterburn\": 6,\n  \"required_therms\": 4,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0.1,\n  \"promotion_colony\": \"H\",\n  \"required_generator\": \"E\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W161R\",\n  \"name\": \"Colliding FRC 3He-D Fusion\",\n  \"side\": 1,\n  \"deck\": \"gwthruster\",\n  \"type\": \"TW Thruster\",\n  \"spectral_type\": \"H\",\n  \"mass\": [3],\n  \"radhard\": [9],\n  \"future\": \"ENZMANN STARSHIP FUTURE: Req = Ad astra exit with 2 Promoted Colonists + Mobile Factory. Effect = 12 VP.\",\n  \"thrust\": 4,\n  \"afterburn\": 10,\n  \"required_therms\": 2,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"required_reactor\": \"A\",\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W159F\",\n  \"name\": \"VISTA D-T Inertial Fusion\",\n  \"side\": 0,\n  \"deck\": \"gwthruster\",\n  \"type\": \"GW Thruster\",\n  \"spectral_type\": \"H\",\n  \"mass\": [5],\n  \"radhard\": [8],\n  \"future\": null,\n  \"thrust\": 9,\n  \"afterburn\": 3,\n  \"required_therms\": 2,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0.25,\n  \"promotion_colony\": \"H\",\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"M1W159R\",\n  \"name\": \"Daedalus 3He-D Inertial Fusion\",\n  \"side\": 1,\n  \"deck\": \"gwthruster\",\n  \"type\": \"TW Thruster\",\n  \"spectral_type\": \"H\",\n  \"mass\": [5],\n  \"radhard\": [9],\n  \"future\": \"FUSION CANDLE FUTURE: Req = Triton Colony & Promoted Bernal with Neptune Aerostat Dirtside. Effects = double all isotope refuel, 14 VP.\",\n  \"thrust\": 11,\n  \"afterburn\": 8,\n  \"required_therms\": 3,\n  \"fuel_type\": \"isotope\",\n  \"fuel_consumption\": 0,\n  \"required_generator\": \"P\",\n  \"module\": \"1\"\n}, {\n  \"id\": \"CD092F\",\n  \"name\": \"Bubble Membrane\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0, 1],\n  \"radhard\": [1, 0],\n  \"therms\": [1, 2],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD092R\",\n  \"name\": \"Electrostatic Membrane\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0, 1],\n  \"radhard\": [3, 2],\n  \"therms\": [1, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD100F\",\n  \"name\": \"Dielectric X-Ray Window\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"D\",\n  \"mass\": [4, 5],\n  \"radhard\": [7, 7],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD100R\",\n  \"name\": \"Graphene Crystal X-Ray Mirror\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"D\",\n  \"mass\": [0, 1],\n  \"radhard\": [7, 7],\n  \"therms\": [1, 2],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD097F\",\n  \"name\": \"ETHER Charged Dust\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1, 2],\n  \"radhard\": [1, 1],\n  \"therms\": [1, 2],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD097R\",\n  \"name\": \"Curie Point\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0, 1],\n  \"radhard\": [5, 3],\n  \"therms\": [1, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD102F\",\n  \"name\": \"Li Heatsink Fountain\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"S\",\n  \"mass\": [2, 3],\n  \"radhard\": [6, 6],\n  \"therms\": [1, 5],\n  \"ability\": \"[Heavy] Switch to light side after 1st use.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD102R\",\n  \"name\": \"Thermochemical Heatsink Fountain\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"S\",\n  \"mass\": [1, 2],\n  \"radhard\": [6, 6],\n  \"therms\": [1, 6],\n  \"ability\": \"[Heavy] Switch to light side after 1st use.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD099F\",\n  \"name\": \"Magnetocaloric Refrigerator\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"S\",\n  \"mass\": [2, 3],\n  \"radhard\": [6, 6],\n  \"therms\": [3, 4],\n  \"ability\": \"This card can cool its own supports.\",\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD099R\",\n  \"name\": \"Nuclear Fuel Spin Polarizer\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0, 1],\n  \"radhard\": [5, 4],\n  \"therms\": [1, 2],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD094F\",\n  \"name\": \"Microtube Array\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"C\",\n  \"mass\": [2, 3],\n  \"radhard\": [1, 0],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD094R\",\n  \"name\": \"Marangoni Flow\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0, 1],\n  \"radhard\": [2, 1],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD098F\",\n  \"name\": \"Mo / Li Heat Pipe\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1, 2],\n  \"radhard\": [2, 1],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD098R\",\n  \"name\": \"Tin Droplet\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0, 1],\n  \"radhard\": [3, 2],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD103F\",\n  \"name\": \"Qu Tube\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1, 4],\n  \"radhard\": [4, 2],\n  \"therms\": [1, 2],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD103R\",\n  \"name\": \"ANDR / In Dream Pipe\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0, 1],\n  \"radhard\": [3, 2],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD093F\",\n  \"name\": \"SS / NaK Pumped Loop\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [2, 4],\n  \"radhard\": [1, 0],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD093R\",\n  \"name\": \"Hula-Hoop\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1, 2],\n  \"radhard\": [6, 6],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD096F\",\n  \"name\": \"Salt-Cooled Reflux Tube\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"C\",\n  \"mass\": [3, 4],\n  \"radhard\": [4, 4],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD096R\",\n  \"name\": \"Buckytube Filament\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0, 1],\n  \"radhard\": [4, 3],\n  \"therms\": [2, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD101F\",\n  \"name\": \"Steel / Pb-Bi Pumped Loop\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [2, 4],\n  \"radhard\": [3, 2],\n  \"therms\": [1, 2],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD101R\",\n  \"name\": \"Pulsating Heat Pipe\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1, 2],\n  \"radhard\": [1, 1],\n  \"therms\": [2, 4],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD095F\",\n  \"name\": \"Ti / K Heat Pipe\",\n  \"side\": 0,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [2, 4],\n  \"radhard\": [3, 2],\n  \"therms\": [1, 2],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CD095R\",\n  \"name\": \"Flux-Pinned Superthermal\",\n  \"side\": 1,\n  \"deck\": \"radiator\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1, 2],\n  \"radhard\": [5, 5],\n  \"therms\": [1, 3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX090F\",\n  \"name\": \"Cermet NERVA Fission\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"O\",\n  \"spectral_type\": \"S\",\n  \"mass\": [1],\n  \"radhard\": [7],\n  \"thrust_modifier\": +3,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX090R\",\n  \"name\": \"Pulsed NTR Fission\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"O|B\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"required_therms\": 5,\n  \"fuel_consumption_modifier\": \"1/4\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX087F\",\n  \"name\": \"D-D Fusion Magneto-Inertial\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"B\",\n  \"spectral_type\": \"D\",\n  \"mass\": [1],\n  \"radhard\": [3],\n  \"thrust_modifier\": +2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX087R\",\n  \"name\": \"H-B Fusion Reciprocating Plasmoid\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"B\",\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"required_therms\": 3,\n  \"thrust_modifier\": +4,\n  \"fuel_consumption_modifier\": \"1/2\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX084F\",\n  \"name\": \"D-T Fusion Tokamak\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"O\",\n  \"spectral_type\": \"H\",\n  \"mass\": [3],\n  \"radhard\": [5],\n  \"required_therms\": 2,\n  \"thrust_modifier\": +3,\n  \"fuel_consumption_modifier\": \"1/2\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX084R\",\n  \"name\": \"Antimatter GDM\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"X|O|B\",\n  \"spectral_type\": \"H\",\n  \"mass\": [0],\n  \"radhard\": [9],\n  \"required_therms\": 3,\n  \"fuel_consumption_modifier\": \"1/4\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX091F\",\n  \"name\": \"D-T Gun Fusion\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"B\",\n  \"spectral_type\": \"H\",\n  \"mass\": [1],\n  \"radhard\": [9],\n  \"thrust_modifier\": +1,\n  \"required_generator\": \"P\",\n  \"fuel_consumption_modifier\": \"1/4\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX091R\",\n  \"name\": \"Macron Blowpipe Fusion\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"X|O|B\",\n  \"spectral_type\": \"H\",\n  \"mass\": [0],\n  \"radhard\": [10],\n  \"required_generator\": \"P\",\n  \"fuel_consumption_modifier\": \"1/10\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX085F\",\n  \"name\": \"Lyman Alpha Trap\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"X|B\",\n  \"spectral_type\": \"S\",\n  \"mass\": [2],\n  \"radhard\": [4],\n  \"thrust_modifier\": -2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX085R\",\n  \"name\": \"Free Radical Hydrogen Trap\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"X|B\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [4],\n  \"required_therms\": 1,\n  \"fuel_consumption_modifier\": \"1/2\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX089F\",\n  \"name\": \"Metallic Hydrogen\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"B\",\n  \"spectral_type\": \"V\",\n  \"mass\": [0],\n  \"radhard\": [2],\n  \"required_therms\": 2,\n  \"thrust_modifier\": +4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX089R\",\n  \"name\": \"Fission-Augmented D-T Inertial Fusion\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"B\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [7],\n  \"required_therms\": 2,\n  \"thrust_modifier\": +7,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX083F\",\n  \"name\": \"Mini-Mag RF Paul Trap\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"X\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [2],\n  \"ability\": \"SCOOP: -2 ISRU for Colocated ISRU platforms at Aerostat Sites.\",\n  \"pacman\": 1,\n  \"thrust_modifier\": -3,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX083R\",\n  \"name\": \"Ultracold Neutrons\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"X|B\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"ability\": \"SCOOP: -2 ISRU for Colocated ISRU platforms at Aerostat Sites.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX080F\",\n  \"name\": \"Pebble Bed Fission\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"O\",\n  \"spectral_type\": \"S\",\n  \"mass\": [1],\n  \"radhard\": [6],\n  \"required_therms\": 1,\n  \"thrust_modifier\": +4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX080R\",\n  \"name\": \"VCR Light Bulb Fission\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"O\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [6],\n  \"required_therms\": 1,\n  \"thrust_modifier\": +2,\n  \"fuel_consumption_modifier\": \"1/2\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX086F\",\n  \"name\": \"Penning Trap\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"X|B\",\n  \"spectral_type\": \"H\",\n  \"mass\": [2],\n  \"radhard\": [3],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX086R\",\n  \"name\": \"3He-D Fusion Mirror Cell\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"O\",\n  \"spectral_type\": \"H\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"required_therms\": 1,\n  \"fuel_consumption_modifier\": \"1/4\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX081F\",\n  \"name\": \"Project Orion\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"B\",\n  \"spectral_type\": \"S\",\n  \"mass\": [6],\n  \"radhard\": [8],\n  \"required_therms\": 1,\n  \"thrust_modifier\": +7,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX081R\",\n  \"name\": \"Project Valkyrie\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"B\",\n  \"spectral_type\": \"S\",\n  \"mass\": [1],\n  \"radhard\": [9],\n  \"required_therms\": 3,\n  \"ability\": \"When activated, Decommission colocated cards with Rad-Hard <4.\",\n  \"thrust_modifier\": +8,\n  \"required_reactor\": \"X\",\n  \"fuel_consumption_modifier\": \"1/4\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX088F\",\n  \"name\": \"Rubbia Thin Film Fission Hohlraum\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"O\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"required_therms\": 1,\n  \"fuel_consumption_modifier\": \"1/2\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX088R\",\n  \"name\": \"Positronium Bottle\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"X|O\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [9],\n  \"required_therms\": 1,\n  \"fuel_consumption_modifier\": \"1/2\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX082F\",\n  \"name\": \"Supercritical Water Fission\",\n  \"side\": 0,\n  \"deck\": \"reactor\",\n  \"type\": \"O\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [7],\n  \"required_therms\": 2,\n  \"thrust_modifier\": +3,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CX082R\",\n  \"name\": \"H-6Li Fusor\",\n  \"side\": 1,\n  \"deck\": \"reactor\",\n  \"type\": \"O|B\",\n  \"spectral_type\": \"V\",\n  \"mass\": [0],\n  \"radhard\": [4],\n  \"thrust_modifier\": +2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF068F\",\n  \"name\": \"Atomic Layer Deposition\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [2],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF068R\",\n  \"name\": \"Ilmenite Semiconductor Film\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [6],\n  \"ability\": \"POWER GIRDLE: If used to industrialize a non-atmospheric site of size 8+, you permanently gain the Powersat faction privilege.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF073F\",\n  \"name\": \"Basalt Fiber Spinning\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"S\",\n  \"mass\": [3],\n  \"radhard\": [5],\n  \"required_reactor\": \"B|O|X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF073R\",\n  \"name\": \"Von Neumann Santa Claus Machine\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"S\",\n  \"mass\": [2],\n  \"radhard\": [5],\n  \"ability\": \"DIVINING NUBOTS: -1 ISRU for Colocated ISRU platform.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF070F\",\n  \"name\": \"CVD Molding\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"M\",\n  \"mass\": [3],\n  \"radhard\": [5],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF070R\",\n  \"name\": \"Carbonyl Volatilization\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"M\",\n  \"mass\": [2],\n  \"radhard\": [5],\n  \"ability\": \"THORIUM BREEDER: -3 to Colocated size rolls on S Sites.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF069F\",\n  \"name\": \"Carbo-Chlorination\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [4],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF069R\",\n  \"name\": \"Solar Carbotherm\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [5],\n  \"ability\": \"ARCOLOGY: Decommissioning of a robonaut is not needed when this is used to industrialize in the zones Mercury, Venus, Earth\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF074F\",\n  \"name\": \"Electroforming\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"M\",\n  \"mass\": [3],\n  \"radhard\": [3],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF074R\",\n  \"name\": \"Impact Mold Sinter\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"M\",\n  \"mass\": [3],\n  \"radhard\": [5],\n  \"ability\": \"FOAMED NICKEL: -1 to Colocated size rolls.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF071F\",\n  \"name\": \"Fluidized Bed\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [3],\n  \"radhard\": [4],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF071R\",\n  \"name\": \"Atmospheric Scoop\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"ability\": \"SCOOP: If operational, this card makes adjacent or colocated aerostat sites into [2 hydration]\",\n  \"pacman\": 1,\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF077F\",\n  \"name\": \"Foamglass Sintering\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"D\",\n  \"mass\": [3],\n  \"radhard\": [4],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF077R\",\n  \"name\": \"Laser-Heated Pedestal Growth\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"D\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"ability\": \"SUPERLENS: -1 to all Colocated raygun size rolls.\",\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF076F\",\n  \"name\": \"Froth Flotation\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"D\",\n  \"mass\": [3],\n  \"radhard\": [5],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF076R\",\n  \"name\": \"Femtochemistry\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"D\",\n  \"mass\": [2],\n  \"radhard\": [8],\n  \"ability\": \"SCAVENGING: If Colocated, doubles FTs during site refuel.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF075F\",\n  \"name\": \"ISRU Sabatier\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [3],\n  \"radhard\": [4],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF075R\",\n  \"name\": \"Biophytolytic Algal Farm\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [3],\n  \"radhard\": [5],\n  \"ability\": \"COMET LICHEN: -2 to Colocated size rolls on D Sites.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF078F\",\n  \"name\": \"In-Situ Leaching\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"D\",\n  \"mass\": [3],\n  \"radhard\": [3],\n  \"required_reactor\": \"B|O|X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF078R\",\n  \"name\": \"Termite Nest\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"D\",\n  \"mass\": [1],\n  \"radhard\": [3],\n  \"ability\": \"MINE REVIVAL: As an op, remove a busted disk and place Claim on a Colocated Site of Size 2+.\",\n  \"required_reactor\": \"B|O|X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF072F\",\n  \"name\": \"Magma Electrolysis\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [3],\n  \"radhard\": [3],\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF072R\",\n  \"name\": \"Ionosphere Lasing\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [6],\n  \"ability\": \"IONOSAT: If used to industrialize an Atmospheric Site, permanently gain the Powersat faction privilege.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF079F\",\n  \"name\": \"Supercritical Drying\",\n  \"side\": 0,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"H\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"required_reactor\": \"X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CF079R\",\n  \"name\": \"Solid Flame\",\n  \"side\": 1,\n  \"deck\": \"refinery\",\n  \"spectral_type\": \"H\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"ability\": \"JELLYBOTS: Colocated industrialization is a free action.\",\n  \"required_reactor\": \"X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB063F\",\n  \"name\": \"Blackbody-Pumped Laser\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"isru\": 2,\n  \"required_therms\": 1,\n  \"required_reactor\": \"B|O\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB063R\",\n  \"name\": \"Fissile Aerosol Laser\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"isru\": 2,\n  \"required_therms\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB057F\",\n  \"name\": \"Cat Fusion Z-pinch Torch\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"buggy\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [2],\n  \"isru\": 2,\n  \"required_therms\": 1,\n  \"required_reactor\": \"X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB057R\",\n  \"name\": \"H-B Cat Inertial\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [2],\n  \"radhard\": [2],\n  \"isru\": 0,\n  \"required_therms\": 1,\n  \"thrust\": 4,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"X\",\n  \"fuel_consumption\": 0.33,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB059F\",\n  \"name\": \"Flywheel Tractor\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"buggy\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"isru\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB059R\",\n  \"name\": \"Electrophoretic Sandworm\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"buggy\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"isru\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB066F\",\n  \"name\": \"Free Electron Laser\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"S\",\n  \"mass\": [2],\n  \"radhard\": [4],\n  \"isru\": 1,\n  \"required_therms\": 1,\n  \"required_generator\": \"P\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB066R\",\n  \"name\": \"Wakefield e-Beam\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"isru\": 1,\n  \"thrust\": 4,\n  \"afterburn\": 2,\n  \"fuel_type\": \"dirt\",\n  \"required_generator\": \"P\",\n  \"fuel_consumption\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB060F\",\n  \"name\": \"Kuck Mosquito\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [6],\n  \"isru\": 3,\n  \"thrust\": 10,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"B\",\n  \"fuel_consumption\": 8,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB060R\",\n  \"name\": \"Ablative Laser\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [6],\n  \"isru\": 2,\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 3,\n  \"afterburn\": 3,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB062F\",\n  \"name\": \"MET Steamer\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [4],\n  \"isru\": 2,\n  \"push\": 1,\n  \"thrust\": 5,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"E\",\n  \"fuel_consumption\": 4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB062R\",\n  \"name\": \"Nanobot\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"buggy\"],\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"isru\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB056F\",\n  \"name\": \"Neutral Beam\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"S\",\n  \"mass\": [2],\n  \"radhard\": [5],\n  \"isru\": 2,\n  \"required_generator\": \"P\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB056R\",\n  \"name\": \"D-D Fusion Inertial\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"S\",\n  \"mass\": [1],\n  \"radhard\": [4],\n  \"isru\": 1,\n  \"required_therms\": 2,\n  \"thrust\": 3,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"P\",\n  \"fuel_consumption\": 0.5,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB058F\",\n  \"name\": \"Nuclear Drill\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [1],\n  \"radhard\": [6],\n  \"isru\": 3,\n  \"push\": 1,\n  \"thrust\": 5,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"O\",\n  \"fuel_consumption\": 4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB058R\",\n  \"name\": \"Helical Railgun\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"D\",\n  \"mass\": [2],\n  \"radhard\": [8],\n  \"isru\": 0,\n  \"push\": 1,\n  \"thrust\": 5,\n  \"fuel_type\": \"dirt\",\n  \"required_generator\": \"P\",\n  \"fuel_consumption\": 4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB067F\",\n  \"name\": \"Phase-Locked Diode Laser\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [3],\n  \"isru\": 3,\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB067R\",\n  \"name\": \"Lorentz-Propelled Microprobe\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [3],\n  \"isru\": 3,\n  \"ability\": \"NANITES: One re-roll if fail 1 or more size rolls.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB061F\",\n  \"name\": \"Rock Splitter\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"buggy\"],\n  \"spectral_type\": \"V\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"isru\": 4,\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB061R\",\n  \"name\": \"MagBeam\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"isru\": 3,\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 4,\n  \"ability\": \"-1 ISRU, +3 thrust if pushed by Powersat.\",\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB065F\",\n  \"name\": \"Solar-Pumped MHD Exciplex Laser\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"C\",\n  \"mass\": [3],\n  \"radhard\": [4],\n  \"isru\": 2,\n  \"required_therms\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB065R\",\n  \"name\": \"Quantum Cascade Laser\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"raygun\"],\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"isru\": 0,\n  \"required_therms\": 1,\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB064F\",\n  \"name\": \"Tungsten Resistojet\",\n  \"side\": 0,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"isru\": 3,\n  \"push\": 1,\n  \"thrust\": 5,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 4,\n  \"required_generator\": \"E\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CB064R\",\n  \"name\": \"MITEE Arcjet\",\n  \"side\": 1,\n  \"deck\": \"robonaut\",\n  \"robo_type\": [\"missile\"],\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [4],\n  \"isru\": 1,\n  \"push\": 1,\n  \"thrust\": 4,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"E\",\n  \"fuel_consumption\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT052F\",\n  \"name\": \"Ablative Plate\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [7],\n  \"push\": 1,\n  \"thrust\": 2,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"B|X\",\n  \"fuel_consumption\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT052R\",\n  \"name\": \"Ablative Nozzle\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [0],\n  \"radhard\": [8],\n  \"push\": 1,\n  \"thrust\": 3,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"B|O|X\",\n  \"fuel_consumption\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT046F\",\n  \"name\": \"De Laval Nozzle\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [6],\n  \"thrust\": 5,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"B|O\",\n  \"fuel_consumption\": 4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT046R\",\n  \"name\": \"Magnetic Nozzle\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"thrust\": 3,\n  \"afterburn\": 3,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"O\",\n  \"fuel_consumption\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT054F\",\n  \"name\": \"Dumbo\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"thrust\": 6,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"B|O\",\n  \"fuel_consumption\": 5,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT054R\",\n  \"name\": \"Timberwind\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"thrust\": 5,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"B|O|X\",\n  \"fuel_consumption\": 3,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT045F\",\n  \"name\": \"Hall Effect\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [2],\n  \"radhard\": [5],\n  \"push\": 1,\n  \"thrust\": 3,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"E\",\n  \"fuel_consumption\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT045R\",\n  \"name\": \"Ion Drive\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"push\": 1,\n  \"thrust\": 2,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"E\",\n  \"ballerina\": 1,\n  \"fuel_consumption\": 0.5,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT053F\",\n  \"name\": \"Mass Driver\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"M\",\n  \"mass\": [3],\n  \"radhard\": [8],\n  \"push\": 1,\n  \"thrust\": 4,\n  \"fuel_type\": \"dirt\",\n  \"required_generator\": \"P\",\n  \"fuel_consumption\": 3,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT053R\",\n  \"name\": \"MPD T-wave\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1],\n  \"radhard\": [9],\n  \"push\": 1,\n  \"thrust\": 2,\n  \"fuel_type\": \"dirt\",\n  \"required_generator\": \"P\",\n  \"fuel_consumption\": 0.5,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT044F\",\n  \"name\": \"Metastable Helium\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [0],\n  \"required_therms\": 1,\n  \"thrust\": 5,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"X\",\n  \"fuel_consumption\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT044R\",\n  \"name\": \"n-6Li Microfission\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [8],\n  \"required_therms\": 1,\n  \"thrust\": 5,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"X\",\n  \"fuel_consumption\": 0.5,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT051F\",\n  \"name\": \"Monoatomic Plug Nozzle\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [6],\n  \"thrust\": 4,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"O\",\n  \"fuel_consumption\": 3,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT051R\",\n  \"name\": \"Vortex Confined Nozzle\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"required_therms\": 1,\n  \"thrust\": 4,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_reactor\": \"O\",\n  \"fuel_consumption\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT050F\",\n  \"name\": \"Photon Heliogyro\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [1],\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 0,\n  \"ability\": \"Aerobrake decommission. Immune to Flare & Belt Rolls.\",\n  \"fuel_type\": \"water\",\n  \"ballerina\": 1,\n  \"fuel_consumption\": 0,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT050R\",\n  \"name\": \"Electric Sail\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [2],\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 2,\n  \"ability\": \"Aerobrake decommission. Immune to Flare & Belt Rolls.\",\n  \"fuel_type\": \"water\",\n  \"ballerina\": 1,\n  \"fuel_consumption\": 0,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT049F\",\n  \"name\": \"Photon Kite Sail\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [0],\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 0,\n  \"ability\": \"Aerobrake decommission. Immune to Flare & Belt Rolls.\",\n  \"fuel_type\": \"water\",\n  \"ballerina\": 1,\n  \"fuel_consumption\": 0,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT049R\",\n  \"name\": \"Mag Sail\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [4],\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 1,\n  \"ability\": \"Aerobrake decommission. Each Radiation Belt entered = Bonus Burn\",\n  \"fuel_type\": \"water\",\n  \"ballerina\": 1,\n  \"fuel_consumption\": 0,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT047F\",\n  \"name\": \"Ponderomotive VASIMR\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [4],\n  \"push\": 1,\n  \"thrust\": 3,\n  \"afterburn\": 1,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"P\",\n  \"fuel_consumption\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT047R\",\n  \"name\": \"Pulsed Plasmoid\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 3,\n  \"fuel_type\": \"dirt\",\n  \"fuel_consumption\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT055F\",\n  \"name\": \"Pulsed Inductive\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"push\": 1,\n  \"thrust\": 4,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"P\",\n  \"fuel_consumption\": 2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT055R\",\n  \"name\": \"Dual-Stage 4-Grid\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"push\": 1,\n  \"thrust\": 2,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"E\",\n  \"ballerina\": 1,\n  \"fuel_consumption\": 0.5,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT048F\",\n  \"name\": \"Re Solar Moth\",\n  \"side\": 0,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"push\": 1,\n  \"solar\": 1,\n  \"thrust\": 3,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"fuel_consumption\": 4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CT048R\",\n  \"name\": \"Colliding Beam H-B Fusion\",\n  \"side\": 1,\n  \"deck\": \"thruster\",\n  \"type\": \"base\",\n  \"spectral_type\": \"D\",\n  \"mass\": [2],\n  \"radhard\": [5],\n  \"required_therms\": 1,\n  \"thrust\": 3,\n  \"afterburn\": 2,\n  \"fuel_type\": \"water\",\n  \"required_generator\": \"E\",\n  \"ballerina\": 1,\n  \"fuel_consumption\": 0.1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F165F\",\n  \"name\": \"Fission-Heated Steam\",\n  \"side\": 0,\n  \"deck\": \"freighter\",\n  \"type\": \"base\",\n  \"spectral_type\": \"any\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"future\": null,\n  \"load_limit\": 2,\n  \"promotion_colony\": \"M\",\n  \"provided_reactor\": \"O\",\n  \"provided_generator\": null,\n  \"factory_loading_only\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F165R\",\n  \"name\": \"Fission GCR\",\n  \"side\": 1,\n  \"deck\": \"freighter\",\n  \"type\": \"promoted\",\n  \"spectral_type\": \"any\",\n  \"mass\": [1],\n  \"radhard\": [6],\n  \"future\": \"EXOPLANET HUNT FUTURE: Req = Claim Sedna. Effect = (Endgame) 12 VP.\",\n  \"ability\": \"Can liftoff/land on Sites that are less than size 6 without factory-assist.\",\n  \"load_limit\": 6,\n  \"promotion_colony\": \"M\",\n  \"provided_reactor\": \"O\",\n  \"provided_generator\": null,\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F168F\",\n  \"name\": \"Fusion Fragment Sail\",\n  \"side\": 0,\n  \"deck\": \"freighter\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [1],\n  \"future\": null,\n  \"ability\": \"Immune to flares & radiation belts.\",\n  \"load_limit\": 2,\n  \"ballerina\": 1,\n  \"promotion_colony\": \"M\",\n  \"provided_reactor\": null,\n  \"provided_generator\": null,\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F168R\",\n  \"name\": \"Antiproton Sail and Harvester\",\n  \"side\": 1,\n  \"deck\": \"freighter\",\n  \"type\": \"promoted\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [9],\n  \"future\": \"ANTIMATTER FUTURE: Req = Promoted Bernal with S Dirtside. Effects = double isotope refuel, 10 VP.\",\n  \"ability\": \"+1 net thrust if starting its move on a radiation belt.\",\n  \"load_limit\": 6,\n  \"ballerina\": 4,\n  \"promotion_colony\": \"M\",\n  \"provided_reactor\": null,\n  \"provided_generator\": null,\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F169F\",\n  \"name\": \"HIIPER Beam Rider\",\n  \"side\": 0,\n  \"deck\": \"freighter\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [4],\n  \"radhard\": [4],\n  \"future\": null,\n  \"load_limit\": 4,\n  \"ballerina\": 1,\n  \"promotion_colony\": \"Push\",\n  \"provided_reactor\": null,\n  \"provided_generator\": \"E\",\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F169R\",\n  \"name\": \"Magnetic Mirror Beam Rider\",\n  \"side\": 1,\n  \"deck\": \"freighter\",\n  \"type\": \"promoted\",\n  \"spectral_type\": \"V\",\n  \"mass\": [3],\n  \"radhard\": [6],\n  \"future\": \"STAR WISP FUTURE: Req = Promoted Freighter (End game) at either neutrino sunlens (6 VP) or EM sunlens = 11 VP.\",\n  \"ability\": \"Can liftoff/land on Sites that are less than size 6 without factory-assist.\",\n  \"load_limit\": 5,\n  \"ballerina\": 3,\n  \"promotion_colony\": \"Push\",\n  \"provided_reactor\": null,\n  \"provided_generator\": \"E\",\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F163F\",\n  \"name\": \"Inflatable Solar-Heated\",\n  \"side\": 0,\n  \"deck\": \"freighter\",\n  \"type\": \"base\",\n  \"spectral_type\": \"any\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"future\": null,\n  \"ability\": \"SOLAR HEATED: If not using Powersat, may move out only as far as the Ceres zone.\",\n  \"load_limit\": 2,\n  \"promotion_colony\": \"C\",\n  \"provided_reactor\": null,\n  \"provided_generator\": null,\n  \"factory_loading_only\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F163R\",\n  \"name\": \"Archimedes Palmer Lens\",\n  \"side\": 1,\n  \"deck\": \"freighter\",\n  \"type\": \"promoted\",\n  \"spectral_type\": \"any\",\n  \"mass\": [0],\n  \"radhard\": [10],\n  \"future\": \"TERRAFORM FUTURE: Req = Promoted Bernal at a non-Martian Atmospheric Dirtside. Effect = 8 VP.\",\n  \"ability\": \"SOLAR HEATED: If not using Powersat, may move out only as far as the Jupiter zone.\",\n  \"load_limit\": 5,\n  \"promotion_colony\": \"C\",\n  \"provided_reactor\": null,\n  \"provided_generator\": null,\n  \"factory_loading_only\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F166F\",\n  \"name\": \"Poodle Steam\",\n  \"side\": 0,\n  \"deck\": \"freighter\",\n  \"type\": \"base\",\n  \"spectral_type\": \"any\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"future\": null,\n  \"ability\": \"RADIOISOTOPE: +2 thrust if its move starts on a Factory.\",\n  \"load_limit\": 2,\n  \"promotion_colony\": \"S\",\n  \"provided_reactor\": null,\n  \"provided_generator\": null,\n  \"factory_loading_only\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F166R\",\n  \"name\": \"D-Nanotube Dirt Launcher\",\n  \"side\": 1,\n  \"deck\": \"freighter\",\n  \"type\": \"promoted\",\n  \"spectral_type\": \"any\",\n  \"mass\": [0],\n  \"radhard\": [9],\n  \"future\": \"BEANSTALK FUTURE: Req = 3+ Space Elevators built by any player. Effect (Endgame) = +3 VP for each Factory connected to a Space Elevator.\",\n  \"load_limit\": 3,\n  \"promotion_colony\": \"S\",\n  \"provided_reactor\": null,\n  \"provided_generator\": null,\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F164F\",\n  \"name\": \"Rotary Dirt Launcher\",\n  \"side\": 0,\n  \"deck\": \"freighter\",\n  \"type\": \"base\",\n  \"spectral_type\": \"any\",\n  \"mass\": [5],\n  \"radhard\": [4],\n  \"future\": null,\n  \"load_limit\": 2,\n  \"promotion_colony\": \"C\",\n  \"provided_reactor\": \"O\",\n  \"provided_generator\": \"E\",\n  \"factory_loading_only\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F164R\",\n  \"name\": \"KESTS Hoop Dirt Launcher\",\n  \"side\": 1,\n  \"deck\": \"freighter\",\n  \"type\": \"promoted\",\n  \"spectral_type\": \"any\",\n  \"mass\": [15],\n  \"radhard\": [8],\n  \"future\": \"BEEHIVE ARK FUTURE: Req = Promoted Bernal anchored at a Synodic Comet. Effect = 7 VP.\",\n  \"load_limit\": 15,\n  \"promotion_colony\": \"C\",\n  \"provided_reactor\": \"O\",\n  \"provided_generator\": \"E\",\n  \"factory_loading_only\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F167F\",\n  \"name\": \"Z-Pinch D-T / 6Li Fusion\",\n  \"side\": 0,\n  \"deck\": \"freighter\",\n  \"type\": \"base\",\n  \"spectral_type\": \"V\",\n  \"mass\": [5],\n  \"radhard\": [3],\n  \"future\": null,\n  \"load_limit\": 3,\n  \"ballerina\": 1,\n  \"promotion_colony\": \"H\",\n  \"provided_reactor\": \"X\",\n  \"provided_generator\": \"P\",\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"M1F167R\",\n  \"name\": \"Z-Pinch 3He-D Target Fusion\",\n  \"side\": 1,\n  \"deck\": \"freighter\",\n  \"type\": \"promoted\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [6],\n  \"future\": \"GOLDEN APPLES FUTURE: Req = Industrialize Kreutz Sungrazer. Effects = Ignore solar flares, 14 VP.\",\n  \"load_limit\": 6,\n  \"ballerina\": 2,\n  \"promotion_colony\": \"H\",\n  \"provided_reactor\": \"X\",\n  \"provided_generator\": \"P\",\n  \"factory_loading_only\": null,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG104F\",\n  \"name\": \"AMTEC Thermoelectric\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [6],\n  \"required_therms\": 1,\n  \"pacman\": 1,\n  \"required_reactor\": \"O\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG104R\",\n  \"name\": \"JTEC H2 Thermoelectric\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [4],\n  \"solar\": 1,\n  \"pacman\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG105F\",\n  \"name\": \"Solar Stirling\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [3],\n  \"radhard\": [5],\n  \"solar\": 1,\n  \"required_therms\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG105R\",\n  \"name\": \"Thermo-Photovoltaic\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [2],\n  \"radhard\": [4],\n  \"solar\": 1,\n  \"thrust_modifier\": +1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG106F\",\n  \"name\": \"Cascade Photovoltaic\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [3],\n  \"radhard\": [1],\n  \"solar\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG106R\",\n  \"name\": \"Buckyball C60 Photovoltaic\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [2],\n  \"radhard\": [3],\n  \"solar\": 1,\n  \"thrust_modifier\": +1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG107F\",\n  \"name\": \"Brayton Turbine\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"required_therms\": 2,\n  \"pacman\": 1,\n  \"required_reactor\": \"B|O\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG107R\",\n  \"name\": \"O’Meara LSP Paralens\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [0],\n  \"radhard\": [10],\n  \"solar\": 1,\n  \"pacman\": 1,\n  \"fuel_consumption_modifier\": \"1/2\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG108F\",\n  \"name\": \"In-Core Thermionic\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [6],\n  \"required_therms\": 2,\n  \"pacman\": 1,\n  \"required_reactor\": \"B|O\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG108R\",\n  \"name\": \"Z-Pinch Microfission\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"S\",\n  \"mass\": [2],\n  \"radhard\": [9],\n  \"required_therms\": 1,\n  \"pacman\": 1,\n  \"thrust_modifier\": +4,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG109F\",\n  \"name\": \"Photon Tether Rectenna\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [2],\n  \"solar\": 1,\n  \"thrust_modifier\": -1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG109R\",\n  \"name\": \"Palmer LSP Aerosol Lens\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"V\",\n  \"mass\": [0],\n  \"radhard\": [10],\n  \"solar\": 1,\n  \"pacman\": 1,\n  \"thrust_modifier\": +1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG110F\",\n  \"name\": \"Rankine MHD\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [4],\n  \"required_therms\": 2,\n  \"pacman\": 1,\n  \"required_reactor\": \"B|O\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG110R\",\n  \"name\": \"MHD Open-Cycle\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [4],\n  \"pacman\": 1,\n  \"thrust_modifier\": +1,\n  \"required_reactor\": \"B\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG111F\",\n  \"name\": \"Flywheel Compulsator\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"M\",\n  \"mass\": [4],\n  \"radhard\": [4],\n  \"solar\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG111R\",\n  \"name\": \"Superconducting Adductor\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1],\n  \"radhard\": [4],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG112F\",\n  \"name\": \"H2-O2 Fuel Cell\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [4],\n  \"radhard\": [4],\n  \"solar\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG112R\",\n  \"name\": \"Microbial Fuel Cell\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [2],\n  \"radhard\": [5],\n  \"solar\": 1,\n  \"thrust_modifier\": +1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG113F\",\n  \"name\": \"Rankine Solar Dynamic\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"D\",\n  \"mass\": [2],\n  \"radhard\": [4],\n  \"solar\": 1,\n  \"required_therms\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG113R\",\n  \"name\": \"Rankine Multiphase\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [4],\n  \"required_reactor\": \"B|O|X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG114F\",\n  \"name\": \"Catalyzed Fission Scintillator\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"D\",\n  \"mass\": [0],\n  \"radhard\": [7],\n  \"required_therms\": 1,\n  \"required_reactor\": \"X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG114R\",\n  \"name\": \"Diamonoid Electro-Dynamic Tether\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"D\",\n  \"mass\": [2],\n  \"radhard\": [4],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG115F\",\n  \"name\": \"Cascade Thermoacoustic\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"V\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"required_therms\": 2,\n  \"pacman\": 1,\n  \"required_reactor\": \"O\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG115R\",\n  \"name\": \"Dusty Plasma MHD\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"V\",\n  \"mass\": [1],\n  \"radhard\": [6],\n  \"pacman\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG116F\",\n  \"name\": \"Magnetoshell Plasma Parachute\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [5],\n  \"solar\": 1,\n  \"ability\": \"This stack can safely enter aerobrakes. Cannot be used to support Bernals or during industrialization.\",\n  \"thrust_modifier\": -2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG116R\",\n  \"name\": \"Granular Rainbow Corral\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"S\",\n  \"mass\": [0],\n  \"radhard\": [10],\n  \"solar\": 1,\n  \"ability\": \"This stack can safely enter aerobrakes.\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG117F\",\n  \"name\": \"Marx Capacitor Bank\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"P\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1],\n  \"radhard\": [4],\n  \"required_generator\": \"P\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG117R\",\n  \"name\": \"Casimir Battery\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P\",\n  \"spectral_type\": \"M\",\n  \"mass\": [0],\n  \"radhard\": [3],\n  \"required_generator\": \"P\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG118F\",\n  \"name\": \"Ericsson Engine\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"required_therms\": 1,\n  \"pacman\": 1,\n  \"required_reactor\": \"B|O\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG118R\",\n  \"name\": \"Nanocomposite Thermoelectric\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"C\",\n  \"mass\": [1],\n  \"radhard\": [5],\n  \"pacman\": 1,\n  \"thrust_modifier\": +1,\n  \"required_reactor\": \"B|O|X\",\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG119F\",\n  \"name\": \"Radioisotope Stirling\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"M\",\n  \"mass\": [3],\n  \"radhard\": [4],\n  \"thrust_modifier\": -2,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG119R\",\n  \"name\": \"Triggered Decay Nuclear Battery\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"P|E\",\n  \"spectral_type\": \"M\",\n  \"mass\": [1],\n  \"radhard\": [6],\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG120F\",\n  \"name\": \"Optoelectric Nuclear Battery\",\n  \"side\": 0,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"V\",\n  \"mass\": [2],\n  \"radhard\": [6],\n  \"required_therms\": 2,\n  \"pacman\": 1,\n  \"module\": \"base\"\n}, {\n  \"id\": \"CG120R\",\n  \"name\": \"Nuclear-Pumped Excimer Flashlamp\",\n  \"side\": 1,\n  \"deck\": \"generator\",\n  \"type\": \"E\",\n  \"spectral_type\": \"V\",\n  \"mass\": [0],\n  \"radhard\": [8],\n  \"required_therms\": 3,\n  \"pacman\": 1,\n  \"thrust_modifier\": +1,\n  \"required_reactor\": \"B|O\",\n  \"module\": \"base\"\n}]);\n\n//# sourceURL=webpack://vue-hf4/./src/data/cards.js?");

/***/ }),

/***/ "./src/data/constants.js":
/*!*******************************!*\
  !*** ./src/data/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filtersBase = {\n  name: \"\",\n  deck: \"any\",\n  side: 0,\n  type: \"all\",\n  therms: {\n    op: \"any\",\n    value: 0\n  },\n  spectral: \"all\",\n  mass: {\n    op: \"any\",\n    value: 0\n  },\n  radhard: {\n    op: \"any\",\n    value: 0\n  },\n  required: {\n    op: \"any\",\n    value: \"\"\n  },\n  thrust: {\n    type: \"any\",\n    op: \"any\",\n    value: 0\n  },\n  fuel: {\n    type: \"any\"\n  },\n  consumption: {\n    op: \"any\",\n    value: 0\n  },\n  modifiers: {\n    values: []\n  },\n  robonaut: {\n    type: \"any\",\n    op: \"any\",\n    value: 0\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  filtersBase: filtersBase\n});\n\n//# sourceURL=webpack://vue-hf4/./src/data/constants.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_maurizio_Progetti_vue_hf4_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _ionic_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/vue */ \"./node_modules/@ionic/vue/dist/index.esm.js\");\n/* harmony import */ var _theme_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/tailwind.css */ \"./src/theme/tailwind.css\");\n/* harmony import */ var _theme_tailwind_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_theme_tailwind_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ionic_vue_css_core_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/vue/css/core.css */ \"./node_modules/@ionic/vue/css/core.css\");\n/* harmony import */ var _ionic_vue_css_core_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_core_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ionic_vue_css_normalize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/vue/css/normalize.css */ \"./node_modules/@ionic/vue/css/normalize.css\");\n/* harmony import */ var _ionic_vue_css_normalize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_normalize_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ionic_vue_css_structure_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/vue/css/structure.css */ \"./node_modules/@ionic/vue/css/structure.css\");\n/* harmony import */ var _ionic_vue_css_structure_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_structure_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ionic_vue_css_typography_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/vue/css/typography.css */ \"./node_modules/@ionic/vue/css/typography.css\");\n/* harmony import */ var _ionic_vue_css_typography_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_typography_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ionic_vue_css_padding_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/vue/css/padding.css */ \"./node_modules/@ionic/vue/css/padding.css\");\n/* harmony import */ var _ionic_vue_css_padding_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_padding_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ionic_vue_css_float_elements_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/vue/css/float-elements.css */ \"./node_modules/@ionic/vue/css/float-elements.css\");\n/* harmony import */ var _ionic_vue_css_float_elements_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_float_elements_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _ionic_vue_css_text_alignment_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/vue/css/text-alignment.css */ \"./node_modules/@ionic/vue/css/text-alignment.css\");\n/* harmony import */ var _ionic_vue_css_text_alignment_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_text_alignment_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _ionic_vue_css_text_transformation_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/vue/css/text-transformation.css */ \"./node_modules/@ionic/vue/css/text-transformation.css\");\n/* harmony import */ var _ionic_vue_css_text_transformation_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_text_transformation_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _ionic_vue_css_flex_utils_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/vue/css/flex-utils.css */ \"./node_modules/@ionic/vue/css/flex-utils.css\");\n/* harmony import */ var _ionic_vue_css_flex_utils_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_flex_utils_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _ionic_vue_css_display_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/vue/css/display.css */ \"./node_modules/@ionic/vue/css/display.css\");\n/* harmony import */ var _ionic_vue_css_display_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ionic_vue_css_display_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _theme_variables_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/variables.css */ \"./src/theme/variables.css\");\n/* harmony import */ var _theme_variables_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_theme_variables_css__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\n\n\n\n/* TailwindCSS */\n\n\n/* Core CSS required for Ionic components to work properly */\n\n\n/* Basic CSS for apps built with Ionic */\n\n\n\n\n/* Optional CSS utils that can be commented out */\n\n\n\n\n\n\n\n/* Theme variables */\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_3__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).use(_ionic_vue__WEBPACK_IMPORTED_MODULE_18__.IonicVue).use(_router__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n_router__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isReady().then(() => {\n  app.mount('#app');\n});\n\n//# sourceURL=webpack://vue-hf4/./src/main.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ionic_vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/vue-router */ \"./node_modules/@ionic/vue-router/dist/index.esm.js\");\n/* harmony import */ var _views_HomePage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/HomePage.vue */ \"./src/views/HomePage.vue\");\n/* harmony import */ var _views_DecksPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/DecksPage.vue */ \"./src/views/DecksPage.vue\");\n/* harmony import */ var _views_TestSelectPage2_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/TestSelectPage2.vue */ \"./src/views/TestSelectPage2.vue\");\n\n\n// import CardsPage from '../views/CardsPage.vue';\n// import FiltersPage from '../views/FiltersPage.vue';\n// import CardPage from '../views/CardPage.vue';\n\n// import SliderTest from '@/views/SliderTest.vue';\n// import TestSelectPage from '@/views/TestSelectPage.vue';\n\nconst routes = [{\n  path: '/',\n  redirect: '/decks'\n}, {\n  path: '/home',\n  name: 'Home',\n  component: _views_HomePage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/decks',\n  name: 'Decks',\n  component: _views_DecksPage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n},\n// {\n//   path: '/test-select',\n//   name: 'Test',\n//   component: TestSelectPage\n// },\n{\n  path: '/test-multiselect',\n  name: 'Test2',\n  component: _views_TestSelectPage2_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}\n// {\n//   path: '/slidertest',\n//   name: 'SliderTest',\n//   component: SliderTest,\n// },\n// {\n//   path: '/slider',\n//   name: 'SliderCards',\n//   component: SliderCards,\n// },\n// {\n//   path: '/cards',\n//   name: 'Cards',\n//   component: CardsPage,\n// },\n// {\n//   path: '/card/:id',\n//   name: 'Card',\n//   component: CardPage,\n// },\n// {\n//   path: '/filters',\n//   name: 'Filters',\n//   component: FiltersPage,\n// }\n];\n\nconst router = (0,_ionic_vue_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n  history: (0,_ionic_vue_router__WEBPACK_IMPORTED_MODULE_0__.createWebHistory)(\"/hf4-decks/\"),\n  routes\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://vue-hf4/./src/router/index.js?");

/***/ }),

/***/ "./src/utility/event-bus.js":
/*!**********************************!*\
  !*** ./src/utility/event-bus.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useEventsBus)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst bus = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(new Map());\nfunction useEventsBus() {\n  function emit(event, ...args) {\n    bus.value.set(event, args);\n  }\n  return {\n    emit,\n    bus\n  };\n}\n\n//# sourceURL=webpack://vue-hf4/./src/utility/event-bus.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/@vueform/multiselect/themes/default.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vueform/multiselect/themes/default.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* Vedi https://github.com/vueform/multiselect#styling */\\n[data-v-61dd607b]:root {\\n  --ms-font-size: 0.3rem;\\n  /* --ms-tag-bg: red; */\\n  /* --ms-tag-color: #d1fae5; */\\n  /* --ms-tag-radius: 9999px; */\\n  /* --ms-tag-font-weight: 400; */\\n}\\n.vs__selected[data-v-61dd607b] {\\n  font-size: 10px;\\n}\\n.style-chooser .vs__search[data-v-61dd607b]::placeholder,\\n.style-chooser .vs__dropdown-toggle[data-v-61dd607b],\\n.style-chooser .vs__dropdown-menu[data-v-61dd607b] {\\n  background: #dfe5fb;\\n  border: none;\\n  color: #394066;\\n  text-transform: lowercase;\\n  font-variant: small-caps;\\n}\\n.style-chooser .vs__clear[data-v-61dd607b],\\n.style-chooser .vs__open-indicator[data-v-61dd607b] {\\n  fill: #394066;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.card-container[data-v-1c803acd] {\\n  height: 416px;\\n}\\n.card[data-v-1c803acd] {\\n  /* margin: 100px auto 0; */\\n  margin-top: 1px;\\n  width: 270px;\\n  height: 412px;\\n  perspective: 1000px;\\n  /* align-content: center; */\\n}\\n.card-inner[data-v-1c803acd] {\\n  width: 100%;\\n  height: 100%;\\n  transition: transform 1s;\\n  transform-style: preserve-3d;\\n  cursor: pointer;\\n  position: relative;\\n  /* align-content: center; */\\n}\\n.card-face[data-v-1c803acd] {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-backface-visibility: hidden;\\n  backface-visibility: hidden;\\n  overflow: hidden;\\n  border-radius: 16px;\\n  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);\\n  cursor: pointer;\\n}\\n.card-front[data-v-1c803acd] {\\n  /* background: blue; */\\n  /* background-image: linear-gradient(\\n      to bottom right,\\n      var(--primary),\\n      var(--secondary)\\n    );\\n    display: flex;\\n    align-items: center;\\n    justify-content: center; */\\n}\\n\\n/* this style is applied when the card is clicked */\\n.card-back[data-v-1c803acd] {\\n  transform: rotateY(180deg);\\n}\\n.flipme[data-v-1c803acd] {\\n  transform: rotateY(180deg);\\n}\\n.rovescia[data-v-1c803acd] {\\n  transform: rotateX(180deg) rotateY(180deg);\\n}\\n.rovescia.flipme[data-v-1c803acd] {\\n  transform: rotateX(180deg) rotateY(360deg);\\n}\\n/* .card-inner.is-retro {\\n    transform: rotateY(180deg);\\n  } */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.version[data-v-cbeb59d2] {\\n  font-size: 10px;\\n  font-style: italic;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.toolbar[data-v-7d622f5c] {\\n  width: 4rem;\\n  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);\\n}\\n.my-swiper-pagination[data-v-7d622f5c] {\\n  font-size: 10px;\\n  color: white;\\n}\\n.radiator-rotate-active[data-v-7d622f5c] {\\n  background-color: #51cf66;\\n  cursor: pointer;\\n}\\n.radiator-rotate-inactive[data-v-7d622f5c] {\\n  background-color: #d3f9d8;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* .my-swiper-pagination {\\n  font-size: 10px;\\n} */\\n.swiper[data-v-5f54d002] {\\n  width: 100%;\\n  height: 100%;\\n  /* border: 1px solid red; */\\n  margin-top: 1rem;\\n}\\n.swiper-slide[data-v-5f54d002] {\\n  text-align: center;\\n  font-size: 18px;\\n  background: #fff;\\n\\n  /* Center slide text vertically */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.swiper-slide img[data-v-5f54d002] {\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n/*\\n.swiper-slide:nth-child(1n) {\\n  background-color: rgb(206, 17, 17);\\n}\\n\\n.swiper-slide:nth-child(2n) {\\n  background-color: rgb(0, 140, 255);\\n}\\n\\n.swiper-slide:nth-child(3n) {\\n  background-color: rgb(10, 184, 111);\\n}\\n\\n.swiper-slide:nth-child(4n) {\\n  background-color: rgb(211, 122, 7);\\n}\\n\\n.swiper-slide:nth-child(5n) {\\n  background-color: rgb(118, 163, 12);\\n}\\n\\n.swiper-slide:nth-child(6n) {\\n  background-color: rgb(180, 10, 47);\\n}\\n\\n.swiper-slide:nth-child(7n) {\\n  background-color: rgb(35, 99, 19);\\n}\\n\\n.swiper-slide:nth-child(8n) {\\n  background-color: rgb(0, 68, 255);\\n}\\n\\n.swiper-slide:nth-child(9n) {\\n  background-color: rgb(218, 12, 218);\\n}\\n\\n.swiper-slide:nth-child(10n) {\\n  background-color: rgb(54, 94, 77);\\n}\\n*/\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.fade-enter-active[data-v-01a1bd4f] {\\n  transition: opacity 0.5s;\\n}\\n.fade-enter[data-v-01a1bd4f],\\n.fade-leave-to[data-v-01a1bd4f] {\\n  opacity: 50;\\n}\\n.move-enter-from[data-v-01a1bd4f],\\n.move-leave-to[data-v-01a1bd4f] {\\n  opacity: 0;\\n  transform: translateX(-50px);\\n}\\n.move-enter-active[data-v-01a1bd4f],\\n.move-leave-active[data-v-01a1bd4f] {\\n  transition: all 0.1s ease-out;\\n}\\n.translate-enter-active[data-v-01a1bd4f],\\n.translate-leave-active[data-v-01a1bd4f] {\\n  transition: all 0.5s ease;\\n}\\n.translate-enter-from[data-v-01a1bd4f],\\n.translate-leave-to[data-v-01a1bd4f] {\\n  opacity: 0;\\n  transform: translateX(30px);\\n}\\n.slide-enter-active[data-v-01a1bd4f] {\\n  animation: slide 1s;\\n}\\n.slide-leave-active[data-v-01a1bd4f] {\\n  transition: all 1s;\\n  opacity: 0;\\n}\\n.slide-fade-enter-active[data-v-01a1bd4f] {\\n  transition: all 0.3s ease-out;\\n}\\n.slide-fade-leave-active[data-v-01a1bd4f] {\\n  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);\\n}\\n.slide-fade-enter-from[data-v-01a1bd4f],\\n.slide-fade-leave-to[data-v-01a1bd4f] {\\n  transform: translateX(20px);\\n  opacity: 0;\\n}\\n.v-enter-active[data-v-01a1bd4f],\\n.v-leave-active[data-v-01a1bd4f] {\\n  transition: opacity 0.5s ease;\\n}\\n.v-enter-from[data-v-01a1bd4f],\\n.v-leave-to[data-v-01a1bd4f] {\\n  opacity: 0;\\n}\\n/*\\n.header {\\n  position: fixed;\\n  top: 0px;\\n}\\n.body {\\n  margin-top: 50px;\\n}\\n#container {\\n  text-align: center;\\n\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n\\n#container strong {\\n  font-size: 20px;\\n  line-height: 26px;\\n}\\n\\n#container p {\\n  font-size: 16px;\\n  line-height: 22px;\\n\\n  color: #8c8c8c;\\n\\n  margin: 0;\\n}\\n\\n#container a {\\n  text-decoration: none;\\n}\\n*/\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n#container[data-v-c6bdc170] {\\n  text-align: center;\\n\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n#container strong[data-v-c6bdc170] {\\n  font-size: 20px;\\n  line-height: 26px;\\n}\\n#container p[data-v-c6bdc170] {\\n  font-size: 16px;\\n  line-height: 22px;\\n\\n  color: #8c8c8c;\\n\\n  margin: 0;\\n}\\n#container a[data-v-c6bdc170] {\\n  text-decoration: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/@vueform/multiselect/themes/default.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vueform/multiselect/themes/default.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* Vedi https://github.com/vueform/multiselect#styling */\\n:root {\\n  --ms-font-size: 0.3rem;\\n  /* --ms-tag-bg: red; */\\n  /* --ms-tag-color: #d1fae5; */\\n  /* --ms-tag-radius: 9999px; */\\n  /* --ms-tag-font-weight: 400; */\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/theme/tailwind.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/theme/tailwind.css ***!
  \******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ./src/theme/tailwind.css */\\n/* ! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com */\\n/*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n5. Use the user's configured `sans` font-feature-settings by default.\\n*/\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  tab-size: 4; /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n  font-feature-settings: normal; /* 5 */\\n}\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\nabbr:where([title]) {\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n}\\n/*\\nRemove the default font size and weight for headings.\\n*/\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n/*\\nAdd the correct font size in all browsers.\\n*/\\nsmall {\\n  font-size: 80%;\\n}\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\nsub {\\n  bottom: -0.25em;\\n}\\nsup {\\n  top: -0.5em;\\n}\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n:-moz-focusring {\\n  outline: auto;\\n}\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\nprogress {\\n  vertical-align: baseline;\\n}\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\nsummary {\\n  display: list-item;\\n}\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\nlegend {\\n  padding: 0;\\n}\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\ntextarea {\\n  resize: vertical;\\n}\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n/*\\nSet the default cursor for buttons.\\n*/\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n/* Make elements with the HTML hidden attribute stay hidden by default */\\n[hidden] {\\n  display: none;\\n}\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n::-webkit-backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.container {\\n  width: 100%;\\n}\\n@media (min-width: 640px) {\\n  .container {\\n    max-width: 640px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .container {\\n    max-width: 768px;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .container {\\n    max-width: 1024px;\\n  }\\n}\\n@media (min-width: 1280px) {\\n  .container {\\n    max-width: 1280px;\\n  }\\n}\\n@media (min-width: 1536px) {\\n  .container {\\n    max-width: 1536px;\\n  }\\n}\\n.pointer-events-none {\\n  pointer-events: none;\\n}\\n.collapse {\\n  visibility: collapse;\\n}\\n.fixed {\\n  position: fixed;\\n}\\n.absolute {\\n  position: absolute;\\n}\\n.relative {\\n  position: relative;\\n}\\n.inset-y-0 {\\n  top: 0px;\\n  bottom: 0px;\\n}\\n.right-0 {\\n  right: 0px;\\n}\\n.bottom-0 {\\n  bottom: 0px;\\n}\\n.left-0 {\\n  left: 0px;\\n}\\n.top-0 {\\n  top: 0px;\\n}\\n.z-50 {\\n  z-index: 50;\\n}\\n.-z-50 {\\n  z-index: -50;\\n}\\n.m-0 {\\n  margin: 0px;\\n}\\n.-m-4 {\\n  margin: -1rem;\\n}\\n.mx-auto {\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.mt-10 {\\n  margin-top: 2.5rem;\\n}\\n.mb-2 {\\n  margin-bottom: 0.5rem;\\n}\\n.mr-1 {\\n  margin-right: 0.25rem;\\n}\\n.mr-2 {\\n  margin-right: 0.5rem;\\n}\\n.mt-12 {\\n  margin-top: 3rem;\\n}\\n.ml-2 {\\n  margin-left: 0.5rem;\\n}\\n.block {\\n  display: block;\\n}\\n.inline-block {\\n  display: inline-block;\\n}\\n.flex {\\n  display: flex;\\n}\\n.hidden {\\n  display: none;\\n}\\n.h-4 {\\n  height: 1rem;\\n}\\n.h-6 {\\n  height: 1.5rem;\\n}\\n.h-screen {\\n  height: 100vh;\\n}\\n.h-48 {\\n  height: 12rem;\\n}\\n.h-12 {\\n  height: 3rem;\\n}\\n.w-full {\\n  width: 100%;\\n}\\n.w-4 {\\n  width: 1rem;\\n}\\n.w-6 {\\n  width: 1.5rem;\\n}\\n.w-48 {\\n  width: 12rem;\\n}\\n.w-12 {\\n  width: 3rem;\\n}\\n.flex-1 {\\n  flex: 1 1 0%;\\n}\\n.flex-auto {\\n  flex: 1 1 auto;\\n}\\n.grow {\\n  flex-grow: 1;\\n}\\n.rotate-180 {\\n  --tw-rotate: 180deg;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.rotate-90 {\\n  --tw-rotate: 90deg;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.transform {\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n}\\n.cursor-pointer {\\n  cursor: pointer;\\n}\\n.appearance-none {\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n}\\n.flex-row {\\n  flex-direction: row;\\n}\\n.flex-col {\\n  flex-direction: column;\\n}\\n.flex-wrap {\\n  flex-wrap: wrap;\\n}\\n.items-center {\\n  align-items: center;\\n}\\n.justify-start {\\n  justify-content: flex-start;\\n}\\n.justify-end {\\n  justify-content: flex-end;\\n}\\n.justify-center {\\n  justify-content: center;\\n}\\n.justify-between {\\n  justify-content: space-between;\\n}\\n.self-center {\\n  align-self: center;\\n}\\n.rounded {\\n  border-radius: 0.25rem;\\n}\\n.rounded-lg {\\n  border-radius: 0.5rem;\\n}\\n.rounded-md {\\n  border-radius: 0.375rem;\\n}\\n.rounded-bl-xl {\\n  border-bottom-left-radius: 0.75rem;\\n}\\n.border {\\n  border-width: 1px;\\n}\\n.border-b {\\n  border-bottom-width: 1px;\\n}\\n.border-t {\\n  border-top-width: 1px;\\n}\\n.border-r {\\n  border-right-width: 1px;\\n}\\n.border-gray-300 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\\n}\\n.border-gray-500 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\\n}\\n.border-gray-400 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\\n}\\n.border-gray-900 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(17 24 39 / var(--tw-border-opacity));\\n}\\n.border-yellow-700 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(161 98 7 / var(--tw-border-opacity));\\n}\\n.border-blue-700 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(29 78 216 / var(--tw-border-opacity));\\n}\\n.border-blue-800 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(30 64 175 / var(--tw-border-opacity));\\n}\\n.border-green-900 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(20 83 45 / var(--tw-border-opacity));\\n}\\n.border-rose-400 {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(251 113 133 / var(--tw-border-opacity));\\n}\\n.bg-white {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n}\\n.bg-slate-200 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\\n}\\n.bg-yellow-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\\n}\\n.bg-blue-500 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\\n}\\n.bg-green-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\\n}\\n.bg-orange-600 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\\n}\\n.bg-gray-300 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\\n}\\n.bg-\\\\[\\\\#F4F3FA\\\\] {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(244 243 250 / var(--tw-bg-opacity));\\n}\\n.fill-current {\\n  fill: currentColor;\\n}\\n.p-3 {\\n  padding: 0.75rem;\\n}\\n.p-1 {\\n  padding: 0.25rem;\\n}\\n.p-2 {\\n  padding: 0.5rem;\\n}\\n.p-4 {\\n  padding: 1rem;\\n}\\n.px-4 {\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n}\\n.px-2 {\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\n.px-1 {\\n  padding-left: 0.25rem;\\n  padding-right: 0.25rem;\\n}\\n.py-2 {\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n}\\n.px-5 {\\n  padding-left: 1.25rem;\\n  padding-right: 1.25rem;\\n}\\n.pr-8 {\\n  padding-right: 2rem;\\n}\\n.pt-2 {\\n  padding-top: 0.5rem;\\n}\\n.pt-4 {\\n  padding-top: 1rem;\\n}\\n.pt-0 {\\n  padding-top: 0px;\\n}\\n.text-left {\\n  text-align: left;\\n}\\n.text-center {\\n  text-align: center;\\n}\\n.text-right {\\n  text-align: right;\\n}\\n.text-xs {\\n  font-size: 0.75rem;\\n  line-height: 1rem;\\n}\\n.text-base {\\n  font-size: 1rem;\\n  line-height: 1.5rem;\\n}\\n.text-sm {\\n  font-size: 0.875rem;\\n  line-height: 1.25rem;\\n}\\n.font-semibold {\\n  font-weight: 600;\\n}\\n.font-bold {\\n  font-weight: 700;\\n}\\n.lowercase {\\n  text-transform: lowercase;\\n}\\n.italic {\\n  font-style: italic;\\n}\\n.leading-tight {\\n  line-height: 1.25;\\n}\\n.text-gray-700 {\\n  --tw-text-opacity: 1;\\n  color: rgb(55 65 81 / var(--tw-text-opacity));\\n}\\n.text-red-700 {\\n  --tw-text-opacity: 1;\\n  color: rgb(185 28 28 / var(--tw-text-opacity));\\n}\\n.text-blue-700 {\\n  --tw-text-opacity: 1;\\n  color: rgb(29 78 216 / var(--tw-text-opacity));\\n}\\n.text-gray-800 {\\n  --tw-text-opacity: 1;\\n  color: rgb(31 41 55 / var(--tw-text-opacity));\\n}\\n.text-white {\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\n}\\n.text-gray-600 {\\n  --tw-text-opacity: 1;\\n  color: rgb(75 85 99 / var(--tw-text-opacity));\\n}\\n.text-green-500 {\\n  --tw-text-opacity: 1;\\n  color: rgb(34 197 94 / var(--tw-text-opacity));\\n}\\n.text-gray-400 {\\n  --tw-text-opacity: 1;\\n  color: rgb(156 163 175 / var(--tw-text-opacity));\\n}\\n.shadow {\\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n.shadow-md {\\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n.shadow-indigo-50 {\\n  --tw-shadow-color: #eef2ff;\\n  --tw-shadow: var(--tw-shadow-colored);\\n}\\n.filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n}\\n.transition {\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 150ms;\\n}\\n.hover\\\\:border-blue-500:hover {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\\n}\\n.hover\\\\:border-gray-500:hover {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\\n}\\n.hover\\\\:bg-gray-100:hover {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\\n}\\n.hover\\\\:bg-yellow-700:hover {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\\n}\\n.hover\\\\:bg-blue-700:hover {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\\n}\\n.focus\\\\:outline-none:focus {\\n  outline: 2px solid transparent;\\n  outline-offset: 2px;\\n}\\n@media (min-width: 640px) {\\n  .sm\\\\:w-1\\\\/2 {\\n    width: 50%;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .lg\\\\:w-1\\\\/3 {\\n    width: 33.333333%;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/theme/tailwind.css?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/theme/variables.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/theme/variables.css ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Ionic Variables and Theming. For more info, please see:\\nhttp://ionicframework.com/docs/theming/ */\\n\\n/** Ionic CSS Variables **/\\n:root {\\n  /** primary **/\\n  --ion-color-primary: #3880ff;\\n  --ion-color-primary-rgb: 56, 128, 255;\\n  --ion-color-primary-contrast: #ffffff;\\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\\n  --ion-color-primary-shade: #3171e0;\\n  --ion-color-primary-tint: #4c8dff;\\n\\n  /** secondary **/\\n  --ion-color-secondary: #3dc2ff;\\n  --ion-color-secondary-rgb: 61, 194, 255;\\n  --ion-color-secondary-contrast: #ffffff;\\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\\n  --ion-color-secondary-shade: #36abe0;\\n  --ion-color-secondary-tint: #50c8ff;\\n\\n  /** tertiary **/\\n  --ion-color-tertiary: #5260ff;\\n  --ion-color-tertiary-rgb: 82, 96, 255;\\n  --ion-color-tertiary-contrast: #ffffff;\\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\\n  --ion-color-tertiary-shade: #4854e0;\\n  --ion-color-tertiary-tint: #6370ff;\\n\\n  /** success **/\\n  --ion-color-success: #2dd36f;\\n  --ion-color-success-rgb: 45, 211, 111;\\n  --ion-color-success-contrast: #ffffff;\\n  --ion-color-success-contrast-rgb: 255, 255, 255;\\n  --ion-color-success-shade: #28ba62;\\n  --ion-color-success-tint: #42d77d;\\n\\n  /** warning **/\\n  --ion-color-warning: #ffc409;\\n  --ion-color-warning-rgb: 255, 196, 9;\\n  --ion-color-warning-contrast: #000000;\\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\\n  --ion-color-warning-shade: #e0ac08;\\n  --ion-color-warning-tint: #ffca22;\\n\\n  /** danger **/\\n  --ion-color-danger: #eb445a;\\n  --ion-color-danger-rgb: 235, 68, 90;\\n  --ion-color-danger-contrast: #ffffff;\\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\\n  --ion-color-danger-shade: #cf3c4f;\\n  --ion-color-danger-tint: #ed576b;\\n\\n  /** dark **/\\n  --ion-color-dark: #222428;\\n  --ion-color-dark-rgb: 34, 36, 40;\\n  --ion-color-dark-contrast: #ffffff;\\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\\n  --ion-color-dark-shade: #1e2023;\\n  --ion-color-dark-tint: #383a3e;\\n\\n  /** medium **/\\n  --ion-color-medium: #92949c;\\n  --ion-color-medium-rgb: 146, 148, 156;\\n  --ion-color-medium-contrast: #ffffff;\\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\\n  --ion-color-medium-shade: #808289;\\n  --ion-color-medium-tint: #9d9fa6;\\n\\n  /** light **/\\n  --ion-color-light: #f4f5f8;\\n  --ion-color-light-rgb: 244, 245, 248;\\n  --ion-color-light-contrast: #000000;\\n  --ion-color-light-contrast-rgb: 0, 0, 0;\\n  --ion-color-light-shade: #d7d8da;\\n  --ion-color-light-tint: #f5f6f9;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  /*\\n   * Dark Colors\\n   * -------------------------------------------\\n   */\\n\\n  body {\\n    --ion-color-primary: #428cff;\\n    --ion-color-primary-rgb: 66,140,255;\\n    --ion-color-primary-contrast: #ffffff;\\n    --ion-color-primary-contrast-rgb: 255,255,255;\\n    --ion-color-primary-shade: #3a7be0;\\n    --ion-color-primary-tint: #5598ff;\\n\\n    --ion-color-secondary: #50c8ff;\\n    --ion-color-secondary-rgb: 80,200,255;\\n    --ion-color-secondary-contrast: #ffffff;\\n    --ion-color-secondary-contrast-rgb: 255,255,255;\\n    --ion-color-secondary-shade: #46b0e0;\\n    --ion-color-secondary-tint: #62ceff;\\n\\n    --ion-color-tertiary: #6a64ff;\\n    --ion-color-tertiary-rgb: 106,100,255;\\n    --ion-color-tertiary-contrast: #ffffff;\\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\\n    --ion-color-tertiary-shade: #5d58e0;\\n    --ion-color-tertiary-tint: #7974ff;\\n\\n    --ion-color-success: #2fdf75;\\n    --ion-color-success-rgb: 47,223,117;\\n    --ion-color-success-contrast: #000000;\\n    --ion-color-success-contrast-rgb: 0,0,0;\\n    --ion-color-success-shade: #29c467;\\n    --ion-color-success-tint: #44e283;\\n\\n    --ion-color-warning: #ffd534;\\n    --ion-color-warning-rgb: 255,213,52;\\n    --ion-color-warning-contrast: #000000;\\n    --ion-color-warning-contrast-rgb: 0,0,0;\\n    --ion-color-warning-shade: #e0bb2e;\\n    --ion-color-warning-tint: #ffd948;\\n\\n    --ion-color-danger: #ff4961;\\n    --ion-color-danger-rgb: 255,73,97;\\n    --ion-color-danger-contrast: #ffffff;\\n    --ion-color-danger-contrast-rgb: 255,255,255;\\n    --ion-color-danger-shade: #e04055;\\n    --ion-color-danger-tint: #ff5b71;\\n\\n    --ion-color-dark: #f4f5f8;\\n    --ion-color-dark-rgb: 244,245,248;\\n    --ion-color-dark-contrast: #000000;\\n    --ion-color-dark-contrast-rgb: 0,0,0;\\n    --ion-color-dark-shade: #d7d8da;\\n    --ion-color-dark-tint: #f5f6f9;\\n\\n    --ion-color-medium: #989aa2;\\n    --ion-color-medium-rgb: 152,154,162;\\n    --ion-color-medium-contrast: #000000;\\n    --ion-color-medium-contrast-rgb: 0,0,0;\\n    --ion-color-medium-shade: #86888f;\\n    --ion-color-medium-tint: #a2a4ab;\\n\\n    --ion-color-light: #222428;\\n    --ion-color-light-rgb: 34,36,40;\\n    --ion-color-light-contrast: #ffffff;\\n    --ion-color-light-contrast-rgb: 255,255,255;\\n    --ion-color-light-shade: #1e2023;\\n    --ion-color-light-tint: #383a3e;\\n  }\\n\\n  /*\\n   * iOS Dark Theme\\n   * -------------------------------------------\\n   */\\n\\n  .ios body {\\n    --ion-background-color: #000000;\\n    --ion-background-color-rgb: 0,0,0;\\n\\n    --ion-text-color: #ffffff;\\n    --ion-text-color-rgb: 255,255,255;\\n\\n    --ion-color-step-50: #0d0d0d;\\n    --ion-color-step-100: #1a1a1a;\\n    --ion-color-step-150: #262626;\\n    --ion-color-step-200: #333333;\\n    --ion-color-step-250: #404040;\\n    --ion-color-step-300: #4d4d4d;\\n    --ion-color-step-350: #595959;\\n    --ion-color-step-400: #666666;\\n    --ion-color-step-450: #737373;\\n    --ion-color-step-500: #808080;\\n    --ion-color-step-550: #8c8c8c;\\n    --ion-color-step-600: #999999;\\n    --ion-color-step-650: #a6a6a6;\\n    --ion-color-step-700: #b3b3b3;\\n    --ion-color-step-750: #bfbfbf;\\n    --ion-color-step-800: #cccccc;\\n    --ion-color-step-850: #d9d9d9;\\n    --ion-color-step-900: #e6e6e6;\\n    --ion-color-step-950: #f2f2f2;\\n\\n    --ion-item-background: #000000;\\n\\n    --ion-card-background: #1c1c1d;\\n  }\\n\\n  .ios ion-modal {\\n    --ion-background-color: var(--ion-color-step-100);\\n    --ion-toolbar-background: var(--ion-color-step-150);\\n    --ion-toolbar-border-color: var(--ion-color-step-250);\\n  }\\n\\n\\n  /*\\n   * Material Design Dark Theme\\n   * -------------------------------------------\\n   */\\n\\n  .md body {\\n    --ion-background-color: #121212;\\n    --ion-background-color-rgb: 18,18,18;\\n\\n    --ion-text-color: #ffffff;\\n    --ion-text-color-rgb: 255,255,255;\\n\\n    --ion-border-color: #222222;\\n\\n    --ion-color-step-50: #1e1e1e;\\n    --ion-color-step-100: #2a2a2a;\\n    --ion-color-step-150: #363636;\\n    --ion-color-step-200: #414141;\\n    --ion-color-step-250: #4d4d4d;\\n    --ion-color-step-300: #595959;\\n    --ion-color-step-350: #656565;\\n    --ion-color-step-400: #717171;\\n    --ion-color-step-450: #7d7d7d;\\n    --ion-color-step-500: #898989;\\n    --ion-color-step-550: #949494;\\n    --ion-color-step-600: #a0a0a0;\\n    --ion-color-step-650: #acacac;\\n    --ion-color-step-700: #b8b8b8;\\n    --ion-color-step-750: #c4c4c4;\\n    --ion-color-step-800: #d0d0d0;\\n    --ion-color-step-850: #dbdbdb;\\n    --ion-color-step-900: #e7e7e7;\\n    --ion-color-step-950: #f3f3f3;\\n\\n    --ion-item-background: #1e1e1e;\\n\\n    --ion-toolbar-background: #1f1f1f;\\n\\n    --ion-tab-bar-background: #1f1f1f;\\n\\n    --ion-card-background: #1e1e1e;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vue-hf4/./src/theme/variables.css?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use%5B2%5D");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/App.vue?");

/***/ }),

/***/ "./src/components/FilterDecks.vue":
/*!****************************************!*\
  !*** ./src/components/FilterDecks.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _FilterDecks_vue_vue_type_template_id_d30fe55c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterDecks.vue?vue&type=template&id=d30fe55c */ \"./src/components/FilterDecks.vue?vue&type=template&id=d30fe55c\");\n/* harmony import */ var _FilterDecks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterDecks.vue?vue&type=script&lang=js */ \"./src/components/FilterDecks.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_FilterDecks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_FilterDecks_vue_vue_type_template_id_d30fe55c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/FilterDecks.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/components/FilterDecks.vue?");

/***/ }),

/***/ "./src/components/Filters.vue":
/*!************************************!*\
  !*** ./src/components/Filters.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Filters_vue_vue_type_template_id_61dd607b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filters.vue?vue&type=template&id=61dd607b&scoped=true */ \"./src/components/Filters.vue?vue&type=template&id=61dd607b&scoped=true\");\n/* harmony import */ var _Filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters.vue?vue&type=script&lang=js */ \"./src/components/Filters.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Filters_vue_vue_type_style_index_0_id_61dd607b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css */ \"./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Filters_vue_vue_type_template_id_61dd607b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-61dd607b\"],['__file',\"src/components/Filters.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?");

/***/ }),

/***/ "./src/components/FlipCard.vue":
/*!*************************************!*\
  !*** ./src/components/FlipCard.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _FlipCard_vue_vue_type_template_id_1c803acd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlipCard.vue?vue&type=template&id=1c803acd&scoped=true */ \"./src/components/FlipCard.vue?vue&type=template&id=1c803acd&scoped=true\");\n/* harmony import */ var _FlipCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlipCard.vue?vue&type=script&lang=js */ \"./src/components/FlipCard.vue?vue&type=script&lang=js\");\n/* harmony import */ var _FlipCard_vue_vue_type_style_index_0_id_1c803acd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css */ \"./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_FlipCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_FlipCard_vue_vue_type_template_id_1c803acd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-1c803acd\"],['__file',\"src/components/FlipCard.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?");

/***/ }),

/***/ "./src/components/MyFooter.vue":
/*!*************************************!*\
  !*** ./src/components/MyFooter.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MyFooter_vue_vue_type_template_id_cbeb59d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true */ \"./src/components/MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true\");\n/* harmony import */ var _MyFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyFooter.vue?vue&type=script&lang=js */ \"./src/components/MyFooter.vue?vue&type=script&lang=js\");\n/* harmony import */ var _MyFooter_vue_vue_type_style_index_0_id_cbeb59d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css */ \"./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_MyFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_MyFooter_vue_vue_type_template_id_cbeb59d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-cbeb59d2\"],['__file',\"src/components/MyFooter.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?");

/***/ }),

/***/ "./src/components/MyHeader.vue":
/*!*************************************!*\
  !*** ./src/components/MyHeader.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MyHeader_vue_vue_type_template_id_898691ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyHeader.vue?vue&type=template&id=898691ee */ \"./src/components/MyHeader.vue?vue&type=template&id=898691ee\");\n/* harmony import */ var _MyHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyHeader.vue?vue&type=script&lang=js */ \"./src/components/MyHeader.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_MyHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_MyHeader_vue_vue_type_template_id_898691ee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/MyHeader.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyHeader.vue?");

/***/ }),

/***/ "./src/components/Sidebar.vue":
/*!************************************!*\
  !*** ./src/components/Sidebar.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sidebar_vue_vue_type_template_id_7d622f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true */ \"./src/components/Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true\");\n/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js */ \"./src/components/Sidebar.vue?vue&type=script&lang=js\");\n/* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_7d622f5c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css */ \"./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Sidebar_vue_vue_type_template_id_7d622f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-7d622f5c\"],['__file',\"src/components/Sidebar.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?");

/***/ }),

/***/ "./src/components/SliderCards.vue":
/*!****************************************!*\
  !*** ./src/components/SliderCards.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SliderCards_vue_vue_type_template_id_5f54d002_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderCards.vue?vue&type=template&id=5f54d002&scoped=true */ \"./src/components/SliderCards.vue?vue&type=template&id=5f54d002&scoped=true\");\n/* harmony import */ var _SliderCards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderCards.vue?vue&type=script&lang=js */ \"./src/components/SliderCards.vue?vue&type=script&lang=js\");\n/* harmony import */ var _SliderCards_vue_vue_type_style_index_0_id_5f54d002_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css */ \"./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_SliderCards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_SliderCards_vue_vue_type_template_id_5f54d002_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-5f54d002\"],['__file',\"src/components/SliderCards.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?");

/***/ }),

/***/ "./src/views/DecksPage.vue":
/*!*********************************!*\
  !*** ./src/views/DecksPage.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DecksPage_vue_vue_type_template_id_01a1bd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true */ \"./src/views/DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true\");\n/* harmony import */ var _DecksPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecksPage.vue?vue&type=script&lang=js */ \"./src/views/DecksPage.vue?vue&type=script&lang=js\");\n/* harmony import */ var _DecksPage_vue_vue_type_style_index_0_id_01a1bd4f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css */ \"./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_DecksPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_DecksPage_vue_vue_type_template_id_01a1bd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-01a1bd4f\"],['__file',\"src/views/DecksPage.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?");

/***/ }),

/***/ "./src/views/HomePage.vue":
/*!********************************!*\
  !*** ./src/views/HomePage.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _HomePage_vue_vue_type_template_id_c6bdc170_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=c6bdc170&scoped=true */ \"./src/views/HomePage.vue?vue&type=template&id=c6bdc170&scoped=true\");\n/* harmony import */ var _HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js */ \"./src/views/HomePage.vue?vue&type=script&lang=js\");\n/* harmony import */ var _HomePage_vue_vue_type_style_index_0_id_c6bdc170_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css */ \"./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_HomePage_vue_vue_type_template_id_c6bdc170_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-c6bdc170\"],['__file',\"src/views/HomePage.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?");

/***/ }),

/***/ "./src/views/TestSelectPage2.vue":
/*!***************************************!*\
  !*** ./src/views/TestSelectPage2.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TestSelectPage2_vue_vue_type_template_id_86c7dbaa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestSelectPage2.vue?vue&type=template&id=86c7dbaa */ \"./src/views/TestSelectPage2.vue?vue&type=template&id=86c7dbaa\");\n/* harmony import */ var _TestSelectPage2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestSelectPage2.vue?vue&type=script&lang=js */ \"./src/views/TestSelectPage2.vue?vue&type=script&lang=js\");\n/* harmony import */ var _TestSelectPage2_vue_vue_type_style_index_0_id_86c7dbaa_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css */ \"./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css\");\n/* harmony import */ var _Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_maurizio_Progetti_vue_hf4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_TestSelectPage2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_TestSelectPage2_vue_vue_type_template_id_86c7dbaa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/TestSelectPage2.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/App.vue?");

/***/ }),

/***/ "./src/components/FilterDecks.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/FilterDecks.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterDecks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterDecks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilterDecks.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FilterDecks.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/components/FilterDecks.vue?");

/***/ }),

/***/ "./src/components/Filters.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Filters.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filters.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?");

/***/ }),

/***/ "./src/components/FlipCard.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/FlipCard.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FlipCard.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?");

/***/ }),

/***/ "./src/components/MyFooter.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/MyFooter.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyFooter.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?");

/***/ }),

/***/ "./src/components/MyHeader.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/MyHeader.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyHeader.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyHeader.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/components/MyHeader.vue?");

/***/ }),

/***/ "./src/components/Sidebar.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/Sidebar.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?");

/***/ }),

/***/ "./src/components/SliderCards.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/SliderCards.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderCards.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?");

/***/ }),

/***/ "./src/views/DecksPage.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/views/DecksPage.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DecksPage.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?");

/***/ }),

/***/ "./src/views/HomePage.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/HomePage.vue?vue&type=script&lang=js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?");

/***/ }),

/***/ "./src/views/TestSelectPage2.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/views/TestSelectPage2.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TestSelectPage2.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/App.vue?");

/***/ }),

/***/ "./src/components/FilterDecks.vue?vue&type=template&id=d30fe55c":
/*!**********************************************************************!*\
  !*** ./src/components/FilterDecks.vue?vue&type=template&id=d30fe55c ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterDecks_vue_vue_type_template_id_d30fe55c__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilterDecks_vue_vue_type_template_id_d30fe55c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilterDecks.vue?vue&type=template&id=d30fe55c */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FilterDecks.vue?vue&type=template&id=d30fe55c\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/FilterDecks.vue?");

/***/ }),

/***/ "./src/components/Filters.vue?vue&type=template&id=61dd607b&scoped=true":
/*!******************************************************************************!*\
  !*** ./src/components/Filters.vue?vue&type=template&id=61dd607b&scoped=true ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_template_id_61dd607b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_template_id_61dd607b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filters.vue?vue&type=template&id=61dd607b&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=template&id=61dd607b&scoped=true\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?");

/***/ }),

/***/ "./src/components/FlipCard.vue?vue&type=template&id=1c803acd&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/components/FlipCard.vue?vue&type=template&id=1c803acd&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_template_id_1c803acd_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_template_id_1c803acd_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FlipCard.vue?vue&type=template&id=1c803acd&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=template&id=1c803acd&scoped=true\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?");

/***/ }),

/***/ "./src/components/MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/components/MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_template_id_cbeb59d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_template_id_cbeb59d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=template&id=cbeb59d2&scoped=true\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?");

/***/ }),

/***/ "./src/components/MyHeader.vue?vue&type=template&id=898691ee":
/*!*******************************************************************!*\
  !*** ./src/components/MyHeader.vue?vue&type=template&id=898691ee ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyHeader_vue_vue_type_template_id_898691ee__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyHeader_vue_vue_type_template_id_898691ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyHeader.vue?vue&type=template&id=898691ee */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyHeader.vue?vue&type=template&id=898691ee\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyHeader.vue?");

/***/ }),

/***/ "./src/components/Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true":
/*!******************************************************************************!*\
  !*** ./src/components/Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_7d622f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_7d622f5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=template&id=7d622f5c&scoped=true\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?");

/***/ }),

/***/ "./src/components/SliderCards.vue?vue&type=template&id=5f54d002&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/SliderCards.vue?vue&type=template&id=5f54d002&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_template_id_5f54d002_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_template_id_5f54d002_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderCards.vue?vue&type=template&id=5f54d002&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=template&id=5f54d002&scoped=true\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?");

/***/ }),

/***/ "./src/views/DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true":
/*!***************************************************************************!*\
  !*** ./src/views/DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_template_id_01a1bd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_template_id_01a1bd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=template&id=01a1bd4f&scoped=true\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?");

/***/ }),

/***/ "./src/views/HomePage.vue?vue&type=template&id=c6bdc170&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/views/HomePage.vue?vue&type=template&id=c6bdc170&scoped=true ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_template_id_c6bdc170_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_template_id_c6bdc170_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=template&id=c6bdc170&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=template&id=c6bdc170&scoped=true\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?");

/***/ }),

/***/ "./src/views/TestSelectPage2.vue?vue&type=template&id=86c7dbaa":
/*!*********************************************************************!*\
  !*** ./src/views/TestSelectPage2.vue?vue&type=template&id=86c7dbaa ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_template_id_86c7dbaa__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_template_id_86c7dbaa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TestSelectPage2.vue?vue&type=template&id=86c7dbaa */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=template&id=86c7dbaa\");\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?");

/***/ }),

/***/ "./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css":
/*!********************************************************************************************!*\
  !*** ./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_style_index_0_id_61dd607b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_style_index_0_id_61dd607b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_style_index_0_id_61dd607b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_style_index_0_id_61dd607b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_style_index_0_id_61dd607b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?");

/***/ }),

/***/ "./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css":
/*!*********************************************************************************************!*\
  !*** ./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_style_index_0_id_1c803acd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_style_index_0_id_1c803acd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_style_index_0_id_1c803acd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_style_index_0_id_1c803acd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlipCard_vue_vue_type_style_index_0_id_1c803acd_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?");

/***/ }),

/***/ "./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css":
/*!*********************************************************************************************!*\
  !*** ./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_style_index_0_id_cbeb59d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_style_index_0_id_cbeb59d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_style_index_0_id_cbeb59d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_style_index_0_id_cbeb59d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MyFooter_vue_vue_type_style_index_0_id_cbeb59d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?");

/***/ }),

/***/ "./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css":
/*!********************************************************************************************!*\
  !*** ./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_style_index_0_id_7d622f5c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_style_index_0_id_7d622f5c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_style_index_0_id_7d622f5c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_style_index_0_id_7d622f5c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_style_index_0_id_7d622f5c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?");

/***/ }),

/***/ "./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_style_index_0_id_5f54d002_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_style_index_0_id_5f54d002_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_style_index_0_id_5f54d002_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_style_index_0_id_5f54d002_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SliderCards_vue_vue_type_style_index_0_id_5f54d002_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?");

/***/ }),

/***/ "./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css":
/*!*****************************************************************************************!*\
  !*** ./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_style_index_0_id_01a1bd4f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_style_index_0_id_01a1bd4f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_style_index_0_id_01a1bd4f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_style_index_0_id_01a1bd4f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DecksPage_vue_vue_type_style_index_0_id_01a1bd4f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?");

/***/ }),

/***/ "./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css":
/*!****************************************************************************************!*\
  !*** ./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_c6bdc170_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_c6bdc170_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_c6bdc170_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_c6bdc170_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_style_index_0_id_c6bdc170_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?");

/***/ }),

/***/ "./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css":
/*!***********************************************************************************!*\
  !*** ./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_style_index_0_id_86c7dbaa_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_style_index_0_id_86c7dbaa_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_style_index_0_id_86c7dbaa_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_style_index_0_id_86c7dbaa_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TestSelectPage2_vue_vue_type_style_index_0_id_86c7dbaa_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Filters.vue?vue&type=style&index=0&id=61dd607b&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"b8f3561c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/components/Filters.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FlipCard.vue?vue&type=style&index=0&id=1c803acd&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"25be2615\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/components/FlipCard.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MyFooter.vue?vue&type=style&index=0&id=cbeb59d2&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"5807eed8\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/components/MyFooter.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Sidebar.vue?vue&type=style&index=0&id=7d622f5c&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"3cf4c5dd\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/components/Sidebar.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SliderCards.vue?vue&type=style&index=0&id=5f54d002&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"8bc00be0\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/components/SliderCards.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DecksPage.vue?vue&type=style&index=0&id=01a1bd4f&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"49edd691\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/views/DecksPage.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomePage.vue?vue&type=style&index=0&id=c6bdc170&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"408f901c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/views/HomePage.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/TestSelectPage2.vue?vue&type=style&index=0&id=86c7dbaa&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"dbf0c91a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/views/TestSelectPage2.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/theme/tailwind.css":
/*!********************************!*\
  !*** ./src/theme/tailwind.css ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./tailwind.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/theme/tailwind.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"18e1db25\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/theme/tailwind.css?");

/***/ }),

/***/ "./src/theme/variables.css":
/*!*********************************!*\
  !*** ./src/theme/variables.css ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./variables.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./src/theme/variables.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"28be9752\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-hf4/./src/theme/variables.css?");

/***/ }),

/***/ "./src/assets/images/cards sync recursive ^\\.\\/.*\\.jpg$":
/*!*****************************************************!*\
  !*** ./src/assets/images/cards/ sync ^\.\/.*\.jpg$ ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./CB056F.jpg\": \"./src/assets/images/cards/CB056F.jpg\",\n\t\"./CB056R.jpg\": \"./src/assets/images/cards/CB056R.jpg\",\n\t\"./CB057F.jpg\": \"./src/assets/images/cards/CB057F.jpg\",\n\t\"./CB057R.jpg\": \"./src/assets/images/cards/CB057R.jpg\",\n\t\"./CB058F.jpg\": \"./src/assets/images/cards/CB058F.jpg\",\n\t\"./CB058R.jpg\": \"./src/assets/images/cards/CB058R.jpg\",\n\t\"./CB059F.jpg\": \"./src/assets/images/cards/CB059F.jpg\",\n\t\"./CB059R.jpg\": \"./src/assets/images/cards/CB059R.jpg\",\n\t\"./CB060F.jpg\": \"./src/assets/images/cards/CB060F.jpg\",\n\t\"./CB060R.jpg\": \"./src/assets/images/cards/CB060R.jpg\",\n\t\"./CB061F.jpg\": \"./src/assets/images/cards/CB061F.jpg\",\n\t\"./CB061R.jpg\": \"./src/assets/images/cards/CB061R.jpg\",\n\t\"./CB062F.jpg\": \"./src/assets/images/cards/CB062F.jpg\",\n\t\"./CB062R.jpg\": \"./src/assets/images/cards/CB062R.jpg\",\n\t\"./CB063F.jpg\": \"./src/assets/images/cards/CB063F.jpg\",\n\t\"./CB063R.jpg\": \"./src/assets/images/cards/CB063R.jpg\",\n\t\"./CB064F.jpg\": \"./src/assets/images/cards/CB064F.jpg\",\n\t\"./CB064R.jpg\": \"./src/assets/images/cards/CB064R.jpg\",\n\t\"./CB065F.jpg\": \"./src/assets/images/cards/CB065F.jpg\",\n\t\"./CB065R.jpg\": \"./src/assets/images/cards/CB065R.jpg\",\n\t\"./CB066F.jpg\": \"./src/assets/images/cards/CB066F.jpg\",\n\t\"./CB066R.jpg\": \"./src/assets/images/cards/CB066R.jpg\",\n\t\"./CB067F.jpg\": \"./src/assets/images/cards/CB067F.jpg\",\n\t\"./CB067R.jpg\": \"./src/assets/images/cards/CB067R.jpg\",\n\t\"./CD092F.jpg\": \"./src/assets/images/cards/CD092F.jpg\",\n\t\"./CD092R.jpg\": \"./src/assets/images/cards/CD092R.jpg\",\n\t\"./CD093F.jpg\": \"./src/assets/images/cards/CD093F.jpg\",\n\t\"./CD093R.jpg\": \"./src/assets/images/cards/CD093R.jpg\",\n\t\"./CD094F.jpg\": \"./src/assets/images/cards/CD094F.jpg\",\n\t\"./CD094R.jpg\": \"./src/assets/images/cards/CD094R.jpg\",\n\t\"./CD095F.jpg\": \"./src/assets/images/cards/CD095F.jpg\",\n\t\"./CD095R.jpg\": \"./src/assets/images/cards/CD095R.jpg\",\n\t\"./CD096F.jpg\": \"./src/assets/images/cards/CD096F.jpg\",\n\t\"./CD096R.jpg\": \"./src/assets/images/cards/CD096R.jpg\",\n\t\"./CD097F.jpg\": \"./src/assets/images/cards/CD097F.jpg\",\n\t\"./CD097R.jpg\": \"./src/assets/images/cards/CD097R.jpg\",\n\t\"./CD098F.jpg\": \"./src/assets/images/cards/CD098F.jpg\",\n\t\"./CD098R.jpg\": \"./src/assets/images/cards/CD098R.jpg\",\n\t\"./CD099F.jpg\": \"./src/assets/images/cards/CD099F.jpg\",\n\t\"./CD099R.jpg\": \"./src/assets/images/cards/CD099R.jpg\",\n\t\"./CD100F.jpg\": \"./src/assets/images/cards/CD100F.jpg\",\n\t\"./CD100R.jpg\": \"./src/assets/images/cards/CD100R.jpg\",\n\t\"./CD101F.jpg\": \"./src/assets/images/cards/CD101F.jpg\",\n\t\"./CD101R.jpg\": \"./src/assets/images/cards/CD101R.jpg\",\n\t\"./CD102F.jpg\": \"./src/assets/images/cards/CD102F.jpg\",\n\t\"./CD102R.jpg\": \"./src/assets/images/cards/CD102R.jpg\",\n\t\"./CD103F.jpg\": \"./src/assets/images/cards/CD103F.jpg\",\n\t\"./CD103R.jpg\": \"./src/assets/images/cards/CD103R.jpg\",\n\t\"./CF068F.jpg\": \"./src/assets/images/cards/CF068F.jpg\",\n\t\"./CF068R.jpg\": \"./src/assets/images/cards/CF068R.jpg\",\n\t\"./CF069F.jpg\": \"./src/assets/images/cards/CF069F.jpg\",\n\t\"./CF069R.jpg\": \"./src/assets/images/cards/CF069R.jpg\",\n\t\"./CF070F.jpg\": \"./src/assets/images/cards/CF070F.jpg\",\n\t\"./CF070R.jpg\": \"./src/assets/images/cards/CF070R.jpg\",\n\t\"./CF071F.jpg\": \"./src/assets/images/cards/CF071F.jpg\",\n\t\"./CF071R.jpg\": \"./src/assets/images/cards/CF071R.jpg\",\n\t\"./CF072F.jpg\": \"./src/assets/images/cards/CF072F.jpg\",\n\t\"./CF072R.jpg\": \"./src/assets/images/cards/CF072R.jpg\",\n\t\"./CF073F.jpg\": \"./src/assets/images/cards/CF073F.jpg\",\n\t\"./CF073R.jpg\": \"./src/assets/images/cards/CF073R.jpg\",\n\t\"./CF074F.jpg\": \"./src/assets/images/cards/CF074F.jpg\",\n\t\"./CF074R.jpg\": \"./src/assets/images/cards/CF074R.jpg\",\n\t\"./CF075F.jpg\": \"./src/assets/images/cards/CF075F.jpg\",\n\t\"./CF075R.jpg\": \"./src/assets/images/cards/CF075R.jpg\",\n\t\"./CF076F.jpg\": \"./src/assets/images/cards/CF076F.jpg\",\n\t\"./CF076R.jpg\": \"./src/assets/images/cards/CF076R.jpg\",\n\t\"./CF077F.jpg\": \"./src/assets/images/cards/CF077F.jpg\",\n\t\"./CF077R.jpg\": \"./src/assets/images/cards/CF077R.jpg\",\n\t\"./CF078F.jpg\": \"./src/assets/images/cards/CF078F.jpg\",\n\t\"./CF078R.jpg\": \"./src/assets/images/cards/CF078R.jpg\",\n\t\"./CF079F.jpg\": \"./src/assets/images/cards/CF079F.jpg\",\n\t\"./CF079R.jpg\": \"./src/assets/images/cards/CF079R.jpg\",\n\t\"./CG104F.jpg\": \"./src/assets/images/cards/CG104F.jpg\",\n\t\"./CG104R.jpg\": \"./src/assets/images/cards/CG104R.jpg\",\n\t\"./CG105F.jpg\": \"./src/assets/images/cards/CG105F.jpg\",\n\t\"./CG105R.jpg\": \"./src/assets/images/cards/CG105R.jpg\",\n\t\"./CG106F.jpg\": \"./src/assets/images/cards/CG106F.jpg\",\n\t\"./CG106R.jpg\": \"./src/assets/images/cards/CG106R.jpg\",\n\t\"./CG107F.jpg\": \"./src/assets/images/cards/CG107F.jpg\",\n\t\"./CG107R.jpg\": \"./src/assets/images/cards/CG107R.jpg\",\n\t\"./CG108F.jpg\": \"./src/assets/images/cards/CG108F.jpg\",\n\t\"./CG108R.jpg\": \"./src/assets/images/cards/CG108R.jpg\",\n\t\"./CG109F.jpg\": \"./src/assets/images/cards/CG109F.jpg\",\n\t\"./CG109R.jpg\": \"./src/assets/images/cards/CG109R.jpg\",\n\t\"./CG110F.jpg\": \"./src/assets/images/cards/CG110F.jpg\",\n\t\"./CG110R.jpg\": \"./src/assets/images/cards/CG110R.jpg\",\n\t\"./CG111F.jpg\": \"./src/assets/images/cards/CG111F.jpg\",\n\t\"./CG111R.jpg\": \"./src/assets/images/cards/CG111R.jpg\",\n\t\"./CG112F.jpg\": \"./src/assets/images/cards/CG112F.jpg\",\n\t\"./CG112R.jpg\": \"./src/assets/images/cards/CG112R.jpg\",\n\t\"./CG113F.jpg\": \"./src/assets/images/cards/CG113F.jpg\",\n\t\"./CG113R.jpg\": \"./src/assets/images/cards/CG113R.jpg\",\n\t\"./CG114F.jpg\": \"./src/assets/images/cards/CG114F.jpg\",\n\t\"./CG114R.jpg\": \"./src/assets/images/cards/CG114R.jpg\",\n\t\"./CG115F.jpg\": \"./src/assets/images/cards/CG115F.jpg\",\n\t\"./CG115R.jpg\": \"./src/assets/images/cards/CG115R.jpg\",\n\t\"./CG116F.jpg\": \"./src/assets/images/cards/CG116F.jpg\",\n\t\"./CG116R.jpg\": \"./src/assets/images/cards/CG116R.jpg\",\n\t\"./CG117F.jpg\": \"./src/assets/images/cards/CG117F.jpg\",\n\t\"./CG117R.jpg\": \"./src/assets/images/cards/CG117R.jpg\",\n\t\"./CG118F.jpg\": \"./src/assets/images/cards/CG118F.jpg\",\n\t\"./CG118R.jpg\": \"./src/assets/images/cards/CG118R.jpg\",\n\t\"./CG119F.jpg\": \"./src/assets/images/cards/CG119F.jpg\",\n\t\"./CG119R.jpg\": \"./src/assets/images/cards/CG119R.jpg\",\n\t\"./CG120F.jpg\": \"./src/assets/images/cards/CG120F.jpg\",\n\t\"./CG120R.jpg\": \"./src/assets/images/cards/CG120R.jpg\",\n\t\"./CQ038F.jpg\": \"./src/assets/images/cards/CQ038F.jpg\",\n\t\"./CQ038R.jpg\": \"./src/assets/images/cards/CQ038R.jpg\",\n\t\"./CQ039F.jpg\": \"./src/assets/images/cards/CQ039F.jpg\",\n\t\"./CQ039R.jpg\": \"./src/assets/images/cards/CQ039R.jpg\",\n\t\"./CQ040F.jpg\": \"./src/assets/images/cards/CQ040F.jpg\",\n\t\"./CQ040R.jpg\": \"./src/assets/images/cards/CQ040R.jpg\",\n\t\"./CQ041F.jpg\": \"./src/assets/images/cards/CQ041F.jpg\",\n\t\"./CQ041R.jpg\": \"./src/assets/images/cards/CQ041R.jpg\",\n\t\"./CQ042F.jpg\": \"./src/assets/images/cards/CQ042F.jpg\",\n\t\"./CQ042R.jpg\": \"./src/assets/images/cards/CQ042R.jpg\",\n\t\"./CQ043F.jpg\": \"./src/assets/images/cards/CQ043F.jpg\",\n\t\"./CQ043R.jpg\": \"./src/assets/images/cards/CQ043R.jpg\",\n\t\"./CT044F.jpg\": \"./src/assets/images/cards/CT044F.jpg\",\n\t\"./CT044R.jpg\": \"./src/assets/images/cards/CT044R.jpg\",\n\t\"./CT045F.jpg\": \"./src/assets/images/cards/CT045F.jpg\",\n\t\"./CT045R.jpg\": \"./src/assets/images/cards/CT045R.jpg\",\n\t\"./CT046F.jpg\": \"./src/assets/images/cards/CT046F.jpg\",\n\t\"./CT046R.jpg\": \"./src/assets/images/cards/CT046R.jpg\",\n\t\"./CT047F.jpg\": \"./src/assets/images/cards/CT047F.jpg\",\n\t\"./CT047R.jpg\": \"./src/assets/images/cards/CT047R.jpg\",\n\t\"./CT048F.jpg\": \"./src/assets/images/cards/CT048F.jpg\",\n\t\"./CT048R.jpg\": \"./src/assets/images/cards/CT048R.jpg\",\n\t\"./CT049F.jpg\": \"./src/assets/images/cards/CT049F.jpg\",\n\t\"./CT049R.jpg\": \"./src/assets/images/cards/CT049R.jpg\",\n\t\"./CT050F.jpg\": \"./src/assets/images/cards/CT050F.jpg\",\n\t\"./CT050R.jpg\": \"./src/assets/images/cards/CT050R.jpg\",\n\t\"./CT051F.jpg\": \"./src/assets/images/cards/CT051F.jpg\",\n\t\"./CT051R.jpg\": \"./src/assets/images/cards/CT051R.jpg\",\n\t\"./CT052F.jpg\": \"./src/assets/images/cards/CT052F.jpg\",\n\t\"./CT052R.jpg\": \"./src/assets/images/cards/CT052R.jpg\",\n\t\"./CT053F.jpg\": \"./src/assets/images/cards/CT053F.jpg\",\n\t\"./CT053R.jpg\": \"./src/assets/images/cards/CT053R.jpg\",\n\t\"./CT054F.jpg\": \"./src/assets/images/cards/CT054F.jpg\",\n\t\"./CT054R.jpg\": \"./src/assets/images/cards/CT054R.jpg\",\n\t\"./CT055F.jpg\": \"./src/assets/images/cards/CT055F.jpg\",\n\t\"./CT055R.jpg\": \"./src/assets/images/cards/CT055R.jpg\",\n\t\"./CX080F.jpg\": \"./src/assets/images/cards/CX080F.jpg\",\n\t\"./CX080R.jpg\": \"./src/assets/images/cards/CX080R.jpg\",\n\t\"./CX081F.jpg\": \"./src/assets/images/cards/CX081F.jpg\",\n\t\"./CX081R.jpg\": \"./src/assets/images/cards/CX081R.jpg\",\n\t\"./CX082F.jpg\": \"./src/assets/images/cards/CX082F.jpg\",\n\t\"./CX082R.jpg\": \"./src/assets/images/cards/CX082R.jpg\",\n\t\"./CX083F.jpg\": \"./src/assets/images/cards/CX083F.jpg\",\n\t\"./CX083R.jpg\": \"./src/assets/images/cards/CX083R.jpg\",\n\t\"./CX084F.jpg\": \"./src/assets/images/cards/CX084F.jpg\",\n\t\"./CX084R.jpg\": \"./src/assets/images/cards/CX084R.jpg\",\n\t\"./CX085F.jpg\": \"./src/assets/images/cards/CX085F.jpg\",\n\t\"./CX085R.jpg\": \"./src/assets/images/cards/CX085R.jpg\",\n\t\"./CX086F.jpg\": \"./src/assets/images/cards/CX086F.jpg\",\n\t\"./CX086R.jpg\": \"./src/assets/images/cards/CX086R.jpg\",\n\t\"./CX087F.jpg\": \"./src/assets/images/cards/CX087F.jpg\",\n\t\"./CX087R.jpg\": \"./src/assets/images/cards/CX087R.jpg\",\n\t\"./CX088F.jpg\": \"./src/assets/images/cards/CX088F.jpg\",\n\t\"./CX088R.jpg\": \"./src/assets/images/cards/CX088R.jpg\",\n\t\"./CX089F.jpg\": \"./src/assets/images/cards/CX089F.jpg\",\n\t\"./CX089R.jpg\": \"./src/assets/images/cards/CX089R.jpg\",\n\t\"./CX090F.jpg\": \"./src/assets/images/cards/CX090F.jpg\",\n\t\"./CX090R.jpg\": \"./src/assets/images/cards/CX090R.jpg\",\n\t\"./CX091F.jpg\": \"./src/assets/images/cards/CX091F.jpg\",\n\t\"./CX091R.jpg\": \"./src/assets/images/cards/CX091R.jpg\",\n\t\"./M1F163F.jpg\": \"./src/assets/images/cards/M1F163F.jpg\",\n\t\"./M1F163R.jpg\": \"./src/assets/images/cards/M1F163R.jpg\",\n\t\"./M1F164F.jpg\": \"./src/assets/images/cards/M1F164F.jpg\",\n\t\"./M1F164R.jpg\": \"./src/assets/images/cards/M1F164R.jpg\",\n\t\"./M1F165F.jpg\": \"./src/assets/images/cards/M1F165F.jpg\",\n\t\"./M1F165R.jpg\": \"./src/assets/images/cards/M1F165R.jpg\",\n\t\"./M1F166F.jpg\": \"./src/assets/images/cards/M1F166F.jpg\",\n\t\"./M1F166R.jpg\": \"./src/assets/images/cards/M1F166R.jpg\",\n\t\"./M1F167F.jpg\": \"./src/assets/images/cards/M1F167F.jpg\",\n\t\"./M1F167R.jpg\": \"./src/assets/images/cards/M1F167R.jpg\",\n\t\"./M1F168F.jpg\": \"./src/assets/images/cards/M1F168F.jpg\",\n\t\"./M1F168R.jpg\": \"./src/assets/images/cards/M1F168R.jpg\",\n\t\"./M1F169F.jpg\": \"./src/assets/images/cards/M1F169F.jpg\",\n\t\"./M1F169R.jpg\": \"./src/assets/images/cards/M1F169R.jpg\",\n\t\"./M1W156F.jpg\": \"./src/assets/images/cards/M1W156F.jpg\",\n\t\"./M1W156R.jpg\": \"./src/assets/images/cards/M1W156R.jpg\",\n\t\"./M1W157F.jpg\": \"./src/assets/images/cards/M1W157F.jpg\",\n\t\"./M1W157R.jpg\": \"./src/assets/images/cards/M1W157R.jpg\",\n\t\"./M1W158F.jpg\": \"./src/assets/images/cards/M1W158F.jpg\",\n\t\"./M1W158R.jpg\": \"./src/assets/images/cards/M1W158R.jpg\",\n\t\"./M1W159F.jpg\": \"./src/assets/images/cards/M1W159F.jpg\",\n\t\"./M1W159R.jpg\": \"./src/assets/images/cards/M1W159R.jpg\",\n\t\"./M1W160F.jpg\": \"./src/assets/images/cards/M1W160F.jpg\",\n\t\"./M1W160R.jpg\": \"./src/assets/images/cards/M1W160R.jpg\",\n\t\"./M1W161F.jpg\": \"./src/assets/images/cards/M1W161F.jpg\",\n\t\"./M1W161R.jpg\": \"./src/assets/images/cards/M1W161R.jpg\",\n\t\"./M1W162F.jpg\": \"./src/assets/images/cards/M1W162F.jpg\",\n\t\"./M1W162R.jpg\": \"./src/assets/images/cards/M1W162R.jpg\",\n\t\"./M2B170F.jpg\": \"./src/assets/images/cards/M2B170F.jpg\",\n\t\"./M2B170R.jpg\": \"./src/assets/images/cards/M2B170R.jpg\",\n\t\"./M2B171F.jpg\": \"./src/assets/images/cards/M2B171F.jpg\",\n\t\"./M2B171R.jpg\": \"./src/assets/images/cards/M2B171R.jpg\",\n\t\"./M2B172F.jpg\": \"./src/assets/images/cards/M2B172F.jpg\",\n\t\"./M2B172R.jpg\": \"./src/assets/images/cards/M2B172R.jpg\",\n\t\"./M2B173F.jpg\": \"./src/assets/images/cards/M2B173F.jpg\",\n\t\"./M2B173R.jpg\": \"./src/assets/images/cards/M2B173R.jpg\",\n\t\"./M2B174F.jpg\": \"./src/assets/images/cards/M2B174F.jpg\",\n\t\"./M2B174R.jpg\": \"./src/assets/images/cards/M2B174R.jpg\",\n\t\"./M2B175F.jpg\": \"./src/assets/images/cards/M2B175F.jpg\",\n\t\"./M2B175R.jpg\": \"./src/assets/images/cards/M2B175R.jpg\",\n\t\"./M2B176F.jpg\": \"./src/assets/images/cards/M2B176F.jpg\",\n\t\"./M2B176R.jpg\": \"./src/assets/images/cards/M2B176R.jpg\",\n\t\"./M2B177F.jpg\": \"./src/assets/images/cards/M2B177F.jpg\",\n\t\"./M2B177R.jpg\": \"./src/assets/images/cards/M2B177R.jpg\",\n\t\"./M2B178F.jpg\": \"./src/assets/images/cards/M2B178F.jpg\",\n\t\"./M2B178R.jpg\": \"./src/assets/images/cards/M2B178R.jpg\",\n\t\"./M2B179F.jpg\": \"./src/assets/images/cards/M2B179F.jpg\",\n\t\"./M2B179R.jpg\": \"./src/assets/images/cards/M2B179R.jpg\",\n\t\"./M2C180F.jpg\": \"./src/assets/images/cards/M2C180F.jpg\",\n\t\"./M2C180R.jpg\": \"./src/assets/images/cards/M2C180R.jpg\",\n\t\"./M2C181F.jpg\": \"./src/assets/images/cards/M2C181F.jpg\",\n\t\"./M2C181R.jpg\": \"./src/assets/images/cards/M2C181R.jpg\",\n\t\"./M2C182F.jpg\": \"./src/assets/images/cards/M2C182F.jpg\",\n\t\"./M2C182R.jpg\": \"./src/assets/images/cards/M2C182R.jpg\",\n\t\"./M2C183F.jpg\": \"./src/assets/images/cards/M2C183F.jpg\",\n\t\"./M2C183R.jpg\": \"./src/assets/images/cards/M2C183R.jpg\",\n\t\"./M2C184F.jpg\": \"./src/assets/images/cards/M2C184F.jpg\",\n\t\"./M2C184R.jpg\": \"./src/assets/images/cards/M2C184R.jpg\",\n\t\"./M2C185F.jpg\": \"./src/assets/images/cards/M2C185F.jpg\",\n\t\"./M2C185R.jpg\": \"./src/assets/images/cards/M2C185R.jpg\",\n\t\"./M2C186F.jpg\": \"./src/assets/images/cards/M2C186F.jpg\",\n\t\"./M2C186R.jpg\": \"./src/assets/images/cards/M2C186R.jpg\",\n\t\"./M2C187F.jpg\": \"./src/assets/images/cards/M2C187F.jpg\",\n\t\"./M2C187R.jpg\": \"./src/assets/images/cards/M2C187R.jpg\",\n\t\"./M2C188F.jpg\": \"./src/assets/images/cards/M2C188F.jpg\",\n\t\"./M2C188R.jpg\": \"./src/assets/images/cards/M2C188R.jpg\",\n\t\"./M2C189F.jpg\": \"./src/assets/images/cards/M2C189F.jpg\",\n\t\"./M2C189R.jpg\": \"./src/assets/images/cards/M2C189R.jpg\",\n\t\"./M2C190F.jpg\": \"./src/assets/images/cards/M2C190F.jpg\",\n\t\"./M2C190R.jpg\": \"./src/assets/images/cards/M2C190R.jpg\",\n\t\"./M2C191F.jpg\": \"./src/assets/images/cards/M2C191F.jpg\",\n\t\"./M2C191R.jpg\": \"./src/assets/images/cards/M2C191R.jpg\",\n\t\"./M2C192F.jpg\": \"./src/assets/images/cards/M2C192F.jpg\",\n\t\"./M2C192R.jpg\": \"./src/assets/images/cards/M2C192R.jpg\",\n\t\"./M2C193F.jpg\": \"./src/assets/images/cards/M2C193F.jpg\",\n\t\"./M2C193R.jpg\": \"./src/assets/images/cards/M2C193R.jpg\",\n\t\"./M2C194F.jpg\": \"./src/assets/images/cards/M2C194F.jpg\",\n\t\"./M2C194R.jpg\": \"./src/assets/images/cards/M2C194R.jpg\",\n\t\"./M2C195F.jpg\": \"./src/assets/images/cards/M2C195F.jpg\",\n\t\"./M2C195R.jpg\": \"./src/assets/images/cards/M2C195R.jpg\",\n\t\"./M2C196F.jpg\": \"./src/assets/images/cards/M2C196F.jpg\",\n\t\"./M2C196R.jpg\": \"./src/assets/images/cards/M2C196R.jpg\",\n\t\"./M2C197F.jpg\": \"./src/assets/images/cards/M2C197F.jpg\",\n\t\"./M2C197R.jpg\": \"./src/assets/images/cards/M2C197R.jpg\",\n\t\"./PHFB198F.jpg\": \"./src/assets/images/cards/PHFB198F.jpg\",\n\t\"./PHFB198R.jpg\": \"./src/assets/images/cards/PHFB198R.jpg\",\n\t\"./PHFB199F.jpg\": \"./src/assets/images/cards/PHFB199F.jpg\",\n\t\"./PHFB199R.jpg\": \"./src/assets/images/cards/PHFB199R.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images/cards sync recursive ^\\\\.\\\\/.*\\\\.jpg$\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/_sync_^\\.\\/.*\\.jpg$?");

/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\";\n\n//# sourceURL=webpack://vue-hf4/data:application/font-woff;charset=utf-8;base64,_d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA?");

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z%27/%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z%27/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z%27/%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://vue-hf4/data:image/svg+xml;charset=utf-8,%253Csvg_viewBox=%25270_0_320_512%2527_fill=%2527currentColor%2527_xmlns=%2527http://www.w3.org/2000/svg%2527%253E%253Cpath_d=%2527M31.3_192h257.3c17.8_0_26.7_21.5_14.1_34.1L174.1_354.8c-7.8_7.8-20.5_7.8-28.3_0L17.2_226.1C4.6_213.5_13.5_192_31.3_192z%2527/%253E%253C/svg%253E?");

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z%27/%3E%3C/svg%3E":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z%27/%3E%3C/svg%3E ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z%27/%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://vue-hf4/data:image/svg+xml;charset=utf-8,%253Csvg_viewBox=%25270_0_320_512%2527_fill=%2527currentColor%2527_xmlns=%2527http://www.w3.org/2000/svg%2527%253E%253Cpath_d=%2527m207.6_256_107.72-107.72c6.23-6.23_6.23-16.34_0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58_0L160_208.4_52.28_100.68c-6.23-6.23-16.34-6.23-22.58_0L4.68_125.7c-6.23_6.23-6.23_16.34_0_22.58L112.4_256_4.68_363.72c-6.23_6.23-6.23_16.34_0_22.58l25.03_25.03c6.23_6.23_16.34_6.23_22.58_0L160_303.6l107.72_107.72c6.23_6.23_16.34_6.23_22.58_0l25.03-25.03c6.23-6.23_6.23-16.34_0-22.58L207.6_256z%2527/%253E%253C/svg%253E?");

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 512 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 512 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 512 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z%27/%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://vue-hf4/data:image/svg+xml;charset=utf-8,%253Csvg_viewBox=%25270_0_512_512%2527_fill=%2527currentColor%2527_xmlns=%2527http://www.w3.org/2000/svg%2527%253E%253Cpath_d=%2527m456.433_371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636_25.82-54.328_23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35_71.922_256_64.953_256_56.649V24.56c0-9.31_7.916-16.609_17.204-15.96_81.795_5.717_156.412_51.902_197.611_123.408_41.301_71.385_43.99_159.096_8.042_232.792-4.082_8.369-14.361_11.575-22.424_6.92z%2527/%253E%253C/svg%253E?");

/***/ }),

/***/ "./src/assets/images/cards/CB056F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB056F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB056F.902c39f3.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB056F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB056R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB056R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB056R.53a3390c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB056R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB057F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB057F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB057F.4aa52c6d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB057F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB057R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB057R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB057R.8f474a9e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB057R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB058F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB058F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB058F.cbdb2126.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB058F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB058R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB058R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB058R.c9cba73b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB058R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB059F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB059F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB059F.93a16981.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB059F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB059R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB059R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB059R.e8abbe06.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB059R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB060F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB060F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB060F.3aeea290.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB060F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB060R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB060R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB060R.71a3e66e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB060R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB061F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB061F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB061F.8ffe10cd.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB061F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB061R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB061R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB061R.ca3ee95f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB061R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB062F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB062F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB062F.d8eed19b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB062F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB062R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB062R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB062R.691c937f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB062R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB063F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB063F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB063F.5dfd932e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB063F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB063R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB063R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB063R.942894af.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB063R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB064F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB064F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB064F.1509281a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB064F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB064R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB064R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB064R.785b0db2.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB064R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB065F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB065F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB065F.622396c1.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB065F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB065R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB065R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB065R.e6bccab4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB065R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB066F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB066F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB066F.4958f8ca.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB066F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB066R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB066R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB066R.0fdf7221.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB066R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB067F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB067F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB067F.9549c3ed.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB067F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CB067R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CB067R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CB067R.4616245f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CB067R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD092F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD092F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD092F.0ab61107.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD092F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD092R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD092R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD092R.4d7ce7ff.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD092R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD093F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD093F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD093F.e51c68a8.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD093F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD093R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD093R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD093R.49c674a1.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD093R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD094F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD094F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD094F.2d6e29a5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD094F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD094R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD094R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD094R.16dd9de9.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD094R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD095F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD095F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD095F.305b57fb.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD095F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD095R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD095R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD095R.7ee2eaff.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD095R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD096F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD096F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD096F.41d2524a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD096F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD096R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD096R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD096R.f6467caf.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD096R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD097F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD097F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD097F.c4957ac7.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD097F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD097R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD097R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD097R.1143fcef.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD097R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD098F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD098F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD098F.725c0b08.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD098F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD098R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD098R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD098R.bed5b388.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD098R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD099F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD099F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD099F.80fbb1e4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD099F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD099R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD099R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD099R.23309a77.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD099R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD100F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD100F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD100F.b4b90aa6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD100F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD100R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD100R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD100R.25dd624a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD100R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD101F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD101F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD101F.b06997d3.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD101F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD101R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD101R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD101R.f1b10b6d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD101R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD102F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD102F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD102F.f5511b10.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD102F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD102R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD102R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD102R.1d576a83.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD102R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD103F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD103F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD103F.9aedcabb.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD103F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CD103R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CD103R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CD103R.8499416f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CD103R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF068F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF068F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF068F.66a76c0f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF068F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF068R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF068R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF068R.a8a8660c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF068R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF069F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF069F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF069F.39b10b93.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF069F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF069R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF069R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF069R.1356e43d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF069R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF070F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF070F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF070F.b4f3d3ed.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF070F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF070R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF070R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF070R.74c4b699.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF070R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF071F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF071F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF071F.c7cef4ab.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF071F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF071R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF071R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF071R.d788cac5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF071R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF072F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF072F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF072F.00bdbe1d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF072F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF072R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF072R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF072R.cd6c0a98.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF072R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF073F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF073F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF073F.effe67b1.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF073F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF073R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF073R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF073R.72849df6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF073R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF074F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF074F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF074F.aed5120b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF074F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF074R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF074R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF074R.36fa35b0.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF074R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF075F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF075F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF075F.a1763dc9.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF075F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF075R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF075R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF075R.2e1c5ee4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF075R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF076F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF076F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF076F.e3601ef5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF076F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF076R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF076R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF076R.0d481c99.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF076R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF077F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF077F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF077F.f6ad85cf.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF077F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF077R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF077R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF077R.fd5c367e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF077R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF078F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF078F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF078F.35acb6dd.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF078F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF078R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF078R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF078R.1e3cccf4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF078R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF079F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF079F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF079F.d814990c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF079F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CF079R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CF079R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CF079R.12a54c7c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CF079R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG104F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG104F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG104F.759aac09.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG104F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG104R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG104R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG104R.d4c95acd.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG104R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG105F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG105F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG105F.c7f53549.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG105F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG105R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG105R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG105R.c5e12544.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG105R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG106F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG106F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG106F.c689e092.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG106F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG106R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG106R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG106R.6e2f5fac.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG106R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG107F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG107F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG107F.9f9b4ed7.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG107F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG107R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG107R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG107R.ee753ae4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG107R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG108F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG108F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG108F.a6b8e91e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG108F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG108R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG108R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG108R.8ed6d218.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG108R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG109F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG109F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG109F.e0d719fb.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG109F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG109R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG109R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG109R.c0481eec.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG109R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG110F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG110F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG110F.e40282ed.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG110F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG110R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG110R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG110R.28858171.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG110R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG111F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG111F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG111F.5462ef3a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG111F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG111R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG111R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG111R.9f331022.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG111R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG112F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG112F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG112F.aebceb07.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG112F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG112R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG112R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG112R.af06b739.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG112R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG113F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG113F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG113F.7cad1279.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG113F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG113R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG113R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG113R.88cccacf.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG113R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG114F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG114F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG114F.73907ccc.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG114F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG114R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG114R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG114R.5a060f59.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG114R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG115F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG115F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG115F.7d76e0fc.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG115F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG115R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG115R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG115R.1d23aff5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG115R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG116F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG116F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG116F.dd849107.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG116F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG116R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG116R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG116R.c0b7bdf4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG116R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG117F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG117F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG117F.ae546f5d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG117F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG117R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG117R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG117R.bb199b2b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG117R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG118F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG118F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG118F.f7b2b16f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG118F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG118R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG118R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG118R.7a0e317b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG118R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG119F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG119F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG119F.faa5f1d6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG119F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG119R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG119R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG119R.b9f5b471.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG119R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG120F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG120F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG120F.61f901c6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG120F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CG120R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CG120R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CG120R.b19f3393.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CG120R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ038F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ038F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ038F.e3e2c9c4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ038F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ038R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ038R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ038R.ece77396.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ038R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ039F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ039F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ039F.bccd77a0.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ039F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ039R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ039R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ039R.329dc27b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ039R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ040F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ040F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ040F.0dd9466f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ040F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ040R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ040R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ040R.9b9f8030.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ040R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ041F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ041F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ041F.8571f4f5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ041F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ041R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ041R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ041R.fb22749a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ041R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ042F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ042F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ042F.31a521e8.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ042F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ042R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ042R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ042R.f898055b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ042R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ043F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ043F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ043F.c281ad06.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ043F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CQ043R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CQ043R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CQ043R.cf33c55c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CQ043R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT044F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT044F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT044F.87e54585.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT044F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT044R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT044R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT044R.b6227571.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT044R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT045F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT045F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT045F.bcc9ef31.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT045F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT045R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT045R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT045R.099c428f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT045R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT046F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT046F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT046F.43dda441.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT046F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT046R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT046R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT046R.f5ef3bc2.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT046R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT047F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT047F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT047F.df56f355.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT047F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT047R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT047R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT047R.de2587aa.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT047R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT048F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT048F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT048F.6a943cd4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT048F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT048R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT048R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT048R.ce7916d0.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT048R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT049F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT049F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT049F.c4fe1ece.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT049F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT049R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT049R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT049R.048c6f28.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT049R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT050F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT050F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT050F.75a6d4a1.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT050F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT050R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT050R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT050R.75c585ea.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT050R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT051F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT051F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT051F.01b92cb0.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT051F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT051R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT051R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT051R.d15a91b4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT051R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT052F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT052F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT052F.ca156ce8.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT052F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT052R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT052R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT052R.8091dc41.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT052R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT053F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT053F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT053F.7e766206.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT053F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT053R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT053R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT053R.63e9deb1.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT053R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT054F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT054F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT054F.62458993.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT054F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT054R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT054R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT054R.33d4eea0.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT054R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT055F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT055F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT055F.7dc41c03.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT055F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CT055R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CT055R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CT055R.597d3e89.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CT055R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX080F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX080F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX080F.01d02975.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX080F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX080R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX080R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX080R.512e1a33.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX080R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX081F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX081F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX081F.e26af148.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX081F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX081R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX081R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX081R.9cbf7533.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX081R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX082F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX082F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX082F.bd772a99.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX082F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX082R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX082R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX082R.fa7f8e39.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX082R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX083F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX083F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX083F.7dd2bfae.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX083F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX083R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX083R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX083R.d94159a5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX083R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX084F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX084F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX084F.99cfbadb.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX084F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX084R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX084R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX084R.6a4c4584.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX084R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX085F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX085F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX085F.3216a4f2.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX085F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX085R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX085R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX085R.3bba6cf5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX085R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX086F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX086F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX086F.a488eb79.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX086F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX086R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX086R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX086R.05995951.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX086R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX087F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX087F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX087F.79cb05c3.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX087F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX087R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX087R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX087R.980d296a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX087R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX088F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX088F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX088F.5cfa6717.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX088F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX088R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX088R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX088R.d1b8de11.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX088R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX089F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX089F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX089F.7deecad4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX089F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX089R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX089R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX089R.3a3d3780.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX089R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX090F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX090F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX090F.df323452.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX090F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX090R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX090R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX090R.e115ee6b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX090R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX091F.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX091F.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX091F.eb2467d4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX091F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/CX091R.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/cards/CX091R.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/CX091R.c1d1515c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/CX091R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F163F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F163F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F163F.41fd8aca.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F163F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F163R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F163R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F163R.1ee53fc9.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F163R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F164F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F164F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F164F.678194eb.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F164F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F164R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F164R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F164R.3e206957.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F164R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F165F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F165F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F165F.3500076d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F165F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F165R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F165R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F165R.278de7e8.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F165R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F166F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F166F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F166F.2dcd4bea.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F166F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F166R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F166R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F166R.f63f70d7.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F166R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F167F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F167F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F167F.7f0ce21d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F167F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F167R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F167R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F167R.50166b0f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F167R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F168F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F168F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F168F.0b12dbf9.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F168F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F168R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F168R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F168R.87d89cd6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F168R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F169F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F169F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F169F.21706c81.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F169F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1F169R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1F169R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1F169R.774be0c6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1F169R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W156F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W156F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W156F.58c7ff5a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W156F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W156R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W156R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W156R.9b44dfb8.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W156R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W157F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W157F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W157F.e5699346.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W157F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W157R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W157R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W157R.446e23d2.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W157R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W158F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W158F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W158F.7751b5e1.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W158F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W158R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W158R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W158R.a38f3844.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W158R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W159F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W159F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W159F.d48b3467.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W159F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W159R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W159R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W159R.a4c9f472.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W159R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W160F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W160F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W160F.3e10944f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W160F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W160R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W160R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W160R.848e3839.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W160R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W161F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W161F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W161F.1f2bd70a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W161F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W161R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W161R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W161R.213b8707.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W161R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W162F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W162F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W162F.17b72ff0.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W162F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M1W162R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M1W162R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M1W162R.26bc4efc.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M1W162R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B170F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B170F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B170F.a00fe16d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B170F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B170R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B170R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B170R.b4f442c3.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B170R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B171F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B171F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B171F.f1ea318c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B171F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B171R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B171R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B171R.d1f11cb7.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B171R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B172F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B172F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B172F.7a636d1f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B172F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B172R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B172R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B172R.60626ead.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B172R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B173F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B173F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B173F.d0c67512.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B173F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B173R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B173R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B173R.d33eb47f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B173R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B174F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B174F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B174F.5fa79417.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B174F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B174R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B174R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B174R.0b614a34.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B174R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B175F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B175F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B175F.87231769.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B175F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B175R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B175R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B175R.504b83be.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B175R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B176F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B176F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B176F.6de9f6f4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B176F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B176R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B176R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B176R.bfdf99b6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B176R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B177F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B177F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B177F.08d6ed44.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B177F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B177R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B177R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B177R.8efd7277.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B177R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B178F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B178F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B178F.a040e217.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B178F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B178R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B178R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B178R.fa93ebe7.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B178R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B179F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B179F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B179F.e40d2276.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B179F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2B179R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2B179R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2B179R.ca01038e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2B179R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C180F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C180F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C180F.6880fec7.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C180F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C180R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C180R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C180R.db07ddfe.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C180R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C181F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C181F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C181F.cd6d8efe.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C181F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C181R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C181R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C181R.d49f1706.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C181R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C182F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C182F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C182F.9f3303d5.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C182F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C182R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C182R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C182R.7e00721a.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C182R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C183F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C183F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C183F.61fdd533.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C183F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C183R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C183R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C183R.89daeacd.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C183R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C184F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C184F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C184F.dc289800.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C184F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C184R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C184R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C184R.51ef46f6.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C184R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C185F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C185F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C185F.73b68318.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C185F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C185R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C185R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C185R.e6bb90be.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C185R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C186F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C186F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C186F.d68e24f4.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C186F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C186R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C186R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C186R.726a35ef.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C186R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C187F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C187F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C187F.b555095e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C187F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C187R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C187R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C187R.03f0e092.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C187R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C188F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C188F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C188F.1ff2a666.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C188F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C188R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C188R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C188R.34754198.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C188R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C189F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C189F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C189F.90cfab3c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C189F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C189R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C189R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C189R.cb08fe9b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C189R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C190F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C190F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C190F.f5fb0b83.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C190F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C190R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C190R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C190R.bebc810e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C190R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C191F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C191F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C191F.c2e09de1.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C191F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C191R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C191R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C191R.6e8f9d4d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C191R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C192F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C192F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C192F.a3f9828b.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C192F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C192R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C192R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C192R.f7451d80.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C192R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C193F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C193F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C193F.dbeb6f70.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C193F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C193R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C193R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C193R.1e66c95f.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C193R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C194F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C194F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C194F.de25c496.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C194F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C194R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C194R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C194R.1c7fb2c9.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C194R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C195F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C195F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C195F.6eada44c.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C195F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C195R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C195R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C195R.42ac301d.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C195R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C196F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C196F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C196F.3a5b38ee.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C196F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C196R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C196R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C196R.a480a8f9.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C196R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C197F.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C197F.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C197F.523dead0.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C197F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/M2C197R.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/cards/M2C197R.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/M2C197R.d3f2df62.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/M2C197R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/PHFB198F.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/cards/PHFB198F.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/PHFB198F.17f32180.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/PHFB198F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/PHFB198R.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/cards/PHFB198R.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/PHFB198R.add61c3e.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/PHFB198R.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/PHFB199F.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/cards/PHFB199F.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/PHFB199F.5e2dd7cd.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/PHFB199F.jpg?");

/***/ }),

/***/ "./src/assets/images/cards/PHFB199R.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/cards/PHFB199R.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/PHFB199R.10d4f597.jpg\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/images/cards/PHFB199R.jpg?");

/***/ }),

/***/ "./src/assets/sounds/carddrop.mp3":
/*!****************************************!*\
  !*** ./src/assets/sounds/carddrop.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"media/carddrop.709732e0.mp3\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/sounds/carddrop.mp3?");

/***/ }),

/***/ "./src/assets/sounds/flipcard.mp3":
/*!****************************************!*\
  !*** ./src/assets/sounds/flipcard.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"media/flipcard.6e1f8cce.mp3\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/sounds/flipcard.mp3?");

/***/ }),

/***/ "./src/assets/sounds/paper-away.mp3":
/*!******************************************!*\
  !*** ./src/assets/sounds/paper-away.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"media/paper-away.42534164.mp3\";\n\n//# sourceURL=webpack://vue-hf4/./src/assets/sounds/paper-away.mp3?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "-legacy.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "vue-hf4:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/hf4-decks/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_hf4"] = self["webpackChunkvue_hf4"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;