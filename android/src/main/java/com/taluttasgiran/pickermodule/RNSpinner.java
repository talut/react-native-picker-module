package com.taluttasgiran.pickermodule;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;

import androidx.annotation.Nullable;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.graphics.Color;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableArray;

public class RNSpinner extends AlertDialog {
    private final AlertDialog dialog;

    RNSpinner(Context context, ReadableArray labels, @Nullable String selectedValue, @Nullable String title, @Nullable String selectedColor,
              @Nullable String backgroundColor, @Nullable String tintColor, final Callback callback, @Nullable final Callback onCancelCallback) {
        super(context);
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        LinearLayout linearLayout = (LinearLayout) this.getLayoutInflater().inflate(R.layout.spinner_view, null);
        if (backgroundColor != null) {
            linearLayout.setBackgroundColor(Color.parseColor(backgroundColor));
        }
        RecyclerView recyclerView = linearLayout.findViewById(R.id.recyclerView);
        if (backgroundColor != null) {
            recyclerView.setBackgroundColor(Color.parseColor(backgroundColor));
        }
        recyclerView.setHasFixedSize(true);
        LinearLayoutManager mLayoutManager = new LinearLayoutManager(context);
        recyclerView.setLayoutManager(mLayoutManager);
        recyclerView.setHasFixedSize(true);
        TextView tvPlaceholder = linearLayout.findViewById(R.id.placeholder);
        if (title != null) {
            if (backgroundColor != null) {
                tvPlaceholder.setBackgroundColor(Color.parseColor(backgroundColor));
            }
            if (tintColor != null) {
                tvPlaceholder.setTextColor(Color.parseColor(tintColor));
            }
            tvPlaceholder.setText(title);
        } else {
            tvPlaceholder.setVisibility(View.GONE);
        }
        RNSpinnerAdapter mAdapter = new RNSpinnerAdapter(labels, this, callback, selectedValue, selectedColor, backgroundColor, tintColor);
        recyclerView.setAdapter(mAdapter);
        if (linearLayout.getParent() != null) {
            ((ViewGroup) linearLayout.getParent()).removeView(linearLayout);
        }
        builder.setView(linearLayout);
        if (onCancelCallback != null) {
            builder.setOnCancelListener(dialog -> onCancelCallback.invoke());
        }
        dialog = builder.create();
    }

    public void show() {
        dialog.show();
    }

    public void hide() {
        dialog.dismiss();
    }
}
