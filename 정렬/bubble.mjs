/* 
버블정렬은 n회차 돌수록 
정렬하고자 하는 마지막 범위 n개가 자리를 찾음

옆자리 값끼리 비교함

n번반복해야 n개가 정렬됨 

버블정렬의 성능 = 등차수열의 합 (n제곱 - n / 2)
O(n^2)

장점 : 이해와 구현이 간단
단점 : 성능이 좋지 않음
*/

const bubbleSortAsc = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];   //임시변수에 보관
                arr[j] = arr[j + 1]; //재할당
                arr[j + 1] = temp;
            }
        }
    }
}

let arrAsc = [5,4,3,2,1];

console.log("==정렬전==")
console.log(arrAsc);

bubbleSortAsc(arrAsc);

console.log("==정렬후==")
console.log(arrAsc);

/* 
==정렬전==
[ 5, 4, 3, 2, 1 ]
==정렬후==
[ 1, 2, 3, 4, 5 ]
*/


const bubbleSortDesc = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < (arr.length - i - 1); j++){
            if(arr[j] < arr[j + 1]){
                let temp = arr[j];   //임시변수에 보관
                arr[j] = arr[j + 1]; //재할당
                arr[j + 1] = temp;
            }
        }
    }
}

let arrDesc = [5,8,3,5,1];

console.log("==정렬전==")
console.log(arrDesc);

bubbleSortDesc(arrDesc);

console.log("==정렬후==")
console.log(arrDesc);

/* 
==정렬전==
[ 5, 8, 3, 5, 1 ]
==정렬후==
[ 8, 5, 5, 3, 1 ]
*/