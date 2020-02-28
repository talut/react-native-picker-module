package com.taluttasgiran.pickermodule;

import androidx.recyclerview.widget.RecyclerView;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;

import com.facebook.react.bridge.Callback;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

public class RNSpinnerAdapter extends RecyclerView.Adapter<RNSpinnerAdapter.MyViewHolder> {
    private String[] mDataset;
    RNSpinner rnSpinner;
    Callback callback;
    int selectedItemPosition;
    private String[] imageList;

    static class MyViewHolder extends RecyclerView.ViewHolder {
        LinearLayout linearLayout;

        MyViewHolder(LinearLayout v) {
            super(v);
            linearLayout = v;
        }
    }

    RNSpinnerAdapter(String[] myDataset, RNSpinner androidSpinner, Callback spinnerCallback, int selectedItem, String[] images) {
        mDataset = myDataset;
        rnSpinner = androidSpinner;
        callback = spinnerCallback;
        selectedItemPosition = selectedItem;
        imageList = images;
    }

    @Override
    public RNSpinnerAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent,
                                                            int viewType) {
        LinearLayout linearLayout = (LinearLayout) LayoutInflater.from(parent.getContext())
                .inflate(R.layout.spinner_item, parent, false);
        return new MyViewHolder(linearLayout);
    }

    private Bitmap getImageBitmap(String url) {
        Bitmap bm = null;
        try {
            URL aURL = new URL(url);
            URLConnection conn = aURL.openConnection();
            conn.connect();
            InputStream is = conn.getInputStream();
            BufferedInputStream bis = new BufferedInputStream(is);
            bm = BitmapFactory.decodeStream(bis);
            bis.close();
            is.close();
        } catch (IOException e) {
            Log.e("RNPickerModule", "Error getting bitmap", e);
        }
        return bm;
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, final int position) {
        Button button = holder.linearLayout.findViewById(R.id.button);
        ImageView imageView = holder.linearLayout.findViewById(R.id.item_image);
        if (this.imageList.length > 0) {
            button.setPadding(15,15,15,15);
            imageView.setImageBitmap(getImageBitmap(this.imageList[position]));
        } else {
            imageView.setVisibility(View.GONE);
        }
        button.setText(mDataset[position]);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                rnSpinner.hide();
                callback.invoke(mDataset[position], position);
            }
        });
    }

    @Override
    public int getItemCount() {
        return mDataset.length;
    }
}
