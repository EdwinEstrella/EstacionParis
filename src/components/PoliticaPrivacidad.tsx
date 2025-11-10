import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Política de Privacidad
          </h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Información que Recopilamos
              </h2>
              <p className="mb-4">
                En Estación Paris, nos comprometemos a proteger su privacidad. Recopilamos información
                personal cuando usted nos la proporciona voluntariamente al:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contactarnos a través de nuestros formularios</li>
                <li>Suscribirse a nuestro boletín informativo</li>
                <li>Solicitar información sobre nuestros lotes</li>
                <li>Visitar nuestras oficinas o modelos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Uso de la Información
              </h2>
              <p className="mb-4">
                Utilizamos su información personal para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar información sobre nuestros productos y servicios</li>
                <li>Procesar sus solicitudes y consultas</li>
                <li>Mejorar nuestros servicios y su experiencia</li>
                <li>Enviarle comunicaciones promocionales con su consentimiento</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Compartir Información
              </h2>
              <p>
                No vendemos, alquilamos ni compartimos su información personal con terceros
                no autorizados, excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Cuando sea necesario para procesar transacciones</li>
                <li>Cuando sea requerido por ley</li>
                <li>Con empresas que nos ayudan a operar nuestro negocio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Seguridad de los Datos
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger su
                información contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Cookies y Tecnologías Similares
              </h2>
              <p className="mb-4">
                Utilizamos cookies para mejorar su experiencia en nuestro sitio web:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies esenciales para el funcionamiento del sitio</li>
                <li>Cookies de rendimiento para analizar el tráfico</li>
                <li>Cookies de funcionalidad para recordar sus preferencias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Sus Derechos
              </h2>
              <p>
                Usted tiene derecho a acceder, corregir, eliminar o limitar el uso de su
                información personal. Para ejercer estos derechos, contáctenos a través de
                nuestros canales oficiales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Cambios a esta Política
              </h2>
              <p>
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier
                momento. Cualquier cambio será efectivo inmediatamente después de su publicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Contacto
              </h2>
              <p>
                Si tiene preguntas sobre esta política de privacidad, contáctenos en:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <p><strong>Email:</strong> privacidad@estacionparis.com</p>
                <p><strong>Teléfono:</strong> +54 9 11 1234-5678</p>
                <p><strong>Dirección:</strong> Estación Paris, Argentina</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-AR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;