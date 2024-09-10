//
//  MyDeviceInfo.m
//  rn_bridge_study
//
//  Created by user on 05/09/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(MyDeviceInfo, RCTEventEmitter)

RCT_EXTERN_METHOD(getDeviceInfo:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end

