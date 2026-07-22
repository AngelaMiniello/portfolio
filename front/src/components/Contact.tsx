import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'

function Contact() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="font-mono text-sm uppercase tracking-[0.3em] opacity-50">
        // contact
      </p>

      <h2 className="relative mt-10 text-center font-display text-xl md:text-4xl text-mauve-100 flex flex-col">
        Have a project in mind? 
        <span className="font-script ml-3 text-5xl mt-8">
          Let's create...
        </span>
      </h2>

      <div className="mt-16 flex gap-6">
        <a
          href="https://www.linkedin.com/in/angela-miniello/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/30 text-white"
        >
            <span className="absolute inset-0 scale-0 rounded-full bg-white transition-transform duration-500 ease-out group-hover:scale-100" />
          <img
            src={linkedin}
            alt="LinkedIn"
            className="relative z-10 h-8 w-8 invert transition-all duration-500 group-hover:invert-0 group-hover:rotate-[-20deg]"
          />
        </a>

        <a
  href="https://github.com/AngelaMiniello"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/30 text-white"
>
  {/* Fondo animado */}
  <span className="absolute inset-0 scale-0 rounded-full bg-white transition-transform duration-500 ease-out group-hover:scale-100" />

  {/* Icono */}
  <img
    src={github}
    alt="GitHub"
    className="relative z-10 h-8 w-8 invert transition-all duration-500 group-hover:invert-0 group-hover:rotate-[-20deg]"
  />
</a>
      </div>
    </section>
  )
}

export default Contact