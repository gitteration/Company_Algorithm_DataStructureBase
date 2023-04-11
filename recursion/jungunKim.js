
function reverse(str) {

    if (str.length <= 1) {
        return str;
    }

    let arr = Array.from(str);
    let lastChar = arr[arr.length-1];

    arr.pop();

    return lastChar + reverse(arr.join(""));
}


function isPalindrome(str) {

    if (str.length <= 1) {
        return true;
    }

    let arr = Array.from(str);
    let result = arr[0] === arr[arr.length-1];

    if (result) {
        arr.shift();
        arr.pop();
        return isPalindrome(arr.join(""));
    }

    return false;
}


function someRecursive(arr, callback) {
    if (arr.length === 0) {
        return false;
    }
    if (callback(arr[0])) {
        return true;
    }

    arr.shift();

    return someRecursive(arr, callback);
}

function flatten2(oldArr){
    let newArr = []
    for(let i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten2(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    let str = arr[0];
    let char = str.charAt(0).toUpperCase() + str.slice(1);
    newArr.push(char);
    arr.shift();

    return newArr.concat(capitalizeFirst(arr));

}


function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!

    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            let subSum = nestedEvenSum(obj[key]);
            sum += subSum;
            continue;
        }

        if (obj[key] % 2 === 0) {
            sum += obj[key];
        }

    }

    return sum;
}


function capitalizeWords(arr) {

    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    let str = arr[0];
    let char = str.toUpperCase();
    newArr.push(char);
    arr.shift();

    return newArr.concat(capitalizeWords(arr));

}


function stringifyNumbers(obj) {

    for (let key in obj) {

        if (typeof obj[key] === "object") {
            stringifyNumbers(obj[key]);
            continue;
        }

        if (typeof obj[key] === "number") {
            obj[key] = obj[key].toString();
        }

    }

    return obj;
}


function collectStrings(obj) {

    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            arr = arr.concat(collectStrings(obj[key]));
        }
        if (typeof obj[key] === "string") {
            arr.push(obj[key]);
        }
    }

    return arr;
}


function fib(num) {

    if (num <= 2 ) {
        return 1;
    }

    return fib(num-1) + fib(num-2);
}

function recursiveRange(num) {

    if (num <= 0) {
        return 0;
    }

    return num + recursiveRange(num-1);
}

function productOfArray(arr) {

    if (arr.length === 0) {
        return 1;
    }

    let num = arr[0];
    let arr2 = arr.slice(1);

    console.log("num : ", num);
    console.log("arr2 : ", arr2);

    return num * productOfArray(arr2);
}


function factorial(num) {
    if (num <= 1) {
        return 1;
    }

    return num * factorial(num-1);
}


function power(num1, num2) {

    if (num2 <= 0) {
        return 1;
    }

    return num1 * power(num1, num2-1);
}


function collectOddValues2(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0 ) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}