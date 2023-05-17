/**
 * 문제를 이해하라
 * 문제를 해결할 바탕이 되는 계획들을 세워라
 * 작성한 내용들을 다 지우고, 다시 시작해서 계획들을 세워라
 * 해결 가능한 문제들은 풀고, 불가한 문제들은 단순화시켜라
 * 회고하고, 리팩토링하라
 */


/**
 * 정렬된 배열을 취하는 countUniqueValues 라는 함수를 작성해라
 * 분류(assorted) 가 아닌 정렬(assorted) 된 배열이어야 한다.
 * 다만 오름차순이어야 한다.
 *
 * 조건에 따라 두 포인터가 특정 방향으로 움직이도록 하고, countUniqueValues 함수를 구현하여
 * 정렬된 배열을 전달하면 해당 배열의 고유한 값의 개수를 반환하도록 할 것
 *
 * 음수가 포함될 수 있으나 항상 정렬된 상태로 있을 것
 *
 *
 * [1,1,1,1,1,2] -> 2
 * [1,2,3,4,4,4,7,7,12,12,13] -> 7
 * [] -> 0
 * [-2,-1,-1,0,1] -> 4
 *

 */

function CountUniqueValues(arr) {

    let i = 0;
    let j = i+1;

    let result = 0;

    if (arr.length > 0) {
        result++;
    }

    while (j < arr.length) {

        if (arr[i] !== arr[j]) {
            result++;
        }
        i++;
        j++;

    }

    return result;
}


let array1 = [1,1,1,1,1,2];
let array2 = [1,2,3,4,4,4,7,7,12,12,13];
let array3 = [];
let array4 = [-2,-1,-1,0,1];
let array5 = [1,1,1,2,3,3,4,4,5,6];


console.log("CountUniqueValues : " + CountUniqueValues(array1));
console.log("CountUniqueValues : " + CountUniqueValues(array2));
console.log("CountUniqueValues : " + CountUniqueValues(array3));
console.log("CountUniqueValues : " + CountUniqueValues(array4));
console.log("CountUniqueValues : " + CountUniqueValues(array5));