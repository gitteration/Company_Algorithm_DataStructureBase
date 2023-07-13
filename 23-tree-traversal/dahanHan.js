class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while(true) {
            if(val === temp.value) return undefined;

            if(val > temp.value) {
                if(!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            } else {
                if(!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
        }
    }
    /**
     * BFS - 너비 우선 탐색
     * - 방문한 노드의 값을 저장할 대기열(어레이일 수 있음) 및 변수 생성
     * - 루트 노드를 대기열에 배치합니다
     * - 대기열에 있는 항목이 있는 한 반복
     * - - 대기열에서 노드의 대기열을 해제하고 노드를 저장하는 변수에 노드의 값을 밀어넣습니다
     * - - 대기열에서 해제된 노드에 왼쪽 속성이 있는 경우 - 대기열에 추가
     * - - 대기열에서 해제된 노드에 올바른 속성이 있으면 해당 속성을 대기열에 추가
     * - 값을 저장하는 변수를 반환합니다
     */
    BFS(){
        let queue = [];
        let node = this.root;
        queue.push(node);

        let data = [];
        while(queue.length){
            node = queue.shift();
            // data.push(node);
            data.push(node.value);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    /**
     * DFS - 깊이 우선 탐색 - 전위 순회
     * - 방문한 노드의 값을 저장할 변수를 만듭니다
     * - BST의 루트를 current라는 변수에 저장합니다
     * - 노드를 수락하는 도우미 기능 작성
     * - - 값을 저장하는 변수에 노드의 값을 푸시합니다
     * - - 노드에 왼쪽 속성이 있는 경우 노드의 왼쪽 속성을 가진 도우미 기능을 호출합니다
     * - - 노드에 올바른 속성이 있는 경우 노드에 올바른 속성이 있는 도우미 기능을 호출합니다
     * - 현재 변수를 사용하여 도우미 기능 호출
     * - 값 배열을 반환
     */
    DFSPreOrder(){
        //헬퍼
        let traverse = (node) => {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        };

        let data = [];
        let current = this.root;
        traverse(current);
        return data;
    }
    /**
     * DFS - 깊이 우선 탐색 - 후위 순회
     * - 방문한 노드의 값을 저장할 변수를 만듭니다
     * - BST의 루트를 current라는 변수에 저장합니다
     * - 노드를 수락하는 도우미 기능 작성
     * - - 노드에 왼쪽 속성이 있는 경우 노드의 왼쪽 속성을 가진 도우미 기능을 호출합니다
     * - - 노드에 올바른 속성이 있는 경우 노드에 올바른 속성이 있는 도우미 기능을 호출합니다
     * - - 값을 저장하는 변수에 노드의 값을 푸시합니다 * 전위 순회와 비교하였을 떄 값을 넣는 순서가 달라짐.
     * - - 현재 변수를 사용하여 도우미 기능 실행
     * - 값 배열을 반환
     */
    DFSPostOrder(){
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value); // 데이터 입력 순서
        };

        let data = [];
        let current = this.root;
        traverse(current);
        return data;
    }

    /**
     * DFS - 깊이 우선 텀색 - 중위 순회
     * - 방문한 노드의 값을 저장할 변수를 만듭니다
     * - BST의 루트를 current라는 변수에 저장합니다
     * - 노드를 수락하는 도우미 기능 작성
     * - - 노드에 왼쪽 속성이 있는 경우 노드의 왼쪽 속성을 가진 도우미 기능을 호출합니다
     * - - 값을 저장하는 변수에 노드의 값을 푸시합니다 * 데이터 저장 시점
     * - - 노드에 올바른 속성이 있는 경우 노드에 올바른 속성이 있는 도우미 기능을 호출합니다
     * - 현재 변수를 사용하여 도우미 기능 호출
     * - 값 배열을 반환
     */
    DFSInOrder(){
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            data.push(node.value); // 데이터 입력 순서
            if (node.right) traverse(node.right);
        };

        let data = [];
        let current = this.root;
        traverse(current);
        return data;
    }
}

/*
- 트리는 루트 및 하위 노드를 포함하는 비선형 데이터 구조입니다
- 이진 트리는 모든 유형의 값을 가질 수 있지만 각 부모에 대해 최대 두 개의 자식을 가질 수 있습니다
- 이진 검색 트리는 부모의 왼쪽에 있는 모든 노드가 값보다 작고 오른쪽에 있는 모든 노드가 더 큰 이진 트리의 보다 구체적인 버전입니다
- BFS 및 DFS를 사용하여 트리를 검색할 수 있습니다
 */
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log('너비 우선 탐색 : ', tree.BFS()); // [10, 6, 15, 3, 8, 20]
console.log('깊이 우선 탐색 - 전위 순회 : ', tree.DFSPreOrder()) // [10, 6, 3, 8, 15, 20]
console.log('깊이 우선 탐색 - 후위 순회 : ', tree.DFSPostOrder()); // [3, 8, 6, 20, 15, 10]
console.log('깊이 우선 탐색 - 중위 순회 : ', tree.DFSInOrder()); // [3, 6, 8, 10, 15, 20]


/**
 * 코딩 연습 63: Binary Search Tree - remove Exercise
 * 이진 검색 트리 - 연습 제거
 * BinarySearchTree.prototype에 다음 기능을 구현합니다.
 * - 이진 검색 트리에서 노드를 제거해야 합니다.
 * - 제거 기능은 다음을 처리 할 수 있어야 합니다.
 * - - 루트 노드 제거
 * - - 한 자녀가 있는 노드 제거
 * - - 두 자녀가 있는 노드 제거
 * - 함수는 제거된 노드를 반환해야 합니다.
 */
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// binarySearchTree.remove(50);
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.right.right // null


/**
 * 코딩 연습 64: Binary Search Tree Exercise - Find 2nd largest node
 * BinarySearchTree 클래스에 함수 쓰기
 * insert - 값을 수락하고 올바른 위치로 BST에 삽입합니다. 함수는 이진 검색 트리를 반환해야 합니다.
 */
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.root.value // 15
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.left.right.value // 12


/**
 * 코딩 연습 65: Binary Search Tree Exercise - Check if balanced
 * - BinarySearchTree 클래스에 함수 쓰기
 * - IsBalanced
 * - - BST가 균형을 이루면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 * - 균형 잡힌 트리는 모든 리프 노드 또는 단일 자식 노드의 깊이가 하나 이상 차이가 나지 않는 트리로 정의됩니다.
 */
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.isBalanced(); // true

// var binarySearchTree2 = new BinarySearchTree();
// binarySearchTree2.insert(5);
// binarySearchTree2.isBalanced(); // true
// binarySearchTree2.insert(6);
// binarySearchTree2.isBalanced(); // true
// binarySearchTree2.insert(7);
// binarySearchTree2.isBalanced(); // false