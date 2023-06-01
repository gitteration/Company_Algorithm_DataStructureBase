/*
    코딩 연습 50: Quick Sort
    다음으로 고려할 정렬 알고리즘은 빠른 정렬입니다. 불행하게도, 퀵소트는 가장 직관적인 알고리즘이 아니며 광범위한 구현을 가지고 있습니다. 컴퓨터 파일에서 이 훌륭한 비디오를 확인하여 빠른 정렬 방법에 대한 빠른 소개를 하는 것이 도움이 될 수 있습니다. https://www.youtube.com/watch?v=XE4VP_8Y0BU

    알고리즘은 다음과 같습니다:
    - 배열에서 요소를 선택하고 "피벗"으로 지정합니다. 피벗을 선택할 수 있는 옵션은 상당히 많습니다.
    - 시작하기 쉽게 하고 첫 번째 요소로 피벗을 선택합니다. 이것은 이상적인 선택은 아니지만, 현재로서는 알고리즘을 더 쉽게 이해할 수 있게 해줍니다.
    - 그런 다음 배열의 다른 모든 요소를 피벗과 비교합니다.
    - 피벗 값보다 작으면 피벗 왼쪽으로 이동합니다.
    - 더 크면 오른쪽으로 이동합니다.
    - 비교를 마치면 피벗이 올바른 위치에 배치됩니다.
    - 그런 다음 배열이 정렬될 때까지 피벗의 왼쪽과 오른쪽 절반을 사용하여 재귀적으로 빠른 정렬을 다시 호출합니다.

    이전 연습에서 피벗 도우미의 도움을 받아 빠른 정렬을 구현하는 것이 가장 쉽습니다.
    이 함수는 배열을 가져와서 피벗 값을 설정하고
    피벗보다 작은 모든 값이 왼쪽으로 감겨지고 피벗보다 큰 모든 값이 오른쪽으로 감겨지도록 배열을 변환하는 역할을 합니다.
    이 도우미가 피벗 값의 끝 부분에 대한 인덱스를 반환하는 경우에도 유용합니다.

    제공하는 기본 비교기는 두 모수가 숫자이며 값을 가장 작은 값에서 가장 큰 값으로 정렬한다고 가정해야 합니다.
*/


/*
    자바스크립트 함수 기본값 매개변수 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

    function multiply(a, b = 1) {
        return a * b;
    }

    console.log(multiply(5, 2)); // Expected output: 10
    console.log(multiply(5)); // Expected output: 5
 */

function pivot(arr, comparator = (val1, val2) => {return val1 - val2}, start=0, end=arr.length -1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // // 제공하는 기본 비교기는 두 모수가 숫자이며 값을 가장 작은 값에서 가장 큰 값으로 정렬한다고 가정해야 합니다.
    // function defaultComparator(value1, value2) {
    //     return value1 - value2;
    // }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        // if (comparator === undefined) {
        //     if (defaultComparator(arr[i], pivot) < 0) {
        //         swapIdx++;
        //         swap(arr, swapIdx, i);
        //     }
        // } else {
        if (comparator(arr[i], pivot) < 0) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
        // }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
    if (arr.length <= 1) return arr;

    if (left < right) {
        let pivotIndex = pivot(arr, comparator, left, right);
        quickSort(arr, comparator, left, pivotIndex-1);
        quickSort(arr, comparator, pivotIndex+1, right);
    }
    return arr;
}


console.log("코딩 연습 50: Quick Sort - 001");
console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([]));


console.log("코딩 연습 50: Quick Sort - 002");
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]


console.log("코딩 연습 50: Quick Sort - 003");
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
    if (a < b) { return -1;}
    else if (a > b) { return 1;}
    return 0;
}
console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]


console.log("코딩 연습 50: Quick Sort - 004");
var moarKittyData = [{
    name: "LilBub",
    age: 7
}, {
    name: "Garfield",
    age: 40
}, {
    name: "Heathcliff",
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}
console.log(quickSort(moarKittyData, oldestToYoungest)); // 연령순으로 내림차순 정렬