function solution(num, k){
  const idx = [...('' + num)].findIndex(n => +n === k);
  return idx === -1 ? -1 : idx + 1;
}
