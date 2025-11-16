import React, { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactScroll = ({ 
  backgroundImage, 
  cardImage, 
  title, 
  description, 
  linkTo,
  borderColor = "border-blue-500", 
  buttonHoverColor = "group-hover:bg-slate-900" 
}) => {
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardTranslateY = scrollProgress * 150;

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-screen bg-gray-900 overflow-hidden`}
    >
      {/* Background Image - Fixed */}
      <div className="sticky top-0 h-screen">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Background"
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
                {/* Left side - Card Image */}
                <div className="relative min-h-[300px] sm:min-h-[400px]">
                  <img
                    src={cardImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent" />
                </div>

                {/* Right side - Content */}
                <Link to={linkTo}>
                  <div
                    className="bg-slate-900 p-4 sm:p-8 md:p-12 flex flex-col justify-center cursor-pointer group hover:bg-slate-800 transition-colors min-h-[300px] sm:min-h-[400px]"
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4">
                      {title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-8">
                      {description}
                    </p>

                    {/* Arrow Icon */}
                    <div className="flex justify-end">
                      <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full ${buttonHoverColor} transition-all duration-300`}>
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

// Example Usage Component
const ExampleUsage = () => {
  return (
    <>
      {/* Contact Us Section */}
      <ContactScroll
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
        cardImage="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
        title="Contact Us"
        description="Do you have any questions or enquiries?"
        linkTo="/contact-us"
        borderColor="border-blue-500"
        buttonHoverColor="group-hover:bg-bg-slate-900"
      />

      {/* About Us Section */}
      <ContactScroll
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        cardImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
        title="About Us"
        description="Learn more about our story and what drives us forward."
        linkTo="/about"
        borderColor="border-green-500"
        buttonHoverColor="group-hover:bg-green-500"
      />

      {/* Our Services Section */}
      <ContactScroll
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80"
        cardImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
        title="Our Services"
        description="Discover how we can help transform your business."
        linkTo="/services"
        borderColor="border-purple-500"
        buttonHoverColor="group-hover:bg-purple-500"
      />

      {/* Careers Section */}
      <ContactScroll
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
        cardImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
        title="Join Our Team"
        description="Explore exciting career opportunities and grow with us."
        linkTo="/careers"
        borderColor="border-yellow-500"
        buttonHoverColor="group-hover:bg-yellow-500"
      />
    </>
  );
};

export default ContactScroll;
export { ExampleUsage };
