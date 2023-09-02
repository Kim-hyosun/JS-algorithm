function strLength(arr) {
  //문자열의 길이를 구하는 함수
  if (arr[0] == null) return 0; //기저조건 : 빈문자열이라면 ? 0 개의 길이
  return strLength(arr.slice(0, -1)) + 1;
}
let str = 'abcdefghijklmnopqrstuvwxyz';
console.log(strLength(str));
