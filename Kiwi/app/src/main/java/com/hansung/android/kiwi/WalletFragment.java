package com.hansung.android.kiwi;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.TextView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.Spinner;
import android.widget.Toast;

import android.support.v7.widget.AppCompatTextView;

import java.util.ArrayList;

import com.afollestad.materialdialogs.DialogAction;
import com.afollestad.materialdialogs.MaterialDialog;
import com.anjlab.android.iab.v3.BillingProcessor;
import com.hansung.android.kiwi.PurchaseHeartsAdapter;

import static com.hansung.android.kiwi.NaviActivity.products;



public class WalletFragment extends Fragment {

    private View view, headerView, footerView;
    private ListView lvLog;
    private Spinner spFilter;
    private Button btnPurchaseHeart;

    public static MaterialDialog purchaseDialog;

    private ArrayAdapter<String> filterAdapter;
    private int page = 0;
    // 결제 관련 변수
    private PurchaseHeartsAdapter skusAdapter;

    //public BillingProcessor bp;



    TempOfKiwi tempOfKiwi;

    @Override
    public View getView() {
        return view;
    }




    public WalletFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_wallet, container, false);

        init();
        return view;

    }

    private void init() {

       //  결제 아이템 다이얼로그
        skusAdapter = new PurchaseHeartsAdapter(getActivity());
        View purchaseView = getLayoutInflater().inflate(R.layout.layout_dialog_heartstore, null);
        ListView lvSkus = purchaseView.findViewById(R.id.lv_skus);//만들어 놓은 상품을 띄울 리스트뷰
        lvSkus.setAdapter(skusAdapter); //리스트뷰를 스쿠어댑터에 연결시킴

        purchaseDialog = new MaterialDialog.Builder(getContext()) //메터리얼 다이얼로그에 띄우겠다

                .customView(purchaseView, false)

                .negativeText("취소")//customView() 가 false면 실행 지금purchaseView 가 null이라 취소뜸
                .onNegative(new MaterialDialog.SingleButtonCallback() {
                    @Override
                    public void onClick(@NonNull MaterialDialog dialog, @NonNull DialogAction which) {
                        dialog.dismiss();
                    }
                })
                .build();

        btnPurchaseHeart = view.findViewById(R.id.btn_purchase_heart); //구매하기 버튼
        btnPurchaseHeart.setOnClickListener(new View.OnClickListener() { //누르면
            @Override
            public void onClick(View view) {
                Log.d("뷰", String.valueOf(view));
               purchaseDialog.show(); //purchaseDialog 호출 (상단에)
              //  Log.d("", purchaseDialog.show());

            }
        });

        skusAdapter.update(products);
    }
}