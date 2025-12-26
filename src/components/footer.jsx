import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from "../assets/images/Logo.png";
import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const serviceLinks = [
    {
      title: "Controllership & Bookkeeping",
      link: "/services/controllership-bookkeeping"
    },
    {
      title: "Business & Finance Strategy",
      link: "/services/business-strategy"
    },
    {
      title: "Capital Raising & Investment",
      link: "/services/capital-raising"
    },
    {
      title: "HR Consulting",
      link: "/services/hr-consulting"
    }
  ];

  const handleNavigation = (link) => {
    navigate(link);
    window.scrollTo(0, 0); // Scroll to top after navigation
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div>
            <div className="bg-white w-32 h-12 flex items-center justify-center">
              <span className="text-neutral-900 font-bold text-xl">
                <Link to="/"><img
                  src={logo}
                  alt="Kholiv Logo"
                  width={180}
                  height={64}
                  className="object-contain"
                /></Link>
              </span>
            </div>
          </div>

          {/* Our Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(service.link)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Contacts Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Our Contacts
            </h3>
            <div className="space-y-4">
              <div className="text-gray-300 leading-relaxed">
                3rd Floor,<br />
                Sunny Motors Building,<br />
                No. 3 Adedoyin,<br />
                sugbegbe Crescent,<br />
                Lekki 1. Lagos State.
              </div>
              <div>
                <a 
                  href="mailto:info@kholivconsulting.com" 
                  className="text-gray-300 hover:text-white transition-colors underline"
                >
                  info@kholivconsulting.com
                </a>
              </div>
              <div>
                <a 
                  href="tel:+2348032003131" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +234 803 200 3131
                </a>
              </div>
            </div>
          </div>

          {/* Follow Avetium Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider">
              Follow Kholiv
            </h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 KholivConsulting. All Rights Reserved
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button 
                onClick={() => handleNavigation('/privacy-policy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => handleNavigation('/cookie-policy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => handleNavigation('/terms-and-conditions')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms and Conditions
              </button>
              <span className="text-gray-600">|</span>
              <button 
                onClick={() => console.log('Revoke cookie consent')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Revoke Cookie Consent
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;