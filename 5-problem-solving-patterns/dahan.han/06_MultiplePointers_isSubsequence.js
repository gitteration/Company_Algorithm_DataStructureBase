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