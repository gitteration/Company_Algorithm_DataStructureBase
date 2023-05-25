function validAnagram(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    
    let lookup = {};
    for(const el of str1) {
        lookup[el] ? lookup[el]++ : lookup[el] = 1;
    }
    for(let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter]--;
        }
    }
    return true;
}

function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }
    let count = 1;
    let pointer = arr[0];
    for (let i = 1; i< arr.length; i++) {
        if (pointer !== arr[i]) {
            count ++;
            pointer = arr[i];
        }
    }
    return count;
}

function sameFrequency(num1, num2){
    const str1 = num1.toString();
    const str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    
    let frequencyStr1 = {};
    let frequencyStr2 = {};
    
    for(let el of str1) {
        frequencyStr1[el] = (frequencyStr1[el] || 0) + 1;
    }
    
    for(let el of str2) {
        frequencyStr2[el] = (frequencyStr2[el] || 0) + 1;
    }
    
    for(let key in frequencyStr1) {
        if (frequencyStr1[key] !== frequencyStr2[key]) {
            return false;
        }
    }
    return true;
}

function areThereDuplicates() {
    let collection = {};
    for(let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for(let key in collection) {
        if(collection[key] > 1) {
            return true;
        }
    }
    return false;
}