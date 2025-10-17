import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface StepImagePops {
  src: string;
  step: 1 | 2 | 3 | 4 | 5;
}

export const StepImage = ({ src, step }: StepImagePops) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const rootPinImgSrc = "/media/images/backgrounds";

  function renderPin() {
    if (step === 1 || step === 5) {
      return (
        <img
          alt="pin"
          width={160}
          className="absolute left-[51%] -translate-1/3 "
          src={`${rootPinImgSrc}/blue-pin.avif`}
        />
      );
    } else if (step === 2 || step === 4) {
      return (
        <img
          alt="pin"
          width={160}
          className="absolute left-[51%] -translate-1/3 "
          src={`${rootPinImgSrc}/orange-pin.avif`}
        />
      );
    } else {
      return (
        <img
          alt="pin"
          width={160}
          className="absolute left-[51%] -translate-1/3 "
          src={`${rootPinImgSrc}/purple-pin.avif`}
        />
      );
    }
  }

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: [0.8, 1.1, 1], opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {renderPin()}
      <motion.img
        ref={ref}
        decoding="auto"
        loading="lazy"
        width={380}
        height={380}
        src={src}
        alt=""
        style={{ display: "block", borderRadius: "40px" }}
      />
    </motion.div>
  );
};
