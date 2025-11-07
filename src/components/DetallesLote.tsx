import React from 'react';

interface DetallesLoteProps {
  loteId?: string;
}

const DetallesLote: React.FC<DetallesLoteProps> = ({ loteId = "15A" }) => {
  // Datos dinámicos según el lote seleccionado
  const lotesData = {
    "15A": {
      nombre: "Lote 15 - Manzana C",
      descripcion: "Explore this exceptional opportunity to own a piece of prime real estate. This spacious lot offers a perfect canvas for building your dream home in a serene and developing neighborhood, combining natural beauty with convenient access to local amenities.",
      precio: "$50,000 USD",
      area: "500 m²",
      dimensiones: "20m x 25m",
      estadoLegal: "Escriturado",
      zonificacion: "Residencial",
      imagenPrincipal: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE2zi598p407twBcnfCKIdREgqCwoRSB-rgEYI8lEOLPdHluQRrcYLNqhy6dmNJirdt2ibXXiVl9wF8xhr1hYVJFP0QPqdQ64B9JIVJn0B_x7WNL58lI2fKe85lJSj1AsUvfsn_TyxeWYQKxFwWv6KYjuICuKjyDWROhYUxiyaMNwri8-9aQV5YxBCJ1VN63eTR_dpeWKGhQoRik2SNIdefdeR6-45bORvfPx1aS4EYvplgfev_CbUt6JZ4b86vVmYJNW7D8FCqQ",
      imagenSecundaria1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzHHdUzbS2PigE9l0rr58720iCAroMuRGriCszsCsYmfTuGyNKkhGjaEQP1Ref68zcyp6WVfVYsLm8KfbcFncEF9TAQ-0jxNqKenhQQkA3y4jLmWbZBAiyjcPaxsV729u4BhybCjMLJF-XXsmIO3e7bic4cKnwObIC6_2_3kUeIdzE-z294PhCEXHv2BvJC2bvPFO6cS07cy9cHc20HtY0A_y4q4uh6TFiKoHHrPbQ4ZmvozdCiF66pZHs0TFWurnstLSxzRK5Zw",
      imagenSecundaria2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFUMGyFp9LnPn4NIiyCCcyhvhc0aKoEBeSceT004VHO64TeXsgA5jIfQlFsYBK3AYu6FOzfR8z90Y8vsogMBD51uYsD-pH8dVORL89hJugKXbqTCzHZgW8ptLlgFej2SbgvkOz1cJUAVqiPIFyiHSzfN4PQxOxHuavFe-YMkNu2AoaCRC3q2ysa9ELuVS3Dw83biv-SidZqdJTXrjQwbVAUPo_NTXTZyITkajJcTHWCwjkeQ2enJL9j00Imf2Markx74fOtItAYg",
      caracteristicaEspecial: "Frente a la laguna",
      servicios: {
        agua: true,
        electricidad: true,
        gas: false,
        internet: true
      },
      mapa: "https://lh3.googleusercontent.com/aida-public/AB6AXuApO8WMOz-aoZeh8UYucLOv661NcRAp_jN3lBjZVhNv3yHLRgPmIeZyVhhKdlT1pWhUCE_8--AFWE1G7ZVXcq343keeY0YeWL3VCyVRN5BSv5IWMwttBS_GWvomrYbOslqcJBCgOQ585HJEndL5w6XloPP-Eqq-mu3nFSCr1tlIJAKH4Ib-aiTQR3vzT1EJnULIQHky8TYeh1MivN92WMStaHyVS3wQlrLL42DKvBbcl2P7oNds7YRycZ5jRSmzh045QZCK6IXbsQ"
    },
    "22B": {
      nombre: "Lote 22 - Manzana D",
      descripcion: "Discover this beautiful lot nestled in a peaceful area with stunning forest views. This property offers the perfect balance of tranquility and accessibility, making it ideal for those seeking a connection with nature while remaining close to urban conveniences.",
      precio: "$72,000 USD",
      area: "750 m²",
      dimensiones: "25m x 30m",
      estadoLegal: "Escriturado",
      zonificacion: "Residencial",
      imagenPrincipal: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3UwK_2Z8xMXS5GhWGIybkDgzQXsJNJhtX2M_9OFae8aX7WVKCg-CC2rTvBgXHvXgcatyQ89fSH41fc2HeOFnMo4GMeelNyC-1oFJu9uZHAvVgGLz3HBKm6D3S01V2PPkW3P7SPULK4oYWIAlWNzky8VAWyH9Rtf0xgYvSafA8nRkvAt4SJsCKJB1tg58BB2MdTghjGODpbEUePS8_9Tl65seWecJltsXjQzI8DTPGClysn9cZV0vDLiiu9sYsqM0Y3zxV2HF1zw",
      imagenSecundaria1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzHHdUzbS2PigE9l0rr58720iCAroMuRGriCszsCsYmfTuGyNKkhGjaEQP1Ref68zcyp6WVfVYsLm8KfbcFncEF9TAQ-0jxNqKenhQQkA3y4jLmWbZBAiyjcPaxsV729u4BhybCjMLJF-XXsmIO3e7bic4cKnwObIC6_2_3kUeIdzE-z294PhCEXHv2BvJC2bvPFO6cS07cy9cHc20HtY0A_y4q4uh6TFiKoHHrPbQ4ZmvozdCiF66pZHs0TFWurnstLSxzRK5Zw",
      imagenSecundaria2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFUMGyFp9LnPn4NIiyCCcyhvhc0aKoEBeSceT004VHO64TeXsgA5jIfQlFsYBK3AYu6FOzfR8z90Y8vsogMBD51uYsD-pH8dVORL89hJugKXbqTCzHZgW8ptLlgFej2SbgvkOz1cJUAVqiPIFyiHSzfN4PQxOxHuavFe-YMkNu2AoaCRC3q2ysa9ELuVS3Dw83biv-SidZqdJTXrjQwbVAUPo_NTXTZyITkajJcTHWCwjkeQ2enJL9j00Imf2Markx74fOtItAYg",
      caracteristicaEspecial: "Vista al bosque",
      servicios: {
        agua: true,
        electricidad: true,
        gas: true,
        internet: true
      },
      mapa: "https://lh3.googleusercontent.com/aida-public/AB6AXuApO8WMOz-aoZeh8UYucLOv661NcRAp_jN3lBjZVhNv3yHLRgPmIeZyVhhKdlT1pWhUCE_8--AFWE1G7ZVXcq343keeY0YeWL3VCyVRN5BSv5IWMwttBS_GWvomrYbOslqcJBCgOQ585HJEndL5w6XloPP-Eqq-mu3nFSCr1tlIJAKH4Ib-aiTQR3vzT1EJnULIQHky8TYeh1MivN92WMStaHyVS3wQlrLL42DKvBbcl2P7oNds7YRycZ5jRSmzh045QZCK6IXbsQ"
    },
    "08C": {
      nombre: "Lote 08 - Manzana A",
      descripcion: "This conveniently located lot offers excellent accessibility and comes with all essential services already installed. Perfect for those looking to build immediately without the wait for utility connections.",
      precio: "$45,000 USD",
      area: "480 m²",
      dimensiones: "20m x 24m",
      estadoLegal: "En proceso",
      zonificacion: "Residencial",
      imagenPrincipal: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxWNlvO__Ao4Lqgrgx-8WBdrSkglRZ38WjJwEI2fbmOjDDpzyE8ylfMdgAkkAFOrJ-VHgPIkvxOLmlHFwWrqKAxvjOxGM3dqku1BwE17afToN4ajBZHbsL8ovbJcEAMh_WutepOzOcXQJ7XmZVc5i2k0LSq1VQOoB1ehHeknT-yoQTSgE57oaAiI4hwVoLIqSQ5MWZfwXuh_sPK8U1TomeK6f1fOA1NsYlpbIxTbQ52UDlIsiFBYqKPI4QFm9yB-wZLKPBetmVQg",
      imagenSecundaria1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzHHdUzbS2PigE9l0rr58720iCAroMuRGriCszsCsYmfTuGyNKkhGjaEQP1Ref68zcyp6WVfVYsLm8KfbcFncEF9TAQ-0jxNqKenhQQkA3y4jLmWbZBAiyjcPaxsV729u4BhybCjMLJF-XXsmIO3e7bic4cKnwObIC6_2_3kUeIdzE-z294PhCEXHv2BvJC2bvPFO6cS07cy9cHc20HtY0A_y4q4uh6TFiKoHHrPbQ4ZmvozdCiF66pZHs0TFWurnstLSxzRK5Zw",
      imagenSecundaria2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFUMGyFp9LnPn4NIiyCCcyhvhc0aKoEBeSceT004VHO64TeXsgA5jIfQlFsYBK3AYu6FOzfR8z90Y8vsogMBD51uYsD-pH8dVORL89hJugKXbqTCzHZgW8ptLlgFej2SbgvkOz1cJUAVqiPIFyiHSzfN4PQxOxHuavFe-YMkNu2AoaCRC3q2ysa9ELuVS3Dw83biv-SidZqdJTXrjQwbVAUPo_NTXTZyITkajJcTHWCwjkeQ2enJL9j00Imf2Markx74fOtItAYg",
      caracteristicaEspecial: "Servicios incluidos",
      servicios: {
        agua: true,
        electricidad: true,
        gas: true,
        internet: true
      },
      mapa: "https://lh3.googleusercontent.com/aida-public/AB6AXuApO8WMOz-aoZeh8UYucLOv661NcRAp_jN3lBjZVhNv3yHLRgPmIeZyVhhKdlT1pWhUCE_8--AFWE1G7ZVXcq343keeY0YeWL3VCyVRN5BSv5IWMwttBS_GWvomrYbOslqcJBCgOQ585HJEndL5w6XloPP-Eqq-mu3nFSCr1tlIJAKH4Ib-aiTQR3vzT1EJnULIQHky8TYeh1MivN92WMStaHyVS3wQlrLL42DKvBbcl2P7oNds7YRycZ5jRSmzh045QZCK6IXbsQ"
    }
  };

  // Obtener datos del lote seleccionado o usar valores por defecto
  const lote = lotesData[loteId as keyof typeof lotesData] || lotesData["15A"];

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col" style={{backgroundColor: '#f8f6f6'}}>
        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 mb-6">
                <a
                  className="text-gray-500 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
                  onClick={() => window.history.back()}
                >
                  Inicio
                </a>
                <span className="text-gray-500 text-sm font-medium leading-normal">/</span>
                <a
                  className="text-gray-500 text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer"
                  onClick={() => window.history.back()}
                >
                  Lotes
                </a>
                <span className="text-gray-500 text-sm font-medium leading-normal">/</span>
                <span className="text-[#1a0f0f] text-sm font-medium leading-normal">Lote #{loteId}</span>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="md:col-span-2">
                    <div
                      className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#fbf9f9] rounded-xl min-h-96"
                      data-alt="Aerial view of the large, grassy land lot with some trees."
                      style={{backgroundImage: `url("${lote.imagenPrincipal}")`}}
                    >
                    </div>
                  </div>
                  <div
                    className="h-48 bg-cover bg-center rounded-xl"
                    data-alt="Close-up view of the terrain and vegetation on the lot."
                    style={{backgroundImage: `url("${lote.imagenSecundaria1}")`}}
                  ></div>
                  <div
                    className="h-48 bg-cover bg-center rounded-xl"
                    data-alt="View from the lot looking out towards the horizon."
                    style={{backgroundImage: `url("${lote.imagenSecundaria2}")`}}
                  ></div>
                </div>
                <div className="flex justify-center gap-2 p-4">
                  <div className="h-2 w-8 rounded-full bg-primary"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>
              </div>

              {/* Content: Details & CTA */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Column: Lot Information */}
                <div className="w-full lg:w-2/3">
                  <p className="text-[#1a0f0f] text-4xl font-black leading-tight tracking-[-0.033em] mb-4">{lote.nombre}</p>
                  <p className="text-gray-600 text-base font-normal leading-relaxed mb-8">{lote.descripcion}</p>

                  <div className="border-t border-gray-200/80 pt-6">
                    <h3 className="text-xl font-bold text-[#005A87] mb-4">Especificaciones</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#005A87]">square_foot</span>
                        <span><strong>Área:</strong> {lote.area}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#005A87]">straighten</span>
                        <span><strong>Dimensiones:</strong> {lote.dimensiones}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#005A87]">gavel</span>
                        <span><strong>Estado Legal:</strong> {lote.estadoLegal}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#005A87]">detection_and_zone</span>
                        <span><strong>Zonificación:</strong> {lote.zonificacion}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200/80 pt-6 mt-6">
                    <h3 className="text-xl font-bold text-[#005A87] mb-4">Servicios Disponibles</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700">
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined ${lote.servicios.agua ? 'text-green-600' : 'text-gray-400'}`}>water_drop</span>
                        <span>Agua Corriente</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined ${lote.servicios.electricidad ? 'text-green-600' : 'text-gray-400'}`}>bolt</span>
                        <span>Electricidad</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined ${lote.servicios.gas ? 'text-green-600' : 'text-gray-400'}`}>local_fire_department</span>
                        <span>Gas {lote.servicios.gas ? '' : '(Proyecto)'}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`material-symbols-outlined ${lote.servicios.internet ? 'text-green-600' : 'text-gray-400'}`}>wifi</span>
                        <span>Internet Fibra Óptica</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: CTA Card */}
                <div className="w-full lg:w-1/3">
                  <div className="sticky top-24">
                    <div className="border rounded-xl p-6 bg-white shadow-sm">
                      <p className="text-sm text-gray-500">Precio de lista</p>
                      <p className="text-4xl font-extrabold text-[#1a0f0f] my-1">{lote.precio}</p>
                      <p className="text-base text-gray-600 mb-6">Financiación disponible.</p>
                      <button className="w-full flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#CF2E2E] text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors">
                        <span className="truncate">Consultar por este Lote</span>
                      </button>
                      <button className="w-full mt-3 flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#FF6900]/10 text-[#FF6900] text-base font-bold leading-normal tracking-wide hover:bg-[#FF6900]/20 transition-colors">
                        <span className="truncate">Agendar Visita</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map Section */}
              <div className="mt-12 pt-8 border-t border-gray-200/80">
                <h2 className="text-2xl font-bold text-center text-[#005A87] mb-6">Ubicación Exacta</h2>
                <div className="aspect-video w-full bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    alt="Map showing the location of the property in a rural area."
                    className="w-full h-full object-cover"
                    src={lote.mapa}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DetallesLote;