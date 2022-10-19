function solution(n) {
  let i = 6;
  while (i % n !== 0) {
    i += 6;
  }
  return i / 6;
}
