/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/log.js":
/*!*******************************!*\
  !*** ./src/components/log.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "addLogElement": () => (/* binding */ addLogElement),
/* harmony export */   "messageMap": () => (/* binding */ messageMap)
/* harmony export */ });

let logOutput = document.querySelector('.log');

function getTime () {
  let date = new Date();
  let time = [
    '0' + date.getHours(),
    '0' + date.getMinutes(),
    '0' + date.getSeconds(),
].map(component => component.slice(-2));

  return time.join(':');
}

function addLogElement (message) {
  let p = document.createElement('p');
  p.className = 'log__message';
  p.textContent = message;
  logOutput.append(p);
}

let messageMap = {
  'push': ' Добавлено новое значение: ',
  'pop': ' Удалено значение: ',
  'peek': ' Показано значение: ',
  'getSize': ' Показана длина стека: ',
  'error': ' Возникла ошибка: '
};




/***/ }),

/***/ "./src/components/stack.js":
/*!*********************************!*\
  !*** ./src/components/stack.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ "./src/components/log.js");



let originalLog = console.log;

console.log = function (func, value = '') {
  let message = (0,_log_js__WEBPACK_IMPORTED_MODULE_0__.getTime)() + _log_js__WEBPACK_IMPORTED_MODULE_0__.messageMap[func] + value;

  originalLog.call(this, message);
  (0,_log_js__WEBPACK_IMPORTED_MODULE_0__.addLogElement)(message);
};

class Stack {
  constructor() {
    this.list = {};
    this.length = 0;
  }

  push(value) {
    this.list[this.length] = value;
    this.length++;
    console.log('push', value);
  }

  pop() {
    try {
      if (this.length === 0) {
        throw new Error("Невозможно удалить значение. Значений нет, длина стека равна 0");
      }

      this.length--;
      let value = this.list[this.length];
      delete this.list[this.length];
      console.log('pop', value);
      return value;
    } catch (err) {
      if (this.length === 0) {
        console.log('error', err.message);
      } else {
        console.log('error', err);
      }
    }
  }

  peek() {
    console.log('peek', this.list[this.length - 1]);
    return this.list[this.length - 1];
  }

  getSize () {
    console.log('getSize', this.length);
    return this.length;
  }
}


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stack.js */ "./src/components/stack.js");




let textOutput = document.querySelector('.stack__output');
let form = document.querySelector('.stack__form');
let textInput = document.querySelector('.stack__input');

let popButton = document.querySelector('#pop');
let peekButton = document.querySelector('#peek');
let getSizeButton = document.querySelector('#getSize');

let myStack = new _components_stack_js__WEBPACK_IMPORTED_MODULE_0__.default();

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  myStack.push(textInput.value);
  textInput.value = '';

  popButton.disabled = false;
  peekButton.disabled = false;
});

getSizeButton.addEventListener('click', function () {
  textOutput.textContent = myStack.getSize();
});

popButton.addEventListener('click', function () {
  textOutput.textContent = myStack.pop();

  if (myStack.length === 0) {
    popButton.disabled = true;
    peekButton.disabled = true;
  }
});

peekButton.addEventListener('click', function () {
  textOutput.textContent = myStack.peek();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map