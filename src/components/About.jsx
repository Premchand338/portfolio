const process = [
  {
    step: "01",
    title: "Understand",
    description: "Break down the real problem before touching any code — what's actually slow, repetitive, or broken.",
  },
  {
    step: "02",
    title: "Automate",
    description: "Identify what can be automated or AI-assisted, so the solution creates impact, not just effort.",
  },
  {
    step: "03",
    title: "Build",
    description: "Ship a working interface fast — functional first, polished through iteration.",
  },
  {
    step: "04",
    title: "Refine",
    description: "Test, debug, and improve based on real usage — not assumptions.",
  },
]

function About() {
  return (
    <div id="about" className="scroll-mt-24">
      <p className="text-blue-600 dark:text-blue-400 text-xs tracking-widest uppercase mb-3">
        — About Me
      </p>
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        Automation-first,{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI-driven.
        </span>
      </h2>

      <p className="text-gray-600 dark:text-gray-400 text-base mb-8">
        I approach every product the same way — understand the real workflow,
        automate the repetitive parts, and use AI where it genuinely saves
        time, not just because it's trendy. Currently building toward
        production-grade AI products through hands-on projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {process.map((item) => (
          <div
            key={item.step}
            className="bg-transparent border rounded-2xl border-gray-400 dark:border-white/50 px-4 py-4 transition-all duration-300 ease-out hover:border-blue-400 dark:hover:border-blue-300/50"
          >
            <span className="text-blue-600 dark:text-blue-400 text-sm font-mono">{item.step}</span>
            <h3 className="text-base font-semibold mt-2 mb-2 text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About