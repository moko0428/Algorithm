function solution(n) {
  return [...("" + n)].map((num) => +num).reduce((a, c) => a + c, 0);
}

function solution(n) {
  var answer = 0;
  let j = n;
  for (let i = 0; i < j; i++) {
    answer += n % 10;
    n = Math.floor(n / 10);
  }
  return answer;
}
