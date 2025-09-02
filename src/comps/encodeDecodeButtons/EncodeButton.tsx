import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ImportImage from '../importAndCamera/ImportImage';
import ShootImage from '../importAndCamera/ShootImage';

export default function EncodeButton() {
  const [isEncodeClicked, setIsEncodeClicked] = useState<boolean>(false);

  return (
    <View className="border-2 border-black flex flex-col">
      <TouchableOpacity onPress={() => setIsEncodeClicked(!isEncodeClicked)} className="button">
        <Text>Encode</Text>
      </TouchableOpacity>
      {isEncodeClicked && (
        <View className="flex flex-row gap-3">
          <ImportImage />
          <ShootImage />
        </View>
      )}
    </View>
  );
}
