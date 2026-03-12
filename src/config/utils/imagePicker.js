import { Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import { toastConfig } from './toast';

const PICKER_OPTIONS = { multiple: false, width: 200, height: 200 };

export const openImagePicker = (
  callback,
  title = 'Select one option to continue',
) => {
  Alert.alert('Options', title, [
    { text: 'Cancel', style: 'cancel' },
    {
      text: 'Camera',
      onPress: async () => {
        try {
          const image = await ImagePicker.openCamera(PICKER_OPTIONS);
          callback(image);
        } catch (e) {
          Toast.show(toastConfig.error(e.message));
        }
      },
    },
    {
      text: 'Gallery',
      onPress: async () => {
        try {
          const image = await ImagePicker.openPicker(PICKER_OPTIONS);
          callback(image);
        } catch (e) {
          Toast.show(toastConfig.error(e.message));
        }
      },
    },
  ]);
};
