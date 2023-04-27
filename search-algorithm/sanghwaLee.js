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

linearSearch([10,1,2,14,3,5,16,9,33,8,63],5)
