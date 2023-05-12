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


function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
    }
    return arr;
}

console.log("insertion sort : ", insertionSort([8, 2, 1, 99, 34]))