
import Stack from './components/stack.js';


let textOutput = document.querySelector('.stack__output');
let form = document.querySelector('.stack__form');
let textInput = document.querySelector('.stack__input');

let popButton = document.querySelector('#pop');
let peekButton = document.querySelector('#peek');
let getSizeButton = document.querySelector('#getSize');

let myStack = new Stack();

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
