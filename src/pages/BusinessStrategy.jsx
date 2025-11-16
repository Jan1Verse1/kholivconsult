import React from "react";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  FileText,
  BarChart3,
  Lightbulb,
  Shield,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IntroImages from "../components/IntroImages";
import purpose from "../assets/images/purposeImg.png";
import ContactScroll from "../components/contactScroll";

// Design 2: Business Strategy - Modern Card Layout
const BusinessStrategyPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-b from-blue-50 to-white">
        <IntroImages
          src={purpose}
          alt="Business Image"
          title="Business & Finance Strategy"
          //subtitle="We're here to help you succeed"
          height="800px"
          overlayOpacity={60}
          textAlign="center"
        />

        {/* Value Props */}
        <div className=" mx-auto px-4 py-16">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">What we offer: </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Strategic Financial Planning",
                desc: "Multi-year financial plans aligned with your business vision and market opportunities.",
                color: "blue",
              },
              {
                icon: TrendingUp,
                title: "Budgeting & Forecasting",
                desc: "Realistic budgets and accurate forecasts to guide decision-making.",
                color: "green",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                desc: "KPIs and dashboards to track progress and identify improvements.",
                color: "purple",
              },
              {
                icon: DollarSign,
                title: "Profitability Analysis",
                desc: "Analyze segments to maximize margins and returns.",
                color: "orange",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-${item.color}-500`}
              >
                <div
                  className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Approach Section */}
          <section className="mb-20">
            <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
              How We Work
             </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "Deep dive into your business model and objectives",
                },
                {
                  num: "02",
                  title: "Strategy",
                  desc: "Develop tailored financial strategies with clear targets",
                },
                {
                  num: "03",
                  title: "Planning",
                  desc: "Create detailed roadmaps for execution",
                },
                {
                  num: "04",
                  title: "Monitoring",
                  desc: "Track performance and adjust as needed",
                },
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-6xl font-bold text-blue-200 mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <ContactScroll
            backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            cardImage="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
            title="Transform Your Business Strategy"
            description="Data-driven decisions. Clear roadmaps. Sustainable growth."
            linkTo="/contact-us"
            borderColor="border-blue-500"
            buttonHoverColor="group-hover:bg-orange-500"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

// Default export for preview
export default BusinessStrategyPage;
