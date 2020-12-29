// ALL CONSTRUCT PROBLEM

// const allConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1)
//         .fill()
//         .map(() => []);
//     table[0] = [
//         []
//     ];
//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 const newCombination = table[i].map((subArray) => [...subArray, word]);
//                 table[i + word.length].push(...newCombination);
//             }
//         }
//     }

//     return table[target.length];
// };

// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//     allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//     allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );

// COUNT CONSTRUCT PROBLEM

// const countConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(0);
//     table[0] = 1;
//     for (let i = 0; i <= target.length; i++) {
//         for (let word of wordBank) {
//             if (target.slice(i, i + word.length) === word) {
//                 table[i + word.length] += table[i];
//             }
//         }
//     }

//     return table[target.length];
// };

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//     countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//     countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );

// CAN CONSTRUCT PROBLEM

// const canConstruct = (target, wordBank) => {
//     const table = Array(target.length + 1).fill(false);
//     table[0] = true;

//     for (let i = 0; i < target.length; i++) {
//         if (table[i] === true) {
//             for (let word of wordBank) {
//                 if (target.slice(i, i + word.length) === word) {
//                     table[i + word.length] = true;
//                 }
//             }
//         }
//     }

//     return table[target.length];
// };

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//     canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//     canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );

// BESTSUM PROBLEM

// const bestSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(null);
//     table[0] = [];
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of numbers) {
//                 const combination = [...table[i], num];
//                 if (!table[i + num] || table[i + num].length > combination.length) {
//                     table[i + num] = combination;
//                 }
//             }
//         }
//     }

//     return table[targetSum];
// };

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// HOW SUM TABULATION

// const howSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(null);
//     table[0] = [];

//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] !== null) {
//             for (let num of numbers) {
//                 table[i + num] = [...table[i], num];
//             }
//         }
//     }

//     return table[targetSum];
// };

// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));

// CAN SUM TABULATION SOLUTION

// const canSum = (targetSum, numbers) => {
//     const table = Array(targetSum + 1).fill(false);
//     table[0] = true;
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i] === true) {
//             for (let num of numbers) {
//                 table[i + num] = true;
//             }
//         }
//     }
//     return table[targetSum];
// };

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));

// GRID TRAVELER TABULATION

// const gridTraveler = (m, n) => {
//     const table = Array(m + 1)
//         .fill()
//         .map(() => Array(n + 1).fill(0));
//     table[1][1] = 1;
//     for (let i = 0; i <= m; i++) {
//         for (let j = 0; j <= m; j++) {
//             const current = table[i][j];
//             if (i + 1 <= m) table[i + 1][j] += current;
//             if (j + 1 <= n) table[i][j + 1] += current;
//         }
//     }

//     return table[m][n];
// };

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// FIB WITH TABULATION

// const fib = (n) => {
//     const table = Array(n + 1).fill(0);
//     table[1] = 1;
//     for (let i = 0; i <= n; i++) {
//         table[i + 1] += table[i];
//         table[i + 2] += table[i];
//     }
//     return table[n];
// };

// console.log(fib(6));

// ALL CONSTRUCT PROBLEM

// const allConstruct = (target, wordBank, memo = {}) => {
//     if (target in memo) return memo[target];
//     if (target === "") return [
//         []
//     ];

//     const result = [];

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             const suffixWays = allConstruct(suffix, wordBank, memo);
//             const targetWays = suffixWays.map((way) => [word, ...way]);
//             result.push(...targetWays);
//         }
//     }

//     memo[target] = result;
//     return result;
// };

// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//     allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//     allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );

// COUNT CONSTRUCT PROBLEM

// const countConstruct = (target, wordBank, memo = {}) => {
//     if (target in memo) return memo[target];
//     if (target === "") return 1;
//     let total = 0;

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const numWaysForRest = countConstruct(
//                 target.slice(word.length),
//                 wordBank,
//                 memo
//             );
//             total += numWaysForRest;
//         }
//     }

//     memo[target] = total;
//     return total;
// };

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//     countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//     countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );

// CAN CONSTRUCT STRING PROBLEM

// const canConstruct = (target, wordBank, memo = {}) => {
//     if (target in memo) return memo[target];
//     if (target === "") {
//         return true;
//     }

//     for (let word of wordBank) {
//         if (target.indexOf(word) === 0) {
//             const suffix = target.slice(word.length);
//             if (canConstruct(suffix, wordBank, memo) === true) {
//                 memo[target] = true;
//                 return true;
//             }
//         }
//     }

//     memo[target] = false;
//     return false;
// };

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//     canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//     canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );

// BESTSUM PROBLEM

// const bestSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderCombination = bestSum(remainder, numbers, memo);
//         if (remainderCombination !== null) {
//             const combination = [...remainderCombination, num];
//             if (
//                 shortestCombination === null ||
//                 combination.length < shortestCombination.length
//             ) {
//                 shortestCombination = combination;
//             }
//         }
//     }

//     memo[targetSum] = shortestCombination;
//     return shortestCombination;
// };

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// HOWSUM PROBLEM

// const howSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (let num of numbers) {
//         console.log("targetSum", targetSum);
//         console.log("num", num);
//         const remainder = targetSum - num;
//         console.log("remainer", remainder);
//         const remainderResult = howSum(remainder, numbers, memo);
//         if (remainderResult !== null) {
//             memo[targetSum] = [...remainderResult, num];
//             return memo[targetSum];
//         }
//     }
//     memo[targetSum] = null;
//     return null;
// };
// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));

// CANSUM PROBLEM
// const canSum = (targetSum, numbers, memo = {}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         if (canSum(remainder, numbers, memo) === true) {
//             memo[targetSum] = true;
//             return true;
//         }
//     }
//     memo[targetSum] = false;
//     return false;
// };

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));

// GRID TRAVELLER
// const gridTraveler = (m, n, memo = {}) => {
//     const key = m + "," + n;
//     if (key in memo) return memo[key];
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
//     return memo[key];
// };

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));