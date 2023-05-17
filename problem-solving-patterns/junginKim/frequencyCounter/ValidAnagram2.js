/**
 * 문제를 이해하라
 * 문제를 해결할 바탕이 되는 계획들을 세워라
 * 작성한 내용들을 다 지우고, 다시 시작해서 계획들을 세워라
 * 해결 가능한 문제들은 풀고, 불가한 문제들은 단순화시켜라
 * 회고하고, 리팩토링하라
 */


/**
 *
 * 2개의 문자열이 주어진다.
 * 첫번째 문자열의 문자 빈도 수가 2번째 문자열의 문자 빈도 수가 일치하는 지를 판별하라
 *
 * ex) a = anagram  b = nagaram  -> true
 *     a = rat  b = car    -> false
 */


/**
 *
 * 빈도 수를 구하는 것이니까, 객체를 선언하여 비교할 것
 * 중첩 반복문을 피하는 방법으로 고안
 */

function validAnagram(first, second) {

    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i=0; i<first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i=0; i<second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}


let str1 = '';
let str2 = '';


let str3 = 'aaz'
let str4 = 'zza';

let str5 = 'anagram';
let str6 = 'nagaram';

let str7 = 'awesome';
let str8 = 'awesom';

let str9 = 'qwerty';
let str10 = 'qeywrt';

let str11 = 'textwisttime';
let str12 = 'timewisttext';

let str13 = 'textwistTIme';
let str14 = 'TImewisttext';


console.log("validAnagram - str1, str2 : " + validAnagram(str1, str2));
console.log("validAnagram - str3, str4 : " + validAnagram(str3, str4));
console.log("validAnagram - str5, str6 : " + validAnagram(str5, str6));
console.log("validAnagram - str7, str8 : " + validAnagram(str7, str8));
console.log("validAnagram - str9, str10 : " + validAnagram(str9, str10));
console.log("validAnagram - str11, str12 : " + validAnagram(str11, str12));
console.log("validAnagram - str13, str14 : " + validAnagram(str13, str14));