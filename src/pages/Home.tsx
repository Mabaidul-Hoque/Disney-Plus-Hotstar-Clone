// import React from 'react'
import { useState } from "react";
import { trendingMovies } from "../data/homeMovieDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";

const Home = () => {
  const [activeIndx, setActiveIndx] = useState(0);
  return (
    <div>
      {/* HOME HEADER */}
      <div className="">
        {trendingMovies.map((movie, index) => (
          <div key={movie.id}>
            <div className="">
              {/* MOVIE POSTER */}
              <img
                src={movie.poster}
                alt={movie.title}
                className={`${
                  activeIndx === index ? "block" : "hidden"
                } h-[100vh] w-full object-cover -mt-4`}
              />
              {/* MOVIE DETAILS */}
              <div
                className={`max-w-96 ${
                  activeIndx === index ? "block" : "hidden"
                } absolute top-32 left-20 flex flex-col gap-4`}
              >
                {/* TITLE */}
                <h1
                  className={`text-6xl font-bold font-serif italic tracking-widest ${movie.titleColor}`}
                >
                  {movie.title}
                </h1>
                <div className="flex items-center gap-2">
                  <p>{movie.releaseDate}</p>
                  <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  {movie.type === "movie" ? (
                    <p>{movie.duration}</p>
                  ) : (
                    <p>{movie.season} season</p>
                  )}
                  <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  <p>
                    {movie.language.length === 1
                      ? movie.language[0]
                      : `${movie.language.length} language`}
                  </p>
                  <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  <p>{movie.certificate}</p>
                </div>
                {/* PLOT */}
                <p className="text-sm">{movie.plot}</p>
                {/* GENRE */}
                <ul className="list-none flex items-center gap-4">
                  {movie.genre.length > 0 &&
                    movie.genre.map((genre, index) => (
                      <li key={index}>{genre}</li>
                    ))}
                </ul>
              </div>
              {/* SUBSCRIBE TO WATCH IS USER NOT LOGGED IN ELSE WATCH */}
              <div
                className={`${
                  activeIndx === index ? "block" : "hidden"
                } absolute bottom-20 left-20 flex items-center gap-6`}
              >
                <button className="bg-gray-200 bg-transparent text-white text-2xl px-16 py-3 rounded-md bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out">
                  Subscribe to Watch
                </button>
                <Tooltip title="WatchList" color="blue">
                  <button className="bg-gray-200 bg-transparent text-white text-2xl px-6 py-3 rounded-md bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </Tooltip>
              </div>

              {/* MOVIE LIST NAVIGATION */}
              <div className="flex items-center justify-center gap-4 border border-gray-500 ">
                <img
                  width={100}
                  className={`absolute bottom-20 ${
                    index === 0
                      ? "right-[40%]"
                      : index === 1
                      ? "right-[32%]"
                      : index === 2
                      ? "right-[24%]"
                      : index === 3
                      ? "right-[16%]"
                      : index === 4
                      ? "right-[8%]"
                      : "right-[0%]"
                  } rounded-md cursor-pointer hover:scale-125 hover:z-20 transition duration-300 ease-in-out ${
                    activeIndx === index && "scale-125 z-10"
                  }`}
                  src={movie.poster}
                  alt={movie.title}
                  onClick={() => setActiveIndx(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
