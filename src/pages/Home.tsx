// import React from 'react'
import { useEffect, useState } from "react";
import { trendingMovies } from "../data/homeMovieDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { fetchMovies } from "../apis/movieApi";
import { useMovieData } from "../contexts/MovieProvider";
import { HomeMovies } from "../components/ui";
import { fetchTVSeries } from "../apis/tvApi";

const Home = () => {
  const [activeIndx, setActiveIndx] = useState(0);
  const { displayLists, setDisplayLists } = useMovieData();

  useEffect(() => {
    getLatestMovies(
      "primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-03-01"
    );
    getActionMovies("with_genres=28");
    getRomanticMovies("with_genres=10749");
    getSciFiMovies("with_genres=878");
    getComedyTVSeries("with_genres=35");
    getCrimeTVSeries("with_genres=80");
    getNewsTVSeries("with_genres=10763");
    getKidsTVSeries("with_genres=10762");
  }, []);

  const getLatestMovies = async (filterItems: string) => {
    const res = await fetchMovies(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      latestMovies: res.results,
    }));
  };

  const getActionMovies = async (filterItems: string) => {
    const res = await fetchMovies(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      actionMovies: res.results,
    }));
  };

  const getRomanticMovies = async (filterItems: string) => {
    const res = await fetchMovies(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      romanticMovies: res.results,
    }));
  };

  const getSciFiMovies = async (filterItems: string) => {
    const res = await fetchMovies(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      sciFiMovies: res.results,
    }));
  };

  const getComedyTVSeries = async (filterItems: string) => {
    const res = await fetchTVSeries(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      comedyTVSeries: res.results,
    }));
  };

  const getCrimeTVSeries = async (filterItems: string) => {
    const res = await fetchTVSeries(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      crimeTVSeries: res.results,
    }));
  };

  const getNewsTVSeries = async (filterItems: string) => {
    const res = await fetchTVSeries(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      news: res.results,
    }));
  };

  const getKidsTVSeries = async (filterItems: string) => {
    const res = await fetchTVSeries(filterItems, 1);
    setDisplayLists((prev) => ({
      ...prev,
      kidsShows: res.results,
    }));
  };

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
      <div className="py-10 pl-2">
        <HomeMovies
          movies={displayLists.latestMovies}
          catTitle="Latest Releases"
          movieListRouteByCat="latest-movie-list"
        />
      </div>

      {/* ACTION MOVIE SECTION */}
      <div className="py-10">
        <HomeMovies
          movies={displayLists.actionMovies}
          catTitle="Action Movies"
          movieListRouteByCat="action-movie-list"
        />
      </div>

      {/* KIDS TV SERIES SECTION */}
      <div className="py-10">
        <HomeMovies
          movies={displayLists.kidsShows}
          catTitle="Kids"
          movieListRouteByCat="kids-tv-series-list"
        />
      </div>

      {/* ROMANTIC MOVIE SECTION */}
      <div className="py-10">
        <HomeMovies
          movies={displayLists.romanticMovies}
          catTitle="Romantic Movies"
          movieListRouteByCat="romantic-movie-list"
        />
      </div>

      {/* SCIENCE FICTION MOVIE SECTION */}
      <div className="py-10">
        <HomeMovies
          movies={displayLists.sciFiMovies}
          catTitle="Science Fiction Movies"
          movieListRouteByCat="sciFi-movie-list"
        />
      </div>

      {/* COMEDY TV SERIES SECTION */}
      <div className="py-10">
        <HomeMovies
          movies={displayLists.comedyTVSeries}
          catTitle="Comedy TV Series"
          movieListRouteByCat="comedy-tv-series-list"
        />
      </div>

      {/* CRIME TV SERIES SECTION */}
      <div className="py-10">
        <HomeMovies
          movies={displayLists.crimeTVSeries}
          catTitle="Crime TV Series"
          movieListRouteByCat="crime-tv-series-list"
        />
      </div>

      {/* NEWS TV SERIES SECTION */}
      <div className="py-10">
        <HomeMovies
          movies={displayLists.news}
          catTitle="News"
          movieListRouteByCat="news-tv-series-list"
        />
      </div>
    </div>
  );
};

export default Home;
