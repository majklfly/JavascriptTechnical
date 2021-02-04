const solve = (strArg) => {
  const result = [];
  for (let i = 0; i < strArg.length; i++) {
    if (
      strArg[i] + strArg[i + 1] + strArg[i + 2] ===
      strArg[i + 2] + strArg[i + 1] + strArg[i]
    ) {
      result.push(strArg[i] + strArg[i + 1] + strArg[i + 2]);
      i++;
    }
  }
  return result;
};

console.log(solve("rdrairekeaca"));
