import React from 'react';
import { ChevronRight, CheckCircle2, ArrowRight, Target, TrendingUp, Users, DollarSign, FileText, BarChart3, Lightbulb, Shield } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import imgHR from '../assets/images/serviceImg3.png'

const HRConsultingPage = () => {
  return (
    <>
    <Navbar />
    <div className="w-full">
      {/* Hero with Background Image and Overlay */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${imgHR})` }}
      >
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content - positioned above overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Users className="w-20 h-20 text-gray-900 mb-6" />
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">HR Consulting</h1>
            <p className="text-2xl mb-10 leading-relaxed">
              Build a strong and productive team through strategic talent management and organizational development.
            </p>
            <button className="px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-orange-600 transition-colors text-lg shadow-lg">
           Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-4 py-20">
        {/* Services Carousel Style */}
        {/* <section className="mb-24">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Talent Acquisition", desc: "Effective recruitment and employer branding to attract top candidates.", bg: "#FEEBC8" },
              { icon: DollarSign, title: "Compensation Design", desc: "Competitive structures that motivate and retain talent.", bg: "#FEEBC8" },
              { icon: TrendingUp, title: "Performance Management", desc: "Frameworks for goal setting and development.", bg: "#FEEBC8" },
              { icon: Users, title: "Organizational Development", desc: "Design structures that support business strategy.", bg: "#FEEBC8" },
              { icon: Lightbulb, title: "Learning & Development", desc: "Training initiatives to enhance skills.", bg: "#FEEBC8" },
              { icon: Shield, title: "HR Compliance", desc: "Ensure compliance with employment laws.", bg: "#FEEBC8" }
            ].map((item, idx) => (
              <div key={idx} className={`bg-${item.bg}-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-${item.bg}-100`}>
                <div className={`w-14 h-14 bg-${item.bg}-500 rounded-full flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section> */}
        {/* Services Carousel Style */}
<section className="mb-24">
  <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Expertise</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      { icon: Target, title: "Talent Acquisition", desc: "Effective recruitment and employer branding to attract top candidates.", bgColor: "#809AB8", iconBg: "#FFFFFF" },
      { icon: DollarSign, title: "Compensation Design", desc: "Competitive structures that motivate and retain talent.", bgColor: "#809AB8", iconBg: "#FFFFFF" },
      { icon: TrendingUp, title: "Performance Management", desc: "Frameworks for goal setting and development.", bgColor: "#809AB8", iconBg: "#FFFFFF" },
      { icon: Users, title: "Organizational Development", desc: "Design structures that support business strategy.", bgColor: "#809AB8", iconBg: "#FFFFFF" },
      { icon: Lightbulb, title: "Learning & Development", desc: "Training initiatives to enhance skills.", bgColor: "#809AB8", iconBg: "#FFFFFF" },
      { icon: Shield, title: "HR Compliance", desc: "Ensure compliance with employment laws.", bgColor: "#809AB8", iconBg: "#FFFFFF" }
    ].map((item, idx) => (
      <div 
        key={idx} 
        className="p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 border-2"
        style={{ backgroundColor: item.bgColor, borderColor: item.iconBg + '40' }}
      >
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: item.iconBg }}
        >
          <item.icon className="w-7 h-7 text-[#809AB8]" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

        {/* Approach */}
        <section className="mb-24 bg-gradient-to-br from-[#809AB8] to-amber-50 rounded-3xl p-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How We Help</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { step: "Assess", desc: "Analyze current HR practices and workforce capabilities to identify opportunities." },
              { step: "Design", desc: "Develop customized HR strategies and programs aligned with your culture." },
              { step: "Implement", desc: "Roll out initiatives with training and change management support." },
              { step: "Improve", desc: "Monitor effectiveness and make adjustments to optimize outcomes." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-4xl font-bold text-gray-600">{String(idx + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.step}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">The Impact</h2>
              <div className="space-y-4">
                {[
                  "Attract and retain high-performing talent",
                  "Boost employee engagement and productivity",
                  "Reduce turnover and associated costs",
                  "Build strong organizational culture",
                  "Ensure employment law compliance",
                  "Scale HR infrastructure with growth"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-gray-900 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#202A35] via-[#2B3A4D] to-teal-800  p-12 rounded-3xl text-white">
              <h3 className="text-3xl font-bold mb-6">Your People Are Your Greatest Asset</h3>
              <p className="text-xl mb-8 leading-relaxed opacity-95">
                Let us help you build a team and culture that drives sustainable success.
              </p>
              <button className="px-8 py-4 bg-white text-[#202A35] font-bold rounded-full hover:bg-gray-100 transition-colors w-full">
                Start Building Your Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default HRConsultingPage;