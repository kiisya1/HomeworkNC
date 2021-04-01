'use strict';

(function () {

  function getInnerElement (tag) {
    let innerElement = document.createElement(tag);
    innerElement.className = 'addition__block';
    addButtonElement(innerElement);

    return innerElement;
  }

  function addButtonElement (element) {
    let buttonTemplate = document.querySelector('#button')
        .content
        .querySelector('.addition__delete');
    let buttonElement = buttonTemplate.cloneNode(true);

    addButtonClickHandler(buttonElement, element);

    element.append(buttonElement);
  }

  function addButtonClickHandler (buttonElement, parentElement) {
    buttonElement.addEventListener('click', function () {
      parentElement.remove();
    });
  };

  function addInnerElements (tag, number) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < number; i++) {
      let innerElement = getInnerElement(tag);
      fragment.append(innerElement);
    }

    return fragment;
  }

  function addElements (parentElement, innerTag, number) {
    let fragmentOfElements = addInnerElements(innerTag, number);
    parentElement.append(fragmentOfElements);
  }

  function makeBlock (parentTag) {
    let body = document.querySelector('body')
    let parentElement = document.createElement(parentTag);
    parentElement.className = 'addition';
    addButtonElement(parentElement);

    return function (innerTag) {
      return function (arg) {
        if (Number.isInteger(arg)) {
          addElements(parentElement, innerTag, arg);
          body.append(parentElement);
        } else {
          let middleElement = getInnerElement(arg);
          parentElement.append(middleElement);
          return function (arg) {
            if (Number.isInteger(arg)) {
              addElements(middleElement, innerTag, arg);
              body.append(parentElement);
            } else {
              alert('Превышен допустимый уровень вложенности');
              throw new Error('Превышен допустимый уровень вложенности');
            }
          }
        }
      }
    }
  }

window.makeBlock = makeBlock;

})();
