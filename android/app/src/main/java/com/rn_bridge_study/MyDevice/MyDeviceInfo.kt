package com.rn_bridge_study.MyDevice

import android.os.Build
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.Arguments

class MyDeviceInfo(private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "MyDeviceInfo"
    }

    @ReactMethod
    fun getDeviceInfo(promise: Promise) {

        val deviceInfo: WritableMap = Arguments.createMap().apply {
            putString("platform", "Android ${Build.VERSION.RELEASE}")
            putString("deviceModel", Build.MODEL)
        }

        promise.resolve(deviceInfo)
    }
}
