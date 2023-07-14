
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true) {

            if (value === current.value) {
                return undefined;
            }

            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (current.right == null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }

        return;

    }

    find(value) {
        if (this.root === null) {
            return false;
        }

        let current = this.root,
            found = false;

        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }

        if (!found) {
            return undefined;
        }

        return current;
    }

    contains(value) {
        if (this.root === null) {
            return false;
        }

        let current = this.root,
            found = false;

        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let node = this.root,
            data = [],
            queue = [];

        if (!node) return data;

        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

        return data;

    }

    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);

        return data;
    }

    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(current);

        return data;
    }

    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);

        return data;
    }


}

let tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())