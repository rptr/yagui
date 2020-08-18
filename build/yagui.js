(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["yagui"] = factory();
	else
		root["yagui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/yagui.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GuiMain.js":
/*!************************!*\
  !*** ./src/GuiMain.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var containers_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! containers/Sidebar */ \"./src/containers/Sidebar.js\");\n/* harmony import */ var containers_Topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/Topbar */ \"./src/containers/Topbar.js\");\n\n\n\nclass GuiMain {\n\n  constructor(viewport, callbackResize) {\n    this.domMain = document.createElement('div');\n    this.viewport = viewport;\n\n    this.callbackResize = callbackResize;\n    if (this.viewport) {\n      this.viewport.style.width = document.documentElement.clientWidth + 'px';\n      this.viewport.style.height = document.documentElement.clientHeight + 'px';\n    }\n    this.cbResize_ = this._onWindowResize.bind(this);\n\n    document.body.appendChild(this.domMain);\n    this.leftSidebar = undefined;\n    this.rightSidebar = undefined;\n    this.topbar = undefined;\n\n    window.addEventListener('resize', this._onWindowResize.bind(this), false);\n  }\n\n  _onWindowResize() {\n    if (this.viewport) {\n      this.viewport.style.width = document.documentElement.clientWidth + 'px';\n      this.viewport.style.height = document.documentElement.clientHeight + 'px';\n      this.viewport.style.left = '0px';\n      this.viewport.style.top = '0px';\n      if (this.leftSidebar)\n        this.leftSidebar._updateViewportPosition(this.viewport);\n      if (this.rightSidebar)\n        this.rightSidebar._updateViewportPosition(this.viewport);\n      if (this.topbar)\n        this.topbar._updateViewportPosition(this.viewport);\n    }\n    this._updateSidebarsPosition();\n    if (this.callbackResize)\n      this.callbackResize();\n  }\n\n  _updateSidebarsPosition() {\n    if (!this.topbar) return;\n    var off = this.topbar.domTopbar.offsetHeight;\n    if (this.leftSidebar)\n      this.leftSidebar._setTop(off);\n    if (this.rightSidebar)\n      this.rightSidebar._setTop(off);\n  }\n\n  addLeftSidebar() {\n    this.leftSidebar = new containers_Sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.cbResize_);\n    var domSide = this.leftSidebar.domSidebar;\n    this.domMain.appendChild(domSide);\n    this.domMain.appendChild(this.leftSidebar.domResize);\n\n    this._updateSidebarsPosition();\n    this.leftSidebar._updateViewportPosition(this.viewport);\n    return this.leftSidebar;\n  }\n\n  addRightSidebar() {\n    this.rightSidebar = new containers_Sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.cbResize_);\n    var domSide = this.rightSidebar.domSidebar;\n    this.domMain.appendChild(domSide);\n    this.domMain.appendChild(this.rightSidebar.domResize);\n\n    this.rightSidebar._onTheRight();\n    this._updateSidebarsPosition();\n    this.rightSidebar._updateViewportPosition(this.viewport);\n    return this.rightSidebar;\n  }\n\n  addTopbar() {\n    this.topbar = new containers_Topbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.cbResize_);\n    this.domMain.appendChild(this.topbar.domTopbar);\n\n    this._updateSidebarsPosition();\n    this.topbar._updateViewportPosition(this.viewport);\n    return this.topbar;\n  }\n\n  setVisibility(visible) {\n    this.domMain.hidden = !visible;\n    this._onWindowResize();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuiMain);\n\n\n//# sourceURL=webpack://yagui/./src/GuiMain.js?");

/***/ }),

