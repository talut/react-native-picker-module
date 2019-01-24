package com.taluttasgiran.pickermodule;

import android.app.AlertDialog;
import android.content.Context;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.facebook.react.bridge.Callback;

public class RNSpinner extends AlertDialog {
    AlertDialog dialog;

    RNSpinner(Context context, String[] labels, int selectedItem, String title, Callback callback) {
        super(context);
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        LinearLayout linearLayout = (LinearLayout) this.getLayoutInflater().inflate(R.layout.spinner_view, null);
        RecyclerView recyclerView = (RecyclerView) linearLayout.findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);
        LinearLayoutManager mLayoutManager = new LinearLayoutManager(context);
        recyclerView.setLayoutManager(mLayoutManager);
        recyclerView.setHasFixedSize(true);
        mLayoutManager.scrollToPositionWithOffset(selectedItem, 10);
        TextView tvPlaceholder = (TextView) linearLayout.findViewById(R.id.placeholder);
        if (title != null) {
            tvPlaceholder.setText(title);
        } else {
            tvPlaceholder.setVisibility(View.GONE);
        }
        RNSpinnerAdapter mAdapter = new RNSpinnerAdapter(labels, this, callback, selectedItem);
        recyclerView.setAdapter(mAdapter);
        if (linearLayout.getParent() != null) {
            ((ViewGroup) linearLayout.getParent()).removeView(linearLayout); // <- fix
        }
        builder.setView(linearLayout);
        dialog = builder.create();
    }

    public void show() {
        dialog.show();
    }

    public void hide() {
        dialog.dismiss();
    }
}
