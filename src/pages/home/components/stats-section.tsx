import ContainerWrapper from "@/components/container-wrapper";
import React from "react";
import AnimatedRevealWrapper from "@/components/animated/animated-reveal-wrapper";

const stats = [
  {
    title: "3.4 MILLION ACTIONS",
    description:
      "Our partnership with Only One supported their ocean conservation initiatives, contributing to engagement growth from 819,754 to 1.22 million people taking action, a 48% increase in meaningful community participation.",
  },
  {
    title: "$4.4 MILLION ALLOCATED",
    description:
      "Working alongside CC Facility, we helped develop their digital platform to translate blended finance into practical investment opportunities. This resulted in $4.4 million allocated across 11 replicable projects.",
  },
  {
    title: "$7.8 MILLION REVENUE",
    description:
      "Our collaboration with shuddl supported brand and platform development that achieved 62% operational efficiency improvements and 75% emissions reduction. This foundation contributed to their $7.8 million first-year revenue through organic growth.",
  },
];

const ImpactStats: React.FC = () => {
  return (
    <ContainerWrapper>
      <AnimatedRevealWrapper >
        <section className=" text-neutral-900  py-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-lg font-medium text-neutral-700 mb-12">
              Achieving measurable impact with global client partners...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-300 divide-y md:divide-y-0 md:divide-x divide-neutral-300">
              {stats.map((item, idx) => (
                <div key={idx} className="p-8 md:p-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-header-foreground">
                    {item.title}
                  </h2>
                  <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedRevealWrapper>
    </ContainerWrapper>
  );
};

export default ImpactStats;
