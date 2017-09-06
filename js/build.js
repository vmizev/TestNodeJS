/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bulma = __webpack_require__(1);

var _bulma2 = _interopRequireDefault(_bulma);

var _galleryItem = __webpack_require__(2);

var GalleryItemM = _interopRequireWildcard(_galleryItem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _bulma2.default)();

function firstScreen() {
    var parent = document.getElementById('parent'),
        btnWrapper = document.getElementById('btn-wrapper');

    for (var i = 0; i < 3; i++) {
        var divColumn = document.createElement('div');
        divColumn.classList.add('columns');

        for (var j = 0; j < 3; j++) {
            var gItem = new GalleryItemM.GalleryItem();
            gItem.updateImage();
            divColumn.appendChild(gItem.getDivItem());
        }
        parent.insertBefore(divColumn, btnWrapper);
    }
}
document.getElementById('more').onclick = function () {
    var parent = document.getElementById('parent'),
        btnWrapper = document.getElementById('btn-wrapper'),
        more = document.getElementById('more'),
        divColumn = document.createElement('div');

    divColumn.classList.add('columns');

    for (var i = 0; i < 3; i++) {
        var gItem = new GalleryItemM.GalleryItem();
        gItem.updateImage();
        divColumn.appendChild(gItem.getDivItem());
    }
    parent.insertBefore(divColumn, btnWrapper);
};

firstScreen();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
};

;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GalleryItem = exports.GalleryItem = function () {
    function GalleryItem() {
        _classCallCheck(this, GalleryItem);

        this.divItem = document.createElement('div');
        this.divItem.classList.add('column', 'is-4');
        this.divItem.innerHTML = '<div class="card">\n' + '          <header class="card-header">\n' + '            <p class="card-header-title">\n' + '              <img src="https://placehold.it/64x64" class="avatar">\n' + '              &commat;username\n' + '            </p>\n' + '            <span class="card-header-icon timestamp">\n' + '              2m\n' + '            </span>\n' + '          </header>\n' + '          <div class="card-image">\n' + '            <figure class="image is-4by3">\n' + '              <img src="https://placehold.it/1280x960" alt="Image">\n' + '            </figure>\n' + '          </div>\n' + '          <div class="card-content">\n' + '            <div class="panel-block-item">\n' + '              <span class="likes">\n' + '                <span class="icon">\n' + '                  <i class="fa fa-heart"></i>\n' + '                </span>\n' + '                303k Likes\n' + '              </span>\n' + '              <span class="comments">\n' + '                <span class="icon">\n' + '                  <i class="fa fa-comment"></i>\n' + '                </span>\n' + '                12k Comments\n' + '              </span>\n' + '            </div>\n' + '          </div>\n' + '        </div>';
    }

    _createClass(GalleryItem, [{
        key: 'updateImage',
        value: function updateImage() {
            var di = this.divItem;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://source.unsplash.com/random/1280x960&noCache=' + new Date().getTime() + Math.random());
            xhr.setRequestHeader('Cache-Control', 'no-cache');
            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var img = di.querySelectorAll('figure img');
                    img[0].src = xhr.responseURL;
                }
            });
            xhr.send();
        }
    }, {
        key: 'getDivItem',
        value: function getDivItem() {
            return this.divItem;
        }
    }]);

    return GalleryItem;
}();

/***/ })
/******/ ]);