
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

export {getTime, addLogElement, messageMap};
