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
        this.valArr = []
    }

    // Inserts a value into the tree
    // positioning based on it's value.

    add(value) {

        if (this.valArr.includes(value)) { console.log("duplicate"); return }
        this.valArr.push(value)
        let runner = this.root
        if (runner == null) {
            this.root = new BSTNode(value)
        }
        else {
            while (runner != null) {
                if (runner.value < value) {
                    if (runner.right == null) { runner.right = new BSTNode(value); return }
                    runner = runner.right
                }
                else if (runner.value > value) {
                    if (runner.left == null) { runner.left = new BSTNode(value); return }
                    runner = runner.left
                }
            }
        }
    }
    findMin() {
        let runner = this.root
        while (runner.left != null) { runner = runner.left }
        return runner.value
    }

    findMax() {
        let runner = this.root
        while (runner.right != null) { runner = runner.right }
        return runner.value
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
}
