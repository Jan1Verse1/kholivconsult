import React from "react";
import Navbar from "../components/navbar";
import ImageComponent from "../components/image";
import ContactUs from "../components/contact";
import Footer from "../components/footer";
import IntroImages from "../components/IntroImages";
import img2 from"../assets/images/Img2.png";
import img3 from"../assets/images/img3.png";


const ContactPage = () => {
  return (
    <>
      <Navbar />
      <IntroImages
        src={img3}
        alt="Support Image"
        title="Support"
        //subtitle="We're here to help you succeed"
        height="400px"
        overlayOpacity={60}
        textAlign="center"
      />

      <div></div>

      <ContactUs />
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
      <Footer />
    </>
  );
};

export default ContactPage;
