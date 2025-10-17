import ContainerWrapper from "@/components/container-wrapper";
import React from "react";


const CtaSection: React.FC = () => {
  return (
    <ContainerWrapper>
      <section
        style={{
          backgroundImage: "url('/media/images/new-works/bg.png')", // ← replace with your image path
        }}
        className=" relative bg-cover bg-center bg-no-repeat text-white px-6"
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-7xl relative z-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-5xl text-gray-50 sm:text-5xl font-bold leading-[2.8rem] mb-6">
              INVESTING IN <br />
              THE FUTURE. <br /> START TODAY.
            </h2>

            <p className="text-lg text-gray-300 mb-10">
              Our work tends to resonate most with people who are ready to think
              thoughtfully about where they're headed. If you're interested in
              building something meaningful, let’s grab a coffee and chat!
            </p>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase">
                Contact
              </h3>
              <p className="text-white text-base mb-1">
                Partnerships & New Business
              </p>
              <a
                href="mailto:newbusiness@driftime.com"
                className="text-white underline hover:text-gray-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                newbusinessrealm.com ↗
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <h3 className="ml-1.5 absolute top-[45%] font-bold text-5xl md:text-8xl flex">
              CREATivEs
              <div className="size-5 bg-black/50" />
            </h3>
            <img
              src="/media/images/new-works/creativity.png" // Replace with your actual image path
              alt=""
              className="w-full h-auto  object-cover"
            />
          </div>
        </div>
      </section>
      <section
        className="hidden relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          //   image: "/media/images/new-works/blog.png",

          backgroundImage: "url('/media/images/new-works/bg.png')", // ← replace with your image path
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center px-6 py-24 md:py-32">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Ready to create measurable impact?
          </h2>
          <p className="text-base md:text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
            Let’s collaborate to build scalable digital solutions that drive
            engagement, growth, and real-world change.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-neutral-900 font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition">
              Start a Project
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </ContainerWrapper>
  );
};

export default CtaSection;
