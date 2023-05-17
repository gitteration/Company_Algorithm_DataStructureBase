function sameFrequency(val1, val2) {
    // good luck. Add any arguments you deem necessary.
    if (val1.length !== val2.length) {
        return false;
    }
    const valArr1 = Array.from(String(val1));
    const valArr2 = Array.from(String(val2));

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let el of valArr1) {
        frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1;
    }

    for (let el of valArr2) {
        frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true;
}

function areThereDuplicates() {
    // if (arguments.length < 2) {
    //     return false;
    // }

    // let frequencyCounter = {}

    // for (let val in arguments) {
    //     frequencyCounter[arguments[val]] = (frequencyCounter[arguments[val]] || 0) + 1;
    //     console.log(frequencyCounter);
    // }

    // for (let key in frequencyCounter) {
    //     if (frequencyCounter[key] > 1) return true;
    // }

    // return false;

    return new Set(arguments).size !== arguments.length;
}

function averagePair(arr, val) {
    if (arr.length < 1) return false;

    // 배열의 시작과 끝에서 접근하며 구하기 위해 ..
    let left = 0
    let right = arr.length - 1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2; // Ex: 1 + 3 / 2
        if (avg === val) {
            return true;
        } else if (avg < val) { // 구한 값이 전달 받은 값보다 작으면 한 칸 전진
            left++
        } else { // 그렇지 않으면 뒤에 값을 한 칸 후진
            right--
        }
    }
    return false;

}



const result = averagePair([1, 2, 3], 2.5)
console.log(`result: ${result}`);