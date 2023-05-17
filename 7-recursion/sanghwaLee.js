/** 연습 문제 10
 * power라는 함수를 작성하십시오.
 * 이 함수는 밑과 지수를 인자로 받아 밑을 지수만큼 거듭제곱한 값을 반환해야 합니다.
 * 이 함수는 Math.pow()의 기능을 모방해야 합니다. (음수인 경우와 지수가 음수인 경우는 고려하지 않아도 됩니다.)
 *
 * ex) power(2, 3)
 * 1. power(2, 3) => 2 * power(2, 2) = 8
 * 2. power(2, 2) => 2 * power(2, 1) = 4
 * 3. power(2, 1) => 2 * power(2, 0) = 2
 * 4. power(2, 0) = 1
 */
power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

function power(a, n) {
    return n === 0 ? 1 : a * power(a, n-1);
    // return Math.pow(a, n);
    // return a**n;
}

/* 연습 문제 11
* factorial이라는 함수를 작성하십시오.
* 이 함수는 숫자를 인자로 받아 해당 숫자의 팩토리얼 값을 반환해야 합니다.
* 팩토리얼은 정수와 그 아래의 모든 정수의 곱입니다.
* 예를 들어, 4! 는 4 * 3 * 2 * 1인 24와 같습니다. 0!은 항상 1입니다.
* */
function factorial(n){
    return n === 0 ? 1 : n * factorial(n-1)
}

/* 연습 문제 12
* productOfArray라는 함수를 작성하십시오.
* 이 함수는 숫자 배열을 인자로 받아서 배열 내 모든 숫자의 곱을 반환해야 합니다.
* productOfArray([1,2,3]) // 6
* productOfArray([1,2,3,10]) // 60
* */
function productOfArray(arr) {
    let result = 1;
    function helper(){
        if(arr.length === 0){
            return;
        }
        result *= arr.pop();
        helper();
    }
    helper()
    return result;
}

/* 연습 문제 13
* recursiveRange라는 함수를 작성하십시오.
* 이 함수는 숫자를 인자로 받아서 0부터 해당 숫자까지의 모든 숫자를 더한 값을 반환해야 합니다. 이 함수는 재귀적으로 호출되어야 합니다.
* recursiveRange(6) // 21
* recursiveRange(10) // 55
* */

function recursiveRange(n){
    let result = 0;
    function helper(startValue){
        if(n < startValue){
            return
        }
        result += startValue;
        helper(startValue+1);
    }
    helper(0);
    return result;
}

/* 연습 문제 14
* fib라는 재귀 함수를 작성하십시오.
* 이 함수는 숫자를 인자로 받아서 피보나치 수열에서 해당 숫자번째에 해당하는 숫자를 반환해야 합니다.
* 피보나치 수열은 1, 1, 2, 3, 5, 8 등의 정수들로 이루어진 수열이며, 첫 번째와 두 번째 항은 각각 1입니다.
* 이후 항들은 이전 두 항의 합과 같습니다.
* */
function fib(n) {
    if (n <= 2) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}
