
function maxChars(string) {
    const dictionary = {}
    let maxValue = 0;
    let maxChar = "";

    const charArray = string.split("");
    charArray.forEach(char => dictionary[char] = dictionary[char] + 1 || 1 )

    for (char in dictionary) {
        if (dictionary[char] > maxValue) {
            maxValue = dictionary[char];
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxChars("Hello there"))

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