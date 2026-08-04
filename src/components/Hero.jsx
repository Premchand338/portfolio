import { useState, useEffect, useRef } from "react";
import heroImg from "../assets/HeroImg.png";
import { CodeXml } from "lucide-react"
import AnimatedButton from "./AnimatedButton.jsx";
import DecorativeBackground from "./DecorativeBackground.jsx";

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

  return (
    <section
      ref={heroRef}
      className="relative flex items-center px-6 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20 overflow-hidden bg-white dark:bg-gray-950">
      <DecorativeBackground variant="hero" />
      {/* Grid background */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-size-[50px_50px]" />
         <div className="absolute inset-0 dark:bg-gray-950 mask-[radial-gradient(ellipse_at_center,transparent_10%,black_75%)]" />

       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-5xl md:text-6xl font-bold mb-3 opacity-0 animate-fade-up [animation-delay:0.2s] whitespace-nowrap">
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Premchand Shahu
            </span>
          </h2>
          <h4 className="text-gray-900 dark:text-white text-sm sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 opacity-0 animate-fade-up [animation-delay:0.3s] font-bold">
            AI Powered React Frontend Developer | Product Designer
          </h4>
          <p className="text-black dark:text-gray-400 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 opacity-0 animate-fade-up [animation-delay:0.4s]">
            From AI automation to full-stack applications, I build scalable products that streamline workflows, reduce manual effort, and deliver measurable value through thoughtful engineering.
          </p>

          {/* <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-transform duration-300 transform bg-linear-to-r from-blue-500 via-violet-500 to-cyan-400 shadow-[0_18px_70px_-28px_rgba(59,130,246,0.85)] hover:-translate-y-1 hover:shadow-[0_20px_90px_-40px_rgba(168,85,247,0.75)] ring-1 ring-white/20 backdrop-blur-sm mb-6 sm:mb-8 opacity-0 animate-fade-up [animation-delay:0.5s]"
          >
            Launch AI Flow →
          </a> */}
          <AnimatedButton />

          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 opacity-0 animate-fade-up [animation-delay:0.6s] my-8">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-2 text-center px-2 py-2 transition-all duration-300 hover:-translate-y-1"
              >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-blue-500/10 flex items-center justify-center text-xl text-gray-950 dark:text-white/90">
                  {f.icon}
              </div>
                <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-300 whitespace-nowrap">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brain - constrained size */}
        <div className="relative flex items-center justify-center opacity-0 animate-fade-up [animation-delay:0.4s]">
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-purple-500/30 rounded-full blur-3xl animate-brain-glow" />
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-blue-500/20 rounded-full blur-3xl animate-brain-glow [animation-delay:1s]" />

          <div
            className="relative z-10 w-full max-w-60 sm:max-w-75 md:max-w-85 lg:max-w-95 animate-brain-float will-change-transform"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${mousePos.y * -20}deg)`,
            }}
          >
            <div className="absolute left-1/2 bottom-0 w-full max-w-[80%] -translate-x-1/2 h-20 rounded-full bg-linear-to-t from-slate-900/20 via-slate-900/10 to-transparent opacity-90 blur-3xl pointer-events-none dark:hidden animate-shadow-pulse" />
            <img
              src={heroImg}
              alt="AI Brain"
              className="relative w-full h-auto object-contain"
            />

            <span className="absolute top-2 left-2 md:top-4 md:left-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 py-1 text-[9px] md:text-[10px] text-slate-900 dark:text-white/90 animate-float-path-1">
             AI Systems 
            </span>
          
            <span className="absolute top-8 right-2 md:top-10 md:right-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 py-1 text-[9px] md:text-[10px] text-gray-800 dark:text-white/90 animate-float-path-2">
              Smart UX
            </span>
            <span className="absolute bottom-10 left-4 md:bottom-12 md:left-6 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 py-1 text-[9px] md:text-[10px] text-gray-800 dark:text-white/90 animate-float-path-3">
              Scalable
            </span>
            <span className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 px-2 py-1 text-[9px] md:text-[10px] text-gray-800 dark:text-white/90 animate-float-path-4">
              Creative Flow
            </span>
          </div>
        </div>
       </div>
    </section>
  );
}

export default Hero;