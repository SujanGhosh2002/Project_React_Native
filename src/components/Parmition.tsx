import {PermissionsAndroid, Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

export const requestPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Permission to access gallery',
        message: 'This app needs access to your gallery to display images.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } else {
    const granted = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    return granted === 'granted';
  }
};
