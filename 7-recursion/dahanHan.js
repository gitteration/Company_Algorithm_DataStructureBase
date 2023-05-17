/*
	코딩연습 10:powre
	이 함수는 밑과 지수를 입력받아 밑의 지수 제곱 값을 반환해야 합니다.
	이 함수는 Math.pow()의 기능을 모방해야 합니다. 단, 음수인 밑과 지수는 고려하지 않아도 됩니다.
	Math.pow() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
*/
function power(base, exponent){
    // base: 밑, exponent: 지수
    if (exponent === 0) return 1; // 중단점: 지수가 0
    return base * power(base, exponent-1); // 지수를 1씩 낮추면서 재귀 호출

    /*
         power(2,2) 2 * 2   = 4
         power(2,1) 2 * 1   =2
         power(2,0) 1
    */
}
console.log('코딩연습 10:powre');
console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16


/*
    코딩 연습 11: factorial
    숫자를 받아들이고 해당 숫자의 팩토리얼을 반환하는 factorial 함수를 작성하세요.
    팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
    예를 들어, 팩토리얼 4 (4!)은 4 * 3 * 2 * 1이므로 24와 같습니다.
    팩토리얼 0 (0!)은 항상 1입니다.
*/
function factorial(value) {
    if (value < 0) return 0; // 중단점
    if (value <= 1) return 1;
    return value * factorial(value - 1); // 입력 받은 값을 -1  씩 하면서 재귀

    /*
        factorial(4)    4 * 6   = 24
        factorial(3)    3 * 2   = 6
        factorial(2)    2 * 1   = 2
        factorial(1)    1 * 1   = 1
        factorial(0)    1
    */
}
console.log('코딩 연습 11: factorial');
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040


/*
    코딩 연습 12: productOfArray
    숫자 배열을 가져와서 모든 숫자의 곱을 반환하는 함수를 작성합니다.
*/
function productOfArray(arr) {
    // 재귀 아닌거
    // let result = 1;
    // for (let i = 0 ; i < arr.length; i++) {
    //     result *= arr[i]
    // }
    // console.log('재귀 아님 : ' + result);

    if (arr.length === 0) return 1; // 종단점: 배열의 값을 모두 돌았다면 1 반환
    return arr[0] * productOfArray(arr.slice(1)); // 첫 번째 Idx를 가지고 뒤에 idx를 곱하는 식으로 ...

    // Array.prototype.slice() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
}
console.log('코딩 연습 12: productOfArray');
console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60



/*
    코딩 연습 13: recursiveRange
    이 함수는 숫자를 받아들이고 0부터 함수에 전달된 숫자까지 모든 숫자를 합합니다
*/
function recursiveRange(value){
    if (value === 0) return 0; // 종단점
    return value + recursiveRange(value - 1); // 입력 받은 값을 -1  씩 하면서 재귀

    /*
        recursiveRange(3)   3 + 3   = 6
        recursiveRange(2)   2 + 1   = 3
        recursiveRange(1)   1 + 0   = 1
        recursiveRange(0)   0
    */
}
console.log('코딩 연습 13: recursiveRange');
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55


/*
    코딩 연습 14: fib
    이 함수는 숫자를 입력받아 피보나치 수열에서 n번째 숫자를 반환합니다.
    여기서 피보나치 수열은 1, 1, 2, 3, 5, 8, ... 와 같은 양의 정수의 순서열이며,
    첫 두 항은 1로 시작하고, 이후 각 항은 그 이전 두 항의 합과 같습니다.
*/
function fib(value){
    // 필요하다고 생각하는 매개 변수를 추가합니다. 행운을 빕니다!

    if (value <= 2) return 1; // 종단점: `첫 두 항은 1로 시작하고 ...`
    return fib(value-1) + fib(value-2 )// `이후 각 항은 그 이전 두 항의 합과 같습니다.`
    /*
        ...
    */
}
console.log('코딩 연습 14: fib');
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465


/*
    코딩 연습 15: reverse
    문자열을 수락하고 새 문자열을 역으로 반환하는 reverse라는 재귀 함수를 작성합니다.
*/
function reverse(value){
    // let result = '';
    // for (let i = value.length -1 ; i >= 0 ; i--) {
    //     result += value[1];
    // }
    // console.log('재귀아님 : ' + result);

    if (value.length <= 1) return value; // 종단점 : 길이가 1이하 이면 마지막 문자 = 다 돌았음
    let tmp = value.slice(1);
    return reverse(tmp) + value[0];

    /*
        reverse('abc')  cb + a  =   cba
        reverse('bc')   c + b   =   cb
        reverse('c')    c
     */
}
console.log("코딩 연습 15: reverse");
console.log(reverse('abc'));
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'


