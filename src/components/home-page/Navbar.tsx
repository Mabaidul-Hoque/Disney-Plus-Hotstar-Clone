// import React from "react";

import {
  faCircleUser,
  faClapperboard,
  faHouse,
  faMagnifyingGlass,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };
  return (
    <>
      <div className="hidden md:flex items-center justify-between h-16 bg-black px-2 sm:px-20 md:px-4 lg:px-20 xl:px-24 py-4 ">
        {/* LEFT DISNEY LOGO */}
        <img
          width={50}
          className="rounded-md hidden lg:block"
          src="/disneyplus-hotstar-logo.jpg"
          alt="disney_logo"
        />
        {/* NAV_ITEMS CONTAINER */}
        <div className="">
          <ul className="flex items-center justify-center md:gap-5 lg:gap-10">
            <li>
              <Link
                to={"/home"}
                className={`${
                  pathname === "/" || pathname === "/home"
                    ? "text-violet-500"
                    : "hover:text-violet-400"
                }`}
              >
                <FontAwesomeIcon className="size-6 pr-2" icon={faHouse} />
                <span className="text-xl">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/movie"}
                className={`flex items-center ${
                  pathname === "/movie"
                    ? "text-violet-500"
                    : "hover:text-violet-400"
                }`}
              >
                <FontAwesomeIcon
                  className="size-6 pr-2"
                  icon={faClapperboard}
                />
                <span className="text-xl">Movie</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/tv"}
                className={`flex items-center ${
                  pathname === "/tv"
                    ? "text-violet-500"
                    : "hover:text-violet-400"
                }`}
              >
                <FontAwesomeIcon className="size-6 pr-2" icon={faTv} />
                <span className="text-xl">TV</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* SEARCH CONTAINER */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none focus:border focus:border-blue-500 rounded-l-full p-2 text-black pl-4 hover:bg-gray-200"
          />
          <div className="bg-white w-12 h-10 border-l border-gray-400 flex items-center justify-center pl-2 rounded-r-full hover:bg-gray-200">
            <FontAwesomeIcon
              className="size-6 pr-2 cursor-pointer text-gray-700 hover:scale-110 active:text-green-500"
              icon={faMagnifyingGlass}
              onClick={handleSearch}
            />
          </div>
        </div>
        {/* MY SPACE CONTAINER */}
        <div>
          <Link to={"/mySpace"} className="flex items-center">
            <FontAwesomeIcon className="size-6 pr-2" icon={faCircleUser} />
            <span className="text-xl">My Space</span>
          </Link>
        </div>
      </div>

      {/* MOBILE RESPONSIVE BOTTOM NAVABR */}
      <div className="flex md:hidden items-center justify-between h-16 bg-black px-2 sm:px-20 md:px-4 lg:px-20 xl:px-24 py-4 absolute bottom-0 w-full">
        <ul className="flex items-center justify-between">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/search"}>Search</Link>
          </li>
          <li>
            <Link to={"/movie"}>Movie</Link>
          </li>
          <li>
            <Link to={"/tv"}>TV</Link>
          </li>
          <li>
            <Link to={"/mySpace"}>MySpace</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
