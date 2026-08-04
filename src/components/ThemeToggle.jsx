import { useState, useEffect } from "react"

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme")
    return saved ? saved === "dark" : true // default to dark
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-300/30 bg-slate-900 text-white transition-colors hover:bg-slate-800 dark:border-slate-700/50 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
      aria-label="Toggle theme"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle