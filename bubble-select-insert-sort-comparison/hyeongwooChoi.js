function bubbleSort(arr) {

    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            //console.log(arr, arr[i], arr[j+1]);
            if (arr[j] > arr[j + 1]) {
                //SWAP
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("bubble Sort :: ", bubbleSort([2, 8, 9, 3, 1]));

function bubbleSortRe(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log("bubble Sort Re :: ", bubbleSortRe([2, 8, 9, 3, 1]));

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            console.log("=====================")
            console.log(arr)
            console.log("SWAPPING TO: ", arr[lowest])
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;

            console.log(arr)
            console.log("=====================")
        }
    }

    return arr;
}

console.log("selection Sort : ", selectionSort([12, 88, 56, 14, 1]));

function selectionSortRe(arr) {

    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            swap(arr, i, lowest);
        }
    }

    return arr;
}

console.log("selection Sort Re : ", selectionSortRe([12, 88, 56, 14, 1]));

//--------------------------------------------------------- 연습 문제  ---------------------------------------------------------
/**
 * 섹션 30 : 더 와이들 웨스트
 * 코딩 연습 43 : Bubble Sort
 */
function bubbleSort_test(arr, comparator) {
    // comparator가 함수인지 확인하고, 그렇지 않으면 기본 comparator를 제공합니다.
    if (typeof comparator !== 'function') {
        comparator = function(a, b) {
            return a - b; // 기본 comparator: 오름차순
        };
    }

    // Bubble sort 알고리즘
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            // 제공된 comparator를 사용하여 인접한 요소들을 비교합니다.
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // 요소가 잘못된 순서에 있다면 교환합니다.
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // 정렬된 배열을 반환합니다.
    return arr;
}

console.log(bubbleSort_test([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort_test([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort_test([1, 2, 3])); // [1, 2, 3]
