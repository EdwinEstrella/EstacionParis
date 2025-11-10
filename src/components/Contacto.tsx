import React from 'react';

const Contacto: React.FC = () => {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden" style={{backgroundColor: '#f8f6f6'}}>
        <main className="flex flex-1 justify-center py-10 sm:py-16 px-4 sm:px-6">
          <div className="flex flex-col w-full">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#1a0f0f] text-4xl font-black leading-tight tracking-[-0.033em]">Contacto</h1>
                <p className="text-[#915555] text-base font-normal leading-normal">Déjenos su consulta y le responderemos a la brevedad.</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-12 p-4">
              {/* Left Column: Form */}
              <div className="lg:col-span-3">
                <h2 className="text-[#005A87] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Formulario de Contacto</h2>
                <form className="space-y-6">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#005A87] text-base font-medium leading-normal pb-2">Nombre</p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1a0f0f] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e5d2d2] bg-[#f8f6f6] focus:border-primary h-14 placeholder:text-[#915555] p-[15px] text-base font-normal leading-normal"
                      placeholder="Ingrese su nombre completo"
                    />
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#005A87] text-base font-medium leading-normal pb-2">Email</p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1a0f0f] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e5d2d2] bg-[#f8f6f6] focus:border-primary h-14 placeholder:text-[#915555] p-[15px] text-base font-normal leading-normal"
                        placeholder="su-email@ejemplo.com"
                        type="email"
                      />
                    </label>
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#005A87] text-base font-medium leading-normal pb-2">Teléfono</p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1a0f0f] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e5d2d2] bg-[#f8f6f6] focus:border-primary h-14 placeholder:text-[#915555] p-[15px] text-base font-normal leading-normal"
                        placeholder="Su número de teléfono"
                        type="tel"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#005A87] text-base font-medium leading-normal pb-2">Mensaje</p>
                    <textarea
                      className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#1a0f0f] focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e5d2d2] bg-[#f8f6f6] focus:border-primary min-h-[160px] placeholder:text-[#915555] p-[15px] text-base font-normal leading-normal"
                      placeholder="Escriba aquí su consulta..."
                    ></textarea>
                  </label>

                  <button className="flex w-full sm:w-auto min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#CF2E2E] text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                    <span className="truncate">Enviar</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Contact Info & Map */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h3 className="text-[#005A87] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Otras Vías de Contacto</h3>
                  <div className="space-y-4">
                    <a className="flex items-center gap-4 group" href="tel:+5491123456789">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <span className="text-[#1a0f0f] text-base font-medium leading-normal group-hover:text-primary transition-colors">+54 9 11 2345-6789</span>
                    </a>
                    <a className="flex items-center gap-4 group" href="mailto:consultas@estacionparis.com.ar">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">email</span>
                      </div>
                      <span className="text-[#1a0f0f] text-base font-medium leading-normal group-hover:text-primary transition-colors">consultas@estacionparis.com.ar</span>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <span className="text-[#1a0f0f] text-base font-medium leading-normal">Av. Corrientes 1234, CABA, Argentina</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[#005A87] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Nuestra Ubicación</h3>
                  <div className="aspect-video w-full overflow-hidden rounded-xl border border-[#e5d2d2]">
                    <iframe
                      allowFullScreen={true}
                      data-location="Buenos Aires, Argentina"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168881269387!2d-58.38414532431792!3d-34.60373445750058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac669882209%3A0x8bb61a2973167389!2sObelisco!5e0!3m2!1ses-419!2sar!4v1709148384976!5m2!1ses-419!2sar"
                      style={{border:0}}
                      width="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contacto;