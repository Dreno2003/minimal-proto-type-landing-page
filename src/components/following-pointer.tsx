// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
}) => {
//   const colors = [
//     "#0ea5e9",
//     "#737373",
//     "#14b8a6",
//     "#22c55e",
//     "#3b82f6",
//     "#ef4444",
//     "#eab308",
//   ];
  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 -translate-x-[12px] -translate-y-[5px] -rotate-[70deg] transform stroke-gray-500 opacity-90"
        // className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-sky-600 text-sky-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        // style={{
        //   backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        // }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className="min-w-max"
        // className={
        //   "min-w-max rounded-full bg-neutral-500 px-2 py-2 text-xs whitespace-nowrap text-white"
        // }
      >
        <button
          className={`relative cursor-pointer overflow-hidden rounded-full px-8 py-2 font-semibold 
         bg-gray-500 opacity-90 backdrop-blur-md text-white shadow-md focus:outline-none `}
        >
          {/* Shimmer Layer (gray gradient) */}
          <span
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <span
              className="absolute inset-0 w-[100%] opacity-30 h-full 
                     bg-gradient-to-r from-transparent via-gray-200/50 to-transparent 
                     animate-shimmer"
            />
          </span>

          {/* Button text */}
          <span className="relative z-10 text-xl font-medium text-white/90">See project</span>

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
        {/* {title || `William Shakespeare`} */}
      </motion.div>
    </motion.div>
  );
};
