function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const count = n % a;
    n = Math.floor(n / a) * b;
    answer += n;

    n += count;
  }
  return answer;
}
