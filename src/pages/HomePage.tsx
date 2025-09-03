import { View } from 'react-native';

import DecodeButton from '../comps/encodeDecodeButtons/DecodeButton';
import EncodeButton from '../comps/encodeDecodeButtons/EncodeButton';

export default function HomePage() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="border-4 border-red-400 h-[90%] w-full flex justify-center items-center">
        <EncodeButton />
        <DecodeButton />
      </View>
    </View>
  );
}
