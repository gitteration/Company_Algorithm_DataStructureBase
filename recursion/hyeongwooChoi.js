// 코딩 연습 10 : power -> 재귀적으로 함수를 호출하는 방식은 거드벶곱을 계산할 때 유용
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log('POWER 솔루션')
console.log(power(1, 2));
console.log(power(2, 2));
console.log(power(2, 4));

// 코딩 연습 11 : factorial -> 재귀함수를 사용하여 주어진 수의 팩토리얼 값을 계산
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

console.log('FACTORIAL 솔루션')
console.log(factorial(1)) //1;
console.log(factorial(2)) //2*1 = 2;
console.log(factorial(5)) //5*4*3*2*1 = 120;

//코딩 연습 12 : productOfArray -> 숫자 배열을 가져와서 모든 숫자의 곱을 반환하는 함수
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log('PRODUCT_OF_Array 솔루션')
console.log(productOfArray([1, 2, 3])) //1*2*3 = 6;
console.log(productOfArray([1, 2, 3, 5])) //1*2*3*5 = 30;

//코딩연습 13 : recursiveRange -> 숫자를 받아들이고 0부터 함수에 전달된 숫자까지 모든 숫자를 합침
function recursiveRange(x) {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
}

console.log('RECURSIVE_RANGE')
console.log(recursiveRange(5)) // 5+4+3+2+1+0 = 15;
console.log(recursiveRange(4)) // 4+3+2+1+0 = 10;

//코딩연습 14 : 피보나치 -> 재귀 함수를 사용하여 주어진 수(n)에 해당하는 피보나치 수열의 값을 계산하는 함수
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

/*
 먼저 n이 2 이하인 경우 1을 반환합니다. 그 외의 경우, n-1과 n-2에 해당하는 피보나치 수열의 값을 재귀적으로 호출하여 합을 계산합니다.
 */

console.log('fib')
console.log(fib(6));

//코딩연습 15 : reverse -> 새 문자열을 역으로 반환하는 reverse라는 재귀 함수
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

console.log('reverse');
console.log(reverse('abc')); //cba
console.log(reverse('abcd')); //abcd
console.log(reverse('abcdf')); //abcdf

//코딩연습 16 : isPalindrome -> 이 함수는 전달된 문자열이 palindrome이면 true를 반환합니다(전후 동일하게 읽음). 그렇지 않으면 false를 반환
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

console.log('isPalindrome');
console.log(isPalindrome('choihyeongwoo')); //false
console.log(isPalindrome('tomcat')); //false
console.log(isPalindrome('abcddcba')); //true

// 코딩연습 18 : flatten -> 배열 배열을 수락하고 모든 값이 평평해진 새 배열을 반환하는 플랫이라는 재귀 함수
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

console.log('flatten');
console.log(flatten([1, 2, 3, 4, 5, 6, 7, 8, 9])) //[1,2,3,4,5,6,7,8,9];
console.log(flatten([1], [2])) //[1];
console.log(flatten([[1], [2]])) //[1, 2];

//코딩연습 19 : capitalizeWords -> 먼저 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 번째 문자를 대문자로 표시
function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
}

console.log('capitalizeWords');
console.log(capitalizeFirst(['choi', 'hyeong', 'woo'])); //['Choi', 'Hyeong', 'Woo']

//코딩연습 20 : nestedEvenSum -> 중첩된 개체를 포함할 수 있는 개체의 모든 짝수 합계 구함
function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

const obj = {
    a: 2,
    b: {
        c: 4,
        d: {
            e: 6
        }
    },
    f: 8
};
console.log('nestedEvenSum');
console.log(nestedEvenSum(obj));  // 2+4+6+8 = 20

//코딩연습 21 : capitalizeFirst -> 주어진 배열의 문자열 요소들의 첫 글자를 대문자로 바꾸는 함수
function capitalizeFirst(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

console.log('capitalizeFirst');
console.log(capitalizeFirst(['apple', 'banana', 'orange'])); //'Apple', 'Banana', 'Orange'


//코딩연습 22 : stringifyNumbers -> 주어진 객체의 속성 중 숫자 타입인 값들을 문자열 타입으로 변환하는 함수
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const objj = {
    num: 42,
    str: "hello",
    bool: true,
    nestedObj: {
        num: 123,
        str: "world"
    },
    nestedArr: [1, 2, 3, {
        num: 4,
        str: "goodbye"
    }]
};

console.log('stringifyNumbers');
console.log(stringifyNumbers(objj));