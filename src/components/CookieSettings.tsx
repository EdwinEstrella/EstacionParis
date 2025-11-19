import React, { useState, useEffect } from 'react';
import FadeIn from './Animations/FadeIn';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: CookieSettings) => void;
}

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ isOpen, onClose, onSave }) => {
  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    if (isOpen) {
      // Load current settings from localStorage
      const savedSettings: CookieSettings = {
        essential: true,
        analytics: localStorage.getItem('analyticsCookies') === 'true',
        marketing: localStorage.getItem('marketingCookies') === 'true',
        functional: localStorage.getItem('functionalCookies') === 'true',
      };
      setSettings(savedSettings);
    }
  }, [isOpen]);

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('analyticsCookies', settings.analytics.toString());
    localStorage.setItem('marketingCookies', settings.marketing.toString());
    localStorage.setItem('functionalCookies', settings.functional.toString());

    onSave(settings);
    onClose();
  };

  const handleAcceptAll = () => {
    const allSettings = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setSettings(allSettings);
  };

  const handleRejectAll = () => {
    const minimalSettings = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setSettings(minimalSettings);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <FadeIn>
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Configuración de Cookies
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              <p className="text-gray-600 mb-6">
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
                Puedes personalizar tu elección a continuación.
              </p>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="essential"
                        checked={settings.essential}
                        disabled
                        className="w-4 h-4 text-primary rounded focus:ring-primary disabled:opacity-50"
                      />
                      <label htmlFor="essential" className="font-medium text-gray-900">
                        Cookies Esenciales
                      </label>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      Siempre activas
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    Son necesarias para que el sitio web funcione correctamente.
                    Incluyen funciones básicas como navegación y acceso a áreas seguras.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="analytics"
                        checked={settings.analytics}
                        onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <label htmlFor="analytics" className="font-medium text-gray-900">
                        Cookies de Análisis
                      </label>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    Nos ayudan a entender cómo los visitantes interactúan con el sitio web
                    recopilando información de forma anónima.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="marketing"
                        checked={settings.marketing}
                        onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <label htmlFor="marketing" className="font-medium text-gray-900">
                        Cookies de Marketing
                      </label>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    Se utilizan para mostrar anuncios relevantes para ti y tus intereses,
                    y para medir la efectividad de las campañas de marketing.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="functional"
                        checked={settings.functional}
                        onChange={(e) => setSettings({ ...settings, functional: e.target.checked })}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <label htmlFor="functional" className="font-medium text-gray-900">
                        Cookies Funcionales
                      </label>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">
                    Permiten que el sitio web recuerde las elecciones que haces (como tu nombre de
                    usuario, idioma o la región en la que te encuentras) para proporcionar funciones mejoradas.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <div className="flex gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Rechazar todas
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm font-medium rounded-lg border transition-colors hover:opacity-90"
                    style={{ color: '#CF5029', borderColor: '#CF5029' }}
                  >
                    Aceptar todas
                  </button>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors hover:opacity-90"
                      style={{ backgroundColor: '#CF5029' }}
                  >
                    Guardar preferencias
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
    </div>
  );
};

export default CookieSettings;