import React from "react";
import HeroImg from "../../assets/banner.png";

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="flex mx-auto justify-between items-center flex-col lg:flex-row-reverse container">
          <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="max-w-160">
            <h1 className="text-5xl font-bold text-heading">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            <p className="py-6 text-bodyText">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <button className="btn btn-primary">Explore Products</button>
          </div>
        </div>
      </div>
    </>
  );
}
