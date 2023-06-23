
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let poppedNode = this.tail;
        this.tail = poppedNode.prev;
        this.tail.next = null;
        this.length--;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let current = this.head.next;
        current.prev = null;
        this.head = current;
        this.length --;
    }

    unShift(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    get(idx) {

        if (idx < 0 || idx > list.length || list.length === 0) {
            return null;
        }

        let current, count;
        if (idx <= this.length/2) {
            console.log("working from start")
            count = 0;
            current = this.head;
            while(count !== idx) {
                current = current.next;
                count++;
            }
        }
        else {
            console.log("working from end")
            count = this.length -1;
            current = this.tail;
            while(count !== idx) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(idx, value) {

        let node = this.get(idx);
        if (!node) {
            return false;
        }
        node.val = value;
        return true;
    }

    insert(idx, value) {

        if (idx < 0 || idx > this.length) {
            return false;
        }

        if (idx === 0) {
            this.unShift(value)
            this.length++;
            return true;
        }

        if (idx === this.length) {
            this.push(value);
            this.length++;
            return true;
        }

        let node = new Node(value);
        let beforeNode = this.get(idx-1);
        let afterNode = beforeNode.next;
        beforeNode.next = node;
        node.next = afterNode;
        node.prev = beforeNode;
        afterNode.prev = node;
        this.length++;
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }

        if (idx === 0) {
            return this.shift();
        }

        if (idx === this.length-1) {
            return this.pop();
        }

        let beforeNode = this.get(idx-1);
        let removedNode = beforeNode.next;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return true;

    }


    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

let list = new DoubleLinkedList();
list.push("Hello");
list.push("Friend");
list.push("BoB");
list.push("Say");
list.push("Hi");
list.remove(3)
list.traverse()