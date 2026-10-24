import clinicHome from '../../assets/images/clinica-inmaculado-home.png'
import clinicSpecialties from '../../assets/images/clinica-inmaculado-especialidades.png'

export default function CIContent() {
   return (
      <div className="h-full overflow-y-auto pb-8">
        <div className='flex flex-col gap-4'>
          <h2 className="font-display text-6xl text-white">  CLÍNICA INMACULADO </h2>

          <p className="mt-4 text-white/70"> FULLSTACK DEVELOPMENT, UX/UI DESIGN  </p>

          <a 
            href="https://pgestion-turnos.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white hover:text-gray-500 underline font-medium transition-colors"
          >
            Link to CLÍNICA INMACULADO
          </a>

          <p className="mt-4 text-white/70">
            Aplicación web para la gestión de turnos que permite a los usuarios agendar, visualizar y administrar citas de manera eficiente. Implementé interfaces intuitivas con React y lógica backend para el manejo de datos y persistencia.
          </p>
        </div>

          {/* contenido del proyecto */}
          <div className="mt-10 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
            <img
              src={clinicHome}
              alt="Clínica Inmaculado — página de inicio y servicios"
              loading="lazy"
              decoding="async"
              width={1900}
              height={3555}
              className="block h-auto w-full rounded-xl"
            />
            <img
              src={clinicSpecialties}
              alt="Clínica Inmaculado — especialidades médicas"
              loading="lazy"
              decoding="async"
              width={1902}
              height={1779}
              className="block h-auto w-full rounded-xl"
            />
          </div>
    </div>
  )
}
