class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value){
        var node = new Node(value)
        var runner = this.head
        var lastrunner 
        while (runner){
            lastrunner = runner
            runner = runner.next
            console.log(runner)
            console.log(this)
        }
        lastrunner.next=node
        return this;
    }


    // given a value, print whether the list contains that value
    contains(value) {
        let pointer = this.head;
        while (pointer != null) {
            if (pointer.value == value) {
                console.log("Found it!");
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }

    // print out the SLL
    display(){
        var runner = this.head
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
    }

}


var newSLL = new SLL()
newSLL.addToFront(3)
newSLL.addToFront(4)
newSLL.addToFront(3)
newSLL.addToBack(9)
newSLL.addToBack(7)
newSLL.addToBack(6)
newSLL.display()