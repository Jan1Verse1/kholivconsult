import React from "react";
import { Link } from "react-router-dom";
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
import image from "../assets/images/audit.jpg";
import serviceImg from "../assets/images/serviceImg.png";
import ImageComponent from "../components/image";
import tImg from "../assets/images/tImg.jpg"



const ControllershipPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      {/* Hero with Side Image */}
      <div className="grid md:grid-cols-2 min-h-[500px]">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 md:p-16 flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Controllership & Bookkeeping
          </h1>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            Maintain accurate financial records and strong internal controls
            while you focus on growing your business.
          </p>
        </div>
        <div className="bg-slate-200 hidden md:flex items-center justify-center">
          <FileText className="w-48 h-48 text-slate-400" />
          <img className="object-cover w-full h-full" src={serviceImg} alt="" />
        </div>
      </div>

      <div className=" mx-auto px-4 py-16">
        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Full-Service Bookkeeping",
                desc: "Complete management of all your financial transactions and records.",
              },
              {
                icon: BarChart3,
                title: "Financial Statements",
                desc: "Monthly, quarterly, and annual reports prepared to accounting standards.",
              },
              {
                icon: Shield,
                title: "Internal Controls",
                desc: "Robust systems to protect assets and ensure compliance.",
              },
              {
                icon: DollarSign,
                title: "Cash Flow Management",
                desc: "Monitor and optimize cash flow for healthy liquidity.",
              },
              {
                icon: CheckCircle2,
                title: "Account Reconciliation",
                desc: "Regular reconciliation to maintain accuracy and catch errors.",
              },
              {
                icon: FileText,
                title: "Tax Support",
                desc: "Organized records to streamline filing and maximize deductions.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-8 rounded-xl  hover:shadow-xl transition-shadow border border-slate-100"
              >
                <item.icon className="w-12 h-12 text-slate-700 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <ImageComponent width="100%"
        height="400px" src={image} alt="Service Image" />

        {/* Process Timeline */}
        <section className="mb-20 bg-slate-50 p-12 rounded-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                title: "Assessment",
                desc: "Evaluate current processes and identify improvement areas.",
              },
              {
                title: "Setup",
                desc: "Implement systems and establish efficient workflows.",
              },
              {
                title: "Management",
                desc: "Handle daily tasks and monthly reporting consistently.",
              },
              {
                title: "Optimization",
                desc: "Regular reviews to ensure scalability and efficiency.",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-6">
                <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="pt-3">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2  overflow-hidden shadow-2xl min-h-[180px] sm:min-h-[240px] md:min-h-[400px]">
          {/* Left side - Road Image */}
          <div className="relative h-full">
            <img
              src={tImg}
              alt="Highway with light trails"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent" />
          </div>

          {/* Right side - Contact Text */}
          <Link to="/contact-us" className="h-full">
            <div className="bg-slate-900 p-3 sm:p-8 md:p-12 flex flex-col justify-center cursor-pointer group hover:bg-slate-800 transition-colors h-full">
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-4">
                Ready to Streamline Your Finances?
              </h3>
              <p className="text-gray-300 text-xs sm:text-base md:text-lg mb-2 sm:mb-8">
                Let us handle the details while you grow your business.
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
      </div>
      <Footer />
    </div>
  );
};

export default ControllershipPage;
