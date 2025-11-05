import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const OurValues = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const values = [
    {
      title: "Creativity",
      description: "We harness the power of technology, talent, and teamwork to tackle jobs and take progress. Every challenge presents an opportunity to innovate and excel.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical behavior in all our dealings. Our commitment to transparency and accountability builds trust with our clients and partners.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
    },
    {
      title: "Agility",
      description: "We adapt quickly to changing market conditions and client needs. Our flexible approach allows us to deliver timely solutions that keep your business ahead of the curve.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      title: "Relationship",
      description: "We believe in building lasting partnerships with our clients. Through collaboration and understanding, we create value that extends beyond individual projects.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    },
    {
      title: "Teamwork",
      description: "Our collective expertise and collaborative spirit drive exceptional results. We work together seamlessly to provide comprehensive solutions tailored to your unique needs.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    }
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Image and Header */}
          <div className="relative">
            {/* Header Section */}
            <div className="bg-slate-900 text-white p-8 mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                In delivery world class services to our ever-growing client base, here are the values that we hold dear.
              </p>
            </div>

            {/* Image */}
            <div className="h-64 lg:h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="border-b border-gray-300 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {expandedIndex === index ? (
                      <Minus className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedIndex === index
                      ? 'max-h-96 opacity-100 mb-4'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="pb-4">
                    {/* Image for expanded item */}
                    <div className="h-48 mb-4 overflow-hidden rounded">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;