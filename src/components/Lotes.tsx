import React from 'react';

interface LotesProps {
  onNavigate: (page: string, params?: { loteId?: string }) => void;
}

const Lotes: React.FC<LotesProps> = ({ onNavigate }) => {
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
                  <div className="flex h-[38px] w-full pt-1.5">
                    <div className="flex h-1.5 w-full items-center rounded-full bg-gray-200">
                      <div className="relative w-full h-full flex items-center" style={{marginLeft: "20%", marginRight: "30%"}}>
                        <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                        <div className="absolute -left-2 -top-2.5 flex flex-col items-center gap-1.5">
                          <div className="size-5 rounded-full bg-primary border-2 border-white"></div>
                          <p className="text-xs font-normal leading-normal text-gray-600">$20,000</p>
                        </div>
                        <div className="absolute -right-2 -top-2.5 flex flex-col items-center gap-1.5">
                          <div className="size-5 rounded-full bg-primary border-2 border-white"></div>
                          <p className="text-xs font-normal leading-normal text-gray-600">$80,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rango de Superficie */}
                <div className="relative flex w-full flex-col items-start justify-between gap-3 @[480px]:flex-row @[480px]:items-center">
                  <p className="text-base font-medium leading-normal w-full shrink-[3] text-gray-700">Rango de Superficie (m²)</p>
                  <div className="flex h-[38px] w-full pt-1.5">
                    <div className="flex h-1.5 w-full items-center rounded-full bg-gray-200">
                      <div className="relative w-full h-full flex items-center" style={{marginLeft: "15%", marginRight: "25%"}}>
                        <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                        <div className="absolute -left-2 -top-2.5 flex flex-col items-center gap-1.5">
                          <div className="size-5 rounded-full bg-primary border-2 border-white"></div>
                          <p className="text-xs font-normal leading-normal text-gray-600">300 m²</p>
                        </div>
                        <div className="absolute -right-2 -top-2.5 flex flex-col items-center gap-1.5">
                          <div className="size-5 rounded-full bg-primary border-2 border-white"></div>
                          <p className="text-xs font-normal leading-normal text-gray-600">1000 m²</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de Lotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {/* Lote 15A */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover"
                  data-alt="Expansive land lot with green grass under a clear blue sky"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2zi598p407twBcnfCKIdREgqCwoRSB-rgEYI8lEOLPdHluQRrcYLNqhy6dmNJirdt2ibXXiVl9wF8xhr1hYVJFP0QPqdQ64B9JIVJn0B_x7WNL58lI2fKe85lJSj1AsUvfsn_TyxeWYQKxFwWv6KYjuICuKjyDWROhYUxiyaMNwri8-9aQV5YxBCJ1VN63eTR_dpeWKGhQoRik2SNIdefdeR6-45bORvfPx1aS4EYvplgfev_CbUt6JZ4b86vVmYJNW7D8FCqQ"
                />
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">DISPONIBLE</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lote 15A</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">square_foot</span>
                  <span>500 m²</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">waves</span>
                  <span>Frente a la laguna</span>
                </div>
                <p className="text-2xl font-black text-gray-900 mb-4">$50,000 USD</p>
                <button
                  onClick={() => onNavigate('detalles', { loteId: '15A' })}
                  className="w-full bg-[#E9C874] text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Lote 22B */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover"
                  data-alt="Green field with trees in the background on a sunny day"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3UwK_2Z8xMXS5GhWGIybkDgzQXsJNJhtX2M_9OFae8aX7WVKCg-CC2rTvBgXHvXgcatyQ89fSH41fc2HeOFnMo4GMeelNyC-1oFJu9uZHAvVgGLz3HBKm6D3S01V2PPkW3P7SPULK4oYWIAlWNzky8VAWyH9Rtf0xgYvSafA8nRkvAt4SJsCKJB1tg58BB2MdTghjGODpbEUePS8_9Tl65seWecJltsXjQzI8DTPGClysn9cZV0vDLiiu9sYsqM0Y3zxV2HF1zw"
                />
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">DISPONIBLE</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lote 22B</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">square_foot</span>
                  <span>750 m²</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">forest</span>
                  <span>Vista al bosque</span>
                </div>
                <p className="text-2xl font-black text-gray-900 mb-4">$72,000 USD</p>
                <button
                  onClick={() => onNavigate('detalles', { loteId: '22B' })}
                  className="w-full bg-[#E9C874] text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Lote 08C - VENDIDO */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover"
                  data-alt="Land lot near a paved road with utility poles"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxWNlvO__Ao4Lqgrgx-8WBdrSkglRZ38WjJwEI2fbmOjDDpzyE8ylfMdgAkkAFOrJ-VHgPIkvxOLmlHFwWrqKAxvjOxGM3dqku1BwE17afToN4ajBZHbsL8ovbJcEAMh_WutepOzOcXQJ7XmZVc5i2k0LSq1VQOoB1ehHeknT-yoQTSgE57oaAiI4hwVoLIqSQ5MWZfwXuh_sPK8U1TomeK6f1fOA1NsYlpbIxTbQ52UDlIsiFBYqKPI4QFm9yB-wZLKPBetmVQg"
                />
                <div className="absolute top-4 right-4 bg-gray-500/20 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">VENDIDO</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lote 08C</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">square_foot</span>
                  <span>480 m²</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">electrical_services</span>
                  <span>Servicios incluidos</span>
                </div>
                <p className="text-2xl font-black text-gray-500 mb-4">$45,000 USD</p>
                <button className="w-full text-white font-bold py-3 px-4 rounded-lg bg-gray-400 cursor-not-allowed" disabled>Ver Detalles</button>
              </div>
            </div>

            {/* Lote 31A */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover"
                  data-alt="Large open field with a single tree under a dramatic sky"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4pCso7GpoMc7LZKv2z8MP-YJ2lamLr6hObS44A_bX0BcaLVP7iW1ihpQgg4w2AZJpOluHgxMI2J_un1DxsgbtTwDn0Oz4taGylbW83EjHyz5MaDGyxali0ujSv1mKP-WY5Ys_Opgi1g49Ej73hp50a5iNcef7Xe-2mzgsaJtt1pT68ywGhZdphJ17Nc3aVsh10dh0C6F8USrD8Y2MqhlCN2_5YU1zrbMeCAHXCGj_tuoYHXpOukZzzszoBtjxLjFpsjWGG-G-xw"
                />
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">DISPONIBLE</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lote 31A</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">square_foot</span>
                  <span>1200 m²</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">filter_hdr</span>
                  <span>Posición elevada</span>
                </div>
                <p className="text-2xl font-black text-gray-900 mb-4">$95,000 USD</p>
                <button
                  onClick={() => onNavigate('detalles', { loteId: '31A' })}
                  className="w-full bg-[#E9C874] text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Lote 05D */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover"
                  data-alt="A plot of land marked out with wooden stakes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFwBbwM1lCg6fNkPHXsbIGdkrAi2xfpDfYzl_Z_uhIez2UVdNDiRjAUHdkgTm3mvbeutdfnKJmFNSNkC4aLg9wT6O1S1whxTAFYKhHfUkxdyv8VzNPYmo9E7Y_hUyhnjnV5IW5GaZwwv8ibEwaDbf7tdVdZxoiId9XBh8UTDosHn8GzkjBS8PhlGEE1f72UkrVGJL3yZJgY4En6QPxfFeiU_ZSQOFM-FksT7yzYjoC1387sdHjKVOWBgoGMZ1BPpO8oVoWBmEtyg"
                />
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">DISPONIBLE</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lote 05D</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">square_foot</span>
                  <span>620 m²</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">add_road</span>
                  <span>Acceso pavimentado</span>
                </div>
                <p className="text-2xl font-black text-gray-900 mb-4">$61,000 USD</p>
                <button
                  onClick={() => onNavigate('detalles', { loteId: '05D' })}
                  className="w-full bg-[#E9C874] text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Ver Detalles
                </button>
              </div>
            </div>

            {/* Lote 19F */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover"
                  data-alt="Land lot at the corner of two dirt roads"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsRKljq8NeYhyPkx6e_Ph5XMB_NI8UkpTSULSYriPztZk2hNaFEl81K3BLQSgI8ZRe-M_EfffXXt29KBx3Y4Q4lY0Ba5VHf-YKnkhH7rFiJaMaQEYAQ-w3yhFEckgbs6_EcZ53M93HeWt_XSd7LWjt1GDcfHkprzQIUlLSNZhPUFZWeSmOSVPpSahQfgYrXGV5a9NaQ-V_P7x8VS7ZiM_l4v3VVcqKDlTZyvZEZt5uTP9zSecU6Igma498ctNO1CU0ZuDcbPPXhQ"
                />
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">DISPONIBLE</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lote 19F</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">square_foot</span>
                  <span>800 m²</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="material-symbols-outlined text-lg mr-2">villa</span>
                  <span>Ideal para construir</span>
                </div>
                <p className="text-2xl font-black text-gray-900 mb-4">$78,500 USD</p>
                <button
                  onClick={() => onNavigate('detalles', { loteId: '19F' })}
                  className="w-full bg-[#E9C874] text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Lotes;