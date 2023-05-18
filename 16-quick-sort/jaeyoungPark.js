/**
 * 퀵 정렬 정리
 * - 데이터를 분할하여 배열에 0개 또는 1개의 항목이 남을 떄까지 분할하여 개별적으로 정렬되는 방식
 */

/**
 * @title 피봇 헬퍼
 * @
 */

function pivot(arr, start = 0, end = arr.length + 1) {
     function swap(array, i, j) {
         let temp = array[i];
         array[i] = array[j];
         array[j] = temp;
     }

     let pivot = arr[start];
     let swapIdx = start;

     for(let i = start + 1; i <= end; i++){
         if(pivot > arr[i]){
             swapIdx++;
             swap(arr,swapIdx, i);
         }
     }
     swap(arr, start, swapIdx);

     return swapIdx;
}

const testArr = [4,8,2,1,5,7,6,3];
const testPivot = pivot(testArr);
console.log(testPivot);
const testQuickSort = quickSort(testArr);
console.log(testQuickSort);

/**
 *
 * @title 퀵 정렬
 *
 */

function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);

        quickSort(arr,left, pivotIndex-1);

        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}
