/* eslint-disable import/prefer-default-export */
export const addBtnEl = (linkedList) => {
  const htmlAddButton = document.querySelector('.app-btn');
  const htmlInput = document.querySelector('.node-value');
  const htmlDisplay = document.querySelector('.display');
  htmlAddButton.addEventListener('click', (e) => {
    e.preventDefault();
    linkedList.append(htmlInput.value);
    htmlInput.value = '';
    htmlDisplay.innerHTML = linkedList.toString();
  });
};
