const projectList = [
  {
    id: 1,
    number: "01",
    title: "Expense Tracker",
    tagline: "Personal finance dashboard",
    description:
      "Track daily expenses with category breakdown, budgets, and visual spending trends.",
    stats: ["Real-time sync", "Category insights"],
    tech: ["React", "Chart.js", "LocalStorage"],
    gradient: "from-blue-900 to-slate-900",
  },
  {
    id: 2,
    number: "02",
    title: "Movie Search App",
    tagline: "API-powered discovery",
    description:
      "Search and browse movies with live data, filters, and a responsive results grid.",
    stats: ["Debounced search", "Infinite scroll"],
    tech: ["React", "REST API", "Tailwind"],
    gradient: "from-purple-900 to-slate-900",
  },
]

function Projects() {
  return (
    <section id="work" className="w-full px-6 md:px-12 lg:px-20 py-24">
      <p className="text-blue-400 text-xs tracking-widest uppercase mb-3">
        — Selected Work
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Projects that{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          matter.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400/30 transition-colors"
          >
            {/* Card header/banner */}
            <div className={`relative h-48 bg-linear-to-br ${project.gradient} p-4`}>
              <span className="absolute top-4 left-4 text-xs font-mono bg-black/40 px-2 py-1 rounded text-blue-300">
                {project.number}
              </span>
            </div>

            {/* Card body */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-blue-400 text-sm mb-3">{project.tagline}</p>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Stat badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs bg-blue-500/10 text-blue-300 border border-blue-400/20 px-3 py-1 rounded-full"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects