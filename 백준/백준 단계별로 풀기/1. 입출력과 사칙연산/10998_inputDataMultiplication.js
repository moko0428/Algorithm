//방법 1
const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A * B);

//방법 2
const fs = require("fs");
const [a, b] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

console.log(a * b);
