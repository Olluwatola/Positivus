import React from "react";

// interface HeaderProps {
//   // Define your props here if needed
// }

const Header: React.FC = () => {
  return (
    <header className="flex space-x-5 flex-row justify-between">
      <div className="flex  items-center">
        <img src="/src/assets/poslogo.svg" alt="Logo" className="h-5 lg:h-9" />
      </div>
      <div className="hidden lg:block">
        <nav className="flex justify-end items-center space-x-8">
          
          <a
            href="#"
            className="text-neutral-darkGrayishBlue hover:text-primary-brightRed"
          >
            About us
          </a>
          <a
            href="#"
            className="text-neutral-darkGrayishBlue hover:text-primary-brightRed"
          >
            Services
          </a>
          <a
            href="#"
            className="text-neutral-darkGrayishBlue hover:text-primary-brightRed"
          >
            Use Cases
          </a>
          <a
            href="#"
            className="text-neutral-darkGrayishBlue hover:text-primary-brightRed"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-neutral-darkGrayishBlue hover:text-primary-brightRed"
          >
            Blog
          </a>
          <button className="button-outline hover:bg-black hover:text-white transition-all">
            Request a quote
          </button>
        </nav>
      </div>
      <img src="/src/assets/hamburger.svg" alt="hamburger-icon" className="lg:hidden block h-10"/>
    </header>
  );
};

export default Header;
