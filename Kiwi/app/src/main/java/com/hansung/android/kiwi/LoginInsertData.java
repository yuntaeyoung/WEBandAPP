package com.hansung.android.kiwi;

import android.app.Activity;

import java.net.MalformedURLException;
import java.net.URL;
import static com.hansung.android.kiwi.MainActivity.defaultUrl;

public class LoginInsertData  extends LoginPostRequest { //로그인할때 쓰는거 값을 받고 받아오는걸로 로그인함
    public LoginInsertData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {

        try {
            url = new URL(defaultUrl + "/users/authenticate");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}