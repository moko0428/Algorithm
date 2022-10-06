function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) answer += i;
  }
  return answer;
}

//베스트
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
