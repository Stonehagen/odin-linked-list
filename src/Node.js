export default class Node {
  #nextNode = null;

  #value = null;

  constructor(value) {
    this.#value = value;
  }

  set nextNode(node) {
    this.#nextNode = node;
  }

  get nextNode() {
    return this.#nextNode;
  }

  get value() {
    return this.#value;
  }
}
