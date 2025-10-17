import { type FC } from "react";
import { Icons } from "./icons";
import { Marquee } from "./animated/marquee";
import ContainerWrapper from "./container-wrapper";

interface LogoClousMarqueePropsSection {}

const LogoCloudMarqueeSection: FC<LogoClousMarqueePropsSection> = ({}) => {
  const logos = [
    <img src="/media/images/firm-logos/logo-full.svg" width={125} className="grayscale-100" alt="logo"/>,
    <img src="/media/images/firm-logos/waall-logo.svg" width={140} className="grayscale-100" alt="logo"/>,
    <img src="/media/images/firm-logos/texr.png" width={135} className="grayscale-100" alt="logo"/>,
    <Icons.logo1 />,
    <Icons.logo3 />,
    <Icons.logo2 />,
    <Icons.logo1 />,
    <Icons.logo2 />,
    <Icons.logo3 />,
    <Icons.logo1 />,
  ];

  return (
    <ContainerWrapper containerClass="mt-6 md:-mt-6 md:smt-12 lg:smt-20 relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background/90 via-background/40 to-transparent z-10" />

      {/* Marquee */}
      <Marquee>
        {logos.map((logo, idx) => (
          <span key={idx} className="opacity-80 ml-12">{logo}</span>
        ))}
      </Marquee>

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background/90 via-background/40 to-transparent z-10" />
    </ContainerWrapper>
  );
};

export default LogoCloudMarqueeSection;