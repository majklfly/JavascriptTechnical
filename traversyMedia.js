

// function evenOddSums(arr) {
//     let totalOdds = 0;
//     let totalEvens = 0;

//     arr.forEach(number => {
//         if (number % 2 === 0) {
//             totalEvens += number;
//         } else {
//             totalOdds += number
//         }
//     })

//     return [totalOdds, totalEvens]

// }

// console.log(evenOddSums([50, 60, 60, 45, 71]))

// function missingLetters(string) {
//     let compare = string.charCodeAt(0);
//     let missing;
//     string.split("").map((char, index) => {
//         if(string.charCodeAt(index) == compare) {
//             compare++;
//         } else {
//             missing = String.fromCharCode(compare)
//         }
//     })

//     return missing
// }


// returns "d"
// console.log(missingLetters("abce"))

// function sortByHeight(a) {
//     const arr1 = [];
//     const arr2 = [];

//     a.forEach((val, i) => {
//         if (val === -1) {
//             arr1.push(i)
//         } else {
//             arr2.push(val)
//         }
//     })

//     const sorted = arr2.sort((a, b) => a - b);
    
//     arr1.forEach((val, i) => sorted.splice(arr1[i], 0, -1))

//     return sorted
// }

// const a = [-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(a))

// function seekAndDestroy(arr) {
//     const args = Array.from(arguments)

//     function filterArr(arr) {
//         return args.indexOf(arr) === -1
//     }

//     return arr.filter(filterArr)
// }
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

// function sumAllPrimes(num) {
//     num === 0 && 0;
//     num === 1 && 1;
//     let sum = 0
//     for (let i = 2; i <= num; i++) {
//         if (i % i === 0)
//     }
// }

// console.log(sumAllPrimes(10))

// function addAll() {
//     let total = 0;
//     for (let i in arguments) {
//         total += arguments[i]
//     }
//     return total;
// }

// console.log(addAll(1, 2, 3, 4));

// function letterChanges(str) {
//     let newStr = str.replace(/[a-z]/gi, (char) => {
//         if (char === "z" || char === 'Z') {
//             return 'a'
//         } else {
//             return String.fromCharCode(char.charCodeAt() + 1)
//         }
//     })
//     return newStr
// }

// console.log(letterChanges('hello there'))

// const isAnagrama = (str1, str2) => {
//     const cleanedstr1 = str1.toLowerCase().match(/[a-z]+/g)[0]
//     const cleanedstr2 = str2.toLowerCase().match(/[a-z]+/g)[0]

//     const sortedstr1 = cleanedstr1.split("").sort().join();
//     const sortedstr2 = cleanedstr2.split("").sort().join();

//     return sortedstr1 === sortedstr2


// }

// console.log(isAnagrama("elbow&*$#", 'below&*'));

// function flattenArray(array) {
//     return array.reduce((accumulator, value) => accumulator.concat(value))
// }

// console.log(flattenArray([[1,2], [3,4], [5,6], [7]]))

// function chunkArray(arr, len) {
//     const chunkedrray = [];
//     let i = 0;
//     while (i < arr.length) {
//         chunkedrray.push(arr.slice(i, i+len));
//         i += len;
//     }
//     return chunkedrray
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))

// function longestWord(sen) {
//     // normalize
//     const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);

//     //sort
//     const sorted = wordArray.sort((a,b) => b.length - a.length)

//     // return array if multiple
//     const longestWordArr = sorted.filter((word) => {
//         return word.length === sorted[0].length
//     })

//     if (longestWordArr.length === 1) {
//         return longestWordArr[0]
//     } else {
//         return longestWordArr
//     }
// }

// console.log(longestWord('Hello there, my name is Brad'));

// function maxCharacter(str) {
//     const charMap = {}
//     let maxNum = 0;
//     let maxChar = "";
//     str.split("").forEach(char => {
//         if(charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1;
//         }

//     })

//     for (let char in charMap) {
//         if (charMap[char] > maxNum) {
//             maxNum = charMap[char]
//             maxChar = char;
//         }
//     }

//     return maxChar
// }

// console.log(maxCharacter('javascript'))