/***/ "./src/containers/BaseContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/BaseContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var widgets_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets/Button */ \"./src/widgets/Button.js\");\n/* harmony import */ var widgets_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/Checkbox */ \"./src/widgets/Checkbox.js\");\n/* harmony import */ var widgets_Color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Color */ \"./src/widgets/Color.js\");\n/* harmony import */ var widgets_Combobox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Combobox */ \"./src/widgets/Combobox.js\");\n/* harmony import */ var widgets_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Slider */ \"./src/widgets/Slider.js\");\n/* harmony import */ var widgets_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! widgets/Title */ \"./src/widgets/Title.js\");\n\n\n\n\n\n\n\n// label : 36%\n// slider : bar 52% + margin 2% + input 10%\n// combobox : 64%\n// color : 64%\nclass BaseContainer {\n\n  constructor() {}\n\n  _addLine(name) {\n    var domLine = document.createElement('li');\n    domLine.innerHTML = name || '';\n    this.domUl.appendChild(domLine);\n    return domLine;\n  }\n\n  _createLabel(name) {\n    var domLabel = document.createElement('label');\n    domLabel.className = 'gui-label-side';\n    domLabel.innerHTML = name || '';\n    return domLabel;\n  }\n\n  _setDomContainer(container) {\n    this.domContainer = container;\n  }\n\n  addTitle(name) {\n    var widget = new widgets_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"](name);\n    this.domUl.appendChild(widget.domText);\n    return widget;\n  }\n\n  addCheckbox(name, valOrObject, callbackOrKey) {\n    var widget = new widgets_Checkbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"](valOrObject, callbackOrKey);\n    var domLine = this._addLine();\n    domLine.className += ' gui-pointerOnHover gui-glowOnHover';\n    var domLabel = this._createLabel(name);\n    domLabel.style.overflow = 'visible';\n    domLabel.className += ' gui-pointerOnHover';\n    domLine.appendChild(domLabel);\n    domLine.appendChild(widget.domCheckbox);\n    domLine.appendChild(widget.domLabelCheckbox);\n    domLine.addEventListener('mousedown', widget._onMouseDown.bind(widget));\n    widget._setDomContainer(domLine);\n    return widget;\n  }\n\n  addCombobox(name, valOrObject, callbackOrKey, options) {\n    var widget = new widgets_Combobox__WEBPACK_IMPORTED_MODULE_3__[\"default\"](valOrObject, callbackOrKey, options);\n    var domLine = this._addLine();\n    if (name) domLine.appendChild(this._createLabel(name));\n    else widget.domSelect.style.width = '100%';\n    domLine.appendChild(widget.domSelect);\n    widget._setDomContainer(domLine);\n    return widget;\n  }\n\n  addSlider(name, valOrObject, callbackOrKey, min, max, step) {\n    var widget = new widgets_Slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"](valOrObject, callbackOrKey, min, max, step);\n    var domLine = this._addLine();\n    if (name) domLine.appendChild(this._createLabel(name));\n    domLine.appendChild(widget.domInputText);\n    domLine.appendChild(widget.domSlider);\n    widget._setDomContainer(domLine);\n    return widget;\n  }\n\n  addColor(name, valOrObject, callbackOrKey, optz) {\n    var widget = new widgets_Color__WEBPACK_IMPORTED_MODULE_2__[\"default\"](valOrObject, callbackOrKey, optz);\n    var domLine = this._addLine();\n    if (typeof optz !== 'undefined' && optz.noPopup)\n    {\n      domLine.style.height = '180px';\n      widget.domSaturation.style.width = '150px';\n      widget.domSaturation.style.height = '150px';\n      widget.domHue.style.height = '150px';\n      widget.domHue.style.width = '30px';\n      widget.widgetWidth = 150;\n      widget.widgetHeight = 150;\n    }\n    if (name) domLine.appendChild(this._createLabel(name));\n    else widget.domColor.style.width = '100%';\n    domLine.appendChild(widget.domColor);\n    widget._setDomContainer(domLine);\n    return widget;\n  }\n\n  addButton(name, callbackOrObject, key) {\n    var widget = new widgets_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, callbackOrObject, key);\n    var domLine = this._addLine();\n    domLine.appendChild(widget.domButton);\n    widget._setDomContainer(domLine);\n    return widget;\n  }\n\n  addDualButton(name1, name2, callbackOrObject1, callbackOrObject2, key1, key2) {\n    var widget1 = new widgets_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name1, callbackOrObject1, key1);\n    var widget2 = new widgets_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name2, callbackOrObject2, key2);\n    var domLine = this._addLine();\n    domLine.appendChild(widget2.domButton);\n    domLine.appendChild(widget1.domButton);\n    var style1 = widget1.domButton.style;\n    var style2 = widget2.domButton.style;\n    style1.width = style2.width = '49%';\n    style1.marginRight = style2.marginLeft = '1%';\n    widget1._setDomContainer(domLine);\n    widget2._setDomContainer(domLine);\n    return [widget1, widget2];\n  }\n\n  setVisibility(visible) {\n    if (!this.domContainer) return;\n    this.domContainer.hidden = !visible;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseContainer);\n\n\n//# sourceURL=webpack://yagui/./src/containers/BaseContainer.js?");

/***/ }),

/***/ "./src/containers/Folder.js":
/*!**********************************!*\
  !*** ./src/containers/Folder.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var containers_BaseContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! containers/BaseContainer */ \"./src/containers/BaseContainer.js\");\n\n\nclass Folder extends containers_BaseContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(name) {\n    super();\n\n    this.domUl = document.createElement('ul');\n    this.domUl.setAttribute('opened', true);\n\n    var domTitle = document.createElement('label');\n    domTitle.innerHTML = name || '';\n\n    domTitle.addEventListener('mousedown', this._onMouseDown.bind(this));\n\n    this.domUl.appendChild(domTitle);\n    this.isOpen = true;\n  }\n\n  _onMouseDown() {\n    this.isOpen = !this.isOpen;\n    this.domUl.setAttribute('opened', this.isOpen);\n  }\n\n  open() {\n    this.isOpen = true;\n    this.domUl.setAttribute('opened', true);\n  }\n\n  close() {\n    this.isOpen = false;\n    this.domUl.setAttribute('opened', false);\n  }\n\n  setVisibility(visible) {\n    if (!visible) this.domUl.setAttribute('opened', false);\n    else if (this.isOpen) this.domUl.setAttribute('opened', true);\n    this.domUl.style.height = visible ? 'auto' : '0px';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Folder);\n\n\n//# sourceURL=webpack://yagui/./src/containers/Folder.js?");

/***/ }),

/***/ "./src/containers/Menu.js":
/*!********************************!*\
  !*** ./src/containers/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var containers_BaseContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! containers/BaseContainer */ \"./src/containers/BaseContainer.js\");\n/* harmony import */ var widgets_MenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/MenuButton */ \"./src/widgets/MenuButton.js\");\n\n\n\nclass Menu extends containers_BaseContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor() {\n    super();\n\n    this.domUl = document.createElement('ul');\n  }\n\n  addButton(name, callbackOrObject, shortcutOrKey, shortcut) {\n    var widget = new widgets_MenuButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](callbackOrObject, shortcutOrKey, shortcut);\n    var domLine = this._addLine(name);\n    domLine.appendChild(widget.domSpan);\n    widget._setDomContainer(domLine);\n    return widget;\n  }\n\n  addSlider(name, valOrObject, callbackOrKey, min, max, step) {\n    var wid = super.addSlider(name, valOrObject, callbackOrKey, min, max, step);\n    // label 36% + slider ?% + 2% + input 18%\n    wid.domInputText.style.width = '18%';\n    wid.domSlider.style.width = name ? '44%' : '80%';\n    return wid;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n\n//# sourceURL=webpack://yagui/./src/containers/Menu.js?");

