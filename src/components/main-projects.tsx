"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FollowerPointerCard } from "./following-pointer";

const MainProjectsSection = () => {
  const ref = useRef(null);
  const imgRoot = "/media/images/selected-projects";
  // Track the scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  const cards = [
    {
      src: `${imgRoot}/patra.png`,
      // src: `${imgRoot}/patra-main.png`,
      scattered: { rotate: -20, y: 50, x: 200 },
      aligned: { rotate: 0, y: 0, x: 0 },
    },
    {
      src: `${imgRoot}/waall-the-man.png`,
      scattered: { rotate: 0, y: 80, x: 0 },
      aligned: { rotate: 0, y: 0, x: 0 },
    },
    {
      src: `${imgRoot}/image 5.png`,
      scattered: { rotate: 20, y: 50, x: -200 },
      aligned: { rotate: 0, y: 0, x: 0 },
    },
  ];

  return (
    <div>
      {/* mobile */}

      <section
        ref={ref}
        className="flex  relative lg:hidden justify-center items-center py-20 overflow-hidden"
      >
        <div className="relative flex flex-col gap-8 md:gap-10">
          {cards.map((card, idx) => {

            return (
              <motion.div
                className={cn(
                  "bg-white p-2 shadow-lg md:scale-105 rounded-[2.5rem]"
                )}
                key={idx}
              >
                <motion.img
                  onClick={() => {
                    if (idx === 1) {
                      window.open("https://waall.me/", "_blank");
                    }
                  }}
                  src={card.src}
                  alt={`Card ${idx + 1}`}
                  className={cn(
                    "w-[335px] max-h-[s500px] object-center aspect-square h-[800px] rounded-[2.5rem]",
                    idx === 1 && ""
                  )}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* desktop */}
      <section
        ref={ref}
        className="hidden relative lg:flex justify-center items-center py-20 overflow-hidden"
      >
        <FollowerPointerCard
          title={<TitleComponent title={"dd"} avatar={""} />}
        >
          <div className="relative flex gap-8 md:gap-10">
            {cards.map((card, idx) => {
              // Animate from scattered → aligned as scroll progresses from 0 → 1
              const rotate = useTransform(
                scrollYProgress,
                [0, 1],
                [card.scattered.rotate, card.aligned.rotate]
              );

              const x = useTransform(
                scrollYProgress,
                [0, 1],
                [card.scattered.x, card.aligned.x]
              );

              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [card.scattered.y, card.aligned.y]
              );

              //   const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

              return (
                <motion.div
                  onClick={() => {
                    if (idx === 1) {
                      window.open("https://waall.me/", "_blank");
                    }
                  }}
                  className={cn(
                    "bg-white p-2 shadow-lg md:scale-105 rounded-2xl md:rounded-4xl lg:rounded-[2.5rem]"
                    // idx === 2 && "-z-10"
                  )}
                  key={idx}
                  style={{ rotate, x, y }}
                >
                  <motion.img
                    src={card.src}
                    alt={`Card ${idx + 1}`}
                    className="w-[380px] h-[370px] lg:rounded-6xl  object-fidll md:rounded-4xl rounded-2xl "
                    // style={{ rotate, x, y, opacity }}
                  />
                </motion.div>
              );
            })}
          </div>
        </FollowerPointerCard>
      </section>
    </div>
  );
};

export default MainProjectsSection;

const TitleComponent = ({}: { title?: string; avatar?: string }) => (
  <div className="flex items-center space-x-2">
    <p>See Project</p>
  </div>
);

// "use client";

// import { motion, useScroll, useTransform } from "motion/react";
// import { useRef } from "react";

// const MainProjectsSection = () => {
//   const ref = useRef(null);

//   // Track scroll progress for this section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//     // 0 -> section just enters viewport
//     // 0.5 -> section centered
//     // 1 -> section leaving viewport
//   });

//   const cards = [
//     {
//       src: "https://framerusercontent.com/images/XjF3k1hQXgZH78eF5N5y8jLp2D4.jpg?width=900&height=900",
//       scattered: { rotate: -20, y: 50, x: 200 },
//       aligned: { rotate: 0, y: 0, x: 0 },
//     },
//     {
//       src: "https://framerusercontent.com/images/XjF3k1hQXgZH78eF5N5y8jLp2D4.jpg?width=900&height=900",
//       scattered: { rotate: 0, y: 80, x: 0 },
//       aligned: { rotate: 0, y: 0, x: 0 },
//     },
//     {
//       src: "https://framerusercontent.com/images/XjF3k1hQXgZH78eF5N5y8jLp2D4.jpg?width=900&height=900",
//       scattered: { rotate: 20, y: 50, x: -200 },
//       aligned: { rotate: 0, y: 0, x: 0 },
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="relative flex justify-center items-center py-20 overflow-hidden"
//     >
//       <div className="relative flex gap-6">
//         {cards.map((card, idx) => {
//           const rotate = useTransform(
//             scrollYProgress,
//             [0, 0.5, 1],
//             [card.scattered.rotate, card.aligned.rotate, card.scattered.rotate]
//           );

//           const x = useTransform(
//             scrollYProgress,
//             [0, 0.5, 1],
//             [card.scattered.x, card.aligned.x, card.scattered.x]
//           );

//           const y = useTransform(
//             scrollYProgress,
//             [0, 0.5, 1],
//             [card.scattered.y, card.aligned.y, card.scattered.y]
//           );

//           const opacity = useTransform(
//             scrollYProgress,
//             [0, 0.5, 1],
//             [0.6, 1, 0.6]
//           );

//           return (
//             <motion.img
//               key={idx}
//               src={card.src}
//               alt={`Card ${idx + 1}`}
//               className="w-[320px] rounded-2xl shadow-lg"
//               style={{ rotate, x, y, opacity }}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default MainProjectsSection;
