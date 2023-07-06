/*
    기본 배열을 사용한 스택 예시
    - push()와 pop()을 이용한 후입선출
*/
let arrStack = [];
arrStack.push("구글");
arrStack.push("인스타그램");
arrStack.push("유튜브");
console.log(arrStack);
arrStack.pop(); // 유튜브
arrStack.pop(); // 인스타그램
arrStack.push("아마존");
arrStack.pop(); // 아마존
arrStack.pop(); // 구글

/*
    - unshift()와 shift()을 이용한 후입선출

    - push()와 비교하여, unshift()는 맨 앞에 값이 추가되기 때문에
    - 새로운 값이 입력될 때 마다 모든 배열의 인덱스가 재정의 되어야한다.
    - -> push()와 비교시 더 많은 비용 발생
*/
arrStack = [];
arrStack.unshift("파일 생성");
arrStack.unshift("파일 크기 조정");
arrStack.unshift("파일 합성");
arrStack.shift(); // 파일 합성
arrStack.shift(); // 파일 크기 조정
arrStack.shift(); // 파일생성


/*
    직접 스택을 구현하는 경우, 배열을 사용하여 구현할 때와 비교하였을 때
    인덱스를 생략할 수 있기에 더욱 저렴하게 구현할 수 있다.
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * 푸시 의사 코드
     * - 함수는 값을 수락해야 합니다
     * - 해당 값을 사용하여 새 노드 생성
     * - 스택에 노드가 없는 경우 첫 번째 및 마지막 속성을 새로 생성된 노드로 설정합니다
     * - 노드가 하나 이상 있으면 스택에 현재 첫 번째 속성을 저장하는 변수를 만듭니다
     * - 첫 번째 속성을 새로 생성된 노드로 재설정합니다
     * - 노드의 다음 속성을 이전에 생성된 변수로 설정합니다
     * - 스택 크기를 1씩 증가시킵니다
     */
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    /**
     * POP 의사 코드
     * - 스택에 노드가 없으면 null을 반환합니다
     * - 스택에 첫 번째 속성을 저장할 임시 변수 생성
     * - 노드가 하나만 있는 경우 첫 번째 및 마지막 속성을 null로 설정합니다
     * - 노드가 둘 이상인 경우 첫 번째 속성을 현재 첫 번째 속성으로 설정합니다
     * - 크기를 1씩 줄입니다
     * - 제거된 노드 값 반환
     */
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
let stack = new Stack();
console.log('');
console.log('');
console.log('');
console.log(stack.push("차하나"));
console.log(stack.push("차두리"));
console.log(stack.push("차세찌"));
console.log(stack)
console.log(stack.pop()); // 차세찌
console.log(stack.pop()); // 차두리
console.log(stack.pop()); // 차하나

/*
    Queue
    - 선입선출
    - - 백그라운드 태스크
    - - 리소스 업로드 중
    - - 인쇄 / 작업 처리
*/

/*
    배열을 가지고 Queue 만들기
*/
console.log('');
console.log('');
console.log('');
console.log('배열을 가지고 Queue 만들기 - push(), shift() 조합');
let q = [];
q.push("차하나");
q.push("차두리");
q.push("차세찌");
console.log(q);
console.log(q.shift()); // 차하나
console.log(q.shift()); // 차두리
console.log(q.shift()); // 차세찌
console.log('배열을 가지고 Queue 만들기 - unshift(), pop() 조합');
q = [];
q.unshift("차하나");
q.unshift("차두리");
q.unshift("차세찌");
console.log(q);
console.log(q.pop()); // 차하나
console.log(q.pop()); // 차두리
console.log(q.pop()); // 차세찌


/**
 * 직접 Queue 만들기
 */
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /**
     * enqueue 의사 코드
     * - 이 함수는 일부 값을 허용합니다
     * - 함수에 전달된 값을 사용하여 새 노드 생성
     * - 대기열에 노드가 없으면 이 노드를 대기열의 첫 번째 및 마지막 속성으로 설정합니다
     * - 그렇지 않으면 현재 마지막에 있는 다음 속성을 해당 노드로 설정한 다음 - 대기열을 해당 노드로 설정합니다
     * - 대기열 크기를 1씩 증가시킵니다
     */
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    /**
     * Dequeue 의사 코드
     * - 첫 번째 속성이 없으면 null만 반환합니다
     * - 변수에 첫 번째 속성 저장
     * - 첫 번째 노드가 마지막 노드와 동일한지 확인합니다(노드가 하나만 있는지 확인). 그렇다면 첫 번째와 마지막을 null로 설정합니다
     * - 노드가 두 개 이상인 경우 첫 번째 속성을 첫 번째 속성으로 설정합니다
     * - 크기를 1씩 줄입니다
     * - 대기열에서 해제된 노드의 값을 반환합니다
     */
    dequeue(){
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
let queue = new Queue();
console.log('');
console.log('');
console.log('');
console.log('Queue 직접 만들어서 구현');
queue.enqueue("차하나");
queue.enqueue("차두리");
queue.enqueue("차세찌");
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());