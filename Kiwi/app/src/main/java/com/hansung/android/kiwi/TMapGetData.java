package com.hansung.android.kiwi;

import android.app.Activity;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import com.skt.Tmap.TMapData;
import com.skt.Tmap.TMapGpsManager;
import com.skt.Tmap.TMapMarkerItem;
import com.skt.Tmap.TMapMarkerItem2;
import com.skt.Tmap.TMapPoint;
import com.skt.Tmap.TMapPolyLine;
import com.skt.Tmap.TMapTapi;
import com.skt.Tmap.TMapView;

import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.PointF;
import android.view.View;
import android.widget.Button;

import static java.lang.Double.parseDouble;


import static com.hansung.android.kiwi.LoginPostRequest.temp;
import static com.hansung.android.kiwi.MainActivity.defaultUrl;
import static java.security.AccessController.getContext;

public class TMapGetData extends GetRequest {


    View view;
    TMapView tMapView;
    String apiKey = "f53919d5-456a-4830-890c-e84d651a82de";

    TMapGpsManager tmapgps;
    Button tmapApp_start;
    String car_st="null";
    static double lat, lon;

    public static String  TAG_uid, TAG_StorageName, TAG_Latitude, TAG_Longitude;

    TempOfKiwi tempofKiwi;

    public static String uid;
    String Station_name;
    public static String latitude;
    public static String longitude;






    public TMapGetData(Activity activity){super(activity);}

    @Override
    protected void onPreExecute() {


        try {
            url = new URL(defaultUrl+"/users/BikeStorage");  // http://serverURLStr/get-data
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onPostExecute(String jsonString) {
       // jsonString = output.toString();
        if (jsonString == null) {
            Log.d("jsonStringTMapGetData1", jsonString + "");
            return;
        } else if (jsonString.trim().equals("0")) {
            Log.d("jsonStringTMapGetData2", jsonString + "");
            return;
        } else {
            Log.d("jsonStringTMapGetData3", jsonString + "");

             ArrayList<BikeStorage> arrayList = getBikeArrayListFromJSONString(jsonString); //겟어레이메소드 실
            //  arrayList.get(0).id; //어레이리스트의 몇번째를 가져와 뿌려준다


            tempofKiwi.setBikeStorages(arrayList);

            Log.d("바이크어레이결과", String.valueOf(arrayList));

        }
    }


        protected ArrayList<BikeStorage> getBikeArrayListFromJSONString (String jsonString){
            ArrayList<BikeStorage> output = new ArrayList(); //User Array 생성
            try {



                Log.d("보관소 제이슨스트링값", jsonString);

                JSONObject jsonObject = null;
                jsonObject = new JSONObject(jsonString);
                JSONArray jsonArray = new JSONArray(jsonObject.getString("BikeStorage"));

             //   JSONArray jsonBike =  (JSONArray)jsonObject.getString("BikeStorage"); //user 카테고리 확인하고
                                                                         //   그 안에있는 name, email 등 정보 추출


//
//                JSONArray jsonArray = null;
//                jsonArray = new JSONArray(jsonString);//json형식의 string을 객체에 저장 현재 위경도값이 안들어옴
//                JSONArray jsonBike = jsonArray.getJSONArray(0);
//
               // JSONArray jsonArray = jsonBike.getString("BikeStorage");

                Log.d("제이슨스트링 > 제이슨오브젝트", String.valueOf(jsonArray));

                for (int i = 0; i < jsonArray.length(); i++) {

                     jsonObject = (JSONObject) jsonArray.get(i);

                    Log.d("(for문)제이슨스트링 > 제이슨오브젝트", String.valueOf(jsonObject));

                    BikeStorage bikeStorage = new BikeStorage( TAG_uid = jsonObject.getString("uid"),
                          //  Log.d("바이크보관소이름",TAG_StorageName);
                         TAG_StorageName = jsonObject.getString("Storage_name"),
                         TAG_Latitude = jsonObject.getString("latitude"),
                         TAG_Longitude = jsonObject.getString("longitude")

                     //   Log.v("장소", jsonObject.toString());

                    );

                    Log.d("바이크보관소이름", TAG_StorageName);
                    Log.d("바이크보관소위도", TAG_Latitude);
                    Log.d("바이크보관소경도", TAG_Longitude);

//                    TMapPoint point2 = new TMapPoint(parseDouble(latitude), parseDouble(longitude));
//
//                    TMapPoint tMapPoint = new TMapPoint(parseDouble(latitude), parseDouble(longitude));
//                    MarkerOverlay marker1 = new MarkerOverlay(getContext(), TAG_StorageName,"배터리잔량");
//
//                    String strID = TAG_StorageName; // 교환소이름 저장
//                    marker1.setID(strID);
//                    marker1.setIcon(BitmapFactory.decodeResource(getResources(), R.drawble.poi_dot));
//                    marker1.setTMapPoint(tMapPoint);
//                    tMapView.addMarkerItem2(strID, marker1);
//
//                    Log.d("i:",i+"");
//                    Log.d("Station_name:",TAG_StorageName+"");
//                JSONObject jsonObject = null;
//                jsonObject = new JSONObject(jsonString);
//                JSONObject jsonUser = jsonObject.getJSONObject("user"); //user 카테고리 확인하고
                    // 그 안에있는 name, email 등 정보 추출


                    //     Log.d("유저 제이슨스트링 > 제이슨오브젝트 ", String.valueOf());


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

//                TAG_StorageName = jsonUser.getString("name");
//                Log.d("", TAG_StorageName);
//                TAG_Latitude = jsonUser.getString("email");
//                TAG_Longitude = jsonUser.getString("license_num");
//
//                Log.d("", TAG_StorageName);
//                Log.d("", TAG_Latitude);
//                Log.d("", TAG_Longitude);

//                User user = new User(String);
//
//              Log.d("어레이 name", user.getId());
//              Log.d("어레이 email", user.getEmail());
//              Log.d("어레이 password", user.getPassword());
//              Log.d("어레이 l_num", user.getLicense_num());
//              Log.d("어레이 l_lssued", user.getLicense_lssued());
//              Log.d("어레이 l_expiration", user.getLicense_expiration());

                    //   Log.v("Navi", jsonObject.toString());
                    //output.add(user);
//
                    output.add(bikeStorage);
                }

                } catch (JSONException e) {
                e.printStackTrace();
            }

            return output;
    }
}
