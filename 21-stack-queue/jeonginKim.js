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

    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return;
        }

        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
        this.size++;
    }

    pop() {
        if (!this.first) {
            return null;
        }

        let temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            this.size--;
            return temp.value;
        }

        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
stack.push("HELLO")
stack.push("Friend")
stack.pop();

console.log("stack : ", stack)


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            this.size++;
            return;
        }

        let temp = this.last;
        temp.next = newNode;
        this.last = newNode;
        this.size++;
    }

    dequeue() {

        if (!this.first) {
            return null;
        }

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;

    }

}

let queue = new Queue();
queue.enqueue("HELLO")
queue.enqueue("Friend")
queue.enqueue("Bob");
queue.dequeue();

console.log("queue : ", queue)