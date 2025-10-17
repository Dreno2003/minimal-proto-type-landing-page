import AnimatedRevealWrapper from "@/components/animated/animated-reveal-wrapper";
import ContainerWrapper from "@/components/container-wrapper";
import { type FC } from "react";

interface SelectedWorksProps {}

const SelectedWorks: FC<SelectedWorksProps> = ({}) => {
  return (
    <>
      <AnimatedRevealWrapper>
        <ContainerWrapper>
          <header>
            <h2 className="uppercase lg:text-6xl xl:text-8xl font-semibold md:font-black text-header-foreground">
              Selected <br />
              completed projects
            </h2>

            <p className="text-lg md:text-xl md:max-w-xl mt-4">
              We support organisations through creative work that amplifies
              their reach and expedite their results.
            </p>
          </header>

          <main>
            <ProjectShowcase />
          </main>
        </ContainerWrapper>
      </AnimatedRevealWrapper>
    </>
  );
};

export default SelectedWorks;

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    image:
      "https://cdn.sanity.io/images/ai4peca6/production/98ab320adcddecf2c464218873fdd9a03dac6783-3024x1900.png?fm=webp&max-w=1440&q=75&w=1284",
    title: "The Finnish Institute of UK & Ireland",
    description:
      "Transforming how the Finnish Institute of UK & Ireland connect communities across borders.",
    category: "Arts & Heritage",
  },
  {
    id: 2,
    image: "/media/images/new-works/kingdom.png",
    title: "Kingdom Minded",
    description:
      "Building a strong sense of moderate fashion for the younger folks across the world.",
    category: "Nonprofit & Social Causes",
  },
  {
    id: 3,
    image: "/media/images/new-works/dre.png",
    title: "Kingdom Minded",
    description:
      "Building a strong sense of moderate fashion for the younger folks across the world.",
    category: "Nonprofit & Social Causes",
  },

  {
    id: 4,
    image: "/media/images/new-works/cosmos.png",
    title: "Kingdom Minded",
    description:
      "Building a strong sense of moderate fashion for the younger folks across the world.",
    category: "Nonprofit & Social Causes",
  },
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" group cursor-pointer rounded-xs overflow-hidden   transition ease-linear  duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full  transition ease-linear  duration-200 group-hover:grayscale-0 grayscale-100 h-[300px] md:h-[400px] object-cover"
            />

            <div className=" py-4 md:py-6.5">
              <h3 className=" text-lg md:text-xl text-neutral-900 mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-600 text-sm md:text-base mb-4">
                {project.description}
              </p>

              {/* <span className="inline-block text-xs md:text-sm border border-neutral-300 rounded px-3 py-1 text-neutral-700">
                {project.category}
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