/***/ }),

/***/ "./src/containers/Sidebar.js":
/*!***********************************!*\
  !*** ./src/containers/Sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var containers_Folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! containers/Folder */ \"./src/containers/Folder.js\");\n\n\nclass Sidebar {\n\n  constructor(callbackResize) {\n    this.domSidebar = document.createElement('div');\n    this.domSidebar.className = 'gui-sidebar';\n\n    this.domResize = document.createElement('div');\n    this.domResize.className = 'gui-resize';\n\n    this.isDragging = false;\n    this.mouseX = 0;\n    this.domResize.addEventListener('mousedown', this._onMouseDown.bind(this));\n    window.addEventListener('mousemove', this._onMouseMove.bind(this));\n    window.addEventListener('mouseup', this._onMouseUp.bind(this));\n\n    this.callbackResize = callbackResize;\n    this.isOnTheRight = false;\n  }\n\n  _setTop(nb) {\n    this.domSidebar.style.top = this.domResize.style.top = nb + 'px';\n  }\n\n  _onTheRight() {\n    this.isOnTheRight = true;\n    this.domSidebar.style.right = 0;\n    this.domSidebar.style.borderRight = 0;\n    this.domSidebar.style.borderLeft = 'double';\n    this.domSidebar.style.borderColor = 'rgba(255,255,255,0.3)';\n    this.domResize.style.left = 'auto';\n    this.domResize.style.right = this.domSidebar.offsetWidth + 'px';\n    this.domResize.style.marginRight = '-3px';\n  }\n\n  _onMouseDown(ev) {\n    this.isDragging = true;\n    this.mouseX = ev.clientX;\n  }\n\n  _updateViewportPosition(viewport) {\n    var w = this.domSidebar.hidden ? 0 : this.domSidebar.offsetWidth;\n    if (this.isOnTheRight) {\n      viewport.style.width = (viewport.clientWidth - w) + 'px';\n    } else {\n      viewport.style.left = (this.domSidebar.offsetLeft + w) + 'px';\n      viewport.style.width = (viewport.clientWidth - w) + 'px';\n    }\n  }\n\n  _onMouseMove(ev) {\n    if (this.isDragging === false) return;\n    var mouseX = ev.clientX;\n    var delta = mouseX - this.mouseX;\n    if (this.isOnTheRight) delta = -delta;\n    var widthBar = Math.max(50, this.domSidebar.offsetWidth + delta);\n\n    var val = widthBar + 'px';\n    this.domSidebar.style.width = val;\n    if (this.isOnTheRight) this.domResize.style.right = this.domSidebar.offsetWidth + 'px';\n    else this.domResize.style.left = val;\n\n    this.mouseX = mouseX;\n    this.callbackResize();\n  }\n\n  _onMouseUp() {\n    this.isDragging = false;\n  }\n\n  addMenu(name) {\n    var folder = new containers_Folder__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n    this.domSidebar.appendChild(folder.domUl);\n    return folder;\n  }\n\n  setVisibility(visible) {\n    this.domSidebar.hidden = !visible;\n    this.domResize.hidden = !visible;\n    this.callbackResize();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\n\n//# sourceURL=webpack://yagui/./src/containers/Sidebar.js?");

/***/ }),

/***/ "./src/containers/Topbar.js":
/*!**********************************!*\
  !*** ./src/containers/Topbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var containers_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! containers/Menu */ \"./src/containers/Menu.js\");\n/* harmony import */ var utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/EditStyle */ \"./src/utils/EditStyle.js\");\n\n\n\nclass Topbar {\n\n  constructor(callbackResize) {\n    this.domTopbar = document.createElement('div');\n    this.domTopbar.className = 'gui-topbar';\n\n    this.domUl = document.createElement('ul');\n    this.domTopbar.appendChild(this.domUl);\n\n    this.callbackResize = callbackResize;\n    this.uiExtra = {};\n  }\n\n  _updateViewportPosition(viewport) {\n    var h = this.domTopbar.hidden ? 0 : this.domTopbar.offsetHeight;\n    viewport.style.top = h + 'px';\n    viewport.style.height = (viewport.clientHeight - h) + 'px';\n  }\n\n  _onChangeColor(callback, color) {\n    callback(color);\n    this.uiExtra.overallColor.setValue(utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curWidgetColor, true);\n    this.uiExtra.widgetColor.setValue(utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curWidgetColor, true);\n    this.uiExtra.backColor.setValue(utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curBackgroundColor, true);\n    this.uiExtra.textColor.setValue(utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curTextColor, true);\n  }\n\n  addMenu(name) {\n    var menu = new containers_Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    var li = document.createElement('li');\n    li.setAttribute('onclick', 'void(0)'); // iOS trick to trigger click on hover\n    li.innerHTML = name || '';\n    this.domUl.appendChild(li);\n    li.appendChild(menu.domUl);\n    menu._setDomContainer(li);\n    return menu;\n  }\n\n  addExtra() {\n    var cb = this._onChangeColor;\n    var menu = this.addMenu('Extra UI');\n    var ext = this.uiExtra;\n    menu.addTitle('Overall');\n    ext.overallColor = menu.addColor('', utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curWidgetColor, cb.bind(this, utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeOverallColor));\n\n    menu.addTitle('Advanced');\n    ext.widgetColor = menu.addColor('Widget', utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curWidgetColor, cb.bind(this, utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeWidgetsColor));\n    ext.backColor = menu.addColor('Back', utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curBackgroundColor, cb.bind(this, utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeBackgroundColor));\n    ext.textColor = menu.addColor('Text', utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curTextColor, cb.bind(this, utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeTextColor));\n    ext.showBorder = menu.addCheckbox('Border', utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._curShowBorder, utils_EditStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeDisplayBoorder);\n    return menu;\n  }\n\n  setVisibility(visible) {\n    this.domTopbar.hidden = !visible;\n    this.callbackResize();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\n\n\n//# sourceURL=webpack://yagui/./src/containers/Topbar.js?");

