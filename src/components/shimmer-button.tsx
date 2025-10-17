import { type ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
}
export default function ShimmerButton({
  children = "Click Me",
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      {...props}
      className={
        `relative w cursor-pointer overflow-hidden rounded-xl px-6 py-2.5 font-semibold 
         bg-white text-gray-900 shadow-md focus:outline-none ` + className
      }
    >
      {/* Shimmer Layer (gray gradient) */}
      <span aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <span
          className="absolute inset-0 w-[200%] h-full 
                     bg-gradient-to-r from-transparent via-gray-200 to-transparent 
                     animate-shimmer"
        />
      </span>

      {/* Button text */}
        <span className="relative z-10 ">{children}</span>
      

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); opacity: 0; }
          15%  { opacity: 1; }
          50%  { transform: translateX(100%); opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
}
