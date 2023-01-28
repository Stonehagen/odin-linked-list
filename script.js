/* eslint-disable import/extensions */
import { loadPage } from './src/domManager.js';
import { addBtnEl } from './src/eventListeners.js';
import LinkedList from './src/LinkedList.js';

const htmlContainer = document.querySelector('.container');
const linkedList = new LinkedList();
loadPage(htmlContainer);
addBtnEl(linkedList);
