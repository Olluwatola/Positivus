import React from "react";

interface TeamBlockInterface {
  imageSrc: string;
  name: string;
  role: string;
  about: string;
}

const TeamBlock: React.FC<TeamBlockInterface> = ({
  imageSrc,
  name,
  role,
  about,
}) => {
  return (
    <div className="divide-solid divide-y-2 space-y-2.5 y-shadow p-8 rounded-3xl border-2 border-black">
      <div className="flex flex-row text-left pb-5 space-x-2.5">
        <div className="flex-shrink-0">
          <img className="" src={imageSrc} alt="avatar" />
        </div>
        <div className="flex flex-col justify-between flex-grow w-full">
          <img
            className="self-end"
            src="/src/assets/social-icon.svg"
            alt="social-icon"
          />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p>{role}</p>
          </div>
        </div>
      </div>
      <div className="text-left">
        <p>{about}</p>
      </div>
    </div>
  );
};

export default TeamBlock;
