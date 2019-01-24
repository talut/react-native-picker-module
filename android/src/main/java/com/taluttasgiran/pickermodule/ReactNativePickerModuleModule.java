package com.taluttasgiran.pickermodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableArray;

public class ReactNativePickerModuleModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    private RNSpinner rnSpinner;

    public ReactNativePickerModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @ReactMethod
    public void show(ReadableArray items, int selectedItem, String placeholder, final Callback onClickCallback) {
        final String[] labels = new String[items.size()];
        for (int i = 0; i < items.size(); i++) {
            labels[i] = items.getString(i);
        }
        rnSpinner = new RNSpinner(getCurrentActivity(), labels, selectedItem == -1 ? 0 : selectedItem, placeholder, onClickCallback);
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