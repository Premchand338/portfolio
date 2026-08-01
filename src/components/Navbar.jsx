import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-gray-400 uppercase">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <a
          href="#contact"
          className="hidden md:block text-xs font-medium px-4 py-2 border border-blue-400/50 text-blue-400 rounded hover:bg-blue-400/10 transition-colors"
        >
          Hire Me →
        </a>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
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