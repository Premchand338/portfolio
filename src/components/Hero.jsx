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

  // Combine scroll rotation + mouse tilt into one transform
  const brainTransform = `
    perspective(1000px)
    rotateY(${scrollY * 0.05 + mousePos.x * 15}deg)
    rotateX(${mousePos.y * -15}deg)
    translateY(${scrollY * 0.15}px)
  `;

  return (
    <section
      ref={heroRef}
      className="relative flex items-center min-h-screen px-6 md:px-12 lg:px-20 overflow-hidden bg-gray-950"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gray-950 mask-[radial-gradient(ellipse_at_center,transparent_10%,black_75%)]" />

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-2 gap-12 items-center max-w-8xl mx-auto w-full">
        <div className="text-left">
          <p className="text-gray-100 text-lg mb-2 opacity-0 animate-fade-up [animation-delay:0.1s]">
            Hi , I'm
          </p>
          <h1 className="text-6xl font-bold mb-3 opacity-0 animate-fade-up [animation-delay:0.2s]">
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Premchand
            </span>
          </h1>
          <p className=" text-white text-lg tracking-[0.3em] uppercase mb-3 opacity-0 animate-fade-up [animation-delay:0.3s] font-bold">
            AI Product Developer | Product Designer
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 opacity-0 animate-fade-up [animation-delay:0.4s]">
            I build automation systems and interfaces that solve real business
            workflows — not just clean code, but clean thinking.
          </p>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transition-all rounded-lg font-medium mb-10 opacity-0 animate-fade-up [animation-delay:0.5s]"
          >
            Explore My Work →
          </a>

          <div className="grid grid-cols-4 gap-12 opacity-0 animate-fade-up [animation-delay:0.6s]">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-2 text-center border border-white/20 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-600/10 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="text-2xl">{f.icon}</span>
                <span className="text-sm text-gray-300 whitespace-nowrap">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brain with 3D animation */}
        {/* Brain with visible continuous animation */}
        <div className="relative hidden lg:flex items-center justify-center opacity-0 animate-fade-up [animation-delay:0.4s]">
          <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-brain-glow" />
          <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-brain-glow [animation-delay:1s]" />
          <img
            src={heroImg}
            alt="AI Brain"
            className="relative z-10 w-150 animate-brain-float will-change-transform"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${mousePos.y * -20}deg)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
