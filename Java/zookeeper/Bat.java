package zookeeper;

public class Bat extends Mammal {
	public Bat(int energyLevel) {
		super(energyLevel);
	}
	public Bat() {
    }
    public void attacktown() {
		System.out.println("the sound of a town on fire");
		energyLevel -= 100;
	}
	public void eatHumans() {
		System.out.println("Yummy");
		energyLevel += 25;
	}
	public void fly() {
		System.out.println("the sound a bat taking off");
		energyLevel -= 50;
	}
}
