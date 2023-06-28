/**
 * stack = LIFO (Last In First Out)
 * - 배열로 구현시 unshift , shift 방식보다 push, pop 방식이 효율적
 * - 이유 - unshift 는 모든요소들을 뒤로 한칸식 밀면서 복잡도가 높아짐
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
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

/**
 * Queue 는 배열로 구현할때 stack 처럼 특정 방식이 유리하도록 피해갈수 없음
 * 그래서 스크래치로 자신만의 클래스 작성하는 것이 유리
 */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
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
    dequeue(){
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

let q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");