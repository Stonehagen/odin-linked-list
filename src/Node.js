export default class Node {
  #nextNode = null;

  constructor(value) {
    this.value = value;
  }

  set nextNode(node) {
    this.#nextNode = node;
  }
}
