import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n'; // Make sure this path is correct
import AccessibilityWidget from './components/elements/AccessibilityWidget';
import { AccessibilityProvider } from './components/context/AccessibilityContext';

const containerId = 'accessibility-widget-root';

function mountWidget() {
  if (!document.getElementById(containerId)) {
    const container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <AccessibilityProvider>
            <AccessibilityWidget />
          </AccessibilityProvider>
        </I18nextProvider>
      </React.StrictMode>
    );
  }
}

// Add basic styles
const style = document.createElement('style');
style.textContent = `
  #${containerId} {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
`;
document.head.appendChild(style);

// Mount when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountWidget);
} else {
  mountWidget();
}