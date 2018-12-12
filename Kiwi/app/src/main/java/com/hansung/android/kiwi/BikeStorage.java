package com.hansung.android.kiwi;

public class BikeStorage {
    String id;
    String StorageName;
    String Latitude;
    String Longitude;


    public BikeStorage (String id, String StorageName, String Latitude, String Longitude) {
        this.id = id;
        this.StorageName = StorageName;
        this.Latitude = Latitude;
        this.Longitude = Longitude;


    }

//    public String toString()
//    {
//        return String.format("ID = %s \n StorageName = %s \n Latitude = %s \n Longitude = %s",
//                id,StorageName,Latitude,Longitude);
//    }


    public String getId(){
        return id;
    }

    public String getStorageName() {
        return StorageName;
    }

    public String getLatitude() {
        return Latitude;
    }

    public String getLongitude() {
        return Longitude;
    }



}
