import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import serviceImage1 from "../assets/images/serviceImg.png";
import serviceImage2 from "../assets/images/serviceImg1.png";
import serviceImage3 from "../assets/images/serviceImg2.png";
import serviceImage4 from "../assets/images/serviceImg3.png";
import { ChevronRight } from "lucide-react";

const OurServices = () => {
  const navigate = useNavigate(); // Initialize navigate

  const sections = [
    {
      title: "Controllership & Bookkeeping",
      description:
        "We help you maintain accurate financial records, streamline bookkeeping, and ensure strong internal controls, so you can focus on growing your business.",
      image: serviceImage1,
      imagePosition: "left",
      imagePlaceholder: "Professional working at laptop by window",
      link: "/services/controllership-bookkeeping", // ✅ Matches your router
    },
    {
      title: "Business & Finance Strategy",
      description:
        "We design tailored strategies that align your financial goals with business objectives, driving efficiency, profitability, and long-term growth.",
      image: serviceImage2,
      imagePosition: "right",
      imagePlaceholder: "Friends making heart shape by lake",
      link: "/services/business-strategy", // ✅ Changed from business-finance-strategy
    },
    {
      title: "Capital Raising & Investment",
      description:
        "From securing funding to structuring investments, we guide you through every step of capital raising to support expansion and sustainable success.",
      image: serviceImage3,
      imagePosition: "left",
      imagePlaceholder: "Person working on laptop outdoors",
      link: "/services/capital-raising", // ✅ Changed from capital-raising-investment
    },
    {
      title: "HR Consulting",
      description:
        "We provide solutions for talent management, workforce planning, and organizational development, helping you build a strong and productive team.",
      image: serviceImage4,
      imagePosition: "right",
      imagePlaceholder: "Person working on laptop outdoors",
      link: "/services/hr-consulting", // ✅ Already correct
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center text-4xl my-16 px-4 text-black">
        <h2>Strategic Service Offerings to Empower Your Business</h2>
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            section.imagePosition === "right"
              ? "md:flex-row-reverse"
              : "md:flex-row"
          } items-center gap-0 bg-white shadow-sm overflow-hidden`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-200 flex items-center justify-center">
            <img
              className="object-cover w-full h-full"
              src={section.image}
              alt={section.imagePlaceholder}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 bg-blue-50 p-8 md:p-12 h-64 md:h-80 flex flex-col justify-center">
            <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-2 ">
              {section.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {section.description}
            </p>
            <button
              onClick={() => navigate(section.link)} // ✅ Use navigate instead
              className="mt-4 px-6 py-3 border-2 border-gray-600 text-gray-900 font-medium rounded flex items-center gap-2 w-fit transition-all duration-300 hover:bg-[#202A35] hover:text-white hover:border-[#2C3846] group"
            >
              Learn More
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurServices;