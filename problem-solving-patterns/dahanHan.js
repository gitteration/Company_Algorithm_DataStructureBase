/*
    코딩 연습 1: Frequency Counter - validAnagram
    두 개의 문자열이 주어지면 두 번째 문자열이 첫 번째 문자열의 아나그램인지 확인하는 함수를 작성합니다.
    아나그램은 아이스맨으로부터 형성된 시네마와 같은 다른 사람의 문자를 재배열하여 형성된 단어, 구, 또는 이름입니다.
*/
function validAnagram(string1, string2){
    if (string1.length !== string2.length) return false;

    let tmp = {};
    for (let i = 0; i < string1.length; i++) {
        let char = string1[i]; // 문자 하나씩 뽑기
        tmp[char] = (tmp[char] || 0) + 1;
    }
    // console.log('반복회수 구하기:', tmp);

    // string2를 기준으로 앞에서 초기화한 놈하고 비교
    for (let i = 0; i < string2.length; i++) {
        let char = string2[i];

        if (!tmp[char]) return false; // tmp에 string2의 문자가 없으면 문자가 다른거

        let tmpCnt = tmp[char];
        tmp[char] = tmpCnt - 1; // 카운팅 했던 값 -1 시키기
    }

    /*  이 부분 없어도 동작된다. 왜?
    for (let key in tmp) {
        if (tmp[key] !== 0)  return false; // 0이 아니면 초기화가 안 되었거나 더 된거
    }
    */

    return true;
}
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true


/*
    코딩 연습 2: Multiple Pointers - countUniqueValues
    정렬된 배열을 수락하고 배열의 고유 값을 카운트하는 countUniqueValues라는 함수를 구현합니다.
    배열에 음수가 있을 수 있지만 항상 정렬됩니다.
*/
function countUniqueValues(val){
    if (val.length === 0) return 0;

    let i = 0; // 포인터1
    for (let j = 1; j < val.length; j++) { // j = 포인터2
        if (val[j] !== val[i]) {
            i++; // i 증가
            val[i] = val[j]; // 현재 i의 위치에 j 값을 넣어줌
        }
    }

    return i + 1;
}
console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4


/*
    코딩 연습 3: Frequency Counter - sameFrequency
    "sameFrequency"라는 함수를 작성합니다. 두 개의 양의 정수가 주어지면 두 숫자의 자릿수가 같은지 확인합니다.
    솔루션에는 다음과 같은 복잡성이 있어야 합니다: Time: O(N)
*/
function sameFrequency(value1, value2) {
    // 지문 이해 못하고, `27. 빈도수 세기 패턴` 빈도 카운터 패턴 사용 했는데 해결....

    let valueArr1 = Array.from(value1.toString());
    let valueArr2 = Array.from(value2.toString());
    if (valueArr1.length != valueArr2.length) return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of valueArr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of valueArr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }

    return true;
}
console.log('function sameFrequency');
console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false


/*
    코딩 연습 4: Frequency Counter / Multiple Pointers - areThereDuplicates
    변수 개수의 인수를 허용하고 전달된 인수 중 중복된 인수가 있는지 확인하는 기능인 areThereDuplicates를 구현합니다.
    주파수 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
*/

/* 다중 포인터로 풀려다가 포기
function areThereDuplicates() {
    // 자바스크립트에서 인자 개수와 상관없이 받는 법 찾다가 스크랩
    // - 함수의 인수 (rest와 arguments 객체): https://hyojin96.tistory.com/entry/rest-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-vs-arguments

    if(arguments.length < 2) return false;

    // arguments = arguments.sort();
    arguments.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });

    let start = 0;
    let next = 1;
    while(next < arguments.length){
        console.log(`arguments[start]`, arguments[start]);
        console.log(`arguments[next]`, arguments[next]);
        console.log('-----------------')
        let isSame = arguments[start] === arguments[next];
        //console.log('isSame:', isSame)
        if(isSame) return true;

        start ++;
        next ++;
    }

    return false;
}
*/
function areThereDuplicates() {
    if(arguments.length < 2) return false;

    let frequencyCounter = {}
    /*
    for (let val of arguments) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1 //유데미 사이트에서 오류..
    }
    */

    for (let val in arguments) {
        frequencyCounter[arguments[val]] = (frequencyCounter[arguments[val]] || 0) + 1;
    }
    // console.log('frequencyCounter', frequencyCounter);

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) return true;
    }

    return false;
}
console.log('function areThereDuplicates');
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true


