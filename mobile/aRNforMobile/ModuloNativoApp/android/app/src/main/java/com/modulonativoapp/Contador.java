package com.modulonativoapp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.os.BatteryManager;
import android.content.Context;

public class Contador extends ReactContextBaseJavaModule {
    private static Integer count = 0;
    private Context context;
    public Contador(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @ReactMethod
    public void increment() {
        BatteryManager bm = (BatteryManager)context.getSystemService(Context.BATTERY_SERVICE);
        count = bm.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
        System.out.println(count);
    }
    @ReactMethod
    public void getCount(Callback successCallback) {
        successCallback.invoke(null, count);
    }
    @Override
    public String getName() {
        return "Contador";
    }
}