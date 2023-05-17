function bubbleSort(arr) {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for (let i=arr.length; i>0; i--) {
        for (let j=0; j<i-1; j++) {
            // console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
        // console.log("ONE PASS COMPLETE");
    }

    console.log("result : ", arr)
    return arr;
}


function bubbleSort2(arr) {

    for (let i=arr.length; i>0; i--) {
        for (let j=0; j<i-1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("ONE PASS COMPLETE");
    }

    return arr;
}

function bubbleSort1(arr) {
    let noSwap;
    for (let i=0; i<arr.length; i++) {
        noSwap = true;
        for (let j=0; j<arr.length; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }

        if (noSwap) {
            break;
        }
    }

    return arr;
}

// console.log("result : ", bubbleSort1([37,45,29,8,22,22]));

let data = Array.from({length: 100000}, () => Math.random());
bubbleSort(data);

function selectionSort(arr) {

    for (let i=0; i<arr.length; i++) {
        let lowest = i;
        for (let j=i+1; j<arr.length; j++) {
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

console.log("result : ", selectionSort([34,22,10,19,17]));

function selectionSort2(arr) {

    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i=0; i<arr.length; i++) {
        let lowest = i;
        for (let j=i+1; j<arr.length; j++) {
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

console.log("result : ", selectionSort2([34,22,10,19,17]));


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