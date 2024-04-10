import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { TrendingShows } from "../../data/showDetails";

interface TopTrendingShowsProps {
  shows: TrendingShows[];
}

const TopTrendingShows: React.FC<TopTrendingShowsProps> = ({ shows }) => {
  const [activeIndx, setActiveIndx] = useState(0);
  return (
    <div className="h-screen">
      {shows.map((movie, index) => (
        <div
          key={movie.id}
          className={`${
            activeIndx === index ? "block" : "hidden"
          } h-screen  w-full`}
        >
          {/* MOVIE POSTER */}
          <img
            src={movie.poster}
            alt={movie.title}
            className={`${
              activeIndx === index ? "block" : "hidden"
            } h-screen  w-full object-cover`}
          />
          {/* MOVIE DETAILS */}
          <div
            className={`max-w-96 ${
              activeIndx === index ? "block" : "hidden"
            } absolute top-10 md:top-32 left-4 sm:left-20 flex flex-col gap-4`}
          >
            {/* TITLE */}
            <h1
              className={`text-5xl md:text-6xl font-bold font-serif italic tracking-widest ${movie.titleColor}`}
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
            <p className="text-md">{movie.plot}</p>
            {/* GENRE */}
            <ul className="list-none flex items-center gap-4">
              {movie.genre.length > 0 &&
                movie.genre.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
          </div>
          {/* SUBSCRIBE TO WATCH IS USER NOT LOGGED IN ELSE WATCH */}
          <div
            className={`${
              activeIndx === index ? "block" : "hidden"
            } absolute bottom-20 left-4 lg:left-16 xl:left-20 flex items-center gap-4 md:gap-6`}
          >
            <button className="bg-gray-200 text-white text-xl md:text-2xl px-2 md:px-6 xl:px-16 py-2 md:py-3 rounded-md bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out backdrop-filter backdrop-blur-md">
              Subscribe to Watch
            </button>
            <Tooltip title="WatchList" color="blue">
              <button className="bg-gray-200 text-white text-xl md:text-2xl px-6 py-2 md:py-3 rounded-md bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out backdrop-filter backdrop-blur-md">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Tooltip>
          </div>
        </div>
      ))}

      {/* MOVIE LIST NAVIGATION */}
      <div className="flex items-center justify-center gap-1 md:gap-4 absolute bottom-40 lg:bottom-20 xl:right-20 lg:right-8 right-4 pl-2">
        {shows.map((movie, index) => (
          <li
            key={movie.id}
            className={`list-none cursor-pointer hover:scale-125 hover:z-20 transition duration-300 ease-in-out ${
              activeIndx === index
                ? "scale-125 z-10 border border-white rounded-md opacity-100"
                : "opacity-80"
            }`}
          >
            <img
              width={100}
              className="rounded-md"
              src={movie.poster}
              alt={movie.title}
              onClick={() => setActiveIndx(index)}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingShows;
