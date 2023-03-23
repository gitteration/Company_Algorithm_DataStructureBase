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
