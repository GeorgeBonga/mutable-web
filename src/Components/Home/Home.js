import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutHome from "./AboutHome";
import Hero from "./Hero";
import MainHero from "./MainHero";
const Home = () => {
  return (
    <div>

      <div>
        <MainHero />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <AboutHome />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
