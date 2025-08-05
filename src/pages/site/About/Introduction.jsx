import React from "react";

const avatars = [
  {
    title: "Fred Gleason",
    description: "Brand Owner",
    image: "/images/avatar1.jpg",
  },
  {
    title: "Isabel Hamill",
    description: "Mug Designer",
    image: "/images/avatar2.jpg",
  },
  {
    title: "Maurice Herman",
    description: "Mug Designer",
    image: "/images/avatar3.jpg",
  },
];

const Introduction = () => {
  return (
    <div className="bg-white">
      <div className="w-full mx-auto my-16 ">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mb-12 md:mb-20"
        >
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
          <div className="px-4 text-gray-500 text-opacity-50 uppercase text-base font-medium text-center tracking-widest">
            Introductions
          </div>
          <div className="border-t border-gray-400 w-6 md:w-8"></div>
        </div>
        {/* avatar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] text-center mx-[360px] my-32">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="w-full group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md shadow-md">
                <img
                  src={avatar.image}
                  alt={avatar.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-85"
                />
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 tracking-wide">
                  {avatar.title}
                </h3>
                <p className="text-sm text-gray-500">{avatar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="w-full h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center text-white text-3xl font-bold"
          style={{ backgroundImage: "url('/images/about4.jpg')" }}
        ></div>
        {/* Footer quote */}
      </div>
    </div>
  );
};

export default Introduction;