/*
    코딩 연습 16: isPalindrome
    이 함수는 전달된 문자열이 palindrome이면 true를 반환합니다(전후 동일하게 읽음). 그렇지 않으면 false를 반환합니다.

    palindrome?
    - 팰린드롬(palindrome)은 거꾸로 읽어도 제대로 읽는 것과 같은 문장이나 낱말, 숫자, 문자열(sequence of characters) 등이다.
    - 보통 낱말 사이에 있는 띄어쓰기나 문장 부호는 무시한다.
*/
function isPalindrome(value){
    // 포인터로 풀기...
    // let left = 0;
    // let right = value.length - 1;
    //
    // while (left < right) {
    //     if (value[left] !== value[right]) {
    //         return false;
    //     }
    //     left++;
    //     right--;
    // }
    // return true;

    // 맨 끝에서 한 칸씩 가운데로 움직이기
    if (value.length <= 1) return true; // 종단점

    if (value[0] === value[value.length -1]) { // 첫 번째 문자와 마지막 문자가 같다
        // 다음 문자 비교를 위해 재귀 호출
        return isPalindrome(value.slice(1 , value.length -1)); // 좌/우에서 한 칸씩 이동시키기
    } else {
        // 다르면 팰린드롬이 아님.
        return false;
    }
}
console.log("코딩 연습 17: someRecursive");
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false


/*
    코딩 연습 17: someRecursive
    배열과 콜백을 받아들이는 someRecursive라는 재귀 함수를 작성합니다.
    함수는 콜백에 전달될 때 배열의 단일 값이 true를 반환하면 true를 반환합니다.
    그렇지 않으면 false를 반환합니다.
*/
function someRecursive(arr, callback) { // 두 번째 인자가 콜백 함수 ?
    if (arr.length === 0) return false; // 종단점 : 배열의 값이 더 이상 없음

    // `콜백에 전달될 때 `배열의 단일 값`이 true를 반환하면 true를 반환`
    // 배열의 첫 번째 idx 값을 콜백 변수에 던져서 true을 반환 받으면 true 반환
    if (callback(arr[0])) return true;

    // 앞선 조건절에 던지는 arr[0] 값을 제거하면서 재귀
    return someRecursive(arr.slice(1), callback);
}
console.log("코딩 연습 17: someRecursive");
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false


/*
    코딩 연습 18: flatten
    배열 배열을 수락하고 모든 값이 평평해진 새 배열을 반환하는 플랫이라는 재귀 함수를 작성합니다.
*/
function flatten(arr){
    // console.log(arr);

}
console.log("코딩 연습 18: flatten");
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]


/*
    코딩 연습 19: capitalizeFirst
    대문자화라고 하는 재귀 함수를 작성합니다.
    먼저 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 번째 문자를 대문자로 표시합니다.
*/
function capitalizeFirst (arr) {
    // const result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     const tmp = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    //     result.push(tmp);
    // }
    // console.log('재귀아님 : ' + result);

}
console.log("코딩 연습 19: capitalizeFirst");
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


/*
    코딩 연습 20: nestedEvenSum
    nestedEvenSum이라는 재귀 함수를 작성합니다.
    중첩된 개체를 포함할 수 있는 개체의 모든 짝수 합계를 반환합니다.
*/
function nestedEvenSum () {

}
var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};
console.log("코딩 연습 20: nestedEvenSum");
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10


/*
    코딩 연습 21: capitalizeWords
    대문자화라고 하는 재귀 함수를 작성합니다. 단어
    단어 배열을 지정하면 각 단어를 대문자로 표시한 새 배열을 반환합니다.
*/
function capitalizeWords() {

}
console.log("코딩 연습 21: capitalizeWords");

/*
    코딩 연습 22: stringifyNumbers
    이 함수는 객체를 가져와서 숫자인 모든 값을 찾아 문자열로 변환합니다.
    재귀는 이것을 해결하는 좋은 방법이 될 것입니다!
*/
function stringifyNumbers() {

}
let obj3 = {
    num: 1, // "1"
    test: [],
    data: {
        val: 4, // "4"
        info: {
            isRight: true,
            random: 66 // "66"
        }
    }
};
console.log("코딩 연습 22: stringifyNumbers");
console.log(stringifyNumbers(obj3));


/*
    코딩 연습 23: collectStrings
    이 함수는 객체를 받아들이고 문자열 유형을 가진 객체의 모든 값 배열을 반환합니다
*/
function collectStrings() {

}
const obj4 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log("코딩 연습 23: collectStrings");
console.log(collectStrings(obj4)); // ["foo", "bar", "baz"])