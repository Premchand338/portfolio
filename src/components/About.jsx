const interests = [
  { icon: "📷", label: "Photography" },
  { icon: "🛡️", label: "Insurance" },
  { icon: "🎬", label: "Content Creation" },
  { icon: "📚", label: "Reading" },
]

function About() {
  return (
    <section id="about" className="w-full px-6 md:px-12 lg:px-20 py-24">
      <p className="text-blue-400 text-xs tracking-widest uppercase mb-3">
        — About Me
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Building with{" "}
        <span className="bg-linear Just-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          purpose.
        </span>
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mb-16">
        I'm learning to build production-grade React applications by shipping
        real projects — not tutorials. Currently focused on mastering React
        fundamentals before moving into AI-powered product development.
      </p>

      <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-6">
        Beyond Code
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {interests.map((interest) => (
          <div
            key={interest.label}
            className="bg-gray-900 border border-white/10 rounded-xl p-5 text-center hover:border-blue-400/30 transition-colors"
          >
            <span className="text-3xl block mb-2">{interest.icon}</span>
            <span className="text-sm text-gray-400">{interest.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About