package phone;

public class Galaxy extends Phone implements Ringable {
    public Galaxy(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
        return this.getringTone();

    }
    @Override
    public String unlock() {
        return "unlocked";
    }
    @Override
    public void displayInfo() {
        System.out.println("the version number is" + this.getversionNumber());
        System.out.println("the battery % is %" + this.getbatterPercentage());
        System.out.println("the carrier is" + this.getcarrier());
        System.out.println("the ringtone is" + this.getringTone());    
}
}

