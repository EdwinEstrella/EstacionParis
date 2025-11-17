import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onOpenSearch?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate, onOpenSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Inicializar isScrolled basándose en la página actual
  const [isScrolled, setIsScrolled] = useState(() => {
    return currentPage === 'nosotros' || currentPage === 'lotes' || currentPage === 'contacto' || currentPage === 'detalles';
  });

  useEffect(() => {
    // En páginas con fondo claro, el header debe ser blanco desde el inicio
    if (currentPage === 'nosotros' || currentPage === 'lotes' || currentPage === 'contacto' || currentPage === 'detalles') {
      setIsScrolled(true);
      return;
    }

    // Solo aplicar scroll en la página home
    if (currentPage !== 'home') {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      // Cambiar a blanco cuando se hace scroll (más de 50px)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Verificar posición inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const getNavClass = (page: string) => {
    const baseClass = 'text-sm font-medium leading-normal transition-colors';
    if (isScrolled) {
      if (currentPage === page) {
        return `${baseClass} text-black`;
      }
      return `${baseClass} text-black/80 hover:text-black`;
    } else {
      if (currentPage === page) {
        return `${baseClass} text-white`;
      }
      return `${baseClass} text-white/80 hover:text-white`;
    }
  };

  const headerClass = isScrolled
    ? 'fixed top-0 z-50 w-full bg-white backdrop-blur-sm border-b-2 border-black/20 shadow-sm'
    : 'fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm border-b-2 border-white/40';

  const logoClass = isScrolled ? 'text-black' : 'text-white';
  const titleClass = isScrolled ? 'text-black' : 'text-white';
  const menuButtonClass = isScrolled ? 'text-black' : 'text-white';

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between whitespace-nowrap py-3">
            <div className="hidden md:flex flex-1 items-center gap-9">
              <button className={getNavClass('home')} onClick={() => handleNavigation('home')}>Inicio</button>
              <button className={getNavClass('nosotros')} onClick={() => handleNavigation('nosotros')}>Nosotros</button>
              <button className={getNavClass('lotes')} onClick={() => handleNavigation('lotes')}>Lotes</button>
            </div>

            <div className={`flex items-center gap-4 ${titleClass}`}>
              <div className={`h-6 w-6 ${logoClass}`}>
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className={`text-lg font-bold leading-tight tracking-[-0.015em] ${titleClass}`}>Estacion Paris</h2>
            </div>

            <div className="hidden md:flex flex-1 justify-end">
              <button
                onClick={() => handleNavigation('contacto')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
              >
                <span className="truncate">Contacto</span>
              </button>
            </div>

            <div className="md:hidden">
              <button
                className={menuButtonClass}
                onClick={toggleMenu}
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-[#1a0f0f] dark:text-white">Menú</h3>
              <button
                className="text-gray-700 dark:text-gray-300"
                onClick={toggleMenu}
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <button className={`${getNavClass('home')} text-left`} onClick={() => handleNavigation('home')}>Inicio</button>
              <button className={`${getNavClass('nosotros')} text-left`} onClick={() => handleNavigation('nosotros')}>Nosotros</button>
              <button className={`${getNavClass('lotes')} text-left`} onClick={() => handleNavigation('lotes')}>Lotes</button>
              {onOpenSearch && (
                <button
                  onClick={() => {
                    onOpenSearch();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#E9C874] text-black text-sm font-bold leading-normal hover:bg-opacity-90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Buscar
                </button>
              )}
              <button
                onClick={() => handleNavigation('contacto')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
              >
                <span className="truncate">Contacto</span>
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;