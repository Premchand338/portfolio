import expenseTrackerImg from "../assets/expense_tracker.jpg";
import movieSearchImg from "../assets/movie_search.jpg";
import aiResumeBuilderImg from "../assets/ai_resume_builder.jpg";
import adminDashboardImg from "../assets/admin_dashboard.jpg";

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
    image: expenseTrackerImg,
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
    image: movieSearchImg,
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
    image: aiResumeBuilderImg,
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
    image: adminDashboardImg,
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 flex flex-col"
          >
            {/* Background gradient shift on hover */}
            <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-blue-400 to-transparent pointer-events-none z-10" />

            {/* Card header/banner */}
            <div className="relative overflow-hidden rounded-t-xl h-44 sm:h-48 lg:h-40 shadow-none flex-shrink-0">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover shadow-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-xs font-mono bg-black/60 px-2 py-1 rounded text-white transition-colors duration-300">
                {project.number}
              </span>
            </div>

            {/* Card body */}
            <div className="p-6 relative z-10 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                {project.tagline}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                {project.description}
              </p>

              {/* Stat badges - collapses to zero height when hidden */}
              <div className="flex flex-wrap gap-2 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 group-hover:mb-4 overflow-hidden transition-all duration-300">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Spacer pushes tech/buttons to bottom - keeps card heights equal */}
              <div className="mt-auto">
                <div className="flex flex-wrap items-center gap-2 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-white/10 group-hover:border-gray-400 dark:group-hover:border-white/30 px-2 py-1 rounded transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-slate-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
                  >
                    Live Link
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={project.detailsLink}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-white transition duration-200 hover:border-slate-500 dark:hover:border-blue-300 hover:bg-slate-50 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-400/20"
                  >
                    Project details
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom accent line that extends on hover */}
            <div className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-400 to-purple-400 w-0 group-hover:w-full transition-all duration-500 z-20" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;