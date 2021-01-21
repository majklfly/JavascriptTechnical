// function fib(n, memo = {}) {
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n < 2) {
//     return n;
//   }

//   const result = fib(n - 1) + fib(n - 2);
//   memo[n] = result;
//   return result;
// }

// console.log(fib(30));

// function matrix(n) {
//   const results = [];

//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;

//   while (startColumn <= endColumn && startRow <= endRow) {
//     //top row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     }
//     startRow++;

//     //rightColumn
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endColumn] = counter;
//       counter++;
//     }
//     endColumn--;

//     //bottom row
//     for (let i = endColumn; i >= startRow; i--) {
//       results[endRow][i] = counter;
//       counter++;
//     }
//     endRow--;

//     //start column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     }
//     startColumn++;
//   }

//   return results;
// }

// console.log(matrix(5));

// function isVowel(char) {
//   const vowelsArray = ["a", "e", "i", "o", "u"];
//   return vowelsArray.includes(char);
// }

// function vowels(str) {
//   const normalized = str.toLowerCase();
//   let total = 0;
//   const charArray = normalized.split("");
//   charArray.forEach((char) => {
//     if (isVowel(char)) {
//       total++;
//     }
//   });
//   return total;
// }

// console.log(vowels("Why do yoU ask?"));

// function pyramid(n, row = 0, level = "") {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;

//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = "#";
//   } else {
//     add = " ";
//   }

//   pyramid(n, row, level + add);
// }

// pyramid(5);

// function printNumber(n) {
//   if (n === 0) {
//     return;
//   }

//   console.log(n);
//   printNumber(n - 1);
// }

// printNumber(10);

// function steps(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   if (stair.length <= row) {
//     stair += "#";
//   } else {
//     stair += " ";
//   }

//   steps(n, row, stair);
// }

// steps(3);

// function capitalize(str) {
//   const wordsArray = str.split(" ");
//   const updatedArray = [];
//   wordsArray.forEach((word) => {
//     updatedArray.push(word[0].toUpperCase() + word.substring(1));
//   });
//   const joinedUpdatedVersion = updatedArray.join(" ");
//   return joinedUpdatedVersion;
// }

// console.log(capitalize("look, it is working!"));

// function anagrams(stringA, stringB) {
//     //normalize strings
//     const normstrA = stringA.toLowerCase().match(/[a-z]/g).sort().join("")
//     const normstrB = stringB.toLowerCase().match(/[a-z]/g).sort().join("")
//     return normstrA === normstrB
// }

// console.log(anagrams("rail safety", "fairy tales"))

// function chunk(array, size) {
//     let arr1 = [];
//     let arr2 = [];

//     array.forEach(value => {
//         if (arr2.length < size) {
//             arr2.push(value)
//         } else {
//             arr1.push(arr2)
//             arr2 = []
//             arr2.push(value)
//         }

//     })
//     if(arr2.length !== 0) {
//         arr1.push(arr2)
//     }
//     return arr1
// }

// console.log(chunk([1, 2, 3, 4, 5], 1))

// function FizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }
// FizzBuzz(100)

// function maxChars(string) {
//     const dictionary = {}
//     let maxValue = 0;
//     let maxChar = "";

//     const charArray = string.split("");
//     charArray.forEach(char => dictionary[char] = dictionary[char] + 1 || 1 )

//     for (char in dictionary) {
//         if (dictionary[char] > maxValue) {
//             maxValue = dictionary[char];
//             maxChar = char
//         }
//     }
//     return maxChar
// }

// console.log(maxChars("Hello there"))

// function reverseInt(number) {
//     const string = number.toString()
//     let reversed = string.split("").reverse().join("")
//     if (number < 0) {
//         reversed = "-" + reversed
//     }
//     return parseInt(reversed)
// }

// console.log(reverseInt(-154))

// function palindrome(str) {
//     const reversed = str.split("").reverse().join("")
//     return reversed === str
// }

// console.log(palindrome("ollo"))

// function reverse(string) {
//     const charArray = string.split("");
//     const result = charArray.reduce((acc, cur) => {
//         return cur + acc
//     })
//     return result
// }

// console.log(reverse('hello'))
