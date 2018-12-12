package com.hansung.android.kiwi;

import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.PointF;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.skt.Tmap.TMapData;
import com.skt.Tmap.TMapGpsManager;
import com.skt.Tmap.TMapMarkerItem2;
import com.skt.Tmap.TMapPoint;
import com.skt.Tmap.TMapPolyLine;
import com.skt.Tmap.TMapTapi;
import com.skt.Tmap.TMapView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;

import static com.hansung.android.kiwi.TMapGetData.TAG_Latitude;
import static com.hansung.android.kiwi.TMapGetData.TAG_Longitude;
import static com.hansung.android.kiwi.TMapGetData.TAG_StorageName;
import static java.lang.Double.parseDouble;
import static com.hansung.android.kiwi.NaviActivity.car_route_station;
import static com.hansung.android.kiwi.MainActivity.Table_num;


public class TMapFragment extends Fragment { //마커 이미지

    View view;
    TempOfKiwi tempOfKiwi;
    TMapView tMapView;
    String apiKey = "f53919d5-456a-4830-890c-e84d651a82de";

    TMapGpsManager tmapgps;
    Button tmapApp_start;
    String car_st="null";
    static double lat, lon;
    static double c_lat, c_lon;

    public TMapFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_tmap, container, false);

        LinearLayout linearLayoutTmap = view.findViewById(R.id.linearLayoutTmap);
        tMapView = new TMapView(getActivity());

        tmapApp_start = view.findViewById(R.id.tmapApp_start);

        tMapView.setSKTMapApiKey(apiKey);
        linearLayoutTmap.addView(tMapView);

        tMapView.setCenterPoint( 127.01036899999997, 37.5817849 );

        // 클릭 이벤트 설정
        tMapView.setOnClickListenerCallBack(new TMapView.OnClickListenerCallback() {
            @Override
            public boolean onPressEvent(ArrayList arrayList, ArrayList arrayList1, TMapPoint tMapPoint, PointF pointF) {
                Toast.makeText(getContext(), "onPress~!", Toast.LENGTH_SHORT).show();
                return false;
            }

            @Override
            public boolean onPressUpEvent(ArrayList arrayList, ArrayList arrayList1, TMapPoint tMapPoint, PointF pointF) {
                Toast.makeText(getContext(), "onPressUp~!", Toast.LENGTH_SHORT).show();
                return false;
            }
        });

        // 롱 클릭 이벤트 설정
        tMapView.setOnLongClickListenerCallback(new TMapView.OnLongClickListenerCallback() {
            @Override
            public void onLongPressEvent(ArrayList arrayList, ArrayList arrayList1, TMapPoint tMapPoint) {
                Toast.makeText(getContext(), "onLongPress~!", Toast.LENGTH_SHORT).show();
            }
        });
/*
        // 지도 스크롤 종료
        tMapView.setOnDisableScrollWithZoomLevelListener(new TMapView.OnDisableScrollWithZoomLevelCallback() {
            @Override
            public void onDisableScrollWithZoomLevelEvent(float zoom, TMapPoint centerPoint) {
                Toast.makeText(getContext(), "zoomLevel=" + zoom + "\nlon=" + centerPoint.getLongitude() + "\nlat=" + centerPoint.getLatitude(), Toast.LENGTH_SHORT).show();
            }
        });
*/
/*
        Bundle extra = getArguments();
        String station = extra.getString("station");
*/



        tMapView.setIconVisibility(true);//현재위치로 표시될 아이콘을 표시할지 여부를 설정합니다.
        setGps();


        /*
        if (cacheLocation != null) {
            moveMap(cacheLocation.getLatitude(), cacheLocation.getLongitude());
            setMyLocation(cacheLocation.getLatitude(), cacheLocation.getLongitude());
        }
*/
        tmapgps = new TMapGpsManager(getContext());
        //tmapgps.setProvider(TMapGpsManager.GPS_PROVIDER); //위성기반의 위치탐색
        tmapgps.setProvider(TMapGpsManager.NETWORK_PROVIDER); //네트워크기반의 위치탐색
        tmapgps.OpenGps();
        tmapgps.setMinTime(1000);
        tmapgps.setMinDistance(5);
