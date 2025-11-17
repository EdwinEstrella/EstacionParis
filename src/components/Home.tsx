import React, { useState, useEffect } from 'react';
import FadeIn from './Animations/FadeIn';
import StaggeredAnimation from './Animations/StaggeredAnimation';
import { TestimonialsSectionDemo } from './ui/TestimonialsWithMarquee';
import { InstagramIcon, LinkedinIcon, ArrowRightIcon } from './icons';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [contador1, setContador1] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contador2, setContador2] = useState(0);
  const [contador3, setContador3] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    // Array to store all timer IDs for cleanup
    const timers: NodeJS.Timeout[] = [];

    const incrementCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      let current = 0;
      const step = target / steps;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
          // Remove timer from array when it completes
          const index = timers.indexOf(timer);
          if (index > -1) {
            timers.splice(index, 1);
          }
        } else {
          setter(Math.floor(current));
        }
      }, interval);
      // Store timer ID for cleanup
      timers.push(timer);
      return timer;
    };

    incrementCounter(500, setContador1);
    incrementCounter(15, setContador2);
    incrementCounter(8, setContador3);

    return () => {
      // Clear all active timers to prevent memory leaks
      timers.forEach(timer => clearInterval(timer));
      // Reset state
      setContador1(0);
      setContador2(0);
      setContador3(0);
    };
  }, []);
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <main className="flex h-full grow flex-col">
          {/* HeroSection - Full screen con nuevo diseño */}
          <section className="relative h-[90vh] min-h-[700px] text-white flex flex-col justify-center">
            <div className="absolute inset-0 bg-black">
              <div
                className="w-full h-full object-cover opacity-40"
                style={{
                  backgroundImage: 'url("/hero.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col h-full">
              <div className="flex-grow flex flex-col justify-center">
                <div className="max-w-2xl">
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl !leading-tight">
                    El lugar de tus
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                      sueños te espera
                    </span>
                  </h1>
                  <p className="mt-6 text-lg max-w-md">
                    Descubre el lugar ideal para construir tu hogar en Argentina.
                  </p>
                  <button
                    onClick={() => onNavigate?.('lotes')}
                    className="mt-8 bg-[#E9C874] text-black px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                  >
                    Ver Lotes Disponibles
                  </button>
                </div>
              </div>

              {/* Tarjeta de lote lateral */}
              <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-8 bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-2xl w-80 shadow-lg border border-white/20">
                <div className="relative h-32 overflow-hidden rounded-lg mb-3">
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: 'url("/other_house.jpg")'
                    }}
                  ></div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Disponible
                  </div>
                </div>
                <p className="text-sm font-semibold">Lote Pampa 101 - 500m² con vistas panorámicas</p>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <p className="text-lg font-bold">$25,000</p>
                    <p className="text-xs text-gray-300">$50 por m²</p>
                  </div>
                  <button className="bg-white hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
                    <ArrowRightIcon className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>

              {/* Buscador inferior */}
              <div className="relative mt-auto mb-8 lg:mb-16 w-full flex justify-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-2xl shadow-2xl max-w-4xl w-full">
                  <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-3 text-white">
                    <div className="col-span-2 md:col-span-1 border-r border-white/30 pr-4">
                      <label className="text-xs font-bold block">Ubicación</label>
                      <input type="text" placeholder="Buscar ubicaciones" className="bg-transparent placeholder-white/70 focus:outline-none w-full"/>
                    </div>
                    <div className="border-r border-white/30 pr-4">
                      <label className="text-xs font-bold block">Tamaño</label>
                      <input type="text" placeholder="m²" className="bg-transparent placeholder-white/70 focus:outline-none w-full"/>
                    </div>
                    <div className="border-r border-white/30 pr-4">
                      <label className="text-xs font-bold block">Presupuesto</label>
                      <input type="text" placeholder="Max $" className="bg-transparent placeholder-white/70 focus:outline-none w-full"/>
                    </div>
                    <div className="pr-4">
                      <label className="text-xs font-bold block">Tipo</label>
                      <input type="text" placeholder="Residencial" className="bg-transparent placeholder-white/70 focus:outline-none w-full"/>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex justify-center">
                       <button className="bg-[#E9C874] text-black rounded-full h-14 w-14 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                       </button>
                    </div>
                  </div>
                </div>
              </div>
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
          </section>

          {/* Nueva sección Nosotros con 3 contenedores horizontales */}
          <section id="nosotros-section" className="py-20 px-4" style={{ backgroundColor: '#3D5743' }}>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                {/* Contenedor 1: Título, Contador y Texto */}
                <div className="text-center lg:text-left" >
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Nosotros
                  </h1>

                  {/* Contadores animados en círculos */}
                  <div className="flex justify-center items-center gap-0 mb-8">
                    {/* Primer círculo - Clientes */}
                    <div className="relative" style={{ marginRight: '-20px', zIndex: 1 }}>
                      <div className="w-44 h-44 md:w-48 md:h-48 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-xl md:text-2xl font-normal text-white">+</span>
                          <span className="text-3xl md:text-4xl font-normal text-white">{contador1}</span>
                          <p className="text-white text-sm font-normal mt-1">Clientes</p>
                        </div>
                      </div>
                    </div>

                    {/* Segundo círculo - Lotes */}
                    <div className="relative">
                      <div className="w-44 h-44 md:w-48 md:h-48 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-xl md:text-2xl font-normal text-white">+</span>
                          <span className="text-3xl md:text-4xl font-normal text-white">{contador3}</span>
                          <p className="text-white text-sm font-normal mt-1">Lotes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white text-lg leading-relaxed">
                    En Estación Paris, somos más que una empresa inmobiliaria. Somos constructores de sueños,
                    dedicados a ayudar a las familias argentinas a encontrar el lugar perfecto donde construir
                    su futuro. Con años de experiencia y cientos de familias satisfechas, nos enorgullece ser
                    parte del comienzo de nuevas historias de vida.
                  </p>
                </div>

                {/* Contenedor 2: Mapa de Argentina SVG */}
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-md">
                    <img
                      src="/argentinaHigh.svg"
                      alt="Mapa de Argentina"
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                </div>

                {/* Contenedor 3: Dos imágenes verticales */}
                <div className="flex flex-col gap-6 justify-center">
                  <div className="w-full max-w-sm mx-auto">
                    <img
                      src="/Nosotros_1.jpg"
                      alt="Nosotros 1"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full max-w-sm mx-auto">
                    <img
                      src="/Nosotros_2.jpg"
                      alt="Nosotros 2"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div id="white-section" className="flex w-full flex-1 flex-col px-4 py-16 sm:px-6 lg:px-8 bg-white">
            <div className="@container">
              <div className="@[480px]:p-0">
                {/* Featured Listings Section */}
                <section className="w-full py-10 sm:py-16">
                  <FadeIn delay={400}>
                    <h2 className="text-text-header text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5 text-center">Lotes Destacados</h2>
                  </FadeIn>
                  <StaggeredAnimation baseDelay={600} staggerDelay={150}>
                    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-6xl mx-auto">
                      <div className="flex transform flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:scale-105">
                        <div
                          className="h-40 w-full bg-cover bg-center"
                          data-alt="Photo of a grassy lot with a few trees under a clear blue sky."
                          style={{
                            backgroundImage: 'url("/other_house.jpg")'
                          }}
                        ></div>
                        <div className="flex flex-col gap-2 p-4">
                          <p className="text-text-header text-lg font-bold leading-normal">Lote Pampa 101</p>
                          <p className="text-text-header/70 text-sm font-normal leading-normal">500m² - Vistas panorámicas</p>
                          <p className="text-accent text-lg font-bold leading-normal">$25,000</p>
                        </div>
                      </div>

                      <div className="flex transform flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:scale-105">
                        <div
                          className="h-40 w-full bg-cover bg-center"
                          data-alt="Photo of a lot near a small mountain range, with clear ground."
                          style={{
                            backgroundImage: 'url("/other_house.jpg")'
                          }}
                        ></div>
                        <div className="flex flex-col gap-2 p-4">
                          <p className="text-text-header text-lg font-bold leading-normal">Lote Serrano 204</p>
                          <p className="text-text-header/70 text-sm font-normal leading-normal">750m² - Cerca del arroyo</p>
                          <p className="text-accent text-lg font-bold leading-normal">$38,000</p>
                        </div>
                      </div>

                      <div className="flex transform flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:scale-105">
                        <div
                          className="h-40 w-full bg-cover bg-center"
                          data-alt="Photo of a lot nestled within a dense forest of tall trees."
                          style={{
                            backgroundImage: 'url("/other_house.jpg")'
                          }}
                        ></div>
                        <div className="flex flex-col gap-2 p-4">
                          <p className="text-text-header text-lg font-bold leading-normal">Lote del Bosque 30</p>
                          <p className="text-text-header/70 text-sm font-normal leading-normal">600m² - Privacidad total</p>
                          <p className="text-accent text-lg font-bold leading-normal">$32,000</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex px-4 py-6 justify-center">
                      <button
                        onClick={() => onNavigate?.('lotes')}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 border-2 border-primary text-primary bg-transparent text-base font-bold leading-normal tracking-[0.015em] transition-all hover:bg-primary hover:text-white hover:scale-105"
                      >
                        <span className="truncate">Ver Todos los Lotes</span>
                      </button>
                    </div>
                  </StaggeredAnimation>
                </section>

                {/* Testimonials Section */}
                <FadeIn delay={1000}>
                  <TestimonialsSectionDemo />
                </FadeIn>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;