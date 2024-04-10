// import React from 'react'

import { useEffect } from "react";
import { fetchMovieGenres } from "../apis/genreApi";
import { TopTrendingShows } from "../components/ui";
import { trendingMovies } from "../data/showDetails";
import { MovieList } from "../components/movies";
import { useMovieData } from "../contexts/MovieProvider";

const Movie = () => {
  const { genres, setGenres } = useMovieData();

  useEffect(() => {
    getMovieGenres();
  }, []);
  const getMovieGenres = async () => {
    const res = await fetchMovieGenres();
    // console.log("res from movieGnere", res);
    setGenres((prev) => ({
      ...prev,
      movieGenres: res.genres,
    }));
  };
  return (
    <div className="">
      {/* MOVIE HEADER */}
      <TopTrendingShows shows={trendingMovies} />

      {/* DISPLAY MOVIES BY GENRE */}
      <div>
        {genres.movieGenres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
