/**
 * 24번 연습문제
 * @author sanghwa
 * @createDate 2023/04/27
 **/
function linearSearch(arr, searchValue){
    let result = -1;
    for(index in arr){
        if(arr[index] === searchValue){
            result = index;
        }
    }
    return Number(result);
}

// linearSearch([10,1,2,14,3,5,16,9,33,8,63],5)


function binarySearch(arr, searchValue){
    let result = -1;
    let start = 0;
    let middle = Math.floor((arr.length-1)/2);
    let end = arr.length;
    while(true){
        if(arr[middle] === searchValue){
            result = middle;
            break;
        }

        if(arr[middle] > searchValue){
            end = middle;
            middle = Math.floor((middle - start)/2);
        }else if(arr[middle] < searchValue){
            start = middle;
            middle =start + Math.floor((end - middle)/2);
        }
    }
    console.log(result)
    return result;
}
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
