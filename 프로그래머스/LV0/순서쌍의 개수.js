function solution(n) {
  let sum = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) sum += 2;
  }
  return Number.isInteger(Math.sqrt(n)) ? sum + 1 : sum;
}
