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
            alert("Превышено допустимое значение глубины дерева. Допустимая глубина " + value);
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
            node.data = newNode.data;
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
            alert("Узел не найден");
            return null;
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
const searchOutput = document.querySelector("#search-output");
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
            binaryTree.insert(Number(insertInput.value));
            insertInput.value = "";
            addTree();
        }
    });
}
if (searchForm !== null) {
    searchForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (searchInput) {
            const output = binaryTree.search(binaryTree.root, Number(searchInput.value));
            searchInput.value = "";
            if (searchOutput) {
                searchOutput.textContent = String(output);
            }
        }
    });
}
if (removeForm !== null) {
    removeForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        if (removeInput) {
            binaryTree.remove(Number(removeInput.value));
            removeInput.value = "";
            addTree();
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vc3JjL2JpbmFyeS1zZWFyY2gtdHJlZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLFFBQVE7SUFLbkIsWUFBYSxJQUFPO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQVE7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxJQUF3QjtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUF3QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUks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SjtBQUVELElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtJQUN2QixVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVMsR0FBVTtRQUN2RCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFckIsSUFBSSxXQUFXLEVBQUU7WUFDZixVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVHJlZU5vZGU8VD4ge1xyXG4gIHByaXZhdGUgX2RhdGE6IFQ7XHJcbiAgcHJpdmF0ZSBfbGVmdDogVHJlZU5vZGU8VD4gfCBudWxsO1xyXG4gIHByaXZhdGUgX3JpZ2h0OiBUcmVlTm9kZTxUPiB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChkYXRhOiBUKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuX2xlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5fcmlnaHQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGEoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIHNldCBkYXRhKHZhbHVlOiBUKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbGVmdCgpOiBUcmVlTm9kZTxUPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgbGVmdChub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwpIHtcclxuICAgIHRoaXMuX2xlZnQgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJpZ2h0KCk6IFRyZWVOb2RlPFQ+IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgcmlnaHQobm9kZTogVHJlZU5vZGU8VD4gfCBudWxsKSB7XHJcbiAgICB0aGlzLl9yaWdodCA9IG5vZGU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeVRyZWU8VD4ge1xyXG4gIHByaXZhdGUgX3Jvb3Q6IFRyZWVOb2RlPFQ+IHwgbnVsbDtcclxuICBwcml2YXRlIF9kZXB0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2FsbG93ZWREZXB0aDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhbGxvd2VkRGVwdGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcm9vdCA9IG51bGw7XHJcbiAgICB0aGlzLl9kZXB0aCA9IDA7XHJcbiAgICB0aGlzLl9hbGxvd2VkRGVwdGggPSBhbGxvd2VkRGVwdGg7XHJcbiAgfVxyXG5cclxuICBnZXQgcm9vdCgpOiBUcmVlTm9kZTxUPiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgfVxyXG5cclxuICBzZXQgcm9vdChub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwpIHtcclxuICAgIHRoaXMuX3Jvb3QgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0FuZEFkZERlcHRoKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RlcHRoKys7XHJcbiAgICBpZiAodGhpcy5fZGVwdGggPj0gdmFsdWUpIHtcclxuICAgICAgYWxlcnQoXCLQn9GA0LXQstGL0YjQtdC90L4g0LTQvtC/0YPRgdGC0LjQvNC+0LUg0LfQvdCw0YfQtdC90LjQtSDQs9C70YPQsdC40L3RiyDQtNC10YDQtdCy0LAuINCU0L7Qv9GD0YHRgtC40LzQsNGPINCz0LvRg9Cx0LjQvdCwIFwiICsgdmFsdWUpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQn9GA0LXQstGL0YjQtdC90L4g0LTQvtC/0YPRgdGC0LjQvNC+0LUg0LfQvdCw0YfQtdC90LjQtSDQs9C70YPQsdC40L3RiyDQtNC10YDQtdCy0LAuINCU0L7Qv9GD0YHRgtC40LzQsNGPINCz0LvRg9Cx0LjQvdCwIFwiICsgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0KGRhdGE6IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgVHJlZU5vZGU8VD4oZGF0YSk7XHJcbiAgICB0aGlzLl9kZXB0aCA9IDA7XHJcblxyXG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJvb3QgPSBuZXdOb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnNlcnROb2RlKHRoaXMucm9vdCwgbmV3Tm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc2VydE5vZGUobm9kZTogVHJlZU5vZGU8VD4sIG5ld05vZGU6IFRyZWVOb2RlPFQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrQW5kQWRkRGVwdGgodGhpcy5fYWxsb3dlZERlcHRoKTtcclxuICAgIGlmIChuZXdOb2RlLmRhdGEgPCBub2RlLmRhdGEpIHtcclxuICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIG5vZGUubGVmdCA9IG5ld05vZGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnNlcnROb2RlKG5vZGUubGVmdCwgbmV3Tm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobmV3Tm9kZS5kYXRhID09PSBub2RlLmRhdGEpIHtcclxuICAgICAgbm9kZS5kYXRhID0gbmV3Tm9kZS5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICBub2RlLnJpZ2h0ID0gbmV3Tm9kZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmluc2VydE5vZGUobm9kZS5yaWdodCwgbmV3Tm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaChub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwsIGRhdGE6IFQpOiBib29sZWFuIHtcclxuICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhIDwgbm9kZS5kYXRhKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaChub2RlLmxlZnQsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKCBkYXRhID4gbm9kZS5kYXRhKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaChub2RlLnJpZ2h0LCBkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaW5PcmRlclRyYXZlcnNlKG5vZGU6IFRyZWVOb2RlPFQ+IHwgbnVsbCwgY2FsbGJhY2s6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnByZU9yZGVyVHJhdmVyc2Uobm9kZS5sZWZ0LCBjYWxsYmFjayk7XHJcbiAgICAgIGNhbGxiYWNrKG5vZGUuZGF0YSk7XHJcbiAgICAgIHRoaXMucHJlT3JkZXJUcmF2ZXJzZShub2RlLnJpZ2h0LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmVPcmRlclRyYXZlcnNlKG5vZGU6IFRyZWVOb2RlPFQ+IHwgbnVsbCwgY2FsbGJhY2s6IChkYXRhOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICBjYWxsYmFjayhub2RlLmRhdGEpO1xyXG4gICAgICB0aGlzLnByZU9yZGVyVHJhdmVyc2Uobm9kZS5sZWZ0LCBjYWxsYmFjayk7XHJcbiAgICAgIHRoaXMucHJlT3JkZXJUcmF2ZXJzZShub2RlLnJpZ2h0LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3N0T3JkZXJUcmF2ZXJzZShub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwsIGNhbGxiYWNrOiAoZGF0YTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5wcmVPcmRlclRyYXZlcnNlKG5vZGUubGVmdCwgY2FsbGJhY2spO1xyXG4gICAgICB0aGlzLnByZU9yZGVyVHJhdmVyc2Uobm9kZS5yaWdodCwgY2FsbGJhY2spO1xyXG4gICAgICBjYWxsYmFjayhub2RlLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGRhdGE6IFQpOiB2b2lkIHtcclxuICAgICB0aGlzLnJvb3QgPSB0aGlzLnJlbW92ZU5vZGUodGhpcy5yb290LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZE1pbk5vZGUobm9kZTogVHJlZU5vZGU8VD4pOiBUcmVlTm9kZTxUPiB7XHJcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmluZE1pbk5vZGUobm9kZS5sZWZ0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTm9kZShub2RlOiBUcmVlTm9kZTxUPiB8IG51bGwsIGRhdGE6IFQpOiBUcmVlTm9kZTxUPiB8IG51bGwge1xyXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgYWxlcnQoXCLQo9C30LXQuyDQvdC1INC90LDQudC00LXQvVwiKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEgPCBub2RlLmRhdGEpIHtcclxuICAgICAgbm9kZS5sZWZ0ID0gdGhpcy5yZW1vdmVOb2RlKG5vZGUubGVmdCwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhID4gbm9kZS5kYXRhKSB7XHJcbiAgICAgIG5vZGUucmlnaHQgPSB0aGlzLnJlbW92ZU5vZGUobm9kZS5yaWdodCwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XHJcbiAgICAgIG5vZGUgPSBudWxsO1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgIG5vZGUgPSBub2RlLnJpZ2h0O1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICBub2RlID0gbm9kZS5sZWZ0O1xyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtaW5Ob2RlID0gdGhpcy5maW5kTWluTm9kZShub2RlLnJpZ2h0KTtcclxuICAgIG5vZGUuZGF0YSA9IG1pbk5vZGUuZGF0YTtcclxuICAgIG5vZGUucmlnaHQgPSB0aGlzLnJlbW92ZU5vZGUobm9kZS5yaWdodCwgbWluTm9kZS5kYXRhKTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEJpbmFyeVRyZWUsIFRyZWVOb2RlIH0gZnJvbSBcIi4vYmluYXJ5LXNlYXJjaC10cmVlXCI7XG5cbmNvbnN0IGJpbmFyeVRyZWUgPSBuZXcgQmluYXJ5VHJlZTxudW1iZXI+KDUpO1xuXG5jb25zdCBodG1sVHJlZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVlX19kaWFncmFtbVwiKTtcblxuY29uc3Qgc2VhcmNoT3V0cHV0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1vdXRwdXRcIik7XG5jb25zdCBzZWFyY2hGb3JtOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbmNvbnN0IHNlYXJjaElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuXG5jb25zdCBpbnNlcnRGb3JtOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc2VydFwiKTtcbmNvbnN0IGluc2VydElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5zZXJ0LWlucHV0XCIpO1xuXG5jb25zdCByZW1vdmVGb3JtOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbW92ZVwiKTtcbmNvbnN0IHJlbW92ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVtb3ZlLWlucHV0XCIpO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRyZWVCbG9jayAobm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIHBhcmVudE5vZGU6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0cmVlQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBzaWRlOiBzdHJpbmc7XG4gICAgaWYgKHBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICBzaWRlID0gXCJwYXJlbnRcIjtcbiAgICB9IGVsc2UgaWYgKG5vZGUuZGF0YSA8IHBhcmVudE5vZGUuZGF0YSkge1xuICAgICAgc2lkZSA9IFwibGVmdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlID0gXCJyaWdodFwiO1xuICAgIH1cbiAgICB0cmVlQmxvY2suY2xhc3NOYW1lID0gYHRyZWVfX2Jsb2NrIHRyZWVfX2Jsb2NrXyR7c2lkZX1gO1xuICAgIHRyZWVCbG9jay5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRyZWVfX25vZGUgdHJlZV9fbm9kZV8ke3NpZGV9XCI+PHNwYW4gY2xhc3M9XCJ0cmVlX19rZXlcIj4ke25vZGUuZGF0YX08L3NwYW4+PC9kaXY+YDtcblxuICAgIHJldHVybiB0cmVlQmxvY2s7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRGcm9tTm9kZShub2RlOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCwgcGFyZW50Tm9kZTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIHBhcmVudEVsOiBIVE1MRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQpOiB2b2lkIHtcbiAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgfCBudWxsID0gY3JlYXRlVHJlZUJsb2NrKG5vZGUsIHBhcmVudE5vZGUpO1xuICAgICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICAgICBwYXJlbnRFbC5hcHBlbmQoZWwpO1xuICAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgfHwgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgYWRkRWxlbWVudEZyb21Ob2RlKG5vZGUubGVmdCwgbm9kZSwgZWwpO1xuICAgICAgICAgYWRkRWxlbWVudEZyb21Ob2RlKG5vZGUucmlnaHQsIG5vZGUsIGVsKTtcbiAgICAgICB9XG4gICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUcmVlICgpOiB2b2lkIHtcbiAgY29uc3QgZnJhZ21lbnQ6IERvY3VtZW50RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGFkZEVsZW1lbnRGcm9tTm9kZShiaW5hcnlUcmVlLnJvb3QsIG51bGwsIGZyYWdtZW50KTtcbiAgaWYgKGh0bWxUcmVlICE9PSBudWxsKSB7XG4gICAgaHRtbFRyZWUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBodG1sVHJlZS5hcHBlbmQoZnJhZ21lbnQpO1xuICB9XG59XG5cbmlmIChpbnNlcnRGb3JtICE9PSBudWxsKSB7XG4gIGluc2VydEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGluc2VydElucHV0KSB7XG4gICAgICBiaW5hcnlUcmVlLmluc2VydChOdW1iZXIoaW5zZXJ0SW5wdXQudmFsdWUpKTtcbiAgICAgIGluc2VydElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIGFkZFRyZWUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5pZiAoc2VhcmNoRm9ybSAhPT0gbnVsbCkge1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZ0OiBFdmVudCk6IHZvaWQge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHNlYXJjaElucHV0KSB7XG4gICAgICBjb25zdCBvdXRwdXQ6IGJvb2xlYW4gPSBiaW5hcnlUcmVlLnNlYXJjaChiaW5hcnlUcmVlLnJvb3QsIE51bWJlcihzZWFyY2hJbnB1dC52YWx1ZSkpO1xuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgaWYgKHNlYXJjaE91dHB1dCkge1xuICAgICAgICBzZWFyY2hPdXRwdXQudGV4dENvbnRlbnQgPSBTdHJpbmcob3V0cHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5pZiAocmVtb3ZlRm9ybSAhPT0gbnVsbCkge1xuICByZW1vdmVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZ0OiBFdmVudCk6IHZvaWQge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHJlbW92ZUlucHV0KSB7XG4gICAgICBiaW5hcnlUcmVlLnJlbW92ZShOdW1iZXIocmVtb3ZlSW5wdXQudmFsdWUpKTtcbiAgICAgIHJlbW92ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIGFkZFRyZWUoKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==