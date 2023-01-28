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

  const htmlContainButton = document.createElement('button');
  htmlContainButton.classList.add('contain-btn');
  htmlContainButton.innerHTML = 'Contain Value';

  const htmlFindButton = document.createElement('button');
  htmlFindButton.classList.add('find-btn');
  htmlFindButton.innerHTML = 'Find Value';

  const htmlIndexInput = document.createElement('input');
  htmlIndexInput.type = 'number';
  htmlIndexInput.placeholder = 'Node ID';
  htmlIndexInput.classList.add('node-index');

  const htmlRemoveButton = document.createElement('button');
  htmlRemoveButton.classList.add('remove-btn');
  htmlRemoveButton.innerHTML = 'Remove Node';

  const htmlNodeButton = document.createElement('button');
  htmlNodeButton.classList.add('node-btn');
  htmlNodeButton.innerHTML = 'Display Node';

  const htmlPopButton = document.createElement('button');
  htmlPopButton.classList.add('pop-btn');
  htmlPopButton.innerHTML = 'Pop Node';

  const htmlDisplayDiv = document.createElement('div');
  htmlDisplayDiv.classList.add('display');

  htmlForm.appendChild(htmlTextInput);
  htmlForm.appendChild(htmlAppButton);
  htmlForm.appendChild(htmlPreButton);
  htmlForm.appendChild(htmlContainButton);
  htmlForm.appendChild(htmlFindButton);
  htmlForm.appendChild(htmlIndexInput);
  htmlForm.appendChild(htmlRemoveButton);
  htmlForm.appendChild(htmlNodeButton);
  htmlForm.appendChild(htmlPopButton);
  container.appendChild(htmlForm);
  container.appendChild(htmlDisplayDiv);
};
