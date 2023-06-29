class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * 스택(Stack)은 후입선출(LIFO: Last-In, First-Out)의 구조를 가지고 있습니다. 즉, 가장 마지막에 추가된 요소가 가장 먼저 제거됩니다.
 */
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

/**
 * 큐(Queue)는 선입선출(FIFO: First-In, First-Out)의 구조를 가지고 있습니다. 따라서 가장 먼저 추가된 요소가 가장 먼저 제거됩니다.
 */
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
let queue = new Queue();

console.log('stack push :: ', stack.push(23));
console.log('stack pop :: ', stack.pop());
console.log('queue enqueue :: ', queue.enqueue(23));
console.log('queue dequeue :: ', queue.dequeue());