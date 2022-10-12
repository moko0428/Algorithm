function solution(my_string) {
  return my_string.replace(/[oauie]/g, "");
}

//replace 조건에 해당하는 값을 ''로 바꾼 후 문자열을 반환
//g 전역 탐색
