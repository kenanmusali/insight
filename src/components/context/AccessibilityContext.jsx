import React, { createContext, useState } from 'react';

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [zoom, setZoom] = useState(1);
  const [largeText, setLargeText] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <AccessibilityContext.Provider
      value={{
        zoom, setZoom,
        largeText, setLargeText,
        contrast, setContrast,
        language, setLanguage,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};
