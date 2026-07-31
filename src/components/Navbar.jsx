function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
      <a href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">
        About
      </a>
      <a href="#projects" className="text-sm font-medium hover:text-blue-400 transition-colors">
        Projects
      </a>
      <a href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">
        Contact
      </a>
    </nav>
  )
}

export default Navbar