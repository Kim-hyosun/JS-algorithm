/* 
selection sort
정렬하고자 하는 원소의 값을 가지고 
정렬되지 않은 영역을 모두 비교하여 값을 교체함

정렬이 완료된 영역은 참조 하지 않음

성능 : O(n^2)

장점 : 이해쉽고 구현빠름
단점 : 성능 별로임
*/

const selectionAsc = (arr) => {
    for(let i = 0 ; i < arr.length ; i++){
        let minValueIdx = i;

        for(let j = i + 1; j < arr.length ; j++){
            if(arr[j] < arr[minValueIdx]){
                minValueIdx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minValueIdx];
        arr[minValueIdx] = temp;
    }
}

const arrAsc = [1,2,35,36,4,2,6];

console.log("==정렬전==");
console.log(arrAsc);

selectionAsc(arrAsc);

console.log("==정렬후==");
console.log(arrAsc);

/* 
==정렬전==
[1, 2, 35, 36, 4, 2, 6]
==정렬후==
[1, 2, 2, 4, 6, 35, 36]
 */


const selectionDesc = (arr) => {
    for(let i = 0 ; i < arr.length ; i++){
        let minValueIdx = i;

        for(let j = i + 1; j < arr.length ; j++){
            if(arr[j] > arr[minValueIdx]){
                minValueIdx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minValueIdx];
        arr[minValueIdx] = temp;
    }
}

const arrDesc = [1,2,35,36,4,2,6];

console.log("==정렬전==");
console.log(arrDesc);

selectionDesc(arrDesc);

console.log("==정렬후==");
console.log(arrDesc);

/* 
==정렬전==
[1, 2, 35, 36, 4, 2,  6]
==정렬후==
[36, 35, 6, 4, 2, 2, 1]
 */