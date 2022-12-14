function solution(arrayA, arrayB) {
    for(let i = 7; i < 120; i++){
        if(arrayA[0]%i === 0 && arrayA[1]%i === 0 || arrayB[0]%i === 0 && arrayB[1]%i === 0) return i 
        
    }
    return 0
}
