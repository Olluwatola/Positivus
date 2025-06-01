import React from "react";

interface BubbleProps {
  content: { content: string; name: string; role: string };
}

const Bubble: React.FC<BubbleProps> = ({ content }) => {
  return (
    <div>
      <div className="relative">
        <img src="/src/assets/bubble.svg" alt="bubble" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p className="text-white text-center">{content.content}</p>
        </div>
      </div>
      <br />
      <div className="text-left px-20">
        <h4 className="text-accent">{content.name}</h4>
        <p className="text-white">{content.role}</p>
      </div>
    </div>
  );
};

export default Bubble;
