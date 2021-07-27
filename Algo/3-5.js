class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue {
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        this.head = value;
        this.value = this.tail;
        var runner = this.head
        while (runner.next !=null){
            this.next = value
        }
        return this;
    }

    // remove and return the front value from the queue
    dequeue() {
        console.log(this.head);
        this.head= null;
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        // your code here
    }

    // find the size/length of a queue
    size(){
        // your code here
    }

    displayQueue(){
        // your code here
    }

}


var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
q.dequeue();
q.size();
q.contains(3);
q.contains(6);
q.displayQueue();