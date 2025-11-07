import React from 'react';

const Nosotros: React.FC = () => {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden" style={{backgroundColor: '#F8F9FA'}}>
        <main className="flex-grow">
          <div className="@container py-10">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
                data-alt="A picturesque landscape from an Estacion Paris property with rolling green hills under a clear blue sky"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkRrVnMMxfhUe9ZPVb9TeQWXNEG7JfGj6d7kq12C4PRZIkMGUO7cM2d_oATdbzRGtJE3IaKdB_hyf7-mRG1p7BIcKfID4yvfdWItvfvlwPHSamea_N5R9vmEjFre5BpiqY0ONx07WJl7Ug-ia8EJcxlakwCiRdGRKjX-lCy9mCZdG-avmZZs_VsP_igNQDfHd8cLMhmo-_kOrfR62O6NtGlmRshv-AgAbcWeLDjD571itT0u9Y_Pfu04gcQTpQjikn8D7L3ZYkAg")'
                }}
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Construyendo Sueños, Creando Futuros
                  </h1>
                  <p className="text-white text-base font-normal leading-normal @[480px]:text-lg max-w-2xl mx-auto">
                    Descubre nuestra misión de ayudar a las familias a encontrar el lugar perfecto en Argentina para construir su futuro. Todo comienza con el terreno adecuado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="py-12 px-4">
            <h2 className="text-[#005A87] text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em] pb-4">Nuestra Historia</h2>
            <p className="text-[#005A87] text-base font-normal leading-relaxed">
              Una narrativa detallada sobre la visión de los fundadores para Estacion Paris, explicando por qué se creó la empresa y su compromiso de ayudar a las familias a encontrar su terreno ideal en Argentina. Cubre el viaje desde una simple idea hasta convertirse en un nombre de confianza en el desarrollo inmobiliario. Creemos que poseer un terreno es más que una inversión; es el fundamento para una vida llena de recuerdos, crecimiento y comunidad.
            </p>
          </section>

          <section className="py-12 px-4 bg-white dark:bg-gray-900 rounded-xl">
            <h2 className="text-[#005A87] text-center text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em] pb-8">Nuestra Misión y Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#FF6900]/20 mx-auto">
                  <span className="material-symbols-outlined text-[#FF6900] text-3xl">emoji_objects</span>
                </div>
                <h3 className="text-[#005A87] text-lg font-bold mb-2">Calidad</h3>
                <p className="text-[#005A87] text-sm leading-relaxed">Estamos comprometidos con ofrecer lotes de primer nivel que cumplen con los más altos estándares de ubicación, accesibilidad y potencial.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#FF6900]/20 mx-auto">
                  <span className="material-symbols-outlined text-[#FF6900] text-3xl">groups</span>
                </div>
                <h3 className="text-[#005A87] text-lg font-bold mb-2">Comunidad</h3>
                <p className="text-[#005A87] text-sm leading-relaxed">Nuestros desarrollos están diseñados para fomentar comunidades fuertes y vibrantes donde las familias puedan prosperar por generaciones.</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-[#FF6900]/20 mx-auto">
                  <span className="material-symbols-outlined text-[#FF6900] text-3xl">handshake</span>
                </div>
                <h3 className="text-[#005A87] text-lg font-bold mb-2">Satisfacción del Cliente</h3>
                <p className="text-[#005A87] text-sm leading-relaxed">Tu viaje es nuestra prioridad. Proporcionamos guía transparente y de apoyo desde el primer contacto hasta la propiedad final.</p>
              </div>
            </div>
          </section>

          <section className="py-12 px-4">
            <h2 className="text-[#005A87] text-center text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em] pb-8">Conoce al Equipo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full object-cover mb-4"
                  data-alt="Professional headshot of founder John Doe"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWFful3oEXfrAjWgIFF0f82Ca0RpiR-jH3Narlvr-Fq_FrgOo7A6XPk8FjZAOejp70o6h98BQknhN42lu1xAVyLumUP7r6U40QBgxnuqrRgETENXBGTEK2xV7lrxAx2LZ6B_q2jyyrJsXb2pPY8QzeOQyfKGEqVjKi4nFhrXOZKSXszI2ozXHB2nul2aQmKUQRhcyYSWWwzdGeL7Rw14X_E4ZDHerGxrY4Cb6wel4AJRSpi_1bkj-e1FY-U1RiI5Powc-96T_-tA"
                />
                <h3 className="text-[#005A87] text-lg font-bold">Juan Pérez</h3>
                <p className="text-[#FF6900] text-sm font-medium">Co-Fundador & CEO</p>
                <p className="text-[#005A87] text-sm mt-2 leading-relaxed">Con más de 20 años en bienes raíces, la visión de Juan es la fuerza impulsora detrás de nuestro éxito.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full object-cover mb-4"
                  data-alt="Professional headshot of founder Jane Smith"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3BntcFBGnNFaeEeWe-WqPxJ-u_oJckIMFc0f1L1-6p2WiFMDSyki911NXV47ZSuB3s_ajAHPubnzUkstAg51Sap0qyu-jm54gfAsY8AUNkpAAu5JR-35tvNqmApZYTKY6HaqLgPRbcpzjqrmXmVDFxd1ZaWBm5kfAA1YMu7NyCD1Ohj5KI18csmT2cprRIVUG5BXmWKtdFgDsh-5dA1wgY9JwevRi3Tfr53WaZzyGna05cPqw0hazB3bpv7cfSJO-kFbr4Ba_w"
                />
                <h3 className="text-[#005A87] text-lg font-bold">María García</h3>
                <p className="text-[#FF6900] text-sm font-medium">Co-Fundadora & COO</p>
                <p className="text-[#005A87] text-sm mt-2 leading-relaxed">La experiencia operativa de María asegura que cada proyecto se ejecute sin problemas y éticamente.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full object-cover mb-4"
                  data-alt="Professional headshot of team member Carlos Rivera"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWoeEuzUfhSTts5OSbw5OfyolkFmuRS7Ly_8yiHD6uu1mJWL8Wqlf7V1aLRzfx5pmDHnlrpeENALX3FR6DlUtBZnu8M-98KtOHl2L5dna_gRZL2qEaxVkKWq7zo-N9cvDNSajmdWW-04GQFtDHCnqEvju9NE3NnwCxxGCiW-YwqGatfo9NoHv6f58l0zu-9yJu4JuOUJF1y4nZrMz8KltaIcklyPB49OkbbwT-TLN2WVEG8v80kLMPvDIp6Nm97hWfR7enDHuDJg"
                />
                <h3 className="text-[#005A87] text-lg font-bold">Carlos Rodríguez</h3>
                <p className="text-[#FF6900] text-sm font-medium">Jefe de Ventas</p>
                <p className="text-[#005A87] text-sm mt-2 leading-relaxed">Carlos está dedicado a ayudar a las familias a navegar el proceso de compra con facilidad y confianza.</p>
              </div>
            </div>
          </section>

          <section className="py-12 px-4">
            <h2 className="text-[#005A87] text-center text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em] pb-12">Nuestro Viaje</h2>
            <div className="relative pl-8 border-l-2 border-[#FF6900]">
              {/* Timeline Item 1 */}
              <div className="mb-10 ml-4">
                <div className="absolute w-4 h-4 bg-[#005A87] rounded-full mt-1.5 -left-[9px] border-2 border-gray-100"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#005A87]">2015</time>
                <h3 className="text-lg font-semibold text-[#005A87]">Fundación de la Empresa</h3>
                <p className="text-base font-normal text-[#005A87]">Estacion Paris fue fundada con el sueño de hacer accesible y gratificante la propiedad de terrenos para familias en Argentina.</p>
              </div>
              {/* Timeline Item 2 */}
              <div className="mb-10 ml-4">
                <div className="absolute w-4 h-4 bg-[#005A87] rounded-full mt-1.5 -left-[9px] border-2 border-gray-100"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#005A87]">2018</time>
                <h3 className="text-lg font-semibold text-[#005A87]">Lanzamiento del Primer Gran Proyecto</h3>
                <p className="text-base font-normal text-[#005A87]">Lanzamos exitosamente nuestro primer gran desarrollo, vendiendo más de 100 lotes en el primer año.</p>
              </div>
              {/* Timeline Item 3 */}
              <div className="mb-10 ml-4">
                <div className="absolute w-4 h-4 bg-[#005A87] rounded-full mt-1.5 -left-[9px] border-2 border-gray-100"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#005A87]">2022</time>
                <h3 className="text-lg font-semibold text-[#005A87]">Premio a la Excelencia Comunitaria</h3>
                <p className="text-base font-normal text-[#005A87]">Reconocidos por nuestro compromiso con prácticas de desarrollo sostenibles y enfocadas en la comunidad.</p>
              </div>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 text-center">
              <p className="text-xl md:text-2xl font-medium text-[#005A87] leading-relaxed">"No solo vendemos terrenos; proporcionamos el lienzo donde puedes pintar tu futuro. Ver a las familias construir sus hogares y vidas en nuestras propiedades es nuestro mayor logro."</p>
              <p className="mt-4 font-bold text-[#FF6900]">- Juan Pérez, Co-Fundador</p>
            </div>
          </section>

          <section className="py-12 px-4">
            <div className="bg-[#005A87] rounded-xl p-8 md:p-12 text-center flex flex-col items-center gap-6">
              <h2 className="text-white text-3xl font-bold">Encuentra tu Lugar Perfecto</h2>
              <p className="text-white/80 max-w-2xl">¿Listo para comenzar tu viaje? Explora nuestros lotes disponibles o contacta a nuestro equipo para una consulta personalizada. Tu futuro hogar comienza aquí.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#FF6900] text-white text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Ver Nuestros Lotes</span>
                </button>
                <button className="flex min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white text-[#005A87] text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Contáctanos</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Nosotros;