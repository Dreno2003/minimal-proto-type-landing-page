import type { FC } from "react";

interface CallToActionBgProps {}

const CallToActionBg: FC<CallToActionBgProps> = ({}) => {
  return (
    <>
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }}
    />
    {/* Your Content/Components */}
  
    {/* Your Content/Components */}
      {/* <div
        className="absolute rounded-4xl inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      /> */}
    </>
  );
};

export default CallToActionBg;
