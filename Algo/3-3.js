
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
    
    // remove the first node in the list
    removeFromFront() {
        if(!this.head) {
            console.log("There is no list!");
            return null;
        }
        
        var headToRemove = this.head;
        var newHead = this.head.next;

        this.head = newHead;
        headToRemove.next = null;
        return this;
    }

    // remove the last node in the list
    removeFromBack() {
        if(!this.head) {
            console.log("There is no list!");
            return null;
        } 
        if(this.head.next == null) {
            this.head = null;
            console.log("The list is now empty!")
        }
        var runner = this.head;
        while(runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }

    // locate the min value and move it to the front of your list
    minToFront(){
        var runner = this.head;
        var max = 0
        let bm 
        let am 
        while(runner.next != null) {
            if(runner.next.value < max){
                max = runner.next;
                bm=runner;
                am = runner.next.next;
            }
            runner = runner.next;
        }
        this.head = max;
        bm.next = am;
        return this;
    }

    // locate the max value and move it to the end of your list
    maxToBack(){
        var runner = this.head;
        var max = 0
        let bm 
        let am
        let lastrunner
        while(runner.next != null) {
            if(runner.next.value > max){
                max = runner.next;
                bm=runner;
                am = runner.next.next;
            }
            lastrunner = runner 
            runner = runner.next;
        }
        bm.next = am;
        lastrunner.next = max;
        max.next = null;
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
console.log("==========================================")
sll.maxToBack()
sll.printValues()
// console.log("==========================================")
// sll.minToFront()
// sll.printValues()