import 'react-native';

export interface DeviceInfo {
  platform: string;
  deviceModel: string;
}

interface MyDeviceInfoType {
  getDeviceInfo(): Promise<DeviceInfo>;
}

declare module 'react-native' {
  interface NativeModulesStatic {
    MyDeviceInfo: MyDeviceInfoType;
  }
}
