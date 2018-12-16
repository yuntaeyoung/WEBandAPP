package com.hansung.android.kiwi;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.FragmentTransaction;
import android.util.Log;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.afollestad.materialdialogs.DialogAction;
import com.afollestad.materialdialogs.MaterialDialog;

import com.anjlab.android.iab.v3.BillingProcessor;
import com.anjlab.android.iab.v3.Constants;
import com.anjlab.android.iab.v3.SkuDetails;
import com.anjlab.android.iab.v3.TransactionDetails;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.security.AccessController;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Map;
import java.util.zip.Inflater;

import static com.hansung.android.kiwi.LoginPostRequest.temp;
import static com.hansung.android.kiwi.MyPageGetData.TAG_name;
import static com.hansung.android.kiwi.MyPageGetData.TAG_email;

import static com.hansung.android.kiwi.WalletFragment.purchaseDialog;

public class NaviActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener,BillingProcessor.IBillingHandler{
    TempOfKiwi tempofKiwi;

    public static String car_route_station = "default";
    public static int car_route_num = 0;

    public static String BuyTicket = "false";

    public String UserEmail;
    public String Name;
    public String key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9wr8OyrUXB57xekazfrv/" +
            "sfbV9XEC0KLh2Y+LTA2DvpNdxncdz3z79Z+grYux9hHeqCz3G1GqhUUmuGAHIG+Qh7XK3esWUfkDpJ0sn2I3I9xP/" +
            "W0M8oyCdV4NLVgXO0O4I+oUpaPTYlM6Bl7UoJOok1Frf9YZVkFc9q7EFP+84JNq2lmyRvrwqkT/" +
            "WZBghK+QLaoAvdI81vhuzMccNJkwmQJvqeseYq1fSvKPKjZ2ZgCZnpkual+jBdoHGyAmzJtmDD2dahAsq/" +
            "495cetB7tTO9xMBJ7fCq0yCSbogrKnlpcy5JdPfqv9fruT0lqC/ocaXzgQmmJ9QP4HkWwNFHjRwIDAQAB";


    private PurchaseHeartsAdapter skusAdapter;
    public BillingProcessor bp;


    public static ArrayList<SkuDetails> products = new ArrayList<>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_navi);

        bp = new BillingProcessor(this, key, this); //라이센스 키입력



        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
/* 플로팅버
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        */

        if(car_route_num==1){
            car_route_num=0;
            Intent intent = getIntent();
            car_route_station = intent.getStringExtra("station");
        }

        if (Build.VERSION.SDK_INT >= 23) {
            if(ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)!= PackageManager.PERMISSION_GRANTED
                    && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION)!=PackageManager.PERMISSION_GRANTED){

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    requestPermissions(new String[] {Manifest.permission.ACCESS_FINE_LOCATION}, 1); //위치권한 탐색 허용 관련 내용
                }
                return;
            }
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        //처음 fragment
        android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
        ft.replace(R.id.NavFrag, new TMapFragment());
        ft.commit();

        navigationView.setCheckedItem(R.id.nav_home);

        UserEmail = "";
        Intent intent=getIntent();
        UserEmail=intent.getStringExtra("email");

     //   Log.d("네비메뉴 사용자이름",TAG_name);



                View header = ((NavigationView)findViewById(R.id.nav_view)).getHeaderView(0);
        new MyPageGetData((LoginActivity)LoginActivity.mContext).execute();
                Log.d("마이페이지겟데이터-태그이름",TAG_name+"");
                ((TextView) header.findViewById(R.id.Name)).setText(TAG_name); //메뉴에 사용자이름

                ((TextView) header.findViewById(R.id.Email)).setText(TAG_email); //메뉴에 사용자 이메일



    }



    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

