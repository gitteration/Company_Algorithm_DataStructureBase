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