/***/ }),

/***/ "./src/utils/EditStyle.js":
/*!********************************!*\
  !*** ./src/utils/EditStyle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/GuiUtils */ \"./src/utils/GuiUtils.js\");\n\n\nvar EditStyle = {};\n\nEditStyle.refRules = {};\n\nvar yaguiSheet;\nvar findSheet = function () {\n  if (yaguiSheet) return yaguiSheet;\n  var sheets = document.styleSheets;\n  for (var i = 0, nb = sheets.length; i < nb; ++i) {\n    var href = sheets[i].href;\n    if (href && href.indexOf('yagui.css') !== -1) {\n      yaguiSheet = sheets[i];\n      return yaguiSheet;\n    }\n  }\n  return;\n};\n\nvar editStyle = function (selector, key, value) {\n  var sheet = findSheet();\n  if (!sheet)\n    return;\n  var rules = sheet.cssRules || sheet.rules;\n  var rule = EditStyle.refRules[selector];\n  if (!rule) {\n    var i = 0;\n    var len = rules.length;\n    for (i = 0; i < len; ++i) {\n      if (rules[i].selectorText === selector) break;\n    }\n    if (i === len) return false;\n    rule = EditStyle.refRules[selector] = rules[i];\n  }\n  if (rule)\n    rule.style[key] = value;\n};\n\nEditStyle.changeWidgetsColor = function (color) {\n  var str = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStrColor(color);\n  // button\n  editStyle('.gui-button', 'background', str);\n  // select\n  editStyle('.gui-select', 'background', str);\n  // slider\n  editStyle('.gui-slider > div', 'background', str);\n  EditStyle._curWidgetColor = color;\n};\n\nEditStyle.changeDisplayBoorder = function (bool) {\n  var str = bool ? '1px solid #000' : '0';\n  editStyle('.gui-button', 'border', str);\n  // select\n  editStyle('.gui-select', 'border', str);\n  // slider\n  editStyle('.gui-slider', 'border', str);\n  editStyle('.gui-input-number', 'border', str);\n  // folder\n  editStyle('.gui-sidebar > ul > label', 'borderTop', str);\n  editStyle('.gui-sidebar > ul > label', 'borderBottom', str);\n  // side bar\n  editStyle('.gui-sidebar', 'borderLeft', str);\n  editStyle('.gui-sidebar', 'borderRight', str);\n  // top bar\n  editStyle('.gui-topbar', 'borderBottom', str);\n  EditStyle._curShowBorder = bool;\n};\n\nEditStyle.changeBackgroundColor = function (color) {\n  // side bar\n  editStyle('.gui-sidebar', 'background', utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStrColor(color));\n  // top bar\n  var colTop = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStrColor(utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getColorMult(color, 0.5));\n  editStyle('.gui-topbar', 'background', colTop);\n  editStyle('.gui-topbar ul > li > ul', 'background', colTop);\n  EditStyle._curBackgroundColor = color;\n};\n\nEditStyle.changeTextColor = function (color) {\n  var strColor = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStrColor(color);\n  editStyle('*', 'color', strColor);\n  editStyle('.gui-sidebar > ul > label', 'color', strColor);\n  EditStyle._curTextColor = color;\n};\n\nEditStyle.changeOverallColor = function (color) {\n  EditStyle.changeWidgetsColor(color);\n  var bgCol = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getColorMult(color, 0.5);\n  bgCol.length = 3;\n  EditStyle.changeBackgroundColor(bgCol);\n\n  var texCol = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getColorAdd(color, 0.5);\n  for (var i = 0; i < 3; ++i) texCol[i] = Math.min(0.8, texCol[i]);\n  EditStyle.changeTextColor(texCol);\n\n  EditStyle._curWidgetColor = color;\n  EditStyle._curBackgroundColor = bgCol;\n  EditStyle._curTextColor = texCol;\n};\n\n// init value\nEditStyle._curTextColor = [0.73, 0.73, 0.73, 1.0];\nEditStyle._curWidgetColor = [0.32, 0.37, 0.39, 1.0];\nEditStyle._curBackgroundColor = [0.24, 0.24, 0.24];\nEditStyle._curShowBorder = false;\n\nEditStyle.changeOverallColor([0.3, 0.34, 0.4, 1.0]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditStyle);\n\n\n//# sourceURL=webpack://yagui/./src/utils/EditStyle.js?");

/***/ }),

