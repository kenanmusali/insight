import { useContext, useEffect } from 'react';
import { AccessibilityContext } from '../../components/context/AccessibilityContext';


const useZoom = () => {
  const { zoom } = useContext(AccessibilityContext);

  useEffect(() => {
    document.body.style.transform = `scale(${zoom})`;
    document.body.style.transformOrigin = 'top left';
  }, [zoom]);
};

export default useZoom;
