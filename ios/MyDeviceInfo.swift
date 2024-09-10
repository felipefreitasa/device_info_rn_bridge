//
//  MyDeviceInfo.swift
//  rn_bridge_study
//
//  Created by user on 05/09/24.
//

import Foundation
import React

@objc(MyDeviceInfo)
class MyDeviceInfo: NSObject {
  
  @objc
  func getDeviceInfo(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    
    let deviceInfo = [
      "deviceModel": UIDevice.current.model,
      "platform": "iOS \(UIDevice.current.systemVersion)"
    ]
    
    resolve(deviceInfo)
  }
  
}

