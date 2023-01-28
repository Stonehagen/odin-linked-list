/* eslint-disable import/extensions */
import Node from './Node.js';

export default class LinkedList {
  #head = null;

  #tail = null;

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
    let length = 0;
    let node = this.head;
    while (node !== null) {
      node = node.nextNode;
      length += 1;
    }
    return length;
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
    return 'Node not Found';
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
  }

  pop() {
    this.tail = this.at(this.size() - 2);
    this.tail.nextNode = null;
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
