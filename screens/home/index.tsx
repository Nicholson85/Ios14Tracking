import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {requestTrackingPermission} from '../../helpers';

export function Home() {
  const request = React.useCallback(async () => {
    try {
      await requestTrackingPermission();
    } catch (e) {
      console.log('Error', e?.toString?.() ?? e);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Request Tracking Permission" onPress={request} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    padding: 5,
    margin: 5,
  },
});
