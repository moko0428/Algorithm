function solution(n) {
  return n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((a, c) => a + c);
}
