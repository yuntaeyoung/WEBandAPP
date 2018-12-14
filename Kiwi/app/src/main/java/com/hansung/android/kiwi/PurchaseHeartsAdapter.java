package com.hansung.android.kiwi;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.hansung.android.kiwi.WalletFragment;



import com.anjlab.android.iab.v3.SkuDetails;
import com.anjlab.android.iab.v3.BillingProcessor;


import java.util.ArrayList;




public class PurchaseHeartsAdapter extends BaseAdapter {
    private Context context;
    private ArrayList<SkuDetails> products;
    //private InAppPurchaseItems items;
    private NaviActivity activity;

   // TempOfKiwi product;

    private SkuDetails product;

//    public NaviActivity(Activity activity) {
//        this.activity = activity;
//    }


    public PurchaseHeartsAdapter(Activity activity) {
        this.activity = (NaviActivity) activity;
        this.context = activity;
        this.products = new ArrayList<>();
     //  this.items = new InAppPurchaseItems();
    }

    @Override
    public int getCount() {
        return products.size();
    }

    @Override
    public Object getItem(int i) {
        return products.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        final SkuDetails sku = products.get(i);
        final ViewHolder holder;

        if (view == null) {
            LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            view = inflater.inflate(R.layout.layoutview_heartstore, viewGroup, false);
            holder = new ViewHolder();
            holder.ivIcon = view.findViewById(R.id.iv_icon);
            holder.tvLabel = view.findViewById(R.id.tv_label);
            holder.tvPrice = view.findViewById(R.id.tv_price);
            view.setTag(holder);
        } else {
            holder = (ViewHolder) view.getTag();
        }

      // holder.ivIcon.setImageDrawable(context.getResources().getDrawable(items.getDrawable(sku.productId)));
        holder.tvLabel.setText(sku.title.replaceAll("\\(.*\\)", ""));
        holder.tvPrice.setText(sku.priceText);
        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d("어댑터클래스-아이템구매버튼", view.toString());
                activity.purchaseProduct(sku.productId); //NaviActivitiy클래스에 purchaseProduct에 프로덕트id를넘김
                
                //Intent intent = new Intent()

                Log.d("네비액티비티로purchaseProduct",sku.productId);
            }
        });

        Log.d("겟뷰 리턴값", String.valueOf(view));//월넷프래그먼트의 구매하기 누르면 뜸
        return view;

    }




    public void update(ArrayList<SkuDetails> products) {
        if (products != null) {
            this.products = products;
            notifyDataSetChanged();
        }
    }

    class ViewHolder {
        public ImageView ivIcon;
        public TextView tvLabel, tvPrice;
    }


}
