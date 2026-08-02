import { useState, useEffect } from "react"

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <div
      className="hidden md:block fixed w-4 h-4 border-2 border-blue-400 rounded-full pointer-events-none z-100 transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x - 8 }px, ${position.y - 8}px)`,
      }}
    />
  )
}

export default CustomCursor