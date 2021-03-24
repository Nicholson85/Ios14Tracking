import {Platform, NativeModules} from 'react-native';
import {TrackingStatus} from './types';

const TrackingTransparency = NativeModules.TrackingTransparency;

export async function requestTrackingPermission(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') {
    return 'unavailable';
  }

  return await TrackingTransparency.requestTrackingPermission();
}

export async function getTrackingStatus(): Promise<TrackingStatus> {
  if (Platform.OS !== 'ios') {
    return 'unavailable';
  }
  return await TrackingTransparency.getTrackingStatus();
}
