const skillCategories = [
  {
    title: "Frontend",
    color: "blue",
    icon: "</>",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    color: "purple",
    icon: "☰",
    skills: ["Node.js", "REST APIs", "Express"],
  },
  {
    title: "Tools & Deploy",
    color: "gray",
    icon: "☁",
    skills: ["Git & GitHub", "Vercel", "VS Code"],
  },
]

const colorMap = {
  blue: "border-blue-400/30 text-blue-700 dark:text-blue-300 bg-blue-500/10",
  purple: "border-purple-400/30 text-purple-700 dark:text-purple-300 bg-purple-500/10",
  gray: "border-gray-400/30 text-gray-700 dark:text-gray-300 bg-gray-500/10",
}

const iconBgMap = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  gray: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
}

function Skills() {
  return (
    <div>
      <p className="text-blue-600 dark:text-blue-400 text-xs tracking-widest uppercase mb-3">
        — What I Work With
      </p>
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        My{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Toolkit.
        </span>
      </h2>

      <div className="flex flex-col gap-5">
        {skillCategories.map((category) => (

          // relative group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-950 shadow-sm hover:shadow-lg/5
          <div
            key={category.title}
            className="relative bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-950 shadow-sm hover:shadow-lg/5"
          >
            <div className={`absolute top-6 right-6 w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm ${iconBgMap[category.color]}`}>
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white pr-12">
              {category.title}
            </h3>
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
    </div>
  )
}

export default Skills