//점 세개 메뉴
//    @Override
//    public boolean onCreateOptionsMenu(Menu menu) {
//        // Inflate the menu; this adds items to the action bar if it is present.
//        getMenuInflater().inflate(R.menu.navi, menu);
//        return true;
//    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_home) { // 지도탭
            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.NavFrag, new TMapFragment());
            ft.commit();
            // Handle the camera action
        } else if (id == R.id.nav_dashboard) {// 결제프래그먼트로 넘어감
            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.NavFrag, new WalletFragment());
            ft.commit();
        } else if (id == R.id.nav_notifications) {// QR코드인식
//            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
//            ft.replace(R.id.NavFrag, new HistoryFragment());
//            ft.commit();
            if(BuyTicket == "Ture") {
                Intent intent = new Intent(NaviActivity.this, QrActivity.class);
                startActivity(intent);
                //finish();
            }else{
                String errorMessage = getString(R.string.purchase_error) + " (" + "구매를 하셔야 잠금해제를 할 수 있습니다." + ")";
                Toast.makeText(this, "티켓을 구매해주세요!", Toast.LENGTH_LONG).show();
            }

        } else if (id == R.id.nav_manage) { // 가입자 개인정보
            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.NavFrag, new MyPageFragment());
            ft.commit();



        } else if (id == R.id.nav_share) { //로그아웃
            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.NavFrag, new SettingFragment());
            ft.commit();

        } else if (id == R.id.nav_send) {//키위 바이크 소개
            android.support.v4.app.FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.NavFrag, new HelpFragment());
            ft.commit();

        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }








    @Override
    public void onBillingInitialized() {

        SkuDetails product;
        product = bp.getPurchaseListingDetails("onehour_ticket"); //1시간이용권등록


        products.add(product);
        Log.d("한시간프로덕스id",products.get(0).productId);
        Log.d("한시간프로덕스",products.toString());

        product = bp.getPurchaseListingDetails("twohour_ticket");
        products.add(product);
        Log.d("두시간프로덕시id",products.get(1).productId);
        Log.d("두시간프로덕스",products.toString());



//         Sort ascending order
//        Collections.sort(products, new Comparator<SkuDetails>() {
//            @Override
//            public int compare(SkuDetails o1, SkuDetails o2) {
//                if (o1.priceLong > o2.priceLong) {
//                    return 1;
//                } else if (o1.priceLong < o2.priceLong) {
//                    return -1;
//                } else return 0;
//            }
//        });

        // 결제 아이템 다이얼로그 설정
        skusAdapter = new PurchaseHeartsAdapter(this);
        View purchaseView = getLayoutInflater().inflate(R.layout.layout_dialog_heartstore, null);
        ListView lvSkus = purchaseView.findViewById(R.id.lv_skus);
        lvSkus.setAdapter(skusAdapter);

        purchaseDialog = new MaterialDialog.Builder(this) //getContext()와 같다
                .customView(purchaseView, false)
                .negativeText("취소")
                .onNegative(new MaterialDialog.SingleButtonCallback() {
                    @Override
                    public void onClick(@NonNull MaterialDialog dialog, @NonNull DialogAction which) {
                        dialog.dismiss();
  }
                })
                .build();
        skusAdapter.update(products);
        }

    public void purchaseProduct(final String productId) {//어댑터 클래스에서 productId를 넘겨받고 결제성공하면 onProductPurchased
        //취소하면 onBillingError
        Log.d("purchase메소드실행전",productId);
        if (bp.isPurchased(productId)) {//이미 구매한 항목이있으면
            Log.d("purchaseProduct메소드", String.valueOf(bp.isPurchased(productId)));
            bp.consumePurchase(productId);//즉각소비 하고 true 리턴
            Log.d("컨슈머퍼체이스", String.valueOf(bp.consumePurchase(productId)));
            }
        bp.purchase(this, productId);
        Log.d("purchase", String.valueOf(bp.purchase(this,productId))); //최종구매누르면 나옴 지금은 *오류 요청하신 항목은 구매할 수 없습니다.

    }






    @Override
    public void onProductPurchased(@NonNull String productId, @Nullable TransactionDetails details) {
// 구매한 아이템 정보
        Log.d("onProductPurchased",productId);
        SkuDetails sku = bp.getPurchaseListingDetails(productId);
        Log.d("스쿠값",sku.toString());

        BuyTicket = "Ture"; //구매를 하면 Ture 로 바꿔줌

        // 하트 100개 구매에 성공하였습니다! 메세지 띄우기
        String purchaseMessage = sku.title + getString(R.string.purchase_succeed);
        //  Common.showMessage(this, getCurrentFocus(), purchaseMessage);

        // 구매 처리
        int amount = 0;
        try {
            // 사용자의 하트 100개를 추가
            amount = Integer.parseInt(productId.substring(1));
            // userStore.purchaseHearts(amount, tvNavigationHearts);
        } catch (Exception e) {
            Toast.makeText(this, R.string.purchase_error, Toast.LENGTH_LONG).show();
            e.printStackTrace();
        }
    }



    @Override
    public void onBillingError(int errorCode, @Nullable Throwable error) {
        if (errorCode != Constants.BILLING_RESPONSE_RESULT_USER_CANCELED) {
            String errorMessage = getString(R.string.purchase_error) + " (" + errorCode + ")";
            Toast.makeText(this, errorMessage, Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onPurchaseHistoryRestored() {//??

    }

//    @Override
//    public void onPurchaseHistoryRestored(int errorCode) {//IBillingHandler 클래스에 파라미터에 빈값받게 선언되는데?
//        if (errorCode != Constants.BILLING_RESPONSE_RESULT_USER_CANCELED) {
//            String errorMessage = getString(R.string.purchase_error) + " (" + errorCode + ")";
//            Toast.makeText(this, errorMessage, Toast.LENGTH_SHORT).show();
//        }
//
//
//    }




}
