'use strict';

(function () {

  let textOutput = document.querySelector('.stack__output');
  let form = document.querySelector('.stack__form');
  let textInput = document.querySelector('.stack__input');
  let logOutput = document.querySelector('.log');

  let popButton = document.querySelector('#pop');
  let peekButton = document.querySelector('#peek');
  let getSizeButton = document.querySelector('#getSize');

  let originalLog = console.log;

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

  console.log = function (func, value = '') {
    let message = getTime() + messageMap[func] + value;

    originalLog.call(this, message);
    addLogElement(message);
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

})();
