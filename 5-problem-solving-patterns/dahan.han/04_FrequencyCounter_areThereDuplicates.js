/*
    코딩 연습 4: Frequency Counter / Multiple Pointers - areThereDuplicates
    변수 개수의 인수를 허용하고 전달된 인수 중 중복된 인수가 있는지 확인하는 기능인 areThereDuplicates를 구현합니다.
    주파수 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
*/
function areThereDuplicates() {
    if(arguments.length < 2) return false;

    let frequencyCounter = {}
    /*
    for (let val of arguments) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1 //유데미 사이트에서 오류..
    }
    */

    for (let val in arguments) {
        frequencyCounter[arguments[val]] = (frequencyCounter[arguments[val]] || 0) + 1;
    }
    // console.log('frequencyCounter', frequencyCounter);

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) return true;
    }

    return false;
}
console.log('function areThereDuplicates');
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true


// 아래는 다중 포인터로 풀어보려다가 실패한 코드 ..
/*
function areThereDuplicates() {
    // 자바스크립트에서 인자 개수와 상관없이 받는 법 찾다가 스크랩
    // - 함수의 인수 (rest와 arguments 객체): https://hyojin96.tistory.com/entry/rest-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-vs-arguments

    if(arguments.length < 2) return false;

    // arguments = arguments.sort();
    arguments.sort(function(a, b)  {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });

    let start = 0;
    let next = 1;
    while(next < arguments.length){
        console.log(`arguments[start]`, arguments[start]);
        console.log(`arguments[next]`, arguments[next]);
        console.log('-----------------')
        let isSame = arguments[start] === arguments[next];
        //console.log('isSame:', isSame)
        if(isSame) return true;

        start ++;
        next ++;
    }

    return false;
}
*/