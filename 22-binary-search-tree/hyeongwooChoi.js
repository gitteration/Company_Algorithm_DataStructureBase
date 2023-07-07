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

    /**
     * Insert 메소드
     * 빅오 : O(log n)
     *
     */

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

    /**
     * 코딩 연습 59
     */
    insert_pr(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    /**
     * 코딩 연습 60
     */
    find_pr(value) {
        if (this.root === null) return undefined;
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
        return found ? current : undefined;
    }

    /**
     * 코딩 연습 61 DFS(깊이 우선 탐색 방법) : 노드마다 가장 깊이까지 탐색 한 뒤 다음 노드로 이동 하는 방법
     */
    depthFirstSearchInOrder() {
        var result = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }

        if (this.root) traverse(this.root);

        return result;
    }

    /**
     * 코딩 연습 62 BFS(너비 우선 탐색) : DFS와 목적이 동일, 임의의 정점에서 시작해서, 모든 정점을 한 번씩 방문하는 것
     *                              DFS와 다르게 최단 거리를 구하는 알고리즘
     */
    breadthFirstSearch() {
        var result = [];
        var queue = [];

        if (this.root) {
            queue.push(this.root);

            while (queue.length > 0) {
                var node = queue.shift();
                result.push(node.value);

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }
        }

        return result;
    }

    /**
     * 코딩 연습 63 Remove
     */
    remove(value) {
        this.root = this._removeRecursive(this.root, value);
    }

    _removeRecursive(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._removeRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._removeRecursive(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                const minValue = this._findMinValue(node.right);
                node.value = minValue;
                node.right = this._removeRecursive(node.right, minValue);
            }
        }

        return node;
    }

    _findMinValue(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    /**
     * 코딩 연습 64 Find 2nd Largest node
     */
    findSecondLargest() {
        if (this.root === null || (this.root.left === null && this.root.right === null)) {
            return null; // 트리가 비어 있거나 노드가 하나뿐인 경우
        }

        let parent = null;
        let current = this.root;

        // 가장 큰 값을 가진 노드 탐색
        while (current.right !== null) {
            parent = current;
            current = current.right;
        }

        // 가장 큰 값의 왼쪽 서브트리에서 두 번째로 큰 값을 찾음
        if (current.left !== null) {
            current = current.left;
            while (current.right !== null) {
                current = current.right;
            }
            return current.value;
        }

        // 가장 큰 값이 루트 노드일 경우 루트 노드의 왼쪽 서브트리에서 가장 큰 값을 찾음
        if (parent === null) {
            current = this.root.left;
            while (current.right !== null) {
                current = current.right;
            }
            return current.value;
        }

        // 가장 큰 값의 부모 노드 반환
        return parent.value;
    }

    /**
     * 코딩 연습 65 Check if balanced
     */
    isBalanced() {
        return this._isBalancedRecursive(this.root);
    }

    _isBalancedRecursive(node) {
        if (node === null) {
            return true;
        }

        // 왼쪽 서브트리와 오른쪽 서브트리의 높이 차이가 1 이하인지 확인
        const leftHeight = this._getHeight(node.left);
        const rightHeight = this._getHeight(node.right);
        const heightDiff = Math.abs(leftHeight - rightHeight);
        if (heightDiff > 1) {
            return false;
        }

        // 왼쪽 서브트리와 오른쪽 서브트리가 각각 균형 잡혀있는지 확인
        const isLeftBalanced = this._isBalancedRecursive(node.left);
        const isRightBalanced = this._isBalancedRecursive(node.right);

        return isLeftBalanced && isRightBalanced;
    }

    _getHeight(node) {
        if (node === null) {
            return 0;
        }

        const leftHeight = this._getHeight(node.left);
        const rightHeight = this._getHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);

console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));

console.log(tree.find(10));
console.log(tree.find(5));
console.log(tree.find(13));
console.log(tree.find(11));
console.log(tree.find(2));
console.log(tree.find(16));