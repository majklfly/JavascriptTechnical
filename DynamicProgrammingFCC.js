// CAN CONSTRUCT STRING PROBLEM

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