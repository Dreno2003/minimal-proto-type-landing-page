import { useEffect, useState, type FC } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
  animate,
  // type Variants,
} from "motion/react";

// whe the content fihsi loading animate it out
interface IAmimatedLoaderProps {
  onAnimationComplete: (value: boolean) => void;
}

const AmimatedLoader: FC<IAmimatedLoaderProps> = ({ onAnimationComplete }) => {
  const count = useMotionValue(0);
  const [countDown, setCountDown] = useState(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useMotionValueEvent(rounded, "change", (latestVal) => {
    setCountDown(latestVal);
  });

  const digits = countDown.toString().padStart(3, "").split("");

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 3,
      ease: "linear",
      onComplete: () => {
        onAnimationComplete(true);
      },
    });
    return () => controls.stop();
  }, []);

  // const cardVariants: Variants = {
  //   offscreen: {
  //     y: 300,
  //   },
  //   onscreen: {
  //     y: 50,
  //     rotate: -10,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8,
  //     },
  //   },
  // };
  return (
    <>
      <AnimatePresence>
        <div>
          {
            <div className="min-h-screen bg-black">
              {
                <p className="absolute right-3 bottom-4 items-center gap-x-1 text-2xl md:text-3xl text-white lg:text-4xl font-bold flex ">
                  <div className="flex gap-1">
                    {digits.map((digit, idx) => (
                      <div
                        key={idx}
                        className="relative w-8 h-12 bg-white/10 rounded overflow-hidden"
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={digit}
                            initial={{ y: 10, opacity: 0, rotateX: -90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            exit={{ y: -10, opacity: 0, rotateX: 90 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white"
                          >
                            {digit}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </p>
              }
              {/* {renderVerticalGrid()} */}
            </div>
          }
        </div>
      </AnimatePresence>
    </>
  );
};

export default AmimatedLoader;

// import React, { useEffect, useState, type FC } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useTransform,
//   useMotionValueEvent,
//   animate,
// } from "motion/react";
// import { Loader2Icon } from "lucide-react";
// import { useMobile } from "@/hooks/use-mobile-hook";
// import { cn } from "@/lib/utils";

// interface IAmimatedLoaderProps {
//   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   isLoading?: boolean;
// }

// const AmimatedLoader: FC<IAmimatedLoaderProps> = ({
//   isLoading = true,
//   setIsLoading,
// }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const [countDown, setCountDown] = useState(0);
//   const [showGrid, setShowGrid] = useState(true);
//   const isMobile = useMobile();

//   useMotionValueEvent(rounded, "change", (latestVal) => {
//     setCountDown(latestVal);
//   });

//   const digits = countDown.toString().padStart(3, "0").split("");

//   // Step 1 — Animate 0 → 100
//   useEffect(() => {
//     const controls = animate(count, 100, {
//       duration: 3,
//       ease: "linear",
//       onComplete: () => {
//         // After count completes, trigger grid exit
//         setShowGrid(false);
//       },
//     });

//     return () => controls.stop();
//   }, []);

//   // Step 2 — After exit animation, remove loader
//   function handleGridExitComplete() {
//     // Wait a bit for the animation to finish smoothly
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 300);
//   }

//   function renderVerticalGrid() {
//     return (
//       <motion.div
//         key="grid"
//         className="grid relative md:grid-cols-4"
//         initial={{ y: 0 }}
//         animate={{ y: 0 }}
//         exit={{ y: "-100%" }}
//         transition={{ duration: 0.8 }}
//         onAnimationComplete={handleGridExitComplete}
//       >
//         {Array.from({ length: isMobile ? 1 : 4 }).map((_, idx) => (
//           <motion.div
//             key={idx}
//             className="h-screen w-full bg-black"
//             initial={{ y: 0 }}
//             animate={{ y: 0 }}
//             exit={{ y: "-100%" }}
//             transition={{
//               delay: 0.1 * idx,
//               duration: 0.8,
//             }}
//           />
//         ))}
//       </motion.div>
//     );
//   }

//   return (
//     <AnimatePresence mode="wait">
//       {isLoading && (
//         <motion.div
//           key="loader"
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
//         >
//           <AnimatePresence mode="sync">
//             {showGrid && renderVerticalGrid()}
//           </AnimatePresence>

//           {/* Counter */}
//           <p className="absolute right-4 bottom-5 flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
//             <div className="flex gap-1">
//               {digits.map((digit, idx) => (
//                 <div
//                   key={idx}
//                   className="relative w-8 h-12 bg-white/10 rounded overflow-hidden"
//                 >
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={digit}
//                       initial={{ y: 10, opacity: 0, rotateX: -90 }}
//                       animate={{ y: 0, opacity: 1, rotateX: 0 }}
//                       exit={{ y: -10, opacity: 0, rotateX: 90 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
//                     >
//                       {digit}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>

//             <Loader2Icon
//               className={cn(
//                 countDown === 100 && "opacity-0",
//                 "animate-spin duration-500 size-9 stroke-white"
//               )}
//             />
//           </p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default AmimatedLoader;
