import { type FC } from "react";
import SectionHeader from "./section-header";
// import GrowthToggle from "./growth-toggle";
import ContainerWrapper from "./container-wrapper";
import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";
import { Rocket } from "lucide-react";
import { Gem } from "lucide-react";

interface ServiceSectionProps {}
const rootImg = "/media/images/backgrounds";
const data = [
  {
    icon: <Gem size={50} strokeWidth={1.2} className="mb-4 !stroke-[#7e71e2]" />,
    id: "one",
    // #4d3fbd

    title: "Find New Paths to Profit",
    description:
      "We help you discover and build digital products or AI-driven solutions that open fresh growth channels.",
    imgSrc: `${rootImg}/new-path.svg`,
  },
  {
    icon: <Rocket size={50} strokeWidth={1.2} className="mb-4 !stroke-[#f5984a]" />,
    id: "two",
    title: "Increase ROI",
    imgSrc: `${rootImg}/roi-bg.png`,
    description:
      "Leverage AI-powered automation to make decisions faster, scale operations, and boost efficiency across your business.",
  },
  {
    icon: <TrendingUp size={50} strokeWidth={1.2} className="mb-4 !stroke-[#5186f0]" />,
    title: "Increase Conversions",
    description:
      "We refine your funnels, sharpen your messaging, and design layouts that turn visitors into loyal customers.",
    imgSrc: "",
  },
];
const ServiceSection: FC<ServiceSectionProps> = ({}) => {
  return (
    <>
      <ContainerWrapper>
        <div id="services" className="mt-8 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // start lower + hidden
            whileInView={{ opacity: 1, y: 0 }} // move up to normal position
            transition={{
              delay: 0.3, // seconds
              duration: 0.6, // smooth speed
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          >
            <SectionHeader
              tagline="Our Services"
              title="Solutions That Drive Results"
              // title="Designs That Drive Results"
              description="We help you stay ahead of the market."
              // description="What we can help you to achieve?"
            />
          </motion.div>

          {/* <FundingCardd/> */}

          <div className="grid mt-10 md:mt-20 gap-5 lg:gap-14   md:grid-cols-3">
            {data.map((x, index) => (
              <div
                style={{
                  backgroundImage: "url('/media/images/backgrounds/a-bg.avif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-fsit  overflow-hidden relative lg:w-[24rem] p-2 h-[18rem] sh-[2S7rem] shadow-lg overflow-hiddedn rounded-[2.5rem]"
              >
                <h3 className="text-9xl mb-8 -bottom-15 -right-1 font-semibold opacity-4 -s-3 absolute text-muted-foreground">
                  0{index + 1}
                </h3>

                <div className="mt-5 overflow-hidden relatve mb-3.5 px-7">
                  {/* title & des */}

                  {/* <h3 className="text-3xl mb-8  invisible text-primary">
                    0{index + 1}
                  </h3> */}
                  {x.icon}
                  <h3 className="font-semibold text-black text-xl md:text-[22px] mb-2">
                    {x.title}
                  </h3>
                  <p>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default ServiceSection;
