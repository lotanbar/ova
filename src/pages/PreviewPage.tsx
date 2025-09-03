import { Image, View, TouchableOpacity, Text } from 'react-native';

import ImportImage from '../comps/importAndCamera/ImportImage';
import ShootImage from '../comps/importAndCamera/ShootImage';
import { useImageContext } from '../context and utils/ImageContext';

export default function Preview() {
  const { uri, discard, isCameraOrImport } = useImageContext();

  return (
    <View className="flex-1 justify-center border-4 border-yellow-500">
      <View className='w-full h-[90%] justify-center'>
        <Image source={{ uri }} className="flex-1 border-4 border-yellow-400" resizeMode="contain" />
        <View className="flex flex-row justify-center gap-3">
          <TouchableOpacity onPress={discard} className="button">
            <Text>Main Menu</Text>
          </TouchableOpacity>
          {isCameraOrImport == 'camera' ? <ShootImage /> : <ImportImage />}

          <TouchableOpacity className="button">
            <Text>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
