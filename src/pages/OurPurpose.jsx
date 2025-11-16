import React from "react";
import Navbar from "../components/navbar";
import ImageComponent from "../components/image";
import ContactUs from "../components/contact";
import Footer from "../components/footer";
import IntroImages from "../components/IntroImages";
import img2 from "../assets/images/Img2.png";
import purpose from "../assets/images/purposeImg.png";

import { TrendingUp, Users, Target, Award, Heart, Lightbulb } from 'lucide-react';
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Icon component for the chart illustration - MOVED BEFORE PurposePage
const BarChart3 = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pie chart segments */}
    <circle cx="60" cy="80" r="35" fill="#3B82F6" opacity="0.8" />
    <circle cx="75" cy="80" r="35" fill="#F59E0B" opacity="0.8" />
    <circle cx="67" cy="95" r="35" fill="#10B981" opacity="0.8" />
    
    {/* Bar charts */}
    <rect x="120" y="100" width="15" height="60" fill="#EF4444" rx="2" />
    <rect x="140" y="80" width="15" height="80" fill="#8B5CF6" rx="2" />
    <rect x="160" y="60" width="15" height="100" fill="#EC4899" rx="2" />
    
    {/* Line chart */}
    <polyline 
      points="20,180 40,160 60,165 80,150 100,155 120,140" 
      stroke="#06B6D4" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
    />
    {/* Data points */}
    <circle cx="20" cy="180" r="4" fill="#06B6D4" />
    <circle cx="40" cy="160" r="4" fill="#06B6D4" />
    <circle cx="60" cy="165" r="4" fill="#06B6D4" />
    <circle cx="80" cy="150" r="4" fill="#06B6D4" />
    <circle cx="100" cy="155" r="4" fill="#06B6D4" />
    <circle cx="120" cy="140" r="4" fill="#06B6D4" />
  </svg>
);

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import lotties1 from "../assets/images/lotties1.json";
import lotties2 from "../assets/images/Mission.json";


import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";


const PurposePage = () => {
  return (
    <>
      <Navbar />
      <IntroImages
        src={purpose}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium text-gray-800 leading-relaxed text-center md:text-left">
          Enterprise Application - The Kholic Way!
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
          Our proactive approach revolves around equipping our clients for
          sustained growth. With a dedicated team committed to each customer, we
          extend our expertise to assist businesses in comprehending their
          accounting and tax data. Our deep understanding of growth, coupled
          with extensive research and analytical insights, enables us to guide
          our clients in overcoming barriers and achieving business expansion.
          Through a blend of financial advice and our proprietary development
          models tailored for service-based enterprises, we empower our
          customers to unlock their true potential. Our in-house solutions cater
          specifically to the unique needs of each organization, ensuring
          practical and effective strategies that lead to lasting success. At
          Kholiv Consulting, we stand as a steadfast partner, enabling
          businesses to navigate their path to growth with confidence and
          strategic acumen.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-6 py-10">
        <Player
          autoplay
          loop
          src={lotties1}
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We call it Consultship!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Consultship, in the context provided, is a made-up term representing
            the dedicated partnership and commitment established between our
            firm and valued clients. Consulship embodies the mutual dedication
            and trust that underpins our service-driven approach. As we
            diligently serve our client’s needs, they, in turn, entrust us with
            their business aspirations, creating a collaborative alliance that
            propels both parties towards excellence and prosperity.
          </p>
        </div>
      </div>

      <div className=" mx-auto px-6 py-10 ">
        <h3>
          In the spirit of consultship, we individually dedicate the time and
          courage needed to ensure the success of all stakeholders involved. Our
          clients, as trusted partners, take full advantage of our comprehensive
          services, granting us access to their financial endeavors, and
          enabling us to deliver profound and transformative solutions. The
          result of this is an unparalleled level of care, transformative
          services, and an unparalleled level of commitment, setting us apart
          from any previous experiences our clients may have had with financial
          consulting firms. As a firm dedicated to the principles of
          consultship, we are equipped with all the necessary resources to serve
          our clients to the best extent possible. Recruiting clients into our
          firm and providing top-tier services are endeavors we approach with
          utmost seriousness, evident in our commitment to excellence and client
          satisfaction. Consultship drives us to deliver exceptional outcomes,
          as we collectively thrive and advance towards mutual success in the
          realm of global financial consultancy.
        </h3>
      </div>

      <ImageComponent
        src={img2}
        alt="Corporate man smiling"
        className="mb-0"
        objectFit="cover"
        width="100%"
        height="800px"
        rounded={false}
        shadow={false}
        overlay={false}
        overlayOpacity={0}
      />
<div className="grid grid-cols-2  overflow-hidden shadow-2xl min-h-[180px] sm:min-h-[240px] md:min-h-[400px]">
  {/* Left side - Road Image */}
  <div className="relative h-full">
    <img
      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
      alt="Highway with light trails"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent" />
  </div>

  {/* Right side - Contact Text */}
  <Link to="/contact-us" className="h-full">
    <div className="bg-slate-900 p-3 sm:p-8 md:p-12 flex flex-col justify-center cursor-pointer group hover:bg-slate-800 transition-colors h-full">
      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-4">
        Contact Us
      </h3>
      <p className="text-gray-300 text-xs sm:text-base md:text-lg mb-2 sm:mb-8">
        Do you have any questions or enquiries?
      </p>

      {/* Arrow Icon */}
      <div className="flex justify-end">
        <div className="inline-flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-orange-500 transition-all duration-300">
          <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
        </div>
      </div>
    </div>
  </Link>
</div>

      <Footer />
    </>
  );
};

export default PurposePage;
