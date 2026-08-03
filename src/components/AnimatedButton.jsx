import { ArrowRight } from "lucide-react";

export default function AnimatedButton({
  children = "Explore My Work",
}) {
  return (
    <button
      className="
      group relative flex items-center gap-1 overflow-hidden
      rounded-md border-2 border-slate-900/70
      px-8 py-4
      font-semibold
      text-slate-950
      shadow-[0_0_0_2px_rgba(15,23,42,0.35)]
      transition-all duration-700
      hover:border-transparent
      hover:bg-linear-to-r
      hover:from-blue-500
      hover:via-violet-500
      hover:to-cyan-400
      active:scale-95
      active:shadow-[0_0_0_4px_rgba(59,130,246,0.35)]
      dark:border-cyan-400/40
      dark:text-cyan-300
      "
    >
      {/* Left Arrow */}
      <ArrowRight
        size={22}
        className="
        absolute
        -left-8
        z-10
        transition-all
        duration-700
        group-hover:left-4
        group-hover:text-white
        dark:group-hover:text-neutral-900
      "
      />

      {/* Text */}
      <span
        className="
        relative z-10
        -translate-x-3
        transition-all
        duration-700
        group-hover:translate-x-3
        group-hover:text-white
      "
      >
        {children}
      </span>

      {/* Expanding Circle */}
      <span
        className="
        absolute
        left-1/2
        top-1/2
        h-5
        w-5
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-blue-500
        opacity-0
        transition-all
        duration-700
        group-hover:h-[57.5px]
        group-hover:w-[57.5px]
        group-hover:opacity-100
      "
      />

      {/* Right Arrow */}
      <ArrowRight
        size={22}
        className="
        absolute
        right-4
        z-10
        transition-all
        duration-700
        group-hover:-right-8
        group-hover:text-white
        dark:group-hover:text-neutral-900
      "
      />
    </button>
  );
}