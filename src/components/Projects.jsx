const projectList = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "Track daily expenses with category breakdown.",
    link: "#",
  },
  {
    id: 2,
    title: "Movie Search App",
    description: "Search movies using a public API.",
    link: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Data tables and charts for admin use.",
    link: "#",
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl hover:border-blue-400/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline text-sm">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects