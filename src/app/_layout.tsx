import { Stack } from 'expo-router';
import { ImageProvider } from '../ImageContext'

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
