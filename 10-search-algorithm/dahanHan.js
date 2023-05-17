/*
    코딩 연습 24: Linear Search Exercise
    배열과 값을 받아들이고 값이 존재하는 인덱스를 반환하는 linearSearch라는 함수를 작성합니다. 값이 배열에 없으면 -1을 반환합니다.
    이 기능을 구현하기 위해 indexOf를 사용하지 마십시오!
*/
function linearSearch(arr, target) {
    if (arr.length === 0) return -1;

    let returnIdx = -1;
    for(let i = 0 ; i < arr.length ; i++) {
        if (arr[i] === target) {
            return returnIdx = i;
        }
    }

    return returnIdx;
}
console.log('코딩 연습 24: Linear Search Exercise');
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1,2,3,4,5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1


/*
    코딩 연습 25: Binary Search Exercise
    정렬된 배열과 값을 받아들이고 값이 존재하는 인덱스를 반환하는 binarySearch라는 함수를 작성합니다. 그렇지 않으면 -1을 반환합니다.
    이 알고리즘은 linearSearch보다 더 효율적이어야 합니다.
    이 알고리즘을 구현하는 방법을 여기에서 읽을 수 있습니다.
    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 및 여기서 - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/
function binarySearch(arr, target) {
    if(target > arr[arr.length-1]) return -1; // 배열 범위 밖의 값이면 없는거

    // 포인터 3개 만들기:  처음(좌측), 중간, 마지막(우측)
    let left = 0;
    let middle =  Math.floor(arr.length-1 / 2); // 소수점이 나오면 안 되니까 Math.floor
    let right = arr.length -1;


    // 범위를 변경하며 계속 돌아야한다. === while?
    while (arr[middle] !== target && left <= right) { // 중간 값이 Target 값아 아니고 && 아직 배열의 확인할 수 있는 값이 있다면 계속 돔
        if (target < arr[middle]) { // target이 현재 중간 값보다 작다? 우측 배열의 값을 날려야함
            right = middle -1;
        } else { // target이 현재 중간 값보다 크다? 좌측 배열의 값을 날려야함
            left = middle +1;
        }

        // 새로 계산한 양쪽 포인터의 값으로 중간 포인터값 재 초기화
        middle = Math.floor((left + right) / 2);
    }

    // while 문이 끝났다는건 찾았거나 다 돌았거나
    if (arr[middle] === target) {
        return middle;
    }

    return -1; // 못찾음
}
console.log('코딩 연습 25: Binary Search Exercise');
console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1



/*
	64. 나이브 문자열 검색
	- 더 긴 문자열 위로 루프
	- 더 짧은 문자열에 루프 적용
	- 캐릭터가 일치하지 않으면 내부 루프에서 분리합니다
	- 문자가 일치하는 경우 계속 진행합니다
	- 내부 루프를 완료하고 일치하는 항목을 찾으면 일치 항목 수를 늘립니다
	- 카운트 반환
*/
function naiveStringSearch(lopngStr, shorStr) {
    if(shorStr.length > lopngStr.length) return 0;

    let findCount = 0;
    for (let i = 0 ; i < lopngStr.length ; i++ ) {
        for (let j = 0 ; j < shorStr.length ; j++) {
            // 캐릭터가 일치하지 않으면 내부 루프에서 분리합니다
            if (shorStr[j] !== lopngStr[i+j]) break; // i는 외부 반복문의 값이기에 j를 더하면서 다음 문자열과 비교할 수 있도록

            // 문자가 일치하는 경우 계속 진행합니다 + 내부 루프를 완료하고 일치하는 항목을 찾으면 일치 항목 수를 늘립니다
            // 일치 하지 않으면 break;로 나감 -> 일치하면 계속 돌게됨 -> j가 shot의 모든 길이 만큼 돌았다 = 문자 모두 일치
            if (j === shorStr.length -1 ) findCount++;
        }
    }

    return findCount;
}
console.log('64. 나이브 문자열 검색');
console.log(naiveStringSearch('wowomgzomg', 'omg')); // 2
