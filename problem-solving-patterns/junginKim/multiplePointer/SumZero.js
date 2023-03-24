/**
 * 문제를 이해하라
 * 문제를 해결할 바탕이 되는 계획들을 세워라
 * 작성한 내용들을 다 지우고, 다시 시작해서 계획들을 세워라
 * 해결 가능한 문제들은 풀고, 불가한 문제들은 단순화시켜라
 * 회고하고, 리팩토링하라
 */

/**
 * 정렬된 배열을 취하는 sumZero 라는 함수를 작성해라
 * 분류(assorted) 가 아닌 정렬(assorted) 된 배열이어야 한다.
 * 다만 오름차순이어야 한다.
 *
 * sumZero([-3,-2,-1,0,1,2,3) -> [-3,3]
 * sumZero([-2,0,1,3]) -> undefined
 * sumZero([1,2,3]) -> undefined
 */


function sumZero(array) {

    for (let i=0; i<array.length; i++) {
        for (let j= i+1; j<array.length; j++) {
            if (array[i] + array[j] === 0) {
                return [array[i], array[j]]
            }
        }
    }
}


let array1 = [-3,-2,-1,0,1,2,3];
let array2 = [-2,0,1,3];
let array3 = [1,2,3];
let array4 = [-4,-3,-2,-1,0,1,2,5];

console.log("sumZero : " + sumZero(array1));
console.log("sumZero : " + sumZero(array2));
console.log("sumZero : " + sumZero(array3));
console.log("sumZero : " + sumZero(array4));