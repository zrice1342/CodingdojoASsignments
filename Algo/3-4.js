class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        var node = new Node(value);
        if(this.head == null) {
            this.head = node;
        }
        var runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
        return this;
    }

    // find the given location in your list and append (add after) that location the given value as a new node
    appendValue(loc, val){
        var node = new Node(val);
        var runner = this.head
        var counter = 1
        while (runner.next !=null){
            if (counter == loc){
                node.next = runner.next
                runner.next = node}
            counter += 1
            runner = runner.next}
        return this;
    }

    // find the given location in your list and prepend (add before) that location the given value as a new node
    prependValue(loc, val){
        var node = new Node(val);
        var runner = this.head
        var counter = 1
        let b;
        let a;
        while (runner.next !=null){
            if (counter-1 == loc-1){
                node.next = runner.next
                runner.next = node}
            counter += 1
            runner = runner.next}
        return this;
    }
    
    // print the singly linked list
    printValues() {
        if(this.head == null) {
            console.log("There's nothing in this list!");
            return this;
        }
        var runner = this.head;
        while(runner != null) {
            console.log(`${runner.value} --> `);
            // console.log(runner.value + " --> ");
            runner = runner.next;
        }
        return this;
    }

}

const sll = new SLList();
sll.addToFront(-3)
sll.addToFront(-122)
sll.addToFront(41)
sll.addToBack(48)
sll.addToBack(-5)
sll.addToBack(-15)
sll.addToBack(14)
sll.printValues()
console.log("==========================================")
sll.appendValue(2, 15)
sll.printValues()
console.log("==========================================")
sll.prependValue(2, 19)
sll.printValues()