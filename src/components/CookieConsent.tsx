import React, { useState, useEffect } from 'react';
import FadeIn from './Animations/FadeIn';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
  onCustomize: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject, onCustomize }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('analyticsCookies', 'true');
    localStorage.setItem('marketingCookies', 'true');
    localStorage.setItem('functionalCookies', 'true');
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('analyticsCookies', 'false');
    localStorage.setItem('marketingCookies', 'false');
    localStorage.setItem('functionalCookies', 'false');
    setIsVisible(false);
    onReject();
  };

  const handleCustomize = () => {
    setIsVisible(false);
    onCustomize();
  };

  if (!isVisible) return null;

  return (
    <FadeIn direction="up" duration={500}>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="w-full px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🍪 Este sitio usa cookies
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia,
                  analizar el tráfico y personalizar el contenido. Al continuar navegando,
                  aceptas nuestro uso de cookies según nuestra política de privacidad.
                </p>
                <button
                  className="text-sm text-primary hover:underline"
                  onClick={() => window.open('#politica', '_self')}
                >
                  Leer nuestra política de cookies
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCustomize}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Personalizar
                </button>
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default CookieConsent;