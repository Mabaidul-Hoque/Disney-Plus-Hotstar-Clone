// import React from 'react'
import { useEffect } from "react";
import { trendingShows } from "../data/homeMovieDetails";

import { fetchMovies } from "../apis/movieApi";
import { useMovieData } from "../contexts/MovieProvider";
import { ShowLists, TopTrendingShows } from "../components/ui";
import { fetchTVSeries } from "../apis/tvApi";

const Home = () => {
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
      <TopTrendingShows shows={trendingShows} />
      {/* LATEST RELEASE SECTION */}
      <div className="py-10 pl-2">
        <ShowLists
          movies={displayLists.latestMovies}
          catTitle="Latest Releases"
          movieListRouteByCat="latest-movie-list"
        />
      </div>

      {/* ACTION MOVIE SECTION */}
      <div className="py-10">
        <ShowLists
          movies={displayLists.actionMovies}
          catTitle="Action Movies"
          movieListRouteByCat="action-movie-list"
        />
      </div>

      {/* KIDS TV SERIES SECTION */}
      <div className="py-10">
        <ShowLists
          movies={displayLists.kidsShows}
          catTitle="Kids"
          movieListRouteByCat="kids-tv-series-list"
        />
      </div>

      {/* ROMANTIC MOVIE SECTION */}
      <div className="py-10">
        <ShowLists
          movies={displayLists.romanticMovies}
          catTitle="Romantic Movies"
          movieListRouteByCat="romantic-movie-list"
        />
      </div>

      {/* SCIENCE FICTION MOVIE SECTION */}
      <div className="py-10">
        <ShowLists
          movies={displayLists.sciFiMovies}
          catTitle="Science Fiction Movies"
          movieListRouteByCat="sciFi-movie-list"
        />
      </div>

      {/* COMEDY TV SERIES SECTION */}
      <div className="py-10">
        <ShowLists
          movies={displayLists.comedyTVSeries}
          catTitle="Comedy TV Series"
          movieListRouteByCat="comedy-tv-series-list"
        />
      </div>

      {/* CRIME TV SERIES SECTION */}
      <div className="py-10">
        <ShowLists
          movies={displayLists.crimeTVSeries}
          catTitle="Crime TV Series"
          movieListRouteByCat="crime-tv-series-list"
        />
      </div>

      {/* NEWS TV SERIES SECTION */}
      <div className="py-10">
        <ShowLists
          movies={displayLists.news}
          catTitle="News"
          movieListRouteByCat="news-tv-series-list"
        />
      </div>
    </div>
  );
};

export default Home;
