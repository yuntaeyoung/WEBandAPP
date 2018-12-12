package com.hansung.android.kiwi;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Handler;
import android.util.Log;
import android.widget.EditText;
import android.widget.Toast;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


import javax.net.ssl.HttpsURLConnection;

import static com.hansung.android.kiwi.MyPageGetData.TAG_email;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_expiration;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_lssued;
import static com.hansung.android.kiwi.MyPageGetData.TAG_license_num;
import static com.hansung.android.kiwi.MyPageGetData.TAG_name;


public class LoginPostRequest  extends AsyncTask<JSONObject, Void, String> {
    Activity activity;
    URL url;

    private EditText l_email, l_password;

    public LoginPostRequest(Activity activity) {
        this.activity = activity;
    }

    public String jsonString;

    public static String temp;


    @Override
    protected String doInBackground(JSONObject... postDataParams) {

        try {
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setReadTimeout(10000 /* milliseconds */);
            conn.setConnectTimeout(10000 /* milliseconds */);
            conn.setRequestMethod("POST");
//            String cookieString = variable.getCookies();
//            if (cookieString != null) {
//                conn.setRequestProperty("user", cookieString);
//            }
//            conn.setRequestProperty("Content-Type", "application/json");//application JSON 형식으로 전송
//            conn.setRequestProperty("Accept", "text/html");//서버에 response 데이터를 html로 받음
            conn.setDoInput(true);
            conn.setDoOutput(true);


            //서버로 보내기위해서 스트림 만듬
            OutputStream os = conn.getOutputStream();
            //버퍼를 생성하고 넣음
            BufferedWriter writer = new BufferedWriter(
                    new OutputStreamWriter(os, "UTF-8"));

            String str = getPostDataString(postDataParams[0]);

            Log.e("params", "Post String = " + str);

            writer.write(str);

            writer.flush();
            writer.close(); //버퍼를 받아줌
            os.close();

            int responseCode = conn.getResponseCode();

            if (responseCode == HttpsURLConnection.HTTP_OK) {
                //서버로 부터 데이터를 받음

                final String COOKIES_HEADER = "Set_Cookie";


               // variable.setCookies(conn.getHeaderField(COOKIES_HEADER));   // 공통 쿠키 선언 로그인할 때 최초로 이제 보낼때 헤더에 쿠키만 보내면 됨 쉐어드 프레퍼런스를 활용


                List<String> cookies = conn.getHeaderFields().get("set-cookie"); // 쿠키 값 조회방법

                if (cookies != null) {
                    for (String cookie : cookies) {
                        Log.d("@COOKIE", cookie.split(";\\s*")[0]);
                        String cok = cookie.split(";\\s*")[0];
                       // variable.setCookies(cok);
                     //   Log.e("쿠키", variable.getCookies());
                    }
                }

                //Log.e("쿠키",variable.getCookies());


                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuffer sb = new StringBuffer("");
                String line = "";

                while ((line = in.readLine()) != null) {
                    sb.append(line);
                    break;
                }
                Log.e("파람스", sb.toString());


                in.close();
                if (!sb.toString().trim().equals("0"))
                  //  SbExtraction(sb); // 스트링버퍼를 추출해서 세팅
                return sb.toString(); //서버로 부터 받은 값을 리턴

            } else {
                return new String("Server Error : " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    protected void onPostExecute(String result) {
//          Toast.makeText(activity, result,
//                Toast.LENGTH_LONG).show();
        super.onPostExecute(result);

      //  variable = Variable.getInstance();

        String messageFailed = "아이디와 비밀번호를 확인해주세요";
        String messageOk = "로그인성공";
        //Log.d("오류", result+"");
        temp = result.trim();
        //temp="0";
        Log.d("오류", temp);

        l_email = LoginActivity.l_email;
        String email=l_email.getText().toString();
        Log.d("로그인시 입력한 email",email);




        if (temp == null || temp.equals("\"0\"")) { //"0" 비교위해
            Toast.makeText(activity, messageFailed,
                    Toast.LENGTH_LONG).show();
            Log.d("로그인실패시", temp);




            return;
        } else {
           // Toast.makeText(activity, temp,
           //         Toast.LENGTH_LONG).show();
            Log.d("로그인한 사용자 가입정보", temp);

            // 보관소별 위경도값 보내기
            new TMapGetData((LoginActivity) LoginActivity.mContext).execute();
            //보관소별 바이크 정보
            new BikeInfoGetData((LoginActivity) LoginActivity.mContext).execute();
            // 로그인한 사용자 가입정보 보내기
            new MyPageGetData((LoginActivity)LoginActivity.mContext).execute();


//로그인한 사용자 이름 이메일 네비에 띄우기
//            new NaviGetData((LoginActivity)LoginActivity.mContext).execute();

/*
            Intent Loginintent =new Intent(((LoginActivity) LoginActivity.mContext), NaviActivity.class);
            ((LoginActivity)LoginActivity.mContext).startActivity(Loginintent);
            Loginintent.putExtra("email", email);
           // ((LoginActivity) LoginActivity.mContext).overridePendingTransition(0,0);
            activity.finish();
*/

                Handler handler = new Handler();
                handler.postDelayed(new Runnable() {
                    @Override
                    public void run() {

                        Intent Loginintent =new Intent(((LoginActivity) LoginActivity.mContext), NaviActivity.class);
                        ((LoginActivity)LoginActivity.mContext).startActivity(Loginintent);
                        //Loginintent.putExtra("email", email);
                        // ((LoginActivity) LoginActivity.mContext).overridePendingTransition(0,0);
                        activity.finish();

                    }
                }, 1000);
        }

    }

    private String getPostDataString(JSONObject params) throws Exception {

        StringBuilder result = new StringBuilder();
        boolean first = true;
       // variable = Variable.getInstance();

        Iterator<String> itr = params.keys();


        while (itr.hasNext()) {

            String key = itr.next();
            Object value = params.get(key);


            if (first)
                first = false;
            else
                result.append("&");

            result.append(URLEncoder.encode(key, "UTF-8"));
            result.append("=");
            result.append(URLEncoder.encode(value.toString(), "UTF-8"));

        }
        return result.toString();
    }

    private void SbExtraction(StringBuffer sb) {

        String SB = sb.toString(); //일단 String버퍼를 스트링 형식으로 변형

        try {
            JSONObject jsonObject = new JSONObject(SB);
            Log.e("로그5",jsonObject.toString());
          //  Log.e("로그5",jsonObject.getString("userPicture"));

        } catch (JSONException e) {
            e.printStackTrace();
          //  Log.e("로그5");
        }




    }


}
