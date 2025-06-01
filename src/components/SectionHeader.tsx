import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-normal space-y-6 md:space-y-0 md:space-x-10 my-10">
      <h2 className="text-highlight md:text-left text-center  rounded-lg">{title}</h2>
      <p className="md:w-1/2 md:text-left text-center ">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
