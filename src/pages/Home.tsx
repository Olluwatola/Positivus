import React from "react";
import Marquee from "react-fast-marquee";
import Services from "../components/Services.tsx";
import MakeThingsHappen from "../components/MakeThingsHappen.tsx";
import CaseStudies from "../components/CaseStudies.tsx";
import WorkingProcess from "../components/WorkingProcess.tsx";
import TeamSection from "../components/TeamSection.tsx";
import Testimonials from "../components/Testimonials.tsx";
import ContactUs from "../components/ContactUs.tsx";

const Hero: React.FC = () => {
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 py-10">
        <div className="text-left gap-y-10 order-1  flex flex-col h-full justify-between">
          <h1 className="">
            Navigating the
            <br /> digital landscape
            <br /> for success
          </h1>
          <p className="hidden md:block">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="button-primary hidden md:block self-start">
            Book a consultation
          </button>
        </div>
        <div className="flex  order-2 justify-center items-center">
          <img
            src="/src/assets/illustration.svg"
            alt="illustration"
            className=""
          />
        </div>
        <p className="md:hidden md:text-base text-sm block order-3">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="button-primary order-4 md:hidden block self-start">
          Book a consultation
        </button>
      </div>
      <div className="-mx-5 md:-mx-20 ">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {/* Repeat the logos to create a seamless effect */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center ">
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="-mx-5 md:-mx-20  xl:hidden block">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          className="overflow-hidden px-20"
        >
          {/* Repeat the logos to create a seamless effect */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center ">
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/netflix.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/zoom.svg"
                alt="logotypes 5"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/amazon.svg"
                alt="logotypes 1"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/dribble.svg"
                alt="logotypes 2"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/hubspot.svg"
                alt="logotypes 3"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
              <img
                src="/src/assets/notion.svg"
                alt="logotypes 4"
                className="grayscale h-12 mx-6 xl:pr-12 pr-6"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <Services />
      <MakeThingsHappen />
      <CaseStudies />
      <WorkingProcess />
      <TeamSection />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Hero;
