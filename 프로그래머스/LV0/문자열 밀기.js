function solution(A, B) {
   return A.slice(-1)+A.slice(0,-1) === B ? 1 : A===B ? 0 : -1 
}
//테스트 3,5,6 통과
