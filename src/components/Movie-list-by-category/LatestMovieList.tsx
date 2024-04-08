import React, { useState } from "react";

import { Movies } from "../../contexts/MovieProvider";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

interface LatestMovieListProps {
  catTitle: string;
  movies: Movies[];
}
const LatestMovieList: React.FC<LatestMovieListProps> = ({
  catTitle,
  movies,
}) => {
  const [moviePoster, setMoviePoster] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [activeID, setActiveID] = useState(0);
  //   console.log("movies", movies);

  return (
    <div
      className="px-2 sm:px-20 md:px-4 lg:px-20 xl:px-24"
      style={{ backgroundImage: `url(${moviePoster})` }}
    >
      <h1
        className="text-6xl font-semibold font-mono italic tracking-widest text-center py-10 pt-40"
        style={{
          background: "linear-gradient(to bottom, #39ECE6, #8539EC)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {catTitle}
      </h1>

      {/* ALL MOVIES */}
      <div className="flex items-center flex-wrap justify-between gap-6 py-10">
        {movies &&
          movies.map((movie) => (
            <li
              key={movie.id}
              className="flex-shrink-0 list-none cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              onMouseEnter={() => {
                setActiveID(movie.id);
                setMoviePoster(
                  `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                );
                setShowContent(true);
              }}
              onMouseLeave={() => setShowContent(false)}
            >
              {showContent && activeID === movie.id ? (
                <div className="scale-150 transition duration-300 ease-in-out flex flex-col items-start gap-1 bg-black rounded-lg pb-2">
                  {/* IMGAE */}
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                    }
                    alt={movie.title}
                    className="w-full h-24 object-cover object-top rounded-t-lg"
                  />
                  {/* TITLE */}
                  <h1 className="px-2 text-2xl italic tracking-widest max-w-48 overflow-hidden text-ellipsis text-nowrap">
                    {movie.title}
                  </h1>
                  {/* BTN TO WTACH */}
                  <div className="px-2 flex items-center gap-4 py-1">
                    <button
                      className="bg-gray-200 text-gray-800 px-8 py-1 rounded hover:bg-gray-400 hover:text-white hover:scale-105 transition duration-300 ease-in-out"
                      style={{ fontSize: 10, fontWeight: 500 }}
                    >
                      <FontAwesomeIcon className="pr-1" icon={faPlay} />
                      Watch Now
                    </button>
                    <Tooltip title="WatchList" color="green">
                      <button
                        className="bg-gray-200 text-gray-800 text-md px-4 py-1 rounded hover:bg-gray-400 hover:scale-105 hover:text-white transition duration-300 ease-in-out"
                        style={{ fontSize: 10, fontWeight: 500 }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </Tooltip>
                  </div>
                  {/* RATING RELEASE YEAR CONTAINER */}
                  <div className="max-w-48 flex items-center gap-2 px-2 text-sm">
                    {/* RELEASE YEAR */}
                    <p>{movie.release_date.substring(0, 4)}</p>
                    <div className="w-1 h-1 bg-white rounded-full" />
                    {/* IMDB RATINGS */}
                    <p>{movie.vote_average} / 10</p>
                    <div className="w-1 h-1 bg-white rounded-full" />
                    {/* LANGUAGE */}
                    <p>{movie.original_language}</p>
                  </div>
                  {/* OVERVIEW */}
                  <p className="w-48 text-[10px] max-h-24 overflow-hidden text-custom-ellipsis px-2">
                    {movie.overview}
                  </p>
                </div>
              ) : (
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  }
                  alt={movie.title}
                  className="w-52 h-72 rounded-lg"
                />
              )}
            </li>
          ))}
      </div>
    </div>
  );
};

export default LatestMovieList;