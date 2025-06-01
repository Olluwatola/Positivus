import React from "react";
import SectionHeader from "./SectionHeader";
import WorkingProcessBlock from "./WorkingProcessBlock.tsx";

const WorkingProcess: React.FC = () => {
  return (
    <div className="md:-space-y-5 space-y-5">
      <div className="md:block hidden">
        <SectionHeader
          title="Our Working Process"
          subtitle="Step-by-Step Guide to Achieving Your Business Goals"
        />
      </div>
      <div className="md:hidden text-center block flex flex-col space-y-5 ">
        <div>
        <span className="text-highlight text-4xl font-semibold md:text-left text-center  rounded-lg">
          Our Working
        </span>
        <br />
        <span className="text-highlight text-4xl font-semibold md:text-left text-center  rounded-lg">
          Process
        </span>
        </div>
        <p className="md:w-1/2 md:text-left text-center ">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className="space-y-7">
        <WorkingProcessBlock index="01" topic="Consultation">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </WorkingProcessBlock>
        <WorkingProcessBlock
          index="02"
          topic="Research and Stategy Development"
        >
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </WorkingProcessBlock>
        <WorkingProcessBlock index="03" topic="Implementation">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </WorkingProcessBlock>
        <WorkingProcessBlock index="04" topic="Monitoring and Optimization">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </WorkingProcessBlock>
        <WorkingProcessBlock index="05" topic="Reporting and Communication">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </WorkingProcessBlock>
        <WorkingProcessBlock index="06" topic="Continual Improvement">
          During the initial consultation, we will discuss your business goals
          and objectives, target audience, and current marketing efforts. This
          will allow us to understand your needs and tailor our services to best
          fit your requirements.
        </WorkingProcessBlock>
      </div>
    </div>
  );
};

export default WorkingProcess;
