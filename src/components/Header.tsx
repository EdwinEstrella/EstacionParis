import React, { useState } from 'react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    if (currentPage === page) {
      return 'text-sm font-medium leading-normal text-primary dark:text-primary';
    }
    return 'text-sm font-medium leading-normal text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors';
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between whitespace-nowrap py-3">
            <div className="flex items-center gap-4 text-[#1a0f0f] dark:text-gray-100">
              <div className="h-6 w-6 text-[#CF2E2E]">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Estacion Paris</h2>
            </div>

            <div className="hidden md:flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <button className={getNavClass('home')} onClick={() => handleNavigation('home')}>Inicio</button>
                <button className={getNavClass('nosotros')} onClick={() => handleNavigation('nosotros')}>Nosotros</button>
                <button className={getNavClass('lotes')} onClick={() => handleNavigation('lotes')}>Lotes</button>
              </div>
              <button
                onClick={() => handleNavigation('contacto')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
              >
                <span className="truncate">Contacto</span>
              </button>
            </div>

            <div className="md:hidden">
              <button
                className="text-gray-700 dark:text-gray-300"
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
              <button className={getNavClass('home')} onClick={() => handleNavigation('home')}>Inicio</button>
              <button className={getNavClass('nosotros')} onClick={() => handleNavigation('nosotros')}>Nosotros</button>
              <button className={getNavClass('lotes')} onClick={() => handleNavigation('lotes')}>Lotes</button>
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