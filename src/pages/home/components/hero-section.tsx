import { type FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMobile } from "@/hooks/use-mobile-hook";
// import RotatingText from "@/components/animated/rotating-text";
import ContainerWrapper from "@/components/container-wrapper";
import { BrandName } from "@/enums/brand-name.enum";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  const isMobile = useMobile();
  const [showHero, setShowHero] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  // Once the grid animation completes, we reveal Hero
  useEffect(() => {
    if (animationDone) {
      const timer = setTimeout(() => setShowHero(true), 150); // small delay for smoothness
      return () => clearTimeout(timer);
    }
  }, [animationDone]);

  function renderVerticalGrid() {
    return (
      <div className="grid relative md:grid-cols-4">
        {Array.from({ length: isMobile ? 1 : 4 }).map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              delay: 0.3 * idx,
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => {
              // Only trigger when the last one finishes
              if (idx === (isMobile ? 0 : 3)) {
                setAnimationDone(true);
              }
            }}
            className="h-screen w-full bg-black"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen  overflow-hidden">
      <ContainerWrapper>
        <header className="fixed top-4 -z-1 text-white bg-black/90 ring px-2 py-1">
          {BrandName.COMPANY}.
        </header>
      </ContainerWrapper>
      <AnimatePresence mode="wait">
        {!showHero ? (
          <>{renderVerticalGrid()}</>
        ) : (
          <ContainerWrapper>
            <motion.section
              key="hero"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                // duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-ch-[89svh]  mt-32"
            >
              {/* <RotatingText /> */}
              <div>
                <h3 className="uppercase lg:text-6xl xl:text-8xl font-semibold md:font-black text-header-foreground">
                  An impact first{" "}
                </h3>
                <h3 className="uppercase lg:text-6xl xl:text-8xl font-semibold md:font-black text-header-foreground ">
                  Design partner.
                </h3>
                <p className="text-lg md:text-xl md:max-w-xl mt-4">
                  We empower progressive brands to create lasting impact through
                  strategic innovation and digital transformation.
                </p>
              </div>

              <div className="mt-10">
                <video
                  autoPlay={true}
                  playsInline
                  loop
                  className="rounded"
                  src="https://cdn.sanity.io/files/ai4peca6/production/aed13d71b6418f9f726983e6d62f0e2da8c7d0a5.mp4"
                />
              </div>
            </motion.section>
          </ContainerWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;

// import type { FC } from "react";
// import { motion } from "motion/react";
// import { useMobile } from "@/hooks/use-mobile-hook";
// interface HeroSectionProps {}

// const HeroSection: FC<HeroSectionProps> = ({}) => {
//   const isMobile = useMobile();

//   function renderVerticalGrid() {
//     return (
//       <div className="grid relative md:grid-cols-4  ">
//         {Array.from({ length: isMobile ? 1 : 4 }).map((_, idx) => (
//           <motion.div
//             exit={{ y: "-100%" }}
//             transition={{
//               delay: 0.2 * idx,
//               duration: 0.8,
//             }}
//             onAnimationComplete={() => {

//             }}
//             className="h-screen w-full bg-black"
//             key={idx}
//           />
//         ))}
//       </div>
//     );
//   }
//   return (
//     <>
//       <motion.section
//         initial={{ opacity: 0, y: 80 }} // 👈 start below with opacity 0
//         animate={{ opacity: 1, y: 0 }} // 👈 animate to visible and in place
//         transition={{
//           duration: 0.9,
//           ease: [0.22, 1, 0.36, 1], // smooth “ease-out” motion
//         }}
//         className="mt-4  relative min-h-[59svh] md:min-h-[89svh]  px-6 spt-20"
//       >
//         <div>
//           <h3 className="relative w-max md:text-4xl after:content-[' '] after:h-12 after:w-full after:bg-black after:absolute after:-bottom-14 after:left-0  lg:text-8xl xl:text-9xl text-black font-semibold uppercase">
//             ALChemy Creative
//           </h3>
//           {/* <div classxName="h-10 sw-[63.5%] bg-black" /> */}
//         </div>

//         <div className="absolute bottom-4 right-8">
//           <h3 className="md:text-4xl lg:text-8xl xl:text-9xl text-black font-semibold uppercase">
//             Studio
//           </h3>
//           {/* <div className="h-10 w-[63.5%] bg-black" /> */}
//         </div>
//       </motion.section>
//     </>
//   );
// };

// export default HeroSection;
