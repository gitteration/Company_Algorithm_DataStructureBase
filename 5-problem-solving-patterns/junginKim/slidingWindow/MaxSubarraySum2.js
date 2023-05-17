/**
 * 문제를 이해하라
 * 문제를 해결할 바탕이 되는 계획들을 세워라
 * 작성한 내용들을 다 지우고, 다시 시작해서 계획들을 세워라
 * 해결 가능한 문제들은 풀고, 불가한 문제들은 단순화시켜라
 * 회고하고, 리팩토링하라
 */


/**
 *  배열과 숫자 하나를 전달하고, 서로 마주한 두 숫자의 가장 큰 합계를 찾아내는 것
 *  숫자 하나는 배열의 요소 중 몇개를 합계를 내서 가장 큰 값이 나오는지에 대한 변수
 *  maxSubarraySum2(1,2,5,2,8,1,5],2)  // 10
 *  maxSubarraySum2(1,2,5,2,8,1,5],4)  // 17
 *  maxSubarraySum2(4,2,1,6],1) // 6
 *  maxSubarraySum2(4,2,1,6,2],4) // 13
 *  maxSubarraySum2(],4) // null
 */


function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i=0; i<arr.length - num + 1; i++) {
        let temp = 0;
        for (let j=0; j<num; j++) {
            temp += arr[i+j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log("maxSubarraySum2 : " + maxSubarraySum([1,2,5,2,8,1,5],2))  // 10
console.log("maxSubarraySum2 : " + maxSubarraySum([1,2,5,2,8,1,5],4))  // 17
console.log("maxSubarraySum2 : " + maxSubarraySum([4,2,1,6],1)) // 6
console.log("maxSubarraySum2 : " + maxSubarraySum([4,2,1,6,2],4)) // 13
console.log("maxSubarraySum2 : " + maxSubarraySum([],4)) // null