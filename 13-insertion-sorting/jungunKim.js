function insertionSort(arr) {

    for (let i=1; i<arr.length; i++) {
        let currentVal = arr[i];
        for (let j=i-1; j>=0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
        console.log(arr)
    }
    return arr;
}

console.log("result : ", insertionSort([2, 1, 9, 76, 4]))


function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// console.log("result : ", merge([1, 10, 50], [2, 14, 99, 100]));
console.log("result : ", mergeSort([10,24,76,73,72,1,9]));