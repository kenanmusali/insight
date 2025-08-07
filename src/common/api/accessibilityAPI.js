import { AccessibilityContext } from '../../components/context/AccessibilityContext';
import { useContext } from 'react';

const useAccessibilityAPI = () => {
  const context = useContext(AccessibilityContext);

  return {
    getSettings: () => ({
      zoom: context.zoom,
      contrast: context.contrast,
      largeText: context.largeText,
      language: context.language,
    }),
  };
};

export default useAccessibilityAPI;
