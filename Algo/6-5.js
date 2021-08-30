class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

add(value) {
        let newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        // check if root is null (empty)
        else {
            let runner = this.root;
            while (runner != null) {
                if (newNode.value > runner.value) {
                    if (runner.right == null) {
                        runner.right = newNode;
                    }
                    else {
                        runner = runner.right;
                    }
                }
                else if (newNode.value < runner.value) {
                    if (runner.left == null) {
                        runner.left = newNode
                    }
                    else {
                        runner = runner.left;
                    }
                }
            }
        }
    }

printTree(node) {
        console.log("Current node = ", node.value);
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }

    }
    height(rootNode = this.root) {
        if (rootNode === null) {
            return 0;
        } else {
            var leftHeight = this.height(rootNode.left)
            var rightHeight = this.height(rootNode.right)
            if (leftHeight > rightHeight) {
                return leftHeight + 1
            } else {
                return rightHeight + 1
            }
        }
    }

isBalanced(rootNode) {
    if (rootNode === null) {
        return 0;
    } else {
        var leftHeight = this.height(rootNode.left)
        var rightHeight = this.height(rootNode.right)
        if (leftHeight - 1 == rightHeight || leftHeight == rightHeight ||rightHeight - 1 == leftHeight  ) {
            console.log("Is balanced")
        } else {
            console.log("is not balanced")
        }
    }    
}
}


let nodes = new BST
nodes.height();
nodes.isBalanced();

