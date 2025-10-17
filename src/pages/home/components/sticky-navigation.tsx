import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { type FC } from "react";

interface StickyNavigationProps {
  onclick: () => void;
  isNavOpen: boolean;
}

const StickyNavigation: FC<StickyNavigationProps> = ({
  onclick,
  isNavOpen,
}) => {
  return (
    <>
      <div
        onClick={onclick}
        className={cn(
          " fixed z-80 space-y-2  right-4 group size-16 flex justify-center items-center flex-col ring hover:bg-black ease-linear duration-200 ring-gray-300/30 shadow-2xl bg-white w-sfull bottom-8  sp-4 rounded-full cursor-pointer",
          isNavOpen && "!bg-white"
        )}
      >
        {/* <Menu className={cn(!isNavOpen && "group-hover:stroke-white")} /> */}

        <div
          className={cn(
            "h-[3px] w-10   bg-black transition-all duration-300",
            !isNavOpen && "group-hover:bg-white ",
            isNavOpen && "relative rotate-50 top-2 "
          )}
        />
        <div
          className={cn(
            "h-[3px] w-10  bg-black transition-all duration-300",
            !isNavOpen && "group-hover:bg-white ",
            isNavOpen && "relative bottom-1 -rotate-50"
          )}
        />
      </div>
    </>
  );
};

export default StickyNavigation;
