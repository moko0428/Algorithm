function solution(s1, s2) {
  return s1.filter((s) => s2.includes(s2)).length;
}
//filter 조건에 해당되는 모든 요소를 새로운 배열로 반환
//includes 배열에 특정 요소가 들어있는지 판별
