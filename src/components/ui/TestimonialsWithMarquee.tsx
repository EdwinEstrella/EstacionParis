import React from "react"
import { TestimonialCard } from "./TestimonialCard"
import { cn } from "../../utils/cn"
import type { TestimonialAuthor } from "./TestimonialCard"
import { testimonials } from "../../data/testimonials"

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

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Confían en nosotros nuestros clientes"
      description="Únete a las familias que ya han encontrado su lugar ideal en Estación Paris"
      testimonials={testimonials}
    />
  )
}