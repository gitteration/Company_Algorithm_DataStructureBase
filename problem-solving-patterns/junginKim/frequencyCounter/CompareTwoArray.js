/**
 * 문제를 이해하라
 * 문제를 해결할 바탕이 되는 계획들을 세워라
 * 작성한 내용들을 다 지우고, 다시 시작해서 계획들을 세워라
 * 해결 가능한 문제들은 풀고, 불가한 문제들은 단순화시켜라
 * 회고하고, 리팩토링하라
 */


/**
 *
 * 2개의 배열을 허용하는 same 이라는 함수를 작성하라
 * 두 번째 배열에 해당하는 값을 가지면 참을 반환해야 한다.
 * 첫 번째 배열에는 여러 값이 있는데 두 번째 배열의 값이 정확히 동일하지만 제곱되어 있는지 알고자 한다.
 * 순서는 상관 없으니 동일할 필요는 없고, 그저 제곱만 하면 된다.
 * 섞일 수 있지만 값의 빈도는 동일해야 한다.
 *
 * ex) a = [1,2,3]  b = [4,1,9]  -> true
 *     a = [1,2,3]  b = [1,9]    -> false
 */


/**
 *
 * 2중 반복문?
 * length 가 안맞는 경우도 잊지 않을까?
 * 하나라도 불일치면 false 니까..
 *
 * 숫자가 아닌경우우 *
 * 직접 반복문도 있지만, contains 도 있지.
 *
 * includes 도 반복문이지 않을까?
 */


function same(a, b) {

    let result = true;

    if (a.length !== b.length) {
        return false;
    }

    for (let e of a) {

        if (isNaN(e) && !Number.isInteger(e)) {
            result = false;
            return false;
        }

        let index = b.indexOf(e*e);
        if (index === -1) {
            result = false;
            return false;
        }

        b.splice(index, 1);
    }

    return result;
}

let a = [1,2,3]
let b = [4,9,1]

let c = [1,2,3]
let d = [1,9]

let e = [1,2,1]
let f = [4,4,1]


console.log("array a, b - same result : " + same(a,b));
console.log("array c, d - same result : " + same(c,d));
console.log("array e, f - same result : " + same(e,f));




