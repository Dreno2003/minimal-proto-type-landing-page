import { useRef, type FC, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
interface AnimatedRevealWrapperProps {
  children: ReactNode;
  isAnimateOnce?: boolean;
}

/**
 *
 * @param children reactNode
 * @param isAnimateOnce flag that determines if the content animate once  or not default is false
 * @returns
 */

const AnimatedRevealWrapper: FC<AnimatedRevealWrapperProps> = ({
  children,
  isAnimateOnce = false,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: isAnimateOnce,  margin: "-200px" });

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0  , y:90}}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={
          {
            // delay:1
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }
        }
      >
        {children}
      </motion.section>
    </>
  );
};

export default AnimatedRevealWrapper;
