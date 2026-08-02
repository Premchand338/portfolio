const techStack = ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git", "Vercel", "REST APIs"]

function TechMarquee() {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-950 border-y border-gray-400 dark:border-white/5 py-6">
      <div className="flex gap-12 w-max animate-scroll">
        {[...techStack, ...techStack].map((tech, index) => (
          <span key={index} className="text-black dark:text-gray-500 text-sm uppercase tracking-widest whitespace-nowrap">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechMarquee