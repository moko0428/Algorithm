function solution(price, money, count) {
  let answer = 0;
  for (let i = 0; i <= count; i++) {
    answer += price * i;
  }
  if (answer < money) {
    return (answer = 0);
  }
  return Math.abs(money - answer);
}
