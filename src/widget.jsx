import React from 'react';
import ReactDOM from 'react-dom/client';
import { AccessibilityProvider } from './components/context/AccessibilityContext.jsx';
import Zoom from './components/elements/zoom.jsx';   // ⬅ render your element(s) directly
import './common/style/root.css';
import Home from './components/elements/home.jsx';

const containerId = 'accessibility-widget-root';

function mountWidget() {
  if (!document.getElementById(containerId)) {
    const container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);

    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <AccessibilityProvider>
          <div className="accessibility-widget">
            <Zoom />
          </div>
          <Home />
        </AccessibilityProvider>
      </React.StrictMode>
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountWidget);
} else {
  mountWidget();
}
