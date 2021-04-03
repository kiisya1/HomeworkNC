
import {getTime, addLogElement, messageMap} from './log.js';

let originalLog = console.log;

console.log = function (func, value = '') {
  let message = getTime() + messageMap[func] + value;

  originalLog.call(this, message);
  addLogElement(message);
};

export default class Stack {
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
