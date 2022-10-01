//방법 1
let input = require("fs").readFileSync("dev/stdin").toString().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);

//방법 2
const fs = require("fs");
const [a, b] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);
