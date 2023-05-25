
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


function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // 값이 존재한다면 +1 , 없다면 1로 초기화
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        // 제곱에 대한 키값이 존재하는지를 체크
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        // 빈도수가 다르냐를 체크
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

let a = [1,2,3]
let b = [4,9,1]

let c = [1,2,3]
let d = [1,9]

let e = [1,2,1]
let f = [4,4,1]

let g = [5,1,2,3,2]
let h = [9,1,4,4,22]


console.log("array a, b - same result : " + same(a,b));
console.log("array c, d - same result : " + same(c,d));
console.log("array e, f - same result : " + same(e,f));
console.log("array e, f - same result : " + same(g,h));




