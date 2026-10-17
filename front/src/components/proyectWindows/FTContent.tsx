import stickerAtlas from '../../assets/images/stickers/portfolio-stickers.png'

const galleryStickers: Record<string, { position: string; placement: string }> = {
  'logo.png': { position: '0% 0%', placement: '-bottom-8 -right-7 rotate-[-12deg]' },
  'ft.register.png': { position: '100% 0%', placement: '-bottom-8 -left-6 rotate-[10deg]' },
  'ftDiary2.png': { position: '0% 100%', placement: '-bottom-9 -right-7 rotate-[8deg]' },
  'ftProfile.png': { position: '100% 100%', placement: '-bottom-8 -left-7 rotate-[-14deg]' },
}

const fituusImages = import.meta.glob<string>(
  '../../assets/images/fituus/*.png',
  { eager: true, query: '?url', import: 'default' },
)

const galleryColumns = [
  [
    ['logo.png', 'Fituus logo'],
    ['ftHome.png', 'Home — daily calories'],
    ['ftHome2.png', 'Home — nutrition overview'],
    ['ftHome3.png', 'Home — daily activity'],
    ['ftHome4.png', 'Home — daily summary'],
    ['ft panel.png', 'Main panel'],
  ],
  [
    ['ft login.png', 'Log in'],
    ['ft.register.png', 'Create an account'],
    ['ft set goals.png', 'Set your goals'],
    ['ftActLevel.png', 'Activity level'],
    ['ft app icon.png', 'Fituus app icon'],
  ],
  [
    ['ftDiary.png', 'Food diary'],
    ['ftDiary2.png', 'Food diary — detail'],
    ['ftDiary3.png', 'Food diary — nutrition'],
    ['ftPlus.png', 'Add an entry'],
    ['ftProgress.png', 'Progress overview'],
    ['ftProgress2.png', 'Progress detail'],
  ],
  [
    ['ftWins.png', 'Achievements'],
    ['ftWins2.png', 'Achievements detail'],
    ['ftProfile.png', 'Profile'],
    ['ftprofile2.png', 'Profile detail'],
    ['ftConfig.png', 'Settings'],
    ['ftConfig2.png', 'Settings detail'],
  ],
]

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

          <section
            aria-label="Fituus app gallery"
            className="mt-10 grid grid-cols-2 items-start gap-2 bg-[#f1f0e9] p-2 sm:gap-3 sm:p-3 md:grid-cols-[1fr_0.85fr_1.1fr_0.9fr]"
          >
            {galleryColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex min-w-0 flex-col gap-2 sm:gap-3">
                {column.map(([filename, description]) => (
                  <div key={filename} className="relative">
                    <img
                    src={fituusImages[`../../assets/images/fituus/${filename}`]}
                    alt={`Fituus — ${description}`}
                    loading="lazy"
                    decoding="async"
                    width={filename === 'logo.png' ? 1008 : 1080}
                    height={filename === 'logo.png' ? 934 : 2400}
                    className="block h-auto w-full"
                    />
                    {galleryStickers[filename] && (
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute z-10 block aspect-square w-[48%] max-w-36 bg-contain bg-no-repeat drop-shadow-[0_3px_2px_rgba(0,0,0,0.22)] ${galleryStickers[filename].placement}`}
                        style={{
                          backgroundImage: `url("${stickerAtlas}")`,
                          backgroundSize: '200% 200%',
                          backgroundPosition: galleryStickers[filename].position,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>
    </div>
  )
}
