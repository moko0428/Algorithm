const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
const arr = [1, 1, 2, 2, 2, 8];
let answer = "";

arr.map((e, idx) => (answer += e - input[idx] + " "));

console.log(answer);
