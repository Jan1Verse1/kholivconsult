import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "antd";
import logo from "../assets/images/Logo.png";
import NavModal from "./navmodal"; // ✅ capitalized

const navItems = [
  { label: "ABOUT US", href: "#about" },
  { label: "OUR SERVICES", modal: true }, // ✅ special flag
  { label: "OUR PURPOSE", href: "/#purpose" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navModalOpen, setNavModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 px-6 py-6 transition-all duration-300 
           bg-[#1E1D2B] backdrop-blur-md shadow-md text-[#F5F5F5]`}
      >
        <div className="max-w-7xl mx-auto flex justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Kholiv Logo"
              width={180}
              height={64}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item, i) =>
              item.modal ? (
                <button
                  key={i}
                  onClick={() => setNavModalOpen(true)}
                  className="relative text-xl font-sans font-semibold transition-all duration-300 ease-in-out hover:scale-105"
                >
                  OUR SERVICES
                </button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-xl font-sans font-semibold transition-all duration-300 ease-in-out hover:scale-105"
                >
                  {item.label}
                </a>
              )
            )}
              <Link to="/contact-us">
            <Button
              type="default"
              className="!bg-[#1E1D2B] !border !border-white !text-white flex items-center justify-center hover:!bg-white hover:!text-[#1E1D2B]"
            >
            CONTACT US
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-[#F5F5F5] focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-black/80 backdrop-blur-md text-[#F5F5F5] py-4 rounded shadow-lg transition-all duration-300">
            {navItems.map((item, i) =>
              item.modal ? (
                <button
                  key={i}
                  onClick={() => {
                    setNavModalOpen(true);
                    setMenuOpen(false);
                  }}
                  className="text-lg font-medium hover:scale-105 transition-transform"
                >
                  OUR SERVICES
                </button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium hover:scale-105 transition-transform"
                >
                  {item.label}
                </a>
              )
            )}
             <Link to="/contact-us">
            <Button
              type="default"
              className="!bg-[#1E1D2B] !border !border-white !text-white flex items-center justify-center hover:!bg-white hover:!text-[#1E1D2B]"
            >
         CONTACT US
            </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Modal */}
      {navModalOpen && <NavModal onClose={() => setNavModalOpen(false)} />}
    </>
  );
};

export default Navbar;
