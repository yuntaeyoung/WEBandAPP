package com.hansung.android.kiwi;

import android.app.Activity;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import static com.hansung.android.kiwi.MainActivity.defaultUrl;

public class BikeInfoGetData extends GetRequest {


    public static String  TAG_uid, TAG_BikeName, TAG_Battery, TAG_Reserve;

    TempOfKiwi tempofKiwi;




    public BikeInfoGetData(Activity activity){super(activity);}

    @Override
    protected void onPreExecute() {


        try {
            url = new URL(defaultUrl+"/users/Bike");  // http://serverURLStr/get-data
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

            ArrayList<Bikes> arrayList = getBikesArrayListFromJSONString(jsonString); //겟어레이메소드 실
            //  arrayList.get(0).id; //어레이리스트의 몇번째를 가져와 뿌려준다


            tempofKiwi.setBikes(arrayList);

            Log.d("바이크어레이결과", String.valueOf(arrayList));

        }
    }

    protected ArrayList<Bikes> getBikesArrayListFromJSONString (String jsonString){
        ArrayList<Bikes> output = new ArrayList(); //User Array 생성
        try {



            Log.d("보관소 제이슨스트링값", jsonString);

            JSONObject jsonObject = null;
            jsonObject = new JSONObject(jsonString);
            JSONArray jsonArray = new JSONArray(jsonObject.getString("Bike"));

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

                Bikes bikes = new Bikes( TAG_uid = jsonObject.getString("uid"),
                        //  Log.d("바이크보관소이름",TAG_StorageName);
                        TAG_BikeName = jsonObject.getString("name"),
                        TAG_Battery = jsonObject.getString("battery"),
                        TAG_Reserve = jsonObject.getString("reserve")

                        //   Log.v("장소", jsonObject.toString());

                );

                Log.d("바이크보관소이름", TAG_BikeName);
                Log.d("바이크배터리량", TAG_Battery);
                Log.d("바이크예약유무", TAG_Reserve);

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
                output.add(bikes);
            }

        } catch (JSONException e) {
            e.printStackTrace();
        }

        return output;
    }









}
