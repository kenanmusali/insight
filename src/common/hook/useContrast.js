import { useContext, useEffect } from 'react';
import { AccessibilityContext } from '../../components/context/AccessibilityContext';


const useContrast = () => {
  const { contrast } = useContext(AccessibilityContext);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', contrast);
  }, [contrast]);
};

export default useContrast;
