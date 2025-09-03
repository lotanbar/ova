import '../global.css';
import { Stack } from 'expo-router';
import { View } from 'react-native'

import { ImageProvider } from '../context and utils/ImageContext';

export default function RootLayout() {
  return (
    <ImageProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="preview" options={{ headerShown: false }} />
      </Stack>
    </ImageProvider>
  );
}
