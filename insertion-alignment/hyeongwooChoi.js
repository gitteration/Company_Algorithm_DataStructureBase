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