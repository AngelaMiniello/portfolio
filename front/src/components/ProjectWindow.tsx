
interface ProjectWindowProps {
  children: React.ReactNode
  onClose: () => void
}

export default function ProjectWindow({
  children,
  onClose,
}: ProjectWindowProps) {
    return(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
      onClick={onClose}
    >
      {/* Ventana */}
      <div
        className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-xl bg-[#1c1c1c] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Barra superior */}
        <div className="flex h-10 items-center justify-end px-4">
          <button
            onClick={onClose}
            className="text-white transition-opacity hover:opacity-50"
          >
            ×
          </button>
        </div>

        {/* Contenido */}
        <div className="h-full overflow-y-auto p-8">
          {children}
        </div>
      </div>
    </div>
  )
}