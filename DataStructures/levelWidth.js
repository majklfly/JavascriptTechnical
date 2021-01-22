function levelWidth(root) {
  const counters = [0];
  const array = [root, "s"];

  while (array.length > 1) {
    const node = arr.unshift();
    if (node === "s") {
      counters.push(0);
      array.push("s");
    } else {
      array.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}
