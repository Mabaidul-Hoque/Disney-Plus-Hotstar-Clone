// import React from "react";

import {
  faCircleUser,
  faClapperboard,
  faHouse,
  faMagnifyingGlass,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchShowsBySearch } from "../../apis/searchApis";
import { useMovieData } from "../../contexts/MovieProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  const [activeIndx, setActiveIndx] = useState(1);
  const [showBackdrop, setShowbackdrop] = useState(false);
  const { setSearchResults, searchTerm, setSearchTerm } = useMovieData();
  const navigate = useNavigate();

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 100) {
        setShowbackdrop(true);
      } else {
        setShowbackdrop(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const handleSearch = async () => {
    console.log("Searching for:", searchTerm);
    const res = await fetchShowsBySearch(searchTerm);
    console.log("res for search", res);
    setSearchResults(res.results);
    navigate("/search");
  };
  return (
    <>
      <nav
        className={`w-full hidden md:flex items-center justify-between h-16 px-2 sm:px-20 md:px-4 lg:px-20 xl:px-24 py-4 fixed top-0 ${
          showBackdrop && "backdrop-filter backdrop-blur-md"
        } transition-transform duration-500 ease-in-out bg-black bg-opacity-10`}
      >
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
      </nav>

      {/* MOBILE RESPONSIVE BOTTOM NAVABR */}
      <nav className="md:hidden  h-16  px-2 sm:px-20 md:px-4 lg:px-20 xl:px-24 py-4 fixed bottom-0 w-full backdrop-filter backdrop-blur-md">
        <ul className="flex items-center justify-between">
          {/* HOME */}
          <li
            className={`cursor-pointer  ${
              activeIndx === 1 ? "text-green-600" : "hover:text-green-500"
            }`}
            onClick={() => setActiveIndx(1)}
          >
            <Link to={"/home"} className="flex flex-col ">
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </Link>
          </li>
          {/* SEARCH */}
          <li
            className={`cursor-pointer  ${
              activeIndx === 2 ? "text-green-600" : "hover:text-green-500"
            }`}
            onClick={() => setActiveIndx(2)}
          >
            <Link to={"/search"} className="flex flex-col ">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Search</span>
            </Link>
          </li>
          {/* MOVIE */}
          <li
            className={`cursor-pointer  ${
              activeIndx === 3 ? "text-green-600" : "hover:text-green-500"
            }`}
            onClick={() => setActiveIndx(3)}
          >
            <Link to={"/movie"} className="flex flex-col ">
              <FontAwesomeIcon icon={faClapperboard} />
              <span>Movie</span>
            </Link>
          </li>
          <li
            className={` cursor-pointer  ${
              activeIndx === 4 ? "text-green-600" : "hover:text-green-500"
            }`}
            onClick={() => setActiveIndx(4)}
          >
            <Link to={"/tv"} className="flex flex-col">
              <FontAwesomeIcon icon={faTv} />
              <span>TV</span>
            </Link>
          </li>
          <li
            className={`cursor-pointer  ${
              activeIndx === 5 ? "text-green-600" : "hover:text-green-500"
            }`}
            onClick={() => setActiveIndx(5)}
          >
            <Link to={"/mySpace"} className="flex flex-col ">
              <FontAwesomeIcon icon={faCircleUser} />
              <span>MySpace</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
