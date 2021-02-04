const solve = (intArray, k) => {
  const outerArray = [];
  let innerArray = [];
  let counter = 0;
  intArray.forEach((num) => {
    if (counter < k) {
      innerArray.push(num);
      counter++;
    } else {
      outerArray.push(Math.max(...innerArray));
      innerArray = [num];
      counter = 1;
    }
  });
  outerArray.push(Math.max(...innerArray));
  return outerArray;
};

console.log(solve([10, 9, 3, 6, 2, 8, 2, 0, 35], 3));
