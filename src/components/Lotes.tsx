import React, { useState, useMemo } from 'react';
import { Slider } from './ui/slider';
import FadeIn from './Animations/FadeIn';

interface LotesProps {
  onNavigate: (page: string, params?: { loteId?: string }) => void;
}

interface Lote {
  id: string;
  nombre: string;
  precio: number;
  superficie: number;
  imagen: string;
  descripcion: string;
  caracteristica: string;
  disponible: boolean;
}

const Lotes: React.FC<LotesProps> = ({ onNavigate }) => {
  // Estado para los sliders
  const [precioMin, setPrecioMin] = useState(20000);
  const [precioMax, setPrecioMax] = useState(80000);
  const [superficieMin, setSuperficieMin] = useState(300);
  const [superficieMax, setSuperficieMax] = useState(1000);

  // Datos de los lotes
  const lotes: Lote[] = useMemo(() => [
    { id: '15A', nombre: 'Lote 15A', precio: 50000, superficie: 500, imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE2zi598p407twBcnfCKIdREgqCwoRSB-rgEYI8lEOLPdHluQRrcYLNqhy6dmNJirdt2ibXXiVl9wF8xhr1hYVJFP0QPqdQ64B9JIVJn0B_x7WNL58lI2fKe85lJSj1AsUvfsn_TyxeWYQKxFwWv6KYjuICuKjyDWROhYUxiyaMNwri8-9aQV5YxBCJ1VN63eTR_dpeWKGhQoRik2SNIdefdeR6-45bORvfPx1aS4EYvplgfev_CbUt6JZ4b86vVmYJNW7D8FCqQ', descripcion: 'Frente a la laguna', caracteristica: 'waves', disponible: true },
    { id: '22B', nombre: 'Lote 22B', precio: 72000, superficie: 750, imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3UwK_2Z8xMXS5GhWGIybkDgzQXsJNJhtX2M_9OFae8aX7WVKCg-CC2rTvBgXHvXgcatyQ89fSH41fc2HeOFnMo4GMeelNyC-1oFJu9uZHAvVgGLz3HBKm6D3S01V2PPkW3P7SPULK4oYWIAlWNzky8VAWyH9Rtf0xgYvSafA8nRkvAt4SJsCKJB1tg58BB2MdTghjGODpbEUePS8_9Tl65seWecJltsXjQzI8DTPGClysn9cZV0vDLiiu9sYsqM0Y3zxV2HF1zw', descripcion: 'Vista al bosque', caracteristica: 'forest', disponible: true },
    { id: '08C', nombre: 'Lote 08C', precio: 45000, superficie: 480, imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxWNlvO__Ao4Lqgrgx-8WBdrSkglRZ38WjJwEI2fbmOjDDpzyE8ylfMdgAkkAFOrJ-VHgPIkvxOLmlHFwWrqKAxvjOxGM3dqku1BwE17afToN4ajBZHbsL8ovbJcEAMh_WutepOzOcXQJ7XmZVc5i2k0LSq1VQOoB1ehHeknT-yoQTSgE57oaAiI4hwVoLIqSQ5MWZfwXuh_sPK8U1TomeK6f1fOA1NsYlpbIxTbQ52UDlIsiFBYqKPI4QFm9yB-wZLKPBetmVQg', descripcion: 'Servicios incluidos', caracteristica: 'electrical_services', disponible: false },
    { id: '31A', nombre: 'Lote 31A', precio: 95000, superficie: 1200, imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pCso7GpoMc7LZKv2z8MP-YJ2lamLr6hObS44A_bX0BcaLVP7iW1ihpQgg4w2AZJpOluHgxMI2J_un1DxsgbtTwDn0Oz4taGylbW83EjHyz5MaDGyxali0ujSv1mKP-WY5Ys_Opgi1g49Ej73hp50a5iNcef7Xe-2mzgsaJtt1pT68ywGhZdphJ17Nc3aVsh10dh0C6F8USrD8Y2MqhlCN2_5YU1zrbMeCAHXCGj_tuoYHXpOukZzzszoBtjxLjFpsjWGG-G-xw', descripcion: 'Posición elevada', caracteristica: 'filter_hdr', disponible: true },
    { id: '05D', nombre: 'Lote 05D', precio: 61000, superficie: 620, imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFwBbwM1lCg6fNkPHXsbIGdkrAi2xfpDfYzl_Z_uhIez2UVdNDiRjAUHdkgTm3mvbeutdfnKJmFNSNkC4aLg9wT6O1S1whxTAFYKhHfUkxdyv8VzNPYmo9E7Y_hUyhnjnV5IW5GaZwwv8ibEwaDbf7tdVdZxoiId9XBh8UTDosHn8GzkjBS8PhlGEE1f72UkrVGJL3yZJgY4En6QPxfFeiU_ZSQOFM-FksT7yzYjoC1387sdHjKVOWBgoGMZ1BPpO8oVoWBmEtyg', descripcion: 'Acceso pavimentado', caracteristica: 'add_road', disponible: true },
    { id: '19F', nombre: 'Lote 19F', precio: 78500, superficie: 800, imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsRKljq8NeYhyPkx6e_Ph5XMB_NI8UkpTSULSYriPztZk2hNaFEl81K3BLQSgI8ZRe-M_EfffXXt29KBx3Y4Q4lY0Ba5VHf-YKnkhH7rFiJaMaQEYAQ-w3yhFEckgbs6_EcZ53M93HeWt_XSd7LWjt1GDcfHkprzQIUlLSNZhPUFZWeSmOSVPpSahQfgYrXGV5a9NaQ-V_P7x8VS7ZiM_l4v3VVcqKDlTZyvZEZt5uTP9zSecU6Igma498ctNO1CU0ZuDcbPPXhQ', descripcion: 'Ideal para construir', caracteristica: 'villa', disponible: true },
  ], []);

  // Filtrar lotes basándose en los rangos
  const lotesFiltrados = useMemo(() => {
    return lotes.filter(lote => 
      lote.precio >= precioMin && 
      lote.precio <= precioMax && 
      lote.superficie >= superficieMin && 
      lote.superficie <= superficieMax
    );
  }, [lotes, precioMin, precioMax, superficieMin, superficieMax]);


  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
        <main className="flex-1">
          {/* Hero Section */}
          <FadeIn direction="up" delay={100}>
            <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
              <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-gray-900 text-center mb-4">
                  Nuestros Lotes Exclusivos
                </h1>
                <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                  Descubre terrenos únicos en las mejores ubicaciones de Argentina. Cada lote es una oportunidad para construir tu futuro.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Filtros */}
          <FadeIn direction="up" delay={200}>
            <div className="border-y border-gray-200 bg-white">
              <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col gap-6 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900">Filtros de Búsqueda</h2>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 pl-4 pr-3 text-gray-800 hover:bg-gray-200 transition-colors border border-gray-200">
                      <p className="text-sm font-medium leading-normal">Ordenar por: Precio</p>
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 pl-4 pr-3 text-gray-800 hover:bg-gray-200 transition-colors border border-gray-200">
                      <p className="text-sm font-medium leading-normal">Ubicación</p>
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 pl-4 pr-3 text-gray-800 hover:bg-gray-200 transition-colors border border-gray-200">
                      <p className="text-sm font-medium leading-normal">Estado: Disponible</p>
                      <span className="material-symbols-outlined text-lg">expand_more</span>
                    </button>
                  </div>

                  {/* Sliders de filtros */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    {/* Rango de Precios */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-base font-semibold text-gray-900 mb-4">Rango de Precios</p>
                      <div className="flex flex-col w-full gap-3">
                        <Slider
                          value={[precioMin, precioMax]}
                          min={20000}
                          max={100000}
                          step={1000}
                          onValueChange={(values) => {
                            setPrecioMin(values[0]);
                            setPrecioMax(values[1]);
                          }}
                          className="py-4"
                        />
                        <div className="flex justify-between text-sm font-medium text-gray-700">
                          <span>${precioMin.toLocaleString()}</span>
                          <span>${precioMax.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rango de Superficie */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-base font-semibold text-gray-900 mb-4">Rango de Superficie (m²)</p>
                      <div className="flex flex-col w-full gap-3">
                        <Slider
                          value={[superficieMin, superficieMax]}
                          min={200}
                          max={1200}
                          step={10}
                          onValueChange={(values) => {
                            setSuperficieMin(values[0]);
                            setSuperficieMax(values[1]);
                          }}
                          className="py-4"
                        />
                        <div className="flex justify-between text-sm font-medium text-gray-700">
                          <span>{superficieMin} m²</span>
                          <span>{superficieMax} m²</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Grid de Lotes */}
          <div className="py-12 px-4">
            <div className="container mx-auto max-w-7xl">
              {lotesFiltrados.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {lotesFiltrados.map((lote, index) => (
                    <FadeIn key={lote.id} direction="up" delay={300 + (index * 100)}>
                      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                        <div className="relative overflow-hidden aspect-square">
                          <img
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                            data-alt={`${lote.nombre} - ${lote.descripcion}`}
                            src={lote.imagen}
                            alt={lote.nombre}
                          />
                          <div className={`absolute top-3 right-3 ${lote.disponible ? 'bg-[#E9C874]/90 text-black' : 'bg-gray-600/90 text-white'} text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm shadow-lg`}>
                            {lote.disponible ? 'DISPONIBLE' : 'VENDIDO'}
                          </div>
                        </div>
                        <div className="p-3.5 flex flex-col">
                          <h3 className="text-base font-bold text-gray-900 mb-1.5">{lote.nombre}</h3>
                          <div className="space-y-1 mb-2.5">
                            <div className="flex items-center text-gray-600">
                              <span className="material-symbols-outlined text-sm mr-1.5 text-[#E9C874]">square_foot</span>
                              <span className="text-xs font-medium">{lote.superficie} m²</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <span className="material-symbols-outlined text-sm mr-1.5 text-[#E9C874]">{lote.caracteristica}</span>
                              <span className="text-xs">{lote.descripcion}</span>
                            </div>
                          </div>
                          <p className={`text-lg font-black mb-2.5 ${lote.disponible ? 'text-gray-900' : 'text-gray-500'}`}>
                            ${lote.precio.toLocaleString()} USD
                          </p>
                          {lote.disponible ? (
                            <button
                              onClick={() => onNavigate('detalles', { loteId: lote.id })}
                              className="w-full bg-[#E9C874] text-black font-bold py-2 px-3 rounded-lg hover:bg-[#E9C874]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-xs"
                            >
                              Ver Detalles
                            </button>
                          ) : (
                            <button className="w-full text-white font-bold py-2 px-3 rounded-lg bg-gray-400 cursor-not-allowed text-xs" disabled>
                              Ver Detalles
                            </button>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              ) : (
                <FadeIn direction="up" delay={300}>
                  <div className="col-span-full text-center py-16">
                    <div className="bg-gray-50 rounded-xl p-12 border border-gray-200">
                      <span className="material-symbols-outlined text-6xl text-gray-400 mb-4 block">search_off</span>
                      <p className="text-gray-600 text-xl font-medium">No se encontraron lotes con los filtros seleccionados.</p>
                      <p className="text-gray-500 text-sm mt-2">Intenta ajustar los rangos de precio o superficie.</p>
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Lotes;