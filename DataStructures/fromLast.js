function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
}
