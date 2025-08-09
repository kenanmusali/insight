// src/common/hook/useZoom.jsx
import { useContext, useEffect } from 'react';
import { AccessibilityContext } from '../../components/context/AccessibilityContext';

const useZoom = () => {
  const { zoom } = useContext(AccessibilityContext);

  useEffect(() => {
    // try native CSS zoom first
    document.body.style.zoom = String(zoom);
    const supportsZoom = getComputedStyle(document.body).zoom !== '';

    if (!supportsZoom && zoom !== 1) {
      // fallback via transform
      document.body.style.transformOrigin = 'top left';
      document.body.style.transform = `scale(${zoom})`;
      document.body.style.width = `${100 / zoom}%`;
    } else {
      // clear fallback when not needed
      document.body.style.transform = '';
      document.body.style.width = '';
    }

    // cleanup if unmounts
    return () => {
      document.body.style.zoom = '';
      document.body.style.transform = '';
      document.body.style.width = '';
    };
  }, [zoom]);
};

export default useZoom;
