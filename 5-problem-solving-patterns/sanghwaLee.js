// 연습 문제1
function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck
    let result1 = 0,result2 = 0;

    for(const char of str1){
        result1 += char.charCodeAt();
    }
    for(const char of str2){
        result2 += char.charCodeAt();
    }
    return result1 === result2;
}

/** 연습 문제2
 * countUniqueValues라는 함수를 구현하세요.
 * 이 함수는 정렬된 배열을 입력받고, 배열 내 고유한 값의 개수를 세어야 합니다.
 * 배열 내에 음수가 있을 수 있지만 항상 정렬된 상태입니다.
 * @author sanghwa
 * @createDate 2023/03/24
 **/
function countUniqueValues(arr){
    return new Set(arr).size;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

/** 연습 문제3
 * sameFrequency라는 함수를 작성하세요.
 * 이 함수는 두 개의 양의 정수를 입력받고, 두 수의 숫자 빈도수가 동일한지 확인해야 합니다.
 * 해당 함수의 시간 복잡도는 O(N)이 되어야 합니다.
 * 여기서 N은 입력받은 두 정수 중 더 큰 정수의 자릿수입니다. 또한 공간 복잡도는 O(1)이 되어야 합니다.
 * @author sanghwa
 * @createDate 2023/03/24
 **/
function sameFrequency(num1, num2){
    const str1 = String(num1), str2 = String(num2);
    let result1 = 0, result2 = 0;
    for(const char of str1){
        result1 += Number(char);
    }
    for(const char of str2){
        result2 += Number(char);
    }
    return result1 === result2;
}
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

/** 연습 문제4
 * 주어진 인자들 중에 중복된 값이 있는지 확인하는 areThereDuplicates 함수를 구현해보세요.
 * 이 함수는 가변인자를 받아들이며, 주어진 인자들 사이에 중복된 값이 있는지를 확인합니다.
 * 이 문제는 빈도 수 세기 패턴 또는 다중 포인터 패턴을 사용하여 해결할 수 있습니다.
 * @author sanghwa
 * @createDate 2023/03/24
 **/
function areThereDuplicates() {
    const setArr = new Set(arguments);
    return arguments.length !== setArr.size
}
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

/**
 * averagePair라는 함수를 작성해보세요.
 * 이 함수는 정렬된 정수 배열과 목표 평균값이 주어졌을 때, 배열에서 두 개의 값이 있는데 이들의 평균이 목표 평균값과 일치하는지를 판별합니다.
 * 하나 이상의 쌍이 목표 평균값과 일치할 수 있습니다.
 * @author sanghwa
 * @createDate 2023/03/24
 **/
function averagePair(){
    // add whatever parameters you deem necessary - good luck!
}










