/*
    코딩 연습 8: Sliding Window - minSubArrayLen
    minSubArrayLen이라는 함수를 작성합니다. minSubArrayLen은 양의 정수 배열과 양의 정수 배열의 두 가지 매개 변수를 허용합니다.
    이 함수는 합계가 함수에 전달된 정수보다 크거나 같은 연속 하위 배열의 최소 길이를 반환해야 합니다. 0이 없으면 0을 반환합니다.
*/
function minSubArrayLen(arr, val) {
    // 지문과 예시를 이해하지 못하여 해답지를 보았으나, 해결하지 못하였습니다..
}
console.log('function minSubArrayLen');
console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));// 0