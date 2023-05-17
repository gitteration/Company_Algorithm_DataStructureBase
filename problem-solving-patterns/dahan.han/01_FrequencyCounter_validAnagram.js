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