import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SectionHeader from "./SectionHeader";
import Bubble from "./Bubble";
// Assuming you have these SVGs in your assets folder

// Mock imports for the SVGs (unchanged)

const Testimonials = () => {
  const testimonials = [
    {
      content:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Sarah Mitchell",
      role: "CEO, TechFlow Solutions",
    },
    {
      content:
        "Positivus transformed our digital marketing strategy. Their data-driven approach and creative solutions helped us reach new audiences and increase conversion rates by 40%. The ROI we've seen on our marketing spend has been remarkable.",
      name: "Michael Rodriguez",
      role: "Marketing Director, GrowthCorp",
    },
    {
      content:
        "The analysis and insights provided by Positivus helped us understand our market position and competitive landscape. Their strategic recommendations were spot-on and the implementation flawless. Our online presence has never been stronger.",
      name: "Emily Chen",
      role: "Founder, InnovateLab",
    },
    {
      content:
        "Working with the Positivus team has been a game-changer for our business. Their SEO expertise got us ranking for keywords we never thought possible. The increase in quality leads has directly impacted our bottom line.",
      name: "David Thompson",
      role: "VP of Sales, MetricPro",
    },
    {
      content:
        "Positivus isn't just a vendor but a true partner in our growth. They take the time to understand our business goals and create customized solutions. Their transparent reporting makes it easy to see the value they bring month after month.",
      name: "Lisa Park",
      role: "CMO, ScaleUp Ventures",
    },
  ];

  const splideRef = useRef(null);
  const mobSplideRef = useRef(null)
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleMove = (splide) => {
    setCurrentIndex(splide.index);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <SectionHeader
          title="Testimonials"
          subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <div className="mt-12 space-y-30 xl:block hidden bg-primary py-20 rounded-3xl">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              padding: "25%", // Side padding (adjust as needed)
              gap: "2rem",
              perPage: 1,
              perMove: 1,
              pagination: false,
              arrows: false,
              speed: 800,
              easing: "ease",
              focus: "center",
              trimSpace: false,
              updateOnMove: true,
              classes: {
                slide: "splide__slide px-4",
              },
            }}
            onMove={handleMove}
            aria-label="Testimonials"
          >
            {testimonials.map((content, index) => (
              <SplideSlide key={index}>
                <div className="transition-all duration-300">
                  <Bubble content={content} />
                </div>
              </SplideSlide>
            ))}
          </Splide>

          <div className="flex items-center  space-x-30 justify-center mt-20 gap-6">
            <button
              onClick={() => splideRef.current.splide.go("<")}
              className=""
              aria-label="Previous testimonial"
            >
              <img
                className=" scale-x-[-1] w-2/3 h-2/3"
                src="/src/assets/arrow-right.svg"
                alt="arrow-right"
              />
            </button>

            <div className="flex gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => splideRef.current.splide.go(index)}
                  className="focus:outline-none"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === currentIndex ? (
                    <img
                      src="/src/assets/star-inactive.svg"
                      className=""
                      alt="star-active"
                    />
                  ) : (
                    <img
                      className="w-4/5 h-4/5"
                      src="/src/assets/star-active.svg"
                      alt="star-inactive"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => splideRef.current.splide.go(">")}
              className=""
              aria-label="Next testimonial"
            >
              <img
                src="/src/assets/arrow-right.svg"
                className=" w-4/5 h-4/5"
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
        <div className="mt-12 xl:hidden block flex flex-col space-y-20  bg-primary py-20 rounded-3xl">
          <div>
            <Splide
              ref={mobSplideRef}
              options={{
                type: "loop",
                padding: 0, // Remove padding for mobile
                gap: 0, // Remove gap for mobile
                perPage: 1,
                perMove: 1,
                pagination: false,
                arrows: false,
                speed: 800,
                easing: "ease",
                focus: "center",
                trimSpace: false,
                updateOnMove: true,
                classes: {
                  slide: "splide__slide px-4",
                },
              }}
              onMove={handleMove}
              aria-label="Testimonials"
            >
              {testimonials.map((content, index) => (
                <SplideSlide key={index}>
                  <div className="transition-all duration-300 px-6 py-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <div className="text-white text-center mb-8">
                        <p className="text-lg leading-relaxed italic">
                          "{content.content}"
                        </p>
                      </div>

                      <div className="text-right">
                        <h4 className="text-accent text-xl font-semibold mb-1">
                          {content.name}
                        </h4>
                        <p className="text-white/80 text-sm font-medium">
                          {content.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            <div className="flex items-center justify-center  gap-6">
              <button
                onClick={() => mobSplideRef.current.splide.go("<")}
                aria-label="Previous testimonial"
              >
                <img
                  className="scale-x-[-1] w-2/3 h-2/3"
                  src="/src/assets/arrow-right.svg"
                  alt="arrow-right"
                />
              </button>

              <div className="flex gap-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => mobSplideRef.current.splide.go(index)}
                    className="focus:outline-none"
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    {index === currentIndex ? (
                      <img
                        src="/src/assets/star-inactive.svg"
                        alt="star-active"
                      />
                    ) : (
                      <img
                        className="w-4/5 h-4/5"
                        src="/src/assets/star-active.svg"
                        alt="star-inactive"
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => mobSplideRef.current.splide.go(">")}
                aria-label="Next testimonial"
              >
                <img
                  src="/src/assets/arrow-right.svg"
                  className="w-4/5 h-4/5"
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
