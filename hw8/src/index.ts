import { BinaryTree, TreeNode } from "./binary-search-tree";

const binaryTree = new BinaryTree<number>(5);

const htmlTree: HTMLElement | null = document.querySelector(".tree__diagramm");

const searchOutput: HTMLElement | null = document.querySelector("#search-output");
const searchForm: HTMLElement | null = document.querySelector("#search");
const searchInput: HTMLInputElement | null = document.querySelector("#search-input");

const insertForm: HTMLElement | null = document.querySelector("#insert");
const insertInput: HTMLInputElement | null = document.querySelector("#insert-input");

const removeForm: HTMLElement | null = document.querySelector("#remove");
const removeInput: HTMLInputElement | null = document.querySelector("#remove-input");


function createTreeBlock (node: TreeNode<number> | null, parentNode: TreeNode<number> | null): HTMLElement | null {
  if (node !== null) {
    const treeBlock = document.createElement("div");
    let side: string;
    if (parentNode === null) {
       side = "parent";
    } else if (node.data < parentNode.data) {
      side = "left";
    } else {
      side = "right";
    }
    treeBlock.className = `tree__block tree__block_${side}`;
    treeBlock.innerHTML = `<div class="tree__node tree__node_${side}"><span class="tree__key">${node.data}</span></div>`;

    return treeBlock;
  }
  return null;
}

function addElementFromNode(node: TreeNode<number> | null, parentNode: TreeNode<number> | null, parentEl: HTMLElement | DocumentFragment): void {
  if (node !== null) {
    const el: HTMLElement | null = createTreeBlock(node, parentNode);
     if (el !== null) {
       parentEl.append(el);
       if (node.left !== null || node.right !== null) {
         addElementFromNode(node.left, node, el);
         addElementFromNode(node.right, node, el);
       }
     }
  }
}

function addTree (): void {
  const fragment: DocumentFragment = document.createDocumentFragment();
  addElementFromNode(binaryTree.root, null, fragment);
  if (htmlTree !== null) {
    htmlTree.innerHTML = "";
    htmlTree.append(fragment);
  }
}

if (insertForm !== null) {
  insertForm.addEventListener("submit", function(evt: Event): void {
    evt.preventDefault();
    if (insertInput) {
      binaryTree.insert(Number(insertInput.value));
      insertInput.value = "";
      addTree();
    }
  });
}

if (searchForm !== null) {
  searchForm.addEventListener("submit", function(evt: Event): void {
    evt.preventDefault();

    if (searchInput) {
      const output: boolean = binaryTree.search(binaryTree.root, Number(searchInput.value));
      searchInput.value = "";
      if (searchOutput) {
        searchOutput.textContent = String(output);
      }
    }
  });
}

if (removeForm !== null) {
  removeForm.addEventListener("submit", function(evt: Event): void {
    evt.preventDefault();

    if (removeInput) {
      binaryTree.remove(Number(removeInput.value));
      removeInput.value = "";
      addTree();
    }
  });
}
