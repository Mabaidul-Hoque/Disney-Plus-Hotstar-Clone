import React, { useState } from "react";
import { Movies } from "../../contexts/MovieProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";

interface DisplayedMoviesProps {
  setMoviePoster: (value: string) => void;
  movie: Movies;
  index: number;
  pathname: string;
}

const DisplayedMovies: React.FC<DisplayedMoviesProps> = ({
  setMoviePoster,
  movie,
  index,
  pathname,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [activeID, setActiveID] = useState(0);
  return (
    <>
      <div
        className="flex-shrink-0 cursor-pointer "
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
          <div
            className={`${
              pathname === "home" && index === 0 && "hover:translate-x-10"
            } h-64 xl:h-72 hover:scale-125 transition-transform duration-500  ease-in-out flex flex-col items-start gap-1 bg-black rounded-lg pb-2`}
          >
            {/* IMGAE */}
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              }
              alt={movie.title || movie.name}
              className="w-full h-32 object-cover object-top rounded-t-lg "
            />
            {/* TITLE */}
            <h1 className="px-2 text-xl italic tracking-widest max-w-48 overflow-hidden text-ellipsis text-nowrap">
              {movie.title || movie.name}
            </h1>
            {/* BTN TO WTACH */}
            <div className="px-2 flex items-center gap-4">
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
              <p>
                {(movie.release_date && movie.release_date.substring(0, 4)) ||
                  (movie.first_air_date &&
                    movie.first_air_date.substring(0, 4))}
              </p>
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
            alt={movie.title || movie.name}
            className="w-48 xl:w-[12.8rem] h-64 xl:h-72 rounded-lg z-50 bg-black"
          />
        )}
      </div>
    </>
  );
};

export default DisplayedMovies;
