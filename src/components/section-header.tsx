// import React,  from 'react';
import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface SectionHeaderProps {
  tagline?: string;
  title: string;
  description?: string | ReactNode;
  containerClass?: string;
  descriptionClass?: string;
  textGradientType?: "dark" | "light";
}

const SectionHeader: FC<SectionHeaderProps> = ({
  tagline,
  title,
  description,
  containerClass,
  descriptionClass,
  textGradientType = "dark",
}) => {
  return (
    <>
      <header
        className={cn(
          "text-center max-w-[400px] md:max-w-[900px] mx-auto",
          containerClass
        )}
      >
        {tagline && (
          <h3 className="bg-white mb-4 md:mb-6 lg:mb-10 shadow-md shadow-gray-300/60 mx-auto w-max p-6 py-2.5 rounded-full text-lg lg:text-xl ">
            {tagline}
          </h3>
        )}

        <h3
          style={{
            // backgroundImage: "linear-gradient(to right, #d9d9d9 0%, #4d4d4d 100%)",

            backgroundImage:
              textGradientType === "light"
                ? "linear-gradient(to right, rgb(255 255 255) 0%, rgb(241 241 241) 100%)"
                : "linear-gradient(to right, rgb(65 64 64) 0%, rgb(141, 141, 141) 100%)",
            // backgroundImage:
            //   "radial-gradient(43% 228.297% at 50% 60.6452%, rgb(0, 0, 0) 0%, rgb(94, 94, 94) 100%)",
            WebkitBackgroundClip: "text", // for Safari/Chrome
            backgroundClip: "text", // for other browsers
            color: "transparent",
          }}
          className="text-4xl lg:leading-28 lg:text-[104px] font-bold "
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-3 md:mt-4 lg:mt-6 md:text-[25px] text-2xl  font-medium",
            descriptionClass
          )}
        >
          {description}
        </p>
      </header>
    </>
  );
};

export default SectionHeader;
