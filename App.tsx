import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {requestTrackingPermission} from './helpers';
import {TrackingStatus} from './types';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './screens/home';
import {Status} from './screens/status';

const UnsetStack = createStackNavigator();
const SetStack = createStackNavigator();

const App = () => {
  const [trackingStatus, setTrackingStatus] = React.useState<TrackingStatus>(
    'not-determined',
  );

  const hasTrackingStatusSet = () => {
    if (trackingStatus === 'authorized' || trackingStatus === 'denied') {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    requestTrackingPermission().then(status => {
      setTrackingStatus(status);
    });
  });

  return (
    <NavigationContainer>
      {hasTrackingStatusSet() ? (
        <SetStack.Navigator>
          <UnsetStack.Screen name="Status" component={Status} />
        </SetStack.Navigator>
      ) : (
        <UnsetStack.Navigator>
          <UnsetStack.Screen name="Home" component={Home} />
        </UnsetStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
