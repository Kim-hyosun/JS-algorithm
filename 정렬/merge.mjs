/* 
merge sort
성능 : O(nlogn)

장점 : 성능이 좋음 
단점 : 이해와 구현이 어려움 
*/


const mergeSort = (arr, leftIdx, rightIdx) => {
    if(leftIdx < rightIdx){
        let midIdx = parseInt((leftIdx + rightIdx) / 2);
        mergeSort(arr, leftIdx, midIdx);
        mergeSort(arr, midIdx + 1, rightIdx);
        lastMerge(arr, leftIdx, midIdx, rightIdx);
    }
}

const lastMerge = (arr, leftIdx, midIdx, rightIdx) => {
    let leftAreaIdx = leftIdx;
    let rightAreaIdx = midIdx + 1;

    let tempArr = [];
    tempArr.length = rightIdx + 1;
    tempArr.fill(0, 0, rightIdx + 1);

    let tempArrIdx = leftIdx;

    while(leftAreaIdx <= midIdx && rightAreaIdx <= rightIdx){
       if(arr[leftAreaIdx] < arr[rightAreaIdx]){
            tempArr[tempArrIdx] = arr[leftAreaIdx++]
       } else {
            tempArr[tempArrIdx] = arr[rightAreaIdx++];
       } 
        tempArrIdx++;
    }

    if(leftAreaIdx > midIdx){ //오른쪽 영역이 병합이 덜된 경우
        for(let i = rightAreaIdx ; i <= rightIdx ; i++){
            tempArr[tempArrIdx++] = arr[i];
        }
    } else {
        for(let i = leftAreaIdx ; i <= midIdx ; i++){
            tempArr[tempArrIdx++] = arr[i]
        }
    }

    for(let i = leftIdx ; i <= rightIdx ; i++){
        arr[i] = tempArr[i];
    }
}


let arr = [5,2,6,2,8,2,9,1];
console.log("==정렬전==")
console.log(arr)

mergeSort(arr, 0, arr.length - 1)

console.log("==정렬후==")
console.log(arr);

/* 
==정렬전==
[5, 2, 6, 2, 8, 2, 9, 1]
==정렬후==
[1, 2, 2, 2, 5, 6, 8, 9]
*/

