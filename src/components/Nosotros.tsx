import React from 'react';
import { InstagramIcon, LinkedinIcon } from './icons';
import FadeIn from './Animations/FadeIn';
import StaggeredAnimation from './Animations/StaggeredAnimation';

interface NosotrosProps {
  onNavigate?: (page: string) => void;
}

const Nosotros: React.FC<NosotrosProps> = ({ onNavigate }) => {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-white">
        <main className="flex h-full grow flex-col">
          {/* HeroSection - Similar a Home pero con contenido de Nosotros */}
          <section className="relative h-[90vh] min-h-[700px] text-white flex flex-col justify-center">
            <div className="absolute inset-0 bg-black">
              <div
                className="w-full h-full object-cover opacity-40"
                style={{
                  backgroundImage: 'url("/Nosotros_1.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col h-full">
              <div className="flex-grow flex flex-col justify-center items-center text-center">
                <FadeIn direction="up" delay={100}>
                  <div className="max-w-2xl">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl !leading-tight">
                      Construyendo Sueños,
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                        Creando Futuros
                      </span>
                    </h1>
                    <p className="mt-6 text-lg max-w-md mx-auto">
                      Descubre nuestra misión de ayudar a las familias a encontrar el lugar perfecto en Argentina para construir su futuro. Todo comienza con el terreno adecuado.
                    </p>
                    <button
                      onClick={() => onNavigate?.('lotes')}
                      className="mt-8 bg-[#E9C874] text-black px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Ver Nuestros Lotes
                    </button>
                  </div>
                </FadeIn>
              </div>

              {/* Redes sociales */}
              <div className="absolute bottom-8 right-8 z-20 flex space-x-4">
                <a href="https://instagram.com/estacionparis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <InstagramIcon className="w-5 h-5"/>
                </a>
                <a href="https://facebook.com/estacionparis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/estacionparis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <LinkedinIcon className="w-5 h-5"/>
                </a>
              </div>
            </div>
          </section>

          {/* Nuestra Historia */}
          <FadeIn direction="up" delay={200}>
            <section className="py-16 px-4 bg-white">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] pb-6 text-center">Nuestra Historia</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                  Una narrativa detallada sobre la visión de los fundadores para Estacion Paris, explicando por qué se creó la empresa y su compromiso de ayudar a las familias a encontrar su terreno ideal en Argentina. Cubre el viaje desde una simple idea hasta convertirse en un nombre de confianza en el desarrollo inmobiliario. Creemos que poseer un terreno es más que una inversión; es el fundamento para una vida llena de recuerdos, crecimiento y comunidad.
                </p>
              </div>
            </section>
          </FadeIn>

          {/* Nuestra Misión y Valores */}
          <FadeIn direction="up" delay={300}>
            <section className="py-16 px-4 bg-gray-50">
              <div className="container mx-auto max-w-6xl">
                <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] pb-12 text-center">Nuestra Misión y Valores</h2>
                <StaggeredAnimation baseDelay={350} staggerDelay={100} direction="up">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-[#E9C874]/20 mx-auto">
                    <span className="material-symbols-outlined text-[#E9C874] text-4xl">emoji_objects</span>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-3">Calidad</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Estamos comprometidos con ofrecer lotes de primer nivel que cumplen con los más altos estándares de ubicación, accesibilidad y potencial.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-[#E9C874]/20 mx-auto">
                    <span className="material-symbols-outlined text-[#E9C874] text-4xl">groups</span>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-3">Comunidad</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Nuestros desarrollos están diseñados para fomentar comunidades fuertes y vibrantes donde las familias puedan prosperar por generaciones.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="flex justify-center items-center mb-6 w-20 h-20 rounded-full bg-[#E9C874]/20 mx-auto">
                    <span className="material-symbols-outlined text-[#E9C874] text-4xl">handshake</span>
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-3">Satisfacción del Cliente</h3>
                  <p className="text-gray-600 text-base leading-relaxed">Tu viaje es nuestra prioridad. Proporcionamos guía transparente y de apoyo desde el primer contacto hasta la propiedad final.</p>
                </div>
                  </div>
                </StaggeredAnimation>
              </div>
            </section>
          </FadeIn>

          {/* Conoce al Equipo */}
          <FadeIn direction="up" delay={400}>
            <section className="py-16 px-4 bg-white">
              <div className="container mx-auto max-w-6xl">
                <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] pb-12 text-center">Conoce al Equipo</h2>
                <StaggeredAnimation baseDelay={450} staggerDelay={100} direction="up">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border border-gray-100">
                  <div className="relative mb-6">
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#E9C874]/30"
                      data-alt="Professional headshot of founder Juan Pérez"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWFful3oEXfrAjWgIFF0f82Ca0RpiR-jH3Narlvr-Fq_FrgOo7A6XPk8FjZAOejp70o6h98BQknhN42lu1xAVyLumUP7r6U40QBgxnuqrRgETENXBGTEK2xV7lrxAx2LZ6B_q2jyyrJsXb2pPY8QzeOQyfKGEqVjKi4nFhrXOZKSXszI2ozXHB2nul2aQmKUQRhcyYSWWwzdGeL7Rw14X_E4ZDHerGxrY4Cb6wel4AJRSpi_1bkj-e1FY-U1RiI5Powc-96T_-tA"
                      alt="Juan Pérez"
                    />
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-1">Juan Pérez</h3>
                  <p className="text-[#E9C874] text-sm font-semibold mb-3">Co-Fundador & CEO</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Con más de 20 años en bienes raíces, la visión de Juan es la fuerza impulsora detrás de nuestro éxito.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border border-gray-100">
                  <div className="relative mb-6">
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#E9C874]/30"
                      data-alt="Professional headshot of founder María García"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3BntcFBGnNFaeEeWe-WqPxJ-u_oJckIMFc0f1L1-6p2WiFMDSyki911NXV47ZSuB3s_ajAHPubnzUkstAg51Sap0qyu-jm54gfAsY8AUNkpAAu5JR-35tvNqmApZYTKY6HaqLgPRbcpzjqrmXmVDFxd1ZaWBm5kfAA1YMu7NyCD1Ohj5KI18csmT2cprRIVUG5BXmWKtdFgDsh-5dA1wgY9JwevRi3Tfr53WaZzyGna05cPqw0hazB3bpv7cfSJO-kFbr4Ba_w"
                      alt="María García"
                    />
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-1">María García</h3>
                  <p className="text-[#E9C874] text-sm font-semibold mb-3">Co-Fundadora & COO</p>
                  <p className="text-gray-600 text-sm leading-relaxed">La experiencia operativa de María asegura que cada proyecto se ejecute sin problemas y éticamente.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border border-gray-100 sm:col-span-2 lg:col-span-1">
                  <div className="relative mb-6">
                    <img
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#E9C874]/30"
                      data-alt="Professional headshot of team member Carlos Rodríguez"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWoeEuzUfhSTts5OSbw5OfyolkFmuRS7Ly_8yiHD6uu1mJWL8Wqlf7V1aLRzfx5pmDHnlrpeENALX3FR6DlUtBZnu8M-98KtOHl2L5dna_gRZL2qEaxVkKWq7zo-N9cvDNSajmdWW-04GQFtDHCnqEvju9NE3NnwCxxGCiW-YwqGatfo9NoHv6f58l0zu-9yJu4JuOUJF1y4nZrMz8KltaIcklyPB49OkbbwT-TLN2WVEG8v80kLMPvDIp6Nm97hWfR7enDHuDJg"
                      alt="Carlos Rodríguez"
                    />
                  </div>
                  <h3 className="text-gray-900 text-xl font-bold mb-1">Carlos Rodríguez</h3>
                  <p className="text-[#E9C874] text-sm font-semibold mb-3">Jefe de Ventas</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Carlos está dedicado a ayudar a las familias a navegar el proceso de compra con facilidad y confianza.</p>
                </div>
                  </div>
                </StaggeredAnimation>
              </div>
            </section>
          </FadeIn>

          {/* Nuestro Viaje - Timeline */}
          <FadeIn direction="up" delay={500}>
            <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] pb-12 text-center">Nuestro Viaje</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E9C874] hidden md:block"></div>
                <div className="space-y-12">
                  {/* Timeline Item 1 */}
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#E9C874] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                      2015
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-gray-900 text-xl font-bold mb-2">Fundación de la Empresa</h3>
                      <p className="text-gray-600 leading-relaxed">Estacion Paris fue fundada con el sueño de hacer accesible y gratificante la propiedad de terrenos para familias en Argentina.</p>
                    </div>
                  </div>
                  {/* Timeline Item 2 */}
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#E9C874] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                      2018
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-gray-900 text-xl font-bold mb-2">Lanzamiento del Primer Gran Proyecto</h3>
                      <p className="text-gray-600 leading-relaxed">Lanzamos exitosamente nuestro primer gran desarrollo, vendiendo más de 100 lotes en el primer año.</p>
                    </div>
                  </div>
                  {/* Timeline Item 3 */}
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#E9C874] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                      2022
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-gray-900 text-xl font-bold mb-2">Premio a la Excelencia Comunitaria</h3>
                      <p className="text-gray-600 leading-relaxed">Reconocidos por nuestro compromiso con prácticas de desarrollo sostenibles y enfocadas en la comunidad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </FadeIn>

          {/* Testimonio */}
          <FadeIn direction="up" delay={600}>
            <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center border border-gray-200">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-[#E9C874] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-900 text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">
                  "No solo vendemos terrenos; proporcionamos el lienzo donde puedes pintar tu futuro. Ver a las familias construir sus hogares y vidas en nuestras propiedades es nuestro mayor logro."
                </p>
                <p className="text-[#E9C874] font-bold text-lg">- Juan Pérez, Co-Fundador</p>
              </div>
            </div>
          </section>
          </FadeIn>

          {/* CTA Final */}
          <FadeIn direction="up" delay={700}>
            <section className="py-16 px-4 bg-gray-900">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Encuentra tu Lugar Perfecto</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                ¿Listo para comenzar tu viaje? Explora nuestros lotes disponibles o contacta a nuestro equipo para una consulta personalizada. Tu futuro hogar comienza aquí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onNavigate?.('lotes')}
                  className="bg-[#E9C874] text-black px-8 py-4 rounded-lg font-bold text-base hover:bg-[#E9C874]/90 transition-colors shadow-lg"
                >
                  Ver Nuestros Lotes
                </button>
                <button 
                  onClick={() => onNavigate?.('contacto')}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </section>
          </FadeIn>
        </main>
      </div>
    </>
  );
};

export default Nosotros;