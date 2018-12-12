package com.hansung.android.kiwi;

import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import static com.hansung.android.kiwi.MyPageGetData.TAG_email;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_expiration;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_lssued;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_num;
import static com.hansung.android.kiwi.MyPageGetData.TAG_name;

public class MyPageFragment extends Fragment {
    View view;

    //public static String TAG_name, TAG_email, TAG_license_num, TAG_license_lssued, TAG_license_expiration;

    private String UserEmail;
    TextView username, useremail, userlicensenumber, userdate, userexpiration;


    public MyPageFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        view = inflater.inflate(R.layout.fragment_my_page, container, false);



        username = view.findViewById(R.id.username);
        useremail = view.findViewById(R.id.useremail);
        userlicensenumber = view.findViewById(R.id.userlicensenumber);
        userdate = view.findViewById(R.id.userdate);
        userexpiration = view.findViewById(R.id.userexpiration);

//        Bundle extra = new Bundle();
//        extra = getArguments();
//        UserEmail = extra.getString("EMAIL");
//        Log.d("UserEmail222: ", UserEmail);


        username.setText(TAG_name);
        useremail.setText(TAG_email);
        userlicensenumber.setText(TAG_license_num);
        userdate.setText(TAG_license_lssued);
        userexpiration.setText(TAG_license_expiration);

        return view;
    }

}
