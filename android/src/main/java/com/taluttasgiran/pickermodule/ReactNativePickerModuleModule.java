package com.taluttasgiran.pickermodule;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableType;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Array;
import java.net.URL;
import java.net.URLConnection;

public class ReactNativePickerModuleModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    private RNSpinner rnSpinner;

    public ReactNativePickerModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void show(ReadableArray items, ReadableArray images, int selectedItem, String placeholder, final Callback onClickCallback, final Callback onCancelCallback) {
        final String[] imageURIList = new String[images.size()];
        for (int i = 0; i < images.size(); i++) {
            if (images.getType(i) == ReadableType.Map) {
                imageURIList[i] = images.getMap(i).getString("uri");
            }
        }
        final String[] labels = new String[items.size()];
        for (int i = 0; i < items.size(); i++) {

            if (items.getType(i) == ReadableType.String) {
                labels[i] = items.getString(i);
            } else {
                if (items.getType(i) == ReadableType.Number) {
                    double number = items.getDouble(i);
                    if (number == Math.rint(number)) {
                        labels[i] = String.valueOf((int) number);
                    } else {
                        labels[i] = String.valueOf(number);
                    }
                }
            }

        }
        rnSpinner = new RNSpinner(getCurrentActivity(), labels, selectedItem == -1 ? 0 : selectedItem, imageURIList, placeholder, onClickCallback, onCancelCallback);
        rnSpinner.show();
    }

    @ReactMethod
    public void hide() {
        rnSpinner.hide();
    }

    @Override
    public String getName() {
        return "ReactNativePickerModule";
    }
}
