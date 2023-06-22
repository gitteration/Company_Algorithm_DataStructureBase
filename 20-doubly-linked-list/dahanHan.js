class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyinkedList {
    constructor() {
        this.tail = null;
        this.length = 0;
        this.head = null;
    }

    /**
     * - 함수에 전달된 값으로 새 노드 생성
     * - 헤드 속성이 null인 경우 헤드와 테일을 새로 생성된 노드로 설정합니다
     * - 그렇지 않은 경우 테일의 다음 속성을 해당 노드로 설정합니다
     * - 새로 생성된 노드의 이전 속성을 테일로 설정합니다
     * - 테일을 새로 생성된 노드로 설정합니다
     * - 길이를 늘립니다
     * - 이중으로 연결된 목록 반환
     */
    push(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * - 헤드가 없는 경우 정의되지 않은 상태로 반환
     * - 나중에 반환할 변수에 현재 꼬리에 저장
     * - 길이가 1인 경우 머리와 꼬리를 null로 설정합니다
     * - 꼬리를 이전 노드로 업데이트합니다.
     * - newTails 옆에 null 설정합니다
     * - 길이를 줄입니다
     * - 제거된 값 반환
     */
    pop() {
        if(!this.head) return undefined;

        let current = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.prev;
            this.tail.next = null;

            current.prev = null; // 반환할 노드 연결 끊기
        }

        this.length --;
        return current;
    }
    /**
     * - 길이가 0인 경우 정의되지 않은 반환
     * - 현재 헤드 속성을 변수에 저장합니다(이전 헤드라고 부릅니다)
     * - 길이가 1인 경우
     * - - 헤드를 null로 설정합니다
     * - - 테일을 null로 설정합니다
     * - 헤드를 이전 헤드의 다음 헤드로 업데이트합니다
     * - 헤드의 이전 속성을 null로 설정합니다
     * - 이전 헤드의 다음 값을 null로 설정합니다
     * - 길이를 줄입니다
     * - 오래된 머리를 반환합니다
     */
    shift() {
        if(!this.head) return undefined;

        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    /**
     * - 함수에 전달된 값으로 새 노드 생성
     * - 길이가 0인 경우
     * - - 헤드를 새 노드로 설정합니다
     * - - 테일을 새 노드로 설정합니다
     * - 그렇지 않으면
     * - 목록 머리에 있는 이전 속성을 새 노드로 설정합니다
     * - 새 노드의 다음 속성을 헤드 속성으로 설정합니다
     * - 헤드를 새 노드로 업데이트합니다
     * - 길이를 늘립니다
     * - 목록 반환
     */
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;

            this.head = newNode;
        }
        this.length++;
        return this;
    }
    /**
     * - 인덱스가 0보다 작거나 길면 null을 반환합니다
     * - 인덱스가 목록 길이의 절반 이하인 경우
     * - - 목록을 머리부터 시작하여 가운데를 향해 반복합니다
     * - - 노드를 찾으면 반환합니다
     * - 인덱스가 목록 길이의 절반보다 클 경우
     * - - 꼬리에서 시작하여 목록을 순환하고 중간을 향해 순환합니다
     * - - 노드를 찾으면 반환합니다
     */
    get(index) {
        if(index < 0 || index >= this.length) return null;

        let current;
        let count;

        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }
    /**
     * - 함수에 전달된 인덱스에서 get 메서드의 결과인 변수 생성
     * - - get 메서드가 유효한 노드를 반환하는 경우 해당 노드의 값을 함수에 전달된 값으로 설정합니다
     * - - True 반환
     * - 그렇지 않으면 false를 반환합니다
     */
    set(index, val) {
        let foundNode = this.get(index);

        if(foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }
    /**
     * - 인덱스가 0보다 작거나 길이보다 크거나 같으면 false를 반환합니다
     * - 인덱스가 0이면 unshift()
     * - 인덱스가 길이와 동일한 경우 push()
     * - get 메서드를 사용하여 인덱스 -1에 액세스합니다
     * - 모든 항목을 함께 연결할 올바른 노드에 다음 및 이전 속성 설정
     * - 길이를 늘립니다
     * - True 반환
     */
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.prev = prev;

        newNode.next = temp;
        temp.prev = newNode;

        this.length++;
        return true;
    }

    /**
     * - 인덱스가 0보다 작거나 길이보다 크거나 같으면 정의되지 않은 반환
     * - 지수가 0이면 이동
     * - 인덱스가 length-1과 동일하면 pop
     * - get 메서드를 사용하여 제거할 항목 검색
     * - next 및 prev 속성을 업데이트하여 목록에서 찾은 노드를 제거합니다
     * - 발견된 노드에서 next 및 prev를 null로 설정합니다
     * - 길이를 줄입니다
     * - 제거된 노드를 반환합니다.
     */
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removed = this.get(index);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;

        removed.next = null;
        removed.prev = null;

        this.length--;
        return removed;
    }

    /**
     * 이 함수는 DoubleLinkedList의 모든 노드를 반대로 하고 목록을 반환해야 합니다.
     */
    reverse() {
        /*
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
        */

        let node = this.head;
        let tmp;

        while (node !== null) {
            // 헤드의 이전값 저장
            tmp = node.prev;
            // console.log(tmp);

            // 노드의 순서 스위치
            node.prev = node.next;
            node.next = tmp;

            // 현재 노드를 이전 노드로 변경 -> 이동
            node = node.prev;
        }

        // 머리 꼬리 바꾸기
        this.tail = this.head;
        this.head = tmp.prev;

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

let list = new DoublyinkedList()

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