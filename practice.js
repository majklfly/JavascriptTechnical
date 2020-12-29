var b = 1;

function outer() {
    var b = 2;

    function inner() {
        b++;
        var b = 3;
        console.log(b);
    }
    inner();
}
outer();

// const Fizzbuzz = (number) => {
//     let string = "";
//     for (let i = 0; i <= number; i++) {
//         if (i % 3 === 0 && i % 3 === 0) {
//             string += "fizzbuzz";
//         }
//         if (i % 3 === 0) {
//             string += "fizz";
//         }
//         if (i % 5 === 0) {
//             string += "buzz";
//         } else {
//             string += i;
//         }
//     }
//     return string;
// };

// console.log(Fizzbuzz(100));

// const fib = (num, memo = {}) => {
//     if (num in memo) return memo[num];
//     if (num < 2) return num;
//     memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
//     return memo[num];
// };

// const fib = (num) => {
//     const table = Array(num + 1).fill(null);
//     table[0] = 0;
//     table[1] = 1;
//     for (let i = 2; i <= num; i++) {
//         table[i] = table[i - 1] + table[i - 2];
//     }
//     return table[num];
// };

// console.log(fib(4));
// console.log(fib(15));