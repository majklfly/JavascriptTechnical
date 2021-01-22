class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }

  remove(data) {
    this.children.map((item) => {
      if (item.data === data) {
        this.children = this.children.filter((node) => node !== item);
      }
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}
