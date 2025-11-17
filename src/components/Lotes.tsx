import React, { useState, useMemo } from 'react';
import { Slider } from './ui/slider';

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
          <div className="flex flex-wrap justify-between items-center gap-4 p-4">
            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] min-w-72 text-gray-900">Nuestros Lotes Exclusivos</h1>
          </div>

          {/* Filtros */}
          <div className="border-y border-gray-200 my-6">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-wrap gap-3">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200/50 pl-4 pr-3 text-gray-800 hover:bg-gray-200 transition-colors">
                  <p className="text-sm font-medium leading-normal">Ordenar por: Precio (Bajo a Alto)</p>
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200/50 pl-4 pr-3 text-gray-800 hover:bg-gray-200 transition-colors">
                  <p className="text-sm font-medium leading-normal">Ubicación</p>
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200/50 pl-4 pr-3 text-gray-800 hover:bg-gray-200 transition-colors">
                  <p className="text-sm font-medium leading-normal">Estado: Disponible</p>
                  <span className="material-symbols-outlined text-lg">expand_more</span>
                </button>
              </div>

              {/* Sliders de filtros */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {/* Rango de Precios */}
                <div className="relative flex w-full flex-col items-start justify-between gap-3 @[480px]:flex-row @[480px]:items-center">
                  <p className="text-base font-medium leading-normal w-full shrink-[3] text-gray-700">Rango de Precios</p>
                  <div className="flex flex-col w-full gap-2">
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
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>${precioMin.toLocaleString()}</span>
                      <span>${precioMax.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Rango de Superficie */}
                <div className="relative flex w-full flex-col items-start justify-between gap-3 @[480px]:flex-row @[480px]:items-center">
                  <p className="text-base font-medium leading-normal w-full shrink-[3] text-gray-700">Rango de Superficie (m²)</p>
                  <div className="flex flex-col w-full gap-2">
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
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>{superficieMin} m²</span>
                      <span>{superficieMax} m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Lotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {lotesFiltrados.length > 0 ? (
              lotesFiltrados.map((lote) => (
                <div key={lote.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative">
                    <img
                      className="h-56 w-full object-cover"
                      data-alt={`${lote.nombre} - ${lote.descripcion}`}
                      src={lote.imagen}
                      alt={lote.nombre}
                    />
                    <div className={`absolute top-4 right-4 ${lote.disponible ? 'bg-[#E9C874]/20 text-[#E9C874]' : 'bg-gray-500/20 text-gray-600'} text-xs font-bold px-3 py-1 rounded-full`}>
                      {lote.disponible ? 'DISPONIBLE' : 'VENDIDO'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lote.nombre}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="material-symbols-outlined text-lg mr-2">square_foot</span>
                      <span>{lote.superficie} m²</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="material-symbols-outlined text-lg mr-2">{lote.caracteristica}</span>
                      <span>{lote.descripcion}</span>
                    </div>
                    <p className={`text-2xl font-black mb-4 ${lote.disponible ? 'text-gray-900' : 'text-gray-500'}`}>
                      ${lote.precio.toLocaleString()} USD
                    </p>
                    {lote.disponible ? (
                      <button
                        onClick={() => onNavigate('detalles', { loteId: lote.id })}
                        className="w-full bg-[#E9C874] text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                      >
                        Ver Detalles
                      </button>
                    ) : (
                      <button className="w-full text-white font-bold py-3 px-4 rounded-lg bg-gray-400 cursor-not-allowed" disabled>
                        Ver Detalles
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">No se encontraron lotes con los filtros seleccionados.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Lotes;