/***/ "./src/utils/GuiUtils.js":
/*!*******************************!*\
  !*** ./src/utils/GuiUtils.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar GuiUtils = {};\n\nGuiUtils.rgbToHsv = function (rgb) {\n  var r = rgb[0];\n  var g = rgb[1];\n  var b = rgb[2];\n  var maxRGB = Math.max(r, g, b);\n  var minRGB = Math.min(r, g, b);\n  if (minRGB === maxRGB) return [0, 0, minRGB];\n  var d = (r === minRGB) ? g - b : ((b === minRGB) ? r - g : b - r);\n  var h = (r === minRGB) ? 3 : ((b === minRGB) ? 1 : 5);\n  return [(h - d / (maxRGB - minRGB)) / 6, (maxRGB - minRGB) / maxRGB, maxRGB];\n};\n\nGuiUtils.hsvToRgb = function (hsv) {\n  var h = hsv[0] * 6;\n  var s = hsv[1];\n  var v = hsv[2];\n  var i = Math.floor(h);\n  var f = h - i;\n  var p = v * (1.0 - s);\n  var q = v * (1.0 - f * s);\n  var t = v * (1.0 - (1.0 - f) * s);\n  var mod = i % 6;\n  if (mod === 0) return [v, t, p];\n  else if (mod === 1) return [q, v, p];\n  else if (mod === 2) return [p, v, t];\n  else if (mod === 3) return [p, q, v];\n  else if (mod === 4) return [t, p, v];\n  else return [v, p, q];\n};\n\nGuiUtils.getValidColor = function (color) {\n  for (var i = 0, len = color.length; i < len; ++i) color[i] = Math.max(0.0, Math.min(1.0, color[i]));\n  return color;\n};\n\nGuiUtils.getStrColor = function (color) {\n  if (color.length === 3) return GuiUtils.rgbToHex(color);\n  return 'rgba(' + Math.round(color[0] * 255) + ',' + Math.round(color[1] * 255) + ',' + Math.round(color[2] * 255) + ',' + color[3] + ')';\n};\n\nGuiUtils.getColorMult = function (color, fac) {\n  var out = [color[0] * fac, color[1] * fac, color[2] * fac];\n  if (color.length === 4) out.push(color[3]);\n  return GuiUtils.getValidColor(out);\n};\n\nGuiUtils.getColorAdd = function (color, add) {\n  var out = [color[0] + add, color[1] + add, color[2] + add];\n  if (color.length === 4) out.push(color[3]);\n  return GuiUtils.getValidColor(out);\n};\n\nGuiUtils.rgbToHex = function (rgb) {\n  var h = '#';\n  for (var i = 0; i < 3; ++i) {\n    var c = Math.round(rgb[i] * 255).toString(16);\n    h += c.length === 1 ? '0' + c : c;\n  }\n  return h;\n};\n\nGuiUtils.hexToRgb = function (hex) {\n  var i = 0;\n  if (hex[0] === '#') hex = hex.slice(1);\n  var h = hex;\n  if (hex.length > 6) h = hex.slice(0, 6);\n  else if (hex.length < 6) {\n    h = '';\n    for (i = 0; i < 3; ++i)\n      h += hex[i] ? hex[i] + hex[i] : '00';\n  }\n  var col = [0, 0, 0];\n  for (i = 0; i < 3; ++i) {\n    var c = parseInt(h[i * 2] + h[i * 2 + 1], 16);\n    col[i] = (c !== c ? 0 : c) / 255;\n  }\n  return col;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuiUtils);\n\n\n//# sourceURL=webpack://yagui/./src/utils/GuiUtils.js?");

/***/ }),

/***/ "./src/widgets/BaseWidget.js":
/*!***********************************!*\
  !*** ./src/widgets/BaseWidget.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BaseWidget {\n\n  constructor() {}\n\n  _getInitialValue(valOrObject, callbackOrKey) {\n    if (typeof callbackOrKey !== 'string') return valOrObject;\n    return valOrObject[callbackOrKey];\n  }\n\n  _getCheckCallback(valOrObject, callbackOrKey) {\n    if (typeof callbackOrKey !== 'string') return callbackOrKey;\n    return function (val) {\n      valOrObject[callbackOrKey] = val;\n    };\n  }\n\n  _setDomContainer(container) {\n    this.domContainer = container;\n  }\n\n  setCallback(callback) {\n    this.callback = callback;\n  }\n\n  setVisibility(visible) {\n    if (!this.domContainer) return;\n    this.domContainer.hidden = !visible;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseWidget);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/BaseWidget.js?");

/***/ }),

/***/ "./src/widgets/Button.js":
/*!*******************************!*\
  !*** ./src/widgets/Button.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets/BaseWidget */ \"./src/widgets/BaseWidget.js\");\n\n\nclass Button extends widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(name, callbackOrObject, key) {\n    super();\n\n    var callback = key ? callbackOrObject[key].bind(callbackOrObject) : callbackOrObject;\n\n    this.domButton = document.createElement('button');\n    this.domButton.className = 'gui-button';\n    this.domButton.innerHTML = name || '';\n    this.domButton.addEventListener('click', this._onClick.bind(this));\n\n    this.setCallback(callback);\n  }\n\n  setEnable(bool) {\n    this.domButton.disabled = bool === undefined ? false : !bool;\n  }\n\n  _onClick() {\n    if (this.callback) this.callback();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/Button.js?");

/***/ }),

/***/ "./src/widgets/Checkbox.js":
/*!*********************************!*\
  !*** ./src/widgets/Checkbox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets/BaseWidget */ \"./src/widgets/BaseWidget.js\");\n\n\nclass Checkbox extends widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(valOrObject, callbackOrKey) {\n    super();\n\n    var value = this._getInitialValue(valOrObject, callbackOrKey);\n    var callback = this._getCheckCallback(valOrObject, callbackOrKey);\n    this.domCheckbox = document.createElement('input');\n    this.domCheckbox.className = 'gui-input-checkbox';\n    this.domCheckbox.type = 'checkbox';\n\n    this.domLabelCheckbox = document.createElement('label');\n\n    this.setValue(value === undefined ? true : value);\n    this.setCallback(callback);\n  }\n\n  _onMouseDown() {\n    this.setValue(!this.domCheckbox.checked);\n  }\n\n  setValue(val, ignoreCB) {\n    this.domCheckbox.checked = val;\n    if (!ignoreCB && this.callback) this.callback(val);\n  }\n\n  getValue() {\n    return this.domCheckbox.checked;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkbox);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/Checkbox.js?");

