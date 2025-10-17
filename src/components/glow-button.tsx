"use client";

import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light" | "dark" | "teal" | "orange" | 'blue';
} 

const sizeClasses = {
  sm: "px-4 py-3 text-sm rounded-full",
  md: "px-8 py-4 text-base rounded-2xl",
  lg: "px-16 py-6 text-2xl font-semibold rounded-3xl",
};

const variantClasses = {
  default: cn(
    "bg-gradient-to-b from-[#4D5659] to-[#313739]",
    "shadow-[0_10px_10px_rgba(77,86,89,0.6)_inset,0_5px_10px_rgba(0,0,0,0.25),0_-10px_10px_rgba(50,55,57,0.8)_inset]",
    "hover:shadow-[0_6px_20px_rgba(77,86,89,0.8)]"
  ),
  light: cn(
    "bg-gradient-to-b from-[#6C777B] to-[#4D5659]",
    "shadow-[0_10px_10px_rgba(108,119,123,0.5)_inset,0_5px_10px_rgba(0,0,0,0.2),0_-10px_10px_rgba(77,86,89,0.7)_inset]",
    "hover:shadow-[0_6px_20px_rgba(108,119,123,0.8)]"
  ),
  dark: cn(
    "bg-gradient-to-b from-[#2B3032] to-[#1A1E20]",
    "shadow-[0_10px_10px_rgba(43,48,50,0.6)_inset,0_5px_10px_rgba(0,0,0,0.3),0_-10px_10px_rgba(26,30,32,0.9)_inset]",
    "hover:shadow-[0_6px_20px_rgba(43,48,50,0.8)]"
  ),
  teal: cn(
    "bg-gradient-to-b from-[#4D5659] to-[#4FD1C5]",
    "shadow-[0_10px_10px_rgba(79,209,197,0.4)_inset,0_5px_10px_rgba(0,0,0,0.25),0_-10px_10px_rgba(79,209,197,0.8)_inset]",
    "hover:shadow-[0_6px_20px_rgba(79,209,197,0.8)]"
  ),
  orange: cn(
    "bg-gradient-to-b from-[#4D5659] to-[#FF5F14]",
    "shadow-[0_10px_10px_rgba(255,95,20,0.4)_inset,0_5px_10px_rgba(0,0,0,0.25),0_-10px_10px_rgba(255,95,20,0.8)_inset]",
    "hover:shadow-[0_6px_20px_rgba(255,95,20,0.8)]"
  ),
  blue: cn(
    "bg-gradient-to-b from-[#019FE8] to-[#0787c2]",
    "shadow-[0_10px_10px_rgba(1,159,232,0.4)_inset,0_5px_10px_rgba(0,0,0,0.25),0_-10px_10px_rgba(1,159,232,0.8)_inset]",
    "hover:shadow-[0_6px_20px_rgba(1,159,232,0.8)]"
  ),
};

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  size = "md",
  variant = "blue",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "relative text-white cursor-pointer flex items-center justify-center font-medium transition-all duration-300 active:scale-95",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
      {/* glossy lines */}
      <span className="absolute top-[6.5px] w-[85%] h-[2px] bg-[rgba(255,255,255,0.57)] blur-[1.5px] rounded-full pointer-events-none" />
      <span className="absolute bottom-[7px] w-[70%] h-[2px] bg-[rgba(255,255,255,0.27)] blur-[1px] rounded-full pointer-events-none" />
    </button>
  );
};

export default GlowButton;

// "use client";

// import React, { type ReactNode } from "react";
// import { cn } from "@/lib/utils";

// interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
//   size?: "sm" | "md" | "lg"; // optional size presets
// }

// const sizeClasses = {
//   sm: "px-4 py-4 text-sm rounded-full",
//   md: "px-9 py-4.5 text-lg rounded-2xl",
//   lg: "px-11 py-5.5 text-3xl font-medium rounded-3xl",
// };

// const GlowButton: React.FC<GlowButtonProps> = ({ children, size = "md", className, ...props }) => {
//   return (
//     <button
//       className={cn(
//         "relative text-white  cursor-pointer flex items-center justify-center font-medium",
//         "bg-gradient-to-b from-primary  to-primary-100 tdo-[#FF3300]",
//         "shadow-[0_10px_10px_rgba(255,180,120,0.6)_inset,0_5px_10px_rgba(5,5,5,0.25),0_-10px_10px_rgba(255,90,0,0.8)_inset]",
//         "transition-all duration-300 hover:shadow-[0_6px_20px_rgba(255,120,50,0.8)] active:scale-95",
//         sizeClasses[size],
//         className // ✅ allows manual override (w-[200px] h-[70px], etc.)
//       )}
//       {...props}
//     >
//       {children}
//       {/* top glossy line */}
//       <span className="absolute top-[6.5px] w-[85%] h-[2px] bg-[rgba(255,255,255,0.57)] blur-[1.5px] rounded-full pointer-events-none" />
//       {/* bottom glossy line */}
//       <span className="absolute bottom-[7px] w-[70%] h-[2px] bg-[rgba(255,255,255,0.27)] blur-[1px] rounded-full pointer-events-none" />
//     </button>
//   );
// };

// export default GlowButton;
