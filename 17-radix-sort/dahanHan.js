/*
    코딩 연습 51: Radix Sort Helper - getDigit

    Radix 정렬 도우미 - 숫자 가져오기
    getDigit이라는 함수를 구현하여 양의 정수와 위치를 수락하고 지정된 위치에서 해당 숫자의 숫자를 반환합니다.
    위치는 오른쪽에서 왼쪽으로 읽으므로 0번째 위치는 가장 오른쪽 자리에 해당합니다.
*/
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
console.log('코딩 연습 51: Radix Sort Helper - getDigit');
console.log(getDigit(12345, 0)); // 5
console.log(getDigit(12345, 1)); // 4
console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 3)); // 2
console.log(getDigit(12345, 4)); // 1
console.log(getDigit(12345, 5)); // 0

console.log(getDigit(8987, 0)); // 7
console.log(getDigit(8987, 1)); // 8
console.log(getDigit(8987, 2)); // 9
console.log(getDigit(8987, 3)); // 8
console.log(getDigit(8987, 4)); // 0


/*
    코딩 연습 52: Radix Sort Helper - digitCount
    Radix Sort Helper - 디지트
    양의 정수를 받아들이고 정수가 가진 자릿수를 반환하는 digitCount라는 함수를 구현합니다.
*/
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log('코딩 연습 52: Radix Sort Helper - digitCount');
console.log(digitCount(1)); // 1
console.log(digitCount(9)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3
console.log(digitCount(1234)); // 4
console.log(digitCount(77777)); // 5


/*
    코딩 연습 53: Radix Sort Helper - mostDigits
    Radix 정렬 도우미 - 대부분의 숫자
    정수 배열을 수락하고 숫자가 가장 많은 배열의 숫자에 대한 자릿수 카운트를 반환하는 mostDigits라는 함수를 구현합니다.

    이 기능에서는 이전 연습의 digitCount 코드를 사용하는 것이 도움이 될 수 있습니다.
*/
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
console.log('코딩 연습 53: Radix Sort Helper - mostDigits');
console.log(mostDigits([1, 9, 10, 100, 99])); // 3
console.log(mostDigits([100, 1010, 1, 500])); // 4
console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
console.log(mostDigits([])); // 0


/*
    코딩 연습 54: Radix Sort
    Radix 정렬
    드디어 Radix Sort를 구현할 준비가 되었습니다! 숫자 배열을 받아들이고 오름차순으로 정렬하는 radixSort라는 함수를 작성합니다.

    여기서는 이전 연습의 도우미 기능을 사용해야 합니다. 행운을 빌어요.
*/
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log('코딩 연습 54: Radix Sort');
console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]



/*
    K번째수
    https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
*/

function solution_back(array, commands) {
    var answer = [];

    // commands의 길이 만큼 반복
    for (let i = 0 ; i < commands.length; i ++) {

        // commands 내부에 존재하는 원소는 길이가 3 : 고정

        // 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬
        // let tmpArr = array.slice(commands[i][0], commands[i][1]);
        let tmpArr = array.slice(commands[i][0] - 1, commands[i][1]);
        if (tmpArr.length > 1) tmpArr.sort();

        // k번째에 있는 수
        // answer.push(tmpArr[commands[i][2]]);
        // answer.push(tmpArr[commands[i][2] -1]);

        // 자르고 정렬된 배열의 길이가 K 보다 낮다면 ?
        if (!tmpArr.length < commands[i][2] -1) answer.push(tmpArr[commands[i][2] -1]);

    }

    return answer;
}

function solution(array, commands) {
    var answer = [];

    // commands의 길이 만큼 반복
    for (let i = 0 ; i < commands.length; i ++) {
        // command 변수에 담기
        let command = commands[i];

        // commands 내부에 존재하는 원소는 길이가 3 : 고정
        // i:0, j:1, k:2 초기화
        let first = command[0];
        let second = command[1];
        let third = command[2];

        // 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬
        let slice = array.slice(first-1, second); // idx는 0부터 시작
        // slice.sort(); // 정렬이 올바르게 되지 않는 케이스 존재 : ex : [ 5, 6, 3 ]

        slice.sort(function(a, b) {
            return a - b;
        });

        // k 번 째 값 넣기 : k에 해당하는 위치에 값이 있을 때만 넣기
        if (third <= slice.length) {
            answer.push(slice[third-1]);
        }
    }

    return answer;
}
console.log('외부 문제: K번째수');
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [5 ,6, 3]
console.log(solution([1, 5, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [5 ,6, 3]