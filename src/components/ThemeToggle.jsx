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
      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 dark:border-white/10 hover:bg-white/5 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle