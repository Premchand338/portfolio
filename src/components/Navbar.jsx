import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-950 border-b border-gray-200/70 dark:border-white/10 shadow-none">
      <div className="relative flex items-center justify-between px-8 py-5">
        {/* Logo badge - left */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
            PS
          </div>
          <span className="hidden sm:block text-gray-900 dark:text-white font-semibold">
            Premchand <span className="text-blue-600 dark:text-blue-400">Shahu</span>
          </span>
        </a>

        {/* Center: Nav links (desktop only) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10 text-sm tracking-widest text-gray-900 dark:text-gray-200 uppercase">
          <a href="#work" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Work
          </a>
          <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Skills
          </a>
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:bg-blue-600"
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 dark:text-white"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-8 pb-6 text-sm text-gray-600 dark:text-gray-300 uppercase tracking-widest">
          <a
            href="#work"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Work
          </a>
          <a
            href="#skills"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#about"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
