import { Image, View, TouchableOpacity, Text } from 'react-native';
import ImportImage from '../comps/importAndCamera/ImportImage';

import { useImageContext } from '../context and utils/ImageContext';

export default function Preview() {
  const { uri, discard } = useImageContext();

  return (
    <View className="w-full h-[90%] border-4 border-yellow-500">
      <Image source={{ uri }} className="flex-1 border-4 border-yellow-400" resizeMode="contain" />
      <View className="flex flex-row justify-center gap-3">
        <TouchableOpacity onPress={discard} className='button'>
          <Text>Main Menu</Text>
        </TouchableOpacity >
        <ImportImage />
        <TouchableOpacity className='button'>
          <Text>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
