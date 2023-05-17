function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

function after_same(arr1, arr2) {
    if (arr1.lenght !== arr2.length) {
        return false;
    }
    let frequencyCount1 = {}
    let frequencyCount2 = {}
    for (let val of arr1) {
        frequencyCount1[val] == (frequencyCount1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCount2[val] == (frequencyCount2[val] || 0) + 1
    }
    for (let key in frequencyCount1) {
        if (!(key ** 2 in frequencyCount2)) {
            return false
        }
        if (frequencyCount2[key ** 2] !== frequencyCount1[key]) {
            return false
        }
    }
    return true
}

console.log(after_same([1, 2, 3], [4, 1, 9]));
console.log(after_same([1, 2, 3], [1, 9]));
console.log(after_same([1, 2, 1], [4, 4, 1]));


function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

//다중 포인터 패턴
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

//다중 포인터 패턴 리팩토링
function sumZero_re(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero_re([-4, -3, -2, -1, 0, 1, 2, 3, 10]));


//기준점 간 이동 배열 패턴
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    var maxNum = Infinity;

    for (let i=0; i<arr.length - num + 1; i++) {
        temp = 0;
        for (let j=0; j<num; j++) {
            temp += arr[i+j];
        }
        if (temp > maxNum) {
            maxNum = temp;
        }
    }
    return maxNum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 2));

function maxSubarraySum_re(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    temSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum_re([2, 6, 9, 2, 1, 8, 5, 6, 3, 4, 1, 3, 6, 5, 6], 5));