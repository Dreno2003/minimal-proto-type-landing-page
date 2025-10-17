import AnimatedRevealWrapper from "@/components/animated/animated-reveal-wrapper";
import ContainerWrapper from "@/components/container-wrapper";
import { BrandName } from "@/enums/brand-name.enum";
import { type FC } from "react";

interface BlogSectionProps {}

const BlogSection: FC<BlogSectionProps> = ({}) => {
  return (
    <>
      <AnimatedRevealWrapper>
        <ContainerWrapper>
          <header>
            <h2 className="uppercase lg:text-6xl xl:text-8xl font-semibold md:font-black text-header-foreground">
              Our thoughts <br />
              through writing.
            </h2>

            <p className="text-lg md:text-xl md:max-w-xl mt-4">
              Discover more about our initiatives, expert insights, and the
              latest developments from{" "}
              <span className="capitalize">{BrandName.COMPANY}</span>.
            </p>
          </header>

          <main>
            <ResponsiveCards />
          </main>
        </ContainerWrapper>
      </AnimatedRevealWrapper>
    </>
  );
};

export default BlogSection;

const ResponsiveCards = () => {
  const cardsData = [
    {
      image: "/media/images/new-works/blog.png",
      title: "A blueprint for story-driven impact reporting",
      description:
        "Designing an impact report for an evolving brand in the sustainable investment space.",
      category: "Customer Experience",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6753439d3da31c3534ed228c/67ab4f8dd25d35b27b7d7494_image-2.jpg",
      title: "AI haven't a clue?",
      description:
        "Our CCO & co-founder, Abb-d Taiyo, reveals how creatives are navigating the AI era.",
      category: "Future Trends & Insights",
    },
    {
      image:
        "https://cdn.sanity.io/images/ai4peca6/production/72e1385944f0e65fe44a2e48f801fb9dbac179ae-2048x2048.png?fm=webp&max-w=1440&q=75&w=480",
      title: "How to tell timeless stories",
      description:
        "Timeless narrative patterns that consistently create genuine connections.",
      category: "Marketing & Storytelling",
    },
    {
      image:
        "https://cdn.prod.website-files.com/6753439d3da31c3534ed228c/67fb8f39b148406866a4bd0b_image.webp",
      title: "Racing against crises when every hour counts",
      description:
        "How strategic brand transformation enabled Instant Aid to secure UN partnerships.",
      category: "Creative Innovation",
    },
    {
      image:
        "https://cdn.sanity.io/images/ai4peca6/production/7a7d05faa5d87d8b2869b96e91b3547bf9923dcc-1600x1600.png?fm=webp&max-w=1440&q=75&w=480",
      title: "A New Chapter",
      description:
        "How we're making high-value design accessible to progressive brands.",
      category: "Business & Strategy",
    },
    {
      image: "/media/images/new-works/blog.png",
      title: "Driftime launches Foundational services",
      description:
        "Transform Magazine features Driftime’s accessible design approach for progressive organizations.",
      category: "Business & Strategy",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="group rounded-xs overflow-hidden group">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-58 group-hover:scale-105 ease-linear transition-all object-cover group-hover:opacity-90  duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{card.description}</p>
              <p className="text-xs font-medium border  w-max p-2 text-gray-600 mt-4">
                {card.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
