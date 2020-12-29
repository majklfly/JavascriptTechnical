// const fib = (num, memo = {}) => {
//     if (num in memo) return memo[num];
//     if (num < 2) return num;
//     memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
//     return memo[num];
// };

const fib = (num) => {
    const table = Array(num + 1).fill(null);
    table[0] = 0;
    table[1] = 1;
    for (let i = 2; i <= num; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[num];
};

console.log(fib(4));
console.log(fib(15));