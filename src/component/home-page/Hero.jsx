import React from "react";
import HeroImg from "../../assets/banner.png";
import Dot from "../../assets/dot.png";
import Button from "../../utility/Button";
import PlayIcon from "../../assets/Play.png";
export default function Hero() {
  return (
    <>
      <div className="hero min-h-[80vh] lg:min-h-screen bg-linear-to-b from-base-100 to-gray-50/30">
        <div className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-brand1 to-brand2 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={HeroImg}
                className="relative max-w-full md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                alt="Digital Workflow"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand1/10 text-brand1 rounded-full text-sm font-semibold animate-fade-in mx-auto lg:mx-0">
              <img src={Dot} alt="dot icon" className="w-3 h-3 animate-pulse" />
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-heading leading-tight tracking-tight">
              Supercharge Your <br className="hidden md:block" />
              <span className="bg-linear-to-r from-brand1 to-brand2 text-transparent bg-clip-text">Digital Workflow</span>
            </h1>

            <p className="text-lg md:text-xl text-bodyText max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button title="Explore Products" addStyle="px-8 py-4 text-lg"></Button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-200 hover:border-brand1 hover:bg-gray-50 transition-all group">
                <img src={PlayIcon} alt="play icon" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
