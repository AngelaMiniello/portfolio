import { useRef } from 'react'
import gsap from 'gsap'

interface ProjectButtonProps {
  image: string
  alt: string
  onClick: () => void
}

function ProjectButton({
  image,
  alt,
  onClick,
}: ProjectButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleMouseEnter = () => {
    if (!imageRef.current) return

    gsap.to(imageRef.current, {
      scale: 0.8,
      rotate: 4,
      y: -10,
      duration: 0.5,
      ease: 'power3.out',
    })
  }

  const handleMouseLeave = () => {
    if (!imageRef.current) return

    gsap.to(imageRef.current, {
      scale: 1,
      rotate: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    })
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative block cursor-pointer"
    >
      <img
        ref={imageRef}
        src={image}
        alt={alt}
        className="h-64 w-64 rounded-full object-cover opacity-80"
      />

      <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/40 text-sm uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        View project
      </span>
    </button>
  )
}

export default ProjectButton