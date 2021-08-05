package phone;

public class PhoneTester {
    public static void main(String[] args){
        Galaxy s9 = new Galaxy("s9", 99, "verizon", "ring a ding ding");
        s9.displayInfo();
        System.out.println(s9.ring());
        System.out.println(s9.unlock());
    }
}
