import React from "react";
import { Modal } from "antd";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import services from "../assets/images/services.json";

const NavModal = ({ onClose }) => {
  const menuItems = [
    "Controllership & Bookkeeping",
    "Business & Finance Strategy",
    "Capital Raising & Investment",
    "HR Consulting"
  ];

  return (
    <Modal
      open={true}
      onCancel={onClose}
      footer={null}
      closeIcon={null}
      width="100vw"
      style={{
        top: 80,
        left: 0,
        margin: 0,
        padding: 0,
        maxWidth: "100vw",
      }}
      bodyStyle={{
        padding: 0,
        margin: 0,
        height: "40vh",
      }}
      className="full-width-modal"
    >
      <div className="w-full h-full grid grid-cols-3 gap-4 p-4">
        {/* Animation Section - Smaller on mobile */}
        <div className="col-span-1 flex items-center justify-center">
          <Player
            autoplay
            loop
            src={services}
            className="w-full h-full max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>

        {/* Menu Items Section */}
        <div className="col-span-2 flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
            >
              {/* Line item with hover effect */}
              <div className="flex items-center py-2 sm:py-3 md:py-4 border-b border-gray-200 group-hover:border-orange-500 transition-all duration-300">
                <span className="text-darkBlueText font-sans text-sm sm:text-base md:text-lg font-normal group-hover:text-orange-500 group-hover:font-medium transition-all duration-300">
                  {item}
                </span>
                
                {/* Hover arrow indicator */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom border accent on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default NavModal;