function solution(n){
  let arr = [];
  for(let i = 1; i <= n; i++){
    if(n%i === 0) arr = [...arr, i, n / i];
  }
  if(Number.isInteger(Math.sqrt(n))) arr = [...arr, Math.sqrt(n)];
  return arr.sort((a, b) => a - b);
}
