const solve = (arrOne, arrTwo) => {
  const shorterArray = arrOne.length > arrTwo.length ? arrTwo : arrOne;
  const longerArray = arrOne.length > arrTwo.length ? arrOne : arrTwo;
  const result = [];
  longerArray.forEach((number) => {
    if (shorterArray.includes(number) && !result.includes(number)) {
      result.push(number);
    }
  });
  return result;
};

console.log(
  solve(
    [2, 3, 4, 7, 10, 5, 4, 2, 1000],
    [3, 7, 10, 2, 2, 7, 7, 2, 1, 5, 4, 5, 1, 1, -1, 2]
  )
);
