import Hero from "./components/Hero"
import Navbar from './components/Nav.tsx'
import Background from "./components/Background.tsx"
import About from "./components/About.tsx"
import Projects from "./components/Projects.tsx"
import Services from "./components/Services.tsx"
import Contact from "./components/Contact.tsx"

function App() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white">

      <Navbar/>
      <Background />

      <div className="relative z-10">
        <Hero/>
      </div>
      
      <section id="about" className="flex relative pb-5">
        <About/>
      </section>

      <section id="stack" className="flex relative pb-5">
        <Services/>
      </section>

      <section id="projects" className="flex relative pb-5">
        <Projects/>
      </section>

      <section id="contact">
         <Contact/>
      </section>
    </main>
  )
}

export default App