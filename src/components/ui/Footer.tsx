import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

interface Footer7Props {
  onNavigate?: (page: string) => void;
}

export const Footer7 = ({ onNavigate }: Footer7Props) => {
  const [email, setEmail] = useState("");

  const handleLinkClick = (page: string) => {
    onNavigate?.(page);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el email
    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Newsletter (arriba) y Contacto (abajo) */}
          <div className="flex flex-col space-y-6">
            {/* Newsletter - Primera sección */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Únete a nuestro newsletter</h3>
            </div>

            {/* Contacto - Segunda sección */}
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-semibold text-white mb-2">Contacto</p>
              <p>+54 11 1234-5678</p>
              <p>info@estacionparis.com</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>

          {/* Columna 2: Logo (arriba) y Menú de navegación (abajo) */}
          <div className="flex flex-col items-center space-y-6">
            {/* Logo - Primera sección */}
            <div>
              <svg
                className="w-12 h-12 text-white"
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
            </div>

            {/* Menú de navegación - Segunda sección */}
            <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
              <a
                href="#nosotros"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("nosotros");
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Sobre Nosotros
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("contacto");
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Contacto
              </a>
              <a
                href="#lotes"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("lotes");
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Comprar
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("contacto");
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Vender
              </a>
            </nav>
          </div>

          {/* Columna 3: Newsletter input (arriba) y Enlaces sociales (abajo) */}
          <div className="flex flex-col items-start md:items-end space-y-6">
            {/* Newsletter input - Primera sección */}
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu dirección de email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                required
              />
              <button
                type="submit"
                className="bg-white text-black rounded-lg px-4 py-2 hover:bg-white/90 transition-colors flex items-center justify-center"
                aria-label="Enviar email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>

            {/* Enlaces Sociales - Segunda sección */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Sociales</h3>
              <div className="flex flex-col space-y-3">
              <a
                href="https://instagram.com/estacionparis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaInstagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com/estacionparis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaFacebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://pinterest.com/estacionparis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaPinterest className="w-5 h-5" />
                <span>Pinterest</span>
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div className="flex justify-center items-center text-sm text-white/70">
            <p>Copyright © Estacion Paris. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
