function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
      <h2 className="text-xl font-bold">MyPortfolio</h2>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar