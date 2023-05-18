/**
 * @title 피봇 헬퍼
 * @
 */

/**
 * @title 퀵 정렬
 * 
 */

/**
 * @title radix sort helper
 * @desc 내가 생각한 방식
 */

// function getDigit(num, i){
//     const strNumber = String(Math.abs(num));
//     const index = strNumber.length - i - 1;

//     return Number(strNumber[index]);
// }

// function digitCount(num){
//     const strNumber = String(Math.abs(num));

//     return strNumber.length 
// }



/**
 * @title radix sort helper
 * @desc 인강 방식
 */

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    
    for(let i = 0; i < nums.length; i++ ){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
};

/**
 * @pseudocode 
 * 1. 가장 큰 자리수가 몇 자리인지 파악
 * 2. 0 부터 가장 큰 자리수 까지 Loop
 * 3. 진행할 떄마다 갓 자리수 버킷 생성
 *  3.1 0-9 까지 각각 버킷 생성
 *  3.2 각 수를 올바른 위치, 올바른 버킷 슬롯에 0자리를 사용하여 분류하고 가장 큰 자리수 까지 반복
 * 4. 기존 배열을 버킷의 값으로 교체
 * @title radix sort
 */

function radixSort(nums){
    let maxDigitsCount = mostDigits(nums);
    for(let k = 0; k < maxDigitsCount; k++){
        let digitBuckets = Array.from({length:10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]); 
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }

    return nums;
}
const test = radixSort([23, 345, 5467, 12, 2345, 9852]);

console.log(test);
/**
 * @title 코딩 연습 43
 */

/**
 * @title 코딩 연습 44
 */

/**
 * @title 코딩 연습 45
 */

/**
 * @title 코딩 연습 46
 */

/**
 * @title 코딩 연습 47
 */

/**
 * @title 코딩 연습 48
 */

/**
 * @title 코딩 연습 49
 */


