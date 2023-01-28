/* eslint-disable import/extensions */
import { loadPage } from './src/domManager.js';
import { addEventListeners } from './src/eventListeners.js';
import LinkedList from './src/LinkedList.js';

const htmlContainer = document.querySelector('.container');
const linkedList = new LinkedList();
loadPage(htmlContainer);
addEventListeners(linkedList);
