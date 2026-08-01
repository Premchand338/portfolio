const skillCategories = [
  {
    title: "Frontend",
    color: "blue",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    color: "purple",
    skills: ["Node.js", "REST APIs", "Express"],
  },
  {
    title: "Tools & Deploy",
    color: "gray",
    skills: ["Git & GitHub", "Vercel", "VS Code"],
  },
]

const colorMap = {
  blue: "border-blue-400/30 text-blue-300 bg-blue-500/10",
  purple: "border-purple-400/30 text-purple-300 bg-purple-500/10",
  gray: "border-gray-500/30 text-gray-300 bg-gray-500/10",
}

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 bg-gray-950">
      <p className="text-blue-400 text-xs tracking-widest uppercase mb-3">
        — What I Work With
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        My{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Toolkit.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-5">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-sm px-3 py-1.5 rounded-full border ${colorMap[category.color]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills