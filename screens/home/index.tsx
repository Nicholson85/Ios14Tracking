import React from 'react';
import {View, Button} from 'react-native';
import {requestTrackingPermission} from '../../helpers';
import {Styles} from './styles';

export function Home() {
  const request = React.useCallback(async () => {
    try {
      await requestTrackingPermission();
    } catch (e) {
      console.log('Error', e?.toString?.() ?? e);
    }
  }, []);

  return (
    <View style={Styles.container}>
      <Button title="Request Tracking Permission" onPress={request} />
    </View>
  );
}
