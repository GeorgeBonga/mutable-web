import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import heroImg from ".././../Assets/code.svg";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
  <div
    className="m-auto overflow-hidden mt-8 lg:mt-4 md:pt-12 h-5/6 relative"
    data-aos="zoom-in"
  >
    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
      <div
        style={{
          backgroundColor: "#E3EAF4",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
        className="lg:w-3/4 md:p-12 border-l-4 flex flex-col relative"
      >
        <h1 className="mb-5 md:text-3xl text-1xl font-bold text-blue-400">
          360-degree Solution to your Business
        </h1>
        <div className="flex lg:text-left">
          <div className="w-1/3 lg:text-left">
            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
              We are a team of highly motivated and skilled developers
              dedicated to delivering only the best software. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Tortor sed vitae posuere
              lectus sit tempus dui. Purus diam elit vitae
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex absolute right-0 top-0 items-center justify-center w-full lg:w-1/2"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <img
          alt="card img"
          className="rounded-t float-right duration-1000 w-3/4 h-auto"
          src={heroImg}
        />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Hero;
