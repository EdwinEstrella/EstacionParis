import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Lotes from './components/Lotes';
import DetallesLote from './components/DetallesLote';
import Contacto from './components/Contacto';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import { Footer7 } from './components/ui/Footer';
import ChatBot from './components/ChatBot';
import { cacheManager } from './utils/cacheManager';
import { useNavigationHistory } from './hooks/useCache';
import './App.css';

interface NavigationParams {
  loteId?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [navigationParams, setNavigationParams] = useState<NavigationParams>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Cache hooks
  const [, addToNavigationHistory] = useNavigationHistory();

  useEffect(() => {
    // Initialize cache and preload critical data
    cacheManager.preloadCriticalData();

    // Cache current page
    cacheManager.set('current_page', currentPage, 5 * 60 * 1000); // 5 minutes
  }, [currentPage]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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

  const renderPage = () => {
    const pageContent = () => {
      switch (currentPage) {
        case 'nosotros':
          return <Nosotros onNavigate={handleNavigation} />;
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
          return <Home onNavigate={handleNavigation} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />;
      }
    };

    // Agregar padding top para páginas que no son home o nosotros (que tienen hero sections)
    if (currentPage === 'home' || currentPage === 'nosotros') {
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
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        onOpenSearch={currentPage === 'home' || currentPage === 'nosotros' ? () => setIsSearchOpen(true) : undefined}
      />
      {renderPage()}
      <Footer7 onNavigate={handleNavigation} />
      <ChatBot />

      {/* Popup Buscador - Mobile - Global */}
      {isSearchOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsSearchOpen(false)}
        >
          {/* Fondo oscuro */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          
          {/* Contenedor del buscador */}
          <div 
            className="relative z-10 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-2xl shadow-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Buscador */}
            <div className="grid grid-cols-1 gap-4 text-white">
              <div>
                <label className="text-sm font-bold block mb-2">Ubicación</label>
                <input 
                  type="text" 
                  placeholder="Buscar ubicaciones" 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 w-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E9C874]"
                />
              </div>
              <div>
                <label className="text-sm font-bold block mb-2">Tamaño</label>
                <input 
                  type="text" 
                  placeholder="m²" 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 w-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E9C874]"
                />
              </div>
              <div>
                <label className="text-sm font-bold block mb-2">Presupuesto</label>
                <input 
                  type="text" 
                  placeholder="Max $" 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 w-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E9C874]"
                />
              </div>
              <div>
                <label className="text-sm font-bold block mb-2">Tipo</label>
                <input 
                  type="text" 
                  placeholder="Residencial" 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 w-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E9C874]"
                />
              </div>
              <button className="bg-[#E9C874] text-black rounded-lg py-3 px-6 font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Buscar
              </button>
            </div>
          </div>
        </div>
      )}

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