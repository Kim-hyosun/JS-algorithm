function power(x, n) {
  //x의 n제곱을 구하는 함수
  if (n == 0) return 1; //기저조건 : 0제곱은 1
  return power(x, n - 1) * x;
}
console.log(power(2, 10));