/***/ }),

/***/ "./src/widgets/Color.js":
/*!******************************!*\
  !*** ./src/widgets/Color.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/GuiUtils */ \"./src/utils/GuiUtils.js\");\n/* harmony import */ var widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! widgets/BaseWidget */ \"./src/widgets/BaseWidget.js\");\n\n\n\nvar vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];\nvar urlAlpha = 'url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiPHPmDAMMGBsbw9lMDDgA6RKM%2F%2F%2F%2Fh3POnj1LCzsAAgwAQtYIcFfEyzkAAAAASUVORK5CYII%3D\")';\n\nclass Color extends widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n  constructor(valOrObject, callbackOrKey, optz) {\n    super();\n\n    var value = this._getInitialValue(valOrObject, callbackOrKey);\n    var callback = this._getCheckCallback(valOrObject, callbackOrKey);\n    if (value) this.color = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getValidColor(value.slice());\n    else this.color = [1.0, 0.0, 0.0];\n\n    var noPopup = false;\n\n    if (optz && optz.noPopup) {\n      noPopup = true;\n    }\n\n    // container\n    this.domColor = document.createElement('div');\n\n    // input text\n    this.domPopup = document.createElement('div');\n    this.domInputColor = document.createElement('input');\n\n    if (!noPopup) {\n      this.domColor.className = 'gui-widget-color';\n    } else {\n      this.domColor.className = 'gui-widget-color-2';\n      this.domPopup.className = 'gui-widget-color-popup';\n    }\n\n    // hue picker\n    this.domHue = document.createElement('div');\n    this.domHue.className = 'gui-color-hue';\n    this.domHueKnob = document.createElement('div');\n    this.domHueKnob.className = 'gui-knob-hue';\n\n    // saturation picker\n    this.domSaturation = document.createElement('div');\n    this.domSaturation.className = 'gui-color-saturation';\n    var zAlphaSat = document.createElement('div');\n    this.domSaturation.appendChild(zAlphaSat);\n    this.domSaturationKnob = document.createElement('div');\n    this.domSaturationKnob.className = 'gui-knob-saturation';\n\n    this.domHue.appendChild(this.domHueKnob);\n\n    this.domColor.appendChild(this.domInputColor);\n    this.domPopup.appendChild(this.domSaturationKnob);\n    this.domPopup.appendChild(this.domSaturation);\n    this.domPopup.appendChild(this.domHue);\n    this.domColor.appendChild(this.domPopup);\n\n    this._hueGradient(this.domHue);\n    this._linearGradient(zAlphaSat, 'top', 'rgba(0,0,0,0)', '#000');\n\n    this.domColor.addEventListener('keydown', this._onInputDown.bind(this));\n    this.domSaturation.addEventListener('mousedown', this._onSaturationDown.bind(this));\n    this.domHue.addEventListener('mousedown', this._onHueDown.bind(this));\n    window.addEventListener('mouseup', this._onMouseUp.bind(this));\n    window.addEventListener('mouseout', this._onMouseUp.bind(this));\n    window.addEventListener('mousemove', this._onMouseMove.bind(this));\n\n    // alpha picker\n    this.hasAlpha = this.color.length === 4;\n    this.alpha = 1.0;\n    if (this.hasAlpha) {\n      this.domPopup.style.width = '142px';\n      this.domAlpha = document.createElement('div');\n      this.domAlpha.className = 'gui-color-alpha';\n      this.domAlphaKnob = document.createElement('div');\n      this.domAlphaKnob.className = 'gui-knob-alpha';\n\n      this._alphaGradient(this.domAlpha, 'top', 'rgba(0,0,0,1.0)', 'rgba(0,0,0,0.0)');\n\n      this.domAlpha.addEventListener('mousedown', this._onAlphaDown.bind(this));\n      this.domAlpha.appendChild(this.domAlphaKnob);\n      this.domPopup.appendChild(this.domAlpha);\n    }\n\n    this.editHue = this.editSaturation = this.editAlpha = false;\n    this.widgetHeight = this.widgetWidth = 100;\n    this.setValue(this.color);\n    this.setCallback(callback);\n  }\n\n  _onInputDown(ev) {\n    ev.stopPropagation();\n    if (ev.keyCode === 13)\n      this.setValue(utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hexToRgb(ev.target.value));\n  }\n\n  _onUpdateSaturation(ev) {\n    var rect = this.domSaturation.getBoundingClientRect();\n    var hsv = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rgbToHsv(this.getValue());\n    hsv[1] = Math.min(1.0, Math.max(0.0, (ev.clientX - rect.left) / rect.width));\n    hsv[2] = Math.min(1.0, Math.max(0.0, 1.0 - (ev.clientY - rect.top) / rect.width));\n    this.setValue(utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hsvToRgb(hsv), false, true);\n    this._updateGui();\n  }\n\n  _onUpdateHue(ev) {\n    var rect = this.domHue.getBoundingClientRect();\n    var hsv = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rgbToHsv(this.getValue());\n    hsv[0] = Math.min(1.0, Math.max(0.0, 1.0 - (ev.clientY - rect.top) / rect.height));\n    this.setValue(utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hsvToRgb(hsv), false, true);\n    this._updateGui();\n  }\n\n  _onUpdateAlpha(ev) {\n    var rect = this.domAlpha.getBoundingClientRect();\n    var col = this.getValue();\n    col[3] = this.alpha = Math.min(1.0, Math.max(0.0, 1.0 - (ev.clientY - rect.top) / rect.height));\n    this.setValue(col, false, true);\n    this._updateGui();\n  }\n\n  _updateGui() {\n    var color = this.getValue();\n    var hsv = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rgbToHsv(color);\n\n    this.domSaturationKnob.style.marginLeft = this.widgetWidth * hsv[1] - 7 + 'px';\n    this.domSaturationKnob.style.marginTop = this.widgetHeight * (1.0 - hsv[2]) - 7 + 'px';\n\n    hsv[1] = hsv[2] = 1.0;\n    this._linearGradient(this.domSaturation, 'left', '#fff', utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStrColor(utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hsvToRgb(hsv)));\n\n    this.domHueKnob.style.marginTop = (1.0 - hsv[0]) * this.widgetHeight + 'px';\n\n    if (this.hasAlpha && color[3] !== undefined)\n      this.domAlphaKnob.style.marginTop = (1.0 - this.alpha) * this.widgetHeight + 'px';\n  }\n\n  _onMouseMove(ev) {\n    if (!this.editSaturation && !this.editHue && !this.editAlpha) return;\n    if (this.editSaturation) return this._onUpdateSaturation(ev);\n    if (this.editHue) return this._onUpdateHue(ev);\n    if (this.editAlpha) return this._onUpdateAlpha(ev);\n  }\n\n  _onSaturationDown(ev) {\n    this.editSaturation = true;\n    this._onMouseMove(ev);\n  }\n\n  _onHueDown(ev) {\n    this.editHue = true;\n    this._onMouseMove(ev);\n  }\n\n  _onAlphaDown(ev) {\n    this.editAlpha = true;\n    this._onMouseMove(ev);\n  }\n\n  _onMouseUp() {\n    this.editHue = this.editSaturation = this.editAlpha = false;\n  }\n\n  _hueGradient(dom) {\n    dom.style.background = '';\n    for (var i = 0, l = vendors.length; i < l; ++i)\n      dom.style.cssText += 'background: ' + vendors[i] + 'linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';\n  }\n\n  _alphaGradient(dom, dir, col1, col2) {\n    dom.style.background = '';\n    for (var i = 0, l = vendors.length; i < l; ++i)\n      dom.style.cssText += 'background: ' + vendors[i] + 'linear-gradient(' + dir + ', ' + col1 + ',' + col2 + '),' + urlAlpha + ';';\n  }\n\n  _linearGradient(dom, dir, col1, col2) {\n    dom.style.background = '';\n    for (var i = 0, l = vendors.length; i < l; ++i)\n      dom.style.cssText += 'background: ' + vendors[i] + 'linear-gradient(' + dir + ', ' + col1 + ' 0%, ' + col2 + ' 100%);';\n  }\n\n  setValue(color, ignoreCB, ignoreUI) {\n    var c = this.color;\n    for (var i = 0, nbC = color.length; i < nbC; ++i)\n      c[i] = color[i];\n\n    var hex = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rgbToHex(color);\n    this.domInputColor.value = hex;\n    if (this.hasAlpha) {\n      if (color.length >= 4) this.alpha = color[3];\n      else color.push(this.alpha);\n      var col = 'rgba(' + parseInt(color[0] * 255, 10) + ',' + parseInt(color[1] * 255, 10) + ',' + parseInt(color[2] * 255, 10) + ',' + this.alpha + ')';\n      this._alphaGradient(this.domInputColor, '0deg', col, col);\n    } else {\n      this.domInputColor.style.background = hex;\n    }\n\n    // color of text\n    var hsv = utils_GuiUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rgbToHsv(color);\n    this.domSaturationKnob.style.borderColor = (hsv[2] < 0.5 || hsv[1] > 0.5) ? '#fff' : '#000';\n    this.domInputColor.style.color = (this.alpha > 0.2 && (hsv[2] < 0.5 || hsv[1] > 0.5)) ? '#fff' : '#000';\n    if (!ignoreUI) this._updateGui();\n    if (!ignoreCB && this.callback) this.callback(color);\n  }\n\n  getValue() {\n    return this.color;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Color);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/Color.js?");

