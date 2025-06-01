import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary xl:p-10 p-5 py-10 xl:-xm-0 -mx-5 -mb-20 xl:rounded-t-3xl space-y-5 mt-10">
      <div className="flex xl:flex-row flex-col xl:justify-between items-center xl:space-y-0 space-y-7 ">
        <img
          src="/src/assets/LightLogo.svg"
          className="xl:h-fit h-7 "
          alt="logo"
        />

        <div className="flex xl:flex-row flex-col xl:space-x-10 xl:space-y-0 space-y-5 items-center ">
          <a href="#" className="text-white xl:underline">
            About us
          </a>
          <a href="#" className="text-white xl:underline">
            Services
          </a>
          <a href="#" className="text-white xl:underline">
            Use cases
          </a>
          <a href="#" className="text-white xl:underline">
            Pricing
          </a>
          <a href="#" className="text-white xl:underline">
            Blog
          </a>
        </div>

        <div className="hidden xl:block">
          <div className="flex flex-row items-center space-x-5">
            <a href="#">
              <img src="/src/assets/linkedin.svg" alt="linkedin Icon" />
            </a>
            <a href="#">
              <img src="/src/assets/fb.svg" alt="facebook Icon" />
            </a>
            <a href="#">
              <img src="/src/assets/twitter.svg" alt="twitter icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="divide-y-2 divide-white space-y-10">
        <div className="flex xl:flex-row flex-col pb-10 xl:space-y-0 space-y-5 justify-between ">
          <div className="xl:text-left space-y-5 text-center">
            <p className="text-primary   ">
              <span className="text-highlight rounded-md">Contact us:</span>
            </p>
            <p className="text-white"> Email: info@positivus.com</p>
            <p className="text-white"> Phone: 555-567-8901</p>
            <p className="text-white">
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className=" bg-fadedhigh xl:w-3/5 rounded-2xl spy flex items-center justify-center">
            <form className="flex xl:flex-row flex-col w-full xl:px-10 px-7  rounded-2xl xl:space-y-0 space-y-5 xl:py-0 py-10 space-x-5 ">
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className="border pl-5 border-white bg-transparent rounded-md p-2 "
              />
              <button type="submit" className="button-accent h-15">
                Subscribe to news
              </button>
            </form>
          </div>
          <div className="flex block xl:hidden justify-center">
            <div className="  flex flex-row   space-x-5">
              <a href="#" className="">
                <img src="/src/assets/linkedin.svg" alt="linkedin Icon" />
              </a>
              <a href="#" className="">
                <img src="/src/assets/fb.svg" alt="facebook Icon" />
              </a>
              <a href="#" className="">
                <img src="/src/assets/twitter.svg" alt="twitter icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col text-white xl:text-left text-center xl:space-y-0 space-y-5 xl:space-x-10">
          <p>2023 Postivus. All Rights Reserved.</p>
          <a className="underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
