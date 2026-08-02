import { useState, useEffect, useRef } from "react";
import heroImg from "../assets/HeroImg.png";

const features = [
  { icon: "</>", label: "Clean Code" },
  { icon: "⚡", label: "Fast & Optimized" },
  { icon: "🔲", label: "Responsive" },
  { icon: "💡", label: "Creative Solutions" },
];

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const brainTransform = `
    perspective(1000px)
    rotateY(${scrollY * 0.05 + mousePos.x * 15}deg)
    rotateX(${mousePos.y * -15}deg)
    translateY(${scrollY * 0.15}px)
  `;

  return (
    <section
      ref={heroRef}
      className="relative flex items-center min-h-screen px-6 sm:px-8 md:px-12 lg:px-20 py-24 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-white dark:bg-gray-950 mask-[radial-gradient(ellipse_at_center,transparent_10%,black_75%)]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <div className="text-left">
          <p className="text-black dark:text-gray-100 text-base sm:text-lg mb-2 opacity-0 animate-fade-up [animation-delay:0.1s]">
            Hi, I'm
          </p>
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-3 opacity-0 animate-fade-up [animation-delay:0.2s]">
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Premchand Shahu
            </span>
          </h1>
          <p className="text-gray-900 dark:text-white text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 opacity-0 animate-fade-up [animation-delay:0.3s] font-bold">
            AI Product Developer | Product Designer
          </p>
          <p className="text-black dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 opacity-0 animate-fade-up [animation-delay:0.4s]">
            I build automation systems and interfaces that solve real business
            workflows not just clean code, but clean thinking.
          </p>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500/50 dark:border-blue-400/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-all rounded-lg font-medium mb-8 sm:mb-10 opacity-0 animate-fade-up [animation-delay:0.5s]"
          >
            Explore My Work →
          </a>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 opacity-0 animate-fade-up [animation-delay:0.6s]">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-2 text-center px-2 py-4 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl">{f.icon}</span>
                <span className="text-xs sm:text-sm text-black dark:text-gray-300 whitespace-nowrap">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brain with visible continuous animation */}
        <div className="relative hidden md:flex items-center justify-center opacity-0 animate-fade-up [animation-delay:0.4s]">
          <div className="absolute w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500/30 rounded-full blur-3xl animate-brain-glow" />
          <div className="absolute w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-blue-500/20 rounded-full blur-3xl animate-brain-glow [animation-delay:1s]" />

          <div
            className="relative z-10 w-full max-w-70 md:max-w-95 lg:max-w-130 animate-brain-float will-change-transform"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${mousePos.y * -20}deg)`,
            }}
          >
            <img
              src={heroImg}
              alt="AI Brain"
              className="w-full h-auto object-contain border-0 ring-0 shadow-blue-500/20"
            />

            <span className="absolute top-4 left-4 md:top-6 md:left-6 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 md:px-3 py-1 text-[10px] md:text-xs text-gray-800 dark:text-white/90 animate-float-path-1">
              AI Systems
            </span>
            <span className="absolute top-12 right-4 md:top-16 md:right-6 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 md:px-3 py-1 text-[10px] md:text-xs text-gray-800 dark:text-white/90 animate-float-path-2">
              Smart UX
            </span>
            <span className="absolute bottom-16 left-6 md:bottom-20 md:left-8 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 md:px-3 py-1 text-[10px] md:text-xs text-gray-800 dark:text-white/90 animate-float-path-3">
              Scalable
            </span>
            <span className="absolute bottom-6 right-6 md:bottom-8 md:right-8 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 md:px-3 py-1 text-[10px] md:text-xs text-gray-800 dark:text-white/90 animate-float-path-4">
              Creative Flow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;