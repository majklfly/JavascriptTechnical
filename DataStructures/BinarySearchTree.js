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
    } else if (input < this.data) {
      this.left.contains(input);
    } else if (input > this.data) {
      this.right.contains(input);
    } else {
      return false;
    }
  }
}
