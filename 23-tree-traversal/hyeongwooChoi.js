class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                } else {
                    return this;
                }
            }
        }
    }

    /**
     * Find 메소드
     * 빅오 : O(log n)
     *
     */
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found ? current : false;
    }
    contanis(value) {
        if (this.root === null) return false;
        var current = this.root, found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else  {
                return  true;
            }
        }
        return false;
    }

    /*
     * BFS - 너비 우선 탐색
     */
    BFS() {
        var node = this.root,
            data = [],
            queue = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    /*
     * DFS_PreOrder - 깊이 우선 탐색 (전방 순회)
     */
    DFSPreOrder() {
        var data = [];
        function travers(node) {
            data.push(node.value);
            if (node.left) travers(node.left);
            if (node.right) travers(node.right);
        }
        travers(this.root);
        return data;
    }

    /*
     * DFS_PostOrder - 깊이 우선 탐색 (후위 순회)
     */
    DFSPostOrder() {
        var data = [];
        function travers(node) {
            if (node.left) travers(node.left);
            if (node.right) travers(node.right);
            data.push(node.value);
        }
        travers(this.root);
        return data;
    }

    /*
     * DFS_InOrder - 깊이 우선 탐색 (중위 순회)
     */
    DFSInOrder() {
        var data = [];
        function travers(node) {
            if (node.left) travers(node.left);
            data.push(node.value);
            if (node.right) travers(node.right);
        }
        travers(this.root);
        return data;
    }

    /**
     * 너비 우선 탐색(Breadth-First Search)과 깊이 우선 탐색(Depth-First Search)은 언제 사용 하는가 ?
     * - 너비 우선 탐색 : 루트 노드(다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법, 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법
     *                 1) BFS보다 좀 더 간단함
     *                 2) BFS보다 검색 속도 자체는 저하
     *
     * - 깊이 우선 탐색 : 루트 노드(다른 임의의 노드)에서 시작해서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방식
     *                 1) BFS보다 좀 더 간단함
     *                 2) BFS보다 검색 속도 자체는 저하
     */
}

var tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));

console.log("BFS :: ", tree.BFS(10));

console.log("DFSPreOrder :: ", tree.DFSPreOrder());

console.log("DFSPostOrder :: ", tree.DFSPostOrder());

console.log("DFSInOrder :: ", tree.DFSInOrder());
