package com.hansung.android.kiwi;

import android.app.Activity;
import android.util.Log;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.content.Context;
import android.widget.Toast;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import static com.hansung.android.kiwi.MainActivity.Table_num;
import static com.hansung.android.kiwi.MainActivity.defaultUrl;

/**
 * Created by kwanwoo on 2017. 10. 17..
 */

public class GetData extends GetRequest {
    public GetData(Activity activity) {
        super(activity);
    }



    @Override
    protected void onPreExecute() {


        try {
            url = new URL(defaultUrl+"/users/authenticate");  // http://serverURLStr/get-data
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onPostExecute(String jsonString) {

        if (jsonString == null)
            return;
        else if(jsonString.trim().equals("0")){
            return;
        }

        else{
          //  ArrayList<User> arrayList = getArrayListFromJSONString(jsonString); //겟어레이메소드 실
            //arrayList.get(3).id; //어레이리스트의 몇번째를 가져와 뿌려준다


        }


        //어레이리스트 각각 칸에는 클래스에대한 정보가 들어있고
       // 그리고 어레이 리스트레 정보를 뿌려준다

//        ArrayAdapter adapter = new ArrayAdapter(activity,
//                android.R.layout.simple_list_item_1,
//                arrayList.toArray());
//        ListView txtList = activity.findViewById(R.id.txtList);
//        txtList.setAdapter(adapter);

    }



//    protected ArrayList<User> getArrayListFromJSONString(String jsonString) {
//        ArrayList<User> output = new ArrayList(); //User Array 생성
//        try {
//
//            JSONArray jsonArray = new JSONArray(jsonString);
//
//            for (int i = 0; i < jsonArray.length(); i++) {
//
//                JSONObject jsonObject = (JSONObject) jsonArray.get(i);
//
//                User user = new User(jsonObject.getString("_id"),
//                        jsonObject.getString("email"));
//                      //  jsonObject.getString("password")); //문장 마침확실히
//
//                output.add(user);
//            }
//        } catch (JSONException e) {
//            Log.e(TAG, "Exception in processing JSONString.", e);
//            e.printStackTrace();
//        }
//        return output;
//    }

    protected ArrayList<BikeStorage> getArrayBikeListFromJSONString(String jsonString) {
        ArrayList<BikeStorage> output = new ArrayList();
        try {

            JSONArray jsonArray = new JSONArray(jsonString);

            for (int i = 0; i < jsonArray.length(); i++) {

                JSONObject jsonObject = (JSONObject) jsonArray.get(i);

                BikeStorage bikeStorage = new BikeStorage(jsonObject.getString("_id"),
                        jsonObject.getString("StorageName"),
                        jsonObject.getString("Latitude"),
                        jsonObject.getString("Longitude") ); //문장 마침확실히

                output.add(bikeStorage);
            }
        } catch (JSONException e) {
            Log.e(TAG, "Exception in processing JSONString.", e);
            e.printStackTrace();
        }
        return output;
    }




}
