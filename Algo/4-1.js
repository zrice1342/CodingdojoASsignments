class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        let node = new Node(value)
        if(!this.top){
            this.top = node
        }
        node.next = this.top 
        this.top = node
        return this
    }
    
    // remove and return the top value
    pop(){
    let temp = this.top.next
    this.top = null
    this.top = temp
    return this.top.value
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        return this.top.value
    }

    printStack() {
    let runner = this.top
    let arr = []
    while(runner){
        console.log(runner.value)
        runner = runner.next
    }
    }
}



var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
console.log(sls.pop())
console.log(sls.returnTop())
sls.printStack()