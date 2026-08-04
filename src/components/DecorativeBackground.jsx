// src/components/DecorativeBackground.jsx

const variants = {
  hero: {
    blob1: "top-0 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/30 -translate-x-1/3 -translate-y-1/4",
    blob2: "bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/25 translate-x-1/4 translate-y-1/4",
  },
  projects: {
    blob1: "top-0 right-0 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/20 translate-x-1/3 -translate-y-1/3",
    blob2: "bottom-0 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/20 -translate-x-1/3 translate-y-1/3",
  },
  skillsAbout: {
    blob1: "top-1/4 left-0 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/15 -translate-x-1/2",
    blob2: "bottom-1/4 right-0 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/15 translate-x-1/2",
  },
  contact: {
    blob1: "top-0 left-1/4 w-96 h-96 bg-slate-200/35 dark:bg-blue-700/15 -translate-y-1/3",
    blob2: "bottom-0 right-1/4 w-80 h-80 bg-slate-200/30 dark:bg-purple-600/15 translate-y-1/3",
  },
}

function DecorativeBackground({ variant = "hero" }) {
  const shapes = variants[variant]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      {/* Blurred blob shapes */}
      <div className={`absolute rounded-full blur-3xl ${shapes.blob1}`} />
      <div className={`absolute rounded-full blur-3xl ${shapes.blob2}`} />

      {/* Faint swirl line - decorative SVG */}
      <svg
        className="absolute top-1/2 right-0 -translate-y-1/2 w-150 h-150 opacity-10 dark:opacity-20"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="280" stroke="url(#swirl-gradient)" strokeWidth="1" />
        <circle cx="300" cy="300" r="220" stroke="url(#swirl-gradient)" strokeWidth="1" />
        <defs>
          <linearGradient id="swirl-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default DecorativeBackground