/***/ }),

/***/ "./src/widgets/Combobox.js":
/*!*********************************!*\
  !*** ./src/widgets/Combobox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets/BaseWidget */ \"./src/widgets/BaseWidget.js\");\n\n\nclass Combobox extends widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(valOrObject, callbackOrKey, options) {\n    super();\n\n    var value = this._getInitialValue(valOrObject, callbackOrKey);\n    var callback = this._getCheckCallback(valOrObject, callbackOrKey);\n    options = options || {};\n    value = value !== undefined ? value : options[0];\n\n    this.isArray = options.length !== undefined;\n\n    this.domSelect = document.createElement('select');\n    this.domSelect.className = 'gui-select';\n    this.addOptions(options);\n\n    this.domSelect.addEventListener('change', this._onChange.bind(this));\n    this.setValue(value);\n    this.setCallback(callback);\n  }\n\n  _parseValue(val) {\n    return this.isArray ? parseInt(val, 10) : val;\n  }\n\n  _onChange(ev) {\n    this.setValue(ev.target.value);\n  }\n\n  addOptions(options) {\n    var keys = Object.keys(options);\n    for (var i = 0; i < keys.length; ++i) {\n      var opt = document.createElement('option');\n      opt.innerHTML = options[keys[i]];\n      opt.value = keys[i];\n      this.domSelect.appendChild(opt);\n    }\n  }\n\n  setValue(val, ignoreCB) {\n    this.domSelect.value = val;\n    if (!ignoreCB && this.callback) this.callback(this._parseValue(val));\n  }\n\n  getValue() {\n    return this._parseValue(this.domSelect.value);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Combobox);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/Combobox.js?");

