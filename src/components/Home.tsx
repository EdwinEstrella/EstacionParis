import React from 'react';
import FadeIn from './Animations/FadeIn';
import StaggeredAnimation from './Animations/StaggeredAnimation';
import { TestimonialsSectionDemo } from './ui/TestimonialsWithMarquee';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <main className="flex h-full grow flex-col">
          {/* HeroSection - Full screen with background image */}
          <div className="relative min-h-screen flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/hero.jpg")'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black-60" />

            <div className="relative z-10 pl-4 sm:pl-6 lg:pl-8 pr-4">
              <FadeIn duration={800}>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start text-left max-w-full" style={{
                  marginLeft: '0px',
                  marginRight: '0px'
                }}>
                  <div className="flex flex-col gap-6 md:gap-8 items-start text-left max-w-4xl lg:max-w-5xl" style={{
                    marginRight: '600px'
                  }}>
                  {/* Badge o elemento decorativo */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    <span className="text-white text-sm font-medium">Lotes disponibles</span>
                  </div>

                  {/* Título principal */}
                  <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-[-0.033em]">
                    El lugar de tus
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                      sueños te espera
                    </span>
                  </h1>

                  {/* Subtítulo enriquecido */}
                  <div className="space-y-4 max-w-3xl">
                    <h2 className="text-white/95 text-xl md:text-2xl font-light leading-relaxed">
                      Descubre un entorno único en Argentina para construir la vida que siempre quisiste, rodeado de naturaleza y tranquilidad.
                    </h2>
                    <p className="text-white/80 text-base md:text-lg font-normal leading-relaxed">
                      Ubicados en la zona más privilegiada, con acceso a todos los servicios y la paz que mereces.
                    </p>
                  </div>

        
                  {/* Botón único de acción */}
                  <div className="flex flex-col gap-4 mt-8">
                    <button
                      onClick={() => onNavigate?.('lotes')}
                      className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] transition-all hover:scale-105 hover:bg-red-600 shadow-xl"
                    >
                      <span className="truncate">Ver Lotes Disponibles</span>
                    </button>

                    {/* Texto debajo del botón */}
                    <p className="text-white/70 text-sm font-normal leading-relaxed max-w-md">
                      Únete a las familias que ya han encontrado su lugar ideal en Estación Paris.
                      Tu futuro comienza aquí.
                    </p>
                  </div>
                  </div>

                  {/* Tarjeta de lote al lado */}
                  <div className="flex-1 lg:max-w-md mt-8 lg:mt-0">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-900/40 to-blue-900/60 backdrop-blur-sm shadow-xl transition-all hover:shadow-2xl hover:scale-105">
                      {/* Imagen más pequeña centrada */}
                      <div className="relative h-32 overflow-hidden">
                        <div
                          className="absolute inset-4 bg-cover bg-center rounded-lg"
                          data-alt="Photo of a grassy lot with a few trees under a clear blue sky."
                          style={{
                            backgroundImage: 'url("/other_house.jpg")'
                          }}
                        ></div>
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Disponible
                        </div>
                      </div>

                      {/* Flecha decorativa */}
                      <div className="absolute top-28 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Contenido sin fondo blanco */}
                      <div className="px-6 py-4 relative z-10">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">Lote Pampa 101</h3>
                            <p className="text-white/80 text-sm">500m² - Vistas panorámicas</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <p className="text-2xl font-bold text-white">$25,000</p>
                            <p className="text-xs text-white/70">$50 por m²</p>
                          </div>
                          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg">
                            Ver Detalles
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

  
            </div>
          </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black-60">
            </div>

          {/* Content Sections */}
          <div className="flex w-full flex-1 flex-col px-4 py-16 sm:px-6 lg:px-8 bg-white">
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