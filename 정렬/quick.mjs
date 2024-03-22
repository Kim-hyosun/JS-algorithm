/* 
quick sort 
*/
const quick = (arr, left, right) => {
    if(left >= right){
        let pivot = divide(arr, left, right);
        quick(arr, left, pivot - 1);
        quick(arr, pivot + 1, right);
    }
}