import SectionHeader from "@/components/section-header";
import { motion } from "motion/react";
import React from "react";
import { Marquee } from "@/components/animated/marquee";
// import { cn } from "@/lib/utils";
const rootImgSrc = "/media/images/testimonials";
export const testimonialsData = [
  {
    name: "Amelia Jessy",
    role: "Brand Strategist, Atelier Studio",
    image: `${rootImgSrc}/ame.png`,
    quote:
      "Our experience with Clanefy has been nothing short of amazing. They helped us refine our brand story and designed a stunning website that actually converts.",
  },
  {
    name: "Tola Bennett",
    role: "CEO, Northend Studio",
    image: `${rootImgSrc}/tola.png`,
    quote:
      "Working with Clanefy was fantastic. They unserstood  our vision, and dedication were evident throughout the project.",
  },

  {
    name: "Eze Anozie",
    role: "Founder, CraftLine Agency",
    image: `${rootImgSrc}/eze.png`,
    quote:
      "I experienced a truly outstanding collaboration. The process was seamless and we had 20x conversions.",
  },
  {
    name: "Tunde Martins",
    role: "Marketing Director, Verve Labs",
    image: `${rootImgSrc}/tude.png`,
    quote:
      "We had our online presence revamped. The new visuals, website layout, and ad campaigns brought in more qualified leads than we’d seen in a year.",
  },

  {
    name: "Sofia Martins",
    image: `${rootImgSrc}/sofia.png`,
    role: "Founder, HopeBridge Foundation",
    quote:
      "We needed a team that could capture the heart of our mission and tell our story authentically. Clanefy did exactly that",
  },
];

export default function TestimonialSection() {
  // const cards = data.map((card, index) => (
  //   <Card key={card.image} card={card} index={index} />
  // ));

  return (
    <div
      id={"testimonials"}
      className="w-full h-full bg-white py-20 md:pb-32 md:rounded-[6rem] rounded-4xl "
    >
      <SectionHeader
        tagline="Winning Stories"
        title={"Don't Just take our words for it."}
        description="Feedback from statisfied clients. See how our work drives revenue."
      />

      <div className="mt-10 md:mt-20">
        <Marquee>
          {testimonialsData.map((item, index) => (
            <ClassicTestimonialCard
              key={index}
              {...item}
              rotate={[-2, 2, -1.5, 1.5, -2.5][index % 5]} // slight rotation per card
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

interface ClassicTestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rotate?: number; // optional — each card can have a unique initial tilt
}

const ClassicTestimonialCard: React.FC<ClassicTestimonialCardProps> = ({
  name,
  role,
  image,
  quote,
  rotate = -2,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ rotate: 0, y: -4 }}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      }}
      viewport={{ once: true }}
      className="relative group max-w-md w-full bg-[#f8f8f8cb]  rounded-2xl p-10 py-8 shadow-sm hover:shadow-xl transition-all duration-500 origin-center"
    >
      {/* Quote Text */}
      <p className="text-[1.25rem] leading-relaxed text-neutral-800 font-[450] tracking-tight italisc font-sersif relative z-10">
        “{quote}”
      </p>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-neutral-300 my-4"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="h-12 w-12 rounded-full object-cover border border-neutral-300"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-neutral-200 group-hover:ring-neutral-400 transition-all"></div>
        </div>
        <div>
          <h3 className="text-neutral-900 font-medium">{name}</h3>
          <p className="text-neutral-500 text-sm">{role}</p>
        </div>
      </div>

      {/* Subtle Hover Accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

// interface ClassicTestimonialCardProps {
//   name: string;
//   role: string;
//   image: string;
//   quote: string;
// }

// const TestimonialCard: React.FC<ClassicTestimonialCardProps> = ({
//   name,
//   role,
//   image,
//   quote,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -8 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="relative group max-w-md w-full bg-[#f8f8f8] border border-neutral-200 rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-500"
//     >
//       {/* Quote Text */}
//       <p className="text-[1.25rem] leading-relaxed text-neutral-800 font-[450] tracking-tight itsalic font-sserif relative z-10">
//         “{quote}”
//       </p>

//       {/* Divider */}
//       <div className="w-12 h-[1px] bg-neutral-300 my-6"></div>

//       {/* User Info */}
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <img
//             src={image}
//             alt={name}
//             className="h-12 w-12 rounded-full object-cover border border-neutral-300"
//           />
//           <div className="absolute inset-0 rounded-full ring-1 ring-neutral-200 group-hover:ring-neutral-400 transition-all"></div>
//         </div>
//         <div>
//           <h3 className="text-neutral-900 font-medium">{name}</h3>
//           <p className="text-neutral-500 text-sm">{role}</p>
//         </div>
//       </div>

//       {/* Subtle Hover Accent */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//     </motion.div>
//   );
// };

// interface TestimonialCardProps {
//   name: string;
//   role: string;
//   image: string;
//   quote: string;
// }

// const TestimonialCard: React.FC<TestimonialCardProps> = ({
//   name,
//   role,
//   image,
//   quote,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       viewport={{ once: true }}
//       className="relative mx-auto w-full max-w-md rounded-2xl bg-white/80 shadow-lg ring-1 ring-black/5 backdrop-blur-sm p-6 flex flex-col gap-4"
//     >
//       {/* Quote mark accent */}
//       <span className="absolute top-4 left-4 text-5xl text-black/10 leading-none select-none">
//         “
//       </span>

//       {/* Quote */}
//       <p className="text-gray-700 text-base md:text-lg leading-relaxed pl-6 pr-2 mt-4">
//         {quote}
//       </p>

//       {/* Line divider */}
//       <div className="h-px w-16 bg-gray-300 mt-4 ml-6"></div>

//       {/* User info */}
//       <div className="flex items-center gap-3 mt-2 pl-6">
//         <img
//           src={image}
//           alt={name}
//           className="h-12 w-12 rounded-full object-cover border border-gray-200"
//         />
//         <div>
//           <h4 className="font-semibold text-gray-900">{name}</h4>
//           <p className="text-sm text-gray-500">{role}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
