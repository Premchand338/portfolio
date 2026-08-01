import profileImg from "../assets/ProfileImg.png"

function Hero() {
  return (
    <section className="relative flex items-center px-6 md:px-16 py-32 min-h-screen overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        
        {/* Left: text */}
        <div className="opacity-0 animate-fade-up [animation-delay:0.1s]">
          <span className="inline-flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Available for AI product work
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI products
            </span>{" "}
            that solve real problems.
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            I design the interface, wire the automation, and stay until the
            thing actually works.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-opacity rounded-full font-medium">
              ↓ Resume
            </a>
            <a href="#projects" className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-full font-medium transition-colors">
              See the work
            </a>
          </div>
        </div>

        {/* Right: image with floating badges */}
        <div className="relative opacity-0 animate-fade-up [animation-delay:0.4s]">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-4/5">
            <img src={profileImg} alt="Premchand Shahu" className="w-full h-full object-cover" />
          </div>

          {/* Floating badges */}
          <span className="absolute top-6 -left-4 bg-gray-900/90 backdrop-blur border border-white/10 text-sm px-3 py-1.5 rounded-full animate-float [animation-delay:0s]">
            Automation
          </span>
          <span className="absolute top-1/4 -right-4 bg-gray-900/90 backdrop-blur border border-white/10 text-sm px-3 py-1.5 rounded-full animate-float [animation-delay:0.5s]">
            AI Agents
          </span>
          <span className="absolute bottom-1/3 -left-4 bg-gray-900/90 backdrop-blur border border-white/10 text-sm px-3 py-1.5 rounded-full animate-float [animation-delay:1s]">
            React
          </span>
          <span className="absolute bottom-6 -right-4 bg-gray-900/90 backdrop-blur border border-white/10 text-sm px-3 py-1.5 rounded-full animate-float [animation-delay:1.5s]">
            Workflows
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero