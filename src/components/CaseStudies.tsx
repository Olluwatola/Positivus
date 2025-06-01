import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SectionHeader from "./SectionHeader";

const CaseStudies: React.FC = () => {
  const caseStudiesData = [
    {
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  const splideOptions = {
    type: "slide",
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,
    padding: "2rem",
    gap: "0.1rem",
    autoplay: false,
    pauseOnHover: true,
    resetProgress: false,
  };

  return (
    <>
      <div>
        <div className="">
          <SectionHeader
            title="Case Studies"
            subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          />
        </div>

        {/* Desktop Grid Layout - Hidden on mobile */}
        <div className="p-10 rounded-3xl bg-primary md:block hidden">
          <div className="grid text-left text-white grid-cols-3 divide-x divide-white">
            {caseStudiesData.map((caseStudy, index) => (
              <div key={index} className="px-6 py-5">
                <p>{caseStudy.description}</p>
                <br />
                <div className="justify-self-start">
                  <a className="flex flex-row space-x-2">
                    <span className="text-accent">Learn more</span>
                    <img src="/src/assets/arrow-green.svg" alt="arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Layout - Hidden on desktop */}
        <div className="md:hidden block -mx-5">
          <Splide options={splideOptions}>
  {caseStudiesData.map((caseStudy, index) => (
    <SplideSlide key={index}>
      <div className="flex h-full items-stretch">
        <div className="flex flex-col justify-between p-12 mr-4 rounded-3xl bg-primary w-full">
          <div className="text-left text-white">
            <p>{caseStudy.description}</p>
          </div>
          <div className="mt-4 self-start">
            <a className="flex flex-row space-x-2 items-center self-start">
              <span className="text-accent">Learn more</span>
              <img src="/src/assets/arrow-green.svg" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </SplideSlide>
  ))}
</Splide>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
