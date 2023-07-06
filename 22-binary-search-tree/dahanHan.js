/**
 * 트리 용어
 * - Root - 트리의 맨 위 노드입니다.
 * - Child - 루트에서 이동할 때 다른 노드에 직접 연결된 노드입니다.
 * - Parent - 자식에 대한 반대 개념입니다.
 * - Siblings: 부모가 같은 노드 그룹입니다.
 * - Leaf - 자식이 없는 노드입니다.
 * - Edge - 한 노드와 다른 노드 사이의 연결입니다.
 */

/**
 * 이진 트리의 작동 방식
 * - 모든 상위 노드에는 최대 두 개의 자식 노드가 있습니다
 * - 상위 노드의 왼쪽에 있는 모든 노드는 항상 상위 노드보다 작습니다
 * - 상위 노드의 오른쪽에 있는 모든 노드는 항상 상위 노드보다 큽니다
 */

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
    /**
     * INSERTING A NODE
     * 단계 - 반복적 또는 재귀적
     * - 새 노드 생성
     * - 루트에서 시작
     * - - 루트가 있는지 확인하고 없으면 루트가 새 노드가 됩니다!
     * - - 루트가 있는 경우 새 노드의 값이 루트 값보다 크거나 작은지 확인
     * - 더 큰 경우
     * - - 오른쪽에 노드가 있는지 확인합니다
     * - - - 있는 경우 해당 노드로 이동하고 다음 단계를 반복합니다
     * - - - 없으면 해당 노드를 올바른 속성으로 추가합니다
     * - 더 적을 경우
     * - - 왼쪽에 노드가 있는지 확인합니다
     * - - - 있는 경우 해당 노드로 이동하고 다음 단계를 반복합니다
     * - - - 없으면 해당 노드를 왼쪽 속성으로 추가합니다
     */
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
     * 루트에서 시작
     * - 루트가 있는지, 없으면 루트를 확인합니다. 검색을 마쳤습니다!
     * - 루트가 있으면 새 노드의 값이 우리가 찾고 있는 값인지 확인합니다. 우리가 그것을 찾았다면, 우리는 끝입니다!
     * - 그렇지 않으면 값이 루트 값보다 크거나 작은지 확인합니다
     * - 더 큰 경우
     * - - 오른쪽에 노드가 있는지 확인합니다
     * - - - 있는 경우 해당 노드로 이동하고 다음 단계를 반복합니다
     * - - 만약 없다면, 우리는 수색을 끝냈습니다!
     * - 더 적을 경우
     * - - 왼쪽에 노드가 있는지 확인합니다
     * - - - 있는 경우 해당 노드로 이동하고 다음 단계를 반복합니다
     * - - 만약 없다면, 우리는 수색을 끝냈습니다!
     */
    find(val) {
        if(!this.root) return null;

        let temp = this.root;
        while (true) {
            if (val === temp.value) return temp;

            if (val > temp.value) {
                if (!temp.right) return null;
                temp = temp.right;
            } else {
                if (!temp.left) return null;
                temp = temp.left;
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(13);
tree.insert(8);
tree.insert(20);
console.log(tree);

console.log('');
console.log('');
console.log('');
console.log('find');
let findNode = tree.find(21);
console.log(findNode);
findNode = tree.find(15);
console.log(findNode);
