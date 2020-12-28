// ALL CONSTRUCT PROBLEM

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [
        []
    ];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map((way) => [word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
    allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
    allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);

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