// eslint-disable-next-line import/prefer-default-export
export const loadPage = (container) => {
  const htmlForm = document.createElement('form');

  const htmlInput = document.createElement('input');

  const htmlAddButton = document.createElement('button');
  htmlAddButton.classList.add('add-btn');
  htmlAddButton.innerHTML = 'Add Node';

  const htmlRemoveButton = document.createElement('button');
  htmlRemoveButton.classList.add('remove-btn');
  htmlRemoveButton.innerHTML = 'Remove Node';

  const htmlDisplayDiv = document.createElement('div');
  htmlDisplayDiv.classList.add('display');

  htmlForm.appendChild(htmlInput);
  htmlForm.appendChild(htmlAddButton);
  htmlForm.appendChild(htmlRemoveButton);
  container.appendChild(htmlForm);
  container.appendChild(htmlDisplayDiv);
};
