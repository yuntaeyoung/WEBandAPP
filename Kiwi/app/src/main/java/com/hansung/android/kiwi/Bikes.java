package com.hansung.android.kiwi;

public class Bikes {
    String id;
    String Battery;
    String Reserve;
    String BikeName;

    public Bikes (String id, String BikeName, String Battery, String Reserve) {
        this.id = id;
        this.BikeName = BikeName;
        this.Battery = Battery;
        this.Reserve = Reserve;
    }

    public String getId(){
        return id;
    }

    public String getBikeName() {
        return BikeName;
    }

    public String getBattery() { return Battery;}

    public String getReserve() { return  Reserve;}


}
