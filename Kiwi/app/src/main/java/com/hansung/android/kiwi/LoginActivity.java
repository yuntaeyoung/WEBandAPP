package com.hansung.android.kiwi;

import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

public class LoginActivity extends Activity {
    final static String TAG = "LoginActivity";
    static Context mContext = null;

    static EditText l_email, l_password;
    private Button login_btn, register_btn;
    private final int  MY_PERMISSION_REQUEST_STORAGE = 100;


    public LoginActivity() {
        super();


    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login); //빨간줄 없는데 앱 중지
              //내 이미지 파일은 "drawable-v24"폴더에 있습니다. "drawable"폴더에도 복사했습니다. 문제 해결됨.
        //23이상일 때는 아래의 권한 설정해주기

        mContext = this;

        if (Build.VERSION.SDK_INT >= 23) {
            checkPermission(Contact.PERMISSIONS);
        }

        l_email = (EditText) findViewById(R.id.email); //id 입력칸
        l_password = (EditText) findViewById(R.id.password); //pw 입력칸

        login_btn = (Button) findViewById(R.id.login);
        register_btn = (Button) findViewById(R.id.register);

        register_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                l_email.setText("");
                l_password.setText("");
                Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
                 startActivity(intent);
            }
        });

        login_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                performLogin();
               // new GetData(LoginActivity.this).execute();
            }

        });
    }


    private void performLogin() {
        final String email=l_email.getText().toString();
        String password=l_password.getText().toString();

        JSONObject postDataParam = new JSONObject();
        try {
            postDataParam.put("email", email);
            postDataParam.put("password", password);
        } catch (JSONException e) {
            Log.e(TAG, "JSONEXception");
        }
        new LoginInsertData(LoginActivity.this).execute(postDataParam);
        // new GetData(LoginActivity.this).execute(); //
        new GetData(LoginActivity.this).execute();  // User 정보 받아옴


        if(validar()){
            Log.e("validar: ", String.valueOf(validar()));
            Log.e("email: ",email);
            Log.e("password: ",password);


        }else{
            Log.e("validar: ", String.valueOf(validar()));
        }

    }







    private boolean validar() {
        boolean valid = true;

        String email=l_email.getText().toString();
        String password=l_password.getText().toString();

        if (email.isEmpty() || !android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            l_email.setError("유효한 email 형식을 입력해주세요.");
            //LoginActivity.prefConfig.displayToast("유효한 email 형식을 입력해주세요.");
            valid = false;
        } else {
            l_email.setError(null);
        }
        if (password.isEmpty() || password.length() < 6 || password.length() > 10) {
            l_password.setError("6~10자리의 비밀번호를 입력해주세요.");
            //LoginActivity.prefConfig.displayToast("6~10자리의 비밀번호를 입력해주세요.");
            valid = false;
        }else{
            l_password.setError(null);
        }
        return valid;
    }

    // 권한체크
    @TargetApi(Build.VERSION_CODES.M)
    private void checkPermission(String[] permissions){
        requestPermissions(permissions, MY_PERMISSION_REQUEST_STORAGE);
    }



}
