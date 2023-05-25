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