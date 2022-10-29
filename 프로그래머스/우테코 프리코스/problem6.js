function problem6(forms) {
  let Array = [];
  let arr = [];
  let email = [];
  //이름만 추출하기
  for (let i = 0; i < forms.length; i++) {
    Array.push(forms[i][1]);
  }
  //제이가 들어간 문자열만 뽑아오기
  //빈 자리에 공백을 넣어주자.
  for (let i = 0; i < Array.length; i++) {
    if (Array[i].includes("제이")) {
      arr.push(Array[i]);
    } else {
      arr.push("");
    }
  }
  //arr에 뽑아온 "제이"가 들어있는 문자열과 forms의 문자열과 비교해 같으면 이메일을 email에 넣어준다.
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1] === arr[i]) {
      email.push(forms[i][0]);
    }
  }
  return email.sort();
}

module.exports = problem6;
