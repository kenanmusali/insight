import React from 'react';
import ReactDOM from 'react-dom/client';
import AccessibilityWidget from './components/AccessibilityWidget';  
import { AccessibilityProvider } from './components/context/AccessibilityContext';

const containerId = 'accessibility-widget-root';
// Add this at the top of widget.jsx
const style = document.createElement('style');
style.textContent = `
  #accessibility-widget-root {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    font-family: Arial, sans-serif;
  }
  #accessibility-widget-root button {
    margin: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
`;
document.head.appendChild(style);
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
