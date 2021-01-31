const solve = (intArray) => {
  const sorted = intArray.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i];
    }
  }
};

console.log(solve([-6, 1, 5, -6, 0, -2, 3]));
