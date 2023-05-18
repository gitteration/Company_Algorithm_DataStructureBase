/**
 *  24. 선형 검색 실습
 * 선형 탐색은 탐색 알고리즘의 가장 기초가 되는 알고리즘이다. 구현이 매우 쉽다는 장점이 있는 반면, 배열의 크기가 커질수록 탐색 시간이 증가하여 오래 걸린다는 단점이 있다.
 *
 * 한 배열을 인덱스를 통해 접근 한다면 시간 복잡도는 O(1)으로 최고의 시간 복잡도를 가질 것이다.
 * 반면에 한 배열에 100개의 정수가 존재할 때 마지막 값을 찾고 있거나, 배열에 포함되지 않은 값을 찾으려 한다면 검색을 100번 수행하여 최악의 시간 복잡도 O(n)가 된다.
 */
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log("24. 선형 검색 실습 관련 예제 코드");
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

/**
 * 25. 이진 탐색 실습
 * 훨씬 더 빠르게 잡업을 완료할 수 있다.
 * 탐색 범위를 절반으로 나누어 좁혀나가면서 탐색헌다.
 * 탐색 대상인 데이터가 오름차순/내림차순으로 정렬되어 있는 경우에 사용할 수 있다.
 * 분할 정복(Divide and Conquer)을 기초로 한다.
 */
function binarySearch(arr, elm) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2); ///중간점을 선택하는 과정을 반복한다

    ///우리가 여기에서 하려는 작업은 계속 연산을 하면서
    //arr[middle]가 우리가 찾는 값과 같지 않으면 루프는 계속 작동할 것이다.
    while (arr[middle] != elm && start <= end) {
        if (elm < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elm ? middle : -1;
}

console.log("25. 이진 탐색 검색 실습 코드");
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1


/**
 * 64. 나이브 문자열 검색
 * 긴 문자열에서 길이가 짧은 문자열이 몇 번 출현하는지 세고 싶을 때 사용
 */
function naiveStringSearch(long, short) { // 문자열 long에서 문자열 short의 출현 횟수를 찾는 함수
    let count = 0; // 출현 횟수를 저장하는 변수
    for (let i = 0; i < long.length; i++) { // long 문자열의 모든 문자를 순회하는 반복문
        for (let j = 0; j < short.length; j++) { // short 문자열의 모든 문자를 순회하는 반복문
            if (long[i + j] !== short[j]) break; // 현재 위치에서 short 문자열의 길이만큼 문자열을 잘라서 각 문자를 비교하고, 일치하지 않으면 안쪽 반복문 종료
            if (j === short.length - 1) count++; // short 문자열의 모든 문자가 순회하며 일치하는 문자가 있으면 count 변수 증가
        }
    }
    return count; // 출현 횟수 반환
}

console.log("64. 나이브 문자열 검색 실습 코드");
console.log(naiveStringSearch("lorie loled", "lol"));