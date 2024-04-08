// import React from 'react'
import { useEffect, useState } from "react";
import { trendingMovies } from "../data/homeMovieDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { fetchLatestNovies } from "../apis/movieApi";
import { useNavigate } from "react-router-dom";
import { Movies, useMovieData } from "../contexts/MovieProvider";
import DisplayedMovies from "../components/ui/DisplayedMovies";

const Home = () => {
  const [activeIndx, setActiveIndx] = useState(0);
  const [slideShow, setSlideShow] = useState(false);
  const [filteredLM, setFilteredLM] = useState<Movies[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { latestMovies, setLatestMovies } = useMovieData();
  const [moviePoster, setMoviePoster] = useState("");

  // console.log("filteredLM", filteredLM);

  useEffect(() => {
    getLatestMovies();
  }, []);

  const getLatestMovies = async () => {
    const res = await fetchLatestNovies(
      "primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-03-01"
    );
    // console.log("res from getLatestmovies", res);
    setLatestMovies(res.results);
    setFilteredLM(() => res.results.slice(0, 6));
  };

  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    const recordsPerPage = 6;
    const lastIndx = currentPage * recordsPerPage;
    const firstIndx = lastIndx - recordsPerPage;
    console.log("currentpage", { currentPage, lastIndx, firstIndx });
    setFilteredLM(() => latestMovies.slice(firstIndx, lastIndx));
  }, [currentPage]);

  return (
    <div className="w-full">
      {/* HOME HEADER */}
      <div className="h-screen">
        {trendingMovies.map((movie, index) => (
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
              } absolute bottom-20 left-4 lg:left-16 xl:left-20 flex items-center gap-4 md:gap-6`}
            >
              <button className="bg-gray-200 text-white text-xl md:text-2xl px-2 md:px-6 xl:px-16 py-2 md:py-3 rounded-md bg-opacity-40 scale-105 transition duration-300 ease-in-out">
                Subscribe to Watch
              </button>
              <Tooltip title="WatchList" color="blue">
                <button className="bg-gray-200 text-white text-xl md:text-2xl px-6 py-2 md:py-3 rounded-md bg-opacity-40 hover:scale-105 transition duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Tooltip>
            </div>
          </div>
        ))}

        {/* MOVIE LIST NAVIGATION */}
        <div className="flex items-center justify-center gap-1 md:gap-4 absolute bottom-40 lg:bottom-20 xl:right-20 lg:right-8 right-2 pl-2">
          {trendingMovies.map((movie, index) => (
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

      {/* LATEST RELEASE SECTION */}
      <div
        className="w-full py-4 pl-8 border border-red-500 pb-20"
        onMouseEnter={() => setSlideShow(true)}
        onMouseLeave={() => setSlideShow(false)}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl pb-4">Latest Releases</h1>
          {slideShow && (
            <button
              onClick={() => navigate(`/home/latest-movie-list`)}
              className="pr-10 text-lg text-gray-200 hover:text-gray-400 font-semibold"
            >
              View All
            </button>
          )}
        </div>
        <div className={`overflow-x-auto scrollbar-hide relative`}>
          {/* PREV NAVIGATION BTN  */}
          {slideShow && currentPage > 1 && (
            <div className="absolute left-0 top-0 bg-gray-900 text-white w-16 h-72 flex items-center justify-center bg-opacity-40">
              <button
                onClick={onPrev}
                className="hover:scale-110 hover:text-gray-200 active:text-green-500"
              >
                <FontAwesomeIcon className="size-8" icon={faChevronLeft} />
              </button>
            </div>
          )}

          <div className="flex items-center gap-4 static z-10 ">
            {filteredLM &&
              filteredLM.map((movie) => (
                <DisplayedMovies
                  key={movie.id}
                  setMoviePoster={setMoviePoster}
                  movie={movie}
                />
              ))}
          </div>
          {/* NEXT NAVIGATION BTN  */}
          {slideShow && currentPage < 4 && (
            <div className="absolute right-0 top-0 bg-gray-900 text-white w-16 h-72 flex items-center justify-center bg-opacity-40">
              <button
                onClick={onNext}
                className="hover:scale-110 hover:text-gray-200 active:text-green-500"
              >
                <FontAwesomeIcon className="size-8" icon={faChevronRight} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
