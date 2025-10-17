import type { FC } from "react";

interface HeroGradientProps {}

const HeroGradient: FC<HeroGradientProps> = ({}) => {
  return (
    <>
      <img
        src="/media/images/bg_gradient.svg"
        className="opacity-10 size-[50rem] top-64 -left-32 absolute"
      />
      <img
        src="/media/images/bg_gradient.svg"
        className="opacity-15 size-[45rem] top-80 left-56 absolute"
      />
      <img
        src="/media/images/bg_gradient.svg"
        className="opacity-15 size-[50rem] top-80 -right-32 absolute"
      />
    </>
  );
};

export default HeroGradient;
