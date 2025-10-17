import type { FC } from "react";

interface HeroBackgroundProps {}

const HeroBackground: FC<HeroBackgroundProps> = ({}) => {
  return (
    <>
      <div>
        {/* <div className="min-h-screen w-full bgx-[#f8fafc] relative"> */}
        {/* Top Fade Grid Background */}
        <div
          className="absolute opacity-20 inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        {/* Your Content/Components */}
      </div>
    </>
  );
};

export default HeroBackground;
