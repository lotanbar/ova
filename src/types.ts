export type ImageContextType = {
  uri: string;
  setUriAndNavigate: (newUri: string, type: 'camera' | 'import') => void;
  discard: () => void;
  isCameraOrImport: cameraOrImportType;
};

export type cameraOrImportType = 'camera' | 'import' | '';
