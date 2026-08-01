function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen px-6 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <p className="text-blue-400 font-medium mb-4 tracking-wide">
          👋 Hey, I'm building things
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Premchand Shahu
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          React & AI Product Builder — turning ideas into real, deployed
          products.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-colors"
          >
            View Projects{" "}
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-colors"
          >
            Contact Me{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
