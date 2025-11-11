import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Lotes from './components/Lotes';
import DetallesLote from './components/DetallesLote';
import Contacto from './components/Contacto';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import { Footer7 } from './components/ui/Footer';
import ChatBot from './components/ChatBot';
import CookieConsent from './components/CookieConsent';
import CookieSettings from './components/CookieSettings';
import { cacheManager } from './utils/cacheManager';
import { useUserPreferences, useNavigationHistory } from './hooks/useCache';
import './App.css';

interface NavigationParams {
  loteId?: string;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [navigationParams, setNavigationParams] = useState<NavigationParams>({});
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  // Cache hooks
  const [theme, setTheme] = useUserPreferences('theme', { mode: 'light', animations: true });
  const [navigationHistory, addToNavigationHistory] = useNavigationHistory();

  useEffect(() => {
    // Initialize cache and preload critical data
    cacheManager.preloadCriticalData();

    // Check if user has already made a choice about cookies
    const savedConsent = localStorage.getItem('cookieConsent');
    setCookieConsent(savedConsent);

    // Cache current page
    cacheManager.set('current_page', currentPage, 5 * 60 * 1000); // 5 minutes
  }, []);

  const handleNavigation = (page: string, params?: NavigationParams) => {
    setCurrentPage(page);
    addToNavigationHistory(page);

    // Cache navigation with params
    const navigationData = { page, params, timestamp: Date.now() };
    cacheManager.set(`nav_${page}`, navigationData, 10 * 60 * 1000); // 10 minutes

    if (params) {
      setNavigationParams(params);
    }
  };

  const handleCookieAccept = () => {
    setCookieConsent('accepted');
    console.log('Cookies aceptadas');
  };

  const handleCookieReject = () => {
    setCookieConsent('rejected');
    console.log('Cookies rechazadas');
  };

  const handleCookieCustomize = () => {
    setShowCookieSettings(true);
  };

  const handleCookieSave = (settings: CookiePreferences) => {
    setCookieConsent('customized');
    console.log('Configuración de cookies guardada:', settings);
  };

  const renderPage = () => {
    const pageContent = () => {
      switch (currentPage) {
        case 'nosotros':
          return <Nosotros />;
        case 'lotes':
          return <Lotes onNavigate={handleNavigation} />;
        case 'detalles':
          return <DetallesLote loteId={navigationParams.loteId} />;
        case 'contacto':
          return <Contacto />;
        case 'politica':
          return <PoliticaPrivacidad />;
        case 'home':
        default:
          return <Home onNavigate={handleNavigation} />;
      }
    };

    // Agregar padding top para páginas que no son home
    if (currentPage === 'home') {
      return pageContent();
    }

    return (
      <div className="pt-20">
        {pageContent()}
      </div>
    );
  };

  return (
    <div className="App w-full min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer7 onNavigate={handleNavigation} />
      <ChatBot />

      {/* Cookie Consent System - COMENTADO TEMPORALMENTE */}
      {/* {!cookieConsent && (
        <CookieConsent
          onAccept={handleCookieAccept}
          onReject={handleCookieReject}
          onCustomize={handleCookieCustomize}
        />
      )}

      <CookieSettings
        isOpen={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
        onSave={handleCookieSave}
      /> */}
    </div>
  );
}

export default App;