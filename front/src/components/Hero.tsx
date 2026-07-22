function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">

      {/* Contenido */}
      <div className="absolute z-10 flex flex-wrap items-end min-h-screen w-full pr-8 pl-8s gap-4">
        <div className="flex flex-col uppercase font-display text-9xl font-light">
          <span> Full stack </span>  
          <span className="ml-40"> developer </span>
        </div>
        <div className="font-display text-5xl font-medium flex-wrap justify-ends p-2.5">
          <p> Frontend focus</p>
        </div>
      </div>
      
    </section>
  )
}

export default Hero