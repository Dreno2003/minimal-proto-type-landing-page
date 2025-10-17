import type React from "react";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Settings, Zap, BarChart3 } from "lucide-react";
import ContainerWrapper from "@/components/container-wrapper";
import { cn } from "@/lib/utils";

import SectionHeader from "@/components/section-header";

interface Step {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const steps: Step[] = [
  {
    id: "launch",
    title: "Customer Visit to Sales, Fully Automated",
    description:
      "From first visit to final sale, Patra chats, records follows up, engages, and closes-so you don't have to. Why do the work when AI can do it for you?",
    icon: <Zap className="w-5 h-5" />,
    image: "/media/images/visit.png",
  },
  {
    id: "triage",
    image: "/media/images/visit.png",
    title: "Intelligent Support Understanding",
    description:
      "Our AI doesn't just respond - it reads the room, Every chat & feedback is tagged with sentiment, urgency, and relationship level, giving you instant context to prioritize and personalize your next move.",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    id: "automated",
    title: "Automated Workflow Triggers",
    description:
      "Never miss a beat - Patra AI launches tasks, and workflows exactly when they're needed, effortlessly, without you lifting a finger.",
    icon: <BarChart3 className="w-5 h-5" />,
    image: "/media/images/automated_workflow_triggers.svg",
  },

  {
    id: "insights",
    title: "Analytics & Insights",
    description:
      "Forget dashboards you never check. Our AI watches your sales, user behavior, and campaigns - alerting you to what matters, in plain language.",
    icon: <BarChart3 className="w-5 h-5" />,
    image: "/media/images/analytics_&_insights.png",
  },
];

export default function FeatureSection() {
  const [activeStep, setActiveStep] = useState("launch");

  const currentStep = steps.find((step) => step.id === activeStep) || steps[0];

  return (
    <div id="features" className="min-h-screen pt-14 md:mt-20">
      <ContainerWrapper>
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
            title="Patra does the most"
            description="While you remain the face of your business."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start lower + hidden
          whileInView={{ opacity: 1, y: 0 }} // move up to normal position
          transition={{
            delay: 0.3, // seconds
            duration: 0.6, // smooth speed
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className="flex "
        >
          {/* Sidebar */}
          <div className="flex-none w-full sm:w-[400px]   py-6 md:p-6">
            <div className="space-y-4">
              {steps.map((step, _index) => (
                <div
                  key={step.id}
                  className={cn(
                    "border-l-[2.2px] pl-4 p-3 space-y-2",
                    step.id === currentStep.id && "border-primary"
                  )}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3
                            className={cn(
                              "font-semibold text-lg text-muted-foreground",
                              step.id === currentStep.id && "text-primary"
                            )}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accordion content */}
                  <AnimatePresence>
                    {activeStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="space-y-2 text-[14px]"
                      >
                        <p>{step.description}</p>

                        <div>
                          <div className="md:hidden block space-y-6">
                            {/* Mock Interface */}
                            <div className="rounded-lg p-4 borders-2 ">
                              <img
                                src={currentStep.image || "/placeholder.svg"}
                                alt={`${currentStep.title} interface`}
                                className={cn(
                                  "w-full   rounded-lg",

                                  currentStep.id === "insights" &&
                                    " scale-125 ",
                                  currentStep.id === "automated" &&
                                    "border-2 border-dashed border-border"
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="hidden md:block flex-1 p-6">
            <div className="h-full">
              <div className="p-6">
                {/* Header */}

                {/* Content Area */}
                <div className="space-y-6">
                  {/* Mock Interface */}
                  <div
                    className={cn(
                      "bg-musted/30 flex justify-center rounded-lg ps-4 py-6 bordesr-2 borders-dashed bordser-border",
                      currentStep.id === "automated" &&
                        "border-none bg-transparent p-0",
                      currentStep.id === "insights" &&
                        "bg-transparent border-none p-0"
                    )}
                  >
                    <img
                      // height={200}
                      src={currentStep.image || "/placeholder.svg"}
                      alt={`${currentStep.title} interface`}
                      className={cn(
                        "w-sfull h-96 object-covesr rounded-lg",
                        currentStep.id === "automated" &&
                          "border-2 border-dashed border-border w-fsull  h-[26rem]",
                        currentStep.id === "insights" &&
                          "h-[27rem] w-[29rem] scale-105 lg:scale-125 "
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </ContainerWrapper>
    </div>
  );
}
