import React, { useState } from "react";

interface WorkingProcessBlockProps {
  index: string;
  topic: string;
  children: string;
}

const WorkingProcessBlock: React.FC<WorkingProcessBlockProps> = ({
  index,
  topic,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={` lg:border-2 border ${
        isActive ? "bg-accent" : "bg-secondary"
      } border-black lg:rounded-3xl rounded-4xl lg:p-10 p-4 y-shadow transition-all duration-300 ease-in-out`}
    >
      <div className="flex  flex-row justify-between">
        <div className="flex flex-row space-x-4 items-center">
          <h2 className="lg:block hidden">{index}</h2> <span className="font-bold lg:block hidden text-2xl">{topic}</span>
          <h3 className="block lg:hidden">{index}</h3> <span className="font-bold block lg:hidden text-xl">{topic}</span>
        </div>
        <div
          className=" flex justify-between items-center shrink-0 cursor-pointer transition-transform duration-200 "
          onClick={toggleActive}
        >
          {isActive ? (
            <img
              src="/src/assets/minus-icon.svg"
              alt="minus"
              className="transition-opacity lg:h-fit h-9  duration-200"
            />
          ) : (
            <img
              src="/src/assets/plus-icon.svg"
              alt="plus"
              className="transition-opacity lg:h-fit h-9  duration-200"
            />
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all  duration-300 ease-in-out ${
          isActive ? "max-h-96 opacity-100 lg:mt-10 mt-5" : "max-h-0 opacity-0"
        }`}
      >
        <hr className="lg:mb-10 mb-5" />
        <div className="text-left">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
export default WorkingProcessBlock;
