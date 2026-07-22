import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'FRONTEND',
    description:
       'From the first idea to the final interaction, I bring digital projects to life from concept to code.',
    skills: ['React', 'React Native', 'TypeScript', 'Next.js', 'GSAP' ],
  },
  {
    number: '02',
    title: 'FULLSTACK',
    description:
      'I use movement to create atmosphere, interaction and memorable digital experiences.',
    skills: [ 'Node.js', 'Express', 'REST APIs', 'SQL', 'PostgreSQL', 'Databases'],
  },
  {
    number: '03',
    title: 'UI / UX',
    description:
      'I turn ideas into interfaces that feel clear, intentional and alive.',
    skills: ['Figma', 'Wireframes', 'Prototyping', 'Design Systems'],
  },
]

function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.what-item', {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  const handleMouseEnter = (index: number) => {
    const item = itemsRef.current[index]

    if (!item) return

    gsap.to(item, {
      x: 20,
      duration: 0.5,
      ease: 'power3.out',
    })
  }

  const handleMouseLeave = (index: number) => {
    const item = itemsRef.current[index]

    if (!item) return

    gsap.to(item, {
      x: 0,
      duration: 0.5,
      ease: 'power3.out',
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-40 md:px-10 mx-auto"
    >
      {/* Heading */}
      <div className="mb-32">
        <p className="font-mono text-sm uppercase tracking-[0.3em] opacity-50">
          * things I do *
        </p>

        <h2 className="mt-6 max-w-4xl font-display text-6xl leading-none md:text-8xl">
          An intersection of
          <span className="font-script ml-3">
            code & design
          </span>
        </h2>
      </div>

      {/* Services */}
      <div className="border-t border-white/20">
        {services.map((service, index) => (
          <div
            key={service.number}
            ref={(element) => {
              itemsRef.current[index] = element
            }}
            className="what-item group border-b border-white/20"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
              {/* Number */}
              <span className="font-mono text-sm opacity-50">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-5xl transition-all duration-500 group-hover:italic md:text-8xl">
                {service.title}
              </h3>

              {/* Description */}
              <div className="max-w-sm">
                <p className="font-body text-sm leading-relaxed opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs opacity-60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services