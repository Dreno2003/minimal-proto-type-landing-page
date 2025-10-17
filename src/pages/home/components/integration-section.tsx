import ContainerWrapper from "@/components/container-wrapper";
import SectionHeader from "@/components/section-header";
import { motion } from "motion/react";
import type { FC } from "react";

interface IntegrationSectionProps {}

const IntegrationSection: FC<IntegrationSectionProps> = ({}) => {
  return (
    <>
      <div
        className="bg-muted/20 py-10 md:py-14 mt-9 md:mt-0"
      >
        <ContainerWrapper>
          <div className="flex flex-col  md:flex-row gap-y-10 md:gap-0 items-center justify-between">
            <div className="flex-1">
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
                <SectionHeader
                  descriptionClass="font-normal"
                  containerClass=" text-left"
                  tagline="Integrations"
                  description="Disconnected tools stall growth. Patra AI transforms unstructured feedback into actionable insights, embedding seamlessly into  workflows and tools – so every channel turns into sales with minimal effort."
                  title={"Your tools workflows. Smarter With AI."}
                />
              </motion.div>
            </div>
            <motion.img
              initial={{ opacity: 0, y: 50 }} // start lower + hidden
              whileInView={{ opacity: 1, y: 0 }} // move up to normal position
              transition={{
                delay: 0.3, // seconds
                duration: 0.6, // smooth speed
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              src="/media/images/integrations.svg"
              className="size-96 flex-1"
            />
          </div>
        </ContainerWrapper>
      </div>
    </>
  );
};

export default IntegrationSection;
