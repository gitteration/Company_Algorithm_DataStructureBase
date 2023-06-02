class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        // 리스트의 첫 번째 노드를 가리키는 포인터
        this.head = null;
        // 리스트의 마지막 노드를 가리키는 포인터
        this.tail = null;
        // 리스트의 길이
        this.length = 0;
    }

    //push method
    push(val) {
        // 새로운 노드 생성
        var newNode = new Node(val);

        if (!this.head) {
            // 리스트가 비어있는 경우
            // head와 tail을 새로운 노드로 설정
            this.head = newNode;
            this.tail = this.head;
        } else {
            // 리스트에 이미 노드가 있는 경우
            // tail의 next를 새로운 노드로 설정하고 tail을 새로운 노드로 업데이트
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // 리스트의 길이 증가
        this.length++;
        // 업데이트된 리스트 반환
        return this;
    }

    //pop method
    pop() {
        if (!this.head) {
            // 리스트가 비어있는 경우
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while (current.next) {
            // current와 newTail 포인터를 이동하며 마지막 노드를 찾음
            newTail = current;
            current = current.next;
        }
        // tail을 새로운 마지막 노드(newTail)로 설정하고 next를 null로 업데이트하여 마지막 노드를 제거함
        this.tail = newTail;
        this.tail.next = null;
        // 리스트의 길이 감소
        this.length--;
        if (this.length === 0) {
            // 리스트가 비어있는 경우
            this.head = null;
            this.tail = null;
        }
        // 제거된 마지막 노드 반환
        return current;
    }

    //shift method
    shift() {
        if (!this.head) {
            // 리스트가 비어있는 경우
            return undefined;
        }
        var currentHead = this.head;
        // head를 현재 head의 다음 노드로 업데이트하여 첫 번째 노드를 제거함
        this.head = currentHead.next;
        // 리스트의 길이 감소
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        // 제거된 첫 번째 노드 반환
        return currentHead;
    }

    //unshift method
    unshift(val) {
        // 새로운 노드 생성
        var newNode = new Node(val);

        if (!this.head) {
            // 리스트가 비어있는 경우
            // head와 tail을 새로운 노드로 설정
            this.head = newNode;
            this.tail = this.head;
        } else {
            // 리스트에 이미 노드가 있는 경우
            // 새로운 노드의 next를 현재 head로 설정하여 새로운 노드가 첫 번째 노드로 연결
            newNode.next = this.head;
            // head를 새로운 노드로 업데이트하여 새로운 노드가 첫 번째 노드가 되도록 함
            this.head = newNode;
        }
        // 리스트의 길이 증가
        this.length++;
        // 업데이트된 리스트 반환
        return this;
    }

    //get method
    get(index) {
        if (index < 0 || index >= this.length) {
            // 인덱스가 범위를 벗어나는 경우 null 반환
            return null;
        }
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            // 인덱스에 해당하는 노드까지 반복하며 이동
            current = current.next;
            counter++;
        }
        // 찾은 노드의 값을 반환
        return current;
    }

    //set method
    set(index, val) {
        // 주어진 인덱스에 해당하는 노드를 가져옴
        var foundNode = this.get(index);
        if (foundNode) {
            // 노드를 찾은 경우
            // 노드의 값을 주어진 값으로 변경
            foundNode.val = val;
            return true;
        }
        // 노드를 찾지 못한 경우
        return false;
    }

    //insert method
    insert(index, val) {
        // 주어진 인덱스가 유효한 범위인지 확인
        if (index < 0 || index > this.length) {
            // 인덱스가 유효하지 않은 경우 false 반환
            return false;
        }
        if (index === this.length) {
            // 인덱스가 리스트의 마지막 위치인 경우 push 메서드를 사용하여 값을 삽입
            return !!this.push(val); // !! 연산자는 값을 불린으로 변환하여 반환
        }
        if (index === 0) {
            // 인덱스가 리스트의 첫 번째 위치인 경우 unshift 메서드를 사용하여 값을 삽입
            return !!this.unshift(val); // !! 연산자는 값을 불린으로 변환하여 반환
        }
        // 삽입할 새로운 노드 생성
        var newNode = new Node(val);
        // 이전 노드와 다음 노드의 연결을 업데이트하여 새로운 노드를 삽입
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        // 리스트의 길이 증가
        this.length++;
        // 삽입이 성공적으로 이루어졌으므로 true 반환
        return true;
    }

    //remove method
    remove(index) {
        // 주어진 인덱스가 유효한 범위인지 확인
        if (index < 0 || index >= this.length) {
            // 인덱스가 유효하지 않은 경우 undefined 반환
            return undefined;
        }
        if (index === 0) {
            // 인덱스가 리스트의 첫 번째 위치인 경우 shift 메서드를 사용하여 노드를 제거하고 반환
            return !!this.shift(); // !! 연산자는 값을 불린으로 변환하여 반환
        }
        if (index === this.length - 1) {
            // 인덱스가 리스트의 마지막 위치인 경우 pop 메서드를 사용하여 노드를 제거하고 반환
            return this.pop();
        }
        // 이전 노드와 제거할 노드의 연결을 업데이트하여 노드를 제거
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        // 리스트의 길이 감소
        this.length--;
        // 제거한 노드 반환
        return removed;
    }

    reverse() {
        // 헤드와 테일 위치 바꾸기
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;

            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList()

list.push("가")
list.push("나")
list.push("다")
list.push("라")
list.push("마")
console.log('Push Method :: ', list);
list.print();

list.pop();
console.log('Pop Method :: ', list);
list.print();

list.shift();
console.log('Shift Method :: ', list);
list.print();

list.unshift("가");
console.log('UnShift Method :: ', list);
list.print();

let tmp = list.get(0);
console.log('Get Method :: ', tmp);
list.print();

list.set(4, "다!!");
console.log('Set Method :: ', list);
list.print();

list.insert(4, "아아아아아");
console.log('Insert Method :: ', list);
list.print();

list.remove(5);
console.log('Remove Method :: ', list);
list.print();

list.reverse();
list.print();



