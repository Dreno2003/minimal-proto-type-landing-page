import ContainerWrapper from "@/components/container-wrapper";
// import { Minus, PlusCircleIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/section-header";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
// const faqs = [
//   {
//     id: "1",
//     question: "What exactly is Patra AI?",
//     answer:
//       "Patra AI is your AI-powered operations partner. It runs sales, customer support, and marketing tasks for online solopreneurs — so you can focus on growing your business, not managing day-to-day chaos.",
//   },
//   {
//     id: "2",
//     question: "Who is Patra AI built for?",
//     answer:
//       "Patra is designed for solopreneurs, creators, and freelancers who sell online — whether that’s physical products, digital downloads, courses, or services.",
//   },
//   {
//     id: "3",
//     question: "How does Patra AI help me make more sales?",
//     answer:
//       "Patra automatically recovers abandoned carts, follows up with leads, and sends smart reminders. It keeps your sales funnel moving without you lifting a finger.",
//   },
//   {
//     id: "4",
//     question: "Can Patra AI handle customer support?",
//     answer:
//       "Yes! Patra provides instant, AI-powered support across chat, email, and social. It answers FAQs, manages tickets, and keeps conversations professional — while still letting you step in when needed.",
//   },
//   {
//     id: "5",
//     question: "Do I need technical skills to use Patra AI?",
//     answer:
//       "Not at all. Patra is designed to be plug-and-play. You connect your store or service, choose what you want Patra to handle, and it runs in the background like a teammate.",
//   },
// ];


const faqs = [
  {
    id: "1",
    question: "What kind of businesses do you work with?",
    answer:
      "We partner with startups, growing companies, and established enterprises across industries, helping them scale through consulting, software, and intelligent automation.",
  },
  {
    id: "2",
    question: "How do you start a new project?",
    answer:
      "Every project begins with a discovery session where we learn about your goals, challenges, and timelines. From there, we create a clear roadmap with deliverables and milestones.",
  },
  {
    id: "3",
    question: "Do you offer support after launch?",
    answer:
      "Yes, we provide ongoing support and optimization after launch. Our goal is to ensure your systems keep running smoothly and continue delivering measurable results.",
  },
  {
    id: "4",
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the project’s complexity. Smaller projects can be completed within a few weeks, while larger systems or full-scale automation solutions may take several months.",
  },
  {
    id: "5",
    question: "What makes your agency different?",
    answer:
      "We bridge strategy and execution  combining consulting, design, and technology. We don’t just build products; we create systems that drive growth and efficiency.",
  },
];

export default function FAQSection() {
  return (
    <div id="faq" className=" mt-20 ">
      <ContainerWrapper containerClass="">
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start lower + hidden
          whileInView={{ opacity: 1, y: 0 }} // move up to normal position
          transition={{
            delay: 0.2, // seconds
            duration: 0.6, // smooth speed
            ease: "easeOut",
          }}
          viewport={{ once: false }}
          className=" "
        >
          <SectionHeader
            containerClass=" "
            title="FAQ"
            description="Didn't find your answer? feel free to reach out."
          />
        </motion.div>
        <Accordion
          type="single"
          collapsible
          className="w-full mt-8 md:mt-10 lg:mt-14 xl:mt-16"
          defaultValue={"1"}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              className={cn(
                "bg-white px-3 md:px-4 shadow-md py-1.5 shadow-gray-300/60 rounded-md md:rounded-lg intersect:motion-preset-slide-up mb-2 md:mb-2.5 ",
                faqs[0] && `motion-delay-0`, // 0, 100, 200, 300...
                faqs[1] && `motion-delay-75`, // 0, 100, 200, 300...
                faqs[2] && `motion-delay-100`, // 0, 100, 200, 300...
                faqs[3] && `motion-delay-200`, // 0, 100, 200, 300...
                faqs[4] && `motion-delay-300` // 0, 100, 200, 300...
                // faqs[5] && `motion-delay-700` // 0, 100, 200, 300...
                // `motion-delay-${index * 100}` // 0, 100, 200, 300...
              )}
              key={index}
              value={faq.id}
            >
              <AccordionTrigger className="hover:u font-semibold text-hero text-lg md:text-xl lg:text-2xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-[17px] text-balance">
                <p className=" max-w-4xl">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ContainerWrapper>
    </div>
  );
}
