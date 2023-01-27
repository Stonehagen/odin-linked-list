import Node from './Node';

export default class LinkedList {
  #head = null;

  #list = [];

  get list() {
    return this.list;
  }

  set head(node) {
    this.head = node;
  }

  append(value) {
    const newNode = new Node(value);
    this.list.push(newNode);
    this.head = this.head === null ? newNode : null;
  }
}
