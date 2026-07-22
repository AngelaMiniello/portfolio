import gosafehome from '../../assets/images/gosafehome.jpg'

export default function GSContent() {
   return (
    <div className="h-full overflow-y-auto">
        <div className='flex flex-col gap-4'>
          <h2 className="font-display text-6xl text-white"> GO SAFE </h2>

          <p className="mt-4 text-white/70">
            FRONTEND DEVELOPMENT, UX/UI DESIGN
          </p>

          <p className="mt-4 text-white/70">
            Desarrollo de una plataforma web tipo marketplace para conectar usuarios con instructores de actividades outdoor, permitiendo explorar, reservar y gestionar experiencias de forma segura.

Participé principalmente en el desarrollo frontend, creando interfaces responsivas y centradas en la experiencia de usuario utilizando React y Next.js. Implementé flujos como registro de instructores en múltiples pasos, dashboards dinámicos según roles (usuario, instructor, admin) y vistas detalladas de perfiles y experiencias.

Trabajé en la integración con el backend (NestJS), consumo de APIs REST, manejo de autenticación y estados globales, además de colaborar en decisiones de diseño y estructura de la aplicación.

Tecnologías: React, Next.js, Tailwind CSS, Node.js, NestJS, PostgreSQL.
          </p>

          </div>
          {/* contenido del proyecto */}
          <div>
            <img
              src={gosafehome}
              className='opacity-80 mt-10 w-1/2'
            />
            <p></p>
          </div>
    </div>
  )
}