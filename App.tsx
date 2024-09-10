import React, {useEffect, useState} from 'react';
import {NativeModules, Text, View} from 'react-native';

import {DeviceInfo} from './react-native-modules';

function App() {
  const {MyDeviceInfo} = NativeModules;

  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>();

  async function fetchDeviceInfoFromNativeModule() {
    try {
      setHasError(false);
      setIsLoading(true);
      const response = await MyDeviceInfo.getDeviceInfo();
      setDeviceInfo(response);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDeviceInfoFromNativeModule();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (hasError || !deviceInfo) {
    return <Text>Something went wrong!</Text>;
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{`Platform: ${deviceInfo.platform}`}</Text>
      <Text>{`Device Model: ${deviceInfo.deviceModel}`}</Text>
    </View>
  );
}

export default App;
