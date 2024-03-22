/* 
insertion sort
*/

const insertionAsc = (arr) => {
    for(let i = 1; i < arr.length ; i++){
        let insertionValue = arr[i];
        let j;
        for(j = i - 1 ; j >= 0 ; j--){
            if(arr[j] > insertionValue){
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = insertionValue;
    }
}

let arr = [3,6,2,7,1,8];
console.log("==정렬전==")
console.log(arr);

insertionAsc(arr);

console.log("==정렬후==")
console.log(arr);

/* 
==정렬전==
[ 3, 6, 2, 7, 1, 8 ]
==정렬후==
[ 1, 2, 3, 6, 7, 8 ]
*/


const insertionDesc = (arr) => {
    for(let i = 1; i < arr.length ; i++){
        let insertionValue = arr[i];
        let j;
        for(j = i - 1 ; j >= 0 ; j--){
            if(arr[j] < insertionValue){
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = insertionValue;
    }
}

let arrDesc = [3,6,2,7,1,8];
console.log("==정렬전==")
console.log(arrDesc);

insertionDesc(arrDesc);

console.log("==정렬후==")
console.log(arrDesc);

/* 
==정렬전==
[ 3, 6, 2, 7, 1, 8 ]
==정렬후==
[ 8, 7, 6, 3, 2, 1 ]
*/