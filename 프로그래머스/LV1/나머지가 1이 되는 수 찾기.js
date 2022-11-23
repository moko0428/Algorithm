function solution(n){
  for(let i = 2; i < n; i++){
    if(n%i === 1) return i;
  }
}
  
function mySolution(n) {
    let answer = [];
    for(let i = 1; i<n; i++){
        if(n%i === 1) answer.push(i);
    }
    return Math.min.apply(null,answer);
}
