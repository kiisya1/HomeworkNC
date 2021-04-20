export class TreeNode<T> {
  private _data: T;
  private _left: TreeNode<T> | null;
  private _right: TreeNode<T> | null;

  constructor (data: T) {
    this._data = data;
    this._left = null;
    this._right = null;
  }

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  get left(): TreeNode<T> | null {
    return this._left;
  }

  set left(node: TreeNode<T> | null) {
    this._left = node;
  }

  get right(): TreeNode<T> | null {
    return this._right;
  }

  set right(node: TreeNode<T> | null) {
    this._right = node;
  }
}


export class BinaryTree<T> {
  private _root: TreeNode<T> | null;
  private _depth: number;
  private _allowedDepth: number;

  constructor(allowedDepth: number) {
    this._root = null;
    this._depth = 0;
    this._allowedDepth = allowedDepth;
  }

  get root(): TreeNode<T> | null {
    return this._root;
  }

  set root(node: TreeNode<T> | null) {
    this._root = node;
  }

  private checkAndAddDepth(value: number): void {
    this._depth++;
    if (this._depth >= value) {
      alert("Превышено допустимое значение глубины дерева. Допустимая глубина " + value);
      throw new Error("Превышено допустимое значение глубины дерева. Допустимая глубина " + value);
    }
  }

  insert(data: T): void {
    const newNode = new TreeNode<T>(data);
    this._depth = 0;

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    this.checkAndAddDepth(this._allowedDepth);
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.data === node.data) {
      node.data = newNode.data;
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(node: TreeNode<T> | null, data: T): boolean {
    if (node === null) {
      return false;
    }
    if (data < node.data) {
      return this.search(node.left, data);
    }
    if ( data > node.data) {
      return this.search(node.right, data);
    }
    return true;
  }

  inOrderTraverse(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node !== null) {
      this.preOrderTraverse(node.left, callback);
      callback(node.data);
      this.preOrderTraverse(node.right, callback);
    }
  }

  preOrderTraverse(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node !== null) {
      callback(node.data);
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }
  }

  postOrderTraverse(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node !== null) {
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
      callback(node.data);
    }
  }

  remove(data: T): void {
     this.root = this.removeNode(this.root, data);
  }

  private findMinNode(node: TreeNode<T>): TreeNode<T> {
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  private removeNode(node: TreeNode<T> | null, data: T): TreeNode<T> | null {
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
