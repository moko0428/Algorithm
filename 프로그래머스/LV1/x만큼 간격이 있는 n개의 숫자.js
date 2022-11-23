function solution(n,x){
    return Array(n).fill(x).map((v,i)=>(i+1)*v)
}

function mySolution(x, n) {
    let answer = 0;
    let array = [];
    for(let i = 0; i<n; i++){
        answer += x;
        array.push(answer);
    }
    return array;
}
