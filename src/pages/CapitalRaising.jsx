import React from 'react';
import { ChevronRight, CheckCircle2, ArrowRight, Target, TrendingUp, Users, DollarSign, FileText, BarChart3, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';

// Design 3: Capital Raising - Bold Asymmetric Layout
const CapitalRaisingPage = () => {
  return (
    <>
    <Navbar />
    <div className="w-full">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#202A35] via-[#2B3A4D] to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">Capital Raising & Investment</h1>
            <p className="text-2xl mb-10 text-emerald-50 leading-relaxed">
              Secure funding and structure investments that support expansion and sustainable success.
            </p>

          </div>
        </div>
      </div>

      <div className=" mx-auto px-4 py-20">
        {/* Services */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-12 text-gray-900">What We Do</h2>
            <div className="space-y-6">
              {[
                "Funding Strategy Development",
                "Investor Materials Preparation",
                "Valuation & Deal Structuring",
                "Investor Relations Management",
                "Due Diligence Support",
                "Exit Planning & Strategy"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-[#809AB8] rounded-lg hover:bg-[#202A40] transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="font-semibold text-lg text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#809AB8] to-[#C6F6D5] p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Why Partner With Us?</h3>
            <ul className="space-y-5">
              {[
                "Extensive investor networks",
                "Professional materials that stand out",
                "Expert negotiation guidance",
                "Strategic timing insights",
                "Ongoing support beyond closing"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            <div className="space-y-16">
              {[
                { title: "Readiness Assessment", desc: "Evaluate investment readiness and develop timeline" },
                { title: "Materials Development", desc: "Create comprehensive investor materials" },
                { title: "Investor Outreach", desc: "Identify and approach suitable investors" },
                { title: "Negotiation & Closing", desc: "Guide through terms and closing processes" }
              ].map((step, idx) => (
                <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.desc}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#202A35] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10">
                    {idx + 1}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials/>
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
                Ready to Raise Capital?
              </h3>
              <p className="text-gray-300 text-xs sm:text-base md:text-lg mb-2 sm:mb-8">
          Let's discuss your funding needs and create a winning strategy.
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

        {/* CTA */}
        {/* <div className="bg-gray-900 rounded-3xl p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Raise Capital?</h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Let's discuss your funding needs and create a winning strategy.
          </p>
          <button className="px-12 py-5 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors text-lg">
            Schedule Discovery Call
          </button>
        </div> */}
      </div>
    </div>
    <Footer />
    </>
  );
};



// Default export for preview
export default CapitalRaisingPage;