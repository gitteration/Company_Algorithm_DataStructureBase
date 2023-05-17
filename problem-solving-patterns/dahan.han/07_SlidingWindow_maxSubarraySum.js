/*
    코딩 연습 7: Sliding Window - maxSubarraySum
    정수 배열과 숫자가 주어지면 maxSubarraySum이라는 함수를 작성합니다.
    함수에 전달된 숫자의 길이로 하위 배열의 최대 합계를 찾습니다.
    하위 배열은 원래 배열의 연속된 요소로 구성되어야 합니다.
    아래의 첫 번째 예에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.
*/
function maxSubarraySum(arr, val) {
    if (arr.length < val) return null;

    // val 인자로 전달 받은 만큼의 합을 먼저 변수에 저장 = 비교군 생성
    let total = 0; // ex:300
    for (let i=0; i<val; i++){
        total += arr[i];
    }
    //console.log('init total:', total);

    // 임의 변수에 비교군 값 초기화
    let tmp = total;

    // 0~val의 값은 이미 total에 넣었으니, vla ~ 이후 부터 반복문
    for (let i = val; i < arr.length; i++) {
        //arr[100,200,300,400] / val=2 : i=2
        tmp += arr[i] - arr[i-val]; // 300 - 100 = 200
        total = Math.max(total, tmp); // 200과 300중 비교
        //console.log('total:', total);
    }
    return total;
}
console.log('function maxSubarraySum');
console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null