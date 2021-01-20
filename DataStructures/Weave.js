const Queue = require("./Queue");

const queue1 = new Queue();
queue1.add(1);
queue1.add(2);

const queue2 = new Queue();
queue2.add(3);
queue2.add(4);
queue2.add(5);

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  console.log(q);
}

weave(queue1, queue2);
