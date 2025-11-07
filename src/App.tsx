import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Lotes from './components/Lotes';
import DetallesLote from './components/DetallesLote';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import './App.css';

interface NavigationParams {
  loteId?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [navigationParams, setNavigationParams] = useState<NavigationParams>({});

  const handleNavigation = (page: string, params?: NavigationParams) => {
    setCurrentPage(page);
    if (params) {
      setNavigationParams(params);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'nosotros':
        return <Nosotros />;
      case 'lotes':
        return <Lotes onNavigate={handleNavigation} />;
      case 'detalles':
        return <DetallesLote loteId={navigationParams.loteId} />;
      case 'contacto':
        return <Contacto />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      {renderPage()}
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;