/*
        tMapView.setOnCalloutRightButtonClickListener(new TMapView.OnCalloutRightButtonClickCallback() {
            @Override
            public void onCalloutRightButton(TMapMarkerItem tMapMarkerItem) {
                TMapPoint point = tmapgps.getLocation();
                //TMapPoint point=new TMapPoint(37.5817849, 127.01036899999997);

                path(point, tMapMarkerItem.getTMapPoint());

                Log.v("tMapMarkerItem1", tmapgps.getLocation() + " ");
                Log.v("tMapMarkerItem2", tMapMarkerItem.getTMapPoint() + " ");

                Toast.makeText(getContext(), "tMapView onclick", Toast.LENGTH_SHORT).show();
            }
        });

tMapView.setOnCalloutRightButtonClickListener(new TMapView.OnCalloutRightButtonClickCallback() {
            @Override
            public void onCalloutRightButton(TMapMarkerItem tMapMarkerItem) {
                TMapPoint point = tmapgps.getLocation();
                //TMapPoint point=new TMapPoint(37.5817849, 127.01036899999997);

                path(point, tMapMarkerItem.getTMapPoint());

                Log.v("tMapMarkerItem1", tmapgps.getLocation() + " ");
                Log.v("tMapMarkerItem2", tMapMarkerItem.getTMapPoint() + " ");

                Toast.makeText(getContext(), "tMapView onclick", Toast.LENGTH_SHORT).show();
            }
        });

*/

        //setMarker();

        tMapView.setOnMarkerClickEvent(new TMapView.OnCalloutMarker2ClickCallback() {

            @Override
            public void onCalloutMarker2ClickEvent(String id, TMapMarkerItem2 markerItem2) {//마커클릭이벤트

                Intent intent = new Intent(getContext(), BikeInfoActivity.class);
                lat = markerItem2.getTMapPoint().getLatitude();
                lon = markerItem2.getTMapPoint().getLongitude();

                intent.putExtra("station",markerItem2.getID());//스테이션명 가지고있음
                Log.d("Marker2ClickEvent", markerItem2.getID()+", "+lat+","+lon);
                getContext().startActivity(intent);
            }
        });


        if(car_route_station.equals("default")){
            tmapApp_start.setVisibility(view.GONE);
        }else{
            car_st=car_route_station;
            tmapApp_start.setVisibility(view.VISIBLE);
        }

        tmapApp_start.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                TMapTapi tMapTapi = new TMapTapi(getContext());
                boolean isTmapApp = tMapTapi.isTmapApplicationInstalled(); // TMap App 설치 여부
                Log.d("isTmapApp",isTmapApp+"");
                if(isTmapApp){
                    //tMapTapi.invokeTmap(); // TMap App 실행
                    tMapTapi.invokeRoute(car_st, (float) lon, (float) lat);
                    Log.d("isTmapApp_ttttt",lat+"");
                }else{
                    ArrayList result = tMapTapi.getTMapDownUrl(); // TMap App 다운로드
                    Intent intent1 = new Intent(Intent.ACTION_VIEW,
                            Uri.parse("https://play.google.com/store/apps/details?id=com.skt.tmap.ku"));
                    startActivity(intent1);
                    Log.d("isTmapApp_fffff",result+"");
                }
            }
        });

        Log.d("car_route_station_lat",lat+"");
        Log.d("car_route_station_lon",lon+"");

        return view;
    }
    /*
        Location cacheLocation = null;

        private void moveMap(double lat, double lng) {
            Log.d("moveMap",lat + "," + lng);

            tMapView.setCenterPoint(lng, lat);
            tMapView.setTrackingMode(false);
        }

        private void setMyLocation(double lat, double lng) {
            Bitmap icon = ((BitmapDrawable) ContextCompat.getDrawable(getContext(), android.R.drawable.ic_dialog_map)).getBitmap();
            tMapView.setIcon(icon);
            tMapView.setLocationPoint(lng, lat);
            tMapView.setIconVisibility(true);
        }
    */
    private void path(TMapPoint point1, TMapPoint point2){

        TMapData tmapdata = new TMapData();
        tmapdata.findPathData(point1, point2, new TMapData.FindPathDataListenerCallback() {
            @Override
            public void onFindPathData(TMapPolyLine polyLine) {
                tMapView.addTMapPath(polyLine);
            }
        });
    }

    private final LocationListener mLocationListener = new LocationListener() {
        public void onLocationChanged(Location location) {

            if (location != null) {

                double latitude = location.getLatitude();
                double longitude = location.getLongitude();

                if(latitude==0.0&&longitude==0.0){
                    tMapView.setLocationPoint(127.01036899999997, 37.5817849);
                    tMapView.setCenterPoint(127.01036899999997, 37.5817849);
                    Log.d("LocationListener",""+longitude+","+latitude);
                }else{
                    tMapView.setLocationPoint(longitude, latitude);
                    tMapView.setCenterPoint(longitude, latitude);
                    Log.d("LocationListener",""+longitude+","+latitude);
                }
            }

            setMarker();

        }

        public void onProviderDisabled(String provider) {
        }

        public void onProviderEnabled(String provider) {
        }

        public void onStatusChanged(String provider, int status, Bundle extras) {
        }
    };

    public void setGps() {
        final LocationManager lm = (LocationManager) getContext().getSystemService(Context.LOCATION_SERVICE);
        if (ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(getActivity(), new String[]{android.Manifest.permission.ACCESS_COARSE_LOCATION, android.Manifest.permission.ACCESS_FINE_LOCATION}, 1);
        }
        lm.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, // 등록할 위치제공자(실내에선 NETWORK_PROVIDER 권장)
                1000, // 통지사이의 최소 시간간격 (miliSecond)
                1, // 통지사이의 최소 변경거리 (m)
                mLocationListener);
        //setMarker();
    }

    private void setMarker() {//마커찍는함수
        Table_num = 2;

        String uid;
        String StorageName;
        String latitude;
        String longitude;

        //데이터 불러오
        for(int i = 0; i < tempOfKiwi.getBikeStorages().size(); i++ ) {


            StorageName = tempOfKiwi.getBikeStorages().get(i).getStorageName();
            latitude = tempOfKiwi.getBikeStorages().get(i).getLatitude();
            longitude = tempOfKiwi.getBikeStorages().get(i).getLongitude();

            Log.d("0번째 보관소", StorageName);
            Log.d("0번째 위도", longitude);
            Log.d("0번째 경도", longitude);

            Log.v("place_car_route_station", car_route_station + "");

            if(car_route_station.equals(StorageName)){//배터리 정보에서 길안내 누르면 지도로나와서 길찍음
                TMapPoint point1;
                Log.d("car_route_station:",tmapgps.getLocation()+"");


                if(tmapgps.getLocation()==null){
                    //127.01036899999997, 37.5817849: 한성대
                    point1 = new TMapPoint(37.5817849, 127.01036899999997);
                }else if(tmapgps.getLocation().getLongitude()==0.0&&tmapgps.getLocation().getLatitude()==0.0){
                    point1 = new TMapPoint(37.5817849, 127.01036899999997);
                }else{
                    point1 = tmapgps.getLocation();
                }

                TMapPoint point2 = new TMapPoint(parseDouble(latitude), parseDouble(longitude));

                car_route_station="default";
                Log.d("car_route_station:",tmapgps.getLocation()+"");Log.d("car_route_station:",tmapgps.getLocation()+"");
                path(point1, point2);
            }



           // TMapPoint point2 = new TMapPoint(parseDouble(latitude), parseDouble(longitude));

           // Log.d("포인트2", String.valueOf(point2));

            TMapPoint tMapPoint = new TMapPoint(parseDouble(latitude), parseDouble(longitude)); //gps로 받아온 위도경도 저장
            MarkerOverlay marker1 = new MarkerOverlay(getContext(), StorageName, "배터리 잔량");//공기계GPS가 불량이어서
                                                                                            //위치값을 잘 못넘기나?
                                                                                //마크오버레이값으로 null값이 찍힌다.

            String strID = StorageName; //교환소이름 저장

            marker1.setID(strID); //저장된 이름으로 머커찍기

            marker1.setIcon(BitmapFactory.decodeResource(getResources(), R.drawable.kiwi_marker_small)); //마커이미지
            marker1.setTMapPoint(tMapPoint); //저장된 위도경도로 마커 찎기

            tMapView.addMarkerItem2(strID, marker1);

            Log.d("i:", i + "");
            Log.d("Station_name:", StorageName + "");

        }


//
//
//
///*                        //하단코드는 수정 없음 parseDouble(latitude),parseDouble(longitude) 이변수명만 맞으면
//                        TMapMarkerItem markerItem = new TMapMarkerItem();
//
//                        TMapPoint tMapPoint = new TMapPoint(parseDouble(latitude),parseDouble(longitude));
//                        bitmap = BitmapFactory.decodeResource(getResources(), R.drawable.poi_dot); //드로어블리소스 확인
//                        markerItem.setIcon(bitmap); // 마커 아이콘 지정
//                        markerItem.setPosition(0.5f, 1.0f); // 마커의 중심점을 중앙, 하단으로 설정
//                        markerItem.setTMapPoint(tMapPoint); // 마커의 좌표 지정
//                        markerItem.setName(Station_name); // 마커의 타이틀 지정
//
//                        markerItem.setCalloutTitle(Station_name); //풍선뷰 주된 메세지
//                        markerItem.setCalloutSubTitle("배터리 잔량"); //풍선뷰 보조 메세지
//                        tMapView.addMarkerItem("m"+i, markerItem); // 지도에 마커 추가
//
//                        Bitmap left = ((BitmapDrawable) ContextCompat.getDrawable(getContext(), android.R.drawable.ic_dialog_alert)).getBitmap();
//                        markerItem.setCalloutLeftImage(left);
//
//                        Bitmap right = ((BitmapDrawable) ContextCompat.getDrawable(getContext(), android.R.drawable.ic_input_get)).getBitmap();
//                        markerItem.setCalloutRightButtonImage(right);
//                        markerItem.setCanShowCallout(true);
//*/
//
//
//
//                        marker1.setID(strID); //저장된 이름으로 머커찍기
//                        //marker1.
//                        //marker1.setCalloutTitle(Station_name);
//                        marker1.setIcon(BitmapFactory.decodeResource(getResources(), R.drawable.poi_dot)); //마커이미지
//                        marker1.setTMapPoint(tMapPoint); //저장된 위도경도로 마커 찎기
//
///*
//                        if (list == null) {
//                            list = new ArrayList<Bitmap>();
//                        }
//
//                        list.add(BitmapFactory.decodeResource(getContext().getResources(), R.drawable.map_pin_red));
//                        list.add(BitmapFactory.decodeResource(getContext().getResources(),R.drawable.end));
//
//                        marker1.setAnimationIcons(list);
//                        */
//
//                        tMapView.addMarkerItem2(strID, marker1);
//
//
//                        Log.d("i:",i+"");
//                        Log.d("Station_name:",Station_name+"");
//
//                    }
//                } catch (JSONException e) {
//                    e.printStackTrace();
//                } catch (IOException e) {
//                    e.printStackTrace();
//                }
//            }
//
//            @Override
//            public void onFailure(Call<ResponseBody> call, Throwable t) {
//
//            }
//        });
//    }


     final LocationListener mListener = new LocationListener() {
        public void onLocationChanged(Location location) {

            //현재위치의 좌표를 알수있는 부분
            if (location != null) {
                double latitude = location.getLatitude();
                double longitude = location.getLongitude();
                tMapView.setLocationPoint(longitude, latitude);
                tMapView.setCenterPoint(longitude, latitude);
                Log.d("TmapTest",""+longitude+","+latitude);
            }

        }

        @Override
        public void onStatusChanged(String s, int i, Bundle bundle) {

        }

        @Override
        public void onProviderEnabled(String s) {

        }

        @Override
        public void onProviderDisabled(String s) {

        }
    };

//    public void setGps(){
//        final LocationManager lm = (LocationManager) getContext().getSystemService(Context.LOCATION_SERVICE);
//        if (ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
//            ActivityCompat.requestPermissions(getActivity(), new String[]{android.Manifest.permission.ACCESS_COARSE_LOCATION, android.Manifest.permission.ACCESS_FINE_LOCATION}, 1);
//
//            if (ActivityCompat.shouldShowRequestPermissionRationale(getActivity(),
//                    Manifest.permission.ACCESS_FINE_LOCATION)) { //거절 시
//
//                Log.v("거절", "위치제공거절");
//
//            } else {
//                Log.v("승락 또는 처음", "위치제공승락");
//
//                tMapView.setTrackingMode(true);
//                tMapView.setSightVisible(true);
//                tMapView.setIconVisibility(true);
//
//                lm.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, // 등록할 위치제공자(실내에선 NETWORK_PROVIDER 권장)
//                        1000, // 통지사이의 최소 시간간격 (miliSecond)
//                        1, // 통지사이의 최소 변경거리 (m)
//                        mListener);
//            }
//        }
//    }


    }


}
