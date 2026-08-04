import { ArrowRight } from "lucide-react";

export default function AnimatedButton({
  children = "Explore My Work",
}) {
  return (
    <button
      className="
      group relative mx-auto sm:mx-0 flex items-center gap-1 overflow-hidden
      rounded-md border border-slate-300/30 bg-slate-900 text-white
      px-8 py-4
      font-semibold
      shadow-sm shadow-slate-900/10
      transition-all duration-700
      hover:border-transparent
      hover:bg-slate-800
      active:scale-95
      active:shadow-[0_0_0_6px_rgba(15,23,42,0.12)]
      dark:border-slate-700/50 dark:bg-slate-100 dark:text-slate-950
      dark:hover:bg-slate-200
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