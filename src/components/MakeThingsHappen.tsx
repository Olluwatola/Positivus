import React from "react";

const MakeThingsHappen: React.FC = () => {
  return (
    <div className="relative my-10">
      {/* First div (with higher z-index) */}
      <div className="hidden xl:grid grid-cols-2 z-20 relative">
        {/* Left column empty */}
        <div></div>

        {/* Right column with image */}
        <div className="flex justify-center items-center">
          <img
            src="/src/assets/starsIll.svg"
            alt="Stars illustration"
            className=""
          />
        </div>
      </div>

      {/* Second div (with lower z-index) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 bg-secondary rounded-3xl p-10 py-15 xl:absolute xl:top-5 xl:left-0 xl:w-full z-10">
        {/* Left column with text content */}
        <div className="text-left space-y-5 ">
          <h3 className="font-bold">Let's make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="button-primary self-start">
            Get your free proposal
          </button>
        </div>

        {/* Right column empty */}
        <div></div>
      </div>
    </div>
  );
};

export default MakeThingsHappen;