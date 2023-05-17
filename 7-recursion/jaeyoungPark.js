function power(val, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return val * power(val, exponent - 1);
}

function factorial(val) {
    console.log(val);
    if (val === 0) {
        return 1;
    }
    return val * factorial(val - 1);
}

function productOfArray(arr) {

    let result = 1;

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return
        }

        result *= helperInput[0];

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

function recursiveRange(val) {
    if (val === 0) {
        return 0;
    }
    return val + recursiveRange(val - 1);
}

function fib(val) {
    if (val <= 2) return 1;
    return fib(val - 1) + fib(val - 2);
}

function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str === '') {
        return ''
    }

    return reverse(str.substring(1)) + str.charAt(0);
}

function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!

    function helper(helperInput) {
        if (helperInput === '') {
            return ''
        }

        return helper(helperInput.substring(1)) + helperInput.charAt(0);
    }

    return str === helper(str);

}

function someRecursive(arr, method) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) {
        return false;
    }
    return someRecursive(arr.splice(1), method) || method(arr[0]);
}

function flatten(arr) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result;
}

function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    let result = []

    for (let i = 0; i < arr.length; i++) {
        const transformStr = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(transformStr);
    }

    return result;
}

function nestedEvenSum(obj) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    const objToArr = Object.keys(obj);

    for (let i = 0; i < objToArr.length; i++) {
        if (typeof obj[objToArr[i]] === 'object') {
            sum += nestedEvenSum(obj[objToArr[i]]);
        } else if (typeof obj[objToArr[i]] === 'number') {
            sum += obj[objToArr[i]] % 2 === 0 ? obj[objToArr[i]] : 0;
        } else {
            sum += 0;
        }
    }

    return sum;
}

function capitalizeWords(arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }

    let result = capitalizeWords(arr.slice(0, -1));

    result.push(arr.slice(arr.length - 1)[0].toUpperCase());

    return result
}


function stringifyNumbers(obj) {

    let result = {};
    const objToArrayKeys = Object.keys(obj);

    for (let i = 0; i < objToArrayKeys.length; i++) {
        if (typeof obj[objToArrayKeys[i]] === 'object' && !Array.isArray(obj[objToArrayKeys[i]])) {
            result[objToArrayKeys[i]] = stringifyNumbers(obj[objToArrayKeys[i]]);
        } else if (typeof obj[objToArrayKeys[i]] === 'number') {
            result[objToArrayKeys[i]] = String(obj[objToArrayKeys[i]]);
        } else {
            result[objToArrayKeys[i]] = obj[objToArrayKeys[i]];
        }
    }

    return result;
}

function collectStrings(obj) {
    let result = [];
    const objToArrayKeys = Object.keys(obj);

    for (let i = 0; i < objToArrayKeys.length; i++) {
        if (typeof obj[objToArrayKeys[i]] === 'object' && !Array.isArray(obj[objToArrayKeys[i]])) {
            console.log(obj[objToArrayKeys[i]]);
            result = [...result, ...collectStrings(obj[objToArrayKeys[i]])];
        } else if (typeof obj[objToArrayKeys[i]] === 'string') {
            result.push(obj[objToArrayKeys[i]]);
        }
    }

    if (result.length > 0) {
        console.log(result);
    }

    return result;
}
const obj = {
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

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
