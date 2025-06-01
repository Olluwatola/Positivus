import React from "react";

interface ServicesBlockProps {
  bgFormatting: string;
  children: React.ReactNode;
  asset: string;
  arrowbg: string;
  highlightColor: string; // Optional prop for highlight color
  isBlackArrow?: boolean; // Optional prop to determine arrow color
}

const ServicesBlock: React.FC<ServicesBlockProps> = ({
  bgFormatting,
  arrowbg,
  children,
  asset,
  highlightColor,
  isBlackArrow = false,
}) => {
  // Split the title by "+" character for the two lines

  return (
    <div className={`border-2  ${bgFormatting} border-black rounded-3xl gap-4 p-10 shadow-[0_4px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:block`}>
      <div className=" block lg:hidden text-left space-y-0 font-semibold leading-9">
        {React.Children.map(children, (child, index) => {
          // If the child is a string or a number
          if (typeof child === "string" || typeof child === "number") {
            const childStr = String(child);

            // Check if the string contains the "+" sign
            if (childStr.includes("+")) {
              const parts = childStr.split("+");

              return (
                <h3 key={index}>
                  <span
                    className={`${highlightColor} px-2 py-0.5 inline rounded mr-1`}
                  >
                    {parts[0]}
                  </span>
                  <br />
                  <span
                    className={`${highlightColor} px-2 py-0.5 inline rounded`}
                  >
                    {parts[1]}
                  </span>
                </h3>
              );
            } else {
              // No "+" sign, render the whole string with the highlight
              return (
                <h3 key={index}>
                  <span
                    className={`${highlightColor} px-2 py-0.5 inline rounded`}
                  >
                    {child}
                  </span>
                </h3>
              );
            }
          }
          // If it's already a complex element, return it as is
          return child;
        })}
      </div>
      <div
        className={`grid grid-cols-2 flex-grow h-full lg:flex-grow-0 `}
      >
        <div className="justify-self-start flex flex-col justify-between rounded-3xl">
          <div className="lg:block  hidden text-left space-y-0 font-semibold leading-10">
            {React.Children.map(children, (child, index) => {
              // If the child is a string or a number
              if (typeof child === "string" || typeof child === "number") {
                const childStr = String(child);

                // Check if the string contains the "+" sign
                if (childStr.includes("+")) {
                  const parts = childStr.split("+");

                  return (
                    <h3 key={index}>
                      <span
                        className={`${highlightColor} px-2 py-0.5 inline rounded mr-1`}
                      >
                        {parts[0]}
                      </span>
                      <br />
                      <span
                        className={`${highlightColor} px-2 py-0.5 inline rounded`}
                      >
                        {parts[1]}
                      </span>
                    </h3>
                  );
                } else {
                  // No "+" sign, render the whole string with the highlight
                  return (
                    <h3 key={index}>
                      <span
                        className={`${highlightColor} px-2 py-0.5 inline rounded`}
                      >
                        {child}
                      </span>
                    </h3>
                  );
                }
              }
              // If it's already a complex element, return it as is
              return child;
            })}
          </div>
          <div></div>
          <div className="flex flex-row self-end  lg:self-auto">
            <a className="flex items-center space-x-2" href="#">
              <div
                className={`rounded-full border-2 p-1 flex items-center justify-center ${arrowbg}`}
              >
                <img
                  src={
                    isBlackArrow
                      ? "/src/assets/black-arrow.svg"
                      : "/src/assets/arrow-green.svg"
                  }
                  alt="arrow"

                />
              </div>
              <span
                className={`${
                  isBlackArrow ? "text-white" : ""
                } lg:block hidden`}
              >
                Learn more
              </span>
            </a>
          </div>
        </div>
        <div className="justify-self-end flex items-center self-end lg:self-auto">
          <img src={asset} alt="service-asset" />
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;