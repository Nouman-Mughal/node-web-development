// const math = require('./math');
// for (var num = 1; num < 800; num++) {
// let now = new Date().toISOString();
// console.log(`${now} Fibonacci for ${num} = ${math.fibonacci(num)}`);
// }
const math = require('./math');
(async () => {
for (var num = 1; num < 8000; num++) {
await new Promise((resolve, reject) => {
math.fibonacciAsync(num, (err, fibo) => {
if (err) reject(err);
else {
let now = new Date().toISOString();
console.log(`${now} Fibonacci for ${num} =
${fibo}`);
resolve();
}
})
})
}
})().catch(err => { console.error(err); });