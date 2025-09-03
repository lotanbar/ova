import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { useImageContext } from '../context and utils/ImageContext';

export default function CameraPage() {
  const { setUriAndNavigate } = useImageContext();

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Grant Permissions</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  async function shootImage() {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync();
        if (picture?.uri) {
          setUriAndNavigate(picture.uri, 'camera');
        }
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  }

  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-full h-[85%] border-4 border-blue-500">
        <CameraView
          ref={cameraRef}
          facing={facing}
          style={{ flex: 1, width: '100%', height: '100%' }}
        />
      </View>
      <View className="flex-row gap-4">
        <TouchableOpacity onPress={shootImage} className="button">
          <Text>Shoot</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCameraFacing} className="button">
          <Text>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
