
function anagrams(stringA, stringB) {
    //normalize strings
    const normstrA = stringA.toLowerCase().match(/[a-z]/g).sort().join("")
    const normstrB = stringB.toLowerCase().match(/[a-z]/g).sort().join("")
    return normstrA === normstrB
}

console.log(anagrams("rail safety", "fairy tales"))

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