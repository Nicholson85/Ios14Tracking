import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {requestTrackingPermission} from '../../helpers';
import {TrackingStatus} from '../../types';
import {Styles} from './styles';

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
        Styles.container,
      ]}>
      <Text>Your tracking status is currently: {trackingStatus}</Text>
    </View>
  );
}
