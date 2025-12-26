import React from "react";
import Navbar from "../components/navbar";
import ImageComponent from "../components/image";
import ContactUs from "../components/contact";
import Footer from "../components/footer";
import IntroImages from "../components/IntroImages";
import img2 from "../assets/images/Img2.png";
import purpose from "../assets/images/purposeImg.png";
import { TrendingUp, Users, Target, Award, Heart, Lightbulb } from 'lucide-react';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import lotties1 from "../assets/images/lotties1.json";
import lotties2 from "../assets/images/Mission.json";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import conPurpose from "../assets/images/purpose.jpg";
import team from "../assets/images/team.jpg";

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

const PurposePage = () => {
  return (
    <>
      <Navbar />
      <IntroImages
        src={purpose}
        alt="Purpose Image"
        title="Our Purpose"
        height="400px"
        overlayOpacity={60}
        textAlign="center"
      />

      <div className="w-full bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Application - The Kholiv Way!
            </h1>
            <div className="w-24 h-1 bg-[#202A35] mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Proactive Approach
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Our proactive approach revolves around equipping our clients for sustained growth. With a dedicated team committed to each customer, we extend our expertise to assist businesses in comprehending their accounting and tax data.
                </p>
                <p>
                  Our deep understanding of growth, coupled with extensive research and analytical insights, enables us to guide our clients in overcoming barriers and achieving business expansion.
                </p>
                <p>
                  Through a blend of financial advice and our proprietary development models tailored for service-based enterprises, we empower our customers to unlock their true potential.
                </p>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-white p-12 rounded-2xl shadow-2xl">
                  <BarChart3 className="w-64 h-64 text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Consultship Section */}
          <div className="bg-[#809AB8] rounded-3xl p-12 md:p-16 text-white mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                We call it Consultship!
              </h2>
              <div className="w-24 h-1 bg-[#202A35] mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed text-blue-50 mb-8">
                Consultship, in the context provided, is a made-up term representing the dedicated partnership and commitment established between our firm and valued clients. Consultship embodies the mutual dedication and trust that underpins our service-driven approach.
              </p>
              <p className="text-xl leading-relaxed text-blue-50">
                As we diligently serve our client's needs, they, in turn, entrust us with their business aspirations, creating a collaborative alliance that propels both parties towards excellence and prosperity.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Dedicated Partnership",
                desc: "Individual dedication and time to ensure success for all stakeholders"
              },
              {
                icon: TrendingUp,
                title: "Comprehensive Services",
                desc: "Full advantage of our services from the ground up"
              },
              {
                icon: Users,
                title: "Unparalleled Care",
                desc: "Transformative services at an unparalleled level of commitment"
              },
              {
                icon: Award,
                title: "Excellence Driven",
                desc: "Top-tier services with utmost seriousness and commitment"
              },
              {
                icon: Heart,
                title: "Client Satisfaction",
                desc: "Evident commitment to excellence and client satisfaction"
              },
              {
                icon: Lightbulb,
                title: "Exceptional Outcomes",
                desc: "Delivering exceptional results through collective growth"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#202A35]"
              >
                <div className="w-14 h-14 bg-[#809AB8] rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="bg-gray-900 rounded-2xl p-12 text-white text-center">
            <p className="text-xl leading-relaxed max-w-5xl mx-auto">
              In the spirit of consultship, we individually dedicate the time and courage needed to ensure the success of all stakeholders involved. Our clients, as trusted partners, take full advantage of our comprehensive services, granting us access to their financial endeavors, and enabling us to deliver profound and transformative solutions.
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-300 italic">
                "Consultship drives us to deliver exceptional outcomes, as we collectively thrive and advance towards mutual success in the realm of global financial consultancy."
              </p>
            </div>
          </div>
        </div>
      </div>

      <ImageComponent
        src={team}
        alt="Corporate team working together"
        className="mb-0"
        objectFit="cover"
        width="100%"
        height="600px"
        rounded={false}
        shadow={false}
        overlay={false}
        overlayOpacity={0}
      />

      <div className="grid grid-cols-2 overflow-hidden shadow-2xl min-h-[180px] sm:min-h-[240px] md:min-h-[400px]">
        {/* Left side - Road Image */}
        <div className="relative h-full">
          <img
            src={conPurpose}
            alt="Highway with light trails"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent" />
        </div>

        {/* Right side - Contact Text */}
        <Link to="/contact-us" className="h-full">
          <div  className="bg-slate-900 p-3 sm:p-8 md:p-12 flex flex-col justify-center cursor-pointer group hover:bg-slate-800 transition-colors h-full">
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300 text-xs sm:text-base md:text-lg mb-2 sm:mb-8">
              Do you have any questions or enquiries?
            </p>

            {/* Arrow Icon */}
            <div className="flex justify-end">
                             <div className="inline-flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-slate-900 transition-all duration-300">
             
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