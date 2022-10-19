function solution(hp){
  const f = Math.floor(hp / 5);
  const s = Math.floor(hp - f * 5) / 3;
  const t = hp - f * 5 - s * 3;
  return f + s + t;
}                      
