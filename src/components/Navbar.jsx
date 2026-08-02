import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/5">
      <div className="relative items-center flex justify-center px-8 py-5">

        {/* Center: Nav links (desktop only) */}
        <div className="hidden md:flex items-center gap-30 text-md tracking-widest text-gray-200 uppercase">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: empty on desktop, hamburger on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-8 text-white"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

       {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-8 pb-6 text-sm text-gray-300 uppercase tracking-widest">
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar