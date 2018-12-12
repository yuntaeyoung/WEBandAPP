package com.hansung.android.kiwi;

import android.app.Activity;
import android.widget.EditText;

import java.net.MalformedURLException;
import java.net.URL;

import static com.hansung.android.kiwi.MainActivity.defaultUrl;


public class InsertData extends PostRequest {
    public InsertData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {

        try {
            url = new URL(defaultUrl + "/register");

        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }


}
