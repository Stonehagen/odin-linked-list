/* eslint-disable import/prefer-default-export */
export const addBtnEl = (linkedList) => {
  const htmlAddButton = document.querySelector('.add-btn');
  const htmlInput = document.querySelector('input');
  const htmlDisplay = document.querySelector('.display');
  htmlAddButton.addEventListener('click', (e) => {
    e.preventDefault();
    linkedList.append(htmlInput.value);
    htmlInput.value = '';
    htmlDisplay.innerHTML = linkedList.toString();
  });
};
