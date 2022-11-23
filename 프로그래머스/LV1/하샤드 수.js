function solution(x) {
    let a = 0;
    x = x.toString();
    for(let i = 0; i<x.length; i++){
        a += parseInt(x[i]);
    }
    return x%a === 0;
}

