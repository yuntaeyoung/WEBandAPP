package com.hansung.android.kiwi;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

public class RegisterActivity extends Activity {

    final static String TAG = "RegisterActivity";

    EditText r_name, r_email, r_password, r_pass, r_license_num, r_license_issued, r_license_expiration;
    Button register_btn;
    TextView finish_t;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        r_name = (EditText) findViewById(R.id.name);
        r_email = (EditText) findViewById(R.id.email);
        r_pass = (EditText) findViewById(R.id.pass);
        r_password = (EditText) findViewById(R.id.password);
        r_license_num = (EditText) findViewById(R.id.license_num);
        r_license_issued = (EditText) findViewById(R.id.license_issued);
        r_license_expiration = (EditText) findViewById(R.id.license_expiration);

        register_btn = (Button) findViewById(R.id.register); //회원가입버튼
        finish_t = (TextView) findViewById(R.id.finish);  //회원가입완료 버

        register_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                performRegistration();
            }
        });

        finish_t.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        try {
            Thread.sleep(1500);
        }catch (Exception e){

        }

    }

    public void performRegistration()
    {
        String name=r_name.getText().toString();
        String email=r_email.getText().toString();
        String password=r_password.getText().toString();
        String pass=r_pass.getText().toString(); //비밀번호확인
        String license_num=r_license_num.getText().toString();
        String license_issued=r_license_issued.getText().toString();
        String license_expiration=r_license_expiration.getText().toString();

        JSONObject postDataParam = new JSONObject();

        Log.e("name: ",name);
        Log.e("email: ",email);
        Log.e("password: ",password);
        Log.e("pass: ",pass);

        if(validar())
        {
            Log.e("validar: ", String.valueOf(validar()));


            try {
                postDataParam.put("name", name);
                postDataParam.put("email", email);
                postDataParam.put("password", password);
                postDataParam.put("pass", pass);
                postDataParam.put("license_num", license_num);
                postDataParam.put("license_issued", license_issued);
                postDataParam.put("license_expiration", license_expiration);



                new RegisterInsertData(RegisterActivity.this).execute(postDataParam);


                Intent intent = new Intent(RegisterActivity.this, LoginActivity.class);
                startActivity(intent);
                finish();




            } catch (JSONException e) {
                Log.e(TAG, "JSONEXception");
            }

        }



    }

    private boolean validar() { //유효성 검사
        boolean valid = true;

        String email=r_email.getText().toString();
        String password=r_password.getText().toString();
        String pass=r_pass.getText().toString();
        String license_num=r_license_num.getText().toString();
        String license_lssued=r_license_issued.getText().toString();
        String license_expiration=r_license_expiration.getText().toString();

        if (email.isEmpty() || !android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            r_email.setError("유효한 email 형식을 입력해주세요.");
            valid = false;
        } else {
            r_email.setError(null);
        }
        if (password.isEmpty() || password.length() < 6 || password.length() > 10) {
            r_password.setError("6~10자리의 비밀번호를 입력해주세요.");
            valid = false;
        }else{
            r_password.setError(null);
        }
        if (!pass.equals(password)) {
            r_pass.setError("비밀번호가 일치하지 않습니다.");
            valid = false;
        }else{
            r_pass.setError(null);
        }
        if (license_num.isEmpty()) {
            r_license_num.setError("운전면허번호를 입력해주세요.");
            valid = false;
        }else{
            r_license_num.setError(null);
        }
        if (license_lssued.isEmpty()) {
            r_license_issued.setError("발급일을 입력해주세요.");
            valid = false;
        }else{
            r_license_num.setError(null);
        }
        if (license_expiration.isEmpty()) {
            r_license_expiration.setError("만료일을 입력해주세요.");
            valid = false;
        }else{
            r_license_num.setError(null);
        }
        return valid;
    }




}
