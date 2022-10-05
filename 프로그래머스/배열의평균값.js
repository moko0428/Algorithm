function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  let result = sum / numbers.length;
  return result;
}
