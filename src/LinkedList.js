/* eslint-disable import/extensions */
import Node from './Node.js';

export default class LinkedList {
  #head = null;

  #tail = null;

  #list = [];

  get list() {
    return this.#list;
  }

  set head(node) {
    this.#head = node;
  }

  get head() {
    return this.#head;
  }

  set tail(node) {
    this.#tail = node;
  }

  get tail() {
    return this.#tail;
  }

  size() {
    return this.list.length;
  }

  at(index) {
    let node = this.head;
    let i = 0;
    while (i < this.size()) {
      if (i === index) {
        return node;
      }
      node = node.nextNode;
      i += 1;
    }
    return null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.size() === 0) {
      this.head = newNode;
    } else if (this.size() === 1) {
      this.head.nextNode = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.#list.push(newNode);
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.size() !== 0) {
      newNode.nextNode = this.head;
    }
    if (this.size() === 1) {
      this.tail = this.head;
    }
    this.head = newNode;
    this.#list.push(newNode);
  }

  toString() {
    let listAsString = '';
    let node = this.head;
    do {
      listAsString += `( ${node.value} ) -> `;
      node = node.nextNode;
    } while (node !== null);
    listAsString += 'null';
    return listAsString;
  }
}
