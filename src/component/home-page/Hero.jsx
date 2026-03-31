import React from "react";
import HeroImg from "../../assets/banner.png";
import Dot from "../../assets/dot.png";
import Button from "../../utility/Button";
import PlayIcon from "../../assets/Play.png";
export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="flex mx-auto justify-between items-center flex-col lg:flex-row-reverse container gap-5">
          <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="max-w-160 ">
            <div className="flex gap-1 items-center px-4 py-2 bg-[#E1E7FF] w-fit rounded-full mb-4"><img src={Dot} alt="dot icon" className="w-4 h-4" />New: AI-Powered Tools Available</div>
            <h1 className="xl:text-7xl lg:text-6xl text-4xl font-extrabold text-heading">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="py-6 text-bodyText text-[18px]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex gap-2">
              <Button title="Explore Products"></Button>
              <button className="flex gap-1 text-[16px] items-center btn btn-outline rounded-full border-brand1 bg-linear-to-r from-brand1 to-brand2 text-transparent bg-clip-text"><img src={PlayIcon} alt="play icon" className="w-4 h-4" />
                Watch Demo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
