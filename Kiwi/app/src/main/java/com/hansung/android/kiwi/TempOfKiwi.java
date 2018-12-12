package com.hansung.android.kiwi;

import org.json.JSONObject;

import java.util.ArrayList;

public class TempOfKiwi {

    private static TempOfKiwi tempofkiwi;

    private TempOfKiwi() {
        tempofkiwi = new TempOfKiwi();
    }

    public static TempOfKiwi getTempofkiwi() {return tempofkiwi;}

    private static ArrayList<BikeStorage> bikeStorages = null; //보관소관련 컬렉션

    public static void setBikeStorages(ArrayList<BikeStorage> bikeStorages){
        TempOfKiwi.bikeStorages = bikeStorages;
    }

    public static ArrayList<BikeStorage> getBikeStorages() {return bikeStorages;};


    private static ArrayList<Bikes> bikes = null;

    public static void setBikes(ArrayList<Bikes> bikes){
        TempOfKiwi.bikes = bikes;
    }

    public static ArrayList<Bikes> getBikes() {return bikes;};

}
