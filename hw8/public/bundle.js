/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binary-search-tree.ts":
/*!***********************************!*\
  !*** ./src/binary-search-tree.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeNode": () => (/* binding */ TreeNode),
/* harmony export */   "BinaryTree": () => (/* binding */ BinaryTree)
/* harmony export */ });
class TreeNode {
    constructor(data) {
        this._data = data;
        this._left = null;
        this._right = null;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get left() {
        return this._left;
    }
    set left(node) {
        this._left = node;
    }
    get right() {
        return this._right;
    }
    set right(node) {
        this._right = node;
    }
}
class BinaryTree {
    constructor(allowedDepth) {
        this._root = null;
        this._depth = 0;
        this._allowedDepth = allowedDepth;
    }
    get root() {
        return this._root;
    }
    set root(node) {
        this._root = node;
    }
    checkAndAddDepth(value) {
        this._depth++;
        if (this._depth >= value) {
            throw new Error("Превышено допустимое значение глубины дерева. Допустимая глубина " + value);
        }
    }
    insert(data) {
        const newNode = new TreeNode(data);
        this._depth = 0;
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        this.checkAndAddDepth(this._allowedDepth);
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else if (newNode.data === node.data) {
            throw new Error(`Узел ${newNode.data} уже существует`);
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    search(node, data) {
        if (node === null) {
            return false;
        }
        if (data < node.data) {
            return this.search(node.left, data);
        }
        if (data > node.data) {
            return this.search(node.right, data);
        }
        return true;
    }
    inOrderTraverse(node, callback) {
        if (node !== null) {
            this.preOrderTraverse(node.left, callback);
            callback(node.data);
            this.preOrderTraverse(node.right, callback);
        }
    }
    preOrderTraverse(node, callback) {
        if (node !== null) {
            callback(node.data);
            this.preOrderTraverse(node.left, callback);
            this.preOrderTraverse(node.right, callback);
        }
    }
    postOrderTraverse(node, callback) {
        if (node !== null) {
            this.preOrderTraverse(node.left, callback);
            this.preOrderTraverse(node.right, callback);
            callback(node.data);
        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    findMinNode(node) {
        if (node.left === null) {
            return node;
        }
        return this.findMinNode(node.left);
    }
    removeNode(node, data) {
        if (node === null) {
            throw new Error(`Узел ${data} не найден`);
        }
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }
        const minNode = this.findMinNode(node.right);
        node.data = minNode.data;
        node.right = this.removeNode(node.right, minNode.data);
        return node;
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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binary_search_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binary-search-tree */ "./src/binary-search-tree.ts");

const binaryTree = new _binary_search_tree__WEBPACK_IMPORTED_MODULE_0__.BinaryTree(5);
const htmlTree = document.querySelector(".tree__diagramm");
const output = document.querySelector("#output");
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
const insertForm = document.querySelector("#insert");
const insertInput = document.querySelector("#insert-input");
const removeForm = document.querySelector("#remove");
const removeInput = document.querySelector("#remove-input");
function createTreeBlock(node, parentNode) {
    if (node !== null) {
        const treeBlock = document.createElement("div");
        let side;
        if (parentNode === null) {
            side = "parent";
        }
        else if (node.data < parentNode.data) {
            side = "left";
        }
        else {
            side = "right";
        }
        treeBlock.className = `tree__block tree__block_${side}`;
        treeBlock.innerHTML = `<div class="tree__node tree__node_${side}"><span class="tree__key">${node.data}</span></div>`;
        return treeBlock;
    }
    return null;
}
function addElementFromNode(node, parentNode, parentEl) {
    if (node !== null) {
        const el = createTreeBlock(node, parentNode);
        if (el !== null) {
            parentEl.append(el);
            if (node.left !== null || node.right !== null) {
                addElementFromNode(node.left, node, el);
                addElementFromNode(node.right, node, el);
            }
        }
    }
}
function addTree() {
    const fragment = document.createDocumentFragment();
    addElementFromNode(binaryTree.root, null, fragment);
    if (htmlTree !== null) {
        htmlTree.innerHTML = "";
        htmlTree.append(fragment);
    }
}
if (insertForm !== null) {
    insertForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (insertInput) {
            try {
                binaryTree.insert(Number(insertInput.value));
                if (output) {
                    output.classList.remove("red");
                    output.textContent = `Узел ${insertInput.value} создан`;
                }
                addTree();
                insertInput.value = "";
            }
            catch (err) {
                if (output) {
                    output.classList.add("red");
                    output.textContent = err.message;
                    insertInput.value = "";
                }
            }
        }
    });
}
if (searchForm !== null) {
    searchForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (searchInput) {
            const result = binaryTree.search(binaryTree.root, Number(searchInput.value));
            if (result === true) {
                if (output) {
                    output.classList.remove("red");
                    output.textContent = `Узел ${searchInput.value} найден`;
                }
            }
            else {
                if (output) {
                    output.classList.add("red");
                    output.textContent = `Узел ${searchInput.value} не найден`;
                }
            }
            searchInput.value = "";
        }
    });
}
if (removeForm !== null) {
    removeForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (removeInput) {
            try {
                binaryTree.remove(Number(removeInput.value));
                if (output) {
                    output.classList.remove("red");
                    output.textContent = `Узел ${removeInput.value} успешно удален`;
                    addTree();
                    removeInput.value = "";
                }
            }
            catch (err) {
                if (output) {
                    output.classList.add("red");
                    output.textContent = err.message;
                    removeInput.value = "";
                }
            }
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2JpbmFyeS1zZWFyY2gtdHJlZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLFFBQVE7SUFLbkIsWUFBYSxJQUFPO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQVE7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxJQUF3QjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUF3QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUks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T0FBTyxFQUFFLENBQUM7b0JBQ1YsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7aUJBQ3hCO2FBQ0Y7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO29CQUNqQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVHJlZU5vZGU8VD4ge1xyXG4gIHByaXZhdGUgX2RhdGE6IFQ7XHJcbiAgcHJpdmF0ZSBfbGVmdDogVHJlZU5vZGU8VD4gfCBudWxsO1xyXG4gIHByaXZhdGUgX3JpZ2h0OiBUcmVlTm9kZTxUPiB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChkYXRhOiBUKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuX2xlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5fcmlnaHQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGEoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIHNldCBkYXRhKHZhbHVlOiBUKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbGVmdCgpOiBUcmVlTm9kZTxUPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgbGVmdChub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwpIHtcclxuICAgIHRoaXMuX2xlZnQgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJpZ2h0KCk6IFRyZWVOb2RlPFQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgcmlnaHQobm9kZTogVHJlZU5vZGU8VD4gfCBudWxsKSB7XHJcbiAgICB0aGlzLl9yaWdodCA9IG5vZGU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeVRyZWU8VD4ge1xyXG4gIHByaXZhdGUgX3Jvb3Q6IFRyZWVOb2RlPFQ+IHwgbnVsbDtcclxuICBwcml2YXRlIF9kZXB0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2FsbG93ZWREZXB0aDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhbGxvd2VkRGVwdGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcm9vdCA9IG51bGw7XHJcbiAgICB0aGlzLl9kZXB0aCA9IDA7XHJcbiAgICB0aGlzLl9hbGxvd2VkRGVwdGggPSBhbGxvd2VkRGVwdGg7XHJcbiAgfVxyXG5cclxuICBnZXQgcm9vdCgpOiBUcmVlTm9kZTxUPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgfVxyXG5cclxuICBzZXQgcm9vdChub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0FuZEFkZERlcHRoKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RlcHRoKys7XHJcbiAgICBpZiAodGhpcy5fZGVwdGggPj0gdmFsdWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J/RgNC10LLRi9GI0LXQvdC+INC00L7Qv9GD0YHRgtC40LzQvtC1INC30L3QsNGH0LXQvdC40LUg0LPQu9GD0LHQuNC90Ysg0LTQtdGA0LXQstCwLiDQlNC+0L/Rg9GB0YLQuNC80LDRjyDQs9C70YPQsdC40L3QsCBcIiArIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluc2VydChkYXRhOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IFRyZWVOb2RlPFQ+KGRhdGEpO1xyXG4gICAgdGhpcy5fZGVwdGggPSAwO1xyXG5cclxuICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5yb290ID0gbmV3Tm9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZSh0aGlzLnJvb3QsIG5ld05vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnNlcnROb2RlKG5vZGU6IFRyZWVOb2RlPFQ+LCBuZXdOb2RlOiBUcmVlTm9kZTxUPik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja0FuZEFkZERlcHRoKHRoaXMuX2FsbG93ZWREZXB0aCk7XHJcbiAgICBpZiAobmV3Tm9kZS5kYXRhIDwgbm9kZS5kYXRhKSB7XHJcbiAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcclxuICAgICAgICBub2RlLmxlZnQgPSBuZXdOb2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0Tm9kZShub2RlLmxlZnQsIG5ld05vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG5ld05vZGUuZGF0YSA9PT0gbm9kZS5kYXRhKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihg0KPQt9C10LsgJHtuZXdOb2RlLmRhdGF9INGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgmApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICBub2RlLnJpZ2h0ID0gbmV3Tm9kZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluc2VydE5vZGUobm9kZS5yaWdodCwgbmV3Tm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaChub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwsIGRhdGE6IFQpOiBib29sZWFuIHtcclxuICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhIDwgbm9kZS5kYXRhKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaChub2RlLmxlZnQsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKCBkYXRhID4gbm9kZS5kYXRhKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaChub2RlLnJpZ2h0LCBkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaW5PcmRlclRyYXZlcnNlKG5vZGU6IFRyZWVOb2RlPFQ+IHwgbnVsbCwgY2FsbGJhY2s6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnByZU9yZGVyVHJhdmVyc2Uobm9kZS5sZWZ0LCBjYWxsYmFjayk7XHJcbiAgICAgIGNhbGxiYWNrKG5vZGUuZGF0YSk7XHJcbiAgICAgIHRoaXMucHJlT3JkZXJUcmF2ZXJzZShub2RlLnJpZ2h0LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVPcmRlclRyYXZlcnNlKG5vZGU6IFRyZWVOb2RlPFQ+IHwgbnVsbCwgY2FsbGJhY2s6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICBjYWxsYmFjayhub2RlLmRhdGEpO1xyXG4gICAgICB0aGlzLnByZU9yZGVyVHJhdmVyc2Uobm9kZS5sZWZ0LCBjYWxsYmFjayk7XHJcbiAgICAgIHRoaXMucHJlT3JkZXJUcmF2ZXJzZShub2RlLnJpZ2h0LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3N0T3JkZXJUcmF2ZXJzZShub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwsIGNhbGxiYWNrOiAoZGF0YTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5wcmVPcmRlclRyYXZlcnNlKG5vZGUubGVmdCwgY2FsbGJhY2spO1xyXG4gICAgICB0aGlzLnByZU9yZGVyVHJhdmVyc2Uobm9kZS5yaWdodCwgY2FsbGJhY2spO1xyXG4gICAgICBjYWxsYmFjayhub2RlLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGRhdGE6IFQpOiB2b2lkIHtcclxuICAgICB0aGlzLnJvb3QgPSB0aGlzLnJlbW92ZU5vZGUodGhpcy5yb290LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZE1pbk5vZGUobm9kZTogVHJlZU5vZGU8VD4pOiBUcmVlTm9kZTxUPiB7XHJcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmluZE1pbk5vZGUobm9kZS5sZWZ0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTm9kZShub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwsIGRhdGE6IFQpOiBUcmVlTm9kZTxUPiB8IG51bGwge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGDQo9C30LXQuyAke2RhdGF9INC90LUg0L3QsNC50LTQtdC9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEgPCBub2RlLmRhdGEpIHtcclxuICAgICAgbm9kZS5sZWZ0ID0gdGhpcy5yZW1vdmVOb2RlKG5vZGUubGVmdCwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhID4gbm9kZS5kYXRhKSB7XHJcbiAgICAgIG5vZGUucmlnaHQgPSB0aGlzLnJlbW92ZU5vZGUobm9kZS5yaWdodCwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XHJcbiAgICAgIG5vZGUgPSBudWxsO1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICBub2RlID0gbm9kZS5sZWZ0O1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtaW5Ob2RlID0gdGhpcy5maW5kTWluTm9kZShub2RlLnJpZ2h0KTtcclxuICAgIG5vZGUuZGF0YSA9IG1pbk5vZGUuZGF0YTtcclxuICAgIG5vZGUucmlnaHQgPSB0aGlzLnJlbW92ZU5vZGUobm9kZS5yaWdodCwgbWluTm9kZS5kYXRhKTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEJpbmFyeVRyZWUsIFRyZWVOb2RlIH0gZnJvbSBcIi4vYmluYXJ5LXNlYXJjaC10cmVlXCI7XG5cbmNvbnN0IGJpbmFyeVRyZWUgPSBuZXcgQmluYXJ5VHJlZTxudW1iZXI+KDUpO1xuXG5jb25zdCBodG1sVHJlZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVlX19kaWFncmFtbVwiKTtcblxuY29uc3Qgb3V0cHV0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dHB1dFwiKTtcbmNvbnN0IHNlYXJjaEZvcm06IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtaW5wdXRcIik7XG5cbmNvbnN0IGluc2VydEZvcm06IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5zZXJ0XCIpO1xuY29uc3QgaW5zZXJ0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnNlcnQtaW5wdXRcIik7XG5cbmNvbnN0IHJlbW92ZUZvcm06IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlXCIpO1xuY29uc3QgcmVtb3ZlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZW1vdmUtaW5wdXRcIik7XG5cblxuZnVuY3Rpb24gY3JlYXRlVHJlZUJsb2NrIChub2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCwgcGFyZW50Tm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRyZWVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHNpZGU6IHN0cmluZztcbiAgICBpZiAocGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgIHNpZGUgPSBcInBhcmVudFwiO1xuICAgIH0gZWxzZSBpZiAobm9kZS5kYXRhIDwgcGFyZW50Tm9kZS5kYXRhKSB7XG4gICAgICBzaWRlID0gXCJsZWZ0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGUgPSBcInJpZ2h0XCI7XG4gICAgfVxuICAgIHRyZWVCbG9jay5jbGFzc05hbWUgPSBgdHJlZV9fYmxvY2sgdHJlZV9fYmxvY2tfJHtzaWRlfWA7XG4gICAgdHJlZUJsb2NrLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidHJlZV9fbm9kZSB0cmVlX19ub2RlXyR7c2lkZX1cIj48c3BhbiBjbGFzcz1cInRyZWVfX2tleVwiPiR7bm9kZS5kYXRhfTwvc3Bhbj48L2Rpdj5gO1xuXG4gICAgcmV0dXJuIHRyZWVCbG9jaztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudEZyb21Ob2RlKG5vZGU6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsLCBwYXJlbnROb2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCwgcGFyZW50RWw6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudCk6IHZvaWQge1xuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBjcmVhdGVUcmVlQmxvY2sobm9kZSwgcGFyZW50Tm9kZSk7XG4gICAgIGlmIChlbCAhPT0gbnVsbCkge1xuICAgICAgIHBhcmVudEVsLmFwcGVuZChlbCk7XG4gICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCB8fCBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICBhZGRFbGVtZW50RnJvbU5vZGUobm9kZS5sZWZ0LCBub2RlLCBlbCk7XG4gICAgICAgICBhZGRFbGVtZW50RnJvbU5vZGUobm9kZS5yaWdodCwgbm9kZSwgZWwpO1xuICAgICAgIH1cbiAgICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRyZWUgKCk6IHZvaWQge1xuICBjb25zdCBmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgYWRkRWxlbWVudEZyb21Ob2RlKGJpbmFyeVRyZWUucm9vdCwgbnVsbCwgZnJhZ21lbnQpO1xuICBpZiAoaHRtbFRyZWUgIT09IG51bGwpIHtcbiAgICBodG1sVHJlZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGh0bWxUcmVlLmFwcGVuZChmcmFnbWVudCk7XG4gIH1cbn1cblxuaWYgKGluc2VydEZvcm0gIT09IG51bGwpIHtcbiAgaW5zZXJ0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2dDogRXZlbnQpOiB2b2lkIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaW5zZXJ0SW5wdXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGJpbmFyeVRyZWUuaW5zZXJ0KE51bWJlcihpbnNlcnRJbnB1dC52YWx1ZSkpO1xuICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgb3V0cHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gYNCj0LfQtdC7ICR7aW5zZXJ0SW5wdXQudmFsdWV9INGB0L7Qt9C00LDQvWA7XG4gICAgICAgIH1cbiAgICAgICAgYWRkVHJlZSgpO1xuICAgICAgICBpbnNlcnRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgIG91dHB1dC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9IGVyci5tZXNzYWdlO1xuICAgICAgICAgIGluc2VydElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmlmIChzZWFyY2hGb3JtICE9PSBudWxsKSB7XG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoc2VhcmNoSW5wdXQpIHtcbiAgICAgIGNvbnN0IHJlc3VsdDogYm9vbGVhbiA9IGJpbmFyeVRyZWUuc2VhcmNoKGJpbmFyeVRyZWUucm9vdCwgTnVtYmVyKHNlYXJjaElucHV0LnZhbHVlKSk7XG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgICBvdXRwdXQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICAgICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSBg0KPQt9C10LsgJHtzZWFyY2hJbnB1dC52YWx1ZX0g0L3QsNC50LTQtdC9YDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgIG91dHB1dC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgICAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9IGDQo9C30LXQuyAke3NlYXJjaElucHV0LnZhbHVlfSDQvdC1INC90LDQudC00LXQvWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5pZiAocmVtb3ZlRm9ybSAhPT0gbnVsbCkge1xuICByZW1vdmVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZ0OiBFdmVudCk6IHZvaWQge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHJlbW92ZUlucHV0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBiaW5hcnlUcmVlLnJlbW92ZShOdW1iZXIocmVtb3ZlSW5wdXQudmFsdWUpKTtcbiAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgIG91dHB1dC5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpO1xuICAgICAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9IGDQo9C30LXQuyAke3JlbW92ZUlucHV0LnZhbHVlfSDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L1gO1xuICAgICAgICAgIGFkZFRyZWUoKTtcbiAgICAgICAgICByZW1vdmVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgb3V0cHV0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gICAgICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgcmVtb3ZlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=