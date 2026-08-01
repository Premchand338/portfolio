const skills = [
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Vercel", category: "tools" },
]

function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24 bg-gray-950">
      <p className="text-blue-400 text-xs tracking-widest uppercase mb-3">
        — About Me
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Building with{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          purpose.
        </span>
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mb-12">
        I'm learning to build production-grade React applications by shipping
        real projects — not tutorials. Currently focused on mastering React
        fundamentals before moving into AI-powered product development.
      </p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`text-sm px-4 py-2 rounded-full border ${
              skill.category === "frontend"
                ? "border-blue-400/30 text-blue-300 bg-blue-500/10"
                : skill.category === "backend"
                ? "border-purple-400/30 text-purple-300 bg-purple-500/10"
                : "border-gray-500/30 text-gray-300 bg-gray-500/10"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About