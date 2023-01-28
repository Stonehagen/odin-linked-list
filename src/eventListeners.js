/* eslint-disable import/prefer-default-export */
const appBtnEl = (linkedList) => {
  const htmlAppButton = document.querySelector('.app-btn');
  const htmlInput = document.querySelector('.node-value');
  const htmlDisplay = document.querySelector('.display');
  htmlAppButton.addEventListener('click', (e) => {
    e.preventDefault();
    linkedList.append(htmlInput.value);
    htmlInput.value = '';
    htmlDisplay.innerHTML = linkedList.toString();
  });
};

const preBtnEl = (linkedList) => {
  const htmlPreButton = document.querySelector('.pre-btn');
  const htmlInput = document.querySelector('.node-value');
  const htmlDisplay = document.querySelector('.display');
  htmlPreButton.addEventListener('click', (e) => {
    e.preventDefault();
    linkedList.prepend(htmlInput.value);
    htmlInput.value = '';
    htmlDisplay.innerHTML = linkedList.toString();
  });
};

const containBtnEl = (linkedList) => {
  const htmlContainButton = document.querySelector('.contain-btn');
  const htmlInput = document.querySelector('.node-value');
  const htmlDisplay = document.querySelector('.display');
  htmlContainButton.addEventListener('click', (e) => {
    e.preventDefault();
    htmlDisplay.innerHTML = linkedList.contains(htmlInput.value);
  });
};

const findBtnEl = (linkedList) => {
  const htmlFindButton = document.querySelector('.find-btn');
  const htmlInput = document.querySelector('.node-value');
  const htmlDisplay = document.querySelector('.display');
  htmlFindButton.addEventListener('click', (e) => {
    e.preventDefault();
    htmlDisplay.innerHTML = `Index: ${linkedList.find(htmlInput.value)}`;
  });
};

const nodeBtnEl = (linkedList) => {
  const htmlNodeButton = document.querySelector('.node-btn');
  const htmlInput = document.querySelector('.node-index');
  const htmlDisplay = document.querySelector('.display');
  htmlNodeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const node = linkedList.at(+htmlInput.value);
    htmlDisplay.innerHTML = node.value;
    htmlInput.value = '';
  });
};

const popBtnEl = (linkedList) => {
  const htmlPopButton = document.querySelector('.pop-btn');
  const htmlDisplay = document.querySelector('.display');
  htmlPopButton.addEventListener('click', (e) => {
    e.preventDefault();
    linkedList.pop();
    htmlDisplay.innerHTML = linkedList.toString();
  });
};

export const addEventListeners = (linkedList) => {
  appBtnEl(linkedList);
  preBtnEl(linkedList);
  containBtnEl(linkedList);
  findBtnEl(linkedList);
  nodeBtnEl(linkedList);
  popBtnEl(linkedList);
};
