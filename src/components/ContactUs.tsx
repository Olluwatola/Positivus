import React from "react";
import SectionHeader from "./SectionHeader";

const ContactUs = () => {
  return (
    <>
      <SectionHeader
        title="Contact Us"
        subtitle="Connect with us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="flex text-left rounded-4xl bg-secondary flex-row justify-between">
        <div className="xl:w-2/3 w-full flex flex-col justify-center">
          <form action="" className="space-y-4 md:px-20 px-5 py-5">
            <div>
              <div className="flex items-center  md:justify-start justify-center space-x-4">
                <label className="flex flex-row items-center  ">
                  <input
                    type="radio"
                    name="decision"
                    value="say-hi"
                    className="mr-2 w-5  accent-accent "
                  />
                  Say Hi
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="decision"
                    value="get-quote"
                    className="mr-2 w-5 accent-accent "
                  />
                  Get a Quote
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                className="mt-1 h-10 block w-full border border-black rounded-md p-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className="mt-1  block w-full border border-black rounded-md p-2 h-10"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={4}
                className="mt-1 block bg-white w-full border border-black rounded-md p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="button-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        <div
          className="overflow-hidden xl:block hidden flex-1 py-8 pl-40 "
          style={{ }}
        >
          <div style={{ width: "200%" }}>
            <img
              src="/src/assets/star-semi-circle.svg"
              alt="star-semi-circle"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
