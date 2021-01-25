class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(input) {
    const newNode = new Node(input);
    if (input < this.data && this.left) {
      this.left.insert(input);
    } else if (input < this.data) {
      this.left = newNode;
    } else if (input > this.data && this.right) {
      this.right.insert(input);
    } else if (input > this.data) {
      this.right = newNode;
    }
  }

  contains(input) {
    if (this.data === input) {
      return true;
    } else if (input < this.data && this.left) {
      this.left.contains(input);
    } else if (input > this.data && this.right) {
      this.right.contains(input);
    } else {
      return false;
    }
  }

  validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
      return false;
    }
    if (min !== null && node.data < min) {
      return false;
    }

    if (node.left && !this.validate(node.left, min, node.data)) {
      return false;
    }

    if (node.right && !this.validate(node.right, node.data, max)) {
      return false;
    }

    return true;
  }
}
