// FIRST CHARACTER PROBLEM
const first_recurring = (given_string) => {
    const counts = {};
    let theLetter = "not found";
    const string_splitted = given_string.split("");
    for (let i = 0; i < string_splitted.length; i++) {
        if (string_splitted[i] in counts) {
            theLetter = string_splitted[i];
            break;
        }
        counts[string_splitted[i]] = true;
    }
    return theLetter;
};

console.log(first_recurring("Milchal"));

// DYNAMIC KNAPSACK
// const dynamicKnapsack = function(weightCap, weights, values) {
//     const numItem = weights.length;
//     const matrix = new Array(numItem);

//     for (let index = 0; index <= numItem; index++) {
//         matrix[index] = new Array(weightCap + 1);
//         for (let weight = 0; weight <= weightCap; weight++) {
//             // Write your code here:
//             if (index === 0 || weight === 0) {
//                 matrix[index][weight] = 0;
//             } else if (weights[index - 1] <= weight) {
//                 const includeItem =
//                     values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
//                 const excludeItem = matrix[index - 1][weight];
//                 matrix[index][weight] = Math.max(includeItem, excludeItem);
//             } else {
//                 matrix[index][weight] = matrix[index - 1][weight];
//             }
//         }
//     }
//     return matrix[numItem][weightCap];
// };

// // Use this to test your function:
// const weightCap = 50;
// const weights = [31, 10, 20, 19, 4, 3, 6];
// const val = [70, 20, 39, 37, 7, 5, 10];
// console.log(dynamicKnapsack(weightCap, weights, val));
//

// FIBONACCI WITH MEMOAZING

// const memo = {};

// const fibonacci = num => {
//   let returnValue;

//   if (memo[num]) {
//     returnValue = memo[num];
//   } else if (num === 0 || num === 1) {
//     returnValue = num;
//   } else {
//     returnValue = fibonacci(num - 1) + fibonacci(num - 2);
//     memo[num] = returnValue;
//   }
//   return returnValue;
// }

// console.log(fibonacci(20));
// console.log(fibonacci(200));

// CAPTURING WATER PROBLEM TWO POINTER SOLUTION

// function efficientSolution(heights) {
//     let totalWater = 0;
//     let leftPointer = 0;
//     let rightPointer = heights.length - 1;
//     let leftBound = 0;
//     let rightBound = 0;
//     while (leftPointer < rightPointer) {
//         console.log("leftPointer", leftPointer);
//         console.log("rightPointer", rightPointer);
//         if (heights[leftPointer] <= heights[rightPointer]) {
//             leftBound = Math.max(heights[leftPointer], leftBound);
//             totalWater += leftBound - heights[leftPointer];
//             leftPointer++;
//         } else {
//             rightBound = Math.max(heights[rightPointer], rightBound);
//             totalWater += rightBound - heights[rightPointer];
//             rightPointer--;
//         }
//     }
//     return totalWater;
// }

// const testArray = [4, 2, 1, 3, 0, 1, 2];
// console.log(efficientSolution(testArray));

// CAPTURING WATER PROBLEM NAIVE APPROACH

// function naiveSolution(heights) {
//     let totalWater = 0;
//     for (let i = 1; i < heights.length - 1; i++) {
//         let leftBound = 0;
//         let rightBound = 0;
//         // We only want to look at the elements to the left of i, which are the elements at the lower indices
//         for (let j = 0; j <= i; j++) {
//             leftBound = Math.max(leftBound, heights[j]);
//         }
//         // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
//         for (let j = i; j < heights.length; j++) {
//             rightBound = Math.max(rightBound, heights[j]);
//         }
//         console.log("leftBound", leftBound);
//         console.log("rightBound", rightBound);
//         console.log("height", heights[i]);
//         totalWater += Math.min(leftBound, rightBound) - heights[i];
//     }
//     return totalWater;
// }

// const heights = [4, 2, 1, 3, 0, 1, 2];
// console.log(naiveSolution(heights));