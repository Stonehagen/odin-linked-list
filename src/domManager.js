// eslint-disable-next-line import/prefer-default-export
export const loadPage = (container) => {
  const htmlForm = document.createElement('form');

  const htmlTextInput = document.createElement('input');
  htmlTextInput.placeholder = 'Node Value';
  htmlTextInput.classList.add('node-value');

  const htmlAppButton = document.createElement('button');
  htmlAppButton.classList.add('app-btn');
  htmlAppButton.innerHTML = 'Append Node';

  const htmlPreButton = document.createElement('button');
  htmlPreButton.classList.add('pre-btn');
  htmlPreButton.innerHTML = 'Prepend Node';

  const htmlIndexInput = document.createElement('input');
  htmlIndexInput.type = 'number';
  htmlIndexInput.placeholder = 'Node ID';
  htmlIndexInput.classList.add('node-index');

  const htmlRemoveButton = document.createElement('button');
  htmlRemoveButton.classList.add('remove-btn');
  htmlRemoveButton.innerHTML = 'Remove Node';

  const htmlDisplayDiv = document.createElement('div');
  htmlDisplayDiv.classList.add('display');

  htmlForm.appendChild(htmlTextInput);
  htmlForm.appendChild(htmlAppButton);
  htmlForm.appendChild(htmlPreButton);
  htmlForm.appendChild(htmlIndexInput);
  htmlForm.appendChild(htmlRemoveButton);
  container.appendChild(htmlForm);
  container.appendChild(htmlDisplayDiv);
};
