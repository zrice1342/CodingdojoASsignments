class Vehicle {
    constructor(name, health, speed, strength) {
        this.name = name; 
        this.health = health;
        this.speed = 2;
        this.strength = 3;
    }
    sayName() {
        console.log(``);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
const m5 = new M5("Blue");
m5.childFunction();