// src/components/elements/zoom.jsx
import React, { useContext } from 'react';
import { AccessibilityContext } from '../context/AccessibilityContext';
import useDropdown from '../../common/hook/useDropdown';   // ← your hook, unchanged
import useZoom from '../../common/hook/useZoom';           // ← runs zoom effects
import { useTranslation } from 'react-i18next';

const Zoom = () => {
  useZoom(); // side-effects come from here, not the provider

  const { zoom, setZoom } = useContext(AccessibilityContext);
  const { t } = useTranslation();
  const menu = useDropdown(); // your dropdown logic stays the same

  const apply = (value) => {
    setZoom(value);
    menu.close();
  };

  return (
    <div className="a11y-zoom-wrap">
      <button ref={menu.triggerRef} onClick={menu.toggle}>
        {t('zoom') || 'Zoom'} ({Math.round(zoom * 100)}%)
      </button>

      {menu.open && (
        <div ref={menu.menuRef} className="a11y-menu">
          <button onClick={() => apply(0.7)}>Small — 70%</button>
          <button onClick={() => apply(1.1)}>Medium — 110%</button>
          <button onClick={() => apply(1.6)}>Large — 160%</button>
          <button onClick={() => apply(1.0)}>Default — 100%</button>
        </div>
      )}
    </div>
  );
};

export default Zoom;
