import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import heroIm from ".././../Assets/web-dev.svg";

const MainHero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <Navbar />
        </div>

        <div className="m-auto overflow-hidden lg:mt-1 md:pt-12">
          <div className="flex flex-col lg:flex-row py-8 justify-between text-center">
            <div
              className="flex flex-col  lg:text-left  py-6 "
              style={{
                width: "45.5%",
              }}
            >
              <div className="p-6">
                <h1 className="mb-6 mt-10 md:text-4xl text-xl font-bold text-black-400">
                  Mutable Tech Enterprises
                </h1>
                <div className="text tracking-tight mb-5 text-gray-500">
                  We develop high-quality, custom cross-platform mobile
                  applications that are robust and optimized for performance,
                  scalability, and accessibility. We develop high-quality,
                  custom cross-platform mobile applications that are robust and
                  optimized for performance, scalability, and accessibility. We
                  develop high-quality, custom cross-platform mobile
                  applications that are robust and optimized for performance,
                  scalability, and accessibility.
                </div>
              </div>
            </div>

            <div
              className="flex bg-blue-400  lg:justify-end "
              style={{
                width: "54.5%",
                height: 500,
                borderBottomLeftRadius: 232,
              }}
            >
              <div className="mx-auto ">
                {/* First Equal Section */}
                <div className="bg-blue-400 mx-auto">
                
                    <h3 className="text-2xl text-white font-semibold mb-4">We Provide</h3>
                    <ul className="text-white text-xl leading-10">
                      <li className="mb-4">Web Hosting</li>
                      <li className="mb-4">Web Development</li>
                      <li className="mb-4">Database Maintenance</li>
                      <li className="mb-4">Graphic Design</li>
                      <li className="mb-4">POS Software</li>
                    </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
