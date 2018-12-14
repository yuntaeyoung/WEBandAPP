package com.hansung.android.kiwi;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.GridLayout;
import android.widget.GridView;
import android.widget.ListAdapter;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import static com.hansung.android.kiwi.NaviActivity.car_route_num;
import static com.hansung.android.kiwi.MainActivity.Table_num;

public class BikeInfoActivity extends AppCompatActivity {

    private GridView gridView;
    TextView station_name, route;

    TempOfKiwi tempofKiwi;

    ArrayList<HashMap<String, String>> mArrayList;
    String email="hpjang@hansung.ac.kr";
    String station;
    HashMap<String,String> hashMap_id = new HashMap<>();

    private static final String TAG_BatteryLevel = "Battery";
    private static final String TAG_Reservation = "Reserve";

    public String uid = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_batt_info);

        Toolbar toolbar = (Toolbar) findViewById(R.id.default_toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);


        Intent intent = getIntent();
        station = intent.getStringExtra("station");

        station_name=findViewById(R.id.station_name);
        station_name.setText(station);

        gridView = findViewById(R.id.gridView);

        GetInfo(station);
        //cardEvent(gridLayout);
        gridView.setOnItemClickListener(new AdapterView.OnItemClickListener()
        {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id)
            {
                String a = String.valueOf(position);
                //Toast.makeText(getApplicationContext(), a, Toast.LENGTH_SHORT).show();
            }
        });

        route=findViewById(R.id.route);
        route.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                car_route_num=1; //네비게이션을 위한 Tmap App으로 연동되는 버튼을 표시해주기 위한 변

                //NaviActivity로 화면이 전환되어 지도가 화면에 출력됨
                Intent intent = new Intent(BikeInfoActivity.this, NaviActivity.class);
                intent.putExtra("station",station);
                startActivity(intent);
                finish();

                /*
                MapFragment frament = new MapFragment();
                Bundle bundle = new Bundle();
                bundle.putString("station", station);
                frament.setArguments(bundle);
                */
            }
        });
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()){
            //toolbar의 back키 눌렀을때 동작 : NaviActivity 화면으로 전환
            case android.R.id.home:{ //toolbar의 back키 눌렀을 때 동작
                finish();
                return true;
            }
        }
        return super.onOptionsItemSelected(item);
    }
    //배터 현환을 보여주는 카드
    private void cardEvent(GridLayout Grid){
        for(int i=0; i<Grid.getChildCount(); i++){
            //배터리 정보를 카드뷰 형태로 진
            GridView cardView = (GridView)Grid.getChildAt(i);
            final int num=i;
            cardView.setOnClickListener(new View.OnClickListener(){

                @Override
                public void onClick(View view) {
                    Toast.makeText(BikeInfoActivity.this, "click" + num, Toast.LENGTH_LONG).show();
                }
            });

        }
    }

    private void GetInfo(String station){

        Table_num=3;
        mArrayList = new ArrayList<>();
        uid = station;
        Log.d("바이크인포uid=station",uid);
        String BikesName;
        String Battery;
        String Reserve;

        //특정 보관소를 누르면 해당 보관소에 대한 퀵보드 정보를 가져오기
        for (int j = 0; j < tempofKiwi.getBikeStorages().size(); j++) {
            if (uid.equals(tempofKiwi.getBikeStorages().get(j).getStorageName())) {
                Log.d("uid == 겟바이크스토레지?", tempofKiwi.getBikeStorages().get(j).getStorageName());
                String BikesUid = tempofKiwi.getBikeStorages().get(j).getId();
                Log.d("BikesUid",BikesUid);
                for(int i = 0; i < tempofKiwi.getBikes().size(); i++) {
                    if(tempofKiwi.getBikes().get(i).getId().equals(BikesUid)) {
                        Log.d("해당하는uid만", tempofKiwi.getBikes().get(i).getId());


                        uid = tempofKiwi.getBikes().get(i).getId();
                        BikesName = tempofKiwi.getBikes().get(i).getBikeName();
                        Battery = tempofKiwi.getBikes().get(i).getBattery();
                        Reserve = tempofKiwi.getBikes().get(i).getReserve();

                        Log.d("번째 보관소", uid);
                        Log.d("0번째 바이크", BikesName);
                        Log.d("바이크 배터리량", Battery);
                        Log.d("예약가능유무", Reserve);

                        //배터리 정보를 HasMap에 저장
                       HashMap<String, String> hashMap = new HashMap<>();
                       hashMap_id.put(String.valueOf(j), uid);
                        Log.d("String.valueOf(j)",String.valueOf(j));
                        Log.d("유아이디",uid);
                        hashMap.put(TAG_BatteryLevel, Battery + "%");

                        //DB 저장이 true와 false로 되어있으므로 출려되는 것을 바꿔
                        if (Reserve.equals("true")) {
                            hashMap.put(TAG_Reservation, "예약가능");
                        } else if (Reserve.equals("false")) {
                            hashMap.put(TAG_Reservation, "예약불가");
                        }

                        Log.v("Test2", hashMap.toString());
                        //HasMap에 저장한 정보를 배터리 정보 배열에 저
                        mArrayList.add(hashMap);
                        Log.d("에드해쉬맵", String.valueOf(hashMap));
                    }
                }
            }
        }

        ListAdapter adapter = new SimpleAdapter(
                BikeInfoActivity.this, mArrayList, R.layout.list_batt,
                new String[]{TAG_BatteryLevel, TAG_Reservation},
                new int[]{R.id.BatteryLevel_st, R.id.Reservation_st}
        );

        gridView.setAdapter(adapter);
        gridView.setOnItemClickListener(mItemClickListener);
        Log.d("엠아이템클릭리스너", String.valueOf(mItemClickListener));
    }


    //카드뷰로 화면에 출력한 퀵보드 정보의 위치값으로 해당 배터리의 id 정보를 획득가
    private AdapterView.OnItemClickListener mItemClickListener = new AdapterView.OnItemClickListener() {
        @Override
        public void onItemClick(AdapterView<?> parent, View view, int position,
                                long l_position) {
            Log.d("온아이템클릭리스너position", String.valueOf(position));
            Log.d("온아이템클릭리스너l_position", String.valueOf(l_position));

            // Position 은 클릭한 Row의 position 을 반환해 준다.
            String po=position+"";
            //Toast.makeText(getApplicationContext(), po, Toast.LENGTH_SHORT).show();
            Log.d("예약하려고바이크누름",po);
            //Toast.makeText(getApplicationContext(), "값: "+hashMap_id.get(po), Toast.LENGTH_SHORT).show();
            show(hashMap_id.get(po)); //show 호출
            Log.d("해쉬맵_아이디",hashMap_id.get(po));
        }
    };

    void show(final String st){//예약하기를 눌렀을 때 화면에 표시되는 alert box

        final String uid=st;
        Log.d("show st값",st);
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(station);
        Log.d("show 스테이션값",station);
        builder.setMessage("배터리를 예약하시겠습니까?");
        builder.setPositiveButton("예",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        //배터리 예약을 위해 선택한 배터리의 uid값을 reservation 함수로 전달
                        //Toast.makeText(getApplicationContext(),"예를 선택했습니다.",Toast.LENGTH_LONG).show();
                        //Toast.makeText(getApplicationContext(),uid,Toast.LENGTH_LONG).show();
                        reservation(uid);
                    }
                });
        builder.setNegativeButton("아니오",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        //Toast.makeText(getApplicationContext(),"아니오를 선택했습니다.",Toast.LENGTH_LONG).show();
                    }
                });
        builder.show();
    }

    private void reservation(String st){
        String uid=st;
        Log.d("reservation st값", st);
        Toast.makeText(getApplicationContext(),uid,Toast.LENGTH_LONG).show();

        //해당 email이 예약한 바이크와 함께 저장되도록
        //서버에 예약한 바이크 uid를 통해 해당 바이크의 예약정보를 예약불가로 변경
//
//        Call<info> call=apiService.BattReservation(uid);
//        call.enqueue(new retrofit2.Callback<info>() {
//            @Override
//            public void onResponse(Call<info> call, retrofit2.Response<info> response) {
//                Log.e("response",response.body().getResponse());
//                if(response.body().getResponse().equals("ok")){
//                    Log.e("register","Ok");
//                    Toast.makeText(getApplicationContext(), "예약 완료", Toast.LENGTH_SHORT).show();
//                    GetInfo(station);
//                }else if(response.body().getResponse().equals("failed")){
//                    Log.e("Reservation","Failed");
//                    Toast.makeText(getApplicationContext(), "예약 실패", Toast.LENGTH_SHORT).show();
//
//                }else if(response.body().getResponse().equals("error")){
//                    Log.e("register","Error");
//               }
//            }
//
//            @Override
//            public void onFailure(Call<info> call, Throwable t) {
//                Log.e("register","onFailure");
//            }
//        });


    }
}

