package phone;

public abstract class Phone {
    private String versionNumber;
    private int batteryPercentage;
    private String carrier;
    private String ringTone;
    public Phone(String versionNumber, int batteryPercentage, String carrier, String ringTone){
        this.versionNumber = versionNumber;
        this.batteryPercentage = batteryPercentage;
        this.carrier = carrier;
        this.ringTone = ringTone;
    }
    // abstract method. This method will be implemented by the subclasses
    public abstract void displayInfo();
    
    public String getversionNumber(){
        return this.versionNumber;
    }
    public int getbatterPercentage(){
        return this.batteryPercentage;
    }
    public String getcarrier(){
        return this.carrier;
    }

    public String getringTone(){
        return this.ringTone;
    }
}


