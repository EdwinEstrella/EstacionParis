import React from "react"
import { TestimonialCard, cn } from "./TestimonialCard"
import type { TestimonialAuthor } from "./TestimonialCard"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-gray-50 text-gray-900",
      "py-12 sm:py-16 md:py-20 px-4",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-12">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight text-gray-900">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
          <div className="group flex overflow-hidden [--gap:1.5rem] [gap:var(--gap)]">
            <div
              className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
              style={{
                '--duration': '45s',
                '--gap': '1.5rem'
              } as React.CSSProperties}
            >
              {/* Primer conjunto de testimonios */}
              {testimonials.map((testimonial, i) => (
                <div key={`first-${i}`} className="[gap:var(--gap)]" style={{marginRight: 'var(--gap)'}}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}

              {/* Segundo conjunto de testimonios duplicados para efecto infinito */}
              {testimonials.map((testimonial, i) => (
                <div key={`second-${i}`} className="[gap:var(--gap)]" style={{marginRight: 'var(--gap)'}}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradientes en los bordes para efecto de desvanecimiento */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

// Demo data
export const testimonials = [
  {
    author: {
      name: "Carlos Gómez",
      handle: "cliente.estacionparis",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "El proceso fue transparente y el equipo de Estacion Paris nos ayudó en cada paso. Encontramos el lugar perfecto para nuestra familia. ¡Totalmente recomendados!",
    href: "https://twitter.com"
  },
  {
    author: {
      name: "María Fernández",
      handle: "propietaria.lote",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Comprar nuestro lote fue la mejor decisión. La paz y la belleza del lugar son inigualables. Estamos ansiosos por empezar a construir nuestro hogar.",
    href: "https://twitter.com"
  },
  {
    author: {
      name: "Roberto Silva",
      handle: "inversor.inmobiliario",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "La calidad del servicio y la ubicación de los lotes es excelente. La documentación clara y el apoyo constante hicieron toda la diferencia.",
    href: "https://twitter.com"
  },
  {
    author: {
      name: "Ana Martinez",
      handle: "cliente.satisfecha",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Increíble experiencia con el equipo. Desde la primera visita hasta la firma, todo fue profesional y eficiente. Muy recomendados.",
    href: "https://twitter.com"
  },
  {
    author: {
      name: "Luis Rodriguez",
      handle: "desarrollador.prop",
      avatar: "https://images.unsplash.com/photo-1500648397778-c596db574c6a?w=150&h=150&fit=crop&crop=face"
    },
    text: "Los terrenos tienen excelente ubicación y el equipo te asesora en todo el proceso. La inversión vale totalmente la pena.",
    href: "https://twitter.com"
  },
  {
    author: {
      name: "Sofia Torres",
      handle: "propietaria.feliz",
      avatar: "https://images.unsplash.com/photo-1489424761084-5d65b916e0e3?w=150&h=150&fit=crop&crop=face"
    },
    text: "El sueño de tener nuestro propio terreno se hizo realidad gracias a Estacion Paris. Atención excepcional y terrenos de primera calidad.",
    href: "https://twitter.com"
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Confían en nosotros nuestros clientes"
      description="Únete a las familias que ya han encontrado su lugar ideal en Estación Paris"
      testimonials={testimonials}
    />
  )
}