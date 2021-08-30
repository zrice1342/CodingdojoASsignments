class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

addFront(value){
    var node = new Node(value)
    if(this.head ==null){
        this.tail = node
        this.head = node}
    else{
    this.head.prev = node
    node.next = this.head
    this.head = node}
}
addBack(value){
    }

print(){
    var runner = this.head
    while(runner != null){
        console.log(runner)
        runner = runner.next
    }
    }
}

d = new DLL();
d.addFront(8)
d.addFront(9)
d.addFront(3)
d.addFront(1)
d.print()