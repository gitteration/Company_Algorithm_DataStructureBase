/**
 * @topic linear search
 * @description indexOf 랑 같은 기능을 하는 함수를 만들 것, 다만 내장 함수 사용하지 않고 만들것
 * @param arr 검색 대상이 되는 배열
 * @param value 검색할 값
 * @return number (array_index | -1)
 */
function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }

    return -1;
}

/**
 * @description
 *  1. 배열이 정렬(분류) 되어있다고 가정
 *  2. 중간점을 택하고 그 값보다 작으면 전에 있는 값중에서 가운데 이런식으로 반복해서 찾음
 * @pseudocode
 *  - param 으로 정렬(분류)가 되어있는 배열을 받음
 *  - 배열을 검색할때 시작점(좌측 포인터), 끝점(우측 포인터)를 변수 설정, default 좌측포인터 :0  , 우측 포인터: array.lenght -1
 *  - 중간점을 설정하고, 중간점과 검색하려는 값이 같으면 해당 index 리턴, 아니면 값이 작은지 큰지 비교하여 시작점과 끝점을 이동
 *  - 값을 찾지 못하면 -1 return
 * @param arr 검색 대상이 되는 배열
 * @param value 검색할 값
 * @return number (array_index | -1)
 */
function binarySearch(arr, value) {
    // retry 필요
    let startPointer = 0
    let endPointer = arr.length - 1
    let centerPointer = Math.floor((startPointer + endPointer) / 2);

    while (arr[centerPointer] !== value && startPointer <= endPointer) {
        console.log(
            `
            startPointer : ${startPointer},
            endPointer : ${endPointer},
            centerPointer : ${centerPointer},
            `
        )

        if (arr[centerPointer] < value) {
            startPointer = centerPointer + 1;
        } else {
            endPointer = centerPointer - 1;
        }

        centerPointer = Math.floor((startPointer + endPointer) / 2);

    }

    if (arr[centerPointer] === value) {
        return centerPointer;
    }
    return -1;
}

const result = binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10);
console.log('binarySearch', result);

/**
 * @topic naive string search
 * @description 긴 문자열에서는 짧은 문자(열)을 찾고 몇번 있는지 Count
 * @pseudocode
 *  - 더 긴 문자열 반복
 *  - 더 짧은 문자열 반복
 *  - 문자가 일치하지 않으면 내부 루프에서 벗어남
 *  - 문자가 일치하면 문자열 끝에 도달할때 까지 계속 확인 일치하면 카운트 증가
 *  - 마지막으로 count 리턴
 * @param long 긴문자열
 * @param short 짧은 문자열
 * @return number count
 */

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }

            if (j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

const result2 = naiveSearch('long loan roar', 'lon');
console.log('naiveSearch', result2);