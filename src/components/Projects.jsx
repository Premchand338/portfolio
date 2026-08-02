const projectList = [
  {
    id: 1,
    number: "01",
    title: "Expense Tracker",
    tagline: "Transform hidden spending patterns into actionable insights",
    description:
      "Most financial tracking fails at consistency — the tool requires too much friction. This solves it by making logging instant and showing patterns automatically.",
    stats: ["Reduces tracking time by 80%", "Real-time visibility"],
    tech: ["React", "Chart.js", "LocalStorage"],
    gradient: "from-blue-900 to-slate-900",
    liveLink: "#",
    detailsLink: "#",
  },
  {
    id: 2,
    number: "02",
    title: "Movie Search App",
    tagline: "Search that respects the user's time",
    description:
      "Poor search implementations create friction in even simple interfaces. This demonstrates the difference: debounced input, instant live results, zero unnecessary loading.",
    stats: ["Sub-100ms response time", "Debounced input"],
    tech: ["React", "REST API", "Tailwind"],
    gradient: "from-purple-900 to-slate-900",
    liveLink: "#",
    detailsLink: "#",
  },
  {
    id: 3,
    number: "03",
    title: "AI Resume Builder",
    tagline: "AI as an editor, not a replacement",
    description:
      "It takes what you've written about your experience and sharpens it for clarity and impact. The distinction matters: one produces fiction, the other surfaces your actual strengths.",
    stats: ["AI-assisted refinement", "Export-ready formats"],
    tech: ["React", "OpenAI API", "Tailwind"],
    gradient: "from-emerald-900 to-slate-900",
    liveLink: "#",
    detailsLink: "#",
  },
  {
    id: 4,
    number: "04",
    title: "Admin Dashboard",
    tagline: "Data infrastructure that supports better decisions",
    description:
      "Real-time data, role-based access, and views designed around actual workflows. Speed and clarity matter because every second counts when decisions need to be made.",
    stats: ["Real-time data sync", "Sub-1s load time"],
    tech: ["React", "Recharts", "REST API"],
    gradient: "from-orange-900 to-slate-900",
    liveLink: "#",
    detailsLink: "#",
  },
];

function Projects() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-20 py-20 bg-white dark:bg-gray-950">
      <p className="text-blue-600 dark:text-blue-400 text-xs tracking-widest uppercase mb-3">
        — Selected Work
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">
        Projects that{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          matter.
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Background gradient shift on hover */}
            <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-blue-400 to-transparent pointer-events-none" />

            {/* Card header/banner */}
            <div
              className={`relative h-48 bg-linear-to-br ${project.gradient} p-4 group-hover:brightness-110 transition-all duration-300`}
            >
              <span className="absolute top-4 left-4 text-xs font-mono bg-black/40 px-2 py-1 rounded text-blue-300 group-hover:bg-blue-500/40 transition-colors duration-300">
                {project.number}
              </span>
            </div>

            {/* Card body */}
            <div className="p-6 relative z-10 border border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm mb-4 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                {project.tagline}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                {project.description}
              </p>

              {/* Stat badges - slide up on hover */}
              <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full animate-slide-up"
                    style={{
                      animationDelay: `${project.stats.indexOf(stat) * 0.05}s`,
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Tech tags and action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 my-6">
                <div className="flex flex-wrap items-center gap-2 max-w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-white/10 group-hover:border-gray-400 dark:group-hover:border-white/30 px-3 py-2 rounded transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full justify-between sm:w-auto sm:justify-end mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Live Link
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={project.detailsLink}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white transition hover:border-blue-400 dark:hover:border-blue-300 hover:bg-gray-200 dark:hover:bg-white/10"
                  >
                    Project details
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom accent line that extends on hover */}
            <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-400 to-purple-400 w-0 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;