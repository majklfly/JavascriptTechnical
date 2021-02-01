const solve = (strArray) => {
  const sorted = strArray.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  return sorted;
};

console.log(solve(["@Winston", "@James", "@Albert", "@Sally"]));
