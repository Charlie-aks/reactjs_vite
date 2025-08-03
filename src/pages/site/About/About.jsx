import React from "react";
import Introduction from "./Introduction";

const aboutSections = [
  {
    title: "Overlaid the jeepers uselessly much excluding everyday life.",
    text: `It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
    Even the all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life. 
    One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    imgSrc: "/images/about2.jpg",
  },
  {
    title: "Overlaid the jeepers uselessly much excluding everyday life.",
    text: `It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
    Even the all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life. 
    One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    imgSrc: "/images/about3.jpg",
  },
];

const About = () => {
  return (
    <div>
      {/* Section: Tiêu đề About */}
      <div className="w-full bg-gray-100 h-auto min-h-[600px] relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-black text-opacity-50 text-3xl md:text-[42px] text-center tracking-wide pt-24">
            About
          </div>
          <p className="font-Karla text-center text-gray-700 text-base md:text-xl tracking-wider my-4 max-w-[90%] md:max-w-[650px] mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
      </div>

      {/* Section: Ảnh chính giữa */}
      <div className="flex justify-center -mt-36 z-20 relative px-4">
        <img
          src="/images/about1.jpg"
          alt="About image"
          className="w-full max-w-[1150px] h-[200px] md:h-[400px] object-cover object-center shadow-md"
        />
      </div>

      {/* Section: Introduction Text */}
      <div data-aos="fade-up" data-aos-duration="1000" className="px-4">
        <div className="flex items-center justify-center w-full mt-28 mb-4">
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
          <div className="px-4 text-gray-500 text-opacity-50 uppercase text-sm md:text-base font-medium text-center tracking-widest">
            Introductions
          </div>
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
        </div>
        <div className="text-black text-opacity-50 text-2xl md:text-[32px] text-center tracking-wide max-w-[90%] md:max-w-[700px] mx-auto my-7">
          Overlaid the jeepers uselessly much excluding everyday life.
        </div>
        <p className="text-center text-gray-700 text-base md:text-xl tracking-wider max-w-[90%] md:max-w-[650px] mx-auto leading-relaxed">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life. One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
      </div>

      {/* Section: Văn bản + ảnh (dùng mảng) */}
      {aboutSections.map((section, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-6xl mx-auto mt-20 mb-24 px-4"
        >
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center md:items-start gap-12`}
          >
            <div className="md:w-1/2 w-full pt-12">
              <h2 className="text-xl md:text-3xl text-gray-800 mb-4 text-center md:text-left">
                {section.title}
              </h2>
              <hr className="border-gray-300 mb-6 w-16 mx-auto md:mx-0" />
              <p className="text-gray-600 text-base md:text-xl text-center md:text-left leading-relaxed">
                {section.text}
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <img
                src={section.imgSrc}
                alt="About section"
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Section: Introduction component */}
      <Introduction />
    </div>
  );
};

export default About;