/*
    코딩 연습 5: Multiple Pointers - averagePair
    averagePair라는 함수를 작성합니다.
    정렬된 정수 배열과 목표 평균을 지정할 경우 쌍의 평균이 목표 평균과 동일한 값 쌍이 배열에 있는지 확인합니다.
    평균 대상과 일치하는 쌍이 둘 이상 있을 수 있습니다.
*/
function averagePair(arr, val) {
    if(arr.length < 1) return false;

    // 배열의 시작과 끝에서 접근하며 구하기 위해 ..
    let left = 0
    let right = arr.length-1;
    while(left < right){
        let avg = (arr[left] + arr[right]) / 2; // Ex: 1 + 3 / 2
        if(avg === val) {
            return true;
        } else if(avg < val) { // 구한 값이 전달 받은 값보다 작으면 한 칸 전진
            left++
        } else { // 그렇지 않으면 뒤에 값을 한 칸 후진
            right--
        }
    }
    return false;

}
console.log('function averagePair');
console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false


/*
    코딩 연습 6: Multiple Pointers - isSubsequence
    isSubsequence라는 함수를 작성합니다.
    이 함수는 두 개의 문자열을 사용하여 첫 번째 문자열의 문자가 두 번째 문자열의 연속을 형성하는지 확인합니다.
    즉, 첫 번째 문자열의 문자가 순서를 변경하지 않고 두 번째 문자열의 어딘가에 나타나는지 여부를 확인해야 합니다.
*/
function isSubsequence(str1, str2) {
    if (str1 == null || str2 == null) return false;
    if (str1.length < 1 || str2.length < 1) return false;

    let i = 0; // 포인터1
    let j = 0; // 포인터2
    while (j < str2.length) { // 두 번째 문자열을 기준으로 while
        // console.log('str1[i]', str1[i]);
        // console.log('str2[j]', str2[j]);

        // 첫 번째 문자열과 두 번째 문자열이 같다 = 다음 문자 체크를 위해 i ++
        if (str1[i] === str2[j]) i++;

        // 두 문자열이 같을 때에만 i ++ 하여 다음 문자를 검증
        // 첫 번째 문자열을 다 돌았다 = 문자가 순서대로 들어가 있다.
        if (i === str1.length) return true;

        // 두 번째 문자열의 다음 문자와 비교하기 위해 j ++
        j++;
    }
    return false;
}
console.log('function isSubsequence');
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)


/*
    코딩 연습 7: Sliding Window - maxSubarraySum
    정수 배열과 숫자가 주어지면 maxSubarraySum이라는 함수를 작성합니다.
    함수에 전달된 숫자의 길이로 하위 배열의 최대 합계를 찾습니다.
    하위 배열은 원래 배열의 연속된 요소로 구성되어야 합니다.
    아래의 첫 번째 예에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.
*/
function maxSubarraySum(arr, val) {
    if (arr.length < val) return null;

    // val 인자로 전달 받은 만큼의 합을 먼저 변수에 저장 = 비교군 생성
    let total = 0; // ex:300
    for (let i=0; i<val; i++){
        total += arr[i];
    }
    //console.log('init total:', total);

    // 임의 변수에 비교군 값 초기화
    let tmp = total;

    // 0~val의 값은 이미 total에 넣었으니, vla ~ 이후 부터 반복문
    for (let i = val; i < arr.length; i++) {
        //arr[100,200,300,400] / val=2 : i=2
        tmp += arr[i] - arr[i-val]; // 300 - 100 = 200
        total = Math.max(total, tmp); // 200과 300중 비교
        //console.log('total:', total);
    }
    return total;
}
console.log('function maxSubarraySum');
console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null


/*
    코딩 연습 8: Sliding Window - minSubArrayLen
    minSubArrayLen이라는 함수를 작성합니다. minSubArrayLen은 양의 정수 배열과 양의 정수 배열의 두 가지 매개 변수를 허용합니다.
    이 함수는 합계가 함수에 전달된 정수보다 크거나 같은 연속 하위 배열의 최소 길이를 반환해야 합니다. 0이 없으면 0을 반환합니다.
*/
function minSubArrayLen(arr, val) {
    // 지문과 예시를 이해하지 못하여 해답지를 보았으나, 해결하지 못하였습니다..
}
console.log('function minSubArrayLen');
console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));// 0


/*
    코딩 연습 9: Sliding Window - findLongestSubstring
    findLongestSubstring이라는 함수를 작성합니다.
    이 함수는 문자열을 받아들이고 모든 고유한 문자가 포함된 가장 긴 하위 문자열의 길이를 반환합니다.
*/
function findLongestSubstring(val) {
    // 지문과 예시를 이해하지 못하여 해답지를 보았으나, 해결하지 못하였습니다..

    // 아래는 잘못이해하고 막무가내로 풀어본 코드 ...
    // 문자의 개수 별로 객체에 초기화
    let iteration = {}
    for (let key of val) {
        iteration[key] = (iteration[key] || 0) +1;
    }
    console.log('iteration:', iteration);

    // 문자열이 1번만 나오는 값 산출
    let result = 0;
    for (let key in iteration) {
        if (iteration[key] === 1) result++;
    }
    return result;
}
console.log('function findLongestSubstring');
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6;