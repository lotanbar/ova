import { router } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';

export default function ShootImage() {
  function navigateToCameraPage() {
    router.replace('/camera');
  }

  return (
    <TouchableOpacity onPress={navigateToCameraPage} className="button">
      <Text>Shoot Image</Text>
    </TouchableOpacity>
  );
}
