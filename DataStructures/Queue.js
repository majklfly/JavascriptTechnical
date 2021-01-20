class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    if (this.data.length === 0) {
      return 0;
    }
    let lastIndex = this.data.length - 1;
    return this.data[lastIndex];
  }
}

module.exports = Queue;
