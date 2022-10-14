const readline = require('readline');
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function(line){
  input = line.split(' '); //input 배열을 split으로 잘라서 문자열로 반환
}).on('close', function(){
  for(let i = 1; i<input[0]; i++){ //input[0] 입력 값 만큼 반복
    console.log('*', repeat[i]); //repeat(i) i만큼 반복 출력
  }
});
