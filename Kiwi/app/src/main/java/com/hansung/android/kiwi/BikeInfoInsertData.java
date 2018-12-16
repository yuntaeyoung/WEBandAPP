package com.hansung.android.kiwi;

import android.app.Activity;

import java.net.MalformedURLException;
import java.net.URL;

import static com.hansung.android.kiwi.MainActivity.defaultUrl;

public class BikeInfoInsertData extends BikeInfoPostRequest{
    public BikeInfoInsertData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {

        try {
            url = new URL(defaultUrl + "/users/reserve");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}



