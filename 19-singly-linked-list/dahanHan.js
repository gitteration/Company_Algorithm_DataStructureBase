class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // 함수에 전달된 값을 사용하여 새 노드 생성
        let newNode = new Node(val);

        // 목록에 헤드 속성이 없는 경우 헤드와 테일을 새로 생성된 노드로 설정
        // 그렇지 않으면 꼬리의 다음 속성을 새 노드로 설정하고 목록의 꼬리 속성을 새로 만든 노드로 설정
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // 길이를 1씩 늘립니다
        this.length++;

        // 연결된 목록 반환
        return this;
    }
    pop() {
        // 목록에 노드가 없으면 정의되지 않은 상태로 반환
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        // 꼬리에 닿을 때까지 목록을 반복 = node.next 값이 존재 하는 동안 while
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail; // 테일을 두 번째에서 마지막 노드로 설정합니다 (1-2-3-4-5 였다면 `4`가 입력된 상황)
        this.tail.next = null; // 두 번째 노드에서 마지막 노드까지의 다음 속성을 null로 설정 = 꼬리는 next가 없다.
        this.length--; // 목록의 길이를 1씩 줄입니다 = 값이 사라진 만큼 ..

        // ! 길이가 0이면 헤드와 테일 모두 없는게 정상
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // 제거된 노드 값 반환
        return current;
    }
    shift() {
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next; // 두 번째 node를 head로 ..
        this.length--;

        if(this.length === 0) this.tail = null;
        return currentHead;
    }
    unshift(val) { // val를 list 맨 앞에 삽입
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;

        let count = 0;
        let current = this.head;

        while(count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);

        if(foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;

        previousNode.next = removed.next;
        this.length--;

        return removed;
    }
    reverse() {
        // 헤드와 테일 위치 바꾸기
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;

            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList()

list.push("안")
list.push("녕")
list.push("하")
list.push("세")
list.push("요")
list.push("!")
console.log('push : ', list);
list.print();

list.pop();
console.log('pop : ', list);
list.print();

list.shift();
console.log('shift : ', list);
list.print();

list.unshift("안");
console.log('unshift : ', list);
list.print();

let tmp = list.get(0);
console.log('get : ', tmp);
list.print();

list.set(4, "요!");
console.log('set : ', list);
list.print();

list.insert(4, "요요요요요요");
console.log('insert : ', list);
list.print();

list.remove(5);
console.log('remove : ', list);
list.print();

list.reverse();
list.print();


/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 찾아보니 틀린 방법 .. : "Follow up: Can you solve it using O(1) (i.e. constant) memory?"에 부합하지 않음
var hasCycle = function(head) {
    // 순환 불가한 경우 return
    if (head == null || head.next == null) return false;

    // 순환 = 같은 값에 다시 접근?

    const set = new Set();
    let now = head;
    while(now !== null) {
        if (set.has(now)) { // 이전에 접근했던 값에 다시 접근 했음을 감지 ..
            return true;
        }

        set.add(now);
        now = now.next;
    }

    return false; // 순환 못함
};


// 이게 맞는 방법이라고 한다. : 토끼와 거북이 ... ?
function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
