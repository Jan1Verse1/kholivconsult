import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import serviceImage1 from '../assets/images/serviceImg.png';
import serviceImage2 from '../assets/images/serviceImg1.png';
import serviceImage3 from '../assets/images/serviceImg2.png';
import serviceImage4 from '../assets/images/serviceImg3.png';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Controllership & Bookkeeping",
      description: "We help you maintain accurate financial records, streamline bookkeeping, and ensure strong internal controls, so you can focus on growing your business.",
      image: serviceImage1,
      link: "/services/controllership-bookkeeping"
    },
    {
      title: "Business & Finance Strategy",
      description: "We design tailored strategies that align your financial goals with business objectives, driving efficiency, profitability, and long-term growth.",
      image: serviceImage2,
      link: "/services/business-finance-strategy"
    },
    {
      title: "Capital Raising & Investment",
      description: "From securing funding to structuring investments, we guide you through every step of capital raising to support expansion and sustainable success.",
      image: serviceImage3,
      link: "/services/capital-raising-investment"
    },
    {
      title: "HR Consulting",
      description: "We provide solutions for talent management, workforce planning, and organizational development, helping you build a strong and productive team.",
      image: serviceImage4,
      link: "/services/hr-consulting"
    }
  ];

  return (
  <div> 
    <div className="text-center text-4xl my-16 px-4 text-black"> 
        <h2>Strategic Service Offerings
to Empower Your Business</h2>
    </div>

    <section className="relative min-h-4/5 w-full overflow-hidden">
      {/* Background Images */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeService === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={service.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-4/5">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-8 lg:p-12 border-r border-white/10 last:border-r-0 cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveService(index)}
          >
            <div>
              <h2
                className={`text-3xl lg:text-4xl xl:text-5xl mb-6 text-blue-600 transition-all duration-300 ${
                  activeService === index ? 'font-bold' : 'font-normal'
                }`}
              >
                {service.title}
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            <button
              onClick={() => window.location.href = service.link}
              className="mt-8 px-6 py-3 border border-white/30 text-white font-medium rounded flex items-center gap-2 w-fit transition-all duration-300 hover:bg-[#202A35] hover:border-[#2C3846] group"
            >
              LEARN MORE
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Services;