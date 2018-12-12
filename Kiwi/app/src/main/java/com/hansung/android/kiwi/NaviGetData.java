package com.hansung.android.kiwi;

import android.app.Activity;
import android.support.design.widget.NavigationView;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import static com.hansung.android.kiwi.LoginPostRequest.temp;
import static com.hansung.android.kiwi.MainActivity.defaultUrl;

import static com.hansung.android.kiwi.MyPageGetData.TAG_email;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_expiration;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_lssued;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_num;
import static com.hansung.android.kiwi.MyPageGetData.TAG_name;

public class NaviGetData extends GetRequest {
    public NaviGetData(Activity activity) {
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
        jsonString = temp;
        if (jsonString == null)
            return;
        else if(jsonString.trim().equals("0")){
            return;
        }

        else{
            Log.d("네비겟데이터jsonString3", jsonString+"");
            ArrayList<User> arrayList = getArrayListFromJSONString(jsonString); //겟어레이메소드 실
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




    protected ArrayList<User> getArrayListFromJSONString(String jsonString) {
        ArrayList<User> output = new ArrayList(); //User Array 생성
        try{

            Log.d("유저 제이슨스트링값", jsonString);

            //     JSONArray jsonArray=new JSONArray(jsonString); //json형식의 string을 객체에 저장



            JSONObject jsonObject = null;
            jsonObject = new JSONObject(jsonString);
            JSONObject jsonUser = jsonObject.getJSONObject("user"); //user 카테고리 확인하고
            // 그 안에있는 name, email 등 정보 추출


            Log.d("유저 제이슨스트링 > 제이슨오브젝트 ", String.valueOf(jsonUser));


            //정수형: getInt(), 실수형: getDouble(), 문자: getString()


//                User user = new User(jsonObject.getString("\"id\""), //"id"로 넘어옴
//                        jsonObject.getString("\"name\""),
//                        jsonObject.getString("\"email\""),
//                        jsonObject.getString("\"license_num\""),
//                        jsonObject.getString("\"license_lssued\""),
//                        jsonObject.getString("\"license_expiration\""));

//            User user = new User(jsonObject.getString("id"), //id 로 넘어옴
//                    jsonObject.getString("name"),
//                    jsonObject.getString("email"),
//                    jsonObject.getString("license_num"),
//                    jsonObject.getString("license_lssued"),
//                    jsonObject.getString("license_expiration"));
//

            TAG_name=jsonUser.getString("name");
            Log.d("",TAG_name);
            TAG_email=jsonUser.getString("email");
            TAG_license_num = jsonUser.getString("license_num");
            TAG_license_lssued = jsonUser.getString("license_issued");
            TAG_license_expiration = jsonUser.getString("license_expiration");

            Log.d("",TAG_name);
            Log.d("",TAG_email);
            Log.d("",TAG_license_expiration);

//                User user = new User(String);
//
//              Log.d("어레이 name", user.getId());
//              Log.d("어레이 email", user.getEmail());
//              Log.d("어레이 password", user.getPassword());
//              Log.d("어레이 l_num", user.getLicense_num());
//              Log.d("어레이 l_lssued", user.getLicense_lssued());
//              Log.d("어레이 l_expiration", user.getLicense_expiration());

            Log.v("Navi", jsonObject.toString());
            //output.add(user);
//
//                View header = ((NavigationView)findViewById(R.id.nav_view)).getHeaderView(0);
//                ((TextView) header.findViewById(R.id.Name)).setText(TAG_name);
//                ((TextView) header.findViewById(R.id.Email)).setText(TAG_email);


        } catch (JSONException e) {
            e.printStackTrace();
        }
        return output;
    }




}
