import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const testimonials = [
  {
    quote: "Partnering with Kholic Consulting Accounting has transformed our financial management process. Their attention to detail and deep understanding of tax regulations have saved us significant costs while keeping us fully compliant.",
    author: "Grace Okafor",
    position: "Managing Director, NovaTech Solutions"
  },
  {
    quote: "The team’s professionalism and proactive approach have been instrumental in streamlining our accounting and audit processes. They go beyond numbers — offering real business insights that guide strategic decisions.",
    author: "Tunde Adebayo",
    position: "Chief Financial Officer, GreenFields Agro"
  },
  {
    quote: "Working with this firm has been a game-changer. Their consultants not only provided accurate financial reports but also advised us on cost optimization strategies that improved our bottom line.",
    author: "Chika Nwosu",
    position: "CEO, Prime Logistics Ltd."
  },
  {
    quote: "Their team combines technical accounting expertise with genuine care for our business growth. From payroll management to financial forecasting, their support has been exceptional.",
    author: "Bola Hassan",
    position: "HR & Finance Lead, Crestwave International"
  },
  {
    quote: "We’ve worked with several accounting firms over the years, but none have matched the reliability and clarity this consultancy provides. Their insights have helped us make smarter financial decisions with confidence.",
    author: "David Mensah",
    position: "Operations Director, Zenith Engineering Co."
  }
];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = () => {
    if (testimonials.length === 1) return [testimonials[0]];
    if (testimonials.length === 2) return testimonials;
    
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    
    return [testimonials[prev], testimonials[currentIndex], testimonials[next]];
  };

  return (
    <section className="relative bg-slate-800 py-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16">
          What Our Clients Say About Us!
        </h2>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {visibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  testimonials.length > 2 && index === 1
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-70 hidden lg:block'
                } ${testimonials.length <= 2 ? 'scale-100 opacity-100' : ''}`}
              >
                <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="text-blue-400 text-6xl font-serif mb-4">"</div>
                  
                  {/* Testimonial Text */}
                  <p className="text-white text-lg leading-relaxed mb-8 flex-grow">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-white text-xl font-semibold mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {testimonials.length > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-500 w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-500 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;