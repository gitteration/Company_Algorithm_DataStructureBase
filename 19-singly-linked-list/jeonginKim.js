// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
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
        this.tail = node;
        this.length++;
    }

    pop() {

        if (!this.head) {
            return undefined;
        }

        let current = this.head
        let newTail = current;

        // 루프를 다 돌게하여 마지막 tail을 newTail 로 가져오게 함
        while(current.next) {
            // console.log("next : ", current.next)
            // goodbye
            // !

            // 현재 tail 을 바꿔주기 위한 변수
            newTail = current;
            // console.log("newTail : ", newTail)
            // hello
            // goodbye

            // 반환하기 위한 변수 + while 다음 변수로 가기위한 저장
            current = current.next;
            // console.log("current : ", current)
            // goodbye
            // !

        }

        this.tail = newTail
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        this.head = current.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unShift(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    get(num) {

        if (num < 0 || num > list.length) {
            return undefined;
        }

        let count = 0;
        let current = this.head
        while(current) {

            if (count === num) {
                return current;
            }

            current = current.next;
            count++;
        }
    }

    set(index, value) {

        let current = this.get(index)
        if (!current) {
            return false;
        }
        current.val = value;
        return true;
    }

    insert(index, value) {

        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unShift(value);
            this.length++;
            return true;
        }

        if (index === this.length) {
            this.push(value);
            this.length++;
            return true;
        }

        let newNode = new Node(value);
        let prevNode = this.get(index-1);
        let current = this.get(index);
        newNode.next = current;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {

        if (index < 0 || index > this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length-1) {
            return this.pop();
        }

        let prevNode = this.get(index-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return true;
    }

    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next = null;

        for(let i=0; i<this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

    }

    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }


    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

let list = new SingleLinkedList();
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

list.insert(2, "FRIEND")
list.remove(1)
// list.traverse()
list.reverse();

list.print();
// console.log("result : ", list.get(0))