/***/ }),

/***/ "./src/widgets/MenuButton.js":
/*!***********************************!*\
  !*** ./src/widgets/MenuButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets/BaseWidget */ \"./src/widgets/BaseWidget.js\");\n\n\nclass MenuButton extends widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(callbackOrObject, shortcutOrKey, shortcut) {\n    super();\n\n    var callback = callbackOrObject;\n    if (callback && typeof callback !== 'function') callback = callbackOrObject[shortcutOrKey].bind(callbackOrObject);\n    else shortcut = shortcutOrKey;\n\n    this.domSpan = document.createElement('span');\n    this.domSpan.className = 'shortcut';\n    this.domSpan.innerHTML = shortcut || '';\n\n    this.setCallback(callback);\n  }\n\n  _setDomContainer(container) {\n    this.domContainer = container;\n    container.addEventListener('click', this._onClick.bind(this));\n  }\n\n  _onClick() {\n    if (this.callback) this.callback();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuButton);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/MenuButton.js?");

/***/ }),

/***/ "./src/widgets/Slider.js":
/*!*******************************!*\
  !*** ./src/widgets/Slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets/BaseWidget */ \"./src/widgets/BaseWidget.js\");\n\n\nclass Slider extends widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(valOrObject, callbackOrKey, min, max, step) {\n    super();\n\n    var value = this._getInitialValue(valOrObject, callbackOrKey);\n    var callback = this._getCheckCallback(valOrObject, callbackOrKey);\n    value = value !== undefined ? value : 100;\n    min = min !== undefined ? min : 0;\n    max = max !== undefined ? max : 200;\n    step = step !== undefined ? step : 1;\n\n    // slider\n    this.domSlider = document.createElement('div');\n    this.domSlider.className = 'gui-slider';\n    this.domSliderFill = document.createElement('div');\n    this.domSlider.appendChild(this.domSliderFill);\n\n    // text input\n    this.domInputText = document.createElement('input');\n    this.domInputText.className = 'gui-input-number';\n    this.domInputText.type = 'number';\n    this.min = this.domInputText.min = min;\n    this.max = this.domInputText.max = max;\n    this.step = this.domInputText.step = step;\n\n    this.domInputText.addEventListener('keydown', this._onKeyDown.bind(this));\n    this.domInputText.addEventListener('change', this._onInputText.bind(this));\n    this.domInputText.addEventListener('blur', this._onInputText.bind(this));\n    this.domSlider.addEventListener('mousedown', this._onMouseDown.bind(this));\n    window.addEventListener('mouseup', this._onMouseUp.bind(this), true);\n    window.addEventListener('mousemove', this._onMouseMove.bind(this));\n\n    this.lastValue = value;\n    this.isDown = false;\n    this.setValue(value);\n    this.setCallback(callback);\n  }\n\n  _onInputText(ev) {\n    var val = parseFloat(ev.target.value);\n    if (val !== val || val === this.lastValue) return;\n    this.setValue(val);\n  }\n\n  _onKeyDown(ev) {\n    ev.stopPropagation();\n    if (ev.which === 13) // enter\n      this.domInputText.blur();\n  }\n\n  _onMouseMove(ev) {\n    ev.preventDefault();\n    if (!this.isDown)\n      return;\n    var rect = this.domSlider.getBoundingClientRect();\n    var val = this.min + (this.max - this.min) * ((ev.clientX - rect.left) / rect.width);\n    this.setValue(val);\n  }\n\n  _onMouseDown(ev) {\n    this.isDown = true;\n    this._onMouseMove(ev);\n  }\n\n  _onMouseUp() {\n    this.isDown = false;\n  }\n\n  _setDomContainer(container) {\n    this.domContainer = container;\n  }\n\n  getValue() {\n    return parseFloat(this.domInputText.value);\n  }\n\n  setValue(val, ignoreCB) {\n    this.lastValue = val;\n    val = Math.max(Math.min(val, this.max), this.min);\n    val = Math.round(val / this.step) * this.step;\n    this.domInputText.value = val;\n    var per = this.min;\n    if (this.max !== this.min) per = (val - this.min) / (this.max - this.min);\n    this.domSliderFill.style.width = 100 * per + '%';\n    if (!ignoreCB && this.callback) this.callback(val);\n  }\n\n  setMax(max) {\n    this.domInputText.max = this.max = max;\n    return this;\n  }\n\n  setMin(min) {\n    this.min = min;\n    return this;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/Slider.js?");

/***/ }),

/***/ "./src/widgets/Title.js":
/*!******************************!*\
  !*** ./src/widgets/Title.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets/BaseWidget */ \"./src/widgets/BaseWidget.js\");\n\n\nclass Title extends widgets_BaseWidget__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(name) {\n    super();\n\n    this.domText = document.createElement('div');\n    this.domText.innerHTML = name || '';\n    this.domText.className = 'group-title';\n  }\n\n  setText(text) {\n    this.domText.innerHTML = text;\n  }\n\n  setVisibility(visible) {\n    this.domText.hidden = !visible;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\n\n\n//# sourceURL=webpack://yagui/./src/widgets/Title.js?");

/***/ }),

/***/ "./src/yagui.js":
/*!**********************!*\
  !*** ./src/yagui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var GuiMain = __webpack_require__(/*! GuiMain */ \"./src/GuiMain.js\").default;\n\nvar yagui = {\n  GuiMain: GuiMain\n};\n\nmodule.exports = yagui;\n\n\n//# sourceURL=webpack://yagui/./src/yagui.js?");

/***/ })

/******/ });
});