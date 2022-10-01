const input = require("fs").readFileSync("dev/stdin").toString().split(" ");
console.log(parseFloat(input[0]) / parseFloat(input[1]));
