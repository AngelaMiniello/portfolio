import cihome from '../../assets/images/cihome.jpg'

export default function CIContent() {
   return (
      <div className="h-full overflow-y-auto">
        <div className='flex flex-col gap-4'>
          <h2 className="font-display text-6xl text-white">  CLÍNICA INMACULADO </h2>

          <p className="mt-4 text-white/70"> FULLSTACK DEVELOPMENT, UX/UI DESIGN  </p>

          <p className="mt-4 text-white/70">
            Aplicación web para la gestión de turnos que permite a los usuarios agendar, visualizar y administrar citas de manera eficiente. Implementé interfaces intuitivas con React y lógica backend para el manejo de datos y persistencia.
          </p>
        </div>

          {/* contenido del proyecto */}
          <div>
            <img
              src={cihome}
              className='opacity-80 mt-10 w-1/2'
            />
            <p></p>
          </div>
    </div>
  )
}