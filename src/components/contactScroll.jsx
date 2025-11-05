import React, { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactScroll = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const section = sectionRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowScrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate scroll progress within the section
        const scrollStart = sectionTop - windowHeight / 2;
        const scrollEnd = sectionTop + sectionHeight - windowHeight / 2;
        const scrollRange = scrollEnd - scrollStart;

        if (windowScrollY >= scrollStart && windowScrollY <= scrollEnd) {
          const progress = (windowScrollY - scrollStart) / scrollRange;
          setScrollProgress(Math.max(0, Math.min(1, progress)));
        } else if (windowScrollY < scrollStart) {
          setScrollProgress(0);
        } else {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate card position based on scroll progress
  const cardTranslateY = scrollProgress * 150; // Max 150px movement

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gray-900 border-t-4 border-blue-500 border-dotted overflow-hidden"
    >
      {/* Background Team Image - Fixed */}
      <div className="sticky top-0 h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Team background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl w-full">
            {/* The Card - Moves based on scroll */}
            <div
              className="transition-transform duration-300 ease-out"
              style={{
                transform: `translateY(-${cardTranslateY}px)`,
              }}
            >
              <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-2xl">
                {/* Left side - Road Image */}
                <div className="relative min-h-[300px] sm:min-h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
                    alt="Highway with light trails"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent" />
                </div>

                {/* Right side - Contact Text */}
                <Link to="/contact-us">
                  <div
                    className="bg-slate-900 p-4 sm:p-8 md:p-12 flex flex-col justify-center cursor-pointer group hover:bg-slate-800 transition-colors min-h-[300px] sm:min-h-[400px]"
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4">
                      Contact Us
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-8">
                      Do you have any questions or enquiries?
                    </p>

                    {/* Arrow Icon */}
                    <div className="flex justify-end">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-orange-500 transition-all duration-300">
                        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScroll;
