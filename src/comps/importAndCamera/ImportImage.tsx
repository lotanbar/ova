import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, Text } from 'react-native';

import { useImageContext } from '@/src/context and utils/ImageContext';

export default function ImportImage() {
  const { setUriAndNavigate } = useImageContext();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
    });

    if (!result.canceled) {
      setUriAndNavigate(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity className='button' onPress={pickImage}>
      <Text>Import Image</Text>
    </TouchableOpacity>
  );
}
