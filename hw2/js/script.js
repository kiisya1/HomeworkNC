'use strict';

let textOutput = document.querySelector('.stack__output');
let form = document.querySelector('.stack__form');
let textInput = document.querySelector('.stack__input');

let popButton = document.querySelector('#pop');
let peekButton = document.querySelector('#peek');
let getSizeButton = document.querySelector('#getSize');

// Реализация стека

class Stack {
  constructor() {
    this.list = {};
    this.length = 0;
  }

  push(value) {
    this.list[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    this.length--;
    let value = this.list[this.length];
    delete this.list[this.length];
    return value;
  }

  peek() {
    return this.list[this.length - 1];
  }

  getSize () {
    return this.length;
  }
}

// Создание стека

let myStack = new Stack();

// Создание слушателей событий

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  myStack.push(textInput.value);
  textInput.value = "";

  popButton.disabled = false;
  peekButton.disabled = false;
});

getSizeButton.addEventListener('click', function () {
  textOutput.textContent = myStack.getSize();
});

popButton.addEventListener('click', function () {
  textOutput.textContent = myStack.pop();

  let length = myStack.getSize();

  if (length === 0) {
    popButton.disabled = true;
    peekButton.disabled = true;
  }
});

peekButton.addEventListener('click', function () {
  textOutput.textContent = myStack.peek();
});
