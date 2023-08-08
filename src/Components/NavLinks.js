import React from "react";
import { HashLink } from "react-router-hash-link";
import SearchBar from "./SearchBar";

const Navlinks = () => {
  return (
    <div className="flex items-center bg-blue-400 p-4">
      <HashLink
        className="px-4 font-extrabold text-white hover:text-blue-900"
        smooth
        to="/"
      >
        About
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-white hover:text-blue-900"
        smooth
        to="/"
      >
        Domain & Hosting
      </HashLink>
      <HashLink
        className="px-2 font-extrabold text-white hover:text-yellow-900"
        to="/"
      >
        Services
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-white hover:text-blue-900"
        to="/"
      >
        Contact
      </HashLink>
      <div className="pl-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navlinks;
