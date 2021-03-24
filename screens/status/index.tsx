import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {requestTrackingPermission} from '../../helpers';
import {TrackingStatus} from '../../types';

export function Status() {
  const [trackingStatus, setTrackingStatus] = React.useState<TrackingStatus>(
    'not-determined',
  );

  useEffect(() => {
    requestTrackingPermission().then(status => {
      setTrackingStatus(status);
    });
  });

  return (
    <View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {backgroundColor: trackingStatus === 'authorized' ? 'green' : 'orange'},
        styles.container,
      ]}>
      <Text>Your tracking status is currently: {trackingStatus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    padding: 5,
    margin: 5,
  },
});
