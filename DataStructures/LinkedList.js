class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;

    while (node) {
      if (!node.next) {
        lastNode = node;
      }
      node = node.next;
    }

    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    let lastNode = this.head;

    while (lastNode) {
      lastNode = lastNode.next;
    }

    if (lastNode) {
      return lastNode.remove();
    }
    return;
  }

  insertLast(node) {
    if (!this.head) {
      this.head = node;
    }

    let lastNode = this.head;
    while (lastNode) {
      lastNode = lastNode.next;
    }

    lastNode.next = node;
    return node;
  }

  getAt(num) {
    let counter = 0;
    let targetNode = null;

    let node = this.head;
    while (node) {
      if (counter === num) {
        targetNode = node;
        break;
      }
      counter++;
      node = node.next;
    }
    return targetNode;
  }

  removeAt(num) {
    if (!this.head) {
      return;
    }

    if (num === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(num - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, num) {
    const newNode = new Node(data);
    if (this.size < num) {
      return;
    }
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    const previous = this.getAt(num - 1);
    previous.next = newNode;
    newNode.next = this.getAt(num);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }

    return counter;
  }
}
