import type { FC, ReactNode } from "react";
import { motion } from "motion/react";

interface SlideUpAnimationProps {
  children: ReactNode;
}

const SlideUpAnimation: FC<SlideUpAnimationProps> = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // start lower + hidden
        whileInView={{ opacity: 1, y: 0 }} // move up to normal position
        transition={{
          delay: 0.2, // seconds
          duration: 0.6, // smooth speed
          ease: "easeOut",
        }}
        viewport={{ once: false }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SlideUpAnimation;
