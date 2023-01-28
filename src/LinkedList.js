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
    const size = this.size();
    if (size <= 1) {
      this.head = null;
    } else if (size === 2) {
      this.head.nextNode = null;
      this.tail = null;
    } else {
      this.tail = this.at(size - 2);
      this.tail.nextNode = null;
    }
  }

  find(value) {
    let node = this.head;
    let i = 0;
    while (i < this.size()) {
      if (node.value === value) {
        return i;
      }
      node = node.nextNode;
      i += 1;
    }
    return null;
  }

  contains(value) {
    if (this.find(value) !== null) {
      return true;
    }
    return false;
  }

  insertAt(value, index) {
    const node = new Node(value);
    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.size()) {
      this.append(value);
    } else {
      const preNode = this.at(index - 1);
      const followNode = this.at(index);
      node.nextNode = followNode;
      preNode.nextNode = node;
    }
  }

  removeAt(index) {
    if (this.size() <= 1) {
      this.head = null;
    } else if (index <= 0) {
      const followNode = this.at(1);
      this.head = followNode;
    } else if (index >= this.size()) {
      this.pop();
    } else {
      const preNode = this.at(index - 1);
      const followNode = this.at(index + 1);
      preNode.nextNode = followNode;
    }
  }

  toString() {
    if (this.size() === 0) {
      return null;
    }
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
