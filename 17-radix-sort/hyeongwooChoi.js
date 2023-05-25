function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log("getDigit :: ", getDigit(7323, 2));

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log("digitCount :: ", digitCount(423));

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

console.log("mostDigits :: ", mostDigits([23, 567, 89, 12234324, 90]));

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log("radixSort.digitBuckets ::", digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log("radixSort :: ", nums);
    }
}

radixSort([23, 345, 5467, 12, 2345, 9852]);