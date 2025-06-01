import React from "react";
import ServicesBlock from "./ServicesBlock";
import SectionHeader from "./SectionHeader";

const Service: React.FC = () => {
  return (
    <>
      <SectionHeader
        title="Services"
        subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 grid-rows-6 gap-4 gap-y-10">
        <ServicesBlock
          highlightColor="bg-accent"
          asset="/src/assets/SM_illustration.svg"
          bgFormatting="bg-secondary"
          arrowbg="bg-black"
        >
          Search engine+optimization
        </ServicesBlock>
        <ServicesBlock
          highlightColor="bg-white"
          asset="/src/assets/PPC.svg"
          bgFormatting="bg-accent"
          arrowbg="bg-black"
        >
          Pay-per-click+advertising
        </ServicesBlock>
        <ServicesBlock
          highlightColor="bg-white"
          asset="/src/assets/SMM.svg"
          bgFormatting="bg-primary"
          arrowbg="bg-white"
          isBlackArrow={true}
        >
          Social Media+Management
        </ServicesBlock>
        <ServicesBlock
          highlightColor="bg-accent"
          asset="/src/assets/EM_illustration.svg"
          bgFormatting="bg-secondary"
          arrowbg="bg-black"
        >
          Email+Marketing
        </ServicesBlock>
        <ServicesBlock
          highlightColor="bg-white"
          asset="/src/assets/cc.svg"
          bgFormatting="bg-accent"
          arrowbg="bg-black"
        >
          Content+Creation
        </ServicesBlock>
        <ServicesBlock
          highlightColor="bg-accent"
          asset="/src/assets/aat.svg"
          bgFormatting="bg-primary"
          arrowbg="bg-white"
          isBlackArrow={true}
        >
          Analytics and+Tracking
        </ServicesBlock>
      </div>
    </>
  );
};

export default Service;
