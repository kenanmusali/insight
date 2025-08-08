import React from 'react';
import ReactDOM from 'react-dom/client';
import AccessibilityWidget from './components/AccessibilityWidget';  
import { AccessibilityProvider } from './components/context/AccessibilityContext';

const containerId = 'accessibility-widget-root';

function mountWidget() {
  if (!document.getElementById(containerId)) {
    const container = document.createElement('div');
    container.id = containerId;
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <AccessibilityProvider>
          <AccessibilityWidget />
        </AccessibilityProvider>
      </React.StrictMode>
    );
  }
}

// Make sure DOM is ready before trying to render anything
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountWidget);
} else {
  mountWidget();
}
