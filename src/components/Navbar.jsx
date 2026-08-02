import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5">
      <div className="relative items-center flex justify-center px-8 py-5">

        {/* Center: Nav links (desktop only) */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-widest text-gray-900 dark:text-gray-200 uppercase">
          <a href="#work" className="hover:text-gray-900 dark:hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Theme toggle (desktop) */}
        <div className="hidden md:block absolute right-20">
          <ThemeToggle />
        </div>

        {/* Right: hamburger on mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900 dark:text-white">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-8 pb-6 text-sm text-gray-600 dark:text-gray-300 uppercase tracking-widest">
          <a href="#work" className="hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar