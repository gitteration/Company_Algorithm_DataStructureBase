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