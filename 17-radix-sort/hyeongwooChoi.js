function getDigit(num, i) {
    //num의 절댓값을 계산 -> 음수 인 경우에도 올바른 결과를 얻기 위함
    // i가 0인 경우 10^0은 1이 되며, 1의 자릿수
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log("getDigit :: ", getDigit(73123, 2));

function digitCount(num) {
    if (num === 0) return 1;
    //주어진 숫자의 절댓값의 10을 밑으로 하는 로그 값을 계산
    //숫자의 자릿수 직전의 지수 값을 얻을 수 있다.
    //Math.floor로 소수점 이하를 버리고, 정수 부분만 남김
    //계산된 자릿수 직전의 지수 값에 1을 더하여 실제 자릿수를 구함
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log("digitCount :: ", digitCount(42334));

function mostDigits(nums) {
    //현재까지 발견한 가장 큰 자릿수를 저장할 변수
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        //현재까지의 최대 자릿수인 maxDigits와 nums[i]의 자릿수 중 더 큰 값을 선택
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

console.log("mostDigits :: ", mostDigits([23, 567, 89, 12234324, 90]));

function radixSort(nums) {
    // nums에 포함된 숫자들 중 가장 큰 자릿수를 구한다,.
    let maxDigitCount = mostDigits(nums);
    //0부터 maxDigitCount -1까지 반복
    for (let k = 0; k < maxDigitCount; k++) {
        //0~9까지의 인덱스를 갖는 빈 배열들로 초기화, 현재 자릿수에 따라 숫자를 그룹화하는데 사용
        let digitBuckets = Array.from({length: 10}, () => []);
        //nums의 각 숫자를 현재 자릿수에 따라 digitBuckets에 배치, getDigit 함수를 사용하여 각 숙자의 현재 자릿수를 추출
        //해당 자릿ㅅ의 버킷에 숫자를 추가
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