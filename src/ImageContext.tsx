import { router } from 'expo-router';
import { createContext, useContext, useState, ReactNode } from 'react';

type ImageContextType = {
  uri: string;
  setUriAndNavigate: (newUri: string) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [uri, setUri] = useState<string>('');

  const setUriAndNavigate = (newUri: string) => {
    setUri(newUri);
    router.push('/preview');
  };

  return (
    <ImageContext.Provider value={{ uri, setUriAndNavigate }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  const ctx = useContext(ImageContext);
  if (!ctx) throw new Error('useImageContext must be inside <ImageProvider>');
  return ctx;
}
