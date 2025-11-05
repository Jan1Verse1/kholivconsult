import React from "react";
import Navbar from "../components/navbar";
import ImageComponent from "../components/image";
import ContactUs from "../components/contact";
import Footer from "../components/footer";
import IntroImages from "../components/IntroImages";
import img2 from "../assets/images/Img2.png";
import purpose from "../assets/images/purposeImg.png";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import lottie1 from "../assets/images/lottie1.webm";
import lotties1 from "../assets/images/lotties1.json";
import lotties2 from "../assets/images/Mission.json";
import OurValues from "../components/values";
import ContactScroll from "../components/contactScroll";
import Testimonials from "../components/testimonials";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <IntroImages
        src={purpose}
        alt="Support Image"
        title="Kholiv Consult"
        //subtitle="We're here to help you succeed"
        height="800px"
        overlayOpacity={60}
        textAlign="center"
      />

      <div className=" mx-auto px-6 py-10 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed">
          At Kholiv Consulting, we specialize in empowering small, medium, and
          large enterprises across Nigeria and beyond with tailored financial
          and management solutions. Our dedicated team works closely with you to
          address financial challenges, streamline processes, and apply
          innovative technology to ensure your operations run efficiently.
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-6 py-10">
        <div>
          <h3 className="text-[#1E1D2B] text-2xl md:text-3xl font-semibold mb-4">
            Our Mission
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Businesses Through Trusted Solutions
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Kholiv Consulting, our mission is to deliver exceptional
            financial and management consulting services to organizations of all
            sizes. Guided by our core values—responsibility, creativity,
            teamwork, value creation, and continuous learning—we empower
            businesses in Nigeria and beyond with tailored solutions, advanced
            technology, and efficient processes.
          </p>
        </div>
        <Player
          autoplay
          loop
          src={lotties2}
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
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
          <h3 className="text-[#1E1D2B] text-2xl md:text-3xl font-semibold mb-4">
            Our Vision
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Leading with Excellence, Inspiring Global Impact
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to establish ourselves as a global leader, offering
            unparalleled financial and management consulting services of the
            highest quality to small, medium, and large organizations worldwide.
          </p>
        </div>
      </div>

      <OurValues />
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
        <Testimonials />   
          <ContactScroll /> 
      <Footer />
    </>
  );
};

export default AboutPage;
