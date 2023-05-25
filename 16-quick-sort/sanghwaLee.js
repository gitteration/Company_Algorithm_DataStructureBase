/*
* 외부 연습 문제
* */

function solution(array, commands) {
    let answer = [];
    for(const index in commands){
        const [i,j,k] = [commands[index][0]-1, commands[index][1], commands[index][2]-1];
        const target_value = array.slice(i,j).sort((a,b)=>{return a-b})[k];
        answer.push(target_value);
    }
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) // [5, 6, 3]
