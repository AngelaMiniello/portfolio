import fituusRegisterOptions from '../../assets/images/fituusRegisterOptions.png'

export default function FTContent() {
   return (
      <div className="h-full overflow-y-auto">
        <div className='flex flex-col gap-4'>
          <h2 className="font-display text-6xl text-white uppercase"> FitApp </h2>
          <span> Nutrition & Fitness Tracker+</span>
          <p className="mt-4 text-white/70">  FRONTEND DEVELOPMENT, UX/UI DESIGN  </p>
          <a 
            href="https://github.com/AngelaMiniello/fituus-apk/releases/latest" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-white hover:text-gray-500 underline font-medium transition-colors"
          >
            Download Android APK
          </a>
          <p className="mt-4 text-white/70">
            Developed a full-stack fitness tracking application featuring food logging, macro tracking, water intake monitoring, and goal management.

            Built with Next.js, React, TypeScript, Express, PostgreSQL, and TypeORM. Implemented authentication, API integration, responsive design, reusable components, and dynamic nutritional calculations based on serving sizes.

            Focused on creating an intuitive user experience while applying modern frontend and backend development practices.
          </p>
        </div>

          {/* contenido del proyecto */}
          <div>
            <img
              src={fituusRegisterOptions}
              className='opacity-80 mt-10 w-1/2'
            />
            <p></p>
          </div>
    </div>
  )
}