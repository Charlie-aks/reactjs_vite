import React from "react";
import { Link } from "react-router-dom";
const Introduce = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="h-auto flex flex-col items-center justify-center py-16 md:py-36"
    >
      <div className="w-full max-w-[1000px] text-center space-y-6 px-4">
        <h2 className="font-karla text-2xl md:text-4xl text-gray-900 px-2 md:px-4">
          Even the all-powerful Pointing has no control about the blind texts.
        </h2>

        <p className="font-karla max-w-[820px] mx-auto text-gray-500 text-opacity-55 text-base md:text-xl leading-relaxed md:leading-loose px-2 md:px-4">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life. One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>

        <p className="text-[#C89F94] hover:text-coffee transition-all underline underline-offset-8 text-base md:text-xl mt-8 md:mt-10">
        <Link to="/about" className="link-hover">Read the full Story</Link>
        </p>
      </div>
    </div>
  );
};

export default Introduce;
