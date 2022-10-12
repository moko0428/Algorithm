function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map((str) => +str)
    .sort((a, b) => a - b);
}

//g 전역탐색
//map(str=>+str) 문자열을 int형으로 변환
//sort((a, b) => a - b) 오름차순 (b-a) 내림차순
