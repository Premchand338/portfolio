const process = [
  {
    step: "01",
    title: "Understand",
    description:
      "Break down the real problem before touching any code — what's actually slow, repetitive, or broken.",
  },
  {
    step: "02",
    title: "Automate",
    description:
      "Identify what can be automated or AI-assisted, so the solution scales beyond manual effort.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Ship a working interface fast — functional first, polished through iteration.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Test, debug, and improve based on real usage — not assumptions.",
  },
];

const interests = [
  { icon: "📷", label: "Photography" },
  { icon: "🛡️", label: "Insurance" },
  { icon: "🎬", label: "Content Creation" },
  { icon: "📚", label: "Reading" },
];

function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-10 bg-white dark:bg-gray-950">
      <div className="max-w-5xl text-left">
        <p className="text-blue-600 dark:text-blue-400 text-md tracking-widest uppercase my-3">
          — About Me
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Automation-first,{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI-driven.
          </span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mb-10 mt-5">
          I approach every product the same way — understand the real workflow,
          automate the repetitive parts, and use AI where it genuinely saves
          time, not just because it's trendy. Currently building toward
          production-grade AI products through hands-on projects.
        </p>
      </div>

      {/* Process steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {process.map((item) => (
          <div
            key={item.step}
            className="w-full rounded-2xl px-4 py-6 text-gray-900 dark:text-white transition-all duration-300 ease-out bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-300 hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-lg"
          >
            <span className="text-blue-600 dark:text-blue-400 text-sm font-mono">{item.step}</span>
            <h3 className="text-lg font-semibold mt-3 mb-3 text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Interests */}
      {/* <h3 className="text-sm text-gray-500 dark:text-gray-300 uppercase tracking-widest mb-6">
        Beyond Code
      </h3> */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {interests.map((interest) => (
          <div
            key={interest.label}
            className="bg-white dark:bg-gray-950 rounded-xl p-5 text-center w-full border border-gray-300 dark:border-white/50 text-gray-900 dark:text-white placeholder-gray-600 transition-all duration-300 ease-out hover:border-blue-400 dark:hover:border-blue-300/50 focus:outline-none focus:border-blue-400 dark:focus:border-blue-300 focus:ring-1 focus:ring-blue-400/20"
          >
            <span className="text-3xl block mb-2">{interest.icon}</span>
            <span className="text-lg text-gray-600 dark:text-gray-400">{interest.label}</span>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default About;