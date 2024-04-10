// import React from 'react'

import { useEffect } from "react";
import { TopTrendingShows } from "../components/ui";
import { useMovieData } from "../contexts/MovieProvider";
import { trendingMovies } from "../data/homeMovieDetails";
import { fetchTVGenres } from "../apis/genreApi";
import { MovieList } from "../components/movies";
import { TVLists } from "../components/tv-series";

const TV = () => {
  const { genres, setGenres } = useMovieData();

  useEffect(() => {
    getTVGenres();
  }, []);
  const getTVGenres = async () => {
    const res = await fetchTVGenres();
    console.log("res from movieGnere", res);
    setGenres((prev) => ({
      ...prev,
      tvGenres: res.genres,
    }));
  };

  return (
    <div>
      {/* MOVIE HEADER */}
      <TopTrendingShows shows={trendingMovies} />

      {/* DISPLAY TV SERIES BY GENRE */}
      <div>
        {genres.tvGenres.map((genre) => (
          <TVLists key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default TV;
