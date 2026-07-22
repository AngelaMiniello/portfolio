const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full  bg-white/4 backdrop-blur-[1px]">
      <nav className="flex items-center justify-between px-6 py-6 md:px-10">
        <a href="/" className="flex items-baseline">
          <span className="font-script text-3xl">A</span>
          <span className="font-display text-3xl">ngela</span>

          <span className="font-script text-3xl">M</span>
          <span className="font-display text-3xl">iniello</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm uppercase tracking-wide transition-opacity hover:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="font-display text-sm uppercase md:hidden"
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>
    </header>
  )
}

export default Navbar