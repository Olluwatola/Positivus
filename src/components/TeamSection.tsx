import React from "react";
import SectionHeader from "./SectionHeader";
import TeamBlock from "./TeamBlock.tsx";

const TeamSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="Team"
        subtitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-2  gap-7 ">
        <TeamBlock
          imageSrc="/src/assets/picture_avatar.svg"
          name="John Smith"
          role="CEO and Founder"
          about="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />
        <TeamBlock
          imageSrc="/src/assets/picture_avatar.svg"
          name="Jane Doe"
          role="Director of Operations"
          about="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />
        <TeamBlock
          imageSrc="/src/assets/picture_avatar.svg"
          name="Michael Brown"
          role="Senior SEO Specialist"
          about="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />
        <TeamBlock
          imageSrc="/src/assets/picture_avatar.svg"
          name="Emily Johnson"
          role="PPC Manager"
          about="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        />
        <TeamBlock
          imageSrc="/src/assets/picture_avatar.svg"
          name="Brian Williams"
          role="Social Media Specialist"
          about="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        />
        <TeamBlock
          imageSrc="/src/assets/picture_avatar.svg"
          name="Sarah Kim"
          role="Content Creator"
          about="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
        />
      </div>
      <button className="button-primary md:self-end mt-10">See all team</button>
    </div>
  );
};

export default TeamSection;
