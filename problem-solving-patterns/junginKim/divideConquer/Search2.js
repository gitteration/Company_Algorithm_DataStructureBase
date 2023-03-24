/**
 * 문제를 이해하라
 * 문제를 해결할 바탕이 되는 계획들을 세워라
 * 작성한 내용들을 다 지우고, 다시 시작해서 계획들을 세워라
 * 해결 가능한 문제들은 풀고, 불가한 문제들은 단순화시켜라
 * 회고하고, 리팩토링하라
 */


/**
 * 오름차순 정렬된 integer 배열이 들어왔을 때, number 로 들어온 parameter 가 배열의 어느 요소에 있는지 구하라
 *
 * search([1,2,3,4,5,6],4)  // 3
 * search([1,2,3,4,5,6], 5 // 5
 * search([1,2,3,4,5,6], 11 // -1
 */

function search(arr, num) {

    let min = 0;
    let max = arr.length -1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < num) {
            min = middle + 1;
        } else if (arr[middle] > num) {
            max = middle -1;
        } else {
            return middle+1;
        }
    }


    return -1;
}



console.log("maxSubarraySum2 : " + search([1,2,3,4,5,6],4));  // 4
console.log("maxSubarraySum2 : " + search([1,2,3,4,5,6], 5));  // 5
console.log("maxSubarraySum2 : " + search([1,2,3,4,5,6], 11)); // -1