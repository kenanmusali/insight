import React, { useContext } from 'react';
import { AccessibilityContext } from './AccessibilityContext';
import { useTranslation } from 'react-i18next';

const AccessibilityWidget = () => {
  const {
    zoom, setZoom,
    largeText, setLargeText,
    contrast, setContrast,
    language, setLanguage
  } = useContext(AccessibilityContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="accessibility-widget">
      <h2>{t('accessibility')}</h2>
      <button onClick={() => setZoom(prev => prev + 0.1)}>{t('zoom_in')}</button>
      <button onClick={() => setZoom(1)}>{t('reset_zoom')}</button>
      <button onClick={() => setLargeText(prev => !prev)}>{t('toggle_large_text')}</button>
      <button onClick={() => setContrast(prev => !prev)}>{t('toggle_contrast')}</button>
      <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default AccessibilityWidget;
