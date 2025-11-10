import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  onNavigate?: (page: string) => void;
}

const estacionParisSections = [
  {
    title: "Productos",
    links: [
      { name: "Inicio", href: "#home" },
      { name: "Lotes", href: "#lotes" },
      { name: "Nosotros", href: "#nosotros" },
      { name: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nosotros", href: "#nosotros" },
      { name: "Nuestro Equipo", href: "#nosotros" },
      { name: "Proyectos", href: "#lotes" },
      { name: "Testimonios", href: "#home" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { name: "Ayuda", href: "#contacto" },
      { name: "Ventas", href: "#contacto" },
      { name: "Términos", href: "#politica" },
      { name: "Privacidad", href: "#politica" },
    ],
  },
];

const estacionParisSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://instagram.com/estacionparis", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://facebook.com/estacionparis", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "https://twitter.com/estacionparis", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "https://linkedin.com/company/estacionparis", label: "LinkedIn" },
];

const estacionParisLegalLinks = [
  { name: "Términos y Condiciones", href: "#politica" },
  { name: "Política de Privacidad", href: "#politica" },
];

export const Footer7 = ({
  logo = {
    url: "#home",
    src: "data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z' fill='currentColor'/%3E%3C/svg%3E",
    alt: "Estacion Paris Logo",
    title: "Estacion Paris",
  },
  sections = estacionParisSections,
  description = "Invirtiendo en tu futuro, lote a lote. Descubre los mejores terrenos en Argentina para construir el hogar de tus sueños.",
  socialLinks = estacionParisSocialLinks,
  copyright = "© 2024 Estacion Paris. Todos los derechos reservados.",
  legalLinks = estacionParisLegalLinks,
  onNavigate,
}: Footer7Props) => {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const page = href.slice(1); // Remove the '#' prefix
      onNavigate?.(page);
    }
  };

  return (
    <section className="py-32" style={{backgroundColor: '#4A2C2A'}}>
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url} onClick={(e) => { e.preventDefault(); handleLinkClick(logo.url); }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold text-white">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-gray-300">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-gray-300">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-white">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white"
                    >
                      <a href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-600 py-8 text-xs font-medium text-gray-300 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-white">
                <a href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};