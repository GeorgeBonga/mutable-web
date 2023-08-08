import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-blue-400 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-md font-medium mb-6 bg-blue-400">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Instagram"
                    >
                      <div className="flex items-center justify-center rounded bg-white p-2">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          style={{
                            fontWeight: "bolder",
                            fontSize: "30px",
                            color: "#00A6E4",
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Instagram"
                    >
                      <div className="flex items-center justify-center rounded bg-white p-2">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{
                            fontWeight: "bolder",
                            fontSize: "30px",
                            color: "#00A6E4",
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Instagram"
                    >
                      <div className="flex items-center justify-center bg-white p-2 rounded">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          style={{
                            fontWeight: "bolder",
                            fontSize: "30px",
                            color: "#00A6E4",
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Instagram"
                    >
                      <div className="flex items-center justify-center  bg-white p-2 rounded">
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          style={{
                            fontWeight: "bolder",
                            fontSize: "30px",
                            color: "#00A6E4",
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2nd block */}

            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4 bg-blue-400">
                SERVICES PROVIDED
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Domain and Hosting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Business Card design
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3th block */}

            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-blue-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">Mutable Tech</h3>
                <div className="text-md font-medium text-gray-600">
                <div className="flex flex-col">
                  <h2 className="text-2xl">Office Address</h2>
                  <p className="text-gray-400">Westi,Mwihoko, Master State</p>
                </div>
                  <p className="mt-4">
                    <span className="text-blue-900">Email:</span>{" "}
                    mutabletechke@gmail.com 
                  </p>
                  <p>
                    <span className="text-blue-900">Phone:</span> +2547 947 84462
                  </p>
                  <p>
                    <span className="text-blue-900">Phone:</span> +254 7697 64285

                  </p>
                </div>
              </div>
            </div>

         
          </div>

          {/* Middle links area: Blocks */}
          <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto bg-blue-400">
            <ul className="text-md flex flex-row justify-center items-center h-full space-x-4">
              <li className="mb-2">
                <HashLink
                  to="#"
                  className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  About
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#"
                  className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Domain & Hosting
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#"
                  className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Services
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  to="#"
                  className="text-white hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/*  bonga area: Blocks */}
          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full  px-4 mx-auto">
              <div className="text-sm text-white font-semibold py-1 text-center whitespace-nowrap">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <HashLink to="#" className="hover:text-gray-900">
                  Mutable-Tech
                </HashLink>
                . All rights reserved | Designed & Developed By MutableTech
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
