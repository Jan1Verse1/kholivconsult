// import React, { useState } from 'react';
// import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add your form submission logic here
//     alert('Form submitted successfully!');
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       message: ''
//     });
//   };

//   return (
//     <section className="bg-gray-50 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
//           {/* Left Column - Contact Info */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Contact Us
//             </h2>
//             <p className="text-gray-600 text-lg mb-12">
//               We want to hear from you. Please reach out to us.
//             </p>

//             {/* Address */}
//             <div className="mb-8">
//               <div className="not-italic text-gray-700 text-lg leading-relaxed">
//                 3rd Floor,<br />
//                 Sunny Motors Building,<br />
//                 No. 3 Adedoyin,<br />
//                 sugbegbe Crescent,<br />
//                 Lekki 1. Lagos State.
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-6">
//               <a 
//                 href="mailto:info@kholivconsulting.com" 
//                 className="text-gray-900 text-lg hover:text-orange-500 transition-colors underline"
//               >
//                 info@kholivconsulting.com
//               </a>
//             </div>

//             {/* Phone */}
//             <div className="mb-8">
//               <a 
//                 href="tel:+2348032003131" 
//                 className="text-gray-900 text-lg hover:text-orange-500 transition-colors"
//               >
//                 +234 803 200 3131
//               </a>
//             </div>

//             {/* Social Media Icons */}
//             <div className="flex gap-4">
//               <a 
//                 href="#" 
//                 className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-6 h-6" />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
//                 aria-label="Twitter"
//               >
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                 </svg>
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-6 h-6" />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
//                 aria-label="YouTube"
//               >
//                 <Youtube className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div>
//             <div className="space-y-6">
//               {/* Name and Email Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter Your Name"
//                   className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Your Email Address"
//                   className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
//                 />
//               </div>

//               {/* Phone and Company Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter Your Phone Number"
//                   className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
//                 />
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   placeholder="Company Name"
//                   className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
//                 />
//               </div>

//               {/* Message Textarea */}
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Enter Your Text"
//                 rows={6}
//                 className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
//               />

//               {/* Privacy Notice */}
//               <p className="text-gray-600 text-sm">
//                 Please be informed that when you click the Send button we will process your personal data in accordance with our{' '}
//                 <a href="#" className="underline hover:text-orange-500 transition-colors">
//                   Privacy notice
//                 </a>{' '}
//                 for the purpose of providing you with appropriate information.
//               </p>

//               {/* Submit Button */}
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleSubmit}
//                   className="mt-8 px-6 py-3 border-2 border-gray-600 text-gray-900 font-medium rounded flex items-center gap-2 w-fit transition-all duration-300 hover:bg-[#202A35] hover:text-white hover:border-[#2C3846] group"
                 
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_email: 'info@kholivconsulting.com' // Your company email
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      alert('Thank you! Your message has been sent successfully.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      alert('Oops! Something went wrong. Please try again or contact us directly at info@kholivconsulting.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              We want to hear from you. Please reach out to us.
            </p>

            {/* Address */}
            <div className="mb-8">
              <div className="not-italic text-gray-700 text-lg leading-relaxed">
                3rd Floor,<br />
                Sunny Motors Building,<br />
                No. 3 Adedoyin,<br />
                sugbegbe Crescent,<br />
                Lekki 1. Lagos State.
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <a 
                href="mailto:info@kholivconsulting.com" 
                className="text-gray-900 text-lg hover:text-orange-500 transition-colors underline"
              >
                info@kholivconsulting.com
              </a>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <a 
                href="tel:+2348032003131" 
                className="text-gray-900 text-lg hover:text-orange-500 transition-colors"
              >
                +234 803 200 3131
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-orange-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Text"
                rows={6}
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />

              {/* Privacy Notice */}
              <p className="text-gray-600 text-sm">
                Please be informed that when you click the Send button we will process your personal data in accordance with our{' '}
                <a href="#" className="underline hover:text-orange-500 transition-colors">
                  Privacy notice
                </a>{' '}
                for the purpose of providing you with appropriate information.
              </p>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 px-6 py-3 border-2 border-gray-600 text-gray-900 font-medium rounded flex items-center gap-2 w-fit transition-all duration-300 hover:bg-[#202A35] hover:text-white hover:border-[#2C3846] group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;