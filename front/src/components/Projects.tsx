import gs from '../assets/images/gs.png'
import ci from '../assets/images/ci.png'
import ft from '../assets/images/ft.png'
import { useState } from 'react'
import ProjectWindow from './ProjectWindow'
import GSContent from './proyectWindows/GSContent'
import CIContent from './proyectWindows/CIContent'
import FTContent from './proyectWindows/FTContent'
import ProjectButton from './ProyectButton'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<
  'gosafe' | 'clinicainmaculado' | 'fituus' | null
>(null)

  return(
    <section className="mx-auto w-full px-6 pt-80">
      <h2 className="w-full text-center">
        <span className="font-script text-8xl">P</span>
        <span className="font-display text-5xl">rojects</span>
      </h2>

      <div className="mt-20 flex flex-col gap-32 w-5xl mx-auto">

              {/* PROJECT 1 */}
              <div className="flex w-full items-center justify-between">

                {/* Imagen */}
                <div className="flex w-1/2 justify-center">
                  <ProjectButton
                    image={gs}
                    alt="Go Safe"
                    onClick={() => setActiveProject('gosafe')}
                  />
                </div>

                {/* Texto */}
                <div className="w-1/2">
                  <h3 className="font-display text-5xl"> GO SAFE </h3>

                  <p className="font-body mt-2"> FRONTEND DEVELOPMENT, UX/UI DESIGN </p>
                </div>
              </div>


              {/* PROJECT 2 */}
              <div className="flex w-full items-center justify-between">
                <div className="order-2 w-1/2 flex justify-center">
                  <ProjectButton
                    image={ci}
                    alt="Clínica Inmaculado"
                    onClick={() => setActiveProject('clinicainmaculado')}
                  />
                </div>

                <div className="order-1 w-1/2 text-right">
                  <h3 className="font-display text-5xl"> CLÍNICA INMACULADO </h3>

                  <p className="font-body mt-2">  FULL STACK DEVELOPMENT, UX/UI DESIGN </p>
                </div>
              </div>


              {/* PROJECT 3 */}
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex justify-center">
                  <ProjectButton
                    image={ft}
                    alt="Clínica Inmaculado"
                    onClick={() => setActiveProject('fituus')}
                  />
                </div>

                <div className="w-1/2">
                  <h3 className="font-display text-5xl"> FITTUUS </h3>

                  <p className="font-body mt-2">  FULL STACK DEVELOPMENT, UX/UI DESIGN  </p>
                </div>
              </div>

      </div>

      {activeProject === 'gosafe' && (
        <ProjectWindow onClose={() => setActiveProject(null)}>   
          <GSContent/>
        </ProjectWindow>
      )}

      {activeProject === 'clinicainmaculado' && (
        <ProjectWindow onClose={() => setActiveProject(null)}>
          <CIContent/>
        </ProjectWindow>
      )}

      {activeProject === 'fituus' && (
        <ProjectWindow onClose={() => setActiveProject(null)}>
          <FTContent/> 
        </ProjectWindow>
      )}
    </section>
  )
}