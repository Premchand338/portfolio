import { useState, useEffect } from "react"

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-slate-900 text-white border border-slate-300/30 rounded-full flex items-center justify-center shadow-sm shadow-slate-900/10 transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:border-slate-700/50 dark:hover:bg-slate-200"
      >
        ↑
      </button>
    )
  )
}

export default BackToTop