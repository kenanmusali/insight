import React from 'react';
import { AccessibilityProvider } from './components/context/AccessibilityContext';
import AccessibilityWidget from './components/AccessibilityWidget';
import './common/style/contrast.css';
import './common/i18n/i18n';
import useZoom from './common/hook/useZoom';
import useContrast from './common/hook/useContrast';

function App() {
  useZoom();
  useContrast();

  return (
    <AccessibilityProvider>
      <AccessibilityWidget />
      {/* Your main app content here */}
    </AccessibilityProvider>
  );
}

export default App;
