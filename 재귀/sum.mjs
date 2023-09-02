function sum(arr) {
  //배열의 엘리먼트를 모두 더하는 함수
  if (arr.length == 1) return arr[0]; //기저조건 : 배열의 el가 1개이면
  return sum(arr.slice(0, -1)) + arr[arr.length - 1];
  //arr의 0번 인덱스 ~ -1(마지막)인덱스 전 까지 sum 을 하고,
  //마지막 인덱스를 더해줌
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr));
