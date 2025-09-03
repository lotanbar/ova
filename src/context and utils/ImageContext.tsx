import { router } from 'expo-router';
import { createContext, useContext, useState, ReactNode } from 'react';

type ImageContextType = {
  uri: string;
  setUriAndNavigate: (newUri: string) => void;
  discard: () => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [uri, setUri] = useState<string>('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fova-8be2ff0b-629c-4887-8e16-e229094abfd4/ImagePicker/c3114d55-56eb-46ea-a527-9e0819b2471a.jpeg');

  const setUriAndNavigate = (newUri: string) => {
    setUri(newUri);
    router.replace('/preview');
  };

  const discard = () => {
    setUri('');
    router.replace('/index');
  };

  return (
    <ImageContext.Provider value={{ uri, setUriAndNavigate, discard }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  const ctx = useContext(ImageContext);
  if (!ctx) throw new Error('useImageContext must be inside <ImageProvider>');
  return ctx;
}
