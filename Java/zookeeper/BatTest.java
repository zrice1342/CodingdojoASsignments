package zookeeper;

public class BatTest {
    public static void main(String[] args) {
        Bat b = new Bat(300);
        b.attacktown();
        b.displayEnergy();
        b.attacktown();
        b.displayEnergy();
        b.attacktown();
        b.displayEnergy();
        b.eatHumans();
        b.displayEnergy();
        b.eatHumans();
        b.displayEnergy();
        b.fly();
        b.displayEnergy();
        b.fly();
    }
}
