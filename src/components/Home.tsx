import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden" style={{backgroundColor: '#F8F9FA'}}>
        <main className="flex h-full grow flex-col">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-5 sm:px-6 lg:px-8">
            {/* HeroSection */}
            <div className="@container">
              <div className="@[480px]:p-0">
                <div
                  className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center"
                  data-alt="Expansive, beautiful green landscape at sunset with rolling hills."
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 90, 135, 0.3) 0%, rgba(0, 90, 135, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhGlOPw2Me_rVY6GBQC0qearbdTl1USiQU-TTxiauy4hJ85jaeD7QTQoPr5cuvC1_NtFGH5AB4WmqqYHQN3FL9JRwXCXryV32wi7iA3OUhQkyICgU8jxdq_ODvPbjOduOrBdscbCFi9jhE8HIL9wxiWWDq5Pbbg4WkOb9_zk-QMDSemUKUXCQkvEBomLp0B51667fg40et9zlbBi_mHFZ60E5knoY0MGTMHKZckKZ_7zhP22GoA3ALtIYyeGn-3XDS--dzFkiVaA")'
                  }}
                >
                  <div className="flex max-w-2xl flex-col gap-4">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      El lugar de tus sueños te espera
                    </h1>
                    <h2 className="text-white/90 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
                      Descubre un entorno único en Argentina para construir la vida que siempre quisiste, rodeado de naturaleza y tranquilidad.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                    <span className="truncate">Ver Lotes Disponibles</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Listings Section */}
            <section className="w-full py-10 sm:py-16">
              <h2 className="text-text-header text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5 text-center">Lotes Destacados</h2>
              <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex transform flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    data-alt="Photo of a grassy lot with a few trees under a clear blue sky."
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFL0C9kNxKvswzbv5rJ0xkNn7QZBQoNxhJgA_a0m5l14WAKVoqgzePUdFD0qL5YqVFN1v9MXXF6jI1TPSwlSVsCoHWEeH1RukXjzlsmYwgKybkpme-yvWDxAeKV_I2nGfrqujAADqVCuHDuXclOEmPJuevw5gN27rarsbfRZq5IK8WopS-ItVOkMEdUshmRO83EZV0Uf0HsaNpQV8z4QCazROq8NRZPRgDB7PjFrdoYLOZr6Y-JnosFevWHIIKDSU30-mGLfWr1Q")'
                    }}
                  ></div>
                  <div className="flex flex-col gap-2 p-4">
                    <p className="text-text-header text-lg font-bold leading-normal">Lote Pampa 101</p>
                    <p className="text-text-header/70 text-sm font-normal leading-normal">500m² - Vistas panorámicas</p>
                    <p className="text-accent text-lg font-bold leading-normal">$25,000</p>
                  </div>
                </div>

                <div className="flex transform flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    data-alt="Photo of a lot near a small mountain range, with clear ground."
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2uAs_zTeaQ_za0vxNmDVl6n2hZnayJq6biYeQ_dsTk1o6Xh_Fzz1mz28xhqa15cZDtElBXzRhWK7BBDT13UcXuhAmkBZMeCwsmejKCKYPvjg8XQXMa_wXJvLTC-WozEA3JqcaPhLfJtD04bFq-mNOmHhySTBomOFplA3G923zrawBtFQ4yjlg1zHoDPIXjXpYMYpGFQtATk6g3KK8GMxf3q-hj471asxPkIqPx8uAwyLAWH86I8H8Nm-PIolSy-myOtAae-28UA")'
                    }}
                  ></div>
                  <div className="flex flex-col gap-2 p-4">
                    <p className="text-text-header text-lg font-bold leading-normal">Lote Serrano 204</p>
                    <p className="text-text-header/70 text-sm font-normal leading-normal">750m² - Cerca del arroyo</p>
                    <p className="text-accent text-lg font-bold leading-normal">$38,000</p>
                  </div>
                </div>

                <div className="flex transform flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div
                    className="h-48 w-full bg-cover bg-center"
                    data-alt="Photo of a lot nestled within a dense forest of tall trees."
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC723utx7Ij3LR4OCYlBRt4015XE2OJZlLJyIpRfn5f551zD5qmcRvWXwuo2tZqjDStd3ZAMLzVeCi9qR8wj9zuaUsz6351F-QkSWJCi6TmCRQ2-zgzKgBWdcV8bHp1k0ilUKwMoWZei55W52QUDhd182vBlCh84y-wrzFuGDj7kIPqB4O2Ytyo9Kb5dDy6LHu2ba7ldR5imWpkKa9-LiSraaZrn4phGaYa-rU_wJ3y4wfTNmEYUv9973SOsfATjDAaiBgU3EWDoQ")'
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
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 border-2 border-primary text-primary bg-transparent text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/10">
                  <span className="truncate">Ver Todos los Lotes</span>
                </button>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full bg-white rounded-xl py-10 sm:py-16">
              <h2 className="text-text-header text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5 text-center">Lo que dicen nuestros clientes</h2>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
                <div className="flex flex-col items-center gap-4 rounded-lg p-6 text-center" style={{backgroundColor: '#F8F9FA'}}>
                  <img
                    className="size-20 rounded-full object-cover"
                    data-alt="Portrait of a smiling man in his 40s."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWiluv9VNyJvtAw_icrDAh7w78xijmTzz-IWJuA9KqIrY4KkF5ODQPd5E3YCbTWk7fpQ1EK7EHWMu7CC7LrwxiYH3Ie2k8ibMTF_6lP_234cEVYZOsd3AFit4evn4J8i1NXywLHo5Lm99wfUI5AK7VB8ZVmRj1nEPaydFuKRJD_iSKphPL0qJ110zmPzIep0aY-k1c1JmX5BSB9nvpbZB3fvSOu2bGMigPhr0cDNYpXy297YQ2tQKQkh8iou2Kb0frHtjXLXl65A"
                  />
                  <blockquote className="text-text-header/80 italic">"El proceso fue transparente y el equipo de Estacion Paris nos ayudó en cada paso. Encontramos el lugar perfecto para nuestra familia. ¡Totalmente recomendados!"</blockquote>
                  <p className="text-text-header font-bold">- Carlos Gomez</p>
                </div>
                <div className="flex flex-col items-center gap-4 rounded-lg p-6 text-center" style={{backgroundColor: '#F8F9FA'}}>
                  <img
                    className="size-20 rounded-full object-cover"
                    data-alt="Portrait of a smiling woman in her 30s."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4YG_lKYCvaewbFcD9LZner9TAQYIxFkSJ0RrHpCBLAyiM78hsmjbmHr0UAZ-tvI2MNzB-7IDvUwG8KjEUBU9JJpZkgkOxPaO7PlGbkhkzkyzJo88ewq0OvDk__gOF8uNmInSP0NZju3jyD8_JdPc-n9HUMLa7AXXfS_EjOHYXiBPu8-nhZ9lqNCvpnOnaXnP-tv3K-5GcVK0nDH6SYfQMUfSygDFFP6xUfHk_uWswYN1JvFWS9C9Icr8aCtRpEfGUd8H8J_uxnA"
                  />
                  <blockquote className="text-text-header/80 italic">"Comprar nuestro lote fue la mejor decisión. La paz y la belleza del lugar son inigualables. Estamos ansiosos por empezar a construir nuestro hogar."</blockquote>
                  <p className="text-text-header font-bold">- Maria Fernandez</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;