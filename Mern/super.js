class Ninja {
    constructor(name) {
        this.name = name; 
        this.health = 0;
        this.speed = 2;
        this.strength = 3;
    }
    sayName() {
        console.log(`${this.constructor.name}`);
    }
    showStats(){
        console.log(`health is ${this.health}`);
        console.log(`speed is ${this.speed}`);
        console.log(`strength is ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }

}
// child M5 class
class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.wisom = 10;
    }
    speakWisdom() { 
    console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();