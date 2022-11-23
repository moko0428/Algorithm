function solution(a, b) {
    let answer = [];
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    for(let i = min; i<=max; i++){
        answer.push(i);
    }
    return answer.reduce((a,c)=>a+c,0);
}
