function problem4(word) {
  let upper = {};
  let lower = {};
  let result = "";

  for (let i = 97; i <= 122; i++) {
    //아스키 코드를 대, 소문자 딕셔너리에 추가
    upper[String.fromCharCode(i - 32)] = String.fromCharCode(219 - i - 32);
    lower[String.fromCharCode(i)] = String.fromCharCode(219 - i);
  }
  for (let i = 0; i < word.length; i++) {
    upper[word[i]] //대문자
      ? (result += upper[word[i]])
      : lower[word[i]] //소문자
      ? (result += lower[word[i]])
      : (result += word[i]); //예외처리
  }
  return result;
}

module.exports = problem4;
