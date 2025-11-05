import React from "react";
import bgImg from "../assets/images/bgImg.png";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center  text-white px-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {/* Content */}
      <div className="relative z-10 text-center sm:text-left max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
          Empowering Businesses, Driving Growth
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6">
          With a strong local foundation and a global outlook, our dedicated team
          leverages expertise and technology to simplify your financial
          operations, provide accurate insights, and fuel sustainable business
          growth.
        </p>
        <button className="px-6 py-3 bg-[#202A35] text-white rounded-xl shadow-md hover:bg-[#2C3846] transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
