'use strict';

(function () {

  function getInnerElement (tag) {
    let innerElement = document.createElement(tag);
    innerElement.className = 'addition__block';

    let buttonElement = getButtonElement();
    addButtonClickHandler(buttonElement, innerElement);

    innerElement.append(buttonElement);

    return innerElement;
  }

  function getButtonElement () {
    let buttonTemplate = document.querySelector('#button')
        .content
        .querySelector('.addition__delete');
    let buttonElement = buttonTemplate.cloneNode(true);

    return buttonElement;
  }

  function addButtonClickHandler (buttonElement, parentElement) {
    buttonElement.addEventListener('click', function () {
      let parentBlock = parentElement.parentElement;

      if (parentBlock.children.length === 1) {
        parentBlock.remove();
      } else {
        parentElement.remove();
      }
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

  function makeBlock (parentTag) {
    let body = document.querySelector('body')
    let parentElement = document.createElement(parentTag);
    parentElement.className = 'addition';

    return function (innerTag) {
      return function (number) {
        let fragmentOfElements = addInnerElements(innerTag, number);
        parentElement.append(fragmentOfElements);
        body.append(parentElement);
      }
    }
  }

window.makeBlock = makeBlock;

})();
