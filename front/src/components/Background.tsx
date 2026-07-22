import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import skyBg from '../assets/images/sky-bg.jpg'

gsap.registerPlugin(ScrollTrigger)

function Background() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const image = imageRef.current
    const overlay = overlayRef.current

    if (!image || !overlay) return

    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
        .to(
          image,
          {
            opacity: 0.15,
            filter: 'blur(8px)',
            ease: 'none',
          },
          0,
        )
        .to(
          overlay,
          {
            opacity: 1,
            ease: 'none',
          },
          0,
        )
    })

    return () => context.revert()
  }, [])

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 z-0"
    >
      <img
        ref={imageRef}
        src={skyBg}
        alt=""
        className="h-full w-full object-cover"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0"
      />
    </div>
  )
}

export default Background