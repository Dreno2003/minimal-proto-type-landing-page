import { cn } from "@/lib/utils";
import type { FC } from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <>
      <img
        alt="logo"
        src="/media/images/brand/clanefy-logo.svg"
        className={cn("h-12 w-48", className)}
      />
    </>
  );
};

export default Logo;
